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

/***/ "./components/dashboard/ProcessSteps.js":
/*!**********************************************!*\
  !*** ./components/dashboard/ProcessSteps.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/steps */ \"./node_modules/antd/lib/steps/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LoadingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ \"./node_modules/@ant-design/icons/lib/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/WarningOutlined */ \"./node_modules/@ant-design/icons/lib/icons/WarningOutlined.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./components/dashboard/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\nconst ProcessSteps = (param)=>{\n    let { applicationStatus, statusByRole } = param;\n    const generateSteps = (status, role)=>{\n        const JuniorLoadingicon = status === \"pending\" && role === \"juniorOfficer\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined) : status === \"approved\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined) : null;\n        const JuniorUsericon = status === \"pending\" && role === \"assistantGeneral\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined) : null;\n        const SeniorLoadingicon = status === \"pending\" && role === \"assistantGeneral\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined) : null;\n        const SeniorUsericon = status === \"approved\" && role === \"assistantGeneral\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined) : null;\n        const Usericon = status === \"rejected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined) : null;\n        const pendingStatus = status === \"pending\" && \"Pending\";\n        const rejectedStatus = status === \"rejected\" && \"Rejected\";\n        const approvedStatus = status === \"approved\" && \"Approved\";\n        const steps = [\n            {\n                title: \"Junior Officer\",\n                icon: JuniorLoadingicon || JuniorUsericon || Usericon\n            },\n            {\n                title: \"Assistant General\",\n                icon: SeniorLoadingicon || SeniorUsericon || Usericon\n            },\n            {\n                title: pendingStatus || rejectedStatus || approvedStatus,\n                icon: status === \"rejected\" || \"pending\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n                    lineNumber: 58,\n                    columnNumber: 52\n                }, undefined) : 0\n            }\n        ];\n        // Check for the application status and update the steps accordingly\n        if (status === \"rejected\") {\n            steps[2].status = \"error\"; // Set the Approved step to error status\n        } else if (status === \"pending\") {\n            steps[2].status = \"wait\"; // Set the Approved step to wait status for pending applications\n        }\n        return steps;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_steps__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            style: {\n                width: \"85%\",\n                margin: \"0 auto\",\n                fontFamily: \"sans-serif\"\n            },\n            items: generateSteps(applicationStatus, statusByRole)\n        }, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProcessSteps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessSteps);\nvar _c;\n$RefreshReg$(_c, \"ProcessSteps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9Qcm9jZXNzU3RlcHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFLRjtBQUFBO0FBQUE7QUFBQTtBQUNEO0FBQ0w7QUFFckIsTUFBTU0sZUFBZTtRQUFDLEVBQUVDLGlCQUFpQixFQUFFQyxZQUFZLEVBQUU7SUFDdkQsTUFBTUMsZ0JBQWdCLENBQUNDLFFBQVFDO1FBQzdCLE1BQU1DLG9CQUNKRixXQUFXLGFBQWFDLFNBQVMsZ0NBQy9CLDhEQUFDVixtRkFBZUE7Ozs7d0JBQ2RTLFdBQVcsbUJBQ2IsOERBQUNSLGdGQUFZQTs7Ozt3QkFDWFEsV0FBVywyQkFDYiw4REFBQ1IsZ0ZBQVlBOzs7O3dCQUFTO1FBQzFCLE1BQU1XLGlCQUNKSCxXQUFXLGFBQWFDLFNBQVMsbUNBQy9CLDhEQUFDVCxnRkFBWUE7Ozs7d0JBQ1hRLFdBQVcsbUJBQ2IsOERBQUNSLGdGQUFZQTs7Ozt3QkFDWDtRQUVOLE1BQU1ZLG9CQUNKSixXQUFXLGFBQWFDLFNBQVMsbUNBQy9CLDhEQUFDVixtRkFBZUE7Ozs7d0JBQ2RTLFdBQVcsbUJBQ2IsOERBQUNSLGdGQUFZQTs7Ozt3QkFDWDtRQUNOLE1BQU1hLGlCQUNKTCxXQUFXLGNBQWNDLFNBQVMsbUNBQ2hDLDhEQUFDVCxnRkFBWUE7Ozs7d0JBQ1hRLFdBQVcsbUJBQ2IsOERBQUNSLGdGQUFZQTs7Ozt3QkFDWDtRQUNKLE1BQU1jLFdBQ05OLFdBQVcsMkJBQ1QsOERBQUNSLGdGQUFZQTs7Ozt3QkFDWFEsV0FBVyxtQkFDYiw4REFBQ1IsZ0ZBQVlBOzs7O3dCQUNYO1FBQ04sTUFBTWUsZ0JBQWdCUCxXQUFXLGFBQWE7UUFDOUMsTUFBTVEsaUJBQWlCUixXQUFXLGNBQWM7UUFDaEQsTUFBTVMsaUJBQWlCVCxXQUFXLGNBQWM7UUFDaEQsTUFBTVUsUUFBUTtZQUNaO2dCQUNFQyxPQUFPO2dCQUNQQyxNQUFNVixxQkFBcUJDLGtCQUFrQkc7WUFDL0M7WUFDQTtnQkFDRUssT0FBTztnQkFDUEMsTUFBTVIscUJBQXFCQyxrQkFBa0JDO1lBQy9DO1lBQ0E7Z0JBQ0VLLE9BQU9KLGlCQUFpQkMsa0JBQWtCQztnQkFDMUNHLE1BQU1aLFdBQVcsY0FBYywwQkFBWSw4REFBQ1AsbUZBQWVBOzs7O2dDQUFNLENBQUk7WUFDdkU7U0FDRDtRQUVELG9FQUFvRTtRQUNwRSxJQUFJTyxXQUFXLFlBQVk7WUFDekJVLEtBQUssQ0FBQyxFQUFFLENBQUNWLE1BQU0sR0FBRyxTQUFTLHdDQUF3QztRQUNyRSxPQUFPLElBQUlBLFdBQVcsV0FBVztZQUMvQlUsS0FBSyxDQUFDLEVBQUUsQ0FBQ1YsTUFBTSxHQUFHLFFBQVEsZ0VBQWdFO1FBQzVGO1FBRUEsT0FBT1U7SUFDVDtJQUVBLHFCQUNFLDhEQUFDRztrQkFDQyw0RUFBQ3ZCLHNEQUFLQTtZQUNKd0IsT0FBTztnQkFBRUMsT0FBTztnQkFBT0MsUUFBUTtnQkFBVUMsWUFBWTtZQUFhO1lBQ2xFQyxPQUFPbkIsY0FBY0YsbUJBQW1CQzs7Ozs7Ozs7Ozs7QUFJaEQ7S0F0RU1GO0FBd0VOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1Byb2Nlc3NTdGVwcy5qcz80ZjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0ZXBzIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBMb2FkaW5nT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIFdhcm5pbmdPdXRsaW5lZCxDaGVja091dGxpbmVkXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmNvbnN0IFByb2Nlc3NTdGVwcyA9ICh7IGFwcGxpY2F0aW9uU3RhdHVzLCBzdGF0dXNCeVJvbGUgfSkgPT4ge1xyXG4gIGNvbnN0IGdlbmVyYXRlU3RlcHMgPSAoc3RhdHVzLCByb2xlKSA9PiB7XHJcbiAgICBjb25zdCBKdW5pb3JMb2FkaW5naWNvbiA9XHJcbiAgICAgIHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIgJiYgcm9sZSA9PT0gXCJqdW5pb3JPZmZpY2VyXCIgPyAoXHJcbiAgICAgICAgPExvYWRpbmdPdXRsaW5lZCAvPlxyXG4gICAgICApIDogc3RhdHVzID09PSBcIlwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IHN0YXR1cyA9PT0gXCJhcHByb3ZlZFwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz4gKSA6ICBudWxsO1xyXG4gICAgY29uc3QgSnVuaW9yVXNlcmljb24gPVxyXG4gICAgICBzdGF0dXMgPT09IFwicGVuZGluZ1wiICYmIHJvbGUgPT09IFwiYXNzaXN0YW50R2VuZXJhbFwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IHN0YXR1cyA9PT0gXCJcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+XHJcbiAgICAgICkgOiBudWxsO1xyXG5cclxuICAgIGNvbnN0IFNlbmlvckxvYWRpbmdpY29uID1cclxuICAgICAgc3RhdHVzID09PSBcInBlbmRpbmdcIiAmJiByb2xlID09PSBcImFzc2lzdGFudEdlbmVyYWxcIiA/IChcclxuICAgICAgICA8TG9hZGluZ091dGxpbmVkIC8+XHJcbiAgICAgICkgOiBzdGF0dXMgPT09IFwiXCIgPyAoXHJcbiAgICAgICAgPFVzZXJPdXRsaW5lZCAvPlxyXG4gICAgICApIDogbnVsbDtcclxuICAgIGNvbnN0IFNlbmlvclVzZXJpY29uID1cclxuICAgICAgc3RhdHVzID09PSBcImFwcHJvdmVkXCIgJiYgcm9sZSA9PT0gXCJhc3Npc3RhbnRHZW5lcmFsXCIgPyAoXHJcbiAgICAgICAgPFVzZXJPdXRsaW5lZCAvPlxyXG4gICAgICApIDogc3RhdHVzID09PSBcIlwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IG51bGw7XHJcbiAgICAgIGNvbnN0IFVzZXJpY29uID1cclxuICAgICAgc3RhdHVzID09PSBcInJlamVjdGVkXCIgPyAoXHJcbiAgICAgICAgPFVzZXJPdXRsaW5lZCAvPlxyXG4gICAgICApIDogc3RhdHVzID09PSBcIlwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IG51bGw7XHJcbiAgICBjb25zdCBwZW5kaW5nU3RhdHVzID0gc3RhdHVzID09PSBcInBlbmRpbmdcIiAmJiBcIlBlbmRpbmdcIjtcclxuICAgIGNvbnN0IHJlamVjdGVkU3RhdHVzID0gc3RhdHVzID09PSBcInJlamVjdGVkXCIgJiYgXCJSZWplY3RlZFwiO1xyXG4gICAgY29uc3QgYXBwcm92ZWRTdGF0dXMgPSBzdGF0dXMgPT09IFwiYXBwcm92ZWRcIiAmJiBcIkFwcHJvdmVkXCI7XHJcbiAgICBjb25zdCBzdGVwcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkp1bmlvciBPZmZpY2VyXCIsXHJcbiAgICAgICAgaWNvbjogSnVuaW9yTG9hZGluZ2ljb24gfHwgSnVuaW9yVXNlcmljb24gfHwgVXNlcmljb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJBc3Npc3RhbnQgR2VuZXJhbFwiLFxyXG4gICAgICAgIGljb246IFNlbmlvckxvYWRpbmdpY29uIHx8IFNlbmlvclVzZXJpY29uIHx8IFVzZXJpY29uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IHBlbmRpbmdTdGF0dXMgfHwgcmVqZWN0ZWRTdGF0dXMgfHwgYXBwcm92ZWRTdGF0dXMsXHJcbiAgICAgICAgaWNvbjogc3RhdHVzID09PSBcInJlamVjdGVkXCIgfHwgXCJwZW5kaW5nXCIgPyA8V2FybmluZ091dGxpbmVkIC8+IDogbnVsbCxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIHRoZSBhcHBsaWNhdGlvbiBzdGF0dXMgYW5kIHVwZGF0ZSB0aGUgc3RlcHMgYWNjb3JkaW5nbHlcclxuICAgIGlmIChzdGF0dXMgPT09IFwicmVqZWN0ZWRcIikge1xyXG4gICAgICBzdGVwc1syXS5zdGF0dXMgPSBcImVycm9yXCI7IC8vIFNldCB0aGUgQXBwcm92ZWQgc3RlcCB0byBlcnJvciBzdGF0dXNcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xyXG4gICAgICBzdGVwc1syXS5zdGF0dXMgPSBcIndhaXRcIjsgLy8gU2V0IHRoZSBBcHByb3ZlZCBzdGVwIHRvIHdhaXQgc3RhdHVzIGZvciBwZW5kaW5nIGFwcGxpY2F0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGVwcztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFN0ZXBzXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiODUlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiwgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIgfX1cclxuICAgICAgICBpdGVtcz17Z2VuZXJhdGVTdGVwcyhhcHBsaWNhdGlvblN0YXR1cywgc3RhdHVzQnlSb2xlKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzU3RlcHM7XHJcbiJdLCJuYW1lcyI6WyJTdGVwcyIsIkxvYWRpbmdPdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIldhcm5pbmdPdXRsaW5lZCIsIkNoZWNrT3V0bGluZWQiLCJSZWFjdCIsIlByb2Nlc3NTdGVwcyIsImFwcGxpY2F0aW9uU3RhdHVzIiwic3RhdHVzQnlSb2xlIiwiZ2VuZXJhdGVTdGVwcyIsInN0YXR1cyIsInJvbGUiLCJKdW5pb3JMb2FkaW5naWNvbiIsIkp1bmlvclVzZXJpY29uIiwiU2VuaW9yTG9hZGluZ2ljb24iLCJTZW5pb3JVc2VyaWNvbiIsIlVzZXJpY29uIiwicGVuZGluZ1N0YXR1cyIsInJlamVjdGVkU3RhdHVzIiwiYXBwcm92ZWRTdGF0dXMiLCJzdGVwcyIsInRpdGxlIiwiaWNvbiIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJmb250RmFtaWx5IiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dashboard/ProcessSteps.js\n"));

/***/ })

});