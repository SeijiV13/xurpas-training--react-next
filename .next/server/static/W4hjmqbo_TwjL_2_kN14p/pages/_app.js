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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./store/blogs/actions.js
var actions = __webpack_require__("o3za");

// CONCATENATED MODULE: ./store/blogs/reducers.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const blogInitialState = {
  allBlogs: [],
  selectedBlog: null,
  blogFormAction: null
};
/* harmony default export */ var reducers = ((state = blogInitialState, action) => {
  switch (action.type) {
    case actions["blogActionTypes"].GET_ALL_BLOGS:
      return _objectSpread({}, state, {
        allBlogs: action.data
      });

    case actions["blogActionTypes"].SET_SELECTED_BLOG:
      return _objectSpread({}, state, {
        selectedBlog: action.data
      });

    case actions["blogActionTypes"].SET_BLOG_FORM_ACTION:
      return _objectSpread({}, state, {
        blogFormAction: action.data
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: external "react-redux-toastr"
var external_react_redux_toastr_ = __webpack_require__("J5aF");
var external_react_redux_toastr_default = /*#__PURE__*/__webpack_require__.n(external_react_redux_toastr_);

// CONCATENATED MODULE: ./store/store.js





const bindMiddleWare = middleware => {
  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const initStore = () => {
  return Object(external_redux_["createStore"])(Object(external_redux_["combineReducers"])({
    blogs: reducers,
    toastr: external_react_redux_toastr_["reducer"]
  }), bindMiddleWare([external_redux_thunk_default.a]));
};
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./assets/styles.css
var styles = __webpack_require__("1yjX");

// EXTERNAL MODULE: ./node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css
var react_redux_toastr_min = __webpack_require__("1qCN");

// CONCATENATED MODULE: ./pages/_app.js

var __jsx = external_react_default.a.createElement;








const App = props => {
  const {
    Component,
    pageProps,
    store
  } = props;
  return __jsx(external_react_redux_["Provider"], {
    store: store
  }, __jsx(external_react_redux_toastr_default.a, {
    timeOut: 4000,
    newestOnTop: false,
    position: "top-left",
    getState: state => state.toastr,
    transitionIn: "fadeIn",
    transitionOut: "fadeOut",
    progressBar: true,
    closeOnToastrClick: true
  }), __jsx(Component, pageProps));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(initStore)(App));

/***/ }),

/***/ "1qCN":
/***/ (function(module, exports) {



/***/ }),

/***/ "1yjX":
/***/ (function(module, exports) {



/***/ }),

/***/ "J5aF":
/***/ (function(module, exports) {

module.exports = require("react-redux-toastr");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "o3za":
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
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

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });