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
parcelRequire.register("7A8t1", function(module, exports) {

$parcel$export(module.exports, "workerSource", () => $58527699ab4a978a$export$cb2a77c1b34bfcd4);
parcelRequire("hJBlP");
// src/cubing/search/worker-inside-generated-string.js
var $58527699ab4a978a$export$cb2a77c1b34bfcd4 = `var Mp=Object.defineProperty;var U=(e,t)=>()=>(e&&(t=e(e=0)),t);var pe=(e,t)=>{for(var r in t)Mp(e,r,{get:t[r],enumerable:!0})};var d0=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var d=(e,t,r)=>(d0(e,t,"read from private field"),r?r.call(e):t.get(e)),re=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},j=(e,t,r,n)=>(d0(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),h0=(e,t,r,n)=>({set _(l){j(e,t,l,r)},get _(){return d(e,t,n)}}),Js=(e,t,r)=>(d0(e,t,"access private method"),r);var Xp,Ao,Oe,jt=U(()=>{Xp=!1,Ao=class{is(t){return this instanceof t}as(t){return this instanceof t?this:null}},Oe=class extends Ao{constructor(){super();Xp&&Object.defineProperty(this,"_debugStr",{get:()=>this.toString()})}get log(){return console.log.bind(console,this,this.toString())}}});function o2(e,t=!0){if(!t)return e;switch(e){case 1:return-1;case-1:return 1}}function y0(e,t){return t===-1?Array.from(e).reverse():e}function i2(e){return Array.from(e).reverse()}var Dt=U(()=>{});var dn,U0=U(()=>{dn="2^31 - 1"});var Gr,pt,b0=U(()=>{qt();pt=class{constructor(){re(this,Gr,[])}push(t){d(this,Gr).push(t)}experimentalPushAlg(t){for(let r of t.units())this.push(r)}experimentalNumUnits(){return d(this,Gr).length}toAlg(){return new _(d(this,Gr))}reset(){j(this,Gr,[])}};Gr=new WeakMap});var Tr,Or,yo,Ie,Fl=U(()=>{qt();jt();Dt();yo=class extends Oe{constructor(t,r){super();re(this,Tr,void 0);re(this,Or,void 0);j(this,Tr,sr(t)),j(this,Or,sr(r))}get A(){return d(this,Tr)}get B(){return d(this,Or)}isIdentical(t){let r=t.as(yo);return!!(r?.A.isIdentical(this.A)&&r?.B.isIdentical(this.B))}invert(){return new yo(d(this,Or),d(this,Tr))}*experimentalExpand(t=1,r){r??(r=1/0),r===0?yield t===1?this:this.invert():t===1?(yield*this.A.experimentalExpand(1,r-1),yield*this.B.experimentalExpand(1,r-1),yield*this.A.experimentalExpand(-1,r-1),yield*this.B.experimentalExpand(-1,r-1)):(yield*this.B.experimentalExpand(1,r-1),yield*this.A.experimentalExpand(1,r-1),yield*this.B.experimentalExpand(-1,r-1),yield*this.A.experimentalExpand(-1,r-1))}toString(){return\`[\${d(this,Tr).toString()}, \${d(this,Or).toString()}]\`}},Ie=yo;Tr=new WeakMap,Or=new WeakMap});var hn,Fn,Uo,We,Dl=U(()=>{qt();jt();Dt();Uo=class extends Oe{constructor(t,r){super();re(this,hn,void 0);re(this,Fn,void 0);j(this,hn,sr(t)),j(this,Fn,sr(r))}get A(){return d(this,hn)}get B(){return d(this,Fn)}isIdentical(t){let r=t.as(Uo);return!!(r?.A.isIdentical(this.A)&&r?.B.isIdentical(this.B))}invert(){return new Uo(d(this,hn),d(this,Fn).invert())}*experimentalExpand(t,r){r??(r=1/0),r===0?yield t===1?this:this.invert():(yield*this.A.experimentalExpand(1,r-1),yield*this.B.experimentalExpand(t,r-1),yield*this.A.experimentalExpand(-1,r-1))}toString(){return\`[\${this.A}: \${this.B}]\`}},We=Uo;hn=new WeakMap,Fn=new WeakMap});var ur,S0,At,Al=U(()=>{jt();Dt();S0=class extends Oe{constructor(t){super();re(this,ur,void 0);if(t.includes(\`
\`)||t.includes("\\r"))throw new Error("LineComment cannot contain newline");j(this,ur,t)}get text(){return d(this,ur)}isIdentical(t){let r=t;return t.is(S0)&&d(this,ur)===d(r,ur)}invert(){return this}*experimentalExpand(t=1,r=1/0){yield this}toString(){return\`//\${d(this,ur)}\`}},At=S0;ur=new WeakMap});var Ze,yl=U(()=>{jt();Dt();Ze=class extends Oe{toString(){return\`
\`}isIdentical(t){return t.is(Ze)}invert(){return this}*experimentalExpand(t=1,r=1/0){yield this}}});var Xe,Ul=U(()=>{jt();Dt();Xe=class extends Oe{toString(){return"."}isIdentical(t){return t.is(Xe)}invert(){return this}*experimentalExpand(t=1,r=1/0){yield this}}});function bo(e,t){return e?parseInt(e):t}function w0(e){return new So().parseAlg(e)}function s2(e){return new So().parseMove(e)}function f2(e){return new So().parseQuantumMove(e)}function $e(e,t,r){let n=e;return n.startCharIndex=t,n.endCharIndex=r,n}function u2(e,t){return"startCharIndex"in e&&(t.startCharIndex=e.startCharIndex),"endCharIndex"in e&&(t.endCharIndex=e.endCharIndex),t}var a2,$p,em,tm,rm,nm,lt,T,So,x0=U(()=>{qt();b0();Fl();Dl();wo();Al();Vt();yl();Ul();a2=/^(\\d+)?('?)/,$p=/^[_\\dA-Za-z]/,em=/^((([1-9]\\d*)-)?([1-9]\\d*))?([_A-Za-z]+)?/,tm=/^[^\\n]*/,rm=/^(-?\\d+), ?/,nm=/^(-?\\d+)\\)/;So=class{constructor(){re(this,lt,"");re(this,T,0)}parseAlg(t){j(this,lt,t),j(this,T,0);let r=this.parseAlgWithStopping([]);return this.mustBeAtEndOfInput(),r}parseMove(t){j(this,lt,t),j(this,T,0);let r=this.parseMoveImpl();return this.mustBeAtEndOfInput(),r}parseQuantumMove(t){j(this,lt,t),j(this,T,0);let r=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),r}mustBeAtEndOfInput(){if(d(this,T)!==d(this,lt).length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(t){let r=d(this,T),n=d(this,T),l=new pt,o=!1,i=a=>{if(o)throw new Error(\`Unexpected character at index \${a}. Are you missing a space?\`)};e:for(;d(this,T)<d(this,lt).length;){let a=d(this,T);if(t.includes(d(this,lt)[d(this,T)]))return $e(l.toAlg(),r,n);if(this.tryConsumeNext(" ")){o=!1,l.experimentalNumUnits()===0&&(r=d(this,T));continue e}else if($p.test(d(this,lt)[d(this,T)])){i(a);let s=this.parseMoveImpl();l.push(s),o=!0,n=d(this,T);continue e}else if(this.tryConsumeNext("(")){i(a);let s=this.tryRegex(rm);if(s){let f=s[1],g=d(this,T),c=this.parseRegex(nm),u=$e(new B(new C("U_SQ_"),parseInt(f)),a+1,a+1+f.length),p=$e(new B(new C("D_SQ_"),parseInt(c[1])),g,d(this,T)-1),m=$e(new _([u,p]),a+1,d(this,T)-1);l.push($e(new gt(m),a,d(this,T))),o=!0,n=d(this,T);continue e}else{let f=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");let g=this.parseAmount();l.push($e(new gt(f,g),a,d(this,T))),o=!0,n=d(this,T);continue e}}else if(this.tryConsumeNext("[")){i(a);let s=this.parseAlgWithStopping([",",":"]),f=this.popNext(),g=this.parseAlgWithStopping(["]"]);switch(this.mustConsumeNext("]"),f){case":":l.push($e(new We(s,g),a,d(this,T))),o=!0,n=d(this,T);continue e;case",":l.push($e(new Ie(s,g),a,d(this,T))),o=!0,n=d(this,T);continue e;default:throw"unexpected parsing error"}}else if(this.tryConsumeNext(\`
\`)){l.push($e(new Ze,a,d(this,T))),o=!1,n=d(this,T);continue e}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){i(a);let[s]=this.parseRegex(tm);l.push($e(new At(s),a,d(this,T))),o=!1,n=d(this,T);continue e}else{l.push($e(new B("_SLASH_"),a,d(this,T))),o=!0,n=d(this,T);continue e}else if(this.tryConsumeNext(".")){i(a),l.push($e(new Xe,a,d(this,T))),o=!0,n=d(this,T);continue e}else throw new Error(\`Unexpected character: \${this.popNext()}\`)}if(d(this,T)!==d(this,lt).length)throw new Error("did not finish parsing?");if(t.length>0)throw new Error("expected stopping");return $e(l.toAlg(),r,n)}parseQuantumMoveImpl(){let[,,,t,r,n]=this.parseRegex(em);return new C(n,bo(r,void 0),bo(t,void 0))}parseMoveImpl(){let t=d(this,T);if(this.tryConsumeNext("/"))return $e(new B("_SLASH_"),t,d(this,T));let r=this.parseQuantumMoveImpl(),[n,l]=this.parseAmountAndTrackEmptyAbsAmount(),o=this.parseMoveSuffix();if(o){if(n<0)throw new Error("uh-oh");if((o==="++"||o==="--")&&n!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((o==="++"||o==="--")&&!l)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((o==="+"||o==="-")&&l)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");o.startsWith("+")&&(r=r.modified({family:\`\${r.family}_\${o==="+"?"PLUS":"PLUSPLUS"}_\`})),o.startsWith("-")&&(r=r.modified({family:\`\${r.family}_\${o==="-"?"PLUS":"PLUSPLUS"}_\`}),n*=-1)}return $e(new B(r,n),t,d(this,T))}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){let t=d(this,T),[,r,n]=this.parseRegex(a2);if(r?.startsWith("0")&&r!=="0")throw new Error(\`Error at char index \${t}: An amount can only start with 0 if it's exactly the digit 0.\`);return[bo(r,1)*(n==="'"?-1:1),!r]}parseAmount(){let t=d(this,T),[,r,n]=this.parseRegex(a2);if(r?.startsWith("0")&&r!=="0")throw new Error(\`Error at char index \${t}: An amount number can only start with 0 if it's exactly the digit 0.\`);return bo(r,1)*(n==="'"?-1:1)}parseRegex(t){let r=t.exec(this.remaining());if(r===null)throw new Error("internal parsing error");return j(this,T,d(this,T)+r[0].length),r}tryRegex(t){let r=t.exec(this.remaining());return r===null?null:(j(this,T,d(this,T)+r[0].length),r)}remaining(){return d(this,lt).slice(d(this,T))}popNext(){let t=d(this,lt)[d(this,T)];return h0(this,T)._++,t}tryConsumeNext(t){return d(this,lt)[d(this,T)]===t?(h0(this,T)._++,!0):!1}mustConsumeNext(t){let r=this.popNext();if(r!==t)throw new Error(\`expected \\\`\${t}\\\` while parsing, encountered \${r}\`);return r}};lt=new WeakMap,T=new WeakMap});function xo(e){g2.has(e)||(console.warn(e),g2.add(e))}var g2,v0=U(()=>{g2=new Set});var Dn,E0=U(()=>{Dt();U0();Dn=class{constructor(t,r=1){if(this.quantum=t,this.amount=r,!Number.isInteger(this.amount)||this.amount<-2147483648||this.amount>2147483647)throw new Error(\`Unit amount absolute value must be a non-negative integer from \${dn} to \${dn}.\`)}suffix(){let t="",r=Math.abs(this.amount);return r!==1&&(t+=r),this.amount<0&&(t+="'"),t}isIdentical(t){return this.quantum.isIdentical(t.quantum)&&this.amount===t.amount}*experimentalExpand(t,r){let n=Math.abs(this.amount),l=o2(t,this.amount<0);for(let o=0;o<n;o++)yield*this.quantum.experimentalExpand(l,r)}}});var Ht,Ke,Qe,Eo,C,Pe,An,B,Vt=U(()=>{jt();Dt();U0();x0();v0();E0();Eo=class extends Ao{constructor(t,r,n){super();re(this,Ht,void 0);re(this,Ke,void 0);re(this,Qe,void 0);if(j(this,Ht,t),j(this,Ke,r??null),j(this,Qe,n??null),Object.freeze(this),d(this,Ke)!==null&&(!Number.isInteger(d(this,Ke))||d(this,Ke)<1||d(this,Ke)>2147483647))throw new Error(\`QuantumMove inner layer must be a positive integer below \${dn}.\`);if(d(this,Qe)!==null&&(!Number.isInteger(d(this,Qe))||d(this,Qe)<1||d(this,Qe)>2147483647))throw new Error(\`QuantumMove outer layer must be a positive integer below \${dn}.\`);if(d(this,Qe)!==null&&d(this,Ke)!==null&&d(this,Ke)<=d(this,Qe))throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(d(this,Qe)!==null&&d(this,Ke)===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(t){return f2(t)}modified(t){return new Eo(t.family??d(this,Ht),t.innerLayer??d(this,Ke),t.outerLayer??d(this,Qe))}isIdentical(t){let r=t;return t.is(Eo)&&d(this,Ht)===d(r,Ht)&&d(this,Ke)===d(r,Ke)&&d(this,Qe)===d(r,Qe)}get family(){return d(this,Ht)}get outerLayer(){return d(this,Qe)}get innerLayer(){return d(this,Ke)}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a \`QuantumMove\` directly.")}toString(){let t=d(this,Ht);return d(this,Ke)!==null&&(t=String(d(this,Ke))+t,d(this,Qe)!==null&&(t=String(d(this,Qe))+"-"+t)),t}},C=Eo;Ht=new WeakMap,Ke=new WeakMap,Qe=new WeakMap;An=class extends Oe{constructor(...t){super();re(this,Pe,void 0);if(typeof t[0]=="string")if(t[1]??null){j(this,Pe,new Dn(C.fromString(t[0]),t[1]));return}else return An.fromString(t[0]);j(this,Pe,new Dn(t[0],t[1]))}isIdentical(t){let r=t.as(An);return!!r&&d(this,Pe).isIdentical(d(r,Pe))}invert(){return u2(this,new An(d(this,Pe).quantum,-this.amount))}*experimentalExpand(t=1){t===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return d(this,Pe).quantum}modified(t){return new An(d(this,Pe).quantum.modified(t),t.amount??this.amount)}static fromString(t){return s2(t)}get amount(){return d(this,Pe).amount}get type(){return xo("deprecated: type"),"blockMove"}get family(){return d(this,Pe).quantum.family??void 0}get outerLayer(){return d(this,Pe).quantum.outerLayer??void 0}get innerLayer(){return d(this,Pe).quantum.innerLayer??void 0}toString(){if(this.family==="_SLASH_")return"/";if(this.family.endsWith("_PLUS_"))return d(this,Pe).quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){let t=Math.abs(this.amount);return d(this,Pe).quantum.toString().slice(0,-10)+(t===1?"":t)+(this.amount<0?"--":"++")}return d(this,Pe).quantum.toString()+d(this,Pe).suffix()}},B=An;Pe=new WeakMap});var p2,c2,ot,_o,gt,wo=U(()=>{qt();jt();Dt();Vt();E0();p2=class{constructor(){this.quantumU_SQ_=null;this.quantumD_SQ_=null}format(t){let r=this.tuple(t);return r?\`(\${r.map(n=>n.amount).join(", ")})\`:null}tuple(t){this.quantumU_SQ_||(this.quantumU_SQ_=new C("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new C("D_SQ_"));let r=t.alg;if(r.experimentalNumUnits()===2){let[n,l]=r.units();if(n.as(B)?.quantum.isIdentical(this.quantumU_SQ_)&&l.as(B)?.quantum.isIdentical(this.quantumD_SQ_)){if(t.amount!==1)throw new Error("Square-1 tuples cannot have an amount other than 1.");return[n,l]}}return null}},c2=new p2,_o=class extends Oe{constructor(t,r){super();re(this,ot,void 0);let n=sr(t);j(this,ot,new Dn(n,r))}isIdentical(t){let r=t;return t.is(_o)&&d(this,ot).isIdentical(d(r,ot))}get alg(){return d(this,ot).quantum}get amount(){return d(this,ot).amount}get experimentalRepetitionSuffix(){return d(this,ot).suffix()}invert(){return new _o(d(this,ot).quantum,-d(this,ot).amount)}*experimentalExpand(t=1,r){r??(r=1/0),r===0?yield t===1?this:this.invert():yield*d(this,ot).experimentalExpand(t,r-1)}static fromString(){throw new Error("unimplemented")}toString(){return c2.format(this)??\`(\${d(this,ot).quantum.toString()})\${d(this,ot).suffix()}\`}experimentalAsSquare1Tuple(){return c2.tuple(this)}},gt=_o;ot=new WeakMap});var ko=U(()=>{wo();Al();Fl();Dl();Vt();yl();Ul()});function yt(e,t){return e instanceof t}function m2(e){return yt(e,gt)||yt(e,At)||yt(e,Ie)||yt(e,We)||yt(e,B)||yt(e,Ze)||yt(e,Xe)}var _0=U(()=>{ko()});function B2(e,t,r){if(t.is(gt))return e.traverseGrouping(t,r);if(t.is(B))return e.traverseMove(t,r);if(t.is(Ie))return e.traverseCommutator(t,r);if(t.is(We))return e.traverseConjugate(t,r);if(t.is(Xe))return e.traversePause(t,r);if(t.is(Ze))return e.traverseNewline(t,r);if(t.is(At))return e.traverseLineComment(t,r);throw new Error("unknown unit")}function R2(e){if(e.is(gt)||e.is(B)||e.is(Ie)||e.is(We)||e.is(Xe)||e.is(Ze)||e.is(At))return e;throw"internal error: expected unit"}var yn,Un,zo,om,z0,k0,L2,d2,C0=U(()=>{wo();Fl();Vt();yl();Ul();Dl();Al();yn=class{traverseUnit(t,r){return B2(this,t,r)}traverseIntoUnit(t,r){return R2(this.traverseUnit(t,r))}},Un=class extends yn{traverseUnit(t){return B2(this,t,void 0)}traverseIntoUnit(t){return R2(this.traverseUnit(t))}},z0=class extends yn{*traverseAlg(t,r){if(r.depth===0){yield*t.units();return}let n=[],l=null,o=r?.collapseMoves??!0;function i(f,g){var p;let c=Js(p=z0,zo,om).call(p,f,g,r);if(c===0)return!1;let u=new B(f.quantum,c);return n.push(u),l=u,!0}function a(f){o&&l?.is(B)&&f.is(B)&&l.quantum.isIdentical(f.quantum)?(n.pop(),i(l,f.amount)||(l=n.slice(-1)[0])):f.is(B)?i(f,0):(n.push(f),l=f)}let s={depth:r.depth?r.depth-1:null};for(let f of t.units())for(let g of this.traverseUnit(f,s))a(g);for(let f of n)yield f}*traverseGrouping(t,r){if(r.depth===0){yield t;return}let n={depth:r.depth?r.depth-1:null};yield new gt(this.traverseAlg(t.alg,n))}*traverseMove(t,r){yield t}*traverseCommutator(t,r){if(r.depth===0){yield t;return}let n={depth:r.depth?r.depth-1:null};yield new Ie(this.traverseAlg(t.A,n),this.traverseAlg(t.B,n))}*traverseConjugate(t,r){if(r.depth===0){yield t;return}let n={depth:r.depth?r.depth-1:null};yield new We(this.traverseAlg(t.A,n),this.traverseAlg(t.B,n))}*traversePause(t,r){yield t}*traverseNewline(t,r){yield t}*traverseLineComment(t,r){yield t}},k0=z0;zo=new WeakSet,om=function(t,r,n){let l=t.amount+r;if(n?.quantumMoveOrder){let o=n.quantumMoveOrder(t.quantum),i=Math.floor(o/2)+1-o;l=(l%o+o-i)%o+i}return l},re(k0,zo);L2=new k0,d2=L2.traverseAlg.bind(L2)});function h2(e){if(!e)return[];if(yt(e,_))return e.units();if(typeof e=="string")return w0(e).units();let t=e;if(typeof t[Symbol.iterator]=="function")return t;throw"Invalid unit"}function sr(e){return yt(e,_)?e:new _(e)}function im(e,t){return e.is(Ze)||t.is(Ze)?"":e.is(At)&&!t.is(Ze)?\`
\`:" "}var it,Ir,_,qt=U(()=>{jt();_0();Dt();x0();C0();Al();Vt();yl();v0();Ir=class extends Oe{constructor(t){super();re(this,it,void 0);j(this,it,Array.from(h2(t)));for(let r of d(this,it))if(!m2(r))throw new Error("An alg can only contain units.")}isIdentical(t){let r=t;if(!t.is(Ir))return!1;let n=Array.from(d(this,it)),l=Array.from(d(r,it));if(n.length!==l.length)return!1;for(let o=0;o<n.length;o++)if(!n[o].isIdentical(l[o]))return!1;return!0}invert(){return new Ir(i2(Array.from(d(this,it)).map(t=>t.invert())))}*experimentalExpand(t=1,r){r??(r=1/0);for(let n of y0(d(this,it),t))yield*n.experimentalExpand(t,r)}expand(t){return new Ir(this.experimentalExpand(1,t?.depth??1/0))}*experimentalLeafMoves(){for(let t of this.experimentalExpand())t.is(B)&&(yield t)}concat(t){return new Ir(Array.from(d(this,it)).concat(Array.from(h2(t))))}experimentalIsEmpty(){for(let t of d(this,it))return!1;return!0}static fromString(t){return w0(t)}*units(){for(let t of d(this,it))yield t}experimentalNumUnits(){return Array.from(d(this,it)).length}get type(){return xo("deprecated: type"),"sequence"}toString(){let t="",r=null;for(let n of d(this,it))r&&(t+=im(r,n)),t+=n.toString(),r=n;return t}simplify(t){return new Ir(d2(this,t??{}))}},_=Ir;it=new WeakMap});var am,F2=U(()=>{qt();ko();Fl();Dl();Vt();Ul();am={Sune:new _([new B("R",1),new B("U",1),new B("R",-1),new B("U",1),new B("R",1),new B("U",-2),new B("R",-1)]),AntiSune:new _([new B("R",1),new B("U",2),new B("R",-1),new B("U",-1),new B("R",1),new B("U",-1),new B("R",-1)]),SuneCommutator:new _([new Ie(new _([new B("R",1),new B("U",1),new B("R",-2)]),new _([new We(new _([new B("R",1)]),new _([new B("U",1)]))]))]),Niklas:new _([new B("R",1),new B("U",-1),new B("L",-1),new B("U",1),new B("R",-1),new B("U",-1),new B("L",1),new B("U",1)]),EPerm:new _([new B("x",-1),new Ie(new _([new We(new _([new B("R",1)]),new _([new B("U",-1)]))]),new _([new B("D",1)])),new Ie(new _([new We(new _([new B("R",1)]),new _([new B("U",1)]))]),new _([new B("D",1)])),new B("x",1)]),FURURFCompact:new _([new We(new _([new B("F",1)]),new _([new Ie(new _([new B("U",1)]),new _([new B("R",1)]))]))]),APermCompact:new _([new We(new _([new B("R",2)]),new _([new Ie(new _([new B("F",2)]),new _([new B("R",-1),new B("B",-1),new B("R",1)]))]))]),FURURFMoves:new _([new B("F",1),new B("U",1),new B("R",1),new B("U",-1),new B("R",-1),new B("F",-1)]),TPerm:new _([new B("R",1),new B("U",1),new B("R",-1),new B("U",-1),new B("R",-1),new B("F",1),new B("R",2),new B("U",-1),new B("R",-1),new B("U",-1),new B("R",1),new B("U",1),new B("R",-1),new B("F",-1)]),HeadlightSwaps:new _([new We(new _([new B("F",1)]),new _([new gt(new _([new Ie(new _([new B("R",1)]),new _([new B("U",1)]))]),3)]))]),TriplePause:new _([new Xe,new Xe,new Xe])}});var fA,D2=U(()=>{Vt();fA={73:new B("R"),75:new B("R'"),87:new B("B"),79:new B("B'"),83:new B("D"),76:new B("D'"),68:new B("L"),69:new B("L'"),74:new B("U"),70:new B("U'"),72:new B("F"),71:new B("F'"),78:new B("x'"),67:new B("l"),82:new B("l'"),85:new B("r"),77:new B("r'"),88:new B("d"),188:new B("d'"),84:new B("x"),89:new B("x"),66:new B("x'"),186:new B("y"),59:new B("y"),65:new B("y'"),80:new B("z"),81:new B("z'"),90:new B("M'"),190:new B("M'")}});var A2=U(()=>{});var y2=U(()=>{qt()});var Le=U(()=>{qt();b0();C0();F2();D2();ko();Vt();A2();y2();_0();Dt()});function Sl(e,t,r){let n={};for(let l in e.orbits){let o=e.orbits[l],i=t[l],a=r[l];if(bl(o.numOrientations,a))n[l]=i;else if(bl(o.numOrientations,i))n[l]=a;else{let s=new Array(o.numPieces);if(o.numOrientations===1){for(let f=0;f<o.numPieces;f++)s[f]=i.permutation[a.permutation[f]];n[l]={permutation:s,orientation:i.orientation}}else{let f=new Array(o.numPieces);for(let g=0;g<o.numPieces;g++)f[g]=(i.orientation[a.permutation[g]]+a.orientation[g])%o.numOrientations,s[g]=i.permutation[a.permutation[g]];n[l]={permutation:s,orientation:f}}}}return n}function P0(e,t,r){let n={};for(let l in e.orbits){let o=e.orbits[l],i=t[l],a=r[l];if(bl(o.numOrientations,a))n[l]=i;else{let s=new Array(o.numPieces);if(o.numOrientations===1){for(let f=0;f<o.numPieces;f++)s[f]=i.pieces[a.permutation[f]];n[l]={pieces:s,orientation:i.orientation}}else{let f=new Array(o.numPieces);for(let g=0;g<o.numPieces;g++)f[g]=(i.orientation[a.permutation[g]]+a.orientation[g])%o.numOrientations,s[g]=i.pieces[a.permutation[g]];n[l]={pieces:s,orientation:f}}}}return n}var Co=U(()=>{wl()});function sm(e){let t=U2.get(e);if(t)return t;let r=new Array(e),n=new Array(e);for(let o=0;o<e;o++)r[o]=o,n[o]=0;let l={permutation:r,orientation:n};return b2&&(Object.freeze(r),Object.freeze(n),Object.freeze(l)),U2.set(e,l),l}function S2(e){let t={};for(let[r,n]of Object.entries(e.orbits))t[r]=sm(n.numPieces);return b2&&Object.freeze(t),t}function w2(e,t){let r=t.quantum.toString(),n=e.definition.moves[r];if(!n){let i=e.definition.experimentalDerivedMoves?.[r];i&&(n=e.algToTransformation(i).transformationData)}if(n)return gr(e,n,t.amount);let l=e.definition.moves[t.toString()];if(l)return l;let o=e.definition.moves[t.invert().toString()];if(o)return gr(e,o,-1);throw new Error(\`Invalid move for KPuzzle (\${e.name()}): \${t}\`)}var b2,U2,M0=U(()=>{wl();b2=!1,U2=new Map});var Be,Po=U(()=>{Co();xl();Be=class{constructor(t,r){this.kpuzzle=t;this.stateData=r}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),stateData:this.stateData}}static fromTransformation(t){let r=P0(t.kpuzzle.definition,t.kpuzzle.definition.startStateData,t.transformationData);return new Be(t.kpuzzle,r)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(t.isIdentityTransformation())return new Be(this.kpuzzle,this.stateData);let r=P0(this.kpuzzle.definition,this.stateData,t.transformationData);return new Be(this.kpuzzle,r)}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}experimentalToTransformation(){if(!this.kpuzzle.canConvertStateToUniqueTransformation())return null;let t={};for(let[r,n]of Object.entries(this.stateData)){let l={permutation:n.pieces,orientation:n.orientation};t[r]=l}return new Ut(this.kpuzzle,t)}}});var Wr,cr,Ut,xl=U(()=>{wl();Co();M0();Po();cr=class{constructor(t,r){this.kpuzzle=t;this.transformationData=r;re(this,Wr,void 0)}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new cr(this.kpuzzle,N0(this.kpuzzle,this.transformationData))}isIdentityTransformation(){return d(this,Wr)??j(this,Wr,this.isIdentical(this.kpuzzle.identityTransformation()))}static experimentalConstructIdentity(t){let r=new cr(t,S2(t.definition));return j(r,Wr,!0),r}isIdentical(t){return x2(this.kpuzzle,this.transformationData,t.transformationData)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(this.kpuzzle!==t.kpuzzle)throw new Error(\`Tried to apply a transformation for a KPuzzle (\${t.kpuzzle.name()}) to a different KPuzzle (\${this.kpuzzle.name()}).\`);return d(this,Wr)?new cr(this.kpuzzle,t.transformationData):d(t,Wr)?new cr(this.kpuzzle,this.transformationData):new cr(this.kpuzzle,Sl(this.kpuzzle.definition,this.transformationData,t.transformationData))}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}toKState(){return Be.fromTransformation(this)}repetitionOrder(){return v2(this.kpuzzle.definition,this)}selfMultiply(t){return new cr(this.kpuzzle,gr(this.kpuzzle,this.transformationData,t))}},Ut=cr;Wr=new WeakMap});function bl(e,t){let{permutation:r}=t,n=r.length;for(let l=0;l<n;l++)if(r[l]!==l)return!1;if(e>1){let{orientation:l}=t;for(let o=0;o<n;o++)if(l[o]!==0)return!1}return!0}function fm(e,t,r,n={}){for(let l=0;l<e.numPieces;l++)if(!n?.ignoreOrientation&&t.orientation[l]!==r.orientation[l]||!n?.ignorePermutation&&t.permutation[l]!==r.permutation[l])return!1;return!0}function x2(e,t,r){for(let[n,l]of Object.entries(e.definition.orbits))if(!fm(l,t[n],r[n]))return!1;return!0}function N0(e,t){let r={};for(let n in e.definition.orbits){let l=e.definition.orbits[n],o=t[n];if(bl(l.numOrientations,o))r[n]=o;else if(l.numOrientations===1){let i=new Array(l.numPieces);for(let a=0;a<l.numPieces;a++)i[o.permutation[a]]=a;r[n]={permutation:i,orientation:o.orientation}}else{let i=new Array(l.numPieces),a=new Array(l.numPieces);for(let s=0;s<l.numPieces;s++){let f=o.permutation[s];i[f]=s,a[f]=(l.numOrientations-o.orientation[s]+l.numOrientations)%l.numOrientations}r[n]={permutation:i,orientation:a}}}return r}function gr(e,t,r){if(r===1)return t;if(r<0)return gr(e,N0(e,t),-r);if(r===0){let{transformationData:o}=e.identityTransformation();return o}let n=t;r!==2&&(n=gr(e,t,Math.floor(r/2)));let l=Sl(e.definition,n,n);return r%2===0?l:Sl(e.definition,t,l)}function G0(e,t){return t?G0(t,e%t):e}function v2(e,t){let r=1;for(let n in e.orbits){let l=e.orbits[n],o=t.transformationData[n],i=new Array(l.numPieces);for(let a=0;a<l.numPieces;a++)if(!i[a]){let s=a,f=0,g=0;for(;i[s]=!0,f=f+o.orientation[s],g=g+1,s=o.permutation[s],s!==a;);f!==0&&(g=g*l.numOrientations/G0(l.numOrientations,f)),r=r*g/G0(r,g)}}return r}var _2,E2,k2,wl=U(()=>{Le();Co();xl();_2=class extends yn{traverseAlg(t,r){let n=null;for(let l of t.units())n?n=n.applyTransformation(this.traverseUnit(l,r)):n=this.traverseUnit(l,r);return n??r.identityTransformation()}traverseGrouping(t,r){let n=this.traverseAlg(t.alg,r);return new Ut(r,gr(r,n.transformationData,t.amount))}traverseMove(t,r){return r.moveToTransformation(t)}traverseCommutator(t,r){let n=this.traverseAlg(t.A,r),l=this.traverseAlg(t.B,r);return n.applyTransformation(l).applyTransformation(n.invert()).applyTransformation(l.invert())}traverseConjugate(t,r){let n=this.traverseAlg(t.A,r),l=this.traverseAlg(t.B,r);return n.applyTransformation(l).applyTransformation(n.invert())}traversePause(t,r){return r.identityTransformation()}traverseNewline(t,r){return r.identityTransformation()}traverseLineComment(t,r){return r.identityTransformation()}},E2=new _2,k2=E2.traverseAlg.bind(E2)});var bn,Mo,be,T0=U(()=>{Le();wl();M0();Po();xl();be=class{constructor(t,r){this.definition=t;re(this,bn,new Map);re(this,Mo,void 0);this.experimentalPGNotation=r?.experimentalPGNotation}name(){return this.definition.name}identityTransformation(){return Ut.experimentalConstructIdentity(this)}moveToTransformation(t){typeof t=="string"&&(t=new B(t));let r=t.toString(),n=d(this,bn).get(r);if(n)return new Ut(this,n);if(this.experimentalPGNotation){let o=this.experimentalPGNotation.lookupMove(t);if(!o)throw new Error(\`could not map to internal move: \${t}\`);return d(this,bn).set(r,o),new Ut(this,o)}let l=w2(this,t);return d(this,bn).set(r,l),new Ut(this,l)}algToTransformation(t){return typeof t=="string"&&(t=new _(t)),k2(t,this)}toTransformation(t){return typeof t=="string"?this.algToTransformation(t):t?.is?.(_)?this.algToTransformation(t):t?.is?.(B)?this.moveToTransformation(t):t}startState(){return new Be(this,this.definition.startStateData)}canConvertStateToUniqueTransformation(){return d(this,Mo)??j(this,Mo,(()=>{for(let[t,r]of Object.entries(this.definition.orbits)){let n=new Array(r.numPieces).fill(!1);for(let l of this.definition.startStateData[t].pieces)n[l]=!0;for(let l of n)if(!l)return!1}return!0})())}get state(){throw new Error("KPuzzle is now a different (stateless) class.")}reset(){throw new Error("KPuzzle is now a different (stateless) class.")}applyMove(t){throw new Error("KPuzzle is now a different class. Try \`.moveToTransformation()\` to get the transformation for a move.")}applyAlg(t){throw new Error("KPuzzle is now a different class. Try \`.algToTransformation()\` to get the transformation for an alg.")}};bn=new WeakMap,Mo=new WeakMap});var Fe,z2=U(()=>{Fe={name:"3x3x3",orbits:{EDGES:{numPieces:12,numOrientations:2},CORNERS:{numPieces:8,numOrientations:3},CENTERS:{numPieces:6,numOrientations:4}},startStateData:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientation:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientation:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientation:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientation:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientation:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientation:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,1]}}}};Fe.moves.Uw=Fe.moves.u;Fe.moves.Lw=Fe.moves.l;Fe.moves.Fw=Fe.moves.f;Fe.moves.Rw=Fe.moves.r;Fe.moves.Bw=Fe.moves.b;Fe.moves.Dw=Fe.moves.d;Fe.moves.Rv=Fe.moves.x;Fe.moves.Uv=Fe.moves.y;Fe.moves.Fv=Fe.moves.z;Fe.moves.Lv={EDGES:{permutation:[2,10,6,11,0,8,4,9,1,3,5,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[1,7,6,2,0,3,5,4],orientation:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,3,2,0]}};Fe.moves.Dv={EDGES:{permutation:[3,0,1,2,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[3,0,1,2,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[3,0,0,0,0,1]}};Fe.moves.Bv={EDGES:{permutation:[8,5,10,1,9,7,11,3,4,0,6,2],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[4,7,1,0,5,3,2,6],orientation:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientation:[3,3,3,3,1,3]}}});var O0,je=U(()=>{T0();Po();xl();z2();T0();O0=new be(Fe)});var C2=U(()=>{je()});var um,Ry,P2=U(()=>{um={"333":{puzzleID:"3x3x3",eventName:"3x3x3 Cube"},"222":{puzzleID:"2x2x2",eventName:"2x2x2 Cube"},"444":{puzzleID:"4x4x4",eventName:"4x4x4 Cube"},"555":{puzzleID:"5x5x5",eventName:"5x5x5 Cube"},"666":{puzzleID:"6x6x6",eventName:"6x6x6 Cube"},"777":{puzzleID:"7x7x7",eventName:"7x7x7 Cube"},"333bf":{puzzleID:"3x3x3",eventName:"3x3x3 Blindfolded"},"333fm":{puzzleID:"3x3x3",eventName:"3x3x3 Fewest Moves"},"333oh":{puzzleID:"3x3x3",eventName:"3x3x3 One-Handed"},clock:{puzzleID:"clock",eventName:"Clock"},minx:{puzzleID:"megaminx",eventName:"Megaminx"},pyram:{puzzleID:"pyraminx",eventName:"Pyraminx"},skewb:{puzzleID:"skewb",eventName:"Skewb"},sq1:{puzzleID:"square1",eventName:"Square-1"},"444bf":{puzzleID:"4x4x4",eventName:"4x4x4 Blindfolded"},"555bf":{puzzleID:"5x5x5",eventName:"5x5x5 Blindfolded"},"333mb":{puzzleID:"3x3x3",eventName:"3x3x3 Multi-Blind"}},Ry={...um,fto:{puzzleID:"fto",eventName:"Face-Turning Octahedron"},master_tetraminx:{puzzleID:"master_tetraminx",eventName:"Master Tetraminx"},kilominx:{puzzleID:"kilominx",eventName:"Kilominx"},redi_cube:{puzzleID:"redi_cube",eventName:"Redi Cube"}}});function Fm(e){switch(e){case"Regular":return gm;case"Dim":return Rm;case"Ignored":return cm;case"OrientationStickers":return pm;case"Invisible":return mm;case"IgnoreNonPrimary":return Lm;case"PermuteNonPrimary":return Bm;case"Ignoriented":return dm;case"OrientationWithoutPermutation":return hm}}var vl,wn,Ct,qe,Sn,No,Kr,gm,cm,pm,mm,Lm,Bm,Rm,dm,hm,El,_l,kl=U(()=>{vl=(f=>(f.Regular="Regular",f.Dim="Dim",f.Ignored="Ignored",f.OrientationStickers="OrientationStickers",f.Invisible="Invisible",f.Ignoriented="Ignoriented",f.IgnoreNonPrimary="IgnoreNonPrimary",f.PermuteNonPrimary="PermuteNonPrimary",f.OrientationWithoutPermutation="OrientationWithoutPermutation",f))(vl||{}),wn=class{constructor(t,r){this.stickerings=new Map;for(let[n,l]of Object.entries(t.definition.orbits))this.stickerings.set(n,new Array(l.numPieces).fill(r))}},Ct="regular",qe="ignored",Sn="oriented",No="invisible",Kr="dim",gm={facelets:[Ct,Ct,Ct,Ct,Ct]},cm={facelets:[qe,qe,qe,qe,qe]},pm={facelets:[Sn,Sn,Sn,Sn,Sn]},mm={facelets:[No,No,No,No]},Lm={facelets:[Ct,qe,qe,qe,qe]},Bm={facelets:[Kr,Ct,Ct,Ct,Ct]},Rm={facelets:[Kr,Kr,Kr,Kr,Kr]},dm={facelets:[Kr,qe,qe,qe,qe]},hm={facelets:[Sn,qe,qe,qe,qe]};El=class extends wn{constructor(t){super(t,"Regular")}set(t,r){for(let[n,l]of this.stickerings.entries())for(let o=0;o<l.length;o++)t.stickerings.get(n)[o]&&(l[o]=r);return this}toAppearance(){let t={orbits:{}};for(let[r,n]of this.stickerings.entries()){let l=[],o={pieces:l};t.orbits[r]=o;for(let i of n)l.push(Fm(i))}return t}},_l=class{constructor(t){this.kpuzzle=t}and(t){let r=new wn(this.kpuzzle,!1);for(let[n,l]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let o=0;o<l.numPieces;o++){r.stickerings.get(n)[o]=!0;for(let i of t)if(!i.stickerings.get(n)[o]){r.stickerings.get(n)[o]=!1;continue e}}}return r}or(t){let r=new wn(this.kpuzzle,!1);for(let[n,l]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let o=0;o<l.numPieces;o++){r.stickerings.get(n)[o]=!1;for(let i of t)if(i.stickerings.get(n)[o]){r.stickerings.get(n)[o]=!0;continue e}}}return r}not(t){let r=new wn(this.kpuzzle,!1);for(let[n,l]of Object.entries(this.kpuzzle.definition.orbits))for(let o=0;o<l.numPieces;o++)r.stickerings.get(n)[o]=!t.stickerings.get(n)[o];return r}all(){return this.and(this.moves([]))}move(t){let r=this.kpuzzle.moveToTransformation(t),n=new wn(this.kpuzzle,!1);for(let[l,o]of Object.entries(this.kpuzzle.definition.orbits))for(let i=0;i<o.numPieces;i++)(r.transformationData[l].permutation[i]!==i||r.transformationData[l].orientation[i]!==0)&&(n.stickerings.get(l)[i]=!0);return n}moves(t){return t.map(r=>this.move(r))}}});function Dm(e){(async()=>{M2=e;let t=Array.from(document.body.querySelectorAll("twisty-player"));console.log(\`Setting the custom stickering for \${t.length} players!\`);let r=[];for(let n of t)r.push((async()=>{let l=await n.experimentalModel.twistySceneModel.stickering.get();n.experimentalStickering=l==="experimental-global-custom-1"?"experimental-global-custom-2":"experimental-global-custom-1"})());await Promise.all(r),console.log("Success!")})()}function N2(e,t){M2(e,t)}var M2,G2=U(()=>{kl();M2=()=>{};globalThis.location&&new URL(location.href).searchParams.get("global-custom-stickerer")==="true"&&(window.setGlobalCustomStickerer=Dm,window.PieceStickering=vl,console.log("Global custom stickerer enabled! (using: global-custom-stickerer=true)"),console.log("Look here for inspiration:","https://github.com/cubing/cubing.js/blob/81b5cab3e27d8defb39dd1e0a10bc9e8ba894d26/src/cubing/puzzles/stickerings/cube-stickerings.ts#L67"))});async function Pt(e,t){let r=await e.kpuzzle(),n=new El(r),l=new _l(r),o=()=>l.move("U"),i=()=>l.or(l.moves(["U","D"])),a=()=>l.not(i()),s=()=>l.or(l.moves(["L","R"])),f=()=>l.not(s()),g=()=>l.or(l.moves(["F","B"])),c=()=>l.not(g()),u=()=>l.not(o()),p=()=>l.and([o(),f(),c()]),m=()=>l.and([l.and(l.moves(["F","R"])),l.not(i())]),L=()=>l.and(l.moves(["D","R","F"])),R=()=>l.or([L(),m()]),h=()=>l.or([l.and([f(),a()]),l.and([f(),c()]),l.and([a(),c()])]),y=()=>l.or([l.and([f(),i(),g()]),l.and([a(),s(),g()]),l.and([c(),i(),s()])]),A=()=>l.not(l.or([h(),y()])),E=()=>l.or([f(),l.and([o(),y()])]);function v(){n.set(u(),"Dim")}function K(){n.set(o(),"PermuteNonPrimary"),n.set(p(),"Dim")}function Z(){n.set(o(),"IgnoreNonPrimary"),n.set(p(),"Regular")}function M(){n.set(o(),"Ignoriented"),n.set(p(),"Dim")}switch(t){case"full":break;case"PLL":v(),K();break;case"CLS":v(),n.set(l.and(l.moves(["D","R","F"])),"Regular"),n.set(o(),"Ignoriented"),n.set(l.and([o(),f(),c()]),"Dim"),n.set(l.and([o(),A()]),"IgnoreNonPrimary");break;case"OLL":v(),Z();break;case"COLL":v(),K(),n.set(l.and([o(),A()]),"Regular");break;case"OCLL":v(),M(),n.set(l.and([o(),A()]),"IgnoreNonPrimary");break;case"CLL":v(),n.set(l.not(l.and([A(),o()])),"Dim");break;case"ELL":v(),n.set(o(),"Dim"),n.set(l.and([o(),y()]),"Regular");break;case"ELS":v(),Z(),n.set(l.and([o(),A()]),"Ignored"),n.set(m(),"Regular"),n.set(L(),"Ignored");break;case"LL":v();break;case"F2L":n.set(o(),"Ignored");break;case"ZBLL":v(),n.set(o(),"PermuteNonPrimary"),n.set(p(),"Dim"),n.set(l.and([o(),A()]),"Regular");break;case"ZBLS":v(),n.set(R(),"Regular"),Z(),n.set(l.and([o(),A()]),"Ignored");break;case"WVLS":case"VLS":v(),n.set(R(),"Regular"),Z();break;case"LS":v(),n.set(R(),"Regular"),n.set(o(),"Ignored"),n.set(p(),"Dim");break;case"EO":n.set(A(),"Ignored"),n.set(y(),"OrientationWithoutPermutation");break;case"EOline":n.set(A(),"Ignored"),n.set(y(),"OrientationWithoutPermutation"),n.set(l.and(l.moves(["D","M"])),"Regular");break;case"EOcross":n.set(y(),"OrientationWithoutPermutation"),n.set(l.move("D"),"Regular"),n.set(A(),"Ignored");break;case"CMLL":n.set(u(),"Dim"),n.set(E(),"Ignored"),n.set(l.and([o(),A()]),"Regular");break;case"L6E":n.set(l.not(E()),"Dim");break;case"L6EO":n.set(l.not(E()),"Dim"),n.set(E(),"OrientationWithoutPermutation"),n.set(l.and([h(),i()]),"OrientationStickers");break;case"Daisy":n.set(l.all(),"Ignored"),n.set(h(),"Dim"),n.set(l.and([l.move("D"),h()]),"Regular"),n.set(l.and([l.move("U"),y()]),"IgnoreNonPrimary");break;case"Cross":n.set(l.all(),"Ignored"),n.set(h(),"Dim"),n.set(l.and([l.move("D"),h()]),"Regular"),n.set(l.and([l.move("D"),y()]),"Regular");break;case"2x2x2":n.set(l.or(l.moves(["U","F","R"])),"Ignored"),n.set(l.and([l.or(l.moves(["U","F","R"])),h()]),"Dim");break;case"2x2x3":n.set(l.all(),"Dim"),n.set(l.or(l.moves(["U","F","R"])),"Ignored"),n.set(l.and([l.or(l.moves(["U","F","R"])),h()]),"Dim"),n.set(l.and([l.move("F"),l.not(l.or(l.moves(["U","R"])))]),"Regular");break;case"Void Cube":n.set(h(),"Invisible");break;case"picture":case"invisible":n.set(l.all(),"Invisible");break;case"centers-only":n.set(l.not(h()),"Ignored");break;case"experimental-global-custom-1":case"experimental-global-custom-2":N2(n,l);break;default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`),n.set(l.and(l.moves([])),"Dim")}return n.toAppearance()}async function xn(){return["full","PLL","CLS","OLL","COLL","OCLL","ELL","ELS","LL","F2L","ZBLL","ZBLS","WVLS","VLS","LS","EO","EOline","EOcross","CMLL","L6E","L6EO","Daisy","Cross","2x2x2","2x2x3","Void Cube","picture","invisible","centers-only"]}var vn=U(()=>{kl();G2()});function de(e){let t=null;return()=>t??(t=e())}var Mt=U(()=>{});var zl,T2=U(()=>{zl=class{constructor(t,r){this.facenames=t;this.prefixFree=!0;this.gripnames=[];r&&(this.gripnames=r);for(let n=0;this.prefixFree&&n<t.length;n++)for(let l=0;this.prefixFree&&l<t.length;l++)n!==l&&t[n].startsWith(t[l])&&(this.prefixFree=!1)}setGripNames(t){this.gripnames=t}splitByFaceNames(t){let r=[],n=0;for(;n<t.length;){n>0&&n<t.length&&t[n]==="_"&&n++;let l=-1;for(let o=0;o<this.facenames.length;o++)t.substr(n).startsWith(this.facenames[o])&&(l<0||this.facenames[o].length>this.facenames[l].length)&&(l=o);if(l>=0)r.push(l),n+=this.facenames[l].length;else throw new Error("Could not split "+t+" into face names.")}return r}joinByFaceIndices(t){let r="",n=[];for(let l=0;l<t.length;l++)n.push(r),n.push(this.facenames[t[l]]),this.prefixFree||(r="_");return n.join("")}spinmatch(t,r){if(t===r)return!0;try{let n=this.splitByFaceNames(t),l=this.splitByFaceNames(r);if(n.length!==l.length&&n.length<3)return!1;for(let o=0;o<n.length;o++){for(let a=0;a<o;a++)if(n[o]===n[a])return!1;let i=!1;for(let a=0;a<l.length;a++)if(n[o]===l[a]){i=!0;break}if(!i)return!1}return!0}catch{return!1}}spinmatchv(t,r){return t.endsWith("v")&&r.endsWith("v")?this.spinmatch(t.slice(0,t.length-1),r.slice(0,r.length-1)):this.spinmatch(t,r)}unswizzle(t){(t.endsWith("v")||t.endsWith("w"))&&t[0]<="Z"&&(t=t.slice(0,t.length-1));let r=t.toUpperCase();for(let n=0;n<this.gripnames.length;n++){let l=this.gripnames[n];if(this.spinmatch(r,l))return l}return t}}});var En,O2=U(()=>{En=class{notationToInternal(t){return t}notationToExternal(t){return t}}});var Go,I2=U(()=>{Le();Go=class{constructor(t,r){this.child=t;this.sw=r}notationToInternal(t){return t.family==="T"&&t.innerLayer===void 0&&t.outerLayer===void 0?new B(new C("FLRv",t.innerLayer,t.outerLayer),t.amount):this.child.notationToInternal(t)}notationToExternal(t){let r=t.family;return r.length>0&&r[r.length-1]==="v"&&(r=r.substring(0,r.length-1)),this.sw.spinmatch(r,"FLUR")?new B(new C("T",t.innerLayer,t.outerLayer),t.amount):this.child.notationToExternal(t)}}});var Cl,W2=U(()=>{Le();Cl=class{constructor(t,r){this.internalNames=t;this.externalNames=r}convertString(t,r,n){let l="";(t.endsWith("v")||t.endsWith("v"))&&t<="_"&&(l=t.slice(t.length-1),t=t.slice(0,t.length-1));let o=t.toUpperCase(),i=!1;return t!==o&&(i=!0,t=o),t=n.joinByFaceIndices(r.splitByFaceNames(t)),i&&(t=t.toLowerCase()),t+l}convert(t,r,n){let l=t.family,o=this.convertString(l,r,n);return l===o?t:new B(new C(o,t.innerLayer,t.outerLayer),t.amount)}notationToInternal(t){return this.convert(t,this.externalNames,this.internalNames)}notationToExternal(t){return this.convert(t,this.internalNames,this.externalNames)}}});var To,K2=U(()=>{Le();To=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer===void 0&&t.outerLayer===void 0){if(Math.abs(t.amount)===1){if(t.family==="R++")return new B(new C("L",3,2),-2*t.amount);if(t.family==="R--")return new B(new C("L",3,2),2*t.amount);if(t.family==="D++")return new B(new C("U",3,2),-2*t.amount);if(t.family==="D--")return new B(new C("U",3,2),2*t.amount);if(t.family==="R_PLUSPLUS_")return new B(new C("L",3,2),-2*t.amount);if(t.family==="D_PLUSPLUS_")return new B(new C("U",3,2),-2*t.amount)}if(t.family==="y")return new B("Uv",t.amount)}return this.child.notationToInternal(t)}notationToExternal(t){return t.family==="Uv"?new B(new C("y",t.innerLayer,t.outerLayer),t.amount):t.family==="Dv"?new B("y",-t.amount):this.child.notationToExternal(t)}}});var Oo,Q2=U(()=>{Le();Oo=class{constructor(t){this.slices=t}notationToInternal(t){let r=t.family;return!t.innerLayer&&!t.outerLayer&&(r==="x"?t=new B("Rv",t.amount):r==="y"?t=new B("Uv",t.amount):r==="z"&&(t=new B("Fv",t.amount)),(this.slices&1)===1&&(r==="E"?t=new B(new C("D",(this.slices+1)/2),t.amount):r==="M"?t=new B(new C("L",(this.slices+1)/2),t.amount):r==="S"&&(t=new B(new C("F",(this.slices+1)/2),t.amount))),this.slices>2&&(r==="e"?t=new B(new C("D",this.slices-1,2),t.amount):r==="m"?t=new B(new C("L",this.slices-1,2),t.amount):r==="s"&&(t=new B(new C("F",this.slices-1,2),t.amount)))),t}notationToExternal(t){let r=t.family;if(!t.innerLayer&&!t.outerLayer){if(r==="Rv")return new B("x",t.amount);if(r==="Uv")return new B("y",t.amount);if(r==="Fv")return new B("z",t.amount);if(r==="Lv")return new B("x",-t.amount);if(r==="Dv")return new B("y",-t.amount);if(r==="Bv")return new B("z",-t.amount)}return t}}});var Am,ym,j2,q2,V2,Pl,Io,H2=U(()=>{Le();Am={U:"frl",L:"fld",R:"fdr",B:"dlr",u:"FRL",l:"FLD",r:"FDR",b:"DLR",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R"},ym={U:"FRL",L:"FLD",R:"FDR",B:"DLR",u:"frl",l:"fld",r:"fdr",b:"dlr",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R",d:"d",f:"f",bl:"l",br:"r"},j2={U:"FRL",L:"FLD",R:"FDR",B:"DLR"},q2=new C("y"),V2=new C("Dv"),Pl=class{constructor(t){this.child=t;this.wcaHack=!1;this.map=Am}notationToInternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){let n=j2[t.family];if(n)return new B(new C(n,t.innerLayer,t.outerLayer),t.amount)}let r=this.map[t.family];return r?new B(new C(r,t.innerLayer,t.outerLayer),t.amount):q2.isIdentical(t.quantum)?new B(V2,-t.amount):null}notationToExternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){for(let[r,n]of Object.entries(j2))if(this.child.spinmatch(t.family,n))return new B(new C(r,t.innerLayer,t.outerLayer),t.amount)}for(let[r,n]of Object.entries(this.map))if(this.child.spinmatch(t.family,n))return new B(new C(r,t.innerLayer,t.outerLayer),t.amount);return V2.isIdentical(t.quantum)?new B(q2,-t.amount):null}},Io=class extends Pl{constructor(t){super(t);this.map=ym}}});var Y2,I0,J2,Um,W0,Z2,bm,K0,X2,Sm,Wo,$2=U(()=>{Le();Y2={U:"UBL",UL:"ULF",F:"UFR",UR:"URB",B:"DBL",D:"DFR",L:"DLF",R:"DRB",Uv:"UBLv",ULv:"ULFv",Fv:"UFRv",URv:"URBv",Bv:"DBLv",Dv:"DFRv",Lv:"DLFv",Rv:"DRBv"},I0=new C("x"),J2=new C("Rv"),Um=new C("Lv"),W0=new C("y"),Z2=new C("Uv"),bm=new C("Dv"),K0=new C("z"),X2=new C("Fv"),Sm=new C("Bv"),Wo=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer||t.outerLayer)return null;let r=Y2[t.family];return r?new B(new C(r,t.outerLayer,t.innerLayer),t.amount):I0.isIdentical(t.quantum)?new B(J2,t.amount):W0.isIdentical(t.quantum)?new B(Z2,t.amount):K0.isIdentical(t.quantum)?new B(X2,t.amount):null}notationToExternal(t){for(let[r,n]of Object.entries(Y2))if(this.child.spinmatchv(t.family,n))return new B(new C(r,t.innerLayer,t.outerLayer),t.amount);return J2.isIdentical(t.quantum)?new B(I0,t.amount):Um.isIdentical(t.quantum)?new B(I0,-t.amount):Z2.isIdentical(t.quantum)?new B(W0,t.amount):bm.isIdentical(t.quantum)?new B(W0,-t.amount):X2.isIdentical(t.quantum)?new B(K0,t.amount):Sm.isIdentical(t.quantum)?new B(K0,-t.amount):null}}});var Q0=U(()=>{O2();I2();W2();K2();Q2();H2();$2()});function ef(e){let t=0,r={};for(;t<e.length&&e[t][0]==="-";){let l=e[t++];if(l==="--rotations")r.addRotations=!0;else if(l==="--allmoves")r.allMoves=!0;else if(l==="--outerblockmoves")r.outerBlockMoves=!0;else if(l==="--vertexmoves")r.vertexMoves=!0;else if(l==="--nocorners")r.includeCornerOrbits=!1;else if(l==="--noedges")r.includeEdgeOrbits=!1;else if(l==="--noorientation")r.fixedOrientation=!0;else if(l==="--nocenters")r.includeCenterOrbits=!1;else if(l==="--omit")r.excludeOrbits=e[t].split(","),t++;else if(l==="--moves")r.moveList=e[t].split(","),t++;else if(l==="--optimize")r.optimizeOrbits=!0;else if(l==="--scramble")r.scrambleAmount=100;else if(l==="--fixcorner")r.fixedPieceType="v";else if(l==="--fixedge")r.fixedPieceType="e";else if(l==="--fixcenter")r.fixedPieceType="f";else if(l==="--orientcenters")r.orientCenters=!0;else if(l==="--puzzleorientation")r.puzzleOrientation=JSON.parse(e[t]),t++;else throw new Error("Bad option: "+l)}return{puzzleDescription:Ml(e.slice(t).join(" ")),options:r}}var j0,q0=U(()=>{Ko();j0=class{constructor(t={}){this.verbosity=0;this.allMoves=!1;this.vertexMoves=!1;this.addRotations=!1;this.moveList=null;this.fixedOrientation=!1;this.fixedPieceType=null;this.orientCenters=!1;this.includeCornerOrbits=!0;this.includeCenterOrbits=!0;this.includeEdgeOrbits=!0;this.excludeOrbits=[];this.optimizeOrbits=!1;this.grayCorners=!1;this.grayCenters=!1;this.grayEdges=!1;this.puzzleOrientation=null;this.puzzleOrientations=null;this.scrambleAmount=0;Object.assign(this,t)}}});function pr(e){if(!V0[e]){let t=Array(e);for(let r=0;r<e;r++)t[r]=0;V0[e]=t}return V0[e]}function Nt(e){if(!H0[e]){let t=Array(e);for(let r=0;r<e;r++)t[r]=r;H0[e]=t}return H0[e]}function tf(e){return new mt(Nt(e))}function rf(e){let t=1;for(;e>1;)t*=e,e--;return t}function wm(e,t){if(e>t){let r=e;e=t,t=r}for(;e>0;){let r=t%e;t=e,e=r}return t}function Y0(e,t){return e/wm(e,t)*t}var V0,H0,mt,Qo=U(()=>{V0=[],H0=[];mt=class{constructor(t){this.n=t.length,this.p=t}toString(){return"Perm["+this.p.join(" ")+"]"}mul(t){let r=Array(this.n);for(let n=0;n<this.n;n++)r[n]=t.p[this.p[n]];return new mt(r)}rmul(t){let r=Array(this.n);for(let n=0;n<this.n;n++)r[n]=this.p[t.p[n]];return new mt(r)}inv(){let t=Array(this.n);for(let r=0;r<this.n;r++)t[this.p[r]]=r;return new mt(t)}compareTo(t){for(let r=0;r<this.n;r++)if(this.p[r]!==t.p[r])return this.p[r]-t.p[r];return 0}toGap(){let t=new Array,r=new Array(this.n);for(let n=0;n<this.p.length;n++){if(r[n]||this.p[n]===n)continue;let l=new Array;for(let o=n;!r[o];o=this.p[o])l.push(1+o),r[o]=!0;t.push("("+l.join(",")+")")}return t.join("")}order(){let t=1,r=new Array(this.n);for(let n=0;n<this.p.length;n++){if(r[n]||this.p[n]===n)continue;let l=0;for(let o=n;!r[o];o=this.p[o])l++,r[o]=!0;t=Y0(t,l)}return t}}});function Z0(e,t){let r=B.fromString(t),n=e.notationToExternal(r);return n===null||r===n?t:n.toString()}function nf(e,t){let r=e.moveops.length;if(r>30)throw new Error("Canon info too big for bitmask");let n=[],l=[];for(let i=0;i<r;i++){let a=e.moveops[i];n.push(a.order());let s=0;for(let f=0;f<r;f++){if(f===i)continue;let g=e.moveops[f];a.mul(g).equal(g.mul(a))&&(s|=1<<f)}l.push(s)}let o={};o[0]=1;for(let i=0;i<100;i++){let a=0,s={},f=0;for(let g in o){let c=+g,u=o[c];a+=u,f++;for(let p=0;p<n.length;p++)if((c>>p&1)===0&&(c&l[p]&(1<<p)-1)===0){let m=c&l[p]|1<<p;s[m]===void 0&&(s[m]=0),s[m]+=(n[p]-1)*u}}t(\`\${i}: canonseq \${a} states \${f}\`),o=s}}var Nl,xm,_n,bt,Yt,X0,mr,kn,J0,lf=U(()=>{Le();Q0();Qo();Nl=class{constructor(t,r){this.size=t;this.mod=r}reassemblySize(){return rf(this.size)*Math.pow(this.mod,this.size)}},xm=0;_n=class{constructor(t,r,n,l,o){this.orbitnames=t;this.orbitdefs=r;this.solved=n;this.movenames=l;this.moveops=o}transformToKTransformationData(t){let r={};for(let n=0;n<this.orbitnames.length;n++)r[this.orbitnames[n]]=t.orbits[n].toKPuzzle();return r}static transformToKTransformationData(t,r){let n={};for(let l=0;l<t.length;l++)n[t[l]]=r.orbits[l].toKPuzzle();return n}toKsolve(t,r=new En){let n=[];n.push("Name "+t),n.push("");for(let l=0;l<this.orbitnames.length;l++)n.push(\`Set \${this.orbitnames[l]} \${this.orbitdefs[l].size} \${this.orbitdefs[l].mod}\`);n.push(""),n.push("Solved");for(let l=0;l<this.orbitnames.length;l++)this.solved.orbits[l].appendDefinition(n,this.orbitnames[l],!1,!1);n.push("End");for(let l=0;l<this.movenames.length;l++){n.push("");let o=Z0(r,this.movenames[l]),i=!1;o[o.length-1]==="'"&&(i=!0,o=o.substring(0,o.length-1)),n.push("Move "+o);for(let a=0;a<this.orbitnames.length;a++)i?this.moveops[l].orbits[a].inv().appendDefinition(n,this.orbitnames[a],!0):this.moveops[l].orbits[a].appendDefinition(n,this.orbitnames[a],!0);n.push("End")}return n}toKPuzzleDefinition(t){let r={},n={};for(let o=0;o<this.orbitnames.length;o++){r[this.orbitnames[o]]={numPieces:this.orbitdefs[o].size,numOrientations:this.orbitdefs[o].mod};let i=this.solved.orbits[o].toKPuzzle();n[this.orbitnames[o]]={pieces:i.permutation,orientation:i.orientation}}let l={};if(t)for(let o=0;o<this.movenames.length;o++)l[this.movenames[o]]=this.transformToKTransformationData(this.moveops[o]);return{name:\`PG3D #\${++xm}\`,orbits:r,startStateData:n,moves:l}}optimize(){let t=[],r=[],n=[],l=[];for(let o=0;o<this.moveops.length;o++)l.push([]);for(let o=0;o<this.orbitdefs.length;o++){let i=this.orbitdefs[o].mod,a=this.orbitdefs[o].size,s=new J0(a),f=new Array(this.orbitdefs[o].size);for(let p=0;p<a;p++)f[p]=!1;for(let p=0;p<this.moveops.length;p++)for(let m=0;m<a;m++)(this.moveops[p].orbits[o].perm[m]!==m||this.moveops[p].orbits[o].ori[m]!==0)&&(f[m]=!0,s.union(m,this.moveops[p].orbits[o].perm[m]));let g=!0;if(i>1){g=!1;let p=new J0(this.orbitdefs[o].size*i);for(let m=0;m<this.moveops.length;m++)for(let L=0;L<a;L++)if(this.moveops[m].orbits[o].perm[L]!==L||this.moveops[m].orbits[o].ori[L]!==0)for(let R=0;R<i;R++)p.union(L*i+R,this.moveops[m].orbits[o].perm[L]*i+(R+this.moveops[m].orbits[o].ori[L])%i);for(let m=0;!g&&m<a;m++)for(let L=1;L<i;L++)p.find(m*i)===p.find(m*i+L)&&(g=!0);for(let m=0;!g&&m<a;m++)for(let L=0;L<m;L++)this.solved.orbits[o].perm[m]===this.solved.orbits[o].perm[L]&&(g=!0)}let c=-1,u=!1;for(let p=0;p<this.orbitdefs[o].size;p++)if(f[p]){let m=s.find(p);c<0?c=m:c!==m&&(u=!0)}for(let p=0;p<this.orbitdefs[o].size;p++){if(!f[p]||s.find(p)!==p)continue;let L=[],R=[],h=0;for(let y=0;y<this.orbitdefs[o].size;y++)s.find(y)===p&&(L[h]=y,R[y]=h,h++);if(u?t.push(\`\${this.orbitnames[o]}_p\${p}\`):t.push(this.orbitnames[o]),g){r.push(new Nl(h,this.orbitdefs[o].mod)),n.push(this.solved.orbits[o].remapVS(L,h));for(let y=0;y<this.moveops.length;y++)l[y].push(this.moveops[y].orbits[o].remap(L,R,h))}else{r.push(new Nl(h,1)),n.push(this.solved.orbits[o].remapVS(L,h).killOri());for(let y=0;y<this.moveops.length;y++)l[y].push(this.moveops[y].orbits[o].remap(L,R,h).killOri())}}}return new _n(t,r,new kn(n),this.movenames,l.map(o=>new mr(o)))}scramble(t){this.solved=this.solved.mul(this.getScrambleTransformation(t))}getScrambleTransformation(t){t<100&&(t=100);let r=[];for(let l=0;l<this.moveops.length;l++)r[l]=this.moveops[l];for(let l=0;l<r.length;l++){let o=Math.floor(Math.random()*r.length),i=r[l];r[l]=r[o],r[o]=i}t<r.length&&(t=r.length);for(let l=0;l<t;l++){let o=Math.floor(Math.random()*r.length),i=Math.floor(Math.random()*r.length),a=Math.floor(Math.random()*this.moveops.length);r[o]=r[o].mul(r[i]).mul(this.moveops[a]),Math.random()<.1&&(r[o]=r[o].mul(this.moveops[a]))}let n=r[0];for(let l=1;l<r.length;l++)n=n.mul(r[l]);return n}reassemblySize(){let t=1;for(let r=0;r<this.orbitdefs.length;r++)t*=this.orbitdefs[r].reassemblySize();return t}},bt=class{constructor(t,r,n){this.perm=t;this.ori=r;this.orimod=n}static e(t,r){return new bt(Nt(t),pr(t),r)}mul(t){let r=this.perm.length,n=new Array(r);if(this.orimod===1){for(let l=0;l<r;l++)n[l]=this.perm[t.perm[l]];return new bt(n,this.ori,this.orimod)}else{let l=new Array(r);for(let o=0;o<r;o++)n[o]=this.perm[t.perm[o]],l[o]=(this.ori[t.perm[o]]+t.ori[o])%this.orimod;return new bt(n,l,this.orimod)}}inv(){let t=this.perm.length,r=new Array(t),n=new Array(t);for(let l=0;l<t;l++)r[this.perm[l]]=l,n[this.perm[l]]=(this.orimod-this.ori[l])%this.orimod;return new bt(r,n,this.orimod)}equal(t){let r=this.perm.length;for(let n=0;n<r;n++)if(this.perm[n]!==t.perm[n]||this.ori[n]!==t.ori[n])return!1;return!0}killOri(){let t=this.perm.length;for(let r=0;r<t;r++)this.ori[r]=0;return this.orimod=1,this}toPerm(){let t=this.orimod;if(t===1)return new mt(this.perm);let r=this.perm.length,n=new Array(r*t);for(let l=0;l<r;l++)for(let o=0;o<t;o++)n[l*t+o]=t*this.perm[l]+(this.ori[l]+o)%t;return new mt(n)}identicalPieces(){let t=[],r=this.perm.length,n=[];for(let l=0;l<r;l++){let o=this.perm[l];if(t[o]===void 0){let i=[l];t[o]=!0;for(let a=l+1;a<r;a++)this.perm[a]===o&&i.push(a);n.push(i)}}return n}order(){return this.toPerm().order()}isIdentity(){let t=this.perm.length;if(this.perm===Nt(t)&&this.ori===pr(t))return!0;for(let r=0;r<t;r++)if(this.perm[r]!==r||this.ori[r]!==0)return!1;return!0}zeroOris(){let t=this.perm.length;if(this.ori===pr(t))return!0;for(let r=0;r<t;r++)if(this.ori[r]!==0)return!1;return!0}remap(t,r,n){let l=new Array(n),o=new Array(n);for(let i=0;i<n;i++)l[i]=r[this.perm[t[i]]],o[i]=this.ori[t[i]];return new bt(l,o,this.orimod)}remapVS(t,r){let n=new Array(r),l=new Array(r),o=0,i=[];for(let a=0;a<r;a++){let s=this.perm[t[a]];i[s]===void 0&&(i[s]=o++),n[a]=i[s],l[a]=this.ori[t[a]]}return new bt(n,l,this.orimod)}appendDefinition(t,r,n,l=!0){if(!(l&&this.isIdentity())&&(t.push(r),t.push(this.perm.map(o=>o+1).join(" ")),!this.zeroOris()))if(n){let o=new Array(this.ori.length);for(let i=0;i<o.length;i++)o[this.perm[i]]=this.ori[i];t.push(o.join(" "))}else t.push(this.ori.join(" "))}toKPuzzle(){let t=this.perm.length;return this.isIdentity()?(bt.kcache[t]||(bt.kcache[t]={permutation:Nt(t),orientation:pr(t)}),bt.kcache[t]):{permutation:this.perm,orientation:this.ori}}},Yt=bt;Yt.kcache=[];X0=class{constructor(t){this.orbits=t}internalMul(t){let r=[];for(let n=0;n<this.orbits.length;n++)r.push(this.orbits[n].mul(t.orbits[n]));return r}internalInv(){let t=[];for(let r of this.orbits)t.push(r.inv());return t}equal(t){for(let r=0;r<this.orbits.length;r++)if(!this.orbits[r].equal(t.orbits[r]))return!1;return!0}killOri(){for(let t of this.orbits)t.killOri();return this}toPerm(){let t=new Array,r=0;for(let l of this.orbits){let o=l.toPerm();t.push(o),r+=o.n}let n=new Array(r);r=0;for(let l of t){for(let o=0;o<l.n;o++)n[r+o]=r+l.p[o];r+=l.n}return new mt(n)}identicalPieces(){let t=[],r=0;for(let n of this.orbits){let l=n.orimod,o=n.identicalPieces();for(let i=0;i<o.length;i++)t.push(o[i].map(a=>a*l+r));r+=l*n.perm.length}return t}order(){let t=1;for(let r of this.orbits)t=Y0(t,r.order());return t}},mr=class extends X0{constructor(t){super(t)}mul(t){return new mr(this.internalMul(t))}mulScalar(t){if(t===0)return this.e();let r=this;for(t<0&&(r=r.inv(),t=-t);(t&1)===0;)r=r.mul(r),t>>=1;if(t===1)return r;let n=r,l=this.e();for(;t>0;)t&1&&(l=l.mul(n)),t>1&&(n=n.mul(n)),t>>=1;return l}inv(){return new mr(this.internalInv())}e(){return new mr(this.orbits.map(t=>Yt.e(t.perm.length,t.orimod)))}},kn=class extends X0{constructor(t){super(t)}mul(t){return new kn(this.internalMul(t))}},J0=class{constructor(t){this.n=t;this.heads=new Array(t);for(let r=0;r<t;r++)this.heads[r]=r}find(t){let r=this.heads[t];return this.heads[r]===r||(r=this.find(this.heads[r]),this.heads[t]=r),r}union(t,r){let n=this.find(t),l=this.find(r);n<l?this.heads[l]=n:n>l&&(this.heads[n]=l)}}});var jo,of=U(()=>{jo={"2x2x2":"c f 0","3x3x3":"c f 0.333333333333333","4x4x4":"c f 0.5 f 0","5x5x5":"c f 0.6 f 0.2","6x6x6":"c f 0.666666666666667 f 0.333333333333333 f 0","7x7x7":"c f 0.714285714285714 f 0.428571428571429 f 0.142857142857143","8x8x8":"c f 0.75 f 0.5 f 0.25 f 0","9x9x9":"c f 0.777777777777778 f 0.555555555555556 f 0.333333333333333 f 0.111111111111111","10x10x10":"c f 0.8 f 0.6 f 0.4 f 0.2 f 0","11x11x11":"c f 0.818181818181818 f 0.636363636363636 f 0.454545454545455 f 0.272727272727273 f 0.0909090909090909","12x12x12":"c f 0.833333333333333 f 0.666666666666667 f 0.5 f 0.333333333333333 f 0.166666666666667 f 0","13x13x13":"c f 0.846153846153846 f 0.692307692307692 f 0.538461538461538 f 0.384615384615385 f 0.230769230769231 f 0.0769230769230769","20x20x20":"c f 0 f .1 f .2 f .3 f .4 f .5 f .6 f .7 f .8 f .9","30x30x30":"c f 0 f .066667 f .133333 f .2 f .266667 f .333333 f .4 f .466667 f .533333 f .6 f .666667 f .733333 f .8 f .866667 f .933333","40x40x40":"c f 0 f .05 f .1 f .15 f .2 f .25 f .3 f .35 f .4 f .45 f .5 f .55 f .6 f .65 f .7 f .75 f .8 f .85 f .9 f .95",skewb:"c v 0","master skewb":"c v 0.275","professor skewb":"c v 0 v 0.38","compy cube":"c v 0.915641442663986",helicopter:"c e 0.707106781186547","curvy copter":"c e 0.83",dino:"c v 0.577350269189626","little chop":"c e 0",pyramorphix:"t e 0",mastermorphix:"t e 0.346184634065199",pyraminx:"t v 0.333333333333333 v 1.66666666666667",tetraminx:"t v 0.333333333333333","master pyraminx":"t v 0 v 1 v 2","master tetraminx":"t v 0 v 1","professor pyraminx":"t v -0.2 v 0.6 v 1.4 v 2.2","professor tetraminx":"t v -0.2 v 0.6 v 1.4","Jing pyraminx":"t f 0","master pyramorphix":"t e 0.866025403784437",megaminx:"d f 0.7",gigaminx:"d f 0.64 f 0.82",teraminx:"d f 0.64 f 0.76 f 0.88",petaminx:"d f 0.64 f 0.73 f 0.82 f 0.91",examinx:"d f 0.64 f 0.712 f 0.784 f 0.856 f 0.928",zetaminx:"d f 0.64 f 0.7 f 0.76 f 0.82 f 0.88 f 0.94",yottaminx:"d f 0.64 f 0.6914 f 0.7429 f 0.7943 f 0.8457 f 0.8971 f 0.9486",pentultimate:"d f 0","master pentultimate":"d f 0.1","elite pentultimate":"d f 0 f 0.145905",starminx:"d v 0.937962370425399","starminx 2":"d f 0.23606797749979","pyraminx crystal":"d f 0.447213595499989",chopasaurus:"d v 0","big chop":"d e 0","skewb diamond":"o f 0",FTO:"o f 0.333333333333333","master FTO":"o f 0.5 f 0","Christopher's jewel":"o v 0.577350269189626",octastar:"o e 0","Trajber's octahedron":"o v 0.433012701892219","radio chop":"i f 0",icosamate:"i v 0","icosahedron 2":"i v 0.18759247376021","icosahedron 3":"i v 0.18759247376021 e 0","icosahedron static faces":"i v 0.84","icosahedron moving faces":"i v 0.73","Eitan's star":"i f 0.61803398874989","2x2x2 + dino":"c f 0 v 0.577350269189626","2x2x2 + little chop":"c f 0 e 0","dino + little chop":"c v 0.577350269189626 e 0","2x2x2 + dino + little chop":"c f 0 v 0.577350269189626 e 0","megaminx + chopasaurus":"d f 0.61803398875 v 0","starminx combo":"d f 0.23606797749979 v 0.937962370425399"}});function qo(e){let t=new O(0,0,0,0);for(let r=0;r<e.length;r++)t=t.sum(e[r]);return t.smul(1/e.length)}function af(e,t,r,n){let l=n[e].intersect3(n[t],n[r]);if(!l)return l;for(let o=0;o<n.length;o++)if(o!==e&&o!==t&&o!==r){let i=n[o].b*l.b+n[o].c*l.c+n[o].d*l.d;if(n[o].a>0&&i>n[o].a||n[o].a<0&&i<n[o].a)return!1}return l}var O,Vo=U(()=>{O=class{constructor(t,r,n,l){this.a=t;this.b=r;this.c=n;this.d=l}mul(t){return new O(this.a*t.a-this.b*t.b-this.c*t.c-this.d*t.d,this.a*t.b+this.b*t.a+this.c*t.d-this.d*t.c,this.a*t.c-this.b*t.d+this.c*t.a+this.d*t.b,this.a*t.d+this.b*t.c-this.c*t.b+this.d*t.a)}toString(){return\`Q[\${this.a},\${this.b},\${this.c},\${this.d}]\`}dist(t){return Math.hypot(this.a-t.a,this.b-t.b,this.c-t.c,this.d-t.d)}len(){return Math.hypot(this.a,this.b,this.c,this.d)}cross(t){return new O(0,this.c*t.d-this.d*t.c,this.d*t.b-this.b*t.d,this.b*t.c-this.c*t.b)}dot(t){return this.b*t.b+this.c*t.c+this.d*t.d}normalize(){let t=Math.sqrt(this.dot(this));return new O(this.a/t,this.b/t,this.c/t,this.d/t)}makenormal(){return new O(0,this.b,this.c,this.d).normalize()}normalizeplane(){let t=Math.hypot(this.b,this.c,this.d);return new O(this.a/t,this.b/t,this.c/t,this.d/t)}smul(t){return new O(this.a*t,this.b*t,this.c*t,this.d*t)}sum(t){return new O(this.a+t.a,this.b+t.b,this.c+t.c,this.d+t.d)}sub(t){return new O(this.a-t.a,this.b-t.b,this.c-t.c,this.d-t.d)}angle(){return 2*Math.acos(this.a)}invrot(){return new O(this.a,-this.b,-this.c,-this.d)}det3x3(t,r,n,l,o,i,a,s,f){return t*(o*f-i*s)+r*(i*a-l*f)+n*(l*s-o*a)}rotateplane(t){let r=t.mul(new O(0,this.b,this.c,this.d)).mul(t.invrot());return r.a=this.a,r}orthogonal(){let t=Math.abs(this.b),r=Math.abs(this.c),n=Math.abs(this.d);return t<r&&t<n?this.cross(new O(0,1,0,0)).normalize():r<t&&r<n?this.cross(new O(0,0,1,0)).normalize():this.cross(new O(0,0,0,1)).normalize()}pointrotation(t){let r=this.normalize();if(t=t.normalize(),r.sub(t).len()<1e-9)return new O(1,0,0,0);let n=r.sum(t);n.len()<1e-9?n=n.orthogonal():n=n.normalize();let l=r.cross(n);return l.a=r.dot(n),l}unproject(t){return this.sum(t.smul(-this.dot(t)/(this.len()*t.len())))}rotatepoint(t){return t.mul(this).mul(t.invrot())}rotateface(t){return t.map(r=>r.rotatepoint(this))}intersect3(t,r){let n=this.det3x3(this.b,this.c,this.d,t.b,t.c,t.d,r.b,r.c,r.d);return Math.abs(n)<1e-9?!1:new O(0,this.det3x3(this.a,this.c,this.d,t.a,t.c,t.d,r.a,r.c,r.d)/n,this.det3x3(this.b,this.a,this.d,t.b,t.a,t.d,r.b,r.a,r.d)/n,this.det3x3(this.b,this.c,this.a,t.b,t.c,t.a,r.b,r.c,r.a)/n)}side(t){return t>1e-9?1:t<-1e-9?-1:0}cutface(t){let r=this.a,n=0,l=null;for(let o=0;o<t.length;o++)n|=1<<this.side(t[o].dot(this)-r)+1;if((n&5)===5){l=[];let o=t.map(i=>this.side(i.dot(this)-r));for(let i=-1;i<=1;i+=2){let a=[];for(let s=0;s<t.length;s++){(o[s]===i||o[s]===0)&&a.push(t[s]);let f=(s+1)%t.length;if(o[s]+o[f]===0&&o[s]!==0){let g=t[s].dot(this)-r,c=t[f].dot(this)-r,u=g/(g-c),p=t[s].smul(1-u).sum(t[f].smul(u));a.push(p)}}l.push(a)}}return l}cutfaces(t){let r=[];for(let n=0;n<t.length;n++){let l=t[n],o=this.cutface(l);o?(r.push(o[0]),r.push(o[1])):r.push(l)}return r}faceside(t){let r=this.a;for(let n=0;n<t.length;n++){let l=this.side(t[n].dot(this)-r);if(l!==0)return l}throw new Error("Could not determine side of plane in faceside")}sameplane(t){let r=this.normalize(),n=t.normalize();return r.dist(n)<1e-9||r.dist(n.smul(-1))<1e-9}makecut(t){return new O(t,this.b,this.c,this.d)}}});function sf(){let e=Math.sqrt(.5);return[new O(e,e,0,0),new O(e,0,e,0)]}function ff(){return[new O(.5,.5,.5,.5),new O(.5,.5,.5,-.5)]}function uf(){let e=2*Math.PI/10,t=.5+.3*Math.sqrt(5),r=.5+.1*Math.sqrt(5),n=Math.sqrt(t*t+r*r);return t/=n,r/=n,[new O(Math.cos(e),t*Math.sin(e),r*Math.sin(e),0),new O(.5,.5,.5,.5)]}function gf(){let e=.16666666666666666+Math.sqrt(5)/6,t=2/3+Math.sqrt(5)/3,r=Math.sqrt(e*e+t*t);e/=r,t/=r;let n=2*Math.PI/6;return[new O(Math.cos(n),e*Math.sin(n),t*Math.sin(n),0),new O(Math.cos(n),-e*Math.sin(n),t*Math.sin(n),0)]}function cf(){let e=Math.sqrt(.5);return[new O(.5,.5,.5,.5),new O(e,0,0,e)]}function pf(e){let t=[new O(1,0,0,0)];for(let r=0;r<t.length;r++)for(let n=0;n<e.length;n++){let l=e[n].mul(t[r]),o=l.smul(-1),i=!1;for(let a=0;a<t.length;a++)if(l.dist(t[a])<Ho||o.dist(t[a])<Ho){i=!0;break}i||t.push(l)}return t}function $0(e,t){let r=[],n=[];for(let l=0;l<t.length;l++){let o=e.rotateplane(t[l]),i=!1;for(let a=0;a<r.length;a++)if(o.dist(r[a])<Ho){i=!0;break}i||(r.push(o),n.push(t[l]))}return n}function ea(e){let t=[];for(let r=1;r<e.length;r++)for(let n=r+1;n<e.length;n++){let l=af(0,r,n,e);if(l){let o=!1;for(let i=0;i<t.length;i++)if(l.dist(t[i])<Ho){o=!0;break}o||t.push(l)}}for(;;){let r=!1;for(let n=0;n<t.length;n++){let l=(n+1)%t.length;if(e[0].dot(t[n].cross(t[l]))<0){let o=t[n];t[n]=t[l],t[l]=o,r=!0}}if(!r)break}return t}var Ho,mf=U(()=>{Vo();Ho=1e-9});function Yo(e,t){let r=e[0].p.length,n=tf(r),l=[],o=[],i=[],a=[],s=[];function f(p){for(let m=p.p.length-1;m>=0;m--){let L=p.p[m];if(L!==m){if(!l[m][L])return!1;p=p.mul(o[m][L])}}return!0}function g(p,m,L){a[p].push(m),s[p].push(L);for(let R=0;R<l[p].length;R++)l[p][R]&&c(p,l[p][R].mul(m),L+i[p][R])}function c(p,m,L){let R=m.p[p];if(!l[p][R]){l[p][R]=m,o[p][R]=m.inv(),i[p][R]=L;for(let y=0;y<a[p].length;y++)c(p,m.mul(a[p][y]),L+s[p][y]);return}let h=m.mul(o[p][R]);f(h)||g(p-1,h,L+i[p][R])}function u(){l=[],o=[],a=[],i=[],s=[];for(let L=0;L<r;L++)l.push([]),o.push([]),i.push([]),a.push([]),s.push([]),l[L][L]=n,o[L][L]=n,i[L][L]=0;let p=0,m=1;for(let L=0;L<e.length;L++){g(r-1,e[L],1),m=1;let R=0,h=0,y=[],A=new Lf;for(let E=0;E<r;E++){let v=0,K=0;for(let M=0;M<r;M++)l[E][M]&&(v++,K+=i[E][M],E!==M&&p++);R+=a[E].length,m*=v,v>1&&A.multiply(v);let Z=K/v;y.push(Z),h+=Z}t(\`\${L}: sz \${m} T \${R} sol \${h} none \${p} mults \${A.toString()}\`)}return m}return u()}var Lf,ta=U(()=>{Qo();Lf=class{constructor(){this.mult=[]}multiply(t){for(let r=2;r*r<=t;r++)for(;t%r===0;)this.mult[r]!==void 0?this.mult[r]++:this.mult[r]=1,t/=r;t>1&&(this.mult[t]!==void 0?this.mult[t]++:this.mult[t]=1)}toString(){let t="";for(let r=0;r<this.mult.length;r++)this.mult[r]!==void 0&&(t!==""&&(t+="*"),t+=r,this.mult[r]>1&&(t+=\`^\${this.mult[r]}\`));return t}}});function vm(e,t){let r=[];for(let n of e)for(let l of t)r.push(l.rotate(n));return r}function km(){return{4:[["F","D","L","R"]],6:[["F","D","L","U","R"],["R","F","","B",""]],8:[["F","D","L","R"],["D","F","BR",""],["BR","D","","BB"],["BB","BR","U","BL"]],12:[["U","F","","","",""],["F","U","R","C","A","L"],["R","F","","","E",""],["E","R","","BF","",""],["BF","E","BR","BL","I","D"]],20:[["R","C","F","E"],["F","R","L","U"],["L","F","A",""],["E","R","G","I"],["I","E","S","H"],["S","I","J","B"],["B","S","K","D"],["K","B","M","O"],["O","K","P","N"],["P","O","Q",""]]}}function zm(){return{4:{F:"#00ff00",D:"#ffff00",L:"#ff0000",R:"#0000ff"},6:{U:"#ffffff",F:"#00ff00",R:"#ff0000",D:"#ffff00",B:"#0000ff",L:"#ff8000"},8:{U:"#ffffff",F:"#ff0000",R:"#00bb00",D:"#ffff00",BB:"#1122ff",L:"#9524c5",BL:"#ff8800",BR:"#aaaaaa"},12:{U:"#ffffff",F:"#006633",R:"#ff0000",C:"#ffffd0",A:"#3399ff",L:"#660099",E:"#ff66cc",BF:"#99ff00",BR:"#0000ff",BL:"#ffff00",I:"#ff6633",D:"#999999"},20:{R:"#db69f0",C:"#178fde",F:"#23238b",E:"#9cc726",L:"#2c212d",U:"#177fa7",A:"#e0de7f",G:"#2b57c0",I:"#41126b",S:"#4b8c28",H:"#7c098d",J:"#7fe7b4",B:"#85fb74",K:"#3f4bc3",D:"#0ff555",M:"#f1c2c8",O:"#58d340",P:"#c514f2",N:"#14494e",Q:"#8b1be1"}}}function Cm(){return{4:["F","D","L","R"],6:["U","D","F","B","L","R"],8:["F","BB","D","U","BR","L","R","BL"],12:["L","E","F","BF","R","I","U","D","BR","A","BL","C"],20:["L","S","E","O","F","B","I","P","R","K","U","D","J","A","Q","H","G","N","M","C"]}}function Pm(){return{4:[["FLR",[0,1,0]],["F",[0,0,1]]],6:[["U",[0,1,0]],["F",[0,0,1]]],8:[["U",[0,1,0]],["F",[0,0,1]]],12:[["U",[0,1,0]],["F",[0,0,1]]],20:[["GUQMJ",[0,1,0]],["F",[0,0,1]]]}}function Jo(e,t){for(let r=0;r<e.length;r++)if(e[r][0].dist(t)<Ee)return r;throw new Error("Element not found")}function Bf(){return jo}function Rf(e){return jo[e]}function Ml(e){let t=e.split(/ /).filter(Boolean);if(t.length%2===0)return null;let r=t[0];if(r!=="o"&&r!=="c"&&r!=="i"&&r!=="d"&&r!=="t")return null;let n=[];for(let l=1;l<t.length;l+=2){if(t[l]!=="f"&&t[l]!=="v"&&t[l]!=="e")return null;n.push({cutType:t[l],distance:parseFloat(t[l+1])})}return{shape:r,cuts:n}}function na(e,t={}){let r=Ml(e);if(r===null)throw new Error("Could not parse the puzzle description");let n=new Xo(r,Object.assign({},{allMoves:!0},t));return n.allstickers(),n.genperms(),n}function Cn(e,t){return na(jo[e],t)}function Mm(e,t,r){let n=!1;r-t[1]<t[0]&&(e=[e[2],e[3],e[0],e[1]],t=[r-t[1],r-t[0]],n=!0);let l=e[0],o="";if(t[0]===0&&t[1]===r)l=l+"v";else if(t[0]===t[1])t[1]>0&&(o=String(t[1]+1));else if(t[0]===0)l=l.toLowerCase(),t[1]>1&&(o=String(t[1]+1));else throw\`We only support slice and outer block moves right now. \${t}\`;return[o+l,n]}function Nm(e,t){let r=[],n=0;for(;n<e.length;){n>0&&n<e.length&&e[n]==="_"&&n++;let l="";for(let o of t)e.substr(n).startsWith(o[1])&&o[1].length>l.length&&(l=o[1]);if(l!=="")r.push(l),n+=l.length;else throw new Error("Could not split "+e+" into face names.")}return r}function Zo(e,t){return[e.b/t,-e.c/t,e.d/t]}function ra(e,t){let r=[],n=e.length;for(let l=0;l<n;l++){let o=Zo(e.get(n-l-1),t);r[3*l]=o[0],r[3*l+1]=o[1],r[3*l+2]=o[2]}return r}var zn,Gl,Ee,Em,_m,Xo,Qr,Ko=U(()=>{Le();T2();Q0();q0();Qo();lf();of();mf();Vo();ta();zn=class{constructor(t){this.coords=new Array(t.length*3);for(let r=0;r<t.length;r++)this.coords[3*r]=t[r].b,this.coords[3*r+1]=t[r].c,this.coords[3*r+2]=t[r].d;this.length=t.length}get(t){return new O(0,this.coords[3*t],this.coords[3*t+1],this.coords[3*t+2])}centermass(){let t=0,r=0,n=0;for(let l=0;l<this.length;l++)t+=this.coords[3*l],r+=this.coords[3*l+1],n+=this.coords[3*l+2];return new O(0,t/this.length,r/this.length,n/this.length)}rotate(t){let r=[];for(let n=0;n<this.length;n++)r.push(this.get(n).rotatepoint(t));return new zn(r)}rotateforward(){let t=[];for(let r=1;r<this.length;r++)t.push(this.get(r));return t.push(this.get(0)),new zn(t)}},Gl=class{constructor(t,r,n){this.face=t;this.left=r;this.right=n}split(t){let r=t.cutface(this.face);return r!==null&&(this.left===void 0?(this.left=new Gl(r[0]),this.right=new Gl(r[1])):(this.left=this.left?.split(t),this.right=this.right?.split(t))),this}collect(t,r){return this.left===void 0?t.push(new zn(this.face)):r?(this.left?.collect(t,!1),this.right?.collect(t,!0)):(this.right?.collect(t,!1),this.left?.collect(t,!0)),t}};Ee=1e-9,Em="PuzzleGeometry 0.1 Copyright 2018 Tomas Rokicki.",_m=!1;Xo=class{constructor(t,r){this.puzzleDescription=t;this.cmovesbyslice=[];this.duplicatedFaces=[];this.duplicatedCubies=[];this.fixedCubie=-1;this.net=[];this.colors=[];this.faceorder=[];this.faceprecedence=[];this.notationMapper=new En;this.addNotationMapper="";this.setReidOrder=!1;let n="genperms";this.options=new j0(r),this.options.verbosity>0&&console.log(this.header("# ")),this.create(t)}create(t){let{shape:r,cuts:n}=t;this.moveplanes=[],this.moveplanes2=[],this.faces=[],this.cubies=[];let l=null;switch(r){case"c":l=sf();break;case"o":l=cf();break;case"i":l=gf();break;case"t":l=ff();break;case"d":l=uf();break;default:throw new Error("Bad shape argument: "+r)}this.rotations=pf(l),this.options.verbosity&&console.log("# Rotations: "+this.rotations.length);let o=l[0];this.baseplanerot=$0(o,this.rotations);let i=this.baseplanerot.map(D=>o.rotateplane(D));this.baseplanes=i,this.baseFaceCount=i.length;let a=km()[i.length];this.net=a,this.colors=zm()[i.length],this.faceorder=Cm()[i.length],this.options.verbosity>0&&console.log("# Base planes: "+i.length);let s=ea(i),f=new O(0,0,0,0);this.options.verbosity>0&&console.log("# Face vertices: "+s.length);let g=i[0].makenormal(),c=s[0].sum(s[1]).makenormal(),u=s[0].makenormal(),p=new O(1,g.b,g.c,g.d);this.options.verbosity>0&&console.log("# Boundary is "+p);let L=$0(p,this.rotations).map(D=>p.rotateplane(D)),R=ea(L);this.edgedistance=R[0].sum(R[1]).smul(.5).dist(f),this.vertexdistance=R[0].dist(f);let h=[],y=[],A=!1,E=!1,v=!1;for(let D of n){let x=null,G=0;switch(D.cutType){case"f":x=g,G=1,A=!0;break;case"v":x=u,G=this.vertexdistance,v=!0;break;case"e":x=c,G=this.edgedistance,E=!0;break;default:throw new Error("Bad cut argument: "+D.cutType)}h.push(x.makecut(D.distance)),y.push(D.distance<G)}this.options.addRotations&&(A||h.push(g.makecut(10)),v||h.push(u.makecut(10)),E||h.push(c.makecut(10))),this.basefaces=[];for(let D of this.baseplanerot){let x=D.rotateface(R);this.basefaces.push(new zn(x))}let K=[],Z=[],M=[],ne=[],b=R.length;function k(D,x,G){for(let W of D)if(W[0].dist(x)<Ee){W.push(G);return}D.push([x,G])}for(let D=0;D<this.baseplanerot.length;D++){let x=this.baseplanerot[D].rotateface(R);for(let G=0;G<x.length;G++){let W=(G+1)%x.length,le=x[G].sum(x[W]).smul(.5);k(ne,le,D)}}let P=[];for(let D=0;D<this.baseplanerot.length;D++){let x=this.baseplanerot[D].rotateface(R),G=[];for(let W=0;W<x.length;W++){let le=(W+1)%x.length,He=x[W].sum(x[le]).smul(.5),ut=ne[Jo(ne,He)];if(D===ut[1])G.push(ut[2]);else if(D===ut[2])G.push(ut[1]);else throw new Error("Could not find edge")}P.push(G)}let S={},w=[];w.push(a[0][0]),S[a[0][0]]=0,w[P[0][0]]=a[0][1],S[a[0][1]]=P[0][0];for(let D of a){let x=D[0],G=S[x];if(G===void 0)throw new Error("Bad edge description; first edge not connected");let W=-1;for(let le=0;le<P[G].length;le++){let He=w[P[G][le]];if(He!==void 0&&He===D[1]){W=le;break}}if(W<0)throw new Error("First element of a net not known");for(let le=2;le<D.length;le++){if(D[le]==="")continue;let He=P[G][(le+W-1)%b],ut=w[He];if(ut!==void 0&&ut!==D[le])throw new Error("Face mismatch in net");w[He]=D[le],S[D[le]]=He}}for(let D=0;D<w.length;D++){let x=!1;for(let G=0;G<this.faceorder.length;G++)if(w[D]===this.faceorder[G]){this.faceprecedence[D]=G,x=!0;break}if(!x)throw new Error("Could not find face "+w[D]+" in face order list "+this.faceorder)}for(let D=0;D<this.baseplanerot.length;D++){let x=this.baseplanerot[D].rotateface(R),G=p.rotateplane(this.baseplanerot[D]),W=w[D];K.push([x,W]),Z.push([G,W])}for(let D=0;D<this.baseplanerot.length;D++){let x=this.baseplanerot[D].rotateface(R),G=w[D];for(let W=0;W<x.length;W++){let le=(W+1)%x.length,He=x[W].sum(x[le]).smul(.5),ut=(W+2)%x.length,zp=x[le].sum(x[ut]).smul(.5),Cp=Jo(ne,He),Pp=Jo(ne,zp);k(M,x[le],[G,Pp,Cp])}}this.swizzler=new zl(K.map(D=>D[1]));let z=this.swizzler.prefixFree?"":"_";for(let D=0;D<ne.length;D++){if(ne[D].length!==3)throw new Error("Bad length in edge names "+ne[D]);let x=w[ne[D][1]],G=w[ne[D][2]];this.faceprecedence[ne[D][1]]<this.faceprecedence[ne[D][2]]?x=x+z+G:x=G+z+x,ne[D]=[ne[D][0],x]}for(let D=0;D<M.length;D++){if(M[D].length<4)throw new Error("Bad length in vertex names");let x=1;for(let W=2;W<M[D].length;W++)this.faceprecedence[S[M[D][W][0]]]<this.faceprecedence[S[M[D][x][0]]]&&(x=W);let G="";for(let W=1;W<M[D].length;W++){W===1?G=M[D][x][0]:G=G+z+M[D][x][0];for(let le=1;le<M[D].length;le++)if(M[D][x][1]===M[D][le][2]){x=le;break}}M[D]=[M[D][0],G]}this.options.verbosity>1&&(console.log("# Face precedence list: "+this.faceorder.join(" ")),console.log("# Face names: "+K.map(D=>D[1]).join(" ")),console.log("# Edge names: "+ne.map(D=>D[1]).join(" ")),console.log("# Vertex names: "+M.map(D=>D[1]).join(" ")));let Q=[];for(let D of Z)Q.push([D[0].makenormal(),D[1],"f"]);for(let D of ne)Q.push([D[0].makenormal(),D[1],"e"]);for(let D of M)Q.push([D[0].makenormal(),D[1],"v"]);this.facenames=K,this.faceplanes=Z,this.edgenames=ne,this.vertexnames=M,this.geonormals=Q;let H=Q.map(D=>D[1]);this.swizzler.setGripNames(H),this.options.verbosity>0&&console.log("# Distances: face "+1+" edge "+this.edgedistance+" vertex "+this.vertexdistance);for(let D=0;D<h.length;D++)for(let x of this.rotations){let G=h[D].rotateplane(x),W=!1;for(let le of this.moveplanes)if(G.sameplane(le)){W=!0;break}W||(this.moveplanes.push(G),y[D]&&this.moveplanes2.push(G))}let ce=new Gl(R),Re=this.moveplanes2.slice(),Ue=31;for(let D=0;D<Re.length;D++){let x=D+Math.floor((Re.length-D)*(Ue/65536));ce=ce.split(Re[x]),Re[x]=Re[D],Ue=(Ue*1657+101)%65536}let ve=ce.collect([],!0);this.faces=ve,this.options.verbosity>0&&console.log("# Faces is now "+ve.length),this.stickersperface=ve.length;let zt=[],Te=qo(R);for(let D of this.rotations){let x=D.rotateface(R);Te.dist(qo(x))<Ee&&zt.push(D)}let nt=new Array(ve.length),ze=[];for(let D=0;D<ve.length;D++){let x=ve[D].centermass();ze.push([Te.dist(x),x,D])}ze.sort((D,x)=>D[0]-x[0]);for(let D=0;D<ve.length;D++){let x=ze[D][2];if(!nt[x]){nt[x]=!0;for(let G of zt){let W=ve[x].rotate(G),le=W.centermass();for(let He=D+1;He<ve.length&&!(ze[He][0]-ze[D][0]>Ee);He++){let ut=ze[He][2];if(!nt[ut]&&le.dist(ze[He][1])<Ee){nt[ut]=!0,ve[ut]=W;break}}}}}this.shortedge=1e99;for(let D of ve)for(let x=0;x<D.length;x++){let G=(x+1)%D.length,W=D.get(x).dist(D.get(G));W<this.shortedge&&(this.shortedge=W)}this.options.verbosity>0&&console.log("# Short edge is "+this.shortedge),r==="c"&&A&&!E&&!v&&(this.addNotationMapper="NxNxNCubeMapper",this.setReidOrder=!0),r==="c"&&v&&!A&&!E&&(this.addNotationMapper="SkewbMapper"),r==="t"&&(v||A)&&!E&&(this.addNotationMapper="PyraminxOrTetraminxMapper"),r==="o"&&A&&(this.notationMapper=new Cl(this.swizzler,new zl(["F","D","L","BL","R","U","BR","B"])),!E&&!v&&(this.addNotationMapper="FTOMapper")),r==="d"&&A&&(this.addNotationMapper="MegaminxMapper",this.notationMapper=new Cl(this.swizzler,new zl(["U","F","L","BL","BR","R","FR","FL","DL","B","DR","D"])))}keyface(t){return this.keyface2(t.centermass())}keyface2(t){let r="",n=String.fromCharCode;for(let l of this.moveplanesets)if(l.length>0){let o=t.dot(l[0]),i=0,a=1;for(;a*2<=l.length;)a*=2;for(;a>0;a>>=1)i+a<=l.length&&o>l[i+a-1].a&&(i+=a);if(i<47)r=r+n(33+i);else if(i<47+47*47)r=r+n(33+47+Math.floor(i/47)-1)+n(33+i%47);else if(i<47+47*47+47*47*47)r=r+n(33+47+Math.floor((i-47)/(47*47)-1))+n(33+47+Math.floor((i-47)/47)%47)+n(33+i%47);else throw Error("Too many slices for cubie encoding")}return r}keyface3(t){let r=t.centermass(),n=[];for(let l of this.moveplanesets)if(l.length>0){let o=r.dot(l[0]),i=0,a=1;for(;a*2<=l.length;)a*=2;for(;a>0;a>>=1)i+a<=l.length&&o>l[i+a-1].a&&(i+=a);n.push(i)}return n}findface(t){let r=this.keyface2(t),n=this.facelisthash.get(r);if(n.length===1)return n[0];for(let l=0;l+1<n.length;l++){let o=this.facelisthash.get(r)[l];if(Math.abs(t.dist(this.facecentermass[o]))<Ee)return o}return n[n.length-1]}project2d(t,r,n){let l=this.facenames[t][0],o=(r+1)%l.length,i=this.baseplanes[t],a=l[o].sub(l[r]),s=a.len();a=a.normalize();let f=a.cross(i).normalize(),g=n[1].sub(n[0]),c=g.len()/s;g=g.normalize();let u=g.b,p=g.c,m=a.smul(u).sub(f.smul(p)).smul(c),L=f.smul(u).sum(a.smul(p)).smul(c),R=new O(0,n[0].b-m.dot(l[r]),n[0].c-L.dot(l[r]),0);return[m,L,R]}allstickers(){let t="allstickers";this.faces=vm(this.baseplanerot,this.faces),this.options.verbosity>0&&console.log("# Total stickers is now "+this.faces.length),this.facecentermass=new Array(this.faces.length);for(let b=0;b<this.faces.length;b++)this.facecentermass[b]=this.faces[b].centermass();let r=[],n=[];for(let b of this.moveplanes){let k=b.makenormal(),P=!1;for(let S of n)k.sameplane(S.makenormal())&&(P=!0);P||(n.push(k),r.push([]))}for(let b of this.moveplanes2){let k=b.makenormal();for(let P=0;P<n.length;P++)if(k.sameplane(n[P])){r[P].push(b);break}}for(let b=0;b<r.length;b++){let k=r[b].map(S=>S.normalizeplane()),P=n[b];for(let S=0;S<k.length;S++)k[S].makenormal().dist(P)>Ee&&(k[S]=k[S].smul(-1));k.sort((S,w)=>S.a-w.a),r[b]=k}this.moveplanesets=r,this.moveplanenormals=n;let l=r.map(b=>b.length);this.options.verbosity>0&&console.log("# Move plane sets: "+l);let o=[];for(let b=0;b<r.length;b++)o.push([]);for(let b of this.rotations){if(Math.abs(Math.abs(b.a)-1)<Ee)continue;let k=b.makenormal();for(let P=0;P<r.length;P++)if(k.sameplane(n[P])){o[P].push(b);break}}this.moverotations=o;for(let b=0;b<o.length;b++){let k=o[b],P=k[0].makenormal();for(let S=0;S<k.length;S++)P.dist(k[S].makenormal())>Ee&&(k[S]=k[S].smul(-1));k.sort((S,w)=>S.angle()-w.angle()),o[b][0].dot(n[b])<0&&k.reverse()}let i=o.map(b=>1+b.length);this.movesetorders=i;let a=[],s="?";for(let b=0;b<r.length;b++){let k=n[b],P=null,S=null;for(let w of this.geonormals){let z=k.dot(w[0]);Math.abs(z-1)<Ee?(S=[w[1],w[2]],s=w[2]):Math.abs(z+1)<Ee&&(P=[w[1],w[2]],s=w[2])}if(S===null||P===null)throw new Error("Saw positive or negative sides as null");a.push([S[0],S[1],P[0],P[1],1+r[b].length]),this.addNotationMapper==="NxNxNCubeMapper"&&s==="f"&&(this.notationMapper=new Oo(1+r[b].length),this.addNotationMapper=""),this.addNotationMapper==="SkewbMapper"&&r[0].length===1&&(this.notationMapper=new Wo(this.swizzler),this.addNotationMapper=""),this.addNotationMapper==="PyraminxOrTetraminxMapper"&&(r[0].length===2&&r[0][0].a===.333333333333333&&r[0][1].a===1.66666666666667?(this.notationMapper=new Pl(this.swizzler),this.addNotationMapper=""):(this.notationMapper=new Io(this.swizzler),this.addNotationMapper="")),this.addNotationMapper==="MegaminxMapper"&&s==="f"&&(1+r[b].length===3&&(this.notationMapper=new To(this.notationMapper)),this.addNotationMapper=""),this.addNotationMapper==="FTOMapper"&&s==="f"&&(1+r[b].length===3&&(this.notationMapper=new Go(this.notationMapper,this.swizzler)),this.addNotationMapper="")}this.movesetgeos=a;let f=new Map,g=this.faces;for(let b=0;b<g.length;b++){let k=g[b],P=this.keyface(k);if(!f.get(P))f.set(P,[b]);else{let S=f.get(P);if(S.push(b),S.length===this.baseFaceCount){this.options.verbosity>0&&console.log("# Splitting core.");for(let w=0;w<S.length;w++){let z=P+" "+w;f.set(z,[S[w]])}}}}this.facelisthash=f,this.options.verbosity>0&&console.log("# Cubies: "+f.size);let c=[],u=[],p=[];for(let b of f.values())if(b.length!==this.baseFaceCount){if(b.length>1){let k=b.map(z=>g[z].centermass()),P=qo(k);for(let z=0;b.length>2;z++){let Q=!1;for(let H=0;H<b.length;H++){let ce=(H+1)%b.length;if(P.dot(k[H].cross(k[ce]))<0){let Re=k[H];k[H]=k[ce],k[ce]=Re;let Ue=b[H];b[H]=b[ce],b[ce]=Ue,Q=!0}}if(!Q)break;if(z>1e3)throw new Error("Bad epsilon math; too close to border")}let S=0,w=b[S];for(let z=1;z<b.length;z++){let Q=b[z];this.faceprecedence[this.getfaceindex(Q)]<this.faceprecedence[this.getfaceindex(w)]&&(S=z,w=Q)}if(S!==0){let z=b.slice();for(let Q=0;Q<b.length;Q++)b[Q]=z[(S+Q)%b.length]}}for(let k=0;k<b.length;k++){let P=b[k];u[P]=c.length,p[P]=k}c.push(b)}this.cubies=c,this.facetocubie=u,this.facetoord=p;let m=["?","CENTERS","EDGES","CORNERS","C4RNER","C5RNER"],L=[],R=[0,0,0,0,0,0],h=[],y=[],A=0,E=[],v=[],K=[],Z=[],M=b=>c[b].map(k=>this.getfaceindex(k)).join(" "),ne=[];for(let b=0;b<c.length;b++){if(y[b])continue;let k=c[b];if(k.length===0)continue;let P={},S=0;K.push(0),ne.push([]);let w=k.length,z=R[w]++,Q=m[w];(Q===void 0||w===this.baseFaceCount)&&(Q="CORE"),Q=Q+(z===0?"":z+1),L[A]=Q,h[A]=w;let H=[b],ce=0;for(y[b]=!0;ce<H.length;){let Re=H[ce++],Ue=M(Re);if((k.length>1||P[Ue]===void 0)&&(P[Ue]=S++),Z[Re]=P[Ue],E[Re]=A,ne[A].push(Re),v[Re]=K[A]++,H.length<this.rotations.length){let ve=this.facecentermass[c[Re][0]];for(let zt of o){let Te=this.facetocubie[this.findface(ve.rotatepoint(zt[0]))];y[Te]||(H.push(Te),y[Te]=!0)}}}A++}if(this.setReidOrder&&4<=this.stickersperface&&this.stickersperface<=9){let b=[["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],["UFR","URB","UBL","ULF","DRF","DFL","DLB","DBR"],["U","L","F","R","B","D"]],k={};for(let P of b)for(let S=0;S<P.length;S++){let w=0;for(let z=0;z<P[S].length;z++)w|=1<<P[S].charCodeAt(z)-65;k[w]=S}for(let P of ne)for(let S of P){let w=0;for(let z of c[S])w|=1<<this.facenames[this.getfaceindex(z)][1].charCodeAt(0)-65;v[S]=k[w]}}if(this.cubiesetnums=E,this.cubieordnums=v,this.cubiesetnames=L,this.cubieords=K,this.orbitoris=h,this.cubievaluemap=Z,this.cubiesetcubies=ne,this.options.fixedPieceType!==null){for(let b=0;b<c.length;b++)if(this.options.fixedPieceType==="v"&&c[b].length>2||this.options.fixedPieceType==="e"&&c[b].length===2||this.options.fixedPieceType==="f"&&c[b].length===1){this.fixedCubie=b;break}if(this.fixedCubie<0)throw new Error("Could not find a cubie of type "+this.options.fixedPieceType+" to fix.")}this.options.verbosity>0&&console.log("# Cubie orbit sizes "+K)}unswizzle(t){let r=this.notationMapper.notationToInternal(t);return r===null?"":this.swizzler.unswizzle(r.family)}stringToBlockMove(t){let r=RegExp("^(([0-9]+)-)?([0-9]+)?([^0-9]+)([0-9]+'?)?$"),n=t.match(r);if(n===null)throw new Error("Bad move passed "+t);let l=n[4],o,i;if(n[2]!==void 0){if(n[3]===void 0)throw new Error("Missing second number in range");o=parseInt(n[2],10)}n[3]!==void 0&&(i=parseInt(n[3],10));let a="1",s=1;return n[5]!==void 0&&(a=n[5],a[0]==="'"&&(a="-"+a.substring(1)),s=parseInt(a,10)),new B(new C(l,i,o),s)}parseMove(t){let r=this.notationMapper.notationToInternal(t);if(r===null)throw new Error("Bad move "+t.family);t=r;let n=t.family,l=!1;if(n.endsWith("v")&&n[0]<="Z"){if(t.innerLayer!==void 0||t.outerLayer!==void 0)throw new Error("Cannot use a prefix with full cube rotations");n=n.slice(0,-1),l=!0}n.endsWith("w")&&n[0]<="Z"&&(n=n.slice(0,-1).toLowerCase());let o,i=-1,a=this.swizzler.unswizzle(n),s=!1;for(let c=0;c<this.movesetgeos.length;c++){let u=this.movesetgeos[c];a===u[0]&&(s=!0,o=u,i=c),a===u[2]&&(s=!1,o=u,i=c)}let f=1,g=1;if(n.toUpperCase()!==n&&(g=2),o===void 0)throw new Error("Bad grip in move "+t.family);if(t.outerLayer!==void 0&&(f=t.outerLayer),t.innerLayer!==void 0&&(t.outerLayer===void 0?(g=t.innerLayer,n<="Z"?f=g:f=1):g=t.innerLayer),f--,g--,l&&(f=0,g=this.moveplanesets[i].length),f<0||f>this.moveplanesets[i].length||g<0||g>this.moveplanesets[i].length)throw new Error("Bad slice spec "+f+" "+g+" vs "+this.moveplanesets[i].length);if(!_m&&f===0&&g===this.moveplanesets[i].length&&!l)throw new Error("! full puzzle rotations must be specified with v suffix.");return[void 0,i,f,g,s,t.amount]}parsemove(t){let r=this.parseMove(this.stringToBlockMove(t));return r[0]=t,r}genperms(){let t="genperms";if(this.cmovesbyslice.length>0)return;let r=[];if(this.options.orientCenters){for(let n=0;n<this.cubies.length;n++)if(this.cubies[n].length===1){let l=this.cubies[n][0],o=this.getfaceindex(l);if(this.basefaces[o].centermass().dist(this.facecentermass[l])<Ee){let i=this.basefaces[o].length;for(let a=1;a<i;a++)this.cubies[n].push(this.cubies[n][a-1]);this.duplicatedFaces[l]=i,this.duplicatedCubies[n]=i,this.orbitoris[this.cubiesetnums[n]]=i}}}for(let n=0;n<this.moveplanesets.length;n++){let l=this.moveplanesets[n],o=[],i=[l.length+1,0],a=1;for(;a*2<=l.length;)a*=2;for(let g=0;g<this.faces.length;g++){let c=0;if(l.length>0){let u=this.facecentermass[g].dot(l[0]);for(let p=a;p>0;p>>=1)c+p<=l.length&&u>l[c+p-1].a&&(c+=p);c=l.length-c}for(o.push(c);i.length<=c;)i.push(0);i[c]++}let s=new Array(i.length);for(let g=0;g<i.length;g++)s[g]=[];let f=[];for(let g=0;g<this.faces.length;g++){if(o[g]<0)continue;let c=[this.facetocubie[g],this.facetoord[g]],u=this.facecentermass[g],p=u,m=g,L=o[m];for(;;){o[m]=-1;let R=u.rotatepoint(this.moverotations[n][0]);if(R.dist(p)<Ee)break;m=this.findface(R),c.push(this.facetocubie[m],this.facetoord[m]),u=R}if(c.length>2&&this.options.orientCenters&&(this.cubies[c[0]].length===1||this.duplicatedCubies[c[0]]>1)&&this.facecentermass[g].dist(this.basefaces[this.getfaceindex(g)].centermass())<Ee){let R=this.faces[this.cubies[c[0]][0]];for(let h=0;h<c.length;h+=2){let y=this.faces[this.cubies[c[h]][0]],A=-1;for(let E=0;E<R.length;E++)if(y.get(E).dist(R.get(0))<Ee){A=E;break}if(A<0)throw new Error("Couldn't find rotation of center faces; ignoring for now.");c[h+1]=A,R=R.rotate(this.moverotations[n][0])}}if(c.length===2&&this.options.orientCenters)for(let R=1;R<this.movesetorders[n];R++)L===0?c.push(c[0],R):c.push(c[0],(this.movesetorders[n]-R)%this.movesetorders[n]);if(c.length>2&&!f[c[0]]){if(c.length!==2*this.movesetorders[n])throw new Error("Bad length in perm gen");for(let R of c)s[L].push(R)}for(let R=0;R<c.length;R+=2)f[c[R]]=!0}for(let g=0;g<s.length;g++)s[g]=s[g].slice();r.push(s)}if(this.cmovesbyslice=r,this.options.moveList){let n=[];for(let l of this.options.moveList)n.push(this.parsemove(l));this.parsedmovelist=n}this.facelisthash.clear(),this.facecentermass=[]}getboundarygeometry(){return{baseplanes:this.baseplanes,facenames:this.facenames,faceplanes:this.faceplanes,vertexnames:this.vertexnames,edgenames:this.edgenames,geonormals:this.geonormals}}getmovesets(t){let r=this.moveplanesets[t].length,n=[];if(this.parsedmovelist!==void 0)for(let l of this.parsedmovelist)l[1]===t&&(l[4]?n.push([l[2],l[3]]):n.push([r-l[3],r-l[2]]),n.push(l[5]));else if(this.options.vertexMoves&&!this.options.allMoves){let l=this.movesetgeos[t];if(l[1]!==l[3])for(let o=0;o<r;o++)l[1]!=="v"?(this.options.outerBlockMoves?n.push([o+1,r]):n.push([o+1]),n.push(1)):(this.options.outerBlockMoves?n.push([0,o]):n.push([o,o]),n.push(1))}else for(let l=0;l<=r;l++)!this.options.allMoves&&l+l===r||(this.options.outerBlockMoves?l+l>r?n.push([l,r]):n.push([0,l]):n.push([l,l]),n.push(1));if(this.fixedCubie>=0){let l=this.keyface3(this.faces[this.cubies[this.fixedCubie][0]])[t],o=[];for(let i=0;i<n.length;i+=2){let a=n[i];if(l>=a[0]&&l<=a[1])if(a[0]===0)a=[a[1]+1,r];else if(r===a[1])a=[0,a[0]-1];else throw Error("fixed cubie option would disconnect move");let s=!1;for(let f=0;f<o.length;f+=2)if(o[f][0]===a[0]&&o[f][1]===a[1]&&o[f+1]===n[i+1]){s=!0;break}s||(o.push(a),o.push(n[i+1]))}n=o}return n}graybyori(t){let r=this.cubies[t].length;return this.duplicatedCubies[t]&&(r=1),r===1&&(this.options.grayCenters||!this.options.includeCenterOrbits)||r===2&&(this.options.grayEdges||!this.options.includeEdgeOrbits)||r>2&&(this.options.grayCorners||!this.options.includeCornerOrbits)}skipbyori(t){let r=this.cubies[t].length;return this.duplicatedCubies[t]&&(r=1),r===1&&!this.options.includeCenterOrbits||r===2&&!this.options.includeEdgeOrbits||r>2&&!this.options.includeCornerOrbits}skipcubie(t){return this.skipbyori(t)}header(t){return t+Em+\`
\`+t+\`
\`}writegap(){let t=this.getOrbitsDef(!1),r=[],n=[];for(let o=0;o<t.moveops.length;o++){let i="M_"+Z0(this.notationMapper,t.movenames[o]),a=!1;i[i.length-1]==="'"&&(i=i.substring(0,i.length-1),a=!0),n.push(i),a?r.push(i+":="+t.moveops[o].toPerm().inv().toGap()+";"):r.push(i+":="+t.moveops[o].toPerm().toGap()+";")}r.push("Gen:=["),r.push(n.join(",")),r.push("];");let l=t.solved.identicalPieces();return r.push("ip:=["+l.map(o=>"["+o.map(i=>i+1).join(",")+"]").join(",")+"];"),r.push("# Size(Group(Gen));"),r.push("# Size(Stabilizer(Group(Gen), ip, OnTuplesSets));"),r.push(""),this.header("# ")+r.join(\`
\`)}writeksolve(t="PuzzleGeometryPuzzle"){let r=this.getOrbitsDef(!1);return this.header("# ")+r.toKsolve(t,this.notationMapper).join(\`
\`)}getKPuzzleDefinition(t=!0,r=!0){let l=this.getOrbitsDef(t,r).toKPuzzleDefinition(r);if(l.experimentalPuzzleDescription=this.puzzleDescription,!l)throw new Error("Missing definition!");return l}getMoveFromBits(t,r,n,l,o,i){let a=[],s=[],f=[];for(let u of this.cubieords)s.push(Nt(u)),f.push(pr(u));for(let u=t[0];u<=t[1];u++){let p=l[u];for(let m=0;m<p.length;m+=2*i){let L=p.slice(m,m+2*i),R=this.cubiesetnums[L[0]];for(let A=0;A<L.length;A+=2)L[A]=this.cubieordnums[L[A]];let h=2,y=3;n&&(h=L.length-2,y=L.length-1),s[R]===Nt(this.cubieords[R])&&(s[R]=s[R].slice(),this.orbitoris[R]>1&&!this.options.fixedOrientation&&(f[R]=f[R].slice()));for(let A=0;A<L.length;A+=2)s[R][L[(A+h)%L.length]]=L[A],this.orbitoris[R]>1&&!this.options.fixedOrientation&&(f[R][L[A]]=(L[(A+y)%L.length]-L[(A+1)%L.length]+2*this.orbitoris[R])%this.orbitoris[R])}}let g=new Yt(Nt(24),pr(24),1);for(let u=0;u<this.cubiesetnames.length;u++)if(!(o&&!o[u]))if(this.orbitoris[u]===1||this.options.fixedOrientation)s[u]===Nt(g.perm.length)?(s[u]!==g.perm&&(g=new Yt(s[u],f[u],1)),a.push(g)):a.push(new Yt(s[u],f[u],1));else{let p=new Array(f[u].length);for(let m=0;m<s[u].length;m++)p[m]=f[u][s[u][m]];a.push(new Yt(s[u],p,this.orbitoris[u]))}let c=new mr(a);return r!==1&&(c=c.mulScalar(r)),c}omitSet(t){for(let r of this.options.excludeOrbits)if(r===t)return!0;return!1}diffmvsets(t,r,n,l){for(let o=0;o<t.length;o+=2){let i=!1;for(let a=0;!i&&a<r.length;a+=2)l?t[o][0]+r[a][1]===n&&t[o][1]+r[a][0]===n&&t[o+1]===r[a+1]&&(i=!0):t[o][0]===r[a][0]&&t[o][1]===r[a][1]&&t[o+1]===r[a+1]&&(i=!0);if(!i)return!0}return!1}getOrbitsDef(t,r=!0){let n=[];if(t)for(let u=0;u<this.cubiesetnames.length;u++)n.push(1);let l=[],o=[],i=[],a=[];for(let u=0;u<this.moveplanesets.length;u++){let p=this.getmovesets(u);i.push(p),this.options.addRotations?a.push(1):a.push(0)}if(this.options.moveList&&this.options.addRotations){for(let u=0;u<this.moverotations.length;u++)a[u]=0;for(let u=0;u<this.moveplanesets.length;u++)for(let p=0;p<this.moverotations.length;p++){let m=this.moveplanenormals[u];for(let L=1;L*2<=this.movesetorders[p];L++){if(m=m.rotatepoint(this.moverotations[p][0]),a[p]&L)continue;let R=-1,h=!1;for(let A=0;A<this.moveplanenormals.length;A++)if(m.dist(this.moveplanenormals[A])<Ee){R=A;break}else if(m.dist(this.moveplanenormals[A].smul(-1))<Ee){R=A,h=!0;break}if(R<0)throw new Error("Could not find rotation");let y=i[R];(y.length!==i[u].length||this.moveplanesets[u].length!==this.moveplanesets[R].length||this.diffmvsets(y,i[u],this.moveplanesets[R].length,h))&&(a[p]|=L)}}for(let u=0;u<this.moverotations.length;u++)if(a[u]===0)a[u]=1;else if(a[u]===1)this.movesetorders[u]>3?a[u]=2:a[u]=0;else if(a[u]===3)a[u]=0;else throw new Error("Impossible addrot val")}for(let u=0;u<this.moveplanesets.length;u++)a[u]!==0&&(i[u].push([0,this.moveplanesets[u].length]),i[u].push(a[u]));for(let u=0;u<this.moveplanesets.length;u++){let p=i[u],m=this.movesetorders[u];for(let h=0;h<p.length;h+=2)for(let y=0;y<h;y+=2)if(p[h]===p[y]&&p[h+1]===p[y+1])throw new Error("Redundant moves in moveset.");let L=[];for(let h=0;h<p.length;h+=2)for(let y=p[h][0];y<=p[h][1];y++)L[y]=1;let R=this.cmovesbyslice[u];for(let h=0;h<R.length;h++){if(L[h]!==1)continue;let y=R[h];for(let A=0;A<y.length;A+=2*m){if(this.skipcubie(y[A]))continue;let E=this.cubiesetnums[y[A]];n[E]=1}}}for(let u=0;u<this.cubiesetnames.length;u++)if(!!n[u]){if(this.omitSet(this.cubiesetnames[u])){n[u]=0;continue}l.push(this.cubiesetnames[u]),o.push(new Nl(this.cubieords[u],this.options.fixedOrientation?1:this.orbitoris[u]))}let s=[];for(let u=0;u<this.cubiesetnames.length;u++){if(!n[u]||this.omitSet(this.cubiesetnames[u]))continue;let p=[],m=[];for(let L=0;L<this.cubieords[u];L++){if(t)p.push(L);else{let R=this.cubiesetcubies[u][L];p.push(this.cubievaluemap[R])}m.push(0)}s.push(new Yt(p,m,this.options.fixedOrientation?1:this.orbitoris[u]))}let f=[],g=[];if(r)for(let u=0;u<this.moveplanesets.length;u++){let m=this.moveplanesets[u].length,L=i[u],R=this.movesetgeos[u];for(let h=0;h<L.length;h+=2){let y=L[h],A=Mm(R,y,m),E=A[0],v=A[1];L[h+1]===1?f.push(E):f.push(E+L[h+1]);let K=this.getMoveFromBits(y,L[h+1],v,this.cmovesbyslice[u],n,this.movesetorders[u]);g.push(K)}}let c=new _n(l,o,new kn(s),f,g);return this.options.optimizeOrbits&&(c=c.optimize()),this.options.scrambleAmount!==0&&c.scramble(this.options.scrambleAmount),c}getScramble(t=0){let r=this.getOrbitsDef(!1);return r.transformToKTransformationData(r.getScrambleTransformation(t))}getMovesAsPerms(){return this.getOrbitsDef(!1).moveops.map(t=>t.toPerm())}showcanon(t){nf(this.getOrbitsDef(!1),t)}getsolved(){let t=[];for(let r=0;r<this.baseFaceCount;r++)for(let n=0;n<this.stickersperface;n++)t.push(r);return new mt(t)}getOrientationRotation(t){let[r,[n,l,o]]=t[0],i=new O(0,n,-l,o),[a,[s,f,g]]=t[1],c=new O(0,s,-f,g),u=null,p=null,m=this.swizzler.unswizzle(r),L=this.swizzler.unswizzle(a);for(let A of this.geonormals)m===A[1]&&(u=A[0]),L===A[1]&&(p=A[0]);if(!u)throw new Error("Could not find feature "+r);if(!p)throw new Error("Could not find feature "+a);let R=u.pointrotation(i);return p.rotatepoint(R).unproject(i).pointrotation(c.unproject(i)).mul(R)}getInitial3DRotation(){let t=this.baseFaceCount,r=null;if(this.options.puzzleOrientation?r=this.options.puzzleOrientation:this.options.puzzleOrientations&&(r=this.options.puzzleOrientations[t]),r||(r=Pm()[t]),!r)throw new Error("No default orientation?");return this.getOrientationRotation(r)}generate2dmapping(t=800,r=500,n=10,l=!1,o=.92){t-=2*n,r-=2*n;function i(S,w){let z=S[1][0]-S[0][0],Q=S[1][1]-S[0][1],H=2*Math.PI/w,ce=Math.cos(H),Re=Math.sin(H);for(let Ue=2;Ue<w;Ue++){let ve=z*ce+Q*Re;Q=Q*ce-z*Re,z=ve,S.push([S[Ue-1][0]+z,S[Ue-1][1]+Q])}}this.genperms();let f=this.getboundarygeometry().facenames[0][0].length,g=this.net;if(g===null)throw new Error("No net?");let c={},u=0,p=0,m=1,L=0;c[g[0][0]]=[[1,0],[0,0]],i(c[g[0][0]],f);for(let S of g){let w=S[0];if(!c[w])throw new Error("Bad edge description; first edge not connected.");for(let z=1;z<S.length;z++){let Q=S[z];Q===""||c[Q]||(c[Q]=[c[w][z%f],c[w][(z+f-1)%f]],i(c[Q],f))}}for(let S in c){let w=c[S];for(let z of w)u=Math.min(u,z[0]),m=Math.max(m,z[0]),p=Math.min(p,z[1]),L=Math.max(L,z[1])}let R=Math.min(t/(m-u),r/(L-p)),h=.5*(t-R*(m+u)),y=.5*(r-R*(L+p)),A={},E=this.getboundarygeometry(),v={},K=[[R+h,y],[h,y]];v[g[0][0]]=K,i(v[g[0][0]],f),A[this.facenames[0][1]]=this.project2d(0,0,[new O(0,K[0][0],K[0][1],0),new O(0,K[1][0],K[1][1],0)]);let Z=[];Z[0]=0;for(let S of g){let w=S[0];if(!v[w])throw new Error("Bad edge description; first edge not connected.");let z=-1;for(let H=0;H<E.facenames.length;H++)if(w===E.facenames[H][1]){z=H;break}if(z<0)throw new Error("Could not find first face name "+w);let Q=E.facenames[z][0];for(let H=1;H<S.length;H++){let ce=S[H];if(ce===""||v[ce])continue;v[ce]=[v[w][H%f],v[w][(H+f-1)%f]],i(v[ce],f);let Re=Z[z],Ue=Q[(Re+H)%f].sum(Q[(Re+H+f-1)%f]).smul(.5),ve=Jo(E.edgenames,Ue),zt=E.edgenames[ve][1],Te=Nm(zt,this.facenames),nt=Te[w===Te[0]?1:0],ze=-1;for(let x=0;x<E.facenames.length;x++)if(nt===E.facenames[x][1]){ze=x;break}if(ze<0)throw new Error("Could not find second face name");let D=E.facenames[ze][0];for(let x=0;x<D.length;x++)if(D[x].sum(D[(x+1)%f]).smul(.5).dist(Ue)<=Ee){let W=v[w][(H+f-1)%f],le=v[w][H%f];Z[ze]=x,A[nt]=this.project2d(ze,x,[new O(0,le[0],le[1],0),new O(0,W[0],W[1],0)]);break}}}let M=0,ne=0,b=this.getInitial3DRotation();for(let S of this.faces){l&&(S=S.rotate(b));for(let w=0;w<S.length;w++)M=Math.max(M,Math.abs(S.get(w).b)),ne=Math.max(ne,Math.abs(S.get(w).c))}let k=Math.min(r/ne/2,(t-n)/M/4);return(S,w)=>{if(l){w=w.rotatepoint(b);let z=.5*n+.25*t,Q=this.baseplanes[S].rotateplane(b).d<0?1:-1;return[n+t*.5+Q*(z-w.b*k),n+r*.5+w.c*k]}else{let z=A[this.facenames[S][1]];return[n+o*w.dot(z[0])+z[2].b,n+r-o*w.dot(z[1])-z[2].c]}}}generatesvg(t=800,r=500,n=10,l=!1){let o=this.generate2dmapping(t,r,n,l);function i(u,p,m){return'<polygon id="'+u+'" class="sticker" style="fill: '+m+'" points="'+p.map(L=>L[0]+" "+L[1]).join(" ")+\`"/>
\`}let a=this.getsolved(),s=[],f=[];for(let u=0;u<this.baseFaceCount;u++)s[u]=this.colors[this.facenames[u][1]];for(let u=0;u<this.faces.length;u++){let p=this.faces[u],m=Math.floor(u/this.stickersperface),L=[];for(let R=0;R<p.length;R++)L.push(o(m,p.get(R)));f.push(L)}let g=[];for(let u=0;u<this.baseFaceCount;u++){g.push("<g>"),g.push("<title>"+this.facenames[u][1]+\`</title>
\`);for(let p=0;p<this.stickersperface;p++){let m=u*this.stickersperface+p,L=this.facetocubie[m],R=this.facetoord[m],h=this.cubiesetnums[L],y=this.cubieordnums[L],A=this.graybyori(L)?"#808080":s[a.p[m]],E=this.cubiesetnames[h]+"-l"+y+"-o"+R;if(g.push(i(E,f[m],A)),this.duplicatedFaces[m])for(let v=1;v<this.duplicatedFaces[m];v++)E=this.cubiesetnames[h]+"-l"+y+"-o"+v,g.push(i(E,f[m],A))}g.push("</g>")}return\`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
\`+g.join("")+"</svg>"}get3d(t){let r=[],n=this.getInitial3DRotation(),l=[],o=.52*this.basefaces[0].get(0).len();for(let f=0;f<this.basefaces.length;f++){let g=this.basefaces[f].rotate(n),c=this.facenames[f][1];l.push({coords:ra(g,o),name:c})}for(let f=0;f<this.faces.length;f++){let g=Math.floor(f/this.stickersperface),c=this.facetocubie[f],u=this.facetoord[f],p=this.cubiesetnums[c],m=this.cubieordnums[c],L=this.graybyori(c)?"#808080":this.colors[this.facenames[g][1]];t?.stickerColors&&(L=t.stickerColors[f]);let R=this.faces[f].rotate(n);r.push({coords:ra(R,o),color:L,orbit:this.cubiesetnames[p],ord:m,ori:u,face:g});let h=R;if(this.duplicatedFaces[f]){let y=h.length/this.duplicatedFaces[f];for(let A=1;A<this.duplicatedFaces[f];A++){for(let E=0;E<y;E++)h=h.rotateforward();r.push({coords:ra(h,o),color:L,orbit:this.cubiesetnames[p],ord:m,ori:A,face:g,isDup:!0})}}}let i=[];for(let f=0;f<this.movesetgeos.length;f++){let g=this.movesetgeos[f],c=this.movesetorders[f];for(let u of this.geonormals)g[0]===u[1]&&g[1]===u[2]&&(i.push({coordinates:Zo(u[0].rotatepoint(n),1),quantumMove:new B(g[0]),order:c}),i.push({coordinates:Zo(u[0].rotatepoint(n).smul(-1),1),quantumMove:new B(g[2]),order:c}))}let a=this.generate2dmapping(2880,2160,0,!1,1),s=function(){let f=n.invrot();return function(g,c){let u=new O(0,c[0]*o,-c[1]*o,c[2]*o);u=u.rotatepoint(f);let p=a(g,u);return p[0]/=2880,p[1]=1-p[1]/2160,p}}().bind(this);return{stickers:r,faces:l,axis:i,unswizzle:this.unswizzle.bind(this),notationMapper:this.notationMapper,textureMapper:{getuv:s}}}getGeoNormal(t){let r=this.getInitial3DRotation(),n=this.swizzler.unswizzle(t);for(let l of this.geonormals)if(n===l[1]){let o=Zo(l[0].rotatepoint(r),1);return Math.abs(o[0])<Ee&&Math.abs(o[2])<Ee&&(o[0]=0,o[2]=1e-6),o}}getfaceindex(t){let r=this.stickersperface;return Math.floor(t/r)}textForTwizzleExplorer(){return\`Faces \${this.baseplanerot.length}
Stickers per face \${this.stickersperface}
Short edge \${this.shortedge}
Cubies \${this.cubies.length}
Edge distance \${this.edgedistance}
Vertex distance \${this.vertexdistance}\`}writeSchreierSims(t){let n=this.getOrbitsDef(!1).reassemblySize();t(\`Reassembly size is \${n}\`);let l=Yo(this.getMovesAsPerms(),t),o=n/l;t(\`Ratio is \${o}\`)}},Qr=class{constructor(t,r){this.pg=t;this.orbitNames=r.orbitnames}lookupMove(t){let r=this.pg.parseMove(t);if(this.pg.parsedmovelist){let i=!1;for(let a of this.pg.parsedmovelist)a[1]===r[1]&&a[2]===r[2]&&a[3]===r[3]&&a[4]===r[4]&&(i=!0);if(!i)return null}let n=[r[2],r[3]];if(!r[4]){let i=this.pg.moveplanesets[r[1]].length;n=[i-r[3],i-r[2]]}let l=this.pg.getMoveFromBits(n,r[5],!r[4],this.pg.cmovesbyslice[r[1]],void 0,this.pg.movesetorders[r[1]]);return _n.transformToKTransformationData(this.orbitNames,l)}}});var $o={};pe($o,{ExperimentalPGNotation:()=>Qr,PuzzleGeometry:()=>Xo,Quat:()=>O,getPG3DNamedPuzzles:()=>Bf,getPuzzleDescriptionString:()=>Rf,getPuzzleGeometryByDesc:()=>na,getPuzzleGeometryByName:()=>Cn,parseOptions:()=>ef,parsePuzzleDescription:()=>Ml,schreierSims:()=>Yo});var Pn=U(()=>{Ko();q0();Vo();ta();Ko()});async function jr(e){return(await Promise.resolve().then(()=>(Pn(),$o))).getPuzzleGeometryByName(e,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function Gm(e,t){let r=await e,n=r.getKPuzzleDefinition(!0);n.name=t;let l=await Promise.resolve().then(()=>(Pn(),$o)),o=new l.ExperimentalPGNotation(r,r.getOrbitsDef(!0));return new be(n,{experimentalPGNotation:o})}var ei,ti,ri,Lt,qr,Lr=U(()=>{je();vn();Mt();Lt=class{constructor(t){re(this,ei,void 0);re(this,ti,void 0);re(this,ri,void 0);this.pgId=t.pgID,this.id=t.id,this.fullName=t.fullName,this.inventedBy=t.inventedBy,this.inventionYear=t.inventionYear}pg(){return d(this,ei)??j(this,ei,jr(this.pgId??this.id))}kpuzzle(){return d(this,ti)??j(this,ti,Gm(this.pg(),this.id))}svg(){return d(this,ri)??j(this,ri,(async()=>(await this.pg()).generatesvg())())}};ei=new WeakMap,ti=new WeakMap,ri=new WeakMap;qr=class extends Lt{constructor(){super(...arguments);this.stickerings=xn}appearance(t){return Pt(this,t)}}});var df={};pe(df,{cube2x2x2KPuzzleDefinition:()=>Gt});var Gt,hf=U(()=>{Gt={name:"2x2x2",orbits:{CORNERS:{numPieces:8,numOrientations:3}},startStateData:{CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{U:{CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},y:{CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}},x:{CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},L:{CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]}},F:{CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]}},R:{CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]}},B:{CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]}},D:{CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}},z:{CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]}}}};Gt.moves.Rv=Gt.moves.x;Gt.moves.Uv=Gt.moves.y;Gt.moves.Fv=Gt.moves.z;Gt.moves.Lv={CORNERS:{permutation:[1,7,6,2,0,3,5,4],orientation:[2,1,2,1,1,2,1,2]}};Gt.moves.Dv={CORNERS:{permutation:[3,0,1,2,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}};Gt.moves.Bv={CORNERS:{permutation:[4,7,1,0,5,3,2,6],orientation:[1,2,1,2,2,1,2,1]}}});var Ff={};pe(Ff,{default:()=>Tm});var Tm,Df=U(()=>{Tm=\`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 520 394" preserveAspectRatio="xMidYMid meet">
  <title>2x2x2</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="puzzle" transform="translate(5, 5) scale(60)">
    <use id="CORNERS-l0-o0" xlink:href="#sticker" transform="translate(3.2, 1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" xlink:href="#sticker" transform="translate(4.4, 2.2)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#sticker" transform="translate(3.2, 2.2)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" xlink:href="#sticker" transform="translate(3.2, 0)" style="fill: white"/>
    <use id="CORNERS-l1-o1" xlink:href="#sticker" transform="translate(6.6, 2.2)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" xlink:href="#sticker" transform="translate(5.4, 2.2)" style="fill: red"/>

    <use id="CORNERS-l2-o0" xlink:href="#sticker" transform="translate(2.2, 0)" style="fill: white"/>
    <use id="CORNERS-l2-o1" xlink:href="#sticker" transform="translate(0, 2.2)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" xlink:href="#sticker" transform="translate(7.6, 2.2)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" xlink:href="#sticker" transform="translate(2.2, 1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" xlink:href="#sticker" transform="translate(2.2, 2.2)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" xlink:href="#sticker" transform="translate(1, 2.2)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" xlink:href="#sticker" transform="translate(3.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" transform="translate(3.2, 3.2)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" transform="translate(4.4, 3.2)" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" transform="translate(2.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" transform="translate(1, 3.2)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" transform="translate(2.2, 3.2)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" transform="translate(2.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" transform="translate(7.6, 3.2)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker" transform="translate(0, 3.2)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" transform="translate(3.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" transform="translate(5.4, 3.2)" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" transform="translate(6.6, 3.2)" style="fill: #26f"/>
  </g>

</svg>\`});var Tl,Af=U(()=>{je();Lr();Mt();vn();Tl={id:"2x2x2",fullName:"2\\xD72\\xD72 Cube",kpuzzle:de(async()=>new be((await Promise.resolve().then(()=>(hf(),df))).cube2x2x2KPuzzleDefinition)),svg:async()=>(await Promise.resolve().then(()=>(Df(),Ff))).default,pg:de(async()=>jr("2x2x2")),appearance:e=>Pt(Tl,e),stickerings:xn}});var yf={};pe(yf,{default:()=>Om});var Om,Uf=U(()=>{Om=\`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 518 392" preserveAspectRatio="xMidYMid meet">
  <title>3x3x3</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10 11  -->
<!--        | | | | | | | | | | | |<-  -->
<!--    0 -       . . .                -->
<!--    1 -       . . .                -->
<!--    2 -       . . .                -->
<!--    3 - . . . . . . . . . . . .    -->
<!--    4 - . . . . . . . . . . . .    -->
<!--    5 - . . . . . . . . . . . .    -->
<!--    6 -       . . .                -->
<!--    7 -       . . .                -->
<!--    8 -       . . .                -->

  <g id="puzzle" transform="translate(5,5) scale(40)">
    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" xlink:href="#sticker" transform="translate(5.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" xlink:href="#sticker" transform="translate(6.5,3.3)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#sticker" transform="translate(5.3,3.3)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" xlink:href="#sticker" transform="translate(5.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l1-o1" xlink:href="#sticker" transform="translate(9.7,3.3)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" xlink:href="#sticker" transform="translate(8.5,3.3)" style="fill: red"/>

    <use id="CORNERS-l2-o0" xlink:href="#sticker" transform="translate(3.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l2-o1" xlink:href="#sticker" transform="translate(0.1,3.3)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" xlink:href="#sticker" transform="translate(11.7,3.3)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" xlink:href="#sticker" transform="translate(3.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" xlink:href="#sticker" transform="translate(3.3,3.3)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" xlink:href="#sticker" transform="translate(2.1,3.3)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" xlink:href="#sticker" transform="translate(5.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" transform="translate(5.3,5.3)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" transform="translate(6.5,5.3)" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" transform="translate(3.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" transform="translate(2.1,5.3)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" transform="translate(3.3,5.3)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" transform="translate(3.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" transform="translate(11.7,5.3)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker" transform="translate(0.1,5.3)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" transform="translate(5.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" transform="translate(8.5,5.3)" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" transform="translate(9.7,5.3)" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0"  xlink:href="#sticker" transform="translate(4.3,2.1)" style="fill: white"/>
    <use id="EDGES-l0-o1"  xlink:href="#sticker" transform="translate(4.3,3.3)" style="fill: limegreen"/>

    <use id="EDGES-l1-o0"  xlink:href="#sticker" transform="translate(5.3,1.1)" style="fill: white"/>
    <use id="EDGES-l1-o1"  xlink:href="#sticker" transform="translate(7.5,3.3)" style="fill: red"/>

    <use id="EDGES-l2-o0"  xlink:href="#sticker" transform="translate(4.3,0.1)" style="fill: white"/>
    <use id="EDGES-l2-o1"  xlink:href="#sticker" transform="translate(10.7,3.3)" style="fill: #26f"/>

    <use id="EDGES-l3-o0"  xlink:href="#sticker" transform="translate(3.3,1.1)" style="fill: white"/>
    <use id="EDGES-l3-o1"  xlink:href="#sticker" transform="translate(1.1,3.3)" style="fill: orange"/>

    <use id="EDGES-l4-o0"  xlink:href="#sticker" transform="translate(4.3,6.5)" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  xlink:href="#sticker" transform="translate(4.3,5.3)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" xlink:href="#sticker" transform="translate(5.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l5-o1" xlink:href="#sticker" transform="translate(7.5,5.3)" style="fill: red"/>

    <use id="EDGES-l6-o0" xlink:href="#sticker" transform="translate(4.3,8.5)" style="fill: yellow"/>
    <use id="EDGES-l6-o1" xlink:href="#sticker" transform="translate(10.7,5.3)" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  xlink:href="#sticker" transform="translate(3.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  xlink:href="#sticker" transform="translate(1.1,5.3)" style="fill: orange"/>

    <use id="EDGES-l8-o0"  xlink:href="#sticker" transform="translate(5.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  xlink:href="#sticker" transform="translate(6.5,4.3)" style="fill: red"/>

    <use id="EDGES-l9-o0"  xlink:href="#sticker" transform="translate(3.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  xlink:href="#sticker" transform="translate(2.1,4.3)" style="fill: orange"/>

    <use id="EDGES-l10-o0" xlink:href="#sticker" transform="translate(9.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l10-o1" xlink:href="#sticker" transform="translate(8.5,4.3)" style="fill: red"/>

    <use id="EDGES-l11-o0" xlink:href="#sticker" transform="translate(11.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l11-o1" xlink:href="#sticker" transform="translate(0.1,4.3)" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l0-o0" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o1" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o2" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o3" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>

    <use id="CENTERS-l1-o0" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o1" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o2" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o3" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>

    <use id="CENTERS-l2-o0" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o1" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o2" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o3" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>

    <use id="CENTERS-l4-o0" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
  </g>

</svg>\`});var bf={};pe(bf,{default:()=>Im});var Im,Sf=U(()=>{Im=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="288px" height="288px" viewBox="-16 -16 288 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>3x3x3 LL</title>
  <defs>
    <g id="sticker">
        <rect x="-10" y="-10" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="3x3x3-LL" stroke="none" stroke-width="4" style="none" stroke-linejoin="round">
    <rect id="CENTERS-l0-o0" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o1" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o2" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o3" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>

    <rect    id="CORNERS-l0-o0" stroke="#000000" style="fill: white" x="160" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l0-o1" stroke="#000000" style="fill: red" points="224 160 252 160 252 252 224 224"></polygon>
    <polygon id="CORNERS-l0-o2" stroke="#000000" style="fill: limegreen" transform="translate(206, 238) scale(1, -1) rotate(-90) translate(-206, -238) " points="192 192 220 192 220 284 192 256"></polygon>
    <rect    id="CORNERS-l1-o0" stroke="#000000" style="fill: white" x="160" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l1-o1" stroke="#000000" style="fill: #26f" transform="translate(206, 18) rotate(-90) translate(-206, -18) " points="192 -28 220 -28 220 64 192 36"></polygon>
    <polygon id="CORNERS-l1-o2" stroke="#000000" style="fill: red" transform="translate(238, 50) scale(1, -1) translate(-238, -50) " points="224 4 252 4 252 96 224 68"></polygon>
    <rect    id="CORNERS-l2-o0" stroke="#000000" style="fill: white" x="32" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l2-o1" stroke="#000000" style="fill: orange" transform="translate(18, 50) scale(-1, -1) translate(-18, -50) " points="4 4 32 4 32 96 4 68"></polygon>
    <polygon id="CORNERS-l2-o2" stroke="#000000" style="fill: #26f" transform="translate(50, 18) scale(1, -1) rotate(90) translate(-50, -18) " points="36 -28 64 -28 64 64 36 36"></polygon>
    <rect    id="CORNERS-l3-o0" stroke="#000000" style="fill: white" x="32" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l3-o1" stroke="#000000" style="fill: limegreen" transform="translate(50, 238) rotate(90) translate(-50, -238) " points="36 192 64 192 64 284 36 256"></polygon>
    <polygon id="CORNERS-l3-o2" stroke="#000000" style="fill: orange" transform="translate(18, 206) scale(-1, 1) translate(-18, -206) " points="4 160 32 160 32 252 4 224"></polygon>

    <rect id="EDGES-l0-o0" stroke="#000000" style="fill: white" x="96" y="160" width="64" height="64"></rect>
    <rect id="EDGES-l0-o1" stroke="#000000" style="fill: limegreen" transform="translate(128, 238) scale(1, -1) rotate(90) translate(-128, -238) " x="114" y="206" width="28" height="64"></rect>
    <rect id="EDGES-l1-o0" stroke="#000000" style="fill: white" x="160" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l1-o1" stroke="#000000" style="fill: red" x="224" y="96" width="28" height="64"></rect>
    <rect id="EDGES-l2-o0" stroke="#000000" style="fill: white" x="96" y="32" width="64" height="64"></rect>
    <rect id="EDGES-l2-o1" stroke="#000000" style="fill: #26f" transform="translate(128, 18) scale(1, -1) rotate(90) translate(-128, -18) " x="114" y="-14" width="28" height="64"></rect>
    <rect id="EDGES-l3-o0" stroke="#000000" style="fill: white" x="32" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l3-o1" stroke="#000000" style="fill: orange" x="4" y="96" width="28" height="64"></rect>

  </g>
  <g style="opacity: 0">
    <!-- CORNERS -->
    <use id="CORNERS-l4-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l4-o0"  xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  xlink:href="#sticker" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l5-o1" xlink:href="#sticker" style="fill: red"/>

    <use id="EDGES-l6-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l6-o1" xlink:href="#sticker" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  xlink:href="#sticker" style="fill: orange"/>

    <use id="EDGES-l8-o0"  xlink:href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  xlink:href="#sticker" style="fill: red"/>

    <use id="EDGES-l9-o0"  xlink:href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  xlink:href="#sticker" style="fill: orange"/>

    <use id="EDGES-l10-o0" xlink:href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l10-o1" xlink:href="#sticker" style="fill: red"/>

    <use id="EDGES-l11-o0" xlink:href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l11-o1" xlink:href="#sticker" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l1-o0" xlink:href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o1" xlink:href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o2" xlink:href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o3" xlink:href="#sticker" style="fill: orange"/>

    <use id="CENTERS-l2-o0" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" xlink:href="#sticker" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" xlink:href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o1" xlink:href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o2" xlink:href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o3" xlink:href="#sticker" style="fill: red"/>

    <use id="CENTERS-l4-o0" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" xlink:href="#sticker" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" xlink:href="#sticker" style="fill: yellow"/>
  </g>
</svg>\`});var la,wf=U(()=>{je();Lr();Mt();vn();la={id:"3x3x3",fullName:"3\\xD73\\xD73 Cube",inventedBy:["Ern\\u0151 Rubik"],inventionYear:1974,kpuzzle:de(async()=>O0),svg:de(async()=>(await Promise.resolve().then(()=>(Uf(),yf))).default),llSVG:de(async()=>(await Promise.resolve().then(()=>(Sf(),bf))).default),pg:de(async()=>jr("3x3x3")),appearance:e=>Pt(la,e),stickerings:xn}});var xf={};pe(xf,{clockKPuzzleDefinition:()=>Wm});var Wm,vf=U(()=>{Wm={name:"Clock",orbits:{DIALS:{numPieces:18,numOrientations:12},FACES:{numPieces:18,numOrientations:1},FRAME:{numPieces:1,numOrientations:2}},startStateData:{DIALS:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{pieces:[0],orientation:[0]}},moves:{UR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,0,0,0,0,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},U_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,0,0,0,-1,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},R_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,1,1,-1,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},D_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},L_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},ALL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,1,1,1,-1,0,-1,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},y2:{DIALS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[1]}},UL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}}}}});var Ef={};pe(Ef,{default:()=>Km});var Km,_f=U(()=>{Km=\`<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">
  <title>clock</title>
  <defs>
    <g id="hand" transform="translate(-20, -20)">
      <path d="M19.9995197,2.22079449 L23.8791657,19.0203611 C23.9580836,19.3338406 24,19.6620253 24,20 C24,22.209139 22.209139,24 20,24 C17.790861,24 16,22.209139 16,20 C16,19.6620253 16.0419164,19.3338406 16.1208343,19.0203611 L19.9995197,2.22079449 Z"></path>
    </g>
    <g id="cardinal_hours" style="fill: #FFFFFF">
      <circle cx="0" cy="24" r="2"></circle>
      <circle cx="-24" cy="0" r="2"></circle>
      <circle cx="24" cy="0" r="2"></circle>
      <circle cx="0" cy="-24" r="2"></circle>
    </g>
    <g id="face_hours">
      <g>
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g transform="rotate(30)">
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g  transform="rotate(60)">
        <use xlink:href="#cardinal_hours"/>
      </g>
    </g>
    <g id="pegs" stroke="#000000" style="fill: #FFD000">
      <circle id="PEG4" cx="90" cy="90" r="10"></circle>
      <circle id="PEG3" cx="30" cy="90" r="10"></circle>
      <circle id="PEG2" cx="90" cy="30" r="10"></circle>
      <circle id="PEG1" cx="30" cy="30" r="10"></circle>
    </g>
    <g id="frame" transform="translate(-24, -24)">
      <path stroke="#000000" d="M120,20 C137.495665,20 153.941932,24.4930026 168.247913,32.3881183 C171.855881,30.8514056 175.828512,30 180,30 C196.568542,30 210,43.4314575 210,60 C210,64.1714878 209.148594,68.1441192 207.610077,71.7536009 C215.506997,86.0580678 220,102.504335 220,120 C220,137.495665 215.506997,153.941932 207.611882,168.247913 C209.148594,171.855881 210,175.828512 210,180 C210,196.568542 196.568542,210 180,210 C175.828512,210 171.855881,209.148594 168.246399,207.610077 C153.941932,215.506997 137.495665,220 120,220 C102.504335,220 86.0580678,215.506997 71.7520869,207.611882 C68.1441192,209.148594 64.1714878,210 60,210 C43.4314575,210 30,196.568542 30,180 C30,175.828512 30.8514056,171.855881 32.3899234,168.246399 C24.4930026,153.941932 20,137.495665 20,120 C20,102.504335 24.4930026,86.0580678 32.3881183,71.7520869 C30.8514056,68.1441192 30,64.1714878 30,60 C30,43.4314575 43.4314575,30 60,30 C64.1714878,30 68.1441192,30.8514056 71.7536009,32.3899234 C86.0580678,24.4930026 102.504335,20 120,20 Z"></path>
    </g>
  </defs>
  <g>
    <g transform="translate(24, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o0" style="fill: #0C5093"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l0-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l0-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l0-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l0-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l0-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l0-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l0-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l0-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l0-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l0-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l0-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l0-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l0-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l1-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l1-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l1-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l1-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l1-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l1-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l1-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l1-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l1-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l1-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l1-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l1-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l1-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l2-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l2-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l2-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l2-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l2-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l2-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l2-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l2-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l2-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l2-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l2-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l2-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l2-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l3-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l3-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l3-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l3-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l3-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l3-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l3-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l3-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l3-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l3-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l3-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l3-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l3-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l4-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l4-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l4-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l4-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l4-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l4-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l4-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l4-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l4-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l4-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l4-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l4-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l4-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l5-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l5-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l5-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l5-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l5-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l5-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l5-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l5-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l5-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l5-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l5-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l5-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l5-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l6-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l6-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l6-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l6-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l6-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l6-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l6-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l6-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l6-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l6-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l6-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l6-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l6-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l7-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l7-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l7-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l7-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l7-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l7-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l7-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l7-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l7-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l7-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l7-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l7-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l7-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l8-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l8-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l8-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l8-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l8-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l8-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l8-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l8-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l8-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l8-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l8-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l8-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l8-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
    <g transform="translate(264, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o1" style="fill: #90B8DF"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l9-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l9-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l9-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l9-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l9-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l9-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l9-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l9-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l9-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l9-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l9-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l9-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l9-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l10-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l10-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l10-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l10-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l10-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l10-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l10-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l10-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l10-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l10-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l10-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l10-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l10-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l11-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l11-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l11-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l11-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l11-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l11-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l11-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l11-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l11-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l11-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l11-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l11-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l11-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l12-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l12-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l12-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l12-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l12-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l12-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l12-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l12-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l12-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l12-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l12-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l12-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l12-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l13-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l13-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l13-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l13-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l13-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l13-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l13-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l13-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l13-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l13-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l13-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l13-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l13-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l14-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l14-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l14-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l14-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l14-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l14-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l14-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l14-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l14-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l14-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l14-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l14-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l14-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l15-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l15-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l15-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l15-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l15-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l15-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l15-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l15-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l15-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l15-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l15-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l15-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l15-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l16-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l16-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l16-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l16-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l16-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l16-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l16-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l16-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l16-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l16-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l16-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l16-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l16-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l17-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l17-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l17-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l17-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l17-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l17-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l17-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l17-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l17-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l17-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l17-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l17-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l17-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
  </g>
</svg>\`});var kf,zf=U(()=>{je();Mt();kf={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:de(async()=>new be((await Promise.resolve().then(()=>(vf(),xf))).clockKPuzzleDefinition)),svg:de(async()=>(await Promise.resolve().then(()=>(_f(),Ef))).default)}});async function Cf(e,t){let r=await e.kpuzzle(),n=new El(r),l=new _l(r),o=()=>l.and([l.move("U"),l.not(l.or(l.moves(["F","BL","BR"])))]),i=()=>l.and([l.move("U"),l.not(l.move("F"))]),a=()=>l.or([i(),l.and([l.move("F"),l.not(l.or(l.moves(["U","BL","BR"])))])]),s=()=>l.not(l.or([l.and([l.move("U"),l.move("F")]),l.and([l.move("F"),l.move("BL")]),l.and([l.move("F"),l.move("BR")]),l.and([l.move("BL"),l.move("BR")])])),f=()=>l.not(l.or([l.and([l.move("F"),l.move("BL")]),l.and([l.move("F"),l.move("BR")]),l.and([l.move("BL"),l.move("BR")])]));switch(t){case"full":break;case"experimental-fto-fc":n.set(l.not(o()),"Ignored");break;case"experimental-fto-f2t":n.set(l.not(i()),"Ignored"),n.set(o(),"Dim");break;case"experimental-fto-sc":n.set(l.not(a()),"Ignored"),n.set(i(),"Dim");break;case"experimental-fto-l2c":n.set(l.not(s()),"Ignored"),n.set(a(),"Dim");break;case"experimental-fto-lbt":n.set(l.not(f()),"Ignored"),n.set(s(),"Dim");break;case"experimental-fto-l3t":n.set(f(),"Dim");break;default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`),n.set(l.and(l.moves([])),"Dim")}return n.toAppearance()}async function Pf(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}var Mf=U(()=>{kl()});var Nf={};pe(Nf,{ftoSVG:()=>Qm});var Qm,Gf=U(()=>{Qm=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="2368px" height="1216px" viewBox="0 0 2368 1216" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>fto</title>
    <g id="fto" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
        <g id="BL" transform="translate(2040.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-2040.000000, -608.000000) translate(1560.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o1" style="fill: #FF7F00;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o1" style="fill: #FF7F00;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l16-o0" style="fill: #FF7F00;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l3-o1" style="fill: #FF7F00;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o3" style="fill: #FF7F00;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l19-o0" style="fill: #FF7F00;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o1" style="fill: #FF7F00;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l3-o0" style="fill: #FF7F00;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o2" style="fill: #FF7F00;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="D" transform="translate(1280.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o2" style="fill: #FFFF00;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l3-o0" style="fill: #FFFF00;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l8-o0" style="fill: #FFFF00;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o0" style="fill: #FFFF00;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l0-o1" style="fill: #FFFF00;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l17-o0" style="fill: #FFFF00;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o1" style="fill: #FFFF00;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l6-o0" style="fill: #FFFF00;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o3" style="fill: #FFFF00;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="BR" transform="translate(1480.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-1480.000000, -608.000000) translate(1000.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o3" style="fill: #7F7F7F;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l2-o1" style="fill: #7F7F7F;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l15-o0" style="fill: #7F7F7F;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o1" style="fill: #7F7F7F;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o1" style="fill: #7F7F7F;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l2-o0" style="fill: #7F7F7F;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o0" style="fill: #7F7F7F;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l4-o0" style="fill: #7F7F7F;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o2" style="fill: #7F7F7F;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="B" transform="translate(1760.000000, 328.000000) scale(1, -1) translate(-1760.000000, -328.000000) translate(1280.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o0" style="fill: #0000FF;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o0" style="fill: #0000FF;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l13-o0" style="fill: #0000FF;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l2-o0" style="fill: #0000FF;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o0" style="fill: #0000FF;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l12-o0" style="fill: #0000FF;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o0" style="fill: #0000FF;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l10-o0" style="fill: #0000FF;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l5-o0" style="fill: #0000FF;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="R" transform="translate(888.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-888.000000, -608.000000) translate(408.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o3" style="fill: #32CD32;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o1" style="fill: #32CD32;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l7-o0" style="fill: #32CD32;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l0-o1" style="fill: #32CD32;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o2" style="fill: #32CD32;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l5-o0" style="fill: #32CD32;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o1" style="fill: #32CD32;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l11-o0" style="fill: #32CD32;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o1" style="fill: #32CD32;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="F" transform="translate(128.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o0" style="fill: #FF0000;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l0-o0" style="fill: #FF0000;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l0-o0" style="fill: #FF0000;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o0" style="fill: #FF0000;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l2-o0" style="fill: #FF0000;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l1-o0" style="fill: #FF0000;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o0" style="fill: #FF0000;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l14-o0" style="fill: #FF0000;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o0" style="fill: #FF0000;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="L" transform="translate(328.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-328.000000, -608.000000) translate(-152.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o1" style="fill: #7F007F;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l11-o1" style="fill: #7F007F;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l21-o0" style="fill: #7F007F;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o1" style="fill: #7F007F;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o2" style="fill: #7F007F;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l18-o0" style="fill: #7F007F;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o0" style="fill: #7F007F;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l9-o0" style="fill: #7F007F;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o3" style="fill: #7F007F;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="U" transform="translate(608.000000, 328.000000) scale(1, -1) translate(-608.000000, -328.000000) translate(128.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o2" style="fill: #FFFFFF;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o0" style="fill: #FFFFFF;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l20-o0" style="fill: #FFFFFF;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l11-o0" style="fill: #FFFFFF;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o3" style="fill: #FFFFFF;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l23-o0" style="fill: #FFFFFF;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o1" style="fill: #FFFFFF;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l22-o0" style="fill: #FFFFFF;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l3-o1" style="fill: #FFFFFF;" points="160 320 320 480 0 480"></polygon>
        </g>
    </g>
</svg>
\`});var Tf,Of,If=U(()=>{Lr();Mt();Mf();Tf=class extends Lt{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983});this.stickerings=Pf;this.svg=de(async()=>(await Promise.resolve().then(()=>(Gf(),Nf))).ftoSVG)}appearance(t){return Cf(this,t)}},Of=new Tf});async function Wf(e,t){switch(t){case"full":case"F2L":case"LL":return Pt(e,t);default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`)}return Pt(e,"full")}async function Kf(){return["full","F2L","LL"]}var Qf=U(()=>{vn()});var jf,qf,Vf=U(()=>{Lr();Qf();jf=class extends Lt{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981});this.stickerings=Kf}appearance(t){return Wf(this,t)}},qf=new jf});var Hf={};pe(Hf,{default:()=>jm});var jm,Yf=U(()=>{jm=\`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 -20 546 480" preserveAspectRatio="xMidYMid meet">
  <defs>
  </defs>
  <title>pyraminx</title>
  <defs>
    <g id="stickerA" transform="scale(1, 0.577350269)">
      <path
         d="m 0,1.732050808 1,-1.732050808 1,1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
    <g id="stickerV" transform="scale(1, 0.577350269)">
      <path
         d="m 0,0 1,1.732050808 1,-1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10   -->
<!--        | | | | | | | | | | |    -->
<!--    0 - L L L L L F R R R R R    -->
<!--    1 -   L L L F F F R R R      -->
<!--    2 -     L F F F F F R        -->
<!--    3 -       D D D D D          -->
<!--    4 -         D D D            -->
<!--    5 -           D              -->

  <g id="puzzle" transform="translate(5, 5) scale(40, 69.28203232)">
    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" xlink:href="#stickerV" transform="translate(5.2, 1.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l0-o1" xlink:href="#stickerA" transform="translate(3, 0)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#stickerA" transform="translate(7.4, 0)" style="fill: blue"/>

    <use id="CORNERS-l3-o0" xlink:href="#stickerV" transform="translate(4.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o1" xlink:href="#stickerA" transform="translate(4.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l3-o2" xlink:href="#stickerA" transform="translate(2, 1)" style="fill: red"/>

    <use id="CORNERS-l2-o0" xlink:href="#stickerV" transform="translate(6.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l2-o1" xlink:href="#stickerA" transform="translate(8.4, 1)" style="fill: blue"/>
    <use id="CORNERS-l2-o2" xlink:href="#stickerA" transform="translate(6.2, 3.2)" style="fill: yellow"/>

    <use id="CORNERS-l1-o1" xlink:href="#stickerA" transform="translate(9.4, 0)" style="fill: blue"/>
    <use id="CORNERS-l1-o2" xlink:href="#stickerA" transform="translate(1, 0)" style="fill: red"/>
    <use id="CORNERS-l1-o0" xlink:href="#stickerA" transform="translate(5.2, 4.2)" style="fill: yellow"/>

    <!-- "TIPS" -->
    <!-- CORNERS2 -->
    <use id="CORNERS2-l0-o0" xlink:href="#stickerA" transform="translate(5.2, 0.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l0-o1" xlink:href="#stickerV" transform="translate(4, 0)" style="fill: red"/>
    <use id="CORNERS2-l0-o2" xlink:href="#stickerV" transform="translate(6.4, 0)" style="fill: blue"/>

    <use id="CORNERS2-l3-o0" xlink:href="#stickerA" transform="translate(3.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l3-o1" xlink:href="#stickerV" transform="translate(3.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l3-o2" xlink:href="#stickerV" transform="translate(2, 2)" style="fill: red"/>

    <use id="CORNERS2-l2-o1" xlink:href="#stickerV" transform="translate(8.4, 2)" style="fill: blue"/>
    <use id="CORNERS2-l2-o2" xlink:href="#stickerV" transform="translate(7.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l2-o0" xlink:href="#stickerA" transform="translate(7.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS2-l1-o1" xlink:href="#stickerV" transform="translate(10.4,0)" style="fill: blue"/>
    <use id="CORNERS2-l1-o2" xlink:href="#stickerV" transform="translate(0, 0)" style="fill: red"/>
    <use id="CORNERS2-l1-o0" xlink:href="#stickerV" transform="translate(5.2, 5.2)" style="fill: yellow"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0" xlink:href="#stickerA" transform="translate(4.2, 1.066666667)" style="fill: limegreen"/>
    <use id="EDGES-l0-o1" xlink:href="#stickerV" transform="translate(3, 1)" style="fill: red"/>

    <use id="EDGES-l5-o0" xlink:href="#stickerA" transform="translate(6.2, 1.066666667)" style="fill: limegreen"/>
    <use id="EDGES-l5-o1" xlink:href="#stickerV" transform="translate(7.4, 1)" style="fill: blue"/>

    <use id="EDGES-l1-o1" xlink:href="#stickerV" transform="translate(8.4, 0)" style="fill: blue"/>
    <use id="EDGES-l1-o0" xlink:href="#stickerV" transform="translate(2, 0)" style="fill: red"/>

    <use id="EDGES-l2-o1" xlink:href="#stickerV" transform="translate(5.2, 3.2)" style="fill: yellow"/>
    <use id="EDGES-l2-o0" xlink:href="#stickerA" transform="translate(5.2, 2.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l3-o0" xlink:href="#stickerV" transform="translate(6.2, 4.2)" style="fill: yellow"/>
    <use id="EDGES-l3-o1" xlink:href="#stickerV" transform="translate(9.4, 1)" style="fill: blue"/>

    <use id="EDGES-l4-o0" xlink:href="#stickerV" transform="translate(4.2, 4.2)" style="fill: yellow"/>
    <use id="EDGES-l4-o1" xlink:href="#stickerV" transform="translate(1, 1)" style="fill: red"/>
  </g>

</svg>\`});var Jf,Zf,Xf=U(()=>{Lr();Mt();Jf=class extends Lt{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]});this.svg=de(async()=>(await Promise.resolve().then(()=>(Yf(),Hf))).default)}},Zf=new Jf});var $f={};pe($f,{sq1HyperOrbitKPuzzleDefinition:()=>qm});var qm,e1=U(()=>{qm={name:"Square-1",orbits:{WEDGES:{numPieces:24,numOrientations:9},EQUATOR:{numPieces:2,numOrientations:6}},startStateData:{WEDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{pieces:[0,1],orientation:[0,0]}},moves:{U_SQ_:{WEDGES:{permutation:[11,0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},D_SQ_:{WEDGES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,23,12,13,14,15,16,17,18,19,20,21,22],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},_SLASH_:{WEDGES:{permutation:[0,1,2,3,4,5,12,13,14,15,16,17,6,7,8,9,10,11,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,3]}}}}});var t1={};pe(t1,{default:()=>Vm});var Vm,r1=U(()=>{Vm=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="360px" height="552px" viewBox="0 0 360 552" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
    <title>sq1-fancy</title>
    <desc>Created with Sketch.</desc>
    <!-- stroke="none" -->
    <g id="sq1-fancy" stroke="#888" stroke-width="0.25" fill="none" fill-rule="evenodd">
        <g id="EQUATOR" transform="translate(24.000000, 264.000000)">
            <rect id="EQUATOR-l1-o3" style="fill: red" x="168" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o4" style="fill: red" x="192" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o5" style="fill: limegreen" x="216" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o2" style="fill: limegreen" x="240" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o1" style="fill: limegreen" x="264" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o0" style="fill: orange" x="288" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o3" style="fill: orange" x="0" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o4" style="fill: orange" x="24" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o5" style="fill: limegreen" x="48" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o2" style="fill: limegreen" x="72" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o1" style="fill: limegreen" x="96" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o0" style="fill: red" x="120" y="0" width="24" height="24"></rect>
        </g>
        <g id="BOTTOM" transform="translate(41.000000, 257.000000)" stroke-linejoin="round">
            <g id="WEDGES-23" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l23-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l23-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l23-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l23-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l23-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l23-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l23-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-22" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l22-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l22-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l22-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l22-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l22-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l22-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l22-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-21" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l21-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l21-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l21-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l21-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l21-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l21-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l21-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-20" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l20-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l20-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l20-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l20-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l20-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l20-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l20-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-19" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l19-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l19-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l19-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l19-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l19-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l19-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l19-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-18" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l18-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l18-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l18-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l18-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l18-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l18-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l18-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-17" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l17-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l17-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l17-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l17-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l17-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l17-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l17-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-16" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l16-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l16-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l16-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l16-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l16-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l16-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l16-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-15" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l15-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l15-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l15-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l15-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l15-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l15-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l15-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-14" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l14-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l14-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l14-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l14-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l14-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l14-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l14-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-13" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l13-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l13-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l13-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l13-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l13-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l13-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l13-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-12" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l12-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l12-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l12-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l12-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l12-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l12-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l12-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="TOP" transform="translate(41.000000, -31.000000)" stroke-linejoin="round">
            <g id="WEDGES-11" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l11-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l11-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l11-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l11-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l11-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l11-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l11-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-10" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l10-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l10-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l10-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l10-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l10-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l10-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l10-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-9" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l9-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l9-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l9-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l9-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l9-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l9-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l9-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-8" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l8-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l8-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l8-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l8-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l8-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l8-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l8-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-7" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l7-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l7-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l7-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l7-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l7-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l7-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l7-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-6" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l6-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l6-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l6-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l6-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l6-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l6-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l6-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-5" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l5-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l5-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l5-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l5-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l5-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l5-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l5-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-4" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l4-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l4-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l4-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l4-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l4-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l4-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l4-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-3" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l3-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l3-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l3-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l3-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l3-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l3-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l3-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-2" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l2-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l2-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l2-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l2-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l2-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l2-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l2-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-1" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l1-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l1-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l1-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l1-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l1-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l1-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l1-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-0" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l0-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l0-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l0-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l0-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l0-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l0-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l0-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="DIAGONALS" transform="translate(168.861561, 1.019238)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <line x1="0" y1="287.842323" x2="70.2768775" y2="550.119201" id="BOTTOM"></line>
            <line x1="0.15767665" y1="262.276878" x2="70.4345542" y2="2.27488928e-16" id="TOP"></line>
        </g>
    </g>
</svg>\`});var n1,l1=U(()=>{je();Mt();n1={id:"square1",fullName:"Square-1",inventedBy:["Karel Hr\\u0161el","Vojtech Kopsk\\xFD"],inventionYear:1990,kpuzzle:de(async()=>new be((await Promise.resolve().then(()=>(e1(),$f))).sq1HyperOrbitKPuzzleDefinition)),svg:de(async()=>(await Promise.resolve().then(()=>(r1(),t1))).default)}});var o1={};pe(o1,{kilominxSVG:()=>Hm});var Hm,i1=U(()=>{Hm=\`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
<g><title>U</title>
<polygon id="CORNERS-l0-o1" class="sticker" style="fill: #ffffff" points="247.941 89.861 283.500 115.696 269.918 157.499 212.382 138.805"/>
<polygon id="CORNERS-l10-o2" class="sticker" style="fill: #ffffff" points="154.845 157.499 141.263 115.696 176.822 89.861 212.382 138.805"/>
<polygon id="CORNERS-l5-o0" class="sticker" style="fill: #ffffff" points="176.822 89.861 212.381 64.025 247.941 89.861 212.382 138.805"/>
<polygon id="CORNERS-l4-o1" class="sticker" style="fill: #ffffff" points="212.381 199.301 168.427 199.301 154.845 157.499 212.382 138.805"/>
<polygon id="CORNERS-l1-o1" class="sticker" style="fill: #ffffff" points="269.918 157.499 256.335 199.301 212.381 199.301 212.382 138.805"/>
</g><g><title>F</title>
<polygon id="CORNERS-l7-o0" class="sticker" style="fill: #006633" points="247.941 319.263 212.381 345.098 176.822 319.263 212.382 270.32"/>
<polygon id="CORNERS-l1-o0" class="sticker" style="fill: #006633" points="212.381 209.823 256.335 209.823 269.918 251.625 212.382 270.32"/>
<polygon id="CORNERS-l3-o0" class="sticker" style="fill: #006633" points="269.918 251.625 283.500 293.428 247.941 319.263 212.382 270.32"/>
<polygon id="CORNERS-l4-o2" class="sticker" style="fill: #006633" points="154.845 251.625 168.427 209.823 212.381 209.823 212.382 270.32"/>
<polygon id="CORNERS-l9-o1" class="sticker" style="fill: #006633" points="176.822 319.263 141.263 293.428 154.845 251.625 212.382 270.32"/>
</g><g><title>L</title>
<polygon id="CORNERS-l13-o0" class="sticker" style="fill: #660099" points="87.302 290.176 43.349 290.176 29.766 248.374 87.303 229.68"/>
<polygon id="CORNERS-l4-o0" class="sticker" style="fill: #660099" points="122.862 180.736 158.421 206.571 144.839 248.374 87.303 229.68"/>
<polygon id="CORNERS-l9-o0" class="sticker" style="fill: #660099" points="144.839 248.374 131.256 290.176 87.302 290.176 87.303 229.68"/>
<polygon id="CORNERS-l10-o0" class="sticker" style="fill: #660099" points="51.743 180.736 87.302 154.901 122.862 180.736 87.303 229.68"/>
<polygon id="CORNERS-l11-o0" class="sticker" style="fill: #660099" points="29.766 248.374 16.184 206.571 51.743 180.736 87.303 229.68"/>
</g><g><title>BL</title>
<polygon id="CORNERS-l15-o1" class="sticker" style="fill: #ffff00" points="700.480 172.224 664.921 198.059 629.361 172.224 664.921 123.281"/>
<polygon id="CORNERS-l10-o1" class="sticker" style="fill: #ffff00" points="664.921 62.784 708.874 62.784 722.457 104.586 664.921 123.281"/>
<polygon id="CORNERS-l11-o2" class="sticker" style="fill: #ffff00" points="722.457 104.586 736.039 146.389 700.480 172.224 664.921 123.281"/>
<polygon id="CORNERS-l5-o1" class="sticker" style="fill: #ffff00" points="607.384 104.586 620.967 62.784 664.921 62.784 664.921 123.281"/>
<polygon id="CORNERS-l19-o2" class="sticker" style="fill: #ffff00" points="629.361 172.224 593.802 146.389 607.384 104.586 664.921 123.281"/>
</g><g><title>BR</title>
<polygon id="CORNERS-l12-o1" class="sticker" style="fill: #0000ff" points="545.874 172.224 510.315 198.059 474.755 172.224 510.315 123.281"/>
<polygon id="CORNERS-l5-o2" class="sticker" style="fill: #0000ff" points="510.315 62.784 554.269 62.784 567.851 104.586 510.315 123.281"/>
<polygon id="CORNERS-l19-o1" class="sticker" style="fill: #0000ff" points="567.851 104.586 581.433 146.389 545.874 172.224 510.315 123.281"/>
<polygon id="CORNERS-l0-o2" class="sticker" style="fill: #0000ff" points="452.779 104.586 466.361 62.784 510.315 62.784 510.315 123.281"/>
<polygon id="CORNERS-l6-o2" class="sticker" style="fill: #0000ff" points="474.755 172.224 439.196 146.389 452.779 104.586 510.315 123.281"/>
</g><g><title>R</title>
<polygon id="CORNERS-l6-o1" class="sticker" style="fill: #ff0000" points="373.019 180.736 408.579 206.571 394.996 248.374 337.461 229.68"/>
<polygon id="CORNERS-l1-o2" class="sticker" style="fill: #ff0000" points="279.924 248.374 266.341 206.571 301.901 180.736 337.461 229.68"/>
<polygon id="CORNERS-l0-o0" class="sticker" style="fill: #ff0000" points="301.901 180.736 337.460 154.901 373.019 180.736 337.461 229.68"/>
<polygon id="CORNERS-l3-o1" class="sticker" style="fill: #ff0000" points="337.460 290.176 293.506 290.176 279.924 248.374 337.461 229.68"/>
<polygon id="CORNERS-l2-o2" class="sticker" style="fill: #ff0000" points="394.996 248.374 381.414 290.176 337.460 290.176 337.461 229.68"/>
</g><g><title>C</title>
<polygon id="CORNERS-l8-o2" class="sticker" style="fill: #ffffd0" points="347.220 395.413 333.638 437.215 289.684 437.215 289.685 376.719"/>
<polygon id="CORNERS-l3-o2" class="sticker" style="fill: #ffffd0" points="254.125 327.775 289.684 301.940 325.244 327.775 289.685 376.719"/>
<polygon id="CORNERS-l2-o1" class="sticker" style="fill: #ffffd0" points="325.244 327.775 360.803 353.610 347.220 395.413 289.685 376.719"/>
<polygon id="CORNERS-l7-o1" class="sticker" style="fill: #ffffd0" points="232.148 395.413 218.566 353.610 254.125 327.775 289.685 376.719"/>
<polygon id="CORNERS-l17-o2" class="sticker" style="fill: #ffffd0" points="289.684 437.215 245.730 437.215 232.148 395.413 289.685 376.719"/>
</g><g><title>A</title>
<polygon id="CORNERS-l17-o1" class="sticker" style="fill: #3399ff" points="192.615 395.413 179.032 437.215 135.078 437.215 135.079 376.719"/>
<polygon id="CORNERS-l9-o2" class="sticker" style="fill: #3399ff" points="99.519 327.775 135.078 301.940 170.638 327.775 135.079 376.719"/>
<polygon id="CORNERS-l7-o2" class="sticker" style="fill: #3399ff" points="170.638 327.775 206.197 353.610 192.615 395.413 135.079 376.719"/>
<polygon id="CORNERS-l13-o1" class="sticker" style="fill: #3399ff" points="77.542 395.413 63.960 353.610 99.519 327.775 135.079 376.719"/>
<polygon id="CORNERS-l14-o1" class="sticker" style="fill: #3399ff" points="135.078 437.215 91.125 437.215 77.542 395.413 135.079 376.719"/>
</g><g><title>I</title>
<polygon id="CORNERS-l18-o1" class="sticker" style="fill: #ff6633" points="677.137 319.263 641.578 293.428 655.160 251.625 712.697 270.32"/>
<polygon id="CORNERS-l13-o2" class="sticker" style="fill: #ff6633" points="770.233 251.625 783.815 293.428 748.256 319.263 712.697 270.32"/>
<polygon id="CORNERS-l14-o0" class="sticker" style="fill: #ff6633" points="748.256 319.263 712.697 345.098 677.137 319.263 712.697 270.32"/>
<polygon id="CORNERS-l11-o1" class="sticker" style="fill: #ff6633" points="712.697 209.823 756.650 209.823 770.233 251.625 712.697 270.32"/>
<polygon id="CORNERS-l15-o2" class="sticker" style="fill: #ff6633" points="655.160 251.625 668.743 209.823 712.697 209.823 712.697 270.32"/>
</g><g><title>BF</title>
<polygon id="CORNERS-l16-o1" class="sticker" style="fill: #99ff00" points="587.618 290.176 543.664 290.176 530.081 248.374 587.618 229.68"/>
<polygon id="CORNERS-l15-o0" class="sticker" style="fill: #99ff00" points="623.177 180.736 658.736 206.571 645.154 248.374 587.618 229.68"/>
<polygon id="CORNERS-l18-o0" class="sticker" style="fill: #99ff00" points="645.154 248.374 631.572 290.176 587.618 290.176 587.618 229.68"/>
<polygon id="CORNERS-l19-o0" class="sticker" style="fill: #99ff00" points="552.058 180.736 587.618 154.901 623.177 180.736 587.618 229.68"/>
<polygon id="CORNERS-l12-o2" class="sticker" style="fill: #99ff00" points="530.081 248.374 516.499 206.571 552.058 180.736 587.618 229.68"/>
</g><g><title>E</title>
<polygon id="CORNERS-l8-o0" class="sticker" style="fill: #ff66cc" points="498.098 319.263 462.539 345.098 426.980 319.263 462.539 270.32"/>
<polygon id="CORNERS-l12-o0" class="sticker" style="fill: #ff66cc" points="462.539 209.823 506.493 209.823 520.075 251.625 462.539 270.32"/>
<polygon id="CORNERS-l16-o0" class="sticker" style="fill: #ff66cc" points="520.075 251.625 533.658 293.428 498.098 319.263 462.539 270.32"/>
<polygon id="CORNERS-l6-o0" class="sticker" style="fill: #ff66cc" points="405.003 251.625 418.585 209.823 462.539 209.823 462.539 270.32"/>
<polygon id="CORNERS-l2-o0" class="sticker" style="fill: #ff66cc" points="426.980 319.263 391.420 293.428 405.003 251.625 462.539 270.32"/>
</g><g><title>D</title>
<polygon id="CORNERS-l18-o2" class="sticker" style="fill: #999999" points="587.618 300.698 631.572 300.698 645.154 342.500 587.618 361.195"/>
<polygon id="CORNERS-l8-o1" class="sticker" style="fill: #999999" points="552.058 410.138 516.499 384.303 530.081 342.500 587.618 361.195"/>
<polygon id="CORNERS-l16-o2" class="sticker" style="fill: #999999" points="530.081 342.500 543.664 300.698 587.618 300.698 587.618 361.195"/>
<polygon id="CORNERS-l17-o0" class="sticker" style="fill: #999999" points="623.177 410.138 587.618 435.974 552.058 410.138 587.618 361.195"/>
<polygon id="CORNERS-l14-o2" class="sticker" style="fill: #999999" points="645.154 342.500 658.736 384.303 623.177 410.138 587.618 361.195"/>
</g></svg>
\`});var a1,s1=U(()=>{je();Lr();Mt();a1={id:"kilominx",fullName:"Kilominx",kpuzzle:de(async()=>{let e=await jr("megaminx + chopasaurus"),t=JSON.parse(JSON.stringify(e.getKPuzzleDefinition(!0)));delete t.orbits.CENTERS,delete t.orbits.CENTERS2,delete t.startStateData.CENTERS,delete t.startStateData.CENTERS2;for(let i of Object.values(t.moves))delete i.CENTERS,delete i.CENTERS2;t.name="kilominx",delete t.experimentalPuzzleDescription;let r=await Promise.resolve().then(()=>(Pn(),$o)),n=new r.ExperimentalPGNotation(e,e.getOrbitsDef(!0)),l=new be(t,{experimentalPGNotation:{lookupMove:i=>i.toString()==="x2"||i.toString()==="x2'"?o.transformationData:n.lookupMove(i)}}),o=l.algToTransformation("Rv2 Fv Uv'");return t.moves.x2=o,l}),svg:de(async()=>(await Promise.resolve().then(()=>(i1(),o1))).kilominxSVG)}});var f1={};pe(f1,{rediCubeKPuzzleDefinition:()=>Ym});var Ym,u1=U(()=>{Ym={name:"redi_cube",orbits:{EDGES:{numPieces:12,numOrientations:2},CORNERS:{numPieces:8,numOrientations:3}},startStateData:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{F:{EDGES:{permutation:[8,0,2,3,4,5,6,7,1,9,10,11],orientation:[0,1,0,0,0,0,0,0,1,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[1,0,0,0,0,0,0,0]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}}},experimentalDerivedMoves:{z:"[x: y]",UR:"[y: F]",U:"[y2: F]",UL:"[y': F]",D:"[x: F]",L:"[z2: F]",R:"[x2: F]",B:"[y2 x: F]"}}});var g1={};pe(g1,{rediCubeSVG:()=>Jm});var Jm,c1=U(()=>{Jm=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="546px" height="418px" viewBox="-20 -20 546 418" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>redi-cube</title>
<g istroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <g transform="translate(1.000000, 1.000000)" fill-rule="nonzero" stroke="#000000" stroke-width="1.6">
    <g id="CORNERS-l0-o0" transform="translate(208.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o1" transform="translate(256.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o2" transform="translate(208.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o0" transform="translate(208.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o1" transform="translate(384.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o2" transform="translate(336.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o0" transform="translate(128.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o1" transform="translate(0.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o2" transform="translate(464.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o0" transform="translate(128.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o1" transform="translate(128.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o2" transform="translate(80.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o0" transform="translate(208.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o1" transform="translate(208.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o2" transform="translate(256.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o0" transform="translate(128.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o1" transform="translate(80.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o2" transform="translate(128.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o0" transform="translate(128.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o1" transform="translate(464.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o2" transform="translate(0.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o0" transform="translate(208.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o1" transform="translate(336.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o2" transform="translate(384.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="EDGES-l0-o0" transform="translate(168.000000, 60.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 20 20 -8.8817842e-16 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l0-o1" transform="translate(168.000000, 128.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l1-o0" transform="translate(188.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l1-o1" transform="translate(296.000000, 128.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o0" transform="translate(168.000000, 0.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o1" transform="translate(424.000000, 128.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o0" transform="translate(128.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o1" transform="translate(40.000000, 128.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o0" transform="translate(168.000000, 256.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o1" transform="translate(168.000000, 188.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l5-o0" transform="translate(188.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l5-o1" transform="translate(296.000000, 188.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o0" transform="translate(168.000000, 316.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 20 20 -5.32907052e-14 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o1" transform="translate(424.000000, 188.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 20 20 -1.77635684e-15 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l7-o0" transform="translate(128.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l7-o1" transform="translate(40.000000, 188.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l8-o0" transform="translate(188.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 2.66453526e-14 20"></polygon>
    </g>
    <g id="EDGES-l8-o1" transform="translate(256.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o0" transform="translate(128.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o1" transform="translate(60.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l10-o0" transform="translate(384.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l10-o1" transform="translate(316.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 5.32907052e-14 20"></polygon>
    </g>
    <g id="EDGES-l11-o0" transform="translate(444.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 -3.55271368e-15 20"></polygon>
    </g>
    <g id="EDGES-l11-o1" transform="translate(0.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
  </g>
</g>
</svg>
\`});var p1,m1=U(()=>{je();Mt();p1={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:de(async()=>new be((await Promise.resolve().then(()=>(u1(),f1))).rediCubeKPuzzleDefinition)),svg:async()=>(await Promise.resolve().then(()=>(c1(),g1))).rediCubeSVG}});var Ce,Jt=U(()=>{je();C2();P2();kl();vn();Lr();Af();wf();zf();If();Vf();Xf();l1();s1();m1();Ce={"3x3x3":la,"2x2x2":Tl,"4x4x4":new qr({id:"4x4x4",fullName:"4\\xD74\\xD74 Cube"}),"5x5x5":new qr({id:"5x5x5",fullName:"5\\xD75\\xD75 Cube"}),"6x6x6":new qr({id:"6x6x6",fullName:"6\\xD76\\xD76 Cube"}),"7x7x7":new qr({id:"7x7x7",fullName:"7\\xD77\\xD77 Cube"}),"40x40x40":new qr({id:"40x40x40",fullName:"40\\xD740\\xD740 Cube"}),clock:kf,megaminx:qf,pyraminx:Zf,skewb:new Lt({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:n1,fto:Of,gigaminx:new Lt({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new Lt({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:a1,redi_cube:p1}});function B1(e){L1=e}function Se(){if(!L1)throw new Error("Must be called from inside a worker, to avoid impact on page performance. Try importing from the top level of \`cubing/solve\`?")}var L1,Bt=U(()=>{L1=!1});async function R1(){return globalThis?.crypto?.getRandomValues?crypto.getRandomValues.bind(crypto):(await(Zm??(Zm=import($m())))).webcrypto.getRandomValues}var Zm,Xm,$m,d1=U(()=>{Zm=null,Xm="cr-yp-to",$m=()=>Xm.replace(/-/g,"")});function rL(e){let t=new Uint32Array(2);e(t);let r=t[0],n=t[1];return Math.floor(r*eL)+Math.floor(n/tL)}function nL(e){if(typeof e!="number"||e<0||Math.floor(e)!==e)throw new Error("randomInt.below() not called with a positive integer value.");if(e>h1)throw new Error(\`Called randomInt.below() with max == \${e}, which is larger than JavaScript can handle with integer precision.\`)}async function we(){let e=await R1(),t=r=>{nL(r);let n=rL(e),l=Math.floor(h1/r)*r;return n<l?n%r:t(r)};return t}var h1,eL,tL,ni=U(()=>{d1();h1=9007199254740992,eL=2097152,tL=2048});async function Zt(){let e=await we();return t=>t[e(t.length)]}var F1=U(()=>{ni()});async function D1(e){for(let t=1;t<e.length;t++){let r=(await lL)(t);[e[t],e[r]]=[e[r],e[t]]}}var lL,Rt=U(()=>{F1();ni();ni();lL=we()});function Ot(e,t){let r=[],n=[];for(let g of t.split(\`
\`)){let c=g.split(" ");if(!g.startsWith("SetOrder ")){if(g.startsWith("Alg ")){let u=_.fromString(g.substring(4));n.push({alg:u,transformation:e.algToTransformation(u)})}else if(g.startsWith("SubgroupSizes "))for(let u=1;u<c.length;u++)r.push(parseInt(c[u]))}}let l={ordering:new Array(r.length)},o=[],i=0;o.push(0);let a=_.fromString(""),s=e.identityTransformation();for(let g=0;g<r.length;g++)i+=r[g],o.push(i),n.splice(i-1,0,{alg:a,transformation:s});if(n.length!==i)throw Error(\`Bad sgs; expected \${i-r.length} algs but saw \${n.length-r.length}\`);let f={};for(let g in e.definition.orbits){let c=e.definition.orbits[g];f[g]=new Array(c.numPieces).fill(!1)}for(let g=r.length-1;g>=0;g--){let c=[];for(let p=o[g];p<o[g+1];p++){let m=n[p].transformation;for(let L in e.definition.orbits){let R=e.definition.orbits[L];for(let h=0;h<R.numPieces;h++)(m.transformationData[L].permutation[h]!==h||m.transformationData[L].orientation[h]!==0)&&(f[L][h]||(c.push({orbitName:L,permutationIdx:h}),f[L][h]=!0))}}let u={};for(let p=o[g];p<o[g+1];p++){let m=n[p].transformation.invert(),L="";for(let R=0;R<c.length;R++){let h=c[R];L=\`\${L} \${m.transformationData[h.orbitName].permutation[h.permutationIdx]} \${m.transformationData[h.orbitName].orientation[h.permutationIdx]}\`}u[L]=n[p],n[p].alg=n[p].alg.invert(),n[p].transformation=n[p].transformation.invert()}l.ordering[g]={pieceOrdering:c,lookup:u}}return l}var Mn=U(()=>{Le()});var x1={};pe(x1,{cachedData222:()=>mL,data222:()=>w1});async function mL(){return pL??(pL=w1())}async function w1(){return Ot(await Tl.kpuzzle(),\`SubgroupSizes 24 21 18 15 12 9 6

Alg F
Alg F2
Alg F'
Alg D
Alg D2
Alg D'
Alg L
Alg L2
Alg L'
Alg F U
Alg F U2
Alg F U'
Alg F L
Alg F L2
Alg F L'
Alg F2 U
Alg F2 U'
Alg F2 R
Alg F2 R'
Alg F' D
Alg F' D'
Alg F' R
Alg F' R'
Alg B
Alg B2
Alg B'
Alg B R
Alg B R2
Alg B R'
Alg B2 U
Alg B2 U2
Alg B2 U'
Alg B2 R
Alg B2 R2
Alg B2 R'
Alg B' U
Alg B' U'
Alg F D' F'
Alg F2 L F2
Alg B R' B2
Alg B R' U2
Alg B2 U R'
Alg B2 R B'
Alg R
Alg R2
Alg R'
Alg R2 U
Alg R2 U2
Alg R2 U'
Alg R' U
Alg R' U2
Alg R' U'
Alg F R F'
Alg F R2 F'
Alg L2 D' L2
Alg L' B L
Alg R2 U' R
Alg R' U R2
Alg R' U R'
Alg F R F' U2
Alg F' U F
Alg F' U2 F
Alg F' U' F
Alg L F L'
Alg L F2 L'
Alg L F' L'
Alg F' D R D'
Alg F' U2 F U'
Alg F D2 B D2 F'
Alg F2 D' L2 D F2
Alg F2 L F L' F
Alg L' F2 L' F2 L
Alg F L' U' L2 F L'
Alg F2 L F L' U2 F
Alg U
Alg U2
Alg U'
Alg F2 D2 B D2 F2
Alg F2 D2 B' D2 F2
Alg L2 D2 R D2 L2
Alg L2 D2 R' D2 L2
Alg F2 D2 B D2 F2 U
Alg F2 D2 B D2 F2 U'
Alg U F2 D2 B D2 F2
Alg U F2 D2 B' D2 F2
Alg F D B D' R' F' U
Alg F' D L F U B' L'
Alg F' L' F U L U L'
Alg D' L F D R' U' F'
Alg L F L' U' F' U' F
Alg L D' F' L' U' R F
Alg F D F U F' L' F' R'
Alg F2 D' F L F2 D F' R'
Alg F D' F L' D F R2 U2 F' U'
Alg F D' L D' L F D2 L2 B' R'
Alg F L' D F R2 D2 L D F' U2
Alg F L' D F2 D' L F L2 F2 U
Alg F D F' D L2 F R' F' D' B2 U'\`)}var pL,v1=U(()=>{Jt();Mn();pL=null});async function Nn(e,t){let r=new pt;r.experimentalPushAlg(e);for(let n of t){let l=(await Zt())(n);l!==null&&r.push(B.fromString(l))}return r.toAlg()}var oi=U(()=>{Le();Rt()});function C1(e,t){return e.slice(t)+e.slice(0,t)}function AL(e){let t=[[],[]];for(let r=0;r<6;r++)if(e.stateData.CENTERS.pieces[r]!==r)throw new Error("non-oriented puzzles are not supported");for(let r=0;r<12;r++)t[0].push(C1(dL[e.stateData.EDGES.pieces[r]],e.stateData.EDGES.orientation[r]));for(let r=0;r<8;r++)t[1].push(C1(hL[e.stateData.CORNERS.pieces[r]],e.stateData.CORNERS.orientation[r]));return t.push(FL),t}function P1(e){let t=AL(e);return DL.map(([r,n,l])=>t[r][n][l]).join("")}var dL,hL,FL,DL,M1=U(()=>{dL="UF UR UB UL DF DR DB DL FR FL BR BL".split(" "),hL="UFR URB UBL ULF DRF DFL DLB DBR".split(" "),FL="U L F R B D".split(" "),DL=[[1,2,0],[0,2,0],[1,1,0],[0,3,0],[2,0,0],[0,1,0],[1,3,0],[0,0,0],[1,0,0],[1,0,2],[0,1,1],[1,1,1],[0,8,1],[2,3,0],[0,10,1],[1,4,1],[0,5,1],[1,7,2],[1,3,2],[0,0,1],[1,0,1],[0,9,0],[2,2,0],[0,8,0],[1,5,1],[0,4,1],[1,4,2],[1,5,0],[0,4,0],[1,4,0],[0,7,0],[2,5,0],[0,5,0],[1,6,0],[0,6,0],[1,7,0],[1,2,2],[0,3,1],[1,3,1],[0,11,1],[2,1,0],[0,9,1],[1,6,1],[0,7,1],[1,5,2],[1,1,2],[0,2,1],[1,2,1],[0,10,0],[2,4,0],[0,11,0],[1,7,1],[0,6,1],[1,6,2]]});function N1(e,t){let r=new Be(e.kpuzzle,{EDGES:e.stateData.EDGES,CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation(),n=new Be(t.kpuzzle,{EDGES:t.stateData.EDGES,CORNERS:t.stateData.CORNERS,CENTERS:{pieces:t.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation();return r.isIdentical(n)}function G1(e,t){if(N1(e.startState(),t))return!1;for(let r of"ULFRBD")for(let n=1;n<4;n++){let l=e.moveToTransformation(new B(r,n)).toKState();if(N1(l,t))return!1}return!0}var T1=U(()=>{Le();je()});var O1,I1=U(()=>{O1=[["R U'","R2 B","D2 B2","D' L B'","R' U'","B","D B2","R' B","L' U","L2 B'","B2","D L B'","L U","B'","U'","R B","D' B2","L B'","U2","U L' B'","","U' L' B'","U","L' B'"],["F2 L2","F' L'","R' F L2","D' L2","F L2","F2 L'","R' F' L'","R2 F L2","R2 F2 L'","L2","F L'","D' L","D2 L2","R2 F' L'","D L","","L2 F L'","L F' L2","L F L'","F' L2","L'","D L2","D F L'","L"],["R B U2 B'","R2 B U' B'","F2 B U B'","F B2 L' B2","B2 L B2","B U' B'","R2 B U2 B'","R' B U' B'","B2 L' B2","F B U B'","B2 U' B2","B' L B","L F' B D' B'","B' U' B2 D B'","B U2 B'","R B U' B'","B2 L2 B2","D' B' L B","B U B'","F' B2 L' B2","","B2 L' B' U' B'"],["U F2 L2 U'","F' U L' U'","F2 U L' U'","U F L2 U'","U2 B2 U2","R' U' B U","D2 U L U'","D U2 B' U2","U L2 U'","F U L' U'","D U L U'","U2 B' U2","","U2 B' U' L' U'","U2 L' U2","U' B U","U L U'","D' U2 B' U2","U L' U'","U2 B U2"],["R' D' F2","F'","F2","D R F'","R D' F2","R2 F'","D' F2","R F'","F2 R' D' F2","F","D2 F2","D' R F'","R2 D' F2","R' F'","D F2","D2 R F'","","F R' D' F2"],["R' D2 F' D F","R F2 R2 F2","R2 F' D2 F","F' R2 D2 F","L D' L'","D F' D2 F","F2 R2 F2","R F' D2 F","F' R2 D' F","F' R' D2 F","F2 R' F2","L D L'","F' R D' F","F2 R F2","F' D2 F","","L D2 R D' L'","F' D2 F' R F2","D2 R2 F2 R2 F2","D F' D' F","F' D F"],["U F2 U'","R U F' U'","D R U F2 U'","U F U'","R2 U F2 U'","R' U F' U'","R U F2 U'","R2 U F' U'","","U L D L' F U'","F2 D' R D F2","D2 U F U'","R' U F2 U'","U F' U'","F2 D2 R D2 F2","D U F U'"],["R2","R' B' D B","D R'","F' R2 F","","R B' D B","R'","B' D B","D' R'","D2 F' R2 F","R","R2 B' D B","D2 R'","B' D' B"],["R2 D' R2","F' R' F R","R D' R2 D R'","D2 R2 D2 R2","R' D' F' R F","U F D F' U'","","R2 D2 B R' B' R'","R' F D' F2 R F","R2 D R2","F2 U F U' F","R' D F' R F","D R2 D2 R2","U F D' F' U'","D R' D2 F' R F","R2 D2 R2","U F D2 F' U'","R' D2 F' R F"],["B R B'","F D F' B R2 B'","D B R2 B'","D2 B R' B'","B R2 B'","D B R' B'","D' B R2 B'","B R' B'","","B R2 B' D B R' B'","D2 B R2 B'","D' B R' B'"],["","R' D R F D2 F'","R' D R","D F D' F'","R F' R' F","F D' F'","R' D' R","F D2 F'","R' D2 R","F D F'"],["","F2 D2 R F' R' D2 F' D2 F'","F2 D2 F' D' F D' F' D2 F'","F2 D F2 D F2 D2 F2","D2 F L D2 L' D2 F'","D F D2 L D2 L' F'","R' D B' D2 B D' R","R' D2 B' D2 B R","F D2 F' D F D F'","F D' L D2 L' D F'","B D' F D B' D' F'","F D2 L D2 L' F'","F D' L D L' D F'","F L D2 L' D2 F'","R' B' D2 B D2 R"],["D'","F L D L' D' F'","D2","L B D B' D' L'","D","B' L' D' L D B","","D F L D L' D' F'"],["F' D2 F D F' D F","F' D' R' D R F","F' R' D' R D F","B D R D' R' B'","","D B' D' L' D L B"],["D F D F' D F D2 F'","F' U2 B' R' B U2 F' L F' L' F'","","D2 L D L2 F L F2 D F"],["L B' L' F L B L' F'","F2 U F' D2 F U' F' D2 F'","D' F' D B D' F D B'","F L2 F R2 F' L2 F R2 F2","D B D' F' D B' D' F","R F L F' R' F L' F'","","D2 B L' U2 L B' D2 B L' U2 L B'","D2 F R' U2 R F' D2 F R' U2 R F'","R F L' F' R' F L F'","D F D' B' D F' D' B","L2 F2 L' B2 L F2 L' B2 L'"],["L B R' B' L' B R B'","R' B R F' R' B' R F","L D2 L U L' D2 L U' L2","","D2 B' D2 F D' L2 F L2 F' D2 B D' F'","D2 F' R' F R2 B' D2 B D2 R' F D2 F'","L B L' F L B' L' F'","F' D2 F' U' F D2 F' U F2","D' B' D F D' B D F'"],["","D2 F' L U2 L' F D2 F' L U2 L' F","D2 B' R U2 R' B D2 B' R U2 R' B"]]});var hu={};pe(hu,{initialize:()=>cB,solveState:()=>pB});function Z1(){}function UL(e){function t(){}return t.prototype=e||{},new t}function bL(e){return e instanceof Array?e[0]:null}function Vl(e,t,r){var n=Fi,l=SL,o=bL,i=n[e],a=o(i);i&&!a?q=i:(q=n[e]=t?l(t):{},q.castableTypeMap$=r,q.constructor=q,!t&&(q.typeMarker$=Z1));for(var s=3;s<arguments.length;++s)arguments[s].prototype=q;a&&(q.___clazz$=a)}function SL(e){var t=Fi;return UL(t[e])}function wL(){}function ui(e){return e<<24>>24}function Fa(){this.typeName=null,this.simpleName=null,this.packageName=null,this.compoundName=null,this.canonicalName=null,this.typeId=null,this.arrayLiterals=null}function Da(e,t){var r;return r=new Fa,r.packageName=e,r.compoundName=t,r}function Ur(e,t,r){var n;return n=Da(e,t),EL(r,n),n}function xL(e,t){var r;return r=Da(e,t),r.modifiers=2,r}function Di(e,t){var r;return r=Da("",e),r.typeId=t,r.modifiers=1,r}function X1(e,t){var r=e.arrayLiterals=e.arrayLiterals||[];return r[t]||(r[t]=e.createClassLiteralForArray(t))}function vL(e){if(e.isPrimitive())return null;var t=e.typeId,r=Fi[t];return r}function EL(e,t){if(!!e){t.typeId=e;var r=vL(t);if(!r){Fi[e]=[t];return}r.___clazz$=t}}function X(e,t){return X1(e,t)}function Y(e,t,r,n,l,o){var i;return i=eu(l,n),$(X(e,o),t,r,l,i),i}function et(e,t,r,n,l,o){return $1(e,t,r,n,l,0,o)}function $1(e,t,r,n,l,o,i){var a,s,f,g,c;if(g=l[o],f=o==i-1,a=f?n:0,c=eu(a,g),$(X(e,i-o),t[o],r[o],a,c),!f)for(++o,s=0;s<g;++s)c[s]=$1(e,t,r,n,l,o,i);return c}function $(e,t,r,n,l){return l.___clazz$=e,l.castableTypeMap$=t,l.typeMarker$=Z1,l.__elementTypeId$=r,l.__elementTypeCategory$=n,l}function eu(e,t){var r=new Array(t),n;switch(e){case 6:n={l:0,m:0,h:0};break;case 7:n=0;break;case 8:n=!1;break;default:return r}for(var l=0;l<t;++l)r[l]=n;return r}function W1(e){var t,r,n;return t=e&tt,r=e>>22&tt,n=e<0?hr:0,_L(t,r,n)}function _L(e,t,r){return{l:e,m:t,h:r}}function kL(e,t){var r,n,l;return r=e.l+t.l,n=e.m+t.m+(r>>22),l=e.h+t.h+(n>>22),{l:r&tt,m:n&tt,h:l&hr}}function It(e,t){return{l:e.l&t.l,m:e.m&t.m,h:e.h&t.h}}function Aa(e){var t,r;return e>-129&&e<128?(t=e+128,ii==null&&(ii=Y(uB,ae,293,256,0,1)),r=ii[t],!r&&(r=ii[t]=W1(e)),r):W1(e)}function tu(e,t){var r,n;return r=e.h>>19,n=t.h>>19,r==0?n!=0||e.h>t.h||e.h==t.h&&e.m>t.m||e.h==t.h&&e.m==t.m&&e.l>=t.l:!(n==0||e.h<t.h||e.h==t.h&&e.m<t.m||e.h==t.h&&e.m==t.m&&e.l<t.l)}function sa(e,t){return e.l!=t.l||e.m!=t.m||e.h!=t.h}function ga(e,t){return{l:e.l|t.l,m:e.m|t.m,h:e.h|t.h}}function gi(e,t){var r,n,l;return t&=63,t<22?(r=e.l<<t,n=e.m<<t|e.l>>22-t,l=e.h<<t|e.m>>22-t):t<44?(r=0,n=e.l<<t-22,l=e.m<<t-22|e.l>>44-t):(r=0,n=0,l=e.l<<t-44),{l:r&tt,m:n&tt,h:l&hr}}function Hr(e,t){var r,n,l,o,i;return t&=63,r=e.h,n=(r&yL)!=0,n&&(r|=-1048576),t<22?(i=r>>t,o=e.m>>t|r<<22-t,l=e.l>>t|e.m<<22-t):t<44?(i=n?hr:0,o=r>>t-22,l=e.m>>t-22|r<<44-t):(i=n?hr:0,o=n?tt:0,l=r>>t-44),{l:l&tt,m:o&tt,h:i&hr}}function ru(e,t){var r,n,l;return r=e.l-t.l,n=e.m-t.m+(r>>22),l=e.h-t.h+(n>>22),{l:r&tt,m:n&tt,h:l&hr}}function Yr(e){return e.l|e.m<<22}function zL(e){this.string=e}function Fr(e,t){return e>t?e:t}function ya(e,t){return e<t?e:t}function CL(e,t){return e.indexOf(t)}function PL(e){return ML(e,0,e.length)}function ML(e,t,r){for(var n="",l=t;l<r;){var o=Math.min(l+1e4,r);n+=String.fromCharCode.apply(null,e.slice(l,o)),l=o}return n}function NL(e){return String.fromCharCode(e&Ve)}function K1(e){return e.string+=" ",e}function Q1(e,t){return e.string+=t,e}function TL(){zL.call(this,"")}function ci(e,t){var r;if(e===t)return!0;if(e.length!=t.length)return!1;for(r=0;r<e.length;++r)if(e[r]!=t[r])return!1;return!0}function Jr(){j1||(j1=!0,Rr=et(Ae,[ae,De],[11,0],7,[495,18],2),Qn=et(Ae,[ae,De],[11,0],7,[324,18],2),Hn=et(Ae,[ae,De],[11,0],7,[336,18],2),Dr=et(Ae,[ae,De],[11,0],7,[495,8],2),Ui=Y(Ne,Me,0,20048,7,1),yi=Y(Ne,Me,0,20791,7,1),Kn=Y(Ne,Me,0,82945,7,1),Tn=et(Ae,[ae,De],[11,0],7,[2768,10],2),In=et(Ae,[ae,De],[11,0],7,[2768,10],2),Wn=et(Ae,[ae,De],[11,0],7,[24,10],2),Hl=et(Ae,[ae,De],[11,0],7,[24,16],2),Zr=et(Ae,[ae,De],[11,0],7,[140,16],2),Ai=Y(Ne,Me,0,8305,7,1),On=Y(Ne,Me,0,48441,7,1))}function OL(e,t,r){return e.slice_0=Rr[t.slice_0][r],e.flip=Hn[t.flip][(J(),$r)[r<<3|t.fsym]],e.fsym=e.flip&7^t.fsym,e.flip>>=3,e.twist=Qn[t.twist][$r[r<<3|t.tsym]],e.tsym=e.twist&7^t.tsym,e.twist>>=3,e.prun=Fr(Fr(at(Ui,e.twist*495+Dr[e.slice_0][e.tsym]),at(yi,e.flip*495+Dr[e.slice_0][e.fsym])),at(Kn,e.twist<<11|yr[e.flip<<3|e.fsym^e.tsym])),e.prun}function IL(e,t,r){return r=(J(),Ql)[3][r],e.flipc=Hn[t.flipc>>3][$r[r<<3|t.flipc&7]]^t.flipc&7,e.twistc=Qn[t.twistc>>3][$r[r<<3|t.twistc&7]]^t.twistc&7,at(Kn,e.twistc>>3<<11|yr[e.flipc^e.twistc&7])}function nu(e,t,r){var n;return e.twist=(J(),ql)[mi(t)],e.flip=Xr[pi(t)],e.tsym=e.twist&7,e.twist=e.twist>>3,e.prun=at(Kn,e.twist<<11|yr[e.flip^e.tsym]),e.prun>r||(e.fsym=e.flip&7,e.flip=e.flip>>3,e.slice_0=494-qn(t.ea,8,!0),e.prun=Fr(e.prun,Fr(at(Ui,e.twist*495+Dr[e.slice_0][e.tsym]),at(yi,e.flip*495+Dr[e.slice_0][e.fsym]))),e.prun>r)?!1:(n=new ue,Yl(t,1,n),Jl(t,1,n),e.twistc=ql[mi(n)],e.flipc=Xr[pi(n)],e.prun=Fr(e.prun,at(Kn,e.twistc>>3<<11|yr[e.flipc^e.twistc&7])),e.prun<=r)}function Wl(){Jr()}function at(e,t){return Jr(),e[t>>3]>>(t<<2)&15}function lu(e){Jr(),!(ai==2||ai==1&&!e)&&(ai==0&&(eB(),WL(),QL(),qL(),KL(),J(),pa(2048,xa,Xr,V1=Y(Ae,De,0,336,7,1),0),pa(2187,Ea,ql,fa=Y(Ae,De,0,324,7,1),1),jL(),VL(),HL()),Il(Ai,Wn,Hl,Tn,(J(),ma),584244,e),Il(On,ca,Zr,In,ma,514084,e),Il(Ui,Rr,Dr,Qn,fa,431619,e),Il(yi,Rr,Dr,Hn,V1,431619,e),Il(Kn,null,null,Qn,fa,103939,e),ai=e?2:1)}function WL(){var e,t,r,n;for(e=new ue,t=new ue,r=0;r<2768;r++)for(ZL(e,(J(),Gn)[r]),n=0;n<10;n++)Ar(e,fe[(Ye(),wt)[n]],t),Tn[r][n]=Bi(rr[ft(t.ca,8,!1)])&Ve}function KL(){var e,t,r,n,l;for(e=new ue,t=new ue,ca=et(Ae,[ae,De],[11,0],7,[140,10],2),r=0;r<140;r++){for(Ru(e.ca,r%70,0,!1),l=0;l<10;l++)Ar(e,(J(),fe)[(Ye(),wt)[l]],t),ca[r][l]=qn(t.ca,0,!1)+70*(165>>l&1^~~(r/70))&Ve;for(n=0;n<16;n++)Yl(e,(J(),st)[0][n],t),Zr[r][n]=qn(t.ca,0,!1)+70*~~(r/70)&Ve}}function QL(){var e,t,r,n;for(e=new ue,t=new ue,r=0;r<2768;r++)for(au(e,(J(),Gn)[r]),n=0;n<10;n++)dt(e,fe[(Ye(),wt)[n]],t),In[r][n]=rr[ft(t.ea,8,!0)]}function jL(){var e,t,r,n;for(e=new ue,t=new ue,r=0;r<336;r++)for(Sa(e,(J(),xa)[r]),n=0;n<18;n++)dt(e,fe[n],t),Hn[r][n]=Xr[pi(t)]}function qL(){var e,t,r,n,l;for(e=new ue,t=new ue,r=0;r<24;r++){for(en(e.ea,r,12,!0),l=0;l<10;l++)dt(e,(J(),fe)[(Ye(),wt)[l]],t),Wn[r][l]=ft(t.ea,12,!0)%24&Ve;for(n=0;n<16;n++)Jl(e,(J(),st)[0][n],t),Hl[r][n]=ft(t.ea,12,!0)%24&Ve}}function Il(e,t,r,n,l,o,i){var a,s,f,g,c,u,p,m,L,R,h,y,A,E,v,K,Z,M,ne,b,k,P,S,w,z,Q,H,ce,Re,Ue,ve,zt,Te,nt,ze,D;if(A=o&15,h=(o>>4&1)==1?ha:0,f=(o>>5&1)==1,a=o>>8&15,g=o>>12&15,c=o>>16&15,R=i?g:c,y=(1<<A)-1,s=t==null,m=s?2048:t.length,L=m*n.length,p=f?10:18,u=p==10?66:599186,v=(e[L>>3]>>(L<<2)&15)-1,v==-1){for(M=0;M<~~(L/8)+1;M++)e[M]=Ol;e[0]^=1,v=0}for(;v<R;){for(z=(v+1)*Ol^-1,ne=0;ne<e.length;ne++)ze=e[ne]^z,ze&=ze>>1,e[ne]+=ze&ze>>2&Ol;for(P=v>a,Ue=P?v+2:v,Re=Ue*Ol,E=P?v:v+2,++v,D=v^v+1,nt=0,M=0;M<L;++M,nt>>=4){if((M&7)==0&&(nt=e[M>>3],((nt^Re)-Ol&~(nt^Re)&-2004318072)==0)){M+=7;continue}if((nt&15)==Ue)for(H=M%m,ve=~~(M/m),K=0,Z=0,s&&(K=(J(),Xr)[H],Z=K&7,K>>=3),w=0;w<p;w++){if(Te=n[ve][w],s?ce=(J(),yr)[Hn[K][$r[w<<3|Z]]^Z^Te&y]:ce=r[t[H][w]][Te&y],Te>>=A,b=Te*m+ce,Q=e[b>>3]>>(b<<2)&15,Q!=E){Q<v-1&&(w+=u>>w&3);continue}if(P){e[M>>3]^=D<<(M<<2);break}for(e[b>>3]^=D<<(b<<2),S=1,zt=l[Te];(zt>>=1)!=0;S++)(zt&1)==1&&(k=Te*m,s?k+=(J(),yr)[Xr[ce]^S]:k+=r[ce][S^h>>(S<<1)&3],(e[k>>3]>>(k<<2)&15)==E&&(e[k>>3]^=D<<(k<<2)))}}}}function VL(){var e,t,r,n;for(e=new ue,t=new ue,r=0;r<324;r++)for(wa(e,(J(),Ea)[r]),n=0;n<18;n++)Ar(e,fe[n],t),Qn[r][n]=ql[mi(t)]}function HL(){var e,t,r,n,l,o,i,a;for(e=new ue,t=new ue,n=0;n<495;n++){for(Ru(e.ea,494-n,8,!0),o=0;o<18;o+=3)dt(e,(J(),fe)[o],t),Rr[n][o]=494-qn(t.ea,8,!0)&Ve;for(l=0;l<16;l+=2)Jl(e,(J(),st)[0][l],t),Dr[n][l>>1]=494-qn(t.ea,8,!0)&Ve}for(r=0;r<495;r++)for(l=0;l<18;l+=3)for(a=Rr[r][l],i=1;i<3;i++)a=Rr[a][l],Rr[r][l+i]=a&Ve}function J(){q1||(q1=!0,er=Y(jl,ae,7,16,0,1),fe=Y(jl,ae,7,18,0,1),bi=Y(gB,ae,0,18,6,1),uu=Y(Ne,Me,0,48,7,1),tr=et(Ne,[ae,Me],[17,0],7,[16,16],2),st=et(Ne,[ae,Me],[17,0],7,[16,16],2),Ql=et(Ne,[ae,Me],[17,0],7,[16,18],2),$r=Y(Ne,Me,0,144,7,1),dr=et(Ne,[ae,Me],[17,0],7,[16,18],2),xa=Y(Ae,De,0,336,7,1),Ea=Y(Ae,De,0,324,7,1),Gn=Y(Ae,De,0,2768,7,1),jn=Y(ee,ie,0,2768,7,1),va=Y(Ae,De,0,2768,7,1),Ri=Y(ee,ie,0,24,7,1),Xr=Y(Ae,De,0,2048,7,1),ql=Y(Ae,De,0,2187,7,1),rr=Y(Ae,De,0,40320,7,1),yr=Y(Ae,De,0,2688,7,1),La=new St(2531,1373,67026819,1367),Ba=new St(2089,1906,322752913,2040),di=$(X(ee,2),ae,10,0,[$(X(ee,1),ie,0,7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),$(X(ee,1),ie,0,7,[6,7,8,0,1,2,3,4,5,15,16,17,9,10,11,12,13,14]),$(X(ee,1),ie,0,7,[3,4,5,6,7,8,0,1,2,12,13,14,15,16,17,9,10,11]),$(X(ee,1),ie,0,7,[2,1,0,5,4,3,8,7,6,11,10,9,14,13,12,17,16,15]),$(X(ee,1),ie,0,7,[8,7,6,2,1,0,5,4,3,17,16,15,11,10,9,14,13,12]),$(X(ee,1),ie,0,7,[5,4,3,8,7,6,2,1,0,14,13,12,17,16,15,11,10,9])]),$L(),tB())}function Ua(e){e.ca=$(X(ee,1),ie,0,7,[0,1,2,3,4,5,6,7]),e.ea=$(X(ee,1),ie,0,7,[0,2,4,6,8,10,12,14,16,18,20,22])}function ou(e){!e.temps&&(e.temps=new ue),Ar(Ba,e,e.temps),Ar(e.temps,La,e),dt(Ba,e,e.temps),dt(e.temps,La,e)}function ba(e,t){var r,n;for(n=0;n<8;n++)e.ca[n]=t.ca[n];for(r=0;r<12;r++)e.ea[r]=t.ea[r]}function YL(e){return Bi(rr[ft(e.ca,8,!1)])}function JL(e){return rr[ft(e.ea,8,!0)]}function pi(e){var t,r;for(r=0,t=0;t<11;t++)r=r<<1|e.ea[t]&1;return r}function mi(e){var t,r;for(r=0,t=0;t<7;t++)r+=(r<<1)+(e.ca[t]>>3);return r}function Li(e){var t,r;for(!e.temps&&(e.temps=new ue),r=0;r<12;r++)e.temps.ea[e.ea[r]>>1]=(r<<1|e.ea[r]&1)<<24>>24;for(t=0;t<8;t++)e.temps.ca[e.ca[t]&7]=(t|32>>(e.ca[t]>>3)&24)<<24>>24;ba(e,e.temps)}function iu(e){var t,r,n,l,o,i,a;for(t=new su(e),l=new ue,r=Bi(rr[ft(t.ca,8,!1)])>>4,i={l:0,m:0,h:0},a=0;a<6;a++){if(n=Bi(rr[ft(t.ca,8,!1)])>>4,r==n)for(o=0;o<16;o++)Yl(t,st[0][o],l),ci(l.ca,e.ca)&&(Jl(t,st[0][o],l),ci(l.ea,e.ea)&&(i=ga(i,gi({l:1,m:0,h:0},(a<<4|o)<48?a<<4|o:48))));ou(t),a%3==2&&Li(t)}return i}function ZL(e,t){en(e.ca,t,8,!1)}function au(e,t){en(e.ea,t,8,!0)}function Sa(e,t){var r,n,l;for(n=0,r=10;r>=0;--r,t>>=1)n^=l=t&1,e.ea[r]=(e.ea[r]&-2|l)<<24>>24;e.ea[11]=(e.ea[11]&-2|n)<<24>>24}function wa(e,t){var r,n,l;for(n=15,r=6;r>=0;--r,t=~~(t/3))n-=l=t%3,e.ca[r]=(e.ca[r]&7|l<<3)<<24>>24;e.ca[7]=(e.ca[7]&7|n%3<<3)<<24>>24}function XL(e){var t,r,n,l,o;for(o=0,l=0,n=0;n<12;n++)l|=1<<(e.ea[n]>>1),o^=e.ea[n]&1;if(l!=4095)return-2;if(o!=0)return-3;for(r=0,o=0,t=0;t<8;t++)r|=1<<(e.ca[t]&7),o+=e.ca[t]>>3;return r!=255?-4:o%3!=0?-5:(Ra(ft(e.ea,12,!0),12)^Ra(ft(e.ca,8,!1),8))!=0?-6:0}function Yl(e,t,r){J();var n,l,o,i,a,s;for(s=er[st[0][t]],a=er[t],n=0;n<8;n++)o=s.ca[e.ca[a.ca[n]&7]&7]>>3,i=e.ca[a.ca[n]&7]>>3,l=o<3?i:(3-i)%3,r.ca[n]=(s.ca[e.ca[a.ca[n]&7]&7]&7|l<<3)<<24>>24}function Ar(e,t,r){J();var n,l,o;for(n=0;n<8;n++)l=e.ca[t.ca[n]&7]>>3,o=t.ca[n]>>3,r.ca[n]=(e.ca[t.ca[n]&7]&7|(l+o)%3<<3)<<24>>24}function fi(e,t,r){var n,l,o,i;for(n=0;n<8;n++)o=e.ca[t.ca[n]&7]>>3,i=t.ca[n]>>3,l=o+(o<3?i:6-i),l=l%3+(o<3==i<3?0:3),r.ca[n]=(e.ca[t.ca[n]&7]&7|l<<3)<<24>>24}function ue(){J(),Ua(this)}function St(e,t,r,n){Ua(this),en(this.ca,e,8,!1),wa(this,t),en(this.ea,r,12,!0),Sa(this,n)}function su(e){Ua(this),ba(this,e)}function Bi(e){return J(),e^ha>>((e&15)<<1)&3}function Jl(e,t,r){J();var n,l,o;for(o=er[st[0][t]],l=er[t],n=0;n<12;n++)r.ea[n]=(o.ea[e.ea[l.ea[n]>>1]>>1]^e.ea[l.ea[n]>>1]&1^l.ea[n]&1)<<24>>24}function dt(e,t,r){J();var n;for(n=0;n<12;n++)r.ea[n]=(e.ea[t.ea[n]>>1]^t.ea[n]&1)<<24>>24}function Br(e,t,r){J();var n;return n=va[e],r&&(n=n^ha>>((n&15)<<1)&3),n&65520|tr[n&15][t]}function fu(){return J(),0}function $L(){var e,t;for(fe[0]=new St(15120,0,119750400,0),fe[3]=new St(21021,1494,323403417,0),fe[6]=new St(8064,1236,29441808,550),fe[9]=new St(9,0,5880,0),fe[12]=new St(1230,412,2949660,0),fe[15]=new St(224,137,328552,137),e=0;e<18;e+=3)for(t=0;t<2;t++)fe[e+t+1]=new ue,dt(fe[e+t],fe[e],fe[e+t+1]),Ar(fe[e+t],fe[e],fe[e+t+1])}function eB(){J();var e,t,r;for(pa(40320,Gn,rr,ma=Y(Ae,De,0,2768,7,1),2),e=new ue,r=0;r<2768;r++)au(e,Gn[r]),jn[r]=qn(e.ea,0,!0)+Ra(Gn[r],8)*70<<24>>24,Li(e),va[r]=rr[ft(e.ea,8,!0)];for(t=0;t<24;t++)en(e.ea,t,12,!0),Li(e),Ri[t]=ft(e.ea,12,!0)%24<<24>>24}function tB(){var e,t,r,n,l,o,i,a,s,f,g,c,u,p,m,L;for(e=new ue,t=new ue,r=new St(28783,0,259268407,0),L=new St(15138,0,119765538,7),c=new St(5167,0,83473207,0),l=0;l<8;l++)c.ca[l]=ui(c.ca[l]|24);for(o=0;o<16;o++)er[o]=new su(e),fi(e,L,t),dt(e,L,t),m=t,t=e,e=m,o%4==3&&(fi(m,c,t),dt(m,c,t),m=t,t=e,e=m),o%8==7&&(fi(m,r,t),dt(m,r,t),m=t,t=e,e=m);for(i=0;i<16;i++)for(s=0;s<16;s++)for(fi(er[i],er[s],e),g=0;g<16;g++)if(ci(er[g].ca,e.ca)){tr[i][s]=g,st[g][s]=i;break}for(f=0;f<18;f++)for(p=0;p<16;p++){for(Yl(fe[f],st[0][p],e),u=0;u<18;u++)if(ci(fe[u].ca,e.ca)){Ql[p][f]=u,dr[p][(Ye(),Vn)[f]]=Vn[u];break}p%2==0&&($r[f<<3|p>>1]=Ql[p][f])}for(n=0;n<18;n++)for(bi[n]=iu(fe[n]),a=n,p=0;p<48;p++)Ql[p%16][a]<n&&(uu[p]|=1<<n),p%16==15&&(a=di[2][a])}function pa(e,t,r,n,l){J();var o,i,a,s,f,g,c,u,p;for(o=new ue,a=new ue,i=0,f=0,p=l>=2?1:2,g=l!=1,s=0;s<e;s++)if(r[s]==0){switch(l){case 0:Sa(o,s);break;case 1:wa(o,s);break;case 2:en(o.ea,s,8,!0)}for(c=0;c<16;c+=p){switch(g?Jl(o,c,a):Yl(o,c,a),l){case 0:f=pi(a);break;case 1:f=mi(a);break;case 2:f=ft(a.ea,8,!0)}l==0&&(yr[i<<3|c>>1]=f&Ve),f==s&&(n[i]=(n[i]|1<<~~(c/p))&Ve),u=~~((i<<4|c)/p),r[f]=u&Ve}t[i++]=s&Ve}return i}function rB(e,t,r,n,l,o,i,a){var s,f,g,c,u;if(c=Fr(at((Jr(),On),(i>>4)*140+Zr[(J(),jn)[a>>4]&255][st[i&15][a&15]]),Fr(at(On,n*140+Zr[jn[t]&255][st[l][r]]),at(Ai,t*24+Hl[o][r]))),c>e.maxDep2)return c-e.maxDep2;for(s=e.maxDep2;s>=c&&(u=pu(e,n,l,t,r,o,s,e.depth1,10),!(u<0));s--){for(s-=u,e.solLen=0,e.solution=new du,fB(e.solution,e.verbose,e.urfIdx,e.depth1),g=0;g<e.depth1+s;g++)Y1(e.solution,e.move[g]);for(f=e.preMoveLen-1;f>=0;f--)Y1(e.solution,e.preMoves[f]);e.solLen=e.solution.length_0}return s!=e.maxDep2?(e.maxDep2=ya(Lu,e.solLen-e.length1-1),tu(e.probe,e.probeMin)?0:1):1}function nB(e){var t,r,n,l,o,i,a,s,f,g,c,u,p,m,L;if(e.isRec=!1,tu(e.probe,e.solution?e.probeMin:e.probeMax))return 0;for(e.probe=kL(e.probe,{l:1,m:0,h:0}),n=e.valid1;n<e.depth1;n++)Ar(e.phase1Cubie[n],(J(),fe)[e.move[n]],e.phase1Cubie[n+1]),dt(e.phase1Cubie[n],fe[e.move[n]],e.phase1Cubie[n+1]);for(e.valid1=e.depth1,a=YL(e.phase1Cubie[e.depth1]),s=a&15,a>>=4,f=JL(e.phase1Cubie[e.depth1]),g=f&15,f>>=4,c=ft(e.phase1Cubie[e.depth1].ea,12,!0)%24,r=Br(f,g,!1),t=Br(a,s,!0),l=e.depth1==0?-1:e.move[e.depth1-1],o=e.preMoveLen==0?-1:e.preMoves[e.preMoveLen-1],L=0,m=(e.preMoveLen==0?1:2)*(e.depth1==0?1:2),u=0,p=(1<<m)-1;u<m;u++){if((p>>u&1)!=0){if(p&=~(1<<u),L=rB(e,a,s,f,g,c,r,t),L==0||L>2)break;L==2&&(p&=4<<u)}if(p==0)break;(u&1)==0&&e.depth1>0?(i=(Ye(),Vn)[~~(l/3)*3+1],e.move[e.depth1-1]=wt[i]*2-e.move[e.depth1-1],c=(Jr(),Wn)[c][i],a=Tn[a][(J(),dr)[s][i]],s=tr[a&15][s],a>>=4,f=In[f][dr[g][i]],g=tr[f&15][g],f>>=4,t=Br(a,s,!0),r=Br(f,g,!1)):e.preMoveLen>0&&(i=(Ye(),Vn)[~~(o/3)*3+1],e.preMoves[e.preMoveLen-1]=wt[i]*2-e.preMoves[e.preMoveLen-1],c=(J(),Ri)[(Jr(),Wn)[Ri[c]][i]],a=Tn[t>>4][dr[t&15][i]],t=a&-16|tr[a&15][t&15],a=Br(t>>4,t&15,!0),s=a&15,a>>=4,f=In[r>>4][dr[r&15][i]],r=f&-16|tr[f&15][r&15],f=Br(r>>4,r&15,!1),g=f&15,f>>=4)}return e.depth1>0&&(e.move[e.depth1-1]=l),e.preMoveLen>0&&(e.preMoves[e.preMoveLen-1]=o),L==0?0:2}function lB(e){var t;for(e.conjMask=0,e.selfSym=iu(e.cc),e.conjMask|=sa(It(Hr(e.selfSym,16),{l:Ve,m:0,h:0}),{l:0,m:0,h:0})?18:0,e.conjMask|=sa(It(Hr(e.selfSym,32),{l:Ve,m:0,h:0}),{l:0,m:0,h:0})?36:0,e.conjMask|=sa(It(Hr(e.selfSym,48),{l:Ve,m:0,h:0}),{l:0,m:0,h:0})?56:0,e.selfSym=It(e.selfSym,{l:tt,m:tt,h:15}),e.maxPreMoves=e.conjMask>7?0:20,t=0;t<6;t++)ba(e.urfCubieCube[t],e.cc),nu(e.urfCoordCube[t],e.urfCubieCube[t],20),ou(e.cc),t%3==2&&Li(e.cc)}function gu(e,t,r,n,l){var o,i,a,s,f,g;if(t.prun==0&&n<5)return e.allowShorter||n==0?(e.depth1-=n,f=nB(e),e.depth1+=n,f):1;for(g=fu(Aa(r)),o=0;o<18;o+=3)if(!(o==l||o==l-9)){for(a=0;a<3;a++)if(i=o+a,!(e.isRec&&i!=e.move[e.depth1-n]||g!=0&&(g&1<<i)!=0)){if(s=OL(e.nodeUD[n],t,i),s>n)break;if(s==n)continue;if(s=IL(e.nodeUD[n],t,i),s>n)break;if(s==n)continue;if(e.move[e.depth1-n]=i,e.valid1=ya(e.valid1,e.depth1-n),f=gu(e,e.nodeUD[n],r&Yr((J(),bi)[i]),n-1,o),f==0)return 0;if(f>=2)break}}return 1}function cu(e,t,r,n,l){var o,i,a;if(e.preMoveLen=e.maxPreMoves-t,(e.isRec?e.depth1==e.length1-e.preMoveLen:e.preMoveLen==0||(225207>>r&1)==0)&&(e.depth1=e.length1-e.preMoveLen,e.phase1Cubie[0]=n,e.allowShorter=e.depth1==ua&&e.preMoveLen!=0,nu(e.nodeUD[e.depth1+1],n,e.depth1)&&gu(e,e.nodeUD[e.depth1+1],l,e.depth1,-1)==0))return 0;if(t==0||e.preMoveLen+ua>=e.length1)return 1;for(a=fu(Aa(l)),(t==1||e.preMoveLen+1+ua>=e.length1)&&(a|=225207),r=~~(r/3)*3,o=0;o<18;o++){if(o==r||o==r-9||o==r+9){o+=2;continue}if(!(e.isRec&&o!=e.preMoves[e.maxPreMoves-t]||(a&1<<o)!=0)&&(Ar((J(),fe)[o],n,e.preMoveCubes[t]),dt(fe[o],n,e.preMoveCubes[t]),e.preMoves[e.maxPreMoves-t]=o,i=cu(e,t-1,o,e.preMoveCubes[t],l&Yr(bi[o])),i==0))return 0}return 1}function pu(e,t,r,n,l,o,i,a,s){var f,g,c,u,p,m,L,R,h,y,A;if(t==0&&n==0&&o==0)return i;for(h=(Ye(),Kl)[s],L=0;L<10;L++){if((h>>L&1)!=0){L+=66>>L&3;continue}if(R=(Jr(),Wn)[o][L],g=Tn[n][(J(),dr)[l][L]],c=tr[g&15][l],g>>=4,p=In[t][dr[r][L]],m=tr[p&15][r],p>>=4,u=Br(p,m,!1),f=Br(g,c,!0),y=at(On,(u>>4)*140+Zr[jn[f>>4]&255][st[u&15][f&15]]),y>i+1)return i-y+1;if(y>=i){L+=66>>L&3&i-y;continue}if(y=Fr(at(Ai,g*24+Hl[R][c]),at(On,p*140+Zr[jn[g]&255][st[m][c]])),y>=i){L+=66>>L&3&i-y;continue}if(A=pu(e,p,m,g,c,R,i-1,a+1,L),A>=0)return e.move[a]=wt[L],A;if(A<-2)break;A<-1&&(L+=66>>L&3)}return-1}function oB(e){for(e.length1=e.isRec?e.length1:0;e.length1<e.solLen;e.length1++)for(e.maxDep2=ya(Lu,e.solLen-e.length1-1),e.urfIdx=e.isRec?e.urfIdx:0;e.urfIdx<6;e.urfIdx++)if((e.conjMask&1<<e.urfIdx)==0&&cu(e,e.maxPreMoves,-30,e.urfCubieCube[e.urfIdx],Yr(It(e.selfSym,{l:Ve,m:0,h:0})))==0)return e.solution?J1(e.solution):"Error 8";return e.solution?J1(e.solution):"Error 7"}function iB(e,t){var r;return r=aB(e,t),r!=0?"Error "+(r<0?-r:r):(e.solLen=22,e.probe={l:0,m:0,h:0},e.probeMax={l:3531008,m:23,h:0},e.probeMin={l:0,m:0,h:0},e.verbose=0,e.solution=null,e.isRec=!1,lu(!1),lB(e),oB(e))}function aB(e,t){var r,n,l,o;for(n=0,l=Y(ee,ie,0,54,7,1),r=PL($(X(Ae,1),De,0,7,[t.charCodeAt(4),t.charCodeAt(13),t.charCodeAt(22),t.charCodeAt(31),t.charCodeAt(40),t.charCodeAt(49)])),o=0;o<54;o++){if(l[o]=CL(r,NL(t.charCodeAt(o)))<<24>>24,l[o]==-1)return-1;n+=1<<(l[o]<<2)}return n!=10066329?-1:(sB(l,e.cc),XL(e.cc))}function mu(){var e,t,r;for(this.move=Y(Ne,Me,0,31,7,1),this.nodeUD=Y(si,ae,31,21,0,1),this.nodeRL=Y(si,ae,31,21,0,1),this.nodeFB=Y(si,ae,31,21,0,1),this.cc=new ue,this.urfCubieCube=Y(jl,ae,7,6,0,1),this.urfCoordCube=Y(si,ae,31,6,0,1),this.phase1Cubie=Y(jl,ae,7,21,0,1),this.preMoveCubes=Y(jl,ae,7,21,0,1),this.preMoves=Y(Ne,Me,0,20,7,1),t=0;t<21;t++)this.nodeUD[t]=new Wl,this.nodeRL[t]=new Wl,this.nodeFB[t]=new Wl,this.phase1Cubie[t]=new ue;for(r=0;r<6;r++)this.urfCubieCube[r]=new ue,this.urfCoordCube[r]=new Wl;for(e=0;e<20;e++)this.preMoveCubes[e+1]=new ue}function Ye(){if(!H1){H1=!0;var e,t,r,n,l,o;for(Vr=$(X(ee,2),ae,10,0,[$(X(ee,1),ie,0,7,[8,9,20]),$(X(ee,1),ie,0,7,[6,18,38]),$(X(ee,1),ie,0,7,[0,36,47]),$(X(ee,1),ie,0,7,[2,45,11]),$(X(ee,1),ie,0,7,[29,26,15]),$(X(ee,1),ie,0,7,[27,44,24]),$(X(ee,1),ie,0,7,[33,53,42]),$(X(ee,1),ie,0,7,[35,17,51])]),Xt=$(X(ee,2),ae,10,0,[$(X(ee,1),ie,0,7,[5,10]),$(X(ee,1),ie,0,7,[7,19]),$(X(ee,1),ie,0,7,[3,37]),$(X(ee,1),ie,0,7,[1,46]),$(X(ee,1),ie,0,7,[32,16]),$(X(ee,1),ie,0,7,[28,25]),$(X(ee,1),ie,0,7,[30,43]),$(X(ee,1),ie,0,7,[34,52]),$(X(ee,1),ie,0,7,[23,12]),$(X(ee,1),ie,0,7,[21,41]),$(X(ee,1),ie,0,7,[50,39]),$(X(ee,1),ie,0,7,[48,14])]),$t=et(Ne,[ae,Me],[17,0],7,[13,13],2),da=$(X(GL,1),ae,2,4,["U ","U2","U'","R ","R2","R'","F ","F2","F'","D ","D2","D'","L ","L2","L'","B ","B2","B'"]),wt=$(X(Ne,1),Me,0,7,[0,1,2,4,7,9,10,11,13,16,3,5,6,8,12,14,15,17]),Vn=Y(Ne,Me,0,18,7,1),Kl=Y(Ne,Me,0,11,7,1),t=0;t<18;t++)Vn[wt[t]]=t;for(r=0;r<10;r++)for(n=~~(wt[r]/3),Kl[r]=0,l=0;l<10;l++)o=~~(wt[l]/3),Kl[r]|=(n==o||n%3==o%3&&n>=o?1:0)<<l;for(Kl[10]=0,e=0;e<13;e++)for($t[e][0]=$t[e][e]=1,l=1;l<e;l++)$t[e][l]=$t[e-1][l-1]+$t[e-1][l]}}function qn(e,t,r){Ye();var n,l,o,i,a;for(n=e.length-1,o=0,a=4,l=n;l>=0;l--)i=Bu(e[l],r),(i&12)==t&&(o+=$t[l][a--]);return o}function Ra(e,t){Ye();var r,n;for(n=0,r=t-2;r>=0;r--)n^=e%(t-r),e=~~(e/(t-r));return n&1}function ft(e,t,r){Ye();var n,l,o,i;for(l=0,i={l:1323536,m:2777561,h:1043915},n=0;n<t-1;n++)o=Bu(e[n],r)<<2,l=(t-n)*l+Yr(It(Hr(i,o),{l:15,m:0,h:0})),i=ru(i,gi({l:1118480,m:279620,h:69905},o));return l}function Bu(e,t){return t?e>>1:e&7}function Ru(e,t,r,n){Ye();var l,o,i,a;for(l=e.length-1,a=4,o=l,i=l;i>=0;i--)t>=$t[i][a]?(t-=$t[i][a--],e[i]=hi(e[i],a|r,n)):((o&12)==r&&(o-=4),e[i]=hi(e[i],o--,n))}function en(e,t,r,n){Ye();var l,o,i,a,s,f;for(f={l:1323536,m:2777561,h:1043915},l={l:0,m:0,h:0},a=2;a<=r;a++)l=ga(gi(l,4),Aa(t%a)),t=~~(t/a);for(o=0;o<r-1;o++)s=(Yr(l)&15)<<2,l=Hr(l,4),e[o]=hi(e[o],Yr(It(Hr(f,s),{l:15,m:0,h:0})),n),i=ru(gi({l:1,m:0,h:0},s),{l:1,m:0,h:0}),f=ga(It(f,i),It(Hr(f,4),{l:~i.l&tt,m:~i.m&tt,h:~i.h&hr}));e[r-1]=hi(e[r-1],Yr(It(f,{l:15,m:0,h:0})),n)}function hi(e,t,r){return(r?t<<1|e&1:t|e&-8)<<24>>24}function sB(e,t){Ye();var r,n,l,o,i,a,s,f;for(o=0;o<8;o++)t.ca[o]=0;for(i=0;i<12;i++)t.ea[i]=0;for(a=0;a<8;a++){for(f=0;f<3&&!(e[Vr[a][f]]==0||e[Vr[a][f]]==3);f++);for(r=e[Vr[a][(f+1)%3]],n=e[Vr[a][(f+2)%3]],s=0;s<8;s++)if(r==~~(Vr[s][1]/9)&&n==~~(Vr[s][2]/9)){t.ca[a]=ui(f%3<<3|s);break}}for(l=0;l<12;l++)for(s=0;s<12;s++){if(e[Xt[l][0]]==~~(Xt[s][0]/9)&&e[Xt[l][1]]==~~(Xt[s][1]/9)){t.ea[l]=ui(s<<1);break}if(e[Xt[l][0]]==~~(Xt[s][1]/9)&&e[Xt[l][1]]==~~(Xt[s][0]/9)){t.ea[l]=ui(s<<1|1);break}}}function Y1(e,t){var r,n,l;if(e.length_0==0){e.moves[e.length_0++]=t;return}if(r=~~(t/3),n=~~(e.moves[e.length_0-1]/3),r==n){l=(t%3+e.moves[e.length_0-1]%3+1)%4,l==3?--e.length_0:e.moves[e.length_0-1]=r*3+l;return}if(e.length_0>1&&r%3==n%3&&r==~~(e.moves[e.length_0-2]/3)){l=(t%3+e.moves[e.length_0-2]%3+1)%4,l==3?(e.moves[e.length_0-2]=e.moves[e.length_0-1],--e.length_0):e.moves[e.length_0-2]=r*3+l;return}e.moves[e.length_0++]=t}function fB(e,t,r,n){e.verbose=t,e.urfIdx=r,e.depth1=n}function J1(e){var t,r,n;if(r=new TL,n=(e.verbose&2)!=0?(e.urfIdx+3)%6:e.urfIdx,n<3)for(t=0;t<e.length_0;t++)(e.verbose&1)!=0&&t==e.depth1&&(r.string+=".  "),K1(Q1(r,(Ye(),da)[(J(),di)[n][e.moves[t]]]));else for(t=e.length_0-1;t>=0;t--)K1(Q1(r,(Ye(),da)[(J(),di)[n][e.moves[t]]])),(e.verbose&1)!=0&&t==e.depth1&&(r.string+=".  ");return r.string}function du(){this.moves=Y(Ne,Me,0,31,7,1)}var ae,tt,hr,yL,Ve,De,Me,ha,Ol,ie,q,Fi,ii,GL,j1,Zr,ca,Tn,On,In,Hn,Ai,Hl,Wn,Kn,Qn,Dr,yi,Rr,Ui,ai,si,q1,er,rr,Gn,Xr,xa,yr,Ri,jn,va,$r,Ql,dr,tr,st,V1,ma,fa,ql,Ea,uu,fe,bi,La,Ba,di,jl,Lu,ua,H1,$t,Kl,Vr,Xt,da,Vn,wt,Ne,uB,ee,gB,Ae,cB,pB,Fu=U(()=>{ae={3:1},tt=4194303,hr=1048575,yL=524288,Ve=65535,De={11:1,3:1},Me={17:1,3:1},ha=14540032,Ol=286331153,ie={10:1,3:1},Fi={};Vl(1,null,{},wL);Vl(79,1,{},Fa);q.createClassLiteralForArray=function(t){var r;return r=new Fa,r.modifiers=4,t>1?r.componentType=X1(this,t-1):r.componentType=this,r};q.isPrimitive=function(){return(this.modifiers&1)!=0};GL=Ur("java.lang","String",2);j1=!1;Vl(31,1,{31:1},Wl);q.flip=0;q.flipc=0;q.fsym=0;q.prun=0;q.slice_0=0;q.tsym=0;q.twist=0;q.twistc=0;ai=0,si=Ur("org.cubing.min2phase.client","CoordCube",31),q1=!1;jl=Ur("org.cubing.min2phase.client","CubieCube",7);Vl(72,1,{},mu);q.allowShorter=!1;q.conjMask=0;q.depth1=0;q.isRec=!1;q.length1=0;q.maxDep2=0;q.maxPreMoves=0;q.preMoveLen=0;q.probe={l:0,m:0,h:0};q.probeMax={l:0,m:0,h:0};q.probeMin={l:0,m:0,h:0};q.selfSym={l:0,m:0,h:0};q.solLen=0;q.urfIdx=0;q.valid1=0;q.verbose=0;Lu=12,ua=7,H1=!1;Vl(150,1,{},du);q.depth1=0;q.length_0=0;q.urfIdx=0;q.verbose=0;Ne=Di("int","I");Ur("com.google.gwt.lang","CollapsedPropertyHolder",252);Ur("com.google.gwt.lang","JavaClassHierarchySetupUtil",254);uB=Ur("com.google.gwt.lang","LongLibBase/LongEmul",null);Ur("com.google.gwt.lang","ModuleUtils",257);ee=Di("byte","B"),gB=Di("long","J"),Ae=Di("char","C");Ur("com.google.gwt.user.client.rpc","XsrfToken",null),xL("java.util","Map/Entry");cB=function(){lu(!1)},pB=function(e){return iB(new mu,e)}});async function Au(){let e=await Ce["3x3x3"].kpuzzle(),t=e.startState();for(let r of O1)t=t.applyAlg(_.fromString((await Zt())(r)));return G1(e,t)?t:Au()}function yu(){return mB??(mB=Promise.resolve().then(()=>(Fu(),hu)))}async function _a(e){return Se(),_.fromString((await yu()).solveState(P1(e)))}async function Yn(){return _a(await Au())}async function Uu(){(await yu()).initialize()}async function bu(){return Nn(await Yn(),LB)}async function Su(){let e=new pt,t=await Yn();return e.experimentalPushAlg(Du),e.experimentalPushAlg(t),e.experimentalPushAlg(Du),e.toAlg()}var mB,LB,Du,ka=U(()=>{Le();Jt();Rt();Bt();oi();M1();T1();I1();mB=null;LB=[[null,"Rw","Rw2","Rw'","Fw","Fw'"],[null,"Dw","Dw2","Dw'"]];Du=new _("R' U' F")});function se(e,...t){let r=t.length,n=e[t[r-1]];for(let l=r;l>0;l--)e[t[l]]=e[t[l-1]];return e[t[0]]=n,se}function wu(e,t,r,n){r=(r||8)-1;let l=1985229328,o=0;n??(n=0),n<0&&(t<<=1);for(let i=0;i<r;++i){let a=za[r-i],s=~~(t/a);o^=s,t%=a,s<<=2,e[i]=l>>s&7;let f=(1<<s)-1;l=(l&f)+(l>>4&~f)}return n<0&&(o&1)!==0?(e[r]=e[r-1],e[r-1]=l&7):e[r]=l&7,e}var me,za,xu=U(()=>{me=[],za=[1];for(let e=0;e<32;++e){me[e]=[];for(let t=0;t<32;++t)me[e][t]=0}for(let e=0;e<32;++e){me[e][0]=me[e][e]=1,za[e+1]=za[e]*(e+1);for(let t=1;t<e;++t)me[e][t]=me[e-1][t-1]+me[e-1][t]}});var Pg={};pe(Pg,{initialize:()=>ER,random444Scramble:()=>_R});function N(e,t){let r=new Array(e);if(t!==void 0)for(let n=0;n<e;n++)r[n]=new Array(t);return r}function AB(e){return new to[e]}function ct(e,t,r,...n){let l=to[e];l&&!l.___clazz$?V=l.prototype:(!l&&(l=to[e]=function(){}),V=l.prototype=t<0?{}:AB(t),V.castableTypeMap$=r);for(let o of n)o.prototype=V;l.___clazz$&&(V.___clazz$=l.___clazz$,l.___clazz$=null)}function vr(e){let t={};for(let r=0,n=e.length;r<n;++r)t[e[r]]=1;return t}function Zu(){}function yB(e,t){let r=Xu(0,t);return $u(e.___clazz$,e.castableTypeMap$,e.queryId$,r),r}function Xu(e,t){let r=new Array(t);if(e===3)for(let n=0;n<t;++n){let l={m:0,l:0,h:0};l.l=l.m=l.h=0,r[n]=l}else if(e>0){let n=[null,0,!1][e];for(let l=0;l<t;++l)r[l]=n}return r}function Ka(e,t,r,n,l){let o=Xu(l,n);return $u(e,t,r,o),o}function $u(e,t,r,n){return eg(),bB(n,Ma,Na),n.___clazz$=e,n.castableTypeMap$=t,n.queryId$=r,n}function zi(e,t,r){return e[t]=r}function eg(){vu||(vu=!0,Ma=[],Na=[],UB(new Zu,Ma,Na))}function UB(e,t,r){let n=0,l;for(let o in e)(l=e[o])&&(t[n]=o,r[n]=l,++n)}function bB(e,t,r){eg();for(let n=0,l=t.length;n<l;++n)e[t[n]]=r[n]}function SB(e,t){return e.castableTypeMap$&&!!e.castableTypeMap$[t]}function wB(e,t){return e!==null&&SB(e,t)}function xB(){if(Eu)return!1;Eu=!0,ji=N(15582,36),qi=N(15582),_t=N(15582),tl=N(48,48),vt=N(48,36),el=N(48),qa=N(48)}function Qa(e){e.ct=N(24)}function _u(e,t){let r,n;if(wB(t,Yu)){for(r=t,n=0;n<24;++n)if(e.ct[n]!==r.ct[n])return!1;return!0}return!1}function Ci(e){let t,r,n;for(r=0,n=8,t=23;t>=0;--t)e.ct[t]===1&&(r+=me[t][n--]);return r}function wi(e){let t,r;if(ol!==null)return ol[Ci(e)];for(r=0;r<48;++r){if(t=CB(Ci(e)),t!==-1)return t*64+r;oe(e,0),r%2===1&&oe(e,1),r%8===7&&oe(e,2),r%16===15&&oe(e,3)}}function xt(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:F(e.ct,0,1,2,3,r);break;case 1:F(e.ct,16,17,18,19,r);break;case 2:F(e.ct,8,9,10,11,r);break;case 3:F(e.ct,4,5,6,7,r);break;case 4:F(e.ct,20,21,22,23,r);break;case 5:F(e.ct,12,13,14,15,r);break;case 6:F(e.ct,0,1,2,3,r),F(e.ct,8,20,12,16,r),F(e.ct,9,21,13,17,r);break;case 7:F(e.ct,16,17,18,19,r),F(e.ct,1,15,5,9,r),F(e.ct,2,12,6,10,r);break;case 8:F(e.ct,8,9,10,11,r),F(e.ct,2,19,4,21,r),F(e.ct,3,16,5,22,r);break;case 9:F(e.ct,4,5,6,7,r),F(e.ct,10,18,14,22,r),F(e.ct,11,19,15,23,r);break;case 10:F(e.ct,20,21,22,23,r),F(e.ct,0,8,4,14,r),F(e.ct,3,11,7,13,r);break;case 11:F(e.ct,12,13,14,15,r),F(e.ct,1,20,7,18,r),F(e.ct,0,23,6,17,r)}}function oe(e,t){switch(t){case 0:xt(e,19),xt(e,28);break;case 1:xt(e,21),xt(e,32);break;case 2:F(e.ct,0,3,1,2,1),F(e.ct,8,11,9,10,1),F(e.ct,4,7,5,6,1),F(e.ct,12,15,13,14,1),F(e.ct,16,19,21,22,1),F(e.ct,17,18,20,23,1);break;case 3:xt(e,18),xt(e,29),xt(e,24),xt(e,35)}}function ku(e,t){let r;for(r=0;r<t;++r)oe(e,0),r%2===1&&oe(e,1),r%8===7&&oe(e,2),r%16===15&&oe(e,3)}function ja(e,t){let r,n;for(n=8,r=23;r>=0;--r)e.ct[r]=0,t>=me[r][n]&&(t-=me[r][n--],e.ct[r]=1)}function xi(e,t){let r;for(r=0;r<24;++r)e.ct[r]=t.ct[r]}function ro(){let e;for(Qa(this),e=0;e<8;++e)this.ct[e]=1;for(e=8;e<24;++e)this.ct[e]=0}function vi(e,t){let r;for(Qa(this),r=0;r<24;++r)this.ct[r]=~~(e.ct[r]/2)===t?1:0}function Xl(e){let t;for(Qa(this),t=0;t<24;++t)this.ct[t]=e[t]}function vB(){let e,t,r=new ro,n=new ro;for(e=0;e<15582;++e)for(ja(n,qi[e]),t=0;t<36;++t)xi(r,n),xt(r,t),ji[e][t]=wi(r)}function EB(){let e,t,r,n,l,o,i,a;for(Ji(_t),_t[0]=0,t=0,r=1;r!==15582;)for(o=t>4,a=o?-1:t,e=o?t:-1,++t,n=0;n<15582;++n)if(_t[n]===a){for(i=0;i<27;++i)if(l=~~ji[n][i]>>>6,_t[l]===e)if(++r,o){_t[n]=t;break}else _t[l]=t}}function _B(e){let t,r,n,l=new Xl(e.ct);for(n=0;n<48;++n){for(t=!0,r=0;r<24;++r)if(l.ct[r]!==~~(r/4)){t=!1;break}if(t)return n;oe(l,0),n%2===1&&oe(l,1),n%8===7&&oe(l,2),n%16===15&&oe(l,3)}return-1}function kB(){let e,t,r,n=new ro;for(e=0;e<24;++e)n.ct[e]=e;let l=new Xl(n.ct),o=new Xl(n.ct),i=new Xl(n.ct);for(e=0;e<48;++e){for(t=0;t<48;++t){for(r=0;r<48;++r)_u(n,l)&&(tl[e][t]=r,r===0&&(el[e]=t)),oe(l,0),r%2===1&&oe(l,1),r%8===7&&oe(l,2),r%16===15&&oe(l,3);oe(n,0),t%2===1&&oe(n,1),t%8===7&&oe(n,2),t%16===15&&oe(n,3)}oe(n,0),e%2===1&&oe(n,1),e%8===7&&oe(n,2),e%16===15&&oe(n,3)}for(e=0;e<48;++e)for(xi(n,o),ku(n,el[e]),t=0;t<36;++t)for(xi(l,n),xt(l,t),ku(l,e),r=0;r<36;++r)if(xi(i,o),xt(i,r),_u(i,l)){vt[e][t]=r;break}for(ja(n,0),e=0;e<48;++e)qa[el[e]]=Ci(n),oe(n,0),e%2===1&&oe(n,1),e%8===7&&oe(n,2),e%16===15&&oe(n,3)}function zB(){let e,t,r,n,l=new ro,o=N(22984);for(t=0;t<22984;t++)o[t]=0;for(e=0,t=0;t<735471;++t)if((o[~~t>>>5]&1<<(t&31))===0){for(ja(l,t),n=0;n<48;++n)r=Ci(l),o[~~r>>>5]|=1<<(r&31),ol!==null&&(ol[r]=e<<6|el[n]),oe(l,0),n%2===1&&oe(l,1),n%8===7&&oe(l,2),n%16===15&&oe(l,3);qi[e++]=t}}function CB(e){let t=DR(qi,e);return t>=0?t:-1}function PB(){zu||(zu=!0,Gi=N(70,28),Ni=N(6435,28),lg=N(70,16),rg=N(6435,16),rt=N(450450),ng=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0])}function Pi(e){let t,r,n;for(r=0,n=8,t=14;t>=0;--t)e.ct[t]!==e.ct[15]&&(r+=me[t][n--]);return r}function Mi(e){let t,r,n;for(r=0,n=4,t=6;t>=0;--t)e.rl[t]!==e.rl[7]&&(r+=me[t][n--]);return r*2+e.parity}function $n(e,t){e.parity^=ng[t];let r=t%3;switch(t=~~(t/3),t){case 0:F(e.ct,0,1,2,3,r);break;case 1:F(e.rl,0,1,2,3,r);break;case 2:F(e.ct,8,9,10,11,r);break;case 3:F(e.ct,4,5,6,7,r);break;case 4:F(e.rl,4,5,6,7,r);break;case 5:F(e.ct,12,13,14,15,r);break;case 6:F(e.ct,0,1,2,3,r),F(e.rl,0,5,4,1,r),F(e.ct,8,9,12,13,r);break;case 7:F(e.rl,0,1,2,3,r),F(e.ct,1,15,5,9,r),F(e.ct,2,12,6,10,r);break;case 8:F(e.ct,8,9,10,11,r),F(e.rl,0,3,6,5,r),F(e.ct,3,2,5,4,r);break;case 9:F(e.ct,4,5,6,7,r),F(e.rl,3,2,7,6,r),F(e.ct,11,10,15,14,r);break;case 10:F(e.rl,4,5,6,7,r),F(e.ct,0,8,4,14,r),F(e.ct,3,11,7,13,r);break;case 11:F(e.ct,12,13,14,15,r),F(e.rl,1,4,7,2,r),F(e.ct,1,0,7,6,r)}}function Jn(e,t){switch(t){case 0:$n(e,19),$n(e,28);break;case 1:$n(e,21),$n(e,32);break;case 2:F(e.ct,0,3,1,2,1),F(e.ct,8,11,9,10,1),F(e.ct,4,7,5,6,1),F(e.ct,12,15,13,14,1),F(e.rl,0,3,5,6,1),F(e.rl,1,2,4,7,1)}}function tg(e,t,r){let n;for(n=0;n<16;++n)e.ct[n]=~~(t.ct[n]/2);for(n=0;n<8;++n)e.rl[n]=t.ct[n+16];e.parity=r}function Cu(e,t){let r,n;for(n=8,e.ct[15]=0,r=14;r>=0;--r)t>=me[r][n]?(t-=me[r][n--],e.ct[r]=1):e.ct[r]=0}function Pu(e,t){let r,n;for(e.parity=t&1,t>>>=1,n=4,e.rl[7]=0,r=6;r>=0;--r)t>=me[r][n]?(t-=me[r][n--],e.rl[r]=1):e.rl[r]=0}function Va(){this.rl=N(8),this.ct=N(16)}function MB(){let e,t,r,n,l,o,i,a,s,f,g=new Va;for(l=0;l<70;++l)for(a=0;a<28;++a)Pu(g,l),$n(g,rn[a]),Gi[l][a]=Mi(g);for(l=0;l<70;++l)for(Pu(g,l),i=0;i<16;++i)lg[l][i]=Mi(g),Jn(g,0),i%2===1&&Jn(g,1),i%8===7&&Jn(g,2);for(l=0;l<6435;++l)for(Cu(g,l),i=0;i<16;++i)rg[l][i]=Pi(g)&65535,Jn(g,0),i%2===1&&Jn(g,1),i%8===7&&Jn(g,2);for(l=0;l<6435;++l)for(a=0;a<28;++a)Cu(g,l),$n(g,rn[a]),Ni[l][a]=Pi(g)&65535;for(Ji(rt),rt[0]=rt[18]=rt[28]=rt[46]=rt[54]=rt[56]=0,r=0,n=6;n!==450450;){let c=r>6,u=c?-1:r,p=c?r:-1;for(++r,l=0;l<450450;++l)if(rt[l]===u){for(e=~~(l/70),s=l%70,a=0;a<23;++a)if(t=Ni[e][a],f=Gi[s][a],o=t*70+f,rt[o]===p)if(++n,c){rt[l]=r;break}else rt[o]=r}}}function NB(){Mu||(Mu=!0,$l=N(29400,20),ig=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],Sr=N(29400),Ja=[0,9,14,23,27,28,41,42,46,55,60,69],Za=N(70))}function Ha(e){let t,r,n,l;for(r=0,l=4,t=6;t>=0;--t)e.ud[t]!==e.ud[7]&&(r+=me[t][l--]);for(r*=35,l=4,t=6;t>=0;--t)e.fb[t]!==e.fb[7]&&(r+=me[t][l--]);r*=12;let o=e.fb[7]^e.ud[7];for(n=0,l=4,t=7;t>=0;--t)e.rl[t]!==o&&(n+=me[t][l--]);return e.parity+2*(r+Za[n])}function GB(e,t){switch(e.parity^=ig[t],t){case 0:case 1:case 2:F(e.ud,0,1,2,3,t%3);break;case 3:F(e.rl,0,1,2,3,1);break;case 4:case 5:case 6:F(e.fb,0,1,2,3,(t-1)%3);break;case 7:case 8:case 9:F(e.ud,4,5,6,7,(t-1)%3);break;case 10:F(e.rl,4,5,6,7,1);break;case 11:case 12:case 13:F(e.fb,4,5,6,7,(t+1)%3);break;case 14:F(e.ud,0,1,2,3,1),F(e.rl,0,5,4,1,1),F(e.fb,0,5,4,1,1);break;case 15:F(e.rl,0,1,2,3,1),F(e.fb,1,4,7,2,1),F(e.ud,1,6,5,2,1);break;case 16:F(e.fb,0,1,2,3,1),F(e.ud,3,2,5,4,1),F(e.rl,0,3,6,5,1);break;case 17:F(e.ud,4,5,6,7,1),F(e.rl,3,2,7,6,1),F(e.fb,3,2,7,6,1);break;case 18:F(e.rl,4,5,6,7,1),F(e.fb,0,3,6,5,1),F(e.ud,0,3,4,7,1);break;case 19:F(e.fb,4,5,6,7,1),F(e.ud,0,7,6,1,1),F(e.rl,1,4,7,2,1)}}function og(e,t,r){let n,l=(t.ct[0]>t.ct[8]?1:0)^(t.ct[8]>t.ct[16]?1:0)^(t.ct[0]>t.ct[16]?1:0)?1:0;for(n=0;n<8;++n)e.ud[n]=t.ct[n]&1^1,e.fb[n]=t.ct[n+8]&1^1,e.rl[n]=t.ct[n+16]&1^1^l;e.parity=l^r}function TB(e,t){let r,n,l,o;for(e.parity=t&1,t>>>=1,l=Ja[t%12],t=~~(t/12),o=4,r=7;r>=0;--r)e.rl[r]=0,l>=me[r][o]&&(l-=me[r][o--],e.rl[r]=1);for(n=t%35,t=~~(t/35),o=4,e.fb[7]=0,r=6;r>=0;--r)n>=me[r][o]?(n-=me[r][o--],e.fb[r]=1):e.fb[r]=0;for(o=4,e.ud[7]=0,r=6;r>=0;--r)t>=me[r][o]?(t-=me[r][o--],e.ud[r]=1):e.ud[r]=0}function Ya(){this.ud=N(8),this.rl=N(8),this.fb=N(8)}function OB(){let e,t,r,n;for(r=0;r<12;++r)Za[Ja[r]]=r;let l=new Ya;for(r=0;r<29400;++r)for(n=0;n<20;++n)TB(l,r),GB(l,n),$l[r][n]=Ha(l)&65535;for(Ji(Sr),Sr[0]=0,e=0,t=1;t!==29400;){for(r=0;r<29400;++r)if(Sr[r]===e)for(n=0;n<17;++n)Sr[$l[r][n]]===-1&&(Sr[$l[r][n]]=e+1,++t);++e}}function IB(e,t){let r;for(r=0;r<24;++r)e.ct[r]=t.ct[r]}function WB(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:F(e.ct,0,1,2,3,r);break;case 1:F(e.ct,16,17,18,19,r);break;case 2:F(e.ct,8,9,10,11,r);break;case 3:F(e.ct,4,5,6,7,r);break;case 4:F(e.ct,20,21,22,23,r);break;case 5:F(e.ct,12,13,14,15,r);break;case 6:F(e.ct,0,1,2,3,r),F(e.ct,8,20,12,16,r),F(e.ct,9,21,13,17,r);break;case 7:F(e.ct,16,17,18,19,r),F(e.ct,1,15,5,9,r),F(e.ct,2,12,6,10,r);break;case 8:F(e.ct,8,9,10,11,r),F(e.ct,2,19,4,21,r),F(e.ct,3,16,5,22,r);break;case 9:F(e.ct,4,5,6,7,r),F(e.ct,10,18,14,22,r),F(e.ct,11,19,15,23,r);break;case 10:F(e.ct,20,21,22,23,r),F(e.ct,0,8,4,14,r),F(e.ct,3,11,7,13,r);break;case 11:F(e.ct,12,13,14,15,r),F(e.ct,1,20,7,18,r),F(e.ct,0,23,6,17,r)}}function Xa(){let e;for(this.ct=N(24),e=0;e<24;++e)this.ct[e]=~~(e/4)}function ag(e){let t,r,n;for(Xa.call(this),t=0;t<23;++t)n=t+e(24-t),this.ct[n]!==this.ct[t]&&(r=this.ct[t],this.ct[t]=this.ct[n],this.ct[n]=r)}function KB(){Nu||(Nu=!0,Ft=N(18),qB())}function sg(e){e.cp=[0,1,2,3,4,5,6,7],e.co=[0,0,0,0,0,0,0,0]}function fg(e,t){let r;for(r=0;r<8;++r)e.cp[r]=t.cp[r],e.co[r]=t.co[r]}function QB(e,t){!e.temps&&(e.temps=new Vi),ug(e,Ft[t],e.temps),fg(e,e.temps)}function jB(e,t){let r,n;for(n=0,r=6;r>=0;--r)n+=e.co[r]=t%3,t=~~(t/3);e.co[7]=(15-n)%3}function ug(e,t,r){let n,l,o,i;for(n=0;n<8;++n)r.cp[n]=e.cp[t.cp[n]],o=e.co[t.cp[n]],i=t.co[n],l=o,l=l+(o<3?i:6-i),l=l%3,(o>=3?1:0)^(i>=3?1:0)&&(l=l+3),r.co[n]=l}function Vi(){sg(this)}function br(e,t){sg(this),wu(this.cp,e),jB(this,t)}function gg(e){br.call(this,e(40320),e(2187))}function qB(){let e,t;for(Ft[0]=new br(15120,0),Ft[3]=new br(21021,1494),Ft[6]=new br(8064,1236),Ft[9]=new br(9,0),Ft[12]=new br(1230,412),Ft[15]=new br(224,137),e=0;e<18;e+=3)for(t=0;t<2;++t)Ft[e+t+1]=new Vi,ug(Ft[e+t],Ft[e],Ft[e+t+1])}function VB(){Gu||(Gu=!0,Et=N(1937880),Hi=N(1538),Ii=N(1538),fl=N(11880),Bg=[0,1,6,3,4,5,2,7],es=N(160,12),ts=N(160,12),$a=[1,1,1,3,12,60,360,2520,20160,181440,1814400,19958400,239500800],Ga=[0,2,4,6,1,3,7,5,8,9,10,11])}function Zn(e,t,r,n,l){let o=e.edgeo[l];e.edgeo[l]=e.edge[n],e.edge[n]=e.edgeo[r],e.edgeo[r]=e.edge[t],e.edge[t]=o}function il(e,t){let r,n,l,o,i;for(e.isStd||mg(e),n=0,i=1985229328,o=47768,r=0;r<t;++r)l=e.edge[r]<<2,n*=12-r,l>=32?(n+=o>>l-32&15,o-=4368<<l-32):(n+=i>>l&15,o-=4369,i-=286331152<<l);return n}function cg(e){let t,r=il(e,4);t=fl[r];let n=t&7;t>>=3,Oi(e,n);let l=il(e,10)%20160;return t*20160+l}function Ti(e,t){switch(e.isStd=!1,t){case 0:se(e.edge,0,4,1,5),se(e.edgeo,0,4,1,5);break;case 1:he(e.edge,0,4,1,5),he(e.edgeo,0,4,1,5);break;case 2:se(e.edge,0,5,1,4),se(e.edgeo,0,5,1,4);break;case 3:he(e.edge,5,10,6,11),he(e.edgeo,5,10,6,11);break;case 4:se(e.edge,0,11,3,8),se(e.edgeo,0,11,3,8);break;case 5:he(e.edge,0,11,3,8),he(e.edgeo,0,11,3,8);break;case 6:se(e.edge,0,8,3,11),se(e.edgeo,0,8,3,11);break;case 7:se(e.edge,2,7,3,6),se(e.edgeo,2,7,3,6);break;case 8:he(e.edge,2,7,3,6),he(e.edgeo,2,7,3,6);break;case 9:se(e.edge,2,6,3,7),se(e.edgeo,2,6,3,7);break;case 10:he(e.edge,4,8,7,9),he(e.edgeo,4,8,7,9);break;case 11:se(e.edge,1,9,2,10),se(e.edgeo,1,9,2,10);break;case 12:he(e.edge,1,9,2,10),he(e.edgeo,1,9,2,10);break;case 13:se(e.edge,1,10,2,9),se(e.edgeo,1,10,2,9);break;case 14:he(e.edge,0,4,1,5),he(e.edgeo,0,4,1,5),se(e.edge,9,11),se(e.edgeo,8,10);break;case 15:he(e.edge,5,10,6,11),he(e.edgeo,5,10,6,11),se(e.edge,1,3),se(e.edgeo,0,2);break;case 16:he(e.edge,0,11,3,8),he(e.edgeo,0,11,3,8),se(e.edge,5,7),se(e.edgeo,4,6);break;case 17:he(e.edge,2,7,3,6),he(e.edgeo,2,7,3,6),se(e.edge,8,10),se(e.edgeo,9,11);break;case 18:he(e.edge,4,8,7,9),he(e.edgeo,4,8,7,9),se(e.edge,0,2),se(e.edgeo,1,3);break;case 19:he(e.edge,1,9,2,10),he(e.edgeo,1,9,2,10),se(e.edge,4,6),se(e.edgeo,5,7)}}function rl(e,t){switch(e.isStd=!1,t){case 0:Ti(e,14),Ti(e,17);break;case 1:Zn(e,11,5,10,6),Zn(e,5,10,6,11),Zn(e,1,2,3,0),Zn(e,4,9,7,8),Zn(e,8,4,9,7),Zn(e,0,1,2,3);break;case 2:ht(e,4,5),ht(e,5,4),ht(e,11,8),ht(e,8,11),ht(e,7,6),ht(e,6,7),ht(e,9,10),ht(e,10,9),ht(e,1,1),ht(e,0,0),ht(e,3,3),ht(e,2,2)}}function Oi(e,t){for(;t>=2;)t-=2,rl(e,1),rl(e,2);t!==0&&rl(e,0)}function oo(e,t){let r,n,l,o,i,a;for(i=1985229328,a=47768,l=0,r=0;r<11;++r)if(n=$a[11-r],o=~~(t/n),t=t%n,l^=o,o<<=2,o>=32){o=o-32,e.edge[r]=a>>o&15;let s=(1<<o)-1;a=(a&s)+(a>>4&~s)}else{e.edge[r]=i>>o&15;let s=(1<<o)-1;i=(i&s)+(i>>>4&~s)+(a<<28),a=a>>4}for((l&1)===0?e.edge[11]=i:(e.edge[11]=e.edge[10],e.edge[10]=i),r=0;r<12;++r)e.edgeo[r]=r;e.isStd=!0}function Tu(e,t){let r;for(r=0;r<12;++r)e.edge[r]=t.edge[r],e.edgeo[r]=t.edgeo[r];e.isStd=t.isStd}function pg(e,t){let r,n,l,o;for(e.temp===null&&(e.temp=N(12)),r=0;r<12;++r)e.temp[r]=r,e.edge[r]=t.ep[Ga[r]+12]%12;for(n=1,r=0;r<12;++r)for(;e.edge[r]!==r;)o=e.edge[r],e.edge[r]=e.edge[o],e.edge[o]=o,l=e.temp[r],e.temp[r]=e.temp[o],e.temp[o]=l,n^=1;for(r=0;r<12;++r)e.edge[r]=e.temp[t.ep[Ga[r]]%12];return n}function mg(e){let t;for(e.temp===null&&(e.temp=N(12)),t=0;t<12;++t)e.temp[e.edgeo[t]]=t;for(t=0;t<12;++t)e.edge[t]=e.temp[e.edge[t]],e.edgeo[t]=t;e.isStd=!0}function he(e,t,r,n,l){let o;o=e[t],e[t]=e[n],e[n]=o,o=e[r],e[r]=e[l],e[l]=o}function ht(e,t,r){let n=e.edge[t];e.edge[t]=e.edgeo[r],e.edgeo[r]=n}function nr(){this.edge=N(12),this.edgeo=N(12)}function HB(){let e,t,r,n,l,o,i,a,s,f,g,c,u,p,m,L,R,h,y,A,E,v,K=new nr,Z=new nr,M=new nr;for(Ji(Et),a=0,Si=1,Ca(Et,0,0);Si!==31006080&&(m=a>9,i=a%3,o=(a+1)%3,f=m?3:i,e=m?i:3,!(a>=9));){for(c=0;c<31006080;c+=16)if(v=Et[~~c>>4],!(!m&&v===-1)){for(g=c,s=c+16;g<s;++g,v>>=2)if((v&3)===f){for(y=~~(g/20160),t=Hi[y],n=g%20160,oo(K,t*20160+n),R=0;R<17;++R)if(r=al(K.edge,R<<3,4),A=fl[r],E=A&7,A>>=3,l=al(K.edge,R<<3|E,10)%20160,u=A*20160+l,no(Et,u)===e){if(Ca(Et,m?g:u,o),++Si,m)break;if(h=Ii[A],h!==1)for(Tu(Z,K),Ti(Z,R),Oi(Z,E),L=1;(h=~~h>>1&65535)!==0;++L)(h&1)===1&&(Tu(M,Z),Oi(M,L),p=A*20160+il(M,10)%20160,no(Et,p)===e&&(Ca(Et,p,o),++Si))}}}++a}}function no(e,t){return e[t>>4]>>((t&15)<<1)&3}function al(e,t,r){let n,l,o,i,a,s=ts[t],f=es[t];for(l=0,a=1985229328,i=47768,n=0;n<r;++n)o=s[e[f[n]]]<<2,l*=12-n,o>=32?(l+=i>>o-32&15,i-=4368<<o-32):(l+=a>>o&15,i-=4369,a-=286331152<<o);return l}function Lg(e){let t,r,n,l,o,i,a,s,f,g,c,u=new nr;if(i=0,o=no(Et,e),o===3)return 10;for(;e!==0;)for(o===0?o=2:--o,f=~~(e/20160),t=Hi[f],n=e%20160,oo(u,t*20160+n),s=0;s<17;++s)if(r=al(u.edge,s<<3,4),g=fl[r],c=g&7,g>>=3,l=al(u.edge,s<<3|c,10)%20160,a=g*20160+l,no(Et,a)===o){++i,e=a;break}return i}function YB(e,t){let r=no(Et,e);return r===3?10:(1227133513<<r>>t&3)+t-1}function JB(){let e,t,r,n=new nr;for(t=0;t<20;++t)for(r=0;r<8;++r){for(oo(n,0),Ti(n,t),Oi(n,r),e=0;e<12;++e)es[t<<3|r][e]=n.edge[e];for(mg(n),e=0;e<12;++e)ts[t<<3|r][e]=n.temp[e]}}function ZB(){let e,t,r,n,l=new nr,o=N(1485);for(t=0;t<1485;t++)o[t]=0;for(e=0,t=0;t<11880;++t)if((o[~~t>>>3]&1<<(t&7))===0){for(oo(l,t*$a[8]),n=0;n<8;++n)r=il(l,4),r===t&&(Ii[e]=(Ii[e]|1<<n)&65535),o[~~r>>3]=o[~~r>>3]|1<<(r&7),fl[r]=e<<3|Bg[n],rl(l,0),n%2===1&&(rl(l,1),rl(l,2));Hi[e++]=t}}function Ca(e,t,r){e[t>>4]^=(3^r)<<((t&15)<<1)}function XB(){Ou||(Ou=!0)}function $B(e){let t,r,n;for(t=0,n=!1,r=0;r<12;++r)t|=1<<e.ep[r],n=n!==e.ep[r]>=12;return t&=~~t>>12,t===0&&!n}function eR(e,t){let r;for(r=0;r<24;++r)e.ep[r]=t.ep[r]}function tR(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:F(e.ep,0,1,2,3,r),F(e.ep,12,13,14,15,r);break;case 1:F(e.ep,11,15,10,19,r),F(e.ep,23,3,22,7,r);break;case 2:F(e.ep,0,11,6,8,r),F(e.ep,12,23,18,20,r);break;case 3:F(e.ep,4,5,6,7,r),F(e.ep,16,17,18,19,r);break;case 4:F(e.ep,1,20,5,21,r),F(e.ep,13,8,17,9,r);break;case 5:F(e.ep,2,9,4,10,r),F(e.ep,14,21,16,22,r);break;case 6:F(e.ep,0,1,2,3,r),F(e.ep,12,13,14,15,r),F(e.ep,9,22,11,20,r);break;case 7:F(e.ep,11,15,10,19,r),F(e.ep,23,3,22,7,r),F(e.ep,2,16,6,12,r);break;case 8:F(e.ep,0,11,6,8,r),F(e.ep,12,23,18,20,r),F(e.ep,3,19,5,13,r);break;case 9:F(e.ep,4,5,6,7,r),F(e.ep,16,17,18,19,r),F(e.ep,8,23,10,21,r);break;case 10:F(e.ep,1,20,5,21,r),F(e.ep,13,8,17,9,r),F(e.ep,14,0,18,4,r);break;case 11:F(e.ep,2,9,4,10,r),F(e.ep,14,21,16,22,r),F(e.ep,7,15,1,17,r)}}function rs(){let e;for(this.ep=N(24),e=0;e<24;++e)this.ep[e]=e}function Rg(e){let t,r,n;for(rs.call(this),t=0;t<23;++t)n=t+e(24-t),n!==t&&(r=this.ep[t],this.ep[t]=this.ep[n],this.ep[n]=r)}function rR(){Iu||(Iu=!0,Ta=[35,1,34,2,4,6,22,5,19])}function dg(e){e.moveBuffer=N(60)}function nR(e,t){return e.value-t.value}function sl(e,t){let r;for(eR(e.edge,t.edge),IB(e.center,t.center),fg(e.corner,t.corner),e.value=t.value,e.add1=t.add1,e.length1=t.length1,e.length2=t.length2,e.length3=t.length3,e.sym=t.sym,r=0;r<60;++r)e.moveBuffer[r]=t.moveBuffer[r];e.moveLength=t.moveLength,e.edgeAvail=t.edgeAvail,e.centerAvail=t.centerAvail,e.cornerAvail=t.cornerAvail}function wr(e){for(;e.centerAvail<e.moveLength;)WB(e.center,e.moveBuffer[e.centerAvail++]);return e.center}function hg(e){for(;e.cornerAvail<e.moveLength;)QB(e.corner,e.moveBuffer[e.cornerAvail++]%18);return e.corner}function lo(e){for(;e.edgeAvail<e.moveLength;)tR(e.edge,e.moveBuffer[e.edgeAvail++]);return e.edge}function lR(e){let t,r,n,l,o,i,a=new Array(e.moveLength-(e.add1?2:0));for(r=0,t=0;t<e.length1;++t)a[r++]=e.moveBuffer[t];for(i=e.sym,t=e.length1+(e.add1?2:0);t<e.moveLength;++t)vt[i][e.moveBuffer[t]]>=27?(a[r++]=vt[i][e.moveBuffer[t]]-9,l=Ta[vt[i][e.moveBuffer[t]]-27],i=tl[i][l]):a[r++]=vt[i][e.moveBuffer[t]];let s=tl[el[i]][_B(wr(e))];for(o="",i=s,t=r-1;t>=0;--t)n=a[t],n=~~(n/3)*3+(2-n%3),vt[i][n]>=27?(o=o+Oa[vt[i][n]-9]+" ",l=Ta[vt[i][n]-27],i=tl[i][l]):o=o+Oa[vt[i][n]]+" ";return o}function tn(e,t){e.moveBuffer[e.moveLength++]=t}function Wi(){dg(this),this.edge=new rs,this.center=new Xa,this.corner=new Vi}function Yi(e){Wi.call(this),sl(this,e)}function Fg(e){dg(this),this.edge=new Rg(e),this.center=new ag(e),this.corner=new gg(e)}function oR(e,t){return t.value-e.value}function Ki(e,t){return oR(e,t)}function Dg(){}function iR(){if(Wu)return;Wu=!0;let e,t;for(Oa=["U  ","U2 ","U' ","R  ","R2 ","R' ","F  ","F2 ","F' ","D  ","D2 ","D' ","L  ","L2 ","L' ","B  ","B2 ","B' ","Uw ","Uw2","Uw'","Rw ","Rw2","Rw'","Fw ","Fw2","Fw'","Dw ","Dw2","Dw'","Lw ","Lw2","Lw'","Bw ","Bw2","Bw'"],rn=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,21,22,23,25,28,30,31,32,34,36],Zl=[0,1,2,4,6,7,8,9,10,11,13,15,16,17,19,22,25,28,31,34,36],Ku=N(37),Qu=N(37),Xn=N(37,36),Ei=N(29,28),_i=N(21,20),Pa=N(36),eo=N(28),nl=N(20),e=0;e<29;++e)Ku[rn[e]]=e;for(e=0;e<21;++e)Qu[Zl[e]]=e;for(e=0;e<36;++e){for(t=0;t<36;++t)Xn[e][t]=~~(e/3)===~~(t/3)||~~(e/3)%3===~~(t/3)%3&&e>t;Xn[36][e]=!1}for(e=0;e<29;++e)for(t=0;t<28;++t)Ei[e][t]=Xn[rn[e]][rn[t]];for(e=0;e<21;++e)for(t=0;t<20;++t)_i[e][t]=Xn[Zl[e]][Zl[t]];for(e=0;e<36;++e)for(Pa[e]=36,t=e;t<36;++t)if(!Xn[e][t]){Pa[e]=t-1;break}for(e=0;e<28;++e)for(eo[e]=28,t=e;t<28;++t)if(!Ei[e][t]){eo[e]=t-1;break}for(e=0;e<20;++e)for(nl[e]=20,t=e;t<20;++t)if(!_i[e][t]){nl[e]=t-1;break}}function aR(e){let t,r,n,l,o,i,a,s,f,g,c,u;e.solution="";let p=wi(new vi(wr(e.c),0)),m=wi(new vi(wr(e.c),1)),L=wi(new vi(wr(e.c),2)),R=_t[~~p>>6],h=_t[~~m>>6],y=_t[~~L>>6];for(e.p1SolsCnt=0,e.arr2idx=0,BR(e.p1sols.heap),e.length1=(R<h?R:h)<y?R<h?R:h:y;e.length1<100&&!(y<=e.length1&&ki(e,~~L>>>6,L&63,e.length1,-1,0)||R<=e.length1&&ki(e,~~p>>>6,p&63,e.length1,-1,0)||h<=e.length1&&ki(e,~~m>>>6,m&63,e.length1,-1,0));++e.length1);let A=wR(e.p1sols,Ka(vR,vr([hB,Ia,Wa]),Ju,0,0));A.sort(function(K,Z){return K.value-Z.value}),t=9;do{e:for(s=A[0].value;s<100;++s)for(i=0;i<A.length&&!(A[i].value>s);++i)if(!(s-A[i].length1>t)&&(sl(e.c1,A[i]),tg(e.ct2,wr(e.c1),Qi(lo(e.c1).ep)),c=Pi(e.ct2),u=Mi(e.ct2),e.length1=A[i].length1,e.length2=s-A[i].length1,Ag(e,c,u,e.length2,28,0)))break e;++t}while(s===100);e.arr2.sort(function(K,Z){return K.value-Z.value}),a=0,r=13;do{e:for(f=e.arr2[0].value;f<100;++f)for(i=0;i<Math.min(e.arr2idx,100)&&!(e.arr2[i].value>f);++i)if(!(f-e.arr2[i].length1-e.arr2[i].length2>r)&&(o=pg(e.e12,lo(e.arr2[i])),og(e.ct3,wr(e.arr2[i]),o^Qi(hg(e.arr2[i]).cp)),n=Ha(e.ct3),l=il(e.e12,10),g=Lg(cg(e.e12)),g<=f-e.arr2[i].length1-e.arr2[i].length2&&yg(e,l,n,g,f-e.arr2[i].length1-e.arr2[i].length2,20,0))){a=i;break e}++r}while(f===100);let E=new Yi(e.arr2[a]);e.length1=E.length1,e.length2=E.length2;let v=f-e.length1-e.length2;for(i=0;i<v;++i)tn(E,Zl[e.move3[i]]);e.solution=lR(E)}function sR(e,t){let r,n;for(sl(e.c1,e.c),r=0;r<e.length1;++r)tn(e.c1,e.move1[r]);switch(qa[t]){case 0:tn(e.c1,24),tn(e.c1,35),e.move1[e.length1]=24,e.move1[e.length1+1]=35,e.add1=!0,t=19;break;case 12869:tn(e.c1,18),tn(e.c1,29),e.move1[e.length1]=18,e.move1[e.length1+1]=29,e.add1=!0,t=34;break;case 735470:e.add1=!1,t=0}tg(e.ct2,wr(e.c1),Qi(lo(e.c1).ep));let l=Pi(e.ct2),o=Mi(e.ct2),i=rt[l*70+o];return e.c1.value=i+e.length1,e.c1.length1=e.length1,e.c1.add1=e.add1,e.c1.sym=t,++e.p1SolsCnt,e.p1sols.heap.size<500?n=new Yi(e.c1):(n=bR(e.p1sols),n.value>e.c1.value&&sl(n,e.c1)),pR(e.p1sols,n),e.p1SolsCnt===1e4}function fR(e){let t;for(sl(e.c2,e.c1),t=0;t<e.length2;++t)tn(e.c2,e.move2[t]);if(!$B(lo(e.c2)))return!1;let r=pg(e.e12,lo(e.c2));og(e.ct3,wr(e.c2),r^Qi(hg(e.c2).cp));let n=Ha(e.ct3);il(e.e12,10);let l=Lg(cg(e.e12));return e.arr2[e.arr2idx]?sl(e.arr2[e.arr2idx],e.c2):e.arr2[e.arr2idx]=new Yi(e.c2),e.arr2[e.arr2idx].value=e.length1+e.length2+Math.max(l,Sr[n]),e.arr2[e.arr2idx].length2=e.length2,++e.arr2idx,e.arr2idx===e.arr2.length}function uR(e,t){return bg(),e.c=new Fg(t),aR(e),e.solution}function ki(e,t,r,n,l,o){let i,a,s,f,g,c;if(t===0)return n===0&&sR(e,r);for(i=0;i<27;i+=3)if(!(i===l||i===l-9||i===l-18))for(f=0;f<3;++f){if(s=i+f,a=ji[t][vt[r][s]],g=_t[~~a>>>6],g>=n){if(g>n)break;continue}if(c=tl[r][a&63],a>>>=6,e.move1[o]=s,ki(e,a,c,n-1,i,o+1))return!0}return!1}function Ag(e,t,r,n,l,o){let i,a,s,f;if(t===0&&rt[r]===0)return n===0&&fR(e);for(a=0;a<23;++a){if(Ei[l][a]){a=eo[a];continue}if(i=Ni[t][a],f=Gi[r][a],s=rt[i*70+f],s>=n){s>n&&(a=eo[a]);continue}if(e.move2[o]=rn[a],Ag(e,i,f,n-1,a,o+1))return!0}return!1}function yg(e,t,r,n,l,o,i){let a,s,f,g,c,u,p,m,L;if(l===0)return t===0&&r===0;for(oo(e.tempe[i],t),c=0;c<17;++c){if(_i[o][c]){c=nl[c];continue}if(f=$l[r][c],u=Sr[f],u>=l){u>l&&c<14&&(c=nl[c]);continue}if(g=al(e.tempe[i].edge,c<<3,10),a=~~(g/20160),m=fl[a],L=m&7,m>>=3,s=al(e.tempe[i].edge,c<<3|L,10)%20160,p=YB(m*20160+s,n),p>=l){p>l&&c<14&&(c=nl[c]);continue}if(yg(e,g,f,p,l-1,c,i+1))return e.move3[i]=c,!0}return!1}function Ug(){let e;for(this.p1sols=new _g(new Dg),this.move1=N(15),this.move2=N(20),this.move3=N(20),this.c1=new Wi,this.c2=new Wi,this.ct2=new Va,this.ct3=new Ya,this.e12=new nr,this.tempe=N(20),this.arr2=N(100),e=0;e<20;++e)this.tempe[e]=new nr}function bg(){ju||(kB(),ol=N(735471),zB(),vB(),ol=null,EB(),MB(),OB(),JB(),ZB(),HB(),ju=!0)}function gR(){qu||(qu=!0)}function Qi(e){let t,r,n,l;for(l=0,t=0,n=e.length;t<n;++t)for(r=t;r<n;++r)e[t]>e[r]&&(l^=1);return l}function F(e,t,r,n,l,o){let i;switch(o){case 0:i=e[l],e[l]=e[n],e[n]=e[r],e[r]=e[t],e[t]=i;return;case 1:i=e[t],e[t]=e[n],e[n]=i,i=e[r],e[r]=e[l],e[l]=i;return;case 2:i=e[t],e[t]=e[r],e[r]=e[n],e[n]=e[l],e[l]=i;return}}function Sg(){}function wg(e,t,r,n){let l=new Sg;return l.typeName=e+t,vg(r!==0?-r:0)&&Eg(r!==0?-r:0,l),l.modifiers=4,l.superclass=ns,l.componentType=n,l}function xg(e,t,r,n){let l=new Sg;return l.typeName=e+t,vg(r)&&Eg(r,l),l.superclass=n,l}function cR(e){let t=to[e.seedId];return e=null,t}function vg(e){return typeof e=="number"&&e>0}function Eg(e,t){let r;if(t.seedId=e,e===2)r=String.prototype;else if(e>0){let n=cR(t);if(n)r=n.prototype;else{n=to[e]=function(){},n.___clazz$=t;return}}else return;r.___clazz$=t}function pR(e,t){if(UR(e,t))return!0}function mR(e){e.array=Ka(kg,vr([Ia,Wa]),Hu,0,0)}function LR(e,t){return zi(e.array,e.size++,t),!0}function BR(e){e.array=Ka(kg,vr([Ia,Wa]),Hu,0,0),e.size=0}function xr(e,t){return e.array[t]}function RR(e,t){let r=e.array[t];return FR(e.array,t,1),--e.size,r}function ll(e,t,r){let n=e.array[t];return zi(e.array,t,r),n}function dR(e,t){let r;for(t.length<e.size&&(t=yB(t,e.size)),r=0;r<e.size;++r)zi(t,r,e.array[r]);return t.length>e.size&&zi(t,e.size,null),t}function hR(){mR(this),this.array.length=500}function FR(e,t,r){e.splice(t,r)}function DR(e,t){let r,n,l,o;for(n=0,r=e.length-1;n<=r;)if(l=n+(~~(r-n)>>1),o=e[l],o<t)n=l+1;else if(o>t)r=l-1;else return l;return-n-1}function Ji(e){AR(e,e.length)}function AR(e,t){let r;for(r=0;r<t;++r)e[r]=-1}function yR(e,t){let r,n,l,o,i=e.heap.size,a=xr(e.heap,t);for(;t*2+1<i&&(r=(n=2*t+1,l=n+1,o=n,l<i&&Ki(xr(e.heap,l),xr(e.heap,n))<0&&(o=l),o),!(Ki(a,xr(e.heap,r))<0));)ll(e.heap,t,xr(e.heap,r)),t=r;ll(e.heap,t,a)}function UR(e,t){let r,n;for(n=e.heap.size,LR(e.heap,t);n>0;){if(r=n,n=~~((n-1)/2),Ki(xr(e.heap,n),t)<=0)return ll(e.heap,r,t),!0;ll(e.heap,r,xr(e.heap,n))}return ll(e.heap,n,t),!0}function bR(e){if(e.heap.size===0)return null;let t=xr(e.heap,0);return SR(e),t}function SR(e){let t=RR(e.heap,e.heap.size-1);0<e.heap.size&&(ll(e.heap,0,t),yR(e,0))}function wR(e,t){return dR(e.heap,t)}function _g(e){this.heap=new hR,this.cmp=e}function Cg(){Vu||(Vu=!0,iR(),gR(),xB(),PB(),NB(),VB(),KB(),XB(),rR(),zg=new Ug)}function ER(){Cg(),bg()}async function _R(){Se(),Cg();let e=_.fromString(uR(zg,await we()));return(await Yn()).concat(e)}var V,to,BB,Hu,Ia,Yu,RB,dB,Ju,hB,FB,DB,Wa,vu,Ma,Na,Eu,_t,ji,qa,ol,qi,el,vt,tl,zu,Ni,rt,rg,ng,Gi,lg,Mu,$l,ig,Sr,Ja,Za,Nu,Ft,Gu,Ga,Si,Et,$a,es,ts,fl,Hi,Bg,Ii,Ou,Iu,Ta,Wu,Xn,Ei,_i,rn,Oa,Zl,Pa,eo,nl,Ku,Qu,ju,qu,ns,kg,xR,vR,zg,Vu,Mg=U(()=>{Le();ka();xu();Rt();Bt();to={},BB={},Hu=0,Ia=30,Yu=21,RB=22,dB=23,Ju=24,hB=25,FB=34,DB=26,Wa=40;ct(1,-1,BB);V.value=null;ct(73,1,{},Zu);V.queryId$=0;vu=!1;Eu=!1;ct(153,1,vr([Yu]),ro,vi,Xl);ol=null,zu=!1;ct(154,1,{},Va);V.parity=0;Mu=!1;ct(155,1,{},Ya);V.parity=0;ct(156,1,{},Xa,ag);Nu=!1;ct(157,1,vr([RB]),Vi,br,gg);V.temps=null;Gu=!1;ct(158,1,vr([dB]),nr);V.isStd=!0;V.temp=null;Si=0,Ou=!1;ct(159,1,{},rs,Rg);Iu=!1;ct(160,1,vr([Ju,FB]),Wi,Yi,Fg);V.compareTo$=function(t){return nR(this,t)};V.add1=!1;V.center=null;V.centerAvail=0;V.corner=null;V.cornerAvail=0;V.edge=null;V.edgeAvail=0;V.length1=0;V.length2=0;V.length3=0;V.moveLength=0;V.sym=0;V.value=0;ct(161,1,{},Dg);V.compare=function(t,r){return Ki(t,r)};Wu=!1;ct(163,1,vr([DB]),Ug);V.add1=!1;V.arr2idx=0;V.c=null;V.length1=0;V.length2=0;V.p1SolsCnt=0;V.solution="";ju=!1,qu=!1;V.val$outerIter=null;V.size=0;ct(239,1,{},_g);V.cmp=null;V.heap=null;ns=xg("java.lang.","Object",1,null),kg=wg("[Ljava.lang.","Object;",356,ns),xR=xg("cs.threephase.","FullCube",160,ns),vR=wg("[Lcs.threephase.","FullCube;",381,xR),Vu=!1});var dc={};pe(dc,{randomFTOScrambleString:()=>_d});function ao(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function Zi(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function Yg(e,t,r,n,l=e-t-r-n){return Zi(e,t+r)*Zi(t+r,t)*Zi(n+l,n)}function GR(e){e=e.slice();let t=e.length,r=ao(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function TR(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let l=n;l<t;l++)e[n]>e[l]&&(r^=1);return r}function ps(e,t){let r=[],n=ao(t-1)/2,l=0;for(let o=0;o<t-1;o++)r[o]=e/n|0,e%=n,n/=t-1-o;r[t-1]=0;for(let o=t-2;o>=0;o--)for(let i=o+1;i<t;i++)r[i]>=r[o]?r[i]++:l^=1;return l===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function nn(e){return GR(e)>>1}function us(e,t){let r=[0];for(let n=1;n<e;n++){let l=t(n+1);r[n]=r[l],r[l]=n}return r}function Wg(e,t){let r=us(e,t);return TR(r)===1&&([r[0],r[1]]=[r[1],r[0]]),r}function OR(e){return e|=0,31-Math.clz32(e^e-1)}function Kg(e,t){e|=0,t|=0;let r=e+" "+t;if(os[r])return os[r];let n=Zi(e,t),l=new Uint32Array(n),o=new Uint32Array(1<<e).fill(-1);for(let i=0,a=(1<<t)-1;i<n;i++){l[i]=a,o[a]=i;let s=a|a-1;a=s+1|(~s&-~s)-1>>OR(a)+1}return os[r]=[l,o]}function IR(e){e|=0;let t=0;for(;e!==0;)e&=e-1,t++;return t}function Qg(e){return e&=65535,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,e}function WR(e,t){return Qg(e)|Qg(t)<<1}function pl(e,t,r,n,l){if(e|=0,t|=0,r|=0,n|=0,l|=0,e!==t+r+n+l)throw"generate_comb4_lookup_tables: invalid parameters";let o=[e,t,r,n,l].join(" ");if(is[o])return is[o];let[i,a]=Kg(e,r+l),[s,f]=Kg(e,n+l),g=Yg(e,t,r,n,l),c=new Uint32Array(g),u=new Uint32Array(4**e).fill(-1);for(let p=0,m=0;p<s.length;p++){let L=s[p];for(let R=0;R<i.length;R++){let h=i[R];if(IR(h&L)===l){let y=WR(h,L);c[m]=y,u[y]=m,m++}}}return is[o]=[c,u]}function Je(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function ml(e,t,r){let n=[];for(let l=0;l<r.length;l++)n[l]=e[t[r[l]]];return n}function ms(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n of e)for(let l=0;l<n.length;l++)r[n[l]]=n[(l+1)%n.length];return r}function ln(e,t){let r=e.length,n=Array(r).fill(0);for(let i=1;i<r;i++)n[i]=n[i-1]+t[i-1];let l=n[r-1]+t[r-1],o=Array(l);for(let i=0;i<r;i++)t[i]&&(o[n[i]]=n[e[i]]);return o}function Ls(e){let t=e.length,r=Array(t);for(let n=0;n<t;n++)r[e[n]]=n;return r}function KR(e,t){for(;e&&t;)[e,t]=[t%e,e];return Math.abs(e+t)}function QR(e,t){return e*t/KR(e,t)}function jR(e){let t=1,r=e.length,n=Array(r).fill(!1),l=-1;for(;l=n.indexOf(!1,l+1),l!==-1;){let o=0,i=l;for(;!n[i];)n[i]=!0,i=e[i],o++;t=QR(t,o)}return t}function $R(e,t){for(let r=0;r<6;r++){if(e===kt[Er[r][0]]&&t===kt[Er[r][2]])return[r,0];if(e===kt[Er[r][2]]&&t===kt[Er[r][0]])return[r,1]}throw"unknown corner piece"}function ed(e,t){for(let r=0;r<12;r++)if(e===kt[_r[r][0]]&&t===kt[_r[r][1]]||t===kt[_r[r][0]]&&e===kt[_r[r][1]])return r;throw"unknown edge piece"}function Bs(e,t){return $R(e[Er[t][0]],e[Er[t][2]])}function n0(e,t){return ed(e[_r[t][0]],e[_r[t][1]])}function td(e,t,r,n){let l=Er[t],o=Er[r].map(i=>kt[i]);n%2!==0&&(o=[o[2],o[3],o[0],o[1]]);for(let i=0;i<4;i++)e[l[i]]=o[i]}function rd(e,t,r){let n=_r[t],l=_r[r].map(o=>kt[o]);for(let o=0;o<2;o++)e[n[o]]=l[o]}function Xg(e){let t=e.map(s=>kt[s]),n=Array(6).fill().map((s,f)=>Bs(t,f)).map(([s,f])=>s+6*f),l=n.concat(n.map(s=>(s+6)%12)),o=Array(12).fill().map((s,f)=>n0(t,f)),i=Array(12).fill().map((s,f)=>on.indexOf(e[on[f]])),a=Array(12).fill().map((s,f)=>ul.indexOf(e[ul[f]]));return{cp:l,ep:o,ap:i,bp:a}}function ld(e){let t=Array(72),r=Wg(5,e);r.push(5);let n=Array(4).fill().map(a=>e(2));n.push(n.reduce((a,s)=>a^s)),n.push(0);for(let a=0;a<6;a++)td(t,a,r[a],n[a]);let l=Wg(12,e);for(let a=0;a<12;a++)rd(t,a,l[a]);let o=us(12,e).map(a=>a/3|0),i=us(12,e).map(a=>4+(a/3|0));for(let a=0;a<12;a++)t[on[a]]=o[a],t[ul[a]]=i[a];return t}function ec(e,t=!1){if(t){e=e.map(L=>L.slice());let p=[0,1,2,3,4,5,6,7],m=[[0,3,5,6,4,7,1,2],[7,1,0,6,3,5,4,2],[7,4,2,1,3,0,6,5],[2,4,5,3,6,0,1,7]];m=m.concat(m.map(L=>Ls(L)));for(let L=0;L<e.length;L++)if(e[L][0]<4)e[L][0]=p[e[L][0]];else{let R=p[e[L][0]],h=e[L][1];e[L][0]=R,p=Je(h===1?m[R^4]:m[R],p)}}let r=t?"U L F R D BR B BL".split(" "):nd,n=["0","","'"];return e.map(([o,i])=>r[o]+n[i]).join(" ")}function kr(e,t){for(let[r,n]of t)for(let l=0;l<n;l++)e=Je(e,$g[r]);return e}function tc(e){return e.map(([t,r])=>[t,(3-r)%3]).reverse()}function e0(e,t=!1){if(e.length===0)return[];let r=[],n;for(let[l,o]of e)n&&n[0]===l?(n[1]+=o,n[1]%=3,n[1]===0&&(r.pop(),n=r.length===0?void 0:r[r.length-1])):r.length>=2&&(n[0]^l)===4&&r[r.length-2][0]===l?(r[r.length-2][1]+=o,r[r.length-2][1]%=3,r[r.length-2][1]===0&&r.splice(r.length-2,1)):(n=[l,o],r.push(n));return t&&""+e!=""+r&&console.log(\`simplified \${e} to \${r}\`),r}function od(e){return ec(tc(sd(ld(e),!0)),!0)}function gl(e,t,r,n,l,o){let i=Yg(e,t,r,n,l),a=o.length,[s,f]=pl(e,t,r,n,l),g=Array(a).fill().map(()=>new Uint32Array(i));for(let c=0;c<i;c++){let u=s[c],p=Array(e);for(let m=0;m<e;m++)p[m]=u>>2*m&3;for(let m=0;m<a;m++){let R=Je(p,o[m]).reduce((h,y,A)=>h|y<<2*A,0);g[m][c]=f[R]}}return g}function rc(e){let t=e[0].length,r=e.length,n=Array(r).fill().map(()=>new Uint32Array(t));for(let l=0;l<t;l++)for(let o=0;o<r;o++)n[o][e[o][l]]=l;return n}function sn(e,t){let r=e[0].length,n=t[0].length,l=e.length,o=Array(l).fill().map(()=>new Uint32Array(r*n));for(let i=0;i<n;i++)for(let a=0;a<r;a++){let s=a+r*i;for(let f=0;f<l;f++)o[f][s]=e[f][a]+r*t[f][i]}return o}function id(e,t){let r=e.length,n=e[0].length,l=new Uint8Array(n);l[t]=1;let o=!1;for(;!o;){o=!0;for(let a=0;a<n;a++)if(!!l[a])for(let s=0;s<r;s++)l[e[s][a]]||(l[e[s][a]]=1,o=!1)}let i=new Int32Array(n).fill(-1);for(let a=0,s=0;a<n;a++)!l[a]||(i[a]=s,s++);return[e.map(a=>ln(a,l)),i]}function ad(e,t){let r=e.length,n=e[0].length,l=new Int32Array(n).fill(-1);t.forEach(s=>{l[s]=0});let o=[t];for(let s=0;s<o.length;s++){let f=o[s];for(let g=0;g<r;g++){let c=e[g][f[0]];if(l[c]!==-1)continue;let u=f.map(m=>e[g][m]),p=o.length;o.push(u);for(let m of u){if(l[m]!==-1)throw"quotienting failed";l[m]=p}}}let i=o.length,a=Array(r).fill().map(()=>new Int32Array(i));for(let s=0;s<r;s++)for(let f=0;f<i;f++)a[s][f]=l[e[s][o[f][0]]];return[a,l]}function nc(e,t,r){let n=e[0].length,l=e.length,o=new Int32Array(n).fill(-1);o[t]=r,o[r]=t;let i=!1;for(;!i;){i=!0;for(let a=0;a<n;a++){if(o[a]===-1)continue;let s=o[a];for(let f=0;f<l;f++){let g=f^1,c=e[f][a],u=e[g][e[g][s]];if(o[c]===-1)i=!1,o[c]=u,o[u]=c;else if(o[c]!==u)throw"mirroring failed - is the initial map correct?"}}}return o}function lc(e,t){let r=e[0].length,n=e.length,l=new Int8Array(r).fill(-1);for(let a of t)l[a]=0;let o=0,i=!1;for(;!i;){i=!0;for(let a=0;a<r;a++)if(l[a]===o)for(let s=0;s<n;s++){let f=e[s][a];for(;f!==a;)l[f]===-1&&(i=!1,l[f]=o+1),f=e[s][f]}o++}return l}function sd(e,t=!1){let r=pd(e).next().value,n=kr(e,r),l=(t?vd:xd)(n),o=e0(r.concat(l),!1);return kr(e,o).join("")!==so.join("")&&(console.log("solving failed!"),console.log(e),console.log(r),console.log(n),console.log(l),console.log(kr(e,o))),o}function ud(e){let[t,r]=pl(12,6,0,3,3),n=Array(12).fill().map((a,s)=>n0(e,s)),l=n.indexOf(8)+12*n.indexOf(9)+12**2*n.indexOf(10)+12**3*n.indexOf(11),[o,i]=[on,ul].map(a=>{let s=a.map(f=>fd[e[f]]);return r[s.reduce((f,g,c)=>f|g<<2*c,0)]});return[l,o,i]}function oc(){if(I.phase1_edge)return I.phase1_edge;let e=rc(an.map(n=>n.ep)),t=sn(e,e),r=sn(t,t);return I.phase1_edge=r}function gd(){return or.phase1_edge?or.phase1_edge:or.phase1_edge=lc(oc(),[8+12*9+12**2*10+12**3*11])}function cd(){return I.phase1_centreA?I.phase1_centreA:I.phase1_centreA=gl(12,6,0,3,3,an.map(e=>e.ap))}function ic(){return I.phase1_centreB?I.phase1_centreB:I.phase1_centreB=gl(12,6,0,3,3,an.map(e=>e.bp))}function jg(){if(or.phase1_centre)return or.phase1_centre;let[e,t]=pl(12,6,0,3,3),r=e.filter(n=>{let l=n>>12&3,o=n>>18&3;return l===2&&o===3}).map(n=>t[n]);return or.phase1_centre=lc(ic(),r)}function*pd(e){let t=[oc(),cd(),ic()],r=[gd(),jg(),jg()];yield*md(ud(e),t,r,15)}function*md(e,t,r,n){let l=e.length,o=0;for(let i=0;i<l;i++)o=Math.max(o,r[i][e[i]]);for(;o<=n;)yield*ac(e,t,r,o,-1),o++}function*ac(e,t,r,n,l){let o=3,i=8,a=Math.max(r[0][e[0]],r[1][e[1]],r[2][e[2]]);if(!(a>n)){if(n===0){yield[];return}if(!(a===0&&n===1))for(let s=0;s<i;s++){if(s===l||s===l-4)continue;let f=[];f[0]=t[0][s][e[0]],f[1]=t[1][s][e[1]],f[2]=t[2][s][e[2]];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=ac(f,t,r,n-1,s);for(;;){let{value:u,done:p}=c.next();if(p)break;yield[[s,g]].concat(u)}f[0]=t[0][s][f[0]],f[1]=t[1][s][f[1]],f[2]=t[2][s][f[2]],g++}}}}function Rs(e){let[t,r]=pl(10,5,3,2,0),n=Array(8).fill().map((u,p)=>n0(e,p)),l=n.indexOf(5)+8*n.indexOf(6)+8**2*n.indexOf(7),o=Array(5).fill().map((u,p)=>Bs(e,p)),i=Ls(o.map(([u,p])=>u+5*p).concat(o.map(([u,p])=>u+5*(p^1)))),a=i.slice(0,5).map(u=>u%5),s=i.slice(0,5).map(u=>u/5|0),f=nn(a)*8+(s[0]^s[2])+2*(s[0]^s[3])+4*s[4],[g,c]=[on,ul].map(u=>{let p=Je(u,Bd).map(m=>Ld[e[m]]);return r[p.reduce((m,L,R)=>m|L<<2*R,0)]});return uc(),pc(),[g,c,cc[f]+40*fc[l]]}function*t0(e){yield*Dd(Rs(e),30)}function sc(){if(I.phase2_centre)return I.phase2_centre;let e=gl(10,5,3,2,0,an.slice(0,4).map(r=>ln(r.ap,qg))),t=gl(10,5,3,2,0,an.slice(0,4).map(r=>ln(r.bp,qg)));return I.phase2_centre=[e,t]}function uc(){if(I.phase2_edge)return I.phase2_edge;let e=rc(an.slice(0,4).map(n=>n.ep.slice(0,8))),t=sn(e,sn(e,e)),r;return[r,fc]=id(t,501),I.phase2_edge=r}function gc(){if(I.phase2_corner)return I.phase2_corner;let t=ao(5)/2*8,r=[!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1],n=Array(4).fill().map(()=>new Uint32Array(t)),l=an.slice(0,4).map(o=>Ls(ln(o.cp,r)));for(let o=0;o<t;o++){let i=ps(o>>3,5),a=[0,0,o&1,o>>1&1,o>>2&1];a[1]=a[2]^a[3]^a[4];let s=Array(10);for(let f=0;f<5;f++)s[f]=i[f]+5*a[f],s[f+5]=i[f]+5*(a[f]^1);for(let f=0;f<4;f++){let g=Je(l[f],s),c=g.slice(0,5).map(m=>m%5),u=g.slice(0,5).map(m=>m/5|0),p=(u[0]^u[2])+2*(u[0]^u[3])+4*u[4];n[f][o]=nn(c)*8+p}}return I.phase2_corner=n}function pc(){return I.phase2_corner_compact||([I.phase2_corner_compact,cc]=ad(gc(),hd())),I.phase2_corner_compact}function ds(){if(I.phase2_ce)return I.phase2_ce;let e=pc(),t=uc();return I.phase2_ce=sn(e,t)}function Rd(){if(as)return as;let e=Rs(so)[2];return as=nc(ds(),e,e)}function dd(){let[e,t]=pl(10,5,3,2,0);return e.filter(r=>(r>>10&63)===41).map(r=>t[r])}function hd(){let e=gc(),t=e[0].length,r=Array(t).fill(!1);r[0]=!0;let n=!1;for(;!n;){n=!0;for(let l=0;l<t;l++)r[l]&&(r[e[0][l]]||(n=!1,r[e[0][l]]=!0),r[e[1][l]]||(n=!1,r[e[1][l]]=!0))}return r.map((l,o)=>o).filter(l=>r[l])}function Fd(){if(or.phase2_ace)return or.phase2_ace;let[e,t]=sc(),r=ds(),n=2520,l=40*336,o=n*l,i=Rs(so)[2],a=9,s=new Int8Array(o).fill(a);for(let f of dd())s[f+n*i]=0;for(let f=0;f<a-1;f++)for(let g=s.indexOf(f);g!==-1;g=s.indexOf(f,g+1)){let c=g%n,u=g/n|0;for(let p=0;p<4;p++){let m=e[p][c],L=r[p][u],R=m+n*L;s[R]===a&&(s[R]=f+1),m=e[p][m],L=r[p][L],R=m+n*L,s[R]===a&&(s[R]=f+1)}}return or.phase2_ace=s}function*Dd(e,t){let[r,n]=sc(),l=ds(),o=Fd(),i=Rd(),[a,s,f]=e,g=i[f],c=Math.max(o[a+2520*f],o[s+2520*g]);for(;c<=t;)yield*mc(a,s,f,r,n,l,o,i,c,-1),c++}function*mc(e,t,r,n,l,o,i,a,s,f){let g=Math.max(i[e+2520*r],i[t+2520*a[r]]);if(!(g>s)){if(s===0){yield[];return}else if(g===0)return;for(let c=0;c<4;c++){if(c===f)continue;let u=e,p=t,m=r;for(let L=1;L<=2;L++){u=n[c][u],p=l[c][p],m=o[c][m];let R=mc(u,p,m,n,l,o,i,a,s-1,c);for(;;){let{value:h,done:y}=R.next();if(y)break;yield[[c,L]].concat(h)}}}}}function l0(e){let[t,r]=pl(7,3,2,0,2),n=Array(5).fill().map((f,g)=>n0(e,g)),l=nn(n),o=Array(4).fill().map((f,g)=>Bs(e,g)),i=nn(o.map(f=>f[0]))*2+o.find(f=>f[0]===0)[1],[a,s]=[on,ul].map(f=>{let g=Je(f,Ad).map(c=>e[c]%4);return r[g.reduce((c,u,p)=>c|u<<2*p,0)]});return[a+210*s,i+24*l]}function Ud(){if(I.phase3_2gen_edge)return I.phase3_2gen_edge;let e=ao(5)/2,t=Array(cl).fill().map(()=>new Uint32Array(e)),r=r0.map(n=>n.ep.slice(0,5));for(let n=0;n<e;n++){let l=ps(n,5);for(let o=0;o<cl;o++)t[o][n]=nn(Je(l,r[o]))}return I.phase3_2gen_edge=t}function bd(){if(I.phase3_2gen_corner)return I.phase3_2gen_corner;let t=ao(4)/2*2,r=[!0,!0,!0,!0,!1,!1,!0,!0,!0,!0,!1,!1],n=Array(cl).fill().map(()=>new Uint32Array(t)),l=r0.map(o=>ln(o.cp,r).slice(0,4));for(let o=0;o<t;o+=2){let i=ps(o>>1,4),a=i.concat(i.map(s=>s+4));for(let s=0;s<cl;s++){let f=Je(a,l[s]),g=f.map(u=>u%4),c=f.find(u=>u%4===0)>>2;n[s][o]=nn(g)*2+c,n[s][o+1]=nn(g)*2+(c^1)}}return I.phase3_2gen_corner=n}function o0(){return I.phase3_2gen_corneredge?I.phase3_2gen_corneredge:I.phase3_2gen_corneredge=sn(bd(),Ud())}function hs(){if(I.phase3_2gen_centre)return I.phase3_2gen_centre;let e=gl(7,3,2,0,2,r0.map(r=>ln(r.ap,Vg))),t=gl(7,3,2,0,2,r0.map(r=>ln(r.bp,Vg)));return I.phase3_2gen_centreA=e,I.phase3_2gen_centreB=t,I.phase3_2gen_centre=sn(e,t)}function Bc(){if(ss)return ss;let e=hs(),t=I.phase3_2gen_centreA,r=o0(),n=t[0].length,l=r[0].length,o=n*l,i=25,a=ir.map(u=>u.length),s=new Int8Array(o).fill(i),f=l0(so);s[f[0]%n+n*f[1]]=0;let g=0,c=!1;for(;!c&&g<i-1;){c=!0;let u=Array(cl).fill().map((h,y)=>y).filter(h=>a[h]+g<i);u.sort((h,y)=>a[h]-a[y]);let p=Je(a,u),m=Je(t,u),L=Je(r,u),R=u.length;for(let h=s.indexOf(g);h!==-1;h=s.indexOf(g,h+1)){let y=h%n,A=h/n|0;for(let E=0;E<R;E++){let v=p[E],K=m[E][y],Z=L[E][A],M=K+n*Z;s[M]>g+v&&(c=!1,s[M]=g+v)}}g++}return ss=s}function Rc(){if(fs)return fs;let e=o0().slice(0,2),t=l0(so);return fs=nc(e,t[1],t[1])}function gs(e,t=l0(e)){let[r,n]=t,l=r%210,o=Math.floor(r/210),i=hs(),a=I.phase3_2gen_centreA,s=I.phase3_2gen_centreB,f=o0(),g=Bc(),c=Rc(),u=0;for(;;){let p=Fs(l,o,n,a,s,f,g,c,u);for(let m of p)return m.map(L=>ir[L]).flat();u++}}function Hg(e,t=l0(e)){let[r,n]=t,l=r%210,o=Math.floor(r/210),i=hs(),a=I.phase3_2gen_centreA,s=I.phase3_2gen_centreB,f=o0(),g=Bc(),c=Rc(),u=gs(e).length,p=1/0,m;for(let L=u;L<=u+0;L++){let R=Fs(l,o,n,a,s,f,g,c,L);for(let h of R){let y=h.map(v=>ir[v]).flat(),A=e0(y),E=cs(A);E<p&&(p=E,m=A)}}return m}function Sd(e){return(e-1)*(e-2)/2}function cs(e){let t=ec(e,!0).replace(/'/g,"").split(" ");return e.length+wd(t).map(Sd).reduce((r,n)=>r+n,0)}function wd(e){if(e.length<3)return[];let t=e.length,r=[];for(let o=0;o<t-2;o++)r[o]=e[o]===e[o+2];r.push(!1);let n=-1,l=[];for(;n<t-2&&(n=r.indexOf(!0,n+1),n!==-1);){let o=r.indexOf(!1,n+1);l.push(o-n),n=o}return l}function*Fs(e,t,r,n,l,o,i,a,s,f=-1){let g=i[e+210*r],c=i[t+210*a[r]],u=Math.max(g,c);if(!(u>s)){if(s===0){yield[];return}if(u!==0)for(let p=0;p<cl;p++){if(p===f&&yd[p]<=3)continue;let m=n[p][e],L=l[p][t],R=o[p][r],h=s-ir[p].length;if(h<0)continue;let y=Fs(m,L,R,n,l,o,i,a,h,p);for(;;){let{value:A,done:E}=y.next();if(E)break;yield[p].concat(A)}}}}function xd(e,t=200,r=24){let n=[],l=t0(e),o=Je(e,Wt).map(s=>s^1),i=t0(o),a=Array(1e3);for(let s=0;s<t;s++){{let{value:f,done:g}=l.next();if(!g){let c=kr(e,f),u=f.concat(gs(c));if(u.length<=r)return u;u.length<a.length&&(a=u)}}{let{value:f,done:g}=i.next();if(!g){let c=kr(o,f),u=f.concat(gs(c)).map(([p,m])=>[p^2,m]);if(u.length<=r)return u;u.length<a.length&&(a=u)}}}return a}function vd(e,t=20,r=30){let n=[],l=t0(e),o=Je(e,Wt).map(f=>f^1),i=t0(o),a,s=1/0;for(let f=0;f<t;f++){{let{value:g,done:c}=l.next();if(!c){let u=kr(e,g),p=e0(g.concat(Hg(u))),m=cs(p);if(m<=r)return p;m<s&&(a=p,s=m)}}{let{value:g,done:c}=i.next();if(!c){let u=kr(o,g),p=e0(g.concat(Hg(u)));p=p.map(([L,R])=>[L^2,R]);let m=cs(p);if(m<=r)return p;m<s&&(a=p,s=m)}}}return a}async function _d(){return od(await Ed)}var y7,U7,os,is,so,io,qR,Wt,b7,Xi,Jg,VR,HR,YR,$i,JR,Zg,ZR,XR,kt,Er,_r,on,ul,$g,nd,an,I,or,fd,Ld,Bd,qg,fc,cc,as,Ad,Vg,ir,cl,Lc,r0,yd,ss,fs,Ed,hc=U(()=>{Rt();[y7,U7]=(()=>{let e=new Int8Array(2048),t=new Int8Array(256*8);for(let l=0;l<256;l++)for(let o=0,i=0;o<8;o++)(l>>>o&1)!==0&&(e[o<<8|l]=i,t[i<<8|l]=o,i++);function r(l){let o=255,i=2520,a=0;for(let s=0;s<6;s++){let f=l[s];a+=e[o|f<<8]*i,o&=~(1<<f),i/=7-s}return a}function n(l,o){let i=255,a=2520,s=0;for(let f=0;f<6;f++){let g=l/a|0;l-=g*a,s^=g&1;let c=t[i|g<<8];o[f]=c,i&=~(1<<c),a/=7-f}return o[6]=t[i|s<<8],o[7]=t[i|(s^1)<<8],o}return[r,n]})();os={};is={};so=Array(72).fill().map((e,t)=>t/9|0),io=ms([[0,4,8],[1,6,3],[2,5,7],[9,22,35],[45,67,44],[47,68,43],[46,69,39],[50,70,38],[49,71,36]],72),qR=Je(io,io),Wt=Array(72).fill().map((e,t)=>(t/18|0)*18+(t+9)%18),b7=Array(72).fill().map((e,t)=>(t/36|0)*36+(t+18)%36),Xi=Array(72).fill().map((e,t)=>(t+36)%72),Jg=ml(Xi,qR,Xi),VR=ml(Wt,io,Wt),HR=ml(Wt,Jg,Wt),YR=ms([[10,24,30],[11,23,34],[12,19,33],[42,48,64],[41,52,65],[37,51,66]],72),$i=Je(io,YR),JR=Je($i,$i),Zg=ml(Xi,JR,Xi),ZR=ml(Wt,$i,Wt),XR=ml(Wt,Zg,Wt),kt=Array(72).fill().map((e,t)=>t/9|0),Er=[[0,45,9,36],[4,67,22,49],[8,44,35,71],[13,58,31,40],[17,53,26,62],[18,63,27,54]],_r=[[1,46],[3,39],[6,69],[10,37],[33,42],[12,48],[15,60],[24,51],[19,64],[28,55],[30,66],[21,57]],on=Array(12).fill().map((e,t)=>(t/3|0)*9+[2,5,7][t%3]),ul=on.map(e=>e+36);$g=[io,Jg,VR,HR,$i,Zg,ZR,XR],nd=["U","L","F","R","u","l","f","r"],an=$g.map(Xg);I={},or={},fd=[0,0,2,3,0,0,2,3];Ld=[0,1,2,0,0,1,2,0],Bd=[0,1,2,3,4,5,7,8,10,11],qg=[!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0];Ad=[0,1,2,3,4,10,11],Vg=[!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!0,!0],ir=[[[0,1]],[[1,1]],[[2,1],[0,1],[3,1],[0,2],[3,2],[2,2]],[[3,2],[1,2],[2,2],[1,1],[2,1],[3,1]],[[6,1],[0,1],[3,1],[0,2],[3,2],[6,2]],[[7,2],[1,2],[2,2],[1,1],[2,1],[7,1]],[[2,1],[0,1],[2,2],[0,1],[2,1],[0,1],[2,2]],[[3,2],[1,1],[3,1],[1,1],[3,2],[1,1],[3,1]],[[2,1],[3,1],[2,2],[1,2],[0,2],[2,1],[3,1],[2,2]],[[3,2],[2,2],[3,1],[0,1],[1,1],[3,2],[2,2],[3,1]],[[6,1],[0,1],[6,2],[0,2],[1,2],[6,1],[0,1],[6,2]],[[7,2],[1,2],[7,1],[1,1],[0,1],[7,2],[1,2],[7,1]],[[2,1],[3,2],[2,2],[3,1],[0,1],[2,2],[1,1],[2,1]],[[3,2],[2,1],[3,1],[2,2],[1,2],[3,1],[0,2],[3,2]],[[6,1],[0,2],[6,2],[7,1],[6,1],[1,2],[7,1],[6,1]],[[7,2],[1,1],[7,1],[6,2],[7,2],[0,1],[6,2],[7,2]],[[2,2],[1,2],[2,2],[3,2],[2,2],[3,2],[0,2],[3,2]],[[6,2],[7,2],[1,2],[0,2],[1,2],[0,2],[6,2],[7,2]]];ir=ir.concat(ir.map(e=>tc(e)));cl=ir.length,Lc=ir.map(e=>kr(ms([],72),e)),r0=Lc.map(Xg),yd=Lc.map(jR);Ed=we()});var Fc={};pe(Fc,{randomFTOScrambleString:()=>kd,sgsDataFTO:()=>Cd});async function kd(){let{randomFTOScrambleString:e}=await Promise.resolve().then(()=>(hc(),dc));return e()}async function Cd(){return zd??(zd=Pd())}async function Pd(){return Ot(await Ce.fto.kpuzzle(),\`SubgroupSizes 24 12 11 12 12 11 10 9 11 8 10 9 7 8 10 10 6 9 8 5 7 6 5 4 4 8 7 3 6 6 360

Alg T
Alg B
Alg B T
Alg B'
Alg B' T
Alg U
Alg U T
Alg U'
Alg U' T
Alg B BL
Alg B BL T
Alg B BL'
Alg B BL' T
Alg B' BR
Alg B' BR T
Alg B' BR'
Alg B' BR' T
Alg U R'
Alg U R' T
Alg U' L
Alg U' L T
Alg B BL' D
Alg B BL' D T

Alg R
Alg R'
Alg R D
Alg R D'
Alg R BR
Alg R BR'
Alg R' F
Alg R' L
Alg R' L'
Alg B L B'
Alg U L' U'

Alg B U B'
Alg B U' B'
Alg B R B'
Alg B R' B'
Alg B' U' B
Alg B' U B L
Alg B' U B L'
Alg B' U' B BL'
Alg B U' B' BR
Alg B' R' B F

Alg BR
Alg BR'
Alg BR BL
Alg BR BL'
Alg BR' F
Alg BR' F'
Alg BR' D
Alg B BR B'
Alg U F U'
Alg BR BL L
Alg BR' D BR'

Alg B' BL B
Alg B' BL' B
Alg BR D' BR'
Alg B' BL B D'
Alg B' BL B BL
Alg B' BL B BL'
Alg B' BL L B
Alg B' BL' B F'
Alg B' BL' B L'
Alg B' BL' B BL'
Alg B' BL' L BL' B

Alg R' BR R
Alg R' BR' R
Alg BR BL' D BR
Alg R' BR D R
Alg R' BR D' R
Alg R' BR R BL
Alg B' D' BL D B
Alg BR B D' B' BR'
Alg BR BL' D BR L'
Alg BR BL' D BL BR

Alg U BR U'
Alg U BR' U'
Alg U' R U
Alg U' R' U
Alg U BR B' U'
Alg U BR' U' D
Alg U BR' U' D'
Alg U' R F' U
Alg U' R' U L'

Alg U B U'
Alg U B' U'
Alg U B U' L
Alg U B U' L'
Alg U B' U' BL'
Alg U B U' L F
Alg U B U' L F'
Alg U B' U' BL' D'

Alg B BL' L BL B'
Alg B BL' L' BL B'
Alg U B' D B U'
Alg U B' D' B U'
Alg U R D R' U'
Alg U R D' R' U'
Alg R' F L F' R
Alg R' F L' F' R
Alg B L' B F' D B
Alg U B' D' B U' D

Alg F
Alg F'
Alg F D
Alg F D'
Alg F' L
Alg F' L'
Alg F D' BL

Alg F BL F'
Alg F BL' F'
Alg BR' BL BR
Alg BR' BL' BR
Alg F BR F' BR'
Alg F BL F' BL'
Alg F BL' F' L
Alg F BL' L' F'
Alg F BR' BL BR F'

Alg F' BL F
Alg F' BL' F
Alg U BL U'
Alg U BL' U'
Alg F U' F' U
Alg F' BL F D'
Alg F' BL F BL'
Alg F' BL D F

Alg L
Alg L'
Alg L BL
Alg L BL'
Alg F' D F
Alg L BL D

Alg L' BL L
Alg L' BL' L
Alg L' BL D L
Alg L' BL D' L
Alg L' BL L BL'
Alg L' BL D' L BL
Alg L' BL D' L BL'

Alg L D L'
Alg L D' L'
Alg R' D R
Alg R' D' R
Alg L D L' D'
Alg L R L' R'
Alg L' B' L B
Alg R' D R BL
Alg L BL' L' BL L'

Alg U L' D L U'
Alg U B D B' U'
Alg U L' D' L U'
Alg U B D' B' U'
Alg R' D' BL' D R
Alg U B D' B' U' D
Alg U B' L B L' U'
Alg U B D B' U' BL'
Alg U B D' B' L' D' L U'

Alg F L F'
Alg F L' F'
Alg F L F' D
Alg F L F' D'
Alg F L' F' BL'

Alg L BL' D BL L'
Alg L BL' D' BL L'
Alg F D L D' L' F'
Alg F L D L' D' F'
Alg F L' B' L B F'
Alg F' D' R' D R F
Alg F D L D' L' F' BL'
Alg F' R' B' R' B R' F

Alg B D B'
Alg B D' B'
Alg L' D L
Alg L' D' L
Alg B D B' D'
Alg B' L B L'
Alg B D B' D' BL

Alg D
Alg D'
Alg D BL
Alg D BL'

Alg D BL' D BL D'
Alg D BL' D' BL D'
Alg B D R D' R' B'
Alg B R D R' D' B'
Alg D BL' D BL D' BL
Alg D BL' D BL D' BL'

Alg D BL D BL' D'
Alg D BL D' BL' D'
Alg B' BL' B BR D' BR'
Alg D BL D BL' D' BL
Alg D BL D BL' D' BL'

Alg D' BL D
Alg D' BL' D
Alg D' BL D BL
Alg D' BL D BL'

Alg B D' B' BL B D B'
Alg B D' B' BL' B D B'
Alg D' BL' D BL D' BL D

Alg B R' B' BL B R B'
Alg B R' B' BL' B R B'
Alg L R L' BL' L R' L'

Alg F BL' B' BL F' BL' B
Alg F' R' F BL F' R F
Alg F' R' F BL' F' R F
Alg BR R BR' BL' BR R' BR'
Alg F L' BL U BL' U' L F'
Alg F' U' F D F' U F D'
Alg F BL F' D F BL' F' BL D'

Alg F D F U' F' U D' F'
Alg F D F' BL F BL' D' F'
Alg F U D BL' U' BL D' F'
Alg F U' D F U F' D' F'
Alg F' BR L F BR' F' L' F
Alg U R BL' F BL F' R' U'

Alg BL
Alg BL'

Alg F U BL U' BL' F'
Alg F BL U BL' U' F'
Alg U BL BR BL' BR' U'
Alg BR F BL F' BL' BR'
Alg F U' F' U BL' U BL U'

Alg F U' F' D F U F' D'
Alg B' U' F U B U' F' U
Alg D F U' F' D' F U F'
Alg BR' U BR D' BR' U' BR D
Alg D' BR BL' F BL' F' BL BR' BL D

Alg D BL D F' U' B L' BL' L R' BR' R L' BL L B' U F D
Alg B D BR F' R' BR' R B' F D' BL D B BR' D' B'
Alg L B' BR' L F BR L' B BR' L U F U' BR' F L BL BR'
Alg L BL' D' BR' B R' U' R BR B' D BL' L'
Alg B BR B' D' B D B F' R' B' R BR' B' BR F BR' BL
Alg L' BL D L' D' L' D L' U' R' F' R U D'
Alg U' L BL L U' D R' BL B' BL F' BL' B R BL' U D' L U
Alg L BL BR' L U' D R' F' R BL' U BL D' BR L
Alg D L' R F' R' L BL' BR BL' B' BL B BR' F BL' F' D'
Alg B BL B BR' L R' U' R BR L' B
Alg L B' R' BR B F BL D' BL' D BL' B' F' BR' R U B L'
Alg D' L' BL F' D' BL' D B F' R' BR R B' F' BL' L D
Alg B D' R D' R' BL BR' B BR' B' BL' D' BR B R' B' R B' BL' D'
Alg U' L R' F U L' BL' L B BL' B' BL L U' L' F' R L' U
Alg F' D BL' BR' BL' BR B' U' F L F' U B D F L U BL' U' L'
Alg L' U BR' U D R' BL F R BL' U D' BR' L' BL' BR' L'
Alg U' L' U' D R' BL B' BL F BL' B R BL' U D' L' BL' L' U
Alg D F BL L' BL' B L' B' L' B L' B' L' BL L BL' F' D'
Alg F' BR' B BL' BR BL B' F L' F' L B BR' B' BR L' F L BL'
Alg F' L F' L U' D R' F R U D' L' BL' F L' F
Alg F U' F' BR F' R' BR' U F' L' BL F' D' BL'
Alg B BR' U R BR' R' BR U' B' BR
Alg F' BR' B BR' R BR' BL' BR R' BR BL B' BR F
Alg L' U BL B' U' BL U BL' B BR BL' BR' U' L
Alg BR BL' BR' BL L' BL BR BL' BR' L
Alg U BR' U' BR L' BL BR BL' BR' L
Alg U' L F BL' F' BL F' BR F BR' L' U
Alg F L F' BL D F' D' F BL' L'
Alg U BR' U BR L BL BR BL' BR' L' U
Alg F BR R BL' F' BL' F R' BL BR' BL F'
Alg D BL D B U BR' D BR' L' U' BR' U BR L D' BR U' B' D
Alg U BL' U' BL U BL D L' D BR D' L D BR U BR U D
Alg B' U F U' B' U F' BR' U' B L B' U BR U' B L' B BL
Alg B U' B BL U' BL L U' D R' F' R U' D' L' BL' U B
Alg B L R F D' BR' D F' R' BL' U' L U L' U BL L' B'
Alg D BL D F' BR' F BL' D R' BR' R F D' BL F' BR D
Alg L' D F' R' U BR L BL B' BL B BL' BR' L' U' R D' L
Alg F BL' U D L' U' BR R F' R' BR' U L D BL U' D BL F'
Alg BR' BL' U' L' BL D F' L' F' L F L U L' D' BR L BL
Alg B' L' BL U D R' F' R U D' L' BL L U BL' L B
Alg B BL' L U B' L BL' L B' U' B' L' D L' U' B L' B' D'
Alg B' R' L U L' R BR BL' B BR' B' BL B' BL' B'
Alg F L R BL B' U' B R' BL' L' BL F' BL BR' BL L BL' BR L'
Alg B' U' BL L U D R' F R U D' L' BL' U BL' B' U B'
Alg U BR BL' BR' D' B D' F' D B' D' F BL' U' BL' F' BL' F D'
Alg D' BL' D L BL L' D' BL D F' D F D' BL' D' BL D
Alg B' BL' B' BL L' B' BL' F' D F L F' D' F BL' L BL' B L B
Alg F BL' U D' BL' D' L' U' BR R F R' BR' U L U' D' BL F'
Alg U' D' B D F' D' BR' D' BR D BR B' BL' D F BL U BL'
Alg B BL BR D' BR L' R F R' BR' L D BL' BR' BL' B'
Alg L' F L' U BR' U' BR L F' BR' L U BR U'
Alg F' BL' D' BR' BL B' U' BL U B BL' BR D F
Alg F' D' BR' U R' U BL U' R U' BL' BR D F
Alg F U' BR F' U' BL' B U F BR' R F' U BL L
Alg B' BL' U' BL U B BL' B BL BR BL' BR' B' BL
Alg D' F' U BL U' L F U' F' U L' BL' F D
Alg F' BL' D' BR' BL BR' F' BR U' B' BR' U R' BR' F'
Alg B' U' B BL' B U' B BL' L U' L BL' L B
Alg F' D' F U' F U F' BL F' BL' D F
Alg F' D BR F' R F R' BR' F D'
Alg D BL D B BR' D L' BL' L' BL' BR' BL L BL L D' BR B' D
Alg B L BL L' BL' L' D F' R' BR R D' F L' BL' L' B'
Alg B BL' F' BL BR D' BR' F D' B' D L F' BL' F L D L D' BL
Alg B D' BR' D' BR' F D' BL' D' BL D BL F' D BR D' B'
Alg B D' B U B' D B F' BR' F L' F BR F' L U' B BL
Alg L BL' B' U BL L' BL L U L' BL' L BL' U' B BL' L'
Alg U D F' D BR BL' BR' BL B D' F D B' D BR BL BR' U'
Alg F' D BR L' U' R F' R' U BR' L D BR' BL BR D F
Alg BR' L BL L' BL' BR BL' F BL' L R BL B' U B R' BL' L' F'
Alg D BL BR D B F' R' U' BR' U R B' F D' BR' D'
Alg D' B BR' D L' BL' L' BL' BR BL L BL L D' BR B' D' BL' D'
Alg B U' R B' BL' B R' U' B BL' B' U' BL B' U' L U L'
Alg B D' B' D' BR' BL BR D' B' L B BR' U B U' BL' BR BL L' BL'
Alg B D BR' D' F BL' D' BL' D BL D F' BR D BR D B'
Alg D' B D F' D' BR' D' BR D BR BL BR' BL' BR B' BL' D F
Alg L BL B' U BL L' BL L U' L' BL' L BL' U' B BL L'
Alg B' U B' D' B U' B' D BL' U BL' U' BL' B' U BL' U'
Alg D' BR' B' L' U L' B' U B L U' L B BR D BL
Alg L' D L' F U' F' L D' L' F U BR F' L F BR' F' L BL'
Alg D BR D B F' R' U' BR U R B' F D' BR' BL' D'
Alg BR BL D F BR' BL BR BL' BR F' BR' D' BL' BR'
Alg BR' U' L' BL F' BL' F L BL' U BL BR
Alg D' BR' B' U BR U' BL U' BL' U BR' B BR D
Alg F U BR' U R U' BR B U' F' BL U' L' U BL' B'
Alg B U' L F BR F' L F' BR' F L U B'
Alg BR BL F BL' L F' BR' BL' F BL L' BL' F' BL
Alg U' BR' L BL' BR L U' BR' U L' BL L' U' BR U'
Alg L' F L' U BR' U' BR L F' L BL' BR BL BR'
Alg F' D' BR' BL U R' U BL' U' R U' BR D F
Alg F' BR' B F' U F BR U' BR' B' F BL BR BL'
Alg L B' U' R' BR B F BL D' BL D BL' B' F' BR' R B L'
Alg B F BL B L F BR' R' BL U' R BL' BR' F' L' F' BR' B
Alg U BR F' D F BR' U' L' BL L' BL' L U L B' BL L' B U'
Alg F' L B F BL B R U' R' B' BL' B' F' L BL L F
Alg D BL D B BR' D BR' D' BR D BR BL BR' BL' D' B' D
Alg D' BR' BL B BR B' BL' D BL D' B' BL B BR' BL' BR D
Alg D F' U BR U' L U' BR' U L' D B D' F D B' D BL
Alg L B BL' B L F R U' R' F' L' B' BL B' L' BL'
Alg B D' B U B' D F' BR F L' F BR' F' L B U' B BL
Alg B' BL L B' L' B' L B' BR' R' U' R BR L'
Alg D' F' U' B L' BL' L R' BR R L' BL L B' U F D' BL' D'
Alg B' F' BL' B' F U D' R BR R' BL U' BL' D B'
Alg F' BL' D BL F BL' D' B' U' B D F' D' B' F U B
Alg F' L' BL' L' B F BL B R U R' B' BL' B' F' L' F
Alg L' BL U' D F D' BL' D BL F' BL' D' BL D F' U D' BL L
Alg B' BR L R' U R BR F L' B' BL' B L F' BR L' B
Alg B' L B' BR' B L' B' D F' U F D' F U' F' BR B' BL'
Alg B' BR D' BL' BR' BL B L' R' L' R BR L D L BL BR' B BL
Alg L' D F' L F L' F D' L' BL' L' D BL' BR' BL' BR BL' D'
Alg B' F BR F BR L R' BL U R BL' BR L' B' BL' B' F
Alg F L' F' BR' B BR' F' BR B' BR' F' L F' BR'
Alg BR' B' BR BL' D' BR D BR' BL B
Alg L' F L' U BR' U' L U' BR U F' L
Alg F U' BR' R U' BR BL BR' U' BL' U' R' F' BR U
Alg B' BR' R' U' BL D' BL U BL' D R BL' BR B
Alg D BR' U' L BL' F' BL F L' BL U BL' BR D'
Alg F' BL' D' F BR' BL BR BL' BR F' BR' D BL F
Alg F' BR' BL' BR D' F' BR F BR' D BL F
Alg F' BR R' BR BL' BR' R BR' BL F
Alg B BR F' BR' B' F BL F BL' F'
Alg B D' B U B' D BL' F R' F BL F' R B F' U' B BL
Alg L BL' B' U L U L BL L B' BL B' U' BL' U' B' L' BL
Alg L' BL' U' D F D' BL' D BL F BL' D' BL D F' U D' BL' L
Alg F' L F' BL' D' BR' B R' U' R BR B' D BL' F L' F
Alg U D' BR' D BR' U' L U BR L' D' BR D L U' L' BL
Alg B' BR' B' BL B L F' BR' R' U' R BR F BR L' B
Alg U' F' D BR' F' BR D L D L' U D' B D' B' F D' BL F
Alg B F BL B F' L F BR' R' BL U' R BL' BR' F' BR' L' B
Alg F' D' BL B BR' BL BR BL' BR' D' BR' D BR D F D' B' D
Alg B' BR' B' BL B L F BR' R' U' R BR F' BR L' B
Alg L' F BR L' R' BR BL' BR' R BR' BL B' L F' L' B L' BL'
Alg B' U' BL' U D' BL' D F L' R U R' F' L U' BL U B
Alg D' B D BL BR BL' BR' D' BR' D BR D' BR B' D' BL' D'
Alg B' BR' L F' BR' R' U R BR F L' B' BL' B BR B
Alg L U L' D' BR' D L U' L' U D' BR D BR BL BR' BL' U' BL'
Alg F' L F' BL D' B BR' R' U R B' BR D BL F L' F
Alg B' L B' BR' B L' F' R F' BL F R' F BL' B' BR B' BL'
Alg F' L BL' BR' R' BL U R BR B L' B L B L' F BL' B
Alg L' F D' BR U' BR' D BR' U BR L' B' L F' L' B L' BL'
Alg B' BR' L F BR' R' U R BR F' L' B' BL' B BR B
Alg L F' D' F BR' BL BR BL' BR F' BR' D F L'
Alg F' BL' D F BL' F' BL D' BR' BL BR F
Alg B' BR' R' BL D' BL U' BL' D BL' U R BR B
Alg B' L BL' BR BL L' B' F BL F' BL' B BR' B
Alg F U' BR' R BR F' U BL L U BL' B U'
Alg B' BR B' BL F BL' B F' L BL' BR' BL L' B
Alg U' L BL' U' R U' BL' U R' U BL' L' U
Alg F U' BR' R' F' BR' F BL BR R BL' F' BR U
Alg B U' L' F' BR F L' F BR' F' L' U B'
Alg F' BR' B' F BR' BL' BR F BL B F' BL BR BL'
Alg B BL' U' L U BL' B' BL' B' L' BL U B' U' BL L BL L
Alg B R' U' B U R B' BR F D' B' D BL F' BL' BR' BL
Alg U BL U' B BL U BL U' BL D' B U B' D B U' B
Alg B BL B BL' B BR B' BL BR' R' L U' L' R B
Alg U' L BL' B BL B' L' F U B' R U R' U F' U B BL
Alg F' BL' D' BR' L' B' L B BL BR BL' B' L' B L D BL F BL
Alg L B' L' F U B' R BR B BR' R' BR BL' BR' BL B U' F' BL
Alg D' F BL B BR' B BR B' BL' D BL D' B' F' D
Alg B' L' BL F U F' L' U B U' L F U' F' BL' L BL' B BL B
Alg D BL D B U F' R' BR' R F U' B' D
Alg B BR B' D' BL BR D BR D B' BL' B D BR' BL' D' BL' D'
Alg B' R BR B' BR' R' B U' F' L B L' BL' F BL U BL'
Alg U BR BL' BR' D' B D' F' D B' BL' BR BL BR' D' F U' D'
Alg U' D' BR' U' BR' D' L' D BR' D' L D' BL' U' BL' U BL U'
Alg L' F' BR F' R F' R' L F' BR' D L BL' L' BL D' F BL'
Alg B D BL' D B U R BR R' U' B' D' BL D' B' BL
Alg B' U L' U B BL L' F' BL F D' B' U B D B' L B L'
Alg L BL' B' U L F R U' R' F' U L F' L B L' F
Alg L' D R' U BR L BL B' BL' B BL' BR' L' U' R F D' L
Alg D' B U F' R' BR R F U' B' D' BL' D'
Alg B D BL' B' U' BL L' D L D' BL' U B BL B' D'
Alg B U' BL' U' F U' B U B' F' U BL U' B U' B
Alg U BR' U L BL' L U' BR U BR' L' BL BR L' U
Alg F' D' BR' BL B' U' BL' U B BL' BR D BL F
Alg B' L' B' F BL' F' BL F' BR F BR' B L B
Alg F' BL' D' BR F' BR' F D BR' BL BR F
Alg F D' F' U' F' D' BR D F' D' BR' D' F' U
Alg BR' BL' U' BL L U' F U F' L' U BR
Alg F BR R U' BR B U BR' F BR BL' BR D BL F
Alg F' BR' F U' BL L' U BL' B' F' BL' BR D' BL F
Alg B' U L' B' U L' D F L F' D' L U' B L U' L B L'
Alg B BL B L F BR' R' U' R BR F' L' B
Alg B D' B BR' R' U' B' U R BR U' D' F L' F' U L' D' L
Alg L U' L' U B BL' U B BL B' U R B' BL B R' U B'
Alg D F' D BL U' R U' BL' U R' U B D' F D B' D BL
Alg B BL U B BR' L R' F' U' F R BR L' B' U' B'
Alg B' U' B F' D F D' B' U B D BL F' BL' D' BL F
Alg B D BR B F' U' R' BR' R U B' F BR' D' BL B'
Alg L B' F R BL' U' R' BL B F' L U BR' U' BL L U BR U'
Alg F' L F' BL L U' D R' F' R U D' L' F L' F
Alg L U L' F' BL' F L B BL' U BL' U' BL B' BL L U' L
Alg B' L F BR' R' U R BR F' L' B' BL' B'
Alg U BR' U' L' U' BR' F' BR F BR D R' F R U D' L' BL' L'
Alg B L BL L F' D R' BR' R F D' L BL L BL' L' B'
Alg F' BL' D F' D' B D' B' U' D L D BR' L' F BR D' F U
Alg B U B BR' L R' F' U F R BR L' B' U' BL' B'
Alg U B' L BL' B L' U' L' BL L BL' L U BR F' D' F BR' U'
Alg B BL' D BR B F' U' R' BR R U B' F BR' D' B'
Alg B BR B F BR' U BL' L R BR' R' L' F' U BR U BL B BL'
Alg B' BR' L R' U R BR L' B' BL' B'
Alg B' U BR' R L F' BR' F L' R' BR U' B' BR B'
Alg F' BL' F' BR R U' BR B F BR BL' D F U BL'
Alg F' BR' B' U BR' F BR' F' BR U' BR B BR F
Alg BR' BL' U' BL L' F' BL F BL' L U BR
Alg U' L BL U' R U' BL U R' U BL L' U
Alg F BR' F' U' L F BR U F' U' L' BL U BL'
Alg L' F U' BR' U L' U BR U' L F' L
Alg F' BR' B' U' BR' U F BR B U' BL U BR BL'
Alg F' BR' U BR D' BR U' BR' D F
Alg F BL' BR R BL' F' BL F R' BL BR' F'
Alg L BL' B BL' U BL U' BL B' L' F' BL F L U' L U L
Alg B F BL B F' L F' BR' R' BL U' R BL' BR' F BR' L' B
Alg F BL B' F' BR B' BR' B L F BL B' BR B BL' BR' F' L' B
Alg B F D' BL U R BL' BR' R' U' D B F' BL B
Alg L B' U B' BR B BR U' BR' B L' F BL' B F' BR' B' BL'
Alg U' L R' F L U L' BL' B BL B' L' BL L U' F' R L' U
Alg BR BL F BL' F' L' F' BR' L B BR B' L' F L B BR' B' BL
Alg B' BR' L F L' B' BL B L F' BR' R' U' R BR' L' B
Alg D L U' BR U L U' R BL' F' R' F BL F' BR' U L D BL D
Alg B F BL B F BR' L R' BL U' R BL' BR' L' F BR' B
Alg L B' L' U L' B' U L' D F L' F' D' L U' B L U' B
Alg B' BR L F' BR R' BL U R BL' BR F L' B' F BL' B' F'
Alg B' BL L B L' B' BL' L' U BL' U R' L' R U' BL U' L B
Alg B U' D' F D B BL' B' U D' R BR R' U' F' U D B'
Alg D F L F' L' F R L' BL B L B' BL' L R' F' L D'
Alg L BL D' B BR' R' U R B' BR D BL L'
Alg D F D' B' U' B U' D F' D' F U B' U B F' BL'
Alg D' BR' BL BR B' BL' B D BL' D' BL B BR' B' BL' BR D
Alg U BR' U' L U R' L R BR L' B' L' B L U' L' BL'
Alg BR' L R' U R BR B L' B L B L' BL' B
Alg B BR' B U BR' R L F' BR F L' R' BR U' B
Alg F' L B' BR' B L BL' L' B' BR B L BL L F
Alg D F U' F' U D' BR U' D' F U F' D BR'
Alg B' BL' BR D' BR' D BL BR' B BR
Alg B BL U' BR' L U BR' F' BL D BL BR F BR
Alg L' U BR BL BR' B' BL U' BL' U B BL' U' L
Alg U B' BL U' L' BL' U' F BR' R' BR U F'
Alg D BR' BL U' BL' L F' BL' F BL L' U BR D'
Alg BR L' BL BR' BL' L BL' BR BL BR'
Alg F BL F' BL' B F' BR F BR' B'
Alg D BR L' U' R F' R' U BR L BL B' BL B BL' BR D'
Alg D' BL' D BL D F' D' F D' BL' D L BL' L' D' BL D
Alg B F D' F' U' BL' B U B' BL F D B U' B' U B' F' BL
Alg B U F' D' R BR' R' U' D B BL B' U F U' B'
Alg B BL B L B BR' F BR B' BR' R' U' R F' BR L' B
Alg B BL B L F' U' F' U F BR' R' U' R BR' F BR' L' B
Alg B' U' B F' D F D' B' U B U' D BL' F' BL D' F U BL
Alg L F' BR B' F' R BL' U' R' BL B F' BR L BL BR L
Alg D F' D' BL F' D' F R BL B' L U L' B R' F' BL' D F
Alg B BL BR BL D' BR L' R F' R' BR' L D BR' BL' B'
Alg B' L B' BR' B L' BL' U BL U' B' BR B' U BL' U'
Alg D' B BR' F BL' F' D BR D' BL F' BR B' F D' BL' D'
Alg B D F' L' R F D BR' D' F' R BR' L D B' BL' D' F D'
Alg D L BL' F' R U R' B F' L BL' L' B' F' BL L' D'
Alg B' BR' L F R' U R BR B BR' F' BR B' L' B' BL' B'
Alg D L F BL F L BL' L D' BL' D' F' D' F' L BL D' BL'
Alg D F BL F' BR B' BL' B BL BR' BL L' R F R' L D'
Alg L BL' B' L B L B' L F R U R' B F'
Alg F' D' BL F R B' L U' L' B R' BL' F' D F BL' D F D'
Alg B' L' BL U' D' L' BL' L U' D R' F R U' BL' L B
Alg L' F L' BL U' BL' U L F' L U' BL U BL'
Alg D' F' BL L U' F U F' L' U BL' U' F D
Alg B' U F D F' U F D' F U B U' F U
Alg U B' BR' U R' U' R BR U' B
Alg F' BL' D F BL F' BR F' BR' F BL' D' BL F
Alg F' BR' BL' BR D BL' F BL F' D' BL F
Alg U' F R F' BL' F R' F BL F U
Alg F' BR F BR' L BL' BR' BL BR L'
Alg F U' B F U' BR U BR' U F' U' B' U F'
Alg D F' BR R F' R' F BR' D' F
Alg B D' B U B' D B U' B BR BL BR' D BL BR BL BR' BL D'
Alg B' U' L' D' F D' L' F' L D F' D L U B BL'
Alg D L' F R L' BL B L' B' BL' L R' F' L F L' F' D'
Alg D L' D' BL D F' D F D' BL' L BL D'
Alg D' B R U' B' F' BL' L BL L' BL B F U R' BR' B' D
Alg D L BL' F L BL L' B' F R U' R' B F BL L' D'
Alg D F' BL F BL U BL F' D B D' F D B' D BR BL BR' U'
Alg B F' BL B F' BR' F' L F R' U' R BL' BR BL F' L' B
Alg L F BR B' D BL D' R U' R' D BL' D' B BR' F' L BL L
Alg B F BL B F' BR' L R' U' R BL' BR BL L' B
Alg D' B U BR' D BR' L' U' BR U BR L D' BR U' B' D' BL' D'
Alg F' D' BR' BL' BR D' BR L' U' R F R' U BR' L D' F
Alg D F U D' BL U' B D' F BR F' D' F' D BR' D B' BL
Alg B U' D' F D BL' D' BR D' BR' D BL B' BL' B F' U D B'
Alg L' BL' L' F BR B' D BL D' R U R' D BL' D' B BR' F' L'
Alg B U F' U' B BL' B' U D' R BR R' D F U' B'
Alg B L BL' U' L U' L' U R BL F D' BR D F' R' L' B'
Alg B' L B' BR' B L' F' BL F BL' B' BR B' F U' F' U BL'
Alg D' B BR R U' B' F' BL' L BL' L' BL B F U R' B' D
Alg B BL' U' B BL' B D B D' B D B D' BL B' U BL B'
Alg U BR' U' BR L' F BR' L' U BR U' L F' L
Alg L' U BR BL BR' B U BR' U' BR B' BL' U' L
Alg BR BL D BR' BL' L BL' BR BL L' BL D' BL' BR'
Alg F' BL' D' BR' D BL BR' B U BR U' B' BR F
Alg F U' F' D F' U' B' U F' U' B U' F' D'
Alg B' U BR' R' U R U' BR B U'
Alg L U BL U' BL' L' BL L' F' BL' F BL L BL'
Alg U B' BL' BR' U F' BR' D' F BR' U BL' L' BL'
Alg F BL' L' F' BL D' F' BR U' R' F' U F' BR'
Alg U B U' BL L U' L' U BL' B'
Alg U BL U' B BR' B U BL' U' BL L B' BR B L' B
Alg B BL B L F' U' F U F BR' R' U' R BR' F' BR' L' B
Alg B BR D L' D' F' D F D' F' D' F D' BR' L D' B D B
Alg F' L B' L' F L' U' F R U R' F' L' U' B BL L'
Alg B' L' F U F L' F R U' R' U L F R U R' U B F' BL
Alg B U F' D' F' U R BR' R' U' F D B BL B' F U' B'
Alg F BL U BL' U' F' BL L U' L D BR L' U L U' BR' U D' L
Alg B U' D' B' F BL B BL' D' BR D BR' D BL D' F' U D B'
Alg B BL' D' B' D B BL D BR' BL BR' R D R' BR BL' BR D' B'
Alg B F U' F' D' F' U' R BL' BR' R' BL U' F D B BL B
Alg D BR' BL B' BL' B BL' BR' L' U' R F R' U BR' L D'
Alg B' F' U' F' BL' D' B BR' R' U R B' BR D F U B F
Alg B' D' B' D BR L' D F' D F D F' D' F D L D' BR' B'
Alg D' B F D BL' D' BL B BR' B' BR B' BL' F' D
Alg B D B' F BL L' BL' F' L BL L' BL' BR L R L' R' BR' L' D'
Alg B U B F' BL' B' D' F' U R BR R' U' F D F U' B'
Alg BR BL' L' F' BR U F' U' BR L' B' BR' L F' BR L' B L'
Alg D BL' L' BL D F' D' F D' BL' D L D'
Alg F' BL' B F U' B U B' D' F' BL' B U' B' BL U F D B'
Alg B' F' L BL' BR' R' BL U R BR L' B' F BL' B'
Alg BR BL' BR' BL L' F L' BL' BR BL BR' L F' L
Alg B BL BR' F U' L F U BR' F BL D BR' BL
Alg B' BL' B' U BR' U' BR BL' BR BL BR' B BL B
Alg BR' U' L F U' F' U L' BL' U BL BR
Alg B U BR R' BR U' B' BR U' B' U BR' R' BR
Alg B BR BL L BL BR' BL' L U' BL' U BL L BL' B'
Alg F' BR' B BL' BR' R BR' BL BR R' BR B' BR F
Alg F' BR' B U BR' U' B' BR BL' D' BR D BL F
Alg D' F' BR U' R' F' U F' BR' F BL' L' F' BL
Alg B BL U' L U L' BL' U B' U'
Alg L' F' R B F' BR L' D' F' D BR' L B' F R' F BL L
Alg D F BL L' BL' B L B' L B L B' L BL L BL' F' D'
Alg B BL B BR' L R' U' R BR L' B U BR' U' BR BL' BR BL BR'
Alg B' F R U' R' F' L' B L' B' L' B BL L'
Alg B' L' F D R' F' L' U L F R' U D' L' B BL L F' L
Alg D' L' BL F R' BR' R B' F D' BL D B F BL' L D
Alg B' BR' R' U' BL' U' L R' F R F' L' R U' BL BR B BL
Alg BR L BL BR L U' D R' BL F' R BL' U' D' BR U' L
Alg BR L B' L F R F U F' U' R' L' B L F' BR' L BL
Alg B F U D' R BL' BR' R' BL U' D B F' BL B
Alg L' BL L' D B D' BL' B' D' L R' D R BL' U' L U BL'
Alg L' D BL' U' R' BL F R U D' BR L' BL' BR' L'
Alg U BR' U' L' BL' U BR U' L' B' F R BL' U R' BL B F' L'
Alg BR L' BL' L' B' F R BL' U R' BL B F BR F BR L'
Alg B' F' L F BR BL B' BR' B BL' F' L' B' BR B BR' B F BL'
Alg B D BR B' D' BL' D B F' R' BR R F BR' D' B'
Alg D BL' L' BL' L BL L' BL F' BL' L' F L BL F BL' L D'
Alg U' D R' F R U L D' L D L D' BL' L
Alg U D' BR D' L' D R F BR F' BR' R' BR' D' L U' D' BL'
Alg B' F' BR' L R' BL U R BL' BR L' B' F BL' B'
Alg L' F BL' F' BL F' BR F BR' L
Alg L BL F' D F D' BL' F L' F'
Alg F' D' BR U BR' D BR' U' BR F
Alg BR' L BL' BR BL BR L' F' BR' F
Alg B BR F BR' B' BR F' R' BR' BL' BR R BR' BL
Alg BR' B U BR' R BR R' U' BR B'
Alg F' BL' BR R' BR BL BR' R BR' F
Alg BR L' BL BR' BL' BR' L U BR U'
Alg U BR' U' BR BL' BR BL BR'
\`)}var zd,Dc=U(()=>{Jt();Mn();zd=null});var kc={};pe(kc,{getRandomKilominxScramble:()=>_c});function yc(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function a0(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function Md(e){e=e.slice();let t=e.length,r=yc(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function Nd(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let l=n;l<t;l++)e[n]>e[l]&&(r^=1);return r}function Gd(e){return Md(e)>>1}function ys(e){let t=e.length,r=0;for(let i=0;i<t;i++)r+=+(e[i]===1);let n=t-r;if(n===0||r===0||t===1)return 0;let l=a0(t-1,r),o=0;for(let i=0;n>0&&r>0&&t>1;i++)t--,e[i]===0?l=l*--n/t:(o+=l,l=l*r--/t);return o}function Id(e,t,r){let n=r-t,l=a0(r-1,t),o=[],i=r-1;for(let a=0;a<i;a++)r--,e<l?(o.push(0),l=l*--n/r):(o.push(1),e-=l,l=l*t--/r);return o.push(t),o}function Kt(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function Us(e,t){let r=Kt(e[0],t[0]),n=[],l=t[0].length;for(let o=0;o<l;o++)n[o]=(e[1][t[0][o]]+t[1][o])%3;return[r,n]}function Ll(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function zr(e,t){let r=Array(t).fill(0);for(let n in e)r[n]=e[n];return r}function Vd(e){let t=[0];for(let n=1;n<20;n++){let l=e(n+1);t[n]=t[l],t[l]=n}Nd(t)===1&&([t[0],t[1]]=[t[1],t[0]]);let r=Array(20).fill(0);for(let n=0;n<19;n++)r[n]=e(3),r[19]+=3-r[n];return r[19]%=3,[t,r]}function Hd(e){let t=["0","","2","2'","'"];return e.map(([n,l])=>jd[n]+t[l]).join(" ")}function Yd(e,t){for(let[r,n]of t)for(let l=0;l<n;l++)e=Us(e,fn[r]);return e}function Jd(e){return oh(Vd(e))}function Xd(e){let t=e[0];if(t.slice(15,20).every(o=>o<15))return[];if(t.slice(0,5).every(o=>o<15))return[[6,1]];let r=t.map(o=>o>=15),n=0,l;for(;l===void 0;)n++,l=wc(r,n,-1);return l.push([6,1]),l}function wc(e,t,r){if(t==0)return e.slice(0,5).some(n=>n)?void 0:[];for(let n=0;n<6;n++)if(n!==r)for(let l=1;l<5;l++){let o=Kt(e,i0[n][l][0]),i=wc(o,t-1,n);if(i!==void 0)return[[n,l]].concat(i)}}function $d(e){let t=e[0].slice(0,15),r=e[1],n=ys(t.map(i=>+(i>=15))),l=243*n;for(let i=0,a=0;i<15;i++)t[i]<15||(l+=r[i]*Math.pow(3,a),a++);let o=0;for(let i=0;i<5;i++)o+=t.indexOf(15+i)*Math.pow(15,i);return[l,o]}function eh(e){let t=[s0(),f0()],r=[ih(),sh()];return xc($d(e),t,r).concat([[6,1]])}function th(e){let t=[5,6,7,8,14],r=e[0].slice(0,15),n=e[1],l=ys(r.map(a=>+(t.indexOf(a)!==-1))),o=243*l;for(let a=0,s=0;a<15;a++)t.indexOf(r[a])!==-1&&(o+=n[a]*Math.pow(3,s),s++);let i=0;for(let a=0;a<5;a++)i+=r.indexOf(t[a])*Math.pow(15,a);return[o,i]}function rh(e){let t=[s0(),f0()],r=[ah(),fh()];return xc(th(e),t,r)}function nh(e){let t=e[0].slice(0,14),r=e[1],n=0,l=[],o=0;for(let i of[0,1,2,3,4,9,10,11,12,13])i!==13&&(n+=r[i]*Math.pow(3,o)),l[o]=t[i]<5?t[i]:t[i]-4,o++;return[n,Gd(l)]}function lh(e){return mh(nh(e))}function oh(e){let t=[];for(let r of[Xd,eh,rh,lh]){let n=r(e);e=Yd(e,n),t=t.concat(n)}return t}function s0(){if(te.phase23om)return te.phase23om;let e=a0(15,5),t=[1,3,9,27,81,243],r=Array(a0(15,5)*t[5]);te.phase23om=r;for(let n=0;n<e;n++){let l=Id(n,5,15).concat(Array(5).fill(0)),o=[];for(let i=0;i<6;i++){let a=Kt(l,fn[i][0]).slice(0,15);o[i]=ys(a)}for(let i=0;i<t[5];i++){r[i+243*n]=[];let a=[];for(let s=0,f=0;s<20;s++)l[s]===1?(a[s]=(i/t[f]|0)%3,f++):a[s]=99;for(let s=0;s<6;s++){let f=fn[s],g=[];for(let p=0;p<15;p++)g[p]=a[f[0][p]]+f[1][p];let c=g.filter(p=>p<10),u=0;for(let p=0;p<5;p++)u+=c[p]%3*t[p];r[i+243*n][s]=u+243*o[s]}}}return r}function ih(){if(te.phase2op)return te.phase2op;let e=s0();return te.phase2op=Bl(e,[243*3002])}function ah(){if(te.phase3op)return te.phase3op;let e=s0();return te.phase3op=Bl(e,[243*246])}function f0(){if(te.phase23pm)return te.phase23pm;let e=[1,15,225,Math.pow(15,3),Math.pow(15,4),Math.pow(15,5)],t=Array(e[5]),r=Array(15);for(let l=0;l<15;l++){r[l]=Array(6);for(let o=0;o<6;o++)r[l][o]=fn[o][0].indexOf(l)}let n=[0,0,0,0,0];for(let l=0;l<e[5];l++){t[l]=Array(6);for(let o=0;o<6;o++){let i=0;for(let a=0;a<5;a++)i+=r[n[a]][o]*e[a];t[l][o]=i}n[0]++;for(let o=0;o<4;o++)n[o]===15&&(n[o]=0,n[o+1]++)}return te.phase23pm=t}function sh(){if(te.phase2pp)return te.phase2pp;let e=f0();return te.phase2pp=Bl(e,[213090])}function fh(){if(te.phase3pp)return te.phase3pp;let e=f0();return te.phase3pp=Bl(e,[737420])}function bs(){if(te.phase4om)return te.phase4om;let e=[1,3,9,27,81,243,729,2187,6561,19683,59049],t=Array(e[9]);for(let r=0;r<e[9];r++){let n=Array(14).fill(0);for(let l=0;l<9;l++){let o=l<5?l:l+4;n[o]=(r/e[l]|0)%3,n[13]-=n[o]}n[13]=(n[13]+999)%3,t[r]=[];for(let l=0;l<3;l++){let o=fn[l],i=[0,1,2,3,4,9,10,11,12,13].map(s=>n[o[0][s]]+o[1][s]),a=0;for(let s=0;s<9;s++)a+=i[s]%3*e[s];t[r][l]=a}}return te.phase4om=t}function Ss(){if(te.phase4pm)return te.phase4pm;let e=yc(10)/2,t=10,r=[0,1,2,3,4,-1,-1,-1,-1,5,6,7,8,9],n=[0,1,2,3,4,9,10,11,12,13],l=[Kt(r,Kt(Uc[0],n)),Kt(r,Kt(bc[0],n)),Kt(r,Kt(Sc[0],n))],o=Array(e),i=Array(10);for(let a=0;a<e;a++){Od(a,i),o[a]=[];for(let s=0;s<3;s++){let f=Kt(i,l[s]);o[a][s]=Td(f)}}return te.phase4pm=o}function uh(){if(te.phase4op)return te.phase4op;let e=bs();return te.phase4op=Bl(e,[0])}function gh(){if(te.phase4pp)return te.phase4pp;let e=Ss();return te.phase4pp=Bl(e,[0])}function ch(e){if(te.phase4np_list&&te.phase4np_list.threshold===e)return te.phase4np_list;let t=[bs(),Ss()],r=Math.pow(3,9),n=[0];l(e,[0,0],-1);function l(a,s,f){if(n.push(s[0]+r*s[1]),a===0)return;let g=[];for(let c=0;c<3;c++)if(c!==f){g[0]=s[0],g[1]=s[1];for(let u=1;u<5;u++)g[0]=t[0][g[0]][c],g[1]=t[1][g[1]][c],l(a-1,g,c)}}n.sort((a,s)=>a-s);let o=[],i=-1;for(let a of n)a!==i&&o.push(i=a);return o.threshold=e,te.phase4np_list=o}function ph(e,t){let r=0,n=e.length-1;for(;n-r>1;){let l=r+n>>1;t>e[l]?r=l+1:n=l}return t===e[r]||t===e[n]}function Bl(e,t){let r=e.length,n=e[0].length,l=Array(r).fill(-1);for(let a of t)l[a]=0;let o=0,i=!1;for(;!i;){i=!0;for(let a=0;a<r;a++)if(l[a]===o)for(let s=0;s<n;s++){let f=e[a][s];for(;f!==a;)l[f]===-1&&(i=!1,l[f]=o+1),f=e[f][s]}o++}return l}function xc(e,t,r){let n=e.length,l=0;for(let o=0;o<n;o++)l=Math.max(l,r[o][e[o]]);for(;;){let o=vc(e,t,r,l,-1);if(o!==void 0)return o;l++}}function vc(e,t,r,n,l){let o=e.length,i=t[0][0].length,a=0;for(let s=0;s<o;s++)a=Math.max(a,r[s][e[s]]);if(!(a>n)){if(n===0||a===0)return[];for(let s=0;s<i;s++){if(s===l)continue;let f=e.slice();for(let c=0;c<o;c++)f[c]=t[c][e[c]][s];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=vc(f,t,r,n-1,s);if(c!==void 0)return[[s,g]].concat(c);for(let u=0;u<o;u++)f[u]=t[u][f[u]][s];g++}}}}function mh(e){let t=bs(),r=Ss(),n=uh(),l=gh(),o=ch(Ds),i=Math.max(n[e[0]],l[e[1]]);for(;;){let a=Ec(e,i,-1,t,r,n,l,o);if(a!==void 0)return a;i++}}function Ec(e,t,r,n,l,o,i,a){let s=Math.max(o[e[0]],i[e[1]]);if(!(s>t)&&(s<=Ds&&!ph(a,e[0]+19683*e[1])&&(s=Ds+1),!(s>t))){if(t===0||s===0)return[];for(let f=0;f<3;f++){if(f===r)continue;let g=e.slice();for(let c=1;c<5;c++){g[0]=n[g[0]][f],g[1]=l[g[1]][f];let u=Ec(g,t-1,f,n,l,o,i,a);if(u!==void 0)return[[f,c]].concat(u)}}}}async function _c(){return new _(Hd(Jd(await Lh)))}var Ds,Td,Od,Uc,bc,Sc,Wd,Kd,Qd,As,M7,fn,jd,qd,i0,Zd,te,Lh,zc=U(()=>{"use strict";Le();Rt();Ds=7;[Td,Od]=(()=>{let e=new Int8Array(10240),t=new Int8Array(1024*10);for(let l=0;l<1024;l++)for(let o=0,i=0;o<10;o++)(l>>>o&1)!==0&&(e[o<<10|l]=i,t[i<<10|l]=o,i++);function r(l){let o=1023,i=181440,a=0;for(let s=0;s<8;s++){let f=l[s];a+=e[o|f<<10]*i,o&=~(1<<f),i/=9-s}return a}function n(l,o){let i=1023,a=181440,s=0;for(let f=0;f<8;f++){let g=l/a|0;l-=g*a,s^=g&1;let c=t[i|g<<10];o[f]=c,i&=~(1<<c),a/=9-f}return o[8]=t[i|s<<10],o[9]=t[i|(s^1)<<10],o}return[r,n]})();Uc=[Ll([0,1,2,3,4],20),zr({},20)],bc=[Ll([4,3,11,12,13],20),zr({4:2,3:1,11:1,12:1,13:1},20)],Sc=[Ll([3,2,9,10,11],20),zr({3:2,2:1,9:1,10:1,11:1},20)],Wd=[Ll([2,1,7,8,9],20),zr({2:2,1:1,7:1,8:1,9:1},20)],Kd=[Ll([1,0,5,6,7],20),zr({1:2,0:1,5:1,6:1,7:1},20)],Qd=[Ll([0,4,13,14,5],20),zr({0:2,4:1,13:1,14:1,5:1},20)],As=[[15,16,17,18,19,10,9,8,7,6,5,14,13,12,11,0,1,2,3,4],zr({},20)],M7=[[1,2,3,4,0,7,8,9,10,11,12,13,14,5,6,19,15,16,17,18],zr({},20)],fn=[Uc,bc,Sc,Wd,Kd,Qd,As],jd=["U","R","F","L","BL","BR","x2"],qd=Us(As,As),i0=[];for(let e=0;e<fn.length;e++){i0[e]=[qd];for(let t=1;t<5;t++)i0[e][t]=Us(i0[e][t-1],fn[e])}{let e=Math.sin(Math.PI/5),t=Math.cos(Math.PI/10),r=Math.cos(Math.PI/5),n=Math.sin(Math.PI/10);Zd={U:[0,0],L:[-e-t,r-n],F:[0,2*r],R:[e+t,r-n],BR:[t,-1-n],BL:[-t,-1-n],DBR:[2*e+2*t,0],DB:[3*e+3*t,-r-n],DBL:[4*e+4*t,0],DFL:[3*e+4*t,1+r],DFR:[3*e+2*t,1+r],D:[3*e+3*t,r-n]}}te={};Lh=we();_c().then(e=>e.log())});var qc={};pe(qc,{randomMasterTetraminxScrambleString:()=>Kh});function fo(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function gn(e){let t=Array(e);for(let r=0;r<e;r++)t[r]=r;return t}function Bh(e){e=e.slice();let t=e.length,r=fo(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function u0(e,t){let r=[],n=fo(t-1)/2,l=0;for(let o=0;o<t-1;o++)r[o]=e/n|0,e%=n,n/=t-1-o;r[t-1]=0;for(let o=t-2;o>=0;o--)for(let i=o+1;i<t;i++)r[i]>=r[o]?r[i]++:l^=1;return l===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function Mc(e){return Bh(e)>>1}function un(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function xs(e){let t=[];for(let r=0;r<e.length;r++)t[e[r]]=r;return t}function uo(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function Cr(e,t){return e.length===0?gn(t):e.map(r=>uo(r,t)).reduce(un)}function Rh(e,t){let r=Array(4);for(let i=0;i<4;i++)r[i]=(e.co[i]+t.co[i])%3;let n=un(e.mp,t.mp),l=un(e.wp,t.wp),o=un(e.cp,t.cp);return{co:r,mp:n,wp:l,cp:o}}function Nc(e,t){return e>=4&&t>=4?!0:e<4&&t<4?e===t:(e^t)===4}function wh(e){let t=["0","","'"];return e.map(([n,l])=>Sh[n]+t[l]).join(" ")}function xh(e){let t=Array(4);for(let o=0;o<4;o++)t[o]=e(3);let r=u0(e(fo(6)/2),6);for(let o=0,i=0;o<6;o++){let a=o===5?i:e(2);i^=a,r[o]+=a*6,r[o+6]=(r[o]+6)%12}let n=u0(e(fo(12)/2),12),l=u0(e(fo(4)/2),4);return{co:t,mp:r,wp:n,cp:l}}function vh(e){return _h(xh(e))}function Eh(e,t=!0,r=!1){let n=wh(vh(e));if(!t)return n;let l=["u","l","r","b"],o=["0","","'"];if(!r){for(let u=0;u<4;u++){let p=e(3);p!==0&&(n+=" "+l[u]+o[p])}return n.trim()}let i=[],a=[],s=[];for(let u=0;u<4;u++)i[u]=e(3),a[u]=e(3),s[u]=(i[u]-a[u]+3)%3;let f=u=>u.filter(p=>p!==0).length;for(;!(f(a)>=1&&f(s)>=1&&f(a)+f(s)>=4);)for(let u=0;u<4;u++)a[u]=e(3),s[u]=(i[u]-a[u]+3)%3;let g=a.map((u,p)=>u!==0?l[p]+o[u]+" ":"").join(""),c=s.map((u,p)=>u!==0?" "+l[p]+o[u]:"").join("");return g+n+c}function _h(e){let t=zh(e),r=[Wc(),Kc()],n=[Th(),Oh()],l=Mh(t),o,i=new Set,a=performance.now();for(let s=0;s<22;s++){let{value:f,done:g}=l.next(),c=e;for(let[R,h]of f)for(let y=0;y<h;y++)c=Rh(c,Rl[R]);let u=JSON.stringify(c);if(i.has(u))continue;i.add(u);let p=Nh(c),m=o?o.length-f.length-1:999999,L=Ih(p,r,n,m).next().value;if(L!==void 0&&((o===void 0||o.length>f.length+L.length)&&(o=f.concat(L)),performance.now()-a>300))break}return o}function kh(e){return e[3^e.indexOf(3)]}function zh(e){let t=un(xs(e.mp),e.wp),r=(e.co.reduce((n,l)=>n+l)-kh(e.cp)+3)%3;return[0,1,2,3,4,5].map(n=>n+6*t.indexOf(n)+72*t.indexOf(n+6)+864*r)}function*Mh(e){let t=0,r=Ic(),n=Gh();for(;;)yield*Tc(...e,r,n,t,-1),t++}function*Tc(e,t,r,n,l,o,i,a,s,f){let g=cn,c=ar[e]+ar[t]+ar[r]+ar[n]+ar[l]+ar[o],u=Math.max(a[e%864+t*864],a[r%864+t*864],a[l%864+t*864],a[e%864+n*864],a[r%864+n*864],a[l%864+n*864],a[e%864+o*864],a[r%864+o*864],a[l%864+o*864],a[e%864+r*864],a[e%864+l*864],a[r%864+l*864],a[t%864+n*864],a[t%864+o*864],a[n%864+o*864],Es[c]);if(!(u>s)){if(s===0){yield[];return}if(!(u===0&&s===1))for(let p=0;p<g;p++){if(p===f||p<f&&Nc(p,f))continue;let m=e,L=t,R=r,h=n,y=l,A=o;for(let E=1;E<=2;E++){m=i[m][p],L=i[L][p],R=i[R][p],h=i[h][p],y=i[y][p],A=i[A][p];let v=Tc(m,L,R,h,y,A,i,a,s-1,p);for(;;){let{value:K,done:Z}=v.next();if(Z)break;yield[[p,E]].concat(K)}}}}}function Nh(e){let t=e.mp,r=Mc(t.slice(0,6).map(i=>i%6)),n=t.slice(0,5).map((i,a)=>(i>=6)*2**a).reduce((i,a)=>i+a),l=e.co.map((i,a)=>i*3**a).reduce((i,a)=>i+a),o=e.cp.indexOf(0);return[r+360*o,n+32*l]}function Oc(){if(xe.phase1pm)return xe.phase1pm;let e=Array(6*12*12).fill().map(()=>Array(cn).fill(-1));for(let t=0;t<6;t++)for(let r=0;r<12;r++)for(let n=0;n<12;n++){if(r===n)continue;let l=t+6*r+72*n;for(let o=0;o<cn;o++){let i=Gc[o][t],a=vs[o][r],s=vs[o][n];i<6?e[l][o]=i+6*a+72*s:e[l][o]=i-6+6*s+72*a}}return xe.phase1pm=e}function Ic(){if(xe.phase1pcm)return xe.phase1pcm;let e=Oc(),t=Array(e.length*3).fill().map(()=>Array(cn).fill(-1));for(let r=0;r<e.length;r++)for(let n=0;n<cn;n++){let l=e[r][n];t[r][n]=l+6*12*12*ws[n],t[r+6*12*12][n]=l+6*12*12*((ws[n]+1)%3),t[r+2*6*12*12][n]=l+6*12*12*((ws[n]+2)%3)}return xe.phase1pcm=t}function Gh(){if(xe.phase1p2cp)return xe.phase1p2cp;let e=Oc(),t=Ic(),r=new Int8Array((6*12*12)**2*3);r.fill(-1);let n=[0,1,2,3,4,5].map(o=>o+6*o+72*(o+6));for(let o=0;o<6;o++)for(let i=0;i<6;i++)o!==i&&(r[n[o]+864*n[i]]=0);let l=0;for(;;){let o=!1;for(let i=0;i<r.length;i++){if(r[i]!==l)continue;let a=i%864,s=Math.floor(i/864);for(let f=0;f<cn;f++){let g=a,c=s;for(let u=1;u<=2;u++){g=e[g][f],c=t[c][f];let p=g+864*c;r[p]===-1&&(o=!0,r[p]=l+1)}}}if(!o)break;l++}return xe.phase1p2cp=r}function Wc(){if(xe.phase2pm)return xe.phase2pm;let e=Array(1440).fill().map(()=>Array(g0));for(let t=0;t<360;t++){let r=u0(t,6);for(let n=0;n<6;n++)r[n+6]=r[n]+6;for(let n=0;n<g0;n++){let l=un(r,Rl[n].mp),o=Mc(l.slice(0,6).map(i=>i%6));for(let i=0;i<4;i++){let a=Rl[n].cp[i];e[t+360*a][n]=o+360*i}}}return xe.phase2pm=e}function Kc(){if(xe.phase2om)return xe.phase2om;let e=Array(32*81).fill().map(()=>Array(g0));for(let t=0;t<32;t++){let r=[0,1,2,3,4].map(l=>t>>l&1);r[5]=r.reduce((l,o)=>l^o);let n=[];for(let l=0;l<6;l++)n[l]=l+6*r[l],n[l+6]=l+6*(r[l]^1);for(let l=0;l<81;l++){let o=[0,1,2,3].map(i=>Math.floor(l/3**i)%3);for(let i=0;i<g0;i++){let s=un(n,Rl[i].mp).slice(0,5).map(u=>+(u>=6)),f=0;for(let u=0;u<5;u++)f+=s[u]<<u;let g=o.map((u,p)=>(u+Rl[i].co[p])%3),c=0;for(let u=0;u<4;u++)c+=g[u]*3**u;e[t+32*l][i]=f+32*c}}}return xe.phase2om=e}function Th(){return xe.phase2pp?xe.phase2pp:xe.phase2pp=Qc(Wc(),[0])}function Oh(){return xe.phase2op?xe.phase2op:xe.phase2op=Qc(Kc(),[0])}function Qc(e,t){let r=e.length,n=e[0].length,l=Array(r).fill(-1),o=t.slice(),i=[],a=0;for(;o.length>0;){i.length=0;for(let s of o)if(l[s]===-1){l[s]=a;for(let f=0;f<n;f++){let g=e[s][f];for(;g!=s;)i.push(g),g=e[g][f]}}[o,i]=[i,o],a+=1}return l}function*Ih(e,t,r,n){let l=e.length,o=0;for(let i=0;i<l;i++)o=Math.max(o,r[i][e[i]]);for(;o<=n;)yield*jc(e,t,r,o,-1),o++}function*jc(e,t,r,n,l){let o=e.length,i=t[0][0].length,a=0;for(let s=0;s<o;s++)a=Math.max(a,r[s][e[s]]);if(!(a>n)){if(n===0){yield[];return}if(!(a===0&&n===1))for(let s=0;s<i;s++){if(s===l||s<l&&Nc(s,l))continue;let f=e.slice();for(let c=0;c<o;c++)f[c]=t[c][e[c]][s];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=jc(f,t,r,n-1,s);for(;;){let{value:u,done:p}=c.next();if(p)break;yield[[s,g]].concat(u)}for(let u=0;u<o;u++)f[u]=t[u][f[u]][s];g++}}}}async function Kh(){return Eh(await Wh,!1)}var O7,I7,W7,dh,hh,Fh,Dh,Ah,yh,Uh,bh,Rl,Sh,cn,g0,Ch,Gc,Ph,vs,ws,Pc,Es,ar,xe,Wh,Vc=U(()=>{"use strict";Rt();[O7,I7]=(()=>{let e=new Int8Array(49152),t=new Int8Array(4096*12);for(let l=0;l<4096;l++)for(let o=0,i=0;o<12;o++)(l>>>o&1)!==0&&(e[o<<12|l]=i,t[i<<12|l]=o,i++);function r(l){let o=4095,i=19958400,a=0;for(let s=0;s<10;s++){let f=l[s];a+=e[o|f<<12]*i,o&=~(1<<f),i/=11-s}return a}function n(l,o){let i=4095,a=19958400,s=0;for(let f=0;f<10;f++){let g=l/a|0;l-=g*a,s^=g&1;let c=t[i|g<<12];o[f]=c,i&=~(1<<c),a/=11-f}return o[10]=t[i|s<<12],o[11]=t[i|(s^1)<<12],o}return[r,n]})();W7={co:[0,0,0,0],mp:gn(12),wp:gn(12),cp:[0,1,2,3]},dh={co:[2,0,0,0],mp:gn(12),wp:uo([1,9,11],12),cp:[0,1,2,3]},hh={co:[0,2,0,0],mp:gn(12),wp:uo([0,7,2],12),cp:[0,1,2,3]},Fh={co:[0,0,2,0],mp:gn(12),wp:uo([3,6,10],12),cp:[0,1,2,3]},Dh={co:[0,0,0,2],mp:gn(12),wp:uo([4,8,5],12),cp:[0,1,2,3]},Ah={co:[2,0,0,0],mp:Cr([[1,9,11],[7,3,5]],12),wp:Cr([[1,9,11],[7,3,5]],12),cp:[0,2,3,1]},yh={co:[0,2,0,0],mp:Cr([[0,7,2],[6,1,8]],12),wp:Cr([[0,7,2],[6,1,8]],12),cp:[3,1,0,2]},Uh={co:[0,0,2,0],mp:Cr([[3,6,10],[9,0,4]],12),wp:Cr([[3,6,10],[9,0,4]],12),cp:[1,3,2,0]},bh={co:[0,0,0,2],mp:Cr([[4,8,5],[10,2,11]],12),wp:Cr([[4,8,5],[10,2,11]],12),cp:[2,0,1,3]},Rl=[Ah,yh,Uh,bh,dh,hh,Fh,Dh],Sh=["u","l","r","b","U","L","R","B"],cn=8,g0=4;Ch=[],Gc=[],Ph=[],vs=[];for(let e=0;e<cn;e++){let t=Rl[e];Ch[e]=t.mp,Gc[e]=xs(t.mp),Ph[e]=t.wp,vs[e]=xs(t.wp)}ws=[0,0,0,0,2,2,2,2],Pc=[[14,-1,-1,11,11,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,4,3,-1,-1,0],[13,-1,-1,11,10,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,3,1,-1,-1,6]],Es=new Int8Array(55);for(let e=0;e<25;e++)Es[e]=Pc[0][e],Es[e+30]=Pc[1][e];ar=new Int8Array(6*12*12*3);for(let e=0;e<6;e++)for(let t=0;t<12;t++)for(let r=0;r<12;r++){let n=e+6*t+72*r,l=2;t===e?l++:t===(e+6)%12&&l--,r===(e+6)%12?l++:r===e&&l--,ar[n]=l,ar[n+6*12*12]=ar[n+2*6*12*12]=l+5}xe={};Wh=we()});var Jc={};pe(Jc,{cachedMegaminxKPuzzleWithoutMO:()=>go,cachedSGSDataMegaminx:()=>Vh,sgsDataMegaminx:()=>Yc});async function Qh(){let e=Cn("megaminx",{allMoves:!0,addRotations:!0}),t=new be(e.getKPuzzleDefinition(!0),{experimentalPGNotation:new Qr(e,e.getOrbitsDef(!0))});return t.definition.name="megaminx",t}async function go(){return jh??(jh=Qh())}async function Vh(){return qh??(qh=Yc())}async function Yc(){return Ot(await go(),\`SubgroupSizes 12 5 60 58 60 56 54 57 52 50 54 48 46 51 44 42 48 40 45 38 36 42 34 32 39 30 36 28 26 33 24 30 22 20 27 18 24 16 14 21 12 18 10 15 8 6 2 12 9 3

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
Alg U BR2' U R' U2' L U2 R U' BR2 U' L'\`)}var jh,qh,_s=U(()=>{je();Pn();Mn();jh=null;qh=null});var ep={};pe(ep,{sgsDataPyraminx:()=>$c,sgsDataPyraminxFixedOrientation:()=>ks});async function $c(){return Jh??(Jh=Zh())}async function ks(){return{ordering:(await $c()).ordering.slice(2)}}async function Zh(){return Ot(await Ce.pyraminx.kpuzzle(),\`SubgroupSizes 12 9 12 3 10 3 8 6 2 3 3 3 3

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
Alg u'\`)}var Jh,zs=U(()=>{Jt();Mn();Jh=null});var cp={};pe(cp,{getRandomRediCubeScramble:()=>xF});function po(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function Ps(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function tF(e){e=e.slice();let t=e.length,r=po(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function rF(e,t){let r=[],n=po(t-1);for(let l=0;l<t;l++)r[l]=e/n|0,e%=n,n/=t-1-l;for(let l=t-2;l>=0;l--)for(let o=l+1;o<t;o++)r[o]+=+(r[o]>=r[l]);return r}function np(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let l=n;l<t;l++)e[n]>e[l]&&(r^=1);return r}function nF(e,t){let r=[],n=po(t-1)/2,l=0;for(let o=0;o<t-1;o++)r[o]=e/n|0,e%=n,n/=t-1-o;r[t-1]=0;for(let o=t-2;o>=0;o--)for(let i=o+1;i<t;i++)r[i]>=r[o]?r[i]++:l^=1;return l===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function lp(e){return tF(e)>>1}function op(e){let t=e.length,r=0;for(let i=0;i<t;i++)r+=+(e[i]===1);let n=t-r;if(n===0||r===0||t===1)return 0;let l=Ps(t-1,r),o=0;for(let i=0;n>0&&r>0&&t>1;i++)t--,e[i]===0?l=l*--n/t:(o+=l,l=l*r--/t);return o}function lF(e,t,r){let n=r-t,l=Ps(r-1,t),o=[],i=r-1;for(let a=0;a<i;a++)r--,e<l?(o.push(0),l=l*--n/r):(o.push(1),e-=l,l=l*t--/r);return o.push(t),o}function c0(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function Pr(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function Mr(e,t){let r=Array(t).fill(0);for(let n in e)r[n]=e[n];return r}function oF(e,t){let r=Array(8).fill(0);for(let n=0;n<8;n++)r[n]=(e[1][n]+t[1][n])%3;return[c0(e[0],t[0]),r]}function LF(e){let t=["0","","'"];return e.map(([n,l])=>mF[n]+t[l]).join(" ")}function BF(e){let t=nF(Math.floor(e(po(12))/2),12),r=Array(8);for(let n=0;n<8;n++)r[n]=e(3);return[t,r]}function RF(e){return dF(BF(e))}function dF(e){let t=hF(e),r=[ap(),sp()],n=[DF(),AF()],l=[fp(),yF()],o=[UF(),FF()],i=SF(t,r,n),a,s=new Set,f=+new Date;for(let g=0;g<25;g++){let{value:c,done:u}=i.next(),p=e;for(let[A,E]of c)for(let v=0;v<E;v++)p=oF(p,co[A]);if(s.has(p.toString()))continue;s.add(p.toString());let m=lp(p[0].slice(0,8)),L=0;for(let A=0;A<4;A++)L+=p[1][A]*3**A;let R=[m,L],h=a?a.length-c.length-1:999999,y=bF(R,l,o,h);if(y!==void 0&&((a===void 0||a.length>c.length+y.length)&&(a=c.concat(y)),new Date-f>300))break}return a}function hF(e){let t=0;for(let o=0;o<4;o++)t+=e[0].indexOf(o+8)*12**o;let r=0;for(let o=0;o<4;o++)r+=e[1][o+4]*3**o;let n=e[0].map(o=>Math.max(-1,o-8)),l=op(n.map(o=>+(o>=0)))*2+np(n.filter(o=>o>=0));return[t,r+81*l]}function ip(){if(ge.phase1cm)return ge.phase1cm;let e=[];for(let t=0;t<81;t++){e[t]=Array(8);let r=[t%3,Math.floor(t/3)%3,Math.floor(t/9)%3,Math.floor(t/27)];e[t][0]=e[t][1]=e[t][2]=e[t][3]=t;for(let n=0;n<4;n++)r[n]=(r[n]+2)%3,e[t][4+n]=r[0]+r[1]*3+r[2]*9+r[3]*27,r[n]=(r[n]+1)%3}return ge.phase1cm=e}function FF(){if(ge.phase1cp)return ge.phase1cp;let e=Array(81);for(let t=0;t<81;t++){let r=[t%3,Math.floor(t/3)%3,Math.floor(t/9)%3,Math.floor(t/27)];e[t]=(r[0]!==0)+(r[1]!==0)+(r[2]!==0)+(r[3]!==0)}return ge.phase1cp=e}function ap(){if(ge.phase1em)return ge.phase1em;let e=[];for(let r=0;r<12;r++){e[r]=[];for(let n=0;n<8;n++)e[r][n]=co[n][0].indexOf(r)}let t=Array(12**4);for(let r=0;r<12**4;r++){t[r]=Array(8);for(let n=0;n<8;n++){let l=0;for(let o=0;o<4;o++)l+=e[Math.floor(r/12**o)%12][n]*12**o;t[r][n]=l}}return ge.phase1em=t}function DF(){return ge.phase1ep?ge.phase1ep:ge.phase1ep=Ms(ap(),[8+12*(9+12*(10+12*11))])}function sp(){if(ge.phase1sm)return ge.phase1sm;let e=Ps(12,4),t=[];for(let l=0;l<e;l++){t[l]=[];let o=lF(l,4,12),i=[];for(let a=0,s=0;a<12;a++)o[a]===0?i[a]=-1:i[a]=s++;for(let a=0;a<8;a++){let s=c0(i,co[a][0]),f=c0(o,co[a][0]),g=np(s.filter(c=>c>=0));t[l][a]=op(f)*2+g}}let r=ip(),n=[];for(let l=0;l<e;l++)for(let o=0;o<81;o++){let i=n[o+81*(2*l)]=[],a=n[o+81*(2*l+1)]=[];for(let s=0;s<8;s++)i[s]=r[o][s]+81*t[l][s],a[s]=r[o][s]+81*(t[l][s]^1)}return ge.phase1sm=n}function AF(){return ge.phase1sp?ge.phase1sp:ge.phase1sp=Ms(sp(),[0])}function yF(){if(ge.phase2cm)return ge.phase2cm;let e=ip(),t=Array(81);for(let r=0;r<81;r++)t[r]=e[r].slice(4,8);return ge.phase2cm=t}function fp(){if(ge.phase2em)return ge.phase2em;let e=8,t=po(e)/2,r=Array(t),n=[0,1,2,3,4,5,6,7];for(let l=0;l<t;l++){r[l]=Array(4);for(let i=0;i<4;i++){let a=c0(n,co[i][0].slice(0,8));r[l][i]=lp(a)}if(l===t-1)break;let o=0;do for(let i=e-2;i>=0;i--){if(n[i]>n[i+1])continue;let a=i+1;for(let s=a;s<e;s++)n[s]>n[i]&&(a=s);[n[i],n[a]]=[n[a],n[i]],o^=1;for(let s=0;i+1+s<e-1-s;s++,o^=1)[n[i+1+s],n[e-1-s]]=[n[e-1-s],n[i+1+s]];break}while(o!==0)}return ge.phase2em=r}function UF(){return ge.phase2ep?ge.phase2ep:ge.phase2ep=Ms(fp(),[0])}function Ms(e,t){let r=e.length,n=e[0].length,l=Array(r).fill(-1),o=t.slice(),i=[],a=0;for(;o.length>0;){i.length=0;for(let s of o)if(l[s]===-1){l[s]=a;for(let f=0;f<n;f++){let g=e[s][f];for(;g!=s;)i.push(g),g=e[g][f]}}[o,i]=[i,o],a+=1}return l}function bF(e,t,r,n){n=n||999999;let l=e.length,o=0;for(let i=0;i<l;i++)o=Math.max(o,r[i][e[i]]);for(;o<=n;){let i=up(e,t,r,o,-1);if(i!==void 0)return i;o++}}function up(e,t,r,n,l){let o=e.length,i=t[0][0].length,a=0;for(let s=0;s<o;s++)a=Math.max(a,r[s][e[s]]);if(!(a>n)){if(n===0)return[];if(!(a===0&&n===1))for(let s=0;s<i;s++){if(s===l||s<l&&p0[s]==p0[l])continue;let f=e.slice();for(let c=0;c<o;c++)f[c]=t[c][e[c]][s];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=up(f,t,r,n-1,s);if(c!==void 0)return[[s,g]].concat(c);for(let u=0;u<o;u++)f[u]=t[u][f[u]][s];g++}}}}function*SF(e,t,r){let n=e.length,l=0;for(let o=0;o<n;o++)l=Math.max(l,r[o][e[o]]);for(;;)yield*gp(e,t,r,l,-1),l++}function*gp(e,t,r,n,l){let o=e.length,i=t[0][0].length,a=0;for(let s=0;s<o;s++)a=Math.max(a,r[s][e[s]]);if(!(a>n)){if(n===0){yield[];return}if(!(a===0&&n===1))for(let s=0;s<i;s++){if(s===l||s<l&&p0[s]==p0[l])continue;let f=e.slice();for(let c=0;c<o;c++)f[c]=t[c][e[c]][s];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=gp(f,t,r,n-1,s);for(;;){let{value:u,done:p}=c.next();if(p)break;yield[[s,g]].concat(u)}for(let u=0;u<o;u++)f[u]=t[u][f[u]][s];g++}}}}async function xF(){return new _(LF(RF(await wF)))}var iF,aF,sF,fF,uF,gF,cF,pF,g5,co,mF,p0,ge,wF,pp=U(()=>{"use strict";Le();Rt();iF=[Pr([0,1,4],12),Mr({0:2},8)],aF=[Pr([1,2,5],12),Mr({1:2},8)],sF=[Pr([2,3,6],12),Mr({2:2},8)],fF=[Pr([3,0,7],12),Mr({3:2},8)],uF=[Pr([9,8,4],12),Mr({4:2},8)],gF=[Pr([10,9,5],12),Mr({5:2},8)],cF=[Pr([11,10,6],12),Mr({6:2},8)],pF=[Pr([8,11,7],12),Mr({7:2},8)],g5=[rF(0,12),Array(8).fill(0)],co=[iF,aF,sF,fF,uF,gF,cF,pF],mF=["UL","U","UR","F","L","B","R","D"],p0=[0,1,0,1,1,0,1,0];ge={};wF=we()});var Bp={};pe(Bp,{sgsDataSkewb:()=>Lp,sgsDataSkewbFixedCorner:()=>Ns,skewbKPuzzleWithoutMOCached:()=>m0});async function vF(){let e=Cn("skewb",{allMoves:!0,addRotations:!0});return new be(e.getKPuzzleDefinition(!0),{experimentalPGNotation:new Qr(e,e.getOrbitsDef(!0))})}async function m0(){return EF??(EF=vF())}async function Lp(){return _F??(_F=kF())}async function Ns(){return{ordering:(await Lp()).ordering.slice(1)}}async function kF(){return Ot(await m0(),\`SubgroupSizes 24 6 5 12 9 3 4 9 3 3

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
Alg R' U' R U B' U' B L\`)}var EF,_F,Gs=U(()=>{je();Pn();Mn();EF=null;_F=null});var wp={};pe(wp,{getRandomSquare1ScrambleString:()=>oD});function NF(e,t){e.ul=t.ul,e.ur=t.ur,e.dl=t.dl,e.dr=t.dr,e.ml=t.ml}function hp(e,t){var r;t<<=2,t>24?(t=48-t,r=e.ul,e.ul=(~~e.ul>>t|e.ur<<24-t)&16777215,e.ur=(~~e.ur>>t|r<<24-t)&16777215):t>0?(r=e.ul,e.ul=(e.ul<<t|~~e.ur>>24-t)&16777215,e.ur=(e.ur<<t|~~r>>24-t)&16777215):t==0?(r=e.ur,e.ur=e.dl,e.dl=r,e.ml=1-e.ml):t>=-24?(t=-t,r=e.dl,e.dl=(e.dl<<t|~~e.dr>>24-t)&16777215,e.dr=(e.dr<<t|~~r>>24-t)&16777215):t<-24&&(t=48+t,r=e.dl,e.dl=(~~e.dl>>t|e.dr<<24-t)&16777215,e.dr=(~~e.dr>>t|r<<24-t)&16777215)}function GF(e){var t,r,n,l,o;for(n=0,e.arr[0]=Qt(e,0),l=1;l<24;++l)Qt(e,l)!=e.arr[n]&&(e.arr[++n]=Qt(e,l));for(o=0,t=0;t<16;++t)for(r=t+1;r<16;++r)e.arr[t]>e.arr[r]&&(o^=1);return o}function TF(e){var t,r,n,l;return l=e.ur&1118481,l|=~~l>>3,l|=~~l>>6,l=l&15|~~l>>12&48,n=e.ul&1118481,n|=~~n>>3,n|=~~n>>6,n=n&15|~~n>>12&48,r=e.dr&1118481,r|=~~r>>3,r|=~~r>>6,r=r&15|~~r>>12&48,t=e.dl&1118481,t|=~~t>>3,t|=~~t>>6,t=t&15|~~t>>12&48,mo(GF(e)<<24|n<<18|l<<12|t<<6|r)}function OF(e,t){var r,n;for(r=0;r<8;++r)e.prm[r]=~~(~~Qt(e,r*3+1)>>1<<24)>>24;for(t.cornperm=ho(e.prm),t.topEdgeFirst=Qt(e,0)==Qt(e,1),r=t.topEdgeFirst?2:0,n=0;n<4;r+=3,++n)e.prm[n]=~~(~~Qt(e,r)>>1<<24)>>24;for(t.botEdgeFirst=Qt(e,12)==Qt(e,13),r=t.botEdgeFirst?14:12;n<8;r+=3,++n)e.prm[n]=~~(~~Qt(e,r)>>1<<24)>>24;t.edgeperm=ho(e.prm),t.ml=e.ml}function Qt(e,t){var r;return t<6?r=~~e.ul>>(5-t<<2):t<12?r=~~e.ur>>(11-t<<2):t<18?r=~~e.dl>>(17-t<<2):r=~~e.dr>>(23-t<<2),~~((r&15)<<24)>>24}function Os(e,t,r){t<6?(e.ul&=~(15<<(5-t<<2)),e.ul|=r<<(5-t<<2)):t<12?(e.ur&=~(15<<(11-t<<2)),e.ur|=r<<(11-t<<2)):t<18?(e.dl&=~(15<<(17-t<<2)),e.dl|=r<<(17-t<<2)):(e.dr&=~(15<<(23-t<<2)),e.dr|=r<<(23-t<<2))}function js(){this.arr=[],this.prm=[]}async function IF(){let e=await we();var t,r,n,l,o,i,a,s,f;for(t=new js,n=dl[e(3678)],o=19088743<<1|286331153,l=19088743<<1,a=i=8,r=0;r<24;r++)(n>>r&1)==0?(s=e(i)<<2,Os(t,23-r,l>>s&15),f=(1<<s)-1,l=(l&f)+(l>>4&~f),--i):(s=e(a)<<2,Os(t,23-r,o>>s&15),Os(t,22-r,o>>s&15),f=(1<<s)-1,o=(o&f)+(o>>4&~f),--a,++r);return t.ml=e(2),t}function WF(){}function KF(e){var t,r,n,l,o,i;for(NF(e.Search_d,e.Search_c),n=0;n<e.Search_length1;++n)hp(e.Search_d,e.Search_move[n]);for(OF(e.Search_d,e.Search_sq),r=e.Search_sq.edgeperm,t=e.Search_sq.cornperm,o=e.Search_sq.ml,i=Math.max(ye[e.Search_sq.edgeperm<<1|o],ye[e.Search_sq.cornperm<<1|o]),n=i;n<e.Search_maxlen2;++n)if(B0(e,r,t,e.Search_sq.topEdgeFirst,e.Search_sq.botEdgeFirst,o,n,e.Search_length1,0)){for(l=0;l<n;++l)hp(e.Search_d,e.Search_move[e.Search_length1+l]);return e.Search_sol_string=QF(e,n+e.Search_length1),!0}return!1}function QF(e,t){for(var r="",n=0,l=0,o=t-1;o>=0;o--){var i=e.Search_move[o];i>0?(i=12-i,n=i>6?i-12:i):i<0?(i=12+i,l=i>6?i-12:i):(n==0&&l==0?r+=" / ":r+="("+n+", "+l+") / ",n=l=0)}return(n!==0||l!==0)&&(r+="("+n+", "+l+")"),r}function L0(e,t,r,n,l,o){var i,a,s;if(r==0&&n<4)return n==0&&KF(e);if(o!=0&&(s=R0[t],a=Ge[s],a<n&&(e.Search_move[l]=0,L0(e,s,a,n-1,l+1,0))))return!0;if(s=t,o<=0){for(i=0;i+=Ro[s],s=~~i>>4,i&=15,!(i>=12||(a=Ge[s],a>n));)if(a<n&&(e.Search_move[l]=i,L0(e,s,a,n-1,l+1,1)))return!0}if(s=t,o<=1){for(i=0;i+=Bo[s],s=~~i>>4,i&=15,!(i>=6||(a=Ge[s],a>n));)if(a<n&&(e.Search_move[l]=-i,L0(e,s,a,n-1,l+1,2)))return!0}return!1}function B0(e,t,r,n,l,o,i,a,s){var f,g,c,u,p,m,L;if(i==0&&!n&&l||s!=0&&n==l&&(c=Fo[t],g=Fo[r],ye[c<<1|1-o]<i&&ye[g<<1|1-o]<i&&(e.Search_move[a]=0,B0(e,c,g,n,l,1-o,i-1,a+1,0))))return!0;if(s<=0)for(L=!n,c=L?Ln[t]:t,g=L?r:Ln[r],u=L?1:2,p=ye[c<<1|o],m=ye[g<<1|o];u<12&&p<=i&&p<=i;){if(p<i&&m<i&&(e.Search_move[a]=u,B0(e,c,g,L,l,o,i-1,a+1,1)))return!0;L=!L,L?(c=Ln[c],p=ye[c<<1|o],u+=1):(g=Ln[g],m=ye[g<<1|o],u+=2)}if(s<=1)for(f=!l,c=f?mn[t]:t,g=f?r:mn[r],u=f?1:2,p=ye[c<<1|o],m=ye[g<<1|o];u<(i>3?6:12)&&p<=i&&p<=i;){if(p<i&&m<i&&(e.Search_move[a]=-u,B0(e,c,g,n,f,o,i-1,a+1,2)))return!0;f=!f,f?(c=mn[c],p=ye[c<<1|o],u+=1):(g=mn[g],m=ye[g<<1|o],u+=2)}return!1}function jF(e,t){var r;for(e.Search_c=t,r=TF(t),e.Search_length1=Ge[r];e.Search_length1<100&&(e.Search_maxlen2=Math.min(31-e.Search_length1,17),!L0(e,r,Ge[r],e.Search_length1,0,-1));++e.Search_length1);return e.Search_sol_string}function Ap(){this.Search_move=[],this.Search_d=new js,this.Search_sq=new Up}function qF(){}function VF(){Fp||(Fp=!0,Lo=[0,3,6,12,15,24,27,30,48,51,54,60,63],dl=[],Ge=[],Ro=[],Bo=[],R0=[],JF())}function HF(e){var t,r;t=0,r=0;do(e.bottom&2048)==0?(t+=1,e.bottom=e.bottom<<1):(t+=2,e.bottom=e.bottom<<2^12291),r=1-r;while((Bn(e.bottom&63)&1)!=0);return(Bn(e.bottom)&2)==0&&(e.Shape_parity^=r),t}function Is(e){var t;return t=Sp(dl,e.top<<12|e.bottom)<<1|e.Shape_parity,t}function Ws(e,t){e.Shape_parity=t&1,e.top=dl[~~t>>1],e.bottom=e.top&4095,e.top>>=12}function YF(e){var t,r;t=0,r=0;do(e.top&2048)==0?(t+=1,e.top=e.top<<1):(t+=2,e.top=e.top<<2^12291),r=1-r;while((Bn(e.top&63)&1)!=0);return(Bn(e.top)&2)==0&&(e.Shape_parity^=r),t}function yp(){}function mo(e){var t;return t=Sp(dl,e&16777215)<<1|~~e>>24,t}function JF(){var e,t,r,n,l,o,i,a,s,f,g,c,u,p,m,L;for(e=0,i=0;i<28561;++i)o=Lo[i%13],r=Lo[~~(i/13)%13],c=Lo[~~(~~(i/13)/13)%13],g=Lo[~~(~~(~~(i/13)/13)/13)],u=g<<18|c<<12|r<<6|o,Bn(u)==16&&(dl[e++]=u);for(f=new yp,i=0;i<7356;++i)Ws(f,i),Ro[i]=YF(f),Ro[i]|=Is(f)<<4,Ws(f,i),Bo[i]=HF(f),Bo[i]|=Is(f)<<4,Ws(f,i),L=f.top&63,p=Bn(L),m=Bn(f.bottom&4032),f.Shape_parity^=1&~~(p&m)>>1,f.top=f.top&4032|~~f.bottom>>6&63,f.bottom=f.bottom&63|L<<6,R0[i]=Is(f);for(i=0;i<7536;++i)Ge[i]=-1;for(Ge[mo(14378715)]=0,Ge[mo(31157686)]=0,Ge[mo(23967451)]=0,Ge[mo(7191990)]=0,n=4,l=0,t=-1;n!=l;)for(l=n,++t,i=0;i<7536;++i)if(Ge[i]==t){s=0,a=i;do a=Ro[a],s+=a&15,a>>=4,Ge[a]==-1&&(++n,Ge[a]=t+1);while(s!=12);s=0,a=i;do a=Bo[a],s+=a&15,a>>=4,Ge[a]==-1&&(++n,Ge[a]=t+1);while(s!=12);a=R0[i],Ge[a]==-1&&(++n,Ge[a]=t+1)}}function ZF(){}function XF(){if(!Dp){Dp=!0,ye=[],Fo=[],Ln=[],mn=[],bp=[1,1,2,6,24,120,720,5040],pn=[];for(var e=0;e<12;++e)pn[e]=[];$F()}}function Up(){}function ho(e){var t,r,n,l;for(r=0,l=1985229328,t=0;t<7;++t)n=e[t]<<2,r=(8-t)*r+(~~l>>n&7),l-=286331152<<n;return r&65535}function $F(){var e,t,r,n,l,o,i,a,s,f,g,c,u;for(l=0;l<12;++l)for(pn[l][0]=1,pn[l][l]=1,s=1;s<l;++s)pn[l][s]=pn[l-1][s-1]+pn[l-1][s];for(c=[],l=0;l<40320;++l)Ks(c,l),u=c[2],c[2]=c[4],c[4]=u,u=c[3],c[3]=c[5],c[5]=u,Fo[l]=ho(c),Ks(c,l),u=c[0],c[0]=c[1],c[1]=c[2],c[2]=c[3],c[3]=u,Ln[l]=ho(c),Ks(c,l),u=c[4],c[4]=c[5],c[5]=c[6],c[6]=c[7],c[7]=u,mn[l]=ho(c);for(l=0;l<80640;++l)ye[l]=-1;for(ye[0]=0,t=0,r=1;r<80640;){a=t>=11,n=a?-1:t,e=a?t:-1,++t;e:for(l=0;l<80640;++l)if(ye[l]==n){if(o=~~l>>1,g=l&1,i=Fo[o]<<1|1-g,ye[i]==e&&(++r,ye[a?l:i]=~~(t<<24)>>24,a))continue e;for(i=o,f=0;f<4;++f)if(i=Ln[i],ye[i<<1|g]==e&&(++r,ye[a?l:i<<1|g]=~~(t<<24)>>24,a))continue e;for(f=0;f<4;++f)if(i=mn[i],ye[i<<1|g]==e&&(++r,ye[a?l:i<<1|g]=~~(t<<24)>>24,a))continue e}}}function Ks(e,t){var r,n,l,o,i;for(i=1985229328,r=0;r<7;++r)l=bp[7-r],o=~~(t/l),t-=o*l,o<<=2,e[r]=~~((~~i>>o&7)<<24)>>24,n=(1<<o)-1,i=(i&n)+(~~i>>4&~n);e[7]=~~(i<<24)>>24}function eD(){}function Bn(e){return e-=~~e>>1&1431655765,e=(~~e>>2&858993459)+(e&858993459),e=(~~e>>4)+e&252645135,e+=~~e>>8,e+=~~e>>16,e&63}function Sp(e,t){var r,n,l,o;for(n=0,r=e.length-1;n<=r;)if(l=n+(~~(r-n)>>1),o=e[l],o<t)n=l+1;else if(o>t)r=l-1;else return l;return-n-1}async function oD(){return(await lD()).scramble_string}var _e,Fp,Bo,dl,Ge,Ro,R0,Lo,Dp,mn,pn,ye,Ln,Fo,bp,Qs,tD,rD,nD,lD,xp=U(()=>{Rt();_e=js.prototype=WF.prototype;_e.dl=10062778;_e.dr=14536702;_e.ml=0;_e.ul=70195;_e.ur=4544119;_e=Ap.prototype=qF.prototype;_e.Search_c=null;_e.Search_length1=0;_e.Search_maxlen2=0;_e.Search_sol_string=null;Fp=!1;_e=yp.prototype=ZF.prototype;_e.bottom=0;_e.Shape_parity=0;_e.top=0;Dp=!1;_e=Up.prototype=eD.prototype;_e.botEdgeFirst=!1;_e.cornperm=0;_e.edgeperm=0;_e.ml=0;_e.topEdgeFirst=!1;Qs=!1,tD=function(e,t,r){Qs||(VF(),XF()),r&&r("Done initializing Square-1."),Qs=!0,e!=null&&e()},rD=async function(){return Qs||tD(),IF()},nD=function(e){var t=new Ap;return jF(t,e)},lD=async function(){var e=await rD(),t=nD(e);return{state:e,scramble_string:t}}});var Xs=Symbol("Comlink.proxy"),Np=Symbol("Comlink.endpoint"),Gp=Symbol("Comlink.releaseProxy"),F0=Symbol("Comlink.thrown"),$s=e=>typeof e=="object"&&e!==null||typeof e=="function",Tp={canHandle:e=>$s(e)&&e[Xs],serialize(e){let{port1:t,port2:r}=new MessageChannel;return hl(e,t),[r,[r]]},deserialize(e){return e.start(),Wp(e)}},Op={canHandle:e=>$s(e)&&F0 in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},e2=new Map([["proxy",Tp],["throw",Op]]);function hl(e,t=self){t.addEventListener("message",function r(n){if(!n||!n.data)return;let{id:l,type:o,path:i}=Object.assign({path:[]},n.data),a=(n.data.argumentList||[]).map(Nr),s;try{let f=i.slice(0,-1).reduce((c,u)=>c[u],e),g=i.reduce((c,u)=>c[u],e);switch(o){case"GET":s=g;break;case"SET":f[i.slice(-1)[0]]=Nr(n.data.value),s=!0;break;case"APPLY":s=g.apply(f,a);break;case"CONSTRUCT":{let c=new g(...a);s=jp(c)}break;case"ENDPOINT":{let{port1:c,port2:u}=new MessageChannel;hl(e,u),s=Qp(c,[c])}break;case"RELEASE":s=void 0;break;default:return}}catch(f){s={value:f,[F0]:0}}Promise.resolve(s).catch(f=>({value:f,[F0]:0})).then(f=>{let[g,c]=A0(f);t.postMessage(Object.assign(Object.assign({},g),{id:l}),c),o==="RELEASE"&&(t.removeEventListener("message",r),t2(t))})}),t.start&&t.start()}function Ip(e){return e.constructor.name==="MessagePort"}function t2(e){Ip(e)&&e.close()}function Wp(e,t){return D0(e,[],t)}function Do(e){if(e)throw new Error("Proxy has been released and is not useable")}function D0(e,t=[],r=function(){}){let n=!1,l=new Proxy(r,{get(o,i){if(Do(n),i===Gp)return()=>Rn(e,{type:"RELEASE",path:t.map(a=>a.toString())}).then(()=>{t2(e),n=!0});if(i==="then"){if(t.length===0)return{then:()=>l};let a=Rn(e,{type:"GET",path:t.map(s=>s.toString())}).then(Nr);return a.then.bind(a)}return D0(e,[...t,i])},set(o,i,a){Do(n);let[s,f]=A0(a);return Rn(e,{type:"SET",path:[...t,i].map(g=>g.toString()),value:s},f).then(Nr)},apply(o,i,a){Do(n);let s=t[t.length-1];if(s===Np)return Rn(e,{type:"ENDPOINT"}).then(Nr);if(s==="bind")return D0(e,t.slice(0,-1));let[f,g]=Zs(a);return Rn(e,{type:"APPLY",path:t.map(c=>c.toString()),argumentList:f},g).then(Nr)},construct(o,i){Do(n);let[a,s]=Zs(i);return Rn(e,{type:"CONSTRUCT",path:t.map(f=>f.toString()),argumentList:a},s).then(Nr)}});return l}function Kp(e){return Array.prototype.concat.apply([],e)}function Zs(e){let t=e.map(A0);return[t.map(r=>r[0]),Kp(t.map(r=>r[1]))]}var r2=new WeakMap;function Qp(e,t){return r2.set(e,t),e}function jp(e){return Object.assign(e,{[Xs]:!0})}function A0(e){for(let[t,r]of e2)if(r.canHandle(e)){let[n,l]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},l]}return[{type:"RAW",value:e},r2.get(e)||[]]}function Nr(e){switch(e.type){case"HANDLER":return e2.get(e.name).deserialize(e.value);case"RAW":return e.value}}function Rn(e,t,r){return new Promise(n=>{let l=qp();e.addEventListener("message",function o(i){!i.data||!i.data.id||i.data.id!==l||(e.removeEventListener("message",o),n(i.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:l},t),r)})}function qp(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function Vp(e){let t=new WeakMap;return{postMessage:e.postMessage.bind(e),addEventListener:(r,n)=>{let l=o=>{"handleEvent"in n?n.handleEvent({data:o}):n({data:o})};e.on("message",l),t.set(n,l)},removeEventListener:(r,n)=>{let l=t.get(n);!l||(e.off("message",l),t.delete(n))},nodeWorker:e}}var n2=Vp;var Hp=typeof globalThis.Worker>"u"&&typeof globalThis.WorkerNavigator>"u",Yp="w-orker-_threa-ds",Jp=()=>Yp.replace(/-/g,"");async function Zp(){let{parentPort:e}=await import(Jp()).catch();return n2(e)}function l2(e){Hp?(async()=>hl(e,await Zp()))():hl(e)}je();Jt();Bt();je();Jt();Rt();Bt();Le();Le();var oa=class extends Un{constructor(t){super();this.metric=t}traverseAlg(t){let r=0;for(let n of t.units())r+=this.traverseUnit(n);return r}traverseGrouping(t){let r=t.alg;return this.traverseAlg(r)*Math.abs(t.amount)}traverseMove(t){return this.metric(t)}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 0}traverseNewline(t){return 0}traverseLineComment(t){return 0}};function U1(e){return"A"<=e&&e<="Z"}function oL(e){let t=e.family;return U1(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:1}function iL(e){let t=e.family;return U1(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:Math.abs(e.amount)}var A1=new oa(oL),ia=A1.traverseAlg.bind(A1),y1=new oa(iL),aL=y1.traverseAlg.bind(y1);Le();var S1=class extends Un{traverseAlg(t){let r=0;for(let n of t.units())r+=this.traverseUnit(n);return r}traverseGrouping(t){return this.traverseAlg(t.alg)*Math.abs(t.amount)}traverseMove(t){return 1}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 1}traverseNewline(t){return 0}traverseLineComment(t){return 0}},b1=new S1,sL=b1.traverseAlg.bind(b1);Rt();var fL=2,uL=!0,gL=!1;function cL(e,t){let r=[];return t.forEach(function(n){let l=new B(n);if(l.amount!==1)throw new Error("SGS cannot handle def moves with an amount other than 1 yet.");let o=e.identityTransformation();for(let i=1;o=o.applyMove(l),!o.isIdentityTransformation();i++)r.push({move:l.modified({amount:i}),transformation:o})}),r}var Tt=class{constructor(t,r,n){this.kpuzzle=t;this.sgs=r;this.searchMoves=cL(this.kpuzzle,n??Object.keys(this.kpuzzle.definition.moves))}async solve(t,r=fL,n){let l=t.experimentalToTransformation();if(!l)throw new Error("distinguishable pieces are not supported in tremble solver yt");let o=null,i=1e6,a=(s,f,g)=>{if(f===0){let c=this.sgsPhaseSolve(s,i);if(!c)return;let u=g.concat(c).simplify({collapseMoves:!0,quantumMoveOrder:n}),p=ia(u);(o===null||p<i)&&(gL&&(console.log(\`New best (\${p} moves): \${u.toString()}\`),console.log(\`Tremble moves are: \${g.toString()}\`)),o=u,i=p);return}for(let c of this.searchMoves)a(s.applyTransformation(c.transformation),f-1,g.concat([c.move]))};for(let s=0;s<=r;s++)a(l,s,new _);if(o===null)throw new Error("SGS search failed.");return o}sgsPhaseSolve(t,r){let n=new pt,l=t;for(let o of this.sgs.ordering){let i=o.pieceOrdering,a="",s=l.invert();for(let g=0;g<i.length;g++){let c=i[g],u=c.orbitName,p=c.permutationIdx;a+=\` \${s.transformationData[u].permutation[p]} \${s.transformationData[u].orientation[p]}\`}let f=o.lookup[a];if(!f)throw new Error("Missing algorithm in sgs or esgs?");if(n.experimentalPushAlg(f.alg),n.experimentalNumUnits()>=r)return null;if(l=l.applyTransformation(f.transformation),uL)for(let g=0;g<i.length;g++){let c=i[g],u=c.orbitName,p=c.permutationIdx;if(l.transformationData[u].permutation[p]!==p||l.transformationData[u].orientation[p]!==0)throw new Error("bad SGS :-(")}}return n.toAlg()}};async function li(e,t){let r=await Zt(),n=e.identityTransformation();for(let l of t.ordering){let o=r(Object.values(l.lookup));n=n.applyTransformation(o.transformation)}return n.toKState()}var LL=3,E1=null;async function _1(){return E1||(E1=(async()=>{let e=await(await Promise.resolve().then(()=>(v1(),x1))).cachedData222();return new Tt(await Ce["2x2x2"].kpuzzle(),e,"URFLBD".split(""))})())}async function k1(){await _1()}async function aa(e){return Se(),await(await _1()).solve(e,LL,()=>4)}async function BL(e,t,r,n){let l=await we();await D1(r.stateData[t].pieces);let o=e.definition.orbits[t],i=r.stateData[t].orientation,a=0;for(let s=0;s<o.numPieces;s++){let f=l(o.numOrientations);i[s]=f,a+=f}n&&"orientationSum"in n&&(i[0]=((i[0]+n.orientationSum-a)%o.numOrientations+o.numOrientations)%o.numOrientations)}async function RL(){let e=await Ce["2x2x2"].kpuzzle(),t=new Be(e,JSON.parse(JSON.stringify(e.startState().stateData)));return await BL(e,"CORNERS",t,{orientationSum:0}),t}async function z1(){return await aa(await RL())}ka();oi();var kR=[[null,"x","x2","x'","z","z'"],[null,"y","y2","y'"]],zR=null;function Ng(){return zR??(zR=Promise.resolve().then(()=>(Mg(),Pg)))}async function Gg(){return(await Ng()).initialize()}async function ls(){return(await Ng()).random444Scramble()}async function Tg(){return Nn(await ls(),kR)}oi();Le();Rt();function CR(e){switch(e){case 5:return 60;case 6:return 80;default:return 100}}var PR=[["U","D"],["L","R"],["F","B"]],Og=new Map;function MR(e){let t=Og.get(e);if(t)return t;let r=[];for(let n of PR){let l=[];r.push(l);for(let o of n){l.push(new C(o)),e>3&&l.push(new C(\`\${o}w\`));for(let i=3;i<=e/2;i++)l.push(new C(\`\${o}w\`,i))}}return Og.set(e,r),r}async function lr(e){let t=await we(),r=await Zt(),n=r,l=MR(e),o=CR(e),i=new pt,a=0,s=new Set;for(;i.experimentalNumUnits()<o;){let f=t(3);f!==a&&s.clear(),a=f;let g=r(l[a]),c=g.toString();s.has(c)||(s.add(c),i.push(new B(g,n([1,2,-1]))))}return i.toAlg()}var NR=[[null,"3Rw","3Rw2","3Rw'","3Fw","3Fw'"],[null,"3Dw","3Dw2","3Dw'"]];async function Ig(){return Nn(await lr(5),NR)}Le();Jt();Bt();async function Ac(){Se();let{randomFTOScrambleString:e}=await Promise.resolve().then(()=>(Dc(),Fc));return new _(await e())}Bt();async function Cc(){Se();let{getRandomKilominxScramble:e}=await Promise.resolve().then(()=>(zc(),kc));return e()}Le();Bt();async function Hc(){let{randomMasterTetraminxScrambleString:e}=await Promise.resolve().then(()=>(Vc(),qc));return Se(),new _(await e())}je();Bt();_s();var Hh=2,Zc=null;async function Yh(){return Zc||(Zc=(async()=>{let t=await(await Promise.resolve().then(()=>(_s(),Jc))).cachedSGSDataMegaminx();return new Tt(await go(),t,["U","R","F","L","BR","BL","FR","FL","DR","DL","B","D"])})())}async function Xc(e){Se();let t=await Yh(),r=JSON.parse(JSON.stringify(e.stateData));r.CENTERS.orientation=new Array(12).fill(0);let n=new Be(await go(),r);return await t.solve(n,Hh,()=>5)}Jt();Bt();zs();var Xh=3,tp=null;async function $h(){return tp||(tp=(async()=>{let t=await(await Promise.resolve().then(()=>(zs(),ep))).sgsDataPyraminx();return new Tt(await Ce.pyraminx.kpuzzle(),t,"RLUB".split(""))})())}async function Cs(e){return Se(),await(await $h()).solve(e,Xh,()=>3)}async function eF(){return Se(),li(await Ce.pyraminx.kpuzzle(),await ks())}async function rp(){return Cs(await eF())}Bt();async function mp(){Se();let{getRandomRediCubeScramble:e}=await Promise.resolve().then(()=>(pp(),cp));return e()}je();Bt();Gs();var zF=3,Rp=null;async function CF(){return Rp||(Rp=(async()=>{let e=await Promise.resolve().then(()=>(Gs(),Bp)),t=await e.sgsDataSkewb();return new Tt(await e.skewbKPuzzleWithoutMOCached(),t,"RLUB".split(""))})())}function PF(e){return new Be(e.kpuzzle,{CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}})}async function Ts(e){return Se(),await(await CF()).solve(PF(e),zF,n=>n.family==="y"?4:3)}async function MF(){return li(await m0(),await Ns())}async function dp(){return Ts(await MF())}Le();var iD=null;function aD(){return iD??(iD=Promise.resolve().then(()=>(xp(),wp)))}async function vp(){return _.fromString(await(await aD()).getRandomSquare1ScrambleString())}var sD=1e3;B1(!0);var kp=!0;function fD(e){kp=e}function Ep(){return(typeof performance>"u"?Date:performance).now()}async function ke(e,t,r){if(!kp)return t();let n=Ep(),l=t();l?.then&&await l;let o=Ep();return console.warn(\`\${e}\${r?.isPrefetch?" (prefetched)":""}: \${Math.round(o-n)}ms\`),l}var qs=new Map,Vs=null;async function _p(e,t){switch(e){case"222":return ke("random222Scramble",z1,{isPrefetch:t?.isPrefetch});case"333":case"333oh":case"333ft":return ke("random333Scramble",Yn,{isPrefetch:t?.isPrefetch});case"333fm":return ke("random333FewestMovesScramble",Su);case"333bf":case"333mb":return ke("random333OrientedScramble",bu);case"444":return ke("random444Scramble",ls,{isPrefetch:t?.isPrefetch});case"444bf":return ke("random444OrientedScramble",Tg);case"555":return ke("bigCubeScramble(5)",lr.bind(lr,5));case"555bf":return ke("oriented555RandomMoves",Ig);case"666":return ke("bigCubeScramble(6)",lr.bind(lr,6));case"777":return ke("bigCubeScramble(7)",lr.bind(lr,7));case"skewb":return ke("randomSkewbFixedCornerScramble",dp);case"pyram":return ke("randomPyraminxScrambleFixedOrientation",rp);case"sq1":return ke("getRandomSquare1Scramble",vp,{isPrefetch:t?.isPrefetch});case"fto":return ke("randomFTOScramble",Ac,{isPrefetch:t?.isPrefetch});case"master_tetraminx":return ke("randomMasterTetraminxScramble",Hc);case"kilominx":return ke("randomKilominxScramble",Cc,{isPrefetch:t?.isPrefetch});case"redi_cube":return ke("randomRediCubeScramble",mp,{isPrefetch:t?.isPrefetch});default:throw new Error(\`unsupported event: \${e}\`)}}var Hs="auto",Ys={initialize:async e=>{switch(e){case"222":return ke("preInitialize222",k1);case"333":case"333oh":case"333ft":return ke("initialize333",Uu);case"444":return ke("initialize444",Gg);default:throw new Error(\`unsupported event: \${e}\`)}},setScramblePrefetchLevel(e){Hs=e},randomScrambleForEvent:async e=>{let t=qs.get(e);return t?qs.delete(e):t=_p(e),Hs!=="none"&&t.then(()=>{Vs&&clearTimeout(Vs),Vs=setTimeout(()=>{qs.set(e,_p(e,{isPrefetch:!0}))},Hs==="immediate"?0:sD)}),t},randomScrambleStringForEvent:async e=>(await Ys.randomScrambleForEvent(e)).toString(),solve333ToString:async e=>{let t=new Be(await Ce["3x3x3"].kpuzzle(),e);return(await _a(t)).toString()},solve222ToString:async e=>{let t=new Be(await Ce["2x2x2"].kpuzzle(),e);return(await aa(t)).toString()},solveSkewbToString:async e=>{let t=new Be(await Ce.skewb.kpuzzle(),e);return(await Ts(t)).toString()},solvePyraminxToString:async e=>{let t=new Be(await Ce.pyraminx.kpuzzle(),e);return(await Cs(t)).toString()},solveMegaminxToString:async e=>{let t=new Be(await Ce.megaminx.kpuzzle(),e);return(await Xc(t)).toString()},setDebugMeasurePerf:async e=>{fD(e)}};l2(Ys);
`;

});


//# sourceMappingURL=worker-inside-generated-string-JGML54CI.50cf1e5e.js.map
