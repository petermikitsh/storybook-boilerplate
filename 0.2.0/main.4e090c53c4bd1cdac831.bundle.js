(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./.storybook/generated-entry.js":
/*!***************************************!*\
  !*** ./.storybook/generated-entry.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "../../node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);

              
              module._StorybookPreserveDecorators = true;

              Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["configure"])([__webpack_require__("./stories sync recursive ^\\.\\/(?:(?:(?!\\.)(?:(?:(?!(?:|\\/)\\.).)*?)\\/)?(?!\\.)(?=.)[^/]*?\\.stories\\.tsx\\/?)$")
              ], module);
            
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./.storybook/preview.tsx":
/*!********************************!*\
  !*** ./.storybook/preview.tsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "../../node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storybook-addon-jsx */ "../../node_modules/storybook-addon-jsx/lib/index.js");
/* harmony import */ var storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "../../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _storybook_addons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @storybook/addons */ "../../node_modules/@storybook/addons/dist/public_api.js");
/* harmony import */ var _storybook_addons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_storybook_addons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);








const cleanJSXString = jsxString => {
  let editedJsxString = jsxString; // Fix display name: e.g., "WithStyles(ForwardRef(Button))" => "Button"

  const matcher = /WithStyles\(ForwardRef\(([a-zA-Z]+)\)\)/g; // @ts-ignore

  const regExpIterator = editedJsxString.matchAll(matcher);
  let curr = regExpIterator.next();

  while (!curr.done) {
    const [findVal, replaceVal] = curr.value;
    editedJsxString = editedJsxString.replace(findVal, replaceVal);
    curr = regExpIterator.next();
  }

  return editedJsxString;
};

Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addParameters"])({
  jsx: {
    // @ts-ignore
    showFunctions: false,
    onBeforeRender: cleanJSXString
  }
});
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_1__["jsxDecorator"]);
const baseTheme = {
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(",")
  }
};
const lightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#00f"
    }
  },
  ...baseTheme
});
const darkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#000"
    }
  },
  ...baseTheme
});
const channel = _storybook_addons__WEBPACK_IMPORTED_MODULE_4___default.a.getChannel(); // create a component that uses the dark mode hook

const ThemeWrapper = props => {
  const [isDark, setDark] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    channel.on("DARK_MODE", setDark);
    return () => channel.off("DARK_MODE", setDark);
  }, [channel, setDark]);
  const theme = isDark ? darkTheme : lightTheme;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme
  }, props.children);
};

Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(renderStory => react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ThemeWrapper, null, renderStory()));

/***/ }),

/***/ "./stories sync recursive ^\\.\\/(?:(?:(?!\\.)(?:(?:(?!(?:|\\/)\\.).)*?)\\/)?(?!\\.)(?=.)[^/]*?\\.stories\\.tsx\\/?)$":
/*!********************************************************************************************************!*\
  !*** ./stories sync ^\.\/(?:(?:(?!\.)(?:(?:(?!(?:|\/)\.).)*?)\/)?(?!\.)(?=.)[^/]*?\.stories\.tsx\/?)$ ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0-Welcome.stories.tsx": "./stories/0-Welcome.stories.tsx",
	"./1-Button.stories.tsx": "./stories/1-Button.stories.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./stories sync recursive ^\\.\\/(?:(?:(?!\\.)(?:(?:(?!(?:|\\/)\\.).)*?)\\/)?(?!\\.)(?=.)[^/]*?\\.stories\\.tsx\\/?)$";

/***/ }),

/***/ "./stories/0-Welcome.stories.tsx":
/*!***************************************!*\
  !*** ./stories/0-Welcome.stories.tsx ***!
  \***************************************/
/*! exports provided: default, ToStorybook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToStorybook", function() { return ToStorybook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-links */ "../../node_modules/@storybook/addon-links/dist/index.js");
/* harmony import */ var _storybook_addon_links__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/react/demo */ "../../node_modules/@storybook/react/demo.js");
/* harmony import */ var _storybook_react_demo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Welcome',
  component: _storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__["Welcome"]
});
const ToStorybook = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__["Welcome"], {
  showApp: Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__["linkTo"])('Button')
});
ToStorybook.story = {
  name: 'to Storybook'
};

/***/ }),

/***/ "./stories/1-Button.stories.tsx":
/*!**************************************!*\
  !*** ./stories/1-Button.stories.tsx ***!
  \**************************************/
/*! exports provided: default, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-actions */ "../../node_modules/@storybook/addon-actions/dist/index.js");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../../node_modules/@material-ui/core/esm/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Button",
  component: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"]
});
const Text = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  variant: "contained",
  color: "primary",
  onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("clicked")
}, "Hello Button");

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi /Users/pmikitsh/git/storybook-version-example/node_modules/@storybook/core/dist/server/common/polyfills.js /Users/pmikitsh/git/storybook-version-example/node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/preview.tsx ./.storybook/generated-entry.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/pmikitsh/git/storybook-version-example/node_modules/@storybook/core/dist/server/common/polyfills.js */"../../node_modules/@storybook/core/dist/server/common/polyfills.js");
__webpack_require__(/*! /Users/pmikitsh/git/storybook-version-example/node_modules/@storybook/core/dist/server/preview/globals.js */"../../node_modules/@storybook/core/dist/server/preview/globals.js");
__webpack_require__(/*! /Users/pmikitsh/git/storybook-version-example/packages/storybook/.storybook/preview.tsx */"./.storybook/preview.tsx");
module.exports = __webpack_require__(/*! /Users/pmikitsh/git/storybook-version-example/packages/storybook/.storybook/generated-entry.js */"./.storybook/generated-entry.js");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main","vendors~main"]]]);
//# sourceMappingURL=main.4e090c53c4bd1cdac831.bundle.js.map