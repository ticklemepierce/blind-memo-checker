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
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire96b2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire96b2"] = parcelRequire;
}
parcelRequire.register("jWypA", function(module, exports) {

(parcelRequire("aKzDW")).register(JSON.parse('{"cbG4t":"index.37f1b79c.js","6llIy":"3d-dynamic-5LHE6HI6.2eb8b92c.js","eXwSi":"puzzle-geometry.69ada42f.js","1HNOs":"puzzle-geometry.7d9e3db7.js","7PBKw":"2x2x2.kpuzzle.json-BHTFIME6.27d20c5e.js","3kG3a":"2x2x2.kpuzzle.svg-CYX37VBY.97263641.js","iQYCP":"3x3x3.kpuzzle.svg-5U7LUACF.57bebda3.js","ltr7p":"3x3x3-ll.kpuzzle.svg-KZNSV76X.4504a1fd.js","hiM5S":"clock.kpuzzle.json-PYHONPBY.00a8fab7.js","EpDh5":"clock.kpuzzle.svg-JSRDCSQF.715234c1.js","fFNOr":"fto.kpuzzle.svg-H2RJX6UR.70c60676.js","hb2KT":"pyraminx.kpuzzle.svg-UHDZCBET.749f1278.js","ipDMp":"sq1-hyperorbit.kpuzzle.json-AMXAFQCM.17ef048c.js","f62aa":"sq1-hyperorbit.kpuzzle.svg-MNHJTJ6V.644a3c3d.js","5TFxH":"kilominx.kpuzzle.svg-ZLRTRUTM.fc6eb27b.js","7HvmJ":"redi_cube.kpuzzle.json-43CP47Z6.eb77a781.js","e9BqM":"redi_cube.kpuzzle.svg-3DWDYE3O.34acf5b2.js"}'));

});
parcelRequire.register("aKzDW", function(module, exports) {

$parcel$export(module.exports, "register", () => $7d39d93f9098a310$export$6503ec6e8aabbaf, (v) => $7d39d93f9098a310$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $7d39d93f9098a310$export$f7ad0328861e2f03, (v) => $7d39d93f9098a310$export$f7ad0328861e2f03 = v);
var $7d39d93f9098a310$export$6503ec6e8aabbaf;
var $7d39d93f9098a310$export$f7ad0328861e2f03;
"use strict";
var $7d39d93f9098a310$var$mapping = {};
function $7d39d93f9098a310$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$7d39d93f9098a310$var$mapping[keys[i]] = pairs[keys[i]];
}
function $7d39d93f9098a310$var$resolve(id) {
    var resolved = $7d39d93f9098a310$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$7d39d93f9098a310$export$6503ec6e8aabbaf = $7d39d93f9098a310$var$register;
$7d39d93f9098a310$export$f7ad0328861e2f03 = $7d39d93f9098a310$var$resolve;

});


parcelRequire.register("7TbMZ", function(module, exports) {

$parcel$export(module.exports, "direct", () => $5be6d08b387af016$export$d32346616aa538f3);
$parcel$export(module.exports, "directedGenerator", () => $5be6d08b387af016$export$845111c728f7985d);
$parcel$export(module.exports, "AlgBuilder", () => $5be6d08b387af016$export$d5b45e94760ffddd);
$parcel$export(module.exports, "Alg", () => $5be6d08b387af016$export$e5a7308a1ffbe909);
$parcel$export(module.exports, "Conjugate", () => $5be6d08b387af016$export$21829b047cfb53df);
$parcel$export(module.exports, "Move", () => $5be6d08b387af016$export$e49a5ad3dd6df925);
$parcel$export(module.exports, "QuantumMove", () => $5be6d08b387af016$export$9bfa9ee45a81759e);
$parcel$export(module.exports, "Grouping", () => $5be6d08b387af016$export$3885c0af90651e94);
$parcel$export(module.exports, "TraversalDownUp", () => $5be6d08b387af016$export$5b23793b60fb4cfe);
$parcel$export(module.exports, "TraversalUp", () => $5be6d08b387af016$export$78fadb44b4228be0);
$parcel$export(module.exports, "experimentalAppendMove", () => $5be6d08b387af016$export$730b7873cfa7a92);

var $hJBlP = parcelRequire("hJBlP");
// src/cubing/alg/common.ts
var $5be6d08b387af016$var$writeAlgDebugField = false;
var $5be6d08b387af016$var$Comparable = class {
    is(c) {
        return this instanceof c;
    }
    as(c) {
        return this instanceof c ? this : null;
    }
};
var $5be6d08b387af016$var$AlgCommon = class extends $5be6d08b387af016$var$Comparable {
    constructor(){
        super();
        if ($5be6d08b387af016$var$writeAlgDebugField) Object.defineProperty(this, "_debugStr", {
            get: ()=>{
                return this.toString();
            }
        });
    }
    get log() {
        return console.log.bind(console, this, this.toString());
    }
};
// src/cubing/alg/iteration.ts
var $5be6d08b387af016$export$ec810cf44eb98f56 = /* @__PURE__ */ ((IterationDirection3)=>{
    IterationDirection3[IterationDirection3["Forwards"] = 1] = "Forwards";
    IterationDirection3[IterationDirection3["Backwards"] = -1] = "Backwards";
    return IterationDirection3;
})($5be6d08b387af016$export$ec810cf44eb98f56 || {});
function $5be6d08b387af016$var$toggleDirection(iterationDirection, flip = true) {
    if (!flip) return iterationDirection;
    switch(iterationDirection){
        case 1 /* Forwards */ :
            return -1 /* Backwards */ ;
        case -1 /* Backwards */ :
            return 1 /* Forwards */ ;
    }
}
function $5be6d08b387af016$export$d32346616aa538f3(g, iterDir) {
    return iterDir === -1 /* Backwards */  ? Array.from(g).reverse() : g;
}
function $5be6d08b387af016$var$reverse(g) {
    return Array.from(g).reverse();
}
function* $5be6d08b387af016$export$845111c728f7985d(g, direction) {
    direction === -1 /* Backwards */  ? yield* $5be6d08b387af016$var$reverseGenerator(g) : yield* g;
}
function* $5be6d08b387af016$var$reverseGenerator(g) {
    for (const t of Array.from(g).reverse())yield t;
}
// src/cubing/alg/limits.ts
var $5be6d08b387af016$var$MAX_INT = 2147483647;
var $5be6d08b387af016$var$MAX_INT_DESCRIPTION = "2^31 - 1";
var $5be6d08b387af016$var$MIN_INT = -2147483648;
// src/cubing/alg/AlgBuilder.ts
var $5be6d08b387af016$var$_units;
var $5be6d08b387af016$export$d5b45e94760ffddd = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_units, []);
    }
    push(u) {
        (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units).push(u);
    }
    experimentalPushAlg(alg) {
        for (const u of alg.units())this.push(u);
    }
    experimentalNumUnits() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units).length;
    }
    toAlg() {
        return new $5be6d08b387af016$export$e5a7308a1ffbe909((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units));
    }
    reset() {
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_units, []);
    }
};
$5be6d08b387af016$var$_units = new WeakMap();
// src/cubing/alg/units/containers/Commutator.ts
var $5be6d08b387af016$var$_A, $5be6d08b387af016$var$_B;
var $5be6d08b387af016$var$_Commutator = class extends $5be6d08b387af016$var$AlgCommon {
    constructor(aSource, bSource){
        super();
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_A, void 0);
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_B, void 0);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_A, $5be6d08b387af016$var$experimentalEnsureAlg(aSource));
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_B, $5be6d08b387af016$var$experimentalEnsureAlg(bSource));
    }
    get A() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_A);
    }
    get B() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_B);
    }
    isIdentical(other) {
        const otherAsCommutator = other.as($5be6d08b387af016$var$_Commutator);
        return !!(otherAsCommutator?.A.isIdentical(this.A) && otherAsCommutator?.B.isIdentical(this.B));
    }
    invert() {
        return new $5be6d08b387af016$var$_Commutator((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_B), (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_A));
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ , depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === 1 /* Forwards */  ? this : this.invert();
        else if (iterDir === 1 /* Forwards */ ) {
            yield* this.A.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.B.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.A.experimentalExpand(-1 /* Backwards */ , depth - 1);
            yield* this.B.experimentalExpand(-1 /* Backwards */ , depth - 1);
        } else {
            yield* this.B.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.A.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.B.experimentalExpand(-1 /* Backwards */ , depth - 1);
            yield* this.A.experimentalExpand(-1 /* Backwards */ , depth - 1);
        }
    }
    toString() {
        return `[${(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_A).toString()}, ${(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_B).toString()}]`;
    }
};
var $5be6d08b387af016$export$13a2aeb669e49c0 = $5be6d08b387af016$var$_Commutator;
$5be6d08b387af016$var$_A = new WeakMap();
$5be6d08b387af016$var$_B = new WeakMap();
// src/cubing/alg/units/containers/Conjugate.ts
var $5be6d08b387af016$var$_A2, $5be6d08b387af016$var$_B2;
var $5be6d08b387af016$var$_Conjugate = class extends $5be6d08b387af016$var$AlgCommon {
    constructor(aSource, bSource){
        super();
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_A2, void 0);
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_B2, void 0);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_A2, $5be6d08b387af016$var$experimentalEnsureAlg(aSource));
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_B2, $5be6d08b387af016$var$experimentalEnsureAlg(bSource));
    }
    get A() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_A2);
    }
    get B() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_B2);
    }
    isIdentical(other) {
        const otherAsConjugate = other.as($5be6d08b387af016$var$_Conjugate);
        return !!(otherAsConjugate?.A.isIdentical(this.A) && otherAsConjugate?.B.isIdentical(this.B));
    }
    invert() {
        return new $5be6d08b387af016$var$_Conjugate((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_A2), (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_B2).invert());
    }
    *experimentalExpand(iterDir, depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === 1 /* Forwards */  ? this : this.invert();
        else {
            yield* this.A.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.B.experimentalExpand(iterDir, depth - 1);
            yield* this.A.experimentalExpand(-1 /* Backwards */ , depth - 1);
        }
    }
    toString() {
        return `[${this.A}: ${this.B}]`;
    }
};
var $5be6d08b387af016$export$21829b047cfb53df = $5be6d08b387af016$var$_Conjugate;
$5be6d08b387af016$var$_A2 = new WeakMap();
$5be6d08b387af016$var$_B2 = new WeakMap();
// src/cubing/alg/units/leaves/LineComment.ts
var $5be6d08b387af016$var$_text;
var $5be6d08b387af016$var$_LineComment = class extends $5be6d08b387af016$var$AlgCommon {
    constructor(commentText){
        super();
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_text, void 0);
        if (commentText.includes("\n") || commentText.includes("\r")) throw new Error("LineComment cannot contain newline");
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_text, commentText);
    }
    get text() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_text);
    }
    isIdentical(other) {
        const otherAsLineComment = other;
        return other.is($5be6d08b387af016$var$_LineComment) && (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_text) === (0, $hJBlP.__privateGet)(otherAsLineComment, $5be6d08b387af016$var$_text);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = 1 /* Forwards */ , _depth = Infinity) {
        yield this;
    }
    toString() {
        return `//${(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_text)}`;
    }
};
var $5be6d08b387af016$export$e6476262d0d4122e = $5be6d08b387af016$var$_LineComment;
$5be6d08b387af016$var$_text = new WeakMap();
// src/cubing/alg/units/leaves/Newline.ts
var $5be6d08b387af016$export$5e2e13009fd73086 = class extends $5be6d08b387af016$var$AlgCommon {
    toString() {
        return `
`;
    }
    isIdentical(other) {
        return other.is($5be6d08b387af016$export$5e2e13009fd73086);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = 1 /* Forwards */ , _depth = Infinity) {
        yield this;
    }
};
// src/cubing/alg/units/leaves/Pause.ts
var $5be6d08b387af016$export$59704c468e1a1527 = class extends $5be6d08b387af016$var$AlgCommon {
    toString() {
        return `.`;
    }
    isIdentical(other) {
        return other.is($5be6d08b387af016$export$59704c468e1a1527);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = 1 /* Forwards */ , _depth = Infinity) {
        yield this;
    }
};
// src/cubing/alg/parse.ts
function $5be6d08b387af016$var$parseIntWithEmptyFallback(n, emptyFallback) {
    return n ? parseInt(n) : emptyFallback;
}
var $5be6d08b387af016$var$amountRegex = /^(\d+)?('?)/;
var $5be6d08b387af016$var$moveStartRegex = /^[_\dA-Za-z]/;
var $5be6d08b387af016$var$quantumMoveRegex = /^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)?/;
var $5be6d08b387af016$var$commentTextRegex = /^[^\n]*/;
var $5be6d08b387af016$var$square1PairStart = /^(-?\d+), ?/;
var $5be6d08b387af016$var$square1PairEnd = /^(-?\d+)\)/;
function $5be6d08b387af016$var$parseAlg(s) {
    return new $5be6d08b387af016$var$AlgParser().parseAlg(s);
}
function $5be6d08b387af016$var$parseMove(s) {
    return new $5be6d08b387af016$var$AlgParser().parseMove(s);
}
function $5be6d08b387af016$var$parseQuantumMove(s) {
    return new $5be6d08b387af016$var$AlgParser().parseQuantumMove(s);
}
function $5be6d08b387af016$var$addCharIndices(t, startCharIndex, endCharIndex) {
    const parsedT = t;
    parsedT.startCharIndex = startCharIndex;
    parsedT.endCharIndex = endCharIndex;
    return parsedT;
}
function $5be6d08b387af016$var$transferCharIndex(from, to) {
    if ("startCharIndex" in from) to.startCharIndex = from.startCharIndex;
    if ("endCharIndex" in from) to.endCharIndex = from.endCharIndex;
    return to;
}
var $5be6d08b387af016$var$_input, $5be6d08b387af016$var$_idx;
var $5be6d08b387af016$var$AlgParser = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_input, "");
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_idx, 0);
    }
    parseAlg(input) {
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_input, input);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_idx, 0);
        const alg = this.parseAlgWithStopping([]);
        this.mustBeAtEndOfInput();
        return alg;
    }
    parseMove(input) {
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_input, input);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_idx, 0);
        const move = this.parseMoveImpl();
        this.mustBeAtEndOfInput();
        return move;
    }
    parseQuantumMove(input) {
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_input, input);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_idx, 0);
        const quantumMove = this.parseQuantumMoveImpl();
        this.mustBeAtEndOfInput();
        return quantumMove;
    }
    mustBeAtEndOfInput() {
        if ((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx) !== (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_input).length) throw new Error("parsing unexpectedly ended early");
    }
    parseAlgWithStopping(stopBefore) {
        let algStartIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
        let algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
        const algBuilder = new $5be6d08b387af016$export$d5b45e94760ffddd();
        let crowded = false;
        const mustNotBeCrowded = (idx)=>{
            if (crowded) throw new Error(`Unexpected character at index ${idx}. Are you missing a space?`);
        };
        mainLoop: while((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx) < (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_input).length){
            const savedCharIndex = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
            if (stopBefore.includes((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_input)[(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)])) return $5be6d08b387af016$var$addCharIndices(algBuilder.toAlg(), algStartIdx, algEndIdx);
            if (this.tryConsumeNext(" ")) {
                crowded = false;
                if (algBuilder.experimentalNumUnits() === 0) algStartIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                continue mainLoop;
            } else if ($5be6d08b387af016$var$moveStartRegex.test((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_input)[(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)])) {
                mustNotBeCrowded(savedCharIndex);
                const move = this.parseMoveImpl();
                algBuilder.push(move);
                crowded = true;
                algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                continue mainLoop;
            } else if (this.tryConsumeNext("(")) {
                mustNotBeCrowded(savedCharIndex);
                const sq1PairStartMatch = this.tryRegex($5be6d08b387af016$var$square1PairStart);
                if (sq1PairStartMatch) {
                    const topAmountString = sq1PairStartMatch[1];
                    const savedCharIndexD = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                    const sq1PairEndMatch = this.parseRegex($5be6d08b387af016$var$square1PairEnd);
                    const uMove = $5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$e49a5ad3dd6df925(new $5be6d08b387af016$export$9bfa9ee45a81759e("U_SQ_"), parseInt(topAmountString)), savedCharIndex + 1, savedCharIndex + 1 + topAmountString.length);
                    const dMove = $5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$e49a5ad3dd6df925(new $5be6d08b387af016$export$9bfa9ee45a81759e("D_SQ_"), parseInt(sq1PairEndMatch[1])), savedCharIndexD, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx) - 1);
                    const alg = $5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$e5a7308a1ffbe909([
                        uMove,
                        dMove
                    ]), savedCharIndex + 1, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx) - 1);
                    algBuilder.push($5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$3885c0af90651e94(alg), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)));
                    crowded = true;
                    algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                    continue mainLoop;
                } else {
                    const alg = this.parseAlgWithStopping([
                        ")"
                    ]);
                    this.mustConsumeNext(")");
                    const amount = this.parseAmount();
                    algBuilder.push($5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$3885c0af90651e94(alg, amount), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)));
                    crowded = true;
                    algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                    continue mainLoop;
                }
            } else if (this.tryConsumeNext("[")) {
                mustNotBeCrowded(savedCharIndex);
                const A = this.parseAlgWithStopping([
                    ",",
                    ":"
                ]);
                const separator = this.popNext();
                const B = this.parseAlgWithStopping([
                    "]"
                ]);
                this.mustConsumeNext("]");
                switch(separator){
                    case ":":
                        algBuilder.push($5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$21829b047cfb53df(A, B), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)));
                        crowded = true;
                        algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                        continue mainLoop;
                    case ",":
                        algBuilder.push($5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$13a2aeb669e49c0(A, B), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)));
                        crowded = true;
                        algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                        continue mainLoop;
                    default:
                        throw "unexpected parsing error";
                }
            } else if (this.tryConsumeNext("\n")) {
                algBuilder.push($5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$5e2e13009fd73086(), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)));
                crowded = false;
                algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                continue mainLoop;
            } else if (this.tryConsumeNext("/")) {
                if (this.tryConsumeNext("/")) {
                    mustNotBeCrowded(savedCharIndex);
                    const [text] = this.parseRegex($5be6d08b387af016$var$commentTextRegex);
                    algBuilder.push($5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$e6476262d0d4122e(text), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)));
                    crowded = false;
                    algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                    continue mainLoop;
                } else {
                    algBuilder.push($5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$e49a5ad3dd6df925("_SLASH_"), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)));
                    crowded = true;
                    algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                    continue mainLoop;
                }
            } else if (this.tryConsumeNext(".")) {
                mustNotBeCrowded(savedCharIndex);
                algBuilder.push($5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$59704c468e1a1527(), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)));
                crowded = true;
                algEndIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
                continue mainLoop;
            } else throw new Error(`Unexpected character: ${this.popNext()}`);
        }
        if ((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx) !== (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_input).length) throw new Error("did not finish parsing?");
        if (stopBefore.length > 0) throw new Error("expected stopping");
        return $5be6d08b387af016$var$addCharIndices(algBuilder.toAlg(), algStartIdx, algEndIdx);
    }
    parseQuantumMoveImpl() {
        const [, , , outerLayerStr, innerLayerStr, family] = this.parseRegex($5be6d08b387af016$var$quantumMoveRegex);
        return new $5be6d08b387af016$export$9bfa9ee45a81759e(family, $5be6d08b387af016$var$parseIntWithEmptyFallback(innerLayerStr, void 0), $5be6d08b387af016$var$parseIntWithEmptyFallback(outerLayerStr, void 0));
    }
    parseMoveImpl() {
        const savedCharIndex = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
        if (this.tryConsumeNext("/")) return $5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$e49a5ad3dd6df925("_SLASH_"), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx));
        let quantumMove = this.parseQuantumMoveImpl();
        let [amount, hadEmptyAbsAmount] = this.parseAmountAndTrackEmptyAbsAmount();
        const suffix = this.parseMoveSuffix();
        if (suffix) {
            if (amount < 0) throw new Error("uh-oh");
            if ((suffix === "++" || suffix === "--") && amount !== 1) throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");
            if ((suffix === "++" || suffix === "--") && !hadEmptyAbsAmount) throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");
            if ((suffix === "+" || suffix === "-") && hadEmptyAbsAmount) throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");
            if (suffix.startsWith("+")) quantumMove = quantumMove.modified({
                family: `${quantumMove.family}_${suffix === "+" ? "PLUS" : "PLUSPLUS"}_`
            });
            if (suffix.startsWith("-")) {
                quantumMove = quantumMove.modified({
                    family: `${quantumMove.family}_${suffix === "-" ? "PLUS" : "PLUSPLUS"}_`
                });
                amount *= -1;
            }
        }
        const move = $5be6d08b387af016$var$addCharIndices(new $5be6d08b387af016$export$e49a5ad3dd6df925(quantumMove, amount), savedCharIndex, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx));
        return move;
    }
    parseMoveSuffix() {
        if (this.tryConsumeNext("+")) {
            if (this.tryConsumeNext("+")) return "++";
            return "+";
        }
        if (this.tryConsumeNext("-")) {
            if (this.tryConsumeNext("-")) return "--";
            return "-";
        }
        return null;
    }
    parseAmountAndTrackEmptyAbsAmount() {
        const savedIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
        const [, absAmountStr, primeStr] = this.parseRegex($5be6d08b387af016$var$amountRegex);
        if (absAmountStr?.startsWith("0") && absAmountStr !== "0") throw new Error(`Error at char index ${savedIdx}: An amount can only start with 0 if it's exactly the digit 0.`);
        return [
            $5be6d08b387af016$var$parseIntWithEmptyFallback(absAmountStr, 1) * (primeStr === "'" ? -1 : 1),
            !absAmountStr
        ];
    }
    parseAmount() {
        const savedIdx = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx);
        const [, absAmountStr, primeStr] = this.parseRegex($5be6d08b387af016$var$amountRegex);
        if (absAmountStr?.startsWith("0") && absAmountStr !== "0") throw new Error(`Error at char index ${savedIdx}: An amount number can only start with 0 if it's exactly the digit 0.`);
        return $5be6d08b387af016$var$parseIntWithEmptyFallback(absAmountStr, 1) * (primeStr === "'" ? -1 : 1);
    }
    parseRegex(regex) {
        const arr = regex.exec(this.remaining());
        if (arr === null) throw new Error("internal parsing error");
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_idx, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx) + arr[0].length);
        return arr;
    }
    tryRegex(regex) {
        const arr = regex.exec(this.remaining());
        if (arr === null) return null;
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_idx, (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx) + arr[0].length);
        return arr;
    }
    remaining() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_input).slice((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx));
    }
    popNext() {
        const next = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_input)[(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)];
        (0, $hJBlP.__privateWrapper)(this, $5be6d08b387af016$var$_idx)._++;
        return next;
    }
    tryConsumeNext(expected) {
        if ((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_input)[(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_idx)] === expected) {
            (0, $hJBlP.__privateWrapper)(this, $5be6d08b387af016$var$_idx)._++;
            return true;
        }
        return false;
    }
    mustConsumeNext(expected) {
        const next = this.popNext();
        if (next !== expected) throw new Error(`expected \`${expected}\` while parsing, encountered ${next}`);
        return next;
    }
};
$5be6d08b387af016$var$_input = new WeakMap();
$5be6d08b387af016$var$_idx = new WeakMap();
// src/cubing/alg/warnOnce.ts
var $5be6d08b387af016$var$warned = /* @__PURE__ */ new Set();
function $5be6d08b387af016$var$warnOnce(s) {
    if (!$5be6d08b387af016$var$warned.has(s)) {
        console.warn(s);
        $5be6d08b387af016$var$warned.add(s);
    }
}
// src/cubing/alg/units/QuantumWithAmount.ts
var $5be6d08b387af016$var$QuantumWithAmount = class {
    constructor(quantum, amount = 1){
        this.quantum = quantum;
        this.amount = amount;
        if (!Number.isInteger(this.amount) || this.amount < $5be6d08b387af016$var$MIN_INT || this.amount > $5be6d08b387af016$var$MAX_INT) throw new Error(`Unit amount absolute value must be a non-negative integer from ${$5be6d08b387af016$var$MAX_INT_DESCRIPTION} to ${$5be6d08b387af016$var$MAX_INT_DESCRIPTION}.`);
    }
    suffix() {
        let s = "";
        const absAmount = Math.abs(this.amount);
        if (absAmount !== 1) s += absAmount;
        if (this.amount < 0) s += "'";
        return s;
    }
    isIdentical(other) {
        return this.quantum.isIdentical(other.quantum) && this.amount === other.amount;
    }
    *experimentalExpand(iterDir, depth) {
        const absAmount = Math.abs(this.amount);
        const newIterDir = $5be6d08b387af016$var$toggleDirection(iterDir, this.amount < 0);
        for(let i = 0; i < absAmount; i++)yield* this.quantum.experimentalExpand(newIterDir, depth);
    }
};
// src/cubing/alg/units/leaves/Move.ts
var $5be6d08b387af016$var$_family, $5be6d08b387af016$var$_innerLayer, $5be6d08b387af016$var$_outerLayer;
var $5be6d08b387af016$var$_QuantumMove = class extends $5be6d08b387af016$var$Comparable {
    constructor(family, innerLayer, outerLayer){
        super();
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_family, void 0);
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_innerLayer, void 0);
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_outerLayer, void 0);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_family, family);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_innerLayer, innerLayer ?? null);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_outerLayer, outerLayer ?? null);
        Object.freeze(this);
        if ((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer) !== null && (!Number.isInteger((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer)) || (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer) < 1 || (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer) > $5be6d08b387af016$var$MAX_INT)) throw new Error(`QuantumMove inner layer must be a positive integer below ${$5be6d08b387af016$var$MAX_INT_DESCRIPTION}.`);
        if ((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer) !== null && (!Number.isInteger((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer)) || (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer) < 1 || (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer) > $5be6d08b387af016$var$MAX_INT)) throw new Error(`QuantumMove outer layer must be a positive integer below ${$5be6d08b387af016$var$MAX_INT_DESCRIPTION}.`);
        if ((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer) !== null && (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer) !== null && (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer) <= (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer)) throw new Error("QuantumMove outer layer must be smaller than inner layer.");
        if ((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer) !== null && (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer) === null) throw new Error("QuantumMove with an outer layer must have an inner layer");
    }
    static fromString(s) {
        return $5be6d08b387af016$var$parseQuantumMove(s);
    }
    modified(modifications) {
        return new $5be6d08b387af016$var$_QuantumMove(modifications.family ?? (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_family), modifications.innerLayer ?? (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer), modifications.outerLayer ?? (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer));
    }
    isIdentical(other) {
        const otherAsQuantumMove = other;
        return other.is($5be6d08b387af016$var$_QuantumMove) && (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_family) === (0, $hJBlP.__privateGet)(otherAsQuantumMove, $5be6d08b387af016$var$_family) && (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer) === (0, $hJBlP.__privateGet)(otherAsQuantumMove, $5be6d08b387af016$var$_innerLayer) && (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer) === (0, $hJBlP.__privateGet)(otherAsQuantumMove, $5be6d08b387af016$var$_outerLayer);
    }
    get family() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_family);
    }
    get outerLayer() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer);
    }
    get innerLayer() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer);
    }
    experimentalExpand() {
        throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.");
    }
    toString() {
        let s = (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_family);
        if ((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer) !== null) {
            s = String((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_innerLayer)) + s;
            if ((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer) !== null) s = String((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_outerLayer)) + "-" + s;
        }
        return s;
    }
};
var $5be6d08b387af016$export$9bfa9ee45a81759e = $5be6d08b387af016$var$_QuantumMove;
$5be6d08b387af016$var$_family = new WeakMap();
$5be6d08b387af016$var$_innerLayer = new WeakMap();
$5be6d08b387af016$var$_outerLayer = new WeakMap();
var $5be6d08b387af016$var$_quantumWithAmount;
var $5be6d08b387af016$var$_Move = class extends $5be6d08b387af016$var$AlgCommon {
    constructor(...args){
        super();
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_quantumWithAmount, void 0);
        if (typeof args[0] === "string") {
            if (args[1] ?? null) {
                (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_quantumWithAmount, new $5be6d08b387af016$var$QuantumWithAmount($5be6d08b387af016$export$9bfa9ee45a81759e.fromString(args[0]), args[1]));
                return;
            } else return $5be6d08b387af016$var$_Move.fromString(args[0]);
        }
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_quantumWithAmount, new $5be6d08b387af016$var$QuantumWithAmount(args[0], args[1]));
    }
    isIdentical(other) {
        const otherAsMove = other.as($5be6d08b387af016$var$_Move);
        return !!otherAsMove && (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).isIdentical((0, $hJBlP.__privateGet)(otherAsMove, $5be6d08b387af016$var$_quantumWithAmount));
    }
    invert() {
        return $5be6d08b387af016$var$transferCharIndex(this, new $5be6d08b387af016$var$_Move((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).quantum, -this.amount));
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ ) {
        if (iterDir === 1 /* Forwards */ ) yield this;
        else yield this.modified({
            amount: -this.amount
        });
    }
    get quantum() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).quantum;
    }
    modified(modifications) {
        return new $5be6d08b387af016$var$_Move((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).quantum.modified(modifications), modifications.amount ?? this.amount);
    }
    static fromString(s) {
        return $5be6d08b387af016$var$parseMove(s);
    }
    get amount() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).amount;
    }
    get type() {
        $5be6d08b387af016$var$warnOnce("deprecated: type");
        return "blockMove";
    }
    get family() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).quantum.family ?? void 0;
    }
    get outerLayer() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).quantum.outerLayer ?? void 0;
    }
    get innerLayer() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).quantum.innerLayer ?? void 0;
    }
    toString() {
        if (this.family === "_SLASH_") return "/";
        if (this.family.endsWith("_PLUS_")) return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).quantum.toString().slice(0, -6) + Math.abs(this.amount) + (this.amount < 0 ? "-" : "+");
        if (this.family.endsWith("_PLUSPLUS_")) {
            const absAmount = Math.abs(this.amount);
            return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).quantum.toString().slice(0, -10) + (absAmount === 1 ? "" : absAmount) + (this.amount < 0 ? "--" : "++");
        }
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).quantum.toString() + (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount).suffix();
    }
};
var $5be6d08b387af016$export$e49a5ad3dd6df925 = $5be6d08b387af016$var$_Move;
$5be6d08b387af016$var$_quantumWithAmount = new WeakMap();
// src/cubing/alg/units/containers/Grouping.ts
var $5be6d08b387af016$var$Square1TupleFormatter = class {
    constructor(){
        this.quantumU_SQ_ = null;
        this.quantumD_SQ_ = null;
    }
    format(grouping) {
        const amounts = this.tuple(grouping);
        if (!amounts) return null;
        return `(${amounts.map((move)=>move.amount).join(", ")})`;
    }
    tuple(grouping) {
        this.quantumU_SQ_ || (this.quantumU_SQ_ = new $5be6d08b387af016$export$9bfa9ee45a81759e("U_SQ_"));
        this.quantumD_SQ_ || (this.quantumD_SQ_ = new $5be6d08b387af016$export$9bfa9ee45a81759e("D_SQ_"));
        const quantumAlg = grouping.alg;
        if (quantumAlg.experimentalNumUnits() === 2) {
            const [U, D] = quantumAlg.units();
            if (U.as($5be6d08b387af016$export$e49a5ad3dd6df925)?.quantum.isIdentical(this.quantumU_SQ_) && D.as($5be6d08b387af016$export$e49a5ad3dd6df925)?.quantum.isIdentical(this.quantumD_SQ_)) {
                if (grouping.amount !== 1) throw new Error("Square-1 tuples cannot have an amount other than 1.");
                return [
                    U,
                    D
                ];
            }
        }
        return null;
    }
};
var $5be6d08b387af016$var$square1TupleFormatterInstance = new $5be6d08b387af016$var$Square1TupleFormatter();
var $5be6d08b387af016$var$_quantumWithAmount2;
var $5be6d08b387af016$var$_Grouping = class extends $5be6d08b387af016$var$AlgCommon {
    constructor(algSource, amount){
        super();
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_quantumWithAmount2, void 0);
        const alg = $5be6d08b387af016$var$experimentalEnsureAlg(algSource);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_quantumWithAmount2, new $5be6d08b387af016$var$QuantumWithAmount(alg, amount));
    }
    isIdentical(other) {
        const otherAsGrouping = other;
        return other.is($5be6d08b387af016$var$_Grouping) && (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount2).isIdentical((0, $hJBlP.__privateGet)(otherAsGrouping, $5be6d08b387af016$var$_quantumWithAmount2));
    }
    get alg() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount2).quantum;
    }
    get amount() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount2).amount;
    }
    get experimentalRepetitionSuffix() {
        return (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount2).suffix();
    }
    invert() {
        return new $5be6d08b387af016$var$_Grouping((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount2).quantum, -(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount2).amount);
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ , depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === 1 /* Forwards */  ? this : this.invert();
        else yield* (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount2).experimentalExpand(iterDir, depth - 1);
    }
    static fromString() {
        throw new Error("unimplemented");
    }
    toString() {
        return $5be6d08b387af016$var$square1TupleFormatterInstance.format(this) ?? `(${(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount2).quantum.toString()})${(0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_quantumWithAmount2).suffix()}`;
    }
    experimentalAsSquare1Tuple() {
        return $5be6d08b387af016$var$square1TupleFormatterInstance.tuple(this);
    }
};
var $5be6d08b387af016$export$3885c0af90651e94 = $5be6d08b387af016$var$_Grouping;
$5be6d08b387af016$var$_quantumWithAmount2 = new WeakMap();
// src/cubing/alg/is.ts
function $5be6d08b387af016$export$8f2093504a51c1a5(v, c) {
    return v instanceof c;
}
function $5be6d08b387af016$var$experimentalIsUnit(v) {
    return $5be6d08b387af016$export$8f2093504a51c1a5(v, $5be6d08b387af016$export$3885c0af90651e94) || $5be6d08b387af016$export$8f2093504a51c1a5(v, $5be6d08b387af016$export$e6476262d0d4122e) || $5be6d08b387af016$export$8f2093504a51c1a5(v, $5be6d08b387af016$export$13a2aeb669e49c0) || $5be6d08b387af016$export$8f2093504a51c1a5(v, $5be6d08b387af016$export$21829b047cfb53df) || $5be6d08b387af016$export$8f2093504a51c1a5(v, $5be6d08b387af016$export$e49a5ad3dd6df925) || $5be6d08b387af016$export$8f2093504a51c1a5(v, $5be6d08b387af016$export$5e2e13009fd73086) || $5be6d08b387af016$export$8f2093504a51c1a5(v, $5be6d08b387af016$export$59704c468e1a1527);
}
// src/cubing/alg/traversal.ts
function $5be6d08b387af016$var$dispatch(t, unit, dataDown) {
    if (unit.is($5be6d08b387af016$export$3885c0af90651e94)) return t.traverseGrouping(unit, dataDown);
    if (unit.is($5be6d08b387af016$export$e49a5ad3dd6df925)) return t.traverseMove(unit, dataDown);
    if (unit.is($5be6d08b387af016$export$13a2aeb669e49c0)) return t.traverseCommutator(unit, dataDown);
    if (unit.is($5be6d08b387af016$export$21829b047cfb53df)) return t.traverseConjugate(unit, dataDown);
    if (unit.is($5be6d08b387af016$export$59704c468e1a1527)) return t.traversePause(unit, dataDown);
    if (unit.is($5be6d08b387af016$export$5e2e13009fd73086)) return t.traverseNewline(unit, dataDown);
    if (unit.is($5be6d08b387af016$export$e6476262d0d4122e)) return t.traverseLineComment(unit, dataDown);
    throw new Error(`unknown unit`);
}
function $5be6d08b387af016$var$assertIsUnit(t) {
    if (t.is($5be6d08b387af016$export$3885c0af90651e94) || t.is($5be6d08b387af016$export$e49a5ad3dd6df925) || t.is($5be6d08b387af016$export$13a2aeb669e49c0) || t.is($5be6d08b387af016$export$21829b047cfb53df) || t.is($5be6d08b387af016$export$59704c468e1a1527) || t.is($5be6d08b387af016$export$5e2e13009fd73086) || t.is($5be6d08b387af016$export$e6476262d0d4122e)) return t;
    throw "internal error: expected unit";
}
var $5be6d08b387af016$export$5b23793b60fb4cfe = class {
    traverseUnit(unit, dataDown) {
        return $5be6d08b387af016$var$dispatch(this, unit, dataDown);
    }
    traverseIntoUnit(unit, dataDown) {
        return $5be6d08b387af016$var$assertIsUnit(this.traverseUnit(unit, dataDown));
    }
};
var $5be6d08b387af016$export$78fadb44b4228be0 = class extends $5be6d08b387af016$export$5b23793b60fb4cfe {
    traverseUnit(unit) {
        return $5be6d08b387af016$var$dispatch(this, unit, void 0);
    }
    traverseIntoUnit(unit) {
        return $5be6d08b387af016$var$assertIsUnit(this.traverseUnit(unit));
    }
};
var $5be6d08b387af016$var$_newAmount, $5be6d08b387af016$var$newAmount_fn;
var $5be6d08b387af016$var$_Simplify = class extends $5be6d08b387af016$export$5b23793b60fb4cfe {
    *traverseAlg(alg, options) {
        if (options.depth === 0) {
            yield* alg.units();
            return;
        }
        const newUnits = [];
        let lastUnit = null;
        const collapseMoves = options?.collapseMoves ?? true;
        function appendMoveWithNewAmount(move, deltaAmount) {
            var _a;
            const newAmount = (0, $hJBlP.__privateMethod)(_a = $5be6d08b387af016$var$_Simplify, $5be6d08b387af016$var$_newAmount, $5be6d08b387af016$var$newAmount_fn).call(_a, move, deltaAmount, options);
            if (newAmount === 0) return false;
            const newMove = new $5be6d08b387af016$export$e49a5ad3dd6df925(move.quantum, newAmount);
            newUnits.push(newMove);
            lastUnit = newMove;
            return true;
        }
        function appendCollapsed(newUnit) {
            if (collapseMoves && lastUnit?.is($5be6d08b387af016$export$e49a5ad3dd6df925) && newUnit.is($5be6d08b387af016$export$e49a5ad3dd6df925) && lastUnit.quantum.isIdentical(newUnit.quantum)) {
                newUnits.pop();
                if (!appendMoveWithNewAmount(lastUnit, newUnit.amount)) lastUnit = newUnits.slice(-1)[0];
            } else if (newUnit.is($5be6d08b387af016$export$e49a5ad3dd6df925)) appendMoveWithNewAmount(newUnit, 0);
            else {
                newUnits.push(newUnit);
                lastUnit = newUnit;
            }
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        for (const unit of alg.units())for (const ancestorUnit of this.traverseUnit(unit, newOptions))appendCollapsed(ancestorUnit);
        for (const unit1 of newUnits)yield unit1;
    }
    *traverseGrouping(grouping, options) {
        if (options.depth === 0) {
            yield grouping;
            return;
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        yield new $5be6d08b387af016$export$3885c0af90651e94(this.traverseAlg(grouping.alg, newOptions));
    }
    *traverseMove(move, _options) {
        yield move;
    }
    *traverseCommutator(commutator, options) {
        if (options.depth === 0) {
            yield commutator;
            return;
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        yield new $5be6d08b387af016$export$13a2aeb669e49c0(this.traverseAlg(commutator.A, newOptions), this.traverseAlg(commutator.B, newOptions));
    }
    *traverseConjugate(conjugate, options) {
        if (options.depth === 0) {
            yield conjugate;
            return;
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        yield new $5be6d08b387af016$export$21829b047cfb53df(this.traverseAlg(conjugate.A, newOptions), this.traverseAlg(conjugate.B, newOptions));
    }
    *traversePause(pause, _options) {
        yield pause;
    }
    *traverseNewline(newline, _options) {
        yield newline;
    }
    *traverseLineComment(comment, _options) {
        yield comment;
    }
};
var $5be6d08b387af016$var$Simplify = $5be6d08b387af016$var$_Simplify;
$5be6d08b387af016$var$_newAmount = new WeakSet();
$5be6d08b387af016$var$newAmount_fn = function(move, deltaAmount, options) {
    let newAmount = move.amount + deltaAmount;
    if (options?.quantumMoveOrder) {
        const order = options.quantumMoveOrder(move.quantum);
        const min = Math.floor(order / 2) + 1 - order;
        newAmount = (newAmount % order + order - min) % order + min;
    }
    return newAmount;
};
(0, $hJBlP.__privateAdd)($5be6d08b387af016$var$Simplify, $5be6d08b387af016$var$_newAmount);
var $5be6d08b387af016$var$simplifyInstance = new $5be6d08b387af016$var$Simplify();
var $5be6d08b387af016$var$simplify = $5be6d08b387af016$var$simplifyInstance.traverseAlg.bind($5be6d08b387af016$var$simplifyInstance);
// src/cubing/alg/Alg.ts
function $5be6d08b387af016$var$toIterable(input) {
    if (!input) return [];
    if ($5be6d08b387af016$export$8f2093504a51c1a5(input, $5be6d08b387af016$export$e5a7308a1ffbe909)) return input.units();
    if (typeof input === "string") return $5be6d08b387af016$var$parseAlg(input).units();
    const iter = input;
    if (typeof iter[Symbol.iterator] === "function") return iter;
    throw "Invalid unit";
}
function $5be6d08b387af016$var$experimentalEnsureAlg(alg) {
    if ($5be6d08b387af016$export$8f2093504a51c1a5(alg, $5be6d08b387af016$export$e5a7308a1ffbe909)) return alg;
    return new $5be6d08b387af016$export$e5a7308a1ffbe909(alg);
}
var $5be6d08b387af016$var$_units2;
var $5be6d08b387af016$var$_Alg = class extends $5be6d08b387af016$var$AlgCommon {
    constructor(alg){
        super();
        (0, $hJBlP.__privateAdd)(this, $5be6d08b387af016$var$_units2, void 0);
        (0, $hJBlP.__privateSet)(this, $5be6d08b387af016$var$_units2, Array.from($5be6d08b387af016$var$toIterable(alg)));
        for (const unit of (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units2)){
            if (!$5be6d08b387af016$var$experimentalIsUnit(unit)) throw new Error("An alg can only contain units.");
        }
    }
    isIdentical(other) {
        const otherAsAlg = other;
        if (!other.is($5be6d08b387af016$var$_Alg)) return false;
        const l1 = Array.from((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units2));
        const l2 = Array.from((0, $hJBlP.__privateGet)(otherAsAlg, $5be6d08b387af016$var$_units2));
        if (l1.length !== l2.length) return false;
        for(let i = 0; i < l1.length; i++){
            if (!l1[i].isIdentical(l2[i])) return false;
        }
        return true;
    }
    invert() {
        return new $5be6d08b387af016$var$_Alg($5be6d08b387af016$var$reverse(Array.from((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units2)).map((u)=>u.invert())));
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ , depth) {
        depth ?? (depth = Infinity);
        for (const unit of $5be6d08b387af016$export$d32346616aa538f3((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units2), iterDir))yield* unit.experimentalExpand(iterDir, depth);
    }
    expand(options) {
        return new $5be6d08b387af016$var$_Alg(this.experimentalExpand(1 /* Forwards */ , options?.depth ?? Infinity));
    }
    *experimentalLeafMoves() {
        for (const leaf of this.experimentalExpand())if (leaf.is($5be6d08b387af016$export$e49a5ad3dd6df925)) yield leaf;
    }
    concat(input) {
        return new $5be6d08b387af016$var$_Alg(Array.from((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units2)).concat(Array.from($5be6d08b387af016$var$toIterable(input))));
    }
    experimentalIsEmpty() {
        for (const _ of (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units2))return false;
        return true;
    }
    static fromString(s) {
        return $5be6d08b387af016$var$parseAlg(s);
    }
    *units() {
        for (const unit of (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units2))yield unit;
    }
    experimentalNumUnits() {
        return Array.from((0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units2)).length;
    }
    get type() {
        $5be6d08b387af016$var$warnOnce("deprecated: type");
        return "sequence";
    }
    toString() {
        let output = "";
        let previousUnit = null;
        for (const unit of (0, $hJBlP.__privateGet)(this, $5be6d08b387af016$var$_units2)){
            if (previousUnit) output += $5be6d08b387af016$var$spaceBetween(previousUnit, unit);
            output += unit.toString();
            previousUnit = unit;
        }
        return output;
    }
    simplify(options) {
        return new $5be6d08b387af016$var$_Alg($5be6d08b387af016$var$simplify(this, options ?? {}));
    }
};
var $5be6d08b387af016$export$e5a7308a1ffbe909 = $5be6d08b387af016$var$_Alg;
$5be6d08b387af016$var$_units2 = new WeakMap();
function $5be6d08b387af016$var$spaceBetween(u1, u2) {
    if (u1.is($5be6d08b387af016$export$5e2e13009fd73086) || u2.is($5be6d08b387af016$export$5e2e13009fd73086)) return "";
    if (u1.is($5be6d08b387af016$export$e6476262d0d4122e) && !u2.is($5be6d08b387af016$export$5e2e13009fd73086)) return "\n";
    return " ";
}
// src/cubing/alg/example.ts
var $5be6d08b387af016$export$2b8f26b427c15f = {
    Sune: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -2),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1)
    ]),
    AntiSune: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 2),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1)
    ]),
    SuneCommutator: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$13a2aeb669e49c0(new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1),
            new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1),
            new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -2)
        ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$21829b047cfb53df(new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1)
            ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1)
            ]))
        ]))
    ]),
    Niklas: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("L", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("L", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1)
    ]),
    EPerm: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$e49a5ad3dd6df925("x", -1),
        new $5be6d08b387af016$export$13a2aeb669e49c0(new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$21829b047cfb53df(new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1)
            ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -1)
            ]))
        ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$e49a5ad3dd6df925("D", 1)
        ])),
        new $5be6d08b387af016$export$13a2aeb669e49c0(new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$21829b047cfb53df(new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1)
            ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1)
            ]))
        ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$e49a5ad3dd6df925("D", 1)
        ])),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("x", 1)
    ]),
    FURURFCompact: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$21829b047cfb53df(new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$e49a5ad3dd6df925("F", 1)
        ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$13a2aeb669e49c0(new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1)
            ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1)
            ]))
        ]))
    ]),
    APermCompact: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$21829b047cfb53df(new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 2)
        ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$13a2aeb669e49c0(new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("F", 2)
            ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1),
                new $5be6d08b387af016$export$e49a5ad3dd6df925("B", -1),
                new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1)
            ]))
        ]))
    ]),
    FURURFMoves: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$e49a5ad3dd6df925("F", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("F", -1)
    ]),
    TPerm: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("F", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 2),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("R", -1),
        new $5be6d08b387af016$export$e49a5ad3dd6df925("F", -1)
    ]),
    HeadlightSwaps: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$21829b047cfb53df(new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$e49a5ad3dd6df925("F", 1)
        ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
            new $5be6d08b387af016$export$3885c0af90651e94(new $5be6d08b387af016$export$e5a7308a1ffbe909([
                new $5be6d08b387af016$export$13a2aeb669e49c0(new $5be6d08b387af016$export$e5a7308a1ffbe909([
                    new $5be6d08b387af016$export$e49a5ad3dd6df925("R", 1)
                ]), new $5be6d08b387af016$export$e5a7308a1ffbe909([
                    new $5be6d08b387af016$export$e49a5ad3dd6df925("U", 1)
                ]))
            ]), 3)
        ]))
    ]),
    TriplePause: new $5be6d08b387af016$export$e5a7308a1ffbe909([
        new $5be6d08b387af016$export$59704c468e1a1527(),
        new $5be6d08b387af016$export$59704c468e1a1527(),
        new $5be6d08b387af016$export$59704c468e1a1527()
    ])
};
// src/cubing/alg/keyboard.ts
var $5be6d08b387af016$var$cubeKeyMapping = {
    73: new $5be6d08b387af016$export$e49a5ad3dd6df925("R"),
    75: new $5be6d08b387af016$export$e49a5ad3dd6df925("R'"),
    87: new $5be6d08b387af016$export$e49a5ad3dd6df925("B"),
    79: new $5be6d08b387af016$export$e49a5ad3dd6df925("B'"),
    83: new $5be6d08b387af016$export$e49a5ad3dd6df925("D"),
    76: new $5be6d08b387af016$export$e49a5ad3dd6df925("D'"),
    68: new $5be6d08b387af016$export$e49a5ad3dd6df925("L"),
    69: new $5be6d08b387af016$export$e49a5ad3dd6df925("L'"),
    74: new $5be6d08b387af016$export$e49a5ad3dd6df925("U"),
    70: new $5be6d08b387af016$export$e49a5ad3dd6df925("U'"),
    72: new $5be6d08b387af016$export$e49a5ad3dd6df925("F"),
    71: new $5be6d08b387af016$export$e49a5ad3dd6df925("F'"),
    78: new $5be6d08b387af016$export$e49a5ad3dd6df925("x'"),
    67: new $5be6d08b387af016$export$e49a5ad3dd6df925("l"),
    82: new $5be6d08b387af016$export$e49a5ad3dd6df925("l'"),
    85: new $5be6d08b387af016$export$e49a5ad3dd6df925("r"),
    77: new $5be6d08b387af016$export$e49a5ad3dd6df925("r'"),
    88: new $5be6d08b387af016$export$e49a5ad3dd6df925("d"),
    188: new $5be6d08b387af016$export$e49a5ad3dd6df925("d'"),
    84: new $5be6d08b387af016$export$e49a5ad3dd6df925("x"),
    89: new $5be6d08b387af016$export$e49a5ad3dd6df925("x"),
    66: new $5be6d08b387af016$export$e49a5ad3dd6df925("x'"),
    186: new $5be6d08b387af016$export$e49a5ad3dd6df925("y"),
    59: new $5be6d08b387af016$export$e49a5ad3dd6df925("y"),
    65: new $5be6d08b387af016$export$e49a5ad3dd6df925("y'"),
    80: new $5be6d08b387af016$export$e49a5ad3dd6df925("z"),
    81: new $5be6d08b387af016$export$e49a5ad3dd6df925("z'"),
    90: new $5be6d08b387af016$export$e49a5ad3dd6df925("M'"),
    190: new $5be6d08b387af016$export$e49a5ad3dd6df925("M'")
};
function $5be6d08b387af016$export$4d295c19fd671943(e) {
    if (e.altKey || e.ctrlKey) return null;
    return $5be6d08b387af016$var$cubeKeyMapping[e.keyCode] || null;
}
// src/cubing/alg/url.ts
function $5be6d08b387af016$var$serializeURLParam(a) {
    let escaped = a.toString();
    escaped = escaped.replace(/_/g, "&#95;").replace(/ /g, "_");
    escaped = escaped.replace(/\+/g, "&#2b;");
    escaped = escaped.replace(/-/g, "&#45;").replace(/'/g, "-");
    return escaped;
}
function $5be6d08b387af016$export$1e5ec1df3abb1b6(options) {
    const url = new URL("https://alg.cubing.net");
    if (!options.alg) throw new Error("An alg parameter is required.");
    url.searchParams.set("alg", $5be6d08b387af016$var$serializeURLParam(options.alg));
    if (options.setup) url.searchParams.set("setup", $5be6d08b387af016$var$serializeURLParam(options.setup));
    if (options.title) url.searchParams.set("title", options.title);
    if (options.puzzle) {
        if (![
            "1x1x1",
            "2x2x2",
            "3x3x3",
            "4x4x4",
            "5x5x5",
            "6x6x6",
            "7x7x7",
            "8x8x8",
            "9x9x9",
            "10x10x10",
            "11x11x11",
            "12x12x12",
            "13x13x13",
            "14x14x14",
            "16x16x16",
            "17x17x17"
        ].includes(options.puzzle)) throw new Error(`Invalid puzzle parameter: ${options.puzzle}`);
        url.searchParams.set("puzzle", options.puzzle);
    }
    if (options.stage) {
        if (![
            "full",
            "cross",
            "F2L",
            "LL",
            "OLL",
            "PLL",
            "CLS",
            "ELS",
            "L6E",
            "CMLL",
            "WV",
            "ZBLL",
            "void"
        ].includes(options.stage)) throw new Error(`Invalid stage parameter: ${options.stage}`);
        url.searchParams.set("stage", options.stage);
    }
    if (options.view) {
        if (![
            "editor",
            "playback",
            "fullscreen"
        ].includes(options.view)) throw new Error(`Invalid view parameter: ${options.view}`);
        url.searchParams.set("view", options.view);
    }
    if (options.type) {
        if (![
            "moves",
            "reconstruction",
            "alg",
            "reconstruction-end-with-setup"
        ].includes(options.type)) throw new Error(`Invalid type parameter: ${options.type}`);
        url.searchParams.set("type", options.type);
    }
    return url.toString();
}
// src/cubing/alg/operation.ts
function $5be6d08b387af016$export$730b7873cfa7a92(alg, newMove, options) {
    const oldUnits = Array.from(alg.units());
    const oldLastMove = oldUnits[oldUnits.length - 1];
    if (options?.coalesce && oldLastMove && oldLastMove.quantum && oldLastMove.quantum.isIdentical(newMove.quantum)) {
        const newUnits = oldUnits.slice(0, oldUnits.length - 1);
        let newAmount = oldLastMove.amount + newMove.amount;
        const mod = options?.mod;
        if (mod) {
            newAmount = (newAmount % mod + mod) % mod;
            if (newAmount * 2 > mod) newAmount -= mod;
        }
        if (newAmount !== 0) newUnits.push(oldLastMove.modified({
            amount: newAmount
        }));
        return new $5be6d08b387af016$export$e5a7308a1ffbe909(newUnits);
    } else return new $5be6d08b387af016$export$e5a7308a1ffbe909([
        ...oldUnits,
        newMove
    ]);
}

});
parcelRequire.register("hJBlP", function(module, exports) {

$parcel$export(module.exports, "__privateGet", () => $ce939cc96c25f325$export$18a094aefa070634);
$parcel$export(module.exports, "__privateAdd", () => $ce939cc96c25f325$export$addf369becd23283);
$parcel$export(module.exports, "__privateSet", () => $ce939cc96c25f325$export$42432efe6614d3b4);
$parcel$export(module.exports, "__privateWrapper", () => $ce939cc96c25f325$export$b1fe7cbb4502036b);
$parcel$export(module.exports, "__privateMethod", () => $ce939cc96c25f325$export$fa92d15b718fce20);
var $ce939cc96c25f325$var$__accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var $ce939cc96c25f325$export$18a094aefa070634 = (obj, member, getter)=>{
    $ce939cc96c25f325$var$__accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var $ce939cc96c25f325$export$addf369becd23283 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var $ce939cc96c25f325$export$42432efe6614d3b4 = (obj, member, value, setter)=>{
    $ce939cc96c25f325$var$__accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var $ce939cc96c25f325$export$b1fe7cbb4502036b = (obj, member, setter, getter)=>{
    return {
        set _ (value){
            $ce939cc96c25f325$export$42432efe6614d3b4(obj, member, value, setter);
        },
        get _ () {
            return $ce939cc96c25f325$export$18a094aefa070634(obj, member, getter);
        }
    };
};
var $ce939cc96c25f325$export$fa92d15b718fce20 = (obj, member, method)=>{
    $ce939cc96c25f325$var$__accessCheck(obj, member, "access private method");
    return method;
};

});


parcelRequire.register("knLo6", function(module, exports) {

$parcel$export(module.exports, "KState", () => $ed6ab6d3e0ce0683$export$ad3cd44c975e2fe3);
$parcel$export(module.exports, "KPuzzle", () => $ed6ab6d3e0ce0683$export$5d975d639f9eb1a3);
$parcel$export(module.exports, "experimental3x3x3KPuzzle", () => $ed6ab6d3e0ce0683$export$1fbb93a14e55e846);

var $7TbMZ = parcelRequire("7TbMZ");

var $hJBlP = parcelRequire("hJBlP");
// src/cubing/kpuzzle/combine.ts
function $ed6ab6d3e0ce0683$var$combineTransformationData(definition, transformationData1, transformationData2) {
    const newTransformationData = {};
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const orbit1 = transformationData1[orbitName];
        const orbit2 = transformationData2[orbitName];
        if ($ed6ab6d3e0ce0683$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit2)) newTransformationData[orbitName] = orbit1;
        else if ($ed6ab6d3e0ce0683$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit1)) newTransformationData[orbitName] = orbit2;
        else {
            const newPerm = new Array(orbitDefinition.numPieces);
            if (orbitDefinition.numOrientations === 1) {
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++)newPerm[idx] = orbit1.permutation[orbit2.permutation[idx]];
                newTransformationData[orbitName] = {
                    permutation: newPerm,
                    orientation: orbit1.orientation
                };
            } else {
                const newOri = new Array(orbitDefinition.numPieces);
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                    newOri[idx] = (orbit1.orientation[orbit2.permutation[idx]] + orbit2.orientation[idx]) % orbitDefinition.numOrientations;
                    newPerm[idx] = orbit1.permutation[orbit2.permutation[idx]];
                }
                newTransformationData[orbitName] = {
                    permutation: newPerm,
                    orientation: newOri
                };
            }
        }
    }
    return newTransformationData;
}
function $ed6ab6d3e0ce0683$var$applyTransformationDataToStateData(definition, stateData, transformationData) {
    const newStateData = {};
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const orbit1 = stateData[orbitName];
        const orbit2 = transformationData[orbitName];
        if ($ed6ab6d3e0ce0683$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit2)) newStateData[orbitName] = orbit1;
        else {
            const newPieces = new Array(orbitDefinition.numPieces);
            if (orbitDefinition.numOrientations === 1) {
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++)newPieces[idx] = orbit1.pieces[orbit2.permutation[idx]];
                newStateData[orbitName] = {
                    pieces: newPieces,
                    orientation: orbit1.orientation
                };
            } else {
                const newOri = new Array(orbitDefinition.numPieces);
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                    newOri[idx] = (orbit1.orientation[orbit2.permutation[idx]] + orbit2.orientation[idx]) % orbitDefinition.numOrientations;
                    newPieces[idx] = orbit1.pieces[orbit2.permutation[idx]];
                }
                newStateData[orbitName] = {
                    pieces: newPieces,
                    orientation: newOri
                };
            }
        }
    }
    return newStateData;
}
// src/cubing/kpuzzle/construct.ts
var $ed6ab6d3e0ce0683$var$FREEZE = false;
var $ed6ab6d3e0ce0683$var$identityOrbitCache = /* @__PURE__ */ new Map();
function $ed6ab6d3e0ce0683$var$constructIdentityOrbitTransformation(numPieces) {
    const cached = $ed6ab6d3e0ce0683$var$identityOrbitCache.get(numPieces);
    if (cached) return cached;
    const newPermutation = new Array(numPieces);
    const newOrientation = new Array(numPieces);
    for(let i = 0; i < numPieces; i++){
        newPermutation[i] = i;
        newOrientation[i] = 0;
    }
    const orbitTransformation = {
        permutation: newPermutation,
        orientation: newOrientation
    };
    if ($ed6ab6d3e0ce0683$var$FREEZE) {
        Object.freeze(newPermutation);
        Object.freeze(newOrientation);
        Object.freeze(orbitTransformation);
    }
    $ed6ab6d3e0ce0683$var$identityOrbitCache.set(numPieces, orbitTransformation);
    return orbitTransformation;
}
function $ed6ab6d3e0ce0683$var$constructIdentityTransformationDataUncached(definition) {
    const transformation = {};
    for (const [orbitName, orbitDefinition] of Object.entries(definition.orbits))transformation[orbitName] = $ed6ab6d3e0ce0683$var$constructIdentityOrbitTransformation(orbitDefinition.numPieces);
    if ($ed6ab6d3e0ce0683$var$FREEZE) Object.freeze(transformation);
    return transformation;
}
function $ed6ab6d3e0ce0683$var$moveToTransformationUncached(kpuzzle, move) {
    const quantumKey = move.quantum.toString();
    let quantumMoveDefinition = kpuzzle.definition.moves[quantumKey];
    if (!quantumMoveDefinition) {
        const derivedFrom = kpuzzle.definition.experimentalDerivedMoves?.[quantumKey];
        if (derivedFrom) quantumMoveDefinition = kpuzzle.algToTransformation(derivedFrom).transformationData;
    }
    if (quantumMoveDefinition) return $ed6ab6d3e0ce0683$var$repeatTransformationUncached(kpuzzle, quantumMoveDefinition, move.amount);
    const moveDefinition = kpuzzle.definition.moves[move.toString()];
    if (moveDefinition) return moveDefinition;
    const inverseMoveDefinition = kpuzzle.definition.moves[move.invert().toString()];
    if (inverseMoveDefinition) return $ed6ab6d3e0ce0683$var$repeatTransformationUncached(kpuzzle, inverseMoveDefinition, -1);
    throw new Error(`Invalid move for KPuzzle (${kpuzzle.name()}): ${move}`);
}
// src/cubing/kpuzzle/KState.ts
var $ed6ab6d3e0ce0683$export$ad3cd44c975e2fe3 = class {
    constructor(kpuzzle, stateData){
        this.kpuzzle = kpuzzle;
        this.stateData = stateData;
    }
    toJSON() {
        return {
            experimentalPuzzleName: this.kpuzzle.name(),
            stateData: this.stateData
        };
    }
    static fromTransformation(transformation) {
        const newStateData = $ed6ab6d3e0ce0683$var$applyTransformationDataToStateData(transformation.kpuzzle.definition, transformation.kpuzzle.definition.startStateData, transformation.transformationData);
        return new $ed6ab6d3e0ce0683$export$ad3cd44c975e2fe3(transformation.kpuzzle, newStateData);
    }
    apply(source) {
        return this.applyTransformation(this.kpuzzle.toTransformation(source));
    }
    applyTransformation(transformation) {
        if (transformation.isIdentityTransformation()) return new $ed6ab6d3e0ce0683$export$ad3cd44c975e2fe3(this.kpuzzle, this.stateData);
        const newStateData = $ed6ab6d3e0ce0683$var$applyTransformationDataToStateData(this.kpuzzle.definition, this.stateData, transformation.transformationData);
        return new $ed6ab6d3e0ce0683$export$ad3cd44c975e2fe3(this.kpuzzle, newStateData);
    }
    applyMove(move) {
        return this.applyTransformation(this.kpuzzle.moveToTransformation(move));
    }
    applyAlg(alg) {
        return this.applyTransformation(this.kpuzzle.algToTransformation(alg));
    }
    experimentalToTransformation() {
        if (!this.kpuzzle.canConvertStateToUniqueTransformation()) return null;
        const transformationData = {};
        for (const [orbitName, stateOrbitData] of Object.entries(this.stateData)){
            const transformationOrbit = {
                permutation: stateOrbitData.pieces,
                orientation: stateOrbitData.orientation
            };
            transformationData[orbitName] = transformationOrbit;
        }
        return new $ed6ab6d3e0ce0683$export$c97306ff17e651e8(this.kpuzzle, transformationData);
    }
};
// src/cubing/kpuzzle/KTransformation.ts
var $ed6ab6d3e0ce0683$var$_cachedIsIdentity;
var $ed6ab6d3e0ce0683$var$_KTransformation = class {
    constructor(kpuzzle, transformationData){
        this.kpuzzle = kpuzzle;
        this.transformationData = transformationData;
        (0, $hJBlP.__privateAdd)(this, $ed6ab6d3e0ce0683$var$_cachedIsIdentity, void 0);
    }
    toJSON() {
        return {
            experimentalPuzzleName: this.kpuzzle.name(),
            transformationData: this.transformationData
        };
    }
    invert() {
        return new $ed6ab6d3e0ce0683$var$_KTransformation(this.kpuzzle, $ed6ab6d3e0ce0683$var$invertTransformation(this.kpuzzle, this.transformationData));
    }
    isIdentityTransformation() {
        return (0, $hJBlP.__privateGet)(this, $ed6ab6d3e0ce0683$var$_cachedIsIdentity) ?? (0, $hJBlP.__privateSet)(this, $ed6ab6d3e0ce0683$var$_cachedIsIdentity, this.isIdentical(this.kpuzzle.identityTransformation()));
    }
    static experimentalConstructIdentity(kpuzzle) {
        const transformation = new $ed6ab6d3e0ce0683$var$_KTransformation(kpuzzle, $ed6ab6d3e0ce0683$var$constructIdentityTransformationDataUncached(kpuzzle.definition));
        (0, $hJBlP.__privateSet)(transformation, $ed6ab6d3e0ce0683$var$_cachedIsIdentity, true);
        return transformation;
    }
    isIdentical(t2) {
        return $ed6ab6d3e0ce0683$var$isTransformationDataIdentical(this.kpuzzle, this.transformationData, t2.transformationData);
    }
    apply(source) {
        return this.applyTransformation(this.kpuzzle.toTransformation(source));
    }
    applyTransformation(t2) {
        if (this.kpuzzle !== t2.kpuzzle) throw new Error(`Tried to apply a transformation for a KPuzzle (${t2.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);
        if ((0, $hJBlP.__privateGet)(this, $ed6ab6d3e0ce0683$var$_cachedIsIdentity)) return new $ed6ab6d3e0ce0683$var$_KTransformation(this.kpuzzle, t2.transformationData);
        if ((0, $hJBlP.__privateGet)(t2, $ed6ab6d3e0ce0683$var$_cachedIsIdentity)) return new $ed6ab6d3e0ce0683$var$_KTransformation(this.kpuzzle, this.transformationData);
        return new $ed6ab6d3e0ce0683$var$_KTransformation(this.kpuzzle, $ed6ab6d3e0ce0683$var$combineTransformationData(this.kpuzzle.definition, this.transformationData, t2.transformationData));
    }
    applyMove(move) {
        return this.applyTransformation(this.kpuzzle.moveToTransformation(move));
    }
    applyAlg(alg) {
        return this.applyTransformation(this.kpuzzle.algToTransformation(alg));
    }
    toKState() {
        return $ed6ab6d3e0ce0683$export$ad3cd44c975e2fe3.fromTransformation(this);
    }
    repetitionOrder() {
        return $ed6ab6d3e0ce0683$var$transformationRepetitionOrder(this.kpuzzle.definition, this);
    }
    selfMultiply(amount) {
        return new $ed6ab6d3e0ce0683$var$_KTransformation(this.kpuzzle, $ed6ab6d3e0ce0683$var$repeatTransformationUncached(this.kpuzzle, this.transformationData, amount));
    }
};
var $ed6ab6d3e0ce0683$export$c97306ff17e651e8 = $ed6ab6d3e0ce0683$var$_KTransformation;
$ed6ab6d3e0ce0683$var$_cachedIsIdentity = new WeakMap();
// src/cubing/kpuzzle/calculate.ts
function $ed6ab6d3e0ce0683$var$isOrbitTransformationDataIdentityUncached(numOrientations, orbitTransformationData) {
    const { permutation: permutation  } = orbitTransformationData;
    const numPieces = permutation.length;
    for(let idx = 0; idx < numPieces; idx++){
        if (permutation[idx] !== idx) return false;
    }
    if (numOrientations > 1) {
        const { orientation: orientation  } = orbitTransformationData;
        for(let idx = 0; idx < numPieces; idx++){
            if (orientation[idx] !== 0) return false;
        }
    }
    return true;
}
function $ed6ab6d3e0ce0683$var$isOrbitTransformationDataIdentical(orbitDefinition, orbitTransformationData1, orbitTransformationData2, options = {}) {
    for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
        if (!options?.ignoreOrientation && orbitTransformationData1.orientation[idx] !== orbitTransformationData2.orientation[idx]) return false;
        if (!options?.ignorePermutation && orbitTransformationData1.permutation[idx] !== orbitTransformationData2.permutation[idx]) return false;
    }
    return true;
}
function $ed6ab6d3e0ce0683$var$isTransformationDataIdentical(kpuzzle, transformationData1, transformationData2) {
    for (const [orbitName, orbitDefinition] of Object.entries(kpuzzle.definition.orbits)){
        if (!$ed6ab6d3e0ce0683$var$isOrbitTransformationDataIdentical(orbitDefinition, transformationData1[orbitName], transformationData2[orbitName])) return false;
    }
    return true;
}
function $ed6ab6d3e0ce0683$var$invertTransformation(kpuzzle, transformationData) {
    const newTransformationData = {};
    for(const orbitName in kpuzzle.definition.orbits){
        const orbitDefinition = kpuzzle.definition.orbits[orbitName];
        const orbitTransformationData = transformationData[orbitName];
        if ($ed6ab6d3e0ce0683$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbitTransformationData)) newTransformationData[orbitName] = orbitTransformationData;
        else if (orbitDefinition.numOrientations === 1) {
            const newPerm = new Array(orbitDefinition.numPieces);
            for(let idx = 0; idx < orbitDefinition.numPieces; idx++)newPerm[orbitTransformationData.permutation[idx]] = idx;
            newTransformationData[orbitName] = {
                permutation: newPerm,
                orientation: orbitTransformationData.orientation
            };
        } else {
            const newPerm = new Array(orbitDefinition.numPieces);
            const newOri = new Array(orbitDefinition.numPieces);
            for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                const fromIdx = orbitTransformationData.permutation[idx];
                newPerm[fromIdx] = idx;
                newOri[fromIdx] = (orbitDefinition.numOrientations - orbitTransformationData.orientation[idx] + orbitDefinition.numOrientations) % orbitDefinition.numOrientations;
            }
            newTransformationData[orbitName] = {
                permutation: newPerm,
                orientation: newOri
            };
        }
    }
    return newTransformationData;
}
function $ed6ab6d3e0ce0683$var$repeatTransformationUncached(kpuzzle, transformationData, amount) {
    if (amount === 1) return transformationData;
    if (amount < 0) return $ed6ab6d3e0ce0683$var$repeatTransformationUncached(kpuzzle, $ed6ab6d3e0ce0683$var$invertTransformation(kpuzzle, transformationData), -amount);
    if (amount === 0) {
        const { transformationData: transformationData2  } = kpuzzle.identityTransformation();
        return transformationData2;
    }
    let halfish = transformationData;
    if (amount !== 2) halfish = $ed6ab6d3e0ce0683$var$repeatTransformationUncached(kpuzzle, transformationData, Math.floor(amount / 2));
    const twiceHalfish = $ed6ab6d3e0ce0683$var$combineTransformationData(kpuzzle.definition, halfish, halfish);
    if (amount % 2 === 0) return twiceHalfish;
    else return $ed6ab6d3e0ce0683$var$combineTransformationData(kpuzzle.definition, transformationData, twiceHalfish);
}
var $ed6ab6d3e0ce0683$var$AlgToTransformationTraversal = class extends (0, $7TbMZ.TraversalDownUp) {
    traverseAlg(alg, kpuzzle) {
        let transformation = null;
        for (const unit of alg.units())if (transformation) transformation = transformation.applyTransformation(this.traverseUnit(unit, kpuzzle));
        else transformation = this.traverseUnit(unit, kpuzzle);
        return transformation ?? kpuzzle.identityTransformation();
    }
    traverseGrouping(grouping, kpuzzle) {
        const algTransformation = this.traverseAlg(grouping.alg, kpuzzle);
        return new $ed6ab6d3e0ce0683$export$c97306ff17e651e8(kpuzzle, $ed6ab6d3e0ce0683$var$repeatTransformationUncached(kpuzzle, algTransformation.transformationData, grouping.amount));
    }
    traverseMove(move, kpuzzle) {
        return kpuzzle.moveToTransformation(move);
    }
    traverseCommutator(commutator, kpuzzle) {
        const aTransformation = this.traverseAlg(commutator.A, kpuzzle);
        const bTransformation = this.traverseAlg(commutator.B, kpuzzle);
        return aTransformation.applyTransformation(bTransformation).applyTransformation(aTransformation.invert()).applyTransformation(bTransformation.invert());
    }
    traverseConjugate(conjugate, kpuzzle) {
        const aTransformation = this.traverseAlg(conjugate.A, kpuzzle);
        const bTransformation = this.traverseAlg(conjugate.B, kpuzzle);
        return aTransformation.applyTransformation(bTransformation).applyTransformation(aTransformation.invert());
    }
    traversePause(_, kpuzzle) {
        return kpuzzle.identityTransformation();
    }
    traverseNewline(_, kpuzzle) {
        return kpuzzle.identityTransformation();
    }
    traverseLineComment(_, kpuzzle) {
        return kpuzzle.identityTransformation();
    }
};
var $ed6ab6d3e0ce0683$var$algToTransformationInstance = new $ed6ab6d3e0ce0683$var$AlgToTransformationTraversal();
var $ed6ab6d3e0ce0683$var$algToTransformation = $ed6ab6d3e0ce0683$var$algToTransformationInstance.traverseAlg.bind($ed6ab6d3e0ce0683$var$algToTransformationInstance);
function $ed6ab6d3e0ce0683$var$gcd(a, b) {
    if (b) return $ed6ab6d3e0ce0683$var$gcd(b, a % b);
    return a;
}
function $ed6ab6d3e0ce0683$var$transformationRepetitionOrder(definition, transformation) {
    let order = 1;
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const transformationOrbit = transformation.transformationData[orbitName];
        const orbitPieces = new Array(orbitDefinition.numPieces);
        for(let startIdx = 0; startIdx < orbitDefinition.numPieces; startIdx++)if (!orbitPieces[startIdx]) {
            let currentIdx = startIdx;
            let orientationSum = 0;
            let cycleLength = 0;
            for(;;){
                orbitPieces[currentIdx] = true;
                orientationSum = orientationSum + transformationOrbit.orientation[currentIdx];
                cycleLength = cycleLength + 1;
                currentIdx = transformationOrbit.permutation[currentIdx];
                if (currentIdx === startIdx) break;
            }
            if (orientationSum !== 0) cycleLength = cycleLength * orbitDefinition.numOrientations / $ed6ab6d3e0ce0683$var$gcd(orbitDefinition.numOrientations, orientationSum);
            order = order * cycleLength / $ed6ab6d3e0ce0683$var$gcd(order, cycleLength);
        }
    }
    return order;
}
// src/cubing/kpuzzle/KPuzzle.ts
var $ed6ab6d3e0ce0683$var$_moveToTransformationDataCache, $ed6ab6d3e0ce0683$var$_cachedCanConvertStateToUniqueTransformation;
var $ed6ab6d3e0ce0683$export$5d975d639f9eb1a3 = class {
    constructor(definition, options){
        this.definition = definition;
        (0, $hJBlP.__privateAdd)(this, $ed6ab6d3e0ce0683$var$_moveToTransformationDataCache, /* @__PURE__ */ new Map());
        (0, $hJBlP.__privateAdd)(this, $ed6ab6d3e0ce0683$var$_cachedCanConvertStateToUniqueTransformation, void 0);
        this.experimentalPGNotation = options?.experimentalPGNotation;
    }
    name() {
        return this.definition.name;
    }
    identityTransformation() {
        return $ed6ab6d3e0ce0683$export$c97306ff17e651e8.experimentalConstructIdentity(this);
    }
    moveToTransformation(move) {
        if (typeof move === "string") move = new (0, $7TbMZ.Move)(move);
        const cacheKey = move.toString();
        const cachedTransformationData = (0, $hJBlP.__privateGet)(this, $ed6ab6d3e0ce0683$var$_moveToTransformationDataCache).get(cacheKey);
        if (cachedTransformationData) return new $ed6ab6d3e0ce0683$export$c97306ff17e651e8(this, cachedTransformationData);
        if (this.experimentalPGNotation) {
            const transformationData2 = this.experimentalPGNotation.lookupMove(move);
            if (!transformationData2) throw new Error(`could not map to internal move: ${move}`);
            (0, $hJBlP.__privateGet)(this, $ed6ab6d3e0ce0683$var$_moveToTransformationDataCache).set(cacheKey, transformationData2);
            return new $ed6ab6d3e0ce0683$export$c97306ff17e651e8(this, transformationData2);
        }
        const transformationData = $ed6ab6d3e0ce0683$var$moveToTransformationUncached(this, move);
        (0, $hJBlP.__privateGet)(this, $ed6ab6d3e0ce0683$var$_moveToTransformationDataCache).set(cacheKey, transformationData);
        return new $ed6ab6d3e0ce0683$export$c97306ff17e651e8(this, transformationData);
    }
    algToTransformation(alg) {
        if (typeof alg === "string") alg = new (0, $7TbMZ.Alg)(alg);
        return $ed6ab6d3e0ce0683$var$algToTransformation(alg, this);
    }
    toTransformation(source) {
        if (typeof source === "string") return this.algToTransformation(source);
        else if (source?.is?.(0, $7TbMZ.Alg)) return this.algToTransformation(source);
        else if (source?.is?.(0, $7TbMZ.Move)) return this.moveToTransformation(source);
        else return source;
    }
    startState() {
        return new $ed6ab6d3e0ce0683$export$ad3cd44c975e2fe3(this, this.definition.startStateData);
    }
    canConvertStateToUniqueTransformation() {
        return (0, $hJBlP.__privateGet)(this, $ed6ab6d3e0ce0683$var$_cachedCanConvertStateToUniqueTransformation) ?? (0, $hJBlP.__privateSet)(this, $ed6ab6d3e0ce0683$var$_cachedCanConvertStateToUniqueTransformation, (()=>{
            for (const [orbitName, orbitDefinition] of Object.entries(this.definition.orbits)){
                const pieces = new Array(orbitDefinition.numPieces).fill(false);
                for (const piece of this.definition.startStateData[orbitName].pieces)pieces[piece] = true;
                for (const piece1 of pieces){
                    if (!piece1) return false;
                }
            }
            return true;
        })());
    }
    get state() {
        throw new Error("KPuzzle is now a different (stateless) class.");
    }
    reset() {
        throw new Error("KPuzzle is now a different (stateless) class.");
    }
    applyMove(_move) {
        throw new Error("KPuzzle is now a different class. Try `.moveToTransformation()` to get the transformation for a move.");
    }
    applyAlg(_alg) {
        throw new Error("KPuzzle is now a different class. Try `.algToTransformation()` to get the transformation for an alg.");
    }
};
$ed6ab6d3e0ce0683$var$_moveToTransformationDataCache = new WeakMap();
$ed6ab6d3e0ce0683$var$_cachedCanConvertStateToUniqueTransformation = new WeakMap();
// src/cubing/kpuzzle/3x3x3/3x3x3.kpuzzle.json.ts
var $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition = {
    name: "3x3x3",
    orbits: {
        EDGES: {
            numPieces: 12,
            numOrientations: 2
        },
        CORNERS: {
            numPieces: 8,
            numOrientations: 3
        },
        CENTERS: {
            numPieces: 6,
            numOrientations: 4
        }
    },
    startStateData: {
        EDGES: {
            pieces: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ],
            orientation: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        CORNERS: {
            pieces: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            orientation: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        CENTERS: {
            pieces: [
                0,
                1,
                2,
                3,
                4,
                5
            ],
            orientation: [
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    moves: {
        U: {
            EDGES: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        y: {
            EDGES: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    5,
                    6,
                    7,
                    4,
                    10,
                    8,
                    11,
                    9
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    7,
                    4,
                    5,
                    6
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    2,
                    3,
                    4,
                    1,
                    5
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    3
                ]
            }
        },
        x: {
            EDGES: {
                permutation: [
                    4,
                    8,
                    0,
                    9,
                    6,
                    10,
                    2,
                    11,
                    5,
                    7,
                    1,
                    3
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    4,
                    0,
                    3,
                    5,
                    7,
                    6,
                    2,
                    1
                ],
                orientation: [
                    2,
                    1,
                    2,
                    1,
                    1,
                    2,
                    1,
                    2
                ]
            },
            CENTERS: {
                permutation: [
                    2,
                    1,
                    5,
                    3,
                    0,
                    4
                ],
                orientation: [
                    0,
                    3,
                    0,
                    1,
                    2,
                    2
                ]
            }
        },
        L: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    11,
                    4,
                    5,
                    6,
                    9,
                    8,
                    3,
                    10,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    6,
                    2,
                    4,
                    3,
                    5,
                    7
                ],
                orientation: [
                    0,
                    0,
                    2,
                    1,
                    0,
                    2,
                    1,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    1,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        F: {
            EDGES: {
                permutation: [
                    9,
                    1,
                    2,
                    3,
                    8,
                    5,
                    6,
                    7,
                    0,
                    4,
                    10,
                    11
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    3,
                    1,
                    2,
                    5,
                    0,
                    4,
                    6,
                    7
                ],
                orientation: [
                    1,
                    0,
                    0,
                    2,
                    2,
                    1,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    1,
                    0,
                    0,
                    0
                ]
            }
        },
        R: {
            EDGES: {
                permutation: [
                    0,
                    8,
                    2,
                    3,
                    4,
                    10,
                    6,
                    7,
                    5,
                    9,
                    1,
                    11
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    4,
                    0,
                    2,
                    3,
                    7,
                    5,
                    6,
                    1
                ],
                orientation: [
                    2,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    2
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    1,
                    0,
                    0
                ]
            }
        },
        B: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    10,
                    3,
                    4,
                    5,
                    11,
                    7,
                    8,
                    9,
                    6,
                    2
                ],
                orientation: [
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    7,
                    1,
                    3,
                    4,
                    5,
                    2,
                    6
                ],
                orientation: [
                    0,
                    2,
                    1,
                    0,
                    0,
                    0,
                    2,
                    1
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ]
            }
        },
        D: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    7,
                    4,
                    5,
                    6,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    4
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            }
        },
        z: {
            EDGES: {
                permutation: [
                    9,
                    3,
                    11,
                    7,
                    8,
                    1,
                    10,
                    5,
                    0,
                    4,
                    2,
                    6
                ],
                orientation: [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    3,
                    2,
                    6,
                    5,
                    0,
                    4,
                    7,
                    1
                ],
                orientation: [
                    1,
                    2,
                    1,
                    2,
                    2,
                    1,
                    2,
                    1
                ]
            },
            CENTERS: {
                permutation: [
                    1,
                    5,
                    2,
                    0,
                    4,
                    3
                ],
                orientation: [
                    1,
                    1,
                    1,
                    1,
                    3,
                    1
                ]
            }
        },
        M: {
            EDGES: {
                permutation: [
                    2,
                    1,
                    6,
                    3,
                    0,
                    5,
                    4,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    4,
                    1,
                    0,
                    3,
                    5,
                    2
                ],
                orientation: [
                    2,
                    0,
                    0,
                    0,
                    2,
                    0
                ]
            }
        },
        E: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    9,
                    11,
                    8,
                    10
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    4,
                    1,
                    2,
                    3,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        S: {
            EDGES: {
                permutation: [
                    0,
                    3,
                    2,
                    7,
                    4,
                    1,
                    6,
                    5,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    1,
                    5,
                    2,
                    0,
                    4,
                    3
                ],
                orientation: [
                    1,
                    1,
                    0,
                    1,
                    0,
                    1
                ]
            }
        },
        u: {
            EDGES: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7,
                    10,
                    8,
                    11,
                    9
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    2,
                    3,
                    4,
                    1,
                    5
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        l: {
            EDGES: {
                permutation: [
                    2,
                    1,
                    6,
                    11,
                    0,
                    5,
                    4,
                    9,
                    8,
                    3,
                    10,
                    7
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    6,
                    2,
                    4,
                    3,
                    5,
                    7
                ],
                orientation: [
                    0,
                    0,
                    2,
                    1,
                    0,
                    2,
                    1,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    4,
                    1,
                    0,
                    3,
                    5,
                    2
                ],
                orientation: [
                    2,
                    1,
                    0,
                    0,
                    2,
                    0
                ]
            }
        },
        f: {
            EDGES: {
                permutation: [
                    9,
                    3,
                    2,
                    7,
                    8,
                    1,
                    6,
                    5,
                    0,
                    4,
                    10,
                    11
                ],
                orientation: [
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    3,
                    1,
                    2,
                    5,
                    0,
                    4,
                    6,
                    7
                ],
                orientation: [
                    1,
                    0,
                    0,
                    2,
                    2,
                    1,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    1,
                    5,
                    2,
                    0,
                    4,
                    3
                ],
                orientation: [
                    1,
                    1,
                    1,
                    1,
                    0,
                    1
                ]
            }
        },
        r: {
            EDGES: {
                permutation: [
                    4,
                    8,
                    0,
                    3,
                    6,
                    10,
                    2,
                    7,
                    5,
                    9,
                    1,
                    11
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    4,
                    0,
                    2,
                    3,
                    7,
                    5,
                    6,
                    1
                ],
                orientation: [
                    2,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    2
                ]
            },
            CENTERS: {
                permutation: [
                    2,
                    1,
                    5,
                    3,
                    0,
                    4
                ],
                orientation: [
                    0,
                    0,
                    0,
                    1,
                    2,
                    2
                ]
            }
        },
        b: {
            EDGES: {
                permutation: [
                    0,
                    5,
                    10,
                    1,
                    4,
                    7,
                    11,
                    3,
                    8,
                    9,
                    6,
                    2
                ],
                orientation: [
                    0,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    7,
                    1,
                    3,
                    4,
                    5,
                    2,
                    6
                ],
                orientation: [
                    0,
                    2,
                    1,
                    0,
                    0,
                    0,
                    2,
                    1
                ]
            },
            CENTERS: {
                permutation: [
                    3,
                    0,
                    2,
                    5,
                    4,
                    1
                ],
                orientation: [
                    3,
                    3,
                    0,
                    3,
                    1,
                    3
                ]
            }
        },
        d: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    7,
                    4,
                    5,
                    6,
                    9,
                    11,
                    8,
                    10
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    4
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    4,
                    1,
                    2,
                    3,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            }
        }
    }
};
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Uw"] = $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["u"];
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Lw"] = $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["l"];
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Fw"] = $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["f"];
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Rw"] = $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["r"];
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Bw"] = $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["b"];
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Dw"] = $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["d"];
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Rv"] = $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["x"];
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Uv"] = $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["y"];
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Fv"] = $ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["z"];
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Lv"] = {
    EDGES: {
        permutation: [
            2,
            10,
            6,
            11,
            0,
            8,
            4,
            9,
            1,
            3,
            5,
            7
        ],
        orientation: [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    CORNERS: {
        permutation: [
            1,
            7,
            6,
            2,
            0,
            3,
            5,
            4
        ],
        orientation: [
            2,
            1,
            2,
            1,
            1,
            2,
            1,
            2
        ]
    },
    CENTERS: {
        permutation: [
            4,
            1,
            0,
            3,
            5,
            2
        ],
        orientation: [
            2,
            1,
            0,
            3,
            2,
            0
        ]
    }
};
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Dv"] = {
    EDGES: {
        permutation: [
            3,
            0,
            1,
            2,
            7,
            4,
            5,
            6,
            9,
            11,
            8,
            10
        ],
        orientation: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1
        ]
    },
    CORNERS: {
        permutation: [
            3,
            0,
            1,
            2,
            5,
            6,
            7,
            4
        ],
        orientation: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    CENTERS: {
        permutation: [
            0,
            4,
            1,
            2,
            3,
            5
        ],
        orientation: [
            3,
            0,
            0,
            0,
            0,
            1
        ]
    }
};
$ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition.moves["Bv"] = {
    EDGES: {
        permutation: [
            8,
            5,
            10,
            1,
            9,
            7,
            11,
            3,
            4,
            0,
            6,
            2
        ],
        orientation: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    CORNERS: {
        permutation: [
            4,
            7,
            1,
            0,
            5,
            3,
            2,
            6
        ],
        orientation: [
            1,
            2,
            1,
            2,
            2,
            1,
            2,
            1
        ]
    },
    CENTERS: {
        permutation: [
            3,
            0,
            2,
            5,
            4,
            1
        ],
        orientation: [
            3,
            3,
            3,
            3,
            1,
            3
        ]
    }
};
// src/cubing/kpuzzle/index.ts
var $ed6ab6d3e0ce0683$export$1fbb93a14e55e846 = new $ed6ab6d3e0ce0683$export$5d975d639f9eb1a3($ed6ab6d3e0ce0683$var$cube3x3x3KPuzzleDefinition);

});

parcelRequire.register("aKu6a", function(module, exports) {

$parcel$export(module.exports, "StaleDropper", () => $7d358c2cc194e6c6$export$4c5bf6e094d8f142);
$parcel$export(module.exports, "TwistyPropSource", () => $7d358c2cc194e6c6$export$99f7895067f54bbe);
$parcel$export(module.exports, "SimpleTwistyPropSource", () => $7d358c2cc194e6c6$export$9cc0345f25c4e739);
$parcel$export(module.exports, "NO_VALUE", () => $7d358c2cc194e6c6$export$d5a265bcf7e0ecc1);
$parcel$export(module.exports, "TwistyPropDerived", () => $7d358c2cc194e6c6$export$bd74bdc934d3c98e);
$parcel$export(module.exports, "FreshListenerManager", () => $7d358c2cc194e6c6$export$70b517844adbfd19);
$parcel$export(module.exports, "experimentalStickerings", () => $7d358c2cc194e6c6$export$149a3858f06e107e);
$parcel$export(module.exports, "StickeringProp", () => $7d358c2cc194e6c6$export$6489fb243f2aa5c5);
$parcel$export(module.exports, "hintFaceletStyles", () => $7d358c2cc194e6c6$export$44c8b061898f8d28);
$parcel$export(module.exports, "HintFaceletProp", () => $7d358c2cc194e6c6$export$f7f72cc4c346e939);
$parcel$export(module.exports, "TAU", () => $7d358c2cc194e6c6$export$ad5b0b9ab7d48f58);
$parcel$export(module.exports, "DEGREES_PER_RADIAN", () => $7d358c2cc194e6c6$export$3627dc5537d31f6e);
$parcel$export(module.exports, "proxy3D", () => $7d358c2cc194e6c6$export$c3adadba212f68ff);
$parcel$export(module.exports, "THREEJS", () => $7d358c2cc194e6c6$export$a683b6645feb2503);

var $hJBlP = parcelRequire("hJBlP");
// src/cubing/vendor/p-lazy/p-lazy.ts
var $7d358c2cc194e6c6$var$PLazy = class extends Promise {
    constructor(executor){
        super((resolve)=>{
            resolve();
        });
        this._executor = executor;
    }
    static from(function_) {
        return new $7d358c2cc194e6c6$var$PLazy((resolve)=>{
            resolve(function_());
        });
    }
    static resolve(value) {
        return new $7d358c2cc194e6c6$var$PLazy((resolve)=>{
            resolve(value);
        });
    }
    static reject(error) {
        return new $7d358c2cc194e6c6$var$PLazy((_resolve, reject)=>{
            reject(error);
        });
    }
    then(onFulfilled, onRejected) {
        this._promise = this._promise || new Promise(this._executor);
        return this._promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        this._promise = this._promise || new Promise(this._executor);
        return this._promise.catch(onRejected);
    }
};
function $7d358c2cc194e6c6$var$from(function_) {
    return new $7d358c2cc194e6c6$var$PLazy((resolve)=>{
        resolve(function_());
    });
}
// src/cubing/twisty/model/PromiseFreshener.ts
var $7d358c2cc194e6c6$var$_latestAssignedIdx, $7d358c2cc194e6c6$var$_latestResolvedIdx;
var $7d358c2cc194e6c6$var$PromiseFreshener = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_latestAssignedIdx, 0);
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_latestResolvedIdx, 0);
    }
    async queue(p) {
        const idx = ++(0, $hJBlP.__privateWrapper)(this, $7d358c2cc194e6c6$var$_latestAssignedIdx)._;
        const result = await p;
        if (idx > (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_latestResolvedIdx)) {
            (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_latestResolvedIdx, idx);
            return {
                fresh: true,
                result: result
            };
        } else return {
            fresh: false
        };
    }
};
$7d358c2cc194e6c6$var$_latestAssignedIdx = new WeakMap();
$7d358c2cc194e6c6$var$_latestResolvedIdx = new WeakMap();
var $7d358c2cc194e6c6$var$_latestAssignedIdx2, $7d358c2cc194e6c6$var$_latestResolvedIdx2;
var $7d358c2cc194e6c6$export$4c5bf6e094d8f142 = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_latestAssignedIdx2, 0);
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_latestResolvedIdx2, 0);
    }
    queue(p) {
        return new Promise(async (resolve, reject)=>{
            try {
                const idx = ++(0, $hJBlP.__privateWrapper)(this, $7d358c2cc194e6c6$var$_latestAssignedIdx2)._;
                const result = await p;
                if (idx > (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_latestResolvedIdx2)) {
                    (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_latestResolvedIdx2, idx);
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        });
    }
};
$7d358c2cc194e6c6$var$_latestAssignedIdx2 = new WeakMap();
$7d358c2cc194e6c6$var$_latestResolvedIdx2 = new WeakMap();
// src/cubing/twisty/model/props/TwistyProp.ts
var $7d358c2cc194e6c6$var$globalSourceGeneration = 0;
var $7d358c2cc194e6c6$var$_children, $7d358c2cc194e6c6$var$_rawListeners, $7d358c2cc194e6c6$var$_scheduleRawDispatch, $7d358c2cc194e6c6$var$scheduleRawDispatch_fn, $7d358c2cc194e6c6$var$_rawDispatchPending, $7d358c2cc194e6c6$var$_dispatchRawListeners, $7d358c2cc194e6c6$var$dispatchRawListeners_fn, $7d358c2cc194e6c6$var$_freshListeners;
var $7d358c2cc194e6c6$var$TwistyPropParent = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_scheduleRawDispatch);
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_dispatchRawListeners);
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_children, /* @__PURE__ */ new Set());
        this.lastSourceGeneration = 0;
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_rawListeners, /* @__PURE__ */ new Set());
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_rawDispatchPending, false);
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_freshListeners, /* @__PURE__ */ new Map());
    }
    canReuse(v1, v2) {
        return v1 === v2 || this.canReuseValue(v1, v2);
    }
    canReuseValue(_v1, _v2) {
        return false;
    }
    debugGetChildren() {
        return Array.from((0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_children).values());
    }
    addChild(child) {
        (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_children).add(child);
    }
    removeChild(child) {
        (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_children).delete(child);
    }
    markStale(sourceEvent) {
        if (sourceEvent.detail.generation !== $7d358c2cc194e6c6$var$globalSourceGeneration) throw new Error("A TwistyProp was marked stale too late!");
        if (this.lastSourceGeneration === sourceEvent.detail.generation) return;
        this.lastSourceGeneration = sourceEvent.detail.generation;
        for (const child of (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_children))child.markStale(sourceEvent);
        (0, $hJBlP.__privateMethod)(this, $7d358c2cc194e6c6$var$_scheduleRawDispatch, $7d358c2cc194e6c6$var$scheduleRawDispatch_fn).call(this);
    }
    addRawListener(listener, options) {
        (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_rawListeners).add(listener);
        if (options?.initial) listener();
    }
    removeRawListener(listener) {
        (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_rawListeners).delete(listener);
    }
    addFreshListener(listener) {
        const staleDropper = new $7d358c2cc194e6c6$export$4c5bf6e094d8f142();
        let lastResult = null;
        const callback = async ()=>{
            const result = await staleDropper.queue(this.get());
            if (lastResult !== null && this.canReuse(lastResult, result)) return;
            lastResult = result;
            listener(result);
        };
        (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_freshListeners).set(listener, callback);
        this.addRawListener(callback, {
            initial: true
        });
    }
    removeFreshListener(listener) {
        this.removeRawListener((0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_freshListeners).get(listener));
        (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_freshListeners).delete(listener);
    }
};
$7d358c2cc194e6c6$var$_children = new WeakMap();
$7d358c2cc194e6c6$var$_rawListeners = new WeakMap();
$7d358c2cc194e6c6$var$_scheduleRawDispatch = new WeakSet();
$7d358c2cc194e6c6$var$scheduleRawDispatch_fn = function() {
    if (!(0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_rawDispatchPending)) {
        (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_rawDispatchPending, true);
        setTimeout(()=>(0, $hJBlP.__privateMethod)(this, $7d358c2cc194e6c6$var$_dispatchRawListeners, $7d358c2cc194e6c6$var$dispatchRawListeners_fn).call(this), 0);
    }
};
$7d358c2cc194e6c6$var$_rawDispatchPending = new WeakMap();
$7d358c2cc194e6c6$var$_dispatchRawListeners = new WeakSet();
$7d358c2cc194e6c6$var$dispatchRawListeners_fn = function() {
    if (!(0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_rawDispatchPending)) throw new Error("Invalid dispatch state!");
    for (const listener of (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_rawListeners))listener();
    (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_rawDispatchPending, false);
};
$7d358c2cc194e6c6$var$_freshListeners = new WeakMap();
var $7d358c2cc194e6c6$var$_value;
var $7d358c2cc194e6c6$export$99f7895067f54bbe = class extends $7d358c2cc194e6c6$var$TwistyPropParent {
    constructor(initialValue){
        super();
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_value, void 0);
        (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_value, $7d358c2cc194e6c6$var$from(()=>this.getDefaultValue()));
        if (initialValue) (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_value, this.deriveFromPromiseOrValue(initialValue, (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_value)));
    }
    set(input) {
        (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_value, this.deriveFromPromiseOrValue(input, (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_value)));
        const sourceEventDetail = {
            sourceProp: this,
            value: (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_value),
            generation: ++$7d358c2cc194e6c6$var$globalSourceGeneration
        };
        this.markStale(new CustomEvent("stale", {
            detail: sourceEventDetail
        }));
    }
    async get() {
        return (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_value);
    }
    async deriveFromPromiseOrValue(input, oldValuePromise) {
        return this.derive(await input, oldValuePromise);
    }
};
$7d358c2cc194e6c6$var$_value = new WeakMap();
var $7d358c2cc194e6c6$export$9cc0345f25c4e739 = class extends $7d358c2cc194e6c6$export$99f7895067f54bbe {
    derive(input) {
        return input;
    }
};
var $7d358c2cc194e6c6$export$d5a265bcf7e0ecc1 = Symbol("no value");
var $7d358c2cc194e6c6$var$_parents, $7d358c2cc194e6c6$var$_cachedLastSuccessfulCalculation, $7d358c2cc194e6c6$var$_cachedLatestGenerationCalculation, $7d358c2cc194e6c6$var$_getParents, $7d358c2cc194e6c6$var$getParents_fn, $7d358c2cc194e6c6$var$_cacheDerive, $7d358c2cc194e6c6$var$cacheDerive_fn;
var $7d358c2cc194e6c6$export$bd74bdc934d3c98e = class extends $7d358c2cc194e6c6$var$TwistyPropParent {
    constructor(parents, userVisibleErrorTracker){
        super();
        this.userVisibleErrorTracker = userVisibleErrorTracker;
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_getParents);
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_cacheDerive);
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_parents, void 0);
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_cachedLastSuccessfulCalculation, null);
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_cachedLatestGenerationCalculation, null);
        (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_parents, parents);
        for (const parent of Object.values(parents))parent.addChild(this);
    }
    async get() {
        const generation = this.lastSourceGeneration;
        if ((0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_cachedLatestGenerationCalculation)?.generation === generation) return (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_cachedLatestGenerationCalculation).output;
        const latestGenerationCalculation = {
            generation: generation,
            output: (0, $hJBlP.__privateMethod)(this, $7d358c2cc194e6c6$var$_cacheDerive, $7d358c2cc194e6c6$var$cacheDerive_fn).call(this, (0, $hJBlP.__privateMethod)(this, $7d358c2cc194e6c6$var$_getParents, $7d358c2cc194e6c6$var$getParents_fn).call(this), generation, (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_cachedLastSuccessfulCalculation))
        };
        (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_cachedLatestGenerationCalculation, latestGenerationCalculation);
        this.userVisibleErrorTracker?.reset();
        return latestGenerationCalculation.output;
    }
};
$7d358c2cc194e6c6$var$_parents = new WeakMap();
$7d358c2cc194e6c6$var$_cachedLastSuccessfulCalculation = new WeakMap();
$7d358c2cc194e6c6$var$_cachedLatestGenerationCalculation = new WeakMap();
$7d358c2cc194e6c6$var$_getParents = new WeakSet();
$7d358c2cc194e6c6$var$getParents_fn = async function() {
    const inputValuePromises = {};
    for (const [key, parent] of Object.entries((0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_parents)))inputValuePromises[key] = parent.get();
    const inputs = {};
    for(const key1 in (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_parents))inputs[key1] = await inputValuePromises[key1];
    return inputs;
};
$7d358c2cc194e6c6$var$_cacheDerive = new WeakSet();
$7d358c2cc194e6c6$var$cacheDerive_fn = async function(inputsPromise, generation, cachedLatestGenerationCalculation = null) {
    const inputs = await inputsPromise;
    const cache = (output)=>{
        (0, $hJBlP.__privateSet)(this, $7d358c2cc194e6c6$var$_cachedLastSuccessfulCalculation, {
            inputs: inputs,
            output: Promise.resolve(output),
            generation: generation
        });
        return output;
    };
    if (!cachedLatestGenerationCalculation) return cache(await this.derive(inputs));
    const cachedInputs = cachedLatestGenerationCalculation.inputs;
    for(const key in (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_parents)){
        const parent = (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_parents)[key];
        if (!parent.canReuse(inputs[key], cachedInputs[key])) return cache(await this.derive(inputs));
    }
    return cachedLatestGenerationCalculation.output;
};
var $7d358c2cc194e6c6$var$_disconnectionFunctions;
var $7d358c2cc194e6c6$export$70b517844adbfd19 = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $7d358c2cc194e6c6$var$_disconnectionFunctions, []);
    }
    addListener(prop, listener) {
        let disconnected = false;
        const wrappedListener = (value)=>{
            if (disconnected) return;
            listener(value);
        };
        prop.addFreshListener(wrappedListener);
        (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_disconnectionFunctions).push(()=>{
            prop.removeFreshListener(wrappedListener);
            disconnected = true;
        });
    }
    addMultiListener(props, listener) {
        let disconnected = false;
        let initialIgnoresLeft = props.length - 1;
        const wrappedListener = async (_)=>{
            if (initialIgnoresLeft > 0) {
                initialIgnoresLeft--;
                return;
            }
            if (disconnected) return;
            const promises = props.map((prop)=>prop.get());
            const values = await Promise.all(promises);
            listener(values);
        };
        for (const prop1 of props)prop1.addFreshListener(wrappedListener);
        (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_disconnectionFunctions).push(()=>{
            for (const prop of props)prop.removeFreshListener(wrappedListener);
            disconnected = true;
        });
    }
    disconnect() {
        for (const disconnectionFunction of (0, $hJBlP.__privateGet)(this, $7d358c2cc194e6c6$var$_disconnectionFunctions))disconnectionFunction();
    }
};
$7d358c2cc194e6c6$var$_disconnectionFunctions = new WeakMap();
// src/cubing/twisty/model/props/puzzle/display/StickeringProp.ts
var $7d358c2cc194e6c6$export$149a3858f06e107e = {
    "full": true,
    "centers-only": true,
    "PLL": true,
    "CLS": true,
    "OLL": true,
    "COLL": true,
    "OCLL": true,
    "CLL": true,
    "ELL": true,
    "ELS": true,
    "LL": true,
    "F2L": true,
    "ZBLL": true,
    "ZBLS": true,
    "WVLS": true,
    "VLS": true,
    "LS": true,
    "EO": true,
    "EOline": true,
    "EOcross": true,
    "CMLL": true,
    "L6E": true,
    "L6EO": true,
    "Daisy": true,
    "Cross": true,
    "2x2x2": true,
    "2x2x3": true,
    "Void Cube": true,
    "invisible": true,
    "picture": true,
    "experimental-centers-U": true,
    "experimental-centers-U-D": true,
    "experimental-centers-U-L-D": true,
    "experimental-centers-U-L-B-D": true,
    "experimental-centers": true,
    "experimental-fto-fc": true,
    "experimental-fto-f2t": true,
    "experimental-fto-sc": true,
    "experimental-fto-l2c": true,
    "experimental-fto-lbt": true,
    "experimental-fto-l3t": true,
    "experimental-global-custom-1": true,
    "experimental-global-custom-2": true
};
var $7d358c2cc194e6c6$export$6489fb243f2aa5c5 = class extends $7d358c2cc194e6c6$export$9cc0345f25c4e739 {
    getDefaultValue() {
        return "full";
    }
};
// src/cubing/twisty/model/props/puzzle/display/HintFaceletProp.ts
var $7d358c2cc194e6c6$export$44c8b061898f8d28 = {
    floating: true,
    none: true
};
var $7d358c2cc194e6c6$export$f7f72cc4c346e939 = class extends $7d358c2cc194e6c6$export$9cc0345f25c4e739 {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/views/3D/TAU.ts
var $7d358c2cc194e6c6$export$ad5b0b9ab7d48f58 = Math.PI * 2;
var $7d358c2cc194e6c6$export$3627dc5537d31f6e = 360 / $7d358c2cc194e6c6$export$ad5b0b9ab7d48f58;
// src/cubing/twisty/heavy-code-imports/3d.ts
var $7d358c2cc194e6c6$var$cachedConstructorProxy = null;

async function $7d358c2cc194e6c6$export$c3adadba212f68ff() {
    return $7d358c2cc194e6c6$var$cachedConstructorProxy ?? ($7d358c2cc194e6c6$var$cachedConstructorProxy = (parcelRequire("lKaOl")));
}
var $7d358c2cc194e6c6$export$a683b6645feb2503 = $7d358c2cc194e6c6$var$from(async ()=>(await $7d358c2cc194e6c6$export$c3adadba212f68ff()).T3I);

});
parcelRequire.register("lKaOl", function(module, exports) {


module.exports = Promise.all([
    import("./" + (parcelRequire("aKzDW")).resolve("cbG4t")),
    import("./" + (parcelRequire("aKzDW")).resolve("6llIy"))
]).then(()=>parcelRequire("6ki7u"));

});


parcelRequire.register("lLkc4", function(module, exports) {

$parcel$export(module.exports, "customPGPuzzleLoader", () => $fd7da6d471b713e3$export$edc4dd73f2bc7c3f);
$parcel$export(module.exports, "getFaceletAppearance", () => $fd7da6d471b713e3$export$a5563e03823fac75);
$parcel$export(module.exports, "cubeAppearance", () => $fd7da6d471b713e3$export$35b727ea49e69201);
$parcel$export(module.exports, "cube2x2x2", () => $fd7da6d471b713e3$export$75b089e783ade19b);
$parcel$export(module.exports, "cube3x3x3", () => $fd7da6d471b713e3$export$c52e9d2f3741ae58);
$parcel$export(module.exports, "puzzles", () => $fd7da6d471b713e3$export$d0e8cc4bac949be1);

var $knLo6 = parcelRequire("knLo6");

var $hJBlP = parcelRequire("hJBlP");

// src/cubing/puzzles/customPGPuzzleLoader.ts
async function $fd7da6d471b713e3$var$descAsyncGetPuzzleGeometry(desc) {
    const puzzleGeometry = await (parcelRequire("184vh"));
    return puzzleGeometry.getPuzzleGeometryByDesc(desc, {
        allMoves: true,
        orientCenters: true,
        addRotations: true
    });
}

async function $fd7da6d471b713e3$var$asyncGetKPuzzle(desc) {
    const pg = await $fd7da6d471b713e3$var$descAsyncGetPuzzleGeometry(desc);
    const kpuzzleDefinition = pg.getKPuzzleDefinition(true);
    kpuzzleDefinition.name = `description: ${desc}`;
    const puzzleGeometry = await (parcelRequire("184vh"));
    const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
    return new (0, $knLo6.KPuzzle)(kpuzzleDefinition, {
        experimentalPGNotation: pgNotation
    });
}
var $fd7da6d471b713e3$var$nextCustomID = 1;
function $fd7da6d471b713e3$export$edc4dd73f2bc7c3f(desc, info) {
    const customID = $fd7da6d471b713e3$var$nextCustomID++;
    let cachedKPuzzle = null;
    const puzzleLoader = {
        id: `custom-${customID}`,
        fullName: info?.fullName ?? `Custom Puzzle (instance #${customID})`,
        kpuzzle: async ()=>{
            return cachedKPuzzle ?? (cachedKPuzzle = $fd7da6d471b713e3$var$asyncGetKPuzzle(desc));
        },
        svg: async ()=>{
            const pg = await $fd7da6d471b713e3$var$descAsyncGetPuzzleGeometry(desc);
            return pg.generatesvg();
        },
        pg: async ()=>{
            return $fd7da6d471b713e3$var$descAsyncGetPuzzleGeometry(desc);
        }
    };
    if (info?.inventedBy) puzzleLoader.inventedBy = info.inventedBy;
    if (info?.inventionYear) puzzleLoader.inventionYear = info.inventionYear;
    return puzzleLoader;
}
// src/cubing/puzzles/events.ts
var $fd7da6d471b713e3$var$wcaEvents = {
    "333": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Cube"
    },
    "222": {
        puzzleID: "2x2x2",
        eventName: "2x2x2 Cube"
    },
    "444": {
        puzzleID: "4x4x4",
        eventName: "4x4x4 Cube"
    },
    "555": {
        puzzleID: "5x5x5",
        eventName: "5x5x5 Cube"
    },
    "666": {
        puzzleID: "6x6x6",
        eventName: "6x6x6 Cube"
    },
    "777": {
        puzzleID: "7x7x7",
        eventName: "7x7x7 Cube"
    },
    "333bf": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Blindfolded"
    },
    "333fm": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Fewest Moves"
    },
    "333oh": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 One-Handed"
    },
    "clock": {
        puzzleID: "clock",
        eventName: "Clock"
    },
    "minx": {
        puzzleID: "megaminx",
        eventName: "Megaminx"
    },
    "pyram": {
        puzzleID: "pyraminx",
        eventName: "Pyraminx"
    },
    "skewb": {
        puzzleID: "skewb",
        eventName: "Skewb"
    },
    "sq1": {
        puzzleID: "square1",
        eventName: "Square-1"
    },
    "444bf": {
        puzzleID: "4x4x4",
        eventName: "4x4x4 Blindfolded"
    },
    "555bf": {
        puzzleID: "5x5x5",
        eventName: "5x5x5 Blindfolded"
    },
    "333mb": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Multi-Blind"
    }
};
function $fd7da6d471b713e3$export$aa3f099a5aed3862(event) {
    return $fd7da6d471b713e3$var$wcaEvents[event] ?? null;
}
var $fd7da6d471b713e3$var$events = {
    ...$fd7da6d471b713e3$var$wcaEvents,
    fto: {
        puzzleID: "fto",
        eventName: "Face-Turning Octahedron"
    },
    master_tetraminx: {
        puzzleID: "master_tetraminx",
        eventName: "Master Tetraminx"
    },
    kilominx: {
        puzzleID: "kilominx",
        eventName: "Kilominx"
    },
    redi_cube: {
        puzzleID: "redi_cube",
        eventName: "Redi Cube"
    }
};
function $fd7da6d471b713e3$export$ea86d35eea1f7f37(event) {
    return $fd7da6d471b713e3$var$events[event] ?? null;
}
// src/cubing/puzzles/stickerings/appearance.ts
function $fd7da6d471b713e3$export$a5563e03823fac75(appearance, orbitName, pieceIdx, faceletIdx, hint) {
    const orbitAppearance = appearance.orbits[orbitName];
    const pieceAppearance = orbitAppearance.pieces[pieceIdx];
    if (pieceAppearance === null) return $fd7da6d471b713e3$var$regular;
    const faceletAppearance = pieceAppearance.facelets[faceletIdx];
    if (faceletAppearance === null) return $fd7da6d471b713e3$var$regular;
    if (typeof faceletAppearance === "string") return faceletAppearance;
    if (hint) return faceletAppearance.hintAppearance ?? faceletAppearance.appearance;
    return faceletAppearance.appearance;
}
var $fd7da6d471b713e3$var$PieceStickering = /* @__PURE__ */ ((PieceStickering2)=>{
    PieceStickering2["Regular"] = "Regular";
    PieceStickering2["Dim"] = "Dim";
    PieceStickering2["Ignored"] = "Ignored";
    PieceStickering2["OrientationStickers"] = "OrientationStickers";
    PieceStickering2["Invisible"] = "Invisible";
    PieceStickering2["Ignoriented"] = "Ignoriented";
    PieceStickering2["IgnoreNonPrimary"] = "IgnoreNonPrimary";
    PieceStickering2["PermuteNonPrimary"] = "PermuteNonPrimary";
    PieceStickering2["OrientationWithoutPermutation"] = "OrientationWithoutPermutation";
    return PieceStickering2;
})($fd7da6d471b713e3$var$PieceStickering || {});
var $fd7da6d471b713e3$var$PieceAnnotation = class {
    constructor(kpuzzle, defaultValue){
        this.stickerings = /* @__PURE__ */ new Map();
        for (const [orbitName, orbitDef] of Object.entries(kpuzzle.definition.orbits))this.stickerings.set(orbitName, new Array(orbitDef.numPieces).fill(defaultValue));
    }
};
var $fd7da6d471b713e3$var$regular = "regular";
var $fd7da6d471b713e3$var$ignored = "ignored";
var $fd7da6d471b713e3$var$oriented = "oriented";
var $fd7da6d471b713e3$var$invisible = "invisible";
var $fd7da6d471b713e3$var$dim = "dim";
var $fd7da6d471b713e3$var$r = {
    facelets: [
        $fd7da6d471b713e3$var$regular,
        $fd7da6d471b713e3$var$regular,
        $fd7da6d471b713e3$var$regular,
        $fd7da6d471b713e3$var$regular,
        $fd7da6d471b713e3$var$regular
    ]
};
var $fd7da6d471b713e3$var$i = {
    facelets: [
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored
    ]
};
var $fd7da6d471b713e3$var$o = {
    facelets: [
        $fd7da6d471b713e3$var$oriented,
        $fd7da6d471b713e3$var$oriented,
        $fd7da6d471b713e3$var$oriented,
        $fd7da6d471b713e3$var$oriented,
        $fd7da6d471b713e3$var$oriented
    ]
};
var $fd7da6d471b713e3$var$invisiblePiece = {
    facelets: [
        $fd7da6d471b713e3$var$invisible,
        $fd7da6d471b713e3$var$invisible,
        $fd7da6d471b713e3$var$invisible,
        $fd7da6d471b713e3$var$invisible
    ]
};
var $fd7da6d471b713e3$var$riiii = {
    facelets: [
        $fd7da6d471b713e3$var$regular,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored
    ]
};
var $fd7da6d471b713e3$var$drrrr = {
    facelets: [
        $fd7da6d471b713e3$var$dim,
        $fd7da6d471b713e3$var$regular,
        $fd7da6d471b713e3$var$regular,
        $fd7da6d471b713e3$var$regular,
        $fd7da6d471b713e3$var$regular
    ]
};
var $fd7da6d471b713e3$var$d = {
    facelets: [
        $fd7da6d471b713e3$var$dim,
        $fd7da6d471b713e3$var$dim,
        $fd7da6d471b713e3$var$dim,
        $fd7da6d471b713e3$var$dim,
        $fd7da6d471b713e3$var$dim
    ]
};
var $fd7da6d471b713e3$var$diiii = {
    facelets: [
        $fd7da6d471b713e3$var$dim,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored
    ]
};
var $fd7da6d471b713e3$var$oiiii = {
    facelets: [
        $fd7da6d471b713e3$var$oriented,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored,
        $fd7da6d471b713e3$var$ignored
    ]
};
function $fd7da6d471b713e3$var$getPieceAppearance(pieceStickering) {
    switch(pieceStickering){
        case "Regular" /* Regular */ :
            return $fd7da6d471b713e3$var$r;
        case "Dim" /* Dim */ :
            return $fd7da6d471b713e3$var$d;
        case "Ignored" /* Ignored */ :
            return $fd7da6d471b713e3$var$i;
        case "OrientationStickers" /* OrientationStickers */ :
            return $fd7da6d471b713e3$var$o;
        case "Invisible" /* Invisible */ :
            return $fd7da6d471b713e3$var$invisiblePiece;
        case "IgnoreNonPrimary" /* IgnoreNonPrimary */ :
            return $fd7da6d471b713e3$var$riiii;
        case "PermuteNonPrimary" /* PermuteNonPrimary */ :
            return $fd7da6d471b713e3$var$drrrr;
        case "Ignoriented" /* Ignoriented */ :
            return $fd7da6d471b713e3$var$diiii;
        case "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ :
            return $fd7da6d471b713e3$var$oiiii;
    }
}
var $fd7da6d471b713e3$var$PuzzleStickering = class extends $fd7da6d471b713e3$var$PieceAnnotation {
    constructor(kpuzzle){
        super(kpuzzle, "Regular" /* Regular */ );
    }
    set(pieceSet, pieceStickering) {
        for (const [orbitName, pieces] of this.stickerings.entries()){
            for(let i2 = 0; i2 < pieces.length; i2++)if (pieceSet.stickerings.get(orbitName)[i2]) pieces[i2] = pieceStickering;
        }
        return this;
    }
    toAppearance() {
        const appearance = {
            orbits: {}
        };
        for (const [orbitName, pieceStickerings] of this.stickerings.entries()){
            const pieces = [];
            const orbitAppearance = {
                pieces: pieces
            };
            appearance.orbits[orbitName] = orbitAppearance;
            for (const pieceStickering of pieceStickerings)pieces.push($fd7da6d471b713e3$var$getPieceAppearance(pieceStickering));
        }
        return appearance;
    }
};
var $fd7da6d471b713e3$var$StickeringManager = class {
    constructor(kpuzzle){
        this.kpuzzle = kpuzzle;
    }
    and(pieceSets) {
        const newPieceSet = new $fd7da6d471b713e3$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))pieceLoop: for(let i2 = 0; i2 < orbitDef.numPieces; i2++){
            newPieceSet.stickerings.get(orbitName)[i2] = true;
            for (const pieceSet of pieceSets)if (!pieceSet.stickerings.get(orbitName)[i2]) {
                newPieceSet.stickerings.get(orbitName)[i2] = false;
                continue pieceLoop;
            }
        }
        return newPieceSet;
    }
    or(pieceSets) {
        const newPieceSet = new $fd7da6d471b713e3$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))pieceLoop: for(let i2 = 0; i2 < orbitDef.numPieces; i2++){
            newPieceSet.stickerings.get(orbitName)[i2] = false;
            for (const pieceSet of pieceSets)if (pieceSet.stickerings.get(orbitName)[i2]) {
                newPieceSet.stickerings.get(orbitName)[i2] = true;
                continue pieceLoop;
            }
        }
        return newPieceSet;
    }
    not(pieceSet) {
        const newPieceSet = new $fd7da6d471b713e3$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))for(let i2 = 0; i2 < orbitDef.numPieces; i2++)newPieceSet.stickerings.get(orbitName)[i2] = !pieceSet.stickerings.get(orbitName)[i2];
        return newPieceSet;
    }
    all() {
        return this.and(this.moves([]));
    }
    move(moveSource) {
        const transformation = this.kpuzzle.moveToTransformation(moveSource);
        const newPieceSet = new $fd7da6d471b713e3$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits)){
            for(let i2 = 0; i2 < orbitDef.numPieces; i2++)if (transformation.transformationData[orbitName].permutation[i2] !== i2 || transformation.transformationData[orbitName].orientation[i2] !== 0) newPieceSet.stickerings.get(orbitName)[i2] = true;
        }
        return newPieceSet;
    }
    moves(moveSources) {
        return moveSources.map((moveSource)=>this.move(moveSource));
    }
};
// src/cubing/puzzles/stickerings/global-custom-stickering-hack.ts
var $fd7da6d471b713e3$var$globalCustomStickerer = ()=>{};
function $fd7da6d471b713e3$var$setGlobalCustomStickerer(stickerer) {
    (async ()=>{
        $fd7da6d471b713e3$var$globalCustomStickerer = stickerer;
        const players = Array.from(document.body.querySelectorAll("twisty-player"));
        console.log(`Setting the custom stickering for ${players.length} players!`);
        const successPromises = [];
        for (const player of players)successPromises.push((async ()=>{
            const stickering = await player.experimentalModel.twistySceneModel.stickering.get();
            player.experimentalStickering = stickering === "experimental-global-custom-1" ? "experimental-global-custom-2" : "experimental-global-custom-1";
        })());
        await Promise.all(successPromises);
        console.log("Success!");
    })();
}
function $fd7da6d471b713e3$var$useGlobalCustomStickerer(puzzleStickering, m) {
    $fd7da6d471b713e3$var$globalCustomStickerer(puzzleStickering, m);
}
if (globalThis.location && new URL(location.href).searchParams.get("global-custom-stickerer") === "true") {
    window.setGlobalCustomStickerer = $fd7da6d471b713e3$var$setGlobalCustomStickerer;
    window.PieceStickering = $fd7da6d471b713e3$var$PieceStickering;
    console.log("Global custom stickerer enabled! (using: global-custom-stickerer=true)");
    console.log("Look here for inspiration:", "https://github.com/cubing/cubing.js/blob/81b5cab3e27d8defb39dd1e0a10bc9e8ba894d26/src/cubing/puzzles/stickerings/cube-stickerings.ts#L67");
}
// src/cubing/puzzles/stickerings/cube-stickerings.ts
async function $fd7da6d471b713e3$export$35b727ea49e69201(puzzleLoader, stickering) {
    const kpuzzle = await puzzleLoader.kpuzzle();
    const puzzleStickering = new $fd7da6d471b713e3$var$PuzzleStickering(kpuzzle);
    const m = new $fd7da6d471b713e3$var$StickeringManager(kpuzzle);
    const LL = ()=>m.move("U");
    const orUD = ()=>m.or(m.moves([
            "U",
            "D"
        ]));
    const E = ()=>m.not(orUD());
    const orLR = ()=>m.or(m.moves([
            "L",
            "R"
        ]));
    const M = ()=>m.not(orLR());
    const orFB = ()=>m.or(m.moves([
            "F",
            "B"
        ]));
    const S = ()=>m.not(orFB());
    const F2L = ()=>m.not(LL());
    const centerU = ()=>m.and([
            LL(),
            M(),
            S()
        ]);
    const edgeFR = ()=>m.and([
            m.and(m.moves([
                "F",
                "R"
            ])),
            m.not(orUD())
        ]);
    const cornerDFR = ()=>m.and(m.moves([
            "D",
            "R",
            "F"
        ]));
    const slotFR = ()=>m.or([
            cornerDFR(),
            edgeFR()
        ]);
    const CENTERS = ()=>m.or([
            m.and([
                M(),
                E()
            ]),
            m.and([
                M(),
                S()
            ]),
            m.and([
                E(),
                S()
            ])
        ]);
    const EDGES = ()=>m.or([
            m.and([
                M(),
                orUD(),
                orFB()
            ]),
            m.and([
                E(),
                orLR(),
                orFB()
            ]),
            m.and([
                S(),
                orUD(),
                orLR()
            ])
        ]);
    const CORNERS = ()=>m.not(m.or([
            CENTERS(),
            EDGES()
        ]));
    const L6E = ()=>m.or([
            M(),
            m.and([
                LL(),
                EDGES()
            ])
        ]);
    function dimF2L() {
        puzzleStickering.set(F2L(), "Dim" /* Dim */ );
    }
    function setPLL() {
        puzzleStickering.set(LL(), "PermuteNonPrimary" /* PermuteNonPrimary */ );
        puzzleStickering.set(centerU(), "Dim" /* Dim */ );
    }
    function setOLL() {
        puzzleStickering.set(LL(), "IgnoreNonPrimary" /* IgnoreNonPrimary */ );
        puzzleStickering.set(centerU(), "Regular" /* Regular */ );
    }
    function dimOLL() {
        puzzleStickering.set(LL(), "Ignoriented" /* Ignoriented */ );
        puzzleStickering.set(centerU(), "Dim" /* Dim */ );
    }
    switch(stickering){
        case "full":
            break;
        case "PLL":
            dimF2L();
            setPLL();
            break;
        case "CLS":
            dimF2L();
            puzzleStickering.set(m.and(m.moves([
                "D",
                "R",
                "F"
            ])), "Regular" /* Regular */ );
            puzzleStickering.set(LL(), "Ignoriented" /* Ignoriented */ );
            puzzleStickering.set(m.and([
                LL(),
                M(),
                S()
            ]), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "IgnoreNonPrimary" /* IgnoreNonPrimary */ );
            break;
        case "OLL":
            dimF2L();
            setOLL();
            break;
        case "COLL":
            dimF2L();
            setPLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Regular" /* Regular */ );
            break;
        case "OCLL":
            dimF2L();
            dimOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "IgnoreNonPrimary" /* IgnoreNonPrimary */ );
            break;
        case "CLL":
            dimF2L();
            puzzleStickering.set(m.not(m.and([
                CORNERS(),
                LL()
            ])), "Dim" /* Dim */ );
            break;
        case "ELL":
            dimF2L();
            puzzleStickering.set(LL(), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                LL(),
                EDGES()
            ]), "Regular" /* Regular */ );
            break;
        case "ELS":
            dimF2L();
            setOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Ignored" /* Ignored */ );
            puzzleStickering.set(edgeFR(), "Regular" /* Regular */ );
            puzzleStickering.set(cornerDFR(), "Ignored" /* Ignored */ );
            break;
        case "LL":
            dimF2L();
            break;
        case "F2L":
            puzzleStickering.set(LL(), "Ignored" /* Ignored */ );
            break;
        case "ZBLL":
            dimF2L();
            puzzleStickering.set(LL(), "PermuteNonPrimary" /* PermuteNonPrimary */ );
            puzzleStickering.set(centerU(), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Regular" /* Regular */ );
            break;
        case "ZBLS":
            dimF2L();
            puzzleStickering.set(slotFR(), "Regular" /* Regular */ );
            setOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Ignored" /* Ignored */ );
            break;
        case "WVLS":
        case "VLS":
            dimF2L();
            puzzleStickering.set(slotFR(), "Regular" /* Regular */ );
            setOLL();
            break;
        case "LS":
            dimF2L();
            puzzleStickering.set(slotFR(), "Regular" /* Regular */ );
            puzzleStickering.set(LL(), "Ignored" /* Ignored */ );
            puzzleStickering.set(centerU(), "Dim" /* Dim */ );
            break;
        case "EO":
            puzzleStickering.set(CORNERS(), "Ignored" /* Ignored */ );
            puzzleStickering.set(EDGES(), "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ );
            break;
        case "EOline":
            puzzleStickering.set(CORNERS(), "Ignored" /* Ignored */ );
            puzzleStickering.set(EDGES(), "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ );
            puzzleStickering.set(m.and(m.moves([
                "D",
                "M"
            ])), "Regular" /* Regular */ );
            break;
        case "EOcross":
            puzzleStickering.set(EDGES(), "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ );
            puzzleStickering.set(m.move("D"), "Regular" /* Regular */ );
            puzzleStickering.set(CORNERS(), "Ignored" /* Ignored */ );
            break;
        case "CMLL":
            puzzleStickering.set(F2L(), "Dim" /* Dim */ );
            puzzleStickering.set(L6E(), "Ignored" /* Ignored */ );
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Regular" /* Regular */ );
            break;
        case "L6E":
            puzzleStickering.set(m.not(L6E()), "Dim" /* Dim */ );
            break;
        case "L6EO":
            puzzleStickering.set(m.not(L6E()), "Dim" /* Dim */ );
            puzzleStickering.set(L6E(), "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ );
            puzzleStickering.set(m.and([
                CENTERS(),
                orUD()
            ]), "OrientationStickers" /* OrientationStickers */ );
            break;
        case "Daisy":
            puzzleStickering.set(m.all(), "Ignored" /* Ignored */ );
            puzzleStickering.set(CENTERS(), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                m.move("D"),
                CENTERS()
            ]), "Regular" /* Regular */ );
            puzzleStickering.set(m.and([
                m.move("U"),
                EDGES()
            ]), "IgnoreNonPrimary" /* IgnoreNonPrimary */ );
            break;
        case "Cross":
            puzzleStickering.set(m.all(), "Ignored" /* Ignored */ );
            puzzleStickering.set(CENTERS(), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                m.move("D"),
                CENTERS()
            ]), "Regular" /* Regular */ );
            puzzleStickering.set(m.and([
                m.move("D"),
                EDGES()
            ]), "Regular" /* Regular */ );
            break;
        case "2x2x2":
            puzzleStickering.set(m.or(m.moves([
                "U",
                "F",
                "R"
            ])), "Ignored" /* Ignored */ );
            puzzleStickering.set(m.and([
                m.or(m.moves([
                    "U",
                    "F",
                    "R"
                ])),
                CENTERS()
            ]), "Dim" /* Dim */ );
            break;
        case "2x2x3":
            puzzleStickering.set(m.all(), "Dim" /* Dim */ );
            puzzleStickering.set(m.or(m.moves([
                "U",
                "F",
                "R"
            ])), "Ignored" /* Ignored */ );
            puzzleStickering.set(m.and([
                m.or(m.moves([
                    "U",
                    "F",
                    "R"
                ])),
                CENTERS()
            ]), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                m.move("F"),
                m.not(m.or(m.moves([
                    "U",
                    "R"
                ])))
            ]), "Regular" /* Regular */ );
            break;
        case "Void Cube":
            puzzleStickering.set(CENTERS(), "Invisible" /* Invisible */ );
            break;
        case "picture":
        case "invisible":
            puzzleStickering.set(m.all(), "Invisible" /* Invisible */ );
            break;
        case "centers-only":
            puzzleStickering.set(m.not(CENTERS()), "Ignored" /* Ignored */ );
            break;
        case "experimental-global-custom-1":
        case "experimental-global-custom-2":
            $fd7da6d471b713e3$var$useGlobalCustomStickerer(puzzleStickering, m);
            break;
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
            puzzleStickering.set(m.and(m.moves([])), "Dim" /* Dim */ );
    }
    return puzzleStickering.toAppearance();
}
async function $fd7da6d471b713e3$var$cubeStickerings() {
    return [
        "full",
        "PLL",
        "CLS",
        "OLL",
        "COLL",
        "OCLL",
        "ELL",
        "ELS",
        "LL",
        "F2L",
        "ZBLL",
        "ZBLS",
        "WVLS",
        "VLS",
        "LS",
        "EO",
        "EOline",
        "EOcross",
        "CMLL",
        "L6E",
        "L6EO",
        "Daisy",
        "Cross",
        "2x2x2",
        "2x2x3",
        "Void Cube",
        "picture",
        "invisible",
        "centers-only"
    ];
}
// src/cubing/puzzles/async/lazy-cached.ts
function $fd7da6d471b713e3$var$getCached(getValue) {
    let cachedPromise = null;
    return ()=>{
        return cachedPromise ?? (cachedPromise = getValue());
    };
}

// src/cubing/puzzles/async/async-pg3d.ts
async function $fd7da6d471b713e3$var$asyncGetPuzzleGeometry(puzzleName) {
    const puzzleGeometry = await (parcelRequire("184vh"));
    return puzzleGeometry.getPuzzleGeometryByName(puzzleName, {
        allMoves: true,
        orientCenters: true,
        addRotations: true
    });
}

async function $fd7da6d471b713e3$var$asyncGetKPuzzle2(pgPromise, puzzleName) {
    const pg = await pgPromise;
    const kpuzzleDefinition = pg.getKPuzzleDefinition(true);
    kpuzzleDefinition.name = puzzleName;
    const puzzleGeometry = await (parcelRequire("184vh"));
    const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
    return new (0, $knLo6.KPuzzle)(kpuzzleDefinition, {
        experimentalPGNotation: pgNotation
    });
}
var $fd7da6d471b713e3$var$_cachedPG, $fd7da6d471b713e3$var$_cachedKPuzzle, $fd7da6d471b713e3$var$_cachedSVG;
var $fd7da6d471b713e3$var$PGPuzzleLoader = class {
    constructor(info){
        (0, $hJBlP.__privateAdd)(this, $fd7da6d471b713e3$var$_cachedPG, void 0);
        (0, $hJBlP.__privateAdd)(this, $fd7da6d471b713e3$var$_cachedKPuzzle, void 0);
        (0, $hJBlP.__privateAdd)(this, $fd7da6d471b713e3$var$_cachedSVG, void 0);
        this.pgId = info.pgID;
        this.id = info.id;
        this.fullName = info.fullName;
        this.inventedBy = info.inventedBy;
        this.inventionYear = info.inventionYear;
    }
    pg() {
        return (0, $hJBlP.__privateGet)(this, $fd7da6d471b713e3$var$_cachedPG) ?? (0, $hJBlP.__privateSet)(this, $fd7da6d471b713e3$var$_cachedPG, $fd7da6d471b713e3$var$asyncGetPuzzleGeometry(this.pgId ?? this.id));
    }
    kpuzzle() {
        return (0, $hJBlP.__privateGet)(this, $fd7da6d471b713e3$var$_cachedKPuzzle) ?? (0, $hJBlP.__privateSet)(this, $fd7da6d471b713e3$var$_cachedKPuzzle, $fd7da6d471b713e3$var$asyncGetKPuzzle2(this.pg(), this.id));
    }
    svg() {
        return (0, $hJBlP.__privateGet)(this, $fd7da6d471b713e3$var$_cachedSVG) ?? (0, $hJBlP.__privateSet)(this, $fd7da6d471b713e3$var$_cachedSVG, (async ()=>(await this.pg()).generatesvg())());
    }
};
$fd7da6d471b713e3$var$_cachedPG = new WeakMap();
$fd7da6d471b713e3$var$_cachedKPuzzle = new WeakMap();
$fd7da6d471b713e3$var$_cachedSVG = new WeakMap();
var $fd7da6d471b713e3$var$CubePGPuzzleLoader = class extends $fd7da6d471b713e3$var$PGPuzzleLoader {
    constructor(){
        super(...arguments);
        this.stickerings = $fd7da6d471b713e3$var$cubeStickerings;
    }
    appearance(stickering) {
        return $fd7da6d471b713e3$export$35b727ea49e69201(this, stickering);
    }
};


// src/cubing/puzzles/implementations/2x2x2/index.ts
var $fd7da6d471b713e3$export$75b089e783ade19b = {
    id: "2x2x2",
    fullName: "2\xd72\xd72 Cube",
    kpuzzle: $fd7da6d471b713e3$var$getCached(async ()=>new (0, $knLo6.KPuzzle)((await (parcelRequire("lisRa"))).cube2x2x2KPuzzleDefinition)),
    svg: async ()=>{
        return (await (parcelRequire("jFgoF"))).default;
    },
    pg: $fd7da6d471b713e3$var$getCached(async ()=>{
        return $fd7da6d471b713e3$var$asyncGetPuzzleGeometry("2x2x2");
    }),
    appearance: (stickering)=>$fd7da6d471b713e3$export$35b727ea49e69201($fd7da6d471b713e3$export$75b089e783ade19b, stickering),
    stickerings: $fd7da6d471b713e3$var$cubeStickerings
};


// src/cubing/puzzles/implementations/3x3x3/index.ts
var $fd7da6d471b713e3$export$c52e9d2f3741ae58 = {
    id: "3x3x3",
    fullName: "3\xd73\xd73 Cube",
    inventedBy: [
        "Ern\u0151 Rubik"
    ],
    inventionYear: 1974,
    kpuzzle: $fd7da6d471b713e3$var$getCached(async ()=>{
        return 0, $knLo6.experimental3x3x3KPuzzle;
    }),
    svg: $fd7da6d471b713e3$var$getCached(async ()=>{
        return (await (parcelRequire("juATb"))).default;
    }),
    llSVG: $fd7da6d471b713e3$var$getCached(async ()=>{
        return (await (parcelRequire("iw2w8"))).default;
    }),
    pg: $fd7da6d471b713e3$var$getCached(async ()=>{
        return $fd7da6d471b713e3$var$asyncGetPuzzleGeometry("3x3x3");
    }),
    appearance: (stickering)=>$fd7da6d471b713e3$export$35b727ea49e69201($fd7da6d471b713e3$export$c52e9d2f3741ae58, stickering),
    stickerings: $fd7da6d471b713e3$var$cubeStickerings
};


// src/cubing/puzzles/implementations/clock/index.ts
var $fd7da6d471b713e3$var$clock = {
    id: "clock",
    fullName: "Clock",
    inventedBy: [
        "Christopher C. Wiggs",
        "Christopher J. Taylor"
    ],
    inventionYear: 1988,
    kpuzzle: $fd7da6d471b713e3$var$getCached(async ()=>new (0, $knLo6.KPuzzle)((await (parcelRequire("jk1H3"))).clockKPuzzleDefinition)),
    svg: $fd7da6d471b713e3$var$getCached(async ()=>{
        return (await (parcelRequire("74hzq"))).default;
    })
};
// src/cubing/puzzles/stickerings/fto-stickerings.ts
async function $fd7da6d471b713e3$var$ftoStickering(puzzleLoader, stickering) {
    const kpuzzle = await puzzleLoader.kpuzzle();
    const puzzleStickering = new $fd7da6d471b713e3$var$PuzzleStickering(kpuzzle);
    const m = new $fd7da6d471b713e3$var$StickeringManager(kpuzzle);
    const experimentalFTO_FC = ()=>m.and([
            m.move("U"),
            m.not(m.or(m.moves([
                "F",
                "BL",
                "BR"
            ])))
        ]);
    const experimentalFTO_F2T = ()=>m.and([
            m.move("U"),
            m.not(m.move("F"))
        ]);
    const experimentalFTO_SC = ()=>m.or([
            experimentalFTO_F2T(),
            m.and([
                m.move("F"),
                m.not(m.or(m.moves([
                    "U",
                    "BL",
                    "BR"
                ])))
            ])
        ]);
    const experimentalFTO_L2C = ()=>m.not(m.or([
            m.and([
                m.move("U"),
                m.move("F")
            ]),
            m.and([
                m.move("F"),
                m.move("BL")
            ]),
            m.and([
                m.move("F"),
                m.move("BR")
            ]),
            m.and([
                m.move("BL"),
                m.move("BR")
            ])
        ]));
    const experimentalFTO_LBT = ()=>m.not(m.or([
            m.and([
                m.move("F"),
                m.move("BL")
            ]),
            m.and([
                m.move("F"),
                m.move("BR")
            ]),
            m.and([
                m.move("BL"),
                m.move("BR")
            ])
        ]));
    switch(stickering){
        case "full":
            break;
        case "experimental-fto-fc":
            puzzleStickering.set(m.not(experimentalFTO_FC()), "Ignored" /* Ignored */ );
            break;
        case "experimental-fto-f2t":
            puzzleStickering.set(m.not(experimentalFTO_F2T()), "Ignored" /* Ignored */ );
            puzzleStickering.set(experimentalFTO_FC(), "Dim" /* Dim */ );
            break;
        case "experimental-fto-sc":
            puzzleStickering.set(m.not(experimentalFTO_SC()), "Ignored" /* Ignored */ );
            puzzleStickering.set(experimentalFTO_F2T(), "Dim" /* Dim */ );
            break;
        case "experimental-fto-l2c":
            puzzleStickering.set(m.not(experimentalFTO_L2C()), "Ignored" /* Ignored */ );
            puzzleStickering.set(experimentalFTO_SC(), "Dim" /* Dim */ );
            break;
        case "experimental-fto-lbt":
            puzzleStickering.set(m.not(experimentalFTO_LBT()), "Ignored" /* Ignored */ );
            puzzleStickering.set(experimentalFTO_L2C(), "Dim" /* Dim */ );
            break;
        case "experimental-fto-l3t":
            puzzleStickering.set(experimentalFTO_LBT(), "Dim" /* Dim */ );
            break;
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
            puzzleStickering.set(m.and(m.moves([])), "Dim" /* Dim */ );
    }
    return puzzleStickering.toAppearance();
}
async function $fd7da6d471b713e3$var$ftoStickerings() {
    return [
        "full",
        "experimental-fto-fc",
        "experimental-fto-f2t",
        "experimental-fto-sc",
        "experimental-fto-l2c",
        "experimental-fto-lbt",
        "experimental-fto-l3t"
    ];
}

// src/cubing/puzzles/implementations/fto/index.ts
var $fd7da6d471b713e3$var$FTOPuzzleLoader = class extends $fd7da6d471b713e3$var$PGPuzzleLoader {
    constructor(){
        super({
            pgID: "FTO",
            id: "fto",
            fullName: "Face-Turning Octahedron",
            inventedBy: [
                "Karl Rohrbach",
                "David Pitcher"
            ],
            inventionYear: 1983
        });
        this.stickerings = $fd7da6d471b713e3$var$ftoStickerings;
        this.svg = $fd7da6d471b713e3$var$getCached(async ()=>{
            return (await (parcelRequire("3vajR"))).ftoSVG;
        });
    }
    appearance(stickering) {
        return $fd7da6d471b713e3$var$ftoStickering(this, stickering);
    }
};
var $fd7da6d471b713e3$var$fto = new $fd7da6d471b713e3$var$FTOPuzzleLoader();
// src/cubing/puzzles/stickerings/megaminx-stickerings.ts
async function $fd7da6d471b713e3$var$megaminxAppearance(puzzleLoader, stickering) {
    switch(stickering){
        case "full":
        case "F2L":
        case "LL":
            return $fd7da6d471b713e3$export$35b727ea49e69201(puzzleLoader, stickering);
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
    }
    return $fd7da6d471b713e3$export$35b727ea49e69201(puzzleLoader, "full");
}
async function $fd7da6d471b713e3$var$megaminxStickerings() {
    return [
        "full",
        "F2L",
        "LL"
    ];
}
// src/cubing/puzzles/implementations/megaminx/index.ts
var $fd7da6d471b713e3$var$MegaminxPuzzleLoader = class extends $fd7da6d471b713e3$var$PGPuzzleLoader {
    constructor(){
        super({
            id: "megaminx",
            fullName: "Megaminx",
            inventionYear: 1981
        });
        this.stickerings = $fd7da6d471b713e3$var$megaminxStickerings;
    }
    appearance(stickering) {
        return $fd7da6d471b713e3$var$megaminxAppearance(this, stickering);
    }
};
var $fd7da6d471b713e3$var$megaminx = new $fd7da6d471b713e3$var$MegaminxPuzzleLoader();

// src/cubing/puzzles/implementations/pyraminx/index.ts
var $fd7da6d471b713e3$var$PyraminxPuzzleLoader = class extends $fd7da6d471b713e3$var$PGPuzzleLoader {
    constructor(){
        super({
            id: "pyraminx",
            fullName: "Pyraminx",
            inventedBy: [
                "Uwe Meffert"
            ]
        });
        this.svg = $fd7da6d471b713e3$var$getCached(async ()=>{
            return (await (parcelRequire("cjjLm"))).default;
        });
    }
};
var $fd7da6d471b713e3$var$pyraminx = new $fd7da6d471b713e3$var$PyraminxPuzzleLoader();


// src/cubing/puzzles/implementations/square1/index.ts
var $fd7da6d471b713e3$var$square1 = {
    id: "square1",
    fullName: "Square-1",
    inventedBy: [
        "Karel Hr\u0161el",
        "Vojtech Kopsk\xfd"
    ],
    inventionYear: 1990,
    kpuzzle: $fd7da6d471b713e3$var$getCached(async ()=>new (0, $knLo6.KPuzzle)((await (parcelRequire("ajp1x"))).sq1HyperOrbitKPuzzleDefinition)),
    svg: $fd7da6d471b713e3$var$getCached(async ()=>{
        return (await (parcelRequire("9PPDk"))).default;
    })
};


// src/cubing/puzzles/implementations/kilominx/index.ts
var $fd7da6d471b713e3$var$kilominx = {
    id: "kilominx",
    fullName: "Kilominx",
    kpuzzle: $fd7da6d471b713e3$var$getCached(async ()=>{
        const pg = await $fd7da6d471b713e3$var$asyncGetPuzzleGeometry("megaminx + chopasaurus");
        const kpuzzleDefinition = JSON.parse(JSON.stringify(pg.getKPuzzleDefinition(true)));
        delete kpuzzleDefinition.orbits.CENTERS;
        delete kpuzzleDefinition.orbits.CENTERS2;
        delete kpuzzleDefinition.startStateData.CENTERS;
        delete kpuzzleDefinition.startStateData.CENTERS2;
        for (const moveDefinition of Object.values(kpuzzleDefinition.moves)){
            delete moveDefinition.CENTERS;
            delete moveDefinition.CENTERS2;
        }
        kpuzzleDefinition.name = "kilominx";
        delete kpuzzleDefinition.experimentalPuzzleDescription;
        const puzzleGeometry = await (parcelRequire("184vh"));
        const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
        const kpuzzle = new (0, $knLo6.KPuzzle)(kpuzzleDefinition, {
            experimentalPGNotation: {
                lookupMove: (move)=>{
                    if (move.toString() === "x2" || move.toString() === "x2'") return x2Transformation.transformationData;
                    return pgNotation.lookupMove(move);
                }
            }
        });
        const x2Transformation = kpuzzle.algToTransformation("Rv2 Fv Uv'");
        kpuzzleDefinition.moves["x2"] = x2Transformation;
        return kpuzzle;
    }),
    svg: $fd7da6d471b713e3$var$getCached(async ()=>{
        return (await (parcelRequire("aURWo"))).kilominxSVG;
    })
};


// src/cubing/puzzles/implementations/redi-cube/index.ts
var $fd7da6d471b713e3$var$rediCube = {
    id: "redi_cube",
    fullName: "Redi Cube",
    inventedBy: [
        "Oskar van Deventer"
    ],
    inventionYear: 2009,
    kpuzzle: $fd7da6d471b713e3$var$getCached(async ()=>new (0, $knLo6.KPuzzle)((await (parcelRequire("i7hfD"))).rediCubeKPuzzleDefinition)),
    svg: async ()=>{
        return (await (parcelRequire("d1feY"))).rediCubeSVG;
    }
};
// src/cubing/puzzles/index.ts
var $fd7da6d471b713e3$export$d0e8cc4bac949be1 = {
    "3x3x3": $fd7da6d471b713e3$export$c52e9d2f3741ae58,
    "2x2x2": $fd7da6d471b713e3$export$75b089e783ade19b,
    "4x4x4": new $fd7da6d471b713e3$var$CubePGPuzzleLoader({
        id: "4x4x4",
        fullName: "4\xd74\xd74 Cube"
    }),
    "5x5x5": new $fd7da6d471b713e3$var$CubePGPuzzleLoader({
        id: "5x5x5",
        fullName: "5\xd75\xd75 Cube"
    }),
    "6x6x6": new $fd7da6d471b713e3$var$CubePGPuzzleLoader({
        id: "6x6x6",
        fullName: "6\xd76\xd76 Cube"
    }),
    "7x7x7": new $fd7da6d471b713e3$var$CubePGPuzzleLoader({
        id: "7x7x7",
        fullName: "7\xd77\xd77 Cube"
    }),
    "40x40x40": new $fd7da6d471b713e3$var$CubePGPuzzleLoader({
        id: "40x40x40",
        fullName: "40\xd740\xd740 Cube"
    }),
    clock: $fd7da6d471b713e3$var$clock,
    "megaminx": $fd7da6d471b713e3$var$megaminx,
    pyraminx: $fd7da6d471b713e3$var$pyraminx,
    "skewb": new $fd7da6d471b713e3$var$PGPuzzleLoader({
        id: "skewb",
        fullName: "Skewb",
        inventedBy: [
            "Tony Durham"
        ]
    }),
    square1: $fd7da6d471b713e3$var$square1,
    "fto": $fd7da6d471b713e3$var$fto,
    "gigaminx": new $fd7da6d471b713e3$var$PGPuzzleLoader({
        id: "gigaminx",
        fullName: "Gigaminx",
        inventedBy: [
            "Tyler Fox"
        ],
        inventionYear: 2006
    }),
    "master_tetraminx": new $fd7da6d471b713e3$var$PGPuzzleLoader({
        pgID: "master tetraminx",
        id: "master_tetraminx",
        fullName: "Master Tetraminx",
        inventedBy: [
            "Katsuhiko Okamoto"
        ],
        inventionYear: 2002
    }),
    kilominx: $fd7da6d471b713e3$var$kilominx,
    "redi_cube": $fd7da6d471b713e3$var$rediCube
};

});
parcelRequire.register("184vh", function(module, exports) {


module.exports = Promise.all([
    import("./" + (parcelRequire("aKzDW")).resolve("1HNOs")),
    import("./" + (parcelRequire("aKzDW")).resolve("eXwSi"))
]).then(()=>parcelRequire("bYa3M"));

});

parcelRequire.register("lisRa", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("7PBKw")).then(()=>parcelRequire("72UrN"));

});

parcelRequire.register("jFgoF", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("3kG3a")).then(()=>parcelRequire("4m4TF"));

});

parcelRequire.register("juATb", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("iQYCP")).then(()=>parcelRequire("dEIez"));

});

parcelRequire.register("iw2w8", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("ltr7p")).then(()=>parcelRequire("iyAWJ"));

});

parcelRequire.register("jk1H3", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("hiM5S")).then(()=>parcelRequire("9FnxE"));

});

parcelRequire.register("74hzq", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("EpDh5")).then(()=>parcelRequire("dVYUg"));

});

parcelRequire.register("3vajR", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("fFNOr")).then(()=>parcelRequire("4Fowf"));

});

parcelRequire.register("cjjLm", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("hb2KT")).then(()=>parcelRequire("kGUcs"));

});

parcelRequire.register("ajp1x", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("ipDMp")).then(()=>parcelRequire("7sXnf"));

});

parcelRequire.register("9PPDk", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("f62aa")).then(()=>parcelRequire("uEfBY"));

});

parcelRequire.register("aURWo", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("5TFxH")).then(()=>parcelRequire("1xWHu"));

});

parcelRequire.register("i7hfD", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("7HvmJ")).then(()=>parcelRequire("an1Dd"));

});

parcelRequire.register("d1feY", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("e9BqM")).then(()=>parcelRequire("fuWPc"));

});



parcelRequire("jWypA");

//# sourceMappingURL=index.37f1b79c.js.map
