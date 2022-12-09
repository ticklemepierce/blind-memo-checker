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
var parcelRequire = $parcel$global["parcelRequire96b2"];
parcelRequire.register("k8o4B", function(module, exports) {

$parcel$export(module.exports, "getRandomKilominxScramble", () => $ea873a6e54414516$export$e1de67292f5b845a);

var $8mjCn = parcelRequire("8mjCn");

var $7TbMZ = parcelRequire("7TbMZ");
parcelRequire("hJBlP");
"use strict";
"use strict";
// src/cubing/vendor/xyzzy/kilosolver.js
var $ea873a6e54414516$var$PHASE4_THRESHOLD = 7;
function $ea873a6e54414516$var$factorial(n) {
    if (n < 2) return n;
    let f = 1;
    for(let i1 = 2; i1 <= n; i1++)f *= i1;
    return f;
}
function $ea873a6e54414516$var$C(n, k) {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    let c = 1;
    for(let i2 = 0; i2 < k; i2++)c = c * (n - i2) / (i2 + 1) | 0;
    return c;
}
function $ea873a6e54414516$var$permutation_to_index(perm) {
    perm = perm.slice();
    let n = perm.length;
    let f = $ea873a6e54414516$var$factorial(n - 1);
    let ind = 0;
    while(n > 1){
        n--;
        let e = perm[0];
        ind += e * f;
        for(let i3 = 0; i3 < n; i3++){
            let x = perm[i3 + 1];
            perm[i3] = x - (x > e);
        }
        f /= n;
    }
    return ind;
}
function $ea873a6e54414516$var$permutation_parity(A) {
    let n = A.length;
    let parity = 0;
    for(let i4 = 0; i4 < n - 1; i4++){
        for(let j = i4; j < n; j++)if (A[i4] > A[j]) parity ^= 1;
    }
    return parity;
}
function $ea873a6e54414516$var$evenpermutation_to_index(perm) {
    return $ea873a6e54414516$var$permutation_to_index(perm) >> 1;
}
var [$ea873a6e54414516$var$evenpermutation10_to_index, $ea873a6e54414516$var$index_to_evenpermutation10] = (()=>{
    let index_in_set_bits = new Int8Array(10240);
    let look_up_set_bits = new Int8Array(10240);
    for(let i5 = 0; i5 < 1024; i5++)for(let j = 0, counter = 0; j < 10; j++){
        if ((i5 >>> j & 1) === 0) continue;
        index_in_set_bits[j << 10 | i5] = counter;
        look_up_set_bits[counter << 10 | i5] = j;
        counter++;
    }
    function evenpermutation10_to_index2(perm) {
        let unused = 1023;
        let f = 181440;
        let ind = 0;
        for(let i6 = 0; i6 < 8; i6++){
            let v = perm[i6];
            ind += index_in_set_bits[unused | v << 10] * f;
            unused &= ~(1 << v);
            f /= 9 - i6;
        }
        return ind;
    }
    function index_to_evenpermutation102(ind, perm) {
        let unused = 1023;
        let f = 181440;
        let parity = 0;
        for(let i7 = 0; i7 < 8; i7++){
            let a = ind / f | 0;
            ind -= a * f;
            parity ^= a & 1;
            let v = look_up_set_bits[unused | a << 10];
            perm[i7] = v;
            unused &= ~(1 << v);
            f /= 9 - i7;
        }
        perm[8] = look_up_set_bits[unused | parity << 10];
        perm[9] = look_up_set_bits[unused | (parity ^ 1) << 10];
        return perm;
    }
    return [
        evenpermutation10_to_index2,
        index_to_evenpermutation102
    ];
})();
function $ea873a6e54414516$var$comb_to_index(l) {
    let bits = l.length;
    let ones = 0;
    for(let i9 = 0; i9 < bits; i9++)ones += +(l[i9] === 1);
    let zeros = bits - ones;
    if (zeros === 0 || ones === 0 || bits === 1) return 0;
    let b = $ea873a6e54414516$var$C(bits - 1, ones);
    let ind = 0;
    for(let i8 = 0; zeros > 0 && ones > 0 && bits > 1; i8++){
        bits--;
        if (l[i8] === 0) b = b * --zeros / bits;
        else {
            ind += b;
            b = b * ones-- / bits;
        }
    }
    return ind;
}
function $ea873a6e54414516$var$index_to_comb(ind, ones, bits) {
    let zeros = bits - ones;
    let b = $ea873a6e54414516$var$C(bits - 1, ones);
    let l = [];
    let n = bits - 1;
    for(let i10 = 0; i10 < n; i10++){
        bits--;
        if (ind < b) {
            l.push(0);
            b = b * --zeros / bits;
        } else {
            l.push(1);
            ind -= b;
            b = b * ones-- / bits;
        }
    }
    l.push(ones);
    return l;
}
function $ea873a6e54414516$var$compose(A, B) {
    let C2 = [];
    for(let i11 = 0; i11 < B.length; i11++)C2[i11] = A[B[i11]];
    return C2;
}
function $ea873a6e54414516$var$compose_o(A, B) {
    let p = $ea873a6e54414516$var$compose(A[0], B[0]);
    let o = [];
    let n = B[0].length;
    for(let i12 = 0; i12 < n; i12++)o[i12] = (A[1][B[0][i12]] + B[1][i12]) % 3;
    return [
        p,
        o
    ];
}
function $ea873a6e54414516$var$permutation_from_cycle(cycle, n) {
    let perm = [];
    for(let i14 = 0; i14 < n; i14++)perm[i14] = i14;
    for(let i13 = 0; i13 < cycle.length; i13++)perm[cycle[i13]] = cycle[(i13 + 1) % cycle.length];
    return perm;
}
function $ea873a6e54414516$var$unsparsify_list(d, n) {
    let l = Array(n).fill(0);
    for(let k in d)l[k] = d[k];
    return l;
}
var $ea873a6e54414516$var$move_U = [
    $ea873a6e54414516$var$permutation_from_cycle([
        0,
        1,
        2,
        3,
        4
    ], 20),
    $ea873a6e54414516$var$unsparsify_list({}, 20)
];
var $ea873a6e54414516$var$move_R = [
    $ea873a6e54414516$var$permutation_from_cycle([
        4,
        3,
        11,
        12,
        13
    ], 20),
    $ea873a6e54414516$var$unsparsify_list({
        4: 2,
        3: 1,
        11: 1,
        12: 1,
        13: 1
    }, 20)
];
var $ea873a6e54414516$var$move_F = [
    $ea873a6e54414516$var$permutation_from_cycle([
        3,
        2,
        9,
        10,
        11
    ], 20),
    $ea873a6e54414516$var$unsparsify_list({
        3: 2,
        2: 1,
        9: 1,
        10: 1,
        11: 1
    }, 20)
];
var $ea873a6e54414516$var$move_L = [
    $ea873a6e54414516$var$permutation_from_cycle([
        2,
        1,
        7,
        8,
        9
    ], 20),
    $ea873a6e54414516$var$unsparsify_list({
        2: 2,
        1: 1,
        7: 1,
        8: 1,
        9: 1
    }, 20)
];
var $ea873a6e54414516$var$move_BL = [
    $ea873a6e54414516$var$permutation_from_cycle([
        1,
        0,
        5,
        6,
        7
    ], 20),
    $ea873a6e54414516$var$unsparsify_list({
        1: 2,
        0: 1,
        5: 1,
        6: 1,
        7: 1
    }, 20)
];
var $ea873a6e54414516$var$move_BR = [
    $ea873a6e54414516$var$permutation_from_cycle([
        0,
        4,
        13,
        14,
        5
    ], 20),
    $ea873a6e54414516$var$unsparsify_list({
        0: 2,
        4: 1,
        13: 1,
        14: 1,
        5: 1
    }, 20)
];
var $ea873a6e54414516$var$move_x2 = [
    [
        15,
        16,
        17,
        18,
        19,
        10,
        9,
        8,
        7,
        6,
        5,
        14,
        13,
        12,
        11,
        0,
        1,
        2,
        3,
        4
    ],
    $ea873a6e54414516$var$unsparsify_list({}, 20)
];
var $ea873a6e54414516$var$move_y = [
    [
        1,
        2,
        3,
        4,
        0,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        5,
        6,
        19,
        15,
        16,
        17,
        18
    ],
    $ea873a6e54414516$var$unsparsify_list({}, 20)
];
var $ea873a6e54414516$var$moves = [
    $ea873a6e54414516$var$move_U,
    $ea873a6e54414516$var$move_R,
    $ea873a6e54414516$var$move_F,
    $ea873a6e54414516$var$move_L,
    $ea873a6e54414516$var$move_BL,
    $ea873a6e54414516$var$move_BR,
    $ea873a6e54414516$var$move_x2
];
var $ea873a6e54414516$var$move_names = [
    "U",
    "R",
    "F",
    "L",
    "BL",
    "BR",
    "x2"
];
var $ea873a6e54414516$var$id = $ea873a6e54414516$var$compose_o($ea873a6e54414516$var$move_x2, $ea873a6e54414516$var$move_x2);
var $ea873a6e54414516$var$moves_full = [];
for(let i = 0; i < $ea873a6e54414516$var$moves.length; i++){
    $ea873a6e54414516$var$moves_full[i] = [
        $ea873a6e54414516$var$id
    ];
    for(let j = 1; j < 5; j++)$ea873a6e54414516$var$moves_full[i][j] = $ea873a6e54414516$var$compose_o($ea873a6e54414516$var$moves_full[i][j - 1], $ea873a6e54414516$var$moves[i]);
}
function $ea873a6e54414516$var$random_state(randomUintBelow2) {
    let p = [
        0
    ];
    for(let i16 = 1; i16 < 20; i16++){
        let r = randomUintBelow2(i16 + 1);
        p[i16] = p[r];
        p[r] = i16;
    }
    if ($ea873a6e54414516$var$permutation_parity(p) === 1) [p[0], p[1]] = [
        p[1],
        p[0]
    ];
    let o = Array(20).fill(0);
    for(let i15 = 0; i15 < 19; i15++){
        o[i15] = randomUintBelow2(3);
        o[19] += 3 - o[i15];
    }
    o[19] %= 3;
    return [
        p,
        o
    ];
}
function $ea873a6e54414516$var$stringify_move_sequence(move_sequence) {
    let suffixes = [
        "0",
        "",
        "2",
        "2'",
        "'"
    ];
    let s = move_sequence.map(([m, r])=>$ea873a6e54414516$var$move_names[m] + suffixes[r]);
    return s.join(" ");
}
function $ea873a6e54414516$var$apply_move_sequence(state, move_sequence) {
    for (let [m, r] of move_sequence)for(let i17 = 0; i17 < r; i17++)state = $ea873a6e54414516$var$compose_o(state, $ea873a6e54414516$var$moves[m]);
    return state;
}
function $ea873a6e54414516$var$generate_random_state_scramble(randomUintBelow2) {
    return $ea873a6e54414516$var$solve($ea873a6e54414516$var$random_state(randomUintBelow2));
}
var $ea873a6e54414516$var$translation_amounts;
{
    let A = Math.sin(Math.PI / 5), B = Math.cos(Math.PI / 10);
    let C2 = Math.cos(Math.PI / 5), D = Math.sin(Math.PI / 10);
    $ea873a6e54414516$var$translation_amounts = {
        U: [
            0,
            0
        ],
        L: [
            -A - B,
            C2 - D
        ],
        F: [
            0,
            2 * C2
        ],
        R: [
            A + B,
            C2 - D
        ],
        BR: [
            B,
            -1 - D
        ],
        BL: [
            -B,
            -1 - D
        ],
        DBR: [
            2 * A + 2 * B,
            0
        ],
        DB: [
            3 * A + 3 * B,
            -C2 - D
        ],
        DBL: [
            4 * A + 4 * B,
            0
        ],
        DFL: [
            3 * A + 4 * B,
            1 + C2
        ],
        DFR: [
            3 * A + 2 * B,
            1 + C2
        ],
        D: [
            3 * A + 3 * B,
            C2 - D
        ]
    };
}function $ea873a6e54414516$var$solve_phase1(state) {
    let p = state[0];
    if (p.slice(15, 20).every((x)=>x < 15)) return [];
    if (p.slice(0, 5).every((x)=>x < 15)) return [
        [
            6,
            1
        ]
    ];
    let flags = p.map((x)=>x >= 15);
    let depth = 0, sol;
    while(sol === void 0){
        depth++;
        sol = $ea873a6e54414516$var$search_phase1(flags, depth, -1);
    }
    sol.push([
        6,
        1
    ]);
    return sol;
}
function $ea873a6e54414516$var$search_phase1(flags, depth, last) {
    if (depth == 0) {
        if (flags.slice(0, 5).some((x)=>x)) return;
        return [];
    }
    for(let move_index = 0; move_index < 6; move_index++){
        if (move_index === last) continue;
        for(let r = 1; r < 5; r++){
            let new_flags = $ea873a6e54414516$var$compose(flags, $ea873a6e54414516$var$moves_full[move_index][r][0]);
            let sol = $ea873a6e54414516$var$search_phase1(new_flags, depth - 1, move_index);
            if (sol !== void 0) return [
                [
                    move_index,
                    r
                ]
            ].concat(sol);
        }
    }
    return;
}
function $ea873a6e54414516$var$index_phase2(state) {
    let p = state[0].slice(0, 15), o = state[1];
    let index_c = $ea873a6e54414516$var$comb_to_index(p.map((x)=>+(x >= 15)));
    let index_o = 243 * index_c;
    for(let i19 = 0, j = 0; i19 < 15; i19++){
        if (p[i19] < 15) continue;
        index_o += o[i19] * Math.pow(3, j);
        j++;
    }
    let index_p = 0;
    for(let i18 = 0; i18 < 5; i18++)index_p += p.indexOf(15 + i18) * Math.pow(15, i18);
    return [
        index_o,
        index_p
    ];
}
function $ea873a6e54414516$var$solve_phase2(state) {
    let mtables = [
        $ea873a6e54414516$var$generate_phase23_orientation_mtable(),
        $ea873a6e54414516$var$generate_phase23_permutation_mtable()
    ];
    let ptables = [
        $ea873a6e54414516$var$generate_phase2_orientation_ptable(),
        $ea873a6e54414516$var$generate_phase2_permutation_ptable()
    ];
    return $ea873a6e54414516$var$ida_solve($ea873a6e54414516$var$index_phase2(state), mtables, ptables).concat([
        [
            6,
            1
        ]
    ]);
}
function $ea873a6e54414516$var$index_phase3(state) {
    let pieces = [
        5,
        6,
        7,
        8,
        14
    ];
    let p = state[0].slice(0, 15), o = state[1];
    let index_c = $ea873a6e54414516$var$comb_to_index(p.map((x)=>+(pieces.indexOf(x) !== -1)));
    let index_o = 243 * index_c;
    for(let i21 = 0, j = 0; i21 < 15; i21++){
        if (pieces.indexOf(p[i21]) === -1) continue;
        index_o += o[i21] * Math.pow(3, j);
        j++;
    }
    let index_p = 0;
    for(let i20 = 0; i20 < 5; i20++)index_p += p.indexOf(pieces[i20]) * Math.pow(15, i20);
    return [
        index_o,
        index_p
    ];
}
function $ea873a6e54414516$var$solve_phase3(state) {
    let mtables = [
        $ea873a6e54414516$var$generate_phase23_orientation_mtable(),
        $ea873a6e54414516$var$generate_phase23_permutation_mtable()
    ];
    let ptables = [
        $ea873a6e54414516$var$generate_phase3_orientation_ptable(),
        $ea873a6e54414516$var$generate_phase3_permutation_ptable()
    ];
    return $ea873a6e54414516$var$ida_solve($ea873a6e54414516$var$index_phase3(state), mtables, ptables);
}
function $ea873a6e54414516$var$index_phase4(state) {
    let p = state[0].slice(0, 14), o = state[1];
    let index_o = 0, perm = [];
    let j = 0;
    for (let i22 of [
        0,
        1,
        2,
        3,
        4,
        9,
        10,
        11,
        12,
        13
    ]){
        if (i22 !== 13) index_o += o[i22] * Math.pow(3, j);
        perm[j] = p[i22] < 5 ? p[i22] : p[i22] - 4;
        j++;
    }
    return [
        index_o,
        $ea873a6e54414516$var$evenpermutation_to_index(perm)
    ];
}
function $ea873a6e54414516$var$solve_phase4_fast(state) {
    return $ea873a6e54414516$var$phase4_ida_solve($ea873a6e54414516$var$index_phase4(state));
}
function $ea873a6e54414516$var$solve(state) {
    let sol = [];
    for (let solver of [
        $ea873a6e54414516$var$solve_phase1,
        $ea873a6e54414516$var$solve_phase2,
        $ea873a6e54414516$var$solve_phase3,
        $ea873a6e54414516$var$solve_phase4_fast
    ]){
        let phase_sol = solver(state);
        state = $ea873a6e54414516$var$apply_move_sequence(state, phase_sol);
        sol = sol.concat(phase_sol);
    }
    return sol;
}
var $ea873a6e54414516$var$tables = {};
function $ea873a6e54414516$var$generate_phase23_orientation_mtable() {
    if ($ea873a6e54414516$var$tables.phase23om) return $ea873a6e54414516$var$tables.phase23om;
    const C15_5 = $ea873a6e54414516$var$C(15, 5), THREE = [
        1,
        3,
        9,
        27,
        81,
        243
    ];
    let phase23om = Array($ea873a6e54414516$var$C(15, 5) * THREE[5]);
    $ea873a6e54414516$var$tables.phase23om = phase23om;
    for(let i23 = 0; i23 < C15_5; i23++){
        let comb = $ea873a6e54414516$var$index_to_comb(i23, 5, 15).concat(Array(5).fill(0));
        let new_comb_indices = [];
        for(let move_index = 0; move_index < 6; move_index++){
            let new_comb = $ea873a6e54414516$var$compose(comb, $ea873a6e54414516$var$moves[move_index][0]).slice(0, 15);
            new_comb_indices[move_index] = $ea873a6e54414516$var$comb_to_index(new_comb);
        }
        for(let j = 0; j < THREE[5]; j++){
            phase23om[j + 243 * i23] = [];
            let orient_full = [];
            for(let k = 0, l = 0; k < 20; k++)if (comb[k] === 1) {
                orient_full[k] = (j / THREE[l] | 0) % 3;
                l++;
            } else orient_full[k] = 99;
            for(let move_index = 0; move_index < 6; move_index++){
                let move = $ea873a6e54414516$var$moves[move_index];
                let new_orient_full = [];
                for(let k = 0; k < 15; k++)new_orient_full[k] = orient_full[move[0][k]] + move[1][k];
                let new_orient = new_orient_full.filter((x)=>x < 10);
                let J = 0;
                for(let k1 = 0; k1 < 5; k1++)J += new_orient[k1] % 3 * THREE[k1];
                phase23om[j + 243 * i23][move_index] = J + 243 * new_comb_indices[move_index];
            }
        }
    }
    return phase23om;
}
function $ea873a6e54414516$var$generate_phase2_orientation_ptable() {
    if ($ea873a6e54414516$var$tables.phase2op) return $ea873a6e54414516$var$tables.phase2op;
    let mtable = $ea873a6e54414516$var$generate_phase23_orientation_mtable();
    return $ea873a6e54414516$var$tables.phase2op = $ea873a6e54414516$var$bfs(mtable, [
        729486
    ]);
}
function $ea873a6e54414516$var$generate_phase3_orientation_ptable() {
    if ($ea873a6e54414516$var$tables.phase3op) return $ea873a6e54414516$var$tables.phase3op;
    let mtable = $ea873a6e54414516$var$generate_phase23_orientation_mtable();
    return $ea873a6e54414516$var$tables.phase3op = $ea873a6e54414516$var$bfs(mtable, [
        59778
    ]);
}
function $ea873a6e54414516$var$generate_phase23_permutation_mtable() {
    if ($ea873a6e54414516$var$tables.phase23pm) return $ea873a6e54414516$var$tables.phase23pm;
    const FIFTEEN = [
        1,
        15,
        225,
        Math.pow(15, 3),
        Math.pow(15, 4),
        Math.pow(15, 5)
    ];
    let phase23pm = Array(FIFTEEN[5]);
    let single = Array(15);
    for(let i24 = 0; i24 < 15; i24++){
        single[i24] = Array(6);
        for(let move_index = 0; move_index < 6; move_index++)single[i24][move_index] = $ea873a6e54414516$var$moves[move_index][0].indexOf(i24);
    }
    let locations = [
        0,
        0,
        0,
        0,
        0
    ];
    for(let ind = 0; ind < FIFTEEN[5]; ind++){
        phase23pm[ind] = Array(6);
        for(let move_index = 0; move_index < 6; move_index++){
            let new_ind = 0;
            for(let i25 = 0; i25 < 5; i25++)new_ind += single[locations[i25]][move_index] * FIFTEEN[i25];
            phase23pm[ind][move_index] = new_ind;
        }
        locations[0]++;
        for(let i26 = 0; i26 < 4; i26++)if (locations[i26] === 15) {
            locations[i26] = 0;
            locations[i26 + 1]++;
        }
    }
    return $ea873a6e54414516$var$tables.phase23pm = phase23pm;
}
function $ea873a6e54414516$var$generate_phase2_permutation_ptable() {
    if ($ea873a6e54414516$var$tables.phase2pp) return $ea873a6e54414516$var$tables.phase2pp;
    let mtable = $ea873a6e54414516$var$generate_phase23_permutation_mtable();
    return $ea873a6e54414516$var$tables.phase2pp = $ea873a6e54414516$var$bfs(mtable, [
        213090
    ]);
}
function $ea873a6e54414516$var$generate_phase3_permutation_ptable() {
    if ($ea873a6e54414516$var$tables.phase3pp) return $ea873a6e54414516$var$tables.phase3pp;
    let mtable = $ea873a6e54414516$var$generate_phase23_permutation_mtable();
    return $ea873a6e54414516$var$tables.phase3pp = $ea873a6e54414516$var$bfs(mtable, [
        737420
    ]);
}
function $ea873a6e54414516$var$generate_phase4_orientation_mtable() {
    if ($ea873a6e54414516$var$tables.phase4om) return $ea873a6e54414516$var$tables.phase4om;
    const THREE = [
        1,
        3,
        9,
        27,
        81,
        243,
        729,
        2187,
        6561,
        19683,
        59049
    ];
    let mtable = Array(THREE[9]);
    for(let i27 = 0; i27 < THREE[9]; i27++){
        let o = Array(14).fill(0);
        for(let j = 0; j < 9; j++){
            let J = j < 5 ? j : j + 4;
            o[J] = (i27 / THREE[j] | 0) % 3;
            o[13] -= o[J];
        }
        o[13] = (o[13] + 999) % 3;
        mtable[i27] = [];
        for(let move_index = 0; move_index < 3; move_index++){
            let move = $ea873a6e54414516$var$moves[move_index];
            let new_o = [
                0,
                1,
                2,
                3,
                4,
                9,
                10,
                11,
                12,
                13
            ].map((i2)=>o[move[0][i2]] + move[1][i2]);
            let new_i = 0;
            for(let j = 0; j < 9; j++)new_i += new_o[j] % 3 * THREE[j];
            mtable[i27][move_index] = new_i;
        }
    }
    return $ea873a6e54414516$var$tables.phase4om = mtable;
}
function $ea873a6e54414516$var$generate_phase4_permutation_mtable() {
    if ($ea873a6e54414516$var$tables.phase4pm) return $ea873a6e54414516$var$tables.phase4pm;
    const HALFFACT10 = $ea873a6e54414516$var$factorial(10) / 2, n = 10;
    let pre = [
        0,
        1,
        2,
        3,
        4,
        -1,
        -1,
        -1,
        -1,
        5,
        6,
        7,
        8,
        9
    ];
    let post = [
        0,
        1,
        2,
        3,
        4,
        9,
        10,
        11,
        12,
        13
    ];
    let move_permutations = [
        $ea873a6e54414516$var$compose(pre, $ea873a6e54414516$var$compose($ea873a6e54414516$var$move_U[0], post)),
        $ea873a6e54414516$var$compose(pre, $ea873a6e54414516$var$compose($ea873a6e54414516$var$move_R[0], post)),
        $ea873a6e54414516$var$compose(pre, $ea873a6e54414516$var$compose($ea873a6e54414516$var$move_F[0], post))
    ];
    let mtable = Array(HALFFACT10);
    let perm = Array(10);
    for(let i28 = 0; i28 < HALFFACT10; i28++){
        $ea873a6e54414516$var$index_to_evenpermutation10(i28, perm);
        mtable[i28] = [];
        for(let move_index = 0; move_index < 3; move_index++){
            let new_perm = $ea873a6e54414516$var$compose(perm, move_permutations[move_index]);
            mtable[i28][move_index] = $ea873a6e54414516$var$evenpermutation10_to_index(new_perm);
        }
    }
    return $ea873a6e54414516$var$tables.phase4pm = mtable;
}
function $ea873a6e54414516$var$generate_phase4_orientation_ptable() {
    if ($ea873a6e54414516$var$tables.phase4op) return $ea873a6e54414516$var$tables.phase4op;
    let mtable = $ea873a6e54414516$var$generate_phase4_orientation_mtable();
    return $ea873a6e54414516$var$tables.phase4op = $ea873a6e54414516$var$bfs(mtable, [
        0
    ]);
}
function $ea873a6e54414516$var$generate_phase4_permutation_ptable() {
    if ($ea873a6e54414516$var$tables.phase4pp) return $ea873a6e54414516$var$tables.phase4pp;
    let mtable = $ea873a6e54414516$var$generate_phase4_permutation_mtable();
    return $ea873a6e54414516$var$tables.phase4pp = $ea873a6e54414516$var$bfs(mtable, [
        0
    ]);
}
function $ea873a6e54414516$var$generate_phase4_near_ptable_list(threshold) {
    if ($ea873a6e54414516$var$tables.phase4np_list && $ea873a6e54414516$var$tables.phase4np_list.threshold === threshold) return $ea873a6e54414516$var$tables.phase4np_list;
    let mtables = [
        $ea873a6e54414516$var$generate_phase4_orientation_mtable(),
        $ea873a6e54414516$var$generate_phase4_permutation_mtable()
    ];
    let base = Math.pow(3, 9);
    let states = [
        0
    ];
    populate(threshold, [
        0,
        0
    ], -1);
    function populate(depth, state, last2) {
        states.push(state[0] + base * state[1]);
        if (depth === 0) return;
        let new_state = [];
        for(let move_index = 0; move_index < 3; move_index++){
            if (move_index === last2) continue;
            new_state[0] = state[0];
            new_state[1] = state[1];
            for(let r = 1; r < 5; r++){
                new_state[0] = mtables[0][new_state[0]][move_index];
                new_state[1] = mtables[1][new_state[1]][move_index];
                populate(depth - 1, new_state, move_index);
            }
        }
        return;
    }
    states.sort((x, y)=>x - y);
    let unique_states = [], last = -1;
    for (let state1 of states)if (state1 !== last) unique_states.push(last = state1);
    unique_states.threshold = threshold;
    return $ea873a6e54414516$var$tables.phase4np_list = unique_states;
}
function $ea873a6e54414516$var$binary_search(A, x) {
    let lo = 0, hi = A.length - 1;
    while(hi - lo > 1){
        let mid = lo + hi >> 1;
        if (x > A[mid]) lo = mid + 1;
        else hi = mid;
    }
    return x === A[lo] || x === A[hi];
}
function $ea873a6e54414516$var$bfs(mtable, goal_states) {
    let N = mtable.length;
    let nmoves = mtable[0].length;
    let ptable = Array(N).fill(-1);
    for (let state of goal_states)ptable[state] = 0;
    let depth = 0;
    let done = false;
    while(!done){
        done = true;
        for(let state = 0; state < N; state++){
            if (ptable[state] !== depth) continue;
            for(let move_index = 0; move_index < nmoves; move_index++){
                let new_state = mtable[state][move_index];
                while(new_state !== state){
                    if (ptable[new_state] === -1) {
                        done = false;
                        ptable[new_state] = depth + 1;
                    }
                    new_state = mtable[new_state][move_index];
                }
            }
        }
        depth++;
    }
    return ptable;
}
function $ea873a6e54414516$var$ida_solve(indices, mtables, ptables) {
    let ncoords = indices.length;
    let bound = 0;
    for(let i29 = 0; i29 < ncoords; i29++)bound = Math.max(bound, ptables[i29][indices[i29]]);
    while(true){
        let path = $ea873a6e54414516$var$ida_search(indices, mtables, ptables, bound, -1);
        if (path !== void 0) return path;
        bound++;
    }
}
function $ea873a6e54414516$var$ida_search(indices, mtables, ptables, bound, last) {
    let ncoords = indices.length;
    let nmoves = mtables[0][0].length;
    let heuristic = 0;
    for(let i30 = 0; i30 < ncoords; i30++)heuristic = Math.max(heuristic, ptables[i30][indices[i30]]);
    if (heuristic > bound) return;
    if (bound === 0 || heuristic === 0) return [];
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
        let new_indices = indices.slice();
        for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][indices[c]][m];
        let r = 1;
        while(indices.some((_, i31)=>indices[i31] != new_indices[i31])){
            let subpath = $ea873a6e54414516$var$ida_search(new_indices, mtables, ptables, bound - 1, m);
            if (subpath !== void 0) return [
                [
                    m,
                    r
                ]
            ].concat(subpath);
            for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][new_indices[c]][m];
            r++;
        }
    }
    return;
}
function $ea873a6e54414516$var$phase4_ida_solve(indices) {
    let mtable_o = $ea873a6e54414516$var$generate_phase4_orientation_mtable();
    let mtable_p = $ea873a6e54414516$var$generate_phase4_permutation_mtable();
    let ptable_o = $ea873a6e54414516$var$generate_phase4_orientation_ptable();
    let ptable_p = $ea873a6e54414516$var$generate_phase4_permutation_ptable();
    let ptable_n = $ea873a6e54414516$var$generate_phase4_near_ptable_list($ea873a6e54414516$var$PHASE4_THRESHOLD);
    let bound = Math.max(ptable_o[indices[0]], ptable_p[indices[1]]);
    while(true){
        let path = $ea873a6e54414516$var$phase4_ida_search(indices, bound, -1, mtable_o, mtable_p, ptable_o, ptable_p, ptable_n);
        if (path !== void 0) return path;
        bound++;
    }
}
function $ea873a6e54414516$var$phase4_ida_search(indices, bound, last, mtable_o, mtable_p, ptable_o, ptable_p, ptable_n) {
    let heuristic = Math.max(ptable_o[indices[0]], ptable_p[indices[1]]);
    if (heuristic > bound) return;
    if (heuristic <= $ea873a6e54414516$var$PHASE4_THRESHOLD && !$ea873a6e54414516$var$binary_search(ptable_n, indices[0] + 19683 * indices[1])) heuristic = $ea873a6e54414516$var$PHASE4_THRESHOLD + 1;
    if (heuristic > bound) return;
    if (bound === 0 || heuristic === 0) return [];
    for(let m = 0; m < 3; m++){
        if (m === last) continue;
        let new_indices = indices.slice();
        for(let r = 1; r < 5; r++){
            new_indices[0] = mtable_o[new_indices[0]][m];
            new_indices[1] = mtable_p[new_indices[1]][m];
            let subpath = $ea873a6e54414516$var$phase4_ida_search(new_indices, bound - 1, m, mtable_o, mtable_p, ptable_o, ptable_p, ptable_n);
            if (subpath !== void 0) return [
                [
                    m,
                    r
                ]
            ].concat(subpath);
        }
    }
    return;
}
var $ea873a6e54414516$var$randomUintBelow = (0, $8mjCn.randomUIntBelowFactory)();
async function $ea873a6e54414516$export$e1de67292f5b845a() {
    return new (0, $7TbMZ.Alg)($ea873a6e54414516$var$stringify_move_sequence($ea873a6e54414516$var$generate_random_state_scramble(await $ea873a6e54414516$var$randomUintBelow)));
}
$ea873a6e54414516$export$e1de67292f5b845a().then((alg)=>alg.log());

});


//# sourceMappingURL=kilosolver-A3MNW2DJ.7152e408.js.map
