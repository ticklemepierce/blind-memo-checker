

import * as styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowUp, faArrowDown, faArrowRotateRight, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../app-context';
import { Alg } from "cubing/alg";


export const CubeRotationControls = ({scramble, setScramble}) => {
  const { twistyPlayer } = useAppContext();
  const cubeRotate = (rotation) => {
    const newScramble = scramble.concat(new Alg(rotation));
    setScramble(newScramble);
    twistyPlayer.experimentalSetupAlg = newScramble;
  }
  return (
    <div>
      <FontAwesomeIcon className={styles.button} icon={faArrowLeft} onClick={()=>cubeRotate("y")} />
      <FontAwesomeIcon className={styles.button} icon={faArrowRight} onClick={()=>cubeRotate("y'")} />
      <FontAwesomeIcon className={styles.button} icon={faArrowUp} onClick={()=>cubeRotate('x')} />
      <FontAwesomeIcon className={styles.button} icon={faArrowDown} onClick={()=>cubeRotate("x'")} />
      <FontAwesomeIcon className={styles.button} icon={faArrowRotateLeft} onClick={()=>cubeRotate("z'")} />
      <FontAwesomeIcon className={styles.button} icon={faArrowRotateRight} onClick={()=>cubeRotate("z")} />
    </div>
  );
};

