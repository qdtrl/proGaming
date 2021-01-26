/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => /* binding */ Home\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    var articles = \"\";\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var imagePlatforms = function imagePlatforms(platforms) {\n      var platformsAvalaible = \"\";\n      platforms.forEach(function (platform) {\n        switch (platform.platform.name) {\n          case \"Linux\":\n            platformsAvalaible += \"<img src=\\\"./src/images/linux.svg\\\" alt=\\\"icon-linux\\\">\";\n            break;\n\n          case \"PC\":\n            platformsAvalaible += \"<img src=\\\"./src/images/windows.svg\\\" alt=\\\"icon-pc\\\">\";\n            break;\n\n          case \"Xbox\":\n            platformsAvalaible += \"<img src=\\\"./src/images/xbox.svg\\\" alt=\\\"icon-xbox\\\">\";\n            break;\n\n          case \"PlayStation\":\n            platformsAvalaible += \"<img src=\\\"./src/images/ps4.svg\\\" alt=\\\"icon-ps4\\\">\";\n            break;\n\n          case \"Nintendo\":\n            platformsAvalaible += \"<img src=\\\"./src/images/switch.svg\\\" alt=\\\"icon-switch\\\">\";\n            break;\n\n          case \"Android\":\n            platformsAvalaible += \"<img src=\\\"./src/images/mobile.svg\\\" alt=\\\"icon-mobile\\\">\";\n            break;\n\n          default:\n            break;\n        }\n      });\n      return platformsAvalaible;\n    };\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"?search=\" + argument;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        response.results.forEach(function (article) {\n          articles += \"\\n                  <div class=\\\"cardGame\\\">\\n                    <img src=\\\"\".concat(article.background_image, \"\\\" alt=\\\"\").concat(article.slug, \"\\\">\\n                    <h1>\").concat(article.name, \"</h1>\\n                    <div class=\\\"platform\\\">\\n                      \").concat(imagePlatforms(article.parent_platforms), \"\\n                    </div>\\n                  </div>\\n                \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n    <section class=\\\"jumbotron\\\">\\n      <h1>Pro <span>Gaming</span></h1>\\n      <form>\\n          <input id=\\\"searchInput\\\" type=\\\"search\\\" placeholder=\\\"Search\\\" aria-label=\\\"Search\\\">\\n          <button onclick=\\\"setRoute()\\\" type=\\\"submit\\\">Submit</button>\\n      </form>\\n    </section>\\n    <section class=\\\"page-list\\\" style=\\\"justify-content: center;\\\">\\n      <div class=\\\"articles\\\">\\n        <div class=\\\"loader\\\">\\n          <span class=\\\"loader-icon\\\"></span>\\n          Chargement...\\n        </div>\\n      </div>\\n    </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/home.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n\n\n // console.log(process.env.YOUR_VARIABLE)\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var searchInput = document.getElementById('searchInput');\n  console.log(searchInput);\n  var searchButton = document.getElementById('searchButton');\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack://test-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleMenu\": () => /* binding */ toggleMenu\n/* harmony export */ });\nvar hamburger = document.querySelector('.menu-btn .burger');\nvar nav = document.querySelector('.nav');\nvar menuNav = document.querySelector('.menu-nav');\nvar navItems = document.querySelectorAll('.menu-nav-item');\nvar navLink = document.querySelectorAll('.menu-nav-link');\nvar menuBtn = document.querySelector('.menu-btn');\nvar showMenu = false;\n\nvar toggleMenu = function toggleMenu() {\n  if (!showMenu) {\n    hamburger.classList.add('open');\n    nav.classList.add('open');\n    menuNav.classList.add('open');\n    navItems.forEach(function (item) {\n      return item.classList.add('open');\n    });\n    showMenu = true;\n  } else {\n    hamburger.classList.remove('open');\n    nav.classList.remove('open');\n    menuNav.classList.remove('open');\n    navItems.forEach(function (item) {\n      return item.classList.remove('open');\n    });\n    showMenu = false;\n  }\n};\n\nnavItems.forEach(function (item) {\n  return item.addEventListener('click', function (e) {\n    hamburger.classList.remove('open');\n    nav.classList.remove('open');\n    menuNav.classList.remove('open');\n    navItems.forEach(function (item) {\n      return item.classList.remove('open');\n    });\n    navItems.forEach(function (item) {\n      return item.classList.remove('active');\n    });\n    e.toElement.offsetParent.classList.add('active');\n    showMenu = false;\n  });\n});\nmenuBtn.addEventListener('click', toggleMenu);\n\n\n//# sourceURL=webpack://test-webpack/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/pagedetail.js":
/*!******************************!*\
  !*** ./src/js/pagedetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            released = response.released,\n            description = response.description;\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <h1 class=\\\"title\\\"></h1>\\n          <p class=\\\"release-date\\\">Release date : <span></span></p>\\n          <p class=\\\"description\\\"></p>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/pagedetail.js?");

/***/ }),

/***/ "./src/js/pagelist.js":
/*!****************************!*\
  !*** ./src/js/pagelist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => /* binding */ PageList\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var imagePlatforms = function imagePlatforms(platforms) {\n      var platformsAvalaible = \"\";\n      platforms.forEach(function (platform) {\n        switch (platform.platform.name) {\n          case \"Linux\":\n            platformsAvalaible += \"<img src=\\\"./src/images/linux.svg\\\" alt=\\\"icon-linux\\\">\";\n            break;\n\n          case \"PC\":\n            platformsAvalaible += \"<img src=\\\"./src/images/windows.svg\\\" alt=\\\"icon-pc\\\">\";\n            break;\n\n          case \"Xbox\":\n            platformsAvalaible += \"<img src=\\\"./src/images/xbox.svg\\\" alt=\\\"icon-xbox\\\">\";\n            break;\n\n          case \"PlayStation\":\n            platformsAvalaible += \"<img src=\\\"./src/images/ps4.svg\\\" alt=\\\"icon-ps4\\\">\";\n            break;\n\n          case \"Nintendo\":\n            platformsAvalaible += \"<img src=\\\"./src/images/switch.svg\\\" alt=\\\"icon-switch\\\">\";\n            break;\n\n          case \"Android\":\n            platformsAvalaible += \"<img src=\\\"./src/images/mobile.svg\\\" alt=\\\"icon-mobile\\\">\";\n            break;\n\n          default:\n            break;\n        }\n      });\n      return platformsAvalaible;\n    };\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"?search=\" + argument;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        response.results.forEach(function (article) {\n          articles += \"\\n                  <div class=\\\"cardGame\\\">\\n                    <img src=\\\"\".concat(article.background_image, \"\\\" alt=\\\"\").concat(article.slug, \"\\\">\\n                    <h1>\").concat(article.name, \"</h1>\\n                    <div class=\\\"platform\\\">\\n                      \").concat(imagePlatforms(article.parent_platforms), \"\\n                    </div>\\n                  </div>\\n                \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\" style=\\\"justify-content: center;\\\">\\n        <div class=\\\"articles\\\">\\n          <span class=\\\"loader\\\"></span>\\n          Chargement...\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/pagelist.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => /* binding */ routes\n/* harmony export */ });\n/* harmony import */ var _pagedetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagedetail */ \"./src/js/pagedetail.js\");\n/* harmony import */ var _pagelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagelist */ \"./src/js/pagelist.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n\n\n\nvar routes = {\n  \"\": _home__WEBPACK_IMPORTED_MODULE_2__.Home,\n  \"pagelist\": _pagelist__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  \"pagedetail\": _pagedetail__WEBPACK_IMPORTED_MODULE_0__.PageDetail\n};\n\n\n//# sourceURL=webpack://test-webpack/./src/js/routes.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-webpack/./src/sass/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;