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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DelayTime = (param)=>{\n    let { time, rejectionDate, applicationStatus } = param;\n    // Parse the past date into a Date object\n    const pastDate = new Date(time);\n    // Get the current date\n    const currentDate = new Date();\n    // Calculate the time difference in milliseconds\n    const timeDifference = currentDate - pastDate;\n    // Convert milliseconds to days\n    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);\n    // Round the days to the nearest whole number\n    const roundedDaysDifference = Math.round(daysDifference);\n    console.log(\"Difference in days: \".concat(roundedDaysDifference), rejectionDate, applicationStatus);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: roundedDaysDifference > 3 ? \"text-sm leading-5 text-red-600\" : \"text-sm leading-5 text-gray-900\",\n        children: roundedDaysDifference\n    }, void 0, false, {\n        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\DelayTime.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DelayTime;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DelayTime);\nvar _c;\n$RefreshReg$(_c, \"DelayTime\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9EZWxheVRpbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUI7QUFFekIsTUFBTUMsWUFBWTtRQUFDLEVBQUNDLElBQUksRUFBQ0MsYUFBYSxFQUFDQyxpQkFBaUIsRUFBQztJQUV6RCx5Q0FBeUM7SUFDekMsTUFBTUMsV0FBVyxJQUFJQyxLQUFLSjtJQUUxQix1QkFBdUI7SUFDdkIsTUFBTUssY0FBYyxJQUFJRDtJQUV4QixnREFBZ0Q7SUFDaEQsTUFBTUUsaUJBQWlCRCxjQUFjRjtJQUVyQywrQkFBK0I7SUFDL0IsTUFBTUksaUJBQWlCRCxpQkFBa0IsUUFBTyxLQUFLLEtBQUssRUFBQztJQUUzRCw2Q0FBNkM7SUFDN0MsTUFBTUUsd0JBQXdCQyxLQUFLQyxLQUFLLENBQUNIO0lBRXpDSSxRQUFRQyxHQUFHLENBQUMsdUJBQTZDLE9BQXRCSix3QkFBd0JQLGVBQWNDO0lBR3ZFLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFXTix3QkFBd0IsSUFBRyxtQ0FBbUM7a0JBQ2pGQTs7Ozs7O0FBR0Q7S0F6Qk1UO0FBMkJOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0RlbGF5VGltZS5qcz9mN2U3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IERlbGF5VGltZSA9ICh7dGltZSxyZWplY3Rpb25EYXRlLGFwcGxpY2F0aW9uU3RhdHVzfSkgPT4ge1xyXG4gIFxyXG4vLyBQYXJzZSB0aGUgcGFzdCBkYXRlIGludG8gYSBEYXRlIG9iamVjdFxyXG5jb25zdCBwYXN0RGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xyXG5cclxuLy8gR2V0IHRoZSBjdXJyZW50IGRhdGVcclxuY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuLy8gQ2FsY3VsYXRlIHRoZSB0aW1lIGRpZmZlcmVuY2UgaW4gbWlsbGlzZWNvbmRzXHJcbmNvbnN0IHRpbWVEaWZmZXJlbmNlID0gY3VycmVudERhdGUgLSBwYXN0RGF0ZTtcclxuXHJcbi8vIENvbnZlcnQgbWlsbGlzZWNvbmRzIHRvIGRheXNcclxuY29uc3QgZGF5c0RpZmZlcmVuY2UgPSB0aW1lRGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcclxuXHJcbi8vIFJvdW5kIHRoZSBkYXlzIHRvIHRoZSBuZWFyZXN0IHdob2xlIG51bWJlclxyXG5jb25zdCByb3VuZGVkRGF5c0RpZmZlcmVuY2UgPSBNYXRoLnJvdW5kKGRheXNEaWZmZXJlbmNlKTtcclxuXHJcbmNvbnNvbGUubG9nKGBEaWZmZXJlbmNlIGluIGRheXM6ICR7cm91bmRlZERheXNEaWZmZXJlbmNlfWAscmVqZWN0aW9uRGF0ZSxhcHBsaWNhdGlvblN0YXR1cyk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3JvdW5kZWREYXlzRGlmZmVyZW5jZSA+IDMgP1widGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1yZWQtNjAwXCIgOiBcInRleHQtc20gbGVhZGluZy01IHRleHQtZ3JheS05MDBcIn0+XHJcbntyb3VuZGVkRGF5c0RpZmZlcmVuY2V9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWxheVRpbWUiXSwibmFtZXMiOlsiUmVhY3QiLCJEZWxheVRpbWUiLCJ0aW1lIiwicmVqZWN0aW9uRGF0ZSIsImFwcGxpY2F0aW9uU3RhdHVzIiwicGFzdERhdGUiLCJEYXRlIiwiY3VycmVudERhdGUiLCJ0aW1lRGlmZmVyZW5jZSIsImRheXNEaWZmZXJlbmNlIiwicm91bmRlZERheXNEaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dashboard/DelayTime.js\n"));

/***/ })

});