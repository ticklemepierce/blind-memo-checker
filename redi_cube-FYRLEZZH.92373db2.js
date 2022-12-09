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
parcelRequire.register("3kcgo", function(module, exports) {

$parcel$export(module.exports, "getRandomRediCubeScramble", () => $26bcc09ad291ba6e$export$92a6ffa83a3d1847);

var $8mjCn = parcelRequire("8mjCn");

var $7TbMZ = parcelRequire("7TbMZ");
parcelRequire("hJBlP");
"use strict";
"use strict";
// src/cubing/vendor/xyzzy/redi_cube.js
function $26bcc09ad291ba6e$var$factorial(n) {
    if (n < 2) return n;
    let f = 1;
    for(let i = 2; i <= n; i++)f *= i;
    return f;
}
function $26bcc09ad291ba6e$var$C(n, k) {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    let c = 1;
    for(let i = 0; i < k; i++)c = c * (n - i) / (i + 1) | 0;
    return c;
}
function $26bcc09ad291ba6e$var$permutation_to_index(perm) {
    perm = perm.slice();
    let n = perm.length;
    let f = $26bcc09ad291ba6e$var$factorial(n - 1);
    let ind = 0;
    while(n > 1){
        n--;
        let e = perm[0];
        ind += e * f;
        for(let i = 0; i < n; i++){
            let x = perm[i + 1];
            perm[i] = x - (x > e);
        }
        f /= n;
    }
    return ind;
}
function $26bcc09ad291ba6e$var$index_to_permutation(ind, n) {
    let perm = [];
    let f = $26bcc09ad291ba6e$var$factorial(n - 1);
    for(let i = 0; i < n; i++){
        perm[i] = ind / f | 0;
        ind %= f;
        f /= n - 1 - i;
    }
    for(let i1 = n - 2; i1 >= 0; i1--)for(let j = i1 + 1; j < n; j++)perm[j] += +(perm[j] >= perm[i1]);
    return perm;
}
function $26bcc09ad291ba6e$var$permutation_parity(A) {
    let n = A.length;
    let parity = 0;
    for(let i = 0; i < n - 1; i++){
        for(let j = i; j < n; j++)if (A[i] > A[j]) parity ^= 1;
    }
    return parity;
}
function $26bcc09ad291ba6e$var$index_to_evenpermutation(ind, n) {
    let perm = [];
    let f = $26bcc09ad291ba6e$var$factorial(n - 1) / 2;
    let parity = 0;
    for(let i = 0; i < n - 1; i++){
        perm[i] = ind / f | 0;
        ind %= f;
        f /= n - 1 - i;
    }
    perm[n - 1] = 0;
    for(let i2 = n - 2; i2 >= 0; i2--){
        for(let j = i2 + 1; j < n; j++)if (perm[j] >= perm[i2]) perm[j]++;
        else parity ^= 1;
    }
    if (parity === 1) [perm[n - 2], perm[n - 1]] = [
        perm[n - 1],
        perm[n - 2]
    ];
    return perm;
}
function $26bcc09ad291ba6e$var$evenpermutation_to_index(perm) {
    return $26bcc09ad291ba6e$var$permutation_to_index(perm) >> 1;
}
function $26bcc09ad291ba6e$var$comb_to_index(l) {
    let bits = l.length;
    let ones = 0;
    for(let i = 0; i < bits; i++)ones += +(l[i] === 1);
    let zeros = bits - ones;
    if (zeros === 0 || ones === 0 || bits === 1) return 0;
    let b = $26bcc09ad291ba6e$var$C(bits - 1, ones);
    let ind = 0;
    for(let i3 = 0; zeros > 0 && ones > 0 && bits > 1; i3++){
        bits--;
        if (l[i3] === 0) b = b * --zeros / bits;
        else {
            ind += b;
            b = b * ones-- / bits;
        }
    }
    return ind;
}
function $26bcc09ad291ba6e$var$index_to_comb(ind, ones, bits) {
    let zeros = bits - ones;
    let b = $26bcc09ad291ba6e$var$C(bits - 1, ones);
    let l = [];
    let n = bits - 1;
    for(let i = 0; i < n; i++){
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
function $26bcc09ad291ba6e$var$compose(A, B) {
    let C2 = [];
    for(let i = 0; i < B.length; i++)C2[i] = A[B[i]];
    return C2;
}
function $26bcc09ad291ba6e$var$permutation_from_cycle(cycle, n) {
    let perm = [];
    for(let i = 0; i < n; i++)perm[i] = i;
    for(let i4 = 0; i4 < cycle.length; i4++)perm[cycle[i4]] = cycle[(i4 + 1) % cycle.length];
    return perm;
}
function $26bcc09ad291ba6e$var$unsparsify_list(d, n) {
    let l = Array(n).fill(0);
    for(let k in d)l[k] = d[k];
    return l;
}
function $26bcc09ad291ba6e$var$compose_state(state1, state2) {
    let o = Array(8).fill(0);
    for(let i = 0; i < 8; i++)o[i] = (state1[1][i] + state2[1][i]) % 3;
    return [
        $26bcc09ad291ba6e$var$compose(state1[0], state2[0]),
        o
    ];
}
var $26bcc09ad291ba6e$var$move_UL = [
    $26bcc09ad291ba6e$var$permutation_from_cycle([
        0,
        1,
        4
    ], 12),
    $26bcc09ad291ba6e$var$unsparsify_list({
        0: 2
    }, 8)
];
var $26bcc09ad291ba6e$var$move_U = [
    $26bcc09ad291ba6e$var$permutation_from_cycle([
        1,
        2,
        5
    ], 12),
    $26bcc09ad291ba6e$var$unsparsify_list({
        1: 2
    }, 8)
];
var $26bcc09ad291ba6e$var$move_UR = [
    $26bcc09ad291ba6e$var$permutation_from_cycle([
        2,
        3,
        6
    ], 12),
    $26bcc09ad291ba6e$var$unsparsify_list({
        2: 2
    }, 8)
];
var $26bcc09ad291ba6e$var$move_F = [
    $26bcc09ad291ba6e$var$permutation_from_cycle([
        3,
        0,
        7
    ], 12),
    $26bcc09ad291ba6e$var$unsparsify_list({
        3: 2
    }, 8)
];
var $26bcc09ad291ba6e$var$move_L = [
    $26bcc09ad291ba6e$var$permutation_from_cycle([
        9,
        8,
        4
    ], 12),
    $26bcc09ad291ba6e$var$unsparsify_list({
        4: 2
    }, 8)
];
var $26bcc09ad291ba6e$var$move_B = [
    $26bcc09ad291ba6e$var$permutation_from_cycle([
        10,
        9,
        5
    ], 12),
    $26bcc09ad291ba6e$var$unsparsify_list({
        5: 2
    }, 8)
];
var $26bcc09ad291ba6e$var$move_R = [
    $26bcc09ad291ba6e$var$permutation_from_cycle([
        11,
        10,
        6
    ], 12),
    $26bcc09ad291ba6e$var$unsparsify_list({
        6: 2
    }, 8)
];
var $26bcc09ad291ba6e$var$move_D = [
    $26bcc09ad291ba6e$var$permutation_from_cycle([
        8,
        11,
        7
    ], 12),
    $26bcc09ad291ba6e$var$unsparsify_list({
        7: 2
    }, 8)
];
var $26bcc09ad291ba6e$var$solved = [
    $26bcc09ad291ba6e$var$index_to_permutation(0, 12),
    Array(8).fill(0)
];
var $26bcc09ad291ba6e$var$moves = [
    $26bcc09ad291ba6e$var$move_UL,
    $26bcc09ad291ba6e$var$move_U,
    $26bcc09ad291ba6e$var$move_UR,
    $26bcc09ad291ba6e$var$move_F,
    $26bcc09ad291ba6e$var$move_L,
    $26bcc09ad291ba6e$var$move_B,
    $26bcc09ad291ba6e$var$move_R,
    $26bcc09ad291ba6e$var$move_D
];
var $26bcc09ad291ba6e$var$move_names = [
    "UL",
    "U",
    "UR",
    "F",
    "L",
    "B",
    "R",
    "D"
];
var $26bcc09ad291ba6e$var$tetrad = [
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    0
];
function $26bcc09ad291ba6e$var$stringify_move_sequence(move_sequence) {
    let suffixes = [
        "0",
        "",
        "'"
    ];
    let s = move_sequence.map(([m, r])=>$26bcc09ad291ba6e$var$move_names[m] + suffixes[r]);
    return s.join(" ");
}
function $26bcc09ad291ba6e$var$generate_random_state(randomUintBelow2) {
    let p = $26bcc09ad291ba6e$var$index_to_evenpermutation(Math.floor(randomUintBelow2($26bcc09ad291ba6e$var$factorial(12)) / 2), 12);
    let o = Array(8);
    for(let i = 0; i < 8; i++)o[i] = randomUintBelow2(3);
    return [
        p,
        o
    ];
}
function $26bcc09ad291ba6e$var$generate_random_state_scramble(randomUintBelow2) {
    return $26bcc09ad291ba6e$var$solve($26bcc09ad291ba6e$var$generate_random_state(randomUintBelow2));
}
function $26bcc09ad291ba6e$var$solve(state) {
    let phase1_indices = $26bcc09ad291ba6e$var$index_phase1(state);
    let phase1_mtables = [
        $26bcc09ad291ba6e$var$generate_phase1_edge_mtable(),
        $26bcc09ad291ba6e$var$generate_phase1_separate_mtable()
    ];
    let phase1_ptables = [
        $26bcc09ad291ba6e$var$generate_phase1_edge_ptable(),
        $26bcc09ad291ba6e$var$generate_phase1_separate_ptable()
    ];
    let phase2_mtables = [
        $26bcc09ad291ba6e$var$generate_phase2_edge_mtable(),
        $26bcc09ad291ba6e$var$generate_phase2_corner_mtable()
    ];
    let phase2_ptables = [
        $26bcc09ad291ba6e$var$generate_phase2_edge_ptable(),
        $26bcc09ad291ba6e$var$generate_phase1_corner_ptable()
    ];
    let phase1gen = $26bcc09ad291ba6e$var$ida_solve_gen(phase1_indices, phase1_mtables, phase1_ptables);
    let best = void 0;
    let intermediate_states = /* @__PURE__ */ new Set();
    let start_time = +new Date();
    for(let i = 0; i < 25; i++){
        let { value: sol1 , done: done  } = phase1gen.next();
        let new_state = state;
        for (let [m, r] of sol1)for(let i2 = 0; i2 < r; i2++)new_state = $26bcc09ad291ba6e$var$compose_state(new_state, $26bcc09ad291ba6e$var$moves[m]);
        if (intermediate_states.has(new_state.toString())) continue;
        else intermediate_states.add(new_state.toString());
        let edge_ind = $26bcc09ad291ba6e$var$evenpermutation_to_index(new_state[0].slice(0, 8));
        let corner_ind = 0;
        for(let i21 = 0; i21 < 4; i21++)corner_ind += new_state[1][i21] * 3 ** i21;
        let phase2_indices = [
            edge_ind,
            corner_ind
        ];
        let moves_left = best ? best.length - sol1.length - 1 : 999999;
        let sol2 = $26bcc09ad291ba6e$var$ida_solve(phase2_indices, phase2_mtables, phase2_ptables, moves_left);
        if (sol2 === void 0) continue;
        if (best === void 0 || best.length > sol1.length + sol2.length) best = sol1.concat(sol2);
        if (new Date() - start_time > 300) break;
    }
    return best;
}
function $26bcc09ad291ba6e$var$index_phase1(state) {
    let edge_ind = 0;
    for(let i = 0; i < 4; i++)edge_ind += state[0].indexOf(i + 8) * 12 ** i;
    let corner_ind = 0;
    for(let i5 = 0; i5 < 4; i5++)corner_ind += state[1][i5 + 4] * 3 ** i5;
    let filtered = state[0].map((x)=>Math.max(-1, x - 8));
    let separate_ind = $26bcc09ad291ba6e$var$comb_to_index(filtered.map((x)=>+(x >= 0))) * 2 + $26bcc09ad291ba6e$var$permutation_parity(filtered.filter((x)=>x >= 0));
    return [
        edge_ind,
        corner_ind + 81 * separate_ind
    ];
}
var $26bcc09ad291ba6e$var$tables = {};
function $26bcc09ad291ba6e$var$generate_phase1_corner_mtable() {
    if ($26bcc09ad291ba6e$var$tables.phase1cm) return $26bcc09ad291ba6e$var$tables.phase1cm;
    let mtable = [];
    for(let i = 0; i < 81; i++){
        mtable[i] = Array(8);
        let o = [
            i % 3,
            Math.floor(i / 3) % 3,
            Math.floor(i / 9) % 3,
            Math.floor(i / 27)
        ];
        mtable[i][0] = mtable[i][1] = mtable[i][2] = mtable[i][3] = i;
        for(let j = 0; j < 4; j++){
            o[j] = (o[j] + 2) % 3;
            mtable[i][4 + j] = o[0] + o[1] * 3 + o[2] * 9 + o[3] * 27;
            o[j] = (o[j] + 1) % 3;
        }
    }
    return $26bcc09ad291ba6e$var$tables.phase1cm = mtable;
}
function $26bcc09ad291ba6e$var$generate_phase1_corner_ptable() {
    if ($26bcc09ad291ba6e$var$tables.phase1cp) return $26bcc09ad291ba6e$var$tables.phase1cp;
    let ptable = Array(81);
    for(let i = 0; i < 81; i++){
        let o = [
            i % 3,
            Math.floor(i / 3) % 3,
            Math.floor(i / 9) % 3,
            Math.floor(i / 27)
        ];
        ptable[i] = (o[0] !== 0) + (o[1] !== 0) + (o[2] !== 0) + (o[3] !== 0);
    }
    return $26bcc09ad291ba6e$var$tables.phase1cp = ptable;
}
function $26bcc09ad291ba6e$var$generate_phase1_edge_mtable() {
    if ($26bcc09ad291ba6e$var$tables.phase1em) return $26bcc09ad291ba6e$var$tables.phase1em;
    let mtable_single = [];
    for(let i = 0; i < 12; i++){
        mtable_single[i] = [];
        for(let m = 0; m < 8; m++)mtable_single[i][m] = $26bcc09ad291ba6e$var$moves[m][0].indexOf(i);
    }
    let mtable = Array(20736);
    for(let i6 = 0; i6 < 20736; i6++){
        mtable[i6] = Array(8);
        for(let m = 0; m < 8; m++){
            let I = 0;
            for(let j = 0; j < 4; j++)I += mtable_single[Math.floor(i6 / 12 ** j) % 12][m] * 12 ** j;
            mtable[i6][m] = I;
        }
    }
    return $26bcc09ad291ba6e$var$tables.phase1em = mtable;
}
function $26bcc09ad291ba6e$var$generate_phase1_edge_ptable() {
    if ($26bcc09ad291ba6e$var$tables.phase1ep) return $26bcc09ad291ba6e$var$tables.phase1ep;
    return $26bcc09ad291ba6e$var$tables.phase1ep = $26bcc09ad291ba6e$var$bfs($26bcc09ad291ba6e$var$generate_phase1_edge_mtable(), [
        20564
    ]);
}
function $26bcc09ad291ba6e$var$generate_phase1_separate_mtable() {
    if ($26bcc09ad291ba6e$var$tables.phase1sm) return $26bcc09ad291ba6e$var$tables.phase1sm;
    const C12_4 = $26bcc09ad291ba6e$var$C(12, 4);
    let mtable_c = [];
    for(let i = 0; i < C12_4; i++){
        mtable_c[i] = [];
        let comb = $26bcc09ad291ba6e$var$index_to_comb(i, 4, 12), perm = [];
        for(let j = 0, k = 0; j < 12; j++)if (comb[j] === 0) perm[j] = -1;
        else perm[j] = k++;
        for(let m = 0; m < 8; m++){
            let new_perm = $26bcc09ad291ba6e$var$compose(perm, $26bcc09ad291ba6e$var$moves[m][0]);
            let new_comb = $26bcc09ad291ba6e$var$compose(comb, $26bcc09ad291ba6e$var$moves[m][0]);
            let parity = $26bcc09ad291ba6e$var$permutation_parity(new_perm.filter((x)=>x >= 0));
            mtable_c[i][m] = $26bcc09ad291ba6e$var$comb_to_index(new_comb) * 2 + parity;
        }
    }
    let mtable_co = $26bcc09ad291ba6e$var$generate_phase1_corner_mtable();
    let mtable = [];
    for(let j = 0; j < C12_4; j++)for(let i7 = 0; i7 < 81; i7++){
        let m0 = mtable[i7 + 81 * (2 * j)] = [];
        let m1 = mtable[i7 + 81 * (2 * j + 1)] = [];
        for(let m = 0; m < 8; m++){
            m0[m] = mtable_co[i7][m] + 81 * mtable_c[j][m];
            m1[m] = mtable_co[i7][m] + 81 * (mtable_c[j][m] ^ 1);
        }
    }
    return $26bcc09ad291ba6e$var$tables.phase1sm = mtable;
}
function $26bcc09ad291ba6e$var$generate_phase1_separate_ptable() {
    if ($26bcc09ad291ba6e$var$tables.phase1sp) return $26bcc09ad291ba6e$var$tables.phase1sp;
    return $26bcc09ad291ba6e$var$tables.phase1sp = $26bcc09ad291ba6e$var$bfs($26bcc09ad291ba6e$var$generate_phase1_separate_mtable(), [
        0
    ]);
}
function $26bcc09ad291ba6e$var$generate_phase2_corner_mtable() {
    if ($26bcc09ad291ba6e$var$tables.phase2cm) return $26bcc09ad291ba6e$var$tables.phase2cm;
    let phase1_mtable = $26bcc09ad291ba6e$var$generate_phase1_corner_mtable();
    let mtable = Array(81);
    for(let i = 0; i < 81; i++)mtable[i] = phase1_mtable[i].slice(4, 8);
    return $26bcc09ad291ba6e$var$tables.phase2cm = mtable;
}
function $26bcc09ad291ba6e$var$generate_phase2_edge_mtable() {
    if ($26bcc09ad291ba6e$var$tables.phase2em) return $26bcc09ad291ba6e$var$tables.phase2em;
    const n = 8;
    const HALFFACT8 = $26bcc09ad291ba6e$var$factorial(n) / 2;
    let mtable = Array(HALFFACT8);
    let perm = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ];
    for(let i = 0; i < HALFFACT8; i++){
        mtable[i] = Array(4);
        for(let m = 0; m < 4; m++){
            let new_perm = $26bcc09ad291ba6e$var$compose(perm, $26bcc09ad291ba6e$var$moves[m][0].slice(0, 8));
            mtable[i][m] = $26bcc09ad291ba6e$var$evenpermutation_to_index(new_perm);
        }
        if (i === HALFFACT8 - 1) break;
        let parity = 0;
        do for(let k = n - 2; k >= 0; k--){
            if (perm[k] > perm[k + 1]) continue;
            let l = k + 1;
            for(let L = l; L < n; L++)if (perm[L] > perm[k]) l = L;
            [perm[k], perm[l]] = [
                perm[l],
                perm[k]
            ];
            parity ^= 1;
            for(let j = 0; k + 1 + j < n - 1 - j; j++, parity ^= 1)[perm[k + 1 + j], perm[n - 1 - j]] = [
                perm[n - 1 - j],
                perm[k + 1 + j]
            ];
            break;
        }
        while (parity !== 0);
    }
    return $26bcc09ad291ba6e$var$tables.phase2em = mtable;
}
function $26bcc09ad291ba6e$var$generate_phase2_edge_ptable() {
    if ($26bcc09ad291ba6e$var$tables.phase2ep) return $26bcc09ad291ba6e$var$tables.phase2ep;
    return $26bcc09ad291ba6e$var$tables.phase2ep = $26bcc09ad291ba6e$var$bfs($26bcc09ad291ba6e$var$generate_phase2_edge_mtable(), [
        0
    ]);
}
function $26bcc09ad291ba6e$var$bfs(mtable, goal_states) {
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
function $26bcc09ad291ba6e$var$ida_solve(indices, mtables, ptables, max_bound) {
    max_bound = max_bound || 999999;
    let ncoords = indices.length;
    let bound = 0;
    for(let i = 0; i < ncoords; i++)bound = Math.max(bound, ptables[i][indices[i]]);
    while(bound <= max_bound){
        let path = $26bcc09ad291ba6e$var$ida_search(indices, mtables, ptables, bound, -1);
        if (path !== void 0) return path;
        bound++;
    }
}
function $26bcc09ad291ba6e$var$ida_search(indices, mtables, ptables, bound, last) {
    let ncoords = indices.length;
    let nmoves = mtables[0][0].length;
    let heuristic = 0;
    for(let i8 = 0; i8 < ncoords; i8++)heuristic = Math.max(heuristic, ptables[i8][indices[i8]]);
    if (heuristic > bound) return;
    if (bound === 0) return [];
    if (heuristic === 0 && bound === 1) return;
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
        if (m < last && $26bcc09ad291ba6e$var$tetrad[m] == $26bcc09ad291ba6e$var$tetrad[last]) continue;
        let new_indices = indices.slice();
        for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][indices[c]][m];
        let r = 1;
        while(indices.some((_, i)=>indices[i] != new_indices[i])){
            let subpath = $26bcc09ad291ba6e$var$ida_search(new_indices, mtables, ptables, bound - 1, m);
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
function* $26bcc09ad291ba6e$var$ida_solve_gen(indices, mtables, ptables) {
    let ncoords = indices.length;
    let bound = 0;
    for(let i = 0; i < ncoords; i++)bound = Math.max(bound, ptables[i][indices[i]]);
    while(true){
        yield* $26bcc09ad291ba6e$var$ida_search_gen(indices, mtables, ptables, bound, -1);
        bound++;
    }
}
function* $26bcc09ad291ba6e$var$ida_search_gen(indices, mtables, ptables, bound, last) {
    let ncoords = indices.length;
    let nmoves = mtables[0][0].length;
    let heuristic = 0;
    for(let i9 = 0; i9 < ncoords; i9++)heuristic = Math.max(heuristic, ptables[i9][indices[i9]]);
    if (heuristic > bound) return;
    if (bound === 0) {
        yield [];
        return;
    }
    if (heuristic === 0 && bound === 1) return;
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
        if (m < last && $26bcc09ad291ba6e$var$tetrad[m] == $26bcc09ad291ba6e$var$tetrad[last]) continue;
        let new_indices = indices.slice();
        for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][indices[c]][m];
        let r = 1;
        while(indices.some((_, i)=>indices[i] != new_indices[i])){
            let subpath_gen = $26bcc09ad291ba6e$var$ida_search_gen(new_indices, mtables, ptables, bound - 1, m);
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
var $26bcc09ad291ba6e$var$randomUintBelow = (0, $8mjCn.randomUIntBelowFactory)();
async function $26bcc09ad291ba6e$export$92a6ffa83a3d1847() {
    return new (0, $7TbMZ.Alg)($26bcc09ad291ba6e$var$stringify_move_sequence($26bcc09ad291ba6e$var$generate_random_state_scramble(await $26bcc09ad291ba6e$var$randomUintBelow)));
}

});


//# sourceMappingURL=redi_cube-FYRLEZZH.92373db2.js.map
