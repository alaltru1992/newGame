/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gl = 440;

var Actor = function () {
    function Actor(_ref, map) {
        var name = _ref.name;

        _classCallCheck(this, Actor);

        this.name = name;
        //this.speed = 5;
        this.pos = { x: 0, y: gl };
        this.direction = { x: 0, y: 0 };
        this.speed = { x: 0, y: 0 };
        this.acc = { x: 5, y: -4 };
        this.maxspeed = { x: 8, y: 8 };
        this.map = map;
    }

    _createClass(Actor, [{
        key: "tick",
        value: function tick() {
            Math.abs(this.speed.x) < 0.5 && (this.speed.x = 0);
            var airacc = -this.speed.x * 0.3;
            this.speed.x = this.speed.x + this.direction.x * this.acc.x + airacc;
            this.pos.x = this.pos.x + this.speed.x + this.acc.x / 2 * this.direction.x + airacc / 2;

            if (this.direction.y === -6 && this.speed.y === 0) {
                this.speed.y = 33.3;
            } else if (this.pos.y === gl) {
                this.speed.y = 0;
            } else {
                this.speed.y = this.speed.y + this.acc.y;
            }
            this.pos.y = this.pos.y + this.speed.y + this.acc.y / 2;
            this.pos.y = Math.max(this.pos.y, gl);

            console.log(this.name + " " + JSON.stringify(this.pos));
        }

        /**
         *
         * @param direction -1/+1/0
         */

    }, {
        key: "move",
        value: function move(direction) {
            if ([0, -1, 1].includes(direction)) {
                this.direction.x = -direction;
            }
            if ([6, -6].includes(direction)) {
                if (direction === -6) {
                    this.direction.y = direction;
                } else {
                    this.direction.y = 0;
                }
            }
        }
    }]);

    return Actor;
}();

exports.default = Actor;

var Point = function Point() {
    _classCallCheck(this, Point);

    this.x = 0;
    this.y = 0;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function () {
    function Actor(actor, game, _ref) {
        var runs = _ref.runs,
            _ref$jump = _ref.jump,
            up = _ref$jump.up,
            fall = _ref$jump.fall,
            stand = _ref.stand,
            name = _ref.name;

        _classCallCheck(this, Actor);

        this.name = name;
        this.actor = actor;
        this.game = game;
        this.gr = new PIXI.Sprite(PIXI.Texture.fromImage(stand));
        this.gr.scale = { x: -0.15, y: 0.15 };
        this.gr.anchor = { x: 0.5, y: 0 };
        this.direction = 0;
        this.textures = { runs: runs, jump: { up: up, fall: fall }, stand: stand };
    }

    _createClass(Actor, [{
        key: "render",
        value: function render() {
            this.gr.x = window.innerWidth / 2 + this.actor.pos.x - this.game.pos.x;
            this.gr.y = window.innerHeight - this.actor.pos.y;
            if (this.actor.speed.x > 0) {
                this.gr.scale = { x: -0.15, y: 0.15 };
            } else {
                this.gr.scale = { x: 0.15, y: 0.15 };
            }
            if (this.actor.speed.y > 0) {
                this.gr.texture = PIXI.Texture.fromImage(this.textures.jump.up);
            } else if (this.actor.speed.y < 0) {
                this.gr.texture = PIXI.Texture.fromImage(this.textures.jump.fall);
            } else if (this.actor.speed.x !== 0) {
                this.gr.texture = PIXI.Texture.fromImage(this.textures.runs[Date.now() % 600 / 100 | 0]);
            } else {
                this.gr.texture = PIXI.Texture.fromImage(this.textures.stand);
            }
        }
    }]);

    return Actor;
}();

exports.default = Actor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actor = __webpack_require__(0);

var _actor2 = _interopRequireDefault(_actor);

var _actor3 = __webpack_require__(1);

var _actor4 = _interopRequireDefault(_actor3);

var _actor5 = __webpack_require__(4);

var _actor6 = _interopRequireDefault(_actor5);

var _game = __webpack_require__(5);

var _game2 = _interopRequireDefault(_game);

var _game3 = __webpack_require__(6);

var _game4 = _interopRequireDefault(_game3);

var _stone = __webpack_require__(7);

var _stone2 = _interopRequireDefault(_stone);

var _stone3 = __webpack_require__(8);

var _stone4 = _interopRequireDefault(_stone3);

var _kozak = __webpack_require__(9);

var _kozak2 = _interopRequireDefault(_kozak);

var _kozak3 = __webpack_require__(10);

var _kozak4 = _interopRequireDefault(_kozak3);

var _actorHit = __webpack_require__(11);

var _actorHit2 = _interopRequireDefault(_actorHit);

var _shot = __webpack_require__(12);

var _shot2 = _interopRequireDefault(_shot);

var _shot3 = __webpack_require__(13);

var _shot4 = _interopRequireDefault(_shot3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actorM = new _actor2.default({ name: "naval'niy" });
var gameM = new _game4.default(actorM);

var gameV = new _game2.default(gameM);
var actorV = new _actor4.default(actorM, gameM, {
    name: "naval'niy",
    runs: new Array(6).fill(0).map(function (_, index) {
        return "res/frame-" + (index + 1) + ".png";
    }),
    jump: { up: "res/jump_up.png", fall: "res/jump_fall.png" },
    stand: "res/stand.png"
});

var nv = PIXI.Sprite.fromImage("res/navalniy.png");
nv.anchor = { x: 0.5, y: 0 };
nv.y = -30;
actorV.gr.addChild(nv);

var actorC = new _actor6.default(actorM, actorV);

var stoneV = new _stone2.default();
var stoneM = new _stone4.default(stoneV);

var kozakM = new _kozak4.default({ name: "kazak" });

var kozakV = new _kozak2.default(kozakM, gameM, {
    name: "kazak",
    runs: new Array(6).fill(0).map(function (_, index) {
        return "res/kozak.jpg";
    }),
    jump: { up: "res/kozak.jpg", fall: "res/kozak.jpg" },
    stand: "res/kozak.jpg"
});

//let actorH = new ActorCont(actorV,kozakV);

var shotV = new _shot2.default(actorV);
var shotM = new _shot4.default(shotV);

var app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor: 0x1099bb });
[gameV, actorV, kozakV].forEach(function (elm) {
    return app.stage.addChild(elm.gr);
});

app.ticker.add(function (delta) {
    [actorM, gameM, kozakM].forEach(function (elm) {
        return elm.tick();
    });
});

/*app.ticker.add(function(delta) {
    [actorC].forEach(elm => elm.tick(actorV, kozakV));
});*/

(function frame() {
    requestAnimationFrame(frame);
    [actorV, gameV, kozakV].forEach(function (elm) {
        return elm.render();
    });
})();

window.addEventListener("load", function () {
    document.body.appendChild(app.view);

    app.stage.on('mousedown', ShotCreate());

    function ShotCreate() {
        app.stage.addChild(shotV.gr);
        /* app.ticker.add(function(delta) {
             shotM.tick();
         });*/
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Kozak = function () {
    function Kozak(model, view) {
        var _this = this;

        _classCallCheck(this, Kozak);

        this.model = model;
        this.view = view;
        window.addEventListener("keydown", function (e) {
            return _this.keydown(e.keyCode);
        });
        window.addEventListener("keyup", function (e) {
            return _this.keyup(e.keyCode);
        });
    }

    _createClass(Kozak, [{
        key: "keydown",
        value: function keydown(keyCode) {
            this.model.move(keyCode - 38);
        }
    }, {
        key: "keyup",
        value: function keyup(keyCode) {
            console.log(keyCode);
            if ([1, -1].includes(keyCode - 38)) {
                this.model.move(0);
            } else if ([-6].includes(keyCode - 38)) {
                this.model.move(6);
            }
        }
    }]);

    return Kozak;
}();

exports.default = Kozak;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(game) {
        _classCallCheck(this, Game);

        this.game = game;
        this.gr = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage("res/bg.png"), window.innerWidth, window.innerHeight);
    }

    _createClass(Game, [{
        key: "render",
        value: function render() {

            this.gr.tilePosition.x = this.game.pos.x % 2600;
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DELTA = -10;

var Game = function () {
    function Game(actor) {
        _classCallCheck(this, Game);

        this.speed = { x: 1, y: 1 };
        this.pos = { x: 0, y: 0 };
        this.actor = actor;
    }

    _createClass(Game, [{
        key: "tick",
        value: function tick() {
            this.pos = { x: this.actor.pos.x, y: this.actor.pos.y };
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stone = function () {
    function Stone() {
        _classCallCheck(this, Stone);

        this.gr = PIXI.Sprite.fromImage("res/stone.jpg");
        this.gr.width = 1000;
        this.gr.height = 30;
        // this.gr.scale.set(0.15);
        this.speed = 5;
        this.pos = { x: 1000, y: 400 };
    }

    _createClass(Stone, [{
        key: "render",
        value: function render() {
            //this.gr.x += this.speed ;
            this.gr.x = this.pos.x;
            this.gr.y = this.pos.y;
        }
    }]);

    return Stone;
}();

exports.default = Stone;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stone = function () {
    function Stone(stone) {
        _classCallCheck(this, Stone);

        // this.speed = 5;
        // this.position = {x: 1200, y: 300};
        this.stone = stone;
    }

    _createClass(Stone, [{
        key: "tick",
        value: function tick() {
            this.stone.pos.x -= 5;
        }
    }]);

    return Stone;
}();

exports.default = Stone;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actor = __webpack_require__(1);

var _actor2 = _interopRequireDefault(_actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Kozak = function (_Actor) {
  _inherits(Kozak, _Actor);

  function Kozak() {
    _classCallCheck(this, Kozak);

    return _possibleConstructorReturn(this, (Kozak.__proto__ || Object.getPrototypeOf(Kozak)).apply(this, arguments));
  }

  return Kozak;
}(_actor2.default);

exports.default = Kozak;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actor = __webpack_require__(0);

var _actor2 = _interopRequireDefault(_actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Kozak = function (_Actor) {
    _inherits(Kozak, _Actor);

    function Kozak(_ref) {
        var name = _ref.name;

        _classCallCheck(this, Kozak);

        var _this = _possibleConstructorReturn(this, (Kozak.__proto__ || Object.getPrototypeOf(Kozak)).call(this, { name: name }));

        _this.acc = { x: 0.5, y: -4 };
        setInterval(function () {
            _this.move((Math.random() * 3 | 0) - 1);
        }, 5000);
        return _this;
    }

    return Kozak;
}(_actor2.default);

exports.default = Kozak;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActorHit = function () {
    function ActorHit(actor, object) {
        _classCallCheck(this, ActorHit);

        this.actor = actor;
        this.object = object;
    }

    _createClass(ActorHit, [{
        key: "renderer",
        value: function renderer(actor, object) {
            if (Math.abs(actor.gr.x - object.gr.x) < 2) {
                actor.speed = 0;
                actor.position.x = 0;
            }
        }
    }]);

    return ActorHit;
}();

exports.default = ActorHit;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stone = function () {
    function Stone(actor) {
        _classCallCheck(this, Stone);

        this.actor = actor;
        this.gr = PIXI.Sprite.fromImage("res/shot.png");
        this.pos = { x: this.actor.gr.position.x, y: this.actor.gr.position.y };
        // this.gr.scale.set(0.15);
        // this.speed = 5;
        //this.pos = {x: 1000, y:400};

    }

    _createClass(Stone, [{
        key: "render",
        value: function render() {
            //this.gr.x += this.speed ;
            this.gr.x = this.actor.gr.position.x;
            this.gr.y = this.actor.gr.position.y;
        }
    }]);

    return Stone;
}();

exports.default = Stone;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stone = function () {
    function Stone(shot) {
        _classCallCheck(this, Stone);

        // this.speed = 5;
        // this.position = {x: 1200, y: 300};
        this.shot = shot;
    }

    _createClass(Stone, [{
        key: "tick",
        value: function tick() {
            this.shot.pos.x -= 5;
        }
    }]);

    return Stone;
}();

exports.default = Stone;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map