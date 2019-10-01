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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Config = /** @class */ (function () {
        function Config() {
        }
        Config.SCENEWIDTH = 1270;
        Config.SCENEHEIGHT = 720;
        return Config;
    }());
    exports.Config = Config;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, PixiStart_1, ResizeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.onload = function () {
        console.log("snakegame");
        var lesson1 = new PixiStart_1.PixiStart();
        lesson1.activate();
        document.getElementsByTagName('canvas')[0].style.top = (window.innerHeight - document.getElementsByTagName('canvas')[0].height) / 2 + 'px';
        window.onresize = function () {
            var rm = new ResizeManager_1.ResizeManager(lesson1);
            rm.resize();
        };
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(5), __webpack_require__(6), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Key_1, Apple_1, Snake_1, Config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Graphics = PIXI.Graphics;
    var PixiStart = /** @class */ (function () {
        function PixiStart() {
            this.stepX = 0;
            this.stepY = 0;
            this.direction = "down";
            this.itterationCounter = 0;
        }
        PixiStart.prototype.activate = function () {
            var type = "WebGL";
            if (!PIXI.utils.isWebGLSupported()) {
                type = "canvas";
            }
            PIXI.utils.sayHello(type);
            this.blackSquare();
            this.width = document.getElementsByTagName('canvas')[0].width;
            this.height = document.getElementsByTagName('canvas')[0].height;
        };
        PixiStart.prototype.blackSquare = function () {
            //Create a Pixi Application
            this.app = new PIXI.Application({ width: Config_1.Config.SCENEWIDTH, height: Config_1.Config.SCENEHEIGHT });
            this.width = this.app.renderer.width;
            this.height = this.app.renderer.height;
            //Add the canvas that Pixi automatically created for you to the HTML document
            document.body.appendChild(this.app.view);
            this.app.renderer.backgroundColor = 0x061639;
            PIXI.loader
                .add("/assets/images/apple.png")
                .load(this.setup.bind(this));
        };
        PixiStart.prototype.setup = function () {
            var _this = this;
            //this.cat = new PIXI.Sprite(PIXI.loader.resources["/assets/images/cat.png"].texture);
            this.apple = new Apple_1.Apple();
            this.apple.generateNewPosition();
            //this.app.stage.addChild(this.cat);
            this.rectangle = new Graphics();
            this.rectangle.lineStyle(4, 0xFF3300, 1);
            this.rectangle.beginFill(0x66CCFF);
            this.rectangle.drawRect(60, 0, 64, 64);
            this.rectangle.endFill();
            this.snake = new Snake_1.Snake(this.app.stage, this.apple, this.app);
            //this.app.stage.addChild(this.rectangle);
            this.app.stage.addChild(this.apple);
            this.app.ticker.add(function (delta) { return _this.gameLoop(2); });
            //Capture the keyboard arrow keys
            var left = this.keyboard("ArrowLeft"), up = this.keyboard("ArrowUp"), right = this.keyboard("ArrowRight"), down = this.keyboard("ArrowDown");
            //Left arrow key `press` method
            left.press = function () {
                //Change the cat's velocity when the key is pressed
                _this.stepX = -5;
                _this.stepY = 0;
                setInterval(_this.snake.move("left"), 200);
                _this.direction = "left";
            };
            //Left arrow key `release` method
            left.release = function () {
                //If the left arrow has been released, and the right arrow isn't down,
                //and the cat isn't moving vertically:
                //Stop the cat
                if (!right.isDown && _this.stepY === 0) {
                    _this.stepX = 0;
                }
            };
            //Up
            up.press = function () {
                _this.stepY = -5;
                _this.stepX = 0;
                _this.snake.move("up");
                _this.direction = "up";
            };
            up.release = function () {
                if (!down.isDown && _this.stepX === 0) {
                    _this.stepY = 0;
                }
            };
            //Right
            right.press = function () {
                _this.snake.move("right");
                _this.direction = "right";
            };
            /* right.release = () => {
                 if (!left.isDown&&this.stepY===0) {
                     this.stepX = 0;
                 }
             };*/
            //Down
            down.press = function () {
                _this.stepY = 5;
                _this.stepX = 0;
                _this.snake.move("down");
                _this.direction = "down";
            };
            /* down.release = () => {
                 if (!up.isDown && this.stepX === 0) {
                     this.stepY = 0;
                 }
    
             };*/
        };
        PixiStart.prototype.keyboard = function (value) {
            var key = new Key_1.Key();
            key.value = value;
            key.isDown = false;
            key.isUp = true;
            key.press = undefined;
            key.release = undefined;
            //The `downHandler`
            key.downHandler = function (event) {
                if (event.key === key.value) {
                    if (key.isUp && key.press)
                        key.press();
                    key.isDown = true;
                    key.isUp = false;
                    event.preventDefault();
                }
            };
            //The `upHandler`
            key.upHandler = function (event) {
                if (event.key === key.value) {
                    if (key.isDown && key.release)
                        key.release();
                    key.isDown = false;
                    key.isUp = true;
                    event.preventDefault();
                }
            };
            //Attach event listeners
            var downListener = key.downHandler.bind(key);
            var upListener = key.upHandler.bind(key);
            window.addEventListener("keydown", downListener, false);
            window.addEventListener("keyup", upListener, false);
            // Detach event listeners
            key.unsubscribe = function () {
                window.removeEventListener("keydown", downListener);
                window.removeEventListener("keyup", upListener);
            };
            return key;
        };
        PixiStart.prototype.gameLoop = function (delta) {
            if (this.itterationCounter == 10) {
                this.snake.move(this.direction);
                this.itterationCounter = 0;
            }
            this.itterationCounter++;
        };
        return PixiStart;
    }());
    exports.PixiStart = PixiStart;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Key = /** @class */ (function () {
        function Key() {
        }
        //The `downHandler`
        Key.prototype.downHandler = function (event) { };
        ;
        Key.prototype.upHandler = function (event) { };
        ;
        Key.prototype.unsubscribe = function () { };
        ;
        return Key;
    }());
    exports.Key = Key;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Apple = /** @class */ (function (_super) {
        tslib_1.__extends(Apple, _super);
        function Apple() {
            var _this = _super.call(this, PIXI.loader.resources["/assets/images/apple.png"].texture) || this;
            _this.width = 50;
            _this.height = 50;
            return _this;
        }
        Apple.prototype.generateNewPosition = function () {
            this.x = Math.random() * (document.getElementsByTagName('canvas')[0].width - this.width);
            this.y = Math.random() * (document.getElementsByTagName('canvas')[0].height - this.height);
        };
        return Apple;
    }(PIXI.Sprite));
    exports.Apple = Apple;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, SnakePart_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Snake = /** @class */ (function () {
        function Snake(parent, apple, app) {
            this.partList = [];
            this.parent = parent;
            this.app = app;
            this.partList.push(new SnakePart_1.SnakePart(true));
            this.partList.push(new SnakePart_1.SnakePart(false));
            this.partList.push(new SnakePart_1.SnakePart(false));
            this.partList.push(new SnakePart_1.SnakePart(false));
            var i = 0;
            for (var _i = 0, _a = this.partList; _i < _a.length; _i++) {
                var part = _a[_i];
                part.draw();
                part.x = 200;
                part.y = 200 + i * part.height;
                i++;
                this.parent.addChild(part);
            }
            this.apple = apple;
        }
        Snake.prototype.move = function (direction) {
            for (var i = this.partList.length - 1; i > 0; i--) {
                this.partList[i].x = this.partList[i - 1].x;
                this.partList[i].y = this.partList[i - 1].y;
            }
            switch (direction) {
                case 'left':
                    this.partList[0].x -= this.partList[0].width;
                    this.direction = "left";
                    break;
                case 'right':
                    this.partList[0].x += this.partList[0].width;
                    this.direction = "right";
                    break;
                case 'up':
                    this.partList[0].y -= this.partList[0].height;
                    this.direction = "up";
                    break;
                case 'down':
                    this.partList[0].y += this.partList[0].height;
                    this.direction = "down";
                    break;
            }
            this.check();
            this.endGame();
        };
        Snake.prototype.check = function () {
            if (this.partList[0].x > this.apple.x && this.partList[0].x < (this.apple.x + this.apple.width) && this.partList[0].y > this.apple.y && this.partList[0].y < (this.apple.y + this.apple.height)) {
                this.apple.generateNewPosition();
                this.addNewPart();
            }
        };
        Snake.prototype.addNewPart = function () {
            this.partList.push(new SnakePart_1.SnakePart(false));
            this.partList[this.partList.length - 1].draw();
            this.parent.addChild(this.partList[this.partList.length - 1]);
            switch (this.direction) {
                case 'left':
                    this.partList[this.partList.length - 1].x = this.partList[this.partList.length - 2].x - this.partList[this.partList.length - 2].width;
                    this.partList[this.partList.length - 1].y = this.partList[this.partList.length - 2].y;
                    break;
                case 'right':
                    this.partList[this.partList.length - 1].x = this.partList[this.partList.length - 2].x + this.partList[this.partList.length - 2].width;
                    this.partList[this.partList.length - 1].y = this.partList[this.partList.length - 2].y;
                    break;
                case 'up':
                    this.partList[this.partList.length - 1].x = this.partList[this.partList.length - 2].x;
                    this.partList[this.partList.length - 1].y = this.partList[this.partList.length - 2].y + this.partList[this.partList.length - 2].height;
                    break;
                case 'down':
                    this.partList[this.partList.length - 1].x = this.partList[this.partList.length - 2].x;
                    this.partList[this.partList.length - 1].y = this.partList[this.partList.length - 2].y + this.partList[this.partList.length - 2].height;
                    break;
            }
        };
        Snake.prototype.endGame = function () {
            if (this.partList[0].x <= 0 || this.partList[0].y <= 0 || this.partList[0].x + this.partList[0].width >= 1270 || this.partList[0].y + this.partList[0].height >= 720) {
                console.log('Game over');
                //this.app.renderer.backgroundColor = 0xff0000;
                this.parent.removeChild(this.apple);
                var i = 0;
                for (var _i = 0, _a = this.partList; _i < _a.length; _i++) {
                    var part = _a[_i];
                    part.draw();
                    part.x = 200;
                    part.y = 200 + i * part.height;
                    i++;
                    this.parent.removeChild(part);
                }
            }
        };
        return Snake;
    }());
    exports.Snake = Snake;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Graphics = PIXI.Graphics;
    var Container = PIXI.Container;
    var SnakePart = /** @class */ (function (_super) {
        tslib_1.__extends(SnakePart, _super);
        function SnakePart(isHead) {
            var _this = _super.call(this) || this;
            _this.graphic = new Graphics();
            _this.addChild(_this.graphic);
            _this.isHead = isHead;
            _this.height = 20;
            _this.width = 20;
            return _this;
        }
        SnakePart.prototype.draw = function () {
            this.graphic.clear();
            this.graphic.lineStyle(4, 0xFF3300, 1);
            this.graphic.beginFill(this.isHead ? 0xff0000 : 0x66CCFF);
            this.graphic.drawRect(0, 0, 20, 20);
            this.graphic.endFill();
        };
        return SnakePart;
    }(Container));
    exports.SnakePart = SnakePart;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResizeManager = /** @class */ (function () {
        function ResizeManager(parent) {
            this.parent = parent;
        }
        ResizeManager.prototype.resize = function () {
            this.x = Config_1.Config.SCENEHEIGHT / Config_1.Config.SCENEWIDTH;
            if (window.innerWidth < 1270) {
                this.windowWidth = window.innerWidth;
                document.getElementsByTagName('canvas')[0].width = this.windowWidth;
                this.windowHeight = this.windowWidth * this.x;
                document.getElementsByTagName('canvas')[0].height = this.windowWidth * this.x;
                document.getElementsByTagName('canvas')[0].style.position = 'absolute';
            }
            else {
                this.windowWidth = 1270;
                document.getElementsByTagName('canvas')[0].width = 1270;
                this.windowHeight = 720;
                document.getElementsByTagName('canvas')[0].height = 720;
            }
            document.getElementsByTagName('canvas')[0].style.top = (window.innerHeight - document.getElementsByTagName('canvas')[0].height) / 2 + 'px';
            this.parent.app.renderer.resize(this.windowWidth, this.windowHeight);
        };
        return ResizeManager;
    }());
    exports.ResizeManager = ResizeManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
//# sourceMappingURL=game.js.map