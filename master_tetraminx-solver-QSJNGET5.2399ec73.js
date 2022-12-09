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
parcelRequire.register("2mwPI", function(module, exports) {

$parcel$export(module.exports, "randomMasterTetraminxScrambleString", () => $1b871ace8beb414a$export$6901d40b4773ed59);

var $8mjCn = parcelRequire("8mjCn");
parcelRequire("hJBlP");
"use strict";
"use strict";
// src/cubing/vendor/xyzzy/master_tetraminx-solver.js
function $1b871ace8beb414a$var$factorial(n) {
    if (n < 2) return n;
    let f = 1;
    for(let i3 = 2; i3 <= n; i3++)f *= i3;
    return f;
}
function $1b871ace8beb414a$var$identity_permutation(n) {
    let a = Array(n);
    for(let i4 = 0; i4 < n; i4++)a[i4] = i4;
    return a;
}
function $1b871ace8beb414a$var$permutation_to_index(perm) {
    perm = perm.slice();
    let n = perm.length;
    let f = $1b871ace8beb414a$var$factorial(n - 1);
    let ind = 0;
    while(n > 1){
        n--;
        let e = perm[0];
        ind += e * f;
        for(let i5 = 0; i5 < n; i5++){
            let x = perm[i5 + 1];
            perm[i5] = x - (x > e);
        }
        f /= n;
    }
    return ind;
}
function $1b871ace8beb414a$var$index_to_evenpermutation(ind, n) {
    let perm = [];
    let f = $1b871ace8beb414a$var$factorial(n - 1) / 2;
    let parity = 0;
    for(let i7 = 0; i7 < n - 1; i7++){
        perm[i7] = ind / f | 0;
        ind %= f;
        f /= n - 1 - i7;
    }
    perm[n - 1] = 0;
    for(let i6 = n - 2; i6 >= 0; i6--){
        for(let j1 = i6 + 1; j1 < n; j1++)if (perm[j1] >= perm[i6]) perm[j1]++;
        else parity ^= 1;
    }
    if (parity === 1) [perm[n - 2], perm[n - 1]] = [
        perm[n - 1],
        perm[n - 2]
    ];
    return perm;
}
function $1b871ace8beb414a$var$evenpermutation_to_index(perm) {
    return $1b871ace8beb414a$var$permutation_to_index(perm) >> 1;
}
var [$1b871ace8beb414a$var$evenpermutation12_to_index, $1b871ace8beb414a$var$index_to_evenpermutation12] = (()=>{
    let index_in_set_bits = new Int8Array(49152);
    let look_up_set_bits = new Int8Array(49152);
    for(let i8 = 0; i8 < 4096; i8++)for(let j2 = 0, counter = 0; j2 < 12; j2++){
        if ((i8 >>> j2 & 1) === 0) continue;
        index_in_set_bits[j2 << 12 | i8] = counter;
        look_up_set_bits[counter << 12 | i8] = j2;
        counter++;
    }
    function evenpermutation12_to_index2(perm) {
        let unused = 4095;
        let f = 19958400;
        let ind = 0;
        for(let i9 = 0; i9 < 10; i9++){
            let v = perm[i9];
            ind += index_in_set_bits[unused | v << 12] * f;
            unused &= ~(1 << v);
            f /= 11 - i9;
        }
        return ind;
    }
    function index_to_evenpermutation122(ind, perm) {
        let unused = 4095;
        let f = 19958400;
        let parity = 0;
        for(let i10 = 0; i10 < 10; i10++){
            let a = ind / f | 0;
            ind -= a * f;
            parity ^= a & 1;
            let v = look_up_set_bits[unused | a << 12];
            perm[i10] = v;
            unused &= ~(1 << v);
            f /= 11 - i10;
        }
        perm[10] = look_up_set_bits[unused | parity << 12];
        perm[11] = look_up_set_bits[unused | (parity ^ 1) << 12];
        return perm;
    }
    return [
        evenpermutation12_to_index2,
        index_to_evenpermutation122
    ];
})();
function $1b871ace8beb414a$var$compose(A, B) {
    let C = [];
    for(let i11 = 0; i11 < B.length; i11++)C[i11] = A[B[i11]];
    return C;
}
function $1b871ace8beb414a$var$invert(perm) {
    let inv = [];
    for(let i12 = 0; i12 < perm.length; i12++)inv[perm[i12]] = i12;
    return inv;
}
function $1b871ace8beb414a$var$permutation_from_cycle(cycle, n) {
    let perm = [];
    for(let i14 = 0; i14 < n; i14++)perm[i14] = i14;
    for(let i13 = 0; i13 < cycle.length; i13++)perm[cycle[i13]] = cycle[(i13 + 1) % cycle.length];
    return perm;
}
function $1b871ace8beb414a$var$permutation_from_cycles(cycles, n) {
    if (cycles.length === 0) return $1b871ace8beb414a$var$identity_permutation(n);
    return cycles.map((cycle)=>$1b871ace8beb414a$var$permutation_from_cycle(cycle, n)).reduce($1b871ace8beb414a$var$compose);
}
function $1b871ace8beb414a$var$compose_state(state1, state2) {
    let co = Array(4);
    for(let i15 = 0; i15 < 4; i15++)co[i15] = (state1.co[i15] + state2.co[i15]) % 3;
    let mp = $1b871ace8beb414a$var$compose(state1.mp, state2.mp);
    let wp = $1b871ace8beb414a$var$compose(state1.wp, state2.wp);
    let cp = $1b871ace8beb414a$var$compose(state1.cp, state2.cp);
    return {
        co: co,
        mp: mp,
        wp: wp,
        cp: cp
    };
}
var $1b871ace8beb414a$var$solved = {
    co: [
        0,
        0,
        0,
        0
    ],
    mp: $1b871ace8beb414a$var$identity_permutation(12),
    wp: $1b871ace8beb414a$var$identity_permutation(12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var $1b871ace8beb414a$var$move_U = {
    co: [
        2,
        0,
        0,
        0
    ],
    mp: $1b871ace8beb414a$var$identity_permutation(12),
    wp: $1b871ace8beb414a$var$permutation_from_cycle([
        1,
        9,
        11
    ], 12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var $1b871ace8beb414a$var$move_L = {
    co: [
        0,
        2,
        0,
        0
    ],
    mp: $1b871ace8beb414a$var$identity_permutation(12),
    wp: $1b871ace8beb414a$var$permutation_from_cycle([
        0,
        7,
        2
    ], 12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var $1b871ace8beb414a$var$move_R = {
    co: [
        0,
        0,
        2,
        0
    ],
    mp: $1b871ace8beb414a$var$identity_permutation(12),
    wp: $1b871ace8beb414a$var$permutation_from_cycle([
        3,
        6,
        10
    ], 12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var $1b871ace8beb414a$var$move_B = {
    co: [
        0,
        0,
        0,
        2
    ],
    mp: $1b871ace8beb414a$var$identity_permutation(12),
    wp: $1b871ace8beb414a$var$permutation_from_cycle([
        4,
        8,
        5
    ], 12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var $1b871ace8beb414a$var$move_Uw = {
    co: [
        2,
        0,
        0,
        0
    ],
    mp: $1b871ace8beb414a$var$permutation_from_cycles([
        [
            1,
            9,
            11
        ],
        [
            7,
            3,
            5
        ]
    ], 12),
    wp: $1b871ace8beb414a$var$permutation_from_cycles([
        [
            1,
            9,
            11
        ],
        [
            7,
            3,
            5
        ]
    ], 12),
    cp: [
        0,
        2,
        3,
        1
    ]
};
var $1b871ace8beb414a$var$move_Lw = {
    co: [
        0,
        2,
        0,
        0
    ],
    mp: $1b871ace8beb414a$var$permutation_from_cycles([
        [
            0,
            7,
            2
        ],
        [
            6,
            1,
            8
        ]
    ], 12),
    wp: $1b871ace8beb414a$var$permutation_from_cycles([
        [
            0,
            7,
            2
        ],
        [
            6,
            1,
            8
        ]
    ], 12),
    cp: [
        3,
        1,
        0,
        2
    ]
};
var $1b871ace8beb414a$var$move_Rw = {
    co: [
        0,
        0,
        2,
        0
    ],
    mp: $1b871ace8beb414a$var$permutation_from_cycles([
        [
            3,
            6,
            10
        ],
        [
            9,
            0,
            4
        ]
    ], 12),
    wp: $1b871ace8beb414a$var$permutation_from_cycles([
        [
            3,
            6,
            10
        ],
        [
            9,
            0,
            4
        ]
    ], 12),
    cp: [
        1,
        3,
        2,
        0
    ]
};
var $1b871ace8beb414a$var$move_Bw = {
    co: [
        0,
        0,
        0,
        2
    ],
    mp: $1b871ace8beb414a$var$permutation_from_cycles([
        [
            4,
            8,
            5
        ],
        [
            10,
            2,
            11
        ]
    ], 12),
    wp: $1b871ace8beb414a$var$permutation_from_cycles([
        [
            4,
            8,
            5
        ],
        [
            10,
            2,
            11
        ]
    ], 12),
    cp: [
        2,
        0,
        1,
        3
    ]
};
var $1b871ace8beb414a$var$moves = [
    $1b871ace8beb414a$var$move_Uw,
    $1b871ace8beb414a$var$move_Lw,
    $1b871ace8beb414a$var$move_Rw,
    $1b871ace8beb414a$var$move_Bw,
    $1b871ace8beb414a$var$move_U,
    $1b871ace8beb414a$var$move_L,
    $1b871ace8beb414a$var$move_R,
    $1b871ace8beb414a$var$move_B
];
var $1b871ace8beb414a$var$move_names = [
    "u",
    "l",
    "r",
    "b",
    "U",
    "L",
    "R",
    "B"
];
var $1b871ace8beb414a$var$N_MOVES = 8;
var $1b871ace8beb414a$var$N_MOVES_PHASE2 = 4;
function $1b871ace8beb414a$var$moves_commute(i16, j3) {
    if (i16 >= 4 && j3 >= 4) return true;
    if (i16 < 4 && j3 < 4) return i16 === j3;
    return (i16 ^ j3) === 4;
}
function $1b871ace8beb414a$var$stringify_move_sequence(move_sequence) {
    let suffixes = [
        "0",
        "",
        "'"
    ];
    let s = move_sequence.map(([m, r])=>$1b871ace8beb414a$var$move_names[m] + suffixes[r]);
    return s.join(" ");
}
function $1b871ace8beb414a$var$generate_random_state(randomUintBelow2) {
    let co = Array(4);
    for(let i18 = 0; i18 < 4; i18++)co[i18] = randomUintBelow2(3);
    let mp = $1b871ace8beb414a$var$index_to_evenpermutation(randomUintBelow2($1b871ace8beb414a$var$factorial(6) / 2), 6);
    for(let i17 = 0, parity = 0; i17 < 6; i17++){
        let eo = i17 === 5 ? parity : randomUintBelow2(2);
        parity ^= eo;
        mp[i17] += eo * 6;
        mp[i17 + 6] = (mp[i17] + 6) % 12;
    }
    let wp = $1b871ace8beb414a$var$index_to_evenpermutation(randomUintBelow2($1b871ace8beb414a$var$factorial(12) / 2), 12);
    let cp = $1b871ace8beb414a$var$index_to_evenpermutation(randomUintBelow2($1b871ace8beb414a$var$factorial(4) / 2), 4);
    return {
        co: co,
        mp: mp,
        wp: wp,
        cp: cp
    };
}
function $1b871ace8beb414a$var$generate_random_state_scramble(randomUintBelow2) {
    return $1b871ace8beb414a$var$solve($1b871ace8beb414a$var$generate_random_state(randomUintBelow2));
}
function $1b871ace8beb414a$var$generate_scramble_sequence(randomUintBelow2, tips = true, obfuscate_tips = false) {
    let scramble_string = $1b871ace8beb414a$var$stringify_move_sequence($1b871ace8beb414a$var$generate_random_state_scramble(randomUintBelow2));
    if (!tips) return scramble_string;
    let tip_names = [
        "u",
        "l",
        "r",
        "b"
    ];
    let suffixes = [
        "0",
        "",
        "'"
    ];
    if (!obfuscate_tips) {
        for(let i20 = 0; i20 < 4; i20++){
            let x = randomUintBelow2(3);
            if (x !== 0) scramble_string += " " + tip_names[i20] + suffixes[x];
        }
        return scramble_string.trim();
    }
    let amount = [], amount_pre = [], amount_post = [];
    for(let i21 = 0; i21 < 4; i21++){
        amount[i21] = randomUintBelow2(3);
        amount_pre[i21] = randomUintBelow2(3);
        amount_post[i21] = (amount[i21] - amount_pre[i21] + 3) % 3;
    }
    let weight = (arr)=>arr.filter((x)=>x !== 0).length;
    while(!(weight(amount_pre) >= 1 && weight(amount_post) >= 1 && weight(amount_pre) + weight(amount_post) >= 4))for(let i19 = 0; i19 < 4; i19++){
        amount_pre[i19] = randomUintBelow2(3);
        amount_post[i19] = (amount[i19] - amount_pre[i19] + 3) % 3;
    }
    let prepend = amount_pre.map((x, i22)=>x !== 0 ? tip_names[i22] + suffixes[x] + " " : "").join("");
    let append = amount_post.map((x, i23)=>x !== 0 ? " " + tip_names[i23] + suffixes[x] : "").join("");
    return prepend + scramble_string + append;
}
function $1b871ace8beb414a$var$solve(state) {
    let phase1_indices = $1b871ace8beb414a$var$index_phase1(state);
    let phase2_mtables = [
        $1b871ace8beb414a$var$generate_phase2_permutation_mtable(),
        $1b871ace8beb414a$var$generate_phase2_orientation_mtable()
    ];
    let phase2_ptables = [
        $1b871ace8beb414a$var$generate_phase2_permutation_ptable(),
        $1b871ace8beb414a$var$generate_phase2_orientation_ptable()
    ];
    let phase1gen = $1b871ace8beb414a$var$phase1_ida_solve_gen(phase1_indices);
    let best = void 0;
    let intermediate_states = /* @__PURE__ */ new Set();
    let start_time = performance.now();
    for(let i24 = 0; i24 < 22; i24++){
        let { value: sol1 , done: done  } = phase1gen.next();
        let new_state = state;
        for (let [m, r] of sol1)for(let i25 = 0; i25 < r; i25++)new_state = $1b871ace8beb414a$var$compose_state(new_state, $1b871ace8beb414a$var$moves[m]);
        let stringified_state = JSON.stringify(new_state);
        if (intermediate_states.has(stringified_state)) continue;
        else intermediate_states.add(stringified_state);
        let phase2_indices = $1b871ace8beb414a$var$index_phase2(new_state);
        let moves_left = best ? best.length - sol1.length - 1 : 999999;
        let sol2 = $1b871ace8beb414a$var$ida_solve_gen(phase2_indices, phase2_mtables, phase2_ptables, moves_left).next().value;
        if (sol2 === void 0) continue;
        if (best === void 0 || best.length > sol1.length + sol2.length) best = sol1.concat(sol2);
        if (performance.now() - start_time > 300) break;
    }
    return best;
}
function $1b871ace8beb414a$var$determine_V_coset(p) {
    return p[3 ^ p.indexOf(3)];
}
function $1b871ace8beb414a$var$index_phase1(state) {
    let w = $1b871ace8beb414a$var$compose($1b871ace8beb414a$var$invert(state.mp), state.wp);
    let c = (state.co.reduce((x, y)=>x + y) - $1b871ace8beb414a$var$determine_V_coset(state.cp) + 3) % 3;
    return [
        0,
        1,
        2,
        3,
        4,
        5
    ].map((i25)=>i25 + 6 * w.indexOf(i25) + 72 * w.indexOf(i25 + 6) + 864 * c);
}
var $1b871ace8beb414a$var$phase1_permtable_m = [];
var $1b871ace8beb414a$var$phase1_permtable_minv = [];
var $1b871ace8beb414a$var$phase1_permtable_w = [];
var $1b871ace8beb414a$var$phase1_permtable_winv = [];
for(let i = 0; i < $1b871ace8beb414a$var$N_MOVES; i++){
    let move = $1b871ace8beb414a$var$moves[i];
    $1b871ace8beb414a$var$phase1_permtable_m[i] = move.mp;
    $1b871ace8beb414a$var$phase1_permtable_minv[i] = $1b871ace8beb414a$var$invert(move.mp);
    $1b871ace8beb414a$var$phase1_permtable_w[i] = move.wp;
    $1b871ace8beb414a$var$phase1_permtable_winv[i] = $1b871ace8beb414a$var$invert(move.wp);
}
var $1b871ace8beb414a$var$phase1_c_update = [
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2
];
var $1b871ace8beb414a$var$phase1_score_ptable = [
    [
        14,
        -1,
        -1,
        11,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        6,
        4,
        5,
        5,
        3,
        4,
        4,
        2,
        3,
        4,
        3,
        -1,
        -1,
        0
    ],
    [
        13,
        -1,
        -1,
        11,
        10,
        10,
        9,
        8,
        8,
        7,
        7,
        6,
        4,
        5,
        5,
        3,
        4,
        4,
        2,
        3,
        3,
        1,
        -1,
        -1,
        6
    ]
];
var $1b871ace8beb414a$var$phase1_score_ptable_condensed = new Int8Array(55);
for(let i1 = 0; i1 < 25; i1++){
    $1b871ace8beb414a$var$phase1_score_ptable_condensed[i1] = $1b871ace8beb414a$var$phase1_score_ptable[0][i1];
    $1b871ace8beb414a$var$phase1_score_ptable_condensed[i1 + 30] = $1b871ace8beb414a$var$phase1_score_ptable[1][i1];
}
var $1b871ace8beb414a$var$phase1_coord_to_score = new Int8Array(2592);
for(let i2 = 0; i2 < 6; i2++)for(let j = 0; j < 12; j++)for(let k = 0; k < 12; k++){
    let index = i2 + 6 * j + 72 * k;
    let score = 2;
    if (j === i2) score++;
    else if (j === (i2 + 6) % 12) score--;
    if (k === (i2 + 6) % 12) score++;
    else if (k === i2) score--;
    $1b871ace8beb414a$var$phase1_coord_to_score[index] = score;
    $1b871ace8beb414a$var$phase1_coord_to_score[index + 864] = $1b871ace8beb414a$var$phase1_coord_to_score[index + 1728] = score + 5;
}
function* $1b871ace8beb414a$var$phase1_ida_solve_gen(coords) {
    let bound = 0;
    let mtable = $1b871ace8beb414a$var$generate_phase1_pairingc_mtable();
    let ptable = $1b871ace8beb414a$var$generate_phase1_pairing2c_ptable();
    while(true){
        yield* $1b871ace8beb414a$var$phase1_ida_search_gen(...coords, mtable, ptable, bound, -1);
        bound++;
    }
}
function* $1b871ace8beb414a$var$phase1_ida_search_gen(a, b, c, d, e, f, mtable, ptable, bound, last) {
    let nmoves = $1b871ace8beb414a$var$N_MOVES;
    let score = $1b871ace8beb414a$var$phase1_coord_to_score[a] + $1b871ace8beb414a$var$phase1_coord_to_score[b] + $1b871ace8beb414a$var$phase1_coord_to_score[c] + $1b871ace8beb414a$var$phase1_coord_to_score[d] + $1b871ace8beb414a$var$phase1_coord_to_score[e] + $1b871ace8beb414a$var$phase1_coord_to_score[f];
    let heuristic = Math.max(ptable[a % 864 + b * 864], ptable[c % 864 + b * 864], ptable[e % 864 + b * 864], ptable[a % 864 + d * 864], ptable[c % 864 + d * 864], ptable[e % 864 + d * 864], ptable[a % 864 + f * 864], ptable[c % 864 + f * 864], ptable[e % 864 + f * 864], ptable[a % 864 + c * 864], ptable[a % 864 + e * 864], ptable[c % 864 + e * 864], ptable[b % 864 + d * 864], ptable[b % 864 + f * 864], ptable[d % 864 + f * 864], $1b871ace8beb414a$var$phase1_score_ptable_condensed[score]);
    if (heuristic > bound) return;
    if (bound === 0) {
        yield [];
        return;
    }
    if (heuristic === 0 && bound === 1) return;
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
        if (m < last && $1b871ace8beb414a$var$moves_commute(m, last)) continue;
        let A = a, B = b, C = c, D = d, E = e, F = f;
        for(let r = 1; r <= 2; r++){
            A = mtable[A][m];
            B = mtable[B][m];
            C = mtable[C][m];
            D = mtable[D][m];
            E = mtable[E][m];
            F = mtable[F][m];
            let subpath_gen = $1b871ace8beb414a$var$phase1_ida_search_gen(A, B, C, D, E, F, mtable, ptable, bound - 1, m);
            while(true){
                let { value: subpath , done: done  } = subpath_gen.next();
                if (done) break;
                yield [
                    [
                        m,
                        r
                    ]
                ].concat(subpath);
            }
        }
    }
}
function $1b871ace8beb414a$var$index_phase2(state) {
    let edges = state.mp;
    let ep = $1b871ace8beb414a$var$evenpermutation_to_index(edges.slice(0, 6).map((x)=>x % 6));
    let eo = edges.slice(0, 5).map((x, i26)=>(x >= 6) * 2 ** i26).reduce((x, y)=>x + y);
    let co = state.co.map((x, i27)=>x * 3 ** i27).reduce((x, y)=>x + y);
    let cloc = state.cp.indexOf(0);
    return [
        ep + 360 * cloc,
        eo + 32 * co
    ];
}
var $1b871ace8beb414a$var$tables = {};
function $1b871ace8beb414a$var$generate_phase1_pairing_mtable() {
    if ($1b871ace8beb414a$var$tables.phase1pm) return $1b871ace8beb414a$var$tables.phase1pm;
    let mtable = Array(864).fill().map(()=>Array($1b871ace8beb414a$var$N_MOVES).fill(-1));
    for(let midge = 0; midge < 6; midge++){
        for(let wingl = 0; wingl < 12; wingl++)for(let wingh = 0; wingh < 12; wingh++){
            if (wingl === wingh) continue;
            let index = midge + 6 * wingl + 72 * wingh;
            for(let m = 0; m < $1b871ace8beb414a$var$N_MOVES; m++){
                let new_midge = $1b871ace8beb414a$var$phase1_permtable_minv[m][midge];
                let new_wingl = $1b871ace8beb414a$var$phase1_permtable_winv[m][wingl];
                let new_wingh = $1b871ace8beb414a$var$phase1_permtable_winv[m][wingh];
                if (new_midge < 6) mtable[index][m] = new_midge + 6 * new_wingl + 72 * new_wingh;
                else mtable[index][m] = new_midge - 6 + 6 * new_wingh + 72 * new_wingl;
            }
        }
    }
    return $1b871ace8beb414a$var$tables.phase1pm = mtable;
}
function $1b871ace8beb414a$var$generate_phase1_pairingc_mtable() {
    if ($1b871ace8beb414a$var$tables.phase1pcm) return $1b871ace8beb414a$var$tables.phase1pcm;
    let mtable_pairing = $1b871ace8beb414a$var$generate_phase1_pairing_mtable();
    let mtable = Array(mtable_pairing.length * 3).fill().map(()=>Array($1b871ace8beb414a$var$N_MOVES).fill(-1));
    for(let index = 0; index < mtable_pairing.length; index++)for(let m = 0; m < $1b871ace8beb414a$var$N_MOVES; m++){
        let new_index = mtable_pairing[index][m];
        mtable[index][m] = new_index + 864 * $1b871ace8beb414a$var$phase1_c_update[m];
        mtable[index + 864][m] = new_index + 864 * (($1b871ace8beb414a$var$phase1_c_update[m] + 1) % 3);
        mtable[index + 1728][m] = new_index + 864 * (($1b871ace8beb414a$var$phase1_c_update[m] + 2) % 3);
    }
    return $1b871ace8beb414a$var$tables.phase1pcm = mtable;
}
function $1b871ace8beb414a$var$generate_phase1_pairing2c_ptable() {
    if ($1b871ace8beb414a$var$tables.phase1p2cp) return $1b871ace8beb414a$var$tables.phase1p2cp;
    let mtable_noc = $1b871ace8beb414a$var$generate_phase1_pairing_mtable();
    let mtable = $1b871ace8beb414a$var$generate_phase1_pairingc_mtable();
    let ptable = new Int8Array(2239488);
    ptable.fill(-1);
    let g = [
        0,
        1,
        2,
        3,
        4,
        5
    ].map((x)=>x + 6 * x + 72 * (x + 6));
    for(let i28 = 0; i28 < 6; i28++)for(let j4 = 0; j4 < 6; j4++){
        if (i28 === j4) continue;
        ptable[g[i28] + 864 * g[j4]] = 0;
    }
    let dist = 0;
    while(true){
        let changed = false;
        for(let index = 0; index < ptable.length; index++){
            if (ptable[index] !== dist) continue;
            let index0 = index % 864, index1 = Math.floor(index / 864);
            for(let m = 0; m < $1b871ace8beb414a$var$N_MOVES; m++){
                let new_index0 = index0, new_index1 = index1;
                for(let r = 1; r <= 2; r++){
                    new_index0 = mtable_noc[new_index0][m];
                    new_index1 = mtable[new_index1][m];
                    let new_index = new_index0 + 864 * new_index1;
                    if (ptable[new_index] === -1) {
                        changed = true;
                        ptable[new_index] = dist + 1;
                    }
                }
            }
        }
        if (!changed) break;
        dist++;
    }
    return $1b871ace8beb414a$var$tables.phase1p2cp = ptable;
}
function $1b871ace8beb414a$var$generate_phase2_permutation_mtable() {
    if ($1b871ace8beb414a$var$tables.phase2pm) return $1b871ace8beb414a$var$tables.phase2pm;
    let mtable = Array(1440).fill().map(()=>Array($1b871ace8beb414a$var$N_MOVES_PHASE2));
    for(let ep = 0; ep < 360; ep++){
        let perm = $1b871ace8beb414a$var$index_to_evenpermutation(ep, 6);
        for(let i29 = 0; i29 < 6; i29++)perm[i29 + 6] = perm[i29] + 6;
        for(let m = 0; m < $1b871ace8beb414a$var$N_MOVES_PHASE2; m++){
            let new_perm = $1b871ace8beb414a$var$compose(perm, $1b871ace8beb414a$var$moves[m].mp);
            let new_ep = $1b871ace8beb414a$var$evenpermutation_to_index(new_perm.slice(0, 6).map((x)=>x % 6));
            for(let new_cloc = 0; new_cloc < 4; new_cloc++){
                let cloc = $1b871ace8beb414a$var$moves[m].cp[new_cloc];
                mtable[ep + 360 * cloc][m] = new_ep + 360 * new_cloc;
            }
        }
    }
    return $1b871ace8beb414a$var$tables.phase2pm = mtable;
}
function $1b871ace8beb414a$var$generate_phase2_orientation_mtable() {
    if ($1b871ace8beb414a$var$tables.phase2om) return $1b871ace8beb414a$var$tables.phase2om;
    let mtable = Array(2592).fill().map(()=>Array($1b871ace8beb414a$var$N_MOVES_PHASE2));
    for(let eo = 0; eo < 32; eo++){
        let eo_array = [
            0,
            1,
            2,
            3,
            4
        ].map((i32)=>eo >> i32 & 1);
        eo_array[5] = eo_array.reduce((x, y)=>x ^ y);
        let perm = [];
        for(let i30 = 0; i30 < 6; i30++){
            perm[i30] = i30 + 6 * eo_array[i30];
            perm[i30 + 6] = i30 + 6 * (eo_array[i30] ^ 1);
        }
        for(let co = 0; co < 81; co++){
            let co_array = [
                0,
                1,
                2,
                3
            ].map((i33)=>Math.floor(co / 3 ** i33) % 3);
            for(let m = 0; m < $1b871ace8beb414a$var$N_MOVES_PHASE2; m++){
                let new_perm = $1b871ace8beb414a$var$compose(perm, $1b871ace8beb414a$var$moves[m].mp);
                let new_eo_array = new_perm.slice(0, 5).map((x)=>+(x >= 6));
                let new_eo = 0;
                for(let i35 = 0; i35 < 5; i35++)new_eo += new_eo_array[i35] << i35;
                let new_co_array = co_array.map((x, i36)=>(x + $1b871ace8beb414a$var$moves[m].co[i36]) % 3);
                let new_co = 0;
                for(let i34 = 0; i34 < 4; i34++)new_co += new_co_array[i34] * 3 ** i34;
                mtable[eo + 32 * co][m] = new_eo + 32 * new_co;
            }
        }
    }
    return $1b871ace8beb414a$var$tables.phase2om = mtable;
}
function $1b871ace8beb414a$var$generate_phase2_permutation_ptable() {
    if ($1b871ace8beb414a$var$tables.phase2pp) return $1b871ace8beb414a$var$tables.phase2pp;
    return $1b871ace8beb414a$var$tables.phase2pp = $1b871ace8beb414a$var$bfs($1b871ace8beb414a$var$generate_phase2_permutation_mtable(), [
        0
    ]);
}
function $1b871ace8beb414a$var$generate_phase2_orientation_ptable() {
    if ($1b871ace8beb414a$var$tables.phase2op) return $1b871ace8beb414a$var$tables.phase2op;
    return $1b871ace8beb414a$var$tables.phase2op = $1b871ace8beb414a$var$bfs($1b871ace8beb414a$var$generate_phase2_orientation_mtable(), [
        0
    ]);
}
function $1b871ace8beb414a$var$bfs(mtable, goal_states) {
    let N = mtable.length;
    let nmoves = mtable[0].length;
    let ptable = Array(N).fill(-1);
    let queue = goal_states.slice(), new_queue = [];
    let depth = 0;
    while(queue.length > 0){
        new_queue.length = 0;
        for (let state of queue){
            if (ptable[state] !== -1) continue;
            ptable[state] = depth;
            for(let move_index = 0; move_index < nmoves; move_index++){
                let new_state = mtable[state][move_index];
                while(new_state != state){
                    new_queue.push(new_state);
                    new_state = mtable[new_state][move_index];
                }
            }
        }
        [queue, new_queue] = [
            new_queue,
            queue
        ];
        depth += 1;
    }
    return ptable;
}
function* $1b871ace8beb414a$var$ida_solve_gen(indices, mtables, ptables, moves_left) {
    let ncoords = indices.length;
    let bound = 0;
    for(let i37 = 0; i37 < ncoords; i37++)bound = Math.max(bound, ptables[i37][indices[i37]]);
    while(bound <= moves_left){
        yield* $1b871ace8beb414a$var$ida_search_gen(indices, mtables, ptables, bound, -1);
        bound++;
    }
}
function* $1b871ace8beb414a$var$ida_search_gen(indices, mtables, ptables, bound, last) {
    let ncoords = indices.length;
    let nmoves = mtables[0][0].length;
    let heuristic = 0;
    for(let i38 = 0; i38 < ncoords; i38++)heuristic = Math.max(heuristic, ptables[i38][indices[i38]]);
    if (heuristic > bound) return;
    if (bound === 0) {
        yield [];
        return;
    }
    if (heuristic === 0 && bound === 1) return;
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
        if (m < last && $1b871ace8beb414a$var$moves_commute(m, last)) continue;
        let new_indices = indices.slice();
        for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][indices[c]][m];
        let r = 1;
        while(indices.some((_, i39)=>indices[i39] != new_indices[i39])){
            let subpath_gen = $1b871ace8beb414a$var$ida_search_gen(new_indices, mtables, ptables, bound - 1, m);
            while(true){
                let { value: subpath , done: done  } = subpath_gen.next();
                if (done) break;
                yield [
                    [
                        m,
                        r
                    ]
                ].concat(subpath);
            }
            for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][new_indices[c]][m];
            r++;
        }
    }
}
var $1b871ace8beb414a$var$randomUintBelow = (0, $8mjCn.randomUIntBelowFactory)();
async function $1b871ace8beb414a$export$6901d40b4773ed59() {
    return $1b871ace8beb414a$var$generate_scramble_sequence(await $1b871ace8beb414a$var$randomUintBelow, false);
}

});


//# sourceMappingURL=master_tetraminx-solver-QSJNGET5.2399ec73.js.map
