function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire946f;r.register("7i0aL",(function(n,t){e(n.exports,"initialize",(()=>nn)),e(n.exports,"solveState",(()=>tn)),r("cks0r");var o,i,f={3:1},a=4194303,u=1048575,c=65535,l={11:1,3:1},s={17:1,3:1},h=14540032,p=286331153,m={10:1,3:1},v={};function d(){}function w(e){return e instanceof Array?e[0]:null}function g(e,r,n){var t=v,i=b,f=w,a=t[e],u=f(a);a&&!u?o=a:((o=t[e]=r?i(r):{}).castableTypeMap$=n,o.constructor=o,!r&&(o.typeMarker$=d));for(var c=3;c<arguments.length;++c)arguments[c].prototype=o;u&&(o.___clazz$=u)}function b(e){return function(e){function r(){}return r.prototype=e||{},new r}(v[e])}function y(e){return e<<24>>24}function M(){this.typeName=null,this.simpleName=null,this.packageName=null,this.compoundName=null,this.canonicalName=null,this.typeId=null,this.arrayLiterals=null}function C(e,r){var n;return(n=new M).packageName=e,n.compoundName=r,n}function _(e,r,n){var t;return function(e,r){if(!e)return;r.typeId=e;var n=function(e){if(e.isPrimitive())return null;var r=e.typeId;return v[r]}(r);if(!n)return void(v[e]=[r]);n.___clazz$=r}(n,t=C(e,r)),t}function L(e,r){var n;return(n=C("",e)).typeId=r,n.modifiers=1,n}function k(e,r){var n=e.arrayLiterals=e.arrayLiterals||[];return n[r]||(n[r]=e.createClassLiteralForArray(r))}function x(e,r){return k(e,r)}function I(e,r,n,t,o,i){var f;return f=U(o,t),R(x(e,i),r,n,o,f),f}function D(e,r,n,t,o,i){return S(e,r,n,t,o,0,i)}function S(e,r,n,t,o,i,f){var a,u,c,l,s;if(s=U(a=(c=i==f-1)?t:0,l=o[i]),R(x(e,f-i),r[i],n[i],a,s),!c)for(++i,u=0;u<l;++u)s[u]=S(e,r,n,t,o,i,f);return s}function R(e,r,n,t,o){return o.___clazz$=e,o.castableTypeMap$=r,o.typeMarker$=d,o.__elementTypeId$=n,o.__elementTypeCategory$=t,o}function U(e,r){var n,t=new Array(r);switch(e){case 6:n={l:0,m:0,h:0};break;case 7:n=0;break;case 8:n=!1;break;default:return t}for(var o=0;o<r;++o)t[o]=n;return t}function A(e){return{l:e&a,m:e>>22&a,h:e<0?u:0}}function j(e,r){return{l:e.l&r.l,m:e.m&r.m,h:e.h&r.h}}function P(e){var r,n;return e>-129&&e<128?(r=e+128,null==i&&(i=I(Yr,f,293,256,0,1)),!(n=i[r])&&(n=i[r]=A(e)),n):A(e)}function $(e,r){var n,t;return n=e.h>>19,t=r.h>>19,0==n?0!=t||e.h>r.h||e.h==r.h&&e.m>r.m||e.h==r.h&&e.m==r.m&&e.l>=r.l:!(0==t||e.h<r.h||e.h==r.h&&e.m<r.m||e.h==r.h&&e.m==r.m&&e.l<r.l)}function T(e,r){return e.l!=r.l||e.m!=r.m||e.h!=r.h}function z(e,r){return{l:e.l|r.l,m:e.m|r.m,h:e.h|r.h}}function B(e,r){var n,t,o;return(r&=63)<22?(n=e.l<<r,t=e.m<<r|e.l>>22-r,o=e.h<<r|e.m>>22-r):r<44?(n=0,t=e.l<<r-22,o=e.m<<r-22|e.l>>44-r):(n=0,t=0,o=e.l<<r-44),{l:n&a,m:t&a,h:o&u}}function F(e,r){var n,t,o,i,f;return r&=63,(t=0!=(524288&(n=e.h)))&&(n|=-1048576),r<22?(f=n>>r,i=e.m>>r|n<<22-r,o=e.l>>r|e.m<<22-r):r<44?(f=t?u:0,i=n>>r-22,o=e.m>>r-22|n<<44-r):(f=t?u:0,i=t?a:0,o=n>>r-44),{l:o&a,m:i&a,h:f&u}}function N(e,r){var n,t,o;return n=e.l-r.l,t=e.m-r.m+(n>>22),o=e.h-r.h+(t>>22),{l:n&a,m:t&a,h:o&u}}function E(e){return e.l|e.m<<22}function H(e){this.string=e}function J(e,r){return e>r?e:r}function O(e,r){return e<r?e:r}function q(e,r){return e.indexOf(r)}function X(e){return function(e,r,n){for(var t="",o=r;o<n;){var i=Math.min(o+1e4,n);t+=String.fromCharCode.apply(null,e.slice(o,i)),o=i}return t}(e,0,e.length)}function G(e){return String.fromCharCode(e&c)}g(1,null,{},(function(){})),g(79,1,{},M),o.createClassLiteralForArray=function(e){var r;return(r=new M).modifiers=4,r.componentType=e>1?k(this,e-1):this,r},o.isPrimitive=function(){return 0!=(1&this.modifiers)};var K=_("java.lang","String",2);function Q(e){return e.string+=" ",e}function V(e,r){return e.string+=r,e}function W(){H.call(this,"")}function Y(e,r){var n;if(e===r)return!0;if(e.length!=r.length)return!1;for(n=0;n<e.length;++n)if(e[n]!=r[n])return!1;return!0}var Z,ee,re,ne,te,oe,ie,fe,ae,ue,ce,le,se,he,pe,me=!1;function ve(){me||(me=!0,he=D(rn,[f,l],[11,0],7,[495,18],2),ce=D(rn,[f,l],[11,0],7,[324,18],2),oe=D(rn,[f,l],[11,0],7,[336,18],2),le=D(rn,[f,l],[11,0],7,[495,8],2),pe=I(Wr,s,0,20048,7,1),se=I(Wr,s,0,20791,7,1),ue=I(Wr,s,0,82945,7,1),re=D(rn,[f,l],[11,0],7,[2768,10],2),te=D(rn,[f,l],[11,0],7,[2768,10],2),ae=D(rn,[f,l],[11,0],7,[24,10],2),fe=D(rn,[f,l],[11,0],7,[24,16],2),Z=D(rn,[f,l],[11,0],7,[140,16],2),ie=I(Wr,s,0,8305,7,1),ne=I(Wr,s,0,48441,7,1))}function de(e,r,n){return e.slice_0=he[r.slice_0][n],e.flip=oe[r.flip][(We(),Ae)[n<<3|r.fsym]],e.fsym=7&e.flip^r.fsym,e.flip>>=3,e.twist=ce[r.twist][Ae[n<<3|r.tsym]],e.tsym=7&e.twist^r.tsym,e.twist>>=3,e.prun=J(J(ye(pe,495*e.twist+le[e.slice_0][e.tsym]),ye(se,495*e.flip+le[e.slice_0][e.fsym])),ye(ue,e.twist<<11|De[e.flip<<3|e.fsym^e.tsym])),e.prun}function we(e,r,n){return n=(We(),je)[3][n],e.flipc=oe[r.flipc>>3][Ae[n<<3|7&r.flipc]]^7&r.flipc,e.twistc=ce[r.twistc>>3][Ae[n<<3|7&r.twistc]]^7&r.twistc,ye(ue,e.twistc>>3<<11|De[e.flipc^7&e.twistc])}function ge(e,r,n){var t;return e.twist=(We(),Ne)[nr(r)],e.flip=xe[rr(r)],e.tsym=7&e.twist,e.twist=e.twist>>3,e.prun=ye(ue,e.twist<<11|De[e.flip^e.tsym]),!(e.prun>n)&&(e.fsym=7&e.flip,e.flip=e.flip>>3,e.slice_0=494-Nr(r.ea,8,!0),e.prun=J(e.prun,J(ye(pe,495*e.twist+le[e.slice_0][e.tsym]),ye(se,495*e.flip+le[e.slice_0][e.fsym]))),!(e.prun>n)&&(cr(r,1,t=new hr),dr(r,1,t),e.twistc=Ne[nr(t)],e.flipc=xe[rr(t)],e.prun=J(e.prun,ye(ue,e.twistc>>3<<11|De[e.flipc^7&e.twistc])),e.prun<=n))}function be(){ve()}function ye(e,r){return ve(),e[r>>3]>>(r<<2)&15}function Me(e){ve(),2==Ke||1==Ke&&!e||(0==Ke&&(function(){var e,r,n;for(We(),yr(40320,ke,Le,Be=I(rn,l,0,2768,7,1),2),e=new hr,n=0;n<2768;n++)fr(e,ke[n]),Re[n]=Nr(e.ea,0,!0)+70*Er(ke[n],8)<<24>>24,tr(e),Ue[n]=Le[Hr(e.ea,8,!0)];for(r=0;r<24;r++)qr(e.ea,r,12,!0),tr(e),Se[r]=Hr(e.ea,12,!0)%24<<24>>24}(),function(){var e,r,n,t;for(e=new hr,r=new hr,n=0;n<2768;n++)for(ir(e,(We(),ke)[n]),t=0;t<10;t++)lr(e,Je[(Fr(),$r)[t]],r),re[n][t]=vr(Le[Hr(r.ca,8,!1)])&c}(),function(){var e,r,n,t;for(e=new hr,r=new hr,n=0;n<2768;n++)for(fr(e,(We(),ke)[n]),t=0;t<10;t++)wr(e,Je[(Fr(),$r)[t]],r),te[n][t]=Le[Hr(r.ea,8,!0)]}(),function(){var e,r,n,t,o;for(e=new hr,r=new hr,n=0;n<24;n++){for(qr(e.ea,n,12,!0),o=0;o<10;o++)wr(e,(We(),Je)[(Fr(),$r)[o]],r),ae[n][o]=Hr(r.ea,12,!0)%24&c;for(t=0;t<16;t++)dr(e,(We(),Te)[0][t],r),fe[n][t]=Hr(r.ea,12,!0)%24&c}}(),function(){var e,r,n,t,o;for(e=new hr,r=new hr,ee=D(rn,[f,l],[11,0],7,[140,10],2),n=0;n<140;n++){for(Or(e.ca,n%70,0,!1),o=0;o<10;o++)lr(e,(We(),Je)[(Fr(),$r)[o]],r),ee[n][o]=Nr(r.ca,0,!1)+70*(165>>o&1^~~(n/70))&c;for(t=0;t<16;t++)cr(e,(We(),Te)[0][t],r),Z[n][t]=Nr(r.ca,0,!1)+70*~~(n/70)&c}}(),We(),yr(2048,Ie,xe,ze=I(rn,l,0,336,7,1),0),yr(2187,Ee,Ne,Fe=I(rn,l,0,324,7,1),1),function(){var e,r,n,t;for(e=new hr,r=new hr,n=0;n<336;n++)for(ar(e,(We(),Ie)[n]),t=0;t<18;t++)wr(e,Je[t],r),oe[n][t]=xe[rr(r)]}(),function(){var e,r,n,t;for(e=new hr,r=new hr,n=0;n<324;n++)for(ur(e,(We(),Ee)[n]),t=0;t<18;t++)lr(e,Je[t],r),ce[n][t]=Ne[nr(r)]}(),function(){var e,r,n,t,o,i,f,a;for(e=new hr,r=new hr,t=0;t<495;t++){for(Or(e.ea,494-t,8,!0),i=0;i<18;i+=3)wr(e,(We(),Je)[i],r),he[t][i]=494-Nr(r.ea,8,!0)&c;for(o=0;o<16;o+=2)dr(e,(We(),Te)[0][o],r),le[t][o>>1]=494-Nr(r.ea,8,!0)&c}for(n=0;n<495;n++)for(o=0;o<18;o+=3)for(a=he[n][o],f=1;f<3;f++)a=he[a][o],he[n][o+f]=a&c}()),Ce(ie,ae,fe,re,(We(),Be),584244,e),Ce(ne,ee,Z,te,Be,514084,e),Ce(pe,he,le,ce,Fe,431619,e),Ce(se,he,le,oe,ze,431619,e),Ce(ue,null,null,ce,Fe,103939,e),Ke=e?2:1)}function Ce(e,r,n,t,o,i,f){var a,u,c,l,s,m,v,d,w,g,b,y,M,C,_,L,k,x,I,D,S,R,U,A,j,P,$,T,z,B,F,N,E;if(d=1==(i>>4&1)?h:0,a=i>>8&15,v=f?i>>12&15:i>>16&15,w=(1<<(g=15&i))-1,c=10==(l=1==(i>>5&1)?10:18)?66:599186,-1==(y=(e[(m=(s=(u=null==r)?2048:r.length)*t.length)>>3]>>(m<<2)&15)-1)){for(_=0;_<1+~~(m/8);_++)e[_]=p;e[0]^=1,y=0}for(;y<v;){for(R=(y+1)*p^-1,L=0;L<e.length;L++)N=e[L]^R,N&=N>>1,e[L]+=N&N>>2&p;for(P=($=(I=y>a)?y+2:y)*p,b=I?y:y+2,E=++y^y+1,F=0,_=0;_<m;++_,F>>=4)if(0!=(7&_)||0!=(((F=e[_>>3])^P)-p&~(F^P)&-2004318072)){if((15&F)==$)for(A=_%s,T=~~(_/s),M=0,C=0,u&&(C=7&(M=(We(),xe)[A]),M>>=3),S=0;S<l;S++)if(B=t[T][S],j=u?(We(),De)[oe[M][Ae[S<<3|C]]^C^B&w]:n[r[A][S]][B&w],(U=e[(k=(B>>=g)*s+j)>>3]>>(k<<2)&15)==b){if(I){e[_>>3]^=E<<(_<<2);break}for(e[k>>3]^=E<<(k<<2),D=1,z=o[B];0!=(z>>=1);D++)1==(1&z)&&(x=B*s,(e[(x+=u?(We(),De)[xe[j]^D]:n[j][D^d>>(D<<1)&3])>>3]>>(x<<2)&15)==b&&(e[x>>3]^=E<<(x<<2)))}else U<y-1&&(S+=c>>S&3)}else _+=7}}g(31,1,{31:1},be),o.flip=0,o.flipc=0,o.fsym=0,o.prun=0,o.slice_0=0,o.tsym=0,o.twist=0,o.twistc=0;var _e,Le,ke,xe,Ie,De,Se,Re,Ue,Ae,je,Pe,$e,Te,ze,Be,Fe,Ne,Ee,He,Je,Oe,qe,Xe,Ge,Ke=0,Qe=_("org.cubing.min2phase.client","CoordCube",31),Ve=!1;function We(){Ve||(Ve=!0,_e=I(Mr,f,7,16,0,1),Je=I(Mr,f,7,18,0,1),Oe=I(en,f,0,18,6,1),He=I(Wr,s,0,48,7,1),$e=D(Wr,[f,s],[17,0],7,[16,16],2),Te=D(Wr,[f,s],[17,0],7,[16,16],2),je=D(Wr,[f,s],[17,0],7,[16,18],2),Ae=I(Wr,s,0,144,7,1),Pe=D(Wr,[f,s],[17,0],7,[16,18],2),Ie=I(rn,l,0,336,7,1),Ee=I(rn,l,0,324,7,1),ke=I(rn,l,0,2768,7,1),Re=I(Zr,m,0,2768,7,1),Ue=I(rn,l,0,2768,7,1),Se=I(Zr,m,0,24,7,1),xe=I(rn,l,0,2048,7,1),Ne=I(rn,l,0,2187,7,1),Le=I(rn,l,0,40320,7,1),De=I(rn,l,0,2688,7,1),qe=new pr(2531,1373,67026819,1367),Xe=new pr(2089,1906,322752913,2040),Ge=R(x(Zr,2),f,10,0,[R(x(Zr,1),m,0,7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),R(x(Zr,1),m,0,7,[6,7,8,0,1,2,3,4,5,15,16,17,9,10,11,12,13,14]),R(x(Zr,1),m,0,7,[3,4,5,6,7,8,0,1,2,12,13,14,15,16,17,9,10,11]),R(x(Zr,1),m,0,7,[2,1,0,5,4,3,8,7,6,11,10,9,14,13,12,17,16,15]),R(x(Zr,1),m,0,7,[8,7,6,2,1,0,5,4,3,17,16,15,11,10,9,14,13,12]),R(x(Zr,1),m,0,7,[5,4,3,8,7,6,2,1,0,14,13,12,17,16,15,11,10,9])]),function(){var e,r;for(Je[0]=new pr(15120,0,119750400,0),Je[3]=new pr(21021,1494,323403417,0),Je[6]=new pr(8064,1236,29441808,550),Je[9]=new pr(9,0,5880,0),Je[12]=new pr(1230,412,2949660,0),Je[15]=new pr(224,137,328552,137),e=0;e<18;e+=3)for(r=0;r<2;r++)Je[e+r+1]=new hr,wr(Je[e+r],Je[e],Je[e+r+1]),lr(Je[e+r],Je[e],Je[e+r+1])}(),function(){var e,r,n,t,o,i,f,a,u,c,l,s,h,p,m,v;for(e=new hr,r=new hr,n=new pr(28783,0,259268407,0),v=new pr(15138,0,119765538,7),s=new pr(5167,0,83473207,0),o=0;o<8;o++)s.ca[o]=y(24|s.ca[o]);for(i=0;i<16;i++)_e[i]=new mr(e),sr(e,v,r),wr(e,v,r),m=r,r=e,e=m,i%4==3&&(sr(m,s,r),wr(m,s,r),m=r,r=e,e=m),i%8==7&&(sr(m,n,r),wr(m,n,r),m=r,r=e,e=m);for(f=0;f<16;f++)for(u=0;u<16;u++)for(sr(_e[f],_e[u],e),l=0;l<16;l++)if(Y(_e[l].ca,e.ca)){$e[f][u]=l,Te[l][u]=f;break}for(c=0;c<18;c++)for(p=0;p<16;p++){for(cr(Je[c],Te[0][p],e),h=0;h<18;h++)if(Y(Je[h].ca,e.ca)){je[p][c]=h,Pe[p][(Fr(),Pr)[c]]=Pr[h];break}p%2==0&&(Ae[c<<3|p>>1]=je[p][c])}for(t=0;t<18;t++)for(Oe[t]=or(Je[t]),a=t,p=0;p<48;p++)je[p%16][a]<t&&(He[p]|=1<<t),p%16==15&&(a=Ge[2][a])}())}function Ye(e){e.ca=R(x(Zr,1),m,0,7,[0,1,2,3,4,5,6,7]),e.ea=R(x(Zr,1),m,0,7,[0,2,4,6,8,10,12,14,16,18,20,22])}function Ze(e){!e.temps&&(e.temps=new hr),lr(Xe,e,e.temps),lr(e.temps,qe,e),wr(Xe,e,e.temps),wr(e.temps,qe,e)}function er(e,r){var n,t;for(t=0;t<8;t++)e.ca[t]=r.ca[t];for(n=0;n<12;n++)e.ea[n]=r.ea[n]}function rr(e){var r,n;for(n=0,r=0;r<11;r++)n=n<<1|1&e.ea[r];return n}function nr(e){var r,n;for(n=0,r=0;r<7;r++)n+=(n<<1)+(e.ca[r]>>3);return n}function tr(e){var r,n;for(!e.temps&&(e.temps=new hr),n=0;n<12;n++)e.temps.ea[e.ea[n]>>1]=(n<<1|1&e.ea[n])<<24>>24;for(r=0;r<8;r++)e.temps.ca[7&e.ca[r]]=(r|32>>(e.ca[r]>>3)&24)<<24>>24;er(e,e.temps)}function or(e){var r,n,t,o,i,f;for(r=new mr(e),t=new hr,n=vr(Le[Hr(r.ca,8,!1)])>>4,i={l:0,m:0,h:0},f=0;f<6;f++){if(n==vr(Le[Hr(r.ca,8,!1)])>>4)for(o=0;o<16;o++)cr(r,Te[0][o],t),Y(t.ca,e.ca)&&(dr(r,Te[0][o],t),Y(t.ea,e.ea)&&(i=z(i,B({l:1,m:0,h:0},(f<<4|o)<48?f<<4|o:48))));Ze(r),f%3==2&&tr(r)}return i}function ir(e,r){qr(e.ca,r,8,!1)}function fr(e,r){qr(e.ea,r,8,!0)}function ar(e,r){var n,t,o;for(t=0,n=10;n>=0;--n,r>>=1)t^=o=1&r,e.ea[n]=(-2&e.ea[n]|o)<<24>>24;e.ea[11]=(-2&e.ea[11]|t)<<24>>24}function ur(e,r){var n,t,o;for(t=15,n=6;n>=0;--n,r=~~(r/3))t-=o=r%3,e.ca[n]=(7&e.ca[n]|o<<3)<<24>>24;e.ca[7]=(7&e.ca[7]|t%3<<3)<<24>>24}function cr(e,r,n){var t,o,i,f,a,u;for(We(),u=_e[Te[0][r]],a=_e[r],t=0;t<8;t++)i=u.ca[7&e.ca[7&a.ca[t]]]>>3,f=e.ca[7&a.ca[t]]>>3,o=i<3?f:(3-f)%3,n.ca[t]=(7&u.ca[7&e.ca[7&a.ca[t]]]|o<<3)<<24>>24}function lr(e,r,n){var t,o,i;for(We(),t=0;t<8;t++)o=e.ca[7&r.ca[t]]>>3,i=r.ca[t]>>3,n.ca[t]=(7&e.ca[7&r.ca[t]]|(o+i)%3<<3)<<24>>24}function sr(e,r,n){var t,o,i,f;for(t=0;t<8;t++)i=e.ca[7&r.ca[t]]>>3,f=r.ca[t]>>3,o=(o=i+(i<3?f:6-f))%3+(i<3==f<3?0:3),n.ca[t]=(7&e.ca[7&r.ca[t]]|o<<3)<<24>>24}function hr(){We(),Ye(this)}function pr(e,r,n,t){Ye(this),qr(this.ca,e,8,!1),ur(this,r),qr(this.ea,n,12,!0),ar(this,t)}function mr(e){Ye(this),er(this,e)}function vr(e){return We(),e^h>>((15&e)<<1)&3}function dr(e,r,n){var t,o,i;for(We(),i=_e[Te[0][r]],o=_e[r],t=0;t<12;t++)n.ea[t]=(i.ea[e.ea[o.ea[t]>>1]>>1]^1&e.ea[o.ea[t]>>1]^1&o.ea[t])<<24>>24}function wr(e,r,n){var t;for(We(),t=0;t<12;t++)n.ea[t]=(e.ea[r.ea[t]>>1]^1&r.ea[t])<<24>>24}function gr(e,r,n){var t;return We(),t=Ue[e],n&&(t^=h>>((15&t)<<1)&3),65520&t|$e[15&t][r]}function br(){return We(),0}function yr(e,r,n,t,o){var i,f,a,u,l,s,h,p,m;for(We(),i=new hr,a=new hr,f=0,l=0,m=o>=2?1:2,s=1!=o,u=0;u<e;u++)if(0==n[u]){switch(o){case 0:ar(i,u);break;case 1:ur(i,u);break;case 2:qr(i.ea,u,8,!0)}for(h=0;h<16;h+=m){switch(s?dr(i,h,a):cr(i,h,a),o){case 0:l=rr(a);break;case 1:l=nr(a);break;case 2:l=Hr(a.ea,8,!0)}0==o&&(De[f<<3|h>>1]=l&c),l==u&&(t[f]=(t[f]|1<<~~(h/m))&c),p=~~((f<<4|h)/m),n[l]=p&c}r[f++]=u&c}return f}var Mr=_("org.cubing.min2phase.client","CubieCube",7);function Cr(e,r,n,t,o,i,f,a){var u,c,l,s,h;if((s=J(ye((ve(),ne),140*(f>>4)+Z[255&(We(),Re)[a>>4]][Te[15&f][15&a]]),J(ye(ne,140*t+Z[255&Re[r]][Te[o][n]]),ye(ie,24*r+fe[i][n]))))>e.maxDep2)return s-e.maxDep2;for(u=e.maxDep2;u>=s&&!((h=xr(e,t,o,r,n,i,u,e.depth1,10))<0);u--){for(u-=h,e.solLen=0,e.solution=new Vr,Kr(e.solution,e.verbose,e.urfIdx,e.depth1),l=0;l<e.depth1+u;l++)Gr(e.solution,e.move[l]);for(c=e.preMoveLen-1;c>=0;c--)Gr(e.solution,e.preMoves[c]);e.solLen=e.solution.length_0}return u!=e.maxDep2?(e.maxDep2=O(Tr,e.solLen-e.length1-1),$(e.probe,e.probeMin)?0:1):1}function _r(e){var r,n,t,o,i,f,c,l,s,h,p,m,v,d,w,g,b,y,M,C;if(e.isRec=!1,$(e.probe,e.solution?e.probeMin:e.probeMax))return 0;for(e.probe=(g=e.probe,b={l:1,m:0,h:0},y=g.l+b.l,M=g.m+b.m+(y>>22),C=g.h+b.h+(M>>22),{l:y&a,m:M&a,h:C&u}),t=e.valid1;t<e.depth1;t++)lr(e.phase1Cubie[t],(We(),Je)[e.move[t]],e.phase1Cubie[t+1]),wr(e.phase1Cubie[t],Je[e.move[t]],e.phase1Cubie[t+1]);for(e.valid1=e.depth1,c=function(e){return vr(Le[Hr(e.ca,8,!1)])}(e.phase1Cubie[e.depth1]),l=15&c,c>>=4,s=function(e){return Le[Hr(e.ea,8,!0)]}(e.phase1Cubie[e.depth1]),h=15&s,s>>=4,p=Hr(e.phase1Cubie[e.depth1].ea,12,!0)%24,n=gr(s,h,!1),r=gr(c,l,!0),o=0==e.depth1?-1:e.move[e.depth1-1],i=0==e.preMoveLen?-1:e.preMoves[e.preMoveLen-1],w=0,m=0,v=(1<<(d=(0==e.preMoveLen?1:2)*(0==e.depth1?1:2)))-1;m<d;m++){if(0!=(v>>m&1)){if(v&=~(1<<m),0==(w=Cr(e,c,l,s,h,p,n,r))||w>2)break;2==w&&(v&=4<<m)}if(0==v)break;0==(1&m)&&e.depth1>0?(f=(Fr(),Pr)[3*~~(o/3)+1],e.move[e.depth1-1]=2*$r[f]-e.move[e.depth1-1],p=(ve(),ae)[p][f],c=re[c][(We(),Pe)[l][f]],l=$e[15&c][l],c>>=4,s=te[s][Pe[h][f]],h=$e[15&s][h],s>>=4,r=gr(c,l,!0),n=gr(s,h,!1)):e.preMoveLen>0&&(f=(Fr(),Pr)[3*~~(i/3)+1],e.preMoves[e.preMoveLen-1]=2*$r[f]-e.preMoves[e.preMoveLen-1],p=(We(),Se)[(ve(),ae)[Se[p]][f]],l=15&(c=gr((r=-16&(c=re[r>>4][Pe[15&r][f]])|$e[15&c][15&r])>>4,15&r,!0)),c>>=4,h=15&(s=gr((n=-16&(s=te[n>>4][Pe[15&n][f]])|$e[15&s][15&n])>>4,15&n,!1)),s>>=4)}return e.depth1>0&&(e.move[e.depth1-1]=o),e.preMoveLen>0&&(e.preMoves[e.preMoveLen-1]=i),0==w?0:2}function Lr(e,r,n,t,o){var i,f,a,u,c,l;if(0==r.prun&&t<5)return e.allowShorter||0==t?(e.depth1-=t,c=_r(e),e.depth1+=t,c):1;for(l=br(P(n)),i=0;i<18;i+=3)if(i!=o&&i!=o-9)for(a=0;a<3;a++)if(f=i+a,!(e.isRec&&f!=e.move[e.depth1-t]||0!=l&&0!=(l&1<<f))){if((u=de(e.nodeUD[t],r,f))>t)break;if(u!=t){if((u=we(e.nodeUD[t],r,f))>t)break;if(u!=t){if(e.move[e.depth1-t]=f,e.valid1=O(e.valid1,e.depth1-t),0==(c=Lr(e,e.nodeUD[t],n&E((We(),Oe)[f]),t-1,i)))return 0;if(c>=2)break}}}return 1}function kr(e,r,n,t,o){var i,f;if(e.preMoveLen=e.maxPreMoves-r,(e.isRec?e.depth1==e.length1-e.preMoveLen:0==e.preMoveLen||0==(225207>>n&1))&&(e.depth1=e.length1-e.preMoveLen,e.phase1Cubie[0]=t,e.allowShorter=e.depth1==zr&&0!=e.preMoveLen,ge(e.nodeUD[e.depth1+1],t,e.depth1)&&0==Lr(e,e.nodeUD[e.depth1+1],o,e.depth1,-1)))return 0;if(0==r||e.preMoveLen+zr>=e.length1)return 1;for(f=br(P(o)),(1==r||e.preMoveLen+1+zr>=e.length1)&&(f|=225207),n=3*~~(n/3),i=0;i<18;i++)if(i!=n&&i!=n-9&&i!=n+9){if(!(e.isRec&&i!=e.preMoves[e.maxPreMoves-r]||0!=(f&1<<i))&&(lr((We(),Je)[i],t,e.preMoveCubes[r]),wr(Je[i],t,e.preMoveCubes[r]),e.preMoves[e.maxPreMoves-r]=i,0==kr(e,r-1,i,e.preMoveCubes[r],o&E(Oe[i]))))return 0}else i+=2;return 1}function xr(e,r,n,t,o,i,f,a,u){var c,l,s,h,p,m,v,d,w,g,b;if(0==r&&0==t&&0==i)return f;for(w=(Fr(),Rr)[u],v=0;v<10;v++)if(0==(w>>v&1)){if(d=(ve(),ae)[i][v],l=re[t][(We(),Pe)[o][v]],s=$e[15&l][o],l>>=4,p=te[r][Pe[n][v]],m=$e[15&p][n],h=gr(p>>=4,m,!1),c=gr(l,s,!0),(g=ye(ne,140*(h>>4)+Z[255&Re[c>>4]][Te[15&h][15&c]]))>f+1)return f-g+1;if(g>=f)v+=66>>v&3&f-g;else if((g=J(ye(ie,24*l+fe[d][s]),ye(ne,140*p+Z[255&Re[l]][Te[m][s]])))>=f)v+=66>>v&3&f-g;else{if((b=xr(e,p,m,l,s,d,f-1,a+1,v))>=0)return e.move[a]=$r[v],b;if(b<-2)break;b<-1&&(v+=66>>v&3)}}else v+=66>>v&3;return-1}function Ir(e,r){var n;return n=function(e,r){var n,t,o,i;for(t=0,o=I(Zr,m,0,54,7,1),n=X(R(x(rn,1),l,0,7,[r.charCodeAt(4),r.charCodeAt(13),r.charCodeAt(22),r.charCodeAt(31),r.charCodeAt(40),r.charCodeAt(49)])),i=0;i<54;i++){if(o[i]=q(n,G(r.charCodeAt(i)))<<24>>24,-1==o[i])return-1;t+=1<<(o[i]<<2)}return 10066329!=t?-1:(function(e,r){var n,t,o,i,f,a,u,c;for(Fr(),i=0;i<8;i++)r.ca[i]=0;for(f=0;f<12;f++)r.ea[f]=0;for(a=0;a<8;a++){for(c=0;c<3&&(0!=e[Ur[a][c]]&&3!=e[Ur[a][c]]);c++);for(n=e[Ur[a][(c+1)%3]],t=e[Ur[a][(c+2)%3]],u=0;u<8;u++)if(n==~~(Ur[u][1]/9)&&t==~~(Ur[u][2]/9)){r.ca[a]=y(c%3<<3|u);break}}for(o=0;o<12;o++)for(u=0;u<12;u++){if(e[Ar[o][0]]==~~(Ar[u][0]/9)&&e[Ar[o][1]]==~~(Ar[u][1]/9)){r.ea[o]=y(u<<1);break}if(e[Ar[o][0]]==~~(Ar[u][1]/9)&&e[Ar[o][1]]==~~(Ar[u][0]/9)){r.ea[o]=y(u<<1|1);break}}}(o,e.cc),function(e){var r,n,t,o,i;for(i=0,o=0,t=0;t<12;t++)o|=1<<(e.ea[t]>>1),i^=1&e.ea[t];if(4095!=o)return-2;if(0!=i)return-3;for(n=0,i=0,r=0;r<8;r++)n|=1<<(7&e.ca[r]),i+=e.ca[r]>>3;return 255!=n?-4:i%3!=0?-5:0!=(Er(Hr(e.ea,12,!0),12)^Er(Hr(e.ca,8,!1),8))?-6:0}(e.cc))}(e,r),0!=n?"Error "+(n<0?-n:n):(e.solLen=22,e.probe={l:0,m:0,h:0},e.probeMax={l:3531008,m:23,h:0},e.probeMin={l:0,m:0,h:0},e.verbose=0,e.solution=null,e.isRec=!1,Me(!1),function(e){var r;for(e.conjMask=0,e.selfSym=or(e.cc),e.conjMask|=T(j(F(e.selfSym,16),{l:c,m:0,h:0}),{l:0,m:0,h:0})?18:0,e.conjMask|=T(j(F(e.selfSym,32),{l:c,m:0,h:0}),{l:0,m:0,h:0})?36:0,e.conjMask|=T(j(F(e.selfSym,48),{l:c,m:0,h:0}),{l:0,m:0,h:0})?56:0,e.selfSym=j(e.selfSym,{l:a,m:a,h:15}),e.maxPreMoves=e.conjMask>7?0:20,r=0;r<6;r++)er(e.urfCubieCube[r],e.cc),ge(e.urfCoordCube[r],e.urfCubieCube[r],20),Ze(e.cc),r%3==2&&tr(e.cc)}(e),function(e){for(e.length1=e.isRec?e.length1:0;e.length1<e.solLen;e.length1++)for(e.maxDep2=O(Tr,e.solLen-e.length1-1),e.urfIdx=e.isRec?e.urfIdx:0;e.urfIdx<6;e.urfIdx++)if(0==(e.conjMask&1<<e.urfIdx)&&0==kr(e,e.maxPreMoves,-30,e.urfCubieCube[e.urfIdx],E(j(e.selfSym,{l:c,m:0,h:0}))))return e.solution?Qr(e.solution):"Error 8";return e.solution?Qr(e.solution):"Error 7"}(e))}function Dr(){var e,r,n;for(this.move=I(Wr,s,0,31,7,1),this.nodeUD=I(Qe,f,31,21,0,1),this.nodeRL=I(Qe,f,31,21,0,1),this.nodeFB=I(Qe,f,31,21,0,1),this.cc=new hr,this.urfCubieCube=I(Mr,f,7,6,0,1),this.urfCoordCube=I(Qe,f,31,6,0,1),this.phase1Cubie=I(Mr,f,7,21,0,1),this.preMoveCubes=I(Mr,f,7,21,0,1),this.preMoves=I(Wr,s,0,20,7,1),r=0;r<21;r++)this.nodeUD[r]=new be,this.nodeRL[r]=new be,this.nodeFB[r]=new be,this.phase1Cubie[r]=new hr;for(n=0;n<6;n++)this.urfCubieCube[n]=new hr,this.urfCoordCube[n]=new be;for(e=0;e<20;e++)this.preMoveCubes[e+1]=new hr}g(72,1,{},Dr),o.allowShorter=!1,o.conjMask=0,o.depth1=0,o.isRec=!1,o.length1=0,o.maxDep2=0,o.maxPreMoves=0,o.preMoveLen=0,o.probe={l:0,m:0,h:0},o.probeMax={l:0,m:0,h:0},o.probeMin={l:0,m:0,h:0},o.selfSym={l:0,m:0,h:0},o.solLen=0,o.urfIdx=0,o.valid1=0,o.verbose=0;var Sr,Rr,Ur,Ar,jr,Pr,$r,Tr=12,zr=7,Br=!1;function Fr(){if(!Br){var e,r,n,t,o,i;for(Br=!0,Ur=R(x(Zr,2),f,10,0,[R(x(Zr,1),m,0,7,[8,9,20]),R(x(Zr,1),m,0,7,[6,18,38]),R(x(Zr,1),m,0,7,[0,36,47]),R(x(Zr,1),m,0,7,[2,45,11]),R(x(Zr,1),m,0,7,[29,26,15]),R(x(Zr,1),m,0,7,[27,44,24]),R(x(Zr,1),m,0,7,[33,53,42]),R(x(Zr,1),m,0,7,[35,17,51])]),Ar=R(x(Zr,2),f,10,0,[R(x(Zr,1),m,0,7,[5,10]),R(x(Zr,1),m,0,7,[7,19]),R(x(Zr,1),m,0,7,[3,37]),R(x(Zr,1),m,0,7,[1,46]),R(x(Zr,1),m,0,7,[32,16]),R(x(Zr,1),m,0,7,[28,25]),R(x(Zr,1),m,0,7,[30,43]),R(x(Zr,1),m,0,7,[34,52]),R(x(Zr,1),m,0,7,[23,12]),R(x(Zr,1),m,0,7,[21,41]),R(x(Zr,1),m,0,7,[50,39]),R(x(Zr,1),m,0,7,[48,14])]),Sr=D(Wr,[f,s],[17,0],7,[13,13],2),jr=R(x(K,1),f,2,4,["U ","U2","U'","R ","R2","R'","F ","F2","F'","D ","D2","D'","L ","L2","L'","B ","B2","B'"]),$r=R(x(Wr,1),s,0,7,[0,1,2,4,7,9,10,11,13,16,3,5,6,8,12,14,15,17]),Pr=I(Wr,s,0,18,7,1),Rr=I(Wr,s,0,11,7,1),r=0;r<18;r++)Pr[$r[r]]=r;for(n=0;n<10;n++)for(t=~~($r[n]/3),Rr[n]=0,o=0;o<10;o++)i=~~($r[o]/3),Rr[n]|=(t==i||t%3==i%3&&t>=i?1:0)<<o;for(Rr[10]=0,e=0;e<13;e++)for(Sr[e][0]=Sr[e][e]=1,o=1;o<e;o++)Sr[e][o]=Sr[e-1][o-1]+Sr[e-1][o]}}function Nr(e,r,n){var t,o,i;for(Fr(),o=0,i=4,t=e.length-1;t>=0;t--)(12&Jr(e[t],n))==r&&(o+=Sr[t][i--]);return o}function Er(e,r){var n,t;for(Fr(),t=0,n=r-2;n>=0;n--)t^=e%(r-n),e=~~(e/(r-n));return 1&t}function Hr(e,r,n){var t,o,i,f;for(Fr(),o=0,f={l:1323536,m:2777561,h:1043915},t=0;t<r-1;t++)o=(r-t)*o+E(j(F(f,i=Jr(e[t],n)<<2),{l:15,m:0,h:0})),f=N(f,B({l:1118480,m:279620,h:69905},i));return o}function Jr(e,r){return r?e>>1:7&e}function Or(e,r,n,t){var o,i,f,a;for(Fr(),a=4,i=o=e.length-1,f=o;f>=0;f--)r>=Sr[f][a]?(r-=Sr[f][a--],e[f]=Xr(e[f],a|n,t)):((12&i)==n&&(i-=4),e[f]=Xr(e[f],i--,t))}function qr(e,r,n,t){var o,i,f,c,l,s;for(Fr(),s={l:1323536,m:2777561,h:1043915},o={l:0,m:0,h:0},c=2;c<=n;c++)o=z(B(o,4),P(r%c)),r=~~(r/c);for(i=0;i<n-1;i++)l=(15&E(o))<<2,o=F(o,4),e[i]=Xr(e[i],E(j(F(s,l),{l:15,m:0,h:0})),t),s=z(j(s,f=N(B({l:1,m:0,h:0},l),{l:1,m:0,h:0})),j(F(s,4),{l:~f.l&a,m:~f.m&a,h:~f.h&u}));e[n-1]=Xr(e[n-1],E(j(s,{l:15,m:0,h:0})),t)}function Xr(e,r,n){return(n?r<<1|1&e:r|-8&e)<<24>>24}function Gr(e,r){var n,t,o;0!=e.length_0?(n=~~(r/3))!=(t=~~(e.moves[e.length_0-1]/3))?e.length_0>1&&n%3==t%3&&n==~~(e.moves[e.length_0-2]/3)?3==(o=(r%3+e.moves[e.length_0-2]%3+1)%4)?(e.moves[e.length_0-2]=e.moves[e.length_0-1],--e.length_0):e.moves[e.length_0-2]=3*n+o:e.moves[e.length_0++]=r:3==(o=(r%3+e.moves[e.length_0-1]%3+1)%4)?--e.length_0:e.moves[e.length_0-1]=3*n+o:e.moves[e.length_0++]=r}function Kr(e,r,n,t){e.verbose=r,e.urfIdx=n,e.depth1=t}function Qr(e){var r,n,t;if(n=new W,(t=0!=(2&e.verbose)?(e.urfIdx+3)%6:e.urfIdx)<3)for(r=0;r<e.length_0;r++)0!=(1&e.verbose)&&r==e.depth1&&(n.string+=".  "),Q(V(n,(Fr(),jr)[(We(),Ge)[t][e.moves[r]]]));else for(r=e.length_0-1;r>=0;r--)Q(V(n,(Fr(),jr)[(We(),Ge)[t][e.moves[r]]])),0!=(1&e.verbose)&&r==e.depth1&&(n.string+=".  ");return n.string}function Vr(){this.moves=I(Wr,s,0,31,7,1)}g(150,1,{},Vr),o.depth1=0,o.length_0=0,o.urfIdx=0,o.verbose=0;var Wr=L("int","I");_("com.google.gwt.lang","CollapsedPropertyHolder",252),_("com.google.gwt.lang","JavaClassHierarchySetupUtil",254);var Yr=_("com.google.gwt.lang","LongLibBase/LongEmul",null);_("com.google.gwt.lang","ModuleUtils",257);var Zr=L("byte","B"),en=L("long","J"),rn=L("char","C");_("com.google.gwt.user.client.rpc","XsrfToken",null),C("java.util","Map/Entry").modifiers=2;var nn=function(){Me(!1)},tn=function(e){return Ir(new Dr,e)}}));
//# sourceMappingURL=3x3x3-min2phase-FPRJ5PCJ.d769d713.js.map
