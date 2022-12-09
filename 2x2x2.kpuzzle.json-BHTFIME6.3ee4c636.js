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
parcelRequire.register("72UrN", function(module, exports) {

$parcel$export(module.exports, "cube2x2x2KPuzzleDefinition", () => $52148193f8bf6169$export$3924e02308bb2cb6);
parcelRequire("hJBlP");
// src/cubing/puzzles/implementations/2x2x2/2x2x2.kpuzzle.json.ts
var $52148193f8bf6169$export$3924e02308bb2cb6 = {
    name: "2x2x2",
    orbits: {
        CORNERS: {
            numPieces: 8,
            numOrientations: 3
        }
    },
    startStateData: {
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
        }
    },
    moves: {
        U: {
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
            }
        },
        y: {
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
            }
        },
        x: {
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
            }
        },
        L: {
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
            }
        },
        F: {
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
            }
        },
        R: {
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
            }
        },
        B: {
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
            }
        },
        D: {
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
            }
        },
        z: {
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
            }
        }
    }
};
$52148193f8bf6169$export$3924e02308bb2cb6.moves["Rv"] = $52148193f8bf6169$export$3924e02308bb2cb6.moves["x"];
$52148193f8bf6169$export$3924e02308bb2cb6.moves["Uv"] = $52148193f8bf6169$export$3924e02308bb2cb6.moves["y"];
$52148193f8bf6169$export$3924e02308bb2cb6.moves["Fv"] = $52148193f8bf6169$export$3924e02308bb2cb6.moves["z"];
$52148193f8bf6169$export$3924e02308bb2cb6.moves["Lv"] = {
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
    }
};
$52148193f8bf6169$export$3924e02308bb2cb6.moves["Dv"] = {
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
    }
};
$52148193f8bf6169$export$3924e02308bb2cb6.moves["Bv"] = {
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
    }
};

});


//# sourceMappingURL=2x2x2.kpuzzle.json-BHTFIME6.3ee4c636.js.map
