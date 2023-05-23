"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_project"] = self["webpackChunkto_do_list_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/cancel.png */ \"./src/images/cancel.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --black: rgb(0, 0, 0);\\r\\n  --white: rgb(255, 255, 255);\\r\\n  --red: rgb(249, 46, 46);\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--black);\\r\\n  font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;\\r\\n  color: var(--white);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  position: fixed;\\r\\n  background-color: var(--black);\\r\\n  width: 100%;\\r\\n  justify-content: space-around;\\r\\n  height: 3rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  margin-right: 2rem;\\r\\n  text-decoration: none;\\r\\n  color: var(--white);\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.nav-link:hover {\\r\\n  background-color: var(--red);\\r\\n  border-radius: 5px;\\r\\n  padding: 0.5rem 1rem;\\r\\n  font-weight: 800;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  border: 2px solid var(--white);\\r\\n  height: 3rem;\\r\\n  align-items: center;\\r\\n  margin-top: auto;\\r\\n  padding-left: 0.5rem;\\r\\n  width: 99%;\\r\\n}\\r\\n\\r\\n#movies-container {\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-evenly;\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.movie-description {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.movie-image {\\r\\n  width: 100%;\\r\\n  height: 300px;\\r\\n}\\r\\n\\r\\n.movie-name {\\r\\n  font-size: 1rem;\\r\\n  color: var(--black);\\r\\n}\\r\\n\\r\\n.movie-card {\\r\\n  width: 25%;\\r\\n  padding: 10px;\\r\\n  margin-top: 50px;\\r\\n  background-color: lightgray;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  color: var(--black);\\r\\n}\\r\\n\\r\\n.likes-counter {\\r\\n  margin-right: 10px;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.like-button {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 700;\\r\\n  background-color: var(--red);\\r\\n  color: var(--white);\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  background-color: var(--red);\\r\\n  color: var(--white);\\r\\n  font-size: 1.2rem;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n#popup-window {\\r\\n  border: 3px solid var(--red);\\r\\n  background-color: var(--black);\\r\\n  position: absolute;\\r\\n  z-index: 999;\\r\\n  width: 90%;\\r\\n  margin: 3rem;\\r\\n  padding: 2rem;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.cancel-btn {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  position: absolute;\\r\\n  margin: 1rem;\\r\\n  top: 5px;\\r\\n  right: 5px;\\r\\n  height: 3rem;\\r\\n  width: 3rem;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  width: 60%;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  grid-template-rows: auto auto;\\r\\n  gap: 2rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.imageTitleDiv img {\\r\\n  width: 20rem;\\r\\n  height: 20rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getMovies.js */ \"./src/modules/getMovies.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/like.js */ \"./src/modules/like.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_showhide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/showhide.js */ \"./src/modules/showhide.js\");\n\n\n\n\n\n\n\n\nconst appId = 'WGv1nO0NTRyk5wZp7rJP';\n\nconst numberOfMovies = 6;\nlet index = 1;\nconst movies2 = [];\nconst movies = [];\n\nwhile (index <= numberOfMovies) {\n  movies2.push('movie');\n  index += 1;\n}\n\nmovies2.forEach(async (item, index) => {\n  const movie = await (0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index + 1);\n  movies.push(movie);\n});\nconst updateLikes = async (appId) => {\n  let likes = await (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appId);\n\n  if (likes.length === 0) {\n    likes = [];\n  } else {\n    likes = JSON.parse(likes);\n  }\n  return likes;\n};\n\nconst likes = await updateLikes(appId);\n\nawait (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movies, likes, appId);\n\nconst likeBtns = document.querySelectorAll('.like-button');\n\nconst update = async (likes, index, span) => {\n  const movieId = `${index + 1}`;\n  likes.forEach((item) => {\n    if (movieId === item.item_id) {\n      span.innerHTML = `${item.likes}`;\n    }\n  });\n};\n\nlikeBtns.forEach((item, index) => {\n  item.addEventListener('click', async (e) => {\n    const likesCount = e.currentTarget.parentNode.children[0];\n    await (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(appId, index + 1);\n    const likes = await updateLikes(appId);\n    const likesBox = await likesCount;\n    await update(likes, index, likesBox);\n  });\n});\n\n// comment button\nconst commentbtns = document.querySelectorAll('.comments');\n\ncommentbtns.forEach((commentbtn, index) => {\n  commentbtn.addEventListener('click', async () => {\n    const resdata = await (0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index + 1);\n    await (0,_modules_showhide_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    await (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(resdata);\n  });\n});\n\ndocument.addEventListener('click', async (event) => {\n  const { target } = event;\n\n  // Check if the clicked element is the cancel button\n  if (target.classList.contains('cancel-btn')) {\n    await (0,_modules_showhide_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  }\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://to-do-list-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst display = async (Movies, Likes) => {\n  const moviesContainer = document.getElementById('movies-container');\n  moviesContainer.innerHTML = '';\n  const movies = Movies;\n  const likes = Likes;\n\n  movies.forEach((movie, index) => {\n    const movieId = `${index + 1}`;\n    const div = document.createElement('div');\n    const movieBar = document.createElement('div');\n    const likeBox = document.createElement('div');\n    const span = document.createElement('span');\n    const button = document.createElement('button');\n    const comment = document.createElement('button');\n    div.className = 'movie-card';\n    movieBar.className = 'movie-description';\n    likeBox.className = 'likes';\n    span.className = 'likes-counter';\n    button.className = 'like-button';\n    comment.className = 'comments';\n    div.innerHTML = `\n    <img class=\"movie-image\" src=\"${movie.image.original}\">`;\n    movieBar.innerHTML = `<h2 class=\"movie-name\">${movie.name}</h2>`;\n    let likesCount = 0;\n    likes.forEach((item) => {\n      if (movieId === item.item_id) {\n        likesCount = item.likes;\n      }\n    });\n\n    span.innerHTML = `${likesCount}`;\n    button.innerHTML = 'like';\n    comment.innerHTML = 'Comment';\n    likeBox.appendChild(span);\n    likeBox.appendChild(button);\n    movieBar.appendChild(likeBox);\n    div.appendChild(movieBar);\n    div.appendChild(comment);\n    moviesContainer.appendChild(div);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async (appId) => {\n  const options = {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  };\n\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,\n    options,\n  );\n\n  const data = await response.text();\n\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/getMovies.js":
/*!**********************************!*\
  !*** ./src/modules/getMovies.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMovie = async (Id) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${Id}`);\n\n  if (response.status === 200) {\n    const data = await response.json();\n    return data;\n  }\n\n  throw new Error(`Request failed with status code ${response.status}`);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovie);\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/getMovies.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst like = async (appId, movieId) => {\n  const options = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: `${movieId}`,\n    }),\n  };\n\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,\n    options,\n  );\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (like);\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/like.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popup = async (data) => {\n  const popupContainer = document.getElementById('popup-window');\n\n  while (popupContainer.firstChild) {\n    popupContainer.removeChild(popupContainer.firstChild);\n  }\n\n  const cancelButton = document.createElement('button');\n  cancelButton.classList.add('cancel-btn');\n  popupContainer.appendChild(cancelButton);\n\n  const imageTitleDiv = document.createElement('div');\n  imageTitleDiv.classList.add('imageTitleDiv');\n  popupContainer.appendChild(imageTitleDiv);\n\n  const image = document.createElement('img');\n  const title = document.createElement('h2');\n  image.alt = 'movie image';\n  image.src = data.image.original;\n  title.innerText = data.name;\n\n  imageTitleDiv.appendChild(image);\n  imageTitleDiv.appendChild(title);\n\n  const detailsDiv = document.createElement('div');\n  detailsDiv.classList.add('details');\n  popupContainer.appendChild(detailsDiv);\n\n  const language = document.createElement('p');\n  language.innerText = `Language :  ${data.language}`;\n  detailsDiv.appendChild(language);\n\n  const duration = document.createElement('p');\n  duration.innerText = `Episode length :   ${data.averageRuntime}`;\n  detailsDiv.appendChild(duration);\n\n  const genre = document.createElement('p');\n  genre.innerText = `Genres :  ${data.genres[0]}, ${data.genres[1]}`;\n  detailsDiv.appendChild(genre);\n\n  const status = document.createElement('p');\n  status.innerText = `Genres : ${data.status}`;\n  detailsDiv.appendChild(status);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/showhide.js":
/*!*********************************!*\
  !*** ./src/modules/showhide.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moviesContainer = document.getElementById('movies-container');\nconst headerEl = document.getElementById('header');\nconst footerEL = document.getElementById('footer');\n\nconst showhide = async () => {\n  moviesContainer.classList.toggle('show');\n  moviesContainer.classList.toggle('hide');\n  headerEl.classList.toggle('show');\n  headerEl.classList.toggle('hide');\n  footerEL.classList.toggle('show');\n  footerEL.classList.toggle('hide');\n  document.getElementById('popup-window').classList.toggle('hide');\n  document.getElementById('popup-window').classList.toggle('show');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showhide);\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/showhide.js?");

/***/ }),

/***/ "./src/images/cancel.png":
/*!*******************************!*\
  !*** ./src/images/cancel.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ffdafe3f0eceab67b7c2.png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/cancel.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);