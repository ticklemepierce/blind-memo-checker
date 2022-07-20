import React, {useState, useRef, useEffect} from 'react';
import { Alg } from "cubing/alg";
import { PuzzleID } from "cubing/twisty";
import { experimental3x3x3KPuzzle, KPuzzle } from "cubing/kpuzzle";
import { cube2x2x2KPuzzleDefinition } from "../../2x2x2.kpuzzle.json";
import isEqual from 'lodash.isequal';
import pick from 'lodash.pick';
import intersection from 'lodash.intersection';
import { conjugateMap } from '../../conjugates.json';
import { swapMap } from '../../swaps.json';
import { bufferMap } from '../../buffers.json';
import { specialCasesMap } from '../../special-cases.json';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { asyncInterval } from '../../utils';
import styles from './styles.module.scss';
import { useAppContext } from '../app-context';
import { CubeRotationControls } from './cube-rotation-controls';
import { randomScrambleForEvent } from 'cubing/scramble';
import { setDebug } from "cubing/search";
import { Stackmat, Packet } from 'stackmat'

const KPUZZLE_MAP = {
  '2x2x2': new KPuzzle(cube2x2x2KPuzzleDefinition),
  '3x3x3': experimental3x3x3KPuzzle,
}

export const ControlPanel = () => {
  const { twistyPlayer } = useAppContext();
  const [isSolved, setIsSolved] = useState(false);
  const [scramble, setScramble] = useState<Alg>(new Alg(''));
  const [parity, setParity] = useState(false);
  const [edgeSolution, setEdgeSolution] = useState<string | undefined>();
  const [cornerSolution, setCornerSolution] = useState<string | undefined>();
  const [selectedPuzzle, setSelectedPuzzle] = useLocalStorage<PuzzleID>('selectedPuzzle', '3x3x3');
  const [selectedMethod, setSelectedMethod] = useLocalStorage('selectedMethod', 'm2');

  const stateAlg = useRef<Alg>(new Alg(''));

  useEffect(() => {
    setDebug({forceStringWorker: true});

    const stackmat = new Stackmat()

    stackmat.on('started', (packet: Packet) => {
        console.log('Timer started')
    })

    stackmat.on('stopped', (packet: Packet) => {
        console.log('Timer stopped at: ' + packet.timeAsString)
    })

    stackmat.start()
  });

  const performAlg = async (alg: Alg, tempo: number = 1): Promise<void> => {
    if (alg.toString() === '') {
      return Promise.resolve();
    }
    twistyPlayer.tempoScale = tempo;
    twistyPlayer.alg = alg;
    twistyPlayer.jumpToStart();
    twistyPlayer.play();
  
    let detectedStart = false;
    await asyncInterval(async () => {
      const playingInfo = await twistyPlayer.buttons.model?.playingInfo.get();
      if (!detectedStart && playingInfo) {
        detectedStart = playingInfo?.playing;
      } else {
        return !playingInfo?.playing;
      }
    }, 100);
  
    twistyPlayer.alg = new Alg('');
    stateAlg.current = stateAlg.current?.concat(alg); 
    twistyPlayer.experimentalSetupAlg = stateAlg.current;
    return Promise.resolve();
  }

  const generateScramble = async (e) => {
    e.preventDefault();
    const scramble = await randomScrambleForEvent('333')
    setScramble(scramble);
    twistyPlayer.experimentalSetupAlg = scramble;
    twistyPlayer.alg = new Alg('');
  }

  const scrambleChange = (e) => {
    setIsSolved(false);
    const newScramble = new Alg(e.target.value);
    setScramble(newScramble);
    twistyPlayer.experimentalSetupAlg = scramble;
    twistyPlayer.alg = new Alg('');
  }

  const testMemoryLetters = async (e) => {
    e.preventDefault();
    if (!scramble) {
      alert('Need scramble first!');
      return;
    }
    twistyPlayer.alg = new Alg('');
    twistyPlayer.experimentalSetupAlg = scramble;

    const cornerLetters = cornerSolution?.replace(/\s/g, '').toLowerCase().split('');
    const edgeLetters = edgeSolution?.replace(/\s/g, '').toLowerCase().split('');

    if (intersection(bufferMap[selectedMethod].edges, edgeLetters).length) {
      alert('Cannot have buffer in solution. Please try again.');
      return;
    }

    if (intersection(bufferMap.op.corners, cornerLetters).length) {
      alert('Cannot have buffer in solution. Please try again.');
      return;
    }

    stateAlg.current = scramble;

    if (edgeLetters) {
      for (const edge of edgeLetters) {
        if (selectedMethod === 'm2' && Object.prototype.hasOwnProperty.call(specialCasesMap.m2, edge)) {
          await performAlg(specialCasesMap.m2[edge]);
        } else {
          console.log(conjugateMap[selectedMethod]);
          const conjugate = conjugateMap[selectedMethod].edges[edge];
          await performAlg(conjugate);
          await performAlg(swapMap[selectedMethod].edges, selectedMethod === 'op' ? 10 : 1);
          await performAlg(conjugate.invert());
        }
      }
    }

    if (parity) {
      await performAlg(swapMap[selectedMethod].parity, 7);
    }

    if (cornerLetters) {
      for (const corner of cornerLetters) {
        const conjugate = conjugateMap.op.corners[corner];
        await performAlg(conjugate);
        await performAlg(swapMap.op.corners, 10);
        await performAlg(conjugate.invert());
      }
    }
    const cubeState = pick(KPUZZLE_MAP[selectedPuzzle].startState().applyAlg(stateAlg.current).stateData, 'EDGES', 'CORNERS');
    const solvedState = pick(KPUZZLE_MAP[selectedPuzzle].startState().stateData, 'EDGES', 'CORNERS');
    setIsSolved(isEqual(cubeState, solvedState));
  }

  const setPuzzle = (e) => {
    twistyPlayer.puzzle = e.target.value;
    setSelectedPuzzle(e.target.value);
  };

  return (
    <div className={styles.controlsWrapper}>
      <CubeRotationControls scramble={scramble} setScramble={setScramble}/>
      <form onSubmit={generateScramble}>
        <label>
          <p>Scramble</p>
          <textarea name='scramble' value={scramble.toString()} onChange={scrambleChange}/>
        </label>
        <br/>
        <br/>
        <input type="submit" value="Generate" />
      </form>
      <form onSubmit={testMemoryLetters}>
        <label>
          Corner Letters:
          <input type="text" name='corners' onChange={(e) => setCornerSolution(e.target.value)} />
        </label>
        {selectedPuzzle === '3x3x3' && 
          <>
            <br/>
            <label>
              Edge Letters:
              <input type="text" name='edges' onChange={(e) => setEdgeSolution(e.target.value)} />
            </label>
            <br/>
            <label>
              Parity:
              <input name="parity" type="checkbox" checked={parity} onChange={() => setParity(!parity)} />
            </label>
          </>
        }
        <br/>
        <input type="submit" value="Submit" />
      </form>
      <form>
        <label>
          Cube type:
          <select value={selectedPuzzle} onChange={setPuzzle}>
            <option value="2x2x2">2x2</option>
            <option value="3x3x3">3x3</option>
          </select>
        </label>
      </form>
      <form>
        <label>
          Edge method:
          <select value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
            <option value="op">Old Pachmann</option>
            <option value="m2">M2</option>
          </select>
        </label>
      </form>

      <div>Is solved: { isSolved.toString() } </div>
    </div>
  );
};