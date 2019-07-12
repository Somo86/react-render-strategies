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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/atoms/clickableBox.js":
/*!******************************************!*\
  !*** ./components/atoms/clickableBox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar pokeData = [{\n  name: 'Bulbasur',\n  color: 'green'\n}, {\n  name: 'Charmander',\n  color: 'red'\n}, {\n  name: 'Pikachu',\n  color: 'yellow'\n}];\n\nvar ClickableBox = function ClickableBox() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var handleChange = function handleChange(e) {\n    index < 2 ? setIndex(index + 1) : setIndex(0);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\",\n    style: {\n      backgroundColor: pokeData[index].color\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-body\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    className: \"card-title\"\n  }, pokeData[index].name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    onClick: handleChange,\n    className: \"btn btn-primary\"\n  }, \"Change me\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClickableBox);\n\n//# sourceURL=webpack:///./components/atoms/clickableBox.js?");

/***/ }),

/***/ "./components/views/Footer.js":
/*!************************************!*\
  !*** ./components/views/Footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Footer() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer\"\n  }, \"This is the footer\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./components/views/Footer.js?");

/***/ }),

/***/ "./components/views/Header.js":
/*!************************************!*\
  !*** ./components/views/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    \"class\": \"navbar navbar-light bg-light\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    \"class\": \"navbar-brand mb-0 h1\"\n  }, \"Navbar\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./components/views/Header.js?");

/***/ }),

/***/ "./components/views/Layout.js":
/*!************************************!*\
  !*** ./components/views/Layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Layout(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"grid\"\n  }, children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./components/views/Layout.js?");

/***/ }),

/***/ "./components/views/PokemonList.js":
/*!*****************************************!*\
  !*** ./components/views/PokemonList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction PokemonList(_ref) {\n  var _ref$list = _ref.list,\n      list = _ref$list === void 0 ? [] : _ref$list;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, list.map(function (poke, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card\",\n      key: \"poke_\".concat(index)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card-body\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n      className: \"card-title\"\n    }, poke.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"More info:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", null, poke.url)));\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PokemonList);\n\n//# sourceURL=webpack:///./components/views/PokemonList.js?");

/***/ }),

/***/ "./partial/server/index.js":
/*!*********************************!*\
  !*** ./partial/server/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Home */ \"./partial/views/Home.js\");\n/* harmony import */ var _services_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fetch */ \"./services/fetch/index.js\");\n\n\n\n\n\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path.resolve(__dirname, 'public')));\napp.get('/', function (req, res) {\n  Object(_services_fetch__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('https://pokeapi.co/api/v2/pokemon/').then(function (response) {\n    response.json().then(function (data) {\n      var component = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        list: data.results\n      }));\n      res.send(\"<!doctype html>\\n                    <html>\\n                        <head>\\n                            <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/static/index.css\\\">\\n                            <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css\\\">\\n                        </head>\\n                        <body>\\n                            <div id=\\\"root\\\">\".concat(component, \"</div>\\n                            <script src=\\\"/static/client.js\\\"></script>\\n                        </body>\\n                </html>\"));\n    });\n  });\n});\napp.listen(3000);\nconsole.log('server listening on port 3000');\n\n//# sourceURL=webpack:///./partial/server/index.js?");

/***/ }),

/***/ "./partial/views/Home.js":
/*!*******************************!*\
  !*** ./partial/views/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_views_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/views/Layout */ \"./components/views/Layout.js\");\n/* harmony import */ var _components_views_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/views/Header */ \"./components/views/Header.js\");\n/* harmony import */ var _components_views_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/views/Footer */ \"./components/views/Footer.js\");\n/* harmony import */ var _components_views_PokemonList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/views/PokemonList */ \"./components/views/PokemonList.js\");\n/* harmony import */ var _components_atoms_clickableBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/atoms/clickableBox */ \"./components/atoms/clickableBox.js\");\n/* harmony import */ var _services_hydration_withHydration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/hydration/withHydration */ \"./services/hydration/withHydration.js\");\n/* harmony import */ var _services_hydration_HydrationData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/hydration/HydrationData */ \"./services/hydration/HydrationData.js\");\n\n\n\n\n\n\n\n\nvar HydratedPokemonList = Object(_services_hydration_withHydration__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_components_views_PokemonList__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar HydratedClickableBox = Object(_services_hydration_withHydration__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_components_atoms_clickableBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\nfunction Home(_ref) {\n  var list = _ref.list;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_views_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_views_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"side\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HydratedClickableBox, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_clickableBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HydratedPokemonList, {\n    list: list\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_services_hydration_HydrationData__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_views_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./partial/views/Home.js?");

/***/ }),

/***/ "./services/fetch/index.js":
/*!*********************************!*\
  !*** ./services/fetch/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar nodeFetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nvar fetch = function fetch(url) {\n  return nodeFetch(url);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetch);\n\n//# sourceURL=webpack:///./services/fetch/index.js?");

/***/ }),

/***/ "./services/hydration/HydrationData.js":
/*!*********************************************!*\
  !*** ./services/hydration/HydrationData.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar HydrationData =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(HydrationData, _React$Component);\n\n  function HydrationData() {\n    _classCallCheck(this, HydrationData);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HydrationData).apply(this, arguments));\n  }\n\n  _createClass(HydrationData, [{\n    key: \"render\",\n    value: function render() {\n      var type = \"application/hydration-data\";\n\n      var __html = HydrationData.flushHydrationData();\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n        type: type,\n        dangerouslySetInnerHTML: {\n          __html: __html\n        }\n      });\n    }\n  }], [{\n    key: \"storeProps\",\n    value: function storeProps(Component, props) {\n      var hid = (++HydrationData.currentHid).toString();\n      var name = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getComponentName\"])(Component);\n      HydrationData.data[hid] = {\n        name: name,\n        props: props\n      };\n      return hid;\n    }\n  }, {\n    key: \"flushHydrationData\",\n    value: function flushHydrationData() {\n      var data = HydrationData.data;\n      var replacer = HydrationData.stringifyReplacer;\n      var serializedHydrationData = JSON.stringify(data, replacer);\n      HydrationData.currentHid = 0;\n      HydrationData.data = {};\n      return serializedHydrationData;\n    }\n  }, {\n    key: \"stringifyReplacer\",\n    value: function stringifyReplacer(key, value) {\n      var propsToRemove = [\"__source\", \"__self\"];\n      return propsToRemove.includes(key) ? undefined : value;\n    }\n  }]);\n\n  return HydrationData;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nHydrationData.currentHid = 0;\nHydrationData.data = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HydrationData);\n\n//# sourceURL=webpack:///./services/hydration/HydrationData.js?");

/***/ }),

/***/ "./services/hydration/withHydration.js":
/*!*********************************************!*\
  !*** ./services/hydration/withHydration.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HydrationData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HydrationData */ \"./services/hydration/HydrationData.js\");\n\n\n/**\n * Decorator. Take the component and return it\n * with script marked by id related to HydrationData\n * @param {*} Component \n */\n\nvar withHydration = function withHydration(Component) {\n  return function (props) {\n    var hid = _HydrationData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storeProps(Component, props);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      type: \"application/hydration-marker\",\n      \"data-hid\": hid\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props));\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withHydration);\n\n//# sourceURL=webpack:///./services/hydration/withHydration.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: MARKER_SELECTOR, DATA_SELECTOR, getMarkers, getData, getComponentName, getComponentMap, getComponent, getProps, readMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MARKER_SELECTOR\", function() { return MARKER_SELECTOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DATA_SELECTOR\", function() { return DATA_SELECTOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMarkers\", function() { return getMarkers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponentName\", function() { return getComponentName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponentMap\", function() { return getComponentMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProps\", function() { return getProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readMarker\", function() { return readMarker; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar MARKER_SELECTOR = 'script[type=\"application/hydration-marker\"]';\nvar DATA_SELECTOR = 'script[type=\"application/hydration-data\"]';\nvar getMarkers = function getMarkers() {\n  return document.querySelectorAll(MARKER_SELECTOR);\n};\nvar getData = function getData(dataScript) {\n  return dataScript ? JSON.parse(dataScript.innerHTML) : {};\n};\nvar getComponentName = function getComponentName(component) {\n  var compName = component.displayName || component.name;\n  return compName;\n};\n/**\n * \n * @param {*} components \n * @return {[component name]: Component}\n */\n\nvar getComponentMap = function getComponentMap(components) {\n  return components.reduce(function (acc, component) {\n    return _objectSpread({}, acc, _defineProperty({}, getComponentName(component), component));\n  }, {});\n};\nvar getComponent = function getComponent(componentMap, data, id) {\n  return componentMap[data[id].name];\n};\nvar getProps = function getProps(data, id) {\n  return data[id] ? data[id].props : {};\n};\nvar readMarker = function readMarker(marker) {\n  var id = marker.getAttribute('data-hid');\n  var el = marker.nextElementSibling;\n  var parent = el.parentElement;\n  return {\n    id: id,\n    el: el,\n    parent: parent\n  };\n};\n\n//# sourceURL=webpack:///./utils/index.js?");

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi @babel/polyfill ./partial/server/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/albertsomoza/Documents/workshops/react-render-strategies/partial/server/index.js */\"./partial/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./partial/server/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });