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

/***/ "./partial/server/HydrationData.js":
/*!*****************************************!*\
  !*** ./partial/server/HydrationData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar HydrationData =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(HydrationData, _React$Component);\n\n  function HydrationData() {\n    _classCallCheck(this, HydrationData);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HydrationData).apply(this, arguments));\n  }\n\n  _createClass(HydrationData, [{\n    key: \"render\",\n    value: function render() {\n      var type = \"application/hydration-data\";\n\n      var __html = HydrationData.flushHydrationData();\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n        type: type,\n        dangerouslySetInnerHTML: {\n          __html: __html\n        }\n      });\n    }\n  }], [{\n    key: \"storeProps\",\n    value: function storeProps(Component, props) {\n      var hid = (++HydrationData.currentHid).toString();\n      var name = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getComponentName\"])(Component);\n      HydrationData.data[hid] = {\n        name: name,\n        props: props\n      };\n      return hid;\n    }\n  }, {\n    key: \"flushHydrationData\",\n    value: function flushHydrationData() {\n      var data = HydrationData.data;\n      var replacer = HydrationData.stringifyReplacer;\n      var serializedHydrationData = JSON.stringify(data, replacer);\n      HydrationData.currentHid = 0;\n      HydrationData.data = {};\n      return serializedHydrationData;\n    }\n  }, {\n    key: \"stringifyReplacer\",\n    value: function stringifyReplacer(key, value) {\n      var propsToRemove = [\"__source\", \"__self\"];\n      return propsToRemove.includes(key) ? undefined : value;\n    }\n  }]);\n\n  return HydrationData;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nHydrationData.currentHid = 0;\nHydrationData.data = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HydrationData);\n\n//# sourceURL=webpack:///./partial/server/HydrationData.js?");

/***/ }),

/***/ "./partial/server/index.js":
/*!*********************************!*\
  !*** ./partial/server/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Home */ \"./partial/views/Home.js\");\n/* harmony import */ var _services_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fetch */ \"./services/fetch/index.js\");\n\n\n\n\n\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path.resolve(__dirname, 'public')));\napp.get('/', function (req, res) {\n  Object(_services_fetch__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('https://pokeapi.co/api/v2/pokemon/').then(function (response) {\n    response.json().then(function (data) {\n      var component = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        list: data.results\n      }));\n      res.send(\"<!doctype html>\\n                    <html>\\n                        <head>\\n                        </head>\\n                        <body>\\n                            <div id=\\\"root\\\">\".concat(component, \"</div>\\n                            <script src=\\\"/static/client.js\\\"></script>\\n                        </body>\\n                </html>\"));\n    });\n  });\n});\napp.listen(3000);\nconsole.log('server listening on port 3000');\n\n//# sourceURL=webpack:///./partial/server/index.js?");

/***/ }),

/***/ "./partial/server/withHydration.js":
/*!*****************************************!*\
  !*** ./partial/server/withHydration.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HydrationData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HydrationData */ \"./partial/server/HydrationData.js\");\n\n\n\nvar withHydration = function withHydration(Component) {\n  return function (props) {\n    var hid = _HydrationData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].storeProps(Component, props);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      type: \"application/hydration-marker\",\n      \"data-hid\": hid\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props));\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withHydration);\n\n//# sourceURL=webpack:///./partial/server/withHydration.js?");

/***/ }),

/***/ "./partial/views/Header.js":
/*!*********************************!*\
  !*** ./partial/views/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is the header\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./partial/views/Header.js?");

/***/ }),

/***/ "./partial/views/Home.js":
/*!*******************************!*\
  !*** ./partial/views/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ \"./partial/views/Layout.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./partial/views/Header.js\");\n/* harmony import */ var _PokemonList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PokemonList */ \"./partial/views/PokemonList.js\");\n/* harmony import */ var _server_withHydration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/withHydration */ \"./partial/server/withHydration.js\");\n/* harmony import */ var _server_HydrationData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/HydrationData */ \"./partial/server/HydrationData.js\");\n\n\n\n\n\n\nvar HydratedPokemonList = Object(_server_withHydration__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_PokemonList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nfunction Home(_ref) {\n  var list = _ref.list;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HydratedPokemonList, {\n    list: list\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_server_HydrationData__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./partial/views/Home.js?");

/***/ }),

/***/ "./partial/views/Layout.js":
/*!*********************************!*\
  !*** ./partial/views/Layout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Layout(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./partial/views/Layout.js?");

/***/ }),

/***/ "./partial/views/PokemonList.js":
/*!**************************************!*\
  !*** ./partial/views/PokemonList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction PokemonList(_ref) {\n  var _ref$list = _ref.list,\n      list = _ref$list === void 0 ? [] : _ref$list;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, list.map(function (poke, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      key: \"poke_\".concat(index)\n    }, poke.name);\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PokemonList);\n\n//# sourceURL=webpack:///./partial/views/PokemonList.js?");

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