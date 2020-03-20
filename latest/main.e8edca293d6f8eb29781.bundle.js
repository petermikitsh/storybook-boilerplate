(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/nested-object-assign/lib sync recursive ^\\.\\/.*$":
/*!*********************************************************************************************************!*\
  !*** /Users/pmikitsh/git/storybook-version-example/node_modules/nested-object-assign/lib sync ^\.\/.*$ ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./nestedObjectAssign": "../../node_modules/nested-object-assign/lib/nestedObjectAssign.js",
	"./nestedObjectAssign.js": "../../node_modules/nested-object-assign/lib/nestedObjectAssign.js"
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
webpackContext.id = "../../node_modules/nested-object-assign/lib sync recursive ^\\.\\/.*$";

/***/ }),

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! @storybook/react */ "../../node_modules/@storybook/react/dist/client/index.js");
var storybook_addon_jsx_1 = __webpack_require__(/*! storybook-addon-jsx */ "../../node_modules/storybook-addon-jsx/lib/index.js");
var react_2 = __webpack_require__(/*! @storybook/react */ "../../node_modules/@storybook/react/dist/client/index.js");
var styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "../../node_modules/@material-ui/core/esm/styles/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "../../node_modules/@material-ui/core/esm/index.js");
var addons_1 = __importDefault(__webpack_require__(/*! @storybook/addons */ "../../node_modules/@storybook/addons/dist/public_api.js"));
var react_3 = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
var storybook_addon_react_docgen_1 = __webpack_require__(/*! storybook-addon-react-docgen */ "../../node_modules/storybook-addon-react-docgen/dist/index.js");
var storybook_addon_smart_knobs_1 = __webpack_require__(/*! storybook-addon-smart-knobs */ "../../node_modules/storybook-addon-smart-knobs/dist/index.js");
var addon_knobs_1 = __webpack_require__(/*! @storybook/addon-knobs */ "../../node_modules/@storybook/addon-knobs/dist/index.js");
react_1.addDecorator(storybook_addon_smart_knobs_1.withSmartKnobs());
react_1.addDecorator(addon_knobs_1.withKnobs);
react_1.addDecorator(storybook_addon_react_docgen_1.withPropsTable);
var cleanJSXString = function (jsxString) {
    var editedJsxString = jsxString;
    // Fix display name: e.g., "WithStyles(ForwardRef(Button))" => "Button"
    var matcher = /WithStyles\(ForwardRef\(([a-zA-Z]+)\)\)/g;
    // @ts-ignore
    var regExpIterator = editedJsxString.matchAll(matcher);
    var curr = regExpIterator.next();
    while (!curr.done) {
        var _a = curr.value, findVal = _a[0], replaceVal = _a[1];
        editedJsxString = editedJsxString.replace(findVal, replaceVal);
        curr = regExpIterator.next();
    }
    return editedJsxString;
};
react_2.addParameters({
    jsx: {
        // @ts-ignore
        showFunctions: false,
        onBeforeRender: cleanJSXString,
        filterProps: function (val) {
            return val !== undefined && typeof val !== "function";
        }
    }
});
react_1.addDecorator(storybook_addon_jsx_1.jsxDecorator);
var baseTheme = {
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(",")
    }
};
var lightTheme = styles_1.createMuiTheme(__assign({ palette: {
        primary: {
            main: "#00f"
        }
    } }, baseTheme));
var darkTheme = styles_1.createMuiTheme(__assign({ palette: {
        primary: {
            main: "#000"
        }
    } }, baseTheme));
var channel = addons_1.default.getChannel();
// create a component that uses the dark mode hook
var ThemeWrapper = function (props) {
    var _a = react_3.useState(false), isDark = _a[0], setDark = _a[1];
    react_3.useEffect(function () {
        channel.on("DARK_MODE", setDark);
        return function () { return channel.off("DARK_MODE", setDark); };
    }, [channel, setDark]);
    var theme = isDark ? darkTheme : lightTheme;
    return react_3.default.createElement(core_1.ThemeProvider, { theme: theme }, props.children);
};
react_1.addDecorator(function (renderStory) { return react_3.default.createElement(ThemeWrapper, null, renderStory()); });


/***/ }),

/***/ "./components/Button.tsx":
/*!*******************************!*\
  !*** ./components/Button.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "../../node_modules/@material-ui/core/esm/index.js");
exports.Button = function (props) { return React.createElement(core_1.Button, __assign({}, props)); };
try {
    // @ts-ignore
    exports.Button.displayName = "Button";
    // @ts-ignore
    exports.Button.__docgenInfo = { "description": "", "displayName": "Button", "props": { "action": { "defaultValue": null, "description": "", "name": "action", "required": false, "type": { "name": "Ref<ButtonBaseActions>" } }, "buttonRef": { "defaultValue": null, "description": "Prefer `ref` instead.", "name": "buttonRef", "required": false, "type": { "name": "Ref<unknown>" } }, "centerRipple": { "defaultValue": null, "description": "", "name": "centerRipple", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "disableRipple": { "defaultValue": null, "description": "", "name": "disableRipple", "required": false, "type": { "name": "boolean" } }, "disableTouchRipple": { "defaultValue": null, "description": "", "name": "disableTouchRipple", "required": false, "type": { "name": "boolean" } }, "focusRipple": { "defaultValue": null, "description": "", "name": "focusRipple", "required": false, "type": { "name": "boolean" } }, "focusVisibleClassName": { "defaultValue": null, "description": "", "name": "focusVisibleClassName", "required": false, "type": { "name": "string" } }, "onFocusVisible": { "defaultValue": null, "description": "", "name": "onFocusVisible", "required": false, "type": { "name": "(event: FocusEvent<any>) => void" } }, "TouchRippleProps": { "defaultValue": null, "description": "", "name": "TouchRippleProps", "required": false, "type": { "name": "Partial<TouchRippleProps>" } }, "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"inherit\"" }, { "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"default\"" }] } }, "disableElevation": { "defaultValue": null, "description": "", "name": "disableElevation", "required": false, "type": { "name": "boolean" } }, "disableFocusRipple": { "defaultValue": null, "description": "", "name": "disableFocusRipple", "required": false, "type": { "name": "boolean" } }, "endIcon": { "defaultValue": null, "description": "", "name": "endIcon", "required": false, "type": { "name": "ReactNode" } }, "fullWidth": { "defaultValue": null, "description": "", "name": "fullWidth", "required": false, "type": { "name": "boolean" } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "size": { "defaultValue": null, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"small\"" }, { "value": "\"medium\"" }, { "value": "\"large\"" }] } }, "startIcon": { "defaultValue": null, "description": "", "name": "startIcon", "required": false, "type": { "name": "ReactNode" } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"text\"" }, { "value": "\"outlined\"" }, { "value": "\"contained\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "classes": { "defaultValue": null, "description": "Override or extend the styles applied to the component.", "name": "classes", "required": false, "type": { "name": "Partial<Record<ButtonClassKey, string>>" } }, "innerRef": { "defaultValue": null, "description": "", "name": "innerRef", "required": false, "type": { "name": "Ref<any>" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLButtonElement) => void) | RefObject<HTMLButtonElement>" } }, "key": { "defaultValue": null, "description": "", "name": "key", "required": false, "type": { "name": "ReactText" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["components/Button.tsx#Button"] = { docgenInfo: exports.Button.__docgenInfo, name: "Button", path: "components/Button.tsx#Button" };
}
catch (__react_docgen_typescript_loader_error) { }


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
var addon_links_1 = __webpack_require__(/*! @storybook/addon-links */ "../../node_modules/@storybook/addon-links/dist/index.js");
var demo_1 = __webpack_require__(/*! @storybook/react/demo */ "../../node_modules/@storybook/react/demo.js");
exports.default = {
    title: 'Welcome',
    component: demo_1.Welcome,
};
exports.ToStorybook = function () { return react_1.default.createElement(demo_1.Welcome, { showApp: addon_links_1.linkTo('Button') }); };
exports.ToStorybook.story = {
    name: 'to Storybook',
};


/***/ }),

/***/ "./stories/1-Button.stories.tsx":
/*!**************************************!*\
  !*** ./stories/1-Button.stories.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
var addon_actions_1 = __webpack_require__(/*! @storybook/addon-actions */ "../../node_modules/@storybook/addon-actions/dist/index.js");
var Button_1 = __webpack_require__(/*! ../components/Button */ "./components/Button.tsx");
exports.default = {
    title: "Button",
    component: Button_1.Button
};
exports.Text = function () { return (React.createElement(Button_1.Button, { variant: "contained", color: "primary", onClick: addon_actions_1.action("clicked") }, "Hello Button")); };


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
//# sourceMappingURL=main.e8edca293d6f8eb29781.bundle.js.map