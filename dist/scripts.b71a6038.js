// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wizzardClass = exports.warriorClass = exports.berserkClass = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fighter = /*#__PURE__*/_createClass(function Fighter(name, hp, power) {
  _classCallCheck(this, Fighter);

  this.name = name;
  this.hp = hp;
  this.power = power;
});

var warriorClass = new Fighter("warrior", 3, 1);
exports.warriorClass = warriorClass;
var berserkClass = new Fighter("berserk", 1, 2);
exports.berserkClass = berserkClass;
var wizzardClass = new Fighter("wizzard", 2, 1); //console.log(warriorClass);
// module.exports = { warriorClass, berserkClass, wizzardClass };

exports.wizzardClass = wizzardClass;
},{}],"scripts.js":[function(require,module,exports) {
"use strict";

var _classes = require("./classes.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

console.log(_classes.warriorClass);
var namePlayer = prompt("Wha's your name?"); //Переход между страницами

var firstPageBtn = document.querySelector(".mainMenuButton");
firstPageBtn.addEventListener("click", function () {
  if (playerFighter) {
    // window.location.href = "./fightArena.html";
    window.scroll({
      top: 1000,
      behavior: "smooth"
    });
  }
});
var fighters = document.querySelectorAll(".fighterPhoto");
var warrior = document.querySelector("#warrior");
var berserk = document.querySelector("#berserk");
var wizzard = document.querySelector("#wizzard");
var weather = document.querySelector(".weatherInfo");
var wind = document.querySelector(".windInfo"); //Выбор бойца
//Переменная которая хранит бойца

var playerFighter;
var player;
var playerChooseP, playerChooseA;
warrior.addEventListener("click", function () {
  shortChange(_classes.warriorClass);
});
berserk.addEventListener("click", function () {
  shortChange(_classes.berserkClass);
});
wizzard.addEventListener("click", function () {
  shortChange(_classes.wizzardClass);
});

window.onload = function () {
  weatherInfo();
};

function shortChange(classFighter) {
  playerFighter = event.target.id;
  console.log(playerFighter);
  alert("\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438 \u043A\u043B\u0430\u0441\u0441: ".concat(playerFighter));
  playerFighter = classFighter;
  console.log(playerFighter);
  player = new Choice("PLAYER", playerBody, playerFighter);
}

console.log(player);

function weatherInfo() {
  var urlWeather = "https://api.openweathermap.org/data/2.5/weather?id=1835847&appid=80848d57bcc832eae6ba82dfc0786c99";
  fetch(urlWeather).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    console.log(data);
    weather.innerHTML = "Now is ".concat(Math.round(data.main.temp - 273.15), " Celcius, ");
    wind.innerHTML = "Wind speed: ".concat(Math.round(data.wind.speed), " m/s,  Visibility: ").concat(Math.round(data.visibility / 1000), " km");
  }).catch(function () {});
} ///////////////////////////////////////////////


var enemyBody = document.querySelector(".enemyBody");
var playerBody = document.querySelector(".yourBody");
var accept = document.querySelector(".arenaButton");
var nameInArea = document.querySelector(".areaName");
nameInArea.innerHTML = "".concat(namePlayer);

var Choice = /*#__PURE__*/function () {
  function Choice(type, tag, fighter) {
    _classCallCheck(this, Choice);

    this.lastPickedTag = {
      tag: undefined,
      color: undefined
    };
    this.type = type; // TODO add phrases

    this.tag = tag;
    this.hpTag = this.getHpTag();
    this.setFighter(fighter);
    this.setOnClickListeners();
  }

  _createClass(Choice, [{
    key: "setOnClickListeners",
    value: function setOnClickListeners() {
      this.selectArea = this.selectArea.bind(this);
      this.tag.addEventListener("click", this.selectArea);
    }
  }, {
    key: "selectArea",
    value: function selectArea($event) {
      if ($event.target.classList.contains("hp")) {
        return;
      }

      if (this.lastPickedTag.tag) {
        this.lastPickedTag.tag.style.backgroundColor = this.lastPickedTag.color;
      }

      this.lastPickedTag.tag = $event.target;
      this.lastPickedTag.color = $event.target.style.backgroundColor;
      this.picked = $event.target.innerHTML; // console.log("Готовимся защищать " + $event.target.innerHTML);

      $event.target.style.backgroundColor = "yellow";
    }
  }, {
    key: "setFighter",
    value: function setFighter(fighter) {
      this.fighter = fighter;
      this.setHp(this.fighter.hp);
    }
  }, {
    key: "increaseHp",
    value: function increaseHp(dx) {
      this.setHp(this.hp + dx);
    }
  }, {
    key: "setHp",
    value: function setHp(hp) {
      this.hp = hp;
      this.setHpText(this.hp);
    }
  }, {
    key: "setHpText",
    value: function setHpText(hp) {
      this.hpTag.innerHTML = "Health: ".concat(hp);
    }
  }, {
    key: "getPicked",
    value: function getPicked() {
      return this.picked;
    }
  }, {
    key: "resetPicked",
    value: function resetPicked() {
      this.picked = undefined;
    }
  }, {
    key: "getHpTag",
    value: function getHpTag() {
      return this.tag.querySelector(".hp");
    }
  }]);

  return Choice;
}();

var enemy = new Choice("ENEMY", enemyBody, _classes.warriorClass);
accept.addEventListener("click", function () {
  console.log(player);
  console.log(player, player.getPicked(), enemy.getPicked());

  if (player.getPicked() && enemy.getPicked()) {
    var targetEnemyAttack = pickTargetOfEnemy();
    console.log("Враг атакует в " + targetEnemyAttack);

    if (targetEnemyAttack != player.getPicked()) {
      player.increaseHp(-1);
      player.resetPicked();
    }

    checkDeath(player.hp, "losling :(((");
    var check = getProtectionEnemy();
    console.log("враг защищает свой " + check);

    if (playerChooseA != check) {
      enemy.increaseHp(-1);
    }

    checkDeath(enemy.hp, "You win!!!");

    if (enemy.hp == 0 && player.hp == 0) {
      setTimeout(function () {
        alert("Произошел троллинг!!!");
      }, 500);
    }
  }
});
var targets = ["head", "body", "foot"];

function pickTargetOfEnemy() {
  return randomChoice(targets);
}

function getProtectionEnemy() {
  return randomChoice(targets);
}

function restart() {
  setTimeout(function () {
    window.location.href = "index.html";
  }, 500);
}

function checkDeath(person, phrase) {
  if (person == 0) {
    setTimeout(function () {
      alert(phrase);
    }, 200);
    restart();
  }
}

function randomChoice(array) {
  return array[getRandomInt(array.length)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
},{"./classes.js":"classes.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51338" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts.js"], null)
//# sourceMappingURL=/scripts.b71a6038.js.map