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
parcelRequire.register("iMTm8", function(module, exports) {

$parcel$export(module.exports, "initialize", () => $dad7a63b97b5bac2$export$2a47f398eeff8b01);
$parcel$export(module.exports, "random444Scramble", () => $dad7a63b97b5bac2$export$2bb7255279e68dd9);

var $8nJbT = parcelRequire("8nJbT");

var $8mjCn = parcelRequire("8mjCn");
parcelRequire("lLkc4");
parcelRequire("knLo6");

var $7TbMZ = parcelRequire("7TbMZ");
parcelRequire("hJBlP");
// src/cubing/vendor/cstimer/src/js/lib/mathlib.ts
var $dad7a63b97b5bac2$var$Cnk = [];
var $dad7a63b97b5bac2$var$fact = [
    1
];
for(let i = 0; i < 32; ++i){
    $dad7a63b97b5bac2$var$Cnk[i] = [];
    for(let j = 0; j < 32; ++j)$dad7a63b97b5bac2$var$Cnk[i][j] = 0;
}
for(let i1 = 0; i1 < 32; ++i1){
    $dad7a63b97b5bac2$var$Cnk[i1][0] = $dad7a63b97b5bac2$var$Cnk[i1][i1] = 1;
    $dad7a63b97b5bac2$var$fact[i1 + 1] = $dad7a63b97b5bac2$var$fact[i1] * (i1 + 1);
    for(let j = 1; j < i1; ++j)$dad7a63b97b5bac2$var$Cnk[i1][j] = $dad7a63b97b5bac2$var$Cnk[i1 - 1][j - 1] + $dad7a63b97b5bac2$var$Cnk[i1 - 1][j];
}
function $dad7a63b97b5bac2$var$circle(arr, ...moreArgs) {
    const length = moreArgs.length, temp = arr[moreArgs[length - 1]];
    for(let i2 = length; i2 > 0; i2--)arr[moreArgs[i2]] = arr[moreArgs[i2 - 1]];
    arr[moreArgs[0]] = temp;
    return $dad7a63b97b5bac2$var$circle;
}
function $dad7a63b97b5bac2$var$set8Perm(arr, idx, n, even) {
    n = (n || 8) - 1;
    let val = 1985229328;
    let prt = 0;
    even ?? (even = 0);
    if (even < 0) idx <<= 1;
    for(let i3 = 0; i3 < n; ++i3){
        const p = $dad7a63b97b5bac2$var$fact[n - i3];
        let v = ~~(idx / p);
        prt ^= v;
        idx %= p;
        v <<= 2;
        arr[i3] = val >> v & 7;
        const m = (1 << v) - 1;
        val = (val & m) + (val >> 4 & ~m);
    }
    if (even < 0 && (prt & 1) !== 0) {
        arr[n] = arr[n - 1];
        arr[n - 1] = val & 7;
    } else arr[n] = val & 7;
    return arr;
}
// src/cubing/vendor/cstimer/src/js/scramble/444-solver.ts
function $dad7a63b97b5bac2$var$createArray(length1, length2) {
    const result = new Array(length1);
    if (length2 !== void 0) for(let i4 = 0; i4 < length1; i4++)result[i4] = new Array(length2);
    return result;
}
var $dad7a63b97b5bac2$var$_;
var $dad7a63b97b5bac2$var$seedTable = {};
var $dad7a63b97b5bac2$var$CM$ = {};
var $dad7a63b97b5bac2$var$Q$Object = 0;
var $dad7a63b97b5bac2$var$Q$Serializable = 30;
var $dad7a63b97b5bac2$var$Q$Center1 = 21;
var $dad7a63b97b5bac2$var$Q$CornerCube = 22;
var $dad7a63b97b5bac2$var$Q$Edge3 = 23;
var $dad7a63b97b5bac2$var$Q$FullCube_0 = 24;
var $dad7a63b97b5bac2$var$Q$FullCube_$1 = 25;
var $dad7a63b97b5bac2$var$Q$Comparable = 34;
var $dad7a63b97b5bac2$var$Q$Search_0 = 26;
var $dad7a63b97b5bac2$var$Q$Object_$1 = 40;
function $dad7a63b97b5bac2$var$newSeed(id) {
    return new $dad7a63b97b5bac2$var$seedTable[id]();
}
function $dad7a63b97b5bac2$var$defineSeed(id, superSeed, castableTypeMap, ...moreArgs) {
    let seed = $dad7a63b97b5bac2$var$seedTable[id];
    if (seed && !seed.___clazz$) $dad7a63b97b5bac2$var$_ = seed.prototype;
    else {
        !seed && (seed = $dad7a63b97b5bac2$var$seedTable[id] = function() {});
        $dad7a63b97b5bac2$var$_ = seed.prototype = superSeed < 0 ? {} : $dad7a63b97b5bac2$var$newSeed(superSeed);
        $dad7a63b97b5bac2$var$_.castableTypeMap$ = castableTypeMap;
    }
    for (const arg of moreArgs)arg.prototype = $dad7a63b97b5bac2$var$_;
    if (seed.___clazz$) {
        $dad7a63b97b5bac2$var$_.___clazz$ = seed.___clazz$;
        seed.___clazz$ = null;
    }
}
function $dad7a63b97b5bac2$var$makeCastMap(a) {
    const result = {};
    for(let i_0 = 0, c = a.length; i_0 < c; ++i_0)result[a[i_0]] = 1;
    return result;
}
$dad7a63b97b5bac2$var$defineSeed(1, -1, $dad7a63b97b5bac2$var$CM$);
$dad7a63b97b5bac2$var$_.value = null;
function $dad7a63b97b5bac2$var$Array_0() {}
function $dad7a63b97b5bac2$var$createFrom(a, length_0) {
    const result = $dad7a63b97b5bac2$var$createFromSeed(0, length_0);
    $dad7a63b97b5bac2$var$initValues(a.___clazz$, a.castableTypeMap$, a.queryId$, result);
    return result;
}
function $dad7a63b97b5bac2$var$createFromSeed(seedType, length_0) {
    const array = new Array(length_0);
    if (seedType === 3) for(let i_0 = 0; i_0 < length_0; ++i_0){
        const value = {
            m: 0,
            l: 0,
            h: 0
        };
        value.l = value.m = value.h = 0;
        array[i_0] = value;
    }
    else if (seedType > 0) {
        const value = [
            null,
            0,
            false
        ][seedType];
        for(let i_0 = 0; i_0 < length_0; ++i_0)array[i_0] = value;
    }
    return array;
}
function $dad7a63b97b5bac2$var$initDim(arrayClass, castableTypeMap, queryId, length_0, seedType) {
    const result = $dad7a63b97b5bac2$var$createFromSeed(seedType, length_0);
    $dad7a63b97b5bac2$var$initValues(arrayClass, castableTypeMap, queryId, result);
    return result;
}
function $dad7a63b97b5bac2$var$initValues(arrayClass, castableTypeMap, queryId, array) {
    $dad7a63b97b5bac2$var$$clinit_Array$ExpandoWrapper();
    $dad7a63b97b5bac2$var$wrapArray(array, $dad7a63b97b5bac2$var$expandoNames_0, $dad7a63b97b5bac2$var$expandoValues_0);
    array.___clazz$ = arrayClass;
    array.castableTypeMap$ = castableTypeMap;
    array.queryId$ = queryId;
    return array;
}
function $dad7a63b97b5bac2$var$setCheck(array, index, value) {
    return array[index] = value;
}
$dad7a63b97b5bac2$var$defineSeed(73, 1, {}, $dad7a63b97b5bac2$var$Array_0);
$dad7a63b97b5bac2$var$_.queryId$ = 0;
var $dad7a63b97b5bac2$var$ran$clinit_Array$ExpandoWrapper = false;
function $dad7a63b97b5bac2$var$$clinit_Array$ExpandoWrapper() {
    if ($dad7a63b97b5bac2$var$ran$clinit_Array$ExpandoWrapper) return;
    $dad7a63b97b5bac2$var$ran$clinit_Array$ExpandoWrapper = true;
    $dad7a63b97b5bac2$var$expandoNames_0 = [];
    $dad7a63b97b5bac2$var$expandoValues_0 = [];
    $dad7a63b97b5bac2$var$initExpandos(new $dad7a63b97b5bac2$var$Array_0(), $dad7a63b97b5bac2$var$expandoNames_0, $dad7a63b97b5bac2$var$expandoValues_0);
}
function $dad7a63b97b5bac2$var$initExpandos(protoType, expandoNames, expandoValues) {
    let i_0 = 0, value;
    for(const name_0 in protoType)if (value = protoType[name_0]) {
        expandoNames[i_0] = name_0;
        expandoValues[i_0] = value;
        ++i_0;
    }
}
function $dad7a63b97b5bac2$var$wrapArray(array, expandoNames, expandoValues) {
    $dad7a63b97b5bac2$var$$clinit_Array$ExpandoWrapper();
    for(let i_0 = 0, c = expandoNames.length; i_0 < c; ++i_0)array[expandoNames[i_0]] = expandoValues[i_0];
}
var $dad7a63b97b5bac2$var$expandoNames_0;
var $dad7a63b97b5bac2$var$expandoValues_0;
function $dad7a63b97b5bac2$var$canCast(src, dstId) {
    return src.castableTypeMap$ && !!src.castableTypeMap$[dstId];
}
function $dad7a63b97b5bac2$var$instanceOf(src, dstId) {
    return src !== null && $dad7a63b97b5bac2$var$canCast(src, dstId);
}
var $dad7a63b97b5bac2$var$ran$clinit_Center1 = false;
function $dad7a63b97b5bac2$var$$clinit_Center1() {
    if ($dad7a63b97b5bac2$var$ran$clinit_Center1) return false;
    $dad7a63b97b5bac2$var$ran$clinit_Center1 = true;
    $dad7a63b97b5bac2$var$ctsmv = $dad7a63b97b5bac2$var$createArray(15582, 36);
    $dad7a63b97b5bac2$var$sym2raw = $dad7a63b97b5bac2$var$createArray(15582);
    $dad7a63b97b5bac2$var$csprun = $dad7a63b97b5bac2$var$createArray(15582);
    $dad7a63b97b5bac2$var$symmult = $dad7a63b97b5bac2$var$createArray(48, 48);
    $dad7a63b97b5bac2$var$symmove = $dad7a63b97b5bac2$var$createArray(48, 36);
    $dad7a63b97b5bac2$var$syminv = $dad7a63b97b5bac2$var$createArray(48);
    $dad7a63b97b5bac2$var$finish_0 = $dad7a63b97b5bac2$var$createArray(48);
}
function $dad7a63b97b5bac2$var$$$init_1(this$static) {
    this$static.ct = $dad7a63b97b5bac2$var$createArray(24);
}
function $dad7a63b97b5bac2$var$$equals(this$static, obj) {
    let c, i_0;
    if ($dad7a63b97b5bac2$var$instanceOf(obj, $dad7a63b97b5bac2$var$Q$Center1)) {
        c = obj;
        for(i_0 = 0; i_0 < 24; ++i_0){
            if (this$static.ct[i_0] !== c.ct[i_0]) return false;
        }
        return true;
    }
    return false;
}
function $dad7a63b97b5bac2$var$$get_1(this$static) {
    let i_0, idx, r;
    idx = 0;
    r = 8;
    for(i_0 = 23; i_0 >= 0; --i_0)this$static.ct[i_0] === 1 && (idx += $dad7a63b97b5bac2$var$Cnk[i_0][r--]);
    return idx;
}
function $dad7a63b97b5bac2$var$$getsym(this$static) {
    let cord, j;
    if ($dad7a63b97b5bac2$var$raw2sym !== null) return $dad7a63b97b5bac2$var$raw2sym[$dad7a63b97b5bac2$var$$get_1(this$static)];
    for(j = 0; j < 48; ++j){
        cord = $dad7a63b97b5bac2$var$raw2sym_0($dad7a63b97b5bac2$var$$get_1(this$static));
        if (cord !== -1) return cord * 64 + j;
        $dad7a63b97b5bac2$var$$rot(this$static, 0);
        j % 2 === 1 && $dad7a63b97b5bac2$var$$rot(this$static, 1);
        j % 8 === 7 && $dad7a63b97b5bac2$var$$rot(this$static, 2);
        j % 16 === 15 && $dad7a63b97b5bac2$var$$rot(this$static, 3);
    }
}
function $dad7a63b97b5bac2$var$$move(this$static, m_0) {
    const key = m_0 % 3;
    m_0 = ~~(m_0 / 3);
    switch(m_0){
        case 0:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 1, 2, 3, key);
            break;
        case 1:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 16, 17, 18, 19, key);
            break;
        case 2:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 9, 10, 11, key);
            break;
        case 3:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 4, 5, 6, 7, key);
            break;
        case 4:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 20, 21, 22, 23, key);
            break;
        case 5:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 12, 13, 14, 15, key);
            break;
        case 6:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 1, 2, 3, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 20, 12, 16, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 9, 21, 13, 17, key);
            break;
        case 7:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 16, 17, 18, 19, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 1, 15, 5, 9, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 2, 12, 6, 10, key);
            break;
        case 8:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 9, 10, 11, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 2, 19, 4, 21, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 3, 16, 5, 22, key);
            break;
        case 9:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 4, 5, 6, 7, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 10, 18, 14, 22, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 11, 19, 15, 23, key);
            break;
        case 10:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 20, 21, 22, 23, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 8, 4, 14, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 3, 11, 7, 13, key);
            break;
        case 11:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 12, 13, 14, 15, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 1, 20, 7, 18, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 23, 6, 17, key);
    }
}
function $dad7a63b97b5bac2$var$$rot(this$static, r) {
    switch(r){
        case 0:
            $dad7a63b97b5bac2$var$$move(this$static, 19);
            $dad7a63b97b5bac2$var$$move(this$static, 28);
            break;
        case 1:
            $dad7a63b97b5bac2$var$$move(this$static, 21);
            $dad7a63b97b5bac2$var$$move(this$static, 32);
            break;
        case 2:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 3, 1, 2, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 11, 9, 10, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 4, 7, 5, 6, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 12, 15, 13, 14, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 16, 19, 21, 22, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 17, 18, 20, 23, 1);
            break;
        case 3:
            $dad7a63b97b5bac2$var$$move(this$static, 18);
            $dad7a63b97b5bac2$var$$move(this$static, 29);
            $dad7a63b97b5bac2$var$$move(this$static, 24);
            $dad7a63b97b5bac2$var$$move(this$static, 35);
    }
}
function $dad7a63b97b5bac2$var$$rotate(this$static, r) {
    let j;
    for(j = 0; j < r; ++j){
        $dad7a63b97b5bac2$var$$rot(this$static, 0);
        j % 2 === 1 && $dad7a63b97b5bac2$var$$rot(this$static, 1);
        j % 8 === 7 && $dad7a63b97b5bac2$var$$rot(this$static, 2);
        j % 16 === 15 && $dad7a63b97b5bac2$var$$rot(this$static, 3);
    }
}
function $dad7a63b97b5bac2$var$$set_0(this$static, idx) {
    let i_0, r;
    r = 8;
    for(i_0 = 23; i_0 >= 0; --i_0){
        this$static.ct[i_0] = 0;
        if (idx >= $dad7a63b97b5bac2$var$Cnk[i_0][r]) {
            idx -= $dad7a63b97b5bac2$var$Cnk[i_0][r--];
            this$static.ct[i_0] = 1;
        }
    }
}
function $dad7a63b97b5bac2$var$$set_1(this$static, c) {
    let i_0;
    for(i_0 = 0; i_0 < 24; ++i_0)this$static.ct[i_0] = c.ct[i_0];
}
function $dad7a63b97b5bac2$var$Center1_0() {
    let i_0;
    $dad7a63b97b5bac2$var$$$init_1(this);
    for(i_0 = 0; i_0 < 8; ++i_0)this.ct[i_0] = 1;
    for(i_0 = 8; i_0 < 24; ++i_0)this.ct[i_0] = 0;
}
function $dad7a63b97b5bac2$var$Center1_1(c, urf) {
    let i_0;
    $dad7a63b97b5bac2$var$$$init_1(this);
    for(i_0 = 0; i_0 < 24; ++i_0)this.ct[i_0] = ~~(c.ct[i_0] / 2) === urf ? 1 : 0;
}
function $dad7a63b97b5bac2$var$Center1_2(ct) {
    let i_0;
    $dad7a63b97b5bac2$var$$$init_1(this);
    for(i_0 = 0; i_0 < 24; ++i_0)this.ct[i_0] = ct[i_0];
}
function $dad7a63b97b5bac2$var$createMoveTable() {
    let i_0, m_0;
    const c = new $dad7a63b97b5bac2$var$Center1_0();
    const d = new $dad7a63b97b5bac2$var$Center1_0();
    for(i_0 = 0; i_0 < 15582; ++i_0){
        $dad7a63b97b5bac2$var$$set_0(d, $dad7a63b97b5bac2$var$sym2raw[i_0]);
        for(m_0 = 0; m_0 < 36; ++m_0){
            $dad7a63b97b5bac2$var$$set_1(c, d);
            $dad7a63b97b5bac2$var$$move(c, m_0);
            $dad7a63b97b5bac2$var$ctsmv[i_0][m_0] = $dad7a63b97b5bac2$var$$getsym(c);
        }
    }
}
function $dad7a63b97b5bac2$var$createPrun() {
    let check, depth, done, i_0, idx, inv, m_0, select;
    $dad7a63b97b5bac2$var$fill_0($dad7a63b97b5bac2$var$csprun);
    $dad7a63b97b5bac2$var$csprun[0] = 0;
    depth = 0;
    done = 1;
    while(done !== 15582){
        inv = depth > 4;
        select = inv ? -1 : depth;
        check = inv ? depth : -1;
        ++depth;
        for(i_0 = 0; i_0 < 15582; ++i_0){
            if ($dad7a63b97b5bac2$var$csprun[i_0] !== select) continue;
            for(m_0 = 0; m_0 < 27; ++m_0){
                idx = ~~$dad7a63b97b5bac2$var$ctsmv[i_0][m_0] >>> 6;
                if ($dad7a63b97b5bac2$var$csprun[idx] !== check) continue;
                ++done;
                if (inv) {
                    $dad7a63b97b5bac2$var$csprun[i_0] = depth;
                    break;
                } else $dad7a63b97b5bac2$var$csprun[idx] = depth;
            }
        }
    }
}
function $dad7a63b97b5bac2$var$getSolvedSym(cube) {
    let check, i_0, j;
    const c = new $dad7a63b97b5bac2$var$Center1_2(cube.ct);
    for(j = 0; j < 48; ++j){
        check = true;
        for(i_0 = 0; i_0 < 24; ++i_0)if (c.ct[i_0] !== ~~(i_0 / 4)) {
            check = false;
            break;
        }
        if (check) return j;
        $dad7a63b97b5bac2$var$$rot(c, 0);
        j % 2 === 1 && $dad7a63b97b5bac2$var$$rot(c, 1);
        j % 8 === 7 && $dad7a63b97b5bac2$var$$rot(c, 2);
        j % 16 === 15 && $dad7a63b97b5bac2$var$$rot(c, 3);
    }
    return -1;
}
function $dad7a63b97b5bac2$var$initSym_0() {
    let i_0, j, k_0;
    const c = new $dad7a63b97b5bac2$var$Center1_0();
    for(i_0 = 0; i_0 < 24; ++i_0)c.ct[i_0] = i_0;
    const d = new $dad7a63b97b5bac2$var$Center1_2(c.ct);
    const e = new $dad7a63b97b5bac2$var$Center1_2(c.ct);
    const f = new $dad7a63b97b5bac2$var$Center1_2(c.ct);
    for(i_0 = 0; i_0 < 48; ++i_0){
        for(j = 0; j < 48; ++j){
            for(k_0 = 0; k_0 < 48; ++k_0){
                if ($dad7a63b97b5bac2$var$$equals(c, d)) {
                    $dad7a63b97b5bac2$var$symmult[i_0][j] = k_0;
                    k_0 === 0 && ($dad7a63b97b5bac2$var$syminv[i_0] = j);
                }
                $dad7a63b97b5bac2$var$$rot(d, 0);
                k_0 % 2 === 1 && $dad7a63b97b5bac2$var$$rot(d, 1);
                k_0 % 8 === 7 && $dad7a63b97b5bac2$var$$rot(d, 2);
                k_0 % 16 === 15 && $dad7a63b97b5bac2$var$$rot(d, 3);
            }
            $dad7a63b97b5bac2$var$$rot(c, 0);
            j % 2 === 1 && $dad7a63b97b5bac2$var$$rot(c, 1);
            j % 8 === 7 && $dad7a63b97b5bac2$var$$rot(c, 2);
            j % 16 === 15 && $dad7a63b97b5bac2$var$$rot(c, 3);
        }
        $dad7a63b97b5bac2$var$$rot(c, 0);
        i_0 % 2 === 1 && $dad7a63b97b5bac2$var$$rot(c, 1);
        i_0 % 8 === 7 && $dad7a63b97b5bac2$var$$rot(c, 2);
        i_0 % 16 === 15 && $dad7a63b97b5bac2$var$$rot(c, 3);
    }
    for(i_0 = 0; i_0 < 48; ++i_0){
        $dad7a63b97b5bac2$var$$set_1(c, e);
        $dad7a63b97b5bac2$var$$rotate(c, $dad7a63b97b5bac2$var$syminv[i_0]);
        for(j = 0; j < 36; ++j){
            $dad7a63b97b5bac2$var$$set_1(d, c);
            $dad7a63b97b5bac2$var$$move(d, j);
            $dad7a63b97b5bac2$var$$rotate(d, i_0);
            for(k_0 = 0; k_0 < 36; ++k_0){
                $dad7a63b97b5bac2$var$$set_1(f, e);
                $dad7a63b97b5bac2$var$$move(f, k_0);
                if ($dad7a63b97b5bac2$var$$equals(f, d)) {
                    $dad7a63b97b5bac2$var$symmove[i_0][j] = k_0;
                    break;
                }
            }
        }
    }
    $dad7a63b97b5bac2$var$$set_0(c, 0);
    for(i_0 = 0; i_0 < 48; ++i_0){
        $dad7a63b97b5bac2$var$finish_0[$dad7a63b97b5bac2$var$syminv[i_0]] = $dad7a63b97b5bac2$var$$get_1(c);
        $dad7a63b97b5bac2$var$$rot(c, 0);
        i_0 % 2 === 1 && $dad7a63b97b5bac2$var$$rot(c, 1);
        i_0 % 8 === 7 && $dad7a63b97b5bac2$var$$rot(c, 2);
        i_0 % 16 === 15 && $dad7a63b97b5bac2$var$$rot(c, 3);
    }
}
function $dad7a63b97b5bac2$var$initSym2Raw() {
    let count, i_0, idx, j;
    const c = new $dad7a63b97b5bac2$var$Center1_0();
    const occ = $dad7a63b97b5bac2$var$createArray(22984);
    for(i_0 = 0; i_0 < 22984; i_0++)occ[i_0] = 0;
    count = 0;
    for(i_0 = 0; i_0 < 735471; ++i_0)if ((occ[~~i_0 >>> 5] & 1 << (i_0 & 31)) === 0) {
        $dad7a63b97b5bac2$var$$set_0(c, i_0);
        for(j = 0; j < 48; ++j){
            idx = $dad7a63b97b5bac2$var$$get_1(c);
            occ[~~idx >>> 5] |= 1 << (idx & 31);
            $dad7a63b97b5bac2$var$raw2sym !== null && ($dad7a63b97b5bac2$var$raw2sym[idx] = count << 6 | $dad7a63b97b5bac2$var$syminv[j]);
            $dad7a63b97b5bac2$var$$rot(c, 0);
            j % 2 === 1 && $dad7a63b97b5bac2$var$$rot(c, 1);
            j % 8 === 7 && $dad7a63b97b5bac2$var$$rot(c, 2);
            j % 16 === 15 && $dad7a63b97b5bac2$var$$rot(c, 3);
        }
        $dad7a63b97b5bac2$var$sym2raw[count++] = i_0;
    }
}
function $dad7a63b97b5bac2$var$raw2sym_0(n) {
    const m_0 = $dad7a63b97b5bac2$var$binarySearch_0($dad7a63b97b5bac2$var$sym2raw, n);
    return m_0 >= 0 ? m_0 : -1;
}
$dad7a63b97b5bac2$var$defineSeed(153, 1, $dad7a63b97b5bac2$var$makeCastMap([
    $dad7a63b97b5bac2$var$Q$Center1
]), $dad7a63b97b5bac2$var$Center1_0, $dad7a63b97b5bac2$var$Center1_1, $dad7a63b97b5bac2$var$Center1_2);
var $dad7a63b97b5bac2$var$csprun;
var $dad7a63b97b5bac2$var$ctsmv;
var $dad7a63b97b5bac2$var$finish_0;
var $dad7a63b97b5bac2$var$raw2sym = null;
var $dad7a63b97b5bac2$var$sym2raw;
var $dad7a63b97b5bac2$var$syminv;
var $dad7a63b97b5bac2$var$symmove;
var $dad7a63b97b5bac2$var$symmult;
var $dad7a63b97b5bac2$var$ran$clinit_Center2 = false;
function $dad7a63b97b5bac2$var$$clinit_Center2() {
    if ($dad7a63b97b5bac2$var$ran$clinit_Center2) return;
    $dad7a63b97b5bac2$var$ran$clinit_Center2 = true;
    $dad7a63b97b5bac2$var$rlmv = $dad7a63b97b5bac2$var$createArray(70, 28);
    $dad7a63b97b5bac2$var$ctmv = $dad7a63b97b5bac2$var$createArray(6435, 28);
    $dad7a63b97b5bac2$var$rlrot = $dad7a63b97b5bac2$var$createArray(70, 16);
    $dad7a63b97b5bac2$var$ctrot = $dad7a63b97b5bac2$var$createArray(6435, 16);
    $dad7a63b97b5bac2$var$ctprun = $dad7a63b97b5bac2$var$createArray(450450);
    $dad7a63b97b5bac2$var$pmv = [
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
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0
    ];
}
function $dad7a63b97b5bac2$var$$getct(this$static) {
    let i_0, idx, r;
    idx = 0;
    r = 8;
    for(i_0 = 14; i_0 >= 0; --i_0)this$static.ct[i_0] !== this$static.ct[15] && (idx += $dad7a63b97b5bac2$var$Cnk[i_0][r--]);
    return idx;
}
function $dad7a63b97b5bac2$var$$getrl(this$static) {
    let i_0, idx, r;
    idx = 0;
    r = 4;
    for(i_0 = 6; i_0 >= 0; --i_0)this$static.rl[i_0] !== this$static.rl[7] && (idx += $dad7a63b97b5bac2$var$Cnk[i_0][r--]);
    return idx * 2 + this$static.parity;
}
function $dad7a63b97b5bac2$var$$move_0(this$static, m_0) {
    this$static.parity ^= $dad7a63b97b5bac2$var$pmv[m_0];
    const key = m_0 % 3;
    m_0 = ~~(m_0 / 3);
    switch(m_0){
        case 0:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 1, 2, 3, key);
            break;
        case 1:
            $dad7a63b97b5bac2$var$swap(this$static.rl, 0, 1, 2, 3, key);
            break;
        case 2:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 9, 10, 11, key);
            break;
        case 3:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 4, 5, 6, 7, key);
            break;
        case 4:
            $dad7a63b97b5bac2$var$swap(this$static.rl, 4, 5, 6, 7, key);
            break;
        case 5:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 12, 13, 14, 15, key);
            break;
        case 6:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 1, 2, 3, key);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 0, 5, 4, 1, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 9, 12, 13, key);
            break;
        case 7:
            $dad7a63b97b5bac2$var$swap(this$static.rl, 0, 1, 2, 3, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 1, 15, 5, 9, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 2, 12, 6, 10, key);
            break;
        case 8:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 9, 10, 11, key);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 0, 3, 6, 5, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 3, 2, 5, 4, key);
            break;
        case 9:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 4, 5, 6, 7, key);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 3, 2, 7, 6, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 11, 10, 15, 14, key);
            break;
        case 10:
            $dad7a63b97b5bac2$var$swap(this$static.rl, 4, 5, 6, 7, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 8, 4, 14, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 3, 11, 7, 13, key);
            break;
        case 11:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 12, 13, 14, 15, key);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 1, 4, 7, 2, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 1, 0, 7, 6, key);
    }
}
function $dad7a63b97b5bac2$var$$rot_0(this$static, r) {
    switch(r){
        case 0:
            $dad7a63b97b5bac2$var$$move_0(this$static, 19);
            $dad7a63b97b5bac2$var$$move_0(this$static, 28);
            break;
        case 1:
            $dad7a63b97b5bac2$var$$move_0(this$static, 21);
            $dad7a63b97b5bac2$var$$move_0(this$static, 32);
            break;
        case 2:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 3, 1, 2, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 11, 9, 10, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 4, 7, 5, 6, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 12, 15, 13, 14, 1);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 0, 3, 5, 6, 1);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 1, 2, 4, 7, 1);
    }
}
function $dad7a63b97b5bac2$var$$set_2(this$static, c, edgeParity) {
    let i_0;
    for(i_0 = 0; i_0 < 16; ++i_0)this$static.ct[i_0] = ~~(c.ct[i_0] / 2);
    for(i_0 = 0; i_0 < 8; ++i_0)this$static.rl[i_0] = c.ct[i_0 + 16];
    this$static.parity = edgeParity;
}
function $dad7a63b97b5bac2$var$$setct(this$static, idx) {
    let i_0, r;
    r = 8;
    this$static.ct[15] = 0;
    for(i_0 = 14; i_0 >= 0; --i_0)if (idx >= $dad7a63b97b5bac2$var$Cnk[i_0][r]) {
        idx -= $dad7a63b97b5bac2$var$Cnk[i_0][r--];
        this$static.ct[i_0] = 1;
    } else this$static.ct[i_0] = 0;
}
function $dad7a63b97b5bac2$var$$setrl(this$static, idx) {
    let i_0, r;
    this$static.parity = idx & 1;
    idx >>>= 1;
    r = 4;
    this$static.rl[7] = 0;
    for(i_0 = 6; i_0 >= 0; --i_0)if (idx >= $dad7a63b97b5bac2$var$Cnk[i_0][r]) {
        idx -= $dad7a63b97b5bac2$var$Cnk[i_0][r--];
        this$static.rl[i_0] = 1;
    } else this$static.rl[i_0] = 0;
}
function $dad7a63b97b5bac2$var$Center2_0() {
    this.rl = $dad7a63b97b5bac2$var$createArray(8);
    this.ct = $dad7a63b97b5bac2$var$createArray(16);
}
function $dad7a63b97b5bac2$var$init_3() {
    let ct, ctx, depth, done, i_0, idx, j, m_0, rl, rlx;
    const c = new $dad7a63b97b5bac2$var$Center2_0();
    for(i_0 = 0; i_0 < 70; ++i_0)for(m_0 = 0; m_0 < 28; ++m_0){
        $dad7a63b97b5bac2$var$$setrl(c, i_0);
        $dad7a63b97b5bac2$var$$move_0(c, $dad7a63b97b5bac2$var$move2std[m_0]);
        $dad7a63b97b5bac2$var$rlmv[i_0][m_0] = $dad7a63b97b5bac2$var$$getrl(c);
    }
    for(i_0 = 0; i_0 < 70; ++i_0){
        $dad7a63b97b5bac2$var$$setrl(c, i_0);
        for(j = 0; j < 16; ++j){
            $dad7a63b97b5bac2$var$rlrot[i_0][j] = $dad7a63b97b5bac2$var$$getrl(c);
            $dad7a63b97b5bac2$var$$rot_0(c, 0);
            j % 2 === 1 && $dad7a63b97b5bac2$var$$rot_0(c, 1);
            j % 8 === 7 && $dad7a63b97b5bac2$var$$rot_0(c, 2);
        }
    }
    for(i_0 = 0; i_0 < 6435; ++i_0){
        $dad7a63b97b5bac2$var$$setct(c, i_0);
        for(j = 0; j < 16; ++j){
            $dad7a63b97b5bac2$var$ctrot[i_0][j] = $dad7a63b97b5bac2$var$$getct(c) & 65535;
            $dad7a63b97b5bac2$var$$rot_0(c, 0);
            j % 2 === 1 && $dad7a63b97b5bac2$var$$rot_0(c, 1);
            j % 8 === 7 && $dad7a63b97b5bac2$var$$rot_0(c, 2);
        }
    }
    for(i_0 = 0; i_0 < 6435; ++i_0)for(m_0 = 0; m_0 < 28; ++m_0){
        $dad7a63b97b5bac2$var$$setct(c, i_0);
        $dad7a63b97b5bac2$var$$move_0(c, $dad7a63b97b5bac2$var$move2std[m_0]);
        $dad7a63b97b5bac2$var$ctmv[i_0][m_0] = $dad7a63b97b5bac2$var$$getct(c) & 65535;
    }
    $dad7a63b97b5bac2$var$fill_0($dad7a63b97b5bac2$var$ctprun);
    $dad7a63b97b5bac2$var$ctprun[0] = $dad7a63b97b5bac2$var$ctprun[18] = $dad7a63b97b5bac2$var$ctprun[28] = $dad7a63b97b5bac2$var$ctprun[46] = $dad7a63b97b5bac2$var$ctprun[54] = $dad7a63b97b5bac2$var$ctprun[56] = 0;
    depth = 0;
    done = 6;
    while(done !== 450450){
        const inv = depth > 6;
        const select = inv ? -1 : depth;
        const check = inv ? depth : -1;
        ++depth;
        for(i_0 = 0; i_0 < 450450; ++i_0){
            if ($dad7a63b97b5bac2$var$ctprun[i_0] !== select) continue;
            ct = ~~(i_0 / 70);
            rl = i_0 % 70;
            for(m_0 = 0; m_0 < 23; ++m_0){
                ctx = $dad7a63b97b5bac2$var$ctmv[ct][m_0];
                rlx = $dad7a63b97b5bac2$var$rlmv[rl][m_0];
                idx = ctx * 70 + rlx;
                if ($dad7a63b97b5bac2$var$ctprun[idx] !== check) continue;
                ++done;
                if (inv) {
                    $dad7a63b97b5bac2$var$ctprun[i_0] = depth;
                    break;
                } else $dad7a63b97b5bac2$var$ctprun[idx] = depth;
            }
        }
    }
}
$dad7a63b97b5bac2$var$defineSeed(154, 1, {}, $dad7a63b97b5bac2$var$Center2_0);
$dad7a63b97b5bac2$var$_.parity = 0;
var $dad7a63b97b5bac2$var$ctmv;
var $dad7a63b97b5bac2$var$ctprun;
var $dad7a63b97b5bac2$var$ctrot;
var $dad7a63b97b5bac2$var$pmv;
var $dad7a63b97b5bac2$var$rlmv;
var $dad7a63b97b5bac2$var$rlrot;
var $dad7a63b97b5bac2$var$ran$clinit_Center3 = false;
function $dad7a63b97b5bac2$var$$clinit_Center3() {
    if ($dad7a63b97b5bac2$var$ran$clinit_Center3) return;
    $dad7a63b97b5bac2$var$ran$clinit_Center3 = true;
    $dad7a63b97b5bac2$var$ctmove = $dad7a63b97b5bac2$var$createArray(29400, 20);
    $dad7a63b97b5bac2$var$pmove = [
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
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1
    ];
    $dad7a63b97b5bac2$var$prun_0 = $dad7a63b97b5bac2$var$createArray(29400);
    $dad7a63b97b5bac2$var$rl2std = [
        0,
        9,
        14,
        23,
        27,
        28,
        41,
        42,
        46,
        55,
        60,
        69
    ];
    $dad7a63b97b5bac2$var$std2rl = $dad7a63b97b5bac2$var$createArray(70);
}
function $dad7a63b97b5bac2$var$$getct_0(this$static) {
    let i_0, idx, idxrl, r;
    idx = 0;
    r = 4;
    for(i_0 = 6; i_0 >= 0; --i_0)this$static.ud[i_0] !== this$static.ud[7] && (idx += $dad7a63b97b5bac2$var$Cnk[i_0][r--]);
    idx *= 35;
    r = 4;
    for(i_0 = 6; i_0 >= 0; --i_0)this$static.fb[i_0] !== this$static.fb[7] && (idx += $dad7a63b97b5bac2$var$Cnk[i_0][r--]);
    idx *= 12;
    const check = this$static.fb[7] ^ this$static.ud[7];
    idxrl = 0;
    r = 4;
    for(i_0 = 7; i_0 >= 0; --i_0)this$static.rl[i_0] !== check && (idxrl += $dad7a63b97b5bac2$var$Cnk[i_0][r--]);
    return this$static.parity + 2 * (idx + $dad7a63b97b5bac2$var$std2rl[idxrl]);
}
function $dad7a63b97b5bac2$var$$move_1(this$static, i_0) {
    this$static.parity ^= $dad7a63b97b5bac2$var$pmove[i_0];
    switch(i_0){
        case 0:
        case 1:
        case 2:
            $dad7a63b97b5bac2$var$swap(this$static.ud, 0, 1, 2, 3, i_0 % 3);
            break;
        case 3:
            $dad7a63b97b5bac2$var$swap(this$static.rl, 0, 1, 2, 3, 1);
            break;
        case 4:
        case 5:
        case 6:
            $dad7a63b97b5bac2$var$swap(this$static.fb, 0, 1, 2, 3, (i_0 - 1) % 3);
            break;
        case 7:
        case 8:
        case 9:
            $dad7a63b97b5bac2$var$swap(this$static.ud, 4, 5, 6, 7, (i_0 - 1) % 3);
            break;
        case 10:
            $dad7a63b97b5bac2$var$swap(this$static.rl, 4, 5, 6, 7, 1);
            break;
        case 11:
        case 12:
        case 13:
            $dad7a63b97b5bac2$var$swap(this$static.fb, 4, 5, 6, 7, (i_0 + 1) % 3);
            break;
        case 14:
            $dad7a63b97b5bac2$var$swap(this$static.ud, 0, 1, 2, 3, 1);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 0, 5, 4, 1, 1);
            $dad7a63b97b5bac2$var$swap(this$static.fb, 0, 5, 4, 1, 1);
            break;
        case 15:
            $dad7a63b97b5bac2$var$swap(this$static.rl, 0, 1, 2, 3, 1);
            $dad7a63b97b5bac2$var$swap(this$static.fb, 1, 4, 7, 2, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ud, 1, 6, 5, 2, 1);
            break;
        case 16:
            $dad7a63b97b5bac2$var$swap(this$static.fb, 0, 1, 2, 3, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ud, 3, 2, 5, 4, 1);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 0, 3, 6, 5, 1);
            break;
        case 17:
            $dad7a63b97b5bac2$var$swap(this$static.ud, 4, 5, 6, 7, 1);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 3, 2, 7, 6, 1);
            $dad7a63b97b5bac2$var$swap(this$static.fb, 3, 2, 7, 6, 1);
            break;
        case 18:
            $dad7a63b97b5bac2$var$swap(this$static.rl, 4, 5, 6, 7, 1);
            $dad7a63b97b5bac2$var$swap(this$static.fb, 0, 3, 6, 5, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ud, 0, 3, 4, 7, 1);
            break;
        case 19:
            $dad7a63b97b5bac2$var$swap(this$static.fb, 4, 5, 6, 7, 1);
            $dad7a63b97b5bac2$var$swap(this$static.ud, 0, 7, 6, 1, 1);
            $dad7a63b97b5bac2$var$swap(this$static.rl, 1, 4, 7, 2, 1);
    }
}
function $dad7a63b97b5bac2$var$$set_3(this$static, c, eXc_parity) {
    let i_0;
    const parity = (c.ct[0] > c.ct[8] ? 1 : 0) ^ (c.ct[8] > c.ct[16] ? 1 : 0) ^ (c.ct[0] > c.ct[16] ? 1 : 0) ? 1 : 0;
    for(i_0 = 0; i_0 < 8; ++i_0){
        this$static.ud[i_0] = c.ct[i_0] & 1 ^ 1;
        this$static.fb[i_0] = c.ct[i_0 + 8] & 1 ^ 1;
        this$static.rl[i_0] = c.ct[i_0 + 16] & 1 ^ 1 ^ parity;
    }
    this$static.parity = parity ^ eXc_parity;
}
function $dad7a63b97b5bac2$var$$setct_0(this$static, idx) {
    let i_0, idxfb, idxrl, r;
    this$static.parity = idx & 1;
    idx >>>= 1;
    idxrl = $dad7a63b97b5bac2$var$rl2std[idx % 12];
    idx = ~~(idx / 12);
    r = 4;
    for(i_0 = 7; i_0 >= 0; --i_0){
        this$static.rl[i_0] = 0;
        if (idxrl >= $dad7a63b97b5bac2$var$Cnk[i_0][r]) {
            idxrl -= $dad7a63b97b5bac2$var$Cnk[i_0][r--];
            this$static.rl[i_0] = 1;
        }
    }
    idxfb = idx % 35;
    idx = ~~(idx / 35);
    r = 4;
    this$static.fb[7] = 0;
    for(i_0 = 6; i_0 >= 0; --i_0)if (idxfb >= $dad7a63b97b5bac2$var$Cnk[i_0][r]) {
        idxfb -= $dad7a63b97b5bac2$var$Cnk[i_0][r--];
        this$static.fb[i_0] = 1;
    } else this$static.fb[i_0] = 0;
    r = 4;
    this$static.ud[7] = 0;
    for(i_0 = 6; i_0 >= 0; --i_0)if (idx >= $dad7a63b97b5bac2$var$Cnk[i_0][r]) {
        idx -= $dad7a63b97b5bac2$var$Cnk[i_0][r--];
        this$static.ud[i_0] = 1;
    } else this$static.ud[i_0] = 0;
}
function $dad7a63b97b5bac2$var$Center3_0() {
    this.ud = $dad7a63b97b5bac2$var$createArray(8);
    this.rl = $dad7a63b97b5bac2$var$createArray(8);
    this.fb = $dad7a63b97b5bac2$var$createArray(8);
}
function $dad7a63b97b5bac2$var$init_4() {
    let depth, done, i_0, m_0;
    for(i_0 = 0; i_0 < 12; ++i_0)$dad7a63b97b5bac2$var$std2rl[$dad7a63b97b5bac2$var$rl2std[i_0]] = i_0;
    const c = new $dad7a63b97b5bac2$var$Center3_0();
    for(i_0 = 0; i_0 < 29400; ++i_0)for(m_0 = 0; m_0 < 20; ++m_0){
        $dad7a63b97b5bac2$var$$setct_0(c, i_0);
        $dad7a63b97b5bac2$var$$move_1(c, m_0);
        $dad7a63b97b5bac2$var$ctmove[i_0][m_0] = $dad7a63b97b5bac2$var$$getct_0(c) & 65535;
    }
    $dad7a63b97b5bac2$var$fill_0($dad7a63b97b5bac2$var$prun_0);
    $dad7a63b97b5bac2$var$prun_0[0] = 0;
    depth = 0;
    done = 1;
    while(done !== 29400){
        for(i_0 = 0; i_0 < 29400; ++i_0){
            if ($dad7a63b97b5bac2$var$prun_0[i_0] !== depth) continue;
            for(m_0 = 0; m_0 < 17; ++m_0)if ($dad7a63b97b5bac2$var$prun_0[$dad7a63b97b5bac2$var$ctmove[i_0][m_0]] === -1) {
                $dad7a63b97b5bac2$var$prun_0[$dad7a63b97b5bac2$var$ctmove[i_0][m_0]] = depth + 1;
                ++done;
            }
        }
        ++depth;
    }
}
$dad7a63b97b5bac2$var$defineSeed(155, 1, {}, $dad7a63b97b5bac2$var$Center3_0);
$dad7a63b97b5bac2$var$_.parity = 0;
var $dad7a63b97b5bac2$var$ctmove;
var $dad7a63b97b5bac2$var$pmove;
var $dad7a63b97b5bac2$var$prun_0;
var $dad7a63b97b5bac2$var$rl2std;
var $dad7a63b97b5bac2$var$std2rl;
function $dad7a63b97b5bac2$var$$copy_1(this$static, c) {
    let i_0;
    for(i_0 = 0; i_0 < 24; ++i_0)this$static.ct[i_0] = c.ct[i_0];
}
function $dad7a63b97b5bac2$var$$move_2(this$static, m_0) {
    const key = m_0 % 3;
    m_0 = ~~(m_0 / 3);
    switch(m_0){
        case 0:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 1, 2, 3, key);
            break;
        case 1:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 16, 17, 18, 19, key);
            break;
        case 2:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 9, 10, 11, key);
            break;
        case 3:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 4, 5, 6, 7, key);
            break;
        case 4:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 20, 21, 22, 23, key);
            break;
        case 5:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 12, 13, 14, 15, key);
            break;
        case 6:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 1, 2, 3, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 20, 12, 16, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 9, 21, 13, 17, key);
            break;
        case 7:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 16, 17, 18, 19, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 1, 15, 5, 9, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 2, 12, 6, 10, key);
            break;
        case 8:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 8, 9, 10, 11, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 2, 19, 4, 21, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 3, 16, 5, 22, key);
            break;
        case 9:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 4, 5, 6, 7, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 10, 18, 14, 22, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 11, 19, 15, 23, key);
            break;
        case 10:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 20, 21, 22, 23, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 8, 4, 14, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 3, 11, 7, 13, key);
            break;
        case 11:
            $dad7a63b97b5bac2$var$swap(this$static.ct, 12, 13, 14, 15, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 1, 20, 7, 18, key);
            $dad7a63b97b5bac2$var$swap(this$static.ct, 0, 23, 6, 17, key);
    }
}
function $dad7a63b97b5bac2$var$CenterCube_0() {
    let i_0;
    this.ct = $dad7a63b97b5bac2$var$createArray(24);
    for(i_0 = 0; i_0 < 24; ++i_0)this.ct[i_0] = ~~(i_0 / 4);
}
function $dad7a63b97b5bac2$var$CenterCube_1(randomUIntBelow) {
    let i_0, m_0, t;
    $dad7a63b97b5bac2$var$CenterCube_0.call(this);
    for(i_0 = 0; i_0 < 23; ++i_0){
        t = i_0 + randomUIntBelow(24 - i_0);
        if (this.ct[t] !== this.ct[i_0]) {
            m_0 = this.ct[i_0];
            this.ct[i_0] = this.ct[t];
            this.ct[t] = m_0;
        }
    }
}
$dad7a63b97b5bac2$var$defineSeed(156, 1, {}, $dad7a63b97b5bac2$var$CenterCube_0, $dad7a63b97b5bac2$var$CenterCube_1);
var $dad7a63b97b5bac2$var$ran$clinit_CornerCube = false;
function $dad7a63b97b5bac2$var$$clinit_CornerCube() {
    if ($dad7a63b97b5bac2$var$ran$clinit_CornerCube) return;
    $dad7a63b97b5bac2$var$ran$clinit_CornerCube = true;
    $dad7a63b97b5bac2$var$moveCube_0 = $dad7a63b97b5bac2$var$createArray(18);
    $dad7a63b97b5bac2$var$initMove_0();
}
function $dad7a63b97b5bac2$var$$$init_2(this$static) {
    this$static.cp = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ];
    this$static.co = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
}
function $dad7a63b97b5bac2$var$$copy_2(this$static, c) {
    let i_0;
    for(i_0 = 0; i_0 < 8; ++i_0){
        this$static.cp[i_0] = c.cp[i_0];
        this$static.co[i_0] = c.co[i_0];
    }
}
function $dad7a63b97b5bac2$var$$move_3(this$static, idx) {
    !this$static.temps && (this$static.temps = new $dad7a63b97b5bac2$var$CornerCube_0());
    $dad7a63b97b5bac2$var$CornMult_0(this$static, $dad7a63b97b5bac2$var$moveCube_0[idx], this$static.temps);
    $dad7a63b97b5bac2$var$$copy_2(this$static, this$static.temps);
}
function $dad7a63b97b5bac2$var$$setTwist_0(this$static, idx) {
    let i_0, twst;
    twst = 0;
    for(i_0 = 6; i_0 >= 0; --i_0){
        twst += this$static.co[i_0] = idx % 3;
        idx = ~~(idx / 3);
    }
    this$static.co[7] = (15 - twst) % 3;
}
function $dad7a63b97b5bac2$var$CornMult_0(a, b, prod) {
    let corn, ori, oriA, oriB;
    for(corn = 0; corn < 8; ++corn){
        prod.cp[corn] = a.cp[b.cp[corn]];
        oriA = a.co[b.cp[corn]];
        oriB = b.co[corn];
        ori = oriA;
        ori = ori + (oriA < 3 ? oriB : 6 - oriB);
        ori = ori % 3;
        (oriA >= 3 ? 1 : 0) ^ (oriB >= 3 ? 1 : 0) && (ori = ori + 3);
        prod.co[corn] = ori;
    }
}
function $dad7a63b97b5bac2$var$CornerCube_0() {
    $dad7a63b97b5bac2$var$$$init_2(this);
}
function $dad7a63b97b5bac2$var$CornerCube_1(cperm, twist) {
    $dad7a63b97b5bac2$var$$$init_2(this);
    $dad7a63b97b5bac2$var$set8Perm(this.cp, cperm);
    $dad7a63b97b5bac2$var$$setTwist_0(this, twist);
}
function $dad7a63b97b5bac2$var$CornerCube_2(randomUIntBelow) {
    $dad7a63b97b5bac2$var$CornerCube_1.call(this, randomUIntBelow(40320), randomUIntBelow(2187));
}
function $dad7a63b97b5bac2$var$initMove_0() {
    let a, p_0;
    $dad7a63b97b5bac2$var$moveCube_0[0] = new $dad7a63b97b5bac2$var$CornerCube_1(15120, 0);
    $dad7a63b97b5bac2$var$moveCube_0[3] = new $dad7a63b97b5bac2$var$CornerCube_1(21021, 1494);
    $dad7a63b97b5bac2$var$moveCube_0[6] = new $dad7a63b97b5bac2$var$CornerCube_1(8064, 1236);
    $dad7a63b97b5bac2$var$moveCube_0[9] = new $dad7a63b97b5bac2$var$CornerCube_1(9, 0);
    $dad7a63b97b5bac2$var$moveCube_0[12] = new $dad7a63b97b5bac2$var$CornerCube_1(1230, 412);
    $dad7a63b97b5bac2$var$moveCube_0[15] = new $dad7a63b97b5bac2$var$CornerCube_1(224, 137);
    for(a = 0; a < 18; a += 3)for(p_0 = 0; p_0 < 2; ++p_0){
        $dad7a63b97b5bac2$var$moveCube_0[a + p_0 + 1] = new $dad7a63b97b5bac2$var$CornerCube_0();
        $dad7a63b97b5bac2$var$CornMult_0($dad7a63b97b5bac2$var$moveCube_0[a + p_0], $dad7a63b97b5bac2$var$moveCube_0[a], $dad7a63b97b5bac2$var$moveCube_0[a + p_0 + 1]);
    }
}
$dad7a63b97b5bac2$var$defineSeed(157, 1, $dad7a63b97b5bac2$var$makeCastMap([
    $dad7a63b97b5bac2$var$Q$CornerCube
]), $dad7a63b97b5bac2$var$CornerCube_0, $dad7a63b97b5bac2$var$CornerCube_1, $dad7a63b97b5bac2$var$CornerCube_2);
$dad7a63b97b5bac2$var$_.temps = null;
var $dad7a63b97b5bac2$var$moveCube_0;
var $dad7a63b97b5bac2$var$ran$clinit_Edge3 = false;
function $dad7a63b97b5bac2$var$$clinit_Edge3() {
    if ($dad7a63b97b5bac2$var$ran$clinit_Edge3) return;
    $dad7a63b97b5bac2$var$ran$clinit_Edge3 = true;
    $dad7a63b97b5bac2$var$eprun = $dad7a63b97b5bac2$var$createArray(1937880);
    $dad7a63b97b5bac2$var$sym2raw_0 = $dad7a63b97b5bac2$var$createArray(1538);
    $dad7a63b97b5bac2$var$symstate = $dad7a63b97b5bac2$var$createArray(1538);
    $dad7a63b97b5bac2$var$raw2sym_1 = $dad7a63b97b5bac2$var$createArray(11880);
    $dad7a63b97b5bac2$var$syminv_0 = [
        0,
        1,
        6,
        3,
        4,
        5,
        2,
        7
    ];
    $dad7a63b97b5bac2$var$mvrot = $dad7a63b97b5bac2$var$createArray(160, 12);
    $dad7a63b97b5bac2$var$mvroto = $dad7a63b97b5bac2$var$createArray(160, 12);
    $dad7a63b97b5bac2$var$factX = [
        1,
        1,
        1,
        3,
        12,
        60,
        360,
        2520,
        20160,
        181440,
        1814400,
        19958400,
        239500800
    ];
    $dad7a63b97b5bac2$var$FullEdgeMap = [
        0,
        2,
        4,
        6,
        1,
        3,
        7,
        5,
        8,
        9,
        10,
        11
    ];
}
function $dad7a63b97b5bac2$var$$circlex(this$static, a, b, c, d) {
    const temp = this$static.edgeo[d];
    this$static.edgeo[d] = this$static.edge[c];
    this$static.edge[c] = this$static.edgeo[b];
    this$static.edgeo[b] = this$static.edge[a];
    this$static.edge[a] = temp;
}
function $dad7a63b97b5bac2$var$$get_2(this$static, end) {
    let i_0, idx, v, valh, vall;
    this$static.isStd || $dad7a63b97b5bac2$var$$std(this$static);
    idx = 0;
    vall = 1985229328;
    valh = 47768;
    for(i_0 = 0; i_0 < end; ++i_0){
        v = this$static.edge[i_0] << 2;
        idx *= 12 - i_0;
        if (v >= 32) {
            idx += valh >> v - 32 & 15;
            valh -= 4368 << v - 32;
        } else {
            idx += vall >> v & 15;
            valh -= 4369;
            vall -= 286331152 << v;
        }
    }
    return idx;
}
function $dad7a63b97b5bac2$var$$getsym_0(this$static) {
    let symcord1x;
    const cord1x = $dad7a63b97b5bac2$var$$get_2(this$static, 4);
    symcord1x = $dad7a63b97b5bac2$var$raw2sym_1[cord1x];
    const symx = symcord1x & 7;
    symcord1x >>= 3;
    $dad7a63b97b5bac2$var$$rotate_0(this$static, symx);
    const cord2x = $dad7a63b97b5bac2$var$$get_2(this$static, 10) % 20160;
    return symcord1x * 20160 + cord2x;
}
function $dad7a63b97b5bac2$var$$move_4(this$static, i_0) {
    this$static.isStd = false;
    switch(i_0){
        case 0:
            $dad7a63b97b5bac2$var$circle(this$static.edge, 0, 4, 1, 5);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 0, 4, 1, 5);
            break;
        case 1:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 0, 4, 1, 5);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 0, 4, 1, 5);
            break;
        case 2:
            $dad7a63b97b5bac2$var$circle(this$static.edge, 0, 5, 1, 4);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 0, 5, 1, 4);
            break;
        case 3:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 5, 10, 6, 11);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 5, 10, 6, 11);
            break;
        case 4:
            $dad7a63b97b5bac2$var$circle(this$static.edge, 0, 11, 3, 8);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 0, 11, 3, 8);
            break;
        case 5:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 0, 11, 3, 8);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 0, 11, 3, 8);
            break;
        case 6:
            $dad7a63b97b5bac2$var$circle(this$static.edge, 0, 8, 3, 11);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 0, 8, 3, 11);
            break;
        case 7:
            $dad7a63b97b5bac2$var$circle(this$static.edge, 2, 7, 3, 6);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 2, 7, 3, 6);
            break;
        case 8:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 2, 7, 3, 6);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 2, 7, 3, 6);
            break;
        case 9:
            $dad7a63b97b5bac2$var$circle(this$static.edge, 2, 6, 3, 7);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 2, 6, 3, 7);
            break;
        case 10:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 4, 8, 7, 9);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 4, 8, 7, 9);
            break;
        case 11:
            $dad7a63b97b5bac2$var$circle(this$static.edge, 1, 9, 2, 10);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 1, 9, 2, 10);
            break;
        case 12:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 1, 9, 2, 10);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 1, 9, 2, 10);
            break;
        case 13:
            $dad7a63b97b5bac2$var$circle(this$static.edge, 1, 10, 2, 9);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 1, 10, 2, 9);
            break;
        case 14:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 0, 4, 1, 5);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 0, 4, 1, 5);
            $dad7a63b97b5bac2$var$circle(this$static.edge, 9, 11);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 8, 10);
            break;
        case 15:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 5, 10, 6, 11);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 5, 10, 6, 11);
            $dad7a63b97b5bac2$var$circle(this$static.edge, 1, 3);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 0, 2);
            break;
        case 16:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 0, 11, 3, 8);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 0, 11, 3, 8);
            $dad7a63b97b5bac2$var$circle(this$static.edge, 5, 7);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 4, 6);
            break;
        case 17:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 2, 7, 3, 6);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 2, 7, 3, 6);
            $dad7a63b97b5bac2$var$circle(this$static.edge, 8, 10);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 9, 11);
            break;
        case 18:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 4, 8, 7, 9);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 4, 8, 7, 9);
            $dad7a63b97b5bac2$var$circle(this$static.edge, 0, 2);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 1, 3);
            break;
        case 19:
            $dad7a63b97b5bac2$var$$swap_0(this$static.edge, 1, 9, 2, 10);
            $dad7a63b97b5bac2$var$$swap_0(this$static.edgeo, 1, 9, 2, 10);
            $dad7a63b97b5bac2$var$circle(this$static.edge, 4, 6);
            $dad7a63b97b5bac2$var$circle(this$static.edgeo, 5, 7);
    }
}
function $dad7a63b97b5bac2$var$$rot_1(this$static, r) {
    this$static.isStd = false;
    switch(r){
        case 0:
            $dad7a63b97b5bac2$var$$move_4(this$static, 14);
            $dad7a63b97b5bac2$var$$move_4(this$static, 17);
            break;
        case 1:
            $dad7a63b97b5bac2$var$$circlex(this$static, 11, 5, 10, 6);
            $dad7a63b97b5bac2$var$$circlex(this$static, 5, 10, 6, 11);
            $dad7a63b97b5bac2$var$$circlex(this$static, 1, 2, 3, 0);
            $dad7a63b97b5bac2$var$$circlex(this$static, 4, 9, 7, 8);
            $dad7a63b97b5bac2$var$$circlex(this$static, 8, 4, 9, 7);
            $dad7a63b97b5bac2$var$$circlex(this$static, 0, 1, 2, 3);
            break;
        case 2:
            $dad7a63b97b5bac2$var$$swapx(this$static, 4, 5);
            $dad7a63b97b5bac2$var$$swapx(this$static, 5, 4);
            $dad7a63b97b5bac2$var$$swapx(this$static, 11, 8);
            $dad7a63b97b5bac2$var$$swapx(this$static, 8, 11);
            $dad7a63b97b5bac2$var$$swapx(this$static, 7, 6);
            $dad7a63b97b5bac2$var$$swapx(this$static, 6, 7);
            $dad7a63b97b5bac2$var$$swapx(this$static, 9, 10);
            $dad7a63b97b5bac2$var$$swapx(this$static, 10, 9);
            $dad7a63b97b5bac2$var$$swapx(this$static, 1, 1);
            $dad7a63b97b5bac2$var$$swapx(this$static, 0, 0);
            $dad7a63b97b5bac2$var$$swapx(this$static, 3, 3);
            $dad7a63b97b5bac2$var$$swapx(this$static, 2, 2);
    }
}
function $dad7a63b97b5bac2$var$$rotate_0(this$static, r) {
    while(r >= 2){
        r -= 2;
        $dad7a63b97b5bac2$var$$rot_1(this$static, 1);
        $dad7a63b97b5bac2$var$$rot_1(this$static, 2);
    }
    r !== 0 && $dad7a63b97b5bac2$var$$rot_1(this$static, 0);
}
function $dad7a63b97b5bac2$var$$set_4(this$static, idx) {
    let i_0, p_0, parity, v, vall, valh;
    vall = 1985229328;
    valh = 47768;
    parity = 0;
    for(i_0 = 0; i_0 < 11; ++i_0){
        p_0 = $dad7a63b97b5bac2$var$factX[11 - i_0];
        v = ~~(idx / p_0);
        idx = idx % p_0;
        parity ^= v;
        v <<= 2;
        if (v >= 32) {
            v = v - 32;
            this$static.edge[i_0] = valh >> v & 15;
            const m = (1 << v) - 1;
            valh = (valh & m) + (valh >> 4 & ~m);
        } else {
            this$static.edge[i_0] = vall >> v & 15;
            const m = (1 << v) - 1;
            vall = (vall & m) + (vall >>> 4 & ~m) + (valh << 28);
            valh = valh >> 4;
        }
    }
    if ((parity & 1) === 0) this$static.edge[11] = vall;
    else {
        this$static.edge[11] = this$static.edge[10];
        this$static.edge[10] = vall;
    }
    for(i_0 = 0; i_0 < 12; ++i_0)this$static.edgeo[i_0] = i_0;
    this$static.isStd = true;
}
function $dad7a63b97b5bac2$var$$set_5(this$static, e) {
    let i_0;
    for(i_0 = 0; i_0 < 12; ++i_0){
        this$static.edge[i_0] = e.edge[i_0];
        this$static.edgeo[i_0] = e.edgeo[i_0];
    }
    this$static.isStd = e.isStd;
}
function $dad7a63b97b5bac2$var$$set_6(this$static, c) {
    let i_0, parity, s, t;
    this$static.temp === null && (this$static.temp = $dad7a63b97b5bac2$var$createArray(12));
    for(i_0 = 0; i_0 < 12; ++i_0){
        this$static.temp[i_0] = i_0;
        this$static.edge[i_0] = c.ep[$dad7a63b97b5bac2$var$FullEdgeMap[i_0] + 12] % 12;
    }
    parity = 1;
    for(i_0 = 0; i_0 < 12; ++i_0)while(this$static.edge[i_0] !== i_0){
        t = this$static.edge[i_0];
        this$static.edge[i_0] = this$static.edge[t];
        this$static.edge[t] = t;
        s = this$static.temp[i_0];
        this$static.temp[i_0] = this$static.temp[t];
        this$static.temp[t] = s;
        parity ^= 1;
    }
    for(i_0 = 0; i_0 < 12; ++i_0)this$static.edge[i_0] = this$static.temp[c.ep[$dad7a63b97b5bac2$var$FullEdgeMap[i_0]] % 12];
    return parity;
}
function $dad7a63b97b5bac2$var$$std(this$static) {
    let i_0;
    this$static.temp === null && (this$static.temp = $dad7a63b97b5bac2$var$createArray(12));
    for(i_0 = 0; i_0 < 12; ++i_0)this$static.temp[this$static.edgeo[i_0]] = i_0;
    for(i_0 = 0; i_0 < 12; ++i_0){
        this$static.edge[i_0] = this$static.temp[this$static.edge[i_0]];
        this$static.edgeo[i_0] = i_0;
    }
    this$static.isStd = true;
}
function $dad7a63b97b5bac2$var$$swap_0(arr, a, b, c, d) {
    let temp;
    temp = arr[a];
    arr[a] = arr[c];
    arr[c] = temp;
    temp = arr[b];
    arr[b] = arr[d];
    arr[d] = temp;
}
function $dad7a63b97b5bac2$var$$swapx(this$static, x, y) {
    const temp = this$static.edge[x];
    this$static.edge[x] = this$static.edgeo[y];
    this$static.edgeo[y] = temp;
}
function $dad7a63b97b5bac2$var$Edge3_0() {
    this.edge = $dad7a63b97b5bac2$var$createArray(12);
    this.edgeo = $dad7a63b97b5bac2$var$createArray(12);
}
function $dad7a63b97b5bac2$var$createPrun_0() {
    let chk, cord1, cord1x, cord2, cord2x, dep1m3, depm3, depth, end, find_0, i_0, i_, idx, idxx, inv, j, m_0, symState, symcord1, symcord1x, symx, val;
    const e = new $dad7a63b97b5bac2$var$Edge3_0();
    const f = new $dad7a63b97b5bac2$var$Edge3_0();
    const g = new $dad7a63b97b5bac2$var$Edge3_0();
    $dad7a63b97b5bac2$var$fill_0($dad7a63b97b5bac2$var$eprun);
    depth = 0;
    $dad7a63b97b5bac2$var$done_0 = 1;
    $dad7a63b97b5bac2$var$setPruning_0($dad7a63b97b5bac2$var$eprun, 0, 0);
    while($dad7a63b97b5bac2$var$done_0 !== 31006080){
        inv = depth > 9;
        depm3 = depth % 3;
        dep1m3 = (depth + 1) % 3;
        find_0 = inv ? 3 : depm3;
        chk = inv ? depm3 : 3;
        if (depth >= 9) break;
        for(i_ = 0; i_ < 31006080; i_ += 16){
            val = $dad7a63b97b5bac2$var$eprun[~~i_ >> 4];
            if (!inv && val === -1) continue;
            for(i_0 = i_, end = i_ + 16; i_0 < end; ++i_0, val >>= 2){
                if ((val & 3) !== find_0) continue;
                symcord1 = ~~(i_0 / 20160);
                cord1 = $dad7a63b97b5bac2$var$sym2raw_0[symcord1];
                cord2 = i_0 % 20160;
                $dad7a63b97b5bac2$var$$set_4(e, cord1 * 20160 + cord2);
                for(m_0 = 0; m_0 < 17; ++m_0){
                    cord1x = $dad7a63b97b5bac2$var$getmvrot(e.edge, m_0 << 3, 4);
                    symcord1x = $dad7a63b97b5bac2$var$raw2sym_1[cord1x];
                    symx = symcord1x & 7;
                    symcord1x >>= 3;
                    cord2x = $dad7a63b97b5bac2$var$getmvrot(e.edge, m_0 << 3 | symx, 10) % 20160;
                    idx = symcord1x * 20160 + cord2x;
                    if ($dad7a63b97b5bac2$var$getPruning_0($dad7a63b97b5bac2$var$eprun, idx) !== chk) continue;
                    $dad7a63b97b5bac2$var$setPruning_0($dad7a63b97b5bac2$var$eprun, inv ? i_0 : idx, dep1m3);
                    ++$dad7a63b97b5bac2$var$done_0;
                    if (inv) break;
                    symState = $dad7a63b97b5bac2$var$symstate[symcord1x];
                    if (symState === 1) continue;
                    $dad7a63b97b5bac2$var$$set_5(f, e);
                    $dad7a63b97b5bac2$var$$move_4(f, m_0);
                    $dad7a63b97b5bac2$var$$rotate_0(f, symx);
                    for(j = 1; (symState = ~~symState >> 1 & 65535) !== 0; ++j){
                        if ((symState & 1) !== 1) continue;
                        $dad7a63b97b5bac2$var$$set_5(g, f);
                        $dad7a63b97b5bac2$var$$rotate_0(g, j);
                        idxx = symcord1x * 20160 + $dad7a63b97b5bac2$var$$get_2(g, 10) % 20160;
                        if ($dad7a63b97b5bac2$var$getPruning_0($dad7a63b97b5bac2$var$eprun, idxx) === chk) {
                            $dad7a63b97b5bac2$var$setPruning_0($dad7a63b97b5bac2$var$eprun, idxx, dep1m3);
                            ++$dad7a63b97b5bac2$var$done_0;
                        }
                    }
                }
            }
        }
        ++depth;
    }
}
function $dad7a63b97b5bac2$var$getPruning_0(table, index) {
    return table[index >> 4] >> ((index & 15) << 1) & 3;
}
function $dad7a63b97b5bac2$var$getmvrot(ep, mrIdx, end) {
    let i_0, idx, v, valh, vall;
    const movo = $dad7a63b97b5bac2$var$mvroto[mrIdx];
    const mov = $dad7a63b97b5bac2$var$mvrot[mrIdx];
    idx = 0;
    vall = 1985229328;
    valh = 47768;
    for(i_0 = 0; i_0 < end; ++i_0){
        v = movo[ep[mov[i_0]]] << 2;
        idx *= 12 - i_0;
        if (v >= 32) {
            idx += valh >> v - 32 & 15;
            valh -= 4368 << v - 32;
        } else {
            idx += vall >> v & 15;
            valh -= 4369;
            vall -= 286331152 << v;
        }
    }
    return idx;
}
function $dad7a63b97b5bac2$var$getprun(edge) {
    let cord1, cord1x, cord2, cord2x, depm3, depth, idx, m_0, symcord1, symcord1x, symx;
    const e = new $dad7a63b97b5bac2$var$Edge3_0();
    depth = 0;
    depm3 = $dad7a63b97b5bac2$var$getPruning_0($dad7a63b97b5bac2$var$eprun, edge);
    if (depm3 === 3) return 10;
    while(edge !== 0){
        depm3 === 0 ? depm3 = 2 : --depm3;
        symcord1 = ~~(edge / 20160);
        cord1 = $dad7a63b97b5bac2$var$sym2raw_0[symcord1];
        cord2 = edge % 20160;
        $dad7a63b97b5bac2$var$$set_4(e, cord1 * 20160 + cord2);
        for(m_0 = 0; m_0 < 17; ++m_0){
            cord1x = $dad7a63b97b5bac2$var$getmvrot(e.edge, m_0 << 3, 4);
            symcord1x = $dad7a63b97b5bac2$var$raw2sym_1[cord1x];
            symx = symcord1x & 7;
            symcord1x >>= 3;
            cord2x = $dad7a63b97b5bac2$var$getmvrot(e.edge, m_0 << 3 | symx, 10) % 20160;
            idx = symcord1x * 20160 + cord2x;
            if ($dad7a63b97b5bac2$var$getPruning_0($dad7a63b97b5bac2$var$eprun, idx) === depm3) {
                ++depth;
                edge = idx;
                break;
            }
        }
    }
    return depth;
}
function $dad7a63b97b5bac2$var$getprun_0(edge, prun) {
    const depm3 = $dad7a63b97b5bac2$var$getPruning_0($dad7a63b97b5bac2$var$eprun, edge);
    if (depm3 === 3) return 10;
    return (1227133513 << depm3 >> prun & 3) + prun - 1;
}
function $dad7a63b97b5bac2$var$initMvrot() {
    let i_0, m_0, r;
    const e = new $dad7a63b97b5bac2$var$Edge3_0();
    for(m_0 = 0; m_0 < 20; ++m_0)for(r = 0; r < 8; ++r){
        $dad7a63b97b5bac2$var$$set_4(e, 0);
        $dad7a63b97b5bac2$var$$move_4(e, m_0);
        $dad7a63b97b5bac2$var$$rotate_0(e, r);
        for(i_0 = 0; i_0 < 12; ++i_0)$dad7a63b97b5bac2$var$mvrot[m_0 << 3 | r][i_0] = e.edge[i_0];
        $dad7a63b97b5bac2$var$$std(e);
        for(i_0 = 0; i_0 < 12; ++i_0)$dad7a63b97b5bac2$var$mvroto[m_0 << 3 | r][i_0] = e.temp[i_0];
    }
}
function $dad7a63b97b5bac2$var$initRaw2Sym() {
    let count, i_0, idx, j;
    const e = new $dad7a63b97b5bac2$var$Edge3_0();
    const occ = $dad7a63b97b5bac2$var$createArray(1485);
    for(i_0 = 0; i_0 < 1485; i_0++)occ[i_0] = 0;
    count = 0;
    for(i_0 = 0; i_0 < 11880; ++i_0)if ((occ[~~i_0 >>> 3] & 1 << (i_0 & 7)) === 0) {
        $dad7a63b97b5bac2$var$$set_4(e, i_0 * $dad7a63b97b5bac2$var$factX[8]);
        for(j = 0; j < 8; ++j){
            idx = $dad7a63b97b5bac2$var$$get_2(e, 4);
            idx === i_0 && ($dad7a63b97b5bac2$var$symstate[count] = ($dad7a63b97b5bac2$var$symstate[count] | 1 << j) & 65535);
            occ[~~idx >> 3] = occ[~~idx >> 3] | 1 << (idx & 7);
            $dad7a63b97b5bac2$var$raw2sym_1[idx] = count << 3 | $dad7a63b97b5bac2$var$syminv_0[j];
            $dad7a63b97b5bac2$var$$rot_1(e, 0);
            if (j % 2 === 1) {
                $dad7a63b97b5bac2$var$$rot_1(e, 1);
                $dad7a63b97b5bac2$var$$rot_1(e, 2);
            }
        }
        $dad7a63b97b5bac2$var$sym2raw_0[count++] = i_0;
    }
}
function $dad7a63b97b5bac2$var$setPruning_0(table, index, value) {
    table[index >> 4] ^= (3 ^ value) << ((index & 15) << 1);
}
$dad7a63b97b5bac2$var$defineSeed(158, 1, $dad7a63b97b5bac2$var$makeCastMap([
    $dad7a63b97b5bac2$var$Q$Edge3
]), $dad7a63b97b5bac2$var$Edge3_0);
$dad7a63b97b5bac2$var$_.isStd = true;
$dad7a63b97b5bac2$var$_.temp = null;
var $dad7a63b97b5bac2$var$FullEdgeMap;
var $dad7a63b97b5bac2$var$done_0 = 0;
var $dad7a63b97b5bac2$var$eprun;
var $dad7a63b97b5bac2$var$factX;
var $dad7a63b97b5bac2$var$mvrot;
var $dad7a63b97b5bac2$var$mvroto;
var $dad7a63b97b5bac2$var$raw2sym_1;
var $dad7a63b97b5bac2$var$sym2raw_0;
var $dad7a63b97b5bac2$var$syminv_0;
var $dad7a63b97b5bac2$var$symstate;
var $dad7a63b97b5bac2$var$ran$clinit_EdgeCube = false;
function $dad7a63b97b5bac2$var$$clinit_EdgeCube() {
    if ($dad7a63b97b5bac2$var$ran$clinit_EdgeCube) return;
    $dad7a63b97b5bac2$var$ran$clinit_EdgeCube = true;
}
function $dad7a63b97b5bac2$var$$checkEdge(this$static) {
    let ck, i_0, parity;
    ck = 0;
    parity = false;
    for(i_0 = 0; i_0 < 12; ++i_0){
        ck |= 1 << this$static.ep[i_0];
        parity = parity !== this$static.ep[i_0] >= 12;
    }
    ck &= ~~ck >> 12;
    return ck === 0 && !parity;
}
function $dad7a63b97b5bac2$var$$copy_3(this$static, c) {
    let i_0;
    for(i_0 = 0; i_0 < 24; ++i_0)this$static.ep[i_0] = c.ep[i_0];
}
function $dad7a63b97b5bac2$var$$move_5(this$static, m_0) {
    const key = m_0 % 3;
    m_0 = ~~(m_0 / 3);
    switch(m_0){
        case 0:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 0, 1, 2, 3, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 12, 13, 14, 15, key);
            break;
        case 1:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 11, 15, 10, 19, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 23, 3, 22, 7, key);
            break;
        case 2:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 0, 11, 6, 8, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 12, 23, 18, 20, key);
            break;
        case 3:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 4, 5, 6, 7, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 16, 17, 18, 19, key);
            break;
        case 4:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 1, 20, 5, 21, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 13, 8, 17, 9, key);
            break;
        case 5:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 2, 9, 4, 10, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 14, 21, 16, 22, key);
            break;
        case 6:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 0, 1, 2, 3, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 12, 13, 14, 15, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 9, 22, 11, 20, key);
            break;
        case 7:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 11, 15, 10, 19, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 23, 3, 22, 7, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 2, 16, 6, 12, key);
            break;
        case 8:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 0, 11, 6, 8, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 12, 23, 18, 20, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 3, 19, 5, 13, key);
            break;
        case 9:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 4, 5, 6, 7, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 16, 17, 18, 19, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 8, 23, 10, 21, key);
            break;
        case 10:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 1, 20, 5, 21, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 13, 8, 17, 9, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 14, 0, 18, 4, key);
            break;
        case 11:
            $dad7a63b97b5bac2$var$swap(this$static.ep, 2, 9, 4, 10, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 14, 21, 16, 22, key);
            $dad7a63b97b5bac2$var$swap(this$static.ep, 7, 15, 1, 17, key);
    }
}
function $dad7a63b97b5bac2$var$EdgeCube_0() {
    let i_0;
    this.ep = $dad7a63b97b5bac2$var$createArray(24);
    for(i_0 = 0; i_0 < 24; ++i_0)this.ep[i_0] = i_0;
}
function $dad7a63b97b5bac2$var$EdgeCube_1(randomUIntBelow) {
    let i_0, m_0, t;
    $dad7a63b97b5bac2$var$EdgeCube_0.call(this);
    for(i_0 = 0; i_0 < 23; ++i_0){
        t = i_0 + randomUIntBelow(24 - i_0);
        if (t !== i_0) {
            m_0 = this.ep[i_0];
            this.ep[i_0] = this.ep[t];
            this.ep[t] = m_0;
        }
    }
}
$dad7a63b97b5bac2$var$defineSeed(159, 1, {}, $dad7a63b97b5bac2$var$EdgeCube_0, $dad7a63b97b5bac2$var$EdgeCube_1);
var $dad7a63b97b5bac2$var$ran$clinit_FullCube_0 = false;
function $dad7a63b97b5bac2$var$$clinit_FullCube_0() {
    if ($dad7a63b97b5bac2$var$ran$clinit_FullCube_0) return;
    $dad7a63b97b5bac2$var$ran$clinit_FullCube_0 = true;
    $dad7a63b97b5bac2$var$move2rot = [
        35,
        1,
        34,
        2,
        4,
        6,
        22,
        5,
        19
    ];
}
function $dad7a63b97b5bac2$var$$$init_3(this$static) {
    this$static.moveBuffer = $dad7a63b97b5bac2$var$createArray(60);
}
function $dad7a63b97b5bac2$var$$compareTo_1(this$static, c) {
    return this$static.value - c.value;
}
function $dad7a63b97b5bac2$var$$copy_4(this$static, c) {
    let i_0;
    $dad7a63b97b5bac2$var$$copy_3(this$static.edge, c.edge);
    $dad7a63b97b5bac2$var$$copy_1(this$static.center, c.center);
    $dad7a63b97b5bac2$var$$copy_2(this$static.corner, c.corner);
    this$static.value = c.value;
    this$static.add1 = c.add1;
    this$static.length1 = c.length1;
    this$static.length2 = c.length2;
    this$static.length3 = c.length3;
    this$static.sym = c.sym;
    for(i_0 = 0; i_0 < 60; ++i_0)this$static.moveBuffer[i_0] = c.moveBuffer[i_0];
    this$static.moveLength = c.moveLength;
    this$static.edgeAvail = c.edgeAvail;
    this$static.centerAvail = c.centerAvail;
    this$static.cornerAvail = c.cornerAvail;
}
function $dad7a63b97b5bac2$var$$getCenter(this$static) {
    while(this$static.centerAvail < this$static.moveLength)$dad7a63b97b5bac2$var$$move_2(this$static.center, this$static.moveBuffer[this$static.centerAvail++]);
    return this$static.center;
}
function $dad7a63b97b5bac2$var$$getCorner(this$static) {
    while(this$static.cornerAvail < this$static.moveLength)$dad7a63b97b5bac2$var$$move_3(this$static.corner, this$static.moveBuffer[this$static.cornerAvail++] % 18);
    return this$static.corner;
}
function $dad7a63b97b5bac2$var$$getEdge(this$static) {
    while(this$static.edgeAvail < this$static.moveLength)$dad7a63b97b5bac2$var$$move_5(this$static.edge, this$static.moveBuffer[this$static.edgeAvail++]);
    return this$static.edge;
}
function $dad7a63b97b5bac2$var$$getMoveString(this$static) {
    let i_0, idx, move, rot, sb, sym;
    const fixedMoves = new Array(this$static.moveLength - (this$static.add1 ? 2 : 0));
    idx = 0;
    for(i_0 = 0; i_0 < this$static.length1; ++i_0)fixedMoves[idx++] = this$static.moveBuffer[i_0];
    sym = this$static.sym;
    for(i_0 = this$static.length1 + (this$static.add1 ? 2 : 0); i_0 < this$static.moveLength; ++i_0)if ($dad7a63b97b5bac2$var$symmove[sym][this$static.moveBuffer[i_0]] >= 27) {
        fixedMoves[idx++] = $dad7a63b97b5bac2$var$symmove[sym][this$static.moveBuffer[i_0]] - 9;
        rot = $dad7a63b97b5bac2$var$move2rot[$dad7a63b97b5bac2$var$symmove[sym][this$static.moveBuffer[i_0]] - 27];
        sym = $dad7a63b97b5bac2$var$symmult[sym][rot];
    } else fixedMoves[idx++] = $dad7a63b97b5bac2$var$symmove[sym][this$static.moveBuffer[i_0]];
    const finishSym = $dad7a63b97b5bac2$var$symmult[$dad7a63b97b5bac2$var$syminv[sym]][$dad7a63b97b5bac2$var$getSolvedSym($dad7a63b97b5bac2$var$$getCenter(this$static))];
    sb = "";
    sym = finishSym;
    for(i_0 = idx - 1; i_0 >= 0; --i_0){
        move = fixedMoves[i_0];
        move = ~~(move / 3) * 3 + (2 - move % 3);
        if ($dad7a63b97b5bac2$var$symmove[sym][move] >= 27) {
            sb = sb + $dad7a63b97b5bac2$var$move2str_1[$dad7a63b97b5bac2$var$symmove[sym][move] - 9] + " ";
            rot = $dad7a63b97b5bac2$var$move2rot[$dad7a63b97b5bac2$var$symmove[sym][move] - 27];
            sym = $dad7a63b97b5bac2$var$symmult[sym][rot];
        } else sb = sb + $dad7a63b97b5bac2$var$move2str_1[$dad7a63b97b5bac2$var$symmove[sym][move]] + " ";
    }
    return sb;
}
function $dad7a63b97b5bac2$var$$move_6(this$static, m_0) {
    this$static.moveBuffer[this$static.moveLength++] = m_0;
    return;
}
function $dad7a63b97b5bac2$var$FullCube_3() {
    $dad7a63b97b5bac2$var$$$init_3(this);
    this.edge = new $dad7a63b97b5bac2$var$EdgeCube_0();
    this.center = new $dad7a63b97b5bac2$var$CenterCube_0();
    this.corner = new $dad7a63b97b5bac2$var$CornerCube_0();
}
function $dad7a63b97b5bac2$var$FullCube_4(c) {
    $dad7a63b97b5bac2$var$FullCube_3.call(this);
    $dad7a63b97b5bac2$var$$copy_4(this, c);
}
function $dad7a63b97b5bac2$var$FullCube_5(randomUIntBelow) {
    $dad7a63b97b5bac2$var$$$init_3(this);
    this.edge = new $dad7a63b97b5bac2$var$EdgeCube_1(randomUIntBelow);
    this.center = new $dad7a63b97b5bac2$var$CenterCube_1(randomUIntBelow);
    this.corner = new $dad7a63b97b5bac2$var$CornerCube_2(randomUIntBelow);
}
$dad7a63b97b5bac2$var$defineSeed(160, 1, $dad7a63b97b5bac2$var$makeCastMap([
    $dad7a63b97b5bac2$var$Q$FullCube_0,
    $dad7a63b97b5bac2$var$Q$Comparable
]), $dad7a63b97b5bac2$var$FullCube_3, $dad7a63b97b5bac2$var$FullCube_4, $dad7a63b97b5bac2$var$FullCube_5);
$dad7a63b97b5bac2$var$_.compareTo$ = function compareTo_1(c) {
    return $dad7a63b97b5bac2$var$$compareTo_1(this, c);
};
$dad7a63b97b5bac2$var$_.add1 = false;
$dad7a63b97b5bac2$var$_.center = null;
$dad7a63b97b5bac2$var$_.centerAvail = 0;
$dad7a63b97b5bac2$var$_.corner = null;
$dad7a63b97b5bac2$var$_.cornerAvail = 0;
$dad7a63b97b5bac2$var$_.edge = null;
$dad7a63b97b5bac2$var$_.edgeAvail = 0;
$dad7a63b97b5bac2$var$_.length1 = 0;
$dad7a63b97b5bac2$var$_.length2 = 0;
$dad7a63b97b5bac2$var$_.length3 = 0;
$dad7a63b97b5bac2$var$_.moveLength = 0;
$dad7a63b97b5bac2$var$_.sym = 0;
$dad7a63b97b5bac2$var$_.value = 0;
var $dad7a63b97b5bac2$var$move2rot;
function $dad7a63b97b5bac2$var$$compare(c1, c2) {
    return c2.value - c1.value;
}
function $dad7a63b97b5bac2$var$$compare_0(c1, c2) {
    return $dad7a63b97b5bac2$var$$compare(c1, c2);
}
function $dad7a63b97b5bac2$var$FullCube$ValueComparator_0() {}
$dad7a63b97b5bac2$var$defineSeed(161, 1, {}, $dad7a63b97b5bac2$var$FullCube$ValueComparator_0);
$dad7a63b97b5bac2$var$_.compare = function compare(c1, c2) {
    return $dad7a63b97b5bac2$var$$compare_0(c1, c2);
};
var $dad7a63b97b5bac2$var$ran$clinit_Moves = false;
function $dad7a63b97b5bac2$var$$clinit_Moves() {
    if ($dad7a63b97b5bac2$var$ran$clinit_Moves) return;
    $dad7a63b97b5bac2$var$ran$clinit_Moves = true;
    let i_0, j;
    $dad7a63b97b5bac2$var$move2str_1 = [
        "U  ",
        "U2 ",
        "U' ",
        "R  ",
        "R2 ",
        "R' ",
        "F  ",
        "F2 ",
        "F' ",
        "D  ",
        "D2 ",
        "D' ",
        "L  ",
        "L2 ",
        "L' ",
        "B  ",
        "B2 ",
        "B' ",
        "Uw ",
        "Uw2",
        "Uw'",
        "Rw ",
        "Rw2",
        "Rw'",
        "Fw ",
        "Fw2",
        "Fw'",
        "Dw ",
        "Dw2",
        "Dw'",
        "Lw ",
        "Lw2",
        "Lw'",
        "Bw ",
        "Bw2",
        "Bw'"
    ];
    $dad7a63b97b5bac2$var$move2std = [
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
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        19,
        21,
        22,
        23,
        25,
        28,
        30,
        31,
        32,
        34,
        36
    ];
    $dad7a63b97b5bac2$var$move3std = [
        0,
        1,
        2,
        4,
        6,
        7,
        8,
        9,
        10,
        11,
        13,
        15,
        16,
        17,
        19,
        22,
        25,
        28,
        31,
        34,
        36
    ];
    $dad7a63b97b5bac2$var$std2move = $dad7a63b97b5bac2$var$createArray(37);
    $dad7a63b97b5bac2$var$std3move = $dad7a63b97b5bac2$var$createArray(37);
    $dad7a63b97b5bac2$var$ckmv = $dad7a63b97b5bac2$var$createArray(37, 36);
    $dad7a63b97b5bac2$var$ckmv2_0 = $dad7a63b97b5bac2$var$createArray(29, 28);
    $dad7a63b97b5bac2$var$ckmv3 = $dad7a63b97b5bac2$var$createArray(21, 20);
    $dad7a63b97b5bac2$var$skipAxis = $dad7a63b97b5bac2$var$createArray(36);
    $dad7a63b97b5bac2$var$skipAxis2 = $dad7a63b97b5bac2$var$createArray(28);
    $dad7a63b97b5bac2$var$skipAxis3 = $dad7a63b97b5bac2$var$createArray(20);
    for(i_0 = 0; i_0 < 29; ++i_0)$dad7a63b97b5bac2$var$std2move[$dad7a63b97b5bac2$var$move2std[i_0]] = i_0;
    for(i_0 = 0; i_0 < 21; ++i_0)$dad7a63b97b5bac2$var$std3move[$dad7a63b97b5bac2$var$move3std[i_0]] = i_0;
    for(i_0 = 0; i_0 < 36; ++i_0){
        for(j = 0; j < 36; ++j)$dad7a63b97b5bac2$var$ckmv[i_0][j] = ~~(i_0 / 3) === ~~(j / 3) || ~~(i_0 / 3) % 3 === ~~(j / 3) % 3 && i_0 > j;
        $dad7a63b97b5bac2$var$ckmv[36][i_0] = false;
    }
    for(i_0 = 0; i_0 < 29; ++i_0)for(j = 0; j < 28; ++j)$dad7a63b97b5bac2$var$ckmv2_0[i_0][j] = $dad7a63b97b5bac2$var$ckmv[$dad7a63b97b5bac2$var$move2std[i_0]][$dad7a63b97b5bac2$var$move2std[j]];
    for(i_0 = 0; i_0 < 21; ++i_0)for(j = 0; j < 20; ++j)$dad7a63b97b5bac2$var$ckmv3[i_0][j] = $dad7a63b97b5bac2$var$ckmv[$dad7a63b97b5bac2$var$move3std[i_0]][$dad7a63b97b5bac2$var$move3std[j]];
    for(i_0 = 0; i_0 < 36; ++i_0){
        $dad7a63b97b5bac2$var$skipAxis[i_0] = 36;
        for(j = i_0; j < 36; ++j)if (!$dad7a63b97b5bac2$var$ckmv[i_0][j]) {
            $dad7a63b97b5bac2$var$skipAxis[i_0] = j - 1;
            break;
        }
    }
    for(i_0 = 0; i_0 < 28; ++i_0){
        $dad7a63b97b5bac2$var$skipAxis2[i_0] = 28;
        for(j = i_0; j < 28; ++j)if (!$dad7a63b97b5bac2$var$ckmv2_0[i_0][j]) {
            $dad7a63b97b5bac2$var$skipAxis2[i_0] = j - 1;
            break;
        }
    }
    for(i_0 = 0; i_0 < 20; ++i_0){
        $dad7a63b97b5bac2$var$skipAxis3[i_0] = 20;
        for(j = i_0; j < 20; ++j)if (!$dad7a63b97b5bac2$var$ckmv3[i_0][j]) {
            $dad7a63b97b5bac2$var$skipAxis3[i_0] = j - 1;
            break;
        }
    }
}
var $dad7a63b97b5bac2$var$ckmv;
var $dad7a63b97b5bac2$var$ckmv2_0;
var $dad7a63b97b5bac2$var$ckmv3;
var $dad7a63b97b5bac2$var$move2std;
var $dad7a63b97b5bac2$var$move2str_1;
var $dad7a63b97b5bac2$var$move3std;
var $dad7a63b97b5bac2$var$skipAxis;
var $dad7a63b97b5bac2$var$skipAxis2;
var $dad7a63b97b5bac2$var$skipAxis3;
var $dad7a63b97b5bac2$var$std2move;
var $dad7a63b97b5bac2$var$std3move;
function $dad7a63b97b5bac2$var$$doSearch(this$static) {
    let MAX_LENGTH2, MAX_LENGTH3, ct, edge, eparity, i_0, index, length12, length123, prun, s2ct, s2rl;
    this$static.solution = "";
    const ud = $dad7a63b97b5bac2$var$$getsym(new $dad7a63b97b5bac2$var$Center1_1($dad7a63b97b5bac2$var$$getCenter(this$static.c), 0));
    const fb = $dad7a63b97b5bac2$var$$getsym(new $dad7a63b97b5bac2$var$Center1_1($dad7a63b97b5bac2$var$$getCenter(this$static.c), 1));
    const rl = $dad7a63b97b5bac2$var$$getsym(new $dad7a63b97b5bac2$var$Center1_1($dad7a63b97b5bac2$var$$getCenter(this$static.c), 2));
    const udprun = $dad7a63b97b5bac2$var$csprun[~~ud >> 6];
    const fbprun = $dad7a63b97b5bac2$var$csprun[~~fb >> 6];
    const rlprun = $dad7a63b97b5bac2$var$csprun[~~rl >> 6];
    this$static.p1SolsCnt = 0;
    this$static.arr2idx = 0;
    $dad7a63b97b5bac2$var$$clear(this$static.p1sols.heap);
    for(this$static.length1 = (udprun < fbprun ? udprun : fbprun) < rlprun ? udprun < fbprun ? udprun : fbprun : rlprun; this$static.length1 < 100; ++this$static.length1){
        if (rlprun <= this$static.length1 && $dad7a63b97b5bac2$var$$search1(this$static, ~~rl >>> 6, rl & 63, this$static.length1, -1, 0) || udprun <= this$static.length1 && $dad7a63b97b5bac2$var$$search1(this$static, ~~ud >>> 6, ud & 63, this$static.length1, -1, 0) || fbprun <= this$static.length1 && $dad7a63b97b5bac2$var$$search1(this$static, ~~fb >>> 6, fb & 63, this$static.length1, -1, 0)) break;
    }
    const p1SolsArr = $dad7a63b97b5bac2$var$$toArray_1(this$static.p1sols, $dad7a63b97b5bac2$var$initDim($dad7a63b97b5bac2$var$_3Lcs_threephase_FullCube_2_classLit, $dad7a63b97b5bac2$var$makeCastMap([
        $dad7a63b97b5bac2$var$Q$FullCube_$1,
        $dad7a63b97b5bac2$var$Q$Serializable,
        $dad7a63b97b5bac2$var$Q$Object_$1
    ]), $dad7a63b97b5bac2$var$Q$FullCube_0, 0, 0));
    p1SolsArr.sort(function(a, b) {
        return a.value - b.value;
    });
    MAX_LENGTH2 = 9;
    do {
        OUT: for(length12 = p1SolsArr[0].value; length12 < 100; ++length12)for(i_0 = 0; i_0 < p1SolsArr.length; ++i_0){
            if (p1SolsArr[i_0].value > length12) break;
            if (length12 - p1SolsArr[i_0].length1 > MAX_LENGTH2) continue;
            $dad7a63b97b5bac2$var$$copy_4(this$static.c1, p1SolsArr[i_0]);
            $dad7a63b97b5bac2$var$$set_2(this$static.ct2, $dad7a63b97b5bac2$var$$getCenter(this$static.c1), $dad7a63b97b5bac2$var$parity_0($dad7a63b97b5bac2$var$$getEdge(this$static.c1).ep));
            s2ct = $dad7a63b97b5bac2$var$$getct(this$static.ct2);
            s2rl = $dad7a63b97b5bac2$var$$getrl(this$static.ct2);
            this$static.length1 = p1SolsArr[i_0].length1;
            this$static.length2 = length12 - p1SolsArr[i_0].length1;
            if ($dad7a63b97b5bac2$var$$search2(this$static, s2ct, s2rl, this$static.length2, 28, 0)) break OUT;
        }
        ++MAX_LENGTH2;
    }while (length12 === 100);
    this$static.arr2.sort(function(a, b) {
        return a.value - b.value;
    });
    index = 0;
    MAX_LENGTH3 = 13;
    do {
        OUT2: for(length123 = this$static.arr2[0].value; length123 < 100; ++length123)for(i_0 = 0; i_0 < Math.min(this$static.arr2idx, 100); ++i_0){
            if (this$static.arr2[i_0].value > length123) break;
            if (length123 - this$static.arr2[i_0].length1 - this$static.arr2[i_0].length2 > MAX_LENGTH3) continue;
            eparity = $dad7a63b97b5bac2$var$$set_6(this$static.e12, $dad7a63b97b5bac2$var$$getEdge(this$static.arr2[i_0]));
            $dad7a63b97b5bac2$var$$set_3(this$static.ct3, $dad7a63b97b5bac2$var$$getCenter(this$static.arr2[i_0]), eparity ^ $dad7a63b97b5bac2$var$parity_0($dad7a63b97b5bac2$var$$getCorner(this$static.arr2[i_0]).cp));
            ct = $dad7a63b97b5bac2$var$$getct_0(this$static.ct3);
            edge = $dad7a63b97b5bac2$var$$get_2(this$static.e12, 10);
            prun = $dad7a63b97b5bac2$var$getprun($dad7a63b97b5bac2$var$$getsym_0(this$static.e12));
            if (prun <= length123 - this$static.arr2[i_0].length1 - this$static.arr2[i_0].length2 && $dad7a63b97b5bac2$var$$search3(this$static, edge, ct, prun, length123 - this$static.arr2[i_0].length1 - this$static.arr2[i_0].length2, 20, 0)) {
                index = i_0;
                break OUT2;
            }
        }
        ++MAX_LENGTH3;
    }while (length123 === 100);
    const solcube = new $dad7a63b97b5bac2$var$FullCube_4(this$static.arr2[index]);
    this$static.length1 = solcube.length1;
    this$static.length2 = solcube.length2;
    const length_0 = length123 - this$static.length1 - this$static.length2;
    for(i_0 = 0; i_0 < length_0; ++i_0)$dad7a63b97b5bac2$var$$move_6(solcube, $dad7a63b97b5bac2$var$move3std[this$static.move3[i_0]]);
    this$static.solution = $dad7a63b97b5bac2$var$$getMoveString(solcube);
}
function $dad7a63b97b5bac2$var$$init2_0(this$static, sym) {
    let i_0, next;
    $dad7a63b97b5bac2$var$$copy_4(this$static.c1, this$static.c);
    for(i_0 = 0; i_0 < this$static.length1; ++i_0)$dad7a63b97b5bac2$var$$move_6(this$static.c1, this$static.move1[i_0]);
    switch($dad7a63b97b5bac2$var$finish_0[sym]){
        case 0:
            $dad7a63b97b5bac2$var$$move_6(this$static.c1, 24);
            $dad7a63b97b5bac2$var$$move_6(this$static.c1, 35);
            this$static.move1[this$static.length1] = 24;
            this$static.move1[this$static.length1 + 1] = 35;
            this$static.add1 = true;
            sym = 19;
            break;
        case 12869:
            $dad7a63b97b5bac2$var$$move_6(this$static.c1, 18);
            $dad7a63b97b5bac2$var$$move_6(this$static.c1, 29);
            this$static.move1[this$static.length1] = 18;
            this$static.move1[this$static.length1 + 1] = 29;
            this$static.add1 = true;
            sym = 34;
            break;
        case 735470:
            this$static.add1 = false;
            sym = 0;
    }
    $dad7a63b97b5bac2$var$$set_2(this$static.ct2, $dad7a63b97b5bac2$var$$getCenter(this$static.c1), $dad7a63b97b5bac2$var$parity_0($dad7a63b97b5bac2$var$$getEdge(this$static.c1).ep));
    const s2ct = $dad7a63b97b5bac2$var$$getct(this$static.ct2);
    const s2rl = $dad7a63b97b5bac2$var$$getrl(this$static.ct2);
    const ctp = $dad7a63b97b5bac2$var$ctprun[s2ct * 70 + s2rl];
    this$static.c1.value = ctp + this$static.length1;
    this$static.c1.length1 = this$static.length1;
    this$static.c1.add1 = this$static.add1;
    this$static.c1.sym = sym;
    ++this$static.p1SolsCnt;
    if (this$static.p1sols.heap.size < 500) next = new $dad7a63b97b5bac2$var$FullCube_4(this$static.c1);
    else {
        next = $dad7a63b97b5bac2$var$$poll(this$static.p1sols);
        next.value > this$static.c1.value && $dad7a63b97b5bac2$var$$copy_4(next, this$static.c1);
    }
    $dad7a63b97b5bac2$var$$add(this$static.p1sols, next);
    return this$static.p1SolsCnt === 1e4;
}
function $dad7a63b97b5bac2$var$$init3(this$static) {
    let i_0;
    $dad7a63b97b5bac2$var$$copy_4(this$static.c2, this$static.c1);
    for(i_0 = 0; i_0 < this$static.length2; ++i_0)$dad7a63b97b5bac2$var$$move_6(this$static.c2, this$static.move2[i_0]);
    if (!$dad7a63b97b5bac2$var$$checkEdge($dad7a63b97b5bac2$var$$getEdge(this$static.c2))) return false;
    const eparity = $dad7a63b97b5bac2$var$$set_6(this$static.e12, $dad7a63b97b5bac2$var$$getEdge(this$static.c2));
    $dad7a63b97b5bac2$var$$set_3(this$static.ct3, $dad7a63b97b5bac2$var$$getCenter(this$static.c2), eparity ^ $dad7a63b97b5bac2$var$parity_0($dad7a63b97b5bac2$var$$getCorner(this$static.c2).cp));
    const ct = $dad7a63b97b5bac2$var$$getct_0(this$static.ct3);
    $dad7a63b97b5bac2$var$$get_2(this$static.e12, 10);
    const prun = $dad7a63b97b5bac2$var$getprun($dad7a63b97b5bac2$var$$getsym_0(this$static.e12));
    !this$static.arr2[this$static.arr2idx] ? this$static.arr2[this$static.arr2idx] = new $dad7a63b97b5bac2$var$FullCube_4(this$static.c2) : $dad7a63b97b5bac2$var$$copy_4(this$static.arr2[this$static.arr2idx], this$static.c2);
    this$static.arr2[this$static.arr2idx].value = this$static.length1 + this$static.length2 + Math.max(prun, $dad7a63b97b5bac2$var$prun_0[ct]);
    this$static.arr2[this$static.arr2idx].length2 = this$static.length2;
    ++this$static.arr2idx;
    return this$static.arr2idx === this$static.arr2.length;
}
function $dad7a63b97b5bac2$var$$randomState(this$static, randomUIntBelow) {
    $dad7a63b97b5bac2$var$init_5();
    this$static.c = new $dad7a63b97b5bac2$var$FullCube_5(randomUIntBelow);
    $dad7a63b97b5bac2$var$$doSearch(this$static);
    return this$static.solution;
}
function $dad7a63b97b5bac2$var$$search1(this$static, ct, sym, maxl, lm, depth) {
    let axis, ctx, m_0, power, prun, symx;
    if (ct === 0) return maxl === 0 && $dad7a63b97b5bac2$var$$init2_0(this$static, sym);
    for(axis = 0; axis < 27; axis += 3){
        if (axis === lm || axis === lm - 9 || axis === lm - 18) continue;
        for(power = 0; power < 3; ++power){
            m_0 = axis + power;
            ctx = $dad7a63b97b5bac2$var$ctsmv[ct][$dad7a63b97b5bac2$var$symmove[sym][m_0]];
            prun = $dad7a63b97b5bac2$var$csprun[~~ctx >>> 6];
            if (prun >= maxl) {
                if (prun > maxl) break;
                continue;
            }
            symx = $dad7a63b97b5bac2$var$symmult[sym][ctx & 63];
            ctx >>>= 6;
            this$static.move1[depth] = m_0;
            if ($dad7a63b97b5bac2$var$$search1(this$static, ctx, symx, maxl - 1, axis, depth + 1)) return true;
        }
    }
    return false;
}
function $dad7a63b97b5bac2$var$$search2(this$static, ct, rl, maxl, lm, depth) {
    let ctx, m_0, prun, rlx;
    if (ct === 0 && $dad7a63b97b5bac2$var$ctprun[rl] === 0) return maxl === 0 && $dad7a63b97b5bac2$var$$init3(this$static);
    for(m_0 = 0; m_0 < 23; ++m_0){
        if ($dad7a63b97b5bac2$var$ckmv2_0[lm][m_0]) {
            m_0 = $dad7a63b97b5bac2$var$skipAxis2[m_0];
            continue;
        }
        ctx = $dad7a63b97b5bac2$var$ctmv[ct][m_0];
        rlx = $dad7a63b97b5bac2$var$rlmv[rl][m_0];
        prun = $dad7a63b97b5bac2$var$ctprun[ctx * 70 + rlx];
        if (prun >= maxl) {
            prun > maxl && (m_0 = $dad7a63b97b5bac2$var$skipAxis2[m_0]);
            continue;
        }
        this$static.move2[depth] = $dad7a63b97b5bac2$var$move2std[m_0];
        if ($dad7a63b97b5bac2$var$$search2(this$static, ctx, rlx, maxl - 1, m_0, depth + 1)) return true;
    }
    return false;
}
function $dad7a63b97b5bac2$var$$search3(this$static, edge, ct, prun, maxl, lm, depth) {
    let cord1x, cord2x, ctx, edgex, m_0, prun1, prunx, symcord1x, symx;
    if (maxl === 0) return edge === 0 && ct === 0;
    $dad7a63b97b5bac2$var$$set_4(this$static.tempe[depth], edge);
    for(m_0 = 0; m_0 < 17; ++m_0){
        if ($dad7a63b97b5bac2$var$ckmv3[lm][m_0]) {
            m_0 = $dad7a63b97b5bac2$var$skipAxis3[m_0];
            continue;
        }
        ctx = $dad7a63b97b5bac2$var$ctmove[ct][m_0];
        prun1 = $dad7a63b97b5bac2$var$prun_0[ctx];
        if (prun1 >= maxl) {
            prun1 > maxl && m_0 < 14 && (m_0 = $dad7a63b97b5bac2$var$skipAxis3[m_0]);
            continue;
        }
        edgex = $dad7a63b97b5bac2$var$getmvrot(this$static.tempe[depth].edge, m_0 << 3, 10);
        cord1x = ~~(edgex / 20160);
        symcord1x = $dad7a63b97b5bac2$var$raw2sym_1[cord1x];
        symx = symcord1x & 7;
        symcord1x >>= 3;
        cord2x = $dad7a63b97b5bac2$var$getmvrot(this$static.tempe[depth].edge, m_0 << 3 | symx, 10) % 20160;
        prunx = $dad7a63b97b5bac2$var$getprun_0(symcord1x * 20160 + cord2x, prun);
        if (prunx >= maxl) {
            prunx > maxl && m_0 < 14 && (m_0 = $dad7a63b97b5bac2$var$skipAxis3[m_0]);
            continue;
        }
        if ($dad7a63b97b5bac2$var$$search3(this$static, edgex, ctx, prunx, maxl - 1, m_0, depth + 1)) {
            this$static.move3[depth] = m_0;
            return true;
        }
    }
    return false;
}
function $dad7a63b97b5bac2$var$Search_4() {
    let i_0;
    this.p1sols = new $dad7a63b97b5bac2$var$PriorityQueue_0(new $dad7a63b97b5bac2$var$FullCube$ValueComparator_0());
    this.move1 = $dad7a63b97b5bac2$var$createArray(15);
    this.move2 = $dad7a63b97b5bac2$var$createArray(20);
    this.move3 = $dad7a63b97b5bac2$var$createArray(20);
    this.c1 = new $dad7a63b97b5bac2$var$FullCube_3();
    this.c2 = new $dad7a63b97b5bac2$var$FullCube_3();
    this.ct2 = new $dad7a63b97b5bac2$var$Center2_0();
    this.ct3 = new $dad7a63b97b5bac2$var$Center3_0();
    this.e12 = new $dad7a63b97b5bac2$var$Edge3_0();
    this.tempe = $dad7a63b97b5bac2$var$createArray(20);
    this.arr2 = $dad7a63b97b5bac2$var$createArray(100);
    for(i_0 = 0; i_0 < 20; ++i_0)this.tempe[i_0] = new $dad7a63b97b5bac2$var$Edge3_0();
}
function $dad7a63b97b5bac2$var$init_5() {
    if ($dad7a63b97b5bac2$var$inited_2) return;
    $dad7a63b97b5bac2$var$initSym_0();
    $dad7a63b97b5bac2$var$raw2sym = $dad7a63b97b5bac2$var$createArray(735471);
    $dad7a63b97b5bac2$var$initSym2Raw();
    $dad7a63b97b5bac2$var$createMoveTable();
    $dad7a63b97b5bac2$var$raw2sym = null;
    $dad7a63b97b5bac2$var$createPrun();
    $dad7a63b97b5bac2$var$init_3();
    $dad7a63b97b5bac2$var$init_4();
    $dad7a63b97b5bac2$var$initMvrot();
    $dad7a63b97b5bac2$var$initRaw2Sym();
    $dad7a63b97b5bac2$var$createPrun_0();
    $dad7a63b97b5bac2$var$inited_2 = true;
}
$dad7a63b97b5bac2$var$defineSeed(163, 1, $dad7a63b97b5bac2$var$makeCastMap([
    $dad7a63b97b5bac2$var$Q$Search_0
]), $dad7a63b97b5bac2$var$Search_4);
$dad7a63b97b5bac2$var$_.add1 = false;
$dad7a63b97b5bac2$var$_.arr2idx = 0;
$dad7a63b97b5bac2$var$_.c = null;
$dad7a63b97b5bac2$var$_.length1 = 0;
$dad7a63b97b5bac2$var$_.length2 = 0;
$dad7a63b97b5bac2$var$_.p1SolsCnt = 0;
$dad7a63b97b5bac2$var$_.solution = "";
var $dad7a63b97b5bac2$var$inited_2 = false;
var $dad7a63b97b5bac2$var$ran$clinit_Util_0 = false;
function $dad7a63b97b5bac2$var$$clinit_Util_0() {
    if ($dad7a63b97b5bac2$var$ran$clinit_Util_0) return;
    $dad7a63b97b5bac2$var$ran$clinit_Util_0 = true;
}
function $dad7a63b97b5bac2$var$parity_0(arr) {
    let i_0, j, len, parity;
    parity = 0;
    for(i_0 = 0, len = arr.length; i_0 < len; ++i_0)for(j = i_0; j < len; ++j)arr[i_0] > arr[j] && (parity ^= 1);
    return parity;
}
function $dad7a63b97b5bac2$var$swap(arr, a, b, c, d, key) {
    let temp;
    switch(key){
        case 0:
            temp = arr[d];
            arr[d] = arr[c];
            arr[c] = arr[b];
            arr[b] = arr[a];
            arr[a] = temp;
            return;
        case 1:
            temp = arr[a];
            arr[a] = arr[c];
            arr[c] = temp;
            temp = arr[b];
            arr[b] = arr[d];
            arr[d] = temp;
            return;
        case 2:
            temp = arr[a];
            arr[a] = arr[b];
            arr[b] = arr[c];
            arr[c] = arr[d];
            arr[d] = temp;
            return;
    }
}
function $dad7a63b97b5bac2$var$Class_0() {}
function $dad7a63b97b5bac2$var$createForArray(packageName, className, seedId, componentType) {
    const clazz = new $dad7a63b97b5bac2$var$Class_0();
    clazz.typeName = packageName + className;
    $dad7a63b97b5bac2$var$isInstantiable(seedId !== 0 ? -seedId : 0) && $dad7a63b97b5bac2$var$setClassLiteral(seedId !== 0 ? -seedId : 0, clazz);
    clazz.modifiers = 4;
    clazz.superclass = $dad7a63b97b5bac2$var$Ljava_lang_Object_2_classLit;
    clazz.componentType = componentType;
    return clazz;
}
function $dad7a63b97b5bac2$var$createForClass(packageName, className, seedId, superclass) {
    const clazz = new $dad7a63b97b5bac2$var$Class_0();
    clazz.typeName = packageName + className;
    $dad7a63b97b5bac2$var$isInstantiable(seedId) && $dad7a63b97b5bac2$var$setClassLiteral(seedId, clazz);
    clazz.superclass = superclass;
    return clazz;
}
function $dad7a63b97b5bac2$var$getSeedFunction(clazz) {
    const func = $dad7a63b97b5bac2$var$seedTable[clazz.seedId];
    clazz = null;
    return func;
}
function $dad7a63b97b5bac2$var$isInstantiable(seedId) {
    return typeof seedId === "number" && seedId > 0;
}
function $dad7a63b97b5bac2$var$setClassLiteral(seedId, clazz) {
    let proto;
    clazz.seedId = seedId;
    if (seedId === 2) proto = String.prototype;
    else {
        if (seedId > 0) {
            let seed = $dad7a63b97b5bac2$var$getSeedFunction(clazz);
            if (seed) proto = seed.prototype;
            else {
                seed = $dad7a63b97b5bac2$var$seedTable[seedId] = function() {};
                seed.___clazz$ = clazz;
                return;
            }
        } else return;
    }
    proto.___clazz$ = clazz;
}
$dad7a63b97b5bac2$var$_.val$outerIter = null;
function $dad7a63b97b5bac2$var$$add(this$static, o) {
    if ($dad7a63b97b5bac2$var$$offer(this$static, o)) return true;
}
function $dad7a63b97b5bac2$var$$$init_6(this$static) {
    this$static.array = $dad7a63b97b5bac2$var$initDim($dad7a63b97b5bac2$var$_3Ljava_lang_Object_2_classLit, $dad7a63b97b5bac2$var$makeCastMap([
        $dad7a63b97b5bac2$var$Q$Serializable,
        $dad7a63b97b5bac2$var$Q$Object_$1
    ]), $dad7a63b97b5bac2$var$Q$Object, 0, 0);
}
function $dad7a63b97b5bac2$var$$add_0(this$static, o) {
    $dad7a63b97b5bac2$var$setCheck(this$static.array, this$static.size++, o);
    return true;
}
function $dad7a63b97b5bac2$var$$clear(this$static) {
    this$static.array = $dad7a63b97b5bac2$var$initDim($dad7a63b97b5bac2$var$_3Ljava_lang_Object_2_classLit, $dad7a63b97b5bac2$var$makeCastMap([
        $dad7a63b97b5bac2$var$Q$Serializable,
        $dad7a63b97b5bac2$var$Q$Object_$1
    ]), $dad7a63b97b5bac2$var$Q$Object, 0, 0);
    this$static.size = 0;
}
function $dad7a63b97b5bac2$var$$get_4(this$static, index) {
    return this$static.array[index];
}
function $dad7a63b97b5bac2$var$$remove_0(this$static, index) {
    const previous = this$static.array[index];
    $dad7a63b97b5bac2$var$splice_0(this$static.array, index, 1);
    --this$static.size;
    return previous;
}
function $dad7a63b97b5bac2$var$$set_7(this$static, index, o) {
    const previous = this$static.array[index];
    $dad7a63b97b5bac2$var$setCheck(this$static.array, index, o);
    return previous;
}
function $dad7a63b97b5bac2$var$$toArray_0(this$static, out) {
    let i_0;
    out.length < this$static.size && (out = $dad7a63b97b5bac2$var$createFrom(out, this$static.size));
    for(i_0 = 0; i_0 < this$static.size; ++i_0)$dad7a63b97b5bac2$var$setCheck(out, i_0, this$static.array[i_0]);
    out.length > this$static.size && $dad7a63b97b5bac2$var$setCheck(out, this$static.size, null);
    return out;
}
function $dad7a63b97b5bac2$var$ArrayList_1() {
    $dad7a63b97b5bac2$var$$$init_6(this);
    this.array.length = 500;
}
function $dad7a63b97b5bac2$var$splice_0(array, index, deleteCount) {
    array.splice(index, deleteCount);
}
$dad7a63b97b5bac2$var$_.size = 0;
function $dad7a63b97b5bac2$var$binarySearch_0(sortedArray, key) {
    let high, low, mid, midVal;
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
function $dad7a63b97b5bac2$var$fill_0(a) {
    $dad7a63b97b5bac2$var$fill_1(a, a.length);
}
function $dad7a63b97b5bac2$var$fill_1(a, toIndex) {
    let i_0;
    for(i_0 = 0; i_0 < toIndex; ++i_0)a[i_0] = -1;
}
function $dad7a63b97b5bac2$var$$mergeHeaps(this$static, node) {
    let smallestChild, leftChild, rightChild, smallestChild_0;
    const heapSize = this$static.heap.size;
    const value = $dad7a63b97b5bac2$var$$get_4(this$static.heap, node);
    while(node * 2 + 1 < heapSize){
        smallestChild = (leftChild = 2 * node + 1, rightChild = leftChild + 1, smallestChild_0 = leftChild, rightChild < heapSize && $dad7a63b97b5bac2$var$$compare_0($dad7a63b97b5bac2$var$$get_4(this$static.heap, rightChild), $dad7a63b97b5bac2$var$$get_4(this$static.heap, leftChild)) < 0 && (smallestChild_0 = rightChild), smallestChild_0);
        if ($dad7a63b97b5bac2$var$$compare_0(value, $dad7a63b97b5bac2$var$$get_4(this$static.heap, smallestChild)) < 0) break;
        $dad7a63b97b5bac2$var$$set_7(this$static.heap, node, $dad7a63b97b5bac2$var$$get_4(this$static.heap, smallestChild));
        node = smallestChild;
    }
    $dad7a63b97b5bac2$var$$set_7(this$static.heap, node, value);
}
function $dad7a63b97b5bac2$var$$offer(this$static, e) {
    let childNode, node;
    node = this$static.heap.size;
    $dad7a63b97b5bac2$var$$add_0(this$static.heap, e);
    while(node > 0){
        childNode = node;
        node = ~~((node - 1) / 2);
        if ($dad7a63b97b5bac2$var$$compare_0($dad7a63b97b5bac2$var$$get_4(this$static.heap, node), e) <= 0) {
            $dad7a63b97b5bac2$var$$set_7(this$static.heap, childNode, e);
            return true;
        }
        $dad7a63b97b5bac2$var$$set_7(this$static.heap, childNode, $dad7a63b97b5bac2$var$$get_4(this$static.heap, node));
    }
    $dad7a63b97b5bac2$var$$set_7(this$static.heap, node, e);
    return true;
}
function $dad7a63b97b5bac2$var$$poll(this$static) {
    if (this$static.heap.size === 0) return null;
    const value = $dad7a63b97b5bac2$var$$get_4(this$static.heap, 0);
    $dad7a63b97b5bac2$var$$removeAtIndex(this$static);
    return value;
}
function $dad7a63b97b5bac2$var$$removeAtIndex(this$static) {
    const lastValue = $dad7a63b97b5bac2$var$$remove_0(this$static.heap, this$static.heap.size - 1);
    if (0 < this$static.heap.size) {
        $dad7a63b97b5bac2$var$$set_7(this$static.heap, 0, lastValue);
        $dad7a63b97b5bac2$var$$mergeHeaps(this$static, 0);
    }
}
function $dad7a63b97b5bac2$var$$toArray_1(this$static, a) {
    return $dad7a63b97b5bac2$var$$toArray_0(this$static.heap, a);
}
function $dad7a63b97b5bac2$var$PriorityQueue_0(cmp) {
    this.heap = new $dad7a63b97b5bac2$var$ArrayList_1();
    this.cmp = cmp;
}
$dad7a63b97b5bac2$var$defineSeed(239, 1, {}, $dad7a63b97b5bac2$var$PriorityQueue_0);
$dad7a63b97b5bac2$var$_.cmp = null;
$dad7a63b97b5bac2$var$_.heap = null;
var $dad7a63b97b5bac2$var$Ljava_lang_Object_2_classLit = $dad7a63b97b5bac2$var$createForClass("java.lang.", "Object", 1, null);
var $dad7a63b97b5bac2$var$_3Ljava_lang_Object_2_classLit = $dad7a63b97b5bac2$var$createForArray("[Ljava.lang.", "Object;", 356, $dad7a63b97b5bac2$var$Ljava_lang_Object_2_classLit);
var $dad7a63b97b5bac2$var$Lcs_threephase_FullCube_2_classLit = $dad7a63b97b5bac2$var$createForClass("cs.threephase.", "FullCube", 160, $dad7a63b97b5bac2$var$Ljava_lang_Object_2_classLit);
var $dad7a63b97b5bac2$var$_3Lcs_threephase_FullCube_2_classLit = $dad7a63b97b5bac2$var$createForArray("[Lcs.threephase.", "FullCube;", 381, $dad7a63b97b5bac2$var$Lcs_threephase_FullCube_2_classLit);
var $dad7a63b97b5bac2$var$searcher;
var $dad7a63b97b5bac2$var$raninit = false;
function $dad7a63b97b5bac2$var$init() {
    if ($dad7a63b97b5bac2$var$raninit) return;
    $dad7a63b97b5bac2$var$raninit = true;
    $dad7a63b97b5bac2$var$$clinit_Moves();
    $dad7a63b97b5bac2$var$$clinit_Util_0();
    $dad7a63b97b5bac2$var$$clinit_Center1();
    $dad7a63b97b5bac2$var$$clinit_Center2();
    $dad7a63b97b5bac2$var$$clinit_Center3();
    $dad7a63b97b5bac2$var$$clinit_Edge3();
    $dad7a63b97b5bac2$var$$clinit_CornerCube();
    $dad7a63b97b5bac2$var$$clinit_EdgeCube();
    $dad7a63b97b5bac2$var$$clinit_FullCube_0();
    $dad7a63b97b5bac2$var$searcher = new $dad7a63b97b5bac2$var$Search_4();
}
function $dad7a63b97b5bac2$export$2a47f398eeff8b01() {
    $dad7a63b97b5bac2$var$init();
    $dad7a63b97b5bac2$var$init_5();
}
async function $dad7a63b97b5bac2$export$2bb7255279e68dd9() {
    (0, $8nJbT.mustBeInsideWorker)();
    $dad7a63b97b5bac2$var$init();
    const suffix = (0, $7TbMZ.Alg).fromString($dad7a63b97b5bac2$var$$randomState($dad7a63b97b5bac2$var$searcher, await (0, $8mjCn.randomUIntBelowFactory)()));
    return (await (0, $8nJbT.random333Scramble)()).concat(suffix);
}

});


//# sourceMappingURL=444-solver-SFZ7V6NL.17541a2d.js.map
