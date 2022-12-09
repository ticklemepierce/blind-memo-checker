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
parcelRequire.register("8HZMf", function(module, exports) {

$parcel$export(module.exports, "initialize", () => $657242851ad0d223$export$2a47f398eeff8b01);
$parcel$export(module.exports, "solveState", () => $657242851ad0d223$export$850b598a7dd80348);
parcelRequire("hJBlP");
// src/cubing/vendor/min2phase/3x3x3-min2phase.js
var $657242851ad0d223$var$$intern_3 = {
    3: 1
};
var $657242851ad0d223$var$$intern_9 = 4194303;
var $657242851ad0d223$var$$intern_10 = 1048575;
var $657242851ad0d223$var$$intern_11 = 524288;
var $657242851ad0d223$var$$intern_20 = 65535;
var $657242851ad0d223$var$$intern_26 = {
    11: 1,
    3: 1
};
var $657242851ad0d223$var$$intern_27 = {
    17: 1,
    3: 1
};
var $657242851ad0d223$var$$intern_28 = 14540032;
var $657242851ad0d223$var$$intern_29 = 286331153;
var $657242851ad0d223$var$$intern_30 = {
    10: 1,
    3: 1
};
var $657242851ad0d223$var$_;
var $657242851ad0d223$var$prototypesByTypeId_0 = {};
function $657242851ad0d223$var$typeMarkerFn() {}
function $657242851ad0d223$var$portableObjCreate(obj) {
    function F() {}
    F.prototype = obj || {};
    return new F();
}
function $657242851ad0d223$var$maybeGetClassLiteralFromPlaceHolder_0(entry) {
    return entry instanceof Array ? entry[0] : null;
}
function $657242851ad0d223$var$defineClass(typeId, superTypeId, castableTypeMap) {
    var prototypesByTypeId = $657242851ad0d223$var$prototypesByTypeId_0;
    var createSubclassPrototype = $657242851ad0d223$var$createSubclassPrototype_0;
    var maybeGetClassLiteralFromPlaceHolder = $657242851ad0d223$var$maybeGetClassLiteralFromPlaceHolder_0;
    var prototype_0 = prototypesByTypeId[typeId];
    var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
    if (prototype_0 && !clazz) $657242851ad0d223$var$_ = prototype_0;
    else {
        $657242851ad0d223$var$_ = prototypesByTypeId[typeId] = !superTypeId ? {} : createSubclassPrototype(superTypeId);
        $657242851ad0d223$var$_.castableTypeMap$ = castableTypeMap;
        $657242851ad0d223$var$_.constructor = $657242851ad0d223$var$_;
        !superTypeId && ($657242851ad0d223$var$_.typeMarker$ = $657242851ad0d223$var$typeMarkerFn);
    }
    for(var i = 3; i < arguments.length; ++i)arguments[i].prototype = $657242851ad0d223$var$_;
    clazz && ($657242851ad0d223$var$_.___clazz$ = clazz);
}
function $657242851ad0d223$var$createSubclassPrototype_0(superTypeId) {
    var prototypesByTypeId = $657242851ad0d223$var$prototypesByTypeId_0;
    return $657242851ad0d223$var$portableObjCreate(prototypesByTypeId[superTypeId]);
}
function $657242851ad0d223$var$Object_0() {}
$657242851ad0d223$var$defineClass(1, null, {}, $657242851ad0d223$var$Object_0);
function $657242851ad0d223$var$narrow_byte(x_0) {
    return x_0 << 24 >> 24;
}
function $657242851ad0d223$var$Class() {
    this.typeName = null;
    this.simpleName = null;
    this.packageName = null;
    this.compoundName = null;
    this.canonicalName = null;
    this.typeId = null;
    this.arrayLiterals = null;
}
function $657242851ad0d223$var$createClassObject(packageName, compoundClassName) {
    var clazz;
    clazz = new $657242851ad0d223$var$Class();
    clazz.packageName = packageName;
    clazz.compoundName = compoundClassName;
    return clazz;
}
function $657242851ad0d223$var$createForClass(packageName, compoundClassName, typeId) {
    var clazz;
    clazz = $657242851ad0d223$var$createClassObject(packageName, compoundClassName);
    $657242851ad0d223$var$maybeSetClassLiteral(typeId, clazz);
    return clazz;
}
function $657242851ad0d223$var$createForInterface(packageName, compoundClassName) {
    var clazz;
    clazz = $657242851ad0d223$var$createClassObject(packageName, compoundClassName);
    clazz.modifiers = 2;
    return clazz;
}
function $657242851ad0d223$var$createForPrimitive(className, primitiveTypeId) {
    var clazz;
    clazz = $657242851ad0d223$var$createClassObject("", className);
    clazz.typeId = primitiveTypeId;
    clazz.modifiers = 1;
    return clazz;
}
function $657242851ad0d223$var$getClassLiteralForArray_0(leafClass, dimensions) {
    var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
    return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}
function $657242851ad0d223$var$getPrototypeForClass(clazz) {
    if (clazz.isPrimitive()) return null;
    var typeId = clazz.typeId;
    var prototype_0 = $657242851ad0d223$var$prototypesByTypeId_0[typeId];
    return prototype_0;
}
function $657242851ad0d223$var$maybeSetClassLiteral(typeId, clazz) {
    if (!typeId) return;
    clazz.typeId = typeId;
    var prototype_0 = $657242851ad0d223$var$getPrototypeForClass(clazz);
    if (!prototype_0) {
        $657242851ad0d223$var$prototypesByTypeId_0[typeId] = [
            clazz
        ];
        return;
    }
    prototype_0.___clazz$ = clazz;
}
$657242851ad0d223$var$defineClass(79, 1, {}, $657242851ad0d223$var$Class);
$657242851ad0d223$var$_.createClassLiteralForArray = function createClassLiteralForArray(dimensions) {
    var clazz;
    clazz = new $657242851ad0d223$var$Class();
    clazz.modifiers = 4;
    dimensions > 1 ? clazz.componentType = $657242851ad0d223$var$getClassLiteralForArray_0(this, dimensions - 1) : clazz.componentType = this;
    return clazz;
};
$657242851ad0d223$var$_.isPrimitive = function isPrimitive() {
    return (this.modifiers & 1) != 0;
};
function $657242851ad0d223$var$getClassLiteralForArray(clazz, dimensions) {
    return $657242851ad0d223$var$getClassLiteralForArray_0(clazz, dimensions);
}
function $657242851ad0d223$var$initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions) {
    var result;
    result = $657242851ad0d223$var$initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
    $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
    return result;
}
function $657242851ad0d223$var$initDims(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count) {
    return $657242851ad0d223$var$initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}
function $657242851ad0d223$var$initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count) {
    var elementTypeCategory, i, isLastDim, length_0, result;
    length_0 = dimExprs[index_0];
    isLastDim = index_0 == count - 1;
    elementTypeCategory = isLastDim ? leafElementTypeCategory : 0;
    result = $657242851ad0d223$var$initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
    $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
    if (!isLastDim) {
        ++index_0;
        for(i = 0; i < length_0; ++i)result[i] = $657242851ad0d223$var$initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
    return result;
}
function $657242851ad0d223$var$initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array) {
    array.___clazz$ = arrayClass;
    array.castableTypeMap$ = castableTypeMap;
    array.typeMarker$ = $657242851ad0d223$var$typeMarkerFn;
    array.__elementTypeId$ = elementTypeId;
    array.__elementTypeCategory$ = elementTypeCategory;
    return array;
}
function $657242851ad0d223$var$initializeArrayElementsWithDefaults(elementTypeCategory, length_0) {
    var array = new Array(length_0);
    var initValue;
    switch(elementTypeCategory){
        case 6:
            initValue = {
                l: 0,
                m: 0,
                h: 0
            };
            break;
        case 7:
            initValue = 0;
            break;
        case 8:
            initValue = false;
            break;
        default:
            return array;
    }
    for(var i = 0; i < length_0; ++i)array[i] = initValue;
    return array;
}
function $657242851ad0d223$var$create(value_0) {
    var a0, a1, a2;
    a0 = value_0 & $657242851ad0d223$var$$intern_9;
    a1 = value_0 >> 22 & $657242851ad0d223$var$$intern_9;
    a2 = value_0 < 0 ? $657242851ad0d223$var$$intern_10 : 0;
    return $657242851ad0d223$var$create0(a0, a1, a2);
}
function $657242851ad0d223$var$create0(l, m, h) {
    return {
        l: l,
        m: m,
        h: h
    };
}
function $657242851ad0d223$var$add_1(a, b) {
    var sum0, sum1, sum2;
    sum0 = a.l + b.l;
    sum1 = a.m + b.m + (sum0 >> 22);
    sum2 = a.h + b.h + (sum1 >> 22);
    return {
        l: sum0 & $657242851ad0d223$var$$intern_9,
        m: sum1 & $657242851ad0d223$var$$intern_9,
        h: sum2 & $657242851ad0d223$var$$intern_10
    };
}
function $657242851ad0d223$var$and(a, b) {
    return {
        l: a.l & b.l,
        m: a.m & b.m,
        h: a.h & b.h
    };
}
function $657242851ad0d223$var$fromInt(value_0) {
    var rebase, result;
    if (value_0 > -129 && value_0 < 128) {
        rebase = value_0 + 128;
        $657242851ad0d223$var$boxedValues == null && ($657242851ad0d223$var$boxedValues = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $657242851ad0d223$var$$intern_3, 293, 256, 0, 1));
        result = $657242851ad0d223$var$boxedValues[rebase];
        !result && (result = $657242851ad0d223$var$boxedValues[rebase] = $657242851ad0d223$var$create(value_0));
        return result;
    }
    return $657242851ad0d223$var$create(value_0);
}
function $657242851ad0d223$var$gte(a, b) {
    var signa, signb;
    signa = a.h >> 19;
    signb = b.h >> 19;
    return signa == 0 ? signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l : !(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}
function $657242851ad0d223$var$neq(a, b) {
    return a.l != b.l || a.m != b.m || a.h != b.h;
}
function $657242851ad0d223$var$or(a, b) {
    return {
        l: a.l | b.l,
        m: a.m | b.m,
        h: a.h | b.h
    };
}
function $657242851ad0d223$var$shl(a, n) {
    var res0, res1, res2;
    n &= 63;
    if (n < 22) {
        res0 = a.l << n;
        res1 = a.m << n | a.l >> 22 - n;
        res2 = a.h << n | a.m >> 22 - n;
    } else if (n < 44) {
        res0 = 0;
        res1 = a.l << n - 22;
        res2 = a.m << n - 22 | a.l >> 44 - n;
    } else {
        res0 = 0;
        res1 = 0;
        res2 = a.l << n - 44;
    }
    return {
        l: res0 & $657242851ad0d223$var$$intern_9,
        m: res1 & $657242851ad0d223$var$$intern_9,
        h: res2 & $657242851ad0d223$var$$intern_10
    };
}
function $657242851ad0d223$var$shr(a, n) {
    var a2, negative, res0, res1, res2;
    n &= 63;
    a2 = a.h;
    negative = (a2 & $657242851ad0d223$var$$intern_11) != 0;
    negative && (a2 |= -1048576);
    if (n < 22) {
        res2 = a2 >> n;
        res1 = a.m >> n | a2 << 22 - n;
        res0 = a.l >> n | a.m << 22 - n;
    } else if (n < 44) {
        res2 = negative ? $657242851ad0d223$var$$intern_10 : 0;
        res1 = a2 >> n - 22;
        res0 = a.m >> n - 22 | a2 << 44 - n;
    } else {
        res2 = negative ? $657242851ad0d223$var$$intern_10 : 0;
        res1 = negative ? $657242851ad0d223$var$$intern_9 : 0;
        res0 = a2 >> n - 44;
    }
    return {
        l: res0 & $657242851ad0d223$var$$intern_9,
        m: res1 & $657242851ad0d223$var$$intern_9,
        h: res2 & $657242851ad0d223$var$$intern_10
    };
}
function $657242851ad0d223$var$sub_0(a, b) {
    var sum0, sum1, sum2;
    sum0 = a.l - b.l;
    sum1 = a.m - b.m + (sum0 >> 22);
    sum2 = a.h - b.h + (sum1 >> 22);
    return {
        l: sum0 & $657242851ad0d223$var$$intern_9,
        m: sum1 & $657242851ad0d223$var$$intern_9,
        h: sum2 & $657242851ad0d223$var$$intern_10
    };
}
function $657242851ad0d223$var$toInt(a) {
    return a.l | a.m << 22;
}
var $657242851ad0d223$var$boxedValues;
function $657242851ad0d223$var$AbstractStringBuilder(string) {
    this.string = string;
}
function $657242851ad0d223$var$max_0(x_0, y_0) {
    return x_0 > y_0 ? x_0 : y_0;
}
function $657242851ad0d223$var$min_0(x_0, y_0) {
    return x_0 < y_0 ? x_0 : y_0;
}
function $657242851ad0d223$var$$indexOf_0(this$static, str) {
    return this$static.indexOf(str);
}
function $657242851ad0d223$var$_String(value_0) {
    return $657242851ad0d223$var$__valueOf(value_0, 0, value_0.length);
}
function $657242851ad0d223$var$__valueOf(x_0, start_0, end) {
    var s = "";
    for(var batchStart = start_0; batchStart < end;){
        var batchEnd = Math.min(batchStart + 1e4, end);
        s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
        batchStart = batchEnd;
    }
    return s;
}
function $657242851ad0d223$var$fromCodePoint(codePoint) {
    return String.fromCharCode(codePoint & $657242851ad0d223$var$$intern_20);
}
var $657242851ad0d223$var$Ljava_lang_String_2_classLit = $657242851ad0d223$var$createForClass("java.lang", "String", 2);
function $657242851ad0d223$var$$append(this$static) {
    this$static.string += " ";
    return this$static;
}
function $657242851ad0d223$var$$append_1(this$static, x_0) {
    this$static.string += x_0;
    return this$static;
}
function $657242851ad0d223$var$StringBuffer() {
    $657242851ad0d223$var$AbstractStringBuilder.call(this, "");
}
function $657242851ad0d223$var$equals_7(array1, array2) {
    var i;
    if (array1 === array2) return true;
    if (array1.length != array2.length) return false;
    for(i = 0; i < array1.length; ++i){
        if (array1[i] != array2[i]) return false;
    }
    return true;
}
var $657242851ad0d223$var$$clinit_CoordCube_ran = false;
function $657242851ad0d223$var$$clinit_CoordCube() {
    if ($657242851ad0d223$var$$clinit_CoordCube_ran) return;
    $657242851ad0d223$var$$clinit_CoordCube_ran = true;
    $657242851ad0d223$var$UDSliceMove = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        495,
        18
    ], 2);
    $657242851ad0d223$var$TwistMove = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        324,
        18
    ], 2);
    $657242851ad0d223$var$FlipMove = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        336,
        18
    ], 2);
    $657242851ad0d223$var$UDSliceConj = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        495,
        8
    ], 2);
    $657242851ad0d223$var$UDSliceTwistPrun = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 20048, 7, 1);
    $657242851ad0d223$var$UDSliceFlipPrun = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 20791, 7, 1);
    $657242851ad0d223$var$TwistFlipPrun = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 82945, 7, 1);
    $657242851ad0d223$var$CPermMove = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        2768,
        10
    ], 2);
    $657242851ad0d223$var$EPermMove = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        2768,
        10
    ], 2);
    $657242851ad0d223$var$MPermMove = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        24,
        10
    ], 2);
    $657242851ad0d223$var$MPermConj = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        24,
        16
    ], 2);
    $657242851ad0d223$var$CCombPConj = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        140,
        16
    ], 2);
    $657242851ad0d223$var$MCPermPrun = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 8305, 7, 1);
    $657242851ad0d223$var$EPermCCombPPrun = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 48441, 7, 1);
}
function $657242851ad0d223$var$$doMovePrun(this$static, cc, m) {
    this$static.slice_0 = $657242851ad0d223$var$UDSliceMove[cc.slice_0][m];
    this$static.flip = $657242851ad0d223$var$FlipMove[cc.flip][($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$Sym8Move)[m << 3 | cc.fsym]];
    this$static.fsym = this$static.flip & 7 ^ cc.fsym;
    this$static.flip >>= 3;
    this$static.twist = $657242851ad0d223$var$TwistMove[cc.twist][$657242851ad0d223$var$Sym8Move[m << 3 | cc.tsym]];
    this$static.tsym = this$static.twist & 7 ^ cc.tsym;
    this$static.twist >>= 3;
    this$static.prun = $657242851ad0d223$var$max_0($657242851ad0d223$var$max_0($657242851ad0d223$var$getPruning($657242851ad0d223$var$UDSliceTwistPrun, this$static.twist * 495 + $657242851ad0d223$var$UDSliceConj[this$static.slice_0][this$static.tsym]), $657242851ad0d223$var$getPruning($657242851ad0d223$var$UDSliceFlipPrun, this$static.flip * 495 + $657242851ad0d223$var$UDSliceConj[this$static.slice_0][this$static.fsym])), $657242851ad0d223$var$getPruning($657242851ad0d223$var$TwistFlipPrun, this$static.twist << 11 | $657242851ad0d223$var$FlipS2RF[this$static.flip << 3 | this$static.fsym ^ this$static.tsym]));
    return this$static.prun;
}
function $657242851ad0d223$var$$doMovePrunConj(this$static, cc, m) {
    m = ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$SymMove_0)[3][m];
    this$static.flipc = $657242851ad0d223$var$FlipMove[cc.flipc >> 3][$657242851ad0d223$var$Sym8Move[m << 3 | cc.flipc & 7]] ^ cc.flipc & 7;
    this$static.twistc = $657242851ad0d223$var$TwistMove[cc.twistc >> 3][$657242851ad0d223$var$Sym8Move[m << 3 | cc.twistc & 7]] ^ cc.twistc & 7;
    return $657242851ad0d223$var$getPruning($657242851ad0d223$var$TwistFlipPrun, this$static.twistc >> 3 << 11 | $657242851ad0d223$var$FlipS2RF[this$static.flipc ^ this$static.twistc & 7]);
}
function $657242851ad0d223$var$$setWithPrun(this$static, cc, depth) {
    var pc;
    this$static.twist = ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$TwistR2S)[$657242851ad0d223$var$$getTwist(cc)];
    this$static.flip = $657242851ad0d223$var$FlipR2S[$657242851ad0d223$var$$getFlip(cc)];
    this$static.tsym = this$static.twist & 7;
    this$static.twist = this$static.twist >> 3;
    this$static.prun = $657242851ad0d223$var$getPruning($657242851ad0d223$var$TwistFlipPrun, this$static.twist << 11 | $657242851ad0d223$var$FlipS2RF[this$static.flip ^ this$static.tsym]);
    if (this$static.prun > depth) return false;
    this$static.fsym = this$static.flip & 7;
    this$static.flip = this$static.flip >> 3;
    this$static.slice_0 = 494 - $657242851ad0d223$var$getComb(cc.ea, 8, true);
    this$static.prun = $657242851ad0d223$var$max_0(this$static.prun, $657242851ad0d223$var$max_0($657242851ad0d223$var$getPruning($657242851ad0d223$var$UDSliceTwistPrun, this$static.twist * 495 + $657242851ad0d223$var$UDSliceConj[this$static.slice_0][this$static.tsym]), $657242851ad0d223$var$getPruning($657242851ad0d223$var$UDSliceFlipPrun, this$static.flip * 495 + $657242851ad0d223$var$UDSliceConj[this$static.slice_0][this$static.fsym])));
    if (this$static.prun > depth) return false;
    pc = new $657242851ad0d223$var$CubieCube();
    $657242851ad0d223$var$CornConjugate(cc, 1, pc);
    $657242851ad0d223$var$EdgeConjugate(cc, 1, pc);
    this$static.twistc = $657242851ad0d223$var$TwistR2S[$657242851ad0d223$var$$getTwist(pc)];
    this$static.flipc = $657242851ad0d223$var$FlipR2S[$657242851ad0d223$var$$getFlip(pc)];
    this$static.prun = $657242851ad0d223$var$max_0(this$static.prun, $657242851ad0d223$var$getPruning($657242851ad0d223$var$TwistFlipPrun, this$static.twistc >> 3 << 11 | $657242851ad0d223$var$FlipS2RF[this$static.flipc ^ this$static.twistc & 7]));
    return this$static.prun <= depth;
}
function $657242851ad0d223$var$CoordCube() {
    $657242851ad0d223$var$$clinit_CoordCube();
}
function $657242851ad0d223$var$getPruning(table, index_0) {
    $657242851ad0d223$var$$clinit_CoordCube();
    return table[index_0 >> 3] >> (index_0 << 2) & 15;
}
function $657242851ad0d223$var$init_0(fullInit) {
    $657242851ad0d223$var$$clinit_CoordCube();
    if ($657242851ad0d223$var$initLevel == 2 || $657242851ad0d223$var$initLevel == 1 && !fullInit) return;
    if ($657242851ad0d223$var$initLevel == 0) {
        $657242851ad0d223$var$initPermSym2Raw();
        $657242851ad0d223$var$initCPermMove();
        $657242851ad0d223$var$initEPermMove();
        $657242851ad0d223$var$initMPermMoveConj();
        $657242851ad0d223$var$initCombPMoveConj();
        $657242851ad0d223$var$$clinit_CubieCube();
        $657242851ad0d223$var$initSym2Raw(2048, $657242851ad0d223$var$FlipS2R, $657242851ad0d223$var$FlipR2S, $657242851ad0d223$var$SymStateFlip = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 336, 7, 1), 0);
        $657242851ad0d223$var$initSym2Raw(2187, $657242851ad0d223$var$TwistS2R, $657242851ad0d223$var$TwistR2S, $657242851ad0d223$var$SymStateTwist = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 324, 7, 1), 1);
        $657242851ad0d223$var$initFlipMove();
        $657242851ad0d223$var$initTwistMove();
        $657242851ad0d223$var$initUDSliceMoveConj();
    }
    $657242851ad0d223$var$initRawSymPrun($657242851ad0d223$var$MCPermPrun, $657242851ad0d223$var$MPermMove, $657242851ad0d223$var$MPermConj, $657242851ad0d223$var$CPermMove, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$SymStatePerm), 584244, fullInit);
    $657242851ad0d223$var$initRawSymPrun($657242851ad0d223$var$EPermCCombPPrun, $657242851ad0d223$var$CCombPMove, $657242851ad0d223$var$CCombPConj, $657242851ad0d223$var$EPermMove, $657242851ad0d223$var$SymStatePerm, 514084, fullInit);
    $657242851ad0d223$var$initRawSymPrun($657242851ad0d223$var$UDSliceTwistPrun, $657242851ad0d223$var$UDSliceMove, $657242851ad0d223$var$UDSliceConj, $657242851ad0d223$var$TwistMove, $657242851ad0d223$var$SymStateTwist, 431619, fullInit);
    $657242851ad0d223$var$initRawSymPrun($657242851ad0d223$var$UDSliceFlipPrun, $657242851ad0d223$var$UDSliceMove, $657242851ad0d223$var$UDSliceConj, $657242851ad0d223$var$FlipMove, $657242851ad0d223$var$SymStateFlip, 431619, fullInit);
    $657242851ad0d223$var$initRawSymPrun($657242851ad0d223$var$TwistFlipPrun, null, null, $657242851ad0d223$var$TwistMove, $657242851ad0d223$var$SymStateTwist, 103939, fullInit);
    $657242851ad0d223$var$initLevel = fullInit ? 2 : 1;
}
function $657242851ad0d223$var$initCPermMove() {
    var c, d, i, j;
    c = new $657242851ad0d223$var$CubieCube();
    d = new $657242851ad0d223$var$CubieCube();
    for(i = 0; i < 2768; i++){
        $657242851ad0d223$var$$setCPerm(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$EPermS2R)[i]);
        for(j = 0; j < 10; j++){
            $657242851ad0d223$var$CornMult(c, $657242851ad0d223$var$moveCube[($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$ud2std)[j]], d);
            $657242851ad0d223$var$CPermMove[i][j] = $657242851ad0d223$var$ESym2CSym($657242851ad0d223$var$EPermR2S[$657242851ad0d223$var$getNPerm(d.ca, 8, false)]) & $657242851ad0d223$var$$intern_20;
        }
    }
}
function $657242851ad0d223$var$initCombPMoveConj() {
    var c, d, i, j, j0;
    c = new $657242851ad0d223$var$CubieCube();
    d = new $657242851ad0d223$var$CubieCube();
    $657242851ad0d223$var$CCombPMove = $657242851ad0d223$var$initDims($657242851ad0d223$var$C_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_26
    ], [
        11,
        0
    ], 7, [
        140,
        10
    ], 2);
    for(i = 0; i < 140; i++){
        $657242851ad0d223$var$setComb(c.ca, i % 70, 0, false);
        for(j0 = 0; j0 < 10; j0++){
            $657242851ad0d223$var$CornMult(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$moveCube)[($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$ud2std)[j0]], d);
            $657242851ad0d223$var$CCombPMove[i][j0] = $657242851ad0d223$var$getComb(d.ca, 0, false) + 70 * (165 >> j0 & 1 ^ ~~(i / 70)) & $657242851ad0d223$var$$intern_20;
        }
        for(j = 0; j < 16; j++){
            $657242851ad0d223$var$CornConjugate(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$SymMultInv)[0][j], d);
            $657242851ad0d223$var$CCombPConj[i][j] = $657242851ad0d223$var$getComb(d.ca, 0, false) + 70 * ~~(i / 70) & $657242851ad0d223$var$$intern_20;
        }
    }
}
function $657242851ad0d223$var$initEPermMove() {
    var c, d, i, j;
    c = new $657242851ad0d223$var$CubieCube();
    d = new $657242851ad0d223$var$CubieCube();
    for(i = 0; i < 2768; i++){
        $657242851ad0d223$var$$setEPerm(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$EPermS2R)[i]);
        for(j = 0; j < 10; j++){
            $657242851ad0d223$var$EdgeMult(c, $657242851ad0d223$var$moveCube[($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$ud2std)[j]], d);
            $657242851ad0d223$var$EPermMove[i][j] = $657242851ad0d223$var$EPermR2S[$657242851ad0d223$var$getNPerm(d.ea, 8, true)];
        }
    }
}
function $657242851ad0d223$var$initFlipMove() {
    var c, d, i, j;
    c = new $657242851ad0d223$var$CubieCube();
    d = new $657242851ad0d223$var$CubieCube();
    for(i = 0; i < 336; i++){
        $657242851ad0d223$var$$setFlip(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$FlipS2R)[i]);
        for(j = 0; j < 18; j++){
            $657242851ad0d223$var$EdgeMult(c, $657242851ad0d223$var$moveCube[j], d);
            $657242851ad0d223$var$FlipMove[i][j] = $657242851ad0d223$var$FlipR2S[$657242851ad0d223$var$$getFlip(d)];
        }
    }
}
function $657242851ad0d223$var$initMPermMoveConj() {
    var c, d, i, j, j0;
    c = new $657242851ad0d223$var$CubieCube();
    d = new $657242851ad0d223$var$CubieCube();
    for(i = 0; i < 24; i++){
        $657242851ad0d223$var$setNPerm(c.ea, i, 12, true);
        for(j0 = 0; j0 < 10; j0++){
            $657242851ad0d223$var$EdgeMult(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$moveCube)[($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$ud2std)[j0]], d);
            $657242851ad0d223$var$MPermMove[i][j0] = $657242851ad0d223$var$getNPerm(d.ea, 12, true) % 24 & $657242851ad0d223$var$$intern_20;
        }
        for(j = 0; j < 16; j++){
            $657242851ad0d223$var$EdgeConjugate(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$SymMultInv)[0][j], d);
            $657242851ad0d223$var$MPermConj[i][j] = $657242851ad0d223$var$getNPerm(d.ea, 12, true) % 24 & $657242851ad0d223$var$$intern_20;
        }
    }
}
function $657242851ad0d223$var$initRawSymPrun(PrunTable, RawMove, RawConj, SymMove, SymState, PrunFlag, fullInit) {
    var INV_DEPTH, ISTFP, IS_PHASE2, MAX_DEPTH, MIN_DEPTH, NEXT_AXIS_MAGIC, N_MOVES, N_RAW, N_SIZE, SEARCH_DEPTH, SYM_E2C_MAGIC, SYM_MASK, SYM_SHIFT, check, depth, flip, fsym, i, i0, idx, idxx, inv, j, m, mask, prun, raw, rawx, selArrMask, select, sym, symState, symx, val, val0, xorVal;
    SYM_SHIFT = PrunFlag & 15;
    SYM_E2C_MAGIC = (PrunFlag >> 4 & 1) == 1 ? $657242851ad0d223$var$$intern_28 : 0;
    IS_PHASE2 = (PrunFlag >> 5 & 1) == 1;
    INV_DEPTH = PrunFlag >> 8 & 15;
    MAX_DEPTH = PrunFlag >> 12 & 15;
    MIN_DEPTH = PrunFlag >> 16 & 15;
    SEARCH_DEPTH = fullInit ? MAX_DEPTH : MIN_DEPTH;
    SYM_MASK = (1 << SYM_SHIFT) - 1;
    ISTFP = RawMove == null;
    N_RAW = ISTFP ? 2048 : RawMove.length;
    N_SIZE = N_RAW * SymMove.length;
    N_MOVES = IS_PHASE2 ? 10 : 18;
    NEXT_AXIS_MAGIC = N_MOVES == 10 ? 66 : 599186;
    depth = (PrunTable[N_SIZE >> 3] >> (N_SIZE << 2) & 15) - 1;
    if (depth == -1) {
        for(i = 0; i < ~~(N_SIZE / 8) + 1; i++)PrunTable[i] = $657242851ad0d223$var$$intern_29;
        PrunTable[0] ^= 1;
        depth = 0;
    }
    while(depth < SEARCH_DEPTH){
        mask = (depth + 1) * $657242851ad0d223$var$$intern_29 ^ -1;
        for(i0 = 0; i0 < PrunTable.length; i0++){
            val0 = PrunTable[i0] ^ mask;
            val0 &= val0 >> 1;
            PrunTable[i0] += val0 & val0 >> 2 & $657242851ad0d223$var$$intern_29;
        }
        inv = depth > INV_DEPTH;
        select = inv ? depth + 2 : depth;
        selArrMask = select * $657242851ad0d223$var$$intern_29;
        check = inv ? depth : depth + 2;
        ++depth;
        xorVal = depth ^ depth + 1;
        val = 0;
        for(i = 0; i < N_SIZE; ++i, val >>= 4){
            if ((i & 7) == 0) {
                val = PrunTable[i >> 3];
                if (((val ^ selArrMask) - $657242851ad0d223$var$$intern_29 & ~(val ^ selArrMask) & -2004318072) == 0) {
                    i += 7;
                    continue;
                }
            }
            if ((val & 15) != select) continue;
            raw = i % N_RAW;
            sym = ~~(i / N_RAW);
            flip = 0;
            fsym = 0;
            if (ISTFP) {
                flip = ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$FlipR2S)[raw];
                fsym = flip & 7;
                flip >>= 3;
            }
            for(m = 0; m < N_MOVES; m++){
                symx = SymMove[sym][m];
                ISTFP ? rawx = ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$FlipS2RF)[$657242851ad0d223$var$FlipMove[flip][$657242851ad0d223$var$Sym8Move[m << 3 | fsym]] ^ fsym ^ symx & SYM_MASK] : rawx = RawConj[RawMove[raw][m]][symx & SYM_MASK];
                symx >>= SYM_SHIFT;
                idx = symx * N_RAW + rawx;
                prun = PrunTable[idx >> 3] >> (idx << 2) & 15;
                if (prun != check) {
                    prun < depth - 1 && (m += NEXT_AXIS_MAGIC >> m & 3);
                    continue;
                }
                if (inv) {
                    PrunTable[i >> 3] ^= xorVal << (i << 2);
                    break;
                }
                PrunTable[idx >> 3] ^= xorVal << (idx << 2);
                for(j = 1, symState = SymState[symx]; (symState >>= 1) != 0; j++){
                    if ((symState & 1) != 1) continue;
                    idxx = symx * N_RAW;
                    ISTFP ? idxx += ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$FlipS2RF)[$657242851ad0d223$var$FlipR2S[rawx] ^ j] : idxx += RawConj[rawx][j ^ SYM_E2C_MAGIC >> (j << 1) & 3];
                    if ((PrunTable[idxx >> 3] >> (idxx << 2) & 15) == check) PrunTable[idxx >> 3] ^= xorVal << (idxx << 2);
                }
            }
        }
    }
}
function $657242851ad0d223$var$initTwistMove() {
    var c, d, i, j;
    c = new $657242851ad0d223$var$CubieCube();
    d = new $657242851ad0d223$var$CubieCube();
    for(i = 0; i < 324; i++){
        $657242851ad0d223$var$$setTwist(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$TwistS2R)[i]);
        for(j = 0; j < 18; j++){
            $657242851ad0d223$var$CornMult(c, $657242851ad0d223$var$moveCube[j], d);
            $657242851ad0d223$var$TwistMove[i][j] = $657242851ad0d223$var$TwistR2S[$657242851ad0d223$var$$getTwist(d)];
        }
    }
}
function $657242851ad0d223$var$initUDSliceMoveConj() {
    var c, d, i, i0, j, j0, k, udslice;
    c = new $657242851ad0d223$var$CubieCube();
    d = new $657242851ad0d223$var$CubieCube();
    for(i0 = 0; i0 < 495; i0++){
        $657242851ad0d223$var$setComb(c.ea, 494 - i0, 8, true);
        for(j0 = 0; j0 < 18; j0 += 3){
            $657242851ad0d223$var$EdgeMult(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$moveCube)[j0], d);
            $657242851ad0d223$var$UDSliceMove[i0][j0] = 494 - $657242851ad0d223$var$getComb(d.ea, 8, true) & $657242851ad0d223$var$$intern_20;
        }
        for(j = 0; j < 16; j += 2){
            $657242851ad0d223$var$EdgeConjugate(c, ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$SymMultInv)[0][j], d);
            $657242851ad0d223$var$UDSliceConj[i0][j >> 1] = 494 - $657242851ad0d223$var$getComb(d.ea, 8, true) & $657242851ad0d223$var$$intern_20;
        }
    }
    for(i = 0; i < 495; i++)for(j = 0; j < 18; j += 3){
        udslice = $657242851ad0d223$var$UDSliceMove[i][j];
        for(k = 1; k < 3; k++){
            udslice = $657242851ad0d223$var$UDSliceMove[udslice][j];
            $657242851ad0d223$var$UDSliceMove[i][j + k] = udslice & $657242851ad0d223$var$$intern_20;
        }
    }
}
$657242851ad0d223$var$defineClass(31, 1, {
    31: 1
}, $657242851ad0d223$var$CoordCube);
$657242851ad0d223$var$_.flip = 0;
$657242851ad0d223$var$_.flipc = 0;
$657242851ad0d223$var$_.fsym = 0;
$657242851ad0d223$var$_.prun = 0;
$657242851ad0d223$var$_.slice_0 = 0;
$657242851ad0d223$var$_.tsym = 0;
$657242851ad0d223$var$_.twist = 0;
$657242851ad0d223$var$_.twistc = 0;
var $657242851ad0d223$var$CCombPConj;
var $657242851ad0d223$var$CCombPMove;
var $657242851ad0d223$var$CPermMove;
var $657242851ad0d223$var$EPermCCombPPrun;
var $657242851ad0d223$var$EPermMove;
var $657242851ad0d223$var$FlipMove;
var $657242851ad0d223$var$MCPermPrun;
var $657242851ad0d223$var$MPermConj;
var $657242851ad0d223$var$MPermMove;
var $657242851ad0d223$var$TwistFlipPrun;
var $657242851ad0d223$var$TwistMove;
var $657242851ad0d223$var$UDSliceConj;
var $657242851ad0d223$var$UDSliceFlipPrun;
var $657242851ad0d223$var$UDSliceMove;
var $657242851ad0d223$var$UDSliceTwistPrun;
var $657242851ad0d223$var$initLevel = 0;
var $657242851ad0d223$var$Lorg_cubing_min2phase_client_CoordCube_2_classLit = $657242851ad0d223$var$createForClass("org.cubing.min2phase.client", "CoordCube", 31);
var $657242851ad0d223$var$$clinit_CubieCube_ran = false;
function $657242851ad0d223$var$$clinit_CubieCube() {
    if ($657242851ad0d223$var$$clinit_CubieCube_ran) return;
    $657242851ad0d223$var$$clinit_CubieCube_ran = true;
    $657242851ad0d223$var$CubeSym = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lorg_cubing_min2phase_client_CubieCube_2_classLit, $657242851ad0d223$var$$intern_3, 7, 16, 0, 1);
    $657242851ad0d223$var$moveCube = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lorg_cubing_min2phase_client_CubieCube_2_classLit, $657242851ad0d223$var$$intern_3, 7, 18, 0, 1);
    $657242851ad0d223$var$moveCubeSym = $657242851ad0d223$var$initDim($657242851ad0d223$var$J_classLit, $657242851ad0d223$var$$intern_3, 0, 18, 6, 1);
    $657242851ad0d223$var$firstMoveSym = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 48, 7, 1);
    $657242851ad0d223$var$SymMult = $657242851ad0d223$var$initDims($657242851ad0d223$var$I_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_27
    ], [
        17,
        0
    ], 7, [
        16,
        16
    ], 2);
    $657242851ad0d223$var$SymMultInv = $657242851ad0d223$var$initDims($657242851ad0d223$var$I_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_27
    ], [
        17,
        0
    ], 7, [
        16,
        16
    ], 2);
    $657242851ad0d223$var$SymMove_0 = $657242851ad0d223$var$initDims($657242851ad0d223$var$I_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_27
    ], [
        17,
        0
    ], 7, [
        16,
        18
    ], 2);
    $657242851ad0d223$var$Sym8Move = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 144, 7, 1);
    $657242851ad0d223$var$SymMoveUD = $657242851ad0d223$var$initDims($657242851ad0d223$var$I_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_27
    ], [
        17,
        0
    ], 7, [
        16,
        18
    ], 2);
    $657242851ad0d223$var$FlipS2R = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 336, 7, 1);
    $657242851ad0d223$var$TwistS2R = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 324, 7, 1);
    $657242851ad0d223$var$EPermS2R = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 2768, 7, 1);
    $657242851ad0d223$var$Perm2CombP = $657242851ad0d223$var$initDim($657242851ad0d223$var$B_classLit, $657242851ad0d223$var$$intern_30, 0, 2768, 7, 1);
    $657242851ad0d223$var$PermInvEdgeSym = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 2768, 7, 1);
    $657242851ad0d223$var$MPermInv = $657242851ad0d223$var$initDim($657242851ad0d223$var$B_classLit, $657242851ad0d223$var$$intern_30, 0, 24, 7, 1);
    $657242851ad0d223$var$FlipR2S = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 2048, 7, 1);
    $657242851ad0d223$var$TwistR2S = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 2187, 7, 1);
    $657242851ad0d223$var$EPermR2S = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 40320, 7, 1);
    $657242851ad0d223$var$FlipS2RF = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 2688, 7, 1);
    $657242851ad0d223$var$urf1 = new $657242851ad0d223$var$CubieCube_0(2531, 1373, 67026819, 1367);
    $657242851ad0d223$var$urf2 = new $657242851ad0d223$var$CubieCube_0(2089, 1906, 322752913, 2040);
    $657242851ad0d223$var$urfMove = $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 2), $657242851ad0d223$var$$intern_3, 10, 0, [
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
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
            17
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            6,
            7,
            8,
            0,
            1,
            2,
            3,
            4,
            5,
            15,
            16,
            17,
            9,
            10,
            11,
            12,
            13,
            14
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            3,
            4,
            5,
            6,
            7,
            8,
            0,
            1,
            2,
            12,
            13,
            14,
            15,
            16,
            17,
            9,
            10,
            11
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            2,
            1,
            0,
            5,
            4,
            3,
            8,
            7,
            6,
            11,
            10,
            9,
            14,
            13,
            12,
            17,
            16,
            15
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            8,
            7,
            6,
            2,
            1,
            0,
            5,
            4,
            3,
            17,
            16,
            15,
            11,
            10,
            9,
            14,
            13,
            12
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            5,
            4,
            3,
            8,
            7,
            6,
            2,
            1,
            0,
            14,
            13,
            12,
            17,
            16,
            15,
            11,
            10,
            9
        ])
    ]);
    $657242851ad0d223$var$initMove();
    $657242851ad0d223$var$initSym();
}
function $657242851ad0d223$var$$$init(this$static) {
    this$static.ca = $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ]);
    this$static.ea = $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
        0,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20,
        22
    ]);
}
function $657242851ad0d223$var$$URFConjugate(this$static) {
    !this$static.temps && (this$static.temps = new $657242851ad0d223$var$CubieCube());
    $657242851ad0d223$var$CornMult($657242851ad0d223$var$urf2, this$static, this$static.temps);
    $657242851ad0d223$var$CornMult(this$static.temps, $657242851ad0d223$var$urf1, this$static);
    $657242851ad0d223$var$EdgeMult($657242851ad0d223$var$urf2, this$static, this$static.temps);
    $657242851ad0d223$var$EdgeMult(this$static.temps, $657242851ad0d223$var$urf1, this$static);
}
function $657242851ad0d223$var$$copy(this$static, c) {
    var i, i0;
    for(i0 = 0; i0 < 8; i0++)this$static.ca[i0] = c.ca[i0];
    for(i = 0; i < 12; i++)this$static.ea[i] = c.ea[i];
}
function $657242851ad0d223$var$$getCPermSym(this$static) {
    return $657242851ad0d223$var$ESym2CSym($657242851ad0d223$var$EPermR2S[$657242851ad0d223$var$getNPerm(this$static.ca, 8, false)]);
}
function $657242851ad0d223$var$$getEPermSym(this$static) {
    return $657242851ad0d223$var$EPermR2S[$657242851ad0d223$var$getNPerm(this$static.ea, 8, true)];
}
function $657242851ad0d223$var$$getFlip(this$static) {
    var i, idx;
    idx = 0;
    for(i = 0; i < 11; i++)idx = idx << 1 | this$static.ea[i] & 1;
    return idx;
}
function $657242851ad0d223$var$$getTwist(this$static) {
    var i, idx;
    idx = 0;
    for(i = 0; i < 7; i++)idx += (idx << 1) + (this$static.ca[i] >> 3);
    return idx;
}
function $657242851ad0d223$var$$invCubieCube(this$static) {
    var corn, edge;
    !this$static.temps && (this$static.temps = new $657242851ad0d223$var$CubieCube());
    for(edge = 0; edge < 12; edge++)this$static.temps.ea[this$static.ea[edge] >> 1] = (edge << 1 | this$static.ea[edge] & 1) << 24 >> 24;
    for(corn = 0; corn < 8; corn++)this$static.temps.ca[this$static.ca[corn] & 7] = (corn | 32 >> (this$static.ca[corn] >> 3) & 24) << 24 >> 24;
    $657242851ad0d223$var$$copy(this$static, this$static.temps);
}
function $657242851ad0d223$var$$selfSymmetry(this$static) {
    var c, cperm, cpermx, d, i, sym, urfInv;
    c = new $657242851ad0d223$var$CubieCube_1(this$static);
    d = new $657242851ad0d223$var$CubieCube();
    cperm = $657242851ad0d223$var$ESym2CSym($657242851ad0d223$var$EPermR2S[$657242851ad0d223$var$getNPerm(c.ca, 8, false)]) >> 4;
    sym = {
        l: 0,
        m: 0,
        h: 0
    };
    for(urfInv = 0; urfInv < 6; urfInv++){
        cpermx = $657242851ad0d223$var$ESym2CSym($657242851ad0d223$var$EPermR2S[$657242851ad0d223$var$getNPerm(c.ca, 8, false)]) >> 4;
        if (cperm == cpermx) for(i = 0; i < 16; i++){
            $657242851ad0d223$var$CornConjugate(c, $657242851ad0d223$var$SymMultInv[0][i], d);
            if ($657242851ad0d223$var$equals_7(d.ca, this$static.ca)) {
                $657242851ad0d223$var$EdgeConjugate(c, $657242851ad0d223$var$SymMultInv[0][i], d);
                $657242851ad0d223$var$equals_7(d.ea, this$static.ea) && (sym = $657242851ad0d223$var$or(sym, $657242851ad0d223$var$shl({
                    l: 1,
                    m: 0,
                    h: 0
                }, (urfInv << 4 | i) < 48 ? urfInv << 4 | i : 48)));
            }
        }
        $657242851ad0d223$var$$URFConjugate(c);
        urfInv % 3 == 2 && $657242851ad0d223$var$$invCubieCube(c);
    }
    return sym;
}
function $657242851ad0d223$var$$setCPerm(this$static, idx) {
    $657242851ad0d223$var$setNPerm(this$static.ca, idx, 8, false);
}
function $657242851ad0d223$var$$setEPerm(this$static, idx) {
    $657242851ad0d223$var$setNPerm(this$static.ea, idx, 8, true);
}
function $657242851ad0d223$var$$setFlip(this$static, idx) {
    var i, parity, val;
    parity = 0;
    for(i = 10; i >= 0; --i, idx >>= 1){
        parity ^= val = idx & 1;
        this$static.ea[i] = (this$static.ea[i] & -2 | val) << 24 >> 24;
    }
    this$static.ea[11] = (this$static.ea[11] & -2 | parity) << 24 >> 24;
}
function $657242851ad0d223$var$$setTwist(this$static, idx) {
    var i, twst, val;
    twst = 15;
    for(i = 6; i >= 0; --i, idx = ~~(idx / 3)){
        twst -= val = idx % 3;
        this$static.ca[i] = (this$static.ca[i] & 7 | val << 3) << 24 >> 24;
    }
    this$static.ca[7] = (this$static.ca[7] & 7 | twst % 3 << 3) << 24 >> 24;
}
function $657242851ad0d223$var$$verify(this$static) {
    var c, cornMask, e, edgeMask, sum;
    sum = 0;
    edgeMask = 0;
    for(e = 0; e < 12; e++){
        edgeMask |= 1 << (this$static.ea[e] >> 1);
        sum ^= this$static.ea[e] & 1;
    }
    if (edgeMask != 4095) return -2;
    if (sum != 0) return -3;
    cornMask = 0;
    sum = 0;
    for(c = 0; c < 8; c++){
        cornMask |= 1 << (this$static.ca[c] & 7);
        sum += this$static.ca[c] >> 3;
    }
    if (cornMask != 255) return -4;
    if (sum % 3 != 0) return -5;
    if (($657242851ad0d223$var$getNParity($657242851ad0d223$var$getNPerm(this$static.ea, 12, true), 12) ^ $657242851ad0d223$var$getNParity($657242851ad0d223$var$getNPerm(this$static.ca, 8, false), 8)) != 0) return -6;
    return 0;
}
function $657242851ad0d223$var$CornConjugate(a, idx, b) {
    $657242851ad0d223$var$$clinit_CubieCube();
    var corn, ori, oriA, oriB, s, sinv;
    sinv = $657242851ad0d223$var$CubeSym[$657242851ad0d223$var$SymMultInv[0][idx]];
    s = $657242851ad0d223$var$CubeSym[idx];
    for(corn = 0; corn < 8; corn++){
        oriA = sinv.ca[a.ca[s.ca[corn] & 7] & 7] >> 3;
        oriB = a.ca[s.ca[corn] & 7] >> 3;
        ori = oriA < 3 ? oriB : (3 - oriB) % 3;
        b.ca[corn] = (sinv.ca[a.ca[s.ca[corn] & 7] & 7] & 7 | ori << 3) << 24 >> 24;
    }
}
function $657242851ad0d223$var$CornMult(a, b, prod) {
    $657242851ad0d223$var$$clinit_CubieCube();
    var corn, oriA, oriB;
    for(corn = 0; corn < 8; corn++){
        oriA = a.ca[b.ca[corn] & 7] >> 3;
        oriB = b.ca[corn] >> 3;
        prod.ca[corn] = (a.ca[b.ca[corn] & 7] & 7 | (oriA + oriB) % 3 << 3) << 24 >> 24;
    }
}
function $657242851ad0d223$var$CornMultFull(a, b, prod) {
    var corn, ori, oriA, oriB;
    for(corn = 0; corn < 8; corn++){
        oriA = a.ca[b.ca[corn] & 7] >> 3;
        oriB = b.ca[corn] >> 3;
        ori = oriA + (oriA < 3 ? oriB : 6 - oriB);
        ori = ori % 3 + (oriA < 3 == oriB < 3 ? 0 : 3);
        prod.ca[corn] = (a.ca[b.ca[corn] & 7] & 7 | ori << 3) << 24 >> 24;
    }
}
function $657242851ad0d223$var$CubieCube() {
    $657242851ad0d223$var$$clinit_CubieCube();
    $657242851ad0d223$var$$$init(this);
}
function $657242851ad0d223$var$CubieCube_0(cperm, twist, eperm, flip) {
    $657242851ad0d223$var$$$init(this);
    $657242851ad0d223$var$setNPerm(this.ca, cperm, 8, false);
    $657242851ad0d223$var$$setTwist(this, twist);
    $657242851ad0d223$var$setNPerm(this.ea, eperm, 12, true);
    $657242851ad0d223$var$$setFlip(this, flip);
}
function $657242851ad0d223$var$CubieCube_1(c) {
    $657242851ad0d223$var$$$init(this);
    $657242851ad0d223$var$$copy(this, c);
}
function $657242851ad0d223$var$ESym2CSym(idx) {
    $657242851ad0d223$var$$clinit_CubieCube();
    return idx ^ $657242851ad0d223$var$$intern_28 >> ((idx & 15) << 1) & 3;
}
function $657242851ad0d223$var$EdgeConjugate(a, idx, b) {
    $657242851ad0d223$var$$clinit_CubieCube();
    var ed, s, sinv;
    sinv = $657242851ad0d223$var$CubeSym[$657242851ad0d223$var$SymMultInv[0][idx]];
    s = $657242851ad0d223$var$CubeSym[idx];
    for(ed = 0; ed < 12; ed++)b.ea[ed] = (sinv.ea[a.ea[s.ea[ed] >> 1] >> 1] ^ a.ea[s.ea[ed] >> 1] & 1 ^ s.ea[ed] & 1) << 24 >> 24;
}
function $657242851ad0d223$var$EdgeMult(a, b, prod) {
    $657242851ad0d223$var$$clinit_CubieCube();
    var ed;
    for(ed = 0; ed < 12; ed++)prod.ea[ed] = (a.ea[b.ea[ed] >> 1] ^ b.ea[ed] & 1) << 24 >> 24;
}
function $657242851ad0d223$var$getPermSymInv(idx, sym, isCorner) {
    $657242851ad0d223$var$$clinit_CubieCube();
    var idxi;
    idxi = $657242851ad0d223$var$PermInvEdgeSym[idx];
    isCorner && (idxi = idxi ^ $657242851ad0d223$var$$intern_28 >> ((idxi & 15) << 1) & 3);
    return idxi & 65520 | $657242851ad0d223$var$SymMult[idxi & 15][sym];
}
function $657242851ad0d223$var$getSkipMoves() {
    $657242851ad0d223$var$$clinit_CubieCube();
    return 0;
}
function $657242851ad0d223$var$initMove() {
    var a, p;
    $657242851ad0d223$var$moveCube[0] = new $657242851ad0d223$var$CubieCube_0(15120, 0, 119750400, 0);
    $657242851ad0d223$var$moveCube[3] = new $657242851ad0d223$var$CubieCube_0(21021, 1494, 323403417, 0);
    $657242851ad0d223$var$moveCube[6] = new $657242851ad0d223$var$CubieCube_0(8064, 1236, 29441808, 550);
    $657242851ad0d223$var$moveCube[9] = new $657242851ad0d223$var$CubieCube_0(9, 0, 5880, 0);
    $657242851ad0d223$var$moveCube[12] = new $657242851ad0d223$var$CubieCube_0(1230, 412, 2949660, 0);
    $657242851ad0d223$var$moveCube[15] = new $657242851ad0d223$var$CubieCube_0(224, 137, 328552, 137);
    for(a = 0; a < 18; a += 3)for(p = 0; p < 2; p++){
        $657242851ad0d223$var$moveCube[a + p + 1] = new $657242851ad0d223$var$CubieCube();
        $657242851ad0d223$var$EdgeMult($657242851ad0d223$var$moveCube[a + p], $657242851ad0d223$var$moveCube[a], $657242851ad0d223$var$moveCube[a + p + 1]);
        $657242851ad0d223$var$CornMult($657242851ad0d223$var$moveCube[a + p], $657242851ad0d223$var$moveCube[a], $657242851ad0d223$var$moveCube[a + p + 1]);
    }
}
function $657242851ad0d223$var$initPermSym2Raw() {
    $657242851ad0d223$var$$clinit_CubieCube();
    var cc, i, i0;
    $657242851ad0d223$var$initSym2Raw(40320, $657242851ad0d223$var$EPermS2R, $657242851ad0d223$var$EPermR2S, $657242851ad0d223$var$SymStatePerm = $657242851ad0d223$var$initDim($657242851ad0d223$var$C_classLit, $657242851ad0d223$var$$intern_26, 0, 2768, 7, 1), 2);
    cc = new $657242851ad0d223$var$CubieCube();
    for(i0 = 0; i0 < 2768; i0++){
        $657242851ad0d223$var$$setEPerm(cc, $657242851ad0d223$var$EPermS2R[i0]);
        $657242851ad0d223$var$Perm2CombP[i0] = $657242851ad0d223$var$getComb(cc.ea, 0, true) + $657242851ad0d223$var$getNParity($657242851ad0d223$var$EPermS2R[i0], 8) * 70 << 24 >> 24;
        $657242851ad0d223$var$$invCubieCube(cc);
        $657242851ad0d223$var$PermInvEdgeSym[i0] = $657242851ad0d223$var$EPermR2S[$657242851ad0d223$var$getNPerm(cc.ea, 8, true)];
    }
    for(i = 0; i < 24; i++){
        $657242851ad0d223$var$setNPerm(cc.ea, i, 12, true);
        $657242851ad0d223$var$$invCubieCube(cc);
        $657242851ad0d223$var$MPermInv[i] = $657242851ad0d223$var$getNPerm(cc.ea, 12, true) % 24 << 24 >> 24;
    }
}
function $657242851ad0d223$var$initSym() {
    var c, d, f2, i, i0, i1, i2, j, j0, j1, k, lr2, m, s, t, u4;
    c = new $657242851ad0d223$var$CubieCube();
    d = new $657242851ad0d223$var$CubieCube();
    f2 = new $657242851ad0d223$var$CubieCube_0(28783, 0, 259268407, 0);
    u4 = new $657242851ad0d223$var$CubieCube_0(15138, 0, 119765538, 7);
    lr2 = new $657242851ad0d223$var$CubieCube_0(5167, 0, 83473207, 0);
    for(i0 = 0; i0 < 8; i0++)lr2.ca[i0] = $657242851ad0d223$var$narrow_byte(lr2.ca[i0] | 24);
    for(i1 = 0; i1 < 16; i1++){
        $657242851ad0d223$var$CubeSym[i1] = new $657242851ad0d223$var$CubieCube_1(c);
        $657242851ad0d223$var$CornMultFull(c, u4, d);
        $657242851ad0d223$var$EdgeMult(c, u4, d);
        t = d;
        d = c;
        c = t;
        if (i1 % 4 == 3) {
            $657242851ad0d223$var$CornMultFull(t, lr2, d);
            $657242851ad0d223$var$EdgeMult(t, lr2, d);
            t = d;
            d = c;
            c = t;
        }
        if (i1 % 8 == 7) {
            $657242851ad0d223$var$CornMultFull(t, f2, d);
            $657242851ad0d223$var$EdgeMult(t, f2, d);
            t = d;
            d = c;
            c = t;
        }
    }
    for(i2 = 0; i2 < 16; i2++)for(j0 = 0; j0 < 16; j0++){
        $657242851ad0d223$var$CornMultFull($657242851ad0d223$var$CubeSym[i2], $657242851ad0d223$var$CubeSym[j0], c);
        for(k = 0; k < 16; k++)if ($657242851ad0d223$var$equals_7($657242851ad0d223$var$CubeSym[k].ca, c.ca)) {
            $657242851ad0d223$var$SymMult[i2][j0] = k;
            $657242851ad0d223$var$SymMultInv[k][j0] = i2;
            break;
        }
    }
    for(j1 = 0; j1 < 18; j1++)for(s = 0; s < 16; s++){
        $657242851ad0d223$var$CornConjugate($657242851ad0d223$var$moveCube[j1], $657242851ad0d223$var$SymMultInv[0][s], c);
        for(m = 0; m < 18; m++)if ($657242851ad0d223$var$equals_7($657242851ad0d223$var$moveCube[m].ca, c.ca)) {
            $657242851ad0d223$var$SymMove_0[s][j1] = m;
            $657242851ad0d223$var$SymMoveUD[s][($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$std2ud)[j1]] = $657242851ad0d223$var$std2ud[m];
            break;
        }
        s % 2 == 0 && ($657242851ad0d223$var$Sym8Move[j1 << 3 | s >> 1] = $657242851ad0d223$var$SymMove_0[s][j1]);
    }
    for(i = 0; i < 18; i++){
        $657242851ad0d223$var$moveCubeSym[i] = $657242851ad0d223$var$$selfSymmetry($657242851ad0d223$var$moveCube[i]);
        j = i;
        for(s = 0; s < 48; s++){
            $657242851ad0d223$var$SymMove_0[s % 16][j] < i && ($657242851ad0d223$var$firstMoveSym[s] |= 1 << i);
            s % 16 == 15 && (j = $657242851ad0d223$var$urfMove[2][j]);
        }
    }
}
function $657242851ad0d223$var$initSym2Raw(N_RAW, Sym2Raw, Raw2Sym, SymState, coord) {
    $657242851ad0d223$var$$clinit_CubieCube();
    var c, count, d, i, idx, isEdge, s, symIdx, sym_inc;
    c = new $657242851ad0d223$var$CubieCube();
    d = new $657242851ad0d223$var$CubieCube();
    count = 0;
    idx = 0;
    sym_inc = coord >= 2 ? 1 : 2;
    isEdge = coord != 1;
    for(i = 0; i < N_RAW; i++){
        if (Raw2Sym[i] != 0) continue;
        switch(coord){
            case 0:
                $657242851ad0d223$var$$setFlip(c, i);
                break;
            case 1:
                $657242851ad0d223$var$$setTwist(c, i);
                break;
            case 2:
                $657242851ad0d223$var$setNPerm(c.ea, i, 8, true);
        }
        for(s = 0; s < 16; s += sym_inc){
            isEdge ? $657242851ad0d223$var$EdgeConjugate(c, s, d) : $657242851ad0d223$var$CornConjugate(c, s, d);
            switch(coord){
                case 0:
                    idx = $657242851ad0d223$var$$getFlip(d);
                    break;
                case 1:
                    idx = $657242851ad0d223$var$$getTwist(d);
                    break;
                case 2:
                    idx = $657242851ad0d223$var$getNPerm(d.ea, 8, true);
            }
            coord == 0 && ($657242851ad0d223$var$FlipS2RF[count << 3 | s >> 1] = idx & $657242851ad0d223$var$$intern_20);
            idx == i && (SymState[count] = (SymState[count] | 1 << ~~(s / sym_inc)) & $657242851ad0d223$var$$intern_20);
            symIdx = ~~((count << 4 | s) / sym_inc);
            Raw2Sym[idx] = symIdx & $657242851ad0d223$var$$intern_20;
        }
        Sym2Raw[count++] = i & $657242851ad0d223$var$$intern_20;
    }
    return count;
}
var $657242851ad0d223$var$CubeSym;
var $657242851ad0d223$var$EPermR2S;
var $657242851ad0d223$var$EPermS2R;
var $657242851ad0d223$var$FlipR2S;
var $657242851ad0d223$var$FlipS2R;
var $657242851ad0d223$var$FlipS2RF;
var $657242851ad0d223$var$MPermInv;
var $657242851ad0d223$var$Perm2CombP;
var $657242851ad0d223$var$PermInvEdgeSym;
var $657242851ad0d223$var$Sym8Move;
var $657242851ad0d223$var$SymMove_0;
var $657242851ad0d223$var$SymMoveUD;
var $657242851ad0d223$var$SymMult;
var $657242851ad0d223$var$SymMultInv;
var $657242851ad0d223$var$SymStateFlip;
var $657242851ad0d223$var$SymStatePerm;
var $657242851ad0d223$var$SymStateTwist;
var $657242851ad0d223$var$TwistR2S;
var $657242851ad0d223$var$TwistS2R;
var $657242851ad0d223$var$firstMoveSym;
var $657242851ad0d223$var$moveCube;
var $657242851ad0d223$var$moveCubeSym;
var $657242851ad0d223$var$urf1;
var $657242851ad0d223$var$urf2;
var $657242851ad0d223$var$urfMove;
var $657242851ad0d223$var$Lorg_cubing_min2phase_client_CubieCube_2_classLit = $657242851ad0d223$var$createForClass("org.cubing.min2phase.client", "CubieCube", 7);
function $657242851ad0d223$var$$initPhase2(this$static, p2corn, p2csym, p2edge, p2esym, p2mid, edgei, corni) {
    var depth2, i, i0, prun, ret;
    prun = $657242851ad0d223$var$max_0($657242851ad0d223$var$getPruning(($657242851ad0d223$var$$clinit_CoordCube(), $657242851ad0d223$var$EPermCCombPPrun), (edgei >> 4) * 140 + $657242851ad0d223$var$CCombPConj[($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$Perm2CombP)[corni >> 4] & 255][$657242851ad0d223$var$SymMultInv[edgei & 15][corni & 15]]), $657242851ad0d223$var$max_0($657242851ad0d223$var$getPruning($657242851ad0d223$var$EPermCCombPPrun, p2edge * 140 + $657242851ad0d223$var$CCombPConj[$657242851ad0d223$var$Perm2CombP[p2corn] & 255][$657242851ad0d223$var$SymMultInv[p2esym][p2csym]]), $657242851ad0d223$var$getPruning($657242851ad0d223$var$MCPermPrun, p2corn * 24 + $657242851ad0d223$var$MPermConj[p2mid][p2csym])));
    if (prun > this$static.maxDep2) return prun - this$static.maxDep2;
    for(depth2 = this$static.maxDep2; depth2 >= prun; depth2--){
        ret = $657242851ad0d223$var$$phase2(this$static, p2edge, p2esym, p2corn, p2csym, p2mid, depth2, this$static.depth1, 10);
        if (ret < 0) break;
        depth2 -= ret;
        this$static.solLen = 0;
        this$static.solution = new $657242851ad0d223$var$Util$Solution();
        $657242851ad0d223$var$$setArgs(this$static.solution, this$static.verbose, this$static.urfIdx, this$static.depth1);
        for(i0 = 0; i0 < this$static.depth1 + depth2; i0++)$657242851ad0d223$var$$appendSolMove(this$static.solution, this$static.move[i0]);
        for(i = this$static.preMoveLen - 1; i >= 0; i--)$657242851ad0d223$var$$appendSolMove(this$static.solution, this$static.preMoves[i]);
        this$static.solLen = this$static.solution.length_0;
    }
    if (depth2 != this$static.maxDep2) {
        this$static.maxDep2 = $657242851ad0d223$var$min_0($657242851ad0d223$var$MAX_DEPTH2, this$static.solLen - this$static.length1 - 1);
        return $657242851ad0d223$var$gte(this$static.probe, this$static.probeMin) ? 0 : 1;
    }
    return 1;
}
function $657242851ad0d223$var$$initPhase2Pre(this$static) {
    var corni, edgei, i, lastMove, lastPre, m, p2corn, p2csym, p2edge, p2esym, p2mid, p2switch, p2switchMask, p2switchMax, ret;
    this$static.isRec = false;
    if ($657242851ad0d223$var$gte(this$static.probe, !this$static.solution ? this$static.probeMax : this$static.probeMin)) return 0;
    this$static.probe = $657242851ad0d223$var$add_1(this$static.probe, {
        l: 1,
        m: 0,
        h: 0
    });
    for(i = this$static.valid1; i < this$static.depth1; i++){
        $657242851ad0d223$var$CornMult(this$static.phase1Cubie[i], ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$moveCube)[this$static.move[i]], this$static.phase1Cubie[i + 1]);
        $657242851ad0d223$var$EdgeMult(this$static.phase1Cubie[i], $657242851ad0d223$var$moveCube[this$static.move[i]], this$static.phase1Cubie[i + 1]);
    }
    this$static.valid1 = this$static.depth1;
    p2corn = $657242851ad0d223$var$$getCPermSym(this$static.phase1Cubie[this$static.depth1]);
    p2csym = p2corn & 15;
    p2corn >>= 4;
    p2edge = $657242851ad0d223$var$$getEPermSym(this$static.phase1Cubie[this$static.depth1]);
    p2esym = p2edge & 15;
    p2edge >>= 4;
    p2mid = $657242851ad0d223$var$getNPerm(this$static.phase1Cubie[this$static.depth1].ea, 12, true) % 24;
    edgei = $657242851ad0d223$var$getPermSymInv(p2edge, p2esym, false);
    corni = $657242851ad0d223$var$getPermSymInv(p2corn, p2csym, true);
    lastMove = this$static.depth1 == 0 ? -1 : this$static.move[this$static.depth1 - 1];
    lastPre = this$static.preMoveLen == 0 ? -1 : this$static.preMoves[this$static.preMoveLen - 1];
    ret = 0;
    p2switchMax = (this$static.preMoveLen == 0 ? 1 : 2) * (this$static.depth1 == 0 ? 1 : 2);
    for(p2switch = 0, p2switchMask = (1 << p2switchMax) - 1; p2switch < p2switchMax; p2switch++){
        if ((p2switchMask >> p2switch & 1) != 0) {
            p2switchMask &= ~(1 << p2switch);
            ret = $657242851ad0d223$var$$initPhase2(this$static, p2corn, p2csym, p2edge, p2esym, p2mid, edgei, corni);
            if (ret == 0 || ret > 2) break;
            else ret == 2 && (p2switchMask &= 4 << p2switch);
        }
        if (p2switchMask == 0) break;
        if ((p2switch & 1) == 0 && this$static.depth1 > 0) {
            m = ($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$std2ud)[~~(lastMove / 3) * 3 + 1];
            this$static.move[this$static.depth1 - 1] = $657242851ad0d223$var$ud2std[m] * 2 - this$static.move[this$static.depth1 - 1];
            p2mid = ($657242851ad0d223$var$$clinit_CoordCube(), $657242851ad0d223$var$MPermMove)[p2mid][m];
            p2corn = $657242851ad0d223$var$CPermMove[p2corn][($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$SymMoveUD)[p2csym][m]];
            p2csym = $657242851ad0d223$var$SymMult[p2corn & 15][p2csym];
            p2corn >>= 4;
            p2edge = $657242851ad0d223$var$EPermMove[p2edge][$657242851ad0d223$var$SymMoveUD[p2esym][m]];
            p2esym = $657242851ad0d223$var$SymMult[p2edge & 15][p2esym];
            p2edge >>= 4;
            corni = $657242851ad0d223$var$getPermSymInv(p2corn, p2csym, true);
            edgei = $657242851ad0d223$var$getPermSymInv(p2edge, p2esym, false);
        } else if (this$static.preMoveLen > 0) {
            m = ($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$std2ud)[~~(lastPre / 3) * 3 + 1];
            this$static.preMoves[this$static.preMoveLen - 1] = $657242851ad0d223$var$ud2std[m] * 2 - this$static.preMoves[this$static.preMoveLen - 1];
            p2mid = ($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$MPermInv)[($657242851ad0d223$var$$clinit_CoordCube(), $657242851ad0d223$var$MPermMove)[$657242851ad0d223$var$MPermInv[p2mid]][m]];
            p2corn = $657242851ad0d223$var$CPermMove[corni >> 4][$657242851ad0d223$var$SymMoveUD[corni & 15][m]];
            corni = p2corn & -16 | $657242851ad0d223$var$SymMult[p2corn & 15][corni & 15];
            p2corn = $657242851ad0d223$var$getPermSymInv(corni >> 4, corni & 15, true);
            p2csym = p2corn & 15;
            p2corn >>= 4;
            p2edge = $657242851ad0d223$var$EPermMove[edgei >> 4][$657242851ad0d223$var$SymMoveUD[edgei & 15][m]];
            edgei = p2edge & -16 | $657242851ad0d223$var$SymMult[p2edge & 15][edgei & 15];
            p2edge = $657242851ad0d223$var$getPermSymInv(edgei >> 4, edgei & 15, false);
            p2esym = p2edge & 15;
            p2edge >>= 4;
        }
    }
    this$static.depth1 > 0 && (this$static.move[this$static.depth1 - 1] = lastMove);
    this$static.preMoveLen > 0 && (this$static.preMoves[this$static.preMoveLen - 1] = lastPre);
    return ret == 0 ? 0 : 2;
}
function $657242851ad0d223$var$$initSearch(this$static) {
    var i;
    this$static.conjMask = 0;
    this$static.selfSym = $657242851ad0d223$var$$selfSymmetry(this$static.cc);
    this$static.conjMask |= $657242851ad0d223$var$neq($657242851ad0d223$var$and($657242851ad0d223$var$shr(this$static.selfSym, 16), {
        l: $657242851ad0d223$var$$intern_20,
        m: 0,
        h: 0
    }), {
        l: 0,
        m: 0,
        h: 0
    }) ? 18 : 0;
    this$static.conjMask |= $657242851ad0d223$var$neq($657242851ad0d223$var$and($657242851ad0d223$var$shr(this$static.selfSym, 32), {
        l: $657242851ad0d223$var$$intern_20,
        m: 0,
        h: 0
    }), {
        l: 0,
        m: 0,
        h: 0
    }) ? 36 : 0;
    this$static.conjMask |= $657242851ad0d223$var$neq($657242851ad0d223$var$and($657242851ad0d223$var$shr(this$static.selfSym, 48), {
        l: $657242851ad0d223$var$$intern_20,
        m: 0,
        h: 0
    }), {
        l: 0,
        m: 0,
        h: 0
    }) ? 56 : 0;
    this$static.selfSym = $657242851ad0d223$var$and(this$static.selfSym, {
        l: $657242851ad0d223$var$$intern_9,
        m: $657242851ad0d223$var$$intern_9,
        h: 15
    });
    this$static.maxPreMoves = this$static.conjMask > 7 ? 0 : 20;
    for(i = 0; i < 6; i++){
        $657242851ad0d223$var$$copy(this$static.urfCubieCube[i], this$static.cc);
        $657242851ad0d223$var$$setWithPrun(this$static.urfCoordCube[i], this$static.urfCubieCube[i], 20);
        $657242851ad0d223$var$$URFConjugate(this$static.cc);
        i % 3 == 2 && $657242851ad0d223$var$$invCubieCube(this$static.cc);
    }
}
function $657242851ad0d223$var$$phase1(this$static, node, ssym, maxl, lm) {
    var axis_0, m, power, prun, ret, skipMoves;
    if (node.prun == 0 && maxl < 5) {
        if (this$static.allowShorter || maxl == 0) {
            this$static.depth1 -= maxl;
            ret = $657242851ad0d223$var$$initPhase2Pre(this$static);
            this$static.depth1 += maxl;
            return ret;
        } else return 1;
    }
    skipMoves = $657242851ad0d223$var$getSkipMoves($657242851ad0d223$var$fromInt(ssym));
    for(axis_0 = 0; axis_0 < 18; axis_0 += 3){
        if (axis_0 == lm || axis_0 == lm - 9) continue;
        for(power = 0; power < 3; power++){
            m = axis_0 + power;
            if (this$static.isRec && m != this$static.move[this$static.depth1 - maxl] || skipMoves != 0 && (skipMoves & 1 << m) != 0) continue;
            prun = $657242851ad0d223$var$$doMovePrun(this$static.nodeUD[maxl], node, m);
            if (prun > maxl) break;
            else if (prun == maxl) continue;
            prun = $657242851ad0d223$var$$doMovePrunConj(this$static.nodeUD[maxl], node, m);
            if (prun > maxl) break;
            else if (prun == maxl) continue;
            this$static.move[this$static.depth1 - maxl] = m;
            this$static.valid1 = $657242851ad0d223$var$min_0(this$static.valid1, this$static.depth1 - maxl);
            ret = $657242851ad0d223$var$$phase1(this$static, this$static.nodeUD[maxl], ssym & $657242851ad0d223$var$toInt(($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$moveCubeSym)[m]), maxl - 1, axis_0);
            if (ret == 0) return 0;
            else if (ret >= 2) break;
        }
    }
    return 1;
}
function $657242851ad0d223$var$$phase1PreMoves(this$static, maxl, lm, cc, ssym) {
    var m, ret, skipMoves;
    this$static.preMoveLen = this$static.maxPreMoves - maxl;
    if (this$static.isRec ? this$static.depth1 == this$static.length1 - this$static.preMoveLen : this$static.preMoveLen == 0 || (225207 >> lm & 1) == 0) {
        this$static.depth1 = this$static.length1 - this$static.preMoveLen;
        this$static.phase1Cubie[0] = cc;
        this$static.allowShorter = this$static.depth1 == $657242851ad0d223$var$MIN_P1LENGTH_PRE && this$static.preMoveLen != 0;
        if ($657242851ad0d223$var$$setWithPrun(this$static.nodeUD[this$static.depth1 + 1], cc, this$static.depth1) && $657242851ad0d223$var$$phase1(this$static, this$static.nodeUD[this$static.depth1 + 1], ssym, this$static.depth1, -1) == 0) return 0;
    }
    if (maxl == 0 || this$static.preMoveLen + $657242851ad0d223$var$MIN_P1LENGTH_PRE >= this$static.length1) return 1;
    skipMoves = $657242851ad0d223$var$getSkipMoves($657242851ad0d223$var$fromInt(ssym));
    (maxl == 1 || this$static.preMoveLen + 1 + $657242851ad0d223$var$MIN_P1LENGTH_PRE >= this$static.length1) && (skipMoves |= 225207);
    lm = ~~(lm / 3) * 3;
    for(m = 0; m < 18; m++){
        if (m == lm || m == lm - 9 || m == lm + 9) {
            m += 2;
            continue;
        }
        if (this$static.isRec && m != this$static.preMoves[this$static.maxPreMoves - maxl] || (skipMoves & 1 << m) != 0) continue;
        $657242851ad0d223$var$CornMult(($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$moveCube)[m], cc, this$static.preMoveCubes[maxl]);
        $657242851ad0d223$var$EdgeMult($657242851ad0d223$var$moveCube[m], cc, this$static.preMoveCubes[maxl]);
        this$static.preMoves[this$static.maxPreMoves - maxl] = m;
        ret = $657242851ad0d223$var$$phase1PreMoves(this$static, maxl - 1, m, this$static.preMoveCubes[maxl], ssym & $657242851ad0d223$var$toInt($657242851ad0d223$var$moveCubeSym[m]));
        if (ret == 0) return 0;
    }
    return 1;
}
function $657242851ad0d223$var$$phase2(this$static, edge, esym, corn, csym, mid, maxl, depth, lm) {
    var corni, cornx, csymx, edgei, edgex, esymx, m, midx, moveMask, prun, ret;
    if (edge == 0 && corn == 0 && mid == 0) return maxl;
    moveMask = ($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$ckmv2bit)[lm];
    for(m = 0; m < 10; m++){
        if ((moveMask >> m & 1) != 0) {
            m += 66 >> m & 3;
            continue;
        }
        midx = ($657242851ad0d223$var$$clinit_CoordCube(), $657242851ad0d223$var$MPermMove)[mid][m];
        cornx = $657242851ad0d223$var$CPermMove[corn][($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$SymMoveUD)[csym][m]];
        csymx = $657242851ad0d223$var$SymMult[cornx & 15][csym];
        cornx >>= 4;
        edgex = $657242851ad0d223$var$EPermMove[edge][$657242851ad0d223$var$SymMoveUD[esym][m]];
        esymx = $657242851ad0d223$var$SymMult[edgex & 15][esym];
        edgex >>= 4;
        edgei = $657242851ad0d223$var$getPermSymInv(edgex, esymx, false);
        corni = $657242851ad0d223$var$getPermSymInv(cornx, csymx, true);
        prun = $657242851ad0d223$var$getPruning($657242851ad0d223$var$EPermCCombPPrun, (edgei >> 4) * 140 + $657242851ad0d223$var$CCombPConj[$657242851ad0d223$var$Perm2CombP[corni >> 4] & 255][$657242851ad0d223$var$SymMultInv[edgei & 15][corni & 15]]);
        if (prun > maxl + 1) return maxl - prun + 1;
        else if (prun >= maxl) {
            m += 66 >> m & 3 & maxl - prun;
            continue;
        }
        prun = $657242851ad0d223$var$max_0($657242851ad0d223$var$getPruning($657242851ad0d223$var$MCPermPrun, cornx * 24 + $657242851ad0d223$var$MPermConj[midx][csymx]), $657242851ad0d223$var$getPruning($657242851ad0d223$var$EPermCCombPPrun, edgex * 140 + $657242851ad0d223$var$CCombPConj[$657242851ad0d223$var$Perm2CombP[cornx] & 255][$657242851ad0d223$var$SymMultInv[esymx][csymx]]));
        if (prun >= maxl) {
            m += 66 >> m & 3 & maxl - prun;
            continue;
        }
        ret = $657242851ad0d223$var$$phase2(this$static, edgex, esymx, cornx, csymx, midx, maxl - 1, depth + 1, m);
        if (ret >= 0) {
            this$static.move[depth] = $657242851ad0d223$var$ud2std[m];
            return ret;
        }
        if (ret < -2) break;
        ret < -1 && (m += 66 >> m & 3);
    }
    return -1;
}
function $657242851ad0d223$var$$search(this$static) {
    for(this$static.length1 = this$static.isRec ? this$static.length1 : 0; this$static.length1 < this$static.solLen; this$static.length1++){
        this$static.maxDep2 = $657242851ad0d223$var$min_0($657242851ad0d223$var$MAX_DEPTH2, this$static.solLen - this$static.length1 - 1);
        for(this$static.urfIdx = this$static.isRec ? this$static.urfIdx : 0; this$static.urfIdx < 6; this$static.urfIdx++){
            if ((this$static.conjMask & 1 << this$static.urfIdx) != 0) continue;
            if ($657242851ad0d223$var$$phase1PreMoves(this$static, this$static.maxPreMoves, -30, this$static.urfCubieCube[this$static.urfIdx], $657242851ad0d223$var$toInt($657242851ad0d223$var$and(this$static.selfSym, {
                l: $657242851ad0d223$var$$intern_20,
                m: 0,
                h: 0
            }))) == 0) return !this$static.solution ? "Error 8" : $657242851ad0d223$var$$toString_2(this$static.solution);
        }
    }
    return !this$static.solution ? "Error 7" : $657242851ad0d223$var$$toString_2(this$static.solution);
}
function $657242851ad0d223$var$$solution(this$static, facelets) {
    var check;
    check = $657242851ad0d223$var$$verify_0(this$static, facelets);
    if (check != 0) return "Error " + (check < 0 ? -check : check);
    this$static.solLen = 22;
    this$static.probe = {
        l: 0,
        m: 0,
        h: 0
    };
    this$static.probeMax = {
        l: 3531008,
        m: 23,
        h: 0
    };
    this$static.probeMin = {
        l: 0,
        m: 0,
        h: 0
    };
    this$static.verbose = 0;
    this$static.solution = null;
    this$static.isRec = false;
    $657242851ad0d223$var$init_0(false);
    $657242851ad0d223$var$$initSearch(this$static);
    return $657242851ad0d223$var$$search(this$static);
}
function $657242851ad0d223$var$$verify_0(this$static, facelets) {
    var center, count, f, i;
    count = 0;
    f = $657242851ad0d223$var$initDim($657242851ad0d223$var$B_classLit, $657242851ad0d223$var$$intern_30, 0, 54, 7, 1);
    center = $657242851ad0d223$var$_String($657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$C_classLit, 1), $657242851ad0d223$var$$intern_26, 0, 7, [
        facelets.charCodeAt(4),
        facelets.charCodeAt(13),
        facelets.charCodeAt(22),
        facelets.charCodeAt(31),
        facelets.charCodeAt(40),
        facelets.charCodeAt(49)
    ]));
    for(i = 0; i < 54; i++){
        f[i] = $657242851ad0d223$var$$indexOf_0(center, $657242851ad0d223$var$fromCodePoint(facelets.charCodeAt(i))) << 24 >> 24;
        if (f[i] == -1) return -1;
        count += 1 << (f[i] << 2);
    }
    if (count != 10066329) return -1;
    $657242851ad0d223$var$toCubieCube(f, this$static.cc);
    return $657242851ad0d223$var$$verify(this$static.cc);
}
function $657242851ad0d223$var$Search() {
    var i, i0, i1;
    this.move = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 31, 7, 1);
    this.nodeUD = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lorg_cubing_min2phase_client_CoordCube_2_classLit, $657242851ad0d223$var$$intern_3, 31, 21, 0, 1);
    this.nodeRL = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lorg_cubing_min2phase_client_CoordCube_2_classLit, $657242851ad0d223$var$$intern_3, 31, 21, 0, 1);
    this.nodeFB = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lorg_cubing_min2phase_client_CoordCube_2_classLit, $657242851ad0d223$var$$intern_3, 31, 21, 0, 1);
    this.cc = new $657242851ad0d223$var$CubieCube();
    this.urfCubieCube = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lorg_cubing_min2phase_client_CubieCube_2_classLit, $657242851ad0d223$var$$intern_3, 7, 6, 0, 1);
    this.urfCoordCube = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lorg_cubing_min2phase_client_CoordCube_2_classLit, $657242851ad0d223$var$$intern_3, 31, 6, 0, 1);
    this.phase1Cubie = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lorg_cubing_min2phase_client_CubieCube_2_classLit, $657242851ad0d223$var$$intern_3, 7, 21, 0, 1);
    this.preMoveCubes = $657242851ad0d223$var$initDim($657242851ad0d223$var$Lorg_cubing_min2phase_client_CubieCube_2_classLit, $657242851ad0d223$var$$intern_3, 7, 21, 0, 1);
    this.preMoves = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 20, 7, 1);
    for(i0 = 0; i0 < 21; i0++){
        this.nodeUD[i0] = new $657242851ad0d223$var$CoordCube();
        this.nodeRL[i0] = new $657242851ad0d223$var$CoordCube();
        this.nodeFB[i0] = new $657242851ad0d223$var$CoordCube();
        this.phase1Cubie[i0] = new $657242851ad0d223$var$CubieCube();
    }
    for(i1 = 0; i1 < 6; i1++){
        this.urfCubieCube[i1] = new $657242851ad0d223$var$CubieCube();
        this.urfCoordCube[i1] = new $657242851ad0d223$var$CoordCube();
    }
    for(i = 0; i < 20; i++)this.preMoveCubes[i + 1] = new $657242851ad0d223$var$CubieCube();
}
$657242851ad0d223$var$defineClass(72, 1, {}, $657242851ad0d223$var$Search);
$657242851ad0d223$var$_.allowShorter = false;
$657242851ad0d223$var$_.conjMask = 0;
$657242851ad0d223$var$_.depth1 = 0;
$657242851ad0d223$var$_.isRec = false;
$657242851ad0d223$var$_.length1 = 0;
$657242851ad0d223$var$_.maxDep2 = 0;
$657242851ad0d223$var$_.maxPreMoves = 0;
$657242851ad0d223$var$_.preMoveLen = 0;
$657242851ad0d223$var$_.probe = {
    l: 0,
    m: 0,
    h: 0
};
$657242851ad0d223$var$_.probeMax = {
    l: 0,
    m: 0,
    h: 0
};
$657242851ad0d223$var$_.probeMin = {
    l: 0,
    m: 0,
    h: 0
};
$657242851ad0d223$var$_.selfSym = {
    l: 0,
    m: 0,
    h: 0
};
$657242851ad0d223$var$_.solLen = 0;
$657242851ad0d223$var$_.urfIdx = 0;
$657242851ad0d223$var$_.valid1 = 0;
$657242851ad0d223$var$_.verbose = 0;
var $657242851ad0d223$var$MAX_DEPTH2 = 12;
var $657242851ad0d223$var$MIN_P1LENGTH_PRE = 7;
var $657242851ad0d223$var$$clinit_Util_ran = false;
function $657242851ad0d223$var$$clinit_Util() {
    if ($657242851ad0d223$var$$clinit_Util_ran) return;
    $657242851ad0d223$var$$clinit_Util_ran = true;
    var i, i0, i1, ix, j, jx;
    $657242851ad0d223$var$cornerFacelet = $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 2), $657242851ad0d223$var$$intern_3, 10, 0, [
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            8,
            9,
            20
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            6,
            18,
            38
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            0,
            36,
            47
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            2,
            45,
            11
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            29,
            26,
            15
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            27,
            44,
            24
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            33,
            53,
            42
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            35,
            17,
            51
        ])
    ]);
    $657242851ad0d223$var$edgeFacelet = $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 2), $657242851ad0d223$var$$intern_3, 10, 0, [
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            5,
            10
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            7,
            19
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            3,
            37
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            1,
            46
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            32,
            16
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            28,
            25
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            30,
            43
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            34,
            52
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            23,
            12
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            21,
            41
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            50,
            39
        ]),
        $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$B_classLit, 1), $657242851ad0d223$var$$intern_30, 0, 7, [
            48,
            14
        ])
    ]);
    $657242851ad0d223$var$Cnk = $657242851ad0d223$var$initDims($657242851ad0d223$var$I_classLit, [
        $657242851ad0d223$var$$intern_3,
        $657242851ad0d223$var$$intern_27
    ], [
        17,
        0
    ], 7, [
        13,
        13
    ], 2);
    $657242851ad0d223$var$move2str = $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$Ljava_lang_String_2_classLit, 1), $657242851ad0d223$var$$intern_3, 2, 4, [
        "U ",
        "U2",
        "U'",
        "R ",
        "R2",
        "R'",
        "F ",
        "F2",
        "F'",
        "D ",
        "D2",
        "D'",
        "L ",
        "L2",
        "L'",
        "B ",
        "B2",
        "B'"
    ]);
    $657242851ad0d223$var$ud2std = $657242851ad0d223$var$initValues($657242851ad0d223$var$getClassLiteralForArray($657242851ad0d223$var$I_classLit, 1), $657242851ad0d223$var$$intern_27, 0, 7, [
        0,
        1,
        2,
        4,
        7,
        9,
        10,
        11,
        13,
        16,
        3,
        5,
        6,
        8,
        12,
        14,
        15,
        17
    ]);
    $657242851ad0d223$var$std2ud = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 18, 7, 1);
    $657242851ad0d223$var$ckmv2bit = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 11, 7, 1);
    for(i0 = 0; i0 < 18; i0++)$657242851ad0d223$var$std2ud[$657242851ad0d223$var$ud2std[i0]] = i0;
    for(i1 = 0; i1 < 10; i1++){
        ix = ~~($657242851ad0d223$var$ud2std[i1] / 3);
        $657242851ad0d223$var$ckmv2bit[i1] = 0;
        for(j = 0; j < 10; j++){
            jx = ~~($657242851ad0d223$var$ud2std[j] / 3);
            $657242851ad0d223$var$ckmv2bit[i1] |= (ix == jx || ix % 3 == jx % 3 && ix >= jx ? 1 : 0) << j;
        }
    }
    $657242851ad0d223$var$ckmv2bit[10] = 0;
    for(i = 0; i < 13; i++){
        $657242851ad0d223$var$Cnk[i][0] = $657242851ad0d223$var$Cnk[i][i] = 1;
        for(j = 1; j < i; j++)$657242851ad0d223$var$Cnk[i][j] = $657242851ad0d223$var$Cnk[i - 1][j - 1] + $657242851ad0d223$var$Cnk[i - 1][j];
    }
}
function $657242851ad0d223$var$getComb(arr, mask, isEdge) {
    $657242851ad0d223$var$$clinit_Util();
    var end, i, idxC, perm, r;
    end = arr.length - 1;
    idxC = 0;
    r = 4;
    for(i = end; i >= 0; i--){
        perm = $657242851ad0d223$var$getVal(arr[i], isEdge);
        (perm & 12) == mask && (idxC += $657242851ad0d223$var$Cnk[i][r--]);
    }
    return idxC;
}
function $657242851ad0d223$var$getNParity(idx, n) {
    $657242851ad0d223$var$$clinit_Util();
    var i, p;
    p = 0;
    for(i = n - 2; i >= 0; i--){
        p ^= idx % (n - i);
        idx = ~~(idx / (n - i));
    }
    return p & 1;
}
function $657242851ad0d223$var$getNPerm(arr, n, isEdge) {
    $657242851ad0d223$var$$clinit_Util();
    var i, idx, v, val;
    idx = 0;
    val = {
        l: 1323536,
        m: 2777561,
        h: 1043915
    };
    for(i = 0; i < n - 1; i++){
        v = $657242851ad0d223$var$getVal(arr[i], isEdge) << 2;
        idx = (n - i) * idx + $657242851ad0d223$var$toInt($657242851ad0d223$var$and($657242851ad0d223$var$shr(val, v), {
            l: 15,
            m: 0,
            h: 0
        }));
        val = $657242851ad0d223$var$sub_0(val, $657242851ad0d223$var$shl({
            l: 1118480,
            m: 279620,
            h: 69905
        }, v));
    }
    return idx;
}
function $657242851ad0d223$var$getVal(val0, isEdge) {
    return isEdge ? val0 >> 1 : val0 & 7;
}
function $657242851ad0d223$var$setComb(arr, idxC, mask, isEdge) {
    $657242851ad0d223$var$$clinit_Util();
    var end, fill, i, r;
    end = arr.length - 1;
    r = 4;
    fill = end;
    for(i = end; i >= 0; i--)if (idxC >= $657242851ad0d223$var$Cnk[i][r]) {
        idxC -= $657242851ad0d223$var$Cnk[i][r--];
        arr[i] = $657242851ad0d223$var$setVal(arr[i], r | mask, isEdge);
    } else {
        (fill & 12) == mask && (fill -= 4);
        arr[i] = $657242851ad0d223$var$setVal(arr[i], fill--, isEdge);
    }
}
function $657242851ad0d223$var$setNPerm(arr, idx, n, isEdge) {
    $657242851ad0d223$var$$clinit_Util();
    var extract, i, m, p, v, val;
    val = {
        l: 1323536,
        m: 2777561,
        h: 1043915
    };
    extract = {
        l: 0,
        m: 0,
        h: 0
    };
    for(p = 2; p <= n; p++){
        extract = $657242851ad0d223$var$or($657242851ad0d223$var$shl(extract, 4), $657242851ad0d223$var$fromInt(idx % p));
        idx = ~~(idx / p);
    }
    for(i = 0; i < n - 1; i++){
        v = ($657242851ad0d223$var$toInt(extract) & 15) << 2;
        extract = $657242851ad0d223$var$shr(extract, 4);
        arr[i] = $657242851ad0d223$var$setVal(arr[i], $657242851ad0d223$var$toInt($657242851ad0d223$var$and($657242851ad0d223$var$shr(val, v), {
            l: 15,
            m: 0,
            h: 0
        })), isEdge);
        m = $657242851ad0d223$var$sub_0($657242851ad0d223$var$shl({
            l: 1,
            m: 0,
            h: 0
        }, v), {
            l: 1,
            m: 0,
            h: 0
        });
        val = $657242851ad0d223$var$or($657242851ad0d223$var$and(val, m), $657242851ad0d223$var$and($657242851ad0d223$var$shr(val, 4), {
            l: ~m.l & $657242851ad0d223$var$$intern_9,
            m: ~m.m & $657242851ad0d223$var$$intern_9,
            h: ~m.h & $657242851ad0d223$var$$intern_10
        }));
    }
    arr[n - 1] = $657242851ad0d223$var$setVal(arr[n - 1], $657242851ad0d223$var$toInt($657242851ad0d223$var$and(val, {
        l: 15,
        m: 0,
        h: 0
    })), isEdge);
}
function $657242851ad0d223$var$setVal(val0, val, isEdge) {
    return (isEdge ? val << 1 | val0 & 1 : val | val0 & -8) << 24 >> 24;
}
function $657242851ad0d223$var$toCubieCube(f, ccRet) {
    $657242851ad0d223$var$$clinit_Util();
    var col1, col2, i, i0, i1, i2, j, ori;
    for(i0 = 0; i0 < 8; i0++)ccRet.ca[i0] = 0;
    for(i1 = 0; i1 < 12; i1++)ccRet.ea[i1] = 0;
    for(i2 = 0; i2 < 8; i2++){
        for(ori = 0; ori < 3; ori++){
            if (f[$657242851ad0d223$var$cornerFacelet[i2][ori]] == 0 || f[$657242851ad0d223$var$cornerFacelet[i2][ori]] == 3) break;
        }
        col1 = f[$657242851ad0d223$var$cornerFacelet[i2][(ori + 1) % 3]];
        col2 = f[$657242851ad0d223$var$cornerFacelet[i2][(ori + 2) % 3]];
        for(j = 0; j < 8; j++)if (col1 == ~~($657242851ad0d223$var$cornerFacelet[j][1] / 9) && col2 == ~~($657242851ad0d223$var$cornerFacelet[j][2] / 9)) {
            ccRet.ca[i2] = $657242851ad0d223$var$narrow_byte(ori % 3 << 3 | j);
            break;
        }
    }
    for(i = 0; i < 12; i++)for(j = 0; j < 12; j++){
        if (f[$657242851ad0d223$var$edgeFacelet[i][0]] == ~~($657242851ad0d223$var$edgeFacelet[j][0] / 9) && f[$657242851ad0d223$var$edgeFacelet[i][1]] == ~~($657242851ad0d223$var$edgeFacelet[j][1] / 9)) {
            ccRet.ea[i] = $657242851ad0d223$var$narrow_byte(j << 1);
            break;
        }
        if (f[$657242851ad0d223$var$edgeFacelet[i][0]] == ~~($657242851ad0d223$var$edgeFacelet[j][1] / 9) && f[$657242851ad0d223$var$edgeFacelet[i][1]] == ~~($657242851ad0d223$var$edgeFacelet[j][0] / 9)) {
            ccRet.ea[i] = $657242851ad0d223$var$narrow_byte(j << 1 | 1);
            break;
        }
    }
}
var $657242851ad0d223$var$Cnk;
var $657242851ad0d223$var$ckmv2bit;
var $657242851ad0d223$var$cornerFacelet;
var $657242851ad0d223$var$edgeFacelet;
var $657242851ad0d223$var$move2str;
var $657242851ad0d223$var$std2ud;
var $657242851ad0d223$var$ud2std;
function $657242851ad0d223$var$$appendSolMove(this$static, curMove) {
    var axisCur, axisLast, pow_0;
    if (this$static.length_0 == 0) {
        this$static.moves[this$static.length_0++] = curMove;
        return;
    }
    axisCur = ~~(curMove / 3);
    axisLast = ~~(this$static.moves[this$static.length_0 - 1] / 3);
    if (axisCur == axisLast) {
        pow_0 = (curMove % 3 + this$static.moves[this$static.length_0 - 1] % 3 + 1) % 4;
        pow_0 == 3 ? --this$static.length_0 : this$static.moves[this$static.length_0 - 1] = axisCur * 3 + pow_0;
        return;
    }
    if (this$static.length_0 > 1 && axisCur % 3 == axisLast % 3 && axisCur == ~~(this$static.moves[this$static.length_0 - 2] / 3)) {
        pow_0 = (curMove % 3 + this$static.moves[this$static.length_0 - 2] % 3 + 1) % 4;
        if (pow_0 == 3) {
            this$static.moves[this$static.length_0 - 2] = this$static.moves[this$static.length_0 - 1];
            --this$static.length_0;
        } else this$static.moves[this$static.length_0 - 2] = axisCur * 3 + pow_0;
        return;
    }
    this$static.moves[this$static.length_0++] = curMove;
}
function $657242851ad0d223$var$$setArgs(this$static, verbose, urfIdx, depth1) {
    this$static.verbose = verbose;
    this$static.urfIdx = urfIdx;
    this$static.depth1 = depth1;
}
function $657242851ad0d223$var$$toString_2(this$static) {
    var s, sb, urf;
    sb = new $657242851ad0d223$var$StringBuffer();
    urf = (this$static.verbose & 2) != 0 ? (this$static.urfIdx + 3) % 6 : this$static.urfIdx;
    if (urf < 3) for(s = 0; s < this$static.length_0; s++){
        (this$static.verbose & 1) != 0 && s == this$static.depth1 && (sb.string += ".  ", sb);
        $657242851ad0d223$var$$append($657242851ad0d223$var$$append_1(sb, ($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$move2str)[($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$urfMove)[urf][this$static.moves[s]]]));
    }
    else for(s = this$static.length_0 - 1; s >= 0; s--){
        $657242851ad0d223$var$$append($657242851ad0d223$var$$append_1(sb, ($657242851ad0d223$var$$clinit_Util(), $657242851ad0d223$var$move2str)[($657242851ad0d223$var$$clinit_CubieCube(), $657242851ad0d223$var$urfMove)[urf][this$static.moves[s]]]));
        (this$static.verbose & 1) != 0 && s == this$static.depth1 && (sb.string += ".  ", sb);
    }
    return sb.string;
}
function $657242851ad0d223$var$Util$Solution() {
    this.moves = $657242851ad0d223$var$initDim($657242851ad0d223$var$I_classLit, $657242851ad0d223$var$$intern_27, 0, 31, 7, 1);
}
$657242851ad0d223$var$defineClass(150, 1, {}, $657242851ad0d223$var$Util$Solution);
$657242851ad0d223$var$_.depth1 = 0;
$657242851ad0d223$var$_.length_0 = 0;
$657242851ad0d223$var$_.urfIdx = 0;
$657242851ad0d223$var$_.verbose = 0;
var $657242851ad0d223$var$I_classLit = $657242851ad0d223$var$createForPrimitive("int", "I");
$657242851ad0d223$var$createForClass("com.google.gwt.lang", "CollapsedPropertyHolder", 252);
$657242851ad0d223$var$createForClass("com.google.gwt.lang", "JavaClassHierarchySetupUtil", 254);
var $657242851ad0d223$var$Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = $657242851ad0d223$var$createForClass("com.google.gwt.lang", "LongLibBase/LongEmul", null);
$657242851ad0d223$var$createForClass("com.google.gwt.lang", "ModuleUtils", 257);
var $657242851ad0d223$var$B_classLit = $657242851ad0d223$var$createForPrimitive("byte", "B");
var $657242851ad0d223$var$J_classLit = $657242851ad0d223$var$createForPrimitive("long", "J");
var $657242851ad0d223$var$C_classLit = $657242851ad0d223$var$createForPrimitive("char", "C");
$657242851ad0d223$var$createForClass("com.google.gwt.user.client.rpc", "XsrfToken", null), $657242851ad0d223$var$createForInterface("java.util", "Map/Entry");
var $657242851ad0d223$export$2a47f398eeff8b01 = function() {
    $657242851ad0d223$var$init_0(false);
};
var $657242851ad0d223$export$850b598a7dd80348 = function(s) {
    return $657242851ad0d223$var$$solution(new $657242851ad0d223$var$Search(), s);
};

});


//# sourceMappingURL=3x3x3-min2phase-UBW46KDU.c0822d48.js.map
