// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aQy4b":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "dce9843c8df539b4";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"j5GGn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "workerSource", ()=>workerSource
);
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/search/worker-inside-generated-string.js
var workerSource = `var J0=Object.defineProperty;var Pp=e=>J0(e,"__esModule",{value:!0});var U=(e,t)=>()=>(e&&(t=e(e=0)),t);var Be=(e,t)=>{Pp(e);for(var r in t)J0(e,r,{get:t[r],enumerable:!0})};var ha=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var d=(e,t,r)=>(ha(e,t,"read from private field"),r?r.call(e):t.get(e)),le=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},q=(e,t,r,n)=>(ha(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Da=(e,t,r,n)=>({set _(l){q(e,t,l,r)},get _(){return d(e,t,n)}}),Z0=(e,t,r)=>(ha(e,t,"access private method"),r);var Zp,Uo,We,qt=U(()=>{Zp=!1,Uo=class{is(t){return this instanceof t}as(t){return this instanceof t?this:null}},We=class extends Uo{constructor(){super();Zp&&Object.defineProperty(this,"_debugStr",{get:()=>this.toString()})}get log(){return console.log.bind(console,this,this.toString())}}});function i2(e,t=!0){if(!t)return e;switch(e){case 1:return-1;case-1:return 1}}function Ua(e,t){return t===-1?Array.from(e).reverse():e}function a2(e){return Array.from(e).reverse()}var V,yt=U(()=>{(function(r){r[r.Forwards=1]="Forwards",r[r.Backwards=-1]="Backwards"})(V||(V={}))});var Al,Dn,s2,ba=U(()=>{Al=2147483647,Dn="2^31 - 1",s2=-2147483648});var Or,Lt,xa=U(()=>{Vt();Lt=class{constructor(){le(this,Or,[])}push(t){d(this,Or).push(t)}experimentalPushAlg(t){for(let r of t.units())this.push(r)}experimentalNumUnits(){return d(this,Or).length}toAlg(){return new _(d(this,Or))}reset(){q(this,Or,[])}};Or=new WeakMap});var Tr,Ir,bo,Ke,yl=U(()=>{Vt();qt();yt();bo=class extends We{constructor(t,r){super();le(this,Tr,void 0);le(this,Ir,void 0);q(this,Tr,ur(t)),q(this,Ir,ur(r))}get A(){return d(this,Tr)}get B(){return d(this,Ir)}isIdentical(t){let r=t.as(bo);return!!(r?.A.isIdentical(this.A)&&r?.B.isIdentical(this.B))}invert(){return new bo(d(this,Ir),d(this,Tr))}*experimentalExpand(t=V.Forwards,r){r??(r=1/0),r===0?yield t===V.Forwards?this:this.invert():t===V.Forwards?(yield*this.A.experimentalExpand(V.Forwards,r-1),yield*this.B.experimentalExpand(V.Forwards,r-1),yield*this.A.experimentalExpand(V.Backwards,r-1),yield*this.B.experimentalExpand(V.Backwards,r-1)):(yield*this.B.experimentalExpand(V.Forwards,r-1),yield*this.A.experimentalExpand(V.Forwards,r-1),yield*this.B.experimentalExpand(V.Backwards,r-1),yield*this.A.experimentalExpand(V.Backwards,r-1))}toString(){return\`[\${d(this,Tr).toString()}, \${d(this,Ir).toString()}]\`}},Ke=bo;Tr=new WeakMap,Ir=new WeakMap});var Fn,An,xo,Qe,Ul=U(()=>{Vt();qt();yt();xo=class extends We{constructor(t,r){super();le(this,Fn,void 0);le(this,An,void 0);q(this,Fn,ur(t)),q(this,An,ur(r))}get A(){return d(this,Fn)}get B(){return d(this,An)}isIdentical(t){let r=t.as(xo);return!!(r?.A.isIdentical(this.A)&&r?.B.isIdentical(this.B))}invert(){return new xo(d(this,Fn),d(this,An).invert())}*experimentalExpand(t,r){r??(r=1/0),r===0?yield t===V.Forwards?this:this.invert():(yield*this.A.experimentalExpand(V.Forwards,r-1),yield*this.B.experimentalExpand(t,r-1),yield*this.A.experimentalExpand(V.Backwards,r-1))}toString(){return\`[\${this.A}: \${this.B}]\`}},Qe=xo;Fn=new WeakMap,An=new WeakMap});var gr,wa,Ut,bl=U(()=>{qt();yt();wa=class extends We{constructor(t){super();le(this,gr,void 0);if(t.includes(\`
\`)||t.includes("\\r"))throw new Error("LineComment cannot contain newline");q(this,gr,t)}get text(){return d(this,gr)}isIdentical(t){let r=t;return t.is(wa)&&d(this,gr)===d(r,gr)}invert(){return this}*experimentalExpand(t=V.Forwards,r=1/0){yield this}toString(){return\`//\${d(this,gr)}\`}},Ut=wa;gr=new WeakMap});var $e,xl=U(()=>{qt();yt();$e=class extends We{toString(){return\`
\`}isIdentical(t){return t.is($e)}invert(){return this}*experimentalExpand(t=V.Forwards,r=1/0){yield this}}});var et,wl=U(()=>{qt();yt();et=class extends We{toString(){return"."}isIdentical(t){return t.is(et)}invert(){return this}*experimentalExpand(t=V.Forwards,r=1/0){yield this}}});function wo(e,t){return e?parseInt(e):t}function Sa(e){return new So().parseAlg(e)}function u2(e){return new So().parseMove(e)}function g2(e){return new So().parseQuantumMove(e)}function tt(e,t,r){let n=e;return n.startCharIndex=t,n.endCharIndex=r,n}function c2(e,t){return"startCharIndex"in e&&(t.startCharIndex=e.startCharIndex),"endCharIndex"in e&&(t.endCharIndex=e.endCharIndex),t}var f2,Xp,$p,em,tm,rm,it,T,So,va=U(()=>{Vt();xa();yl();Ul();vo();bl();Ht();xl();wl();f2=/^(\\d+)?('?)/,Xp=/^[_\\dA-Za-z]/,$p=/^((([1-9]\\d*)-)?([1-9]\\d*))?([_A-Za-z]+)?/,em=/^[^\\n]*/,tm=/^(-?\\d+), ?/,rm=/^(-?\\d+)\\)/;So=class{constructor(){le(this,it,"");le(this,T,0)}parseAlg(t){q(this,it,t),q(this,T,0);let r=this.parseAlgWithStopping([]);return this.mustBeAtEndOfInput(),r}parseMove(t){q(this,it,t),q(this,T,0);let r=this.parseMoveImpl();return this.mustBeAtEndOfInput(),r}parseQuantumMove(t){q(this,it,t),q(this,T,0);let r=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),r}mustBeAtEndOfInput(){if(d(this,T)!==d(this,it).length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(t){let r=d(this,T),n=d(this,T),l=new Lt,o=!1,i=a=>{if(o)throw new Error(\`Unexpected character at index \${a}. Are you missing a space?\`)};e:for(;d(this,T)<d(this,it).length;){let a=d(this,T);if(t.includes(d(this,it)[d(this,T)]))return tt(l.toAlg(),r,n);if(this.tryConsumeNext(" ")){o=!1,l.experimentalNumUnits()===0&&(r=d(this,T));continue e}else if(Xp.test(d(this,it)[d(this,T)])){i(a);let s=this.parseMoveImpl();l.push(s),o=!0,n=d(this,T);continue e}else if(this.tryConsumeNext("(")){i(a);let s=this.tryRegex(tm);if(s){let f=s[1],g=d(this,T),c=this.parseRegex(rm),u=tt(new B(new P("U_SQ_"),parseInt(f)),a+1,a+1+f.length),p=tt(new B(new P("D_SQ_"),parseInt(c[1])),g,d(this,T)-1),m=tt(new _([u,p]),a+1,d(this,T)-1);l.push(tt(new pt(m),a,d(this,T))),o=!0,n=d(this,T);continue e}else{let f=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");let g=this.parseAmount();l.push(tt(new pt(f,g),a,d(this,T))),o=!0,n=d(this,T);continue e}}else if(this.tryConsumeNext("[")){i(a);let s=this.parseAlgWithStopping([",",":"]),f=this.popNext(),g=this.parseAlgWithStopping(["]"]);switch(this.mustConsumeNext("]"),f){case":":l.push(tt(new Qe(s,g),a,d(this,T))),o=!0,n=d(this,T);continue e;case",":l.push(tt(new Ke(s,g),a,d(this,T))),o=!0,n=d(this,T);continue e;default:throw"unexpected parsing error"}}else if(this.tryConsumeNext(\`
\`)){l.push(tt(new $e,a,d(this,T))),o=!1,n=d(this,T);continue e}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){i(a);let[s]=this.parseRegex(em);l.push(tt(new Ut(s),a,d(this,T))),o=!1,n=d(this,T);continue e}else{l.push(tt(new B("_SLASH_"),a,d(this,T))),o=!0,n=d(this,T);continue e}else if(this.tryConsumeNext(".")){i(a),l.push(tt(new et,a,d(this,T))),o=!0,n=d(this,T);continue e}else throw new Error(\`Unexpected character: \${this.popNext()}\`)}if(d(this,T)!==d(this,it).length)throw new Error("did not finish parsing?");if(t.length>0)throw new Error("expected stopping");return tt(l.toAlg(),r,n)}parseQuantumMoveImpl(){let[,,,t,r,n]=this.parseRegex($p);return new P(n,wo(r,void 0),wo(t,void 0))}parseMoveImpl(){let t=d(this,T);if(this.tryConsumeNext("/"))return tt(new B("_SLASH_"),t,d(this,T));let r=this.parseQuantumMoveImpl(),[n,l]=this.parseAmountAndTrackEmptyAbsAmount(),o=this.parseMoveSuffix();if(o){if(n<0)throw new Error("uh-oh");if((o==="++"||o==="--")&&n!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((o==="++"||o==="--")&&!l)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((o==="+"||o==="-")&&l)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");o.startsWith("+")&&(r=r.modified({family:\`\${r.family}_\${o==="+"?"PLUS":"PLUSPLUS"}_\`})),o.startsWith("-")&&(r=r.modified({family:\`\${r.family}_\${o==="-"?"PLUS":"PLUSPLUS"}_\`}),n*=-1)}return tt(new B(r,n),t,d(this,T))}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){let t=d(this,T),[,r,n]=this.parseRegex(f2);if(r?.startsWith("0")&&r!=="0")throw new Error(\`Error at char index \${t}: An amount can only start with 0 if it's exactly the digit 0.\`);return[wo(r,1)*(n==="'"?-1:1),!r]}parseAmount(){let t=d(this,T),[,r,n]=this.parseRegex(f2);if(r?.startsWith("0")&&r!=="0")throw new Error(\`Error at char index \${t}: An amount number can only start with 0 if it's exactly the digit 0.\`);return wo(r,1)*(n==="'"?-1:1)}parseRegex(t){let r=t.exec(this.remaining());if(r===null)throw new Error("internal parsing error");return q(this,T,d(this,T)+r[0].length),r}tryRegex(t){let r=t.exec(this.remaining());return r===null?null:(q(this,T,d(this,T)+r[0].length),r)}remaining(){return d(this,it).slice(d(this,T))}popNext(){let t=d(this,it)[d(this,T)];return Da(this,T)._++,t}tryConsumeNext(t){return d(this,it)[d(this,T)]===t?(Da(this,T)._++,!0):!1}mustConsumeNext(t){let r=this.popNext();if(r!==t)throw new Error(\`expected \\\`\${t}\\\` while parsing, encountered \${r}\`);return r}};it=new WeakMap,T=new WeakMap});function Eo(e){p2.has(e)||(console.warn(e),p2.add(e))}var p2,Ea=U(()=>{p2=new Set});var yn,ka=U(()=>{yt();ba();yn=class{constructor(t,r=1){if(this.quantum=t,this.amount=r,!Number.isInteger(this.amount)||this.amount<s2||this.amount>Al)throw new Error(\`Unit amount absolute value must be a non-negative integer from \${Dn} to \${Dn}.\`)}suffix(){let t="",r=Math.abs(this.amount);return r!==1&&(t+=r),this.amount<0&&(t+="'"),t}isIdentical(t){return this.quantum.isIdentical(t.quantum)&&this.amount===t.amount}*experimentalExpand(t,r){let n=Math.abs(this.amount),l=i2(t,this.amount<0);for(let o=0;o<n;o++)yield*this.quantum.experimentalExpand(l,r)}}});var Yt,je,qe,ko,P,Ne,Un,B,Ht=U(()=>{qt();yt();ba();va();Ea();ka();ko=class extends Uo{constructor(t,r,n){super();le(this,Yt,void 0);le(this,je,void 0);le(this,qe,void 0);if(q(this,Yt,t),q(this,je,r??null),q(this,qe,n??null),Object.freeze(this),d(this,je)!==null&&(!Number.isInteger(d(this,je))||d(this,je)<1||d(this,je)>Al))throw new Error(\`QuantumMove inner layer must be a positive integer below \${Dn}.\`);if(d(this,qe)!==null&&(!Number.isInteger(d(this,qe))||d(this,qe)<1||d(this,qe)>Al))throw new Error(\`QuantumMove outer layer must be a positive integer below \${Dn}.\`);if(d(this,qe)!==null&&d(this,je)!==null&&d(this,je)<=d(this,qe))throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(d(this,qe)!==null&&d(this,je)===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(t){return g2(t)}modified(t){return new ko(t.family??d(this,Yt),t.innerLayer??d(this,je),t.outerLayer??d(this,qe))}isIdentical(t){let r=t;return t.is(ko)&&d(this,Yt)===d(r,Yt)&&d(this,je)===d(r,je)&&d(this,qe)===d(r,qe)}get family(){return d(this,Yt)}get outerLayer(){return d(this,qe)}get innerLayer(){return d(this,je)}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a \`QuantumMove\` directly.")}toString(){let t=d(this,Yt);return d(this,je)!==null&&(t=String(d(this,je))+t,d(this,qe)!==null&&(t=String(d(this,qe))+"-"+t)),t}},P=ko;Yt=new WeakMap,je=new WeakMap,qe=new WeakMap;Un=class extends We{constructor(...t){super();le(this,Ne,void 0);if(typeof t[0]=="string")if(t[1]??null){q(this,Ne,new yn(P.fromString(t[0]),t[1]));return}else return Un.fromString(t[0]);q(this,Ne,new yn(t[0],t[1]))}isIdentical(t){let r=t.as(Un);return!!r&&d(this,Ne).isIdentical(d(r,Ne))}invert(){return c2(this,new Un(d(this,Ne).quantum,-this.amount))}*experimentalExpand(t=V.Forwards){t===V.Forwards?yield this:yield this.modified({amount:-this.amount})}get quantum(){return d(this,Ne).quantum}modified(t){return new Un(d(this,Ne).quantum.modified(t),t.amount??this.amount)}static fromString(t){return u2(t)}get amount(){return d(this,Ne).amount}get type(){return Eo("deprecated: type"),"blockMove"}get family(){return d(this,Ne).quantum.family??void 0}get outerLayer(){return d(this,Ne).quantum.outerLayer??void 0}get innerLayer(){return d(this,Ne).quantum.innerLayer??void 0}toString(){if(this.family==="_SLASH_")return"/";if(this.family.endsWith("_PLUS_"))return d(this,Ne).quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){let t=Math.abs(this.amount);return d(this,Ne).quantum.toString().slice(0,-10)+(t===1?"":t)+(this.amount<0?"--":"++")}return d(this,Ne).quantum.toString()+d(this,Ne).suffix()}},B=Un;Ne=new WeakMap});var m2,L2,at,_o,pt,vo=U(()=>{Vt();qt();yt();Ht();ka();m2=class{constructor(){this.quantumU_SQ_=null;this.quantumD_SQ_=null}format(t){let r=this.tuple(t);return r?\`(\${r.map(n=>n.amount).join(", ")})\`:null}tuple(t){this.quantumU_SQ_||(this.quantumU_SQ_=new P("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new P("D_SQ_"));let r=t.alg;if(r.experimentalNumUnits()===2){let[n,l]=r.units();if(n.as(B)?.quantum.isIdentical(this.quantumU_SQ_)&&l.as(B)?.quantum.isIdentical(this.quantumD_SQ_)){if(t.amount!==1)throw new Error("Square-1 tuples cannot have an amount other than 1.");return[n,l]}}return null}},L2=new m2,_o=class extends We{constructor(t,r){super();le(this,at,void 0);let n=ur(t);q(this,at,new yn(n,r))}isIdentical(t){let r=t;return t.is(_o)&&d(this,at).isIdentical(d(r,at))}get alg(){return d(this,at).quantum}get amount(){return d(this,at).amount}get experimentalRepetitionSuffix(){return d(this,at).suffix()}invert(){return new _o(d(this,at).quantum,-d(this,at).amount)}*experimentalExpand(t=V.Forwards,r){r??(r=1/0),r===0?yield t===V.Forwards?this:this.invert():yield*d(this,at).experimentalExpand(t,r-1)}static fromString(){throw new Error("unimplemented")}toString(){return L2.format(this)??\`(\${d(this,at).quantum.toString()})\${d(this,at).suffix()}\`}experimentalAsSquare1Tuple(){return L2.tuple(this)}},pt=_o;at=new WeakMap});var zo=U(()=>{vo();bl();yl();Ul();Ht();xl();wl()});function bt(e,t){return e instanceof t}function B2(e){return bt(e,pt)||bt(e,Ut)||bt(e,Ke)||bt(e,Qe)||bt(e,B)||bt(e,$e)||bt(e,et)}var _a=U(()=>{zo()});function R2(e,t,r){if(t.is(pt))return e.traverseGrouping(t,r);if(t.is(B))return e.traverseMove(t,r);if(t.is(Ke))return e.traverseCommutator(t,r);if(t.is(Qe))return e.traverseConjugate(t,r);if(t.is(et))return e.traversePause(t,r);if(t.is($e))return e.traverseNewline(t,r);if(t.is(Ut))return e.traverseLineComment(t,r);throw new Error("unknown unit")}function d2(e){if(e.is(pt)||e.is(B)||e.is(Ke)||e.is(Qe)||e.is(et)||e.is($e)||e.is(Ut))return e;throw"internal error: expected unit"}var bn,xn,Co,nm,Ca,za,h2,D2,Pa=U(()=>{vo();yl();Ht();xl();wl();Ul();bl();bn=class{traverseUnit(t,r){return R2(this,t,r)}traverseIntoUnit(t,r){return d2(this.traverseUnit(t,r))}},xn=class extends bn{traverseUnit(t){return R2(this,t,void 0)}traverseIntoUnit(t){return d2(this.traverseUnit(t))}},Ca=class extends bn{*traverseAlg(t,r){if(r.depth===0){yield*t.units();return}let n=[],l=null,o=r?.collapseMoves??!0;function i(f,g){var p;let c=Z0(p=Ca,Co,nm).call(p,f,g,r);if(c===0)return!1;let u=new B(f.quantum,c);return n.push(u),l=u,!0}function a(f){o&&l?.is(B)&&f.is(B)&&l.quantum.isIdentical(f.quantum)?(n.pop(),i(l,f.amount)||(l=n.slice(-1)[0])):f.is(B)?i(f,0):(n.push(f),l=f)}let s={depth:r.depth?r.depth-1:null};for(let f of t.units())for(let g of this.traverseUnit(f,s))a(g);for(let f of n)yield f}*traverseGrouping(t,r){if(r.depth===0){yield t;return}let n={depth:r.depth?r.depth-1:null};yield new pt(this.traverseAlg(t.alg,n))}*traverseMove(t,r){yield t}*traverseCommutator(t,r){if(r.depth===0){yield t;return}let n={depth:r.depth?r.depth-1:null};yield new Ke(this.traverseAlg(t.A,n),this.traverseAlg(t.B,n))}*traverseConjugate(t,r){if(r.depth===0){yield t;return}let n={depth:r.depth?r.depth-1:null};yield new Qe(this.traverseAlg(t.A,n),this.traverseAlg(t.B,n))}*traversePause(t,r){yield t}*traverseNewline(t,r){yield t}*traverseLineComment(t,r){yield t}},za=Ca;Co=new WeakSet,nm=function(t,r,n){let l=t.amount+r;if(n?.quantumMoveOrder){let o=n.quantumMoveOrder(t.quantum),i=Math.floor(o/2)+1-o;l=(l%o+o-i)%o+i}return l},le(za,Co);h2=new za,D2=h2.traverseAlg.bind(h2)});function F2(e){if(!e)return[];if(bt(e,_))return e.units();if(typeof e=="string")return Sa(e).units();let t=e;if(typeof t[Symbol.iterator]=="function")return t;throw"Invalid unit"}function ur(e){return bt(e,_)?e:new _(e)}function lm(e,t){return e.is($e)||t.is($e)?"":e.is(Ut)&&!t.is($e)?\`
\`:" "}var st,Wr,_,Vt=U(()=>{qt();_a();yt();va();Pa();bl();Ht();xl();Ea();Wr=class extends We{constructor(t){super();le(this,st,void 0);q(this,st,Array.from(F2(t)));for(let r of d(this,st))if(!B2(r))throw new Error("An alg can only contain units.")}isIdentical(t){let r=t;if(!t.is(Wr))return!1;let n=Array.from(d(this,st)),l=Array.from(d(r,st));if(n.length!==l.length)return!1;for(let o=0;o<n.length;o++)if(!n[o].isIdentical(l[o]))return!1;return!0}invert(){return new Wr(a2(Array.from(d(this,st)).map(t=>t.invert())))}*experimentalExpand(t=V.Forwards,r){r??(r=1/0);for(let n of Ua(d(this,st),t))yield*n.experimentalExpand(t,r)}expand(t){return new Wr(this.experimentalExpand(V.Forwards,t?.depth??1/0))}*experimentalLeafMoves(){for(let t of this.experimentalExpand())t.is(B)&&(yield t)}concat(t){return new Wr(Array.from(d(this,st)).concat(Array.from(F2(t))))}experimentalIsEmpty(){for(let t of d(this,st))return!1;return!0}static fromString(t){return Sa(t)}*units(){for(let t of d(this,st))yield t}experimentalNumUnits(){return Array.from(d(this,st)).length}get type(){return Eo("deprecated: type"),"sequence"}toString(){let t="",r=null;for(let n of d(this,st))r&&(t+=lm(r,n)),t+=n.toString(),r=n;return t}simplify(t){return new Wr(D2(this,t??{}))}},_=Wr;st=new WeakMap});var om,A2=U(()=>{Vt();zo();yl();Ul();Ht();wl();om={Sune:new _([new B("R",1),new B("U",1),new B("R",-1),new B("U",1),new B("R",1),new B("U",-2),new B("R",-1)]),AntiSune:new _([new B("R",1),new B("U",2),new B("R",-1),new B("U",-1),new B("R",1),new B("U",-1),new B("R",-1)]),SuneCommutator:new _([new Ke(new _([new B("R",1),new B("U",1),new B("R",-2)]),new _([new Qe(new _([new B("R",1)]),new _([new B("U",1)]))]))]),Niklas:new _([new B("R",1),new B("U",-1),new B("L",-1),new B("U",1),new B("R",-1),new B("U",-1),new B("L",1),new B("U",1)]),EPerm:new _([new B("x",-1),new Ke(new _([new Qe(new _([new B("R",1)]),new _([new B("U",-1)]))]),new _([new B("D",1)])),new Ke(new _([new Qe(new _([new B("R",1)]),new _([new B("U",1)]))]),new _([new B("D",1)])),new B("x",1)]),FURURFCompact:new _([new Qe(new _([new B("F",1)]),new _([new Ke(new _([new B("U",1)]),new _([new B("R",1)]))]))]),APermCompact:new _([new Qe(new _([new B("R",2)]),new _([new Ke(new _([new B("F",2)]),new _([new B("R",-1),new B("B",-1),new B("R",1)]))]))]),FURURFMoves:new _([new B("F",1),new B("U",1),new B("R",1),new B("U",-1),new B("R",-1),new B("F",-1)]),TPerm:new _([new B("R",1),new B("U",1),new B("R",-1),new B("U",-1),new B("R",-1),new B("F",1),new B("R",2),new B("U",-1),new B("R",-1),new B("U",-1),new B("R",1),new B("U",1),new B("R",-1),new B("F",-1)]),HeadlightSwaps:new _([new Qe(new _([new B("F",1)]),new _([new pt(new _([new Ke(new _([new B("R",1)]),new _([new B("U",1)]))]),3)]))]),TriplePause:new _([new et,new et,new et])}});var oA,y2=U(()=>{Ht();oA={73:new B("R"),75:new B("R'"),87:new B("B"),79:new B("B'"),83:new B("D"),76:new B("D'"),68:new B("L"),69:new B("L'"),74:new B("U"),70:new B("U'"),72:new B("F"),71:new B("F'"),78:new B("x'"),67:new B("l"),82:new B("l'"),85:new B("r"),77:new B("r'"),88:new B("d"),188:new B("d'"),84:new B("x"),89:new B("x"),66:new B("x'"),186:new B("y"),59:new B("y"),65:new B("y'"),80:new B("z"),81:new B("z'"),90:new B("M'"),190:new B("M'")}});var U2=U(()=>{});var b2=U(()=>{Vt()});var Re=U(()=>{Vt();xa();Pa();A2();y2();zo();Ht();U2();b2();_a();yt()});function Sl(e,t,r){let n={};for(let l in e.orbits){let o=e.orbits[l],i=t[l],a=r[l];if(vl(o.numOrientations,a))n[l]=i;else if(vl(o.numOrientations,i))n[l]=a;else{let s=new Array(o.numPieces);if(o.numOrientations===1){for(let f=0;f<o.numPieces;f++)s[f]=i.permutation[a.permutation[f]];n[l]={permutation:s,orientation:i.orientation}}else{let f=new Array(o.numPieces);for(let g=0;g<o.numPieces;g++)f[g]=(i.orientation[a.permutation[g]]+a.orientation[g])%o.numOrientations,s[g]=i.permutation[a.permutation[g]];n[l]={permutation:s,orientation:f}}}}return n}function Ma(e,t,r){let n={};for(let l in e.orbits){let o=e.orbits[l],i=t[l],a=r[l];if(vl(o.numOrientations,a))n[l]=i;else{let s=new Array(o.numPieces);if(o.numOrientations===1){for(let f=0;f<o.numPieces;f++)s[f]=i.pieces[a.permutation[f]];n[l]={pieces:s,orientation:i.orientation}}else{let f=new Array(o.numPieces);for(let g=0;g<o.numPieces;g++)f[g]=(i.orientation[a.permutation[g]]+a.orientation[g])%o.numOrientations,s[g]=i.pieces[a.permutation[g]];n[l]={pieces:s,orientation:f}}}}return n}var Po=U(()=>{El()});function im(e){let t=w2.get(e);if(t)return t;let r=new Array(e),n=new Array(e);for(let o=0;o<e;o++)r[o]=o,n[o]=0;let l={permutation:r,orientation:n};return x2&&(Object.freeze(r),Object.freeze(n),Object.freeze(l)),w2.set(e,l),l}function S2(e){let t={};for(let[r,n]of Object.entries(e.orbits))t[r]=im(n.numPieces);return x2&&Object.freeze(t),t}function v2(e,t){let r=t.quantum.toString(),n=e.definition.moves[r];if(!n){let i=e.definition.experimentalDerivedMoves?.[r];i&&(n=e.algToTransformation(i).transformationData)}if(n)return cr(e,n,t.amount);let l=e.definition.moves[t.toString()];if(l)return l;let o=e.definition.moves[t.invert().toString()];if(o)return cr(e,o,-1);throw new Error(\`Invalid move for KPuzzle (\${e.name()}): \${t}\`)}var x2,w2,Na=U(()=>{El();x2=!1,w2=new Map});var de,Mo=U(()=>{Po();kl();de=class{constructor(t,r){this.kpuzzle=t;this.stateData=r}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),stateData:this.stateData}}static fromTransformation(t){let r=Ma(t.kpuzzle.definition,t.kpuzzle.definition.startStateData,t.transformationData);return new de(t.kpuzzle,r)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(t.isIdentityTransformation())return new de(this.kpuzzle,this.stateData);let r=Ma(this.kpuzzle.definition,this.stateData,t.transformationData);return new de(this.kpuzzle,r)}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}experimentalToTransformation(){if(!this.kpuzzle.canConvertStateToUniqueTransformation())return null;let t={};for(let[r,n]of Object.entries(this.stateData)){let l={permutation:n.pieces,orientation:n.orientation};t[r]=l}return new xt(this.kpuzzle,t)}}});var Kr,pr,xt,kl=U(()=>{El();Po();Na();Mo();pr=class{constructor(t,r){this.kpuzzle=t;this.transformationData=r;le(this,Kr,void 0)}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new pr(this.kpuzzle,Ga(this.kpuzzle,this.transformationData))}isIdentityTransformation(){return d(this,Kr)??q(this,Kr,this.isIdentical(this.kpuzzle.identityTransformation()))}static experimentalConstructIdentity(t){let r=new pr(t,S2(t.definition));return q(r,Kr,!0),r}isIdentical(t){return E2(this.kpuzzle,this.transformationData,t.transformationData)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(this.kpuzzle!==t.kpuzzle)throw new Error(\`Tried to apply a transformation for a KPuzzle (\${t.kpuzzle.name()}) to a different KPuzzle (\${this.kpuzzle.name()}).\`);return d(this,Kr)?new pr(this.kpuzzle,t.transformationData):d(t,Kr)?new pr(this.kpuzzle,this.transformationData):new pr(this.kpuzzle,Sl(this.kpuzzle.definition,this.transformationData,t.transformationData))}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}toKState(){return de.fromTransformation(this)}repetitionOrder(){return k2(this.kpuzzle.definition,this)}selfMultiply(t){return new pr(this.kpuzzle,cr(this.kpuzzle,this.transformationData,t))}},xt=pr;Kr=new WeakMap});function vl(e,t){let{permutation:r}=t,n=r.length;for(let l=0;l<n;l++)if(r[l]!==l)return!1;if(e>1){let{orientation:l}=t;for(let o=0;o<n;o++)if(l[o]!==0)return!1}return!0}function am(e,t,r,n={}){for(let l=0;l<e.numPieces;l++)if(!n?.ignoreOrientation&&t.orientation[l]!==r.orientation[l]||!n?.ignorePermutation&&t.permutation[l]!==r.permutation[l])return!1;return!0}function E2(e,t,r){for(let[n,l]of Object.entries(e.definition.orbits))if(!am(l,t[n],r[n]))return!1;return!0}function Ga(e,t){let r={};for(let n in e.definition.orbits){let l=e.definition.orbits[n],o=t[n];if(vl(l.numOrientations,o))r[n]=o;else if(l.numOrientations===1){let i=new Array(l.numPieces);for(let a=0;a<l.numPieces;a++)i[o.permutation[a]]=a;r[n]={permutation:i,orientation:o.orientation}}else{let i=new Array(l.numPieces),a=new Array(l.numPieces);for(let s=0;s<l.numPieces;s++){let f=o.permutation[s];i[f]=s,a[f]=(l.numOrientations-o.orientation[s]+l.numOrientations)%l.numOrientations}r[n]={permutation:i,orientation:a}}}return r}function cr(e,t,r){if(r===1)return t;if(r<0)return cr(e,Ga(e,t),-r);if(r===0){let{transformationData:o}=e.identityTransformation();return o}let n=t;r!==2&&(n=cr(e,t,Math.floor(r/2)));let l=Sl(e.definition,n,n);return r%2==0?l:Sl(e.definition,t,l)}function Oa(e,t){return t?Oa(t,e%t):e}function k2(e,t){let r=1;for(let n in e.orbits){let l=e.orbits[n],o=t.transformationData[n],i=new Array(l.numPieces);for(let a=0;a<l.numPieces;a++)if(!i[a]){let s=a,f=0,g=0;for(;i[s]=!0,f=f+o.orientation[s],g=g+1,s=o.permutation[s],s!==a;);f!==0&&(g=g*l.numOrientations/Oa(l.numOrientations,f)),r=r*g/Oa(r,g)}}return r}var _2,z2,C2,El=U(()=>{Re();Po();kl();_2=class extends bn{traverseAlg(t,r){let n=null;for(let l of t.units())n?n=n.applyTransformation(this.traverseUnit(l,r)):n=this.traverseUnit(l,r);return n??r.identityTransformation()}traverseGrouping(t,r){let n=this.traverseAlg(t.alg,r);return new xt(r,cr(r,n.transformationData,t.amount))}traverseMove(t,r){return r.moveToTransformation(t)}traverseCommutator(t,r){let n=this.traverseAlg(t.A,r),l=this.traverseAlg(t.B,r);return n.applyTransformation(l).applyTransformation(n.invert()).applyTransformation(l.invert())}traverseConjugate(t,r){let n=this.traverseAlg(t.A,r),l=this.traverseAlg(t.B,r);return n.applyTransformation(l).applyTransformation(n.invert())}traversePause(t,r){return r.identityTransformation()}traverseNewline(t,r){return r.identityTransformation()}traverseLineComment(t,r){return r.identityTransformation()}},z2=new _2,C2=z2.traverseAlg.bind(z2)});var wn,No,we,Ta=U(()=>{Re();El();Na();Mo();kl();we=class{constructor(t,r){this.definition=t;le(this,wn,new Map);le(this,No,void 0);this.experimentalPGNotation=r?.experimentalPGNotation}name(){return this.definition.name}identityTransformation(){return xt.experimentalConstructIdentity(this)}moveToTransformation(t){typeof t=="string"&&(t=new B(t));let r=t.toString(),n=d(this,wn).get(r);if(n)return new xt(this,n);if(this.experimentalPGNotation){let o=this.experimentalPGNotation.lookupMove(t);if(!o)throw new Error(\`could not map to internal move: \${t}\`);return d(this,wn).set(r,o),new xt(this,o)}let l=v2(this,t);return d(this,wn).set(r,l),new xt(this,l)}algToTransformation(t){return typeof t=="string"&&(t=new _(t)),C2(t,this)}toTransformation(t){return typeof t=="string"?this.algToTransformation(t):t?.is?.(_)?this.algToTransformation(t):t?.is?.(B)?this.moveToTransformation(t):t}startState(){return new de(this,this.definition.startStateData)}canConvertStateToUniqueTransformation(){return d(this,No)??q(this,No,(()=>{for(let[t,r]of Object.entries(this.definition.orbits)){let n=new Array(r.numPieces).fill(!1);for(let l of this.definition.startStateData[t].pieces)n[l]=!0;for(let l of n)if(!l)return!1}return!0})())}get state(){throw new Error("KPuzzle is now a different (stateless) class.")}reset(){throw new Error("KPuzzle is now a different (stateless) class.")}applyMove(t){throw new Error("KPuzzle is now a different class. Try \`.moveToTransformation()\` to get the transformation for a move.")}applyAlg(t){throw new Error("KPuzzle is now a different class. Try \`.algToTransformation()\` to get the transformation for an alg.")}};wn=new WeakMap,No=new WeakMap});var Fe,P2=U(()=>{Fe={name:"3x3x3",orbits:{EDGES:{numPieces:12,numOrientations:2},CORNERS:{numPieces:8,numOrientations:3},CENTERS:{numPieces:6,numOrientations:4}},startStateData:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientation:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientation:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientation:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientation:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientation:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientation:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,1]}}}};Fe.moves.Uw=Fe.moves.u;Fe.moves.Lw=Fe.moves.l;Fe.moves.Fw=Fe.moves.f;Fe.moves.Rw=Fe.moves.r;Fe.moves.Bw=Fe.moves.b;Fe.moves.Dw=Fe.moves.d;Fe.moves.Rv=Fe.moves.x;Fe.moves.Uv=Fe.moves.y;Fe.moves.Fv=Fe.moves.z;Fe.moves.Lv={EDGES:{permutation:[2,10,6,11,0,8,4,9,1,3,5,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[1,7,6,2,0,3,5,4],orientation:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,3,2,0]}};Fe.moves.Dv={EDGES:{permutation:[3,0,1,2,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[3,0,1,2,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[3,0,0,0,0,1]}};Fe.moves.Bv={EDGES:{permutation:[8,5,10,1,9,7,11,3,4,0,6,2],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[4,7,1,0,5,3,2,6],orientation:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientation:[3,3,3,3,1,3]}}});var Ia,Ve=U(()=>{Ta();Mo();kl();P2();Ta();Ia=new we(Fe)});var M2=U(()=>{Ve()});var sm,py,N2=U(()=>{sm={"333":{puzzleID:"3x3x3",eventName:"3x3x3 Cube"},"222":{puzzleID:"2x2x2",eventName:"2x2x2 Cube"},"444":{puzzleID:"4x4x4",eventName:"4x4x4 Cube"},"555":{puzzleID:"5x5x5",eventName:"5x5x5 Cube"},"666":{puzzleID:"6x6x6",eventName:"6x6x6 Cube"},"777":{puzzleID:"7x7x7",eventName:"7x7x7 Cube"},"333bf":{puzzleID:"3x3x3",eventName:"3x3x3 Blindfolded"},"333fm":{puzzleID:"3x3x3",eventName:"3x3x3 Fewest Moves"},"333oh":{puzzleID:"3x3x3",eventName:"3x3x3 One-Handed"},clock:{puzzleID:"clock",eventName:"Clock"},minx:{puzzleID:"megaminx",eventName:"Megaminx"},pyram:{puzzleID:"pyraminx",eventName:"Pyraminx"},skewb:{puzzleID:"skewb",eventName:"Skewb"},sq1:{puzzleID:"square1",eventName:"Square-1"},"444bf":{puzzleID:"4x4x4",eventName:"4x4x4 Blindfolded"},"555bf":{puzzleID:"5x5x5",eventName:"5x5x5 Blindfolded"},"333mb":{puzzleID:"3x3x3",eventName:"3x3x3 Multi-Blind"}},py={...sm,fto:{puzzleID:"fto",eventName:"Face-Turning Octahedron"},master_tetraminx:{puzzleID:"master_tetraminx",eventName:"Master Tetraminx"},kilominx:{puzzleID:"kilominx",eventName:"Kilominx"},redi_cube:{puzzleID:"redi_cube",eventName:"Redi Cube"}}});function dm(e){switch(e){case x.Regular:return fm;case x.Dim:return Lm;case x.Ignored:return um;case x.OrientationStickers:return gm;case x.Invisible:return cm;case x.IgnoreNonPrimary:return pm;case x.PermuteNonPrimary:return mm;case x.Ignoriented:return Bm;case x.OrientationWithoutPermutation:return Rm}}var x,Sn,Mt,He,vn,Go,Qr,fm,um,gm,cm,pm,mm,Lm,Bm,Rm,_l,zl,Cl=U(()=>{(function(f){f.Regular="Regular",f.Dim="Dim",f.Ignored="Ignored",f.OrientationStickers="OrientationStickers",f.Invisible="Invisible",f.Ignoriented="Ignoriented",f.IgnoreNonPrimary="IgnoreNonPrimary",f.PermuteNonPrimary="PermuteNonPrimary",f.OrientationWithoutPermutation="OrientationWithoutPermutation"})(x||(x={}));Sn=class{constructor(t,r){this.stickerings=new Map;for(let[n,l]of Object.entries(t.definition.orbits))this.stickerings.set(n,new Array(l.numPieces).fill(r))}},Mt="regular",He="ignored",vn="oriented",Go="invisible",Qr="dim",fm={facelets:[Mt,Mt,Mt,Mt,Mt]},um={facelets:[He,He,He,He,He]},gm={facelets:[vn,vn,vn,vn,vn]},cm={facelets:[Go,Go,Go,Go]},pm={facelets:[Mt,He,He,He,He]},mm={facelets:[Qr,Mt,Mt,Mt,Mt]},Lm={facelets:[Qr,Qr,Qr,Qr,Qr]},Bm={facelets:[Qr,He,He,He,He]},Rm={facelets:[vn,He,He,He,He]};_l=class extends Sn{constructor(t){super(t,x.Regular)}set(t,r){for(let[n,l]of this.stickerings.entries())for(let o=0;o<l.length;o++)t.stickerings.get(n)[o]&&(l[o]=r);return this}toAppearance(){let t={orbits:{}};for(let[r,n]of this.stickerings.entries()){let l=[],o={pieces:l};t.orbits[r]=o;for(let i of n)l.push(dm(i))}return t}},zl=class{constructor(t){this.kpuzzle=t}and(t){let r=new Sn(this.kpuzzle,!1);for(let[n,l]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let o=0;o<l.numPieces;o++){r.stickerings.get(n)[o]=!0;for(let i of t)if(!i.stickerings.get(n)[o]){r.stickerings.get(n)[o]=!1;continue e}}}return r}or(t){let r=new Sn(this.kpuzzle,!1);for(let[n,l]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let o=0;o<l.numPieces;o++){r.stickerings.get(n)[o]=!1;for(let i of t)if(i.stickerings.get(n)[o]){r.stickerings.get(n)[o]=!0;continue e}}}return r}not(t){let r=new Sn(this.kpuzzle,!1);for(let[n,l]of Object.entries(this.kpuzzle.definition.orbits))for(let o=0;o<l.numPieces;o++)r.stickerings.get(n)[o]=!t.stickerings.get(n)[o];return r}all(){return this.and(this.moves([]))}move(t){let r=this.kpuzzle.moveToTransformation(t),n=new Sn(this.kpuzzle,!1);for(let[l,o]of Object.entries(this.kpuzzle.definition.orbits))for(let i=0;i<o.numPieces;i++)(r.transformationData[l].permutation[i]!==i||r.transformationData[l].orientation[i]!==0)&&(n.stickerings.get(l)[i]=!0);return n}moves(t){return t.map(r=>this.move(r))}}});function hm(e){(async()=>{G2=e;let t=Array.from(document.body.querySelectorAll("twisty-player"));console.log(\`Setting the custom stickering for \${t.length} players!\`);let r=[];for(let n of t)r.push((async()=>{let l=await n.experimentalModel.stickering.get();n.experimentalStickering=l==="experimental-global-custom-1"?"experimental-global-custom-2":"experimental-global-custom-1"})());await Promise.all(r),console.log("Success!")})()}function O2(e,t){G2(e,t)}var G2,T2=U(()=>{Cl();G2=()=>{};globalThis.location&&new URL(location.href).searchParams.get("global-custom-stickerer")==="true"&&(window.setGlobalCustomStickerer=hm,window.PieceStickering=x,console.log("Global custom stickerer enabled! (using: global-custom-stickerer=true)"),console.log("Look here for inspiration:","https://github.com/cubing/cubing.js/blob/81b5cab3e27d8defb39dd1e0a10bc9e8ba894d26/src/cubing/puzzles/stickerings/cube-stickerings.ts#L67"))});async function Nt(e,t){let r=await e.kpuzzle(),n=new _l(r),l=new zl(r),o=()=>l.move("U"),i=()=>l.or(l.moves(["U","D"])),a=()=>l.not(i()),s=()=>l.or(l.moves(["L","R"])),f=()=>l.not(s()),g=()=>l.or(l.moves(["F","B"])),c=()=>l.not(g()),u=()=>l.not(o()),p=()=>l.and([o(),f(),c()]),m=()=>l.and([l.and(l.moves(["F","R"])),l.not(i())]),L=()=>l.and(l.moves(["D","R","F"])),R=()=>l.or([L(),m()]),h=()=>l.or([l.and([f(),a()]),l.and([f(),c()]),l.and([a(),c()])]),y=()=>l.or([l.and([f(),i(),g()]),l.and([a(),s(),g()]),l.and([c(),i(),s()])]),A=()=>l.not(l.or([h(),y()])),k=()=>l.or([f(),l.and([o(),y()])]);function E(){n.set(u(),x.Dim)}function Q(){n.set(o(),x.PermuteNonPrimary),n.set(p(),x.Dim)}function $(){n.set(o(),x.IgnoreNonPrimary),n.set(p(),x.Regular)}function N(){n.set(o(),x.Ignoriented),n.set(p(),x.Dim)}switch(t){case"full":break;case"PLL":E(),Q();break;case"CLS":E(),n.set(l.and(l.moves(["D","R","F"])),x.Regular),n.set(o(),x.Ignoriented),n.set(l.and([o(),f(),c()]),x.Dim),n.set(l.and([o(),A()]),x.IgnoreNonPrimary);break;case"OLL":E(),$();break;case"COLL":E(),Q(),n.set(l.and([o(),A()]),x.Regular);break;case"OCLL":E(),N(),n.set(l.and([o(),A()]),x.IgnoreNonPrimary);break;case"CLL":E(),n.set(l.not(l.and([A(),o()])),x.Dim);break;case"ELL":E(),n.set(o(),x.Dim),n.set(l.and([o(),y()]),x.Regular);break;case"ELS":E(),$(),n.set(l.and([o(),A()]),x.Ignored),n.set(m(),x.Regular),n.set(L(),x.Ignored);break;case"LL":E();break;case"F2L":n.set(o(),x.Ignored);break;case"ZBLL":E(),n.set(o(),x.PermuteNonPrimary),n.set(p(),x.Dim),n.set(l.and([o(),A()]),x.Regular);break;case"ZBLS":E(),n.set(R(),x.Regular),$(),n.set(l.and([o(),A()]),x.Ignored);break;case"WVLS":case"VLS":E(),n.set(R(),x.Regular),$();break;case"LS":E(),n.set(R(),x.Regular),n.set(o(),x.Ignored),n.set(p(),x.Dim);break;case"EO":n.set(A(),x.Ignored),n.set(y(),x.OrientationWithoutPermutation);break;case"EOline":n.set(A(),x.Ignored),n.set(y(),x.OrientationWithoutPermutation),n.set(l.and(l.moves(["D","M"])),x.Regular);break;case"EOcross":n.set(y(),x.OrientationWithoutPermutation),n.set(l.move("D"),x.Regular),n.set(A(),x.Ignored);break;case"CMLL":n.set(u(),x.Dim),n.set(k(),x.Ignored),n.set(l.and([o(),A()]),x.Regular);break;case"L6E":n.set(l.not(k()),x.Dim);break;case"L6EO":n.set(l.not(k()),x.Dim),n.set(k(),x.OrientationWithoutPermutation),n.set(l.and([h(),i()]),x.OrientationStickers);break;case"Daisy":n.set(l.all(),x.Ignored),n.set(h(),x.Dim),n.set(l.and([l.move("D"),h()]),x.Regular),n.set(l.and([l.move("U"),y()]),x.IgnoreNonPrimary);break;case"Cross":n.set(l.all(),x.Ignored),n.set(h(),x.Dim),n.set(l.and([l.move("D"),h()]),x.Regular),n.set(l.and([l.move("D"),y()]),x.Regular);break;case"2x2x2":n.set(l.or(l.moves(["U","F","R"])),x.Ignored),n.set(l.and([l.or(l.moves(["U","F","R"])),h()]),x.Dim);break;case"2x2x3":n.set(l.all(),x.Dim),n.set(l.or(l.moves(["U","F","R"])),x.Ignored),n.set(l.and([l.or(l.moves(["U","F","R"])),h()]),x.Dim),n.set(l.and([l.move("F"),l.not(l.or(l.moves(["U","R"])))]),x.Regular);break;case"Void Cube":n.set(h(),x.Invisible);break;case"picture":case"invisible":n.set(l.all(),x.Invisible);break;case"centers-only":n.set(l.not(h()),x.Ignored);break;case"experimental-global-custom-1":case"experimental-global-custom-2":O2(n,l);break;default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`),n.set(l.and(l.moves([])),x.Dim)}return n.toAppearance()}async function En(){return["full","PLL","CLS","OLL","COLL","OCLL","ELL","ELS","LL","F2L","ZBLL","ZBLS","WVLS","VLS","LS","EO","EOline","EOcross","CMLL","L6E","L6EO","Daisy","Cross","2x2x2","2x2x3","Void Cube","picture","invisible","centers-only"]}var kn=U(()=>{Cl();T2()});function Ae(e){let t=null;return()=>t??(t=e())}var Jt=U(()=>{});var Pl,I2=U(()=>{Pl=class{constructor(t,r){this.facenames=t;this.prefixFree=!0;this.gripnames=[];r&&(this.gripnames=r);for(let n=0;this.prefixFree&&n<t.length;n++)for(let l=0;this.prefixFree&&l<t.length;l++)n!==l&&t[n].startsWith(t[l])&&(this.prefixFree=!1)}setGripNames(t){this.gripnames=t}splitByFaceNames(t){let r=[],n=0;for(;n<t.length;){n>0&&n<t.length&&t[n]==="_"&&n++;let l=-1;for(let o=0;o<this.facenames.length;o++)t.substr(n).startsWith(this.facenames[o])&&(l<0||this.facenames[o].length>this.facenames[l].length)&&(l=o);if(l>=0)r.push(l),n+=this.facenames[l].length;else throw new Error("Could not split "+t+" into face names.")}return r}joinByFaceIndices(t){let r="",n=[];for(let l=0;l<t.length;l++)n.push(r),n.push(this.facenames[t[l]]),this.prefixFree||(r="_");return n.join("")}spinmatch(t,r){if(t===r)return!0;try{let n=this.splitByFaceNames(t),l=this.splitByFaceNames(r);if(n.length!==l.length&&n.length<3)return!1;for(let o=0;o<n.length;o++){for(let a=0;a<o;a++)if(n[o]===n[a])return!1;let i=!1;for(let a=0;a<l.length;a++)if(n[o]===l[a]){i=!0;break}if(!i)return!1}return!0}catch(n){return!1}}spinmatchv(t,r){return t.endsWith("v")&&r.endsWith("v")?this.spinmatch(t.slice(0,t.length-1),r.slice(0,r.length-1)):this.spinmatch(t,r)}unswizzle(t){(t.endsWith("v")||t.endsWith("w"))&&t[0]<="Z"&&(t=t.slice(0,t.length-1));let r=t.toUpperCase();for(let n=0;n<this.gripnames.length;n++){let l=this.gripnames[n];if(this.spinmatch(r,l))return l}return t}}});var _n,W2=U(()=>{_n=class{notationToInternal(t){return t}notationToExternal(t){return t}}});var Oo,K2=U(()=>{Re();Oo=class{constructor(t,r){this.child=t;this.sw=r}notationToInternal(t){return t.family==="T"&&t.innerLayer===void 0&&t.outerLayer===void 0?new B(new P("FLRv",t.innerLayer,t.outerLayer),t.amount):this.child.notationToInternal(t)}notationToExternal(t){let r=t.family;return r.length>0&&r[r.length-1]==="v"&&(r=r.substring(0,r.length-1)),this.sw.spinmatch(r,"FLUR")?new B(new P("T",t.innerLayer,t.outerLayer),t.amount):this.child.notationToExternal(t)}}});var Ml,Q2=U(()=>{Re();Ml=class{constructor(t,r){this.internalNames=t;this.externalNames=r}convertString(t,r,n){let l="";(t.endsWith("v")||t.endsWith("v"))&&t<="_"&&(l=t.slice(t.length-1),t=t.slice(0,t.length-1));let o=t.toUpperCase(),i=!1;return t!==o&&(i=!0,t=o),t=n.joinByFaceIndices(r.splitByFaceNames(t)),i&&(t=t.toLowerCase()),t+l}convert(t,r,n){let l=t.family,o=this.convertString(l,r,n);return l===o?t:new B(new P(o,t.innerLayer,t.outerLayer),t.amount)}notationToInternal(t){return this.convert(t,this.externalNames,this.internalNames)}notationToExternal(t){return this.convert(t,this.internalNames,this.externalNames)}}});var To,j2=U(()=>{Re();To=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer===void 0&&t.outerLayer===void 0){if(Math.abs(t.amount)===1){if(t.family==="R++")return new B(new P("L",3,2),-2*t.amount);if(t.family==="R--")return new B(new P("L",3,2),2*t.amount);if(t.family==="D++")return new B(new P("U",3,2),-2*t.amount);if(t.family==="D--")return new B(new P("U",3,2),2*t.amount);if(t.family==="R_PLUSPLUS_")return new B(new P("L",3,2),-2*t.amount);if(t.family==="D_PLUSPLUS_")return new B(new P("U",3,2),-2*t.amount)}if(t.family==="y")return new B("Uv",t.amount)}return this.child.notationToInternal(t)}notationToExternal(t){return t.family==="Uv"?new B(new P("y",t.innerLayer,t.outerLayer),t.amount):t.family==="Dv"?new B("y",-t.amount):this.child.notationToExternal(t)}}});var Io,q2=U(()=>{Re();Io=class{constructor(t){this.slices=t}notationToInternal(t){let r=t.family;return!t.innerLayer&&!t.outerLayer&&(r==="x"?t=new B("Rv",t.amount):r==="y"?t=new B("Uv",t.amount):r==="z"&&(t=new B("Fv",t.amount)),(this.slices&1)==1&&(r==="E"?t=new B(new P("D",(this.slices+1)/2),t.amount):r==="M"?t=new B(new P("L",(this.slices+1)/2),t.amount):r==="S"&&(t=new B(new P("F",(this.slices+1)/2),t.amount))),this.slices>2&&(r==="e"?t=new B(new P("D",this.slices-1,2),t.amount):r==="m"?t=new B(new P("L",this.slices-1,2),t.amount):r==="s"&&(t=new B(new P("F",this.slices-1,2),t.amount)))),t}notationToExternal(t){let r=t.family;if(!t.innerLayer&&!t.outerLayer){if(r==="Rv")return new B("x",t.amount);if(r==="Uv")return new B("y",t.amount);if(r==="Fv")return new B("z",t.amount);if(r==="Lv")return new B("x",-t.amount);if(r==="Dv")return new B("y",-t.amount);if(r==="Bv")return new B("z",-t.amount)}return t}}});var Dm,Fm,V2,H2,Y2,Nl,Wo,J2=U(()=>{Re();Dm={U:"frl",L:"fld",R:"fdr",B:"dlr",u:"FRL",l:"FLD",r:"FDR",b:"DLR",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R"},Fm={U:"FRL",L:"FLD",R:"FDR",B:"DLR",u:"frl",l:"fld",r:"fdr",b:"dlr",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R",d:"d",f:"f",bl:"l",br:"r"},V2={U:"FRL",L:"FLD",R:"FDR",B:"DLR"},H2=new P("y"),Y2=new P("Dv"),Nl=class{constructor(t){this.child=t;this.wcaHack=!1;this.map=Dm}notationToInternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){let n=V2[t.family];if(n)return new B(new P(n,t.innerLayer,t.outerLayer),t.amount)}let r=this.map[t.family];return r?new B(new P(r,t.innerLayer,t.outerLayer),t.amount):H2.isIdentical(t.quantum)?new B(Y2,-t.amount):null}notationToExternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){for(let[r,n]of Object.entries(V2))if(this.child.spinmatch(t.family,n))return new B(new P(r,t.innerLayer,t.outerLayer),t.amount)}for(let[r,n]of Object.entries(this.map))if(this.child.spinmatch(t.family,n))return new B(new P(r,t.innerLayer,t.outerLayer),t.amount);return Y2.isIdentical(t.quantum)?new B(H2,-t.amount):null}},Wo=class extends Nl{constructor(t){super(t);this.map=Fm}}});var Z2,Wa,X2,Am,Ka,$2,ym,Qa,ef,Um,Ko,tf=U(()=>{Re();Z2={U:"UBL",UL:"ULF",F:"UFR",UR:"URB",B:"DBL",D:"DFR",L:"DLF",R:"DRB",Uv:"UBLv",ULv:"ULFv",Fv:"UFRv",URv:"URBv",Bv:"DBLv",Dv:"DFRv",Lv:"DLFv",Rv:"DRBv"},Wa=new P("x"),X2=new P("Rv"),Am=new P("Lv"),Ka=new P("y"),$2=new P("Uv"),ym=new P("Dv"),Qa=new P("z"),ef=new P("Fv"),Um=new P("Bv"),Ko=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer||t.outerLayer)return null;let r=Z2[t.family];return r?new B(new P(r,t.outerLayer,t.innerLayer),t.amount):Wa.isIdentical(t.quantum)?new B(X2,t.amount):Ka.isIdentical(t.quantum)?new B($2,t.amount):Qa.isIdentical(t.quantum)?new B(ef,t.amount):null}notationToExternal(t){for(let[r,n]of Object.entries(Z2))if(this.child.spinmatchv(t.family,n))return new B(new P(r,t.innerLayer,t.outerLayer),t.amount);return X2.isIdentical(t.quantum)?new B(Wa,t.amount):Am.isIdentical(t.quantum)?new B(Wa,-t.amount):$2.isIdentical(t.quantum)?new B(Ka,t.amount):ym.isIdentical(t.quantum)?new B(Ka,-t.amount):ef.isIdentical(t.quantum)?new B(Qa,t.amount):Um.isIdentical(t.quantum)?new B(Qa,-t.amount):null}}});var ja=U(()=>{W2();K2();Q2();j2();q2();J2();tf()});function rf(e){let t=0,r={};for(;t<e.length&&e[t][0]==="-";){let l=e[t++];if(l==="--rotations")r.addRotations=!0;else if(l==="--allmoves")r.allMoves=!0;else if(l==="--outerblockmoves")r.outerBlockMoves=!0;else if(l==="--vertexmoves")r.vertexMoves=!0;else if(l==="--nocorners")r.includeCornerOrbits=!1;else if(l==="--noedges")r.includeEdgeOrbits=!1;else if(l==="--noorientation")r.fixedOrientation=!0;else if(l==="--nocenters")r.includeCenterOrbits=!1;else if(l==="--omit")r.excludeOrbits=e[t].split(","),t++;else if(l==="--moves")r.moveList=e[t].split(","),t++;else if(l==="--optimize")r.optimizeOrbits=!0;else if(l==="--scramble")r.scrambleAmount=100;else if(l==="--fixcorner")r.fixedPieceType="v";else if(l==="--fixedge")r.fixedPieceType="e";else if(l==="--fixcenter")r.fixedPieceType="f";else if(l==="--orientcenters")r.orientCenters=!0;else if(l==="--puzzleorientation")r.puzzleOrientation=JSON.parse(e[t]),t++;else throw new Error("Bad option: "+l)}return{puzzleDescription:Gl(e.slice(t).join(" ")),options:r}}var qa,Va=U(()=>{Qo();qa=class{constructor(t={}){this.verbosity=0;this.allMoves=!1;this.vertexMoves=!1;this.addRotations=!1;this.moveList=null;this.fixedOrientation=!1;this.fixedPieceType=null;this.orientCenters=!1;this.includeCornerOrbits=!0;this.includeCenterOrbits=!0;this.includeEdgeOrbits=!0;this.excludeOrbits=[];this.optimizeOrbits=!1;this.grayCorners=!1;this.grayCenters=!1;this.grayEdges=!1;this.puzzleOrientation=null;this.puzzleOrientations=null;this.scrambleAmount=0;Object.assign(this,t)}}});function mr(e){if(!Ha[e]){let t=Array(e);for(let r=0;r<e;r++)t[r]=0;Ha[e]=t}return Ha[e]}function Gt(e){if(!Ya[e]){let t=Array(e);for(let r=0;r<e;r++)t[r]=r;Ya[e]=t}return Ya[e]}function nf(e){return new Bt(Gt(e))}function lf(e){let t=1;for(;e>1;)t*=e,e--;return t}function bm(e,t){if(e>t){let r=e;e=t,t=r}for(;e>0;){let r=t%e;t=e,e=r}return t}function Ja(e,t){return e/bm(e,t)*t}var Ha,Ya,Bt,jo=U(()=>{Ha=[],Ya=[];Bt=class{constructor(t){this.n=t.length,this.p=t}toString(){return"Perm["+this.p.join(" ")+"]"}mul(t){let r=Array(this.n);for(let n=0;n<this.n;n++)r[n]=t.p[this.p[n]];return new Bt(r)}rmul(t){let r=Array(this.n);for(let n=0;n<this.n;n++)r[n]=this.p[t.p[n]];return new Bt(r)}inv(){let t=Array(this.n);for(let r=0;r<this.n;r++)t[this.p[r]]=r;return new Bt(t)}compareTo(t){for(let r=0;r<this.n;r++)if(this.p[r]!==t.p[r])return this.p[r]-t.p[r];return 0}toGap(){let t=new Array,r=new Array(this.n);for(let n=0;n<this.p.length;n++){if(r[n]||this.p[n]===n)continue;let l=new Array;for(let o=n;!r[o];o=this.p[o])l.push(1+o),r[o]=!0;t.push("("+l.join(",")+")")}return t.join("")}order(){let t=1,r=new Array(this.n);for(let n=0;n<this.p.length;n++){if(r[n]||this.p[n]===n)continue;let l=0;for(let o=n;!r[o];o=this.p[o])l++,r[o]=!0;t=Ja(t,l)}return t}}});function Za(e,t){let r=B.fromString(t),n=e.notationToExternal(r);return n===null||r===n?t:n.toString()}function of(e,t){let r=e.moveops.length;if(r>30)throw new Error("Canon info too big for bitmask");let n=[],l=[];for(let i=0;i<r;i++){let a=e.moveops[i];n.push(a.order());let s=0;for(let f=0;f<r;f++){if(f===i)continue;let g=e.moveops[f];a.mul(g).equal(g.mul(a))&&(s|=1<<f)}l.push(s)}let o={};o[0]=1;for(let i=0;i<100;i++){let a=0,s={},f=0;for(let g in o){let c=+g,u=o[c];a+=u,f++;for(let p=0;p<n.length;p++)if((c>>p&1)==0&&(c&l[p]&(1<<p)-1)==0){let m=c&l[p]|1<<p;s[m]===void 0&&(s[m]=0),s[m]+=(n[p]-1)*u}}t(\`\${i}: canonseq \${a} states \${f}\`),o=s}}var Ol,xm,zn,wt,Zt,Xa,Lr,Cn,$a,af=U(()=>{Re();ja();jo();Ol=class{constructor(t,r){this.size=t;this.mod=r}reassemblySize(){return lf(this.size)*Math.pow(this.mod,this.size)}},xm=0;zn=class{constructor(t,r,n,l,o){this.orbitnames=t;this.orbitdefs=r;this.solved=n;this.movenames=l;this.moveops=o}transformToKTransformationData(t){let r={};for(let n=0;n<this.orbitnames.length;n++)r[this.orbitnames[n]]=t.orbits[n].toKPuzzle();return r}static transformToKTransformationData(t,r){let n={};for(let l=0;l<t.length;l++)n[t[l]]=r.orbits[l].toKPuzzle();return n}toKsolve(t,r=new _n){let n=[];n.push("Name "+t),n.push("");for(let l=0;l<this.orbitnames.length;l++)n.push(\`Set \${this.orbitnames[l]} \${this.orbitdefs[l].size} \${this.orbitdefs[l].mod}\`);n.push(""),n.push("Solved");for(let l=0;l<this.orbitnames.length;l++)this.solved.orbits[l].appendDefinition(n,this.orbitnames[l],!1,!1);n.push("End");for(let l=0;l<this.movenames.length;l++){n.push("");let o=Za(r,this.movenames[l]),i=!1;o[o.length-1]==="'"&&(i=!0,o=o.substring(0,o.length-1)),n.push("Move "+o);for(let a=0;a<this.orbitnames.length;a++)i?this.moveops[l].orbits[a].inv().appendDefinition(n,this.orbitnames[a],!0):this.moveops[l].orbits[a].appendDefinition(n,this.orbitnames[a],!0);n.push("End")}return n}toKPuzzleDefinition(t){let r={},n={};for(let o=0;o<this.orbitnames.length;o++){r[this.orbitnames[o]]={numPieces:this.orbitdefs[o].size,numOrientations:this.orbitdefs[o].mod};let i=this.solved.orbits[o].toKPuzzle();n[this.orbitnames[o]]={pieces:i.permutation,orientation:i.orientation}}let l={};if(t)for(let o=0;o<this.movenames.length;o++)l[this.movenames[o]]=this.transformToKTransformationData(this.moveops[o]);return{name:\`PG3D #\${++xm}\`,orbits:r,startStateData:n,moves:l}}optimize(){let t=[],r=[],n=[],l=[];for(let o=0;o<this.moveops.length;o++)l.push([]);for(let o=0;o<this.orbitdefs.length;o++){let i=this.orbitdefs[o].mod,a=this.orbitdefs[o].size,s=new $a(a),f=new Array(this.orbitdefs[o].size);for(let p=0;p<a;p++)f[p]=!1;for(let p=0;p<this.moveops.length;p++)for(let m=0;m<a;m++)(this.moveops[p].orbits[o].perm[m]!==m||this.moveops[p].orbits[o].ori[m]!==0)&&(f[m]=!0,s.union(m,this.moveops[p].orbits[o].perm[m]));let g=!0;if(i>1){g=!1;let p=new $a(this.orbitdefs[o].size*i);for(let m=0;m<this.moveops.length;m++)for(let L=0;L<a;L++)if(this.moveops[m].orbits[o].perm[L]!==L||this.moveops[m].orbits[o].ori[L]!==0)for(let R=0;R<i;R++)p.union(L*i+R,this.moveops[m].orbits[o].perm[L]*i+(R+this.moveops[m].orbits[o].ori[L])%i);for(let m=0;!g&&m<a;m++)for(let L=1;L<i;L++)p.find(m*i)===p.find(m*i+L)&&(g=!0);for(let m=0;!g&&m<a;m++)for(let L=0;L<m;L++)this.solved.orbits[o].perm[m]===this.solved.orbits[o].perm[L]&&(g=!0)}let c=-1,u=!1;for(let p=0;p<this.orbitdefs[o].size;p++)if(f[p]){let m=s.find(p);c<0?c=m:c!==m&&(u=!0)}for(let p=0;p<this.orbitdefs[o].size;p++){if(!f[p]||s.find(p)!==p)continue;let L=[],R=[],h=0;for(let y=0;y<this.orbitdefs[o].size;y++)s.find(y)===p&&(L[h]=y,R[y]=h,h++);if(u?t.push(\`\${this.orbitnames[o]}_p\${p}\`):t.push(this.orbitnames[o]),g){r.push(new Ol(h,this.orbitdefs[o].mod)),n.push(this.solved.orbits[o].remapVS(L,h));for(let y=0;y<this.moveops.length;y++)l[y].push(this.moveops[y].orbits[o].remap(L,R,h))}else{r.push(new Ol(h,1)),n.push(this.solved.orbits[o].remapVS(L,h).killOri());for(let y=0;y<this.moveops.length;y++)l[y].push(this.moveops[y].orbits[o].remap(L,R,h).killOri())}}}return new zn(t,r,new Cn(n),this.movenames,l.map(o=>new Lr(o)))}scramble(t){this.solved=this.solved.mul(this.getScrambleTransformation(t))}getScrambleTransformation(t){t<100&&(t=100);let r=[];for(let l=0;l<this.moveops.length;l++)r[l]=this.moveops[l];for(let l=0;l<r.length;l++){let o=Math.floor(Math.random()*r.length),i=r[l];r[l]=r[o],r[o]=i}t<r.length&&(t=r.length);for(let l=0;l<t;l++){let o=Math.floor(Math.random()*r.length),i=Math.floor(Math.random()*r.length),a=Math.floor(Math.random()*this.moveops.length);r[o]=r[o].mul(r[i]).mul(this.moveops[a]),Math.random()<.1&&(r[o]=r[o].mul(this.moveops[a]))}let n=r[0];for(let l=1;l<r.length;l++)n=n.mul(r[l]);return n}reassemblySize(){let t=1;for(let r=0;r<this.orbitdefs.length;r++)t*=this.orbitdefs[r].reassemblySize();return t}},wt=class{constructor(t,r,n){this.perm=t;this.ori=r;this.orimod=n}static e(t,r){return new wt(Gt(t),mr(t),r)}mul(t){let r=this.perm.length,n=new Array(r);if(this.orimod===1){for(let l=0;l<r;l++)n[l]=this.perm[t.perm[l]];return new wt(n,this.ori,this.orimod)}else{let l=new Array(r);for(let o=0;o<r;o++)n[o]=this.perm[t.perm[o]],l[o]=(this.ori[t.perm[o]]+t.ori[o])%this.orimod;return new wt(n,l,this.orimod)}}inv(){let t=this.perm.length,r=new Array(t),n=new Array(t);for(let l=0;l<t;l++)r[this.perm[l]]=l,n[this.perm[l]]=(this.orimod-this.ori[l])%this.orimod;return new wt(r,n,this.orimod)}equal(t){let r=this.perm.length;for(let n=0;n<r;n++)if(this.perm[n]!==t.perm[n]||this.ori[n]!==t.ori[n])return!1;return!0}killOri(){let t=this.perm.length;for(let r=0;r<t;r++)this.ori[r]=0;return this.orimod=1,this}toPerm(){let t=this.orimod;if(t===1)return new Bt(this.perm);let r=this.perm.length,n=new Array(r*t);for(let l=0;l<r;l++)for(let o=0;o<t;o++)n[l*t+o]=t*this.perm[l]+(this.ori[l]+o)%t;return new Bt(n)}identicalPieces(){let t=[],r=this.perm.length,n=[];for(let l=0;l<r;l++){let o=this.perm[l];if(t[o]===void 0){let i=[l];t[o]=!0;for(let a=l+1;a<r;a++)this.perm[a]===o&&i.push(a);n.push(i)}}return n}order(){return this.toPerm().order()}isIdentity(){let t=this.perm.length;if(this.perm===Gt(t)&&this.ori===mr(t))return!0;for(let r=0;r<t;r++)if(this.perm[r]!==r||this.ori[r]!==0)return!1;return!0}zeroOris(){let t=this.perm.length;if(this.ori===mr(t))return!0;for(let r=0;r<t;r++)if(this.ori[r]!==0)return!1;return!0}remap(t,r,n){let l=new Array(n),o=new Array(n);for(let i=0;i<n;i++)l[i]=r[this.perm[t[i]]],o[i]=this.ori[t[i]];return new wt(l,o,this.orimod)}remapVS(t,r){let n=new Array(r),l=new Array(r),o=0,i=[];for(let a=0;a<r;a++){let s=this.perm[t[a]];i[s]===void 0&&(i[s]=o++),n[a]=i[s],l[a]=this.ori[t[a]]}return new wt(n,l,this.orimod)}appendDefinition(t,r,n,l=!0){if(!(l&&this.isIdentity())&&(t.push(r),t.push(this.perm.map(o=>o+1).join(" ")),!this.zeroOris()))if(n){let o=new Array(this.ori.length);for(let i=0;i<o.length;i++)o[this.perm[i]]=this.ori[i];t.push(o.join(" "))}else t.push(this.ori.join(" "))}toKPuzzle(){let t=this.perm.length;return this.isIdentity()?(wt.kcache[t]||(wt.kcache[t]={permutation:Gt(t),orientation:mr(t)}),wt.kcache[t]):{permutation:this.perm,orientation:this.ori}}},Zt=wt;Zt.kcache=[];Xa=class{constructor(t){this.orbits=t}internalMul(t){let r=[];for(let n=0;n<this.orbits.length;n++)r.push(this.orbits[n].mul(t.orbits[n]));return r}internalInv(){let t=[];for(let r of this.orbits)t.push(r.inv());return t}equal(t){for(let r=0;r<this.orbits.length;r++)if(!this.orbits[r].equal(t.orbits[r]))return!1;return!0}killOri(){for(let t of this.orbits)t.killOri();return this}toPerm(){let t=new Array,r=0;for(let l of this.orbits){let o=l.toPerm();t.push(o),r+=o.n}let n=new Array(r);r=0;for(let l of t){for(let o=0;o<l.n;o++)n[r+o]=r+l.p[o];r+=l.n}return new Bt(n)}identicalPieces(){let t=[],r=0;for(let n of this.orbits){let l=n.orimod,o=n.identicalPieces();for(let i=0;i<o.length;i++)t.push(o[i].map(a=>a*l+r));r+=l*n.perm.length}return t}order(){let t=1;for(let r of this.orbits)t=Ja(t,r.order());return t}},Lr=class extends Xa{constructor(t){super(t)}mul(t){return new Lr(this.internalMul(t))}mulScalar(t){if(t===0)return this.e();let r=this;for(t<0&&(r=r.inv(),t=-t);(t&1)==0;)r=r.mul(r),t>>=1;if(t===1)return r;let n=r,l=this.e();for(;t>0;)t&1&&(l=l.mul(n)),t>1&&(n=n.mul(n)),t>>=1;return l}inv(){return new Lr(this.internalInv())}e(){return new Lr(this.orbits.map(t=>Zt.e(t.perm.length,t.orimod)))}},Cn=class extends Xa{constructor(t){super(t)}mul(t){return new Cn(this.internalMul(t))}},$a=class{constructor(t){this.n=t;this.heads=new Array(t);for(let r=0;r<t;r++)this.heads[r]=r}find(t){let r=this.heads[t];return this.heads[r]===r||(r=this.find(this.heads[r]),this.heads[t]=r),r}union(t,r){let n=this.find(t),l=this.find(r);n<l?this.heads[l]=n:n>l&&(this.heads[n]=l)}}});var qo,sf=U(()=>{qo={"2x2x2":"c f 0","3x3x3":"c f 0.333333333333333","4x4x4":"c f 0.5 f 0","5x5x5":"c f 0.6 f 0.2","6x6x6":"c f 0.666666666666667 f 0.333333333333333 f 0","7x7x7":"c f 0.714285714285714 f 0.428571428571429 f 0.142857142857143","8x8x8":"c f 0.75 f 0.5 f 0.25 f 0","9x9x9":"c f 0.777777777777778 f 0.555555555555556 f 0.333333333333333 f 0.111111111111111","10x10x10":"c f 0.8 f 0.6 f 0.4 f 0.2 f 0","11x11x11":"c f 0.818181818181818 f 0.636363636363636 f 0.454545454545455 f 0.272727272727273 f 0.0909090909090909","12x12x12":"c f 0.833333333333333 f 0.666666666666667 f 0.5 f 0.333333333333333 f 0.166666666666667 f 0","13x13x13":"c f 0.846153846153846 f 0.692307692307692 f 0.538461538461538 f 0.384615384615385 f 0.230769230769231 f 0.0769230769230769","20x20x20":"c f 0 f .1 f .2 f .3 f .4 f .5 f .6 f .7 f .8 f .9","30x30x30":"c f 0 f .066667 f .133333 f .2 f .266667 f .333333 f .4 f .466667 f .533333 f .6 f .666667 f .733333 f .8 f .866667 f .933333","40x40x40":"c f 0 f .05 f .1 f .15 f .2 f .25 f .3 f .35 f .4 f .45 f .5 f .55 f .6 f .65 f .7 f .75 f .8 f .85 f .9 f .95",skewb:"c v 0","master skewb":"c v 0.275","professor skewb":"c v 0 v 0.38","compy cube":"c v 0.915641442663986",helicopter:"c e 0.707106781186547","curvy copter":"c e 0.83",dino:"c v 0.577350269189626","little chop":"c e 0",pyramorphix:"t e 0",mastermorphix:"t e 0.346184634065199",pyraminx:"t v 0.333333333333333 v 1.66666666666667",tetraminx:"t v 0.333333333333333","master pyraminx":"t v 0 v 1 v 2","master tetraminx":"t v 0 v 1","professor pyraminx":"t v -0.2 v 0.6 v 1.4 v 2.2","professor tetraminx":"t v -0.2 v 0.6 v 1.4","Jing pyraminx":"t f 0","master pyramorphix":"t e 0.866025403784437",megaminx:"d f 0.7",gigaminx:"d f 0.64 f 0.82",teraminx:"d f 0.64 f 0.76 f 0.88",petaminx:"d f 0.64 f 0.73 f 0.82 f 0.91",examinx:"d f 0.64 f 0.712 f 0.784 f 0.856 f 0.928",zetaminx:"d f 0.64 f 0.7 f 0.76 f 0.82 f 0.88 f 0.94",yottaminx:"d f 0.64 f 0.6914 f 0.7429 f 0.7943 f 0.8457 f 0.8971 f 0.9486",pentultimate:"d f 0","master pentultimate":"d f 0.1","elite pentultimate":"d f 0 f 0.145905",starminx:"d v 0.937962370425399","starminx 2":"d f 0.23606797749979","pyraminx crystal":"d f 0.447213595499989",chopasaurus:"d v 0","big chop":"d e 0","skewb diamond":"o f 0",FTO:"o f 0.333333333333333","master FTO":"o f 0.5 f 0","Christopher's jewel":"o v 0.577350269189626",octastar:"o e 0","Trajber's octahedron":"o v 0.433012701892219","radio chop":"i f 0",icosamate:"i v 0","icosahedron 2":"i v 0.18759247376021","icosahedron 3":"i v 0.18759247376021 e 0","icosahedron static faces":"i v 0.84","icosahedron moving faces":"i v 0.73","Eitan's star":"i f 0.61803398874989","2x2x2 + dino":"c f 0 v 0.577350269189626","2x2x2 + little chop":"c f 0 e 0","dino + little chop":"c v 0.577350269189626 e 0","2x2x2 + dino + little chop":"c f 0 v 0.577350269189626 e 0","megaminx + chopasaurus":"d f 0.61803398875 v 0","starminx combo":"d f 0.23606797749979 v 0.937962370425399"}});function Vo(e){let t=new I(0,0,0,0);for(let r=0;r<e.length;r++)t=t.sum(e[r]);return t.smul(1/e.length)}function ff(e,t,r,n){let l=n[e].intersect3(n[t],n[r]);if(!l)return l;for(let o=0;o<n.length;o++)if(o!==e&&o!==t&&o!==r){let i=n[o].b*l.b+n[o].c*l.c+n[o].d*l.d;if(n[o].a>0&&i>n[o].a||n[o].a<0&&i<n[o].a)return!1}return l}var jr,I,Ho=U(()=>{jr=1e-9;I=class{constructor(t,r,n,l){this.a=t;this.b=r;this.c=n;this.d=l}mul(t){return new I(this.a*t.a-this.b*t.b-this.c*t.c-this.d*t.d,this.a*t.b+this.b*t.a+this.c*t.d-this.d*t.c,this.a*t.c-this.b*t.d+this.c*t.a+this.d*t.b,this.a*t.d+this.b*t.c-this.c*t.b+this.d*t.a)}toString(){return\`Q[\${this.a},\${this.b},\${this.c},\${this.d}]\`}dist(t){return Math.hypot(this.a-t.a,this.b-t.b,this.c-t.c,this.d-t.d)}len(){return Math.hypot(this.a,this.b,this.c,this.d)}cross(t){return new I(0,this.c*t.d-this.d*t.c,this.d*t.b-this.b*t.d,this.b*t.c-this.c*t.b)}dot(t){return this.b*t.b+this.c*t.c+this.d*t.d}normalize(){let t=Math.sqrt(this.dot(this));return new I(this.a/t,this.b/t,this.c/t,this.d/t)}makenormal(){return new I(0,this.b,this.c,this.d).normalize()}normalizeplane(){let t=Math.hypot(this.b,this.c,this.d);return new I(this.a/t,this.b/t,this.c/t,this.d/t)}smul(t){return new I(this.a*t,this.b*t,this.c*t,this.d*t)}sum(t){return new I(this.a+t.a,this.b+t.b,this.c+t.c,this.d+t.d)}sub(t){return new I(this.a-t.a,this.b-t.b,this.c-t.c,this.d-t.d)}angle(){return 2*Math.acos(this.a)}invrot(){return new I(this.a,-this.b,-this.c,-this.d)}det3x3(t,r,n,l,o,i,a,s,f){return t*(o*f-i*s)+r*(i*a-l*f)+n*(l*s-o*a)}rotateplane(t){let r=t.mul(new I(0,this.b,this.c,this.d)).mul(t.invrot());return r.a=this.a,r}orthogonal(){let t=Math.abs(this.b),r=Math.abs(this.c),n=Math.abs(this.d);return t<r&&t<n?this.cross(new I(0,1,0,0)).normalize():r<t&&r<n?this.cross(new I(0,0,1,0)).normalize():this.cross(new I(0,0,0,1)).normalize()}pointrotation(t){let r=this.normalize();if(t=t.normalize(),r.sub(t).len()<jr)return new I(1,0,0,0);let n=r.sum(t);n.len()<jr?n=n.orthogonal():n=n.normalize();let l=r.cross(n);return l.a=r.dot(n),l}unproject(t){return this.sum(t.smul(-this.dot(t)/(this.len()*t.len())))}rotatepoint(t){return t.mul(this).mul(t.invrot())}rotateface(t){return t.map(r=>r.rotatepoint(this))}intersect3(t,r){let n=this.det3x3(this.b,this.c,this.d,t.b,t.c,t.d,r.b,r.c,r.d);return Math.abs(n)<jr?!1:new I(0,this.det3x3(this.a,this.c,this.d,t.a,t.c,t.d,r.a,r.c,r.d)/n,this.det3x3(this.b,this.a,this.d,t.b,t.a,t.d,r.b,r.a,r.d)/n,this.det3x3(this.b,this.c,this.a,t.b,t.c,t.a,r.b,r.c,r.a)/n)}side(t){return t>jr?1:t<-jr?-1:0}cutface(t){let r=this.a,n=0,l=null;for(let o=0;o<t.length;o++)n|=1<<this.side(t[o].dot(this)-r)+1;if((n&5)==5){l=[];let o=t.map(i=>this.side(i.dot(this)-r));for(let i=-1;i<=1;i+=2){let a=[];for(let s=0;s<t.length;s++){(o[s]===i||o[s]===0)&&a.push(t[s]);let f=(s+1)%t.length;if(o[s]+o[f]===0&&o[s]!==0){let g=t[s].dot(this)-r,c=t[f].dot(this)-r,u=g/(g-c),p=t[s].smul(1-u).sum(t[f].smul(u));a.push(p)}}l.push(a)}}return l}cutfaces(t){let r=[];for(let n=0;n<t.length;n++){let l=t[n],o=this.cutface(l);o?(r.push(o[0]),r.push(o[1])):r.push(l)}return r}faceside(t){let r=this.a;for(let n=0;n<t.length;n++){let l=this.side(t[n].dot(this)-r);if(l!==0)return l}throw new Error("Could not determine side of plane in faceside")}sameplane(t){let r=this.normalize(),n=t.normalize();return r.dist(n)<jr||r.dist(n.smul(-1))<jr}makecut(t){return new I(t,this.b,this.c,this.d)}}});function uf(){let e=Math.sqrt(.5);return[new I(e,e,0,0),new I(e,0,e,0)]}function gf(){return[new I(.5,.5,.5,.5),new I(.5,.5,.5,-.5)]}function cf(){let e=2*Math.PI/10,t=.5+.3*Math.sqrt(5),r=.5+.1*Math.sqrt(5),n=Math.sqrt(t*t+r*r);return t/=n,r/=n,[new I(Math.cos(e),t*Math.sin(e),r*Math.sin(e),0),new I(.5,.5,.5,.5)]}function pf(){let e=1/6+Math.sqrt(5)/6,t=2/3+Math.sqrt(5)/3,r=Math.sqrt(e*e+t*t);e/=r,t/=r;let n=2*Math.PI/6;return[new I(Math.cos(n),e*Math.sin(n),t*Math.sin(n),0),new I(Math.cos(n),-e*Math.sin(n),t*Math.sin(n),0)]}function mf(){let e=Math.sqrt(.5);return[new I(.5,.5,.5,.5),new I(e,0,0,e)]}function Lf(e){let t=[new I(1,0,0,0)];for(let r=0;r<t.length;r++)for(let n=0;n<e.length;n++){let l=e[n].mul(t[r]),o=l.smul(-1),i=!1;for(let a=0;a<t.length;a++)if(l.dist(t[a])<Yo||o.dist(t[a])<Yo){i=!0;break}i||t.push(l)}return t}function es(e,t){let r=[],n=[];for(let l=0;l<t.length;l++){let o=e.rotateplane(t[l]),i=!1;for(let a=0;a<r.length;a++)if(o.dist(r[a])<Yo){i=!0;break}i||(r.push(o),n.push(t[l]))}return n}function ts(e){let t=[];for(let r=1;r<e.length;r++)for(let n=r+1;n<e.length;n++){let l=ff(0,r,n,e);if(l){let o=!1;for(let i=0;i<t.length;i++)if(l.dist(t[i])<Yo){o=!0;break}o||t.push(l)}}for(;;){let r=!1;for(let n=0;n<t.length;n++){let l=(n+1)%t.length;if(e[0].dot(t[n].cross(t[l]))<0){let o=t[n];t[n]=t[l],t[l]=o,r=!0}}if(!r)break}return t}var Yo,Bf=U(()=>{Ho();Yo=1e-9});function Jo(e,t){let r=e[0].p.length,n=nf(r),l=[],o=[],i=[],a=[],s=[];function f(p){for(let m=p.p.length-1;m>=0;m--){let L=p.p[m];if(L!==m){if(!l[m][L])return!1;p=p.mul(o[m][L])}}return!0}function g(p,m,L){a[p].push(m),s[p].push(L);for(let R=0;R<l[p].length;R++)l[p][R]&&c(p,l[p][R].mul(m),L+i[p][R])}function c(p,m,L){let R=m.p[p];if(!l[p][R]){l[p][R]=m,o[p][R]=m.inv(),i[p][R]=L;for(let y=0;y<a[p].length;y++)c(p,m.mul(a[p][y]),L+s[p][y]);return}let h=m.mul(o[p][R]);f(h)||g(p-1,h,L+i[p][R])}function u(){l=[],o=[],a=[],i=[],s=[];for(let L=0;L<r;L++)l.push([]),o.push([]),i.push([]),a.push([]),s.push([]),l[L][L]=n,o[L][L]=n,i[L][L]=0;let p=0,m=1;for(let L=0;L<e.length;L++){g(r-1,e[L],1),m=1;let R=0,h=0,y=[],A=new Rf;for(let k=0;k<r;k++){let E=0,Q=0;for(let N=0;N<r;N++)l[k][N]&&(E++,Q+=i[k][N],k!==N&&p++);R+=a[k].length,m*=E,E>1&&A.multiply(E);let $=Q/E;y.push($),h+=$}t(\`\${L}: sz \${m} T \${R} sol \${h} none \${p} mults \${A.toString()}\`)}return m}return u()}var Rf,rs=U(()=>{jo();Rf=class{constructor(){this.mult=[]}multiply(t){for(let r=2;r*r<=t;r++)for(;t%r==0;)this.mult[r]!==void 0?this.mult[r]++:this.mult[r]=1,t/=r;t>1&&(this.mult[t]!==void 0?this.mult[t]++:this.mult[t]=1)}toString(){let t="";for(let r=0;r<this.mult.length;r++)this.mult[r]!==void 0&&(t!==""&&(t+="*"),t+=r,this.mult[r]>1&&(t+=\`^\${this.mult[r]}\`));return t}}});function ns(e){return e}function ls(e){}function wm(e,t){let r=[];for(let n of e)for(let l of t)r.push(l.rotate(n));return r}function Em(){return{4:[["F","D","L","R"]],6:[["F","D","L","U","R"],["R","F","","B",""]],8:[["F","D","L","R"],["D","F","BR",""],["BR","D","","BB"],["BB","BR","U","BL"]],12:[["U","F","","","",""],["F","U","R","C","A","L"],["R","F","","","E",""],["E","R","","BF","",""],["BF","E","BR","BL","I","D"]],20:[["R","C","F","E"],["F","R","L","U"],["L","F","A",""],["E","R","G","I"],["I","E","S","H"],["S","I","J","B"],["B","S","K","D"],["K","B","M","O"],["O","K","P","N"],["P","O","Q",""]]}}function km(){return{4:{F:"#00ff00",D:"#ffff00",L:"#ff0000",R:"#0000ff"},6:{U:"#ffffff",F:"#00ff00",R:"#ff0000",D:"#ffff00",B:"#0000ff",L:"#ff8000"},8:{U:"#ffffff",F:"#ff0000",R:"#00bb00",D:"#ffff00",BB:"#1122ff",L:"#9524c5",BL:"#ff8800",BR:"#aaaaaa"},12:{U:"#ffffff",F:"#006633",R:"#ff0000",C:"#ffffd0",A:"#3399ff",L:"#660099",E:"#ff66cc",BF:"#99ff00",BR:"#0000ff",BL:"#ffff00",I:"#ff6633",D:"#999999"},20:{R:"#db69f0",C:"#178fde",F:"#23238b",E:"#9cc726",L:"#2c212d",U:"#177fa7",A:"#e0de7f",G:"#2b57c0",I:"#41126b",S:"#4b8c28",H:"#7c098d",J:"#7fe7b4",B:"#85fb74",K:"#3f4bc3",D:"#0ff555",M:"#f1c2c8",O:"#58d340",P:"#c514f2",N:"#14494e",Q:"#8b1be1"}}}function _m(){return{4:["F","D","L","R"],6:["U","D","F","B","L","R"],8:["F","BB","D","U","BR","L","R","BL"],12:["L","E","F","BF","R","I","U","D","BR","A","BL","C"],20:["L","S","E","O","F","B","I","P","R","K","U","D","J","A","Q","H","G","N","M","C"]}}function zm(){return{4:[["FLR",[0,1,0]],["F",[0,0,1]]],6:[["U",[0,1,0]],["F",[0,0,1]]],8:[["U",[0,1,0]],["F",[0,0,1]]],12:[["U",[0,1,0]],["F",[0,0,1]]],20:[["GUQMJ",[0,1,0]],["F",[0,0,1]]]}}function Zo(e,t){for(let r=0;r<e.length;r++)if(e[r][0].dist(t)<_e)return r;throw new Error("Element not found")}function df(){return qo}function hf(e){return qo[e]}function Gl(e){let t=e.split(/ /).filter(Boolean);if(t.length%2==0)return null;let r=t[0];if(r!=="o"&&r!=="c"&&r!=="i"&&r!=="d"&&r!=="t")return null;let n=[];for(let l=1;l<t.length;l+=2){if(t[l]!=="f"&&t[l]!=="v"&&t[l]!=="e")return null;n.push({cutType:t[l],distance:parseFloat(t[l+1])})}return{shape:r,cuts:n}}function os(e,t={}){let r=Gl(e);if(r===null)throw new Error("Could not parse the puzzle description");let n=new $o(r,Object.assign({},{allMoves:!0},t));return n.allstickers(),n.genperms(),n}function Mn(e,t){return os(qo[e],t)}function Cm(e,t,r){let n=!1;r-t[1]<t[0]&&(e=[e[2],e[3],e[0],e[1]],t=[r-t[1],r-t[0]],n=!0);let l=e[0],o="";if(t[0]===0&&t[1]===r)l=l+"v";else if(t[0]===t[1])t[1]>0&&(o=String(t[1]+1));else if(t[0]===0)l=l.toLowerCase(),t[1]>1&&(o=String(t[1]+1));else throw\`We only support slice and outer block moves right now. \${t}\`;return[o+l,n]}function Pm(e,t){let r=[],n=0;for(;n<e.length;){n>0&&n<e.length&&e[n]==="_"&&n++;let l="";for(let o of t)e.substr(n).startsWith(o[1])&&o[1].length>l.length&&(l=o[1]);if(l!=="")r.push(l),n+=l.length;else throw new Error("Could not split "+e+" into face names.")}return r}function Xo(e,t){return[e.b/t,-e.c/t,e.d/t]}function is(e,t){let r=[],n=e.length;for(let l=0;l<n;l++){let o=Xo(e.get(n-l-1),t);r[3*l]=o[0],r[3*l+1]=o[1],r[3*l+2]=o[2]}return r}var Pn,Tl,_e,Sm,vm,$o,qr,Qo=U(()=>{Re();I2();ja();Va();jo();af();sf();Bf();Ho();rs();Pn=class{constructor(t){this.coords=new Array(t.length*3);for(let r=0;r<t.length;r++)this.coords[3*r]=t[r].b,this.coords[3*r+1]=t[r].c,this.coords[3*r+2]=t[r].d;this.length=t.length}get(t){return new I(0,this.coords[3*t],this.coords[3*t+1],this.coords[3*t+2])}centermass(){let t=0,r=0,n=0;for(let l=0;l<this.length;l++)t+=this.coords[3*l],r+=this.coords[3*l+1],n+=this.coords[3*l+2];return new I(0,t/this.length,r/this.length,n/this.length)}rotate(t){let r=[];for(let n=0;n<this.length;n++)r.push(this.get(n).rotatepoint(t));return new Pn(r)}rotateforward(){let t=[];for(let r=1;r<this.length;r++)t.push(this.get(r));return t.push(this.get(0)),new Pn(t)}},Tl=class{constructor(t,r,n){this.face=t;this.left=r;this.right=n}split(t){let r=t.cutface(this.face);return r!==null&&(this.left===void 0?(this.left=new Tl(r[0]),this.right=new Tl(r[1])):(this.left=this.left?.split(t),this.right=this.right?.split(t))),this}collect(t,r){return this.left===void 0?t.push(new Pn(this.face)):r?(this.left?.collect(t,!1),this.right?.collect(t,!0)):(this.right?.collect(t,!1),this.left?.collect(t,!0)),t}};_e=1e-9,Sm="PuzzleGeometry 0.1 Copyright 2018 Tomas Rokicki.",vm=!1;$o=class{constructor(t,r){this.puzzleDescription=t;this.cmovesbyslice=[];this.duplicatedFaces=[];this.duplicatedCubies=[];this.fixedCubie=-1;this.net=[];this.colors=[];this.faceorder=[];this.faceprecedence=[];this.notationMapper=new _n;this.addNotationMapper="";this.setReidOrder=!1;let n=ns("genperms");this.options=new qa(r),this.options.verbosity>0&&console.log(this.header("# ")),this.create(t),ls(n)}create(t){let{shape:r,cuts:n}=t;this.moveplanes=[],this.moveplanes2=[],this.faces=[],this.cubies=[];let l=null;switch(r){case"c":l=uf();break;case"o":l=mf();break;case"i":l=pf();break;case"t":l=gf();break;case"d":l=cf();break;default:throw new Error("Bad shape argument: "+r)}this.rotations=Lf(l),this.options.verbosity&&console.log("# Rotations: "+this.rotations.length);let o=l[0];this.baseplanerot=es(o,this.rotations);let i=this.baseplanerot.map(F=>o.rotateplane(F));this.baseplanes=i,this.baseFaceCount=i.length;let a=Em()[i.length];this.net=a,this.colors=km()[i.length],this.faceorder=_m()[i.length],this.options.verbosity>0&&console.log("# Base planes: "+i.length);let s=ts(i),f=new I(0,0,0,0);this.options.verbosity>0&&console.log("# Face vertices: "+s.length);let g=i[0].makenormal(),c=s[0].sum(s[1]).makenormal(),u=s[0].makenormal(),p=new I(1,g.b,g.c,g.d);this.options.verbosity>0&&console.log("# Boundary is "+p);let L=es(p,this.rotations).map(F=>p.rotateplane(F)),R=ts(L);this.edgedistance=R[0].sum(R[1]).smul(.5).dist(f),this.vertexdistance=R[0].dist(f);let h=[],y=[],A=!1,k=!1,E=!1;for(let F of n){let v=null,O=0;switch(F.cutType){case"f":v=g,O=1,A=!0;break;case"v":v=u,O=this.vertexdistance,E=!0;break;case"e":v=c,O=this.edgedistance,k=!0;break;default:throw new Error("Bad cut argument: "+F.cutType)}h.push(v.makecut(F.distance)),y.push(F.distance<O)}this.options.addRotations&&(A||h.push(g.makecut(10)),E||h.push(u.makecut(10)),k||h.push(c.makecut(10))),this.basefaces=[];for(let F of this.baseplanerot){let v=F.rotateface(R);this.basefaces.push(new Pn(v))}let Q=[],$=[],N=[],oe=[],b=R.length;function z(F,v,O){for(let K of F)if(K[0].dist(v)<_e){K.push(O);return}F.push([v,O])}for(let F=0;F<this.baseplanerot.length;F++){let v=this.baseplanerot[F].rotateface(R);for(let O=0;O<v.length;O++){let K=(O+1)%v.length,ie=v[O].sum(v[K]).smul(.5);z(oe,ie,F)}}let M=[];for(let F=0;F<this.baseplanerot.length;F++){let v=this.baseplanerot[F].rotateface(R),O=[];for(let K=0;K<v.length;K++){let ie=(K+1)%v.length,Je=v[K].sum(v[ie]).smul(.5),ct=oe[Zo(oe,Je)];if(F===ct[1])O.push(ct[2]);else if(F===ct[2])O.push(ct[1]);else throw new Error("Could not find edge")}M.push(O)}let w={},S=[];S.push(a[0][0]),w[a[0][0]]=0,S[M[0][0]]=a[0][1],w[a[0][1]]=M[0][0];for(let F of a){let v=F[0],O=w[v];if(O===void 0)throw new Error("Bad edge description; first edge not connected");let K=-1;for(let ie=0;ie<M[O].length;ie++){let Je=S[M[O][ie]];if(Je!==void 0&&Je===F[1]){K=ie;break}}if(K<0)throw new Error("First element of a net not known");for(let ie=2;ie<F.length;ie++){if(F[ie]==="")continue;let Je=M[O][(ie+K-1)%b],ct=S[Je];if(ct!==void 0&&ct!==F[ie])throw new Error("Face mismatch in net");S[Je]=F[ie],w[F[ie]]=Je}}for(let F=0;F<S.length;F++){let v=!1;for(let O=0;O<this.faceorder.length;O++)if(S[F]===this.faceorder[O]){this.faceprecedence[F]=O,v=!0;break}if(!v)throw new Error("Could not find face "+S[F]+" in face order list "+this.faceorder)}for(let F=0;F<this.baseplanerot.length;F++){let v=this.baseplanerot[F].rotateface(R),O=p.rotateplane(this.baseplanerot[F]),K=S[F];Q.push([v,K]),$.push([O,K])}for(let F=0;F<this.baseplanerot.length;F++){let v=this.baseplanerot[F].rotateface(R),O=S[F];for(let K=0;K<v.length;K++){let ie=(K+1)%v.length,Je=v[K].sum(v[ie]).smul(.5),ct=(K+2)%v.length,_p=v[ie].sum(v[ct]).smul(.5),zp=Zo(oe,Je),Cp=Zo(oe,_p);z(N,v[ie],[O,Cp,zp])}}this.swizzler=new Pl(Q.map(F=>F[1]));let C=this.swizzler.prefixFree?"":"_";for(let F=0;F<oe.length;F++){if(oe[F].length!==3)throw new Error("Bad length in edge names "+oe[F]);let v=S[oe[F][1]],O=S[oe[F][2]];this.faceprecedence[oe[F][1]]<this.faceprecedence[oe[F][2]]?v=v+C+O:v=O+C+v,oe[F]=[oe[F][0],v]}for(let F=0;F<N.length;F++){if(N[F].length<4)throw new Error("Bad length in vertex names");let v=1;for(let K=2;K<N[F].length;K++)this.faceprecedence[w[N[F][K][0]]]<this.faceprecedence[w[N[F][v][0]]]&&(v=K);let O="";for(let K=1;K<N[F].length;K++){K===1?O=N[F][v][0]:O=O+C+N[F][v][0];for(let ie=1;ie<N[F].length;ie++)if(N[F][v][1]===N[F][ie][2]){v=ie;break}}N[F]=[N[F][0],O]}this.options.verbosity>1&&(console.log("# Face precedence list: "+this.faceorder.join(" ")),console.log("# Face names: "+Q.map(F=>F[1]).join(" ")),console.log("# Edge names: "+oe.map(F=>F[1]).join(" ")),console.log("# Vertex names: "+N.map(F=>F[1]).join(" ")));let j=[];for(let F of $)j.push([F[0].makenormal(),F[1],"f"]);for(let F of oe)j.push([F[0].makenormal(),F[1],"e"]);for(let F of N)j.push([F[0].makenormal(),F[1],"v"]);this.facenames=Q,this.faceplanes=$,this.edgenames=oe,this.vertexnames=N,this.geonormals=j;let J=j.map(F=>F[1]);this.swizzler.setGripNames(J),this.options.verbosity>0&&console.log("# Distances: face "+1+" edge "+this.edgedistance+" vertex "+this.vertexdistance);for(let F=0;F<h.length;F++)for(let v of this.rotations){let O=h[F].rotateplane(v),K=!1;for(let ie of this.moveplanes)if(O.sameplane(ie)){K=!0;break}K||(this.moveplanes.push(O),y[F]&&this.moveplanes2.push(O))}let me=new Tl(R),he=this.moveplanes2.slice(),xe=31;for(let F=0;F<he.length;F++){let v=F+Math.floor((he.length-F)*(xe/65536));me=me.split(he[v]),he[v]=he[F],xe=(xe*1657+101)%65536}let ke=me.collect([],!0);this.faces=ke,this.options.verbosity>0&&console.log("# Faces is now "+ke.length),this.stickersperface=ke.length;let Pt=[],Ie=Vo(R);for(let F of this.rotations){let v=F.rotateface(R);Ie.dist(Vo(v))<_e&&Pt.push(F)}let ot=new Array(ke.length),Pe=[];for(let F=0;F<ke.length;F++){let v=ke[F].centermass();Pe.push([Ie.dist(v),v,F])}Pe.sort((F,v)=>F[0]-v[0]);for(let F=0;F<ke.length;F++){let v=Pe[F][2];if(!ot[v]){ot[v]=!0;for(let O of Pt){let K=ke[v].rotate(O),ie=K.centermass();for(let Je=F+1;Je<ke.length&&!(Pe[Je][0]-Pe[F][0]>_e);Je++){let ct=Pe[Je][2];if(!ot[ct]&&ie.dist(Pe[Je][1])<_e){ot[ct]=!0,ke[ct]=K;break}}}}}this.shortedge=1e99;for(let F of ke)for(let v=0;v<F.length;v++){let O=(v+1)%F.length,K=F.get(v).dist(F.get(O));K<this.shortedge&&(this.shortedge=K)}this.options.verbosity>0&&console.log("# Short edge is "+this.shortedge),r==="c"&&A&&!k&&!E&&(this.addNotationMapper="NxNxNCubeMapper",this.setReidOrder=!0),r==="c"&&E&&!A&&!k&&(this.addNotationMapper="SkewbMapper"),r==="t"&&(E||A)&&!k&&(this.addNotationMapper="PyraminxOrTetraminxMapper"),r==="o"&&A&&(this.notationMapper=new Ml(this.swizzler,new Pl(["F","D","L","BL","R","U","BR","B"])),!k&&!E&&(this.addNotationMapper="FTOMapper")),r==="d"&&A&&(this.addNotationMapper="MegaminxMapper",this.notationMapper=new Ml(this.swizzler,new Pl(["U","F","L","BL","BR","R","FR","FL","DL","B","DR","D"])))}keyface(t){return this.keyface2(t.centermass())}keyface2(t){let r="",n=String.fromCharCode;for(let l of this.moveplanesets)if(l.length>0){let o=t.dot(l[0]),i=0,a=1;for(;a*2<=l.length;)a*=2;for(;a>0;a>>=1)i+a<=l.length&&o>l[i+a-1].a&&(i+=a);if(i<47)r=r+n(33+i);else if(i<47+47*47)r=r+n(33+47+Math.floor(i/47)-1)+n(33+i%47);else if(i<47+47*47+47*47*47)r=r+n(33+47+Math.floor((i-47)/(47*47)-1))+n(33+47+Math.floor((i-47)/47)%47)+n(33+i%47);else throw Error("Too many slices for cubie encoding")}return r}keyface3(t){let r=t.centermass(),n=[];for(let l of this.moveplanesets)if(l.length>0){let o=r.dot(l[0]),i=0,a=1;for(;a*2<=l.length;)a*=2;for(;a>0;a>>=1)i+a<=l.length&&o>l[i+a-1].a&&(i+=a);n.push(i)}return n}findface(t){let r=this.keyface2(t),n=this.facelisthash.get(r);if(n.length===1)return n[0];for(let l=0;l+1<n.length;l++){let o=this.facelisthash.get(r)[l];if(Math.abs(t.dist(this.facecentermass[o]))<_e)return o}return n[n.length-1]}project2d(t,r,n){let l=this.facenames[t][0],o=(r+1)%l.length,i=this.baseplanes[t],a=l[o].sub(l[r]),s=a.len();a=a.normalize();let f=a.cross(i).normalize(),g=n[1].sub(n[0]),c=g.len()/s;g=g.normalize();let u=g.b,p=g.c,m=a.smul(u).sub(f.smul(p)).smul(c),L=f.smul(u).sum(a.smul(p)).smul(c),R=new I(0,n[0].b-m.dot(l[r]),n[0].c-L.dot(l[r]),0);return[m,L,R]}allstickers(){let t=ns("allstickers");this.faces=wm(this.baseplanerot,this.faces),this.options.verbosity>0&&console.log("# Total stickers is now "+this.faces.length),this.facecentermass=new Array(this.faces.length);for(let b=0;b<this.faces.length;b++)this.facecentermass[b]=this.faces[b].centermass();let r=[],n=[];for(let b of this.moveplanes){let z=b.makenormal(),M=!1;for(let w of n)z.sameplane(w.makenormal())&&(M=!0);M||(n.push(z),r.push([]))}for(let b of this.moveplanes2){let z=b.makenormal();for(let M=0;M<n.length;M++)if(z.sameplane(n[M])){r[M].push(b);break}}for(let b=0;b<r.length;b++){let z=r[b].map(w=>w.normalizeplane()),M=n[b];for(let w=0;w<z.length;w++)z[w].makenormal().dist(M)>_e&&(z[w]=z[w].smul(-1));z.sort((w,S)=>w.a-S.a),r[b]=z}this.moveplanesets=r,this.moveplanenormals=n;let l=r.map(b=>b.length);this.options.verbosity>0&&console.log("# Move plane sets: "+l);let o=[];for(let b=0;b<r.length;b++)o.push([]);for(let b of this.rotations){if(Math.abs(Math.abs(b.a)-1)<_e)continue;let z=b.makenormal();for(let M=0;M<r.length;M++)if(z.sameplane(n[M])){o[M].push(b);break}}this.moverotations=o;for(let b=0;b<o.length;b++){let z=o[b],M=z[0].makenormal();for(let w=0;w<z.length;w++)M.dist(z[w].makenormal())>_e&&(z[w]=z[w].smul(-1));z.sort((w,S)=>w.angle()-S.angle()),o[b][0].dot(n[b])<0&&z.reverse()}let i=o.map(b=>1+b.length);this.movesetorders=i;let a=[],s="?";for(let b=0;b<r.length;b++){let z=n[b],M=null,w=null;for(let S of this.geonormals){let C=z.dot(S[0]);Math.abs(C-1)<_e?(w=[S[1],S[2]],s=S[2]):Math.abs(C+1)<_e&&(M=[S[1],S[2]],s=S[2])}if(w===null||M===null)throw new Error("Saw positive or negative sides as null");a.push([w[0],w[1],M[0],M[1],1+r[b].length]),this.addNotationMapper==="NxNxNCubeMapper"&&s==="f"&&(this.notationMapper=new Io(1+r[b].length),this.addNotationMapper=""),this.addNotationMapper==="SkewbMapper"&&r[0].length===1&&(this.notationMapper=new Ko(this.swizzler),this.addNotationMapper=""),this.addNotationMapper==="PyraminxOrTetraminxMapper"&&(r[0].length===2&&r[0][0].a===.333333333333333&&r[0][1].a===1.66666666666667?(this.notationMapper=new Nl(this.swizzler),this.addNotationMapper=""):(this.notationMapper=new Wo(this.swizzler),this.addNotationMapper="")),this.addNotationMapper==="MegaminxMapper"&&s==="f"&&(1+r[b].length===3&&(this.notationMapper=new To(this.notationMapper)),this.addNotationMapper=""),this.addNotationMapper==="FTOMapper"&&s==="f"&&(1+r[b].length===3&&(this.notationMapper=new Oo(this.notationMapper,this.swizzler)),this.addNotationMapper="")}this.movesetgeos=a;let f=new Map,g=this.faces;for(let b=0;b<g.length;b++){let z=g[b],M=this.keyface(z);if(!f.get(M))f.set(M,[b]);else{let w=f.get(M);if(w.push(b),w.length===this.baseFaceCount){this.options.verbosity>0&&console.log("# Splitting core.");for(let S=0;S<w.length;S++){let C=M+" "+S;f.set(C,[w[S]])}}}}this.facelisthash=f,this.options.verbosity>0&&console.log("# Cubies: "+f.size);let c=[],u=[],p=[];for(let b of f.values())if(b.length!==this.baseFaceCount){if(b.length>1){let z=b.map(C=>g[C].centermass()),M=Vo(z);for(let C=0;b.length>2;C++){let j=!1;for(let J=0;J<b.length;J++){let me=(J+1)%b.length;if(M.dot(z[J].cross(z[me]))<0){let he=z[J];z[J]=z[me],z[me]=he;let xe=b[J];b[J]=b[me],b[me]=xe,j=!0}}if(!j)break;if(C>1e3)throw new Error("Bad epsilon math; too close to border")}let w=0,S=b[w];for(let C=1;C<b.length;C++){let j=b[C];this.faceprecedence[this.getfaceindex(j)]<this.faceprecedence[this.getfaceindex(S)]&&(w=C,S=j)}if(w!==0){let C=b.slice();for(let j=0;j<b.length;j++)b[j]=C[(w+j)%b.length]}}for(let z=0;z<b.length;z++){let M=b[z];u[M]=c.length,p[M]=z}c.push(b)}this.cubies=c,this.facetocubie=u,this.facetoord=p;let m=["?","CENTERS","EDGES","CORNERS","C4RNER","C5RNER"],L=[],R=[0,0,0,0,0,0],h=[],y=[],A=0,k=[],E=[],Q=[],$=[],N=b=>c[b].map(z=>this.getfaceindex(z)).join(" "),oe=[];for(let b=0;b<c.length;b++){if(y[b])continue;let z=c[b];if(z.length===0)continue;let M={},w=0;Q.push(0),oe.push([]);let S=z.length,C=R[S]++,j=m[S];(j===void 0||S===this.baseFaceCount)&&(j="CORE"),j=j+(C===0?"":C+1),L[A]=j,h[A]=S;let J=[b],me=0;for(y[b]=!0;me<J.length;){let he=J[me++],xe=N(he);if((z.length>1||M[xe]===void 0)&&(M[xe]=w++),$[he]=M[xe],k[he]=A,oe[A].push(he),E[he]=Q[A]++,J.length<this.rotations.length){let ke=this.facecentermass[c[he][0]];for(let Pt of o){let Ie=this.facetocubie[this.findface(ke.rotatepoint(Pt[0]))];y[Ie]||(J.push(Ie),y[Ie]=!0)}}}A++}if(this.setReidOrder&&4<=this.stickersperface&&this.stickersperface<=9){let b=[["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],["UFR","URB","UBL","ULF","DRF","DFL","DLB","DBR"],["U","L","F","R","B","D"]],z={};for(let M of b)for(let w=0;w<M.length;w++){let S=0;for(let C=0;C<M[w].length;C++)S|=1<<M[w].charCodeAt(C)-65;z[S]=w}for(let M of oe)for(let w of M){let S=0;for(let C of c[w])S|=1<<this.facenames[this.getfaceindex(C)][1].charCodeAt(0)-65;E[w]=z[S]}}if(this.cubiesetnums=k,this.cubieordnums=E,this.cubiesetnames=L,this.cubieords=Q,this.orbitoris=h,this.cubievaluemap=$,this.cubiesetcubies=oe,this.options.fixedPieceType!==null){for(let b=0;b<c.length;b++)if(this.options.fixedPieceType==="v"&&c[b].length>2||this.options.fixedPieceType==="e"&&c[b].length===2||this.options.fixedPieceType==="f"&&c[b].length===1){this.fixedCubie=b;break}if(this.fixedCubie<0)throw new Error("Could not find a cubie of type "+this.options.fixedPieceType+" to fix.")}this.options.verbosity>0&&console.log("# Cubie orbit sizes "+Q),ls(t)}unswizzle(t){let r=this.notationMapper.notationToInternal(t);return r===null?"":this.swizzler.unswizzle(r.family)}stringToBlockMove(t){let r=RegExp("^(([0-9]+)-)?([0-9]+)?([^0-9]+)([0-9]+'?)?$"),n=t.match(r);if(n===null)throw new Error("Bad move passed "+t);let l=n[4],o,i;if(n[2]!==void 0){if(n[3]===void 0)throw new Error("Missing second number in range");o=parseInt(n[2],10)}n[3]!==void 0&&(i=parseInt(n[3],10));let a="1",s=1;return n[5]!==void 0&&(a=n[5],a[0]==="'"&&(a="-"+a.substring(1)),s=parseInt(a,10)),new B(new P(l,i,o),s)}parseMove(t){let r=this.notationMapper.notationToInternal(t);if(r===null)throw new Error("Bad move "+t.family);t=r;let n=t.family,l=!1;if(n.endsWith("v")&&n[0]<="Z"){if(t.innerLayer!==void 0||t.outerLayer!==void 0)throw new Error("Cannot use a prefix with full cube rotations");n=n.slice(0,-1),l=!0}n.endsWith("w")&&n[0]<="Z"&&(n=n.slice(0,-1).toLowerCase());let o,i=-1,a=this.swizzler.unswizzle(n),s=!1;for(let c=0;c<this.movesetgeos.length;c++){let u=this.movesetgeos[c];a===u[0]&&(s=!0,o=u,i=c),a===u[2]&&(s=!1,o=u,i=c)}let f=1,g=1;if(n.toUpperCase()!==n&&(g=2),o===void 0)throw new Error("Bad grip in move "+t.family);if(t.outerLayer!==void 0&&(f=t.outerLayer),t.innerLayer!==void 0&&(t.outerLayer===void 0?(g=t.innerLayer,n<="Z"?f=g:f=1):g=t.innerLayer),f--,g--,l&&(f=0,g=this.moveplanesets[i].length),f<0||f>this.moveplanesets[i].length||g<0||g>this.moveplanesets[i].length)throw new Error("Bad slice spec "+f+" "+g+" vs "+this.moveplanesets[i].length);if(!vm&&f===0&&g===this.moveplanesets[i].length&&!l)throw new Error("! full puzzle rotations must be specified with v suffix.");return[void 0,i,f,g,s,t.amount]}parsemove(t){let r=this.parseMove(this.stringToBlockMove(t));return r[0]=t,r}genperms(){let t=ns("genperms");if(this.cmovesbyslice.length>0)return;let r=[];if(this.options.orientCenters){for(let n=0;n<this.cubies.length;n++)if(this.cubies[n].length===1){let l=this.cubies[n][0],o=this.getfaceindex(l);if(this.basefaces[o].centermass().dist(this.facecentermass[l])<_e){let i=this.basefaces[o].length;for(let a=1;a<i;a++)this.cubies[n].push(this.cubies[n][a-1]);this.duplicatedFaces[l]=i,this.duplicatedCubies[n]=i,this.orbitoris[this.cubiesetnums[n]]=i}}}for(let n=0;n<this.moveplanesets.length;n++){let l=this.moveplanesets[n],o=[],i=[l.length+1,0],a=1;for(;a*2<=l.length;)a*=2;for(let g=0;g<this.faces.length;g++){let c=0;if(l.length>0){let u=this.facecentermass[g].dot(l[0]);for(let p=a;p>0;p>>=1)c+p<=l.length&&u>l[c+p-1].a&&(c+=p);c=l.length-c}for(o.push(c);i.length<=c;)i.push(0);i[c]++}let s=new Array(i.length);for(let g=0;g<i.length;g++)s[g]=[];let f=[];for(let g=0;g<this.faces.length;g++){if(o[g]<0)continue;let c=[this.facetocubie[g],this.facetoord[g]],u=this.facecentermass[g],p=u,m=g,L=o[m];for(;;){o[m]=-1;let R=u.rotatepoint(this.moverotations[n][0]);if(R.dist(p)<_e)break;m=this.findface(R),c.push(this.facetocubie[m],this.facetoord[m]),u=R}if(c.length>2&&this.options.orientCenters&&(this.cubies[c[0]].length===1||this.duplicatedCubies[c[0]]>1)&&this.facecentermass[g].dist(this.basefaces[this.getfaceindex(g)].centermass())<_e){let R=this.faces[this.cubies[c[0]][0]];for(let h=0;h<c.length;h+=2){let y=this.faces[this.cubies[c[h]][0]],A=-1;for(let k=0;k<R.length;k++)if(y.get(k).dist(R.get(0))<_e){A=k;break}if(A<0)throw new Error("Couldn't find rotation of center faces; ignoring for now.");c[h+1]=A,R=R.rotate(this.moverotations[n][0])}}if(c.length===2&&this.options.orientCenters)for(let R=1;R<this.movesetorders[n];R++)L===0?c.push(c[0],R):c.push(c[0],(this.movesetorders[n]-R)%this.movesetorders[n]);if(c.length>2&&!f[c[0]]){if(c.length!==2*this.movesetorders[n])throw new Error("Bad length in perm gen");for(let R of c)s[L].push(R)}for(let R=0;R<c.length;R+=2)f[c[R]]=!0}for(let g=0;g<s.length;g++)s[g]=s[g].slice();r.push(s)}if(this.cmovesbyslice=r,this.options.moveList){let n=[];for(let l of this.options.moveList)n.push(this.parsemove(l));this.parsedmovelist=n}this.facelisthash.clear(),this.facecentermass=[],ls(t)}getboundarygeometry(){return{baseplanes:this.baseplanes,facenames:this.facenames,faceplanes:this.faceplanes,vertexnames:this.vertexnames,edgenames:this.edgenames,geonormals:this.geonormals}}getmovesets(t){let r=this.moveplanesets[t].length,n=[];if(this.parsedmovelist!==void 0)for(let l of this.parsedmovelist)l[1]===t&&(l[4]?n.push([l[2],l[3]]):n.push([r-l[3],r-l[2]]),n.push(l[5]));else if(this.options.vertexMoves&&!this.options.allMoves){let l=this.movesetgeos[t];if(l[1]!==l[3])for(let o=0;o<r;o++)l[1]!=="v"?(this.options.outerBlockMoves?n.push([o+1,r]):n.push([o+1]),n.push(1)):(this.options.outerBlockMoves?n.push([0,o]):n.push([o,o]),n.push(1))}else for(let l=0;l<=r;l++)!this.options.allMoves&&l+l===r||(this.options.outerBlockMoves?l+l>r?n.push([l,r]):n.push([0,l]):n.push([l,l]),n.push(1));if(this.fixedCubie>=0){let l=this.keyface3(this.faces[this.cubies[this.fixedCubie][0]])[t],o=[];for(let i=0;i<n.length;i+=2){let a=n[i];if(l>=a[0]&&l<=a[1])if(a[0]===0)a=[a[1]+1,r];else if(r===a[1])a=[0,a[0]-1];else throw Error("fixed cubie option would disconnect move");let s=!1;for(let f=0;f<o.length;f+=2)if(o[f][0]===a[0]&&o[f][1]===a[1]&&o[f+1]===n[i+1]){s=!0;break}s||(o.push(a),o.push(n[i+1]))}n=o}return n}graybyori(t){let r=this.cubies[t].length;return this.duplicatedCubies[t]&&(r=1),r===1&&(this.options.grayCenters||!this.options.includeCenterOrbits)||r===2&&(this.options.grayEdges||!this.options.includeEdgeOrbits)||r>2&&(this.options.grayCorners||!this.options.includeCornerOrbits)}skipbyori(t){let r=this.cubies[t].length;return this.duplicatedCubies[t]&&(r=1),r===1&&!this.options.includeCenterOrbits||r===2&&!this.options.includeEdgeOrbits||r>2&&!this.options.includeCornerOrbits}skipcubie(t){return this.skipbyori(t)}header(t){return t+Sm+\`
\`+t+\`
\`}writegap(){let t=this.getOrbitsDef(!1),r=[],n=[];for(let o=0;o<t.moveops.length;o++){let i="M_"+Za(this.notationMapper,t.movenames[o]),a=!1;i[i.length-1]==="'"&&(i=i.substring(0,i.length-1),a=!0),n.push(i),a?r.push(i+":="+t.moveops[o].toPerm().inv().toGap()+";"):r.push(i+":="+t.moveops[o].toPerm().toGap()+";")}r.push("Gen:=["),r.push(n.join(",")),r.push("];");let l=t.solved.identicalPieces();return r.push("ip:=["+l.map(o=>"["+o.map(i=>i+1).join(",")+"]").join(",")+"];"),r.push("# Size(Group(Gen));"),r.push("# Size(Stabilizer(Group(Gen), ip, OnTuplesSets));"),r.push(""),this.header("# ")+r.join(\`
\`)}writeksolve(t="PuzzleGeometryPuzzle"){let r=this.getOrbitsDef(!1);return this.header("# ")+r.toKsolve(t,this.notationMapper).join(\`
\`)}getKPuzzleDefinition(t=!0,r=!0){let l=this.getOrbitsDef(t,r).toKPuzzleDefinition(r);if(l.experimentalPuzzleDescription=this.puzzleDescription,!l)throw new Error("Missing definition!");return l}getMoveFromBits(t,r,n,l,o,i){let a=[],s=[],f=[];for(let u of this.cubieords)s.push(Gt(u)),f.push(mr(u));for(let u=t[0];u<=t[1];u++){let p=l[u];for(let m=0;m<p.length;m+=2*i){let L=p.slice(m,m+2*i),R=this.cubiesetnums[L[0]];for(let A=0;A<L.length;A+=2)L[A]=this.cubieordnums[L[A]];let h=2,y=3;n&&(h=L.length-2,y=L.length-1),s[R]===Gt(this.cubieords[R])&&(s[R]=s[R].slice(),this.orbitoris[R]>1&&!this.options.fixedOrientation&&(f[R]=f[R].slice()));for(let A=0;A<L.length;A+=2)s[R][L[(A+h)%L.length]]=L[A],this.orbitoris[R]>1&&!this.options.fixedOrientation&&(f[R][L[A]]=(L[(A+y)%L.length]-L[(A+1)%L.length]+2*this.orbitoris[R])%this.orbitoris[R])}}let g=new Zt(Gt(24),mr(24),1);for(let u=0;u<this.cubiesetnames.length;u++)if(!(o&&!o[u]))if(this.orbitoris[u]===1||this.options.fixedOrientation)s[u]===Gt(g.perm.length)?(s[u]!==g.perm&&(g=new Zt(s[u],f[u],1)),a.push(g)):a.push(new Zt(s[u],f[u],1));else{let p=new Array(f[u].length);for(let m=0;m<s[u].length;m++)p[m]=f[u][s[u][m]];a.push(new Zt(s[u],p,this.orbitoris[u]))}let c=new Lr(a);return r!==1&&(c=c.mulScalar(r)),c}omitSet(t){for(let r of this.options.excludeOrbits)if(r===t)return!0;return!1}diffmvsets(t,r,n,l){for(let o=0;o<t.length;o+=2){let i=!1;for(let a=0;!i&&a<r.length;a+=2)l?t[o][0]+r[a][1]===n&&t[o][1]+r[a][0]===n&&t[o+1]===r[a+1]&&(i=!0):t[o][0]===r[a][0]&&t[o][1]===r[a][1]&&t[o+1]===r[a+1]&&(i=!0);if(!i)return!0}return!1}getOrbitsDef(t,r=!0){let n=[];if(t)for(let u=0;u<this.cubiesetnames.length;u++)n.push(1);let l=[],o=[],i=[],a=[];for(let u=0;u<this.moveplanesets.length;u++){let p=this.getmovesets(u);i.push(p),this.options.addRotations?a.push(1):a.push(0)}if(this.options.moveList&&this.options.addRotations){for(let u=0;u<this.moverotations.length;u++)a[u]=0;for(let u=0;u<this.moveplanesets.length;u++)for(let p=0;p<this.moverotations.length;p++){let m=this.moveplanenormals[u];for(let L=1;L*2<=this.movesetorders[p];L++){if(m=m.rotatepoint(this.moverotations[p][0]),a[p]&L)continue;let R=-1,h=!1;for(let A=0;A<this.moveplanenormals.length;A++)if(m.dist(this.moveplanenormals[A])<_e){R=A;break}else if(m.dist(this.moveplanenormals[A].smul(-1))<_e){R=A,h=!0;break}if(R<0)throw new Error("Could not find rotation");let y=i[R];(y.length!==i[u].length||this.moveplanesets[u].length!==this.moveplanesets[R].length||this.diffmvsets(y,i[u],this.moveplanesets[R].length,h))&&(a[p]|=L)}}for(let u=0;u<this.moverotations.length;u++)if(a[u]===0)a[u]=1;else if(a[u]===1)this.movesetorders[u]>3?a[u]=2:a[u]=0;else if(a[u]===3)a[u]=0;else throw new Error("Impossible addrot val")}for(let u=0;u<this.moveplanesets.length;u++)a[u]!==0&&(i[u].push([0,this.moveplanesets[u].length]),i[u].push(a[u]));for(let u=0;u<this.moveplanesets.length;u++){let p=i[u],m=this.movesetorders[u];for(let h=0;h<p.length;h+=2)for(let y=0;y<h;y+=2)if(p[h]===p[y]&&p[h+1]===p[y+1])throw new Error("Redundant moves in moveset.");let L=[];for(let h=0;h<p.length;h+=2)for(let y=p[h][0];y<=p[h][1];y++)L[y]=1;let R=this.cmovesbyslice[u];for(let h=0;h<R.length;h++){if(L[h]!==1)continue;let y=R[h];for(let A=0;A<y.length;A+=2*m){if(this.skipcubie(y[A]))continue;let k=this.cubiesetnums[y[A]];n[k]=1}}}for(let u=0;u<this.cubiesetnames.length;u++)if(!!n[u]){if(this.omitSet(this.cubiesetnames[u])){n[u]=0;continue}l.push(this.cubiesetnames[u]),o.push(new Ol(this.cubieords[u],this.options.fixedOrientation?1:this.orbitoris[u]))}let s=[];for(let u=0;u<this.cubiesetnames.length;u++){if(!n[u]||this.omitSet(this.cubiesetnames[u]))continue;let p=[],m=[];for(let L=0;L<this.cubieords[u];L++){if(t)p.push(L);else{let R=this.cubiesetcubies[u][L];p.push(this.cubievaluemap[R])}m.push(0)}s.push(new Zt(p,m,this.options.fixedOrientation?1:this.orbitoris[u]))}let f=[],g=[];if(r)for(let u=0;u<this.moveplanesets.length;u++){let m=this.moveplanesets[u].length,L=i[u],R=this.movesetgeos[u];for(let h=0;h<L.length;h+=2){let y=L[h],A=Cm(R,y,m),k=A[0],E=A[1];L[h+1]===1?f.push(k):f.push(k+L[h+1]);let Q=this.getMoveFromBits(y,L[h+1],E,this.cmovesbyslice[u],n,this.movesetorders[u]);g.push(Q)}}let c=new zn(l,o,new Cn(s),f,g);return this.options.optimizeOrbits&&(c=c.optimize()),this.options.scrambleAmount!==0&&c.scramble(this.options.scrambleAmount),c}getScramble(t=0){let r=this.getOrbitsDef(!1);return r.transformToKTransformationData(r.getScrambleTransformation(t))}getMovesAsPerms(){return this.getOrbitsDef(!1).moveops.map(t=>t.toPerm())}showcanon(t){of(this.getOrbitsDef(!1),t)}getsolved(){let t=[];for(let r=0;r<this.baseFaceCount;r++)for(let n=0;n<this.stickersperface;n++)t.push(r);return new Bt(t)}getOrientationRotation(t){let[r,[n,l,o]]=t[0],i=new I(0,n,-l,o),[a,[s,f,g]]=t[1],c=new I(0,s,-f,g),u=null,p=null,m=this.swizzler.unswizzle(r),L=this.swizzler.unswizzle(a);for(let A of this.geonormals)m===A[1]&&(u=A[0]),L===A[1]&&(p=A[0]);if(!u)throw new Error("Could not find feature "+r);if(!p)throw new Error("Could not find feature "+a);let R=u.pointrotation(i);return p.rotatepoint(R).unproject(i).pointrotation(c.unproject(i)).mul(R)}getInitial3DRotation(){let t=this.baseFaceCount,r=null;if(this.options.puzzleOrientation?r=this.options.puzzleOrientation:this.options.puzzleOrientations&&(r=this.options.puzzleOrientations[t]),r||(r=zm()[t]),!r)throw new Error("No default orientation?");return this.getOrientationRotation(r)}generate2dmapping(t=800,r=500,n=10,l=!1,o=.92){t-=2*n,r-=2*n;function i(w,S){let C=w[1][0]-w[0][0],j=w[1][1]-w[0][1],J=2*Math.PI/S,me=Math.cos(J),he=Math.sin(J);for(let xe=2;xe<S;xe++){let ke=C*me+j*he;j=j*me-C*he,C=ke,w.push([w[xe-1][0]+C,w[xe-1][1]+j])}}this.genperms();let f=this.getboundarygeometry().facenames[0][0].length,g=this.net;if(g===null)throw new Error("No net?");let c={},u=0,p=0,m=1,L=0;c[g[0][0]]=[[1,0],[0,0]],i(c[g[0][0]],f);for(let w of g){let S=w[0];if(!c[S])throw new Error("Bad edge description; first edge not connected.");for(let C=1;C<w.length;C++){let j=w[C];j===""||c[j]||(c[j]=[c[S][C%f],c[S][(C+f-1)%f]],i(c[j],f))}}for(let w in c){let S=c[w];for(let C of S)u=Math.min(u,C[0]),m=Math.max(m,C[0]),p=Math.min(p,C[1]),L=Math.max(L,C[1])}let R=Math.min(t/(m-u),r/(L-p)),h=.5*(t-R*(m+u)),y=.5*(r-R*(L+p)),A={},k=this.getboundarygeometry(),E={},Q=[[R+h,y],[h,y]];E[g[0][0]]=Q,i(E[g[0][0]],f),A[this.facenames[0][1]]=this.project2d(0,0,[new I(0,Q[0][0],Q[0][1],0),new I(0,Q[1][0],Q[1][1],0)]);let $=[];$[0]=0;for(let w of g){let S=w[0];if(!E[S])throw new Error("Bad edge description; first edge not connected.");let C=-1;for(let J=0;J<k.facenames.length;J++)if(S===k.facenames[J][1]){C=J;break}if(C<0)throw new Error("Could not find first face name "+S);let j=k.facenames[C][0];for(let J=1;J<w.length;J++){let me=w[J];if(me===""||E[me])continue;E[me]=[E[S][J%f],E[S][(J+f-1)%f]],i(E[me],f);let he=$[C],xe=j[(he+J)%f].sum(j[(he+J+f-1)%f]).smul(.5),ke=Zo(k.edgenames,xe),Pt=k.edgenames[ke][1],Ie=Pm(Pt,this.facenames),ot=Ie[S===Ie[0]?1:0],Pe=-1;for(let v=0;v<k.facenames.length;v++)if(ot===k.facenames[v][1]){Pe=v;break}if(Pe<0)throw new Error("Could not find second face name");let F=k.facenames[Pe][0];for(let v=0;v<F.length;v++)if(F[v].sum(F[(v+1)%f]).smul(.5).dist(xe)<=_e){let K=E[S][(J+f-1)%f],ie=E[S][J%f];$[Pe]=v,A[ot]=this.project2d(Pe,v,[new I(0,ie[0],ie[1],0),new I(0,K[0],K[1],0)]);break}}}let N=0,oe=0,b=this.getInitial3DRotation();for(let w of this.faces){l&&(w=w.rotate(b));for(let S=0;S<w.length;S++)N=Math.max(N,Math.abs(w.get(S).b)),oe=Math.max(oe,Math.abs(w.get(S).c))}let z=Math.min(r/oe/2,(t-n)/N/4);return(w,S)=>{if(l){S=S.rotatepoint(b);let C=.5*n+.25*t,j=this.baseplanes[w].rotateplane(b).d<0?1:-1;return[n+t*.5+j*(C-S.b*z),n+r*.5+S.c*z]}else{let C=A[this.facenames[w][1]];return[n+o*S.dot(C[0])+C[2].b,n+r-o*S.dot(C[1])-C[2].c]}}}generatesvg(t=800,r=500,n=10,l=!1){let o=this.generate2dmapping(t,r,n,l);function i(u,p,m){return'<polygon id="'+u+'" class="sticker" style="fill: '+m+'" points="'+p.map(L=>L[0]+" "+L[1]).join(" ")+\`"/>
\`}let a=this.getsolved(),s=[],f=[];for(let u=0;u<this.baseFaceCount;u++)s[u]=this.colors[this.facenames[u][1]];for(let u=0;u<this.faces.length;u++){let p=this.faces[u],m=Math.floor(u/this.stickersperface),L=[];for(let R=0;R<p.length;R++)L.push(o(m,p.get(R)));f.push(L)}let g=[];for(let u=0;u<this.baseFaceCount;u++){g.push("<g>"),g.push("<title>"+this.facenames[u][1]+\`</title>
\`);for(let p=0;p<this.stickersperface;p++){let m=u*this.stickersperface+p,L=this.facetocubie[m],R=this.facetoord[m],h=this.cubiesetnums[L],y=this.cubieordnums[L],A=this.graybyori(L)?"#808080":s[a.p[m]],k=this.cubiesetnames[h]+"-l"+y+"-o"+R;if(g.push(i(k,f[m],A)),this.duplicatedFaces[m])for(let E=1;E<this.duplicatedFaces[m];E++)k=this.cubiesetnames[h]+"-l"+y+"-o"+E,g.push(i(k,f[m],A))}g.push("</g>")}return\`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
\`+g.join("")+"</svg>"}get3d(t){let r=[],n=this.getInitial3DRotation(),l=[],o=.52*this.basefaces[0].get(0).len();for(let f=0;f<this.basefaces.length;f++){let g=this.basefaces[f].rotate(n),c=this.facenames[f][1];l.push({coords:is(g,o),name:c})}for(let f=0;f<this.faces.length;f++){let g=Math.floor(f/this.stickersperface),c=this.facetocubie[f],u=this.facetoord[f],p=this.cubiesetnums[c],m=this.cubieordnums[c],L=this.graybyori(c)?"#808080":this.colors[this.facenames[g][1]];t?.stickerColors&&(L=t.stickerColors[f]);let R=this.faces[f].rotate(n);r.push({coords:is(R,o),color:L,orbit:this.cubiesetnames[p],ord:m,ori:u,face:g});let h=R;if(this.duplicatedFaces[f]){let y=h.length/this.duplicatedFaces[f];for(let A=1;A<this.duplicatedFaces[f];A++){for(let k=0;k<y;k++)h=h.rotateforward();r.push({coords:is(h,o),color:L,orbit:this.cubiesetnames[p],ord:m,ori:A,face:g,isDup:!0})}}}let i=[];for(let f=0;f<this.movesetgeos.length;f++){let g=this.movesetgeos[f],c=this.movesetorders[f];for(let u of this.geonormals)g[0]===u[1]&&g[1]===u[2]&&(i.push({coordinates:Xo(u[0].rotatepoint(n),1),quantumMove:new B(g[0]),order:c}),i.push({coordinates:Xo(u[0].rotatepoint(n).smul(-1),1),quantumMove:new B(g[2]),order:c}))}let a=this.generate2dmapping(2880,2160,0,!1,1),s=function(){let f=n.invrot();return function(g,c){let u=new I(0,c[0]*o,-c[1]*o,c[2]*o);u=u.rotatepoint(f);let p=a(g,u);return p[0]/=2880,p[1]=1-p[1]/2160,p}}().bind(this);return{stickers:r,faces:l,axis:i,unswizzle:this.unswizzle.bind(this),notationMapper:this.notationMapper,textureMapper:{getuv:s}}}getGeoNormal(t){let r=this.getInitial3DRotation(),n=this.swizzler.unswizzle(t);for(let l of this.geonormals)if(n===l[1]){let o=Xo(l[0].rotatepoint(r),1);return Math.abs(o[0])<_e&&Math.abs(o[2])<_e&&(o[0]=0,o[2]=1e-6),o}}getfaceindex(t){let r=this.stickersperface;return Math.floor(t/r)}textForTwizzleExplorer(){return\`Faces \${this.baseplanerot.length}
Stickers per face \${this.stickersperface}
Short edge \${this.shortedge}
Cubies \${this.cubies.length}
Edge distance \${this.edgedistance}
Vertex distance \${this.vertexdistance}\`}writeSchreierSims(t){let n=this.getOrbitsDef(!1).reassemblySize();t(\`Reassembly size is \${n}\`);let l=Jo(this.getMovesAsPerms(),t),o=n/l;t(\`Ratio is \${o}\`)}},qr=class{constructor(t,r){this.pg=t;this.orbitNames=r.orbitnames}lookupMove(t){let r=this.pg.parseMove(t);if(this.pg.parsedmovelist){let i=!1;for(let a of this.pg.parsedmovelist)a[1]===r[1]&&a[2]===r[2]&&a[3]===r[3]&&a[4]===r[4]&&(i=!0);if(!i)return null}let n=[r[2],r[3]];if(!r[4]){let i=this.pg.moveplanesets[r[1]].length;n=[i-r[3],i-r[2]]}let l=this.pg.getMoveFromBits(n,r[5],!r[4],this.pg.cmovesbyslice[r[1]],void 0,this.pg.movesetorders[r[1]]);return zn.transformToKTransformationData(this.orbitNames,l)}}});var ei={};Be(ei,{ExperimentalPGNotation:()=>qr,PuzzleGeometry:()=>$o,Quat:()=>I,getPG3DNamedPuzzles:()=>df,getPuzzleDescriptionString:()=>hf,getPuzzleGeometryByDesc:()=>os,getPuzzleGeometryByName:()=>Mn,parseOptions:()=>rf,parsePuzzleDescription:()=>Gl,schreierSims:()=>Jo});var Nn=U(()=>{Qo();Va();Ho();rs();Qo()});async function Vr(e){return(await Promise.resolve().then(()=>(Nn(),ei))).getPuzzleGeometryByName(e,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function Mm(e,t){let r=await e,n=r.getKPuzzleDefinition(!0);n.name=t;let l=await Promise.resolve().then(()=>(Nn(),ei)),o=new l.ExperimentalPGNotation(r,r.getOrbitsDef(!0));return new we(n,{experimentalPGNotation:o})}var ti,ri,ni,Rt,Hr,Br=U(()=>{Ve();kn();Jt();Rt=class{constructor(t){le(this,ti,void 0);le(this,ri,void 0);le(this,ni,void 0);this.pgId=t.pgID,this.id=t.id,this.fullName=t.fullName,this.inventedBy=t.inventedBy,this.inventionYear=t.inventionYear}pg(){return d(this,ti)??q(this,ti,Vr(this.pgId??this.id))}kpuzzle(){return d(this,ri)??q(this,ri,Mm(this.pg(),this.id))}svg(){return d(this,ni)??q(this,ni,(async()=>(await this.pg()).generatesvg())())}};ti=new WeakMap,ri=new WeakMap,ni=new WeakMap;Hr=class extends Rt{constructor(){super(...arguments);this.stickerings=En}appearance(t){return Nt(this,t)}}});var Df={};Be(Df,{cube2x2x2KPuzzleDefinition:()=>Ot});var Ot,Ff=U(()=>{Ot={name:"2x2x2",orbits:{CORNERS:{numPieces:8,numOrientations:3}},startStateData:{CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{U:{CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},y:{CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}},x:{CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},L:{CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]}},F:{CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]}},R:{CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]}},B:{CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]}},D:{CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}},z:{CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]}}}};Ot.moves.Rv=Ot.moves.x;Ot.moves.Uv=Ot.moves.y;Ot.moves.Fv=Ot.moves.z;Ot.moves.Lv={CORNERS:{permutation:[1,7,6,2,0,3,5,4],orientation:[2,1,2,1,1,2,1,2]}};Ot.moves.Dv={CORNERS:{permutation:[3,0,1,2,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}};Ot.moves.Bv={CORNERS:{permutation:[4,7,1,0,5,3,2,6],orientation:[1,2,1,2,2,1,2,1]}}});var Af={};Be(Af,{default:()=>Nm});var Nm,yf=U(()=>{Nm=\`<?xml version="1.0" encoding="UTF-8"?>
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

</svg>\`});var Il,Uf=U(()=>{Ve();Br();Jt();kn();Il={id:"2x2x2",fullName:"2\\xD72\\xD72 Cube",kpuzzle:Ae(async()=>new we((await Promise.resolve().then(()=>(Ff(),Df))).cube2x2x2KPuzzleDefinition)),svg:async()=>(await Promise.resolve().then(()=>(yf(),Af))).default,pg:Ae(async()=>Vr("2x2x2")),appearance:e=>Nt(Il,e),stickerings:En}});var bf={};Be(bf,{default:()=>Gm});var Gm,xf=U(()=>{Gm=\`<?xml version="1.0" encoding="UTF-8"?>
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

</svg>\`});var wf={};Be(wf,{default:()=>Om});var Om,Sf=U(()=>{Om=\`<?xml version="1.0" encoding="UTF-8"?>
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
</svg>\`});var as,vf=U(()=>{Ve();Br();Jt();kn();as={id:"3x3x3",fullName:"3\\xD73\\xD73 Cube",inventedBy:["Ern\\u0151 Rubik"],inventionYear:1974,kpuzzle:Ae(async()=>Ia),svg:Ae(async()=>(await Promise.resolve().then(()=>(xf(),bf))).default),llSVG:Ae(async()=>(await Promise.resolve().then(()=>(Sf(),wf))).default),pg:Ae(async()=>Vr("3x3x3")),appearance:e=>Nt(as,e),stickerings:En}});var Ef={};Be(Ef,{clockKPuzzleDefinition:()=>Tm});var Tm,kf=U(()=>{Tm={name:"Clock",orbits:{DIALS:{numPieces:18,numOrientations:12},FACES:{numPieces:18,numOrientations:1},FRAME:{numPieces:1,numOrientations:2}},startStateData:{DIALS:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{pieces:[0],orientation:[0]}},moves:{UR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,0,0,0,0,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},U_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,0,0,0,-1,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},R_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,1,1,-1,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},D_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},L_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},ALL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,1,1,1,-1,0,-1,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},y2:{DIALS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[1]}},UL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}}}}});var _f={};Be(_f,{default:()=>Im});var Im,zf=U(()=>{Im=\`<?xml version="1.0" encoding="UTF-8"?>
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
</svg>\`});var Cf,Pf=U(()=>{Ve();Jt();Cf={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:Ae(async()=>new we((await Promise.resolve().then(()=>(kf(),Ef))).clockKPuzzleDefinition)),svg:Ae(async()=>(await Promise.resolve().then(()=>(zf(),_f))).default)}});async function Mf(e,t){let r=await e.kpuzzle(),n=new _l(r),l=new zl(r),o=()=>l.and([l.move("U"),l.not(l.or(l.moves(["F","BL","BR"])))]),i=()=>l.and([l.move("U"),l.not(l.move("F"))]),a=()=>l.or([i(),l.and([l.move("F"),l.not(l.or(l.moves(["U","BL","BR"])))])]),s=()=>l.not(l.or([l.and([l.move("U"),l.move("F")]),l.and([l.move("F"),l.move("BL")]),l.and([l.move("F"),l.move("BR")]),l.and([l.move("BL"),l.move("BR")])])),f=()=>l.not(l.or([l.and([l.move("F"),l.move("BL")]),l.and([l.move("F"),l.move("BR")]),l.and([l.move("BL"),l.move("BR")])]));switch(t){case"full":break;case"experimental-fto-fc":n.set(l.not(o()),x.Ignored);break;case"experimental-fto-f2t":n.set(l.not(i()),x.Ignored),n.set(o(),x.Dim);break;case"experimental-fto-sc":n.set(l.not(a()),x.Ignored),n.set(i(),x.Dim);break;case"experimental-fto-l2c":n.set(l.not(s()),x.Ignored),n.set(a(),x.Dim);break;case"experimental-fto-lbt":n.set(l.not(f()),x.Ignored),n.set(s(),x.Dim);break;case"experimental-fto-l3t":n.set(f(),x.Dim);break;default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`),n.set(l.and(l.moves([])),x.Dim)}return n.toAppearance()}async function Nf(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}var Gf=U(()=>{Cl()});var Of,Tf,If=U(()=>{Br();Gf();Of=class extends Rt{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983});this.stickerings=Nf}appearance(t){return Mf(this,t)}},Tf=new Of});async function Wf(e,t){switch(t){case"full":case"F2L":case"LL":return Nt(e,t);default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`)}return Nt(e,"full")}async function Kf(){return["full","F2L","LL"]}var Qf=U(()=>{kn()});var jf,qf,Vf=U(()=>{Br();Qf();jf=class extends Rt{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981});this.stickerings=Kf}appearance(t){return Wf(this,t)}},qf=new jf});var Hf={};Be(Hf,{default:()=>Wm});var Wm,Yf=U(()=>{Wm=\`<?xml version="1.0" encoding="UTF-8"?>
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

</svg>\`});var Jf,Zf,Xf=U(()=>{Br();Jt();Jf=class extends Rt{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]});this.svg=Ae(async()=>(await Promise.resolve().then(()=>(Yf(),Hf))).default)}},Zf=new Jf});var $f={};Be($f,{sq1HyperOrbitKPuzzleDefinition:()=>Km});var Km,eu=U(()=>{Km={name:"Square-1",orbits:{WEDGES:{numPieces:24,numOrientations:9},EQUATOR:{numPieces:2,numOrientations:6}},startStateData:{WEDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{pieces:[0,1],orientation:[0,0]}},moves:{U_SQ_:{WEDGES:{permutation:[11,0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},D_SQ_:{WEDGES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,23,12,13,14,15,16,17,18,19,20,21,22],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},_SLASH_:{WEDGES:{permutation:[0,1,2,3,4,5,12,13,14,15,16,17,6,7,8,9,10,11,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,3]}}}}});var tu={};Be(tu,{default:()=>Qm});var Qm,ru=U(()=>{Qm=\`<?xml version="1.0" encoding="UTF-8"?>
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
</svg>\`});var nu,lu=U(()=>{Ve();Jt();nu={id:"square1",fullName:"Square-1",inventedBy:["Karel Hr\\u0161el","Vojtech Kopsk\\xFD"],inventionYear:1990,kpuzzle:Ae(async()=>new we((await Promise.resolve().then(()=>(eu(),$f))).sq1HyperOrbitKPuzzleDefinition)),svg:Ae(async()=>(await Promise.resolve().then(()=>(ru(),tu))).default)}});var ou={};Be(ou,{kilominxSVG:()=>jm});var jm,iu=U(()=>{jm=\`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
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
\`});var au,su=U(()=>{Ve();Br();Jt();au={id:"kilominx",fullName:"Kilominx",kpuzzle:Ae(async()=>{let e=await Vr("megaminx + chopasaurus"),t=JSON.parse(JSON.stringify(e.getKPuzzleDefinition(!0)));delete t.orbits.CENTERS,delete t.orbits.CENTERS2,delete t.startStateData.CENTERS,delete t.startStateData.CENTERS2;for(let i of Object.values(t.moves))delete i.CENTERS,delete i.CENTERS2;t.name="kilominx",delete t.experimentalPuzzleDescription;let r=await Promise.resolve().then(()=>(Nn(),ei)),n=new r.ExperimentalPGNotation(e,e.getOrbitsDef(!0)),l=new we(t,{experimentalPGNotation:{lookupMove:i=>i.toString()==="x2"||i.toString()==="x2'"?o.transformationData:n.lookupMove(i)}}),o=l.algToTransformation("Rv2 Fv Uv'");return t.moves.x2=o,l}),svg:Ae(async()=>(await Promise.resolve().then(()=>(iu(),ou))).kilominxSVG)}});var fu={};Be(fu,{rediCubeKPuzzleDefinition:()=>qm});var qm,uu=U(()=>{qm={name:"redi_cube",orbits:{EDGES:{numPieces:12,numOrientations:2},CORNERS:{numPieces:8,numOrientations:3}},startStateData:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{F:{EDGES:{permutation:[8,0,2,3,4,5,6,7,1,9,10,11],orientation:[0,1,0,0,0,0,0,0,1,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[1,0,0,0,0,0,0,0]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}}},experimentalDerivedMoves:{z:"[x: y]",UR:"[y: F]",U:"[y2: F]",UL:"[y': F]",D:"[x: F]",L:"[z2: F]",R:"[x2: F]",B:"[y2 x: F]"}}});var gu={};Be(gu,{rediCubeSVG:()=>Vm});var Vm,cu=U(()=>{Vm=\`<?xml version="1.0" encoding="UTF-8"?>
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
\`});var pu,mu=U(()=>{Ve();Jt();pu={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:Ae(async()=>new we((await Promise.resolve().then(()=>(uu(),fu))).rediCubeKPuzzleDefinition)),svg:async()=>(await Promise.resolve().then(()=>(cu(),gu))).rediCubeSVG}});var Me,Xt=U(()=>{Ve();M2();N2();Cl();kn();Br();Uf();vf();Pf();If();Vf();Xf();lu();su();mu();Me={"3x3x3":as,"2x2x2":Il,"4x4x4":new Hr({id:"4x4x4",fullName:"4\\xD74\\xD74 Cube"}),"5x5x5":new Hr({id:"5x5x5",fullName:"5\\xD75\\xD75 Cube"}),"6x6x6":new Hr({id:"6x6x6",fullName:"6\\xD76\\xD76 Cube"}),"7x7x7":new Hr({id:"7x7x7",fullName:"7\\xD77\\xD77 Cube"}),"40x40x40":new Hr({id:"40x40x40",fullName:"40\\xD740\\xD740 Cube"}),clock:Cf,megaminx:qf,pyraminx:Zf,skewb:new Rt({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:nu,fto:Tf,gigaminx:new Rt({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new Rt({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:au,redi_cube:pu}});function Bu(e){Lu=e}function Se(){if(!Lu)throw new Error("Must be called from inside a worker, to avoid impact on page performance. Try importing from the top level of \`cubing/solve\`?")}var Lu,dt=U(()=>{Lu=!1});async function Ru(){return globalThis?.crypto?.getRandomValues?crypto.getRandomValues.bind(crypto):(await(Hm??(Hm=import(Jm())))).webcrypto.getRandomValues}var Hm,Ym,Jm,du=U(()=>{Hm=null,Ym="cr-yp-to",Jm=()=>Ym.replace(/-/g,"")});function $m(e){let t=new Uint32Array(2);e(t);let r=t[0],n=t[1];return Math.floor(r*Zm)+Math.floor(n/Xm)}function eL(e){if(typeof e!="number"||e<0||Math.floor(e)!==e)throw new Error("randomInt.below() not called with a positive integer value.");if(e>hu)throw new Error(\`Called randomInt.below() with max == \${e}, which is larger than JavaScript can handle with integer precision.\`)}async function ve(){let e=await Ru(),t=r=>{eL(r);let n=$m(e),l=Math.floor(hu/r)*r;return n<l?n%r:t(r)};return t}var hu,Zm,Xm,li=U(()=>{du();hu=9007199254740992,Zm=2097152,Xm=2048});async function $t(){let e=await ve();return t=>t[e(t.length)]}var Du=U(()=>{li()});async function Fu(e){for(let t=1;t<e.length;t++){let r=(await tL)(t);[e[t],e[r]]=[e[r],e[t]]}}var tL,ht=U(()=>{Du();li();li();tL=ve()});function It(e,t){let r=[],n=[];for(let g of t.split(\`
\`)){let c=g.split(" ");if(!g.startsWith("SetOrder ")){if(g.startsWith("Alg ")){let u=_.fromString(g.substring(4));n.push({alg:u,transformation:e.algToTransformation(u)})}else if(g.startsWith("SubgroupSizes "))for(let u=1;u<c.length;u++)r.push(parseInt(c[u]))}}let l={ordering:new Array(r.length)},o=[],i=0;o.push(0);let a=_.fromString(""),s=e.identityTransformation();for(let g=0;g<r.length;g++)i+=r[g],o.push(i),n.splice(i-1,0,{alg:a,transformation:s});if(n.length!==i)throw Error(\`Bad sgs; expected \${i-r.length} algs but saw \${n.length-r.length}\`);let f={};for(let g in e.definition.orbits){let c=e.definition.orbits[g];f[g]=new Array(c.numPieces).fill(!1)}for(let g=r.length-1;g>=0;g--){let c=[];for(let p=o[g];p<o[g+1];p++){let m=n[p].transformation;for(let L in e.definition.orbits){let R=e.definition.orbits[L];for(let h=0;h<R.numPieces;h++)(m.transformationData[L].permutation[h]!==h||m.transformationData[L].orientation[h]!==0)&&(f[L][h]||(c.push({orbitName:L,permutationIdx:h}),f[L][h]=!0))}}let u={};for(let p=o[g];p<o[g+1];p++){let m=n[p].transformation.invert(),L="";for(let R=0;R<c.length;R++){let h=c[R];L=\`\${L} \${m.transformationData[h.orbitName].permutation[h.permutationIdx]} \${m.transformationData[h.orbitName].orientation[h.permutationIdx]}\`}u[L]=n[p],n[p].alg=n[p].alg.invert(),n[p].transformation=n[p].transformation.invert()}l.ordering[g]={pieceOrdering:c,lookup:u}}return l}var Gn=U(()=>{Re()});var Su={};Be(Su,{cachedData222:()=>gL,data222:()=>wu});async function gL(){return uL??(uL=wu())}async function wu(){return It(await Il.kpuzzle(),\`SubgroupSizes 24 21 18 15 12 9 6

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
Alg F D F' D L2 F R' F' D' B2 U'\`)}var uL,vu=U(()=>{Xt();Gn();uL=null});async function On(e,t){let r=new Lt;r.experimentalPushAlg(e);for(let n of t){let l=(await $t())(n);l!==null&&r.push(B.fromString(l))}return r.toAlg()}var ii=U(()=>{Re();ht()});function Cu(e,t){return e.slice(t)+e.slice(0,t)}function hL(e){let t=[[],[]];for(let r=0;r<6;r++)if(e.stateData.CENTERS.pieces[r]!==r)throw new Error("non-oriented puzzles are not supported");for(let r=0;r<12;r++)t[0].push(Cu(LL[e.stateData.EDGES.pieces[r]],e.stateData.EDGES.orientation[r]));for(let r=0;r<8;r++)t[1].push(Cu(BL[e.stateData.CORNERS.pieces[r]],e.stateData.CORNERS.orientation[r]));return t.push(RL),t}function Pu(e){let t=hL(e);return dL.map(([r,n,l])=>t[r][n][l]).join("")}var LL,BL,RL,dL,Mu=U(()=>{LL="UF UR UB UL DF DR DB DL FR FL BR BL".split(" "),BL="UFR URB UBL ULF DRF DFL DLB DBR".split(" "),RL="U L F R B D".split(" "),dL=[[1,2,0],[0,2,0],[1,1,0],[0,3,0],[2,0,0],[0,1,0],[1,3,0],[0,0,0],[1,0,0],[1,0,2],[0,1,1],[1,1,1],[0,8,1],[2,3,0],[0,10,1],[1,4,1],[0,5,1],[1,7,2],[1,3,2],[0,0,1],[1,0,1],[0,9,0],[2,2,0],[0,8,0],[1,5,1],[0,4,1],[1,4,2],[1,5,0],[0,4,0],[1,4,0],[0,7,0],[2,5,0],[0,5,0],[1,6,0],[0,6,0],[1,7,0],[1,2,2],[0,3,1],[1,3,1],[0,11,1],[2,1,0],[0,9,1],[1,6,1],[0,7,1],[1,5,2],[1,1,2],[0,2,1],[1,2,1],[0,10,0],[2,4,0],[0,11,0],[1,7,1],[0,6,1],[1,6,2]]});function Nu(e,t){let r=new de(e.kpuzzle,{EDGES:e.stateData.EDGES,CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation(),n=new de(t.kpuzzle,{EDGES:t.stateData.EDGES,CORNERS:t.stateData.CORNERS,CENTERS:{pieces:t.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation();return r.isIdentical(n)}function Gu(e,t){if(Nu(e.startState(),t))return!1;for(let r of"ULFRBD")for(let n=1;n<4;n++){let l=e.moveToTransformation(new B(r,n)).toKState();if(Nu(l,t))return!1}return!0}var Ou=U(()=>{Re();Ve()});var Tu,Iu=U(()=>{Tu=[["R U'","R2 B","D2 B2","D' L B'","R' U'","B","D B2","R' B","L' U","L2 B'","B2","D L B'","L U","B'","U'","R B","D' B2","L B'","U2","U L' B'","","U' L' B'","U","L' B'"],["F2 L2","F' L'","R' F L2","D' L2","F L2","F2 L'","R' F' L'","R2 F L2","R2 F2 L'","L2","F L'","D' L","D2 L2","R2 F' L'","D L","","L2 F L'","L F' L2","L F L'","F' L2","L'","D L2","D F L'","L"],["R B U2 B'","R2 B U' B'","F2 B U B'","F B2 L' B2","B2 L B2","B U' B'","R2 B U2 B'","R' B U' B'","B2 L' B2","F B U B'","B2 U' B2","B' L B","L F' B D' B'","B' U' B2 D B'","B U2 B'","R B U' B'","B2 L2 B2","D' B' L B","B U B'","F' B2 L' B2","","B2 L' B' U' B'"],["U F2 L2 U'","F' U L' U'","F2 U L' U'","U F L2 U'","U2 B2 U2","R' U' B U","D2 U L U'","D U2 B' U2","U L2 U'","F U L' U'","D U L U'","U2 B' U2","","U2 B' U' L' U'","U2 L' U2","U' B U","U L U'","D' U2 B' U2","U L' U'","U2 B U2"],["R' D' F2","F'","F2","D R F'","R D' F2","R2 F'","D' F2","R F'","F2 R' D' F2","F","D2 F2","D' R F'","R2 D' F2","R' F'","D F2","D2 R F'","","F R' D' F2"],["R' D2 F' D F","R F2 R2 F2","R2 F' D2 F","F' R2 D2 F","L D' L'","D F' D2 F","F2 R2 F2","R F' D2 F","F' R2 D' F","F' R' D2 F","F2 R' F2","L D L'","F' R D' F","F2 R F2","F' D2 F","","L D2 R D' L'","F' D2 F' R F2","D2 R2 F2 R2 F2","D F' D' F","F' D F"],["U F2 U'","R U F' U'","D R U F2 U'","U F U'","R2 U F2 U'","R' U F' U'","R U F2 U'","R2 U F' U'","","U L D L' F U'","F2 D' R D F2","D2 U F U'","R' U F2 U'","U F' U'","F2 D2 R D2 F2","D U F U'"],["R2","R' B' D B","D R'","F' R2 F","","R B' D B","R'","B' D B","D' R'","D2 F' R2 F","R","R2 B' D B","D2 R'","B' D' B"],["R2 D' R2","F' R' F R","R D' R2 D R'","D2 R2 D2 R2","R' D' F' R F","U F D F' U'","","R2 D2 B R' B' R'","R' F D' F2 R F","R2 D R2","F2 U F U' F","R' D F' R F","D R2 D2 R2","U F D' F' U'","D R' D2 F' R F","R2 D2 R2","U F D2 F' U'","R' D2 F' R F"],["B R B'","F D F' B R2 B'","D B R2 B'","D2 B R' B'","B R2 B'","D B R' B'","D' B R2 B'","B R' B'","","B R2 B' D B R' B'","D2 B R2 B'","D' B R' B'"],["","R' D R F D2 F'","R' D R","D F D' F'","R F' R' F","F D' F'","R' D' R","F D2 F'","R' D2 R","F D F'"],["","F2 D2 R F' R' D2 F' D2 F'","F2 D2 F' D' F D' F' D2 F'","F2 D F2 D F2 D2 F2","D2 F L D2 L' D2 F'","D F D2 L D2 L' F'","R' D B' D2 B D' R","R' D2 B' D2 B R","F D2 F' D F D F'","F D' L D2 L' D F'","B D' F D B' D' F'","F D2 L D2 L' F'","F D' L D L' D F'","F L D2 L' D2 F'","R' B' D2 B D2 R"],["D'","F L D L' D' F'","D2","L B D B' D' L'","D","B' L' D' L D B","","D F L D L' D' F'"],["F' D2 F D F' D F","F' D' R' D R F","F' R' D' R D F","B D R D' R' B'","","D B' D' L' D L B"],["D F D F' D F D2 F'","F' U2 B' R' B U2 F' L F' L' F'","","D2 L D L2 F L F2 D F"],["L B' L' F L B L' F'","F2 U F' D2 F U' F' D2 F'","D' F' D B D' F D B'","F L2 F R2 F' L2 F R2 F2","D B D' F' D B' D' F","R F L F' R' F L' F'","","D2 B L' U2 L B' D2 B L' U2 L B'","D2 F R' U2 R F' D2 F R' U2 R F'","R F L' F' R' F L F'","D F D' B' D F' D' B","L2 F2 L' B2 L F2 L' B2 L'"],["L B R' B' L' B R B'","R' B R F' R' B' R F","L D2 L U L' D2 L U' L2","","D2 B' D2 F D' L2 F L2 F' D2 B D' F'","D2 F' R' F R2 B' D2 B D2 R' F D2 F'","L B L' F L B' L' F'","F' D2 F' U' F D2 F' U F2","D' B' D F D' B D F'"],["","D2 F' L U2 L' F D2 F' L U2 L' F","D2 B' R U2 R' B D2 B' R U2 R' B"]]});var h1={};Be(h1,{initialize:()=>fB,solveState:()=>uB});function Wu(){}function FL(e){function t(){}return t.prototype=e||{},new t}function AL(e){return e instanceof Array?e[0]:null}function Kl(e,t,r){var n=ai,l=yL,o=AL,i=n[e],a=o(i);i&&!a?H=i:(H=n[e]=t?l(t):{},H.castableTypeMap$=r,H.constructor=H,!t&&(H.typeMarker$=Wu));for(var s=3;s<arguments.length;++s)arguments[s].prototype=H;a&&(H.___clazz$=a)}function yL(e){var t=ai;return FL(t[e])}function UL(){}function si(e){return e<<24>>24}function cs(){this.typeName=null,this.simpleName=null,this.packageName=null,this.compoundName=null,this.canonicalName=null,this.typeId=null,this.arrayLiterals=null}function ps(e,t){var r;return r=new cs,r.packageName=e,r.compoundName=t,r}function dr(e,t,r){var n;return n=ps(e,t),wL(r,n),n}function bL(e,t){var r;return r=ps(e,t),r.modifiers=2,r}function fi(e,t){var r;return r=ps("",e),r.typeId=t,r.modifiers=1,r}function Ku(e,t){var r=e.arrayLiterals=e.arrayLiterals||[];return r[t]||(r[t]=e.createClassLiteralForArray(t))}function xL(e){if(e.isPrimitive())return null;var t=e.typeId,r=ai[t];return r}function wL(e,t){if(!!e){t.typeId=e;var r=xL(t);if(!r){ai[e]=[t];return}r.___clazz$=t}}function ee(e,t){return Ku(e,t)}function Z(e,t,r,n,l,o){var i;return i=ju(l,n),te(ee(e,o),t,r,l,i),i}function nt(e,t,r,n,l,o){return Qu(e,t,r,n,l,0,o)}function Qu(e,t,r,n,l,o,i){var a,s,f,g,c;if(g=l[o],f=o==i-1,a=f?n:0,c=ju(a,g),te(ee(e,i-o),t[o],r[o],a,c),!f)for(++o,s=0;s<g;++s)c[s]=Qu(e,t,r,n,l,o,i);return c}function te(e,t,r,n,l){return l.___clazz$=e,l.castableTypeMap$=t,l.typeMarker$=Wu,l.__elementTypeId$=r,l.__elementTypeCategory$=n,l}function ju(e,t){var r=new Array(t),n;switch(e){case 6:n={l:0,m:0,h:0};break;case 7:n=0;break;case 8:n=!1;break;default:return r}for(var l=0;l<t;++l)r[l]=n;return r}function qu(e){var t,r,n;return t=e&rt,r=e>>22&rt,n=e<0?Rr:0,SL(t,r,n)}function SL(e,t,r){return{l:e,m:t,h:r}}function vL(e,t){var r,n,l;return r=e.l+t.l,n=e.m+t.m+(r>>22),l=e.h+t.h+(n>>22),{l:r&rt,m:n&rt,h:l&Rr}}function Wt(e,t){return{l:e.l&t.l,m:e.m&t.m,h:e.h&t.h}}function ms(e){var t,r;return e>-129&&e<128?(t=e+128,gi==null&&(gi=Z(aB,fe,293,256,0,1)),r=gi[t],!r&&(r=gi[t]=qu(e)),r):qu(e)}function Vu(e,t){var r,n;return r=e.h>>19,n=t.h>>19,r==0?n!=0||e.h>t.h||e.h==t.h&&e.m>t.m||e.h==t.h&&e.m==t.m&&e.l>=t.l:!(n==0||e.h<t.h||e.h==t.h&&e.m<t.m||e.h==t.h&&e.m==t.m&&e.l<t.l)}function Ls(e,t){return e.l!=t.l||e.m!=t.m||e.h!=t.h}function Bs(e,t){return{l:e.l|t.l,m:e.m|t.m,h:e.h|t.h}}function ui(e,t){var r,n,l;return t&=63,t<22?(r=e.l<<t,n=e.m<<t|e.l>>22-t,l=e.h<<t|e.m>>22-t):t<44?(r=0,n=e.l<<t-22,l=e.m<<t-22|e.l>>44-t):(r=0,n=0,l=e.l<<t-44),{l:r&rt,m:n&rt,h:l&Rr}}function Yr(e,t){var r,n,l,o,i;return t&=63,r=e.h,n=(r&DL)!=0,n&&(r|=-1048576),t<22?(i=r>>t,o=e.m>>t|r<<22-t,l=e.l>>t|e.m<<22-t):t<44?(i=n?Rr:0,o=r>>t-22,l=e.m>>t-22|r<<44-t):(i=n?Rr:0,o=n?rt:0,l=r>>t-44),{l:l&rt,m:o&rt,h:i&Rr}}function Hu(e,t){var r,n,l;return r=e.l-t.l,n=e.m-t.m+(r>>22),l=e.h-t.h+(n>>22),{l:r&rt,m:n&rt,h:l&Rr}}function Jr(e){return e.l|e.m<<22}function EL(e){this.string=e}function hr(e,t){return e>t?e:t}function Rs(e,t){return e<t?e:t}function kL(e,t){return e.indexOf(t)}function _L(e){return zL(e,0,e.length)}function zL(e,t,r){for(var n="",l=t;l<r;){var o=Math.min(l+1e4,r);n+=String.fromCharCode.apply(null,e.slice(l,o)),l=o}return n}function CL(e){return String.fromCharCode(e&Ye)}function Yu(e){return e.string+=" ",e}function Ju(e,t){return e.string+=t,e}function ML(){EL.call(this,"")}function ci(e,t){var r;if(e===t)return!0;if(e.length!=t.length)return!1;for(r=0;r<e.length;++r)if(e[r]!=t[r])return!1;return!0}function Zr(){Zu||(Zu=!0,Fr=nt(Ue,[fe,ye],[11,0],7,[495,18],2),qn=nt(Ue,[fe,ye],[11,0],7,[324,18],2),Kn=nt(Ue,[fe,ye],[11,0],7,[336,18],2),Dr=nt(Ue,[fe,ye],[11,0],7,[495,8],2),Li=Z(Oe,Ge,0,20048,7,1),mi=Z(Oe,Ge,0,20791,7,1),jn=Z(Oe,Ge,0,82945,7,1),Tn=nt(Ue,[fe,ye],[11,0],7,[2768,10],2),Wn=nt(Ue,[fe,ye],[11,0],7,[2768,10],2),Qn=nt(Ue,[fe,ye],[11,0],7,[24,10],2),ql=nt(Ue,[fe,ye],[11,0],7,[24,16],2),Xr=nt(Ue,[fe,ye],[11,0],7,[140,16],2),pi=Z(Oe,Ge,0,8305,7,1),In=Z(Oe,Ge,0,48441,7,1))}function NL(e,t,r){return e.slice_0=Fr[t.slice_0][r],e.flip=Kn[t.flip][(X(),en)[r<<3|t.fsym]],e.fsym=e.flip&7^t.fsym,e.flip>>=3,e.twist=qn[t.twist][en[r<<3|t.tsym]],e.tsym=e.twist&7^t.tsym,e.twist>>=3,e.prun=hr(hr(ft(Li,e.twist*495+Dr[e.slice_0][e.tsym]),ft(mi,e.flip*495+Dr[e.slice_0][e.fsym])),ft(jn,e.twist<<11|Ur[e.flip<<3|e.fsym^e.tsym])),e.prun}function GL(e,t,r){return r=(X(),Yl)[3][r],e.flipc=Kn[t.flipc>>3][en[r<<3|t.flipc&7]]^t.flipc&7,e.twistc=qn[t.twistc>>3][en[r<<3|t.twistc&7]]^t.twistc&7,ft(jn,e.twistc>>3<<11|Ur[e.flipc^e.twistc&7])}function Xu(e,t,r){var n;return e.twist=(X(),Jl)[hi(t)],e.flip=$r[di(t)],e.tsym=e.twist&7,e.twist=e.twist>>3,e.prun=ft(jn,e.twist<<11|Ur[e.flip^e.tsym]),e.prun>r||(e.fsym=e.flip&7,e.flip=e.flip>>3,e.slice_0=494-Yn(t.ea,8,!0),e.prun=hr(e.prun,hr(ft(Li,e.twist*495+Dr[e.slice_0][e.tsym]),ft(mi,e.flip*495+Dr[e.slice_0][e.fsym]))),e.prun>r)?!1:(n=new ge,Vl(t,1,n),Hl(t,1,n),e.twistc=Jl[hi(n)],e.flipc=$r[di(n)],e.prun=hr(e.prun,ft(jn,e.twistc>>3<<11|Ur[e.flipc^e.twistc&7])),e.prun<=r)}function Ql(){Zr()}function ft(e,t){return Zr(),e[t>>3]>>(t<<2)&15}function $u(e){Zr(),!(Bi==2||Bi==1&&!e)&&(Bi==0&&(ZL(),OL(),IL(),KL(),TL(),X(),ys(2048,Us,$r,i1=Z(Ue,ye,0,336,7,1),0),ys(2187,Ss,Jl,ws=Z(Ue,ye,0,324,7,1),1),WL(),QL(),jL()),jl(pi,Qn,ql,Tn,(X(),xs),584244,e),jl(In,ds,Xr,Wn,xs,514084,e),jl(Li,Fr,Dr,qn,ws,431619,e),jl(mi,Fr,Dr,Kn,i1,431619,e),jl(jn,null,null,qn,ws,103939,e),Bi=e?2:1)}function OL(){var e,t,r,n;for(e=new ge,t=new ge,r=0;r<2768;r++)for(HL(e,(X(),Vn)[r]),n=0;n<10;n++)Ar(e,ce[(Ze(),vt)[n]],t),Tn[r][n]=Ai(tr[gt(t.ca,8,!1)])&Ye}function TL(){var e,t,r,n,l;for(e=new ge,t=new ge,ds=nt(Ue,[fe,ye],[11,0],7,[140,10],2),r=0;r<140;r++){for(L1(e.ca,r%70,0,!1),l=0;l<10;l++)Ar(e,(X(),ce)[(Ze(),vt)[l]],t),ds[r][l]=Yn(t.ca,0,!1)+70*(165>>l&1^~~(r/70))&Ye;for(n=0;n<16;n++)Vl(e,(X(),ut)[0][n],t),Xr[r][n]=Yn(t.ca,0,!1)+70*~~(r/70)&Ye}}function IL(){var e,t,r,n;for(e=new ge,t=new ge,r=0;r<2768;r++)for(n1(e,(X(),Vn)[r]),n=0;n<10;n++)Dt(e,ce[(Ze(),vt)[n]],t),Wn[r][n]=tr[gt(t.ea,8,!0)]}function WL(){var e,t,r,n;for(e=new ge,t=new ge,r=0;r<336;r++)for(Fs(e,(X(),Us)[r]),n=0;n<18;n++)Dt(e,ce[n],t),Kn[r][n]=$r[di(t)]}function KL(){var e,t,r,n,l;for(e=new ge,t=new ge,r=0;r<24;r++){for(tn(e.ea,r,12,!0),l=0;l<10;l++)Dt(e,(X(),ce)[(Ze(),vt)[l]],t),Qn[r][l]=gt(t.ea,12,!0)%24&Ye;for(n=0;n<16;n++)Hl(e,(X(),ut)[0][n],t),ql[r][n]=gt(t.ea,12,!0)%24&Ye}}function jl(e,t,r,n,l,o,i){var a,s,f,g,c,u,p,m,L,R,h,y,A,k,E,Q,$,N,oe,b,z,M,w,S,C,j,J,me,he,xe,ke,Pt,Ie,ot,Pe,F;if(A=o&15,h=(o>>4&1)==1?gs:0,f=(o>>5&1)==1,a=o>>8&15,g=o>>12&15,c=o>>16&15,R=i?g:c,y=(1<<A)-1,s=t==null,m=s?2048:t.length,L=m*n.length,p=f?10:18,u=p==10?66:599186,E=(e[L>>3]>>(L<<2)&15)-1,E==-1){for(N=0;N<~~(L/8)+1;N++)e[N]=Wl;e[0]^=1,E=0}for(;E<R;){for(C=(E+1)*Wl^-1,oe=0;oe<e.length;oe++)Pe=e[oe]^C,Pe&=Pe>>1,e[oe]+=Pe&Pe>>2&Wl;for(M=E>a,xe=M?E+2:E,he=xe*Wl,k=M?E:E+2,++E,F=E^E+1,ot=0,N=0;N<L;++N,ot>>=4){if((N&7)==0&&(ot=e[N>>3],((ot^he)-Wl&~(ot^he)&-2004318072)==0)){N+=7;continue}if((ot&15)==xe)for(J=N%m,ke=~~(N/m),Q=0,$=0,s&&(Q=(X(),$r)[J],$=Q&7,Q>>=3),S=0;S<p;S++){if(Ie=n[ke][S],s?me=(X(),Ur)[Kn[Q][en[S<<3|$]]^$^Ie&y]:me=r[t[J][S]][Ie&y],Ie>>=A,b=Ie*m+me,j=e[b>>3]>>(b<<2)&15,j!=k){j<E-1&&(S+=u>>S&3);continue}if(M){e[N>>3]^=F<<(N<<2);break}for(e[b>>3]^=F<<(b<<2),w=1,Pt=l[Ie];(Pt>>=1)!=0;w++)(Pt&1)==1&&(z=Ie*m,s?z+=(X(),Ur)[$r[me]^w]:z+=r[me][w^h>>(w<<1)&3],(e[z>>3]>>(z<<2)&15)==k&&(e[z>>3]^=F<<(z<<2)))}}}}function QL(){var e,t,r,n;for(e=new ge,t=new ge,r=0;r<324;r++)for(As(e,(X(),Ss)[r]),n=0;n<18;n++)Ar(e,ce[n],t),qn[r][n]=Jl[hi(t)]}function jL(){var e,t,r,n,l,o,i,a;for(e=new ge,t=new ge,n=0;n<495;n++){for(L1(e.ea,494-n,8,!0),o=0;o<18;o+=3)Dt(e,(X(),ce)[o],t),Fr[n][o]=494-Yn(t.ea,8,!0)&Ye;for(l=0;l<16;l+=2)Hl(e,(X(),ut)[0][l],t),Dr[n][l>>1]=494-Yn(t.ea,8,!0)&Ye}for(r=0;r<495;r++)for(l=0;l<18;l+=3)for(a=Fr[r][l],i=1;i<3;i++)a=Fr[a][l],Fr[r][l+i]=a&Ye}function X(){e1||(e1=!0,er=Z(Zl,fe,7,16,0,1),ce=Z(Zl,fe,7,18,0,1),Ui=Z(sB,fe,0,18,6,1),a1=Z(Oe,Ge,0,48,7,1),rr=nt(Oe,[fe,Ge],[17,0],7,[16,16],2),ut=nt(Oe,[fe,Ge],[17,0],7,[16,16],2),Yl=nt(Oe,[fe,Ge],[17,0],7,[16,18],2),en=Z(Oe,Ge,0,144,7,1),br=nt(Oe,[fe,Ge],[17,0],7,[16,18],2),Us=Z(Ue,ye,0,336,7,1),Ss=Z(Ue,ye,0,324,7,1),Vn=Z(Ue,ye,0,2768,7,1),Hn=Z(re,se,0,2768,7,1),bs=Z(Ue,ye,0,2768,7,1),yi=Z(re,se,0,24,7,1),$r=Z(Ue,ye,0,2048,7,1),Jl=Z(Ue,ye,0,2187,7,1),tr=Z(Ue,ye,0,40320,7,1),Ur=Z(Ue,ye,0,2688,7,1),vs=new St(2531,1373,67026819,1367),Es=new St(2089,1906,322752913,2040),bi=te(ee(re,2),fe,10,0,[te(ee(re,1),se,0,7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),te(ee(re,1),se,0,7,[6,7,8,0,1,2,3,4,5,15,16,17,9,10,11,12,13,14]),te(ee(re,1),se,0,7,[3,4,5,6,7,8,0,1,2,12,13,14,15,16,17,9,10,11]),te(ee(re,1),se,0,7,[2,1,0,5,4,3,8,7,6,11,10,9,14,13,12,17,16,15]),te(ee(re,1),se,0,7,[8,7,6,2,1,0,5,4,3,17,16,15,11,10,9,14,13,12]),te(ee(re,1),se,0,7,[5,4,3,8,7,6,2,1,0,14,13,12,17,16,15,11,10,9])]),JL(),XL())}function hs(e){e.ca=te(ee(re,1),se,0,7,[0,1,2,3,4,5,6,7]),e.ea=te(ee(re,1),se,0,7,[0,2,4,6,8,10,12,14,16,18,20,22])}function t1(e){!e.temps&&(e.temps=new ge),Ar(Es,e,e.temps),Ar(e.temps,vs,e),Dt(Es,e,e.temps),Dt(e.temps,vs,e)}function Ds(e,t){var r,n;for(n=0;n<8;n++)e.ca[n]=t.ca[n];for(r=0;r<12;r++)e.ea[r]=t.ea[r]}function qL(e){return Ai(tr[gt(e.ca,8,!1)])}function VL(e){return tr[gt(e.ea,8,!0)]}function di(e){var t,r;for(r=0,t=0;t<11;t++)r=r<<1|e.ea[t]&1;return r}function hi(e){var t,r;for(r=0,t=0;t<7;t++)r+=(r<<1)+(e.ca[t]>>3);return r}function Di(e){var t,r;for(!e.temps&&(e.temps=new ge),r=0;r<12;r++)e.temps.ea[e.ea[r]>>1]=(r<<1|e.ea[r]&1)<<24>>24;for(t=0;t<8;t++)e.temps.ca[e.ca[t]&7]=(t|32>>(e.ca[t]>>3)&24)<<24>>24;Ds(e,e.temps)}function r1(e){var t,r,n,l,o,i,a;for(t=new l1(e),l=new ge,r=Ai(tr[gt(t.ca,8,!1)])>>4,i={l:0,m:0,h:0},a=0;a<6;a++){if(n=Ai(tr[gt(t.ca,8,!1)])>>4,r==n)for(o=0;o<16;o++)Vl(t,ut[0][o],l),ci(l.ca,e.ca)&&(Hl(t,ut[0][o],l),ci(l.ea,e.ea)&&(i=Bs(i,ui({l:1,m:0,h:0},(a<<4|o)<48?a<<4|o:48))));t1(t),a%3==2&&Di(t)}return i}function HL(e,t){tn(e.ca,t,8,!1)}function n1(e,t){tn(e.ea,t,8,!0)}function Fs(e,t){var r,n,l;for(n=0,r=10;r>=0;--r,t>>=1)n^=l=t&1,e.ea[r]=(e.ea[r]&-2|l)<<24>>24;e.ea[11]=(e.ea[11]&-2|n)<<24>>24}function As(e,t){var r,n,l;for(n=15,r=6;r>=0;--r,t=~~(t/3))n-=l=t%3,e.ca[r]=(e.ca[r]&7|l<<3)<<24>>24;e.ca[7]=(e.ca[7]&7|n%3<<3)<<24>>24}function YL(e){var t,r,n,l,o;for(o=0,l=0,n=0;n<12;n++)l|=1<<(e.ea[n]>>1),o^=e.ea[n]&1;if(l!=4095)return-2;if(o!=0)return-3;for(r=0,o=0,t=0;t<8;t++)r|=1<<(e.ca[t]&7),o+=e.ca[t]>>3;return r!=255?-4:o%3!=0?-5:(_s(gt(e.ea,12,!0),12)^_s(gt(e.ca,8,!1),8))!=0?-6:0}function Vl(e,t,r){X();var n,l,o,i,a,s;for(s=er[ut[0][t]],a=er[t],n=0;n<8;n++)o=s.ca[e.ca[a.ca[n]&7]&7]>>3,i=e.ca[a.ca[n]&7]>>3,l=o<3?i:(3-i)%3,r.ca[n]=(s.ca[e.ca[a.ca[n]&7]&7]&7|l<<3)<<24>>24}function Ar(e,t,r){X();var n,l,o;for(n=0;n<8;n++)l=e.ca[t.ca[n]&7]>>3,o=t.ca[n]>>3,r.ca[n]=(e.ca[t.ca[n]&7]&7|(l+o)%3<<3)<<24>>24}function Fi(e,t,r){var n,l,o,i;for(n=0;n<8;n++)o=e.ca[t.ca[n]&7]>>3,i=t.ca[n]>>3,l=o+(o<3?i:6-i),l=l%3+(o<3==i<3?0:3),r.ca[n]=(e.ca[t.ca[n]&7]&7|l<<3)<<24>>24}function ge(){X(),hs(this)}function St(e,t,r,n){hs(this),tn(this.ca,e,8,!1),As(this,t),tn(this.ea,r,12,!0),Fs(this,n)}function l1(e){hs(this),Ds(this,e)}function Ai(e){return X(),e^gs>>((e&15)<<1)&3}function Hl(e,t,r){X();var n,l,o;for(o=er[ut[0][t]],l=er[t],n=0;n<12;n++)r.ea[n]=(o.ea[e.ea[l.ea[n]>>1]>>1]^e.ea[l.ea[n]>>1]&1^l.ea[n]&1)<<24>>24}function Dt(e,t,r){X();var n;for(n=0;n<12;n++)r.ea[n]=(e.ea[t.ea[n]>>1]^t.ea[n]&1)<<24>>24}function yr(e,t,r){X();var n;return n=bs[e],r&&(n=n^gs>>((n&15)<<1)&3),n&65520|rr[n&15][t]}function o1(){return X(),0}function JL(){var e,t;for(ce[0]=new St(15120,0,119750400,0),ce[3]=new St(21021,1494,323403417,0),ce[6]=new St(8064,1236,29441808,550),ce[9]=new St(9,0,5880,0),ce[12]=new St(1230,412,2949660,0),ce[15]=new St(224,137,328552,137),e=0;e<18;e+=3)for(t=0;t<2;t++)ce[e+t+1]=new ge,Dt(ce[e+t],ce[e],ce[e+t+1]),Ar(ce[e+t],ce[e],ce[e+t+1])}function ZL(){X();var e,t,r;for(ys(40320,Vn,tr,xs=Z(Ue,ye,0,2768,7,1),2),e=new ge,r=0;r<2768;r++)n1(e,Vn[r]),Hn[r]=Yn(e.ea,0,!0)+_s(Vn[r],8)*70<<24>>24,Di(e),bs[r]=tr[gt(e.ea,8,!0)];for(t=0;t<24;t++)tn(e.ea,t,12,!0),Di(e),yi[t]=gt(e.ea,12,!0)%24<<24>>24}function XL(){var e,t,r,n,l,o,i,a,s,f,g,c,u,p,m,L;for(e=new ge,t=new ge,r=new St(28783,0,259268407,0),L=new St(15138,0,119765538,7),c=new St(5167,0,83473207,0),l=0;l<8;l++)c.ca[l]=si(c.ca[l]|24);for(o=0;o<16;o++)er[o]=new l1(e),Fi(e,L,t),Dt(e,L,t),m=t,t=e,e=m,o%4==3&&(Fi(m,c,t),Dt(m,c,t),m=t,t=e,e=m),o%8==7&&(Fi(m,r,t),Dt(m,r,t),m=t,t=e,e=m);for(i=0;i<16;i++)for(s=0;s<16;s++)for(Fi(er[i],er[s],e),g=0;g<16;g++)if(ci(er[g].ca,e.ca)){rr[i][s]=g,ut[g][s]=i;break}for(f=0;f<18;f++)for(p=0;p<16;p++){for(Vl(ce[f],ut[0][p],e),u=0;u<18;u++)if(ci(ce[u].ca,e.ca)){Yl[p][f]=u,br[p][(Ze(),Jn)[f]]=Jn[u];break}p%2==0&&(en[f<<3|p>>1]=Yl[p][f])}for(n=0;n<18;n++)for(Ui[n]=r1(ce[n]),a=n,p=0;p<48;p++)Yl[p%16][a]<n&&(a1[p]|=1<<n),p%16==15&&(a=bi[2][a])}function ys(e,t,r,n,l){X();var o,i,a,s,f,g,c,u,p;for(o=new ge,a=new ge,i=0,f=0,p=l>=2?1:2,g=l!=1,s=0;s<e;s++)if(r[s]==0){switch(l){case 0:Fs(o,s);break;case 1:As(o,s);break;case 2:tn(o.ea,s,8,!0)}for(c=0;c<16;c+=p){switch(g?Hl(o,c,a):Vl(o,c,a),l){case 0:f=di(a);break;case 1:f=hi(a);break;case 2:f=gt(a.ea,8,!0)}l==0&&(Ur[i<<3|c>>1]=f&Ye),f==s&&(n[i]=(n[i]|1<<~~(c/p))&Ye),u=~~((i<<4|c)/p),r[f]=u&Ye}t[i++]=s&Ye}return i}function $L(e,t,r,n,l,o,i,a){var s,f,g,c,u;if(c=hr(ft((Zr(),In),(i>>4)*140+Xr[(X(),Hn)[a>>4]&255][ut[i&15][a&15]]),hr(ft(In,n*140+Xr[Hn[t]&255][ut[l][r]]),ft(pi,t*24+ql[o][r]))),c>e.maxDep2)return c-e.maxDep2;for(s=e.maxDep2;s>=c&&(u=u1(e,n,l,t,r,o,s,e.depth1,10),!(u<0));s--){for(s-=u,e.solLen=0,e.solution=new d1,iB(e.solution,e.verbose,e.urfIdx,e.depth1),g=0;g<e.depth1+s;g++)B1(e.solution,e.move[g]);for(f=e.preMoveLen-1;f>=0;f--)B1(e.solution,e.preMoves[f]);e.solLen=e.solution.length_0}return s!=e.maxDep2?(e.maxDep2=Rs(c1,e.solLen-e.length1-1),Vu(e.probe,e.probeMin)?0:1):1}function eB(e){var t,r,n,l,o,i,a,s,f,g,c,u,p,m,L;if(e.isRec=!1,Vu(e.probe,e.solution?e.probeMin:e.probeMax))return 0;for(e.probe=vL(e.probe,{l:1,m:0,h:0}),n=e.valid1;n<e.depth1;n++)Ar(e.phase1Cubie[n],(X(),ce)[e.move[n]],e.phase1Cubie[n+1]),Dt(e.phase1Cubie[n],ce[e.move[n]],e.phase1Cubie[n+1]);for(e.valid1=e.depth1,a=qL(e.phase1Cubie[e.depth1]),s=a&15,a>>=4,f=VL(e.phase1Cubie[e.depth1]),g=f&15,f>>=4,c=gt(e.phase1Cubie[e.depth1].ea,12,!0)%24,r=yr(f,g,!1),t=yr(a,s,!0),l=e.depth1==0?-1:e.move[e.depth1-1],o=e.preMoveLen==0?-1:e.preMoves[e.preMoveLen-1],L=0,m=(e.preMoveLen==0?1:2)*(e.depth1==0?1:2),u=0,p=(1<<m)-1;u<m;u++){if((p>>u&1)!=0){if(p&=~(1<<u),L=$L(e,a,s,f,g,c,r,t),L==0||L>2)break;L==2&&(p&=4<<u)}if(p==0)break;(u&1)==0&&e.depth1>0?(i=(Ze(),Jn)[~~(l/3)*3+1],e.move[e.depth1-1]=vt[i]*2-e.move[e.depth1-1],c=(Zr(),Qn)[c][i],a=Tn[a][(X(),br)[s][i]],s=rr[a&15][s],a>>=4,f=Wn[f][br[g][i]],g=rr[f&15][g],f>>=4,t=yr(a,s,!0),r=yr(f,g,!1)):e.preMoveLen>0&&(i=(Ze(),Jn)[~~(o/3)*3+1],e.preMoves[e.preMoveLen-1]=vt[i]*2-e.preMoves[e.preMoveLen-1],c=(X(),yi)[(Zr(),Qn)[yi[c]][i]],a=Tn[t>>4][br[t&15][i]],t=a&-16|rr[a&15][t&15],a=yr(t>>4,t&15,!0),s=a&15,a>>=4,f=Wn[r>>4][br[r&15][i]],r=f&-16|rr[f&15][r&15],f=yr(r>>4,r&15,!1),g=f&15,f>>=4)}return e.depth1>0&&(e.move[e.depth1-1]=l),e.preMoveLen>0&&(e.preMoves[e.preMoveLen-1]=o),L==0?0:2}function tB(e){var t;for(e.conjMask=0,e.selfSym=r1(e.cc),e.conjMask|=Ls(Wt(Yr(e.selfSym,16),{l:Ye,m:0,h:0}),{l:0,m:0,h:0})?18:0,e.conjMask|=Ls(Wt(Yr(e.selfSym,32),{l:Ye,m:0,h:0}),{l:0,m:0,h:0})?36:0,e.conjMask|=Ls(Wt(Yr(e.selfSym,48),{l:Ye,m:0,h:0}),{l:0,m:0,h:0})?56:0,e.selfSym=Wt(e.selfSym,{l:rt,m:rt,h:15}),e.maxPreMoves=e.conjMask>7?0:20,t=0;t<6;t++)Ds(e.urfCubieCube[t],e.cc),Xu(e.urfCoordCube[t],e.urfCubieCube[t],20),t1(e.cc),t%3==2&&Di(e.cc)}function s1(e,t,r,n,l){var o,i,a,s,f,g;if(t.prun==0&&n<5)return e.allowShorter||n==0?(e.depth1-=n,f=eB(e),e.depth1+=n,f):1;for(g=o1(ms(r)),o=0;o<18;o+=3)if(!(o==l||o==l-9)){for(a=0;a<3;a++)if(i=o+a,!(e.isRec&&i!=e.move[e.depth1-n]||g!=0&&(g&1<<i)!=0)){if(s=NL(e.nodeUD[n],t,i),s>n)break;if(s==n)continue;if(s=GL(e.nodeUD[n],t,i),s>n)break;if(s==n)continue;if(e.move[e.depth1-n]=i,e.valid1=Rs(e.valid1,e.depth1-n),f=s1(e,e.nodeUD[n],r&Jr((X(),Ui)[i]),n-1,o),f==0)return 0;if(f>=2)break}}return 1}function f1(e,t,r,n,l){var o,i,a;if(e.preMoveLen=e.maxPreMoves-t,(e.isRec?e.depth1==e.length1-e.preMoveLen:e.preMoveLen==0||(225207>>r&1)==0)&&(e.depth1=e.length1-e.preMoveLen,e.phase1Cubie[0]=n,e.allowShorter=e.depth1==ks&&e.preMoveLen!=0,Xu(e.nodeUD[e.depth1+1],n,e.depth1)&&s1(e,e.nodeUD[e.depth1+1],l,e.depth1,-1)==0))return 0;if(t==0||e.preMoveLen+ks>=e.length1)return 1;for(a=o1(ms(l)),(t==1||e.preMoveLen+1+ks>=e.length1)&&(a|=225207),r=~~(r/3)*3,o=0;o<18;o++){if(o==r||o==r-9||o==r+9){o+=2;continue}if(!(e.isRec&&o!=e.preMoves[e.maxPreMoves-t]||(a&1<<o)!=0)&&(Ar((X(),ce)[o],n,e.preMoveCubes[t]),Dt(ce[o],n,e.preMoveCubes[t]),e.preMoves[e.maxPreMoves-t]=o,i=f1(e,t-1,o,e.preMoveCubes[t],l&Jr(Ui[o])),i==0))return 0}return 1}function u1(e,t,r,n,l,o,i,a,s){var f,g,c,u,p,m,L,R,h,y,A;if(t==0&&n==0&&o==0)return i;for(h=(Ze(),Xl)[s],L=0;L<10;L++){if((h>>L&1)!=0){L+=66>>L&3;continue}if(R=(Zr(),Qn)[o][L],g=Tn[n][(X(),br)[l][L]],c=rr[g&15][l],g>>=4,p=Wn[t][br[r][L]],m=rr[p&15][r],p>>=4,u=yr(p,m,!1),f=yr(g,c,!0),y=ft(In,(u>>4)*140+Xr[Hn[f>>4]&255][ut[u&15][f&15]]),y>i+1)return i-y+1;if(y>=i){L+=66>>L&3&i-y;continue}if(y=hr(ft(pi,g*24+ql[R][c]),ft(In,p*140+Xr[Hn[g]&255][ut[m][c]])),y>=i){L+=66>>L&3&i-y;continue}if(A=u1(e,p,m,g,c,R,i-1,a+1,L),A>=0)return e.move[a]=vt[L],A;if(A<-2)break;A<-1&&(L+=66>>L&3)}return-1}function rB(e){for(e.length1=e.isRec?e.length1:0;e.length1<e.solLen;e.length1++)for(e.maxDep2=Rs(c1,e.solLen-e.length1-1),e.urfIdx=e.isRec?e.urfIdx:0;e.urfIdx<6;e.urfIdx++)if((e.conjMask&1<<e.urfIdx)==0&&f1(e,e.maxPreMoves,-30,e.urfCubieCube[e.urfIdx],Jr(Wt(e.selfSym,{l:Ye,m:0,h:0})))==0)return e.solution?R1(e.solution):"Error 8";return e.solution?R1(e.solution):"Error 7"}function nB(e,t){var r;return r=lB(e,t),r!=0?"Error "+(r<0?-r:r):(e.solLen=22,e.probe={l:0,m:0,h:0},e.probeMax={l:3531008,m:23,h:0},e.probeMin={l:0,m:0,h:0},e.verbose=0,e.solution=null,e.isRec=!1,$u(!1),tB(e),rB(e))}function lB(e,t){var r,n,l,o;for(n=0,l=Z(re,se,0,54,7,1),r=_L(te(ee(Ue,1),ye,0,7,[t.charCodeAt(4),t.charCodeAt(13),t.charCodeAt(22),t.charCodeAt(31),t.charCodeAt(40),t.charCodeAt(49)])),o=0;o<54;o++){if(l[o]=kL(r,CL(t.charCodeAt(o)))<<24>>24,l[o]==-1)return-1;n+=1<<(l[o]<<2)}return n!=10066329?-1:(oB(l,e.cc),YL(e.cc))}function g1(){var e,t,r;for(this.move=Z(Oe,Ge,0,31,7,1),this.nodeUD=Z(Ri,fe,31,21,0,1),this.nodeRL=Z(Ri,fe,31,21,0,1),this.nodeFB=Z(Ri,fe,31,21,0,1),this.cc=new ge,this.urfCubieCube=Z(Zl,fe,7,6,0,1),this.urfCoordCube=Z(Ri,fe,31,6,0,1),this.phase1Cubie=Z(Zl,fe,7,21,0,1),this.preMoveCubes=Z(Zl,fe,7,21,0,1),this.preMoves=Z(Oe,Ge,0,20,7,1),t=0;t<21;t++)this.nodeUD[t]=new Ql,this.nodeRL[t]=new Ql,this.nodeFB[t]=new Ql,this.phase1Cubie[t]=new ge;for(r=0;r<6;r++)this.urfCubieCube[r]=new ge,this.urfCoordCube[r]=new Ql;for(e=0;e<20;e++)this.preMoveCubes[e+1]=new ge}function Ze(){if(!p1){p1=!0;var e,t,r,n,l,o;for(rn=te(ee(re,2),fe,10,0,[te(ee(re,1),se,0,7,[8,9,20]),te(ee(re,1),se,0,7,[6,18,38]),te(ee(re,1),se,0,7,[0,36,47]),te(ee(re,1),se,0,7,[2,45,11]),te(ee(re,1),se,0,7,[29,26,15]),te(ee(re,1),se,0,7,[27,44,24]),te(ee(re,1),se,0,7,[33,53,42]),te(ee(re,1),se,0,7,[35,17,51])]),lr=te(ee(re,2),fe,10,0,[te(ee(re,1),se,0,7,[5,10]),te(ee(re,1),se,0,7,[7,19]),te(ee(re,1),se,0,7,[3,37]),te(ee(re,1),se,0,7,[1,46]),te(ee(re,1),se,0,7,[32,16]),te(ee(re,1),se,0,7,[28,25]),te(ee(re,1),se,0,7,[30,43]),te(ee(re,1),se,0,7,[34,52]),te(ee(re,1),se,0,7,[23,12]),te(ee(re,1),se,0,7,[21,41]),te(ee(re,1),se,0,7,[50,39]),te(ee(re,1),se,0,7,[48,14])]),nr=nt(Oe,[fe,Ge],[17,0],7,[13,13],2),zs=te(ee(PL,1),fe,2,4,["U ","U2","U'","R ","R2","R'","F ","F2","F'","D ","D2","D'","L ","L2","L'","B ","B2","B'"]),vt=te(ee(Oe,1),Ge,0,7,[0,1,2,4,7,9,10,11,13,16,3,5,6,8,12,14,15,17]),Jn=Z(Oe,Ge,0,18,7,1),Xl=Z(Oe,Ge,0,11,7,1),t=0;t<18;t++)Jn[vt[t]]=t;for(r=0;r<10;r++)for(n=~~(vt[r]/3),Xl[r]=0,l=0;l<10;l++)o=~~(vt[l]/3),Xl[r]|=(n==o||n%3==o%3&&n>=o?1:0)<<l;for(Xl[10]=0,e=0;e<13;e++)for(nr[e][0]=nr[e][e]=1,l=1;l<e;l++)nr[e][l]=nr[e-1][l-1]+nr[e-1][l]}}function Yn(e,t,r){Ze();var n,l,o,i,a;for(n=e.length-1,o=0,a=4,l=n;l>=0;l--)i=m1(e[l],r),(i&12)==t&&(o+=nr[l][a--]);return o}function _s(e,t){Ze();var r,n;for(n=0,r=t-2;r>=0;r--)n^=e%(t-r),e=~~(e/(t-r));return n&1}function gt(e,t,r){Ze();var n,l,o,i;for(l=0,i={l:1323536,m:2777561,h:1043915},n=0;n<t-1;n++)o=m1(e[n],r)<<2,l=(t-n)*l+Jr(Wt(Yr(i,o),{l:15,m:0,h:0})),i=Hu(i,ui({l:1118480,m:279620,h:69905},o));return l}function m1(e,t){return t?e>>1:e&7}function L1(e,t,r,n){Ze();var l,o,i,a;for(l=e.length-1,a=4,o=l,i=l;i>=0;i--)t>=nr[i][a]?(t-=nr[i][a--],e[i]=xi(e[i],a|r,n)):((o&12)==r&&(o-=4),e[i]=xi(e[i],o--,n))}function tn(e,t,r,n){Ze();var l,o,i,a,s,f;for(f={l:1323536,m:2777561,h:1043915},l={l:0,m:0,h:0},a=2;a<=r;a++)l=Bs(ui(l,4),ms(t%a)),t=~~(t/a);for(o=0;o<r-1;o++)s=(Jr(l)&15)<<2,l=Yr(l,4),e[o]=xi(e[o],Jr(Wt(Yr(f,s),{l:15,m:0,h:0})),n),i=Hu(ui({l:1,m:0,h:0},s),{l:1,m:0,h:0}),f=Bs(Wt(f,i),Wt(Yr(f,4),{l:~i.l&rt,m:~i.m&rt,h:~i.h&Rr}));e[r-1]=xi(e[r-1],Jr(Wt(f,{l:15,m:0,h:0})),n)}function xi(e,t,r){return(r?t<<1|e&1:t|e&-8)<<24>>24}function oB(e,t){Ze();var r,n,l,o,i,a,s,f;for(o=0;o<8;o++)t.ca[o]=0;for(i=0;i<12;i++)t.ea[i]=0;for(a=0;a<8;a++){for(f=0;f<3&&!(e[rn[a][f]]==0||e[rn[a][f]]==3);f++);for(r=e[rn[a][(f+1)%3]],n=e[rn[a][(f+2)%3]],s=0;s<8;s++)if(r==~~(rn[s][1]/9)&&n==~~(rn[s][2]/9)){t.ca[a]=si(f%3<<3|s);break}}for(l=0;l<12;l++)for(s=0;s<12;s++){if(e[lr[l][0]]==~~(lr[s][0]/9)&&e[lr[l][1]]==~~(lr[s][1]/9)){t.ea[l]=si(s<<1);break}if(e[lr[l][0]]==~~(lr[s][1]/9)&&e[lr[l][1]]==~~(lr[s][0]/9)){t.ea[l]=si(s<<1|1);break}}}function B1(e,t){var r,n,l;if(e.length_0==0){e.moves[e.length_0++]=t;return}if(r=~~(t/3),n=~~(e.moves[e.length_0-1]/3),r==n){l=(t%3+e.moves[e.length_0-1]%3+1)%4,l==3?--e.length_0:e.moves[e.length_0-1]=r*3+l;return}if(e.length_0>1&&r%3==n%3&&r==~~(e.moves[e.length_0-2]/3)){l=(t%3+e.moves[e.length_0-2]%3+1)%4,l==3?(e.moves[e.length_0-2]=e.moves[e.length_0-1],--e.length_0):e.moves[e.length_0-2]=r*3+l;return}e.moves[e.length_0++]=t}function iB(e,t,r,n){e.verbose=t,e.urfIdx=r,e.depth1=n}function R1(e){var t,r,n;if(r=new ML,n=(e.verbose&2)!=0?(e.urfIdx+3)%6:e.urfIdx,n<3)for(t=0;t<e.length_0;t++)(e.verbose&1)!=0&&t==e.depth1&&(r.string+=".  "),Yu(Ju(r,(Ze(),zs)[(X(),bi)[n][e.moves[t]]]));else for(t=e.length_0-1;t>=0;t--)Yu(Ju(r,(Ze(),zs)[(X(),bi)[n][e.moves[t]]])),(e.verbose&1)!=0&&t==e.depth1&&(r.string+=".  ");return r.string}function d1(){this.moves=Z(Oe,Ge,0,31,7,1)}var fe,rt,Rr,DL,Ye,ye,Ge,gs,Wl,se,H,ai,gi,PL,Zu,Xr,ds,Tn,In,Wn,Kn,pi,ql,Qn,jn,qn,Dr,mi,Fr,Li,Bi,Ri,e1,er,tr,Vn,$r,Us,Ur,yi,Hn,bs,en,Yl,br,rr,ut,i1,xs,ws,Jl,Ss,a1,ce,Ui,vs,Es,bi,Zl,c1,ks,p1,nr,Xl,rn,lr,zs,Jn,vt,Oe,aB,re,sB,Ue,fB,uB,D1=U(()=>{fe={3:1},rt=4194303,Rr=1048575,DL=524288,Ye=65535,ye={11:1,3:1},Ge={17:1,3:1},gs=14540032,Wl=286331153,se={10:1,3:1},ai={};Kl(1,null,{},UL);Kl(79,1,{},cs);H.createClassLiteralForArray=function(t){var r;return r=new cs,r.modifiers=4,t>1?r.componentType=Ku(this,t-1):r.componentType=this,r};H.isPrimitive=function(){return(this.modifiers&1)!=0};PL=dr("java.lang","String",2);Zu=!1;Kl(31,1,{31:1},Ql);H.flip=0;H.flipc=0;H.fsym=0;H.prun=0;H.slice_0=0;H.tsym=0;H.twist=0;H.twistc=0;Bi=0,Ri=dr("org.cubing.min2phase.client","CoordCube",31),e1=!1;Zl=dr("org.cubing.min2phase.client","CubieCube",7);Kl(72,1,{},g1);H.allowShorter=!1;H.conjMask=0;H.depth1=0;H.isRec=!1;H.length1=0;H.maxDep2=0;H.maxPreMoves=0;H.preMoveLen=0;H.probe={l:0,m:0,h:0};H.probeMax={l:0,m:0,h:0};H.probeMin={l:0,m:0,h:0};H.selfSym={l:0,m:0,h:0};H.solLen=0;H.urfIdx=0;H.valid1=0;H.verbose=0;c1=12,ks=7,p1=!1;Kl(150,1,{},d1);H.depth1=0;H.length_0=0;H.urfIdx=0;H.verbose=0;Oe=fi("int","I");dr("com.google.gwt.lang","CollapsedPropertyHolder",252);dr("com.google.gwt.lang","JavaClassHierarchySetupUtil",254);aB=dr("com.google.gwt.lang","LongLibBase/LongEmul",null);dr("com.google.gwt.lang","ModuleUtils",257);re=fi("byte","B"),sB=fi("long","J"),Ue=fi("char","C");dr("com.google.gwt.user.client.rpc","XsrfToken",null),bL("java.util","Map/Entry");fB=function(){$u(!1)},uB=function(e){return nB(new g1,e)}});async function F1(){let e=await Me["3x3x3"].kpuzzle(),t=e.startState();for(let r of Tu)t=t.applyAlg(_.fromString((await $t())(r)));return Gu(e,t)?t:F1()}function A1(){return gB??(gB=Promise.resolve().then(()=>(D1(),h1)))}async function Cs(e){return Se(),_.fromString((await A1()).solveState(Pu(e)))}async function Zn(){return Cs(await F1())}async function y1(){(await A1()).initialize()}async function U1(){return On(await Zn(),cB)}async function x1(){let e=new Lt,t=await Zn();return e.experimentalPushAlg(b1),e.experimentalPushAlg(t),e.experimentalPushAlg(b1),e.toAlg()}var gB,cB,b1,Ps=U(()=>{Re();Xt();ht();dt();ii();Mu();Ou();Iu();gB=null;cB=[[null,"Rw","Rw2","Rw'","Fw","Fw'"],[null,"Dw","Dw2","Dw'"]];b1=new _("R' U' F")});function ue(e,...t){let r=t.length,n=e[t[r-1]];for(let l=r;l>0;l--)e[t[l]]=e[t[l-1]];return e[t[0]]=n,ue}function w1(e,t,r,n){r=(r||8)-1;let l=1985229328,o=0;n??(n=0),n<0&&(t<<=1);for(let i=0;i<r;++i){let a=Ms[r-i],s=~~(t/a);o^=s,t%=a,s<<=2,e[i]=l>>s&7;let f=(1<<s)-1;l=(l&f)+(l>>4&~f)}return n<0&&(o&1)!=0?(e[r]=e[r-1],e[r-1]=l&7):e[r]=l&7,e}var Le,Ms,S1=U(()=>{Le=[],Ms=[1];for(let e=0;e<32;++e){Le[e]=[];for(let t=0;t<32;++t)Le[e][t]=0}for(let e=0;e<32;++e){Le[e][0]=Le[e][e]=1,Ms[e+1]=Ms[e]*(e+1);for(let t=1;t<e;++t)Le[e][t]=Le[e-1][t-1]+Le[e-1][t]}});var Pg={};Be(Pg,{initialize:()=>wR,random444Scramble:()=>SR});function G(e,t){let r=new Array(e);if(t!==void 0)for(let n=0;n<e;n++)r[n]=new Array(t);return r}function hB(e){return new $l[e]}function mt(e,t,r,...n){let l=$l[e];l&&!l.___clazz$?Y=l.prototype:(!l&&(l=$l[e]=function(){}),Y=l.prototype=t<0?{}:hB(t),Y.castableTypeMap$=r);for(let o of n)o.prototype=Y;l.___clazz$&&(Y.___clazz$=l.___clazz$,l.___clazz$=null)}function xr(e){let t={};for(let r=0,n=e.length;r<n;++r)t[e[r]]=1;return t}function _1(){}function DB(e,t){let r=z1(0,t);return C1(e.___clazz$,e.castableTypeMap$,e.queryId$,r),r}function z1(e,t){let r=new Array(t);if(e===3)for(let n=0;n<t;++n){let l={m:0,l:0,h:0};l.l=l.m=l.h=0,r[n]=l}else if(e>0){let n=[null,0,!1][e];for(let l=0;l<t;++l)r[l]=n}return r}function Os(e,t,r,n,l){let o=z1(l,n);return C1(e,t,r,o),o}function C1(e,t,r,n){return M1(),AB(n,Ts,Is),n.___clazz$=e,n.castableTypeMap$=t,n.queryId$=r,n}function wi(e,t,r){return e[t]=r}function M1(){P1||(P1=!0,Ts=[],Is=[],FB(new _1,Ts,Is))}function FB(e,t,r){let n=0,l;for(let o in e)(l=e[o])&&(t[n]=o,r[n]=l,++n)}function AB(e,t,r){M1();for(let n=0,l=t.length;n<l;++n)e[t[n]]=r[n]}function yB(e,t){return e.castableTypeMap$&&!!e.castableTypeMap$[t]}function UB(e,t){return e!==null&&yB(e,t)}function bB(){if(N1)return!1;N1=!0,_i=G(15582,36),zi=G(15582),kt=G(15582),el=G(48,48),_t=G(48,36),$n=G(48),Qs=G(48)}function Ws(e){e.ct=G(24)}function G1(e,t){let r,n;if(UB(t,E1)){for(r=t,n=0;n<24;++n)if(e.ct[n]!==r.ct[n])return!1;return!0}return!1}function Si(e){let t,r,n;for(r=0,n=8,t=23;t>=0;--t)e.ct[t]===1&&(r+=Le[t][n--]);return r}function vi(e){let t,r;if(Xn!==null)return Xn[Si(e)];for(r=0;r<48;++r){if(t=kB(Si(e)),t!==-1)return t*64+r;ae(e,0),r%2==1&&ae(e,1),r%8==7&&ae(e,2),r%16==15&&ae(e,3)}}function Et(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:D(e.ct,0,1,2,3,r);break;case 1:D(e.ct,16,17,18,19,r);break;case 2:D(e.ct,8,9,10,11,r);break;case 3:D(e.ct,4,5,6,7,r);break;case 4:D(e.ct,20,21,22,23,r);break;case 5:D(e.ct,12,13,14,15,r);break;case 6:D(e.ct,0,1,2,3,r),D(e.ct,8,20,12,16,r),D(e.ct,9,21,13,17,r);break;case 7:D(e.ct,16,17,18,19,r),D(e.ct,1,15,5,9,r),D(e.ct,2,12,6,10,r);break;case 8:D(e.ct,8,9,10,11,r),D(e.ct,2,19,4,21,r),D(e.ct,3,16,5,22,r);break;case 9:D(e.ct,4,5,6,7,r),D(e.ct,10,18,14,22,r),D(e.ct,11,19,15,23,r);break;case 10:D(e.ct,20,21,22,23,r),D(e.ct,0,8,4,14,r),D(e.ct,3,11,7,13,r);break;case 11:D(e.ct,12,13,14,15,r),D(e.ct,1,20,7,18,r),D(e.ct,0,23,6,17,r)}}function ae(e,t){switch(t){case 0:Et(e,19),Et(e,28);break;case 1:Et(e,21),Et(e,32);break;case 2:D(e.ct,0,3,1,2,1),D(e.ct,8,11,9,10,1),D(e.ct,4,7,5,6,1),D(e.ct,12,15,13,14,1),D(e.ct,16,19,21,22,1),D(e.ct,17,18,20,23,1);break;case 3:Et(e,18),Et(e,29),Et(e,24),Et(e,35)}}function O1(e,t){let r;for(r=0;r<t;++r)ae(e,0),r%2==1&&ae(e,1),r%8==7&&ae(e,2),r%16==15&&ae(e,3)}function Ks(e,t){let r,n;for(n=8,r=23;r>=0;--r)e.ct[r]=0,t>=Le[r][n]&&(t-=Le[r][n--],e.ct[r]=1)}function Ei(e,t){let r;for(r=0;r<24;++r)e.ct[r]=t.ct[r]}function eo(){let e;for(Ws(this),e=0;e<8;++e)this.ct[e]=1;for(e=8;e<24;++e)this.ct[e]=0}function ki(e,t){let r;for(Ws(this),r=0;r<24;++r)this.ct[r]=~~(e.ct[r]/2)===t?1:0}function to(e){let t;for(Ws(this),t=0;t<24;++t)this.ct[t]=e[t]}function xB(){let e,t,r=new eo,n=new eo;for(e=0;e<15582;++e)for(Ks(n,zi[e]),t=0;t<36;++t)Ei(r,n),Et(r,t),_i[e][t]=vi(r)}function wB(){let e,t,r,n,l,o,i,a;for(Zi(kt),kt[0]=0,t=0,r=1;r!==15582;)for(o=t>4,a=o?-1:t,e=o?t:-1,++t,n=0;n<15582;++n)if(kt[n]===a){for(i=0;i<27;++i)if(l=~~_i[n][i]>>>6,kt[l]===e)if(++r,o){kt[n]=t;break}else kt[l]=t}}function SB(e){let t,r,n,l=new to(e.ct);for(n=0;n<48;++n){for(t=!0,r=0;r<24;++r)if(l.ct[r]!==~~(r/4)){t=!1;break}if(t)return n;ae(l,0),n%2==1&&ae(l,1),n%8==7&&ae(l,2),n%16==15&&ae(l,3)}return-1}function vB(){let e,t,r,n=new eo;for(e=0;e<24;++e)n.ct[e]=e;let l=new to(n.ct),o=new to(n.ct),i=new to(n.ct);for(e=0;e<48;++e){for(t=0;t<48;++t){for(r=0;r<48;++r)G1(n,l)&&(el[e][t]=r,r===0&&($n[e]=t)),ae(l,0),r%2==1&&ae(l,1),r%8==7&&ae(l,2),r%16==15&&ae(l,3);ae(n,0),t%2==1&&ae(n,1),t%8==7&&ae(n,2),t%16==15&&ae(n,3)}ae(n,0),e%2==1&&ae(n,1),e%8==7&&ae(n,2),e%16==15&&ae(n,3)}for(e=0;e<48;++e)for(Ei(n,o),O1(n,$n[e]),t=0;t<36;++t)for(Ei(l,n),Et(l,t),O1(l,e),r=0;r<36;++r)if(Ei(i,o),Et(i,r),G1(i,l)){_t[e][t]=r;break}for(Ks(n,0),e=0;e<48;++e)Qs[$n[e]]=Si(n),ae(n,0),e%2==1&&ae(n,1),e%8==7&&ae(n,2),e%16==15&&ae(n,3)}function EB(){let e,t,r,n,l=new eo,o=G(22984);for(t=0;t<22984;t++)o[t]=0;for(e=0,t=0;t<735471;++t)if((o[~~t>>>5]&1<<(t&31))==0){for(Ks(l,t),n=0;n<48;++n)r=Si(l),o[~~r>>>5]|=1<<(r&31),Xn!==null&&(Xn[r]=e<<6|$n[n]),ae(l,0),n%2==1&&ae(l,1),n%8==7&&ae(l,2),n%16==15&&ae(l,3);zi[e++]=t}}function kB(e){let t=dR(zi,e);return t>=0?t:-1}function _B(){T1||(T1=!0,Ni=G(70,28),Mi=G(6435,28),q1=G(70,16),Q1=G(6435,16),lt=G(450450),j1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0])}function Ci(e){let t,r,n;for(r=0,n=8,t=14;t>=0;--t)e.ct[t]!==e.ct[15]&&(r+=Le[t][n--]);return r}function Pi(e){let t,r,n;for(r=0,n=4,t=6;t>=0;--t)e.rl[t]!==e.rl[7]&&(r+=Le[t][n--]);return r*2+e.parity}function tl(e,t){e.parity^=j1[t];let r=t%3;switch(t=~~(t/3),t){case 0:D(e.ct,0,1,2,3,r);break;case 1:D(e.rl,0,1,2,3,r);break;case 2:D(e.ct,8,9,10,11,r);break;case 3:D(e.ct,4,5,6,7,r);break;case 4:D(e.rl,4,5,6,7,r);break;case 5:D(e.ct,12,13,14,15,r);break;case 6:D(e.ct,0,1,2,3,r),D(e.rl,0,5,4,1,r),D(e.ct,8,9,12,13,r);break;case 7:D(e.rl,0,1,2,3,r),D(e.ct,1,15,5,9,r),D(e.ct,2,12,6,10,r);break;case 8:D(e.ct,8,9,10,11,r),D(e.rl,0,3,6,5,r),D(e.ct,3,2,5,4,r);break;case 9:D(e.ct,4,5,6,7,r),D(e.rl,3,2,7,6,r),D(e.ct,11,10,15,14,r);break;case 10:D(e.rl,4,5,6,7,r),D(e.ct,0,8,4,14,r),D(e.ct,3,11,7,13,r);break;case 11:D(e.ct,12,13,14,15,r),D(e.rl,1,4,7,2,r),D(e.ct,1,0,7,6,r)}}function rl(e,t){switch(t){case 0:tl(e,19),tl(e,28);break;case 1:tl(e,21),tl(e,32);break;case 2:D(e.ct,0,3,1,2,1),D(e.ct,8,11,9,10,1),D(e.ct,4,7,5,6,1),D(e.ct,12,15,13,14,1),D(e.rl,0,3,5,6,1),D(e.rl,1,2,4,7,1)}}function I1(e,t,r){let n;for(n=0;n<16;++n)e.ct[n]=~~(t.ct[n]/2);for(n=0;n<8;++n)e.rl[n]=t.ct[n+16];e.parity=r}function W1(e,t){let r,n;for(n=8,e.ct[15]=0,r=14;r>=0;--r)t>=Le[r][n]?(t-=Le[r][n--],e.ct[r]=1):e.ct[r]=0}function K1(e,t){let r,n;for(e.parity=t&1,t>>>=1,n=4,e.rl[7]=0,r=6;r>=0;--r)t>=Le[r][n]?(t-=Le[r][n--],e.rl[r]=1):e.rl[r]=0}function js(){this.rl=G(8),this.ct=G(16)}function zB(){let e,t,r,n,l,o,i,a,s,f,g=new js;for(l=0;l<70;++l)for(a=0;a<28;++a)K1(g,l),tl(g,ln[a]),Ni[l][a]=Pi(g);for(l=0;l<70;++l)for(K1(g,l),i=0;i<16;++i)q1[l][i]=Pi(g),rl(g,0),i%2==1&&rl(g,1),i%8==7&&rl(g,2);for(l=0;l<6435;++l)for(W1(g,l),i=0;i<16;++i)Q1[l][i]=Ci(g)&65535,rl(g,0),i%2==1&&rl(g,1),i%8==7&&rl(g,2);for(l=0;l<6435;++l)for(a=0;a<28;++a)W1(g,l),tl(g,ln[a]),Mi[l][a]=Ci(g)&65535;for(Zi(lt),lt[0]=lt[18]=lt[28]=lt[46]=lt[54]=lt[56]=0,r=0,n=6;n!==450450;){let c=r>6,u=c?-1:r,p=c?r:-1;for(++r,l=0;l<450450;++l)if(lt[l]===u){for(e=~~(l/70),s=l%70,a=0;a<23;++a)if(t=Mi[e][a],f=Ni[s][a],o=t*70+f,lt[o]===p)if(++n,c){lt[l]=r;break}else lt[o]=r}}}function CB(){V1||(V1=!0,ro=G(29400,20),Y1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],wr=G(29400),Hs=[0,9,14,23,27,28,41,42,46,55,60,69],Ys=G(70))}function qs(e){let t,r,n,l;for(r=0,l=4,t=6;t>=0;--t)e.ud[t]!==e.ud[7]&&(r+=Le[t][l--]);for(r*=35,l=4,t=6;t>=0;--t)e.fb[t]!==e.fb[7]&&(r+=Le[t][l--]);r*=12;let o=e.fb[7]^e.ud[7];for(n=0,l=4,t=7;t>=0;--t)e.rl[t]!==o&&(n+=Le[t][l--]);return e.parity+2*(r+Ys[n])}function PB(e,t){switch(e.parity^=Y1[t],t){case 0:case 1:case 2:D(e.ud,0,1,2,3,t%3);break;case 3:D(e.rl,0,1,2,3,1);break;case 4:case 5:case 6:D(e.fb,0,1,2,3,(t-1)%3);break;case 7:case 8:case 9:D(e.ud,4,5,6,7,(t-1)%3);break;case 10:D(e.rl,4,5,6,7,1);break;case 11:case 12:case 13:D(e.fb,4,5,6,7,(t+1)%3);break;case 14:D(e.ud,0,1,2,3,1),D(e.rl,0,5,4,1,1),D(e.fb,0,5,4,1,1);break;case 15:D(e.rl,0,1,2,3,1),D(e.fb,1,4,7,2,1),D(e.ud,1,6,5,2,1);break;case 16:D(e.fb,0,1,2,3,1),D(e.ud,3,2,5,4,1),D(e.rl,0,3,6,5,1);break;case 17:D(e.ud,4,5,6,7,1),D(e.rl,3,2,7,6,1),D(e.fb,3,2,7,6,1);break;case 18:D(e.rl,4,5,6,7,1),D(e.fb,0,3,6,5,1),D(e.ud,0,3,4,7,1);break;case 19:D(e.fb,4,5,6,7,1),D(e.ud,0,7,6,1,1),D(e.rl,1,4,7,2,1)}}function H1(e,t,r){let n,l=(t.ct[0]>t.ct[8]?1:0)^(t.ct[8]>t.ct[16]?1:0)^(t.ct[0]>t.ct[16]?1:0)?1:0;for(n=0;n<8;++n)e.ud[n]=t.ct[n]&1^1,e.fb[n]=t.ct[n+8]&1^1,e.rl[n]=t.ct[n+16]&1^1^l;e.parity=l^r}function MB(e,t){let r,n,l,o;for(e.parity=t&1,t>>>=1,l=Hs[t%12],t=~~(t/12),o=4,r=7;r>=0;--r)e.rl[r]=0,l>=Le[r][o]&&(l-=Le[r][o--],e.rl[r]=1);for(n=t%35,t=~~(t/35),o=4,e.fb[7]=0,r=6;r>=0;--r)n>=Le[r][o]?(n-=Le[r][o--],e.fb[r]=1):e.fb[r]=0;for(o=4,e.ud[7]=0,r=6;r>=0;--r)t>=Le[r][o]?(t-=Le[r][o--],e.ud[r]=1):e.ud[r]=0}function Vs(){this.ud=G(8),this.rl=G(8),this.fb=G(8)}function NB(){let e,t,r,n;for(r=0;r<12;++r)Ys[Hs[r]]=r;let l=new Vs;for(r=0;r<29400;++r)for(n=0;n<20;++n)MB(l,r),PB(l,n),ro[r][n]=qs(l)&65535;for(Zi(wr),wr[0]=0,e=0,t=1;t!==29400;){for(r=0;r<29400;++r)if(wr[r]===e)for(n=0;n<17;++n)wr[ro[r][n]]===-1&&(wr[ro[r][n]]=e+1,++t);++e}}function GB(e,t){let r;for(r=0;r<24;++r)e.ct[r]=t.ct[r]}function OB(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:D(e.ct,0,1,2,3,r);break;case 1:D(e.ct,16,17,18,19,r);break;case 2:D(e.ct,8,9,10,11,r);break;case 3:D(e.ct,4,5,6,7,r);break;case 4:D(e.ct,20,21,22,23,r);break;case 5:D(e.ct,12,13,14,15,r);break;case 6:D(e.ct,0,1,2,3,r),D(e.ct,8,20,12,16,r),D(e.ct,9,21,13,17,r);break;case 7:D(e.ct,16,17,18,19,r),D(e.ct,1,15,5,9,r),D(e.ct,2,12,6,10,r);break;case 8:D(e.ct,8,9,10,11,r),D(e.ct,2,19,4,21,r),D(e.ct,3,16,5,22,r);break;case 9:D(e.ct,4,5,6,7,r),D(e.ct,10,18,14,22,r),D(e.ct,11,19,15,23,r);break;case 10:D(e.ct,20,21,22,23,r),D(e.ct,0,8,4,14,r),D(e.ct,3,11,7,13,r);break;case 11:D(e.ct,12,13,14,15,r),D(e.ct,1,20,7,18,r),D(e.ct,0,23,6,17,r)}}function Js(){let e;for(this.ct=G(24),e=0;e<24;++e)this.ct[e]=~~(e/4)}function J1(e){let t,r,n;for(Js.call(this),t=0;t<23;++t)n=t+e(24-t),this.ct[n]!==this.ct[t]&&(r=this.ct[t],this.ct[t]=this.ct[n],this.ct[n]=r)}function TB(){Z1||(Z1=!0,Ft=G(18),KB())}function X1(e){e.cp=[0,1,2,3,4,5,6,7],e.co=[0,0,0,0,0,0,0,0]}function $1(e,t){let r;for(r=0;r<8;++r)e.cp[r]=t.cp[r],e.co[r]=t.co[r]}function IB(e,t){!e.temps&&(e.temps=new Gi),eg(e,Ft[t],e.temps),$1(e,e.temps)}function WB(e,t){let r,n;for(n=0,r=6;r>=0;--r)n+=e.co[r]=t%3,t=~~(t/3);e.co[7]=(15-n)%3}function eg(e,t,r){let n,l,o,i;for(n=0;n<8;++n)r.cp[n]=e.cp[t.cp[n]],o=e.co[t.cp[n]],i=t.co[n],l=o,l=l+(o<3?i:6-i),l=l%3,(o>=3?1:0)^(i>=3?1:0)&&(l=l+3),r.co[n]=l}function Gi(){X1(this)}function Sr(e,t){X1(this),w1(this.cp,e),WB(this,t)}function tg(e){Sr.call(this,e(40320),e(2187))}function KB(){let e,t;for(Ft[0]=new Sr(15120,0),Ft[3]=new Sr(21021,1494),Ft[6]=new Sr(8064,1236),Ft[9]=new Sr(9,0),Ft[12]=new Sr(1230,412),Ft[15]=new Sr(224,137),e=0;e<18;e+=3)for(t=0;t<2;++t)Ft[e+t+1]=new Gi,eg(Ft[e+t],Ft[e],Ft[e+t+1])}function QB(){rg||(rg=!0,zt=G(1937880),Wi=G(1538),Ki=G(1538),al=G(11880),sg=[0,1,6,3,4,5,2,7],e0=G(160,12),t0=G(160,12),$s=[1,1,1,3,12,60,360,2520,20160,181440,1814400,19958400,239500800],Xs=[0,2,4,6,1,3,7,5,8,9,10,11])}function nl(e,t,r,n,l){let o=e.edgeo[l];e.edgeo[l]=e.edge[n],e.edge[n]=e.edgeo[r],e.edgeo[r]=e.edge[t],e.edge[t]=o}function ll(e,t){let r,n,l,o,i;for(e.isStd||ig(e),n=0,i=1985229328,o=47768,r=0;r<t;++r)l=e.edge[r]<<2,n*=12-r,l>=32?(n+=o>>l-32&15,o-=4368<<l-32):(n+=i>>l&15,o-=4369,i-=286331152<<l);return n}function ng(e){let t,r=ll(e,4);t=al[r];let n=t&7;t>>=3,Ti(e,n);let l=ll(e,10)%20160;return t*20160+l}function Oi(e,t){switch(e.isStd=!1,t){case 0:ue(e.edge,0,4,1,5),ue(e.edgeo,0,4,1,5);break;case 1:De(e.edge,0,4,1,5),De(e.edgeo,0,4,1,5);break;case 2:ue(e.edge,0,5,1,4),ue(e.edgeo,0,5,1,4);break;case 3:De(e.edge,5,10,6,11),De(e.edgeo,5,10,6,11);break;case 4:ue(e.edge,0,11,3,8),ue(e.edgeo,0,11,3,8);break;case 5:De(e.edge,0,11,3,8),De(e.edgeo,0,11,3,8);break;case 6:ue(e.edge,0,8,3,11),ue(e.edgeo,0,8,3,11);break;case 7:ue(e.edge,2,7,3,6),ue(e.edgeo,2,7,3,6);break;case 8:De(e.edge,2,7,3,6),De(e.edgeo,2,7,3,6);break;case 9:ue(e.edge,2,6,3,7),ue(e.edgeo,2,6,3,7);break;case 10:De(e.edge,4,8,7,9),De(e.edgeo,4,8,7,9);break;case 11:ue(e.edge,1,9,2,10),ue(e.edgeo,1,9,2,10);break;case 12:De(e.edge,1,9,2,10),De(e.edgeo,1,9,2,10);break;case 13:ue(e.edge,1,10,2,9),ue(e.edgeo,1,10,2,9);break;case 14:De(e.edge,0,4,1,5),De(e.edgeo,0,4,1,5),ue(e.edge,9,11),ue(e.edgeo,8,10);break;case 15:De(e.edge,5,10,6,11),De(e.edgeo,5,10,6,11),ue(e.edge,1,3),ue(e.edgeo,0,2);break;case 16:De(e.edge,0,11,3,8),De(e.edgeo,0,11,3,8),ue(e.edge,5,7),ue(e.edgeo,4,6);break;case 17:De(e.edge,2,7,3,6),De(e.edgeo,2,7,3,6),ue(e.edge,8,10),ue(e.edgeo,9,11);break;case 18:De(e.edge,4,8,7,9),De(e.edgeo,4,8,7,9),ue(e.edge,0,2),ue(e.edgeo,1,3);break;case 19:De(e.edge,1,9,2,10),De(e.edgeo,1,9,2,10),ue(e.edge,4,6),ue(e.edgeo,5,7)}}function ol(e,t){switch(e.isStd=!1,t){case 0:Oi(e,14),Oi(e,17);break;case 1:nl(e,11,5,10,6),nl(e,5,10,6,11),nl(e,1,2,3,0),nl(e,4,9,7,8),nl(e,8,4,9,7),nl(e,0,1,2,3);break;case 2:At(e,4,5),At(e,5,4),At(e,11,8),At(e,8,11),At(e,7,6),At(e,6,7),At(e,9,10),At(e,10,9),At(e,1,1),At(e,0,0),At(e,3,3),At(e,2,2)}}function Ti(e,t){for(;t>=2;)t-=2,ol(e,1),ol(e,2);t!==0&&ol(e,0)}function no(e,t){let r,n,l,o,i,a;for(i=1985229328,a=47768,l=0,r=0;r<11;++r)if(n=$s[11-r],o=~~(t/n),t=t%n,l^=o,o<<=2,o>=32){o=o-32,e.edge[r]=a>>o&15;let s=(1<<o)-1;a=(a&s)+(a>>4&~s)}else{e.edge[r]=i>>o&15;let s=(1<<o)-1;i=(i&s)+(i>>>4&~s)+(a<<28),a=a>>4}for((l&1)==0?e.edge[11]=i:(e.edge[11]=e.edge[10],e.edge[10]=i),r=0;r<12;++r)e.edgeo[r]=r;e.isStd=!0}function lg(e,t){let r;for(r=0;r<12;++r)e.edge[r]=t.edge[r],e.edgeo[r]=t.edgeo[r];e.isStd=t.isStd}function og(e,t){let r,n,l,o;for(e.temp===null&&(e.temp=G(12)),r=0;r<12;++r)e.temp[r]=r,e.edge[r]=t.ep[Xs[r]+12]%12;for(n=1,r=0;r<12;++r)for(;e.edge[r]!==r;)o=e.edge[r],e.edge[r]=e.edge[o],e.edge[o]=o,l=e.temp[r],e.temp[r]=e.temp[o],e.temp[o]=l,n^=1;for(r=0;r<12;++r)e.edge[r]=e.temp[t.ep[Xs[r]]%12];return n}function ig(e){let t;for(e.temp===null&&(e.temp=G(12)),t=0;t<12;++t)e.temp[e.edgeo[t]]=t;for(t=0;t<12;++t)e.edge[t]=e.temp[e.edge[t]],e.edgeo[t]=t;e.isStd=!0}function De(e,t,r,n,l){let o;o=e[t],e[t]=e[n],e[n]=o,o=e[r],e[r]=e[l],e[l]=o}function At(e,t,r){let n=e.edge[t];e.edge[t]=e.edgeo[r],e.edgeo[r]=n}function or(){this.edge=G(12),this.edgeo=G(12)}function jB(){let e,t,r,n,l,o,i,a,s,f,g,c,u,p,m,L,R,h,y,A,k,E,Q=new or,$=new or,N=new or;for(Zi(zt),a=0,Ii=1,Zs(zt,0,0);Ii!==31006080&&(m=a>9,i=a%3,o=(a+1)%3,f=m?3:i,e=m?i:3,!(a>=9));){for(c=0;c<31006080;c+=16)if(E=zt[~~c>>4],!(!m&&E===-1)){for(g=c,s=c+16;g<s;++g,E>>=2)if((E&3)===f){for(y=~~(g/20160),t=Wi[y],n=g%20160,no(Q,t*20160+n),R=0;R<17;++R)if(r=il(Q.edge,R<<3,4),A=al[r],k=A&7,A>>=3,l=il(Q.edge,R<<3|k,10)%20160,u=A*20160+l,lo(zt,u)===e){if(Zs(zt,m?g:u,o),++Ii,m)break;if(h=Ki[A],h!==1)for(lg($,Q),Oi($,R),Ti($,k),L=1;(h=~~h>>1&65535)!=0;++L)(h&1)==1&&(lg(N,$),Ti(N,L),p=A*20160+ll(N,10)%20160,lo(zt,p)===e&&(Zs(zt,p,o),++Ii))}}}++a}}function lo(e,t){return e[t>>4]>>((t&15)<<1)&3}function il(e,t,r){let n,l,o,i,a,s=t0[t],f=e0[t];for(l=0,a=1985229328,i=47768,n=0;n<r;++n)o=s[e[f[n]]]<<2,l*=12-n,o>=32?(l+=i>>o-32&15,i-=4368<<o-32):(l+=a>>o&15,i-=4369,a-=286331152<<o);return l}function ag(e){let t,r,n,l,o,i,a,s,f,g,c,u=new or;if(i=0,o=lo(zt,e),o===3)return 10;for(;e!==0;)for(o===0?o=2:--o,f=~~(e/20160),t=Wi[f],n=e%20160,no(u,t*20160+n),s=0;s<17;++s)if(r=il(u.edge,s<<3,4),g=al[r],c=g&7,g>>=3,l=il(u.edge,s<<3|c,10)%20160,a=g*20160+l,lo(zt,a)===o){++i,e=a;break}return i}function qB(e,t){let r=lo(zt,e);return r===3?10:(1227133513<<r>>t&3)+t-1}function VB(){let e,t,r,n=new or;for(t=0;t<20;++t)for(r=0;r<8;++r){for(no(n,0),Oi(n,t),Ti(n,r),e=0;e<12;++e)e0[t<<3|r][e]=n.edge[e];for(ig(n),e=0;e<12;++e)t0[t<<3|r][e]=n.temp[e]}}function HB(){let e,t,r,n,l=new or,o=G(1485);for(t=0;t<1485;t++)o[t]=0;for(e=0,t=0;t<11880;++t)if((o[~~t>>>3]&1<<(t&7))==0){for(no(l,t*$s[8]),n=0;n<8;++n)r=ll(l,4),r===t&&(Ki[e]=(Ki[e]|1<<n)&65535),o[~~r>>3]=o[~~r>>3]|1<<(r&7),al[r]=e<<3|sg[n],ol(l,0),n%2==1&&(ol(l,1),ol(l,2));Wi[e++]=t}}function Zs(e,t,r){e[t>>4]^=(3^r)<<((t&15)<<1)}function YB(){fg||(fg=!0)}function JB(e){let t,r,n;for(t=0,n=!1,r=0;r<12;++r)t|=1<<e.ep[r],n=n!==e.ep[r]>=12;return t&=~~t>>12,t===0&&!n}function ZB(e,t){let r;for(r=0;r<24;++r)e.ep[r]=t.ep[r]}function XB(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:D(e.ep,0,1,2,3,r),D(e.ep,12,13,14,15,r);break;case 1:D(e.ep,11,15,10,19,r),D(e.ep,23,3,22,7,r);break;case 2:D(e.ep,0,11,6,8,r),D(e.ep,12,23,18,20,r);break;case 3:D(e.ep,4,5,6,7,r),D(e.ep,16,17,18,19,r);break;case 4:D(e.ep,1,20,5,21,r),D(e.ep,13,8,17,9,r);break;case 5:D(e.ep,2,9,4,10,r),D(e.ep,14,21,16,22,r);break;case 6:D(e.ep,0,1,2,3,r),D(e.ep,12,13,14,15,r),D(e.ep,9,22,11,20,r);break;case 7:D(e.ep,11,15,10,19,r),D(e.ep,23,3,22,7,r),D(e.ep,2,16,6,12,r);break;case 8:D(e.ep,0,11,6,8,r),D(e.ep,12,23,18,20,r),D(e.ep,3,19,5,13,r);break;case 9:D(e.ep,4,5,6,7,r),D(e.ep,16,17,18,19,r),D(e.ep,8,23,10,21,r);break;case 10:D(e.ep,1,20,5,21,r),D(e.ep,13,8,17,9,r),D(e.ep,14,0,18,4,r);break;case 11:D(e.ep,2,9,4,10,r),D(e.ep,14,21,16,22,r),D(e.ep,7,15,1,17,r)}}function r0(){let e;for(this.ep=G(24),e=0;e<24;++e)this.ep[e]=e}function ug(e){let t,r,n;for(r0.call(this),t=0;t<23;++t)n=t+e(24-t),n!==t&&(r=this.ep[t],this.ep[t]=this.ep[n],this.ep[n]=r)}function $B(){gg||(gg=!0,n0=[35,1,34,2,4,6,22,5,19])}function cg(e){e.moveBuffer=G(60)}function eR(e,t){return e.value-t.value}function sl(e,t){let r;for(ZB(e.edge,t.edge),GB(e.center,t.center),$1(e.corner,t.corner),e.value=t.value,e.add1=t.add1,e.length1=t.length1,e.length2=t.length2,e.length3=t.length3,e.sym=t.sym,r=0;r<60;++r)e.moveBuffer[r]=t.moveBuffer[r];e.moveLength=t.moveLength,e.edgeAvail=t.edgeAvail,e.centerAvail=t.centerAvail,e.cornerAvail=t.cornerAvail}function vr(e){for(;e.centerAvail<e.moveLength;)OB(e.center,e.moveBuffer[e.centerAvail++]);return e.center}function pg(e){for(;e.cornerAvail<e.moveLength;)IB(e.corner,e.moveBuffer[e.cornerAvail++]%18);return e.corner}function oo(e){for(;e.edgeAvail<e.moveLength;)XB(e.edge,e.moveBuffer[e.edgeAvail++]);return e.edge}function tR(e){let t,r,n,l,o,i,a=new Array(e.moveLength-(e.add1?2:0));for(r=0,t=0;t<e.length1;++t)a[r++]=e.moveBuffer[t];for(i=e.sym,t=e.length1+(e.add1?2:0);t<e.moveLength;++t)_t[i][e.moveBuffer[t]]>=27?(a[r++]=_t[i][e.moveBuffer[t]]-9,l=n0[_t[i][e.moveBuffer[t]]-27],i=el[i][l]):a[r++]=_t[i][e.moveBuffer[t]];let s=el[$n[i]][SB(vr(e))];for(o="",i=s,t=r-1;t>=0;--t)n=a[t],n=~~(n/3)*3+(2-n%3),_t[i][n]>=27?(o=o+l0[_t[i][n]-9]+" ",l=n0[_t[i][n]-27],i=el[i][l]):o=o+l0[_t[i][n]]+" ";return o}function nn(e,t){e.moveBuffer[e.moveLength++]=t}function Qi(){cg(this),this.edge=new r0,this.center=new Js,this.corner=new Gi}function ji(e){Qi.call(this),sl(this,e)}function mg(e){cg(this),this.edge=new ug(e),this.center=new J1(e),this.corner=new tg(e)}function rR(e,t){return t.value-e.value}function qi(e,t){return rR(e,t)}function Lg(){}function nR(){if(Bg)return;Bg=!0;let e,t;for(l0=["U  ","U2 ","U' ","R  ","R2 ","R' ","F  ","F2 ","F' ","D  ","D2 ","D' ","L  ","L2 ","L' ","B  ","B2 ","B' ","Uw ","Uw2","Uw'","Rw ","Rw2","Rw'","Fw ","Fw2","Fw'","Dw ","Dw2","Dw'","Lw ","Lw2","Lw'","Bw ","Bw2","Bw'"],ln=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,21,22,23,25,28,30,31,32,34,36],io=[0,1,2,4,6,7,8,9,10,11,13,15,16,17,19,22,25,28,31,34,36],Rg=G(37),dg=G(37),fl=G(37,36),Vi=G(29,28),Hi=G(21,20),o0=G(36),ao=G(28),ul=G(20),e=0;e<29;++e)Rg[ln[e]]=e;for(e=0;e<21;++e)dg[io[e]]=e;for(e=0;e<36;++e){for(t=0;t<36;++t)fl[e][t]=~~(e/3)==~~(t/3)||~~(e/3)%3==~~(t/3)%3&&e>t;fl[36][e]=!1}for(e=0;e<29;++e)for(t=0;t<28;++t)Vi[e][t]=fl[ln[e]][ln[t]];for(e=0;e<21;++e)for(t=0;t<20;++t)Hi[e][t]=fl[io[e]][io[t]];for(e=0;e<36;++e)for(o0[e]=36,t=e;t<36;++t)if(!fl[e][t]){o0[e]=t-1;break}for(e=0;e<28;++e)for(ao[e]=28,t=e;t<28;++t)if(!Vi[e][t]){ao[e]=t-1;break}for(e=0;e<20;++e)for(ul[e]=20,t=e;t<20;++t)if(!Hi[e][t]){ul[e]=t-1;break}}function lR(e){let t,r,n,l,o,i,a,s,f,g,c,u;e.solution="";let p=vi(new ki(vr(e.c),0)),m=vi(new ki(vr(e.c),1)),L=vi(new ki(vr(e.c),2)),R=kt[~~p>>6],h=kt[~~m>>6],y=kt[~~L>>6];for(e.p1SolsCnt=0,e.arr2idx=0,pR(e.p1sols.heap),e.length1=(R<h?R:h)<y?R<h?R:h:y;e.length1<100&&!(y<=e.length1&&Yi(e,~~L>>>6,L&63,e.length1,-1,0)||R<=e.length1&&Yi(e,~~p>>>6,p&63,e.length1,-1,0)||h<=e.length1&&Yi(e,~~m>>>6,m&63,e.length1,-1,0));++e.length1);let A=UR(e.p1sols,Os(xR,xr([BB,Ns,Gs]),k1,0,0));A.sort(function(Q,$){return Q.value-$.value}),t=9;do{e:for(s=A[0].value;s<100;++s)for(i=0;i<A.length&&!(A[i].value>s);++i)if(!(s-A[i].length1>t)&&(sl(e.c1,A[i]),I1(e.ct2,vr(e.c1),Ji(oo(e.c1).ep)),c=Ci(e.ct2),u=Pi(e.ct2),e.length1=A[i].length1,e.length2=s-A[i].length1,hg(e,c,u,e.length2,28,0)))break e;++t}while(s===100);e.arr2.sort(function(Q,$){return Q.value-$.value}),a=0,r=13;do{e:for(f=e.arr2[0].value;f<100;++f)for(i=0;i<Math.min(e.arr2idx,100)&&!(e.arr2[i].value>f);++i)if(!(f-e.arr2[i].length1-e.arr2[i].length2>r)&&(o=og(e.e12,oo(e.arr2[i])),H1(e.ct3,vr(e.arr2[i]),o^Ji(pg(e.arr2[i]).cp)),n=qs(e.ct3),l=ll(e.e12,10),g=ag(ng(e.e12)),g<=f-e.arr2[i].length1-e.arr2[i].length2&&Dg(e,l,n,g,f-e.arr2[i].length1-e.arr2[i].length2,20,0))){a=i;break e}++r}while(f===100);let k=new ji(e.arr2[a]);e.length1=k.length1,e.length2=k.length2;let E=f-e.length1-e.length2;for(i=0;i<E;++i)nn(k,io[e.move3[i]]);e.solution=tR(k)}function oR(e,t){let r,n;for(sl(e.c1,e.c),r=0;r<e.length1;++r)nn(e.c1,e.move1[r]);switch(Qs[t]){case 0:nn(e.c1,24),nn(e.c1,35),e.move1[e.length1]=24,e.move1[e.length1+1]=35,e.add1=!0,t=19;break;case 12869:nn(e.c1,18),nn(e.c1,29),e.move1[e.length1]=18,e.move1[e.length1+1]=29,e.add1=!0,t=34;break;case 735470:e.add1=!1,t=0}I1(e.ct2,vr(e.c1),Ji(oo(e.c1).ep));let l=Ci(e.ct2),o=Pi(e.ct2),i=lt[l*70+o];return e.c1.value=i+e.length1,e.c1.length1=e.length1,e.c1.add1=e.add1,e.c1.sym=t,++e.p1SolsCnt,e.p1sols.heap.size<500?n=new ji(e.c1):(n=AR(e.p1sols),n.value>e.c1.value&&sl(n,e.c1)),uR(e.p1sols,n),e.p1SolsCnt===1e4}function iR(e){let t;for(sl(e.c2,e.c1),t=0;t<e.length2;++t)nn(e.c2,e.move2[t]);if(!JB(oo(e.c2)))return!1;let r=og(e.e12,oo(e.c2));H1(e.ct3,vr(e.c2),r^Ji(pg(e.c2).cp));let n=qs(e.ct3);ll(e.e12,10);let l=ag(ng(e.e12));return e.arr2[e.arr2idx]?sl(e.arr2[e.arr2idx],e.c2):e.arr2[e.arr2idx]=new ji(e.c2),e.arr2[e.arr2idx].value=e.length1+e.length2+Math.max(l,wr[n]),e.arr2[e.arr2idx].length2=e.length2,++e.arr2idx,e.arr2idx===e.arr2.length}function aR(e,t){return Ag(),e.c=new mg(t),lR(e),e.solution}function Yi(e,t,r,n,l,o){let i,a,s,f,g,c;if(t===0)return n===0&&oR(e,r);for(i=0;i<27;i+=3)if(!(i===l||i===l-9||i===l-18))for(f=0;f<3;++f){if(s=i+f,a=_i[t][_t[r][s]],g=kt[~~a>>>6],g>=n){if(g>n)break;continue}if(c=el[r][a&63],a>>>=6,e.move1[o]=s,Yi(e,a,c,n-1,i,o+1))return!0}return!1}function hg(e,t,r,n,l,o){let i,a,s,f;if(t===0&&lt[r]===0)return n===0&&iR(e);for(a=0;a<23;++a){if(Vi[l][a]){a=ao[a];continue}if(i=Mi[t][a],f=Ni[r][a],s=lt[i*70+f],s>=n){s>n&&(a=ao[a]);continue}if(e.move2[o]=ln[a],hg(e,i,f,n-1,a,o+1))return!0}return!1}function Dg(e,t,r,n,l,o,i){let a,s,f,g,c,u,p,m,L;if(l===0)return t===0&&r===0;for(no(e.tempe[i],t),c=0;c<17;++c){if(Hi[o][c]){c=ul[c];continue}if(f=ro[r][c],u=wr[f],u>=l){u>l&&c<14&&(c=ul[c]);continue}if(g=il(e.tempe[i].edge,c<<3,10),a=~~(g/20160),m=al[a],L=m&7,m>>=3,s=il(e.tempe[i].edge,c<<3|L,10)%20160,p=qB(m*20160+s,n),p>=l){p>l&&c<14&&(c=ul[c]);continue}if(Dg(e,g,f,p,l-1,c,i+1))return e.move3[i]=c,!0}return!1}function Fg(){let e;for(this.p1sols=new Eg(new Lg),this.move1=G(15),this.move2=G(20),this.move3=G(20),this.c1=new Qi,this.c2=new Qi,this.ct2=new js,this.ct3=new Vs,this.e12=new or,this.tempe=G(20),this.arr2=G(100),e=0;e<20;++e)this.tempe[e]=new or}function Ag(){yg||(vB(),Xn=G(735471),EB(),xB(),Xn=null,wB(),zB(),NB(),VB(),HB(),jB(),yg=!0)}function sR(){Ug||(Ug=!0)}function Ji(e){let t,r,n,l;for(l=0,t=0,n=e.length;t<n;++t)for(r=t;r<n;++r)e[t]>e[r]&&(l^=1);return l}function D(e,t,r,n,l,o){let i;switch(o){case 0:i=e[l],e[l]=e[n],e[n]=e[r],e[r]=e[t],e[t]=i;return;case 1:i=e[t],e[t]=e[n],e[n]=i,i=e[r],e[r]=e[l],e[l]=i;return;case 2:i=e[t],e[t]=e[r],e[r]=e[n],e[n]=e[l],e[l]=i;return}}function bg(){}function xg(e,t,r,n){let l=new bg;return l.typeName=e+t,Sg(r!==0?-r:0)&&vg(r!==0?-r:0,l),l.modifiers=4,l.superclass=i0,l.componentType=n,l}function wg(e,t,r,n){let l=new bg;return l.typeName=e+t,Sg(r)&&vg(r,l),l.superclass=n,l}function fR(e){let t=$l[e.seedId];return e=null,t}function Sg(e){return typeof e=="number"&&e>0}function vg(e,t){let r;if(t.seedId=e,e===2)r=String.prototype;else if(e>0){let n=fR(t);if(n)r=n.prototype;else{n=$l[e]=function(){},n.___clazz$=t;return}}else return;r.___clazz$=t}function uR(e,t){if(FR(e,t))return!0}function gR(e){e.array=Os(kg,xr([Ns,Gs]),v1,0,0)}function cR(e,t){return wi(e.array,e.size++,t),!0}function pR(e){e.array=Os(kg,xr([Ns,Gs]),v1,0,0),e.size=0}function Er(e,t){return e.array[t]}function mR(e,t){let r=e.array[t];return RR(e.array,t,1),--e.size,r}function gl(e,t,r){let n=e.array[t];return wi(e.array,t,r),n}function LR(e,t){let r;for(t.length<e.size&&(t=DB(t,e.size)),r=0;r<e.size;++r)wi(t,r,e.array[r]);return t.length>e.size&&wi(t,e.size,null),t}function BR(){gR(this),this.array.length=500}function RR(e,t,r){e.splice(t,r)}function dR(e,t){let r,n,l,o;for(n=0,r=e.length-1;n<=r;)if(l=n+(~~(r-n)>>1),o=e[l],o<t)n=l+1;else if(o>t)r=l-1;else return l;return-n-1}function Zi(e){hR(e,e.length)}function hR(e,t){let r;for(r=0;r<t;++r)e[r]=-1}function DR(e,t){let r,n,l,o,i=e.heap.size,a=Er(e.heap,t);for(;t*2+1<i&&(r=(n=2*t+1,l=n+1,o=n,l<i&&qi(Er(e.heap,l),Er(e.heap,n))<0&&(o=l),o),!(qi(a,Er(e.heap,r))<0));)gl(e.heap,t,Er(e.heap,r)),t=r;gl(e.heap,t,a)}function FR(e,t){let r,n;for(n=e.heap.size,cR(e.heap,t);n>0;){if(r=n,n=~~((n-1)/2),qi(Er(e.heap,n),t)<=0)return gl(e.heap,r,t),!0;gl(e.heap,r,Er(e.heap,n))}return gl(e.heap,n,t),!0}function AR(e){if(e.heap.size===0)return null;let t=Er(e.heap,0);return yR(e),t}function yR(e){let t=mR(e.heap,e.heap.size-1);0<e.heap.size&&(gl(e.heap,0,t),DR(e,0))}function UR(e,t){return LR(e.heap,t)}function Eg(e){this.heap=new BR,this.cmp=e}function Cg(){zg||(zg=!0,nR(),sR(),bB(),_B(),CB(),QB(),TB(),YB(),$B(),_g=new Fg)}function wR(){Cg(),Ag()}async function SR(){Se(),Cg();let e=_.fromString(aR(_g,await ve()));return(await Zn()).concat(e)}var Y,$l,pB,v1,Ns,E1,mB,LB,k1,BB,RB,dB,Gs,P1,Ts,Is,N1,kt,_i,Qs,Xn,zi,$n,_t,el,T1,Mi,lt,Q1,j1,Ni,q1,V1,ro,Y1,wr,Hs,Ys,Z1,Ft,rg,Xs,Ii,zt,$s,e0,t0,al,Wi,sg,Ki,fg,gg,n0,Bg,fl,Vi,Hi,ln,l0,io,o0,ao,ul,Rg,dg,yg,Ug,i0,kg,bR,xR,_g,zg,Mg=U(()=>{Re();Ps();S1();ht();dt();$l={},pB={},v1=0,Ns=30,E1=21,mB=22,LB=23,k1=24,BB=25,RB=34,dB=26,Gs=40;mt(1,-1,pB);Y.value=null;mt(73,1,{},_1);Y.queryId$=0;P1=!1;N1=!1;mt(153,1,xr([E1]),eo,ki,to);Xn=null,T1=!1;mt(154,1,{},js);Y.parity=0;V1=!1;mt(155,1,{},Vs);Y.parity=0;mt(156,1,{},Js,J1);Z1=!1;mt(157,1,xr([mB]),Gi,Sr,tg);Y.temps=null;rg=!1;mt(158,1,xr([LB]),or);Y.isStd=!0;Y.temp=null;Ii=0,fg=!1;mt(159,1,{},r0,ug);gg=!1;mt(160,1,xr([k1,RB]),Qi,ji,mg);Y.compareTo$=function(t){return eR(this,t)};Y.add1=!1;Y.center=null;Y.centerAvail=0;Y.corner=null;Y.cornerAvail=0;Y.edge=null;Y.edgeAvail=0;Y.length1=0;Y.length2=0;Y.length3=0;Y.moveLength=0;Y.sym=0;Y.value=0;mt(161,1,{},Lg);Y.compare=function(t,r){return qi(t,r)};Bg=!1;mt(163,1,xr([dB]),Fg);Y.add1=!1;Y.arr2idx=0;Y.c=null;Y.length1=0;Y.length2=0;Y.p1SolsCnt=0;Y.solution="";yg=!1,Ug=!1;Y.val$outerIter=null;Y.size=0;mt(239,1,{},Eg);Y.cmp=null;Y.heap=null;i0=wg("java.lang.","Object",1,null),kg=xg("[Ljava.lang.","Object;",356,i0),bR=wg("cs.threephase.","FullCube",160,i0),xR=xg("[Lcs.threephase.","FullCube;",381,bR),zg=!1});var dc={};Be(dc,{randomFTOScrambleString:()=>Sd});function so(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function Xi(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function Wg(e,t,r,n,l=e-t-r-n){return Xi(e,t+r)*Xi(t+r,t)*Xi(n+l,n)}function PR(e){e=e.slice();let t=e.length,r=so(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function MR(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let l=n;l<t;l++)e[n]>e[l]&&(r^=1);return r}function s0(e,t){let r=[],n=so(t-1)/2,l=0;for(let o=0;o<t-1;o++)r[o]=e/n|0,e%=n,n/=t-1-o;r[t-1]=0;for(let o=t-2;o>=0;o--)for(let i=o+1;i<t;i++)r[i]>=r[o]?r[i]++:l^=1;return l===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function on(e){return PR(e)>>1}function f0(e,t){let r=[0];for(let n=1;n<e;n++){let l=t(n+1);r[n]=r[l],r[l]=n}return r}function Kg(e,t){let r=f0(e,t);return MR(r)===1&&([r[0],r[1]]=[r[1],r[0]]),r}function NR(e){return e|=0,31-Math.clz32(e^e-1)}function Qg(e,t){e|=0,t|=0;let r=e+" "+t;if(u0[r])return u0[r];let n=Xi(e,t),l=new Uint32Array(n),o=new Uint32Array(1<<e).fill(-1);for(let i=0,a=(1<<t)-1;i<n;i++){l[i]=a,o[a]=i;let s=a|a-1;a=s+1|(~s&-~s)-1>>NR(a)+1}return u0[r]=[l,o]}function GR(e){e|=0;let t=0;for(;e!==0;)e&=e-1,t++;return t}function jg(e){return e&=65535,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,e}function OR(e,t){return jg(e)|jg(t)<<1}function cl(e,t,r,n,l){if(e|=0,t|=0,r|=0,n|=0,l|=0,e!==t+r+n+l)throw"generate_comb4_lookup_tables: invalid parameters";let o=[e,t,r,n,l].join(" ");if(g0[o])return g0[o];let[i,a]=Qg(e,r+l),[s,f]=Qg(e,n+l),g=Wg(e,t,r,n,l),c=new Uint32Array(g),u=new Uint32Array(4**e).fill(-1);for(let p=0,m=0;p<s.length;p++){let L=s[p];for(let R=0;R<i.length;R++){let h=i[R];if(GR(h&L)===l){let y=OR(h,L);c[m]=y,u[y]=m,m++}}}return g0[o]=[c,u]}function Xe(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function pl(e,t,r){let n=[];for(let l=0;l<r.length;l++)n[l]=e[t[r[l]]];return n}function c0(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n of e)for(let l=0;l<n.length;l++)r[n[l]]=n[(l+1)%n.length];return r}function an(e,t){let r=e.length,n=Array(r).fill(0);for(let i=1;i<r;i++)n[i]=n[i-1]+t[i-1];let l=n[r-1]+t[r-1],o=Array(l);for(let i=0;i<r;i++)t[i]&&(o[n[i]]=n[e[i]]);return o}function p0(e){let t=e.length,r=Array(t);for(let n=0;n<t;n++)r[e[n]]=n;return r}function TR(e,t){for(;e&&t;)[e,t]=[t%e,e];return Math.abs(e+t)}function IR(e,t){return e*t/TR(e,t)}function WR(e){let t=1,r=e.length,n=Array(r).fill(!1),l=-1;for(;l=n.indexOf(!1,l+1),l!==-1;){let o=0,i=l;for(;!n[i];)n[i]=!0,i=e[i],o++;t=IR(t,o)}return t}function JR(e,t){for(let r=0;r<6;r++){if(e===Ct[kr[r][0]]&&t===Ct[kr[r][2]])return[r,0];if(e===Ct[kr[r][2]]&&t===Ct[kr[r][0]])return[r,1]}throw"unknown corner piece"}function ZR(e,t){for(let r=0;r<12;r++)if(e===Ct[_r[r][0]]&&t===Ct[_r[r][1]]||t===Ct[_r[r][0]]&&e===Ct[_r[r][1]])return r;throw"unknown edge piece"}function m0(e,t){return JR(e[kr[t][0]],e[kr[t][2]])}function ta(e,t){return ZR(e[_r[t][0]],e[_r[t][1]])}function XR(e,t,r,n){let l=kr[t],o=kr[r].map(i=>Ct[i]);n%2!=0&&(o=[o[2],o[3],o[0],o[1]]);for(let i=0;i<4;i++)e[l[i]]=o[i]}function $R(e,t,r){let n=_r[t],l=_r[r].map(o=>Ct[o]);for(let o=0;o<2;o++)e[n[o]]=l[o]}function Hg(e){let t=e.map(s=>Ct[s]),n=Array(6).fill().map((s,f)=>m0(t,f)).map(([s,f])=>s+6*f),l=n.concat(n.map(s=>(s+6)%12)),o=Array(12).fill().map((s,f)=>ta(t,f)),i=Array(12).fill().map((s,f)=>sn.indexOf(e[sn[f]])),a=Array(12).fill().map((s,f)=>ml.indexOf(e[ml[f]]));return{cp:l,ep:o,ap:i,bp:a}}function td(e){let t=Array(72),r=Kg(5,e);r.push(5);let n=Array(4).fill().map(a=>e(2));n.push(n.reduce((a,s)=>a^s)),n.push(0);for(let a=0;a<6;a++)XR(t,a,r[a],n[a]);let l=Kg(12,e);for(let a=0;a<12;a++)$R(t,a,l[a]);let o=f0(12,e).map(a=>a/3|0),i=f0(12,e).map(a=>4+(a/3|0));for(let a=0;a<12;a++)t[sn[a]]=o[a],t[ml[a]]=i[a];return t}function Jg(e,t=!1){if(t){let o=0,i=1,a=2,s=3,f=4,g=5,c=6,u=7;e=e.map(L=>L.slice());let p=[o,i,a,s,f,g,c,u],m=[[o,s,g,c,f,u,i,a],[u,i,o,c,s,g,f,a],[u,f,a,i,s,o,c,g],[a,f,g,s,c,o,i,u]];m=m.concat(m.map(L=>p0(L)));for(let L=0;L<e.length;L++)if(e[L][0]<4)e[L][0]=p[e[L][0]];else{let R=p[e[L][0]],h=e[L][1];e[L][0]=R,p=Xe(h===1?m[R^4]:m[R],p)}}let r=t?"U L F R D BR B BL".split(" "):ed,n=["0","","'"];return e.map(([o,i])=>r[o]+n[i]).join(" ")}function zr(e,t){for(let[r,n]of t)for(let l=0;l<n;l++)e=Xe(e,Yg[r]);return e}function Zg(e){return e.map(([t,r])=>[t,(3-r)%3]).reverse()}function ra(e,t=!1){if(e.length===0)return[];let r=[],n;for(let[l,o]of e)n&&n[0]===l?(n[1]+=o,n[1]%=3,n[1]===0&&(r.pop(),n=r.length===0?void 0:r[r.length-1])):r.length>=2&&(n[0]^l)==4&&r[r.length-2][0]===l?(r[r.length-2][1]+=o,r[r.length-2][1]%=3,r[r.length-2][1]===0&&r.splice(r.length-2,1)):(n=[l,o],r.push(n));return t&&""+e!=""+r&&console.log(\`simplified \${e} to \${r}\`),r}function rd(e){return Jg(Zg(od(td(e),!0)),!0)}function Ll(e,t,r,n,l,o){let i=Wg(e,t,r,n,l),a=o.length,[s,f]=cl(e,t,r,n,l),g=Array(a).fill().map(()=>new Uint32Array(i));for(let c=0;c<i;c++){let u=s[c],p=Array(e);for(let m=0;m<e;m++)p[m]=u>>2*m&3;for(let m=0;m<a;m++){let R=Xe(p,o[m]).reduce((h,y,A)=>h|y<<2*A,0);g[m][c]=f[R]}}return g}function Xg(e){let t=e[0].length,r=e.length,n=Array(r).fill().map(()=>new Uint32Array(t));for(let l=0;l<t;l++)for(let o=0;o<r;o++)n[o][e[o][l]]=l;return n}function un(e,t){let r=e[0].length,n=t[0].length,l=e.length,o=Array(l).fill().map(()=>new Uint32Array(r*n));for(let i=0;i<n;i++)for(let a=0;a<r;a++){let s=a+r*i;for(let f=0;f<l;f++)o[f][s]=e[f][a]+r*t[f][i]}return o}function nd(e,t){let r=e.length,n=e[0].length,l=new Uint8Array(n);l[t]=1;let o=!1;for(;!o;){o=!0;for(let a=0;a<n;a++)if(!!l[a])for(let s=0;s<r;s++)l[e[s][a]]||(l[e[s][a]]=1,o=!1)}let i=new Int32Array(n).fill(-1);for(let a=0,s=0;a<n;a++)!l[a]||(i[a]=s,s++);return[e.map(a=>an(a,l)),i]}function ld(e,t){let r=e.length,n=e[0].length,l=new Int32Array(n).fill(-1);t.forEach(s=>{l[s]=0});let o=[t];for(let s=0;s<o.length;s++){let f=o[s];for(let g=0;g<r;g++){let c=e[g][f[0]];if(l[c]!==-1)continue;let u=f.map(m=>e[g][m]),p=o.length;o.push(u);for(let m of u){if(l[m]!==-1)throw"quotienting failed";l[m]=p}}}let i=o.length,a=Array(r).fill().map(()=>new Int32Array(i));for(let s=0;s<r;s++)for(let f=0;f<i;f++)a[s][f]=l[e[s][o[f][0]]];return[a,l]}function $g(e,t,r){let n=e[0].length,l=e.length,o=new Int32Array(n).fill(-1);o[t]=r,o[r]=t;let i=!1;for(;!i;){i=!0;for(let a=0;a<n;a++){if(o[a]===-1)continue;let s=o[a];for(let f=0;f<l;f++){let g=f^1,c=e[f][a],u=e[g][e[g][s]];if(o[c]===-1)i=!1,o[c]=u,o[u]=c;else if(o[c]!==u)throw"mirroring failed - is the initial map correct?"}}}return o}function ec(e,t){let r=e[0].length,n=e.length,l=new Int8Array(r).fill(-1);for(let a of t)l[a]=0;let o=0,i=!1;for(;!i;){i=!0;for(let a=0;a<r;a++)if(l[a]===o)for(let s=0;s<n;s++){let f=e[s][a];for(;f!==a;)l[f]===-1&&(i=!1,l[f]=o+1),f=e[s][f]}o++}return l}function od(e,t=!1){let r=ud(e).next().value,n=zr(e,r),l=(t?xd:bd)(n),o=ra(r.concat(l),!1);return zr(e,o).join("")!==fo.join("")&&(console.log("solving failed!"),console.log(e),console.log(r),console.log(n),console.log(l),console.log(zr(e,o))),o}function ad(e){let[t,r]=cl(12,6,0,3,3),n=Array(12).fill().map((a,s)=>ta(e,s)),l=n.indexOf(8)+12*n.indexOf(9)+12**2*n.indexOf(10)+12**3*n.indexOf(11),[o,i]=[sn,ml].map(a=>{let s=a.map(f=>id[e[f]]);return r[s.reduce((f,g,c)=>f|g<<2*c,0)]});return[l,o,i]}function tc(){if(W.phase1_edge)return W.phase1_edge;let e=Xg(fn.map(n=>n.ep)),t=un(e,e),r=un(t,t);return W.phase1_edge=r}function sd(){return ar.phase1_edge?ar.phase1_edge:ar.phase1_edge=ec(tc(),[8+12*9+12**2*10+12**3*11])}function fd(){return W.phase1_centreA?W.phase1_centreA:W.phase1_centreA=Ll(12,6,0,3,3,fn.map(e=>e.ap))}function rc(){return W.phase1_centreB?W.phase1_centreB:W.phase1_centreB=Ll(12,6,0,3,3,fn.map(e=>e.bp))}function nc(){if(ar.phase1_centre)return ar.phase1_centre;let[e,t]=cl(12,6,0,3,3),r=e.filter(n=>{let l=n>>12&3,o=n>>18&3;return l===2&&o===3}).map(n=>t[n]);return ar.phase1_centre=ec(rc(),r)}function*ud(e){let t=[tc(),fd(),rc()],r=[sd(),nc(),nc()];yield*gd(ad(e),t,r,15)}function*gd(e,t,r,n){let l=e.length,o=0;for(let i=0;i<l;i++)o=Math.max(o,r[i][e[i]]);for(;o<=n;)yield*lc(e,t,r,o,-1),o++}function*lc(e,t,r,n,l){let o=3,i=8,a=Math.max(r[0][e[0]],r[1][e[1]],r[2][e[2]]);if(!(a>n)){if(n===0){yield[];return}if(!(a===0&&n===1))for(let s=0;s<i;s++){if(s===l||s===l-4)continue;let f=[];f[0]=t[0][s][e[0]],f[1]=t[1][s][e[1]],f[2]=t[2][s][e[2]];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=lc(f,t,r,n-1,s);for(;;){let{value:u,done:p}=c.next();if(p)break;yield[[s,g]].concat(u)}f[0]=t[0][s][f[0]],f[1]=t[1][s][f[1]],f[2]=t[2][s][f[2]],g++}}}}function L0(e){let[t,r]=cl(10,5,3,2,0),n=Array(8).fill().map((u,p)=>ta(e,p)),l=n.indexOf(5)+8*n.indexOf(6)+8**2*n.indexOf(7),o=Array(5).fill().map((u,p)=>m0(e,p)),i=p0(o.map(([u,p])=>u+5*p).concat(o.map(([u,p])=>u+5*(p^1)))),a=i.slice(0,5).map(u=>u%5),s=i.slice(0,5).map(u=>u/5|0),f=on(a)*8+(s[0]^s[2])+2*(s[0]^s[3])+4*s[4],[g,c]=[sn,ml].map(u=>{let p=Xe(u,pd).map(m=>cd[e[m]]);return r[p.reduce((m,L,R)=>m|L<<2*R,0)]});return sc(),gc(),[g,c,uc[f]+40*ac[l]]}function*na(e){yield*dd(L0(e),30)}function ic(){if(W.phase2_centre)return W.phase2_centre;let e=Ll(10,5,3,2,0,fn.slice(0,4).map(r=>an(r.ap,oc))),t=Ll(10,5,3,2,0,fn.slice(0,4).map(r=>an(r.bp,oc)));return W.phase2_centre=[e,t]}function sc(){if(W.phase2_edge)return W.phase2_edge;let e=Xg(fn.slice(0,4).map(n=>n.ep.slice(0,8))),t=un(e,un(e,e)),r;return[r,ac]=nd(t,501),W.phase2_edge=r}function fc(){if(W.phase2_corner)return W.phase2_corner;let t=so(5)/2*8,r=[!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1],n=Array(4).fill().map(()=>new Uint32Array(t)),l=fn.slice(0,4).map(o=>p0(an(o.cp,r)));for(let o=0;o<t;o++){let i=s0(o>>3,5),a=[0,0,o&1,o>>1&1,o>>2&1];a[1]=a[2]^a[3]^a[4];let s=Array(10);for(let f=0;f<5;f++)s[f]=i[f]+5*a[f],s[f+5]=i[f]+5*(a[f]^1);for(let f=0;f<4;f++){let g=Xe(l[f],s),c=g.slice(0,5).map(m=>m%5),u=g.slice(0,5).map(m=>m/5|0),p=(u[0]^u[2])+2*(u[0]^u[3])+4*u[4];n[f][o]=on(c)*8+p}}return W.phase2_corner=n}function gc(){return W.phase2_corner_compact||([W.phase2_corner_compact,uc]=ld(fc(),Bd())),W.phase2_corner_compact}function B0(){if(W.phase2_ce)return W.phase2_ce;let e=gc(),t=sc();return W.phase2_ce=un(e,t)}function md(){if(R0)return R0;let e=L0(fo)[2];return R0=$g(B0(),e,e)}function Ld(){let[e,t]=cl(10,5,3,2,0);return e.filter(r=>(r>>10&63)==41).map(r=>t[r])}function Bd(){let e=fc(),t=e[0].length,r=Array(t).fill(!1);r[0]=!0;let n=!1;for(;!n;){n=!0;for(let l=0;l<t;l++)r[l]&&(r[e[0][l]]||(n=!1,r[e[0][l]]=!0),r[e[1][l]]||(n=!1,r[e[1][l]]=!0))}return r.map((l,o)=>o).filter(l=>r[l])}function Rd(){if(ar.phase2_ace)return ar.phase2_ace;let[e,t]=ic(),r=B0(),n=2520,l=40*336,o=n*l,i=L0(fo)[2],a=9,s=new Int8Array(o).fill(a);for(let f of Ld())s[f+n*i]=0;for(let f=0;f<a-1;f++)for(let g=s.indexOf(f);g!==-1;g=s.indexOf(f,g+1)){let c=g%n,u=g/n|0;for(let p=0;p<4;p++){let m=e[p][c],L=r[p][u],R=m+n*L;s[R]===a&&(s[R]=f+1),m=e[p][m],L=r[p][L],R=m+n*L,s[R]===a&&(s[R]=f+1)}}return ar.phase2_ace=s}function*dd(e,t){let[r,n]=ic(),l=B0(),o=Rd(),i=md(),[a,s,f]=e,g=i[f],c=Math.max(o[a+2520*f],o[s+2520*g]);for(;c<=t;)yield*cc(a,s,f,r,n,l,o,i,c,-1),c++}function*cc(e,t,r,n,l,o,i,a,s,f){let g=Math.max(i[e+2520*r],i[t+2520*a[r]]);if(!(g>s)){if(s===0){yield[];return}else if(g===0)return;for(let c=0;c<4;c++){if(c===f)continue;let u=e,p=t,m=r;for(let L=1;L<=2;L++){u=n[c][u],p=l[c][p],m=o[c][m];let R=cc(u,p,m,n,l,o,i,a,s-1,c);for(;;){let{value:h,done:y}=R.next();if(y)break;yield[[c,L]].concat(h)}}}}}function oa(e){let[t,r]=cl(7,3,2,0,2),n=Array(5).fill().map((f,g)=>ta(e,g)),l=on(n),o=Array(4).fill().map((f,g)=>m0(e,g)),i=on(o.map(f=>f[0]))*2+o.find(f=>f[0]===0)[1],[a,s]=[sn,ml].map(f=>{let g=Xe(f,hd).map(c=>e[c]%4);return r[g.reduce((c,u,p)=>c|u<<2*p,0)]});return[a+210*s,i+24*l]}function Fd(){if(W.phase3_2gen_edge)return W.phase3_2gen_edge;let e=so(5)/2,t=Array(Bl).fill().map(()=>new Uint32Array(e)),r=la.map(n=>n.ep.slice(0,5));for(let n=0;n<e;n++){let l=s0(n,5);for(let o=0;o<Bl;o++)t[o][n]=on(Xe(l,r[o]))}return W.phase3_2gen_edge=t}function Ad(){if(W.phase3_2gen_corner)return W.phase3_2gen_corner;let t=so(4)/2*2,r=[!0,!0,!0,!0,!1,!1,!0,!0,!0,!0,!1,!1],n=Array(Bl).fill().map(()=>new Uint32Array(t)),l=la.map(o=>an(o.cp,r).slice(0,4));for(let o=0;o<t;o+=2){let i=s0(o>>1,4),a=i.concat(i.map(s=>s+4));for(let s=0;s<Bl;s++){let f=Xe(a,l[s]),g=f.map(u=>u%4),c=f.find(u=>u%4==0)>>2;n[s][o]=on(g)*2+c,n[s][o+1]=on(g)*2+(c^1)}}return W.phase3_2gen_corner=n}function ia(){return W.phase3_2gen_corneredge?W.phase3_2gen_corneredge:W.phase3_2gen_corneredge=un(Ad(),Fd())}function d0(){if(W.phase3_2gen_centre)return W.phase3_2gen_centre;let e=Ll(7,3,2,0,2,la.map(r=>an(r.ap,pc))),t=Ll(7,3,2,0,2,la.map(r=>an(r.bp,pc)));return W.phase3_2gen_centreA=e,W.phase3_2gen_centreB=t,W.phase3_2gen_centre=un(e,t)}function Lc(){if(h0)return h0;let e=d0(),t=W.phase3_2gen_centreA,r=ia(),n=t[0].length,l=r[0].length,o=n*l,i=25,a=sr.map(u=>u.length),s=new Int8Array(o).fill(i),f=oa(fo);s[f[0]%n+n*f[1]]=0;let g=0,c=!1;for(;!c&&g<i-1;){c=!0;let u=Array(Bl).fill().map((h,y)=>y).filter(h=>a[h]+g<i);u.sort((h,y)=>a[h]-a[y]);let p=Xe(a,u),m=Xe(t,u),L=Xe(r,u),R=u.length;for(let h=s.indexOf(g);h!==-1;h=s.indexOf(g,h+1)){let y=h%n,A=h/n|0;for(let k=0;k<R;k++){let E=p[k],Q=m[k][y],$=L[k][A],N=Q+n*$;s[N]>g+E&&(c=!1,s[N]=g+E)}}g++}return h0=s}function Bc(){if(D0)return D0;let e=ia().slice(0,2),t=oa(fo);return D0=$g(e,t[1],t[1])}function F0(e,t=oa(e)){let[r,n]=t,l=r%210,o=Math.floor(r/210),i=d0(),a=W.phase3_2gen_centreA,s=W.phase3_2gen_centreB,f=ia(),g=Lc(),c=Bc(),u=0;for(;;){let p=y0(l,o,n,a,s,f,g,c,u);for(let m of p)return m.map(L=>sr[L]).flat();u++}}function Rc(e,t=oa(e)){let[r,n]=t,l=r%210,o=Math.floor(r/210),i=d0(),a=W.phase3_2gen_centreA,s=W.phase3_2gen_centreB,f=ia(),g=Lc(),c=Bc(),u=F0(e).length,p=1/0,m;for(let L=u;L<=u+0;L++){let R=y0(l,o,n,a,s,f,g,c,L);for(let h of R){let y=h.map(E=>sr[E]).flat(),A=ra(y),k=A0(A);k<p&&(p=k,m=A)}}return m}function yd(e){return(e-1)*(e-2)/2}function A0(e){let t=Jg(e,!0).replace(/'/g,"").split(" ");return e.length+Ud(t).map(yd).reduce((r,n)=>r+n,0)}function Ud(e){if(e.length<3)return[];let t=e.length,r=[];for(let o=0;o<t-2;o++)r[o]=e[o]===e[o+2];r.push(!1);let n=-1,l=[];for(;n<t-2&&(n=r.indexOf(!0,n+1),n!==-1);){let o=r.indexOf(!1,n+1);l.push(o-n),n=o}return l}function*y0(e,t,r,n,l,o,i,a,s,f=-1){let g=i[e+210*r],c=i[t+210*a[r]],u=Math.max(g,c);if(!(u>s)){if(s===0){yield[];return}if(u!==0)for(let p=0;p<Bl;p++){if(p===f&&Dd[p]<=3)continue;let m=n[p][e],L=l[p][t],R=o[p][r],h=s-sr[p].length;if(h<0)continue;let y=y0(m,L,R,n,l,o,i,a,h,p);for(;;){let{value:A,done:k}=y.next();if(k)break;yield[p].concat(A)}}}}function bd(e,t=200,r=24){let n=[],l=na(e),o=Xe(e,Kt).map(s=>s^1),i=na(o),a=Array(1e3);for(let s=0;s<t;s++){{let{value:f,done:g}=l.next();if(!g){let c=zr(e,f),u=f.concat(F0(c));if(u.length<=r)return u;u.length<a.length&&(a=u)}}{let{value:f,done:g}=i.next();if(!g){let c=zr(o,f),u=f.concat(F0(c)).map(([p,m])=>[p^2,m]);if(u.length<=r)return u;u.length<a.length&&(a=u)}}}return a}function xd(e,t=20,r=30){let n=[],l=na(e),o=Xe(e,Kt).map(f=>f^1),i=na(o),a,s=1/0;for(let f=0;f<t;f++){{let{value:g,done:c}=l.next();if(!c){let u=zr(e,g),p=ra(g.concat(Rc(u))),m=A0(p);if(m<=r)return p;m<s&&(a=p,s=m)}}{let{value:g,done:c}=i.next();if(!c){let u=zr(o,g),p=ra(g.concat(Rc(u)));p=p.map(([L,R])=>[L^2,R]);let m=A0(p);if(m<=r)return p;m<s&&(a=p,s=m)}}}return a}async function Sd(){return rd(await wd)}var d7,h7,u0,g0,fo,uo,KR,Kt,D7,$i,qg,QR,jR,qR,ea,VR,Vg,HR,YR,Ct,kr,_r,sn,ml,Yg,ed,fn,W,ar,id,cd,pd,oc,ac,uc,R0,hd,pc,sr,Bl,mc,la,Dd,h0,D0,wd,hc=U(()=>{ht();[d7,h7]=(()=>{let e=new Int8Array(256*8),t=new Int8Array(256*8);for(let l=0;l<256;l++)for(let o=0,i=0;o<8;o++)(l>>>o&1)!=0&&(e[o<<8|l]=i,t[i<<8|l]=o,i++);function r(l){let o=255,i=2520,a=0;for(let s=0;s<6;s++){let f=l[s];a+=e[o|f<<8]*i,o&=~(1<<f),i/=7-s}return a}function n(l,o){let i=255,a=2520,s=0;for(let f=0;f<6;f++){let g=l/a|0;l-=g*a,s^=g&1;let c=t[i|g<<8];o[f]=c,i&=~(1<<c),a/=7-f}return o[6]=t[i|s<<8],o[7]=t[i|(s^1)<<8],o}return[r,n]})();u0={};g0={};fo=Array(72).fill().map((e,t)=>t/9|0),uo=c0([[0,4,8],[1,6,3],[2,5,7],[9,22,35],[45,67,44],[47,68,43],[46,69,39],[50,70,38],[49,71,36]],72),KR=Xe(uo,uo),Kt=Array(72).fill().map((e,t)=>(t/18|0)*18+(t+9)%18),D7=Array(72).fill().map((e,t)=>(t/36|0)*36+(t+18)%36),$i=Array(72).fill().map((e,t)=>(t+36)%72),qg=pl($i,KR,$i),QR=pl(Kt,uo,Kt),jR=pl(Kt,qg,Kt),qR=c0([[10,24,30],[11,23,34],[12,19,33],[42,48,64],[41,52,65],[37,51,66]],72),ea=Xe(uo,qR),VR=Xe(ea,ea),Vg=pl($i,VR,$i),HR=pl(Kt,ea,Kt),YR=pl(Kt,Vg,Kt),Ct=Array(72).fill().map((e,t)=>t/9|0),kr=[[0,45,9,36],[4,67,22,49],[8,44,35,71],[13,58,31,40],[17,53,26,62],[18,63,27,54]],_r=[[1,46],[3,39],[6,69],[10,37],[33,42],[12,48],[15,60],[24,51],[19,64],[28,55],[30,66],[21,57]],sn=Array(12).fill().map((e,t)=>(t/3|0)*9+[2,5,7][t%3]),ml=sn.map(e=>e+36);Yg=[uo,qg,QR,jR,ea,Vg,HR,YR],ed=["U","L","F","R","u","l","f","r"],fn=Yg.map(Hg);W={},ar={},id=[0,0,2,3,0,0,2,3];cd=[0,1,2,0,0,1,2,0],pd=[0,1,2,3,4,5,7,8,10,11],oc=[!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0];hd=[0,1,2,3,4,10,11],pc=[!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!0,!0],sr=[[[0,1]],[[1,1]],[[2,1],[0,1],[3,1],[0,2],[3,2],[2,2]],[[3,2],[1,2],[2,2],[1,1],[2,1],[3,1]],[[6,1],[0,1],[3,1],[0,2],[3,2],[6,2]],[[7,2],[1,2],[2,2],[1,1],[2,1],[7,1]],[[2,1],[0,1],[2,2],[0,1],[2,1],[0,1],[2,2]],[[3,2],[1,1],[3,1],[1,1],[3,2],[1,1],[3,1]],[[2,1],[3,1],[2,2],[1,2],[0,2],[2,1],[3,1],[2,2]],[[3,2],[2,2],[3,1],[0,1],[1,1],[3,2],[2,2],[3,1]],[[6,1],[0,1],[6,2],[0,2],[1,2],[6,1],[0,1],[6,2]],[[7,2],[1,2],[7,1],[1,1],[0,1],[7,2],[1,2],[7,1]],[[2,1],[3,2],[2,2],[3,1],[0,1],[2,2],[1,1],[2,1]],[[3,2],[2,1],[3,1],[2,2],[1,2],[3,1],[0,2],[3,2]],[[6,1],[0,2],[6,2],[7,1],[6,1],[1,2],[7,1],[6,1]],[[7,2],[1,1],[7,1],[6,2],[7,2],[0,1],[6,2],[7,2]],[[2,2],[1,2],[2,2],[3,2],[2,2],[3,2],[0,2],[3,2]],[[6,2],[7,2],[1,2],[0,2],[1,2],[0,2],[6,2],[7,2]]];sr=sr.concat(sr.map(e=>Zg(e)));Bl=sr.length,mc=sr.map(e=>zr(c0([],72),e)),la=mc.map(Hg),Dd=mc.map(WR);wd=ve()});var Dc={};Be(Dc,{randomFTOScrambleString:()=>vd,sgsDataFTO:()=>kd});async function vd(){let{randomFTOScrambleString:e}=await Promise.resolve().then(()=>(hc(),dc));return e()}async function kd(){return Ed??(Ed=_d())}async function _d(){return It(await Me.fto.kpuzzle(),\`SubgroupSizes 24 12 11 12 12 11 10 9 11 8 10 9 7 8 10 10 6 9 8 5 7 6 5 4 4 8 7 3 6 6 360

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
\`)}var Ed,Fc=U(()=>{Xt();Gn();Ed=null});var _c={};Be(_c,{getRandomKilominxScramble:()=>kc});function yc(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function aa(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function zd(e){e=e.slice();let t=e.length,r=yc(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function Cd(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let l=n;l<t;l++)e[n]>e[l]&&(r^=1);return r}function Pd(e){return zd(e)>>1}function b0(e){let t=e.length,r=0;for(let i=0;i<t;i++)r+=+(e[i]===1);let n=t-r;if(n===0||r===0||t===1)return 0;let l=aa(t-1,r),o=0;for(let i=0;n>0&&r>0&&t>1;i++)t--,e[i]===0?l=l*--n/t:(o+=l,l=l*r--/t);return o}function Gd(e,t,r){let n=r-t,l=aa(r-1,t),o=[],i=r-1;for(let a=0;a<i;a++)r--,e<l?(o.push(0),l=l*--n/r):(o.push(1),e-=l,l=l*t--/r);return o.push(t),o}function Qt(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function x0(e,t){let r=Qt(e[0],t[0]),n=[],l=t[0].length;for(let o=0;o<l;o++)n[o]=(e[1][t[0][o]]+t[1][o])%3;return[r,n]}function Rl(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function Cr(e,t){let r=Array(t).fill(0);for(let n in e)r[n]=e[n];return r}function Qd(e){let t=[0];for(let n=1;n<20;n++){let l=e(n+1);t[n]=t[l],t[l]=n}Cd(t)===1&&([t[0],t[1]]=[t[1],t[0]]);let r=Array(20).fill(0);for(let n=0;n<19;n++)r[n]=e(3),r[19]+=3-r[n];return r[19]%=3,[t,r]}function jd(e){let t=["0","","2","2'","'"];return e.map(([n,l])=>Wd[n]+t[l]).join(" ")}function qd(e,t){for(let[r,n]of t)for(let l=0;l<n;l++)e=x0(e,gn[r]);return e}function Vd(e){return rh(Qd(e))}function Yd(e){let t=e[0];if(t.slice(15,20).every(o=>o<15))return[];if(t.slice(0,5).every(o=>o<15))return[[6,1]];let r=t.map(o=>o>=15),n=0,l;for(;l===void 0;)n++,l=wc(r,n,-1);return l.push([6,1]),l}function wc(e,t,r){if(t==0)return e.slice(0,5).some(n=>n)?void 0:[];for(let n=0;n<6;n++)if(n!==r)for(let l=1;l<5;l++){let o=Qt(e,sa[n][l][0]),i=wc(o,t-1,n);if(i!==void 0)return[[n,l]].concat(i)}}function Jd(e){let t=e[0].slice(0,15),r=e[1],n=b0(t.map(i=>+(i>=15))),l=243*n;for(let i=0,a=0;i<15;i++)t[i]<15||(l+=r[i]*Math.pow(3,a),a++);let o=0;for(let i=0;i<5;i++)o+=t.indexOf(15+i)*Math.pow(15,i);return[l,o]}function Zd(e){let t=[fa(),ua()],r=[nh(),oh()];return Sc(Jd(e),t,r).concat([[6,1]])}function Xd(e){let t=[5,6,7,8,14],r=e[0].slice(0,15),n=e[1],l=b0(r.map(a=>+(t.indexOf(a)!==-1))),o=243*l;for(let a=0,s=0;a<15;a++)t.indexOf(r[a])!==-1&&(o+=n[a]*Math.pow(3,s),s++);let i=0;for(let a=0;a<5;a++)i+=r.indexOf(t[a])*Math.pow(15,a);return[o,i]}function $d(e){let t=[fa(),ua()],r=[lh(),ih()];return Sc(Xd(e),t,r)}function eh(e){let t=e[0].slice(0,14),r=e[1],n=0,l=[],o=0;for(let i of[0,1,2,3,4,9,10,11,12,13])i!==13&&(n+=r[i]*Math.pow(3,o)),l[o]=t[i]<5?t[i]:t[i]-4,o++;return[n,Pd(l)]}function th(e){return gh(eh(e))}function rh(e){let t=[];for(let r of[Yd,Zd,$d,th]){let n=r(e);e=qd(e,n),t=t.concat(n)}return t}function fa(){if(ne.phase23om)return ne.phase23om;let e=aa(15,5),t=[1,3,9,27,81,243],r=Array(aa(15,5)*t[5]);ne.phase23om=r;for(let n=0;n<e;n++){let l=Gd(n,5,15).concat(Array(5).fill(0)),o=[];for(let i=0;i<6;i++){let a=Qt(l,gn[i][0]).slice(0,15);o[i]=b0(a)}for(let i=0;i<t[5];i++){r[i+243*n]=[];let a=[];for(let s=0,f=0;s<20;s++)l[s]===1?(a[s]=(i/t[f]|0)%3,f++):a[s]=99;for(let s=0;s<6;s++){let f=gn[s],g=[];for(let p=0;p<15;p++)g[p]=a[f[0][p]]+f[1][p];let c=g.filter(p=>p<10),u=0;for(let p=0;p<5;p++)u+=c[p]%3*t[p];r[i+243*n][s]=u+243*o[s]}}}return r}function nh(){if(ne.phase2op)return ne.phase2op;let e=fa();return ne.phase2op=dl(e,[243*3002])}function lh(){if(ne.phase3op)return ne.phase3op;let e=fa();return ne.phase3op=dl(e,[243*246])}function ua(){if(ne.phase23pm)return ne.phase23pm;let e=[1,15,225,Math.pow(15,3),Math.pow(15,4),Math.pow(15,5)],t=Array(e[5]),r=Array(15);for(let l=0;l<15;l++){r[l]=Array(6);for(let o=0;o<6;o++)r[l][o]=gn[o][0].indexOf(l)}let n=[0,0,0,0,0];for(let l=0;l<e[5];l++){t[l]=Array(6);for(let o=0;o<6;o++){let i=0;for(let a=0;a<5;a++)i+=r[n[a]][o]*e[a];t[l][o]=i}n[0]++;for(let o=0;o<4;o++)n[o]===15&&(n[o]=0,n[o+1]++)}return ne.phase23pm=t}function oh(){if(ne.phase2pp)return ne.phase2pp;let e=ua();return ne.phase2pp=dl(e,[213090])}function ih(){if(ne.phase3pp)return ne.phase3pp;let e=ua();return ne.phase3pp=dl(e,[737420])}function S0(){if(ne.phase4om)return ne.phase4om;let e=[1,3,9,27,81,243,729,2187,6561,19683,59049],t=Array(e[9]);for(let r=0;r<e[9];r++){let n=Array(14).fill(0);for(let l=0;l<9;l++){let o=l<5?l:l+4;n[o]=(r/e[l]|0)%3,n[13]-=n[o]}n[13]=(n[13]+999)%3,t[r]=[];for(let l=0;l<3;l++){let o=gn[l],i=[0,1,2,3,4,9,10,11,12,13].map(s=>n[o[0][s]]+o[1][s]),a=0;for(let s=0;s<9;s++)a+=i[s]%3*e[s];t[r][l]=a}}return ne.phase4om=t}function v0(){if(ne.phase4pm)return ne.phase4pm;let e=yc(10)/2,t=10,r=[0,1,2,3,4,-1,-1,-1,-1,5,6,7,8,9],n=[0,1,2,3,4,9,10,11,12,13],l=[Qt(r,Qt(Uc[0],n)),Qt(r,Qt(bc[0],n)),Qt(r,Qt(xc[0],n))],o=Array(e),i=Array(10);for(let a=0;a<e;a++){Nd(a,i),o[a]=[];for(let s=0;s<3;s++){let f=Qt(i,l[s]);o[a][s]=Md(f)}}return ne.phase4pm=o}function ah(){if(ne.phase4op)return ne.phase4op;let e=S0();return ne.phase4op=dl(e,[0])}function sh(){if(ne.phase4pp)return ne.phase4pp;let e=v0();return ne.phase4pp=dl(e,[0])}function fh(e){if(ne.phase4np_list&&ne.phase4np_list.threshold===e)return ne.phase4np_list;let t=[S0(),v0()],r=Math.pow(3,9),n=[0];l(e,[0,0],-1);function l(a,s,f){if(n.push(s[0]+r*s[1]),a===0)return;let g=[];for(let c=0;c<3;c++)if(c!==f){g[0]=s[0],g[1]=s[1];for(let u=1;u<5;u++)g[0]=t[0][g[0]][c],g[1]=t[1][g[1]][c],l(a-1,g,c)}}n.sort((a,s)=>a-s);let o=[],i=-1;for(let a of n)a!==i&&o.push(i=a);return o.threshold=e,ne.phase4np_list=o}function uh(e,t){let r=0,n=e.length-1;for(;n-r>1;){let l=r+n>>1;t>e[l]?r=l+1:n=l}return t===e[r]||t===e[n]}function dl(e,t){let r=e.length,n=e[0].length,l=Array(r).fill(-1);for(let a of t)l[a]=0;let o=0,i=!1;for(;!i;){i=!0;for(let a=0;a<r;a++)if(l[a]===o)for(let s=0;s<n;s++){let f=e[a][s];for(;f!==a;)l[f]===-1&&(i=!1,l[f]=o+1),f=e[f][s]}o++}return l}function Sc(e,t,r){let n=e.length,l=0;for(let o=0;o<n;o++)l=Math.max(l,r[o][e[o]]);for(;;){let o=vc(e,t,r,l,-1);if(o!==void 0)return o;l++}}function vc(e,t,r,n,l){let o=e.length,i=t[0][0].length,a=0;for(let s=0;s<o;s++)a=Math.max(a,r[s][e[s]]);if(!(a>n)){if(n===0||a===0)return[];for(let s=0;s<i;s++){if(s===l)continue;let f=e.slice();for(let c=0;c<o;c++)f[c]=t[c][e[c]][s];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=vc(f,t,r,n-1,s);if(c!==void 0)return[[s,g]].concat(c);for(let u=0;u<o;u++)f[u]=t[u][f[u]][s];g++}}}}function gh(e){let t=S0(),r=v0(),n=ah(),l=sh(),o=fh(U0),i=Math.max(n[e[0]],l[e[1]]);for(;;){let a=Ec(e,i,-1,t,r,n,l,o);if(a!==void 0)return a;i++}}function Ec(e,t,r,n,l,o,i,a){let s=Math.max(o[e[0]],i[e[1]]);if(!(s>t)&&(s<=U0&&!uh(a,e[0]+19683*e[1])&&(s=U0+1),!(s>t))){if(t===0||s===0)return[];for(let f=0;f<3;f++){if(f===r)continue;let g=e.slice();for(let c=1;c<5;c++){g[0]=n[g[0]][f],g[1]=l[g[1]][f];let u=Ec(g,t-1,f,n,l,o,i,a);if(u!==void 0)return[[f,c]].concat(u)}}}}async function kc(){return new _(jd(Vd(await ch)))}var U0,Md,Nd,Uc,bc,xc,Od,Td,Id,w0,k7,gn,Wd,Kd,sa,Hd,ne,ch,zc=U(()=>{Re();ht();"use strict";U0=7;[Md,Nd]=(()=>{let e=new Int8Array(1024*10),t=new Int8Array(1024*10);for(let l=0;l<1024;l++)for(let o=0,i=0;o<10;o++)(l>>>o&1)!=0&&(e[o<<10|l]=i,t[i<<10|l]=o,i++);function r(l){let o=1023,i=181440,a=0;for(let s=0;s<8;s++){let f=l[s];a+=e[o|f<<10]*i,o&=~(1<<f),i/=9-s}return a}function n(l,o){let i=1023,a=181440,s=0;for(let f=0;f<8;f++){let g=l/a|0;l-=g*a,s^=g&1;let c=t[i|g<<10];o[f]=c,i&=~(1<<c),a/=9-f}return o[8]=t[i|s<<10],o[9]=t[i|(s^1)<<10],o}return[r,n]})();Uc=[Rl([0,1,2,3,4],20),Cr({},20)],bc=[Rl([4,3,11,12,13],20),Cr({4:2,3:1,11:1,12:1,13:1},20)],xc=[Rl([3,2,9,10,11],20),Cr({3:2,2:1,9:1,10:1,11:1},20)],Od=[Rl([2,1,7,8,9],20),Cr({2:2,1:1,7:1,8:1,9:1},20)],Td=[Rl([1,0,5,6,7],20),Cr({1:2,0:1,5:1,6:1,7:1},20)],Id=[Rl([0,4,13,14,5],20),Cr({0:2,4:1,13:1,14:1,5:1},20)],w0=[[15,16,17,18,19,10,9,8,7,6,5,14,13,12,11,0,1,2,3,4],Cr({},20)],k7=[[1,2,3,4,0,7,8,9,10,11,12,13,14,5,6,19,15,16,17,18],Cr({},20)],gn=[Uc,bc,xc,Od,Td,Id,w0],Wd=["U","R","F","L","BL","BR","x2"],Kd=x0(w0,w0),sa=[];for(let e=0;e<gn.length;e++){sa[e]=[Kd];for(let t=1;t<5;t++)sa[e][t]=x0(sa[e][t-1],gn[e])}{let e=Math.sin(Math.PI/5),t=Math.cos(Math.PI/10),r=Math.cos(Math.PI/5),n=Math.sin(Math.PI/10);Hd={U:[0,0],L:[-e-t,r-n],F:[0,2*r],R:[e+t,r-n],BR:[t,-1-n],BL:[-t,-1-n],DBR:[2*e+2*t,0],DB:[3*e+3*t,-r-n],DBL:[4*e+4*t,0],DFL:[3*e+4*t,1+r],DFR:[3*e+2*t,1+r],D:[3*e+3*t,r-n]}}ne={};ch=ve();kc().then(e=>e.log())});var qc={};Be(qc,{randomMasterTetraminxScrambleString:()=>Th});function go(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function cn(e){let t=Array(e);for(let r=0;r<e;r++)t[r]=r;return t}function ph(e){e=e.slice();let t=e.length,r=go(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function ga(e,t){let r=[],n=go(t-1)/2,l=0;for(let o=0;o<t-1;o++)r[o]=e/n|0,e%=n,n/=t-1-o;r[t-1]=0;for(let o=t-2;o>=0;o--)for(let i=o+1;i<t;i++)r[i]>=r[o]?r[i]++:l^=1;return l===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function Pc(e){return ph(e)>>1}function pn(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function E0(e){let t=[];for(let r=0;r<e.length;r++)t[e[r]]=r;return t}function co(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function Pr(e,t){return e.length===0?cn(t):e.map(r=>co(r,t)).reduce(pn)}function mh(e,t){let r=Array(4);for(let i=0;i<4;i++)r[i]=(e.co[i]+t.co[i])%3;let n=pn(e.mp,t.mp),l=pn(e.wp,t.wp),o=pn(e.cp,t.cp);return{co:r,mp:n,wp:l,cp:o}}function Mc(e,t){return e>=4&&t>=4?!0:e<4&&t<4?e===t:(e^t)==4}function Uh(e){let t=["0","","'"];return e.map(([n,l])=>yh[n]+t[l]).join(" ")}function bh(e){let t=Array(4);for(let o=0;o<4;o++)t[o]=e(3);let r=ga(e(go(6)/2),6);for(let o=0,i=0;o<6;o++){let a=o===5?i:e(2);i^=a,r[o]+=a*6,r[o+6]=(r[o]+6)%12}let n=ga(e(go(12)/2),12),l=ga(e(go(4)/2),4);return{co:t,mp:r,wp:n,cp:l}}function xh(e){return Sh(bh(e))}function wh(e,t=!0,r=!1){let n=Uh(xh(e));if(!t)return n;let l=["u","l","r","b"],o=["0","","'"];if(!r){for(let u=0;u<4;u++){let p=e(3);p!==0&&(n+=" "+l[u]+o[p])}return n.trim()}let i=[],a=[],s=[];for(let u=0;u<4;u++)i[u]=e(3),a[u]=e(3),s[u]=(i[u]-a[u]+3)%3;let f=u=>u.filter(p=>p!==0).length;for(;!(f(a)>=1&&f(s)>=1&&f(a)+f(s)>=4);)for(let u=0;u<4;u++)a[u]=e(3),s[u]=(i[u]-a[u]+3)%3;let g=a.map((u,p)=>u!==0?l[p]+o[u]+" ":"").join(""),c=s.map((u,p)=>u!==0?" "+l[p]+o[u]:"").join("");return g+n+c}function Sh(e){let t=Eh(e),r=[Wc(),Kc()],n=[Mh(),Nh()],l=zh(t),o,i=new Set,a=performance.now();for(let s=0;s<22;s++){let{value:f,done:g}=l.next(),c=e;for(let[R,h]of f)for(let y=0;y<h;y++)c=mh(c,hl[R]);let u=JSON.stringify(c);if(i.has(u))continue;i.add(u);let p=Ch(c),m=o?o.length-f.length-1:999999,L=Gh(p,r,n,m).next().value;if(L!==void 0&&((o===void 0||o.length>f.length+L.length)&&(o=f.concat(L)),performance.now()-a>300))break}return o}function vh(e){return e[3^e.indexOf(3)]}function Eh(e){let t=pn(E0(e.mp),e.wp),r=(e.co.reduce((n,l)=>n+l)-vh(e.cp)+3)%3;return[0,1,2,3,4,5].map(n=>n+6*t.indexOf(n)+72*t.indexOf(n+6)+864*r)}function*zh(e){let t=0,r=Ic(),n=Ph();for(;;)yield*Oc(...e,r,n,t,-1),t++}function*Oc(e,t,r,n,l,o,i,a,s,f){let g=mn,c=fr[e]+fr[t]+fr[r]+fr[n]+fr[l]+fr[o],u=Math.max(a[e%864+t*864],a[r%864+t*864],a[l%864+t*864],a[e%864+n*864],a[r%864+n*864],a[l%864+n*864],a[e%864+o*864],a[r%864+o*864],a[l%864+o*864],a[e%864+r*864],a[e%864+l*864],a[r%864+l*864],a[t%864+n*864],a[t%864+o*864],a[n%864+o*864],z0[c]);if(!(u>s)){if(s===0){yield[];return}if(!(u===0&&s===1))for(let p=0;p<g;p++){if(p===f||p<f&&Mc(p,f))continue;let m=e,L=t,R=r,h=n,y=l,A=o;for(let k=1;k<=2;k++){m=i[m][p],L=i[L][p],R=i[R][p],h=i[h][p],y=i[y][p],A=i[A][p];let E=Oc(m,L,R,h,y,A,i,a,s-1,p);for(;;){let{value:Q,done:$}=E.next();if($)break;yield[[p,k]].concat(Q)}}}}}function Ch(e){let t=e.mp,r=Pc(t.slice(0,6).map(i=>i%6)),n=t.slice(0,5).map((i,a)=>(i>=6)*2**a).reduce((i,a)=>i+a),l=e.co.map((i,a)=>i*3**a).reduce((i,a)=>i+a),o=e.cp.indexOf(0);return[r+360*o,n+32*l]}function Tc(){if(Ee.phase1pm)return Ee.phase1pm;let e=Array(6*12*12).fill().map(()=>Array(mn).fill(-1));for(let t=0;t<6;t++)for(let r=0;r<12;r++)for(let n=0;n<12;n++){if(r===n)continue;let l=t+6*r+72*n;for(let o=0;o<mn;o++){let i=Nc[o][t],a=k0[o][r],s=k0[o][n];i<6?e[l][o]=i+6*a+72*s:e[l][o]=i-6+6*s+72*a}}return Ee.phase1pm=e}function Ic(){if(Ee.phase1pcm)return Ee.phase1pcm;let e=Tc(),t=Array(e.length*3).fill().map(()=>Array(mn).fill(-1));for(let r=0;r<e.length;r++)for(let n=0;n<mn;n++){let l=e[r][n];t[r][n]=l+6*12*12*_0[n],t[r+6*12*12][n]=l+6*12*12*((_0[n]+1)%3),t[r+2*6*12*12][n]=l+6*12*12*((_0[n]+2)%3)}return Ee.phase1pcm=t}function Ph(){if(Ee.phase1p2cp)return Ee.phase1p2cp;let e=Tc(),t=Ic(),r=new Int8Array((6*12*12)**2*3);r.fill(-1);let n=[0,1,2,3,4,5].map(o=>o+6*o+72*(o+6));for(let o=0;o<6;o++)for(let i=0;i<6;i++)o!==i&&(r[n[o]+864*n[i]]=0);let l=0;for(;;){let o=!1;for(let i=0;i<r.length;i++){if(r[i]!==l)continue;let a=i%864,s=Math.floor(i/864);for(let f=0;f<mn;f++){let g=a,c=s;for(let u=1;u<=2;u++){g=e[g][f],c=t[c][f];let p=g+864*c;r[p]===-1&&(o=!0,r[p]=l+1)}}}if(!o)break;l++}return Ee.phase1p2cp=r}function Wc(){if(Ee.phase2pm)return Ee.phase2pm;let e=Array(1440).fill().map(()=>Array(ca));for(let t=0;t<360;t++){let r=ga(t,6);for(let n=0;n<6;n++)r[n+6]=r[n]+6;for(let n=0;n<ca;n++){let l=pn(r,hl[n].mp),o=Pc(l.slice(0,6).map(i=>i%6));for(let i=0;i<4;i++){let a=hl[n].cp[i];e[t+360*a][n]=o+360*i}}}return Ee.phase2pm=e}function Kc(){if(Ee.phase2om)return Ee.phase2om;let e=Array(32*81).fill().map(()=>Array(ca));for(let t=0;t<32;t++){let r=[0,1,2,3,4].map(l=>t>>l&1);r[5]=r.reduce((l,o)=>l^o);let n=[];for(let l=0;l<6;l++)n[l]=l+6*r[l],n[l+6]=l+6*(r[l]^1);for(let l=0;l<81;l++){let o=[0,1,2,3].map(i=>Math.floor(l/3**i)%3);for(let i=0;i<ca;i++){let s=pn(n,hl[i].mp).slice(0,5).map(u=>+(u>=6)),f=0;for(let u=0;u<5;u++)f+=s[u]<<u;let g=o.map((u,p)=>(u+hl[i].co[p])%3),c=0;for(let u=0;u<4;u++)c+=g[u]*3**u;e[t+32*l][i]=f+32*c}}}return Ee.phase2om=e}function Mh(){return Ee.phase2pp?Ee.phase2pp:Ee.phase2pp=Qc(Wc(),[0])}function Nh(){return Ee.phase2op?Ee.phase2op:Ee.phase2op=Qc(Kc(),[0])}function Qc(e,t){let r=e.length,n=e[0].length,l=Array(r).fill(-1),o=t.slice(),i=[],a=0;for(;o.length>0;){i.length=0;for(let s of o)if(l[s]===-1){l[s]=a;for(let f=0;f<n;f++){let g=e[s][f];for(;g!=s;)i.push(g),g=e[g][f]}}[o,i]=[i,o],a+=1}return l}function*Gh(e,t,r,n){let l=e.length,o=0;for(let i=0;i<l;i++)o=Math.max(o,r[i][e[i]]);for(;o<=n;)yield*jc(e,t,r,o,-1),o++}function*jc(e,t,r,n,l){let o=e.length,i=t[0][0].length,a=0;for(let s=0;s<o;s++)a=Math.max(a,r[s][e[s]]);if(!(a>n)){if(n===0){yield[];return}if(!(a===0&&n===1))for(let s=0;s<i;s++){if(s===l||s<l&&Mc(s,l))continue;let f=e.slice();for(let c=0;c<o;c++)f[c]=t[c][e[c]][s];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=jc(f,t,r,n-1,s);for(;;){let{value:u,done:p}=c.next();if(p)break;yield[[s,g]].concat(u)}for(let u=0;u<o;u++)f[u]=t[u][f[u]][s];g++}}}}async function Th(){return wh(await Oh,!1)}var P7,M7,N7,Lh,Bh,Rh,dh,hh,Dh,Fh,Ah,hl,yh,mn,ca,kh,Nc,_h,k0,_0,Gc,z0,fr,Ee,Oh,Vc=U(()=>{ht();"use strict";[P7,M7]=(()=>{let e=new Int8Array(4096*12),t=new Int8Array(4096*12);for(let l=0;l<4096;l++)for(let o=0,i=0;o<12;o++)(l>>>o&1)!=0&&(e[o<<12|l]=i,t[i<<12|l]=o,i++);function r(l){let o=4095,i=19958400,a=0;for(let s=0;s<10;s++){let f=l[s];a+=e[o|f<<12]*i,o&=~(1<<f),i/=11-s}return a}function n(l,o){let i=4095,a=19958400,s=0;for(let f=0;f<10;f++){let g=l/a|0;l-=g*a,s^=g&1;let c=t[i|g<<12];o[f]=c,i&=~(1<<c),a/=11-f}return o[10]=t[i|s<<12],o[11]=t[i|(s^1)<<12],o}return[r,n]})();N7={co:[0,0,0,0],mp:cn(12),wp:cn(12),cp:[0,1,2,3]},Lh={co:[2,0,0,0],mp:cn(12),wp:co([1,9,11],12),cp:[0,1,2,3]},Bh={co:[0,2,0,0],mp:cn(12),wp:co([0,7,2],12),cp:[0,1,2,3]},Rh={co:[0,0,2,0],mp:cn(12),wp:co([3,6,10],12),cp:[0,1,2,3]},dh={co:[0,0,0,2],mp:cn(12),wp:co([4,8,5],12),cp:[0,1,2,3]},hh={co:[2,0,0,0],mp:Pr([[1,9,11],[7,3,5]],12),wp:Pr([[1,9,11],[7,3,5]],12),cp:[0,2,3,1]},Dh={co:[0,2,0,0],mp:Pr([[0,7,2],[6,1,8]],12),wp:Pr([[0,7,2],[6,1,8]],12),cp:[3,1,0,2]},Fh={co:[0,0,2,0],mp:Pr([[3,6,10],[9,0,4]],12),wp:Pr([[3,6,10],[9,0,4]],12),cp:[1,3,2,0]},Ah={co:[0,0,0,2],mp:Pr([[4,8,5],[10,2,11]],12),wp:Pr([[4,8,5],[10,2,11]],12),cp:[2,0,1,3]},hl=[hh,Dh,Fh,Ah,Lh,Bh,Rh,dh],yh=["u","l","r","b","U","L","R","B"],mn=8,ca=4;kh=[],Nc=[],_h=[],k0=[];for(let e=0;e<mn;e++){let t=hl[e];kh[e]=t.mp,Nc[e]=E0(t.mp),_h[e]=t.wp,k0[e]=E0(t.wp)}_0=[0,0,0,0,2,2,2,2],Gc=[[14,-1,-1,11,11,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,4,3,-1,-1,0],[13,-1,-1,11,10,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,3,1,-1,-1,6]],z0=new Int8Array(55);for(let e=0;e<25;e++)z0[e]=Gc[0][e],z0[e+30]=Gc[1][e];fr=new Int8Array(6*12*12*3);for(let e=0;e<6;e++)for(let t=0;t<12;t++)for(let r=0;r<12;r++){let n=e+6*t+72*r,l=2;t===e?l++:t===(e+6)%12&&l--,r===(e+6)%12?l++:r===e&&l--,fr[n]=l,fr[n+6*12*12]=fr[n+2*6*12*12]=l+5}Ee={};Oh=ve()});var Jc={};Be(Jc,{cachedMegaminxKPuzzleWithoutMO:()=>po,cachedSGSDataMegaminx:()=>Qh,sgsDataMegaminx:()=>Yc});async function Ih(){let e=Mn("megaminx",{allMoves:!0,addRotations:!0}),t=new we(e.getKPuzzleDefinition(!0),{experimentalPGNotation:new qr(e,e.getOrbitsDef(!0))});return t.definition.name="megaminx",t}async function po(){return Wh??(Wh=Ih())}async function Qh(){return Kh??(Kh=Yc())}async function Yc(){return It(await po(),\`SubgroupSizes 12 5 60 58 60 56 54 57 52 50 54 48 46 51 44 42 48 40 45 38 36 42 34 32 39 30 36 28 26 33 24 30 22 20 27 18 24 16 14 21 12 18 10 15 8 6 2 12 9 3

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
Alg U BR2' U R' U2' L U2 R U' BR2 U' L'\`)}var Wh,Kh,C0=U(()=>{Ve();Nn();Gn();Wh=null;Kh=null});var ep={};Be(ep,{sgsDataPyraminx:()=>$c,sgsDataPyraminxFixedOrientation:()=>P0});async function $c(){return Vh??(Vh=Hh())}async function P0(){return{ordering:(await $c()).ordering.slice(2)}}async function Hh(){return It(await Me.pyraminx.kpuzzle(),\`SubgroupSizes 12 9 12 3 10 3 8 6 2 3 3 3 3

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
Alg u'\`)}var Vh,M0=U(()=>{Xt();Gn();Vh=null});var cp={};Be(cp,{getRandomRediCubeScramble:()=>bD});function mo(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function G0(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function Xh(e){e=e.slice();let t=e.length,r=mo(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function $h(e,t){let r=[],n=mo(t-1);for(let l=0;l<t;l++)r[l]=e/n|0,e%=n,n/=t-1-l;for(let l=t-2;l>=0;l--)for(let o=l+1;o<t;o++)r[o]+=+(r[o]>=r[l]);return r}function np(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let l=n;l<t;l++)e[n]>e[l]&&(r^=1);return r}function eD(e,t){let r=[],n=mo(t-1)/2,l=0;for(let o=0;o<t-1;o++)r[o]=e/n|0,e%=n,n/=t-1-o;r[t-1]=0;for(let o=t-2;o>=0;o--)for(let i=o+1;i<t;i++)r[i]>=r[o]?r[i]++:l^=1;return l===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function lp(e){return Xh(e)>>1}function op(e){let t=e.length,r=0;for(let i=0;i<t;i++)r+=+(e[i]===1);let n=t-r;if(n===0||r===0||t===1)return 0;let l=G0(t-1,r),o=0;for(let i=0;n>0&&r>0&&t>1;i++)t--,e[i]===0?l=l*--n/t:(o+=l,l=l*r--/t);return o}function tD(e,t,r){let n=r-t,l=G0(r-1,t),o=[],i=r-1;for(let a=0;a<i;a++)r--,e<l?(o.push(0),l=l*--n/r):(o.push(1),e-=l,l=l*t--/r);return o.push(t),o}function pa(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function Mr(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function Nr(e,t){let r=Array(t).fill(0);for(let n in e)r[n]=e[n];return r}function rD(e,t){let r=Array(8).fill(0);for(let n=0;n<8;n++)r[n]=(e[1][n]+t[1][n])%3;return[pa(e[0],t[0]),r]}function cD(e){let t=["0","","'"];return e.map(([n,l])=>gD[n]+t[l]).join(" ")}function pD(e){let t=eD(Math.floor(e(mo(12))/2),12),r=Array(8);for(let n=0;n<8;n++)r[n]=e(3);return[t,r]}function mD(e){return LD(pD(e))}function LD(e){let t=BD(e),r=[ap(),sp()],n=[dD(),hD()],l=[fp(),DD()],o=[FD(),RD()],i=yD(t,r,n),a,s=new Set,f=+new Date;for(let g=0;g<25;g++){let{value:c,done:u}=i.next(),p=e;for(let[A,k]of c)for(let E=0;E<k;E++)p=rD(p,Lo[A]);if(s.has(p.toString()))continue;s.add(p.toString());let m=lp(p[0].slice(0,8)),L=0;for(let A=0;A<4;A++)L+=p[1][A]*3**A;let R=[m,L],h=a?a.length-c.length-1:999999,y=AD(R,l,o,h);if(y!==void 0&&((a===void 0||a.length>c.length+y.length)&&(a=c.concat(y)),new Date-f>300))break}return a}function BD(e){let t=0;for(let o=0;o<4;o++)t+=e[0].indexOf(o+8)*12**o;let r=0;for(let o=0;o<4;o++)r+=e[1][o+4]*3**o;let n=e[0].map(o=>Math.max(-1,o-8)),l=op(n.map(o=>+(o>=0)))*2+np(n.filter(o=>o>=0));return[t,r+81*l]}function ip(){if(pe.phase1cm)return pe.phase1cm;let e=[];for(let t=0;t<81;t++){e[t]=Array(8);let r=[t%3,Math.floor(t/3)%3,Math.floor(t/9)%3,Math.floor(t/27)];e[t][0]=e[t][1]=e[t][2]=e[t][3]=t;for(let n=0;n<4;n++)r[n]=(r[n]+2)%3,e[t][4+n]=r[0]+r[1]*3+r[2]*9+r[3]*27,r[n]=(r[n]+1)%3}return pe.phase1cm=e}function RD(){if(pe.phase1cp)return pe.phase1cp;let e=Array(81);for(let t=0;t<81;t++){let r=[t%3,Math.floor(t/3)%3,Math.floor(t/9)%3,Math.floor(t/27)];e[t]=(r[0]!==0)+(r[1]!==0)+(r[2]!==0)+(r[3]!==0)}return pe.phase1cp=e}function ap(){if(pe.phase1em)return pe.phase1em;let e=[];for(let r=0;r<12;r++){e[r]=[];for(let n=0;n<8;n++)e[r][n]=Lo[n][0].indexOf(r)}let t=Array(12**4);for(let r=0;r<12**4;r++){t[r]=Array(8);for(let n=0;n<8;n++){let l=0;for(let o=0;o<4;o++)l+=e[Math.floor(r/12**o)%12][n]*12**o;t[r][n]=l}}return pe.phase1em=t}function dD(){return pe.phase1ep?pe.phase1ep:pe.phase1ep=O0(ap(),[8+12*(9+12*(10+12*11))])}function sp(){if(pe.phase1sm)return pe.phase1sm;let e=G0(12,4),t=[];for(let l=0;l<e;l++){t[l]=[];let o=tD(l,4,12),i=[];for(let a=0,s=0;a<12;a++)o[a]===0?i[a]=-1:i[a]=s++;for(let a=0;a<8;a++){let s=pa(i,Lo[a][0]),f=pa(o,Lo[a][0]),g=np(s.filter(c=>c>=0));t[l][a]=op(f)*2+g}}let r=ip(),n=[];for(let l=0;l<e;l++)for(let o=0;o<81;o++){let i=n[o+81*(2*l)]=[],a=n[o+81*(2*l+1)]=[];for(let s=0;s<8;s++)i[s]=r[o][s]+81*t[l][s],a[s]=r[o][s]+81*(t[l][s]^1)}return pe.phase1sm=n}function hD(){return pe.phase1sp?pe.phase1sp:pe.phase1sp=O0(sp(),[0])}function DD(){if(pe.phase2cm)return pe.phase2cm;let e=ip(),t=Array(81);for(let r=0;r<81;r++)t[r]=e[r].slice(4,8);return pe.phase2cm=t}function fp(){if(pe.phase2em)return pe.phase2em;let e=8,t=mo(e)/2,r=Array(t),n=[0,1,2,3,4,5,6,7];for(let l=0;l<t;l++){r[l]=Array(4);for(let i=0;i<4;i++){let a=pa(n,Lo[i][0].slice(0,8));r[l][i]=lp(a)}if(l===t-1)break;let o=0;do for(let i=e-2;i>=0;i--){if(n[i]>n[i+1])continue;let a=i+1;for(let s=a;s<e;s++)n[s]>n[i]&&(a=s);[n[i],n[a]]=[n[a],n[i]],o^=1;for(let s=0;i+1+s<e-1-s;s++,o^=1)[n[i+1+s],n[e-1-s]]=[n[e-1-s],n[i+1+s]];break}while(o!==0)}return pe.phase2em=r}function FD(){return pe.phase2ep?pe.phase2ep:pe.phase2ep=O0(fp(),[0])}function O0(e,t){let r=e.length,n=e[0].length,l=Array(r).fill(-1),o=t.slice(),i=[],a=0;for(;o.length>0;){i.length=0;for(let s of o)if(l[s]===-1){l[s]=a;for(let f=0;f<n;f++){let g=e[s][f];for(;g!=s;)i.push(g),g=e[g][f]}}[o,i]=[i,o],a+=1}return l}function AD(e,t,r,n){n=n||999999;let l=e.length,o=0;for(let i=0;i<l;i++)o=Math.max(o,r[i][e[i]]);for(;o<=n;){let i=up(e,t,r,o,-1);if(i!==void 0)return i;o++}}function up(e,t,r,n,l){let o=e.length,i=t[0][0].length,a=0;for(let s=0;s<o;s++)a=Math.max(a,r[s][e[s]]);if(!(a>n)){if(n===0)return[];if(!(a===0&&n===1))for(let s=0;s<i;s++){if(s===l||s<l&&ma[s]==ma[l])continue;let f=e.slice();for(let c=0;c<o;c++)f[c]=t[c][e[c]][s];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=up(f,t,r,n-1,s);if(c!==void 0)return[[s,g]].concat(c);for(let u=0;u<o;u++)f[u]=t[u][f[u]][s];g++}}}}function*yD(e,t,r){let n=e.length,l=0;for(let o=0;o<n;o++)l=Math.max(l,r[o][e[o]]);for(;;)yield*gp(e,t,r,l,-1),l++}function*gp(e,t,r,n,l){let o=e.length,i=t[0][0].length,a=0;for(let s=0;s<o;s++)a=Math.max(a,r[s][e[s]]);if(!(a>n)){if(n===0){yield[];return}if(!(a===0&&n===1))for(let s=0;s<i;s++){if(s===l||s<l&&ma[s]==ma[l])continue;let f=e.slice();for(let c=0;c<o;c++)f[c]=t[c][e[c]][s];let g=1;for(;e.some((c,u)=>e[u]!=f[u]);){let c=gp(f,t,r,n-1,s);for(;;){let{value:u,done:p}=c.next();if(p)break;yield[[s,g]].concat(u)}for(let u=0;u<o;u++)f[u]=t[u][f[u]][s];g++}}}}async function bD(){return new _(cD(mD(await UD)))}var nD,lD,oD,iD,aD,sD,fD,uD,i5,Lo,gD,ma,pe,UD,pp=U(()=>{Re();ht();"use strict";nD=[Mr([0,1,4],12),Nr({0:2},8)],lD=[Mr([1,2,5],12),Nr({1:2},8)],oD=[Mr([2,3,6],12),Nr({2:2},8)],iD=[Mr([3,0,7],12),Nr({3:2},8)],aD=[Mr([9,8,4],12),Nr({4:2},8)],sD=[Mr([10,9,5],12),Nr({5:2},8)],fD=[Mr([11,10,6],12),Nr({6:2},8)],uD=[Mr([8,11,7],12),Nr({7:2},8)],i5=[$h(0,12),Array(8).fill(0)],Lo=[nD,lD,oD,iD,aD,sD,fD,uD],gD=["UL","U","UR","F","L","B","R","D"],ma=[0,1,0,1,1,0,1,0];pe={};UD=ve()});var Bp={};Be(Bp,{sgsDataSkewb:()=>Lp,sgsDataSkewbFixedCorner:()=>T0,skewbKPuzzleWithoutMOCached:()=>La});async function xD(){let e=Mn("skewb",{allMoves:!0,addRotations:!0});return new we(e.getKPuzzleDefinition(!0),{experimentalPGNotation:new qr(e,e.getOrbitsDef(!0))})}async function La(){return wD??(wD=xD())}async function Lp(){return SD??(SD=vD())}async function T0(){return{ordering:(await Lp()).ordering.slice(1)}}async function vD(){return It(await La(),\`SubgroupSizes 24 6 5 12 9 3 4 9 3 3

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
Alg R' U' R U B' U' B L\`)}var wD,SD,I0=U(()=>{Ve();Nn();Gn();wD=null;SD=null});var wp={};Be(wp,{getRandomSquare1ScrambleString:()=>rF});function CD(e,t){e.ul=t.ul,e.ur=t.ur,e.dl=t.dl,e.dr=t.dr,e.ml=t.ml}function hp(e,t){var r;t<<=2,t>24?(t=48-t,r=e.ul,e.ul=(~~e.ul>>t|e.ur<<24-t)&16777215,e.ur=(~~e.ur>>t|r<<24-t)&16777215):t>0?(r=e.ul,e.ul=(e.ul<<t|~~e.ur>>24-t)&16777215,e.ur=(e.ur<<t|~~r>>24-t)&16777215):t==0?(r=e.ur,e.ur=e.dl,e.dl=r,e.ml=1-e.ml):t>=-24?(t=-t,r=e.dl,e.dl=(e.dl<<t|~~e.dr>>24-t)&16777215,e.dr=(e.dr<<t|~~r>>24-t)&16777215):t<-24&&(t=48+t,r=e.dl,e.dl=(~~e.dl>>t|e.dr<<24-t)&16777215,e.dr=(~~e.dr>>t|r<<24-t)&16777215)}function PD(e){var t,r,n,l,o;for(n=0,e.arr[0]=jt(e,0),l=1;l<24;++l)jt(e,l)!=e.arr[n]&&(e.arr[++n]=jt(e,l));for(o=0,t=0;t<16;++t)for(r=t+1;r<16;++r)e.arr[t]>e.arr[r]&&(o^=1);return o}function MD(e){var t,r,n,l;return l=e.ur&1118481,l|=~~l>>3,l|=~~l>>6,l=l&15|~~l>>12&48,n=e.ul&1118481,n|=~~n>>3,n|=~~n>>6,n=n&15|~~n>>12&48,r=e.dr&1118481,r|=~~r>>3,r|=~~r>>6,r=r&15|~~r>>12&48,t=e.dl&1118481,t|=~~t>>3,t|=~~t>>6,t=t&15|~~t>>12&48,Bo(PD(e)<<24|n<<18|l<<12|t<<6|r)}function ND(e,t){var r,n;for(r=0;r<8;++r)e.prm[r]=~~(~~jt(e,r*3+1)>>1<<24)>>24;for(t.cornperm=Fo(e.prm),t.topEdgeFirst=jt(e,0)==jt(e,1),r=t.topEdgeFirst?2:0,n=0;n<4;r+=3,++n)e.prm[n]=~~(~~jt(e,r)>>1<<24)>>24;for(t.botEdgeFirst=jt(e,12)==jt(e,13),r=t.botEdgeFirst?14:12;n<8;r+=3,++n)e.prm[n]=~~(~~jt(e,r)>>1<<24)>>24;t.edgeperm=Fo(e.prm),t.ml=e.ml}function jt(e,t){var r;return t<6?r=~~e.ul>>(5-t<<2):t<12?r=~~e.ur>>(11-t<<2):t<18?r=~~e.dl>>(17-t<<2):r=~~e.dr>>(23-t<<2),~~((r&15)<<24)>>24}function K0(e,t,r){t<6?(e.ul&=~(15<<(5-t<<2)),e.ul|=r<<(5-t<<2)):t<12?(e.ur&=~(15<<(11-t<<2)),e.ur|=r<<(11-t<<2)):t<18?(e.dl&=~(15<<(17-t<<2)),e.dl|=r<<(17-t<<2)):(e.dr&=~(15<<(23-t<<2)),e.dr|=r<<(23-t<<2))}function Q0(){this.arr=[],this.prm=[]}async function GD(){let e=await ve();var t,r,n,l,o,i,a,s,f;for(t=new Q0,n=Dl[e(3678)],o=19088743<<1|286331153,l=19088743<<1,a=i=8,r=0;r<24;r++)(n>>r&1)==0?(s=e(i)<<2,K0(t,23-r,l>>s&15),f=(1<<s)-1,l=(l&f)+(l>>4&~f),--i):(s=e(a)<<2,K0(t,23-r,o>>s&15),K0(t,22-r,o>>s&15),f=(1<<s)-1,o=(o&f)+(o>>4&~f),--a,++r);return t.ml=e(2),t}function OD(){}function TD(e){var t,r,n,l,o,i;for(CD(e.Search_d,e.Search_c),n=0;n<e.Search_length1;++n)hp(e.Search_d,e.Search_move[n]);for(ND(e.Search_d,e.Search_sq),r=e.Search_sq.edgeperm,t=e.Search_sq.cornperm,o=e.Search_sq.ml,i=Math.max(be[e.Search_sq.edgeperm<<1|o],be[e.Search_sq.cornperm<<1|o]),n=i;n<e.Search_maxlen2;++n)if(Ra(e,r,t,e.Search_sq.topEdgeFirst,e.Search_sq.botEdgeFirst,o,n,e.Search_length1,0)){for(l=0;l<n;++l)hp(e.Search_d,e.Search_move[e.Search_length1+l]);return e.Search_sol_string=ID(e,n+e.Search_length1),!0}return!1}function ID(e,t){for(var r="",n=0,l=0,o=t-1;o>=0;o--){var i=e.Search_move[o];i>0?(i=12-i,n=i>6?i-12:i):i<0?(i=12+i,l=i>6?i-12:i):(n==0&&l==0?r+=" / ":r+="("+n+", "+l+") / ",n=l=0)}return(n!==0||l!==0)&&(r+="("+n+", "+l+")"),r}function Ba(e,t,r,n,l,o){var i,a,s;if(r==0&&n<4)return n==0&&TD(e);if(o!=0&&(s=da[t],a=Te[s],a<n&&(e.Search_move[l]=0,Ba(e,s,a,n-1,l+1,0))))return!0;if(s=t,o<=0){for(i=0;i+=ho[s],s=~~i>>4,i&=15,!(i>=12||(a=Te[s],a>n));)if(a<n&&(e.Search_move[l]=i,Ba(e,s,a,n-1,l+1,1)))return!0}if(s=t,o<=1){for(i=0;i+=Ro[s],s=~~i>>4,i&=15,!(i>=6||(a=Te[s],a>n));)if(a<n&&(e.Search_move[l]=-i,Ba(e,s,a,n-1,l+1,2)))return!0}return!1}function Ra(e,t,r,n,l,o,i,a,s){var f,g,c,u,p,m,L;if(i==0&&!n&&l||s!=0&&n==l&&(c=Ao[t],g=Ao[r],be[c<<1|1-o]<i&&be[g<<1|1-o]<i&&(e.Search_move[a]=0,Ra(e,c,g,n,l,1-o,i-1,a+1,0))))return!0;if(s<=0)for(L=!n,c=L?Rn[t]:t,g=L?r:Rn[r],u=L?1:2,p=be[c<<1|o],m=be[g<<1|o];u<12&&p<=i&&p<=i;){if(p<i&&m<i&&(e.Search_move[a]=u,Ra(e,c,g,L,l,o,i-1,a+1,1)))return!0;L=!L,L?(c=Rn[c],p=be[c<<1|o],u+=1):(g=Rn[g],m=be[g<<1|o],u+=2)}if(s<=1)for(f=!l,c=f?Ln[t]:t,g=f?r:Ln[r],u=f?1:2,p=be[c<<1|o],m=be[g<<1|o];u<(i>3?6:12)&&p<=i&&p<=i;){if(p<i&&m<i&&(e.Search_move[a]=-u,Ra(e,c,g,n,f,o,i-1,a+1,2)))return!0;f=!f,f?(c=Ln[c],p=be[c<<1|o],u+=1):(g=Ln[g],m=be[g<<1|o],u+=2)}return!1}function WD(e,t){var r;for(e.Search_c=t,r=MD(t),e.Search_length1=Te[r];e.Search_length1<100&&(e.Search_maxlen2=Math.min(31-e.Search_length1,17),!Ba(e,r,Te[r],e.Search_length1,0,-1));++e.Search_length1);return e.Search_sol_string}function Dp(){this.Search_move=[],this.Search_d=new Q0,this.Search_sq=new Up}function KD(){}function QD(){Fp||(Fp=!0,Do=[0,3,6,12,15,24,27,30,48,51,54,60,63],Dl=[],Te=[],ho=[],Ro=[],da=[],VD())}function jD(e){var t,r;t=0,r=0;do(e.bottom&2048)==0?(t+=1,e.bottom=e.bottom<<1):(t+=2,e.bottom=e.bottom<<2^12291),r=1-r;while((dn(e.bottom&63)&1)!=0);return(dn(e.bottom)&2)==0&&(e.Shape_parity^=r),t}function j0(e){var t;return t=xp(Dl,e.top<<12|e.bottom)<<1|e.Shape_parity,t}function q0(e,t){e.Shape_parity=t&1,e.top=Dl[~~t>>1],e.bottom=e.top&4095,e.top>>=12}function qD(e){var t,r;t=0,r=0;do(e.top&2048)==0?(t+=1,e.top=e.top<<1):(t+=2,e.top=e.top<<2^12291),r=1-r;while((dn(e.top&63)&1)!=0);return(dn(e.top)&2)==0&&(e.Shape_parity^=r),t}function Ap(){}function Bo(e){var t;return t=xp(Dl,e&16777215)<<1|~~e>>24,t}function VD(){var e,t,r,n,l,o,i,a,s,f,g,c,u,p,m,L;for(e=0,i=0;i<28561;++i)o=Do[i%13],r=Do[~~(i/13)%13],c=Do[~~(~~(i/13)/13)%13],g=Do[~~(~~(~~(i/13)/13)/13)],u=g<<18|c<<12|r<<6|o,dn(u)==16&&(Dl[e++]=u);for(f=new Ap,i=0;i<7356;++i)q0(f,i),ho[i]=qD(f),ho[i]|=j0(f)<<4,q0(f,i),Ro[i]=jD(f),Ro[i]|=j0(f)<<4,q0(f,i),L=f.top&63,p=dn(L),m=dn(f.bottom&4032),f.Shape_parity^=1&~~(p&m)>>1,f.top=f.top&4032|~~f.bottom>>6&63,f.bottom=f.bottom&63|L<<6,da[i]=j0(f);for(i=0;i<7536;++i)Te[i]=-1;for(Te[Bo(14378715)]=0,Te[Bo(31157686)]=0,Te[Bo(23967451)]=0,Te[Bo(7191990)]=0,n=4,l=0,t=-1;n!=l;)for(l=n,++t,i=0;i<7536;++i)if(Te[i]==t){s=0,a=i;do a=ho[a],s+=a&15,a>>=4,Te[a]==-1&&(++n,Te[a]=t+1);while(s!=12);s=0,a=i;do a=Ro[a],s+=a&15,a>>=4,Te[a]==-1&&(++n,Te[a]=t+1);while(s!=12);a=da[i],Te[a]==-1&&(++n,Te[a]=t+1)}}function HD(){}function YD(){if(!yp){yp=!0,be=[],Ao=[],Rn=[],Ln=[],bp=[1,1,2,6,24,120,720,5040],Bn=[];for(var e=0;e<12;++e)Bn[e]=[];JD()}}function Up(){}function Fo(e){var t,r,n,l;for(r=0,l=1985229328,t=0;t<7;++t)n=e[t]<<2,r=(8-t)*r+(~~l>>n&7),l-=286331152<<n;return r&65535}function JD(){var e,t,r,n,l,o,i,a,s,f,g,c,u;for(l=0;l<12;++l)for(Bn[l][0]=1,Bn[l][l]=1,s=1;s<l;++s)Bn[l][s]=Bn[l-1][s-1]+Bn[l-1][s];for(c=[],l=0;l<40320;++l)V0(c,l),u=c[2],c[2]=c[4],c[4]=u,u=c[3],c[3]=c[5],c[5]=u,Ao[l]=Fo(c),V0(c,l),u=c[0],c[0]=c[1],c[1]=c[2],c[2]=c[3],c[3]=u,Rn[l]=Fo(c),V0(c,l),u=c[4],c[4]=c[5],c[5]=c[6],c[6]=c[7],c[7]=u,Ln[l]=Fo(c);for(l=0;l<80640;++l)be[l]=-1;for(be[0]=0,t=0,r=1;r<80640;){a=t>=11,n=a?-1:t,e=a?t:-1,++t;e:for(l=0;l<80640;++l)if(be[l]==n){if(o=~~l>>1,g=l&1,i=Ao[o]<<1|1-g,be[i]==e&&(++r,be[a?l:i]=~~(t<<24)>>24,a))continue e;for(i=o,f=0;f<4;++f)if(i=Rn[i],be[i<<1|g]==e&&(++r,be[a?l:i<<1|g]=~~(t<<24)>>24,a))continue e;for(f=0;f<4;++f)if(i=Ln[i],be[i<<1|g]==e&&(++r,be[a?l:i<<1|g]=~~(t<<24)>>24,a))continue e}}}function V0(e,t){var r,n,l,o,i;for(i=1985229328,r=0;r<7;++r)l=bp[7-r],o=~~(t/l),t-=o*l,o<<=2,e[r]=~~((~~i>>o&7)<<24)>>24,n=(1<<o)-1,i=(i&n)+(~~i>>4&~n);e[7]=~~(i<<24)>>24}function ZD(){}function dn(e){return e-=~~e>>1&1431655765,e=(~~e>>2&858993459)+(e&858993459),e=(~~e>>4)+e&252645135,e+=~~e>>8,e+=~~e>>16,e&63}function xp(e,t){var r,n,l,o;for(n=0,r=e.length-1;n<=r;)if(l=n+(~~(r-n)>>1),o=e[l],o<t)n=l+1;else if(o>t)r=l-1;else return l;return-n-1}async function rF(){return(await tF()).scramble_string}var ze,Fp,Ro,Dl,Te,ho,da,Do,yp,Ln,Bn,be,Rn,Ao,bp,H0,XD,$D,eF,tF,Sp=U(()=>{ht();ze=Q0.prototype=OD.prototype;ze.dl=10062778;ze.dr=14536702;ze.ml=0;ze.ul=70195;ze.ur=4544119;ze=Dp.prototype=KD.prototype;ze.Search_c=null;ze.Search_length1=0;ze.Search_maxlen2=0;ze.Search_sol_string=null;Fp=!1;ze=Ap.prototype=HD.prototype;ze.bottom=0;ze.Shape_parity=0;ze.top=0;yp=!1;ze=Up.prototype=ZD.prototype;ze.botEdgeFirst=!1;ze.cornperm=0;ze.edgeperm=0;ze.ml=0;ze.topEdgeFirst=!1;H0=!1,XD=function(e,t,r){H0||(QD(),YD()),r&&r("Done initializing Square-1."),H0=!0,e!=null&&e()},$D=async function(){return H0||XD(),GD()},eF=function(e){var t=new Dp;return WD(t,e)},tF=async function(){var e=await $D(),t=eF(e);return{state:e,scramble_string:t}}});var X0=Symbol("Comlink.proxy"),Mp=Symbol("Comlink.endpoint"),Np=Symbol("Comlink.releaseProxy"),Fa=Symbol("Comlink.thrown"),$0=e=>typeof e=="object"&&e!==null||typeof e=="function",Gp={canHandle:e=>$0(e)&&e[X0],serialize(e){let{port1:t,port2:r}=new MessageChannel;return Fl(e,t),[r,[r]]},deserialize(e){return e.start(),Ip(e)}},Op={canHandle:e=>$0(e)&&Fa in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},e2=new Map([["proxy",Gp],["throw",Op]]);function Fl(e,t=self){t.addEventListener("message",function r(n){if(!n||!n.data)return;let{id:l,type:o,path:i}=Object.assign({path:[]},n.data),a=(n.data.argumentList||[]).map(Gr),s;try{let f=i.slice(0,-1).reduce((c,u)=>c[u],e),g=i.reduce((c,u)=>c[u],e);switch(o){case"GET":s=g;break;case"SET":f[i.slice(-1)[0]]=Gr(n.data.value),s=!0;break;case"APPLY":s=g.apply(f,a);break;case"CONSTRUCT":{let c=new g(...a);s=Qp(c)}break;case"ENDPOINT":{let{port1:c,port2:u}=new MessageChannel;Fl(e,u),s=Kp(c,[c])}break;case"RELEASE":s=void 0;break;default:return}}catch(f){s={value:f,[Fa]:0}}Promise.resolve(s).catch(f=>({value:f,[Fa]:0})).then(f=>{let[g,c]=ya(f);t.postMessage(Object.assign(Object.assign({},g),{id:l}),c),o==="RELEASE"&&(t.removeEventListener("message",r),t2(t))})}),t.start&&t.start()}function Tp(e){return e.constructor.name==="MessagePort"}function t2(e){Tp(e)&&e.close()}function Ip(e,t){return Aa(e,[],t)}function yo(e){if(e)throw new Error("Proxy has been released and is not useable")}function Aa(e,t=[],r=function(){}){let n=!1,l=new Proxy(r,{get(o,i){if(yo(n),i===Np)return()=>hn(e,{type:"RELEASE",path:t.map(a=>a.toString())}).then(()=>{t2(e),n=!0});if(i==="then"){if(t.length===0)return{then:()=>l};let a=hn(e,{type:"GET",path:t.map(s=>s.toString())}).then(Gr);return a.then.bind(a)}return Aa(e,[...t,i])},set(o,i,a){yo(n);let[s,f]=ya(a);return hn(e,{type:"SET",path:[...t,i].map(g=>g.toString()),value:s},f).then(Gr)},apply(o,i,a){yo(n);let s=t[t.length-1];if(s===Mp)return hn(e,{type:"ENDPOINT"}).then(Gr);if(s==="bind")return Aa(e,t.slice(0,-1));let[f,g]=r2(a);return hn(e,{type:"APPLY",path:t.map(c=>c.toString()),argumentList:f},g).then(Gr)},construct(o,i){yo(n);let[a,s]=r2(i);return hn(e,{type:"CONSTRUCT",path:t.map(f=>f.toString()),argumentList:a},s).then(Gr)}});return l}function Wp(e){return Array.prototype.concat.apply([],e)}function r2(e){let t=e.map(ya);return[t.map(r=>r[0]),Wp(t.map(r=>r[1]))]}var n2=new WeakMap;function Kp(e,t){return n2.set(e,t),e}function Qp(e){return Object.assign(e,{[X0]:!0})}function ya(e){for(let[t,r]of e2)if(r.canHandle(e)){let[n,l]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},l]}return[{type:"RAW",value:e},n2.get(e)||[]]}function Gr(e){switch(e.type){case"HANDLER":return e2.get(e.name).deserialize(e.value);case"RAW":return e.value}}function hn(e,t,r){return new Promise(n=>{let l=jp();e.addEventListener("message",function o(i){!i.data||!i.data.id||i.data.id!==l||(e.removeEventListener("message",o),n(i.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:l},t),r)})}function jp(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function qp(e){let t=new WeakMap;return{postMessage:e.postMessage.bind(e),addEventListener:(r,n)=>{let l=o=>{"handleEvent"in n?n.handleEvent({data:o}):n({data:o})};e.on("message",l),t.set(n,l)},removeEventListener:(r,n)=>{let l=t.get(n);!l||(e.off("message",l),t.delete(n))},nodeWorker:e}}var l2=qp;var Vp=typeof globalThis.Worker=="undefined"&&typeof globalThis.WorkerNavigator=="undefined",Hp="w-orker-_threa-ds",Yp=()=>Hp.replace(/-/g,"");async function Jp(){let{parentPort:e}=await import(Yp()).catch();return l2(e)}function o2(e){Vp?(async()=>{Fl(e,await Jp())})():Fl(e)}Ve();Xt();dt();Ve();Xt();ht();dt();Re();Re();var ss=class extends xn{constructor(t){super();this.metric=t}traverseAlg(t){let r=0;for(let n of t.units())r+=this.traverseUnit(n);return r}traverseGrouping(t){let r=t.alg;return this.traverseAlg(r)*Math.abs(t.amount)}traverseMove(t){return this.metric(t)}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 0}traverseNewline(t){return 0}traverseLineComment(t){return 0}};function Au(e){return"A"<=e&&e<="Z"}function rL(e){let t=e.family;return Au(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:1}function nL(e){let t=e.family;return Au(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:Math.abs(e.amount)}var yu=new ss(rL),fs=yu.traverseAlg.bind(yu),Uu=new ss(nL),lL=Uu.traverseAlg.bind(Uu);Re();var bu=class extends xn{traverseAlg(t){let r=0;for(let n of t.units())r+=this.traverseUnit(n);return r}traverseGrouping(t){return this.traverseAlg(t.alg)*Math.abs(t.amount)}traverseMove(t){return 1}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 1}traverseNewline(t){return 0}traverseLineComment(t){return 0}},xu=new bu,oL=xu.traverseAlg.bind(xu);ht();var iL=2,aL=!0,sL=!1;function fL(e,t){let r=[];return t.forEach(function(n){let l=new B(n);if(l.amount!==1)throw new Error("SGS cannot handle def moves with an amount other than 1 yet.");let o=e.identityTransformation();for(let i=1;o=o.applyMove(l),!o.isIdentityTransformation();i++)r.push({move:l.modified({amount:i}),transformation:o})}),r}var Tt=class{constructor(t,r,n){this.kpuzzle=t;this.sgs=r;this.searchMoves=fL(this.kpuzzle,n??Object.keys(this.kpuzzle.definition.moves))}async solve(t,r=iL,n){let l=t.experimentalToTransformation();if(!l)throw new Error("distinguishable pieces are not supported in tremble solver yt");let o=null,i=1e6,a=(s,f,g)=>{if(f===0){let c=this.sgsPhaseSolve(s,i);if(!c)return;let u=g.concat(c).simplify({collapseMoves:!0,quantumMoveOrder:n}),p=fs(u);(o===null||p<i)&&(sL&&(console.log(\`New best (\${p} moves): \${u.toString()}\`),console.log(\`Tremble moves are: \${g.toString()}\`)),o=u,i=p);return}for(let c of this.searchMoves)a(s.applyTransformation(c.transformation),f-1,g.concat([c.move]))};for(let s=0;s<=r;s++)a(l,s,new _);if(o===null)throw new Error("SGS search failed.");return o}sgsPhaseSolve(t,r){let n=new Lt,l=t;for(let o of this.sgs.ordering){let i=o.pieceOrdering,a="",s=l.invert();for(let g=0;g<i.length;g++){let c=i[g],u=c.orbitName,p=c.permutationIdx;a+=\` \${s.transformationData[u].permutation[p]} \${s.transformationData[u].orientation[p]}\`}let f=o.lookup[a];if(!f)throw new Error("Missing algorithm in sgs or esgs?");if(n.experimentalPushAlg(f.alg),n.experimentalNumUnits()>=r)return null;if(l=l.applyTransformation(f.transformation),aL)for(let g=0;g<i.length;g++){let c=i[g],u=c.orbitName,p=c.permutationIdx;if(l.transformationData[u].permutation[p]!==p||l.transformationData[u].orientation[p]!==0)throw new Error("bad SGS :-(")}}return n.toAlg()}};async function oi(e,t){let r=await $t(),n=e.identityTransformation();for(let l of t.ordering){let o=r(Object.values(l.lookup));n=n.applyTransformation(o.transformation)}return n.toKState()}var cL=3,Eu=null;async function ku(){return Eu||(Eu=(async()=>{let e=await(await Promise.resolve().then(()=>(vu(),Su))).cachedData222();return new Tt(await Me["2x2x2"].kpuzzle(),e,"URFLBD".split(""))})())}async function _u(){await ku()}async function us(e){return Se(),await(await ku()).solve(e,cL,()=>4)}async function pL(e,t,r,n){let l=await ve();await Fu(r.stateData[t].pieces);let o=e.definition.orbits[t],i=r.stateData[t].orientation,a=0;for(let s=0;s<o.numPieces;s++){let f=l(o.numOrientations);i[s]=f,a+=f}n&&"orientationSum"in n&&(i[0]=((i[0]+n.orientationSum-a)%o.numOrientations+o.numOrientations)%o.numOrientations)}async function mL(){let e=await Me["2x2x2"].kpuzzle(),t=new de(e,JSON.parse(JSON.stringify(e.startState().stateData)));return await pL(e,"CORNERS",t,{orientationSum:0}),t}async function zu(){return await us(await mL())}Ps();ii();var vR=[[null,"x","x2","x'","z","z'"],[null,"y","y2","y'"]],ER=null;function Ng(){return ER??(ER=Promise.resolve().then(()=>(Mg(),Pg)))}async function Gg(){return(await Ng()).initialize()}async function a0(){return(await Ng()).random444Scramble()}async function Og(){return On(await a0(),vR)}ii();Re();ht();function kR(e){switch(e){case 5:return 60;case 6:return 80;default:return 100}}var _R=[["U","D"],["L","R"],["F","B"]],Tg=new Map;function zR(e){let t=Tg.get(e);if(t)return t;let r=[];for(let n of _R){let l=[];r.push(l);for(let o of n){l.push(new P(o)),e>3&&l.push(new P(\`\${o}w\`));for(let i=3;i<=e/2;i++)l.push(new P(\`\${o}w\`,i))}}return Tg.set(e,r),r}async function ir(e){let t=await ve(),r=await $t(),n=r,l=zR(e),o=kR(e),i=new Lt,a=0,s=new Set;for(;i.experimentalNumUnits()<o;){let f=t(3);f!==a&&s.clear(),a=f;let g=r(l[a]),c=g.toString();s.has(c)||(s.add(c),i.push(new B(g,n([1,2,-1]))))}return i.toAlg()}var CR=[[null,"3Rw","3Rw2","3Rw'","3Fw","3Fw'"],[null,"3Dw","3Dw2","3Dw'"]];async function Ig(){return On(await ir(5),CR)}Re();Xt();dt();async function Ac(){Se();let{randomFTOScrambleString:e}=await Promise.resolve().then(()=>(Fc(),Dc));return new _(await e())}dt();async function Cc(){Se();let{getRandomKilominxScramble:e}=await Promise.resolve().then(()=>(zc(),_c));return e()}Re();dt();async function Hc(){let{randomMasterTetraminxScrambleString:e}=await Promise.resolve().then(()=>(Vc(),qc));return Se(),new _(await e())}Ve();dt();C0();var jh=2,Zc=null;async function qh(){return Zc||(Zc=(async()=>{let t=await(await Promise.resolve().then(()=>(C0(),Jc))).cachedSGSDataMegaminx();return new Tt(await po(),t,["U","R","F","L","BR","BL","FR","FL","DR","DL","B","D"])})())}async function Xc(e){Se();let t=await qh(),r=JSON.parse(JSON.stringify(e.stateData));r.CENTERS.orientation=new Array(12).fill(0);let n=new de(await po(),r);return await t.solve(n,jh,()=>5)}Xt();dt();M0();var Yh=3,tp=null;async function Jh(){return tp||(tp=(async()=>{let t=await(await Promise.resolve().then(()=>(M0(),ep))).sgsDataPyraminx();return new Tt(await Me.pyraminx.kpuzzle(),t,"RLUB".split(""))})())}async function N0(e){return Se(),await(await Jh()).solve(e,Yh,()=>3)}async function Zh(){return Se(),oi(await Me.pyraminx.kpuzzle(),await P0())}async function rp(){return N0(await Zh())}dt();async function mp(){Se();let{getRandomRediCubeScramble:e}=await Promise.resolve().then(()=>(pp(),cp));return e()}Ve();dt();I0();var ED=3,Rp=null;async function kD(){return Rp||(Rp=(async()=>{let e=await Promise.resolve().then(()=>(I0(),Bp)),t=await e.sgsDataSkewb();return new Tt(await e.skewbKPuzzleWithoutMOCached(),t,"RLUB".split(""))})())}function _D(e){return new de(e.kpuzzle,{CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}})}async function W0(e){return Se(),await(await kD()).solve(_D(e),ED,n=>n.family==="y"?4:3)}async function zD(){return oi(await La(),await T0())}async function dp(){return W0(await zD())}Re();var nF=null;function lF(){return nF??(nF=Promise.resolve().then(()=>(Sp(),wp)))}async function vp(){return _.fromString(await(await lF()).getRandomSquare1ScrambleString())}Bu(!0);var Ep=!0;function oF(e){Ep=e}function kp(){return(typeof performance=="undefined"?Date:performance).now()}async function Ce(e,t){if(!Ep)return t();let r=kp(),n=t();n?.then&&await n;let l=kp();return console.warn(\`\${e}: \${Math.round(l-r)}ms\`),n}var Y0={initialize:async e=>{switch(e){case"222":return Ce("preInitialize222",_u);case"333":case"333oh":case"333ft":return Ce("initialize333",y1);case"444":return Ce("initialize444",Gg);default:throw new Error(\`unsupported event: \${e}\`)}},randomScrambleForEvent:async e=>{switch(e){case"222":return Ce("random222Scramble",zu);case"333":case"333oh":case"333ft":return Ce("random333Scramble",Zn);case"333fm":return Ce("random333FewestMovesScramble",x1);case"333bf":case"333mb":return Ce("random333OrientedScramble",U1);case"444":return Ce("random444Scramble",a0);case"444bf":return Ce("random444OrientedScramble",Og);case"555":return Ce("bigCubeScramble(5)",ir.bind(ir,5));case"555bf":return Ce("oriented555RandomMoves",Ig);case"666":return Ce("bigCubeScramble(6)",ir.bind(ir,6));case"777":return Ce("bigCubeScramble(7)",ir.bind(ir,7));case"skewb":return Ce("randomSkewbFixedCornerScramble",dp);case"pyram":return Ce("randomPyraminxScrambleFixedOrientation",rp);case"sq1":return Ce("getRandomSquare1Scramble",vp);case"fto":return Ce("randomFTOScramble",Ac);case"master_tetraminx":return Ce("randomMasterTetraminxScramble",Hc);case"kilominx":return Ce("randomKilominxScramble",Cc);case"redi_cube":return Ce("randomRediCubeScramble",mp);default:throw new Error(\`unsupported event: \${e}\`)}},randomScrambleStringForEvent:async e=>(await Y0.randomScrambleForEvent(e)).toString(),solve333ToString:async e=>{let t=new de(await Me["3x3x3"].kpuzzle(),e);return(await Cs(t)).toString()},solve222ToString:async e=>{let t=new de(await Me["2x2x2"].kpuzzle(),e);return(await us(t)).toString()},solveSkewbToString:async e=>{let t=new de(await Me.skewb.kpuzzle(),e);return(await W0(t)).toString()},solvePyraminxToString:async e=>{let t=new de(await Me.pyraminx.kpuzzle(),e);return(await N0(t)).toString()},solveMegaminxToString:async e=>{let t=new de(await Me.megaminx.kpuzzle(),e);return(await Xc(t)).toString()},setDebugMeasurePerf:async e=>{oF(e)}};o2(Y0);
`;

},{"./chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aQy4b"], null, "parcelRequire946f")

//# sourceMappingURL=worker-inside-generated-string-VHOABMFC.8df539b4.js.map
