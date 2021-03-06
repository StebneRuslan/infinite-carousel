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

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"images\", function() { return images; });\nvar naturePictures = [{\n  path: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'\n}, {\n  path: 'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'\n}, {\n  path: 'https://images.unsplash.com/photo-1525806047694-f14aa78cf38c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'\n}, {\n  path: 'https://images.unsplash.com/photo-1494621622354-777dad9c18e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'\n}, {\n  path: 'https://images.unsplash.com/photo-1461654929682-e0f99f05f37c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'\n}];\nvar socialIcons = [{\n  path: 'https://www.stickpng.com/assets/thumbs/58e91965eb97430e819064f5.png'\n}, {\n  path: 'https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300'\n}, {\n  path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Skype_logo_%282019%E2%80%93present%29.svg/1200px-Skype_logo_%282019%E2%80%93present%29.svg.png'\n}, {\n  path: 'http://www.myiconfinder.com/uploads/iconsets/256-256-bc0fd466e19a29c9e96f2471dd41eb83-spotify.png'\n}, {\n  path: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-512.png'\n}, {\n  path: 'https://cdn1.iconfinder.com/data/icons/social-media-2112/29/Asset_10-512.png'\n}, {\n  path: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png'\n}];\nvar images = {\n  naturePictures: naturePictures,\n  socialIcons: socialIcons\n};\n\n//# sourceURL=webpack:///./src/images.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ \"./src/images.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Carousel =\n/*#__PURE__*/\nfunction () {\n  function Carousel(images, id) {\n    _classCallCheck(this, Carousel);\n\n    this.images = images;\n    this.container = document.getElementById(id);\n    this._posX1 = 0;\n    this._posX2 = 0;\n    this.startMove = this.startMove.bind(this);\n    this.move = this.move.bind(this);\n    this.finishMove = this.finishMove.bind(this);\n  }\n\n  _createClass(Carousel, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.images.forEach(function (image) {\n        var div = document.createElement('DIV');\n        div.innerHTML = \"<div class=\\\"carousel-item\\\"><img src=\\\"\".concat(image.path, \"\\\" alt=\\\"\\\"></div>\");\n\n        _this.container.appendChild(div.firstChild);\n      });\n      this.container.style.left = \"0px\"; // this.container.style.left = `-${this.container.clientWidth / 2}px`\n    }\n  }, {\n    key: \"startMove\",\n    value: function startMove(event) {\n      if (event.type === 'touchmove') {\n        this._posX1 = event.touches[0].clientX;\n      } else {\n        this._posX1 = event.clientX;\n      }\n\n      document.addEventListener('mousemove', this.move);\n      document.addEventListener('touchmove', this.move);\n      document.addEventListener('mouseup', this.finishMove);\n      document.addEventListener('touchend', this.finishMove);\n    }\n  }, {\n    key: \"finishMove\",\n    value: function finishMove() {\n      document.removeEventListener('mousemove', this.move);\n      document.removeEventListener('touchmove', this.move);\n      document.removeEventListener('mouseup', this.finishMove);\n      document.removeEventListener('touchend', this.finishMove);\n    }\n  }, {\n    key: \"move\",\n    value: function move(event) {\n      if (event.type === 'touchmove') {\n        this._posX2 = this._posX1 - event.touches[0].clientX;\n        this._posX1 = event.touches[0].clientX;\n      } else {\n        this._posX2 = this._posX1 - event.clientX;\n        this._posX1 = event.clientX;\n      }\n\n      var params = this.container.getBoundingClientRect();\n\n      if (parseInt(this.container.style.left) - this._posX2 < 0 && params.right - this._posX2 > this.container.parentElement.clientWidth + this.container.parentElement.offsetLeft) {\n        this.container.style.left = \"\".concat(parseInt(this.container.style.left) - this._posX2, \"px\");\n      }\n\n      if (params.width > this.container.parentElement.clientWidth + this.container.firstElementChild.clientWidth && params.width > this.container.parentElement.clientWidth + this.container.lastElementChild.clientWidth) {\n        if (params.left - this.container.parentElement.offsetLeft > this.container.firstElementChild.clientWidth / -4) {\n          this.container.insertBefore(this.container.lastElementChild, this.container.firstElementChild);\n          this.container.style.left = \"\".concat(parseInt(this.container.style.left) - this.container.lastElementChild.clientWidth, \"px\");\n        }\n\n        if (params.right - this.container.lastElementChild.clientWidth / 4 < this.container.parentElement.clientWidth + this.container.parentElement.offsetLeft) {\n          this.container.appendChild(this.container.firstElementChild);\n          this.container.style.left = \"\".concat(parseInt(this.container.style.left) + this.container.firstElementChild.clientWidth, \"px\");\n        }\n      }\n    }\n  }]);\n\n  return Carousel;\n}();\n\nvar carousel = new Carousel(_images__WEBPACK_IMPORTED_MODULE_1__[\"images\"].naturePictures, 'carousel-container');\nvar socialCarousel = new Carousel(_images__WEBPACK_IMPORTED_MODULE_1__[\"images\"].socialIcons, 'carousel-social');\ncarousel.init();\nsocialCarousel.init();\ncarousel.container.addEventListener('mousedown', carousel.startMove);\ncarousel.container.addEventListener('touchstart', carousel.startMove);\nsocialCarousel.container.addEventListener('mousedown', socialCarousel.startMove);\nsocialCarousel.container.addEventListener('touchstart', socialCarousel.startMove);\n\n//# sourceURL=webpack:///./src/main.js?");

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