"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/dashboard/DelayTime.js":
/*!*******************************************!*\
  !*** ./components/dashboard/DelayTime.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DelayTime = (param)=>{\n    let { time, rejectionDate, applicationStatus } = param;\n    // Parse the past date into a Date object\n    const pastDate = new Date(time);\n    // Get the current date\n    const currentDate = new Date();\n    // Calculate the time difference in milliseconds\n    const timeDifference = currentDate - pastDate;\n    // Convert milliseconds to days\n    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);\n    // Round the days to the nearest whole number\n    const roundedDaysDifference = Math.round(daysDifference);\n    console.log(\"Difference in days: \".concat(roundedDaysDifference), rejectionDate, applicationStatus);\n    const shouldShowUI = !rejectionDate && applicationStatus === \"pending\";\n    return shouldShowUI ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: roundedDaysDifference > 3 ? \"text-sm leading-5 text-red-600\" : \"text-sm leading-5 text-gray-900\",\n        children: roundedDaysDifference === \"1\" ? \"\".concat(roundedDaysDifference, \" Day\") : \"\".concat(roundedDaysDifference, \"Days\")\n    }, void 0, false, {\n        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\DelayTime.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-sm leading-5 text-green-500\",\n        children: \"Responded\"\n    }, void 0, false, {\n        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\DelayTime.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DelayTime;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DelayTime);\nvar _c;\n$RefreshReg$(_c, \"DelayTime\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9EZWxheVRpbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUI7QUFFekIsTUFBTUMsWUFBWTtRQUFDLEVBQUNDLElBQUksRUFBQ0MsYUFBYSxFQUFDQyxpQkFBaUIsRUFBQztJQUV6RCx5Q0FBeUM7SUFDekMsTUFBTUMsV0FBVyxJQUFJQyxLQUFLSjtJQUUxQix1QkFBdUI7SUFDdkIsTUFBTUssY0FBYyxJQUFJRDtJQUV4QixnREFBZ0Q7SUFDaEQsTUFBTUUsaUJBQWlCRCxjQUFjRjtJQUVyQywrQkFBK0I7SUFDL0IsTUFBTUksaUJBQWlCRCxpQkFBa0IsUUFBTyxLQUFLLEtBQUssRUFBQztJQUUzRCw2Q0FBNkM7SUFDN0MsTUFBTUUsd0JBQXdCQyxLQUFLQyxLQUFLLENBQUNIO0lBRXpDSSxRQUFRQyxHQUFHLENBQUMsdUJBQTZDLE9BQXRCSix3QkFBd0JQLGVBQWNDO0lBRXpFLE1BQU1XLGVBQWUsQ0FBQ1osaUJBQWlCQyxzQkFBc0I7SUFFM0QsT0FBT1csNkJBQ0wsOERBQUNDO1FBQUlDLFdBQVdQLHdCQUF3QixJQUFJLG1DQUFtQztrQkFDNUVBLDBCQUEwQixNQUFNLEdBQXlCLE9BQXRCQSx1QkFBc0IsVUFBUSxHQUF5QixPQUF0QkEsdUJBQXNCOzs7OztrQ0FHN0YsOERBQUNNO1FBQUlDLFdBQVU7a0JBQW1DOzs7Ozs7QUFFdEQ7S0E1Qk1oQjtBQThCTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9EZWxheVRpbWUuanM/ZjdlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBEZWxheVRpbWUgPSAoe3RpbWUscmVqZWN0aW9uRGF0ZSxhcHBsaWNhdGlvblN0YXR1c30pID0+IHtcclxuICBcclxuLy8gUGFyc2UgdGhlIHBhc3QgZGF0ZSBpbnRvIGEgRGF0ZSBvYmplY3RcclxuY29uc3QgcGFzdERhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuXHJcbi8vIEdldCB0aGUgY3VycmVudCBkYXRlXHJcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbi8vIENhbGN1bGF0ZSB0aGUgdGltZSBkaWZmZXJlbmNlIGluIG1pbGxpc2Vjb25kc1xyXG5jb25zdCB0aW1lRGlmZmVyZW5jZSA9IGN1cnJlbnREYXRlIC0gcGFzdERhdGU7XHJcblxyXG4vLyBDb252ZXJ0IG1pbGxpc2Vjb25kcyB0byBkYXlzXHJcbmNvbnN0IGRheXNEaWZmZXJlbmNlID0gdGltZURpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XHJcblxyXG4vLyBSb3VuZCB0aGUgZGF5cyB0byB0aGUgbmVhcmVzdCB3aG9sZSBudW1iZXJcclxuY29uc3Qgcm91bmRlZERheXNEaWZmZXJlbmNlID0gTWF0aC5yb3VuZChkYXlzRGlmZmVyZW5jZSk7XHJcblxyXG5jb25zb2xlLmxvZyhgRGlmZmVyZW5jZSBpbiBkYXlzOiAke3JvdW5kZWREYXlzRGlmZmVyZW5jZX1gLHJlamVjdGlvbkRhdGUsYXBwbGljYXRpb25TdGF0dXMpO1xyXG5cclxuY29uc3Qgc2hvdWxkU2hvd1VJID0gIXJlamVjdGlvbkRhdGUgJiYgYXBwbGljYXRpb25TdGF0dXMgPT09IFwicGVuZGluZ1wiO1xyXG5cclxuICByZXR1cm4gc2hvdWxkU2hvd1VJID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3JvdW5kZWREYXlzRGlmZmVyZW5jZSA+IDMgPyBcInRleHQtc20gbGVhZGluZy01IHRleHQtcmVkLTYwMFwiIDogXCJ0ZXh0LXNtIGxlYWRpbmctNSB0ZXh0LWdyYXktOTAwXCJ9PlxyXG4gICAgICB7cm91bmRlZERheXNEaWZmZXJlbmNlID09PSBcIjFcIiA/IGAke3JvdW5kZWREYXlzRGlmZmVyZW5jZX0gRGF5YCA6IGAke3JvdW5kZWREYXlzRGlmZmVyZW5jZX1EYXlzYH1cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy01IHRleHQtZ3JlZW4tNTAwXCI+UmVzcG9uZGVkPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGF5VGltZSJdLCJuYW1lcyI6WyJSZWFjdCIsIkRlbGF5VGltZSIsInRpbWUiLCJyZWplY3Rpb25EYXRlIiwiYXBwbGljYXRpb25TdGF0dXMiLCJwYXN0RGF0ZSIsIkRhdGUiLCJjdXJyZW50RGF0ZSIsInRpbWVEaWZmZXJlbmNlIiwiZGF5c0RpZmZlcmVuY2UiLCJyb3VuZGVkRGF5c0RpZmZlcmVuY2UiLCJNYXRoIiwicm91bmQiLCJjb25zb2xlIiwibG9nIiwic2hvdWxkU2hvd1VJIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/DelayTime.js\n"));

/***/ })

});