module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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

/***/ "./assets/styles.css":
/*!***************************!*\
  !*** ./assets/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/styles.css */ "./assets/styles.css");
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux_toastr_lib_css_react_redux_toastr_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux-toastr/lib/css/react-redux-toastr.min.css */ "./node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css");
/* harmony import */ var react_redux_toastr_lib_css_react_redux_toastr_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr_lib_css_react_redux_toastr_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\dellp\\Documents\\Seminar Resources\\RakSquad Training Materials\\RakSquad Xurpas React\\xurpas-training-next\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const App = props => {
  const {
    Component,
    pageProps,
    store
  } = props;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(react_redux_toastr__WEBPACK_IMPORTED_MODULE_7___default.a, {
    timeOut: 4000,
    newestOnTop: false,
    position: "top-left",
    getState: state => state.toastr,
    transitionIn: "fadeIn",
    transitionOut: "fadeOut",
    progressBar: true,
    closeOnToastrClick: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(Component, _extends({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(_store_store__WEBPACK_IMPORTED_MODULE_3__["initStore"])(App));

/***/ }),

/***/ "./store/blogs/actions.js":
/*!********************************!*\
  !*** ./store/blogs/actions.js ***!
  \********************************/
/*! exports provided: blogActionTypes, getAllBlogs, setSelectedBlog, setBlogFormAction, createBlog, updateBlog, deleteBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogActionTypes", function() { return blogActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlogs", function() { return getAllBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBlog", function() { return setSelectedBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlogFormAction", function() { return setBlogFormAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlog", function() { return updateBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlog", function() { return deleteBlog; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const HTTP_ENDPOINT = "http://localhost:5000";
const blogActionTypes = {
  GET_ALL_BLOGS: 'GET_ALL_BLOGS',
  SET_SELECTED_BLOG: 'SET_SELECTED_BLOG',
  SET_BLOG_FORM_ACTION: 'SET_BLOG_FORM_ACTION'
};
const getAllBlogs = () => {
  return dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${HTTP_ENDPOINT}/blog`, {
      headers: {
        "Content-Type": "application.json"
      }
    }).then(({
      data
    }) => data).then(blogs => dispatch({
      type: blogActionTypes.GET_ALL_BLOGS,
      data: blogs
    }));
  };
};
const setSelectedBlog = blog => {
  return dispatch => {
    dispatch({
      type: blogActionTypes.SET_SELECTED_BLOG,
      data: blog
    });
  };
};
const setBlogFormAction = action => {
  return dispatch => {
    dispatch({
      type: blogActionTypes.SET_BLOG_FORM_ACTION,
      data: action
    });
  };
};
const createBlog = blog => {
  return () => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${HTTP_ENDPOINT}/blog`, blog).then(({
      data
    }) => data);
  };
};
const updateBlog = blog => {
  return () => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${HTTP_ENDPOINT}/blog/${blog.id}`, blog).then(({
      data
    }) => data);
  };
};
const deleteBlog = id => {
  return () => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${HTTP_ENDPOINT}/blog/${id}`).then(({
      data
    }) => data);
  };
};

/***/ }),

/***/ "./store/blogs/reducers.js":
/*!*********************************!*\
  !*** ./store/blogs/reducers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/blogs/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const blogInitialState = {
  allBlogs: [],
  selectedBlog: null,
  blogFormAction: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = blogInitialState, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["blogActionTypes"].GET_ALL_BLOGS:
      return _objectSpread({}, state, {
        allBlogs: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["blogActionTypes"].SET_SELECTED_BLOG:
      return _objectSpread({}, state, {
        selectedBlog: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["blogActionTypes"].SET_BLOG_FORM_ACTION:
      return _objectSpread({}, state, {
        blogFormAction: action.data
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blogs_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogs/reducers */ "./store/blogs/reducers.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__);





const bindMiddleWare = middleware => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const initStore = () => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    blogs: _blogs_reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
    toastr: react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["reducer"]
  }), bindMiddleWare([redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a]));
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-redux-toastr":
/*!*************************************!*\
  !*** external "react-redux-toastr" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-toastr");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map