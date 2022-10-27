"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"baby\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n    font-style: normal;\n    font-weight: 400;\n}\n\n:root {\n    font-family: \"baby\";\n    --pink: #ffdbdb;\n    --blue: #cff1fb;\n    --purple: #d1d1f9;\n    --green: #d6fbe4;\n    --yellow: #fcfdcd;\n}\n\n\nbody {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--blue);\n    grid-template-rows: 70px 1fr;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.tab-container {\n    list-style: none;\n    display: flex;\n    gap: calc(8px + 2vw);\n    font-size: calc(1rem + 1vw);\n}\n\n.tab {\n    margin-top: 5vh;\n    padding: 16px 16px 10px;\n    border-radius: 50px 50px 0 0 ;\n    width: min(100px, 25vw);\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    padding-bottom: 20px;\n    margin-bottom: -20px;\n    transition: 0.3s;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.tab:hover {\n    transform: translate(0px, -20px);\n}\n\n.tab:active {\n    transform: translate(0px);\n    transition: 0s;\n\n}\n\n.tab:first-child {\n    background-color: var(--pink);\n}\n\n.tab:nth-child(2) {\n    background-color: var(--yellow);\n}\n\n.tab:nth-child(3) {\n    background-color: var(--green);\n}\n\n.content {\n    background-color: var(--purple);\n    z-index: 1;\n    box-shadow: 0px 0px 3px var(--purple);\n    display: flex;\n    justify-content: center;\n}\n\n.container {\n    margin: 5vh 10vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--yellow);\n    border-radius: 50px;\n    padding: 20px;\n    gap: 20px;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    max-width: 600px;\n}\n\n.title {\n    font-size: 3rem;\n    text-align: center;\n    width: 250px;\n}\n\n.sub-title {\n    text-align: right;\n}\n\n.barry-pic {\n    margin-top: 20px;\n    width: auto;\n    height: 400px;\n    border-radius: 50%;\n}\n\n.copy {\n    font-size: 1.5rem;\n    padding: 16px;\n    line-height: 2rem;\n}\n\n.hours,\n.location {\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.copy,\n.text,\n.menu-sub-title {\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n    text-align: center;\n    color: #555;\n\n}\n\n.text {\n    font-size: 1.2rem;\n}\n\n.hours-title,\n.loc-title {\n    margin: 30px 0 7px 0;\n    font-size: 2rem;\n}\n\n.mealTime {\n    font-size: 1.4rem;\n    color: #bdbdbd;\n    border-bottom: 3px dotted var(--purple);\n}\n\n.dinner {\n    margin-top: 30px;\n}\n\n.menu-pic {\n    height: 200px;\n    width: auto;\n    border-radius: 50%;\n}\n\n.menu-title,\n.message {\n    font-size: 2rem;\n    text-align: center;\n}\n\n\n.full-item {\n    width: 300px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin: 10px 0;\n}\n\n.menu-sub-title {\n    margin-bottom: 10px;\n}\n\n.contact-pic {\n    height: 250px;\n    width: auto;\n    border-radius: 50px;\n}\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB;0DACiE;IACjE,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,6BAA6B;IAC7B,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,oBAAoB;IACpB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;IACzB,cAAc;;AAElB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;IAC/B,UAAU;IACV,qCAAqC;IACrC,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;IAC/B,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,cAAc;IACd,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;;;IAGI,4EAA4E;IAC5E,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;;AAEf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,uCAAuC;AAC3C;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;IACf,kBAAkB;AACtB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: \"baby\";\n    src: url(\"./fonts/berkshireswash-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"./fonts/berkshireswash-regular-webfont.woff\") format(\"woff\");\n    font-style: normal;\n    font-weight: 400;\n}\n\n:root {\n    font-family: \"baby\";\n    --pink: #ffdbdb;\n    --blue: #cff1fb;\n    --purple: #d1d1f9;\n    --green: #d6fbe4;\n    --yellow: #fcfdcd;\n}\n\n\nbody {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--blue);\n    grid-template-rows: 70px 1fr;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.tab-container {\n    list-style: none;\n    display: flex;\n    gap: calc(8px + 2vw);\n    font-size: calc(1rem + 1vw);\n}\n\n.tab {\n    margin-top: 5vh;\n    padding: 16px 16px 10px;\n    border-radius: 50px 50px 0 0 ;\n    width: min(100px, 25vw);\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    padding-bottom: 20px;\n    margin-bottom: -20px;\n    transition: 0.3s;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.tab:hover {\n    transform: translate(0px, -20px);\n}\n\n.tab:active {\n    transform: translate(0px);\n    transition: 0s;\n\n}\n\n.tab:first-child {\n    background-color: var(--pink);\n}\n\n.tab:nth-child(2) {\n    background-color: var(--yellow);\n}\n\n.tab:nth-child(3) {\n    background-color: var(--green);\n}\n\n.content {\n    background-color: var(--purple);\n    z-index: 1;\n    box-shadow: 0px 0px 3px var(--purple);\n    display: flex;\n    justify-content: center;\n}\n\n.container {\n    margin: 5vh 10vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--yellow);\n    border-radius: 50px;\n    padding: 20px;\n    gap: 20px;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    max-width: 600px;\n}\n\n.title {\n    font-size: 3rem;\n    text-align: center;\n    width: 250px;\n}\n\n.sub-title {\n    text-align: right;\n}\n\n.barry-pic {\n    margin-top: 20px;\n    width: auto;\n    height: 400px;\n    border-radius: 50%;\n}\n\n.copy {\n    font-size: 1.5rem;\n    padding: 16px;\n    line-height: 2rem;\n}\n\n.hours,\n.location {\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.copy,\n.text,\n.menu-sub-title {\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n    text-align: center;\n    color: #555;\n\n}\n\n.text {\n    font-size: 1.2rem;\n}\n\n.hours-title,\n.loc-title {\n    margin: 30px 0 7px 0;\n    font-size: 2rem;\n}\n\n.mealTime {\n    font-size: 1.4rem;\n    color: #bdbdbd;\n    border-bottom: 3px dotted var(--purple);\n}\n\n.dinner {\n    margin-top: 30px;\n}\n\n.menu-pic {\n    height: 200px;\n    width: auto;\n    border-radius: 50%;\n}\n\n.menu-title,\n.message {\n    font-size: 2rem;\n    text-align: center;\n}\n\n\n.full-item {\n    width: 300px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin: 10px 0;\n}\n\n.menu-sub-title {\n    margin-bottom: 10px;\n}\n\n.contact-pic {\n    height: 250px;\n    width: auto;\n    border-radius: 50px;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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
    "They're organic and dog love them!");
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0IsaURBQU07O0FBRTVCLG1CQUFtQixpREFBTTtBQUN6QixtQkFBbUIsaURBQU07QUFDekI7O0FBRUEsa0JBQWtCLGlEQUFNO0FBQ3hCLGtCQUFrQixpREFBTTtBQUN4QixxQkFBcUIsaURBQU07QUFDM0I7QUFDQSxrQ0FBa0MsOENBQUc7QUFDckM7O0FBRUEsa0JBQWtCLGlEQUFNO0FBQ3hCLG1CQUFtQixpREFBTTtBQUN6QixzQkFBc0IsaURBQU07QUFDNUI7QUFDQSxpQ0FBaUMsOENBQVE7QUFDekM7O0FBRUEsa0JBQWtCLGlEQUFNO0FBQ3hCLG1CQUFtQixpREFBTTtBQUN6QixzQkFBc0IsaURBQU07QUFDNUI7QUFDQSwrQkFBK0IsNENBQUs7QUFDcEM7O0FBRUEsa0JBQWtCLGlEQUFNO0FBQ3hCLG1CQUFtQixpREFBTTtBQUN6QixzQkFBc0IsaURBQU07QUFDNUI7QUFDQSxpQ0FBaUMsNkNBQU87QUFDeEM7O0FBRUEsa0JBQWtCLGlEQUFNO0FBQ3hCLG1CQUFtQixpREFBTTtBQUN6QixzQkFBc0IsaURBQU07QUFDNUI7QUFDQSxnQ0FBZ0MsNENBQU07QUFDdEM7O0FBRUEsa0JBQWtCLGlEQUFNO0FBQ3hCLG1CQUFtQixpREFBTTtBQUN6QixxQkFBcUIsaURBQU07QUFDM0I7QUFDQSxrQ0FBa0MsOENBQVE7QUFDMUM7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvYmVya3NoaXJlc3dhc2gtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9iZXJrc2hpcmVzd2FzaC1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJiYWJ5XFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYmFieVxcXCI7XFxuICAgIC0tcGluazogI2ZmZGJkYjtcXG4gICAgLS1ibHVlOiAjY2ZmMWZiO1xcbiAgICAtLXB1cnBsZTogI2QxZDFmOTtcXG4gICAgLS1ncmVlbjogI2Q2ZmJlNDtcXG4gICAgLS15ZWxsb3c6ICNmY2ZkY2Q7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhYi1jb250YWluZXIge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IGNhbGMoOHB4ICsgMnZ3KTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxdncpO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDAgMCA7XFxuICAgIHdpZHRoOiBtaW4oMTAwcHgsIDI1dncpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yMHB4KTtcXG59XFxuXFxuLnRhYjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwcztcXG5cXG59XFxuXFxuLnRhYjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbn1cXG5cXG4udGFiOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxufVxcblxcbi50YWI6bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHZhcigtLXB1cnBsZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA1dmggMTB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5zdWItdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmJhcnJ5LXBpYyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jb3B5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uaG91cnMsXFxuLmxvY2F0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29weSxcXG4udGV4dCxcXG4ubWVudS1zdWItdGl0bGUge1xcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNTU1O1xcblxcbn1cXG5cXG4udGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaG91cnMtdGl0bGUsXFxuLmxvYy10aXRsZSB7XFxuICAgIG1hcmdpbjogMzBweCAwIDdweCAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZWFsVGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogI2JkYmRiZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdHRlZCB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4uZGlubmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLm1lbnUtcGljIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1lbnUtdGl0bGUsXFxuLm1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLmZ1bGwtaXRlbSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubWVudS1zdWItdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1waWMge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQjswREFDaUU7SUFDakUsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTO0lBQ1QsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTs7O0lBR0ksNEVBQTRFO0lBQzVFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJiYWJ5XFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvYmVya3NoaXJlc3dhc2gtcmVndWxhci13ZWJmb250LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4vZm9udHMvYmVya3NoaXJlc3dhc2gtcmVndWxhci13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYmFieVxcXCI7XFxuICAgIC0tcGluazogI2ZmZGJkYjtcXG4gICAgLS1ibHVlOiAjY2ZmMWZiO1xcbiAgICAtLXB1cnBsZTogI2QxZDFmOTtcXG4gICAgLS1ncmVlbjogI2Q2ZmJlNDtcXG4gICAgLS15ZWxsb3c6ICNmY2ZkY2Q7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhYi1jb250YWluZXIge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IGNhbGMoOHB4ICsgMnZ3KTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxdncpO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDAgMCA7XFxuICAgIHdpZHRoOiBtaW4oMTAwcHgsIDI1dncpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yMHB4KTtcXG59XFxuXFxuLnRhYjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwcztcXG5cXG59XFxuXFxuLnRhYjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbn1cXG5cXG4udGFiOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxufVxcblxcbi50YWI6bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHZhcigtLXB1cnBsZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA1dmggMTB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5zdWItdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmJhcnJ5LXBpYyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jb3B5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uaG91cnMsXFxuLmxvY2F0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29weSxcXG4udGV4dCxcXG4ubWVudS1zdWItdGl0bGUge1xcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNTU1O1xcblxcbn1cXG5cXG4udGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaG91cnMtdGl0bGUsXFxuLmxvYy10aXRsZSB7XFxuICAgIG1hcmdpbjogMzBweCAwIDdweCAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZWFsVGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogI2JkYmRiZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdHRlZCB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4uZGlubmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLm1lbnUtcGljIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1lbnUtdGl0bGUsXFxuLm1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLmZ1bGwtaXRlbSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ubWVudS1zdWItdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1waWMge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG1ha2VFbCB9IGZyb20gXCIuL2luZGV4LmpzXCJcbmltcG9ydCBwaWMgZnJvbSAnLi9pbWcvSU1HXzUwNDkuanBnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWwoXCJjb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IG1ha2VFbCgpO1xuICAgIGNvbnN0IHRpdGxlID0gbWFrZUVsKFwidGl0bGVcIiwgXCJkaXZcIiwgXCJCYXJyeSdzXCIpO1xuICAgIGNvbnN0IHN1YnRpdGxlID0gbWFrZUVsKCdzdWItdGl0bGUnLCBcImRpdlwiLCBcbiBcIkl0YWxpYW4gUmVzdGF1cmFudFxcblNpbmNlIDIwMjJcIik7XG5cbiAgICBjb25zdCBiYXJyeSA9IG5ldyBJbWFnZSgpO1xuICAgIGJhcnJ5LmNsYXNzTGlzdC5hZGQoXCJiYXJyeS1waWNcIik7XG4gICAgYmFycnkuc3JjID0gcGljO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gICAgY29uc3QgY29weSA9IG1ha2VFbChcImNvcHlcIik7XG4gICAgY29weS5pbm5lclRleHQgPSBcIlBlb3BsZSBzYXkgYSBiYWJ5IGNhbid0IHJ1biBhIHJlc3RhdXJhbnRcXG5XZWxsLCB0aGV5J3ZlIG5ldmVyIGJlZW4gdG8gQmFycnknc1wiO1xuXG4gICAgY29uc3QgaG91cnMgPSBtYWtlRWwoXCJob3Vyc1wiKTtcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gbWFrZUVsKFwiaG91cnMtdGl0bGVcIiwgXCJkaXZcIiwgXCJIb3Vyc1wiKTtcbiAgICBjb25zdCBob3Vyc1RleHQgPSBtYWtlRWwoXCJ0ZXh0XCIsIFwiZGl2XCIpXG4gICAgaG91cnNUZXh0LmlubmVyVGV4dCA9IFwiTW9uOiAgIFRCRFxcblR1ZXM6ICAgVEJEXFxuV2VkOiAgIFRCRFxcblRodXJzOiAgIFRCRFxcbklESyB3ZSdsbCBjYWxsIHlvdVwiO1xuICAgIGhvdXJzLmFwcGVuZChob3Vyc1RpdGxlLCBob3Vyc1RleHQpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBtYWtlRWwoXCJsb2NhdGlvblwiKTtcbiAgICBjb25zdCBsb2NUaXRsZSA9IG1ha2VFbChcImxvYy10aXRsZVwiLCBcImRpdlwiLCBcIkxvY2F0aW9uXCIpO1xuICAgIGNvbnN0IGxvY1RleHQgPSBtYWtlRWwoXCJ0ZXh0XCIsIFwiZGl2XCIsIFwiMTAxIENvY29tZWxvbiBBdmUsIEJhYnkgU2hhcmtzdmlsbGVcIik7XG4gICAgbG9jYXRpb24uYXBwZW5kKGxvY1RpdGxlLCBsb2NUZXh0KTtcblxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGVDb250YWluZXIsIGJhcnJ5LCBjb3B5LCBob3VycywgbG9jYXRpb24pO1xuXG5cbiAgICBcblxuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJpbXBvcnQgeyBtYWtlRWwgfSBmcm9tIFwiLi9pbmRleC5qc1wiXG5pbXBvcnQgY29udGFjdEltZyBmcm9tIFwiLi9pbWcvY29udGFjdC5qcGdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWwoXCJjb250YWluZXJcIik7XG4gICAgY29uc3QgYkFuZEIgPSBuZXcgSW1hZ2UoKTtcbiAgICBiQW5kQi5zcmMgPSBjb250YWN0SW1nO1xuICAgIGJBbmRCLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXBpY1wiKTtcbiAgICBjb25zdCBtZXNzYWdlID0gbWFrZUVsKFwibWVzc2FnZVwiLCBcImRpdlwiLCBcbiAgICBcIkhleSBCdXN0ZXIsIHRoYXQncyBwcml2YXRlIVwiKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoYkFuZEIsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmZ1bmN0aW9uIG1ha2VFbChjbGFzc05hbWUsIHR5cGUgPSBcImRpdlwiLCB0ZXh0ID0gJycpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGhlYWRlciA9IG1ha2VFbChcImhlYWRlclwiKTtcbmNvbnN0IHRhYkNvbnRhaW5lciA9IG1ha2VFbChcInRhYi1jb250YWluZXJcIiwgXCJ1bFwiKVxuY29uc3QgaG9tZVRhYiA9IG1ha2VFbChcInRhYlwiLCBcImxpXCIsIFwiSG9tZVwiKTtcbmNvbnN0IG1lbnVUYWIgPSBtYWtlRWwoXCJ0YWJcIiwgXCJsaVwiLCBcIk1lbnVcIik7XG5jb25zdCBjb250YWN0VGFiID0gbWFrZUVsKFwidGFiXCIsIFwibGlcIiwgXCJDb250YWN0XCIpO1xuY29uc3QgY29udGVudCA9IG1ha2VFbChcImNvbnRlbnRcIik7XG5cbnRhYkNvbnRhaW5lci5hcHBlbmQoaG9tZVRhYiwgbWVudVRhYiwgY29udGFjdFRhYik7XG5oZWFkZXIuYXBwZW5kKHRhYkNvbnRhaW5lcik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG5cbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG59KVxuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbn0pXG5cbmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xufSlcblxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5leHBvcnQgeyBtYWtlRWwgfSIsImltcG9ydCB7IG1ha2VFbCB9IGZyb20gXCIuL2luZGV4LmpzXCJcbmltcG9ydCBwaWMgZnJvbSAnLi9pbWcvSU1HXzU4MjUuanBnJ1xuaW1wb3J0IHBhbmNha2VzIGZyb20gXCIuL2ltZy9wYW5jYWtlcy5qcGdcIlxuaW1wb3J0IHdhZmVyIGZyb20gXCIuL2ltZy93YWZlcnMuanBnXCJcbmltcG9ydCBwYXN0aW5hIGZyb20gXCIuL2ltZy9wYXN0aW5hLmpwZ1wiXG5pbXBvcnQgcGlja2xlIGZyb20gXCIuL2ltZy9waWNrbGUuanBnXCJcbmltcG9ydCBtYXJpbmFyYSBmcm9tIFwiLi9pbWcvbWFyaW5hcmEuanBnXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWwoXCJjb250YWluZXJcIik7XG5cbiAgICBjb25zdCBicnVuY2ggPSBtYWtlRWwoXCJtZWFsVGltZVwiLCBcImRpdlwiLCBcIkJydW5jaFwiKVxuICAgIGNvbnN0IGRpbm5lciA9IG1ha2VFbChcIm1lYWxUaW1lXCIsIFwiZGl2XCIsIFwiRGlubmVyXCIpO1xuICAgIGRpbm5lci5jbGFzc0xpc3QuYWRkKFwiZGlubmVyXCIpO1xuXG4gICAgY29uc3QgaXRlbTEgPSBtYWtlRWwoXCJmdWxsLWl0ZW1cIik7XG4gICAgY29uc3QgdGl0bGUgPSBtYWtlRWwoXCJtZW51LXRpdGxlXCIsIFwiZGl2XCIsIFwiTWVhdGJhbGxzXCIpO1xuICAgIGNvbnN0IHN1YnRpdGxlID0gbWFrZUVsKCdtZW51LXN1Yi10aXRsZScsIFwiZGl2XCIsIFxuIFwiQ2hlZiBCYXJyeSdzIGZhbW91cyBob21lLXN0eWxlIG1lYXRiYWxsc1wiKTtcbiAgICBjb25zdCBtZWF0YmFsbEJhcnJ5ID0gbWFrZVBpYyhwaWMpO1xuICAgIGl0ZW0xLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUsIG1lYXRiYWxsQmFycnkpO1xuXG4gICAgY29uc3QgaXRlbTIgPSBtYWtlRWwoXCJmdWxsLWl0ZW1cIik7XG4gICAgY29uc3QgdGl0bGUyID0gbWFrZUVsKFwibWVudS10aXRsZVwiLCBcImRpdlwiLCBcIlBhbmNha2VzXCIpO1xuICAgIGNvbnN0IHN1YnRpdGxlMiA9IG1ha2VFbChcIm1lbnUtc3ViLXRpdGxlXCIsIFwiZGl2XCIsXG4gICAgXCJNaW5pLXBhbmNha2VzLCBtYXBsZSB2ZWdnaWUgc2F1c2FnZSwgYW5kIHJvYXN0ZWQgc3dlZXQgcG90YXRvZXNcIik7XG4gICAgY29uc3QgcGFuY2FrZUJhcnJ5ID0gbWFrZVBpYyhwYW5jYWtlcyk7XG4gICAgaXRlbTIuYXBwZW5kKHRpdGxlMiwgc3VidGl0bGUyLCBwYW5jYWtlQmFycnkpO1xuXG4gICAgY29uc3QgaXRlbTMgPSBtYWtlRWwoXCJmdWxsLWl0ZW1cIik7XG4gICAgY29uc3QgdGl0bGUzID0gbWFrZUVsKFwibWVudS10aXRsZVwiLCBcImRpdlwiLCBcIldhZmVyc1wiKTtcbiAgICBjb25zdCBzdWJ0aXRsZTMgPSBtYWtlRWwoXCJtZW51LXN1Yi10aXRsZVwiLCBcImRpdlwiLFxuICAgIFwiVGhleSdyZSBvcmdhbmljIGFuZCBkb2cgbG92ZSB0aGVtIVwiKTtcbiAgICBjb25zdCB3YWZlckJhcnJ5ID0gbWFrZVBpYyh3YWZlcik7XG4gICAgaXRlbTMuYXBwZW5kKHRpdGxlMywgc3VidGl0bGUzLCB3YWZlckJhcnJ5KTtcblxuICAgIGNvbnN0IGl0ZW00ID0gbWFrZUVsKFwiZnVsbC1pdGVtXCIpO1xuICAgIGNvbnN0IHRpdGxlNCA9IG1ha2VFbChcIm1lbnUtdGl0bGVcIiwgXCJkaXZcIiwgXCJQYXN0aW5hXCIpO1xuICAgIGNvbnN0IHN1YnRpdGxlNCA9IG1ha2VFbChcIm1lbnUtc3ViLXRpdGxlXCIsIFwiZGl2XCIsXG4gICAgXCJTbWFsbCBzaGFwZWQgcGFzdGEgdGhhdCBmaXRzIHBlcmZlY3RseSBvbiB5b3VyIGNoaW5cIik7XG4gICAgY29uc3QgcGFzdGluYUJhcnJ5ID0gbWFrZVBpYyhwYXN0aW5hKTtcbiAgICBpdGVtNC5hcHBlbmQodGl0bGU0LCBzdWJ0aXRsZTQsIHBhc3RpbmFCYXJyeSk7XG5cbiAgICBjb25zdCBpdGVtNSA9IG1ha2VFbChcImZ1bGwtaXRlbVwiKTtcbiAgICBjb25zdCB0aXRsZTUgPSBtYWtlRWwoXCJtZW51LXRpdGxlXCIsIFwiZGl2XCIsIFwiUGlja2xlXCIpO1xuICAgIGNvbnN0IHN1YnRpdGxlNSA9IG1ha2VFbChcIm1lbnUtc3ViLXRpdGxlXCIsIFwiZGl2XCIsXG4gICAgXCJCaWcgZmF0IGRlbGljaW91cyByZW5haXNzYW5jZS1zdHlsZSBwaWNrbGVcIik7XG4gICAgY29uc3QgcGlja2xlQmFycnkgPSBtYWtlUGljKHBpY2tsZSk7XG4gICAgaXRlbTUuYXBwZW5kKHRpdGxlNSwgc3VidGl0bGU1LCBwaWNrbGVCYXJyeSk7XG5cbiAgICBjb25zdCBpdGVtNiA9IG1ha2VFbChcImZ1bGwtaXRlbVwiKTtcbiAgICBjb25zdCB0aXRsZTYgPSBtYWtlRWwoXCJtZW51LXRpdGxlXCIsIFwiZGl2XCIsIFwiTWFyaW5hcmFcIik7XG4gICAgY29uc3Qgc3VidGl0bGU2PSBtYWtlRWwoXCJtZW51LXN1Yi10aXRsZVwiLCBcImRpdlwiLFxuICAgIFwiSnVzdCBzdHJhaWdodCB1cCBtYXJpbmFyYVwiKTtcbiAgICBjb25zdCBtYXJpbmFyYUJhcnJ5ID0gbWFrZVBpYyhtYXJpbmFyYSk7XG4gICAgaXRlbTYuYXBwZW5kKHRpdGxlNiwgc3VidGl0bGU2LCBtYXJpbmFyYUJhcnJ5KTtcbiAgICBcblxuXG5cblxuXG5cbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kKGJydW5jaCwgIGl0ZW0yLCBpdGVtMywgaXRlbTUsIGRpbm5lciwgaXRlbTEsIGl0ZW00LCBpdGVtNik7XG5cblxuICAgIFxuXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBtYWtlUGljKHNvdXJjZSkge1xuICAgIGNvbnN0IHBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIHBpYy5jbGFzc0xpc3QuYWRkKFwibWVudS1waWNcIik7XG4gICAgcGljLnNyYyA9IHNvdXJjZTtcbiAgICByZXR1cm4gcGljO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9