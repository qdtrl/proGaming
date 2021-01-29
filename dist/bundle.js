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

/***/ "./src/js/function.js":
/*!****************************!*\
  !*** ./src/js/function.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrayInString\": () => /* binding */ arrayInString,\n/* harmony export */   \"showMore\": () => /* binding */ showMore,\n/* harmony export */   \"arrayInLink\": () => /* binding */ arrayInLink,\n/* harmony export */   \"imagePlatforms\": () => /* binding */ imagePlatforms,\n/* harmony export */   \"dateInString\": () => /* binding */ dateInString,\n/* harmony export */   \"fillCardGame\": () => /* binding */ fillCardGame\n/* harmony export */ });\nvar arrayInString = function arrayInString(array) {\n  var longString = \"\";\n  array.forEach(function (string) {\n    longString += \"\".concat(string.name, \", \");\n  });\n  return longString.substr(0, longString.length - 2);\n};\n\nvar arrayInLink = function arrayInLink(array) {\n  var longString = \"\";\n  array.forEach(function (string) {\n    longString += \"<a href=\\\"#search/\".concat(string.slug, \"\\\">\").concat(string.name, \", </a>\");\n  });\n  return longString + '...';\n};\n\nvar imagePlatforms = function imagePlatforms(platforms) {\n  var platformsAvalaible = \"\";\n  platforms.forEach(function (platform) {\n    switch (platform.platform.name) {\n      case \"Linux\":\n        platformsAvalaible += \"<img src=\\\"./src/images/linux.svg\\\" alt=\\\"icon-linux\\\">\";\n        break;\n\n      case \"PC\":\n        platformsAvalaible += \"<img src=\\\"./src/images/windows.svg\\\" alt=\\\"icon-pc\\\">\";\n        break;\n\n      case \"Xbox\":\n        platformsAvalaible += \"<img src=\\\"./src/images/xbox.svg\\\" alt=\\\"icon-xbox\\\">\";\n        break;\n\n      case \"PlayStation\":\n        platformsAvalaible += \"<img src=\\\"./src/images/ps4.svg\\\" alt=\\\"icon-ps4\\\">\";\n        break;\n\n      case \"Nintendo\":\n        platformsAvalaible += \"<img src=\\\"./src/images/switch.svg\\\" alt=\\\"icon-switch\\\">\";\n        break;\n\n      case \"Android\":\n        platformsAvalaible += \"<img src=\\\"./src/images/mobile.svg\\\" alt=\\\"icon-mobile\\\">\";\n        break;\n\n      default:\n        break;\n    }\n  });\n  return platformsAvalaible;\n};\n\nvar dateInString = function dateInString(released) {\n  var date = new Date(released).toString().split(\" \");\n  return date[1] + ' ' + date[2] + ',' + date[3];\n};\n\nvar fillCardGame = function fillCardGame(games) {\n  var articles = \"\";\n  games.forEach(function (game, index) {\n    if (index < 9) {\n      articles += \"\\n        <a class=\\\"card\\\" href=\\\"#detail/\".concat(game.id, \"\\\">\");\n    } else {\n      articles += \"\\n        <a class=\\\"card hide\\\" href=\\\"#detail/\".concat(game.id, \"\\\">\");\n    }\n\n    articles += \"\\n          <div class=\\\"cardGame\\\">\\n            <div class=\\\"infos\\\">\\n              <p>\".concat(dateInString(game.released), \"</p>\\n              <p>\").concat(arrayInString(game.genres), \"</p>\\n              <p>\").concat(game.rating, \"/5 - \").concat(game.ratings_count, \" votes</p>\\n              <p class=\\\"tags\\\">\").concat(arrayInString(game.tags), \"</p>\\n            </div>\\n            <img class=\\\"game\\\" src=\\\"\").concat(game.background_image, \"\\\" alt=\\\"\").concat(game.slug, \"\\\">\\n\\n            <h1>\").concat(game.name, \"</h1>\\n            <div class=\\\"platform\\\">\\n              \").concat(imagePlatforms(game.parent_platforms), \"\\n            </div>\\n          </div>\\n        </a>\\n        \");\n  });\n  return articles;\n};\n\nvar showMore = function showMore(e) {\n  e.preventDefault();\n  var links = document.querySelectorAll('.card.hide');\n  console.log(links);\n  links.forEach(function (link, value) {\n    if (value >= 9) {\n      return;\n    }\n\n    link.classList.remove('hide');\n  });\n\n  if (links.length === 9) {\n    document.querySelector('section .button').innerHTML = \"\";\n  }\n};\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/function.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => /* binding */ Home\n/* harmony export */ });\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ \"./src/js/function.js\");\n\n\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url + '?search=&page_size=27';\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        document.querySelector(\".page-list .articles\").innerHTML = (0,_function__WEBPACK_IMPORTED_MODULE_0__.fillCardGame)(response.results);\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n    <section class=\\\"jumbotron\\\">\\n      <h1>Pro <span>Gaming</span></h1>\\n      <div>\\n        <form>\\n            <input class=\\\"searchInput\\\" type=\\\"search\\\" placeholder=\\\"Search...\\\" aria-label=\\\"Search\\\">\\n            <button class=\\\"searchButton\\\" type=\\\"submit\\\">Submit</button>\\n        </form>\\n      </div>\\n    </section>\\n    <section class=\\\"page-list\\\" style=\\\"justify-content: center;\\\">\\n      <div class=\\\"articles\\\">\\n        <div class=\\\"loader\\\">\\n          <span class=\\\"loader-icon\\\"></span>\\n          Chargement...\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"button\\\">\\n        <button class=\\\"show\\\">+</button>\\n    </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n  var searchInput = document.querySelector('.searchInput');\n  var searchButton = document.querySelector('.searchButton');\n  searchButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    window.location.hash = \"search/\".concat(searchInput.value);\n  });\n  var more = document.querySelector('.show');\n  more.addEventListener('click', function (e) {\n    return (0,_function__WEBPACK_IMPORTED_MODULE_0__.showMore)(e);\n  });\n};\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/home.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n\n\n // console.log(process.env.YOUR_VARIABLE)\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack://test-webpack/./src/js/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ \"./src/js/function.js\");\n\n\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var getScreenShots = function getScreenShots(id, game) {\n      fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/screenshots\")).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var imgString = \"\";\n        response.results.forEach(function (screen) {\n          imgString += \"\\n            <div class=\\\"cardGame\\\">\\n              <img class=\\\"game\\\" src=\\\"\".concat(screen.image, \"\\\" alt=\\\"\").concat(game, \"\\\">\\n            </div>\");\n        });\n        pageContent.querySelector('div.screenshots').innerHTML = imgString;\n      });\n    };\n\n    var getYoutube = function getYoutube(id, game) {\n      fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/youtube\")).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        console.log(response);\n        var youtubeHtml = \"\\n        <div class=\\\"big\\\">\\n          <img src=\\\"\".concat(response.results[0].thumbnails.maxresdefault.url, \"\\\" alt=\\\"\").concat(game, \"\\\">\\n          <div>\\n            <h3>\").concat(response.results[0].name, \"</h3>\\n            <p>\\n              <a href=\\\"https://www.youtube.com/channel/\").concat(response.results[0].channel_id, \"\\\">\").concat(response.results[0].channel_title, \"</a> - \").concat((0,_function__WEBPACK_IMPORTED_MODULE_0__.dateInString)(response.results[0].created), \"\\n            </p>\\n          </div>\\n        </div>\\n        <div class=\\\"youtube\\\">\");\n        response.results.slice(1, 4).forEach(function (video) {\n          youtubeHtml += \"\\n          <div class=\\\"cardYoutube\\\">\\n              <img src=\\\"\".concat(video.thumbnails.medium.url, \"\\\" alt=\\\"\").concat(game, \"\\\">\\n              <h3>\").concat(video.name, \"</h3>\\n              <p>\\n                <a href=\\\"https://www.youtube.com/channel/\").concat(video.channel_id, \"\\\">\").concat(video.channel_title, \"</a>- \").concat((0,_function__WEBPACK_IMPORTED_MODULE_0__.dateInString)(video.created), \"\\n              </p>\\n          </div>\");\n        });\n        youtubeHtml += '</div>';\n        pageContent.querySelector(\"section.youtube\").innerHTML = youtubeHtml;\n      });\n    };\n\n    var getSugest = function getSugest(id) {\n      fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/suggested\")).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        pageContent.querySelector(\".page-list .articles\").innerHTML = (0,_function__WEBPACK_IMPORTED_MODULE_0__.fillCardGame)(response.results.slice(0, 6));\n      });\n    };\n\n    var fillDetails = function fillDetails(game) {\n      var platforms = \"\";\n      var stores = \"\";\n      game.platforms.forEach(function (platform) {\n        platforms += \"\".concat(platform.platform.name, \", \");\n      });\n      platforms = platforms.substr(0, platforms.length - 2);\n      game.stores.forEach(function (store) {\n        stores += \"<a href=\\\"\".concat(store.url, \"\\\">\").concat(store.store.name, \"</a><br><br>\");\n      });\n      var genres = (0,_function__WEBPACK_IMPORTED_MODULE_0__.arrayInLink)(game.genres);\n      var tags = (0,_function__WEBPACK_IMPORTED_MODULE_0__.arrayInLink)(game.tags);\n      getScreenShots(game.id, game.slug);\n      getSugest(game.id);\n      getYoutube(game.id);\n      var htmlString = \"\\n                          <div class=\\\"details-jumbotron\\\">\\n                            <img src=\\\"\".concat(game.background_image, \"\\\" alt=\\\"\").concat(game.slug, \"\\\">\\n                            <a href=\\\"\").concat(game.website, \"\\\">Check Website ></a>\\n                          </div>\\n                          <section class=\\\"details\\\">\\n                            <div class=\\\"title\\\">\\n                              <h1>\").concat(game.name, \"</h1>\\n                              <p>\").concat(game.rating, \"/5 - \").concat(game.ratings_count, \" votes</p>\\n                            </div>\\n                            <div class=\\\"plot\\\">\\n                              <h3>Plot</h3>\\n                              <p>\").concat(game.description, \"</p>\\n                            </div>\\n                            <div class=\\\"about\\\">\\n                              <div>\\n                                <h3>Release Date</h3>\\n                                <p>\").concat(game.released, \"</p>\\n                              </div>\\n                              <div>\\n                                <h3>Developer</h3>\\n                                <p>\").concat(game.developers[0].name, \"</p>\\n                              </div>\\n                              <div class=\\\"half\\\">\\n                                <div>\\n                                  <h3>Platforms</h3>\\n                                  <p class=\\\"platforms\\\">\").concat(platforms, \"</p>\\n                                </div>\\n                                <div>\\n                                  <h3>Publisher</h3>\\n                                  <p>\").concat(game.publishers[0].name, \"</p>\\n                                </div>\\n                              </div>\\n                            </div>\\n                            <div class=\\\"types\\\">\\n                              <div>\\n                                <h3>Genre</h3>\\n                                <p>\").concat(genres, \"</p>\\n                              </div>\\n                              <div class=\\\"tags\\\">\\n                                <h3>Tags</h3>\\n                                <p>\").concat(tags, \"</p>\\n                              </div>\\n                            </div>\\n                            <div class=\\\"stores\\\">\\n                              <h2>buy</h2>\\n                              \").concat(stores, \"\\n                            </div>\\n                            <div class=\\\"video\\\">\\n                              <h2>trailer</h2>\\n                              <video width=\\\"100%\\\" controls>\\n                                <source src=\\\"\").concat(game.clip.clip, \"\\\" type=\\\"video/mp4\\\">\\n                              </video>\\n                            </div>\\n                            <h2>screenshots</h2>\\n                            <div class=\\\"screenshots\\\">\\n                              <div class=\\\"loader\\\">\\n                                <span class=\\\"loader-icon\\\"></span>\\n                                Chargement...\\n                              </div>\\n                            </div>\\n                            <h2>youtube</h2>\\n                            <section class=\\\"youtube\\\" style=\\\"justify-content: center;\\\">\\n                              <div class=\\\"loader\\\">\\n                                <span class=\\\"loader-icon\\\"></span>\\n                                Chargement...\\n                              </div>\\n                            </section>\\n                            <h2>similar games</h2>\\n                            <section class=\\\"page-list\\\" style=\\\"justify-content: center;\\\">\\n                              <div class=\\\"articles\\\">\\n                                <div class=\\\"loader\\\">\\n                                  <span class=\\\"loader-icon\\\"></span>\\n                                  Chargement...\\n                                </div>\\n                              </div>\\n                            </section>\\n                          </section>\\n      \");\n      return htmlString;\n    };\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        pageContent.querySelector('section.page-list').innerHTML = fillDetails(response);\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\" style=\\\"justify-content: center;\\\">\\n        <div class=\\\"articles\\\">\\n          <div class=\\\"loader\\\">\\n            <span class=\\\"loader-icon\\\"></span> Chargement...\\n          </div>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/pagedetail.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => /* binding */ routes\n/* harmony export */ });\n/* harmony import */ var _pagedetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagedetail */ \"./src/js/pagedetail.js\");\n/* harmony import */ var _searchpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchpage */ \"./src/js/searchpage.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n\n\n\nvar routes = {\n  \"\": _home__WEBPACK_IMPORTED_MODULE_2__.Home,\n  \"search\": _searchpage__WEBPACK_IMPORTED_MODULE_1__.SearchPage,\n  \"detail\": _pagedetail__WEBPACK_IMPORTED_MODULE_0__.PageDetail\n};\n\n\n//# sourceURL=webpack://test-webpack/./src/js/routes.js?");

/***/ }),

/***/ "./src/js/searchpage.js":
/*!******************************!*\
  !*** ./src/js/searchpage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchPage\": () => /* binding */ SearchPage\n/* harmony export */ });\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ \"./src/js/function.js\");\n\n\nvar SearchPage = function SearchPage() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + '?search=' + argument + '&page_size=27';\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        document.querySelector(\".page-list .articles\").innerHTML = (0,_function__WEBPACK_IMPORTED_MODULE_0__.fillCardGame)(response.results);\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\" style=\\\"justify-content: center;\\\">\\n        <div class=\\\"articles\\\">\\n          <div class=\\\"loader\\\">\\n            <span class=\\\"loader-icon\\\"></span> Chargement...\\n          </div>\\n        </div>\\n      </section>\\n      <section class=\\\"button\\\">\\n        <button class=\\\"show\\\">+</button>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n  var more = document.querySelector('.show');\n  more.addEventListener('click', function (e) {\n    return (0,_function__WEBPACK_IMPORTED_MODULE_0__.showMore)(e);\n  });\n};\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/searchpage.js?");

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