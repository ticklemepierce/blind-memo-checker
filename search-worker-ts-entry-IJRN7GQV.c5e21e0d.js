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
parcelRequire.register("77o7N", function(module, exports) {

$parcel$export(module.exports, "WORKER_ENTRY_FILE_URL", () => $52ebe683a56a457a$export$37b5d21eb7557c91);

var $cCyGo = parcelRequire("cCyGo");

var $c13ws = parcelRequire("c13ws");
parcelRequire("ixdHu");
parcelRequire("hJBlP");

// src/cubing/search/inside/search-worker-ts-entry.ts
if ((0, $c13ws.exposeAPI).expose) (async ()=>{
    await (parcelRequire("ftF2Q"));
    const messagePort = globalThis.postMessage ? globalThis : await (0, $cCyGo.nodeEndpointPort)();
    messagePort.postMessage("comlink-exposed");
})();
var $52ebe683a56a457a$export$37b5d21eb7557c91 = "file:///node_modules/cubing/dist/esm/search-worker-ts-entry-IJRN7GQV.js";

});
parcelRequire.register("cCyGo", function(module, exports) {

$parcel$export(module.exports, "nodeEndpointPort", () => $9303efef3411e749$export$9ec037716bf04bbb);
$parcel$export(module.exports, "expose", () => $9303efef3411e749$export$9b7f6e342a8cbd38);

var $ixdHu = parcelRequire("ixdHu");

var $eOlhu = parcelRequire("eOlhu");
var $9303efef3411e749$var$useNodeWorkarounds = typeof globalThis.Worker === "undefined" && typeof globalThis.WorkerNavigator === "undefined";
var $9303efef3411e749$var$worker_threads_mangled = "w-orker-_threa-ds";
var $9303efef3411e749$var$worker_threads_unmangled = ()=>$9303efef3411e749$var$worker_threads_mangled.replace(/-/g, "");
async function $9303efef3411e749$export$9ec037716bf04bbb() {
    const { parentPort: parentPort  } = await import(/* @vite-ignore */ $9303efef3411e749$var$worker_threads_unmangled()).catch();
    return (0, $ixdHu.node_adapter_default)(parentPort);
}
function $9303efef3411e749$export$9b7f6e342a8cbd38(api) {
    if ($9303efef3411e749$var$useNodeWorkarounds) (async ()=>{
        (0, $eOlhu.expose)(api, await $9303efef3411e749$export$9ec037716bf04bbb());
    })();
    else (0, $eOlhu.expose)(api);
}

});

parcelRequire.register("ftF2Q", function(module, exports) {


module.exports = Promise.all([
    import("./" + (parcelRequire("aKzDW")).resolve("1HNOs")),
    import("./" + (parcelRequire("aKzDW")).resolve("eh8D2"))
]).then(()=>parcelRequire("3iw40"));

});



//# sourceMappingURL=search-worker-ts-entry-IJRN7GQV.c5e21e0d.js.map
