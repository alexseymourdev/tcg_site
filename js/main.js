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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/mobile-nav */ "./resources/js/modules/mobile-nav/index.js");
/* harmony import */ var _modules_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/lazyload */ "./resources/js/modules/lazyload/index.js");
// Import local modules



/***/ }),

/***/ "./resources/js/modules/lazyload/index.js":
/*!************************************************!*\
  !*** ./resources/js/modules/lazyload/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");
/* harmony import */ var _utilities_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utilities/helpers */ "./resources/js/utilities/helpers/index.js");



var Lazyload = function Lazyload() {
  // lazyload our images
  var images = _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper.querySelectorAll('[data-lazy]');

  if (Object(_utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["exists"])(images)) {
    // options
    var options = {
      threshold: 0.5
    };

    var preloadImage = function preloadImage(img) {
      // find and store the image's data-lazy attribute
      // commented out for now, but if you want to go the extra mile, then you can do all the srcset attribute stuff on the images ;)
      // const srcset = img.dataset.srcset
      var src = img.dataset.lazy;
      img.src = src; // img.srcset = srcset
      // add a class of loaded
      // we can then use this as a hook for fade-in animations etc

      img.classList.add('loaded');
    };

    var lazyLoad = new IntersectionObserver(function (entries, lazyLoad) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          preloadImage(entry.target);
          lazyLoad.unobserve(entry.target);
        }
      });
    }, options);
    images.forEach(function (image) {
      lazyLoad.observe(image);
    });
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (Lazyload);

/***/ }),

/***/ "./resources/js/modules/mobile-nav/index.js":
/*!**************************************************!*\
  !*** ./resources/js/modules/mobile-nav/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");


var Nav = function Nav() {
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].navToggle.addEventListener('click', function (e) {
    this.classList.toggle('menu-toggle-active');
    _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].navLinks.classList.toggle('nav-visible'); // set aria-expanded attribute on menu toggle button

    if (this.getAttribute('aria-expanded') === 'false') {
      this.setAttribute('aria-expanded', 'true');
    } else {
      this.setAttribute('aria-expanded', 'false');
    }
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./resources/js/utilities/helpers/index.js":
/*!*************************************************!*\
  !*** ./resources/js/utilities/helpers/index.js ***!
  \*************************************************/
/*! exports provided: page, exists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");

/**
 * @description Test if the body id is something
 * @param  		{string}
 * @return 		{bool}
 *
 */

var page = function page(name) {
  if (!name) {
    return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute('id');
  }

  return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute('id') == name;
};
/**
 * @description Check if element exists the page
 * @param  		{string} Element selector
 * @param  		{string} Minimum number of elements
 * @return 		{bool}
 */


var exists = function exists(el, limit) {
  return el.length > 0;
};



/***/ }),

/***/ "./resources/js/utilities/selectors/index.js":
/*!***************************************************!*\
  !*** ./resources/js/utilities/selectors/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $$ = {
  body: document.querySelector('body'),
  wrapper: document.getElementById('wrapper'),
  header: document.getElementById('header'),
  nav: document.getElementById('nav'),
  hero: document.getElementById('hero'),
  main: document.getElementById('main'),
  containerCentre: document.getElementById('container-centre'),
  containerRight: document.getElementById('container-right'),
  preFooter: document.getElementById('pre-footer'),
  footer: document.getElementById('footer'),
  navLinks: document.getElementById('nav-links'),
  navToggle: document.getElementById('nav-toggle')
};
/* harmony default export */ __webpack_exports__["default"] = ($$);

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected \"{\".\n   ╷\n18 │     logo\n   │         ^\n   ╵\n  resources/sass/components/_homepage.scss 18:9  @import\n  resources/sass/components/_all.scss 7:9        @import\n  /Users/jurate/Desktop/tcg_site/resources/sass/main.scss 17:9                                     root stylesheet\n    at runLoaders (/Users/jurate/Desktop/tcg_site/node_modules/webpack/lib/NormalModule.js:316:20)\n    at /Users/jurate/Desktop/tcg_site/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/jurate/Desktop/tcg_site/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/jurate/Desktop/tcg_site/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/Users/jurate/Desktop/tcg_site/node_modules/sass-loader/dist/index.js:73:7)\n    at Function.call$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:88455:16)\n    at _render_closure1.call$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:77847:12)\n    at _RootZone.runBinary$3$3 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:26320:18)\n    at _RootZone.runBinary$3 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:26324:19)\n    at _FutureListener.handleError$1 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24768:19)\n    at _Future__propagateToListeners_handleError.call$0 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:25065:40)\n    at Object._Future__propagateToListeners (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:4311:88)\n    at _Future._completeError$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24893:9)\n    at _AsyncAwaitCompleter.completeError$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24285:12)\n    at Object._asyncRethrow (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:4065:17)\n    at /Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:14183:20\n    at _wrapJsFunctionForAsync_closure.$protected (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:4090:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24306:12)\n    at _awaitOnObject_closure0.call$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24298:25)\n    at _RootZone.runBinary$3$3 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:26320:18)\n    at _RootZone.runBinary$3 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:26324:19)\n    at _FutureListener.handleError$1 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24768:19)\n    at _Future__propagateToListeners_handleError.call$0 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:25065:40)\n    at Object._Future__propagateToListeners (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:4311:88)\n    at _Future._completeError$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24893:9)\n    at _AsyncAwaitCompleter.completeError$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24285:12)\n    at Object._asyncRethrow (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:4065:17)\n    at /Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:16818:20\n    at _wrapJsFunctionForAsync_closure.$protected (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:4090:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24306:12)\n    at _awaitOnObject_closure0.call$2 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24298:25)\n    at _RootZone.runBinary$3$3 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:26320:18)\n    at _RootZone.runBinary$3 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:26324:19)\n    at _FutureListener.handleError$1 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:24768:19)\n    at _Future__propagateToListeners_handleError.call$0 (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:25065:40)\n    at Object._Future__propagateToListeners (/Users/jurate/Desktop/tcg_site/node_modules/sass/sass.dart.js:4311:88)");

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/sass/main.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jurate/Desktop/tcg_site/resources/js/main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! /Users/jurate/Desktop/tcg_site/resources/sass/main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });