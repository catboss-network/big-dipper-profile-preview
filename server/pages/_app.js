module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ "/arD":
/***/ (function(module, exports) {

module.exports = require("jdenticon");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "3YKB":
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/global.css
var global = __webpack_require__("rMck");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: external "color"
var external_color_ = __webpack_require__("3YKB");
var external_color_default = /*#__PURE__*/__webpack_require__.n(external_color_);

// CONCATENATED MODULE: ./src/styles/theme/dark.ts

const backgroundDefault = '#0A0A0A';
const surfaceOne = '#131316';
const surfaceTwo = '#19191D';
const fontOne = '#E6E6E6';
const fontTwo = '#AAAAAB';
const fontThree = '#818181';
/** Custom theme overrides for dark mode */

const darkThemeOverride = {
  mixins: {
    tableCell: {
      background: surfaceOne,
      // surface one
      '&.odd': {
        background: surfaceTwo // surface two

      }
    }
  },
  palette: {
    type: 'dark',
    primary: {
      main: external_color_default()('#FD3B4C').alpha(0.7).string(),
      contrastText: '#fff'
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne
    },
    divider: '#3D3D43',
    text: {
      primary: '#E6E6E6',
      secondary: '#AAAAAB'
    },
    custom: {
      general: {
        background: backgroundDefault,
        // same as background default
        surfaceOne,
        // same as background paper
        surfaceTwo // striped tables

      },
      fonts: {
        fontOne,
        fontTwo,
        fontThree,
        fontFour: '#999999'
      },
      primaryData: {
        one: '#af2929',
        two: '#b44516',
        three: '#b14237',
        four: '#b16919'
      },
      results: {
        pass: '#198a65',
        fail: '#b12a34'
      }
    }
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: surfaceTwo // surface two

          }
        },
        '& .MuiTableCell-root': {
          color: fontTwo // font two

        }
      }
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: fontThree // font three

        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: fontOne // font one

        },
        '& .MuiTabs-indicator': {
          backgroundColor: fontOne // font one (?)

        }
      }
    }
  }
};
// CONCATENATED MODULE: ./src/styles/theme/light.ts
const light_backgroundDefault = '#F8F8F8';
const light_surfaceOne = '#FFFFFF';
const light_surfaceTwo = '#F8F8F8';
const light_fontOne = '#000000';
const light_fontTwo = '#414141';
const light_fontThree = '#777777';
/** Custom theme overrides for light mode */

const lightThemeOverride = {
  mixins: {
    tableCell: {
      background: light_surfaceOne,
      // surface one
      '&.odd': {
        background: light_surfaceTwo // surface two

      }
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#FD3B4C',
      contrastText: '#fff'
    },
    background: {
      default: light_backgroundDefault,
      paper: light_surfaceOne
    },
    divider: '#E8E8E8',
    text: {
      primary: '#000000',
      secondary: '#414141'
    },
    custom: {
      general: {
        background: light_backgroundDefault,
        // same as background default
        surfaceOne: light_surfaceOne,
        // same as background paper
        surfaceTwo: light_surfaceTwo // striped tables

      },
      fonts: {
        fontOne: light_fontOne,
        fontTwo: light_fontTwo,
        fontThree: light_fontThree,
        fontFour: '#999999'
      },
      primaryData: {
        one: '#FA3A39',
        two: '#FD5E1F',
        three: '#FD5D4E',
        four: '#FD9526'
      },
      results: {
        pass: '#1EC490',
        fail: '#FD3B4C'
      }
    }
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: light_surfaceTwo // surface two

          }
        },
        '& .MuiTableCell-root': {
          color: light_fontTwo // font two

        }
      }
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: light_fontThree // font three

        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: light_fontOne // font one

        },
        '& .MuiTabs-indicator': {
          backgroundColor: light_fontOne // font one (?)

        }
      }
    }
  }
};
// CONCATENATED MODULE: ./src/styles/theme/index.ts



/** Common themes that don't change across light and dark theme */

const common = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1280,
      xl: 1920
    }
  },
  mixins: {
    toolbar: {
      '@media (min-width: 1280px)': {
        height: '160px',
        overflow: 'hidden'
      }
    },
    layout: {
      padding: '16px',
      '@media (min-width: 1280px)': {
        padding: '16px 24px'
      }
    },
    tableCell: {
      height: '50px',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        width: '100%'
      },
      '& .MuiTypography-body1': {
        whiteSpace: 'nowrap'
      }
    }
  },
  props: {
    MuiSvgIcon: {
      htmlColor: '#999999' // same as custom /general /icons

    },
    MuiButton: {
      disableElevation: true
    }
  },
  typography: {
    fontFamily: '"Hind Madurai", sans-serif',
    h1: {
      fontSize: '2rem',
      letterSpacing: 0.25
    },
    h2: {
      fontSize: '1.5rem',
      letterSpacing: 0
    },
    h3: {
      fontSize: '1.25rem',
      letterSpacing: 0.15
    },
    h4: {
      fontSize: '1rem',
      letterSpacing: 0.15
    },
    h5: {
      fontSize: '0.875rem',
      letterSpacing: 0.1,
      fontWeight: 500
    },
    h6: {
      fontSize: '0.75rem',
      letterSpacing: 0.1,
      fontWeight: 500
    },
    body1: {
      fontSize: '1rem',
      whiteSpace: 'pre-wrap',
      letterSpacing: 0.5
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: 0.25
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: 0.4
    },
    button: {
      fontSize: '0.875rem',
      letterSpacing: 1.25,
      textTransform: 'none'
    }
  },
  palette: {
    custom: {
      general: {
        icon: '#999999'
      },
      tags: {
        zero: '#E8E8E8',
        one: '#2460FA',
        two: '#2BA891',
        three: '#E79720',
        four: '#F17047',
        five: '#DA4B4B',
        six: '#9438DC',
        seven: '#1A869D',
        eight: '#2C9944',
        nine: '#B49F31',
        ten: '#E9A846',
        eleven: '#E94681',
        twelve: '#C15EC4',
        thirteen: '#C388D9',
        fourteen: '#46AEE9',
        fifteen: '#58BC91',
        sixteen: '#90BC58',
        seventeen: '#E99E8E',
        eighteen: '#F0A479',
        nineteen: '#D37763',
        twenty: '#D9C788'
      },
      fonts: {
        fontFive: '#FFFFFF',
        highlight: '#1D86FF' // links
        // highlight: '#56B4E9', // links

      },
      condition: {
        zero: '#E8E8E8',
        one: '#1EC490',
        two: '#FF961B',
        three: '#FC6A8A'
      },
      tokenomics: {
        one: '#1EC490',
        two: '#497BFF',
        three: '#9F46EC'
      },
      charts: {
        zero: '#E8E8E8',
        one: '#EB3AA4',
        two: '#497BFF',
        three: '#FF961B',
        four: '#1EC490',
        five: '#9F46EC'
      }
    }
  },
  overrides: {
    MuiTableHead: {
      root: {
        backgroundColor: 'initial'
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: 'transparent'
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
        padding: '0 16px',
        height: '50px',
        fontSize: '1rem'
      }
    },
    MuiTabs: {
      root: {
        // '& .MuiTabs-fixed': {
        //   overflow: 'auto',
        // },
        '&.MuiTabs-root, & .MuiTab-root': {
          minHeight: '40px'
        },
        '& .MuiTab-textColorInherit': {
          opacity: 1,
          fontSize: '1rem'
        }
      }
    }
  }
};
const lightTemplate = external_ramda_["mergeDeepLeft"](lightThemeOverride, common);
const darkTemplate = external_ramda_["mergeDeepLeft"](darkThemeOverride, common); // export const lightTheme = createMuiTheme(lightTemplate);
// export const darkTheme = createMuiTheme(darkTemplate);
// export const deuteranopiaTheme = createMuiTheme(deuteranopiaTemplate);
// CONCATENATED MODULE: ./src/styles/index.ts


// CONCATENATED MODULE: ./src/hooks/use_persisted_state.ts

/**
 * Helper hook to handle values that may need to be story throughout multiple sessions
 * @param key key value that exist in localstorage
 * @param initialValue initial value to be set if none is found
 */

const usePersistedState = (key, initialValue) => {
  const [value, setValue] = external_react_default.a.useState(initialValue);
  const retrievePersistedValue = external_react_default.a.useCallback(() => {
    try {
      const persistedString = localStorage.getItem(key);

      if (!persistedString) {
        return;
      }

      const persistedValue = JSON.parse(persistedString);
      setValue(persistedValue);
    } catch (err) {// Does nothing
    }
  }, []);
  external_react_default.a.useEffect(() => {
    retrievePersistedValue();
  }, []);
  external_react_default.a.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};
// CONCATENATED MODULE: ./src/hooks/index.ts


// CONCATENATED MODULE: ./src/contexts/settings/hooks.tsx





/**
 *
 * @param initialState
 */
const useTheme = initialState => {
  const {
    0: theme,
    1: setTheme
  } = Object(external_react_["useState"])(initialState.theme);
  const [themeSelection, setThemeSelection] = usePersistedState('themeSelection', initialState.themeSelection);
  const themeList = ['light', 'dark', 'deuteranopia', 'tritanopia'];
  const themeDictionary = {
    light: lightTemplate,
    dark: darkTemplate
  };
  Object(external_react_["useEffect"])(() => {
    const isClient = false;

    if (themeSelection === 'device') {
      var _window, _window$matchMedia;

      if (isClient && (_window = window) !== null && _window !== void 0 && (_window$matchMedia = _window.matchMedia('(prefers-color-scheme: dark)')) !== null && _window$matchMedia !== void 0 && _window$matchMedia.matches) {
        setTheme('dark');
      }
    } else if (themeDictionary[themeSelection]) {
      setTheme(themeSelection);
    } else {
      setTheme('light');
    }
  }, [themeSelection]);

  const changeTheme = value => {
    if (themeDictionary[value]) {
      setThemeSelection(value);
    }
  };

  return {
    theme,
    muiTheme: Object(styles_["createMuiTheme"])(themeDictionary[theme] || lightTemplate),
    themeSelection,
    themeList,
    themeDictionary,
    changeTheme
  };
};
// CONCATENATED MODULE: ./src/contexts/settings/index.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialThemeState = {
  theme: 'light',
  themeSelection: 'device',
  muiTheme: Object(styles_["createMuiTheme"])(lightTemplate),
  themeList: []
};
const SettingsContext = /*#__PURE__*/external_react_default.a.createContext(_objectSpread({}, initialThemeState));

const SettingsProvider = props => {
  const {
    children
  } = props;
  const {
    theme,
    muiTheme,
    themeSelection,
    changeTheme,
    themeList
  } = useTheme(initialThemeState);
  return __jsx(SettingsContext.Provider, {
    value: {
      theme,
      themeSelection,
      muiTheme,
      changeTheme,
      themeList
    }
  }, children);
};

const useSettingsContext = () => external_react_default.a.useContext(SettingsContext);


// CONCATENATED MODULE: ./src/contexts/index.ts


// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// CONCATENATED MODULE: ./src/screens/app/components/inner_app/index.tsx
var inner_app_jsx = external_react_default.a.createElement;



 // Separated to use our useSettingsContext hook

function InnerApp({
  Component,
  pageProps
}) {
  const {
    muiTheme
  } = useSettingsContext();
  return inner_app_jsx(styles_["ThemeProvider"], {
    theme: muiTheme
  }, inner_app_jsx(CssBaseline_default.a, null), inner_app_jsx(Component, pageProps));
}

/* harmony default export */ var inner_app = (InnerApp);
// CONCATENATED MODULE: ./src/screens/app/components/index.ts


// EXTERNAL MODULE: external "jdenticon"
var external_jdenticon_ = __webpack_require__("/arD");

// CONCATENATED MODULE: ./src/screens/app/hooks.ts


const useApp = () => {
  Object(external_react_["useEffect"])(() => {
    // jdenticon theme
    external_jdenticon_["configure"]({
      hues: [207],
      lightness: {
        color: [0.84, 0.84],
        grayscale: [0.84, 0.84]
      },
      saturation: {
        color: 0.48,
        grayscale: 0.48
      },
      backColor: '#2a4766'
    });
  }, []); // ==========================
  // css
  // ==========================

  Object(external_react_["useEffect"])(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
};
// CONCATENATED MODULE: ./src/screens/app/index.tsx
var app_jsx = external_react_default.a.createElement;






function App(props) {
  useApp();
  return app_jsx(external_react_default.a.Fragment, null, app_jsx(head_default.a, null, app_jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width"
  }), app_jsx("meta", {
    name: "description",
    content: "Big Dipper 2.0 Desmos profile preview created and maintained by Cat Boss."
  }), app_jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-touch-icon.png"
  }), app_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/icons/favicon-32x32.png"
  }), app_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/icons/favicon-16x16.png"
  }), app_jsx("link", {
    rel: "manifest",
    href: "/icons/site.webmanifest"
  }), app_jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "Big Dipper 2.0 Profile Preview"
  }), app_jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: "Big Dipper 2.0 Desmos profile preview created and maintained by Cat Boss."
  }), app_jsx("meta", {
    name: "twitter:card",
    content: "summary"
  }), app_jsx("meta", {
    name: "robots",
    content: "noindex, nofollow"
  }), app_jsx("meta", {
    property: "og:image",
    content: "https://i.imgur.com/Pn5SFLb.png"
  }), app_jsx("title", null, "Big Dipper 2.0 Profile Preview")), app_jsx(SettingsProvider, null, app_jsx(inner_app, props)));
}

/* harmony default export */ var app = (App);
// CONCATENATED MODULE: ./src/pages/_app.tsx


/* harmony default export */ var _app = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "rMck":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });