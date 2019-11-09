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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Carousel =\n/*#__PURE__*/\nfunction () {\n  function Carousel(images) {\n    _classCallCheck(this, Carousel);\n\n    this.images = images;\n    this.container = document.getElementById('carousel-container');\n    this._startX = 0;\n    this._posInitial = 0;\n    this._posX1 = 0;\n    this._posX2 = 0;\n    this.startMove = this.startMove.bind(this);\n    this.move = this.move.bind(this);\n    this.finishMove = this.finishMove.bind(this);\n  }\n\n  _createClass(Carousel, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.images.forEach(function (image) {\n        var div = document.createElement('DIV');\n        div.innerHTML = \"<li class=\\\"carousel-item\\\"><img src=\\\"\".concat(image.path, \"\\\" alt=\\\"\\\"></li>\");\n\n        _this.container.appendChild(div.firstChild);\n      }); // this.container.appendChild(this.container.children[0].cloneNode(true));\n      // this.container.insertBefore(this.container.firstElementChild.cloneNode(true), this.container.lastElementChild);\n    }\n  }, {\n    key: \"startMove\",\n    value: function startMove(event) {\n      event.preventDefault();\n      this._posX1 = event.clientX;\n      this._posInitial = this.container.offsetLeft;\n      document.addEventListener('mousemove', this.move);\n      document.addEventListener('mouseup', this.finishMove);\n    }\n  }, {\n    key: \"finishMove\",\n    value: function finishMove(event) {\n      document.removeEventListener('mousemove', this.move);\n      document.removeEventListener('mouseup', this.finishMove);\n    }\n  }, {\n    key: \"move\",\n    value: function move(event) {\n      event.preventDefault();\n      this._posX2 = this._posX1 - event.clientX;\n      this._posX1 = event.clientX;\n      this.container.style.left = this.container.offsetLeft - this._posX2 + \"px\";\n      var params = this.container.getBoundingClientRect();\n\n      if (params.left > -20) {\n        this.container.insertBefore(this.container.lastElementChild, this.container.firstElementChild);\n        this.container.style.left = \"\".concat(parseInt(this.container.style.left) - this.container.lastElementChild.clientWidth, \"px\");\n      }\n\n      console.log(params.left * -1 + params.right);\n\n      if (this._posX2 < this._posX1 && params.left * -1 + this.container.lastElementChild.clientWidth > params.width + 20) {\n        this.container.appendChild(this.container.firstElementChild);\n        this.container.style.left = \"\".concat(parseInt(this.container.style.left) + this.container.firstElementChild.clientWidth, \"px\");\n      }\n    }\n  }]);\n\n  return Carousel;\n}();\n\nvar carousel = new Carousel([{\n  path: '../assets/1.jpeg'\n}, {\n  path: '../assets/2.jpeg'\n}, {\n  path: '../assets/3.jpeg'\n}, {\n  path: '../assets/4.jpeg'\n}, {\n  path: '../assets/5.jpeg'\n}]);\ncarousel.init();\ncarousel.container.addEventListener('mousedown', carousel.startMove);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });