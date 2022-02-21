var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire946f;t.register("kMaxg",(function(n,i){var o,e,a,r;o=n.exports,e="clockKPuzzleDefinition",a=()=>u,Object.defineProperty(o,e,{get:a,set:r,enumerable:!0,configurable:!0}),t("cks0r");var u={name:"Clock",orbits:{DIALS:{numPieces:18,numOrientations:12},FACES:{numPieces:18,numOrientations:1},FRAME:{numPieces:1,numOrientations:2}},startStateData:{DIALS:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{pieces:[0],orientation:[0]}},moves:{UR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,0,0,0,0,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},U_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,0,0,0,-1,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},R_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,1,1,-1,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},D_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},L_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},ALL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,1,1,1,-1,0,-1,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},y2:{DIALS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[1]}},UL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}}}}}));
//# sourceMappingURL=clock.kpuzzle.json-BQKNKV3G.477d48dc.js.map
