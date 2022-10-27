"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["about"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0IsdURBQU87QUFDL0IsQ0FBQzs7O0FBR0Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q21DO0FBQ0M7QUFDSztBQUNMO0FBQ0c7QUFDRjtBQUNJOztBQUUxQjtBQUNmLHNCQUFzQixpREFBTTs7QUFFNUIsbUJBQW1CLGlEQUFNO0FBQ3pCLG1CQUFtQixpREFBTTtBQUN6Qjs7QUFFQSxrQkFBa0IsaURBQU07QUFDeEIsa0JBQWtCLGlEQUFNO0FBQ3hCLHFCQUFxQixpREFBTTtBQUMzQjtBQUNBLGtDQUFrQyw4Q0FBRztBQUNyQzs7QUFFQSxrQkFBa0IsaURBQU07QUFDeEIsbUJBQW1CLGlEQUFNO0FBQ3pCLHNCQUFzQixpREFBTTtBQUM1QjtBQUNBLGlDQUFpQyw4Q0FBUTtBQUN6Qzs7QUFFQSxrQkFBa0IsaURBQU07QUFDeEIsbUJBQW1CLGlEQUFNO0FBQ3pCLHNCQUFzQixpREFBTTtBQUM1QjtBQUNBLCtCQUErQiw0Q0FBSztBQUNwQzs7QUFFQSxrQkFBa0IsaURBQU07QUFDeEIsbUJBQW1CLGlEQUFNO0FBQ3pCLHNCQUFzQixpREFBTTtBQUM1QjtBQUNBLGlDQUFpQyw2Q0FBTztBQUN4Qzs7QUFFQSxrQkFBa0IsaURBQU07QUFDeEIsbUJBQW1CLGlEQUFNO0FBQ3pCLHNCQUFzQixpREFBTTtBQUM1QjtBQUNBLGdDQUFnQyw0Q0FBTTtBQUN0Qzs7QUFFQSxrQkFBa0IsaURBQU07QUFDeEIsbUJBQW1CLGlEQUFNO0FBQ3pCLHFCQUFxQixpREFBTTtBQUMzQjtBQUNBLGtDQUFrQyw4Q0FBUTtBQUMxQztBQUNBOzs7Ozs7O0FBT0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9iZXJrc2hpcmVzd2FzaC1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2JlcmtzaGlyZXN3YXNoLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcImJhYnlcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJiYWJ5XFxcIjtcXG4gICAgLS1waW5rOiAjZmZkYmRiO1xcbiAgICAtLWJsdWU6ICNjZmYxZmI7XFxuICAgIC0tcHVycGxlOiAjZDFkMWY5O1xcbiAgICAtLWdyZWVuOiAjZDZmYmU0O1xcbiAgICAtLXllbGxvdzogI2ZjZmRjZDtcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGFiLWNvbnRhaW5lciB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdhcDogY2FsYyg4cHggKyAydncpO1xcbiAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDF2dyk7XFxufVxcblxcbi50YWIge1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMCAwIDtcXG4gICAgd2lkdGg6IG1pbigxMDBweCwgMjV2dyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRhYjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTIwcHgpO1xcbn1cXG5cXG4udGFiOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCk7XFxuICAgIHRyYW5zaXRpb246IDBzO1xcblxcbn1cXG5cXG4udGFiOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxufVxcblxcbi50YWI6bnRoLWNoaWxkKDIpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLnRhYjpudGgtY2hpbGQoMykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggdmFyKC0tcHVycGxlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtYXJnaW46IDV2aCAxMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWluLXdpZHRoOiAzNDBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuLnN1Yi10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uYmFycnktcGljIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmNvcHkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5ob3VycyxcXG4ubG9jYXRpb24ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb3B5LFxcbi50ZXh0LFxcbi5tZW51LXN1Yi10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICM1NTU7XFxuXFxufVxcblxcbi50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ob3Vycy10aXRsZSxcXG4ubG9jLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAzMHB4IDAgN3B4IDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lYWxUaW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGNvbG9yOiAjYmRiZGJkO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG90dGVkIHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi5kaW5uZXIge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4ubWVudS1waWMge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWVudS10aXRsZSxcXG4ubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4uZnVsbC1pdGVtIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5tZW51LXN1Yi10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250YWN0LXBpYyB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQjswREFDaUU7SUFDakUsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFVBQVU7SUFDVixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTs7O0lBR0ksNEVBQTRFO0lBQzVFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYmFieVxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL2JlcmtzaGlyZXN3YXNoLXJlZ3VsYXItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2ZvbnRzL2JlcmtzaGlyZXN3YXNoLXJlZ3VsYXItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogXFxcImJhYnlcXFwiO1xcbiAgICAtLXBpbms6ICNmZmRiZGI7XFxuICAgIC0tYmx1ZTogI2NmZjFmYjtcXG4gICAgLS1wdXJwbGU6ICNkMWQxZjk7XFxuICAgIC0tZ3JlZW46ICNkNmZiZTQ7XFxuICAgIC0teWVsbG93OiAjZmNmZGNkO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi50YWItY29udGFpbmVyIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiBjYWxjKDhweCArIDJ2dyk7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZ3KTtcXG59XFxuXFxuLnRhYiB7XFxuICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwIDAgO1xcbiAgICB3aWR0aDogbWluKDEwMHB4LCAyNXZ3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjBweCk7XFxufVxcblxcbi50YWI6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4KTtcXG4gICAgdHJhbnNpdGlvbjogMHM7XFxuXFxufVxcblxcbi50YWI6Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG59XFxuXFxuLnRhYjpudGgtY2hpbGQoMikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cXG4udGFiOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCB2YXIoLS1wdXJwbGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNXZoIDEwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4uc3ViLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5iYXJyeS1waWMge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uY29weSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLmhvdXJzLFxcbi5sb2NhdGlvbiB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvcHksXFxuLnRleHQsXFxuLm1lbnUtc3ViLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzU1NTtcXG5cXG59XFxuXFxuLnRleHQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhvdXJzLXRpdGxlLFxcbi5sb2MtdGl0bGUge1xcbiAgICBtYXJnaW46IDMwcHggMCA3cHggMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVhbFRpbWUge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgY29sb3I6ICNiZGJkYmQ7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBkb3R0ZWQgdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLmRpbm5lciB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5tZW51LXBpYyB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5tZW51LXRpdGxlLFxcbi5tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5mdWxsLWl0ZW0ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLm1lbnUtc3ViLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtcGljIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbWFrZUVsIH0gZnJvbSBcIi4vaW5kZXguanNcIlxuaW1wb3J0IHBpYyBmcm9tICcuL2ltZy9JTUdfNTA0OS5qcGcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gbWFrZUVsKCk7XG4gICAgY29uc3QgdGl0bGUgPSBtYWtlRWwoXCJ0aXRsZVwiLCBcImRpdlwiLCBcIkJhcnJ5J3NcIik7XG4gICAgY29uc3Qgc3VidGl0bGUgPSBtYWtlRWwoJ3N1Yi10aXRsZScsIFwiZGl2XCIsIFxuIFwiSXRhbGlhbiBSZXN0YXVyYW50XFxuU2luY2UgMjAyMlwiKTtcblxuICAgIGNvbnN0IGJhcnJ5ID0gbmV3IEltYWdlKCk7XG4gICAgYmFycnkuY2xhc3NMaXN0LmFkZChcImJhcnJ5LXBpY1wiKTtcbiAgICBiYXJyeS5zcmMgPSBwaWM7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cbiAgICBjb25zdCBjb3B5ID0gbWFrZUVsKFwiY29weVwiKTtcbiAgICBjb3B5LmlubmVyVGV4dCA9IFwiUGVvcGxlIHNheSBhIGJhYnkgY2FuJ3QgcnVuIGEgcmVzdGF1cmFudFxcbldlbGwsIHRoZXkndmUgbmV2ZXIgYmVlbiB0byBCYXJyeSdzXCI7XG5cbiAgICBjb25zdCBob3VycyA9IG1ha2VFbChcImhvdXJzXCIpO1xuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBtYWtlRWwoXCJob3Vycy10aXRsZVwiLCBcImRpdlwiLCBcIkhvdXJzXCIpO1xuICAgIGNvbnN0IGhvdXJzVGV4dCA9IG1ha2VFbChcInRleHRcIiwgXCJkaXZcIilcbiAgICBob3Vyc1RleHQuaW5uZXJUZXh0ID0gXCJNb246ICAgVEJEXFxuVHVlczogICBUQkRcXG5XZWQ6ICAgVEJEXFxuVGh1cnM6ICAgVEJEXFxuSURLIHdlJ2xsIGNhbGwgeW91XCI7XG4gICAgaG91cnMuYXBwZW5kKGhvdXJzVGl0bGUsIGhvdXJzVGV4dCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IG1ha2VFbChcImxvY2F0aW9uXCIpO1xuICAgIGNvbnN0IGxvY1RpdGxlID0gbWFrZUVsKFwibG9jLXRpdGxlXCIsIFwiZGl2XCIsIFwiTG9jYXRpb25cIik7XG4gICAgY29uc3QgbG9jVGV4dCA9IG1ha2VFbChcInRleHRcIiwgXCJkaXZcIiwgXCIxMDEgQ29jb21lbG9uIEF2ZSwgQmFieSBTaGFya3N2aWxsZVwiKTtcbiAgICBsb2NhdGlvbi5hcHBlbmQobG9jVGl0bGUsIGxvY1RleHQpO1xuXG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZUNvbnRhaW5lciwgYmFycnksIGNvcHksIGhvdXJzLCBsb2NhdGlvbik7XG5cblxuICAgIFxuXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsImltcG9ydCB7IG1ha2VFbCB9IGZyb20gXCIuL2luZGV4LmpzXCJcbmltcG9ydCBjb250YWN0SW1nIGZyb20gXCIuL2ltZy9jb250YWN0LmpwZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbChcImNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBiQW5kQiA9IG5ldyBJbWFnZSgpO1xuICAgIGJBbmRCLnNyYyA9IGNvbnRhY3RJbWc7XG4gICAgYkFuZEIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtcGljXCIpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBtYWtlRWwoXCJtZXNzYWdlXCIsIFwiZGl2XCIsIFxuICAgIFwiSGV5IEJ1c3RlciwgdGhhdCdzIHByaXZhdGUhXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChiQW5kQiwgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuZnVuY3Rpb24gbWFrZUVsKGNsYXNzTmFtZSwgdHlwZSA9IFwiZGl2XCIsIHRleHQgPSAnJykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgaGVhZGVyID0gbWFrZUVsKFwiaGVhZGVyXCIpO1xuY29uc3QgdGFiQ29udGFpbmVyID0gbWFrZUVsKFwidGFiLWNvbnRhaW5lclwiLCBcInVsXCIpXG5jb25zdCBob21lVGFiID0gbWFrZUVsKFwidGFiXCIsIFwibGlcIiwgXCJIb21lXCIpO1xuY29uc3QgbWVudVRhYiA9IG1ha2VFbChcInRhYlwiLCBcImxpXCIsIFwiTWVudVwiKTtcbmNvbnN0IGNvbnRhY3RUYWIgPSBtYWtlRWwoXCJ0YWJcIiwgXCJsaVwiLCBcIkNvbnRhY3RcIik7XG5jb25zdCBjb250ZW50ID0gbWFrZUVsKFwiY29udGVudFwiKTtcblxudGFiQ29udGFpbmVyLmFwcGVuZChob21lVGFiLCBtZW51VGFiLCBjb250YWN0VGFiKTtcbmhlYWRlci5hcHBlbmQodGFiQ29udGFpbmVyKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChhYm91dCgpKTtcblxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCgpKTtcbn0pXG5cbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KCkpO1xufSlcblxuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG59KVxuXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmV4cG9ydCB7IG1ha2VFbCB9IiwiaW1wb3J0IHsgbWFrZUVsIH0gZnJvbSBcIi4vaW5kZXguanNcIlxuaW1wb3J0IHBpYyBmcm9tICcuL2ltZy9JTUdfNTgyNS5qcGcnXG5pbXBvcnQgcGFuY2FrZXMgZnJvbSBcIi4vaW1nL3BhbmNha2VzLmpwZ1wiXG5pbXBvcnQgd2FmZXIgZnJvbSBcIi4vaW1nL3dhZmVycy5qcGdcIlxuaW1wb3J0IHBhc3RpbmEgZnJvbSBcIi4vaW1nL3Bhc3RpbmEuanBnXCJcbmltcG9ydCBwaWNrbGUgZnJvbSBcIi4vaW1nL3BpY2tsZS5qcGdcIlxuaW1wb3J0IG1hcmluYXJhIGZyb20gXCIuL2ltZy9tYXJpbmFyYS5qcGdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGJydW5jaCA9IG1ha2VFbChcIm1lYWxUaW1lXCIsIFwiZGl2XCIsIFwiQnJ1bmNoXCIpXG4gICAgY29uc3QgZGlubmVyID0gbWFrZUVsKFwibWVhbFRpbWVcIiwgXCJkaXZcIiwgXCJEaW5uZXJcIik7XG4gICAgZGlubmVyLmNsYXNzTGlzdC5hZGQoXCJkaW5uZXJcIik7XG5cbiAgICBjb25zdCBpdGVtMSA9IG1ha2VFbChcImZ1bGwtaXRlbVwiKTtcbiAgICBjb25zdCB0aXRsZSA9IG1ha2VFbChcIm1lbnUtdGl0bGVcIiwgXCJkaXZcIiwgXCJNZWF0YmFsbHNcIik7XG4gICAgY29uc3Qgc3VidGl0bGUgPSBtYWtlRWwoJ21lbnUtc3ViLXRpdGxlJywgXCJkaXZcIiwgXG4gXCJDaGVmIEJhcnJ5J3MgZmFtb3VzIGhvbWUtc3R5bGUgbWVhdGJhbGxzXCIpO1xuICAgIGNvbnN0IG1lYXRiYWxsQmFycnkgPSBtYWtlUGljKHBpYyk7XG4gICAgaXRlbTEuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSwgbWVhdGJhbGxCYXJyeSk7XG5cbiAgICBjb25zdCBpdGVtMiA9IG1ha2VFbChcImZ1bGwtaXRlbVwiKTtcbiAgICBjb25zdCB0aXRsZTIgPSBtYWtlRWwoXCJtZW51LXRpdGxlXCIsIFwiZGl2XCIsIFwiUGFuY2FrZXNcIik7XG4gICAgY29uc3Qgc3VidGl0bGUyID0gbWFrZUVsKFwibWVudS1zdWItdGl0bGVcIiwgXCJkaXZcIixcbiAgICBcIk1pbmktcGFuY2FrZXMsIG1hcGxlIHZlZ2dpZSBzYXVzYWdlLCBhbmQgcm9hc3RlZCBzd2VldCBwb3RhdG9lc1wiKTtcbiAgICBjb25zdCBwYW5jYWtlQmFycnkgPSBtYWtlUGljKHBhbmNha2VzKTtcbiAgICBpdGVtMi5hcHBlbmQodGl0bGUyLCBzdWJ0aXRsZTIsIHBhbmNha2VCYXJyeSk7XG5cbiAgICBjb25zdCBpdGVtMyA9IG1ha2VFbChcImZ1bGwtaXRlbVwiKTtcbiAgICBjb25zdCB0aXRsZTMgPSBtYWtlRWwoXCJtZW51LXRpdGxlXCIsIFwiZGl2XCIsIFwiV2FmZXJzXCIpO1xuICAgIGNvbnN0IHN1YnRpdGxlMyA9IG1ha2VFbChcIm1lbnUtc3ViLXRpdGxlXCIsIFwiZGl2XCIsXG4gICAgXCJUaGV5J3JlIG9yZ2FuaWMgYW5kIGRvZ3MgbG92ZSB0aGVtIVwiKTtcbiAgICBjb25zdCB3YWZlckJhcnJ5ID0gbWFrZVBpYyh3YWZlcik7XG4gICAgaXRlbTMuYXBwZW5kKHRpdGxlMywgc3VidGl0bGUzLCB3YWZlckJhcnJ5KTtcblxuICAgIGNvbnN0IGl0ZW00ID0gbWFrZUVsKFwiZnVsbC1pdGVtXCIpO1xuICAgIGNvbnN0IHRpdGxlNCA9IG1ha2VFbChcIm1lbnUtdGl0bGVcIiwgXCJkaXZcIiwgXCJQYXN0aW5hXCIpO1xuICAgIGNvbnN0IHN1YnRpdGxlNCA9IG1ha2VFbChcIm1lbnUtc3ViLXRpdGxlXCIsIFwiZGl2XCIsXG4gICAgXCJTbWFsbCBzaGFwZWQgcGFzdGEgdGhhdCBmaXRzIHBlcmZlY3RseSBvbiB5b3VyIGNoaW5cIik7XG4gICAgY29uc3QgcGFzdGluYUJhcnJ5ID0gbWFrZVBpYyhwYXN0aW5hKTtcbiAgICBpdGVtNC5hcHBlbmQodGl0bGU0LCBzdWJ0aXRsZTQsIHBhc3RpbmFCYXJyeSk7XG5cbiAgICBjb25zdCBpdGVtNSA9IG1ha2VFbChcImZ1bGwtaXRlbVwiKTtcbiAgICBjb25zdCB0aXRsZTUgPSBtYWtlRWwoXCJtZW51LXRpdGxlXCIsIFwiZGl2XCIsIFwiUGlja2xlXCIpO1xuICAgIGNvbnN0IHN1YnRpdGxlNSA9IG1ha2VFbChcIm1lbnUtc3ViLXRpdGxlXCIsIFwiZGl2XCIsXG4gICAgXCJCaWcgZmF0IGRlbGljaW91cyByZW5haXNzYW5jZS1zdHlsZSBwaWNrbGVcIik7XG4gICAgY29uc3QgcGlja2xlQmFycnkgPSBtYWtlUGljKHBpY2tsZSk7XG4gICAgaXRlbTUuYXBwZW5kKHRpdGxlNSwgc3VidGl0bGU1LCBwaWNrbGVCYXJyeSk7XG5cbiAgICBjb25zdCBpdGVtNiA9IG1ha2VFbChcImZ1bGwtaXRlbVwiKTtcbiAgICBjb25zdCB0aXRsZTYgPSBtYWtlRWwoXCJtZW51LXRpdGxlXCIsIFwiZGl2XCIsIFwiTWFyaW5hcmFcIik7XG4gICAgY29uc3Qgc3VidGl0bGU2PSBtYWtlRWwoXCJtZW51LXN1Yi10aXRsZVwiLCBcImRpdlwiLFxuICAgIFwiSnVzdCBzdHJhaWdodCB1cCBtYXJpbmFyYVwiKTtcbiAgICBjb25zdCBtYXJpbmFyYUJhcnJ5ID0gbWFrZVBpYyhtYXJpbmFyYSk7XG4gICAgaXRlbTYuYXBwZW5kKHRpdGxlNiwgc3VidGl0bGU2LCBtYXJpbmFyYUJhcnJ5KTtcbiAgICBcblxuXG5cblxuXG5cbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kKGJydW5jaCwgIGl0ZW0yLCBpdGVtMywgaXRlbTUsIGRpbm5lciwgaXRlbTEsIGl0ZW00LCBpdGVtNik7XG5cblxuICAgIFxuXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBtYWtlUGljKHNvdXJjZSkge1xuICAgIGNvbnN0IHBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIHBpYy5jbGFzc0xpc3QuYWRkKFwibWVudS1waWNcIik7XG4gICAgcGljLnNyYyA9IHNvdXJjZTtcbiAgICByZXR1cm4gcGljO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9