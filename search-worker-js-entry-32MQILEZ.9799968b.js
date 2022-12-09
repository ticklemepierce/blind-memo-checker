function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequire946f"];
parcelRequire.register("3iw40", function(module, exports) {

var $9zazI = parcelRequire("9zazI");

var $jF5vT = parcelRequire("jF5vT");

var $cCyGo = parcelRequire("cCyGo");

var $k4GGV = parcelRequire("k4GGV");
parcelRequire("a4PuW");

var $fKAKj = parcelRequire("fKAKj");
parcelRequire("lYeJM");
parcelRequire("ixdHu");

var $8nJbT = parcelRequire("8nJbT");

var $8mjCn = parcelRequire("8mjCn");

var $lLkc4 = parcelRequire("lLkc4");

var $knLo6 = parcelRequire("knLo6");

var $7TbMZ = parcelRequire("7TbMZ");
parcelRequire("hJBlP");
// src/cubing/search/inside/solve/tremble.ts
var $266becb3c7bcd49d$var$DEFAULT_STAGE1_DEPTH_LIMIT = 2;
var $266becb3c7bcd49d$var$DOUBLECHECK_PLACED_PIECES = true;
var $266becb3c7bcd49d$var$DEBUG = false;
function $266becb3c7bcd49d$var$calculateMoves(kpuzzle, moveNames) {
    const searchMoves = [];
    moveNames.forEach(function(moveName) {
        const rootMove = new (0, $7TbMZ.Move)(moveName);
        if (rootMove.amount !== 1) throw new Error("SGS cannot handle def moves with an amount other than 1 yet.");
        let transformation = kpuzzle.identityTransformation();
        for(let i = 1;; i++){
            transformation = transformation.applyMove(rootMove);
            if (transformation.isIdentityTransformation()) break;
            searchMoves.push({
                move: rootMove.modified({
                    amount: i
                }),
                transformation: transformation
            });
        }
    });
    return searchMoves;
}
var $266becb3c7bcd49d$var$TrembleSolver = class {
    constructor(kpuzzle, sgs, trembleMoveNames){
        this.kpuzzle = kpuzzle;
        this.sgs = sgs;
        this.searchMoves = $266becb3c7bcd49d$var$calculateMoves(this.kpuzzle, trembleMoveNames ?? Object.keys(this.kpuzzle.definition.moves));
    }
    async solve(state, stage1DepthLimit = $266becb3c7bcd49d$var$DEFAULT_STAGE1_DEPTH_LIMIT, quantumMoveOrder) {
        const transformation = state.experimentalToTransformation();
        if (!transformation) throw new Error("distinguishable pieces are not supported in tremble solver yt");
        let bestAlg = null;
        let bestLen = 1e6;
        const recur = (recursiveTransformation, togo, sofar)=>{
            if (togo === 0) {
                const sgsAlg = this.sgsPhaseSolve(recursiveTransformation, bestLen);
                if (!sgsAlg) return;
                const newAlg = sofar.concat(sgsAlg).simplify({
                    collapseMoves: true,
                    quantumMoveOrder: quantumMoveOrder
                });
                const len = (0, $fKAKj.countMoves)(newAlg);
                if (bestAlg === null || len < bestLen) {
                    if ($266becb3c7bcd49d$var$DEBUG) {
                        console.log(`New best (${len} moves): ${newAlg.toString()}`);
                        console.log(`Tremble moves are: ${sofar.toString()}`);
                    }
                    bestAlg = newAlg;
                    bestLen = len;
                }
                return;
            }
            for (const searchMove of this.searchMoves)recur(recursiveTransformation.applyTransformation(searchMove.transformation), togo - 1, sofar.concat([
                searchMove.move
            ]));
        };
        for(let d = 0; d <= stage1DepthLimit; d++)recur(transformation, d, new (0, $7TbMZ.Alg)());
        if (bestAlg === null) throw new Error("SGS search failed.");
        return bestAlg;
    }
    sgsPhaseSolve(initialTransformation, bestLenSofar) {
        const algBuilder = new (0, $7TbMZ.AlgBuilder)();
        let transformation = initialTransformation;
        for (const step of this.sgs.ordering){
            const cubieSeq = step.pieceOrdering;
            let key = "";
            const inverseTransformation = transformation.invert();
            for(let i = 0; i < cubieSeq.length; i++){
                const loc = cubieSeq[i];
                const orbitName = loc.orbitName;
                const idx = loc.permutationIdx;
                key += ` ${inverseTransformation.transformationData[orbitName].permutation[idx]} ${inverseTransformation.transformationData[orbitName].orientation[idx]}`;
            }
            const info = step.lookup[key];
            if (!info) throw new Error("Missing algorithm in sgs or esgs?");
            algBuilder.experimentalPushAlg(info.alg);
            if (algBuilder.experimentalNumUnits() >= bestLenSofar) return null;
            transformation = transformation.applyTransformation(info.transformation);
            if ($266becb3c7bcd49d$var$DOUBLECHECK_PLACED_PIECES) for(let i1 = 0; i1 < cubieSeq.length; i1++){
                const location = cubieSeq[i1];
                const orbitName = location.orbitName;
                const idx = location.permutationIdx;
                if (transformation.transformationData[orbitName].permutation[idx] !== idx || transformation.transformationData[orbitName].orientation[idx] !== 0) throw new Error("bad SGS :-(");
            }
        }
        return algBuilder.toAlg();
    }
};
async function $266becb3c7bcd49d$var$randomStateFromSGS(kpuzzle, sgs) {
    const randomChoice = await (0, $8mjCn.randomChoiceFactory)();
    let transformation = kpuzzle.identityTransformation();
    for (const step of sgs.ordering){
        const sgsAction = randomChoice(Object.values(step.lookup));
        transformation = transformation.applyTransformation(sgsAction.transformation);
    }
    return transformation.toKState();
}
// src/cubing/search/inside/solve/puzzles/2x2x2.ts
var $266becb3c7bcd49d$var$TREMBLE_DEPTH = 3;
var $266becb3c7bcd49d$var$cachedTrembleSolver = null;

async function $266becb3c7bcd49d$var$getCachedTrembleSolver() {
    return $266becb3c7bcd49d$var$cachedTrembleSolver || ($266becb3c7bcd49d$var$cachedTrembleSolver = (async ()=>{
        const sgsCachedData = await (await (parcelRequire("aXnsQ"))).cachedData222();
        return new $266becb3c7bcd49d$var$TrembleSolver(await (0, $lLkc4.puzzles)["2x2x2"].kpuzzle(), sgsCachedData, "URFLBD".split(""));
    })());
}
async function $266becb3c7bcd49d$var$preInitialize222() {
    await $266becb3c7bcd49d$var$getCachedTrembleSolver();
}
async function $266becb3c7bcd49d$var$solve222(state) {
    (0, $8nJbT.mustBeInsideWorker)();
    const trembleSolver = await $266becb3c7bcd49d$var$getCachedTrembleSolver();
    const alg = await trembleSolver.solve(state, $266becb3c7bcd49d$var$TREMBLE_DEPTH, ()=>4);
    return alg;
}
async function $266becb3c7bcd49d$var$mutatingRandomizeOrbit(kpuzzle, orbitName, state, options) {
    const randomUIntBelow = await (0, $8mjCn.randomUIntBelowFactory)();
    await (0, $8mjCn.randomPermute)(state.stateData[orbitName].pieces);
    const orbitDef = kpuzzle.definition.orbits[orbitName];
    const ori = state.stateData[orbitName].orientation;
    let sum = 0;
    for(let i = 0; i < orbitDef.numPieces; i++){
        const o = randomUIntBelow(orbitDef.numOrientations);
        ori[i] = o;
        sum += o;
    }
    if (options && "orientationSum" in options) ori[0] = ((ori[0] + options.orientationSum - sum) % orbitDef.numOrientations + orbitDef.numOrientations) % orbitDef.numOrientations;
}
async function $266becb3c7bcd49d$var$random222State() {
    const kpuzzle = await (0, $lLkc4.puzzles)["2x2x2"].kpuzzle();
    const stateCopy = new (0, $knLo6.KState)(kpuzzle, JSON.parse(JSON.stringify(kpuzzle.startState().stateData)));
    await $266becb3c7bcd49d$var$mutatingRandomizeOrbit(kpuzzle, "CORNERS", stateCopy, {
        orientationSum: 0
    });
    return stateCopy;
}
async function $266becb3c7bcd49d$var$random222Scramble() {
    return await $266becb3c7bcd49d$var$solve222(await $266becb3c7bcd49d$var$random222State());
}
// src/cubing/search/inside/solve/puzzles/4x4x4.ts
var $266becb3c7bcd49d$var$randomSuffixes = [
    [
        null,
        "x",
        "x2",
        "x'",
        "z",
        "z'"
    ],
    [
        null,
        "y",
        "y2",
        "y'"
    ]
];
var $266becb3c7bcd49d$var$cachedImport = null;

function $266becb3c7bcd49d$var$dynamicScramble444() {
    return $266becb3c7bcd49d$var$cachedImport ?? ($266becb3c7bcd49d$var$cachedImport = (parcelRequire("8lGNE")));
}
async function $266becb3c7bcd49d$var$initialize444() {
    return (await $266becb3c7bcd49d$var$dynamicScramble444()).initialize();
}
async function $266becb3c7bcd49d$var$random444Scramble() {
    return (await $266becb3c7bcd49d$var$dynamicScramble444()).random444Scramble();
}
async function $266becb3c7bcd49d$var$random444OrientedScramble() {
    return (0, $8nJbT.addOrientationSuffix)(await $266becb3c7bcd49d$var$random444Scramble(), $266becb3c7bcd49d$var$randomSuffixes);
}
// src/cubing/search/inside/solve/puzzles/big-cubes.ts
function $266becb3c7bcd49d$var$numMoves(n) {
    switch(n){
        case 5:
            return 60;
        case 6:
            return 80;
        default:
            return 100;
    }
}
var $266becb3c7bcd49d$var$axesFaces = [
    [
        "U",
        "D"
    ],
    [
        "L",
        "R"
    ],
    [
        "F",
        "B"
    ]
];
var $266becb3c7bcd49d$var$axesMovesCache = /* @__PURE__ */ new Map();
function $266becb3c7bcd49d$var$cachedAxesMoves(n) {
    const existing = $266becb3c7bcd49d$var$axesMovesCache.get(n);
    if (existing) return existing;
    const axesMoves = [];
    for (const faces of $266becb3c7bcd49d$var$axesFaces){
        const axisMoveFamilies = [];
        axesMoves.push(axisMoveFamilies);
        for (const face of faces){
            axisMoveFamilies.push(new (0, $7TbMZ.QuantumMove)(face));
            if (n > 3) axisMoveFamilies.push(new (0, $7TbMZ.QuantumMove)(`${face}w`));
            for(let i = 3; i <= n / 2; i++)axisMoveFamilies.push(new (0, $7TbMZ.QuantumMove)(`${face}w`, i));
        }
    }
    $266becb3c7bcd49d$var$axesMovesCache.set(n, axesMoves);
    return axesMoves;
}
async function $266becb3c7bcd49d$var$bigCubeRandomMoves(n) {
    const randomUintBelow = await (0, $8mjCn.randomUIntBelowFactory)();
    const randomChoice = await (0, $8mjCn.randomChoiceFactory)();
    const randomNumChoice = randomChoice;
    const axesMoves = $266becb3c7bcd49d$var$cachedAxesMoves(n);
    const cachedNumMoves = $266becb3c7bcd49d$var$numMoves(n);
    const algBuilder = new (0, $7TbMZ.AlgBuilder)();
    let currentAxisIdx = 0;
    const currentAxisQuantumMoves = /* @__PURE__ */ new Set();
    while(algBuilder.experimentalNumUnits() < cachedNumMoves){
        const newAxisIdx = randomUintBelow(3);
        if (newAxisIdx !== currentAxisIdx) currentAxisQuantumMoves.clear();
        currentAxisIdx = newAxisIdx;
        const quantumMove = randomChoice(axesMoves[currentAxisIdx]);
        const quantumMoveStr = quantumMove.toString();
        if (currentAxisQuantumMoves.has(quantumMoveStr)) continue;
        currentAxisQuantumMoves.add(quantumMoveStr);
        algBuilder.push(new (0, $7TbMZ.Move)(quantumMove, randomNumChoice([
            1,
            2,
            -1
        ])));
    }
    return algBuilder.toAlg();
}
// src/cubing/search/inside/solve/puzzles/5x5x5.ts
var $266becb3c7bcd49d$var$randomSuffixes2 = [
    [
        null,
        "3Rw",
        "3Rw2",
        "3Rw'",
        "3Fw",
        "3Fw'"
    ],
    [
        null,
        "3Dw",
        "3Dw2",
        "3Dw'"
    ]
];
async function $266becb3c7bcd49d$var$oriented555RandomMoves() {
    return (0, $8nJbT.addOrientationSuffix)(await $266becb3c7bcd49d$var$bigCubeRandomMoves(5), $266becb3c7bcd49d$var$randomSuffixes2);
}

// src/cubing/search/inside/solve/puzzles/fto.ts
async function $266becb3c7bcd49d$var$randomFTOScramble() {
    (0, $8nJbT.mustBeInsideWorker)();
    const { randomFTOScrambleString: randomFTOScrambleString  } = await (parcelRequire("2bgtp"));
    return new (0, $7TbMZ.Alg)(await randomFTOScrambleString());
}

// src/cubing/search/inside/solve/puzzles/kilominx.ts
async function $266becb3c7bcd49d$var$randomKilominxScramble() {
    (0, $8nJbT.mustBeInsideWorker)();
    const { getRandomKilominxScramble: getRandomKilominxScramble  } = await (parcelRequire("eRbdX"));
    return getRandomKilominxScramble();
}

// src/cubing/search/inside/solve/puzzles/master_tetraminx.ts
async function $266becb3c7bcd49d$var$randomMasterTetraminxScramble() {
    const { randomMasterTetraminxScrambleString: randomMasterTetraminxScrambleString  } = await (parcelRequire("3STmC"));
    (0, $8nJbT.mustBeInsideWorker)();
    return new (0, $7TbMZ.Alg)(await randomMasterTetraminxScrambleString());
}
// src/cubing/search/inside/solve/puzzles/megaminx.ts
var $266becb3c7bcd49d$var$TREMBLE_DEPTH2 = 2;
var $266becb3c7bcd49d$var$cachedTrembleSolver2 = null;

async function $266becb3c7bcd49d$var$getCachedTrembleSolver2() {
    return $266becb3c7bcd49d$var$cachedTrembleSolver2 || ($266becb3c7bcd49d$var$cachedTrembleSolver2 = (async ()=>{
        const sgs = await (parcelRequire("6S1y9"));
        const json = await sgs.cachedSGSDataMegaminx();
        return new $266becb3c7bcd49d$var$TrembleSolver(await (0, $k4GGV.cachedMegaminxKPuzzleWithoutMO)(), json, [
            "U",
            "R",
            "F",
            "L",
            "BR",
            "BL",
            "FR",
            "FL",
            "DR",
            "DL",
            "B",
            "D"
        ]);
    })());
}
async function $266becb3c7bcd49d$var$solveMegaminx(state) {
    (0, $8nJbT.mustBeInsideWorker)();
    const trembleSolver = await $266becb3c7bcd49d$var$getCachedTrembleSolver2();
    const stateDataWithoutMO = JSON.parse(JSON.stringify(state.stateData));
    stateDataWithoutMO.CENTERS.orientation = new Array(12).fill(0);
    const stateWithoutMO = new (0, $knLo6.KState)(await (0, $k4GGV.cachedMegaminxKPuzzleWithoutMO)(), stateDataWithoutMO);
    const alg = await trembleSolver.solve(stateWithoutMO, $266becb3c7bcd49d$var$TREMBLE_DEPTH2, ()=>5);
    return alg;
}
// src/cubing/search/inside/solve/puzzles/pyraminx.ts
var $266becb3c7bcd49d$var$TREMBLE_DEPTH3 = 3;
var $266becb3c7bcd49d$var$cachedTrembleSolver3 = null;

async function $266becb3c7bcd49d$var$getCachedTrembleSolver3() {
    return $266becb3c7bcd49d$var$cachedTrembleSolver3 || ($266becb3c7bcd49d$var$cachedTrembleSolver3 = (async ()=>{
        const sgs = await (parcelRequire("hhVwm"));
        const json = await sgs.sgsDataPyraminx();
        return new $266becb3c7bcd49d$var$TrembleSolver(await (0, $lLkc4.puzzles).pyraminx.kpuzzle(), json, "RLUB".split(""));
    })());
}
async function $266becb3c7bcd49d$var$solvePyraminx(state) {
    (0, $8nJbT.mustBeInsideWorker)();
    const trembleSolver = await $266becb3c7bcd49d$var$getCachedTrembleSolver3();
    const alg = await trembleSolver.solve(state, $266becb3c7bcd49d$var$TREMBLE_DEPTH3, ()=>3);
    return alg;
}
async function $266becb3c7bcd49d$var$randomPyraminxStateFixedOrientation() {
    (0, $8nJbT.mustBeInsideWorker)();
    return $266becb3c7bcd49d$var$randomStateFromSGS(await (0, $lLkc4.puzzles).pyraminx.kpuzzle(), await (0, $9zazI.sgsDataPyraminxFixedOrientation)());
}
async function $266becb3c7bcd49d$var$randomPyraminxScrambleFixedOrientation() {
    return $266becb3c7bcd49d$var$solvePyraminx(await $266becb3c7bcd49d$var$randomPyraminxStateFixedOrientation());
}

// src/cubing/search/inside/solve/puzzles/redi_cube.ts
async function $266becb3c7bcd49d$var$randomRediCubeScramble() {
    (0, $8nJbT.mustBeInsideWorker)();
    const { getRandomRediCubeScramble: getRandomRediCubeScramble  } = await (parcelRequire("zZZ8e"));
    return getRandomRediCubeScramble();
}
// src/cubing/search/inside/solve/puzzles/skewb.ts
var $266becb3c7bcd49d$var$TREMBLE_DEPTH4 = 3;
var $266becb3c7bcd49d$var$cachedTrembleSolver4 = null;

async function $266becb3c7bcd49d$var$getCachedTrembleSolver4() {
    return $266becb3c7bcd49d$var$cachedTrembleSolver4 || ($266becb3c7bcd49d$var$cachedTrembleSolver4 = (async ()=>{
        const sgs = await (parcelRequire("jtaie"));
        const json = await sgs.sgsDataSkewb();
        return new $266becb3c7bcd49d$var$TrembleSolver(await sgs.skewbKPuzzleWithoutMOCached(), json, "RLUB".split(""));
    })());
}
function $266becb3c7bcd49d$var$resetCenterOrientation(state) {
    return new (0, $knLo6.KState)(state.kpuzzle, {
        CORNERS: state.stateData.CORNERS,
        CENTERS: {
            pieces: state.stateData.CENTERS.pieces,
            orientation: new Array(6).fill(0)
        }
    });
}
async function $266becb3c7bcd49d$var$solveSkewb(state) {
    (0, $8nJbT.mustBeInsideWorker)();
    const trembleSolver = await $266becb3c7bcd49d$var$getCachedTrembleSolver4();
    const alg = await trembleSolver.solve($266becb3c7bcd49d$var$resetCenterOrientation(state), $266becb3c7bcd49d$var$TREMBLE_DEPTH4, (quantumMove)=>quantumMove.family === "y" ? 4 : 3);
    return alg;
}
async function $266becb3c7bcd49d$var$randomSkewbFixedCornerState() {
    return $266becb3c7bcd49d$var$randomStateFromSGS(await (0, $jF5vT.skewbKPuzzleWithoutMOCached)(), await (0, $jF5vT.sgsDataSkewbFixedCorner)());
}
async function $266becb3c7bcd49d$var$randomSkewbFixedCornerScramble() {
    return $266becb3c7bcd49d$var$solveSkewb(await $266becb3c7bcd49d$var$randomSkewbFixedCornerState());
}
// src/cubing/search/inside/solve/puzzles/sq1.ts
var $266becb3c7bcd49d$var$cachedImport2 = null;

function $266becb3c7bcd49d$var$dynamicScrambleSq1() {
    return $266becb3c7bcd49d$var$cachedImport2 ?? ($266becb3c7bcd49d$var$cachedImport2 = (parcelRequire("ljFFV")));
}
async function $266becb3c7bcd49d$var$getRandomSquare1Scramble() {
    return (0, $7TbMZ.Alg).fromString(await (await $266becb3c7bcd49d$var$dynamicScrambleSq1()).getRandomSquare1ScrambleString());
}
// src/cubing/search/inside/api.ts
var $266becb3c7bcd49d$var$IDLE_PREFETCH_TIMEOUT_MS = 1e3;
(0, $8nJbT.setIsInsideWorker)(true);
var $266becb3c7bcd49d$var$DEBUG_MEASURE_PERF = true;
function $266becb3c7bcd49d$var$setDebugMeasurePerf(newDebugMeasurePerf) {
    $266becb3c7bcd49d$var$DEBUG_MEASURE_PERF = newDebugMeasurePerf;
}
function $266becb3c7bcd49d$var$now() {
    return (typeof performance === "undefined" ? Date : performance).now();
}
async function $266becb3c7bcd49d$var$measurePerf(name, f, options) {
    if (!$266becb3c7bcd49d$var$DEBUG_MEASURE_PERF) return f();
    const start = $266becb3c7bcd49d$var$now();
    const result = f();
    if (result?.then) await result;
    const end = $266becb3c7bcd49d$var$now();
    console.warn(`${name}${options?.isPrefetch ? " (prefetched)" : ""}: ${Math.round(end - start)}ms`);
    return result;
}
var $266becb3c7bcd49d$var$prefetchPromises = /* @__PURE__ */ new Map();
var $266becb3c7bcd49d$var$queuedPrefetchTimeoutID = null;
async function $266becb3c7bcd49d$var$randomScrambleForEvent(eventID, options) {
    switch(eventID){
        case "222":
            return $266becb3c7bcd49d$var$measurePerf("random222Scramble", $266becb3c7bcd49d$var$random222Scramble, {
                isPrefetch: options?.isPrefetch
            });
        case "333":
        case "333oh":
        case "333ft":
            return $266becb3c7bcd49d$var$measurePerf("random333Scramble", (0, $8nJbT.random333Scramble), {
                isPrefetch: options?.isPrefetch
            });
        case "333fm":
            return $266becb3c7bcd49d$var$measurePerf("random333FewestMovesScramble", (0, $8nJbT.random333FewestMovesScramble));
        case "333bf":
        case "333mb":
            return $266becb3c7bcd49d$var$measurePerf("random333OrientedScramble", (0, $8nJbT.random333OrientedScramble));
        case "444":
            return $266becb3c7bcd49d$var$measurePerf("random444Scramble", $266becb3c7bcd49d$var$random444Scramble, {
                isPrefetch: options?.isPrefetch
            });
        case "444bf":
            return $266becb3c7bcd49d$var$measurePerf("random444OrientedScramble", $266becb3c7bcd49d$var$random444OrientedScramble);
        case "555":
            return $266becb3c7bcd49d$var$measurePerf("bigCubeScramble(5)", $266becb3c7bcd49d$var$bigCubeRandomMoves.bind($266becb3c7bcd49d$var$bigCubeRandomMoves, 5));
        case "555bf":
            return $266becb3c7bcd49d$var$measurePerf("oriented555RandomMoves", $266becb3c7bcd49d$var$oriented555RandomMoves);
        case "666":
            return $266becb3c7bcd49d$var$measurePerf("bigCubeScramble(6)", $266becb3c7bcd49d$var$bigCubeRandomMoves.bind($266becb3c7bcd49d$var$bigCubeRandomMoves, 6));
        case "777":
            return $266becb3c7bcd49d$var$measurePerf("bigCubeScramble(7)", $266becb3c7bcd49d$var$bigCubeRandomMoves.bind($266becb3c7bcd49d$var$bigCubeRandomMoves, 7));
        case "skewb":
            return $266becb3c7bcd49d$var$measurePerf("randomSkewbFixedCornerScramble", $266becb3c7bcd49d$var$randomSkewbFixedCornerScramble);
        case "pyram":
            return $266becb3c7bcd49d$var$measurePerf("randomPyraminxScrambleFixedOrientation", $266becb3c7bcd49d$var$randomPyraminxScrambleFixedOrientation);
        case "sq1":
            return $266becb3c7bcd49d$var$measurePerf("getRandomSquare1Scramble", $266becb3c7bcd49d$var$getRandomSquare1Scramble, {
                isPrefetch: options?.isPrefetch
            });
        case "fto":
            return $266becb3c7bcd49d$var$measurePerf("randomFTOScramble", $266becb3c7bcd49d$var$randomFTOScramble, {
                isPrefetch: options?.isPrefetch
            });
        case "master_tetraminx":
            return $266becb3c7bcd49d$var$measurePerf("randomMasterTetraminxScramble", $266becb3c7bcd49d$var$randomMasterTetraminxScramble);
        case "kilominx":
            return $266becb3c7bcd49d$var$measurePerf("randomKilominxScramble", $266becb3c7bcd49d$var$randomKilominxScramble, {
                isPrefetch: options?.isPrefetch
            });
        case "redi_cube":
            return $266becb3c7bcd49d$var$measurePerf("randomRediCubeScramble", $266becb3c7bcd49d$var$randomRediCubeScramble, {
                isPrefetch: options?.isPrefetch
            });
        default:
            throw new Error(`unsupported event: ${eventID}`);
    }
}
var $266becb3c7bcd49d$var$currentPrefetchLevel = "auto" /* Auto */ ;
var $266becb3c7bcd49d$var$insideAPI = {
    initialize: async (eventID)=>{
        switch(eventID){
            case "222":
                return $266becb3c7bcd49d$var$measurePerf("preInitialize222", $266becb3c7bcd49d$var$preInitialize222);
            case "333":
            case "333oh":
            case "333ft":
                return $266becb3c7bcd49d$var$measurePerf("initialize333", (0, $8nJbT.initialize333));
            case "444":
                return $266becb3c7bcd49d$var$measurePerf("initialize444", $266becb3c7bcd49d$var$initialize444);
            default:
                throw new Error(`unsupported event: ${eventID}`);
        }
    },
    setScramblePrefetchLevel (prefetchLevel) {
        $266becb3c7bcd49d$var$currentPrefetchLevel = prefetchLevel;
    },
    randomScrambleForEvent: async (eventID)=>{
        let promise = $266becb3c7bcd49d$var$prefetchPromises.get(eventID);
        if (promise) $266becb3c7bcd49d$var$prefetchPromises.delete(eventID);
        else promise = $266becb3c7bcd49d$var$randomScrambleForEvent(eventID);
        if ($266becb3c7bcd49d$var$currentPrefetchLevel !== "none" /* None */ ) promise.then(()=>{
            if ($266becb3c7bcd49d$var$queuedPrefetchTimeoutID) clearTimeout($266becb3c7bcd49d$var$queuedPrefetchTimeoutID);
            $266becb3c7bcd49d$var$queuedPrefetchTimeoutID = setTimeout(()=>{
                $266becb3c7bcd49d$var$prefetchPromises.set(eventID, $266becb3c7bcd49d$var$randomScrambleForEvent(eventID, {
                    isPrefetch: true
                }));
            }, $266becb3c7bcd49d$var$currentPrefetchLevel === "immediate" /* Immediate */  ? 0 : $266becb3c7bcd49d$var$IDLE_PREFETCH_TIMEOUT_MS);
        });
        return promise;
    },
    randomScrambleStringForEvent: async (eventID)=>{
        return (await $266becb3c7bcd49d$var$insideAPI.randomScrambleForEvent(eventID)).toString();
    },
    solve333ToString: async (stateData)=>{
        const state = new (0, $knLo6.KState)(await (0, $lLkc4.puzzles)["3x3x3"].kpuzzle(), stateData);
        return (await (0, $8nJbT.solve333)(state)).toString();
    },
    solve222ToString: async (stateData)=>{
        const state = new (0, $knLo6.KState)(await (0, $lLkc4.puzzles)["2x2x2"].kpuzzle(), stateData);
        return (await $266becb3c7bcd49d$var$solve222(state)).toString();
    },
    solveSkewbToString: async (stateData)=>{
        const state = new (0, $knLo6.KState)(await (0, $lLkc4.puzzles)["skewb"].kpuzzle(), stateData);
        return (await $266becb3c7bcd49d$var$solveSkewb(state)).toString();
    },
    solvePyraminxToString: async (stateData)=>{
        const state = new (0, $knLo6.KState)(await (0, $lLkc4.puzzles)["pyraminx"].kpuzzle(), stateData);
        return (await $266becb3c7bcd49d$var$solvePyraminx(state)).toString();
    },
    solveMegaminxToString: async (stateData)=>{
        const state = new (0, $knLo6.KState)(await (0, $lLkc4.puzzles)["megaminx"].kpuzzle(), stateData);
        return (await $266becb3c7bcd49d$var$solveMegaminx(state)).toString();
    },
    setDebugMeasurePerf: async (measure)=>{
        $266becb3c7bcd49d$var$setDebugMeasurePerf(measure);
    }
};
// src/cubing/search/inside/search-worker-js-entry.js
(0, $cCyGo.expose)($266becb3c7bcd49d$var$insideAPI);

});
parcelRequire.register("9zazI", function(module, exports) {

$parcel$export(module.exports, "sgsDataPyraminx", () => $6f6f95ea837b1bb0$export$9afa676efd55d04d);
$parcel$export(module.exports, "sgsDataPyraminxFixedOrientation", () => $6f6f95ea837b1bb0$export$b6ddeb0377ed5007);

var $a4PuW = parcelRequire("a4PuW");

var $lLkc4 = parcelRequire("lLkc4");
// src/cubing/search/inside/solve/puzzles/pyraminx.sgs.json.ts
var $6f6f95ea837b1bb0$var$cachedData = null;
async function $6f6f95ea837b1bb0$export$9afa676efd55d04d() {
    return $6f6f95ea837b1bb0$var$cachedData ?? ($6f6f95ea837b1bb0$var$cachedData = $6f6f95ea837b1bb0$var$uncachedSGSDataPyraminx());
}
async function $6f6f95ea837b1bb0$export$b6ddeb0377ed5007() {
    return {
        ordering: (await $6f6f95ea837b1bb0$export$9afa676efd55d04d()).ordering.slice(2)
    };
}
async function $6f6f95ea837b1bb0$var$uncachedSGSDataPyraminx() {
    return (0, $a4PuW.parseSGS)(await (0, $lLkc4.puzzles).pyraminx.kpuzzle(), `SubgroupSizes 12 9 12 3 10 3 8 6 2 3 3 3 3

Alg B
Alg B'
Alg y
Alg B y
Alg B' y
Alg y'
Alg B y'
Alg B' y'
Alg BR'
Alg B BR'
Alg B' BR'

Alg L
Alg L'
Alg L F
Alg L' F
Alg F
Alg L F'
Alg L' F'
Alg F'

Alg L B' U L' B
Alg L U L'
Alg L U' L'
Alg L U L' U'
Alg B' U B
Alg B' U' B
Alg B' U' B U
Alg L U' L' R
Alg L U' L' R'
Alg L' R' L
Alg L' R' L R

Alg R
Alg R'

Alg R' U R
Alg R' U' R
Alg R' U R U'
Alg B U B'
Alg B U' B'
Alg R B' R' B
Alg L R L' R U' R
Alg R L R' L'
Alg L' R' U R L

Alg U
Alg U'

Alg R U R' U'
Alg U R U' R'
Alg L' U' L U
Alg U' L' U L
Alg U L R' L' R U'
Alg U' R' L R L' U
Alg L' U' L U' R U' R'

Alg R U' R' U
Alg L' U L U'
Alg U' R U R'
Alg U L' U' L
Alg L R' L' R L' U L U'

Alg L' U L U' L R' L' R

Alg b
Alg b'

Alg l
Alg l'

Alg r
Alg r'

Alg u
Alg u'`);
}

});
parcelRequire.register("a4PuW", function(module, exports) {

$parcel$export(module.exports, "parseSGS", () => $01e4ae58efcee5a2$export$e3025b784d062948);

var $7TbMZ = parcelRequire("7TbMZ");
// src/cubing/search/inside/solve/parseSGS.ts
function $01e4ae58efcee5a2$export$e3025b784d062948(kpuzzle, sgs) {
    const subgroupSizes = [];
    const sgsActions = [];
    for (const line of sgs.split("\n")){
        const lineTokens = line.split(" ");
        if (line.startsWith("SetOrder ")) ;
        else if (line.startsWith("Alg ")) {
            const alg = (0, $7TbMZ.Alg).fromString(line.substring(4));
            sgsActions.push({
                alg: alg,
                transformation: kpuzzle.algToTransformation(alg)
            });
        } else if (line.startsWith("SubgroupSizes ")) for(let j = 1; j < lineTokens.length; j++)subgroupSizes.push(parseInt(lineTokens[j]));
    }
    const sgsCachedData = {
        ordering: new Array(subgroupSizes.length)
    };
    const subgroupAlgOffsets = [];
    let sum = 0;
    subgroupAlgOffsets.push(0);
    const emptyAlg = (0, $7TbMZ.Alg).fromString("");
    const identity = kpuzzle.identityTransformation();
    for(let i = 0; i < subgroupSizes.length; i++){
        sum += subgroupSizes[i];
        subgroupAlgOffsets.push(sum);
        sgsActions.splice(sum - 1, 0, {
            alg: emptyAlg,
            transformation: identity
        });
    }
    if (sgsActions.length !== sum) throw Error(`Bad sgs; expected ${sum - subgroupSizes.length} algs but saw ${sgsActions.length - subgroupSizes.length}`);
    const processedPieces = {};
    for(const orbitName in kpuzzle.definition.orbits){
        const orbitDefinition = kpuzzle.definition.orbits[orbitName];
        processedPieces[orbitName] = new Array(orbitDefinition.numPieces).fill(false);
    }
    for(let i1 = subgroupSizes.length - 1; i1 >= 0; i1--){
        const pieceOrdering = [];
        for(let j = subgroupAlgOffsets[i1]; j < subgroupAlgOffsets[i1 + 1]; j++){
            const transformation = sgsActions[j].transformation;
            for(const orbitName in kpuzzle.definition.orbits){
                const orbitDefinition = kpuzzle.definition.orbits[orbitName];
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                    if (transformation.transformationData[orbitName].permutation[idx] !== idx || transformation.transformationData[orbitName].orientation[idx] !== 0) {
                        if (!processedPieces[orbitName][idx]) {
                            pieceOrdering.push({
                                orbitName: orbitName,
                                permutationIdx: idx
                            });
                            processedPieces[orbitName][idx] = true;
                        }
                    }
                }
            }
        }
        const lookup = {};
        for(let j1 = subgroupAlgOffsets[i1]; j1 < subgroupAlgOffsets[i1 + 1]; j1++){
            const transformation = sgsActions[j1].transformation.invert();
            let key = "";
            for(let k = 0; k < pieceOrdering.length; k++){
                const loc = pieceOrdering[k];
                key = `${key} ${transformation.transformationData[loc.orbitName].permutation[loc.permutationIdx]} ${transformation.transformationData[loc.orbitName].orientation[loc.permutationIdx]}`;
            }
            lookup[key] = sgsActions[j1];
            sgsActions[j1].alg = sgsActions[j1].alg.invert();
            sgsActions[j1].transformation = sgsActions[j1].transformation.invert();
        }
        sgsCachedData.ordering[i1] = {
            pieceOrdering: pieceOrdering,
            lookup: lookup
        };
    }
    return sgsCachedData;
}

});


parcelRequire.register("jF5vT", function(module, exports) {

$parcel$export(module.exports, "skewbKPuzzleWithoutMOCached", () => $e5061f84d4d125bf$export$eebc246658b4e2fb);
$parcel$export(module.exports, "sgsDataSkewb", () => $e5061f84d4d125bf$export$7954c66cf23882a6);
$parcel$export(module.exports, "sgsDataSkewbFixedCorner", () => $e5061f84d4d125bf$export$de5328f2e86695bd);

var $a4PuW = parcelRequire("a4PuW");

var $lYeJM = parcelRequire("lYeJM");

var $knLo6 = parcelRequire("knLo6");
// src/cubing/search/inside/solve/puzzles/skewb.sgs.json.ts
async function $e5061f84d4d125bf$var$skewbKPuzzleWithoutMO() {
    const pg = (0, $lYeJM.getPuzzleGeometryByName)("skewb", {
        allMoves: true,
        addRotations: true
    });
    return new (0, $knLo6.KPuzzle)(pg.getKPuzzleDefinition(true), {
        experimentalPGNotation: new (0, $lYeJM.PGNotation)(pg, pg.getOrbitsDef(true))
    });
}
var $e5061f84d4d125bf$var$defCache = null;
async function $e5061f84d4d125bf$export$eebc246658b4e2fb() {
    return $e5061f84d4d125bf$var$defCache ?? ($e5061f84d4d125bf$var$defCache = $e5061f84d4d125bf$var$skewbKPuzzleWithoutMO());
}
var $e5061f84d4d125bf$var$cachedData = null;
async function $e5061f84d4d125bf$export$7954c66cf23882a6() {
    return $e5061f84d4d125bf$var$cachedData ?? ($e5061f84d4d125bf$var$cachedData = $e5061f84d4d125bf$var$uncachedSGSDataSkewb());
}
async function $e5061f84d4d125bf$export$de5328f2e86695bd() {
    return {
        ordering: (await $e5061f84d4d125bf$export$7954c66cf23882a6()).ordering.slice(1)
    };
}
async function $e5061f84d4d125bf$var$uncachedSGSDataSkewb() {
    return (0, $a4PuW.parseSGS)(await $e5061f84d4d125bf$export$eebc246658b4e2fb(), `SubgroupSizes 24 6 5 12 9 3 4 9 3 3

Alg y
Alg y2
Alg y'
Alg F
Alg F'
Alg y U
Alg y U'
Alg y L
Alg y L'
Alg y F
Alg y F'
Alg y2 U
Alg y2 U'
Alg y2 B
Alg y2 B'
Alg y' U
Alg y' F'
Alg y U L'
Alg y U B
Alg y2 U B
Alg y2 U B'
Alg y2 U' B
Alg y2 U' B'

Alg U
Alg U'
Alg U L
Alg U L'
Alg U' R'

Alg R
Alg R'
Alg R B
Alg R' L'

Alg U B' U
Alg U' L U
Alg U' L' U
Alg U' B U'
Alg R L R'
Alg R B' R
Alg U B L U'
Alg U B' U B'
Alg U B' L' U
Alg U' L B U'
Alg R' B L' R'

Alg L
Alg L'
Alg L B
Alg L B'
Alg L B L
Alg L B L'
Alg L B' L
Alg L B' L'

Alg B
Alg B'

Alg L' B L
Alg L' B' L
Alg R' L' B L R

Alg B L' B L B'
Alg B L' B' L B'
Alg U L U B U' L' U'
Alg R L R' B' R L' R'
Alg U B' R L R' B' U B
Alg U' B U L U' B' U L'
Alg L U' B U L' U' B' U
Alg R B' U R B L U' B

Alg U L U' B' U L' U' B
Alg U' B L U L B' U' L'

Alg U R' U' L B R' B' R
Alg R' U' R U B' U' B L`);
}

});

parcelRequire.register("k4GGV", function(module, exports) {

$parcel$export(module.exports, "cachedMegaminxKPuzzleWithoutMO", () => $e9d54bfeb05b633f$export$58d387020b4f6b80);
$parcel$export(module.exports, "cachedSGSDataMegaminx", () => $e9d54bfeb05b633f$export$431ba55cbfa90a2f);

var $a4PuW = parcelRequire("a4PuW");

var $lYeJM = parcelRequire("lYeJM");

var $knLo6 = parcelRequire("knLo6");
// src/cubing/search/inside/solve/puzzles/megaminx.sgs.json.ts
async function $e9d54bfeb05b633f$var$megaminxKPuzzleWithoutMO() {
    const pg = (0, $lYeJM.getPuzzleGeometryByName)("megaminx", {
        allMoves: true,
        addRotations: true
    });
    const kpuzzle = new (0, $knLo6.KPuzzle)(pg.getKPuzzleDefinition(true), {
        experimentalPGNotation: new (0, $lYeJM.PGNotation)(pg, pg.getOrbitsDef(true))
    });
    kpuzzle.definition.name = "megaminx";
    return kpuzzle;
}
var $e9d54bfeb05b633f$var$defCache = null;
async function $e9d54bfeb05b633f$export$58d387020b4f6b80() {
    return $e9d54bfeb05b633f$var$defCache ?? ($e9d54bfeb05b633f$var$defCache = $e9d54bfeb05b633f$var$megaminxKPuzzleWithoutMO());
}
var $e9d54bfeb05b633f$var$cachedData = null;
async function $e9d54bfeb05b633f$export$431ba55cbfa90a2f() {
    return $e9d54bfeb05b633f$var$cachedData ?? ($e9d54bfeb05b633f$var$cachedData = $e9d54bfeb05b633f$export$455bfb6648dd5d75());
}
async function $e9d54bfeb05b633f$export$455bfb6648dd5d75() {
    return (0, $a4PuW.parseSGS)(await $e9d54bfeb05b633f$export$58d387020b4f6b80(), `SubgroupSizes 12 5 60 58 60 56 54 57 52 50 54 48 46 51 44 42 48 40 45 38 36 42 34 32 39 30 36 28 26 33 24 30 22 20 27 18 24 16 14 21 12 18 10 15 8 6 2 12 9 3

Alg Rv
Alg Rv2
Alg Rv2'
Alg Rv'
Alg Lv'
Alg Lv2
Alg Lv2'
Alg Fv
Alg Fv'
Alg BRv2
Alg Lv2 Rv'

Alg Uv
Alg Uv2
Alg Uv2'
Alg Uv'

Alg D
Alg D2
Alg D2'
Alg D'
Alg B
Alg B2
Alg B2'
Alg B'
Alg D DL
Alg D DL2
Alg D DL2'
Alg D DL'
Alg D2 FL
Alg D2 FL2
Alg D2 FL2'
Alg D2 FL'
Alg D2' FR
Alg D2' FR2
Alg D2' FR2'
Alg D2' FR'
Alg D' DR
Alg D' DR2
Alg D' DR2'
Alg D' DR'
Alg B DR
Alg B DR2'
Alg B DR'
Alg B2 BR2
Alg B2 BR2'
Alg B2 BR'
Alg B2' BL
Alg B2' BL2
Alg B2' BL2'
Alg B' DL
Alg B' DL2
Alg B' DL'
Alg D DL B
Alg D DL B2'
Alg D DL B'
Alg D DL2' L
Alg D DL2' L2
Alg D DL2' L2'
Alg D DL' FL
Alg D DL' FL2
Alg D DL' FL'
Alg D2 FL2' F
Alg D2 FL2' F2
Alg D2 FL2' F2'
Alg D2 FL' FR
Alg D2 FL' FR2
Alg D2 FL' FR'
Alg D2' FR2' R
Alg D2' FR2' R2
Alg D2' FR2' R2'
Alg B DR2' R2'
Alg B DR' BR2
Alg B2 BR' BL
Alg B2' BL2' L
Alg D DL2' L2' F
Alg DL
Alg DL2
Alg DL2'
Alg DL'
Alg DL BL
Alg DL BL2
Alg DL BL2'
Alg DL BL'
Alg DL2 L
Alg DL2 L2
Alg DL2 L2'
Alg DL2 L'
Alg DL2' FL
Alg DL2' FL2
Alg DL2' FL2'
Alg DL2' FL'
Alg D B D'
Alg D B2 D'
Alg D B2' D'
Alg D B' D'
Alg D2 B D2'
Alg D2 DL' D2'
Alg D2' DL' D2
Alg D' B D
Alg D' DL' D
Alg B2 DR2 B2'
Alg B2 DR2' B2'
Alg B2 DR' B2'
Alg B2' BR B2
Alg B2' BR2 B2
Alg B2' BR2' B2
Alg B' BL B
Alg B' BL2 B
Alg B' BL' B
Alg DL BL2' U
Alg DL BL2' U2
Alg DL BL2' U2'
Alg DL BL' L
Alg DL BL' L2
Alg DL BL' L'
Alg DL2 L2' F
Alg DL2 L2' F2
Alg DL2 L2' F2'
Alg DL2 L' FL
Alg DL2 L' FL2
Alg DL2 L' FL'
Alg DL2' FL2' FR
Alg DL2' FL2' FR2
Alg DL2' FL2' FR2'
Alg D B D' DR2
Alg D B D' DR'
Alg D2 B D2' FR2'
Alg D' B D DL
Alg B2 DR' B2' BR
Alg B2 DR' B2' BR'
Alg B2' BR2' B2 U
Alg DL BL2' U2' F
Alg D FL D'
Alg D FL2 D'
Alg D FL2' D'
Alg D FL' D'
Alg D2 FR D2'
Alg D2 FR2 D2'
Alg D2 FR2' D2'
Alg D2' DR D2
Alg D2' DR2 D2
Alg D2' DR2' D2
Alg DL2 BL DL2'
Alg DL2 BL2 DL2'
Alg DL2 BL2' DL2'
Alg DL2 BL' DL2'
Alg DL2' L2 DL2
Alg DL2' L2' DL2
Alg DL' FL2 DL
Alg DL' FL' DL
Alg D FL D' FL2'
Alg D FL L D'
Alg D FL L2 D'
Alg D FL L2' D'
Alg D FL2 F D'
Alg D FL2 F2 D'
Alg D FL2 F2' D'
Alg D FL2 L D'
Alg D FL2 L2 D'
Alg D FL2' D' FR
Alg D FL2' D' FR2
Alg D FL2' D' FR2'
Alg D FL2' F D'
Alg D FL2' F2' D'
Alg D FL2' FR2' D'
Alg D FL2' FR' D'
Alg D FL' D' FL
Alg D FL' FR D'
Alg D2 FR D2' FR2'
Alg D2 FR2 R D2'
Alg D2 FR2 R2 D2'
Alg D2 FR2 R2' D2'
Alg D2 FR2' D2' DR
Alg D2 FR2' D2' DR2
Alg D2 FR2' D2' DR2'
Alg D2 FR2' D2' DR'
Alg D2 FR2' R2' D2'
Alg D2 FR' DR2' D2'
Alg D2' DR D2 DR2'
Alg D2' DR2 BR D2
Alg D2' DR2 BR2' D2
Alg D2' DR2' BR2' D2
Alg D2' DR2' BR' D2
Alg DL2 BL2 DL2' BL'
Alg DL2 BL2 DL2' BR'
Alg DL2 BL' DL2' L'
Alg DL2' L2 DL2 BL2
Alg D FL L2 BL2 D'
Alg D FL L' FL2' D'
Alg D FL2 L FL' D'
Alg D FL2' D' FR2 DR2'
Alg B DL B'
Alg B DL2 B'
Alg B DL2' B'
Alg B DL' B'
Alg B2 D B2'
Alg B2 D2 B2'
Alg B2 D2' B2'
Alg B2 D' B2'
Alg B2 DL B2'
Alg B2' D' B2
Alg B2' DL B2
Alg B' D' B
Alg B DL B' BL
Alg B DL B' BL2
Alg B DL B' BL2'
Alg B DL B' BL'
Alg B DL2 B' BL2
Alg B DL2 B' BL2'
Alg B DL2 B' BL'
Alg B DL2' L2 B'
Alg B DL2' L2' B'
Alg B DL2' L' B'
Alg B DL' FL B'
Alg B DL' FL2 B'
Alg B DL' FL2' B'
Alg B DL' FL' B'
Alg B2 D FL B2'
Alg B2 D FL2' B2'
Alg B2 D FL' B2'
Alg B2 D2 FR2 B2'
Alg B2 D2 FR2' B2'
Alg B2 D2 FR' B2'
Alg B2 D2' B2' DR
Alg B2 D2' B2' DR2
Alg B2 D2' B2' DR2'
Alg B2 DL B2' BR
Alg B2 DL B2' BR2
Alg B2 DL B2' BR2'
Alg B2' D' B2 BR2
Alg B2' D' B2 BR2'
Alg B' D' B DR
Alg B' D' B DR2'
Alg D FL' D FR D2'
Alg D DL FL DL' D'
Alg D2' FR DR FR' D2
Alg B DL B D B2'
Alg B DL B D2' B2'
Alg B DL B' BL2 U2
Alg B DL B' BL2 U2'
Alg B DL B' BL2 U'
Alg B DL2 B' BL2' U2
Alg B DL2 B' BL2' U2'
Alg B DL2 B' BL' L2
Alg B DL2' L2' B' F2
Alg B2 D FL2' B2' F2'
Alg DR
Alg DR2
Alg DR2'
Alg DR'
Alg DR2 FR
Alg DR2 FR2
Alg DR2 FR2'
Alg DR2 FR'
Alg DR2' R
Alg DR2' R2
Alg DR2' R2'
Alg DR2' R'
Alg DR' BR
Alg DR' BR2
Alg DR' BR2'
Alg DR' BR'
Alg D DR D'
Alg D2 DR D2'
Alg B BR B'
Alg B BR2' B'
Alg B BR' B'
Alg B2 BL2 B2'
Alg B2 BL2' B2'
Alg B2 BL' B2'
Alg DR2 FR2 FL2
Alg DR2 FR2 FL2'
Alg DR2 FR2 FL'
Alg DR2 FR2' F
Alg DR2 FR2' F2
Alg DR2 FR2' F2'
Alg DR2 FR' R
Alg DR2 FR' R2
Alg DR2 FR' R'
Alg DR2' R FR
Alg DR2' R FR2'
Alg DR2' R FR'
Alg DR2' R2' U
Alg DR2' R2' U2
Alg DR2' R2' U2'
Alg DR2' R' BR2'
Alg DR' BR2' BL'
Alg D DR2 FR D'
Alg B BR B' DR
Alg B BR B' DR2
Alg B BR2' B' U2'
Alg B BR' B' BL2
Alg B BR' B' BL2'
Alg B BR' B' BL'
Alg B2 BL2' L' B2'
Alg DR2 FR2 FL' F
Alg DR2 FR2' F FL2'
Alg DR2 FR2' F FL'
Alg B BR2' U2' L2' B'
Alg D2' FL D2
Alg D2' FL2 D2
Alg D2' FL2' D2
Alg D2' FL' D2
Alg D' FR2 D
Alg D' FR2' D
Alg D' FR' D
Alg DR FR DR'
Alg DR FR2' DR'
Alg DR FR' DR'
Alg DR2 R2 DR2'
Alg DR2 R2' DR2'
Alg DR2' BR DR2
Alg DR2' BR2 DR2
Alg DR2' BR2' DR2
Alg D DR2 D' DR2'
Alg D DR2' D' DR2
Alg D2' FL D2 FR'
Alg D2' FL2 D2 FL2'
Alg D2' FL2 D2 FL'
Alg D2' FL2 L D2
Alg D2' FL2 L2 D2
Alg D2' FL2 L2' D2
Alg D2' FL2 L' D2
Alg D2' FL2' F D2
Alg D2' FL2' F2 D2
Alg D2' FL2' F2' D2
Alg D2' FL2' L D2
Alg D2' FL2' L2 D2
Alg D2' FL2' L2' D2
Alg D2' FL2' L' D2
Alg D2' FL' F D2
Alg D2' FL' F2' D2
Alg D' FR FL' D
Alg D' FR2 D FR'
Alg D' FR2 D FL2
Alg D' FR2 D FL2'
Alg D' FR2 FL D
Alg D' FR2' R2' D
Alg D' FR' R2' D
Alg DR2 R2 DR2' U2'
Alg DR2 R2' DR2' BR
Alg DR2 R2' DR2' BR2
Alg DR2 R2' DR2' BR2'
Alg DR2 R2' DR2' BR'
Alg DR2 R' BR2' DR2'
Alg DR2' BR DR2 BR2'
Alg DR2' BR2 BL DR2
Alg DR2' BR2 BL2' DR2
Alg DR2' BR2' BL' DR2
Alg D B2' BL2' B2 D'
Alg D2 B2 DL2 B2' D2'
Alg D2' FL2 L' FL2 D2
Alg D2' FL2' L D2 FL'
Alg D2' FL2' L FL2' D2
Alg D2' FL2' L2' BL2 D2
Alg B2' DR B2
Alg B2' DR2 B2
Alg B2' DR2' B2
Alg B2' DR' B2
Alg B' DR' B
Alg B2' DR FR B2
Alg B2' DR FR2 B2
Alg B2' DR FR2' B2
Alg B2' DR FR' B2
Alg B2' DR2 R B2
Alg B2' DR2 R2 B2
Alg B2' DR2 R2' B2
Alg B2' DR2 R' B2
Alg B2' DR2' B2 BR
Alg B2' DR2' B2 BR2
Alg B2' DR2' B2 BR2'
Alg B2' DR2' B2 BR'
Alg B2' DR' B2 BL2
Alg B2' DR' B2 BL2'
Alg B2' DR' B2 BL'
Alg B' DR2' BR' B
Alg B' DR' B BR
Alg B' DR' B BR2'
Alg B' DR' B BR'
Alg D2' FR2' FL FR2 D2
Alg D2' FR2' FL2 FR2 D2
Alg D2' FR2' FL2' FR2 D2
Alg D' DR2' FR DR2 D
Alg D' DR2' FR2 DR2 D
Alg D' DR' FR' DR D
Alg D' FR D' FL' D2
Alg B2 D2 DL2 D2' B2'
Alg B2 D2 DL2' D2' B2'
Alg B2 D2 DL' D2' B2'
Alg B2 D' FR' D B2'
Alg B2 DL D2' DL' B2'
Alg B2 DL D' DL' B2'
Alg B2' DR FR2' B2 F2
Alg B2' DR FR2' B2 F2'
Alg B2' DR FR' R B2
Alg B2' DR FR' R2 B2
Alg B2' DR2 R2' B2 U
Alg B2' DR2 R2' B2 U2
Alg B2' DR2 R2' B2 U2'
Alg B2' DR' B2 BL2 U'
Alg B' DR2' BR' B BL2'
Alg DR D FR D' DR'
Alg DL2' B D B' DL2
Alg D2' FR2' FL2' FR2 F D2
Alg D' DR2' FR DR2 D FL2'
Alg B2 D B D' DR B2
Alg FR
Alg FR2
Alg FR2'
Alg FR'
Alg FR2 FL
Alg FR2 FL2
Alg FR2 FL2'
Alg FR2 FL'
Alg FR2' F
Alg FR2' F2
Alg FR2' F2'
Alg FR2' F'
Alg FR' R
Alg FR' R2
Alg FR' R2'
Alg FR' R'
Alg D FR D'
Alg DR R DR'
Alg DR R2' DR'
Alg DR R' DR'
Alg DR2 BR2 DR2'
Alg DR2 BR2' DR2'
Alg DR2 BR' DR2'
Alg FR2 FL2' L
Alg FR2 FL2' L2
Alg FR2 FL2' L2'
Alg FR2 FL' F
Alg FR2 FL' F2
Alg FR2 FL' F'
Alg FR2' F FL
Alg FR2' F FL2'
Alg FR2' F FL'
Alg FR2' F2' U
Alg FR2' F2' U2
Alg FR2' F2' U2'
Alg FR2' F' R2'
Alg FR' R2' BR'
Alg DR R DR' FR
Alg DR R DR' FR2
Alg DR R2' DR' U2'
Alg DR R' DR' BR2
Alg DR R' DR' BR2'
Alg DR R' DR' BR'
Alg DR2 BR2' BL2' DR2'
Alg DR2 BR2' BL' DR2'
Alg FR2 FL' F L2
Alg FR2 FL' F L2'
Alg B' DR2 BR' DR2' B
Alg DR R2' U2' BL2 DR'
Alg D' FL D
Alg D' FL2 D
Alg D' FL2' D
Alg D' FL' D
Alg FR FL FR'
Alg FR FL2 FR'
Alg FR FL2' FR'
Alg FR FL' FR'
Alg FR2 F2 FR2'
Alg FR2 F2' FR2'
Alg FR2' R FR2
Alg FR2' R2 FR2
Alg FR2' R2' FR2
Alg D FR2 D' FR2'
Alg D FR2' D' FR2
Alg D' FL D FL'
Alg D' FL2 D FL'
Alg D' FL2 L D
Alg D' FL2 L2 D
Alg D' FL2 L2' D
Alg D' FL2 L' D
Alg D' FL2' F2' D
Alg D' FL2' L2 D
Alg D' FL2' L2' D
Alg D' FL2' L' D
Alg D' FL' F2' D
Alg FR FL2' F' FR'
Alg FR FL2' FR' L
Alg FR FL2' FR' L2
Alg FR FL2' FR' L2'
Alg FR2 F2 FR2' U2
Alg FR2 F2 FR2' U2'
Alg FR2 F2' FR2' U2'
Alg FR2 F2' FR2' R
Alg FR2 F2' FR2' R2
Alg FR2 F2' FR2' R2'
Alg FR2 F2' FR2' R'
Alg FR2 F' R2' FR2'
Alg FR2' R FR2 R2'
Alg FR2' R2 BR FR2
Alg FR2' R2 BR2 FR2
Alg FR2' R2 BR2' FR2
Alg FR2' R2' BR2' FR2
Alg FR2' R2' BR' FR2
Alg D DR2' BR2' DR2 D'
Alg D FR2' D' FR2 FL2
Alg D2' B DL B' D2
Alg D2' B2' D' B2 D2'
Alg D' FL2 L BL D
Alg D' FL2 L' FL2 D
Alg D' FL2' F2' R' D
Alg D' FL2' L FL2' D
Alg D' FL2' L2' BL2 D
Alg DR2' FR DR2
Alg DR2' FR2 DR2
Alg DR2' FR2' DR2
Alg DR2' FR' DR2
Alg DR' FR' DR
Alg DR2' FR FL DR2
Alg DR2' FR FL2 DR2
Alg DR2' FR FL2' DR2
Alg DR2' FR FL' DR2
Alg DR2' FR2 DR2 F
Alg DR2' FR2 DR2 F2
Alg DR2' FR2 DR2 F2'
Alg DR2' FR2 DR2 F'
Alg DR2' FR2' DR2 R
Alg DR2' FR2' DR2 R2
Alg DR2' FR2' DR2 R2'
Alg DR2' FR2' DR2 R'
Alg DR2' FR' DR2 BR2
Alg DR2' FR' DR2 BR2'
Alg DR2' FR' DR2 BR'
Alg DR' FR2' R' DR
Alg DR' FR' DR R
Alg DR' FR' DR R2'
Alg DR' FR' DR R'
Alg D' FR2' FL FR2 D
Alg D' FR2' FL2 FR2 D
Alg D' FR' FL' FR D
Alg B2' DR2 FR' DR2' B2
Alg B' DR2 FR' DR2' B
Alg DR2 D' FL' D DR2'
Alg DR2' FR FL2' DR2 L
Alg DR2' FR FL2' DR2 L2
Alg DR2' FR FL2' DR2 L2'
Alg DR2' FR FL' DR2 F
Alg DR2' FR FL' DR2 F2
Alg DR2' FR2 F FL2 DR2
Alg DR2' FR2 DR2 F2' U
Alg DR2' FR2 DR2 F2' U2
Alg DR2' FR2 DR2 F2' U2'
Alg DR2' FR' DR2 BR2 U'
Alg DR2' FR' DR2 BR2' BL2'
Alg DR' FR2' R' DR BR2'
Alg D' FR2' FL2 FR2 L D
Alg D' FR2' FL2 FR2 L2 D
Alg B2' DR2' FR2' R' DR2 B2
Alg DR2 D DR D' FR DR2
Alg DR2' FR' DR2 BR2 U' BL2
Alg FL
Alg FL2
Alg FL2'
Alg FL'
Alg FL L
Alg FL L2
Alg FL L2'
Alg FL L'
Alg FL2 F
Alg FL2 F2
Alg FL2 F2'
Alg FL2 F'
Alg FR2' FL2' FR2
Alg FR' FL2' FR
Alg FL L2 BL
Alg FL L2 BL2
Alg FL L2 BL2'
Alg FL L2 BL'
Alg FL L2' U
Alg FL L2' U2
Alg FL L2' U2'
Alg FL L' F
Alg FL L' F2
Alg FL L' F'
Alg FL2 F L
Alg FL2 F L2
Alg FL2 F L2'
Alg FL2 F L'
Alg FL2 F2' R
Alg FL2 F2' R2
Alg FL2 F2' R2'
Alg FR' FL2 F' FR
Alg FL L2 BL2' BR
Alg FL L2 BL2' BR2
Alg FL L2 BL' U
Alg FL L2' U BL2
Alg FL L2' U BL2'
Alg FL L2' U BL'
Alg FL L2' U2' R
Alg FL L2' U2' R2
Alg FL L' F' FL
Alg FL L' F' FL2
Alg FL L' F' FL2'
Alg B DL2' BL DL2 B'
Alg FL L2 BL' U BR2'
Alg FL2 L FL2'
Alg FL2 L2 FL2'
Alg FL2 L2' FL2'
Alg FL2 L' FL2'
Alg FL2' F2 FL2
Alg FL2' F2' FL2
Alg FL2' F' FL2
Alg FR2' FL' FR2 FL
Alg FL2 L2 FL2' L2'
Alg FL2 L2 FL2' L'
Alg FL2 L2 FL2' BL
Alg FL2 L2 FL2' BL2
Alg FL2 L2 FL2' BL2'
Alg FL2 L2 FL2' BL'
Alg FL2 L2' FL2' U
Alg FL2 L2' FL2' U2
Alg FL2 L2' FL2' U2'
Alg FL2 L2' FL2' BL
Alg FL2 L2' FL2' BL2
Alg FL2 L2' FL2' BL2'
Alg FL2 L2' FL2' BL'
Alg FL2 L' FL2' U
Alg FL2 L' FL2' U2'
Alg FL2 L' FL2' F
Alg FL2 L' FL2' F2
Alg FL2 L' FL2' F2'
Alg FL2 L' FL2' F'
Alg FL2' F L FL2
Alg FL2' F L' FL2
Alg FL2' F2 L FL2
Alg FL2' F2 L2 FL2
Alg FL2' F2 L2' FL2
Alg FL2' F2 FL2 F'
Alg FL2' F2 FL2 L2
Alg FL2' F2' R FL2
Alg FL2' F2' R2 FL2
Alg FL2' F2' R2' FL2
Alg FL2' F' R2' FL2
Alg FL2' F' R' FL2
Alg FL' FR2' FL FR2
Alg D DR2' FR2' DR2 D'
Alg D FR2' R' FR2 D'
Alg D' DL2 BL2 DL2' D
Alg B2 D2' B D2 B2
Alg DR2 D2 DR D2' DR2
Alg FR2 D FR D' FR2
Alg FL2 L2 BL' L2 FL2'
Alg FL2 L2 FL2' BL2 BR
Alg FL2 L2' BL L2' FL2'
Alg FL2 L2' FL2' BL L'
Alg DL FL DL'
Alg DL FL2 DL'
Alg DL FL2' DL'
Alg DL FL' DL'
Alg DL2 FL DL2'
Alg DL FL DL' L
Alg DL FL DL' L2
Alg DL FL DL' L2'
Alg DL FL DL' L'
Alg DL FL2 L DL'
Alg DL FL2 L2 DL'
Alg DL FL2 L2' DL'
Alg DL FL2 L' DL'
Alg DL FL2 DL' L
Alg DL FL2' DL' F2
Alg DL FL2' DL' F2'
Alg DL FL2' DL' F'
Alg DL2 FL DL2' BL
Alg DL2 FL DL2' BL2
Alg DL2 FL DL2' BL2'
Alg B DL2' FL DL2 B'
Alg B2 DL2' FL DL2 B2'
Alg FL2 F2 L' F2' FL2'
Alg FL2 F2' L' F2 FL2'
Alg FL2 F' L' F FL2'
Alg FL2' FR2' FL FR2 FL2
Alg FL2' FR' F' FR FL2
Alg DL FL DL' L BL2'
Alg DL FL DL' L BL'
Alg DL FL DL' L2 U2
Alg DL FL DL' L2 U2'
Alg DL FL2 L2' DL' U2
Alg DL FL2 L2' DL' U2'
Alg DL FL2 L' DL' F'
Alg DL FL2' DL' F2' R2
Alg DL FL2' DL' F2' R2'
Alg DL2 FL DL2' BL2 BR2
Alg B DL2 FL DL2' BL B'
Alg FL2 F2' L' F2 R2 FL2'
Alg FL2 F2' L' F2 R2' FL2'
Alg FL2' FR' F FR L FL2
Alg DL FL DL' L BL2' BR2
Alg DL FL2 L DL FL' DL2'
Alg FR F FR'
Alg FR F2 FR'
Alg FR F2' FR'
Alg FR F' FR'
Alg FR2 R FR2'
Alg FR2 R2 FR2'
Alg FR2 R2' FR2'
Alg FR2 R' FR2'
Alg FL2' L FL2
Alg FL2' L2 FL2
Alg FL2' L2' FL2
Alg FL' F FL
Alg FL' F2 FL
Alg FL' F' FL
Alg FR F FR' F'
Alg FR F2 FR' L
Alg FR F2' FR' U
Alg FR F2' FR' U2
Alg FR F2' FR' U2'
Alg FR F' FR' R
Alg FR F' FR' R2
Alg FR F' FR' R2'
Alg FR F' FR' R'
Alg FR2 R FR2' F2
Alg FR2 R FR2' R'
Alg FR2 R2' BR FR2'
Alg FR2 R2' BR2 FR2'
Alg FR2 R2' BR2' FR2'
Alg FR2 R2' BR' FR2'
Alg FL2' L2 FL2 BL
Alg FL2' L2 FL2 BL2
Alg FL2' L2' FL2 U
Alg FL' F L2 FL
Alg FL' F L2' FL
Alg FL' F FL L
Alg DR' FR2 R' FR2' DR
Alg FR F2' U2' BR FR'
Alg FR F2' U2' BR2 FR'
Alg FR F' FR R' FR2'
Alg FL2' L2' FL2 U BL2
Alg FL2' L2' FL2 U BL2'
Alg FR F L F' FR'
Alg FR F L2 F' FR'
Alg FR F L2' F' FR'
Alg FR F L' F' FR'
Alg FR F2 U F2' FR'
Alg FR F2 U2 F2' FR'
Alg FR F2 U2' F2' FR'
Alg FR F2' R F2 FR'
Alg FR F2' R2 F2 FR'
Alg FR F2' R2' F2 FR'
Alg FR FL' L FL FR'
Alg FR FL' L2 FL FR'
Alg FR FL' L' FL FR'
Alg FR2 F2' L F2 FR2'
Alg FR2 F2' L2 F2 FR2'
Alg FR2 F' U2 F FR2'
Alg FR2 F' U2' F FR2'
Alg FR2 R U R' FR2'
Alg FR2 R U' R' FR2'
Alg FR2 R2 BR2 R2' FR2'
Alg FR2 R2 BR2' R2' FR2'
Alg FR2' DR BR DR' FR2
Alg FR2' R2' U R2 FR2
Alg FR2' R2' U2 R2 FR2
Alg FR2' R' BR2 R FR2
Alg FR2' R' BR2' R FR2
Alg FR2' R' BR' R FR2
Alg FL2 L BL L' FL2'
Alg FL2 L2 U2' L2' FL2'
Alg FL2 DL' BL2 DL FL2'
Alg FL2' F2 R2' F2' FL2
Alg FL2' L2' BL2 L2 FL2
Alg FL' F2 L F2' FL
Alg FL' F2 L2 F2' FL
Alg FL' F' R' F FL
Alg FL' FR R' FR' FL
Alg FR F L2' F' FR' BL
Alg FR F L2' F' FR' BL2
Alg FR F L' F' FR' F'
Alg FR F2 U2 BR2 F2' FR'
Alg FR F2 U2 BR2' F2' FR'
Alg FR F2' R F2 R2' FR'
Alg FR F2' R2' F2 FR' R'
Alg FR FL' L FL FR' F'
Alg FR2 F' U2 F FR2' L2'
Alg FR F L2 BL' L2 F' FR'
Alg FR F L2' F U' F2' FR'
Alg R
Alg R2
Alg R2'
Alg R'
Alg R2 F
Alg R2 F2
Alg R2 F2'
Alg R2 F'
Alg R2' U
Alg R2' U2
Alg R2' U2'
Alg R2' U'
Alg R' BR
Alg R' BR2
Alg R' BR2'
Alg R' BR'
Alg DR BR DR'
Alg DR BR2' DR'
Alg DR BR' DR'
Alg FR R FR'
Alg R2 F2' L
Alg R2 F2' L2
Alg R2 F2' L2'
Alg R2 F' U
Alg R2 F' U2
Alg R2 F' U'
Alg R2' U F
Alg R2' U F2'
Alg R2' U F'
Alg R2' U2' BL
Alg R2' U2' BL2
Alg R2' U2' BL2'
Alg R2' U' BR2'
Alg DR BR DR' R
Alg DR BR DR' R2
Alg DR BR2' BL2' DR'
Alg DR BR2' BL' DR'
Alg R2 F' U L2
Alg R2 F' U L2'
Alg FR' F FR
Alg FR' F2 FR
Alg FR' F2' FR
Alg FR' F' FR
Alg R F R'
Alg R F2 R'
Alg R F2' R'
Alg R F' R'
Alg R2 U2 R2'
Alg R2 U2' R2'
Alg R2' BR R2
Alg R2' BR2 R2
Alg R2' BR2' R2
Alg FR R2 FR' R2'
Alg FR R2' FR' R2
Alg FR' F FR F'
Alg FR' F2 FR F'
Alg FR' F2 FR L
Alg FR' F2 FR L2
Alg FR' F2 FR L2'
Alg FR' F2 FR L'
Alg FR' F2' FR U2'
Alg FR' F2' FR L2
Alg FR' F2' FR L2'
Alg FR' F2' FR L'
Alg FR' F' FR U2'
Alg R F2' U' R'
Alg R F2' R' L
Alg R F2' R' L2
Alg R F2' R' L2'
Alg R2 U2 R2' BL2
Alg R2 U2 R2' BL2'
Alg R2 U2' BR R2'
Alg R2 U2' BR2 R2'
Alg R2 U2' R2' BL2'
Alg R2 U2' R2' BR2'
Alg R2 U2' R2' BR'
Alg R2 U' BR2' R2'
Alg R2' BR R2 BR2'
Alg DR BR2 BL2' BR2' DR'
Alg FR R2' FR' R2 F2
Alg FR' F2 L' F2 FR
Alg FR' F2' U2' BR' FR
Alg FR' F2' L F2' FR
Alg DR' R DR
Alg DR' R2 DR
Alg DR' R2' DR
Alg DR' R' DR
Alg DR' R DR F
Alg DR' R DR F2
Alg DR' R DR F2'
Alg DR' R DR F'
Alg DR' R2 DR U
Alg DR' R2 DR U2
Alg DR' R2 DR U2'
Alg DR' R2 DR U'
Alg DR' R2' DR BR
Alg DR' R2' DR BR2
Alg DR' R2' DR BR2'
Alg DR' R2' DR BR'
Alg DR' R' DR BR
Alg DR' R' DR BR2'
Alg DR' R' DR BR'
Alg B2' DR2' R' DR2 B2
Alg DR2' FR' F FR DR2
Alg DR2' FR' F2 FR DR2
Alg DR2' FR' F' FR DR2
Alg DR' R DR F2' L
Alg DR' R DR F2' L2
Alg DR' R DR F2' L2'
Alg DR' R DR F' U
Alg DR' R DR F' U2
Alg DR' R DR F' U'
Alg DR' R2 U2' BL DR
Alg DR' R2 U2' BL2 DR
Alg DR' R2 U2' BL2' DR
Alg DR' R2 DR U F2
Alg DR' R' DR BR2' BL2'
Alg DR2' FR' F2 FR DR2 L
Alg DR2' FR' F2 FR DR2 L2
Alg DR' FR' F' FR R' DR
Alg BR
Alg BR2
Alg BR2'
Alg BR'
Alg BR2' U
Alg BR2' U2
Alg BR2' U2'
Alg BR2' U'
Alg BR' BL
Alg BR' BL2
Alg BR' BL2'
Alg BR' BL'
Alg B BL B'
Alg B BL2' B'
Alg B BL' B'
Alg BR2' U2 F
Alg BR2' U2 F2
Alg BR2' U2 F2'
Alg BR2' U2 F'
Alg BR2' U2' L
Alg BR2' U2' L2
Alg BR2' U2' L2'
Alg BR2' U' BL2'
Alg BR' BL U
Alg BR' BL U2
Alg BR' BL U2'
Alg BR' BL U'
Alg B BL B' BR
Alg B BL B' BR2
Alg B BL B' BR2'
Alg B BL2' L2' B'
Alg B BL2' L' B'
Alg BR2' U2' L F2
Alg BR2' U2' L F2'
Alg BR2' U2' L F'
Alg BR2 U BR2'
Alg BR2 U2 BR2'
Alg BR2 U2' BR2'
Alg BR2 U' BR2'
Alg BR2' BL BR2
Alg BR2' BL2 BR2
Alg BR2' BL2' BR2
Alg BR R BR' R'
Alg BR2 U BR2' U2'
Alg BR2 U BR2' U'
Alg BR2 U BR2' F
Alg BR2 U BR2' F2
Alg BR2 U BR2' F2'
Alg BR2 U BR2' F'
Alg BR2 U2 BR2' F
Alg BR2 U2 BR2' F2
Alg BR2 U2 BR2' F2'
Alg BR2 U2 BR2' F'
Alg BR2 U2 BR2' L
Alg BR2 U2 BR2' L2
Alg BR2 U2 BR2' L2'
Alg BR2 U2' BL BR2'
Alg BR2 U2' BL2 BR2'
Alg BR2 U2' BL' BR2'
Alg BR2 U2' BR2' L
Alg BR2 U2' BR2' L2'
Alg BR2 U2' BR2' BL2'
Alg BR2 U2' BR2' BL'
Alg BR2 U' BL BR2'
Alg BR2 U' BL2' BR2'
Alg BR2 U' BL' BR2'
Alg BR2' BL BR2 U2
Alg BR2' BL BR2 U2'
Alg BR2' BL BR2 BL2'
Alg BR2' BL BR2 BL'
Alg B BL2 L2' BL2' B'
Alg DR' R2 F R2' DR
Alg BR2 U F' U2' BR2'
Alg BR2 U BR2' U2' BL'
Alg BR2 U2 F U' BR2'
Alg BR2 U2 BR2' L F2'
Alg B' BR B
Alg B' BR2 B
Alg B' BR2' B
Alg B' BR' B
Alg B' BR2 B U
Alg B' BR2 B U2
Alg B' BR2 B U2'
Alg B' BR2 B U'
Alg B' BR2' B BL
Alg B' BR2' B BL2
Alg B' BR2' B BL2'
Alg B' BR2' B BL'
Alg B' BR' B BL
Alg B' BR' B BL2'
Alg B' BR' B BL'
Alg B' BR2 U2' L B
Alg B' BR2 U2' L2 B
Alg B' BR2 U2' L2' B
Alg B' BR2 B U2 F
Alg B' BR2 B U2 F2
Alg B' BR2 B U2 F2'
Alg B' BR2 B U2 F'
Alg B' BR2' B BL U
Alg B' BR2' B BL U2
Alg B' BR2' B BL U2'
Alg B' BR2' B BL U'
Alg B' BR' B BL2' L2'
Alg B' BR' B BL2' L'
Alg BR2 R U R' BR2'
Alg B' BR2 U2' L B F2'
Alg B' BR2 U2' L B F'
Alg B' BR' B BR2 BL BR2'
Alg B' BR2 U R BR' R' B
Alg BR U BR'
Alg BR U2 BR'
Alg BR U2' BR'
Alg BR U' BR'
Alg BR2 BL BR2'
Alg BR2 BL2 BR2'
Alg BR2 BL2' BR2'
Alg BR2 BL' BR2'
Alg R2' F R2
Alg R2' F2 R2
Alg R2' F2' R2
Alg R' U R
Alg R' U2 R
Alg R' U' R
Alg BR U BR' U'
Alg BR U2 BR' F
Alg BR U2' BR' L
Alg BR U2' BR' L2
Alg BR U2' BR' L2'
Alg BR U' BL BR'
Alg BR U' BL2 BR'
Alg BR U' BL2' BR'
Alg BR U' BR' BL'
Alg BR2 BL BR2' U2
Alg BR2 BL BR2' BL'
Alg R2' F2' R2 L
Alg R2' F2' R2 L2
Alg R' U F2 R
Alg R' U F2' R
Alg R' U R F
Alg BR U' BR BL' BR2'
Alg BR U F U' BR'
Alg BR U F2 U' BR'
Alg BR U F2' U' BR'
Alg BR U F' U' BR'
Alg BR U2 L U2' BR'
Alg BR U2 L2 U2' BR'
Alg BR U2 L2' U2' BR'
Alg BR U2' BL U2 BR'
Alg BR U2' BL2 U2 BR'
Alg BR U2' BL2' U2 BR'
Alg BR R' F R BR'
Alg BR R' F2 R BR'
Alg BR R' F' R BR'
Alg BR2 U2' F U2 BR2'
Alg BR2 U2' F2 U2 BR2'
Alg BR2 U' L2 U BR2'
Alg BR2 U' L2' U BR2'
Alg BR2 BL L BL' BR2'
Alg BR2 BL L' BL' BR2'
Alg BR2' BL2' L BL2 BR2
Alg BR2' BL2' L2 BL2 BR2
Alg R2 F2 L F2' R2'
Alg R2 F2 L2 F2' R2'
Alg R2 F2 L2' F2' R2'
Alg R2' U2 BL2' U2' R2
Alg R' U2 F U2' R
Alg R' U2 F2 U2' R
Alg R' U' BL' U R
Alg R' BR BL' BR' R
Alg BR U F' U' BR' U'
Alg BR U2 L' BL2 U2' BR'
Alg BR U2' BL U2 BL2' BR'
Alg BR U2' BL2' U2 BR' BL'
Alg BR R' F R BR' U'
Alg BR2 U' L2 U BR2' F2'
Alg BR2 U' L2 U BR2' F'
Alg BR U F2' U L' U2' BR'
Alg BR U F2' L' F U' BR'
Alg F
Alg F2
Alg F2'
Alg F'
Alg F L
Alg F L2
Alg F L2'
Alg F L'
Alg F2 U
Alg F2 U2
Alg F2 U2'
Alg F2 U'
Alg F L2' BL
Alg F L2' BL2
Alg F L2' BL2'
Alg F L' U
Alg F L' U2
Alg F L' U2'
Alg F L' U'
Alg F2 U L
Alg F2 U L2
Alg F2 U L2'
Alg F2 U L'
Alg F L' U BL2
Alg F L' U BL2'
Alg F L' U BL'
Alg F L' U' F
Alg F L' U' F2
Alg F L' U' F2'
Alg F2 L F2'
Alg F2 L2 F2'
Alg F2 L2' F2'
Alg F2 L' F2'
Alg F2' U2 F2
Alg F2' U2' F2
Alg F2' U' F2
Alg F2 L2 F2' L2'
Alg F2 L2 F2' L'
Alg F2 L2' BL F2'
Alg F2 L2' BL2 F2'
Alg F2 L2' BL2' F2'
Alg F2 L' F2' U
Alg F2 L' F2' U2
Alg F2 L' F2' U2'
Alg F2 L' F2' U'
Alg F2 L' BL F2'
Alg F2 L' BL2 F2'
Alg F2 L' BL2' F2'
Alg F2' U L F2
Alg F2' U L2 F2
Alg F2' U L' F2
Alg F2' U2 F2 U2'
Alg F2' U2 F2 U'
Alg F2' U2 F2 L2
Alg F2' U2 F2 L2'
Alg F2' U2 F2 L'
Alg F2' U2 L F2
Alg F' R' F R
Alg F L2 BL L2' F'
Alg F L2 BL2 L2' F'
Alg F2 L2 F2' L2' U2'
Alg F2 L2' BL' L F2'
Alg F2 L' F U2' F2
Alg F2 L' F' U' F'
Alg FL F FL'
Alg FL F2 FL'
Alg FL F2' FL'
Alg FL F' FL'
Alg FL F FL' L
Alg FL F FL' L2
Alg FL F FL' L2'
Alg FL F FL' L'
Alg FL F2 FL' L
Alg FL F2 FL' L2
Alg FL F2 FL' L2'
Alg FL F2 FL' L'
Alg FL F2' FL' U2
Alg FL F2' FL' U2'
Alg FL F2' FL' U'
Alg F2 U2 L' U2' F2'
Alg F2 U2' L' U2 F2'
Alg F2 U' L' U F2'
Alg FL F FL' L2 BL
Alg FL F FL' L2 BL2
Alg FL F FL' L2 BL2'
Alg FL F2 FL' L2' BL
Alg FL F2 FL' L2' BL2
Alg FL F2 FL' L2' BL2'
Alg FL F2 FL' L' U'
Alg FL F FL' F2' L' F2
Alg F2 U F U L U2' F2'
Alg F2' L F2
Alg F2' L2 F2
Alg F2' L2' F2
Alg F2' L' F2
Alg F' U F
Alg F' U2 F
Alg F' U2' F
Alg F' U' F
Alg R U R'
Alg R U2' R'
Alg R U' R'
Alg F R' F' R
Alg F2' L F2 L'
Alg F2' L2' BL F2
Alg F2' L2' BL2 F2
Alg F2' L2' BL2' F2
Alg F' U F U'
Alg F' U F L
Alg F' U F L2
Alg F' U F L2'
Alg F' U F L'
Alg R U2' R' BL2
Alg R U2' R' BL2'
Alg R U2' R' BL'
Alg F2' L' F U' F
Alg F2 L2 BL L2' F2'
Alg F2 L2 BL2 L2' F2'
Alg F2 L2 BL2' L2' F2'
Alg F2 L2 BL' L2' F2'
Alg F2' U BL U' F2
Alg F2' U BL' U' F2
Alg F2' L' BL L F2
Alg F2' L' BL2 L F2
Alg F2' L' BL2' L F2
Alg F2' L' BL' L F2
Alg F' U2 L U2' F
Alg F' U2 L2 U2' F
Alg F' U2 L2' U2' F
Alg F' U2' BL2 U2 F
Alg R U L U' R'
Alg R U L' U' R'
Alg R F' L F R'
Alg R2 U2' L2 U2 R2'
Alg R2 U' BL2 U R2'
Alg R2 U' BL2' U R2'
Alg R2 U' BL' U R2'
Alg R2 BR BL' BR' R2'
Alg F2 L2 BL2' L2' F2' U2
Alg F2' U BL U' F2 L
Alg F2' U BL' U' F2 L2
Alg F2' U BL' U' F2 L2'
Alg F2' L' BL L F2 U2
Alg F2' L' BL L F2 U2'
Alg F2' L' BL' L F2 U
Alg F2' L' BL' L F2 U2
Alg F' U2 L' U BL2' U2 F
Alg F' U2' BL L' BL2' U2 F
Alg U
Alg U2
Alg U2'
Alg U'
Alg U L
Alg U L2
Alg U L2'
Alg U L'
Alg U2 BL
Alg U2 BL2
Alg U2 BL2'
Alg U2 BL'
Alg U L' BL
Alg U L' BL2
Alg U L' BL2'
Alg U L' BL'
Alg U2 BL L
Alg U2 BL L2
Alg U2 BL L2'
Alg U2 BL L'
Alg U F' L F
Alg U L' BL' U
Alg U L' BL' U2
Alg U2 L U2'
Alg U2 L2 U2'
Alg U2 L2' U2'
Alg U2 L' U2'
Alg U2' BL2 U2
Alg U2' BL2' U2
Alg U2' BL' U2
Alg U2 L2 U2' L2'
Alg U2 L2 U2' L'
Alg U2 L' U2' BL
Alg U2 L' U2' BL2
Alg U2 L' U2' BL2'
Alg U2 L' U2' BL'
Alg U2' BL L U2
Alg U2' BL L2 U2
Alg U2' BL L2' U2
Alg U2' BL L' U2
Alg U2' BL2 U2 L2
Alg U2' BL2 U2 L2'
Alg U2' BL2 U2 L'
Alg U2' BL2 U2 BL2'
Alg U2' BL2 U2 BL'
Alg U2' BL2 L U2
Alg U' BR' U BR
Alg U2 L' U BL2' U2
Alg U2 L2' U2' L2 BL2
Alg U2 L2' U2' L2 BL2'
Alg U2 L' U' BL' U'
Alg U2' BL2 U' L U2'
Alg F U F'
Alg F U2 F'
Alg F U2' F'
Alg F U' F'
Alg F U F' L
Alg F U F' L2
Alg F U F' L2'
Alg F U F' L'
Alg F U2 F' L
Alg F U2 F' L2
Alg F U2 F' L2'
Alg F U2 F' L'
Alg F U2' BL2 F'
Alg F U2' BL2' F'
Alg F U2' BL' F'
Alg U2 BL2 L' BL2' U2'
Alg U2 BL' L' BL U2'
Alg U2 BL2' L' BL2 U2'
Alg F U2 F' L' BL'
Alg F U F' U2' L' U2
Alg U2 L U2 L2' U' BL' U2
Alg U2' L U2
Alg U2' L2 U2
Alg U2' L2' U2
Alg U2' L' U2
Alg U' BL U
Alg U' BL2 U
Alg U' BL2' U
Alg U' BL' U
Alg BR BL BR'
Alg BR BL2' BR'
Alg BR BL' BR'
Alg U BR' U' BR
Alg U2' L U2 L'
Alg U' BL U L
Alg U' BL U L2
Alg U' BL U L2'
Alg U' BL U L'
Alg U' BL U BL'
Alg U2' L' U BL' U
Alg U' BL2 L BL2' U
Alg U' BL2 L2 BL2' U
Alg U' BL2 L2' BL2' U
Alg U' BL2 L' BL2' U
Alg BR U' L U BR'
Alg BR U' L2 U BR'
Alg BR U' L2' U BR'
Alg BR U' L' U BR'
Alg BR BL L BL' BR'
Alg BR BL L' BL' BR'
Alg BR2 BL2' L BL2 BR2'
Alg BR2 BL2' L2 BL2 BR2'
Alg U2' L BL2' L' BL2 U2
Alg U2' L2 F' L2' F U2
Alg U2' L' DL L DL' U2
Alg U2' BL2' L BL2 L' U2
Alg U2' BL2' L2 BL2 L2' U2
Alg U' BL2 L BL2' U BL
Alg U' BL2 L2 BL2' U L
Alg U' BL2 L2 BL2' U BL2'
Alg U' BL2 L2 BL2' U BL'
Alg U' BL2 L2 BL2' L2' U
Alg BR BL L' BL' BR' BL2'
Alg BR BL L' BL' BR' BL'
Alg U' BL U BL U' L2' BL2' U
Alg U' BL2 U' L2 U L' BL2' U
Alg L
Alg L2
Alg L2'
Alg L'
Alg L' BL
Alg L' BL2
Alg L' BL2'
Alg L' BL'
Alg U BL U'
Alg U BL2 U'
Alg U BL2' U'
Alg U BL' U'
Alg U BL U' L
Alg U BL U' L2
Alg U BL U' L2'
Alg U BL U' L'
Alg U BL U' BL'
Alg L2' BL L2
Alg L2' BL2 L2
Alg L2' BL2' L2
Alg L2' BL' L2
Alg L2 DL L2' DL'
Alg L2' BL L2 BL2'
Alg L2' BL L2 BL'
Alg F' L2 BL L2' F
Alg F' L2 BL2 L2' F
Alg F' L2 BL2' L2' F
Alg F' L2 BL' L2' F
Alg L2 DL L' DL' L'
Alg L2' U BL2' U' L2
Alg L2' BL L2' BL2' L'
Alg L2' BL L' BL2' L2'
Alg L2' DL L' DL' L2
Alg L' U' L' U L2
Alg U L' DL L DL' U'
Alg F' L2 BL L2' BL2' F
Alg L2 DL' BL DL2 L2' DL'
Alg L2' U BL2' U' BL L2
Alg L2' BL' U BL' U' L2
Alg L2' BL' L2 U' L' U
Alg U' L U
Alg U' L2 U
Alg U' L2' U
Alg U' L' U
Alg U' L2' U BL
Alg U' L2' U BL2
Alg U' L2' U BL2'
Alg U' L2' U BL'
Alg U' L' U BL
Alg U' L' U BL2
Alg U' L' U BL2'
Alg U' L' U BL'
Alg U' L' U L BL L'
Alg U' L' U L2 BL L2'
Alg U' L' U BL U' L2 U
Alg L2 BL L2'
Alg L2 BL2 L2'
Alg L2 BL2' L2'
Alg L2 BL' L2'
Alg L2 BL L2' BL'
Alg L DL L' DL'
Alg DL L DL' L'
Alg L U' L2 U L2
Alg L DL' BL DL L'
Alg L DL' BL2 DL L'
Alg L DL' BL' DL L'
Alg DL L DL' L' BL'
Alg L2 BL L' DL L' DL'
Alg FL' L BL L' FL
Alg FL' L BL2 L' FL
Alg FL' L BL2' L' FL
Alg FL' L BL' L' FL
Alg FL' DL' BL DL FL
Alg FL' DL' BL2 DL FL
Alg FL' DL' BL2' DL FL
Alg FL' DL' BL' DL FL
Alg L2 BL2' U BL2 U' L2'
Alg FL' L BL L' FL BL2'
Alg FL' L BL' L' FL BL
Alg U' F U BL U' F' U
Alg U' F U BL2 U' F' U
Alg U' F U BL2' U' F' U
Alg F' FL2' DL' BL' DL FL2 F
Alg L2' BL2 L2' BL' L2 BL' L2
Alg DL L DL2' BL' DL2 L' DL'
Alg DL2 FL2' DL2 BL' DL2' FL2 DL2'
Alg FL' L U BL2' U' BL L' FL
Alg FL' L2 U' L' U BL2 L' FL
Alg L BL L'
Alg L BL2 L'
Alg L BL2' L'
Alg L BL' L'
Alg DL' BL DL
Alg DL' BL2 DL
Alg DL' BL2' DL
Alg DL' BL' DL
Alg L BL L' BL'
Alg L' DL L DL'
Alg L BL2 L' DL' BL' DL
Alg L U BL2' U' BL2 L'
Alg L BL2' U BL2 U' L'
Alg DL' B' BL2 B BL2' DL
Alg DL' BL2 B' BL2' B DL
Alg U BL2' DL2' BL2 U' BL2' DL2
Alg B' BL2 L2 BL2' B BL2 L2'
Alg L U BL2' U' BL2 L' BL2'
Alg L U BL2' U' BL2 L' BL'
Alg L BL B BL' L' BL B'
Alg L BL2' U BL2 U' L' BL2
Alg L BL' U BL2 U' BL L'
Alg L BL' U BL2' U' BL L'
Alg L BL' U BL' U' BL L'
Alg L2 BL2 L2' BL' L2 BL' L2'
Alg DL' BL B' BL2' B BL' DL
Alg L BL2' L U2 BR' U' BR U' L2'
Alg L BL2' L BL L' BL L BL2' L2'
Alg BL
Alg BL2
Alg BL2'
Alg BL'
Alg U BR BL2 BR' BL2' U'
Alg B BL DL BL' DL' B'
Alg L' BL2' DL' BL2 DL L
Alg BR B BL B' BL' BR'
Alg U BR BL2 BR' BL2' U' BL2
Alg U BL BR BL' BR' U'
Alg U BR BL BR' BL' U'
Alg U' L' BL2' L BL2 U
Alg B' BR' BL2' BR BL2 B
Alg L BL2 U BL2' U' L'
Alg BR B BL2 B' BL2' BR'
Alg U BL2 U' BL' U BL' U'
Alg B BL DL BL DL' BL2' B'
Alg B BL2 DL BL' DL' BL' B'
Alg B' BL' B BL2' B' BL2' B
Alg U BL U' BL2 U BL2 U' BL2
Alg U BR2 B' BR2' U' BR B BR'
Alg BL2 BR B DL' B DL B2' BR'
Alg B BL2' B2' BR B BR' B BL2 B'
Alg U' BL' L' BL L U BL
Alg B' BL2 B BL B' BL2 B
Alg B' BL2' B BL' B' BL2' B
Alg B' BL' BR' BL' BR BL2 B
Alg B' BL2' BR' BL BR BL B
Alg U' BL' L' BL' L BL2 U BL'
Alg L' BL' L' DL L DL' BL L BL
Alg L U BL U' BL' L'
Alg L BL U BL' U' L'
Alg BR' U' BL' U BL BR
Alg L U2 BR' U' BR U' L'
Alg U BL U2' L U L2' BL L BL2'
Alg U' L2 F' L' F2 U' F' U2 L'
Alg U BR' U' L U BR U' L'
Alg U BR B BR' U' BR B' BR'
Alg U' L U BR' U' L' U BR
Alg B DL' B' BR B DL B' BR'
Alg L' DL' B DL L DL' B' DL
Alg BR B BR' U BR B' BR' U'
Alg BR B DL' B' BR' B DL B'
Alg U BR2' U2 L2 U2' BR2 U2 L2' U2
Alg U2' L2 U2' BR2' U2 L2' U2' BR2 U'
Alg U BL' B' BL U' L U2 BL' B BL U2' L'
Alg U BR' U' L F' L2' U BR U' L2 F L'
Alg U BR U' L U BR' U' L'
Alg U' BL2 B BL2' U BL2 B' BL2'
Alg L U BR U' L' U BR' U'
Alg L BL2' B' BL2 L' BL2' B BL2
Alg U BR' U2 L2 U2' BR U2 L2' U2
Alg L' BL2 L2' F' L2 BL2' L2' F L2'
Alg U BL2' U R U' BL2 U' L U2 R' U2' L'
Alg U BR U' L2 F L' U BR' U' L F' L2'
Alg U L' BL2 L' FL' L BL2' L U' L2' FL L2
Alg U BR2' U R' U2' L U2 R U' BR2 U' L'`);
}

});

parcelRequire.register("aXnsQ", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("6UAtO")).then(()=>parcelRequire("0Hdsz"));

});

parcelRequire.register("8lGNE", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("jp15G")).then(()=>parcelRequire("iMTm8"));

});

parcelRequire.register("2bgtp", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("hVA7x")).then(()=>parcelRequire("3TT0s"));

});

parcelRequire.register("eRbdX", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("2H1eA")).then(()=>parcelRequire("k8o4B"));

});

parcelRequire.register("3STmC", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("8qdMJ")).then(()=>parcelRequire("2mwPI"));

});

parcelRequire.register("6S1y9", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("fAgLb")).then(()=>parcelRequire("foV8C"));

});

parcelRequire.register("hhVwm", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("iOIyY")).then(()=>parcelRequire("9twny"));

});

parcelRequire.register("zZZ8e", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("hT7Fn")).then(()=>parcelRequire("3kcgo"));

});

parcelRequire.register("jtaie", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("3EtZP")).then(()=>parcelRequire("cnUGG"));

});

parcelRequire.register("ljFFV", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("7o8XC")).then(()=>parcelRequire("5SUzi"));

});



//# sourceMappingURL=search-worker-js-entry-32MQILEZ.9799968b.js.map
