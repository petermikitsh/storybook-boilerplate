(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/nested-object-assign/lib sync recursive ^\\.\\/.*$":
/*!*****************************************************************************************************!*\
  !*** /Users/pmikitsh/git/storybook-boilerplate/node_modules/nested-object-assign/lib sync ^\.\/.*$ ***!
  \*****************************************************************************************************/
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

/***/ "../components/dist/Button/index.js":
/*!******************************************!*\
  !*** ../components/dist/Button/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _core = __webpack_require__(/*! @material-ui/core */ "../../node_modules/@material-ui/core/esm/index.js");

const Button = props => /*#__PURE__*/React.createElement(_core.Button, props);

var _default = Button;
exports.default = _default;

try {
  Button.displayName = "Button";
  Button.__docgenInfo = {
    description: "",
    displayName: "Button",
    props: {
      "action": {
        "defaultValue": null,
        "description": "",
        "name": "action",
        "required": false,
        "type": {
          "name": "Ref<ButtonBaseActions>",
          "raw": null,
          "value": null
        }
      },
      "buttonRef": {
        "defaultValue": null,
        "description": "Prefer `ref` instead.",
        "name": "buttonRef",
        "required": false,
        "type": {
          "name": "Ref<unknown>",
          "raw": null,
          "value": null
        }
      },
      "centerRipple": {
        "defaultValue": null,
        "description": "",
        "name": "centerRipple",
        "required": false,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      },
      "disableRipple": {
        "defaultValue": null,
        "description": "",
        "name": "disableRipple",
        "required": false,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      },
      "disableTouchRipple": {
        "defaultValue": null,
        "description": "",
        "name": "disableTouchRipple",
        "required": false,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      },
      "focusRipple": {
        "defaultValue": null,
        "description": "",
        "name": "focusRipple",
        "required": false,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      },
      "focusVisibleClassName": {
        "defaultValue": null,
        "description": "",
        "name": "focusVisibleClassName",
        "required": false,
        "type": {
          "name": "string",
          "raw": null,
          "value": null
        }
      },
      "onFocusVisible": {
        "defaultValue": null,
        "description": "",
        "name": "onFocusVisible",
        "required": false,
        "type": {
          "name": "(event: FocusEvent<any>) => void",
          "raw": null,
          "value": null
        }
      },
      "TouchRippleProps": {
        "defaultValue": null,
        "description": "",
        "name": "TouchRippleProps",
        "required": false,
        "type": {
          "name": "Partial<TouchRippleProps>",
          "raw": null,
          "value": null
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "enum",
          "raw": "Color",
          "value": [{
            "value": "\"inherit\""
          }, {
            "value": "\"primary\""
          }, {
            "value": "\"secondary\""
          }, {
            "value": "\"default\""
          }]
        }
      },
      "disableElevation": {
        "defaultValue": null,
        "description": "",
        "name": "disableElevation",
        "required": false,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      },
      "disableFocusRipple": {
        "defaultValue": null,
        "description": "",
        "name": "disableFocusRipple",
        "required": false,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      },
      "endIcon": {
        "defaultValue": null,
        "description": "",
        "name": "endIcon",
        "required": false,
        "type": {
          "name": "ReactNode",
          "raw": null,
          "value": null
        }
      },
      "fullWidth": {
        "defaultValue": null,
        "description": "",
        "name": "fullWidth",
        "required": false,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      },
      "href": {
        "defaultValue": null,
        "description": "",
        "name": "href",
        "required": false,
        "type": {
          "name": "string",
          "raw": null,
          "value": null
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "enum",
          "raw": "\"small\" | \"medium\" | \"large\"",
          "value": [{
            "value": "\"small\""
          }, {
            "value": "\"medium\""
          }, {
            "value": "\"large\""
          }]
        }
      },
      "startIcon": {
        "defaultValue": null,
        "description": "",
        "name": "startIcon",
        "required": false,
        "type": {
          "name": "ReactNode",
          "raw": null,
          "value": null
        }
      },
      "variant": {
        "defaultValue": null,
        "description": "",
        "name": "variant",
        "required": false,
        "type": {
          "name": "enum",
          "raw": "\"text\" | \"outlined\" | \"contained\"",
          "value": [{
            "value": "\"text\""
          }, {
            "value": "\"outlined\""
          }, {
            "value": "\"contained\""
          }]
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string",
          "raw": null,
          "value": null
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties",
          "raw": null,
          "value": null
        }
      },
      "classes": {
        "defaultValue": null,
        "description": "Override or extend the styles applied to the component.",
        "name": "classes",
        "required": false,
        "type": {
          "name": "Partial<Record<ButtonClassKey, string>>",
          "raw": null,
          "value": null
        }
      },
      "innerRef": {
        "defaultValue": null,
        "description": "",
        "name": "innerRef",
        "required": false,
        "type": {
          "name": "Ref<any>",
          "raw": null,
          "value": null
        }
      },
      "ref": {
        "defaultValue": null,
        "description": "",
        "name": "ref",
        "required": false,
        "type": {
          "name": "((instance: HTMLButtonElement) => void) | RefObject<HTMLButtonElement>",
          "raw": null,
          "value": null
        }
      },
      "key": {
        "defaultValue": null,
        "description": "",
        "name": "key",
        "required": false,
        "type": {
          "name": "ReactText",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../components/dist/index.js":
/*!***********************************!*\
  !*** ../components/dist/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button.default;
  }
});

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "../components/dist/Button/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.storybook/generated-stories-entry.js":
/*!***********************************************!*\
  !*** ./.storybook/generated-stories-entry.js ***!
  \***********************************************/
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
/* harmony import */ var storybook_addon_react_docgen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! storybook-addon-react-docgen */ "../../node_modules/storybook-addon-react-docgen/dist/index.js");
/* harmony import */ var storybook_addon_react_docgen__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(storybook_addon_react_docgen__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var storybook_addon_smart_knobs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! storybook-addon-smart-knobs */ "../../node_modules/storybook-addon-smart-knobs/dist/index.js");
/* harmony import */ var storybook_addon_smart_knobs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(storybook_addon_smart_knobs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @storybook/addon-knobs */ "../../node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__);










Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(Object(storybook_addon_smart_knobs__WEBPACK_IMPORTED_MODULE_7__["withSmartKnobs"])());
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__["withKnobs"]);
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(storybook_addon_react_docgen__WEBPACK_IMPORTED_MODULE_6__["withPropsTable"]);

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
    onBeforeRender: cleanJSXString,
    filterProps: val => {
      return val !== undefined && typeof val !== "function";
    }
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme
  }, props.children);
};

Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(renderStory => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ThemeWrapper, null, renderStory()));

/***/ }),

/***/ "./.storybook/preview.tsx-generated-config-entry.js":
/*!**********************************************************!*\
  !*** ./.storybook/preview.tsx-generated-config-entry.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storybook_client_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/client-api */ "../../node_modules/@storybook/client-api/dist/index.js");
/* harmony import */ var _storybook_client_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/client-logger */ "../../node_modules/@storybook/client-logger/dist/index.js");
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_client_logger__WEBPACK_IMPORTED_MODULE_1__);

        
        

        const { decorators, parameters, parameterEnhancers, globalArgs, globalArgTypes, args, argTypes } = __webpack_require__(/*! ./.storybook/preview.tsx */ "./.storybook/preview.tsx");

        if(args || argTypes) _storybook_client_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('Invalid args/argTypes in config, ignoring.', JSON.stringify({ args, argTypes }));
        if (decorators) decorators.forEach(decorator => Object(_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(decorator));
        if (parameters || globalArgs || globalArgTypes) Object(_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__["addParameters"])(Object.assign({}, parameters, { globalArgs, globalArgTypes }));
        if (parameterEnhancers) parameterEnhancers.forEach(enhancer => Object(_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__["addParameterEnhancer"])(enhancer));
      

/***/ }),

/***/ "./.storybook/storybook-init-framework-entry.js":
/*!******************************************************!*\
  !*** ./.storybook/storybook-init-framework-entry.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "../../node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);


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
const ToStorybook = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__["Welcome"], {
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
/* harmony import */ var _demo_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/components */ "../components/dist/index.js");
/* harmony import */ var _demo_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_demo_components__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Button",
  component: _demo_components__WEBPACK_IMPORTED_MODULE_2__["Button"]
});
const Text = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_demo_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  variant: "contained",
  color: "primary",
  onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("clicked")
}, "Hello Button");

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi /Users/pmikitsh/git/storybook-boilerplate/node_modules/@storybook/core/dist/server/common/polyfills.js /Users/pmikitsh/git/storybook-boilerplate/node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js /Users/pmikitsh/git/storybook-boilerplate/node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js /Users/pmikitsh/git/storybook-boilerplate/node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./.storybook/preview.tsx-generated-config-entry.js ./.storybook/generated-stories-entry.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/pmikitsh/git/storybook-boilerplate/node_modules/@storybook/core/dist/server/common/polyfills.js */"../../node_modules/@storybook/core/dist/server/common/polyfills.js");
__webpack_require__(/*! /Users/pmikitsh/git/storybook-boilerplate/node_modules/@storybook/core/dist/server/preview/globals.js */"../../node_modules/@storybook/core/dist/server/preview/globals.js");
__webpack_require__(/*! /Users/pmikitsh/git/storybook-boilerplate/packages/storybook/.storybook/storybook-init-framework-entry.js */"./.storybook/storybook-init-framework-entry.js");
__webpack_require__(/*! /Users/pmikitsh/git/storybook-boilerplate/node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js */"../../node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js");
__webpack_require__(/*! /Users/pmikitsh/git/storybook-boilerplate/node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js */"../../node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js");
__webpack_require__(/*! /Users/pmikitsh/git/storybook-boilerplate/packages/storybook/.storybook/preview.tsx-generated-config-entry.js */"./.storybook/preview.tsx-generated-config-entry.js");
module.exports = __webpack_require__(/*! /Users/pmikitsh/git/storybook-boilerplate/packages/storybook/.storybook/generated-stories-entry.js */"./.storybook/generated-stories-entry.js");


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
//# sourceMappingURL=main.d561341c618f5f7c2ec4.bundle.js.map