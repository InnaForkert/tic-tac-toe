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
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    bundle.hotData = {};
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

},{}],"8lqZg":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var refs_1 = require("./scripts/refs");
var menu = refs_1.refs.menu, gameDiv = refs_1.refs.gameDiv, gameDivBot = refs_1.refs.gameDivBot, form = refs_1.refs.form, player1 = refs_1.refs.player1, player2 = refs_1.refs.player2, player1GameName = refs_1.refs.player1GameName, player2GameName = refs_1.refs.player2GameName, fieldies = refs_1.refs.fieldies, fieldiesBot = refs_1.refs.fieldiesBot, restartBtn = refs_1.refs.restartBtn, restartBtnBot = refs_1.refs.restartBtnBot, resetBtn = refs_1.refs.resetBtn, resetBtnBot = refs_1.refs.resetBtnBot, botStart = refs_1.refs.botStart;
var winningCombos = [
    [
        1,
        2,
        3
    ],
    [
        4,
        5,
        6
    ],
    [
        7,
        8,
        9
    ],
    [
        1,
        4,
        7
    ],
    [
        2,
        5,
        8
    ],
    [
        3,
        6,
        9
    ],
    [
        1,
        5,
        9
    ],
    [
        3,
        5,
        7
    ], 
];
var currentComboX = [];
var currentComboO = [];
var currentSymbol = "X";
var activePlayer = "";
var player1Name = "Player I";
var player2Name = "Player II";
var isBotGame;
var victory = false;
if (form) form.addEventListener("submit", handleSubmit);
botStart === null || botStart === void 0 || botStart.addEventListener("click", startBotGame);
fieldies.forEach(function(fieldy) {
    fieldy.addEventListener("click", handlePlayerMove);
});
fieldiesBot.forEach(function(fieldy) {
    fieldy.addEventListener("click", handlePlayerMoveBot);
});
resetBtn === null || resetBtn === void 0 || resetBtn.addEventListener("click", reset);
resetBtnBot === null || resetBtnBot === void 0 || resetBtnBot.addEventListener("click", reset);
restartBtn === null || restartBtn === void 0 || restartBtn.addEventListener("click", function() {
    if (confirm("Are you sure you want to restart?")) restart();
});
restartBtnBot === null || restartBtnBot === void 0 || restartBtnBot.addEventListener("click", function() {
    if (confirm("Are you sure you want to restart?")) restart();
});
// player vs player
// game start
function handleSubmit(e) {
    e.preventDefault();
    isBotGame = false;
    setNames();
    showField(gameDiv);
    setPlayers(player1Name, player2Name);
}
function setNames() {
    player1Name = (player1 === null || player1 === void 0 ? void 0 : player1.value) || "Player I";
    player2Name = (player2 === null || player2 === void 0 ? void 0 : player2.value) || "Player II";
    localStorage.setItem("player1", player1Name);
    localStorage.setItem("player2", player2Name);
}
function showField(thumb) {
    menu === null || menu === void 0 || menu.classList.add("visually-hidden");
    thumb === null || thumb === void 0 || thumb.classList.remove("visually-hidden");
}
function setPlayers(name1, name2) {
    if (player1GameName && player2GameName) {
        player1GameName.innerText = "PlayerX: ".concat(name1);
        player2GameName.innerText = "PlayerO: ".concat(name2);
    }
}
//player makes a move
function handlePlayerMove(e) {
    var target = e.target;
    if (target.textContent === "") {
        paintSymbol(target);
        updateCombos(target);
        changeSymbol();
        swapPlayers();
        saveData();
    } else alert("This one is taken!");
}
function paintSymbol(div) {
    div.innerText = currentSymbol;
}
function updateCombos(target) {
    if (currentSymbol === "X") {
        currentComboX.push(Number(target.dataset.id));
        if (currentComboX.length > 2) setTimeout(function() {
            return checkForVictory(currentComboX);
        }, 10);
    } else {
        currentComboO.push(Number(target.dataset.id));
        if (currentComboO.length > 2) setTimeout(function() {
            return checkForVictory(currentComboO);
        }, 10);
    }
}
function checkForVictory(arr) {
    victory = !!winningCombos.find(function(combo) {
        return combo.every(function(num) {
            return arr.includes(num);
        });
    });
    if (victory) {
        if (isBotGame && currentSymbol === "X") {
            var wantsMore = confirm("You lose! Want a revenge?");
            if (wantsMore) reset();
            else restart();
        } else alertVictory();
    } else checkForNoMoves();
}
function alertVictory() {
    var wantsMore = confirm("Victory! Another round?");
    if (wantsMore) reset();
    else restart();
}
function checkForNoMoves() {
    if (currentComboO.length === 4 && currentComboX.length === 5) {
        var wantsReset = confirm("Oh no, no more moves! Reset?");
        wantsReset ? reset() : restart();
    }
}
function changeSymbol() {
    currentSymbol = currentSymbol === "X" ? "O" : "X";
    localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
}
function swapPlayers() {
    console.log(activePlayer);
    if (activePlayer === "" || player1Name) activePlayer = player2Name;
    else activePlayer = player1Name;
    player1GameName === null || player1GameName === void 0 || player1GameName.classList.toggle("active-player");
    player2GameName === null || player2GameName === void 0 || player2GameName.classList.toggle("active-player");
}
function saveData() {
    localStorage.setItem("playerX", JSON.stringify(currentComboX));
    localStorage.setItem("playerO", JSON.stringify(currentComboO));
}
// check for saved progress
(function checkSaves() {
    var currentSaveX = localStorage.getItem("playerX");
    if (currentSaveX) {
        currentComboX = JSON.parse(currentSaveX);
        paintSaved("X", currentComboX);
    }
    var currentSaveO = localStorage.getItem("playerO");
    if (currentSaveO) {
        currentComboO = JSON.parse(currentSaveO);
        paintSaved("O", currentComboO);
    }
    var name1 = localStorage.getItem("player1");
    var name2 = localStorage.getItem("player2");
    if (name1 && name2) {
        setPlayers(name1, name2);
        showField(gameDiv);
    }
    var savedActive = localStorage.getItem("activePlayer");
    if (savedActive) currentSymbol = JSON.parse(savedActive);
})();
function paintSaved(N, arr) {
    fieldies.forEach(function(fieldy) {
        if (fieldy.dataset.id && arr.includes(+fieldy.dataset.id)) fieldy.innerText = N;
    });
}
//player vs bot
function startBotGame() {
    isBotGame = true;
    clearCombos();
    showField(gameDivBot);
}
function clearCombos() {
    currentComboO = [];
    currentComboX = [];
}
function handlePlayerMoveBot(e) {
    var target = e.target;
    if (target.textContent === "") {
        paintSymbol(target);
        updateCombos(target);
        changeSymbol();
        botMove();
    } else alert("This one is taken!");
}
function botMove() {
    var didntMakeAMove = checkPossibleWin(currentComboO);
    if (didntMakeAMove) didntMakeAMove = checkPossibleWin(currentComboX);
    if (didntMakeAMove) buildCombo();
}
function handleBotMove(num) {
    paintSymbol(fieldiesBot[num]);
    updateCombos(fieldiesBot[num]);
    currentSymbol = currentSymbol === "X" ? "O" : "X";
    fieldiesBot.forEach(function(fieldy) {
        fieldy.addEventListener("click", handlePlayerMoveBot);
    });
}
//common
function reset() {
    if (isBotGame) {
        localStorage.clear();
        clearCombos();
        currentSymbol = "X";
        fieldiesBot.forEach(function(fieldy) {
            return fieldy.innerHTML = "";
        });
        victory = false;
    } else {
        var placeholderName = localStorage.getItem("player1") || "Player II";
        player1Name = localStorage.getItem("player2") || "Player I";
        player2Name = placeholderName || "Player II";
        localStorage.removeItem("playerX");
        localStorage.removeItem("playerO");
        localStorage.removeItem("activePlayer");
        localStorage.setItem("player1", player1Name);
        localStorage.setItem("player2", player2Name);
        location.reload();
    }
}
function restart() {
    localStorage.clear();
    location.reload();
}
//bot move logic
function buildCombo() {
    if (!fieldiesBot[4].innerText) setTimeout(function() {
        handleBotMove(4);
    }, 300);
    else if (!fieldiesBot[0].innerText) setTimeout(function() {
        handleBotMove(0);
    }, 300);
    else if (!fieldiesBot[2].innerText) setTimeout(function() {
        handleBotMove(2);
    }, 300);
    else if (!fieldiesBot[6].innerText) setTimeout(function() {
        handleBotMove(6);
    }, 300);
    else if (!fieldiesBot[8].innerText) setTimeout(function() {
        handleBotMove(8);
    }, 300);
    else if (!fieldiesBot[1].innerText) setTimeout(function() {
        handleBotMove(1);
    }, 300);
    else if (!fieldiesBot[3].innerText) setTimeout(function() {
        handleBotMove(3);
    }, 300);
    else if (!fieldiesBot[5].innerText) setTimeout(function() {
        handleBotMove(5);
    }, 300);
    else if (!fieldiesBot[7].innerText) setTimeout(function() {
        handleBotMove(7);
    }, 300);
}
function stopListening() {
    fieldiesBot.forEach(function(fieldy) {
        return fieldy.removeEventListener("click", handlePlayerMoveBot);
    });
}
function checkPossibleWin(arr) {
    if (arr === null || arr === void 0 ? void 0 : arr.includes(1)) {
        if (arr.includes(2) && !fieldiesBot[2].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(2);
            }, 300);
            return;
        }
        if (arr.includes(3) && !fieldiesBot[1].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(1);
            }, 300);
            return;
        }
        if (arr.includes(4) && !fieldiesBot[6].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(6);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[3].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(3);
            }, 300);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[8].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(8);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[4].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(4);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(2)) {
        if (arr.includes(3) && !fieldiesBot[0].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(0);
            }, 300);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[7].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(7);
            }, 300);
            return;
        }
        if (arr.includes(8) && !fieldiesBot[4].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(4);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(3)) {
        if (arr.includes(6) && !fieldiesBot[8].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(8);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[5].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(5);
            }, 300);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[6].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(6);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[4].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(4);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(4)) {
        if (arr.includes(5) && !fieldiesBot[5].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(5);
            }, 300);
            return;
        }
        if (arr.includes(6) && !fieldiesBot[4].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(4);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[0].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(0);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(5)) {
        if (arr.includes(6) && !fieldiesBot[3].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(3);
            }, 300);
            return;
        }
        if (arr.includes(8) && !fieldiesBot[1].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(1);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[0].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(0);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[2].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(2);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(6)) {
        if (arr.includes(9) && !fieldiesBot[2].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(2);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(7)) {
        if (arr.includes(8) && !fieldiesBot[8].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(8);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[7].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(7);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(8)) {
        if (arr.includes(9) && !fieldiesBot[6].innerText) {
            stopListening();
            setTimeout(function() {
                handleBotMove(6);
            }, 300);
            return;
        }
    }
    return true;
}

},{"./scripts/refs":"jHtzO"}],"jHtzO":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.refs = void 0;
exports.refs = {
    menu: document.querySelector(".menu"),
    gameDiv: document.querySelector(".gameDiv"),
    gameDivBot: document.querySelector(".gameDivBot"),
    form: document.querySelector(".form"),
    player1: document.querySelector("#player1"),
    player2: document.querySelector("#player2"),
    player1GameName: document.querySelector("#player1Name"),
    player2GameName: document.querySelector("#player2Name"),
    fieldies: document.querySelectorAll(".fieldy"),
    fieldiesBot: document.querySelectorAll(".fieldyBot"),
    restartBtn: document.querySelector("#restartBtn"),
    restartBtnBot: document.querySelector("#restartBtnBot"),
    resetBtn: document.querySelector("#resetBtn"),
    resetBtnBot: document.querySelector("#resetBtnBot"),
    botStart: document.querySelector(".botButton")
};

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire1ecf")

//# sourceMappingURL=index.975ef6c8.js.map
