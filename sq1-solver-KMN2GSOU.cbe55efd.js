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
parcelRequire.register("5SUzi", function(module, exports) {

$parcel$export(module.exports, "getRandomSquare1ScrambleString", () => $448de0341b502897$export$bc38e74fa16ad038);

var $8mjCn = parcelRequire("8mjCn");
parcelRequire("hJBlP");
// src/cubing/vendor/sq12phase/sq1-solver.js
function $448de0341b502897$var$FullCube_copy(obj, c) {
    obj.ul = c.ul;
    obj.ur = c.ur;
    obj.dl = c.dl;
    obj.dr = c.dr;
    obj.ml = c.ml;
}
function $448de0341b502897$var$FullCube_doMove(obj, move) {
    var temp;
    move <<= 2;
    if (move > 24) {
        move = 48 - move;
        temp = obj.ul;
        obj.ul = (~~obj.ul >> move | obj.ur << 24 - move) & 16777215;
        obj.ur = (~~obj.ur >> move | temp << 24 - move) & 16777215;
    } else if (move > 0) {
        temp = obj.ul;
        obj.ul = (obj.ul << move | ~~obj.ur >> 24 - move) & 16777215;
        obj.ur = (obj.ur << move | ~~temp >> 24 - move) & 16777215;
    } else if (move == 0) {
        temp = obj.ur;
        obj.ur = obj.dl;
        obj.dl = temp;
        obj.ml = 1 - obj.ml;
    } else if (move >= -24) {
        move = -move;
        temp = obj.dl;
        obj.dl = (obj.dl << move | ~~obj.dr >> 24 - move) & 16777215;
        obj.dr = (obj.dr << move | ~~temp >> 24 - move) & 16777215;
    } else if (move < -24) {
        move = 48 + move;
        temp = obj.dl;
        obj.dl = (~~obj.dl >> move | obj.dr << 24 - move) & 16777215;
        obj.dr = (~~obj.dr >> move | temp << 24 - move) & 16777215;
    }
}
function $448de0341b502897$var$FullCube_getParity(obj) {
    var a, b, cnt, i, p;
    cnt = 0;
    obj.arr[0] = $448de0341b502897$var$FullCube_pieceAt(obj, 0);
    for(i = 1; i < 24; ++i)$448de0341b502897$var$FullCube_pieceAt(obj, i) != obj.arr[cnt] && (obj.arr[++cnt] = $448de0341b502897$var$FullCube_pieceAt(obj, i));
    p = 0;
    for(a = 0; a < 16; ++a)for(b = a + 1; b < 16; ++b)obj.arr[a] > obj.arr[b] && (p ^= 1);
    return p;
}
function $448de0341b502897$var$FullCube_getShapeIdx(obj) {
    var dlx, drx, ulx, urx;
    urx = obj.ur & 1118481;
    urx |= ~~urx >> 3;
    urx |= ~~urx >> 6;
    urx = urx & 15 | ~~urx >> 12 & 48;
    ulx = obj.ul & 1118481;
    ulx |= ~~ulx >> 3;
    ulx |= ~~ulx >> 6;
    ulx = ulx & 15 | ~~ulx >> 12 & 48;
    drx = obj.dr & 1118481;
    drx |= ~~drx >> 3;
    drx |= ~~drx >> 6;
    drx = drx & 15 | ~~drx >> 12 & 48;
    dlx = obj.dl & 1118481;
    dlx |= ~~dlx >> 3;
    dlx |= ~~dlx >> 6;
    dlx = dlx & 15 | ~~dlx >> 12 & 48;
    return $448de0341b502897$var$Shape_getShape2Idx($448de0341b502897$var$FullCube_getParity(obj) << 24 | ulx << 18 | urx << 12 | dlx << 6 | drx);
}
function $448de0341b502897$var$FullCube_getSquare(obj, sq) {
    var a, b;
    for(a = 0; a < 8; ++a)obj.prm[a] = ~~(~~$448de0341b502897$var$FullCube_pieceAt(obj, a * 3 + 1) >> 1 << 24) >> 24;
    sq.cornperm = $448de0341b502897$var$get8Perm(obj.prm);
    sq.topEdgeFirst = $448de0341b502897$var$FullCube_pieceAt(obj, 0) == $448de0341b502897$var$FullCube_pieceAt(obj, 1);
    a = sq.topEdgeFirst ? 2 : 0;
    for(b = 0; b < 4; a += 3, ++b)obj.prm[b] = ~~(~~$448de0341b502897$var$FullCube_pieceAt(obj, a) >> 1 << 24) >> 24;
    sq.botEdgeFirst = $448de0341b502897$var$FullCube_pieceAt(obj, 12) == $448de0341b502897$var$FullCube_pieceAt(obj, 13);
    a = sq.botEdgeFirst ? 14 : 12;
    for(; b < 8; a += 3, ++b)obj.prm[b] = ~~(~~$448de0341b502897$var$FullCube_pieceAt(obj, a) >> 1 << 24) >> 24;
    sq.edgeperm = $448de0341b502897$var$get8Perm(obj.prm);
    sq.ml = obj.ml;
}
function $448de0341b502897$var$FullCube_pieceAt(obj, idx) {
    var ret;
    idx < 6 ? ret = ~~obj.ul >> (5 - idx << 2) : idx < 12 ? ret = ~~obj.ur >> (11 - idx << 2) : idx < 18 ? ret = ~~obj.dl >> (17 - idx << 2) : ret = ~~obj.dr >> (23 - idx << 2);
    return ~~((ret & 15) << 24) >> 24;
}
function $448de0341b502897$var$FullCube_setPiece(obj, idx, value) {
    if (idx < 6) {
        obj.ul &= ~(15 << (5 - idx << 2));
        obj.ul |= value << (5 - idx << 2);
    } else if (idx < 12) {
        obj.ur &= ~(15 << (11 - idx << 2));
        obj.ur |= value << (11 - idx << 2);
    } else if (idx < 18) {
        obj.dl &= ~(15 << (17 - idx << 2));
        obj.dl |= value << (17 - idx << 2);
    } else {
        obj.dr &= ~(15 << (23 - idx << 2));
        obj.dr |= value << (23 - idx << 2);
    }
}
function $448de0341b502897$var$FullCube_FullCube__Ljava_lang_String_2V() {
    this.arr = [];
    this.prm = [];
}
async function $448de0341b502897$var$FullCube_randomCube() {
    const randomUintBelow = await (0, $8mjCn.randomUIntBelowFactory)();
    var f, i, shape, edge, corner, n_edge, n_corner, rnd, m;
    f = new $448de0341b502897$var$FullCube_FullCube__Ljava_lang_String_2V();
    shape = $448de0341b502897$var$Shape_ShapeIdx[randomUintBelow(3678)];
    corner = 324508639;
    edge = 38177486;
    n_corner = n_edge = 8;
    for(i = 0; i < 24; i++)if ((shape >> i & 1) == 0) {
        rnd = randomUintBelow(n_edge) << 2;
        $448de0341b502897$var$FullCube_setPiece(f, 23 - i, edge >> rnd & 15);
        m = (1 << rnd) - 1;
        edge = (edge & m) + (edge >> 4 & ~m);
        --n_edge;
    } else {
        rnd = randomUintBelow(n_corner) << 2;
        $448de0341b502897$var$FullCube_setPiece(f, 23 - i, corner >> rnd & 15);
        $448de0341b502897$var$FullCube_setPiece(f, 22 - i, corner >> rnd & 15);
        m = (1 << rnd) - 1;
        corner = (corner & m) + (corner >> 4 & ~m);
        --n_corner;
        ++i;
    }
    f.ml = randomUintBelow(2);
    return f;
}
function $448de0341b502897$var$FullCube() {}
var $448de0341b502897$var$_ = $448de0341b502897$var$FullCube_FullCube__Ljava_lang_String_2V.prototype = $448de0341b502897$var$FullCube.prototype;
$448de0341b502897$var$_.dl = 10062778;
$448de0341b502897$var$_.dr = 14536702;
$448de0341b502897$var$_.ml = 0;
$448de0341b502897$var$_.ul = 70195;
$448de0341b502897$var$_.ur = 4544119;
function $448de0341b502897$var$Search_init2(obj) {
    var corner, edge, i, j, ml, prun;
    $448de0341b502897$var$FullCube_copy(obj.Search_d, obj.Search_c);
    for(i = 0; i < obj.Search_length1; ++i)$448de0341b502897$var$FullCube_doMove(obj.Search_d, obj.Search_move[i]);
    $448de0341b502897$var$FullCube_getSquare(obj.Search_d, obj.Search_sq);
    edge = obj.Search_sq.edgeperm;
    corner = obj.Search_sq.cornperm;
    ml = obj.Search_sq.ml;
    prun = Math.max($448de0341b502897$var$SquarePrun[obj.Search_sq.edgeperm << 1 | ml], $448de0341b502897$var$SquarePrun[obj.Search_sq.cornperm << 1 | ml]);
    for(i = prun; i < obj.Search_maxlen2; ++i)if ($448de0341b502897$var$Search_phase2(obj, edge, corner, obj.Search_sq.topEdgeFirst, obj.Search_sq.botEdgeFirst, ml, i, obj.Search_length1, 0)) {
        for(j = 0; j < i; ++j)$448de0341b502897$var$FullCube_doMove(obj.Search_d, obj.Search_move[obj.Search_length1 + j]);
        obj.Search_sol_string = $448de0341b502897$var$Search_move2string(obj, i + obj.Search_length1);
        return true;
    }
    return false;
}
function $448de0341b502897$var$Search_move2string(obj, len) {
    var s = "";
    var top = 0, bottom = 0;
    for(var i = len - 1; i >= 0; i--){
        var val = obj.Search_move[i];
        if (val > 0) {
            val = 12 - val;
            top = val > 6 ? val - 12 : val;
        } else if (val < 0) {
            val = 12 + val;
            bottom = val > 6 ? val - 12 : val;
        } else {
            if (top == 0 && bottom == 0) s += " / ";
            else s += "(" + top + ", " + bottom + ") / ";
            top = bottom = 0;
        }
    }
    if (top !== 0 || bottom !== 0) s += "(" + top + ", " + bottom + ")";
    return s;
}
function $448de0341b502897$var$Search_phase1(obj, shape, prunvalue, maxl, depth, lm) {
    var m, prunx, shapex;
    if (prunvalue == 0 && maxl < 4) return maxl == 0 && $448de0341b502897$var$Search_init2(obj);
    if (lm != 0) {
        shapex = $448de0341b502897$var$Shape_TwistMove[shape];
        prunx = $448de0341b502897$var$ShapePrun[shapex];
        if (prunx < maxl) {
            obj.Search_move[depth] = 0;
            if ($448de0341b502897$var$Search_phase1(obj, shapex, prunx, maxl - 1, depth + 1, 0)) return true;
        }
    }
    shapex = shape;
    if (lm <= 0) {
        m = 0;
        for(;;){
            m += $448de0341b502897$var$Shape_TopMove[shapex];
            shapex = ~~m >> 4;
            m &= 15;
            if (m >= 12) break;
            prunx = $448de0341b502897$var$ShapePrun[shapex];
            if (prunx > maxl) break;
            else if (prunx < maxl) {
                obj.Search_move[depth] = m;
                if ($448de0341b502897$var$Search_phase1(obj, shapex, prunx, maxl - 1, depth + 1, 1)) return true;
            }
        }
    }
    shapex = shape;
    if (lm <= 1) {
        m = 0;
        for(;;){
            m += $448de0341b502897$var$Shape_BottomMove[shapex];
            shapex = ~~m >> 4;
            m &= 15;
            if (m >= 6) break;
            prunx = $448de0341b502897$var$ShapePrun[shapex];
            if (prunx > maxl) break;
            else if (prunx < maxl) {
                obj.Search_move[depth] = -m;
                if ($448de0341b502897$var$Search_phase1(obj, shapex, prunx, maxl - 1, depth + 1, 2)) return true;
            }
        }
    }
    return false;
}
function $448de0341b502897$var$Search_phase2(obj, edge, corner, topEdgeFirst, botEdgeFirst, ml, maxl, depth, lm) {
    var botEdgeFirstx, cornerx, edgex, m, prun1, prun2, topEdgeFirstx;
    if (maxl == 0 && !topEdgeFirst && botEdgeFirst) return true;
    if (lm != 0 && topEdgeFirst == botEdgeFirst) {
        edgex = $448de0341b502897$var$Square_TwistMove[edge];
        cornerx = $448de0341b502897$var$Square_TwistMove[corner];
        if ($448de0341b502897$var$SquarePrun[edgex << 1 | 1 - ml] < maxl && $448de0341b502897$var$SquarePrun[cornerx << 1 | 1 - ml] < maxl) {
            obj.Search_move[depth] = 0;
            if ($448de0341b502897$var$Search_phase2(obj, edgex, cornerx, topEdgeFirst, botEdgeFirst, 1 - ml, maxl - 1, depth + 1, 0)) return true;
        }
    }
    if (lm <= 0) {
        topEdgeFirstx = !topEdgeFirst;
        edgex = topEdgeFirstx ? $448de0341b502897$var$Square_TopMove[edge] : edge;
        cornerx = topEdgeFirstx ? corner : $448de0341b502897$var$Square_TopMove[corner];
        m = topEdgeFirstx ? 1 : 2;
        prun1 = $448de0341b502897$var$SquarePrun[edgex << 1 | ml];
        prun2 = $448de0341b502897$var$SquarePrun[cornerx << 1 | ml];
        while(m < 12 && prun1 <= maxl && prun1 <= maxl){
            if (prun1 < maxl && prun2 < maxl) {
                obj.Search_move[depth] = m;
                if ($448de0341b502897$var$Search_phase2(obj, edgex, cornerx, topEdgeFirstx, botEdgeFirst, ml, maxl - 1, depth + 1, 1)) return true;
            }
            topEdgeFirstx = !topEdgeFirstx;
            if (topEdgeFirstx) {
                edgex = $448de0341b502897$var$Square_TopMove[edgex];
                prun1 = $448de0341b502897$var$SquarePrun[edgex << 1 | ml];
                m += 1;
            } else {
                cornerx = $448de0341b502897$var$Square_TopMove[cornerx];
                prun2 = $448de0341b502897$var$SquarePrun[cornerx << 1 | ml];
                m += 2;
            }
        }
    }
    if (lm <= 1) {
        botEdgeFirstx = !botEdgeFirst;
        edgex = botEdgeFirstx ? $448de0341b502897$var$Square_BottomMove[edge] : edge;
        cornerx = botEdgeFirstx ? corner : $448de0341b502897$var$Square_BottomMove[corner];
        m = botEdgeFirstx ? 1 : 2;
        prun1 = $448de0341b502897$var$SquarePrun[edgex << 1 | ml];
        prun2 = $448de0341b502897$var$SquarePrun[cornerx << 1 | ml];
        while(m < (maxl > 3 ? 6 : 12) && prun1 <= maxl && prun1 <= maxl){
            if (prun1 < maxl && prun2 < maxl) {
                obj.Search_move[depth] = -m;
                if ($448de0341b502897$var$Search_phase2(obj, edgex, cornerx, topEdgeFirst, botEdgeFirstx, ml, maxl - 1, depth + 1, 2)) return true;
            }
            botEdgeFirstx = !botEdgeFirstx;
            if (botEdgeFirstx) {
                edgex = $448de0341b502897$var$Square_BottomMove[edgex];
                prun1 = $448de0341b502897$var$SquarePrun[edgex << 1 | ml];
                m += 1;
            } else {
                cornerx = $448de0341b502897$var$Square_BottomMove[cornerx];
                prun2 = $448de0341b502897$var$SquarePrun[cornerx << 1 | ml];
                m += 2;
            }
        }
    }
    return false;
}
function $448de0341b502897$var$Search_solution(obj, c) {
    var shape;
    obj.Search_c = c;
    shape = $448de0341b502897$var$FullCube_getShapeIdx(c);
    for(obj.Search_length1 = $448de0341b502897$var$ShapePrun[shape]; obj.Search_length1 < 100; ++obj.Search_length1){
        obj.Search_maxlen2 = Math.min(31 - obj.Search_length1, 17);
        if ($448de0341b502897$var$Search_phase1(obj, shape, $448de0341b502897$var$ShapePrun[shape], obj.Search_length1, 0, -1)) break;
    }
    return obj.Search_sol_string;
}
function $448de0341b502897$var$Search_Search() {
    this.Search_move = [];
    this.Search_d = new $448de0341b502897$var$FullCube_FullCube__Ljava_lang_String_2V();
    this.Search_sq = new $448de0341b502897$var$Square_Square();
}
function $448de0341b502897$var$Search() {}
$448de0341b502897$var$_ = $448de0341b502897$var$Search_Search.prototype = $448de0341b502897$var$Search.prototype;
$448de0341b502897$var$_.Search_c = null;
$448de0341b502897$var$_.Search_length1 = 0;
$448de0341b502897$var$_.Search_maxlen2 = 0;
$448de0341b502897$var$_.Search_sol_string = null;
var $448de0341b502897$var$Shape_$clinit_ran = false;
function $448de0341b502897$var$Shape_$clinit() {
    if ($448de0341b502897$var$Shape_$clinit_ran) return;
    $448de0341b502897$var$Shape_$clinit_ran = true;
    $448de0341b502897$var$Shape_halflayer = [
        0,
        3,
        6,
        12,
        15,
        24,
        27,
        30,
        48,
        51,
        54,
        60,
        63
    ];
    $448de0341b502897$var$Shape_ShapeIdx = [];
    $448de0341b502897$var$ShapePrun = [];
    $448de0341b502897$var$Shape_TopMove = [];
    $448de0341b502897$var$Shape_BottomMove = [];
    $448de0341b502897$var$Shape_TwistMove = [];
    $448de0341b502897$var$Shape_init();
}
function $448de0341b502897$var$Shape_bottomMove(obj) {
    var move, moveParity;
    move = 0;
    moveParity = 0;
    do {
        if ((obj.bottom & 2048) == 0) {
            move += 1;
            obj.bottom = obj.bottom << 1;
        } else {
            move += 2;
            obj.bottom = obj.bottom << 2 ^ 12291;
        }
        moveParity = 1 - moveParity;
    }while (($448de0341b502897$var$bitCount(obj.bottom & 63) & 1) != 0);
    ($448de0341b502897$var$bitCount(obj.bottom) & 2) == 0 && (obj.Shape_parity ^= moveParity);
    return move;
}
function $448de0341b502897$var$Shape_getIdx(obj) {
    var ret;
    ret = $448de0341b502897$var$binarySearch($448de0341b502897$var$Shape_ShapeIdx, obj.top << 12 | obj.bottom) << 1 | obj.Shape_parity;
    return ret;
}
function $448de0341b502897$var$Shape_setIdx(obj, idx) {
    obj.Shape_parity = idx & 1;
    obj.top = $448de0341b502897$var$Shape_ShapeIdx[~~idx >> 1];
    obj.bottom = obj.top & 4095;
    obj.top >>= 12;
}
function $448de0341b502897$var$Shape_topMove(obj) {
    var move, moveParity;
    move = 0;
    moveParity = 0;
    do {
        if ((obj.top & 2048) == 0) {
            move += 1;
            obj.top = obj.top << 1;
        } else {
            move += 2;
            obj.top = obj.top << 2 ^ 12291;
        }
        moveParity = 1 - moveParity;
    }while (($448de0341b502897$var$bitCount(obj.top & 63) & 1) != 0);
    ($448de0341b502897$var$bitCount(obj.top) & 2) == 0 && (obj.Shape_parity ^= moveParity);
    return move;
}
function $448de0341b502897$var$Shape_Shape() {}
function $448de0341b502897$var$Shape_getShape2Idx(shp) {
    var ret;
    ret = $448de0341b502897$var$binarySearch($448de0341b502897$var$Shape_ShapeIdx, shp & 16777215) << 1 | ~~shp >> 24;
    return ret;
}
function $448de0341b502897$var$Shape_init() {
    var count, depth, dl, done, done0, dr, i, idx, m, s, ul, ur, value, p1, p3, temp;
    count = 0;
    for(i = 0; i < 28561; ++i){
        dr = $448de0341b502897$var$Shape_halflayer[i % 13];
        dl = $448de0341b502897$var$Shape_halflayer[~~(i / 13) % 13];
        ur = $448de0341b502897$var$Shape_halflayer[~~(~~(i / 13) / 13) % 13];
        ul = $448de0341b502897$var$Shape_halflayer[~~(~~(~~(i / 13) / 13) / 13)];
        value = ul << 18 | ur << 12 | dl << 6 | dr;
        $448de0341b502897$var$bitCount(value) == 16 && ($448de0341b502897$var$Shape_ShapeIdx[count++] = value);
    }
    s = new $448de0341b502897$var$Shape_Shape();
    for(i = 0; i < 7356; ++i){
        $448de0341b502897$var$Shape_setIdx(s, i);
        $448de0341b502897$var$Shape_TopMove[i] = $448de0341b502897$var$Shape_topMove(s);
        $448de0341b502897$var$Shape_TopMove[i] |= $448de0341b502897$var$Shape_getIdx(s) << 4;
        $448de0341b502897$var$Shape_setIdx(s, i);
        $448de0341b502897$var$Shape_BottomMove[i] = $448de0341b502897$var$Shape_bottomMove(s);
        $448de0341b502897$var$Shape_BottomMove[i] |= $448de0341b502897$var$Shape_getIdx(s) << 4;
        $448de0341b502897$var$Shape_setIdx(s, i);
        temp = s.top & 63;
        p1 = $448de0341b502897$var$bitCount(temp);
        p3 = $448de0341b502897$var$bitCount(s.bottom & 4032);
        s.Shape_parity ^= 1 & ~~(p1 & p3) >> 1;
        s.top = s.top & 4032 | ~~s.bottom >> 6 & 63;
        s.bottom = s.bottom & 63 | temp << 6;
        $448de0341b502897$var$Shape_TwistMove[i] = $448de0341b502897$var$Shape_getIdx(s);
    }
    for(i = 0; i < 7536; ++i)$448de0341b502897$var$ShapePrun[i] = -1;
    $448de0341b502897$var$ShapePrun[$448de0341b502897$var$Shape_getShape2Idx(14378715)] = 0;
    $448de0341b502897$var$ShapePrun[$448de0341b502897$var$Shape_getShape2Idx(31157686)] = 0;
    $448de0341b502897$var$ShapePrun[$448de0341b502897$var$Shape_getShape2Idx(23967451)] = 0;
    $448de0341b502897$var$ShapePrun[$448de0341b502897$var$Shape_getShape2Idx(7191990)] = 0;
    done = 4;
    done0 = 0;
    depth = -1;
    while(done != done0){
        done0 = done;
        ++depth;
        for(i = 0; i < 7536; ++i)if ($448de0341b502897$var$ShapePrun[i] == depth) {
            m = 0;
            idx = i;
            do {
                idx = $448de0341b502897$var$Shape_TopMove[idx];
                m += idx & 15;
                idx >>= 4;
                if ($448de0341b502897$var$ShapePrun[idx] == -1) {
                    ++done;
                    $448de0341b502897$var$ShapePrun[idx] = depth + 1;
                }
            }while (m != 12);
            m = 0;
            idx = i;
            do {
                idx = $448de0341b502897$var$Shape_BottomMove[idx];
                m += idx & 15;
                idx >>= 4;
                if ($448de0341b502897$var$ShapePrun[idx] == -1) {
                    ++done;
                    $448de0341b502897$var$ShapePrun[idx] = depth + 1;
                }
            }while (m != 12);
            idx = $448de0341b502897$var$Shape_TwistMove[i];
            if ($448de0341b502897$var$ShapePrun[idx] == -1) {
                ++done;
                $448de0341b502897$var$ShapePrun[idx] = depth + 1;
            }
        }
    }
}
function $448de0341b502897$var$Shape() {}
$448de0341b502897$var$_ = $448de0341b502897$var$Shape_Shape.prototype = $448de0341b502897$var$Shape.prototype;
$448de0341b502897$var$_.bottom = 0;
$448de0341b502897$var$_.Shape_parity = 0;
$448de0341b502897$var$_.top = 0;
var $448de0341b502897$var$Shape_BottomMove;
var $448de0341b502897$var$Shape_ShapeIdx;
var $448de0341b502897$var$ShapePrun;
var $448de0341b502897$var$Shape_TopMove;
var $448de0341b502897$var$Shape_TwistMove;
var $448de0341b502897$var$Shape_halflayer;
var $448de0341b502897$var$Square_$clinit_ran = false;
function $448de0341b502897$var$Square_$clinit() {
    if ($448de0341b502897$var$Square_$clinit_ran) return;
    $448de0341b502897$var$Square_$clinit_ran = true;
    $448de0341b502897$var$SquarePrun = [];
    $448de0341b502897$var$Square_TwistMove = [];
    $448de0341b502897$var$Square_TopMove = [];
    $448de0341b502897$var$Square_BottomMove = [];
    $448de0341b502897$var$fact = [
        1,
        1,
        2,
        6,
        24,
        120,
        720,
        5040
    ];
    $448de0341b502897$var$Cnk = [];
    for(var i = 0; i < 12; ++i)$448de0341b502897$var$Cnk[i] = [];
    $448de0341b502897$var$Square_init();
}
function $448de0341b502897$var$Square_Square() {}
function $448de0341b502897$var$get8Perm(arr) {
    var i, idx, v, val;
    idx = 0;
    val = 1985229328;
    for(i = 0; i < 7; ++i){
        v = arr[i] << 2;
        idx = (8 - i) * idx + (~~val >> v & 7);
        val -= 286331152 << v;
    }
    return idx & 65535;
}
function $448de0341b502897$var$Square_init() {
    var check, depth, done, find, i, idx, idxx, inv, j, m, ml, pos, temp;
    for(i = 0; i < 12; ++i){
        $448de0341b502897$var$Cnk[i][0] = 1;
        $448de0341b502897$var$Cnk[i][i] = 1;
        for(j = 1; j < i; ++j)$448de0341b502897$var$Cnk[i][j] = $448de0341b502897$var$Cnk[i - 1][j - 1] + $448de0341b502897$var$Cnk[i - 1][j];
    }
    pos = [];
    for(i = 0; i < 40320; ++i){
        $448de0341b502897$var$set8Perm(pos, i);
        temp = pos[2];
        pos[2] = pos[4];
        pos[4] = temp;
        temp = pos[3];
        pos[3] = pos[5];
        pos[5] = temp;
        $448de0341b502897$var$Square_TwistMove[i] = $448de0341b502897$var$get8Perm(pos);
        $448de0341b502897$var$set8Perm(pos, i);
        temp = pos[0];
        pos[0] = pos[1];
        pos[1] = pos[2];
        pos[2] = pos[3];
        pos[3] = temp;
        $448de0341b502897$var$Square_TopMove[i] = $448de0341b502897$var$get8Perm(pos);
        $448de0341b502897$var$set8Perm(pos, i);
        temp = pos[4];
        pos[4] = pos[5];
        pos[5] = pos[6];
        pos[6] = pos[7];
        pos[7] = temp;
        $448de0341b502897$var$Square_BottomMove[i] = $448de0341b502897$var$get8Perm(pos);
    }
    for(i = 0; i < 80640; ++i)$448de0341b502897$var$SquarePrun[i] = -1;
    $448de0341b502897$var$SquarePrun[0] = 0;
    depth = 0;
    done = 1;
    while(done < 80640){
        inv = depth >= 11;
        find = inv ? -1 : depth;
        check = inv ? depth : -1;
        ++depth;
        OUT: for(i = 0; i < 80640; ++i)if ($448de0341b502897$var$SquarePrun[i] == find) {
            idx = ~~i >> 1;
            ml = i & 1;
            idxx = $448de0341b502897$var$Square_TwistMove[idx] << 1 | 1 - ml;
            if ($448de0341b502897$var$SquarePrun[idxx] == check) {
                ++done;
                $448de0341b502897$var$SquarePrun[inv ? i : idxx] = ~~(depth << 24) >> 24;
                if (inv) continue OUT;
            }
            idxx = idx;
            for(m = 0; m < 4; ++m){
                idxx = $448de0341b502897$var$Square_TopMove[idxx];
                if ($448de0341b502897$var$SquarePrun[idxx << 1 | ml] == check) {
                    ++done;
                    $448de0341b502897$var$SquarePrun[inv ? i : idxx << 1 | ml] = ~~(depth << 24) >> 24;
                    if (inv) continue OUT;
                }
            }
            for(m = 0; m < 4; ++m){
                idxx = $448de0341b502897$var$Square_BottomMove[idxx];
                if ($448de0341b502897$var$SquarePrun[idxx << 1 | ml] == check) {
                    ++done;
                    $448de0341b502897$var$SquarePrun[inv ? i : idxx << 1 | ml] = ~~(depth << 24) >> 24;
                    if (inv) continue OUT;
                }
            }
        }
    }
}
function $448de0341b502897$var$set8Perm(arr, idx) {
    var i, m, p, v, val;
    val = 1985229328;
    for(i = 0; i < 7; ++i){
        p = $448de0341b502897$var$fact[7 - i];
        v = ~~(idx / p);
        idx -= v * p;
        v <<= 2;
        arr[i] = ~~((~~val >> v & 7) << 24) >> 24;
        m = (1 << v) - 1;
        val = (val & m) + (~~val >> 4 & ~m);
    }
    arr[7] = ~~(val << 24) >> 24;
}
function $448de0341b502897$var$Square() {}
$448de0341b502897$var$_ = $448de0341b502897$var$Square_Square.prototype = $448de0341b502897$var$Square.prototype;
$448de0341b502897$var$_.botEdgeFirst = false;
$448de0341b502897$var$_.cornperm = 0;
$448de0341b502897$var$_.edgeperm = 0;
$448de0341b502897$var$_.ml = 0;
$448de0341b502897$var$_.topEdgeFirst = false;
var $448de0341b502897$var$Square_BottomMove;
var $448de0341b502897$var$Cnk;
var $448de0341b502897$var$SquarePrun;
var $448de0341b502897$var$Square_TopMove;
var $448de0341b502897$var$Square_TwistMove;
var $448de0341b502897$var$fact;
function $448de0341b502897$var$bitCount(x) {
    x -= ~~x >> 1 & 1431655765;
    x = (~~x >> 2 & 858993459) + (x & 858993459);
    x = (~~x >> 4) + x & 252645135;
    x += ~~x >> 8;
    x += ~~x >> 16;
    return x & 63;
}
function $448de0341b502897$var$binarySearch(sortedArray, key) {
    var high, low, mid, midVal;
    low = 0;
    high = sortedArray.length - 1;
    while(low <= high){
        mid = low + (~~(high - low) >> 1);
        midVal = sortedArray[mid];
        if (midVal < key) low = mid + 1;
        else if (midVal > key) high = mid - 1;
        else return mid;
    }
    return -low - 1;
}
var $448de0341b502897$var$square1Solver_initialized = false;
var $448de0341b502897$var$square1SolverInitialize = function(doneCallback, _2, statusCallback) {
    if (!$448de0341b502897$var$square1Solver_initialized) {
        $448de0341b502897$var$Shape_$clinit();
        $448de0341b502897$var$Square_$clinit();
    }
    if (statusCallback) statusCallback("Done initializing Square-1.");
    $448de0341b502897$var$square1Solver_initialized = true;
    if (doneCallback != null) doneCallback();
};
var $448de0341b502897$var$square1SolverGetRandomPosition = async function() {
    if (!$448de0341b502897$var$square1Solver_initialized) $448de0341b502897$var$square1SolverInitialize();
    return $448de0341b502897$var$FullCube_randomCube();
};
var $448de0341b502897$var$square1SolverGenerate = function(state) {
    var search_search = new $448de0341b502897$var$Search_Search();
    return $448de0341b502897$var$Search_solution(search_search, state);
};
var $448de0341b502897$var$square1SolverGetRandomScramble = async function() {
    var randomState = await $448de0341b502897$var$square1SolverGetRandomPosition();
    var scrambleString = $448de0341b502897$var$square1SolverGenerate(randomState);
    return {
        state: randomState,
        scramble_string: scrambleString
    };
};
async function $448de0341b502897$export$bc38e74fa16ad038() {
    return (await $448de0341b502897$var$square1SolverGetRandomScramble()).scramble_string;
}

});


//# sourceMappingURL=sq1-solver-KMN2GSOU.cbe55efd.js.map
