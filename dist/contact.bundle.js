"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/berkshireswash-regular-webfont.woff2 */ "./src/fonts/berkshireswash-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/berkshireswash-regular-webfont.woff */ "./src/fonts/berkshireswash-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"baby\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n    font-style: normal;\n    font-weight: 400;\n}\n\n:root {\n    font-family: \"baby\";\n    --pink: #ffdbdb;\n    --blue: #cff1fb;\n    --purple: #d1d1f9;\n    --green: #d6fbe4;\n    --yellow: #fcfdcd;\n}\n\n\nbody {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--blue);\n    grid-template-rows: 70px 1fr;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.tab-container {\n    list-style: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: calc(8px + 2vw);\n    font-size: calc(1rem + 1vw);\n}\n\n.tab {\n    margin-top: 5vh;\n    padding: 16px 16px 10px;\n    border-radius: 50px 50px 0 0 ;\n    width: min(100px, 25vw);\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    padding-bottom: 20px;\n    margin-bottom: -20px;\n    transition: 0.3s;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.tab:hover {\n    transform: translate(0px, -20px);\n}\n\n.tab:active {\n    transform: translate(0px);\n    transition: 0s;\n\n}\n\n.tab:first-child {\n    background-color: var(--pink);\n}\n\n.tab:nth-child(2) {\n    background-color: var(--yellow);\n}\n\n.tab:nth-child(3) {\n    background-color: var(--green);\n}\n\n.content {\n    background-color: var(--purple);\n    z-index: 1;\n    box-shadow: 0px 0px 3px var(--purple);\n    display: flex;\n    justify-content: center;\n    grid-row: 2 / -1;\n}\n\n.container {\n    margin: 5vh 10vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--yellow);\n    border-radius: 50px;\n    padding: 20px;\n    gap: 20px;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    max-width: 600px;\n    min-width: 340px;\n}\n\n.title {\n    font-size: 3rem;\n    text-align: center;\n    width: 250px;\n}\n\n.sub-title {\n    text-align: right;\n}\n\n.barry-pic {\n    margin-top: 20px;\n    width: auto;\n    height: 400px;\n    border-radius: 50%;\n}\n\n.copy {\n    font-size: 1.5rem;\n    padding: 16px;\n    line-height: 2rem;\n}\n\n.hours,\n.location {\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.copy,\n.text,\n.menu-sub-title {\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n    text-align: center;\n    color: #555;\n\n}\n\n.text {\n    font-size: 1.2rem;\n}\n\n.hours-title,\n.loc-title {\n    margin: 30px 0 7px 0;\n    font-size: 2rem;\n}\n\n.mealTime {\n    font-size: 1.4rem;\n    color: #bdbdbd;\n    border-bottom: 3px dotted var(--purple);\n}\n\n.dinner {\n    margin-top: 30px;\n}\n\n.menu-pic {\n    height: 200px;\n    width: auto;\n    border-radius: 50%;\n}\n\n.menu-title,\n.message {\n    font-size: 2rem;\n    text-align: center;\n}\n\n\n.full-item {\n    width: 300px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin: 10px 0;\n}\n\n.menu-sub-title {\n    margin-bottom: 10px;\n}\n\n.contact-pic {\n    height: 200px;\n    width: auto;\n    border-radius: 50px;\n}\n\n.message {\n    width: 200px;\n}\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB;0DACiE;IACjE,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,6BAA6B;IAC7B,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,oBAAoB;IACpB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;IACzB,cAAc;;AAElB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;IAC/B,UAAU;IACV,qCAAqC;IACrC,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;IAC/B,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,cAAc;IACd,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;;;IAGI,4EAA4E;IAC5E,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;;AAEf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,uCAAuC;AAC3C;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;IACf,kBAAkB;AACtB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: \"baby\";\n    src: url(\"./fonts/berkshireswash-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"./fonts/berkshireswash-regular-webfont.woff\") format(\"woff\");\n    font-style: normal;\n    font-weight: 400;\n}\n\n:root {\n    font-family: \"baby\";\n    --pink: #ffdbdb;\n    --blue: #cff1fb;\n    --purple: #d1d1f9;\n    --green: #d6fbe4;\n    --yellow: #fcfdcd;\n}\n\n\nbody {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--blue);\n    grid-template-rows: 70px 1fr;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.tab-container {\n    list-style: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: calc(8px + 2vw);\n    font-size: calc(1rem + 1vw);\n}\n\n.tab {\n    margin-top: 5vh;\n    padding: 16px 16px 10px;\n    border-radius: 50px 50px 0 0 ;\n    width: min(100px, 25vw);\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    padding-bottom: 20px;\n    margin-bottom: -20px;\n    transition: 0.3s;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.tab:hover {\n    transform: translate(0px, -20px);\n}\n\n.tab:active {\n    transform: translate(0px);\n    transition: 0s;\n\n}\n\n.tab:first-child {\n    background-color: var(--pink);\n}\n\n.tab:nth-child(2) {\n    background-color: var(--yellow);\n}\n\n.tab:nth-child(3) {\n    background-color: var(--green);\n}\n\n.content {\n    background-color: var(--purple);\n    z-index: 1;\n    box-shadow: 0px 0px 3px var(--purple);\n    display: flex;\n    justify-content: center;\n    grid-row: 2 / -1;\n}\n\n.container {\n    margin: 5vh 10vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--yellow);\n    border-radius: 50px;\n    padding: 20px;\n    gap: 20px;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    max-width: 600px;\n    min-width: 340px;\n}\n\n.title {\n    font-size: 3rem;\n    text-align: center;\n    width: 250px;\n}\n\n.sub-title {\n    text-align: right;\n}\n\n.barry-pic {\n    margin-top: 20px;\n    width: auto;\n    height: 400px;\n    border-radius: 50%;\n}\n\n.copy {\n    font-size: 1.5rem;\n    padding: 16px;\n    line-height: 2rem;\n}\n\n.hours,\n.location {\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.copy,\n.text,\n.menu-sub-title {\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n    text-align: center;\n    color: #555;\n\n}\n\n.text {\n    font-size: 1.2rem;\n}\n\n.hours-title,\n.loc-title {\n    margin: 30px 0 7px 0;\n    font-size: 2rem;\n}\n\n.mealTime {\n    font-size: 1.4rem;\n    color: #bdbdbd;\n    border-bottom: 3px dotted var(--purple);\n}\n\n.dinner {\n    margin-top: 30px;\n}\n\n.menu-pic {\n    height: 200px;\n    width: auto;\n    border-radius: 50%;\n}\n\n.menu-title,\n.message {\n    font-size: 2rem;\n    text-align: center;\n}\n\n\n.full-item {\n    width: 300px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin: 10px 0;\n}\n\n.menu-sub-title {\n    margin-bottom: 10px;\n}\n\n.contact-pic {\n    height: 200px;\n    width: auto;\n    border-radius: 50px;\n}\n\n.message {\n    width: 200px;\n}\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _img_IMG_5049_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/IMG_5049.jpg */ "./src/img/IMG_5049.jpg");



function about() {
    const container = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("container");

    const titleContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)();
    const title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("title", "div", "Barry's");
    const subtitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)('sub-title', "div", 
 "Italian Restaurant\nSince 2022");

    const barry = new Image();
    barry.classList.add("barry-pic");
    barry.src = _img_IMG_5049_jpg__WEBPACK_IMPORTED_MODULE_1__;
    titleContainer.append(title, subtitle);

    const copy = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("copy");
    copy.innerText = "People say a baby can't run a restaurant\nWell, they've never been to Barry's";

    const hours = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("hours");
    const hoursTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("hours-title", "div", "Hours");
    const hoursText = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("text", "div")
    hoursText.innerText = "Mon:   TBD\nTues:   TBD\nWed:   TBD\nThurs:   TBD\nIDK we'll call you";
    hours.append(hoursTitle, hoursText);

    const location = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("location");
    const locTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("loc-title", "div", "Location");
    const locText = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("text", "div", "101 Cocomelon Ave, Baby Sharksville");
    location.append(locTitle, locText);

    
    container.append(titleContainer, barry, copy, hours, location);


    


    return container;
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _img_contact_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/contact.jpg */ "./src/img/contact.jpg");



function about() {
    const container = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("container");
    const bAndB = new Image();
    bAndB.src = _img_contact_jpg__WEBPACK_IMPORTED_MODULE_1__;
    bAndB.classList.add("contact-pic");
    const message = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("message", "div", 
    "Hey Buster, that's private!");

    container.append(bAndB, message);

    return container;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeEl": () => (/* binding */ makeEl)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





function makeEl(className, type = "div", text = '') {
    const element = document.createElement(type);
    element.classList.add(className);
    element.innerText = text;
    return element;
}

const header = makeEl("header");
const tabContainer = makeEl("tab-container", "ul")
const homeTab = makeEl("tab", "li", "Home");
const menuTab = makeEl("tab", "li", "Menu");
const contactTab = makeEl("tab", "li", "Contact");
const content = makeEl("content");

tabContainer.append(homeTab, menuTab, contactTab);
header.append(tabContainer);

content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

homeTab.addEventListener('click', () => {
    content.removeChild(content.firstChild);
    content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
})

menuTab.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
})

contactTab.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
})


document.body.appendChild(header);
document.body.appendChild(content);



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _img_IMG_5825_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/IMG_5825.jpg */ "./src/img/IMG_5825.jpg");
/* harmony import */ var _img_pancakes_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/pancakes.jpg */ "./src/img/pancakes.jpg");
/* harmony import */ var _img_wafers_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/wafers.jpg */ "./src/img/wafers.jpg");
/* harmony import */ var _img_pastina_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pastina.jpg */ "./src/img/pastina.jpg");
/* harmony import */ var _img_pickle_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/pickle.jpg */ "./src/img/pickle.jpg");
/* harmony import */ var _img_marinara_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/marinara.jpg */ "./src/img/marinara.jpg");








function menu() {
    const container = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("container");

    const brunch = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("mealTime", "div", "Brunch")
    const dinner = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("mealTime", "div", "Dinner");
    dinner.classList.add("dinner");

    const item1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("full-item");
    const title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-title", "div", "Meatballs");
    const subtitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)('menu-sub-title', "div", 
 "Chef Barry's famous home-style meatballs");
    const meatballBarry = makePic(_img_IMG_5825_jpg__WEBPACK_IMPORTED_MODULE_1__);
    item1.append(title, subtitle, meatballBarry);

    const item2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("full-item");
    const title2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-title", "div", "Pancakes");
    const subtitle2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-sub-title", "div",
    "Mini-pancakes, maple veggie sausage, and roasted sweet potatoes");
    const pancakeBarry = makePic(_img_pancakes_jpg__WEBPACK_IMPORTED_MODULE_2__);
    item2.append(title2, subtitle2, pancakeBarry);

    const item3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("full-item");
    const title3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-title", "div", "Wafers");
    const subtitle3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-sub-title", "div",
    "They're organic and dogs love them!");
    const waferBarry = makePic(_img_wafers_jpg__WEBPACK_IMPORTED_MODULE_3__);
    item3.append(title3, subtitle3, waferBarry);

    const item4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("full-item");
    const title4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-title", "div", "Pastina");
    const subtitle4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-sub-title", "div",
    "Small shaped pasta that fits perfectly on your chin");
    const pastinaBarry = makePic(_img_pastina_jpg__WEBPACK_IMPORTED_MODULE_4__);
    item4.append(title4, subtitle4, pastinaBarry);

    const item5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("full-item");
    const title5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-title", "div", "Pickle");
    const subtitle5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-sub-title", "div",
    "Big fat delicious renaissance-style pickle");
    const pickleBarry = makePic(_img_pickle_jpg__WEBPACK_IMPORTED_MODULE_5__);
    item5.append(title5, subtitle5, pickleBarry);

    const item6 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("full-item");
    const title6 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-title", "div", "Marinara");
    const subtitle6= (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.makeEl)("menu-sub-title", "div",
    "Just straight up marinara");
    const marinaraBarry = makePic(_img_marinara_jpg__WEBPACK_IMPORTED_MODULE_6__);
    item6.append(title6, subtitle6, marinaraBarry);
    






    
    container.append(brunch,  item2, item3, item5, dinner, item1, item4, item6);


    


    return container;
}

function makePic(source) {
    const pic = new Image();
    pic.classList.add("menu-pic");
    pic.src = source;
    return pic;
}


/***/ }),

/***/ "./src/fonts/berkshireswash-regular-webfont.woff":
/*!*******************************************************!*\
  !*** ./src/fonts/berkshireswash-regular-webfont.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5811ca1f136e5a6cbd2d.woff";

/***/ }),

/***/ "./src/fonts/berkshireswash-regular-webfont.woff2":
/*!********************************************************!*\
  !*** ./src/fonts/berkshireswash-regular-webfont.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d671c85a1db347ae0331.woff2";

/***/ }),

/***/ "./src/img/IMG_5049.jpg":
/*!******************************!*\
  !*** ./src/img/IMG_5049.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9136b380a5958ac26771.jpg";

/***/ }),

/***/ "./src/img/IMG_5825.jpg":
/*!******************************!*\
  !*** ./src/img/IMG_5825.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d1744e039184aed683d.jpg";

/***/ }),

/***/ "./src/img/contact.jpg":
/*!*****************************!*\
  !*** ./src/img/contact.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9af71f8b18f0f8f9c63d.jpg";

/***/ }),

/***/ "./src/img/marinara.jpg":
/*!******************************!*\
  !*** ./src/img/marinara.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11d7506dbb18210b908b.jpg";

/***/ }),

/***/ "./src/img/pancakes.jpg":
/*!******************************!*\
  !*** ./src/img/pancakes.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a22f4c993db70fe3d8be.jpg";

/***/ }),

/***/ "./src/img/pastina.jpg":
/*!*****************************!*\
  !*** ./src/img/pastina.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1e3f381782addf4c46d.jpg";

/***/ }),

/***/ "./src/img/pickle.jpg":
/*!****************************!*\
  !*** ./src/img/pickle.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b02e836a547c5bab9669.jpg";

/***/ }),

/***/ "./src/img/wafers.jpg":
/*!****************************!*\
  !*** ./src/img/wafers.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3b5982c230f481e281a.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3Qix1REFBTztBQUMvQixDQUFDOzs7QUFHRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDbUM7QUFDQztBQUNLO0FBQ0w7QUFDRztBQUNGO0FBQ0k7O0FBRTFCO0FBQ2Ysc0JBQXNCLGlEQUFNOztBQUU1QixtQkFBbUIsaURBQU07QUFDekIsbUJBQW1CLGlEQUFNO0FBQ3pCOztBQUVBLGtCQUFrQixpREFBTTtBQUN4QixrQkFBa0IsaURBQU07QUFDeEIscUJBQXFCLGlEQUFNO0FBQzNCO0FBQ0Esa0NBQWtDLDhDQUFHO0FBQ3JDOztBQUVBLGtCQUFrQixpREFBTTtBQUN4QixtQkFBbUIsaURBQU07QUFDekIsc0JBQXNCLGlEQUFNO0FBQzVCO0FBQ0EsaUNBQWlDLDhDQUFRO0FBQ3pDOztBQUVBLGtCQUFrQixpREFBTTtBQUN4QixtQkFBbUIsaURBQU07QUFDekIsc0JBQXNCLGlEQUFNO0FBQzVCO0FBQ0EsK0JBQStCLDRDQUFLO0FBQ3BDOztBQUVBLGtCQUFrQixpREFBTTtBQUN4QixtQkFBbUIsaURBQU07QUFDekIsc0JBQXNCLGlEQUFNO0FBQzVCO0FBQ0EsaUNBQWlDLDZDQUFPO0FBQ3hDOztBQUVBLGtCQUFrQixpREFBTTtBQUN4QixtQkFBbUIsaURBQU07QUFDekIsc0JBQXNCLGlEQUFNO0FBQzVCO0FBQ0EsZ0NBQWdDLDRDQUFNO0FBQ3RDOztBQUVBLGtCQUFrQixpREFBTTtBQUN4QixtQkFBbUIsaURBQU07QUFDekIscUJBQXFCLGlEQUFNO0FBQzNCO0FBQ0Esa0NBQWtDLDhDQUFRO0FBQzFDO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2JlcmtzaGlyZXN3YXNoLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvYmVya3NoaXJlc3dhc2gtcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYmFieVxcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogXFxcImJhYnlcXFwiO1xcbiAgICAtLXBpbms6ICNmZmRiZGI7XFxuICAgIC0tYmx1ZTogI2NmZjFmYjtcXG4gICAgLS1wdXJwbGU6ICNkMWQxZjk7XFxuICAgIC0tZ3JlZW46ICNkNmZiZTQ7XFxuICAgIC0teWVsbG93OiAjZmNmZGNkO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi50YWItY29udGFpbmVyIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiBjYWxjKDhweCArIDJ2dyk7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZ3KTtcXG59XFxuXFxuLnRhYiB7XFxuICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwIDAgO1xcbiAgICB3aWR0aDogbWluKDEwMHB4LCAyNXZ3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjBweCk7XFxufVxcblxcbi50YWI6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4KTtcXG4gICAgdHJhbnNpdGlvbjogMHM7XFxuXFxufVxcblxcbi50YWI6Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG59XFxuXFxuLnRhYjpudGgtY2hpbGQoMikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cXG4udGFiOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCB2YXIoLS1wdXJwbGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNXZoIDEwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4uc3ViLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5iYXJyeS1waWMge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uY29weSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLmhvdXJzLFxcbi5sb2NhdGlvbiB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvcHksXFxuLnRleHQsXFxuLm1lbnUtc3ViLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzU1NTtcXG5cXG59XFxuXFxuLnRleHQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhvdXJzLXRpdGxlLFxcbi5sb2MtdGl0bGUge1xcbiAgICBtYXJnaW46IDMwcHggMCA3cHggMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVhbFRpbWUge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgY29sb3I6ICNiZGJkYmQ7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBkb3R0ZWQgdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLmRpbm5lciB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5tZW51LXBpYyB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5tZW51LXRpdGxlLFxcbi5tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5mdWxsLWl0ZW0ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLm1lbnUtc3ViLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtcGljIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25COzBEQUNpRTtJQUNqRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztJQUNULGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBOzs7SUFHSSw0RUFBNEU7SUFDNUUsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJiYWJ5XFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvYmVya3NoaXJlc3dhc2gtcmVndWxhci13ZWJmb250LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4vZm9udHMvYmVya3NoaXJlc3dhc2gtcmVndWxhci13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYmFieVxcXCI7XFxuICAgIC0tcGluazogI2ZmZGJkYjtcXG4gICAgLS1ibHVlOiAjY2ZmMWZiO1xcbiAgICAtLXB1cnBsZTogI2QxZDFmOTtcXG4gICAgLS1ncmVlbjogI2Q2ZmJlNDtcXG4gICAgLS15ZWxsb3c6ICNmY2ZkY2Q7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhYi1jb250YWluZXIge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IGNhbGMoOHB4ICsgMnZ3KTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxdncpO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDAgMCA7XFxuICAgIHdpZHRoOiBtaW4oMTAwcHgsIDI1dncpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yMHB4KTtcXG59XFxuXFxuLnRhYjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwcztcXG5cXG59XFxuXFxuLnRhYjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbn1cXG5cXG4udGFiOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxufVxcblxcbi50YWI6bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHZhcigtLXB1cnBsZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA1dmggMTB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5zdWItdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmJhcnJ5LXBpYyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jb3B5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uaG91cnMsXFxuLmxvY2F0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29weSxcXG4udGV4dCxcXG4ubWVudS1zdWItdGl0bGUge1xcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNTU1O1xcblxcbn1cXG5cXG4udGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaG91cnMtdGl0bGUsXFxuLmxvYy10aXRsZSB7XFxuICAgIG1hcmdpbjogMzBweCAwIDdweCAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZWFsVGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogI2JkYmRiZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdHRlZCB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4uZGlubmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLm1lbnUtcGljIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1lbnUtdGl0bGUsXFxuLm1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLmZ1bGwtaXRlbSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubWVudS1zdWItdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1waWMge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBtYWtlRWwgfSBmcm9tIFwiLi9pbmRleC5qc1wiXG5pbXBvcnQgcGljIGZyb20gJy4vaW1nL0lNR181MDQ5LmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsKFwiY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBtYWtlRWwoKTtcbiAgICBjb25zdCB0aXRsZSA9IG1ha2VFbChcInRpdGxlXCIsIFwiZGl2XCIsIFwiQmFycnknc1wiKTtcbiAgICBjb25zdCBzdWJ0aXRsZSA9IG1ha2VFbCgnc3ViLXRpdGxlJywgXCJkaXZcIiwgXG4gXCJJdGFsaWFuIFJlc3RhdXJhbnRcXG5TaW5jZSAyMDIyXCIpO1xuXG4gICAgY29uc3QgYmFycnkgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYXJyeS5jbGFzc0xpc3QuYWRkKFwiYmFycnktcGljXCIpO1xuICAgIGJhcnJ5LnNyYyA9IHBpYztcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQodGl0bGUsIHN1YnRpdGxlKTtcblxuICAgIGNvbnN0IGNvcHkgPSBtYWtlRWwoXCJjb3B5XCIpO1xuICAgIGNvcHkuaW5uZXJUZXh0ID0gXCJQZW9wbGUgc2F5IGEgYmFieSBjYW4ndCBydW4gYSByZXN0YXVyYW50XFxuV2VsbCwgdGhleSd2ZSBuZXZlciBiZWVuIHRvIEJhcnJ5J3NcIjtcblxuICAgIGNvbnN0IGhvdXJzID0gbWFrZUVsKFwiaG91cnNcIik7XG4gICAgY29uc3QgaG91cnNUaXRsZSA9IG1ha2VFbChcImhvdXJzLXRpdGxlXCIsIFwiZGl2XCIsIFwiSG91cnNcIik7XG4gICAgY29uc3QgaG91cnNUZXh0ID0gbWFrZUVsKFwidGV4dFwiLCBcImRpdlwiKVxuICAgIGhvdXJzVGV4dC5pbm5lclRleHQgPSBcIk1vbjogICBUQkRcXG5UdWVzOiAgIFRCRFxcbldlZDogICBUQkRcXG5UaHVyczogICBUQkRcXG5JREsgd2UnbGwgY2FsbCB5b3VcIjtcbiAgICBob3Vycy5hcHBlbmQoaG91cnNUaXRsZSwgaG91cnNUZXh0KTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gbWFrZUVsKFwibG9jYXRpb25cIik7XG4gICAgY29uc3QgbG9jVGl0bGUgPSBtYWtlRWwoXCJsb2MtdGl0bGVcIiwgXCJkaXZcIiwgXCJMb2NhdGlvblwiKTtcbiAgICBjb25zdCBsb2NUZXh0ID0gbWFrZUVsKFwidGV4dFwiLCBcImRpdlwiLCBcIjEwMSBDb2NvbWVsb24gQXZlLCBCYWJ5IFNoYXJrc3ZpbGxlXCIpO1xuICAgIGxvY2F0aW9uLmFwcGVuZChsb2NUaXRsZSwgbG9jVGV4dCk7XG5cbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBiYXJyeSwgY29weSwgaG91cnMsIGxvY2F0aW9uKTtcblxuXG4gICAgXG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiaW1wb3J0IHsgbWFrZUVsIH0gZnJvbSBcIi4vaW5kZXguanNcIlxuaW1wb3J0IGNvbnRhY3RJbWcgZnJvbSBcIi4vaW1nL2NvbnRhY3QuanBnXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsKFwiY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGJBbmRCID0gbmV3IEltYWdlKCk7XG4gICAgYkFuZEIuc3JjID0gY29udGFjdEltZztcbiAgICBiQW5kQi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1waWNcIik7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1ha2VFbChcIm1lc3NhZ2VcIiwgXCJkaXZcIiwgXG4gICAgXCJIZXkgQnVzdGVyLCB0aGF0J3MgcHJpdmF0ZSFcIik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGJBbmRCLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5mdW5jdGlvbiBtYWtlRWwoY2xhc3NOYW1lLCB0eXBlID0gXCJkaXZcIiwgdGV4dCA9ICcnKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBoZWFkZXIgPSBtYWtlRWwoXCJoZWFkZXJcIik7XG5jb25zdCB0YWJDb250YWluZXIgPSBtYWtlRWwoXCJ0YWItY29udGFpbmVyXCIsIFwidWxcIilcbmNvbnN0IGhvbWVUYWIgPSBtYWtlRWwoXCJ0YWJcIiwgXCJsaVwiLCBcIkhvbWVcIik7XG5jb25zdCBtZW51VGFiID0gbWFrZUVsKFwidGFiXCIsIFwibGlcIiwgXCJNZW51XCIpO1xuY29uc3QgY29udGFjdFRhYiA9IG1ha2VFbChcInRhYlwiLCBcImxpXCIsIFwiQ29udGFjdFwiKTtcbmNvbnN0IGNvbnRlbnQgPSBtYWtlRWwoXCJjb250ZW50XCIpO1xuXG50YWJDb250YWluZXIuYXBwZW5kKGhvbWVUYWIsIG1lbnVUYWIsIGNvbnRhY3RUYWIpO1xuaGVhZGVyLmFwcGVuZCh0YWJDb250YWluZXIpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGFib3V0KCkpO1xuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KCkpO1xufSlcblxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG59KVxuXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbn0pXG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuZXhwb3J0IHsgbWFrZUVsIH0iLCJpbXBvcnQgeyBtYWtlRWwgfSBmcm9tIFwiLi9pbmRleC5qc1wiXG5pbXBvcnQgcGljIGZyb20gJy4vaW1nL0lNR181ODI1LmpwZydcbmltcG9ydCBwYW5jYWtlcyBmcm9tIFwiLi9pbWcvcGFuY2FrZXMuanBnXCJcbmltcG9ydCB3YWZlciBmcm9tIFwiLi9pbWcvd2FmZXJzLmpwZ1wiXG5pbXBvcnQgcGFzdGluYSBmcm9tIFwiLi9pbWcvcGFzdGluYS5qcGdcIlxuaW1wb3J0IHBpY2tsZSBmcm9tIFwiLi9pbWcvcGlja2xlLmpwZ1wiXG5pbXBvcnQgbWFyaW5hcmEgZnJvbSBcIi4vaW1nL21hcmluYXJhLmpwZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsKFwiY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgYnJ1bmNoID0gbWFrZUVsKFwibWVhbFRpbWVcIiwgXCJkaXZcIiwgXCJCcnVuY2hcIilcbiAgICBjb25zdCBkaW5uZXIgPSBtYWtlRWwoXCJtZWFsVGltZVwiLCBcImRpdlwiLCBcIkRpbm5lclwiKTtcbiAgICBkaW5uZXIuY2xhc3NMaXN0LmFkZChcImRpbm5lclwiKTtcblxuICAgIGNvbnN0IGl0ZW0xID0gbWFrZUVsKFwiZnVsbC1pdGVtXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gbWFrZUVsKFwibWVudS10aXRsZVwiLCBcImRpdlwiLCBcIk1lYXRiYWxsc1wiKTtcbiAgICBjb25zdCBzdWJ0aXRsZSA9IG1ha2VFbCgnbWVudS1zdWItdGl0bGUnLCBcImRpdlwiLCBcbiBcIkNoZWYgQmFycnkncyBmYW1vdXMgaG9tZS1zdHlsZSBtZWF0YmFsbHNcIik7XG4gICAgY29uc3QgbWVhdGJhbGxCYXJyeSA9IG1ha2VQaWMocGljKTtcbiAgICBpdGVtMS5hcHBlbmQodGl0bGUsIHN1YnRpdGxlLCBtZWF0YmFsbEJhcnJ5KTtcblxuICAgIGNvbnN0IGl0ZW0yID0gbWFrZUVsKFwiZnVsbC1pdGVtXCIpO1xuICAgIGNvbnN0IHRpdGxlMiA9IG1ha2VFbChcIm1lbnUtdGl0bGVcIiwgXCJkaXZcIiwgXCJQYW5jYWtlc1wiKTtcbiAgICBjb25zdCBzdWJ0aXRsZTIgPSBtYWtlRWwoXCJtZW51LXN1Yi10aXRsZVwiLCBcImRpdlwiLFxuICAgIFwiTWluaS1wYW5jYWtlcywgbWFwbGUgdmVnZ2llIHNhdXNhZ2UsIGFuZCByb2FzdGVkIHN3ZWV0IHBvdGF0b2VzXCIpO1xuICAgIGNvbnN0IHBhbmNha2VCYXJyeSA9IG1ha2VQaWMocGFuY2FrZXMpO1xuICAgIGl0ZW0yLmFwcGVuZCh0aXRsZTIsIHN1YnRpdGxlMiwgcGFuY2FrZUJhcnJ5KTtcblxuICAgIGNvbnN0IGl0ZW0zID0gbWFrZUVsKFwiZnVsbC1pdGVtXCIpO1xuICAgIGNvbnN0IHRpdGxlMyA9IG1ha2VFbChcIm1lbnUtdGl0bGVcIiwgXCJkaXZcIiwgXCJXYWZlcnNcIik7XG4gICAgY29uc3Qgc3VidGl0bGUzID0gbWFrZUVsKFwibWVudS1zdWItdGl0bGVcIiwgXCJkaXZcIixcbiAgICBcIlRoZXkncmUgb3JnYW5pYyBhbmQgZG9ncyBsb3ZlIHRoZW0hXCIpO1xuICAgIGNvbnN0IHdhZmVyQmFycnkgPSBtYWtlUGljKHdhZmVyKTtcbiAgICBpdGVtMy5hcHBlbmQodGl0bGUzLCBzdWJ0aXRsZTMsIHdhZmVyQmFycnkpO1xuXG4gICAgY29uc3QgaXRlbTQgPSBtYWtlRWwoXCJmdWxsLWl0ZW1cIik7XG4gICAgY29uc3QgdGl0bGU0ID0gbWFrZUVsKFwibWVudS10aXRsZVwiLCBcImRpdlwiLCBcIlBhc3RpbmFcIik7XG4gICAgY29uc3Qgc3VidGl0bGU0ID0gbWFrZUVsKFwibWVudS1zdWItdGl0bGVcIiwgXCJkaXZcIixcbiAgICBcIlNtYWxsIHNoYXBlZCBwYXN0YSB0aGF0IGZpdHMgcGVyZmVjdGx5IG9uIHlvdXIgY2hpblwiKTtcbiAgICBjb25zdCBwYXN0aW5hQmFycnkgPSBtYWtlUGljKHBhc3RpbmEpO1xuICAgIGl0ZW00LmFwcGVuZCh0aXRsZTQsIHN1YnRpdGxlNCwgcGFzdGluYUJhcnJ5KTtcblxuICAgIGNvbnN0IGl0ZW01ID0gbWFrZUVsKFwiZnVsbC1pdGVtXCIpO1xuICAgIGNvbnN0IHRpdGxlNSA9IG1ha2VFbChcIm1lbnUtdGl0bGVcIiwgXCJkaXZcIiwgXCJQaWNrbGVcIik7XG4gICAgY29uc3Qgc3VidGl0bGU1ID0gbWFrZUVsKFwibWVudS1zdWItdGl0bGVcIiwgXCJkaXZcIixcbiAgICBcIkJpZyBmYXQgZGVsaWNpb3VzIHJlbmFpc3NhbmNlLXN0eWxlIHBpY2tsZVwiKTtcbiAgICBjb25zdCBwaWNrbGVCYXJyeSA9IG1ha2VQaWMocGlja2xlKTtcbiAgICBpdGVtNS5hcHBlbmQodGl0bGU1LCBzdWJ0aXRsZTUsIHBpY2tsZUJhcnJ5KTtcblxuICAgIGNvbnN0IGl0ZW02ID0gbWFrZUVsKFwiZnVsbC1pdGVtXCIpO1xuICAgIGNvbnN0IHRpdGxlNiA9IG1ha2VFbChcIm1lbnUtdGl0bGVcIiwgXCJkaXZcIiwgXCJNYXJpbmFyYVwiKTtcbiAgICBjb25zdCBzdWJ0aXRsZTY9IG1ha2VFbChcIm1lbnUtc3ViLXRpdGxlXCIsIFwiZGl2XCIsXG4gICAgXCJKdXN0IHN0cmFpZ2h0IHVwIG1hcmluYXJhXCIpO1xuICAgIGNvbnN0IG1hcmluYXJhQmFycnkgPSBtYWtlUGljKG1hcmluYXJhKTtcbiAgICBpdGVtNi5hcHBlbmQodGl0bGU2LCBzdWJ0aXRsZTYsIG1hcmluYXJhQmFycnkpO1xuICAgIFxuXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmQoYnJ1bmNoLCAgaXRlbTIsIGl0ZW0zLCBpdGVtNSwgZGlubmVyLCBpdGVtMSwgaXRlbTQsIGl0ZW02KTtcblxuXG4gICAgXG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIG1ha2VQaWMoc291cmNlKSB7XG4gICAgY29uc3QgcGljID0gbmV3IEltYWdlKCk7XG4gICAgcGljLmNsYXNzTGlzdC5hZGQoXCJtZW51LXBpY1wiKTtcbiAgICBwaWMuc3JjID0gc291cmNlO1xuICAgIHJldHVybiBwaWM7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=