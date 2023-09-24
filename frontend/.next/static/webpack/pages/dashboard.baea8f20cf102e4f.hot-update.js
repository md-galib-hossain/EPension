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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/steps */ \"./node_modules/antd/lib/steps/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LoadingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ \"./node_modules/@ant-design/icons/lib/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/WarningOutlined */ \"./node_modules/@ant-design/icons/lib/icons/WarningOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CheckOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CheckOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/ClockCircleOutlined */ \"./node_modules/@ant-design/icons/lib/icons/ClockCircleOutlined.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./components/dashboard/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\nconst ProcessSteps = (param)=>{\n    let { applicationStatus, statusByRole } = param;\n    const generateSteps = (status, role)=>{\n        const JuniorLoadingicon = status === \"pending\" && role === \"juniorOfficer\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined) : status === \"approved\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined) : null;\n        const JuniorUsericon = status === \"pending\" && role === \"assistantGeneral\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined) : null;\n        const SeniorLoadingicon = status === \"pending\" && role === \"assistantGeneral\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined) : null;\n        const SeniorUsericon = status === \"approved\" && role === \"assistantGeneral\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined) : null;\n        const Usericon = status === \"rejected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined) : null;\n        const pendingStatus = status === \"pending\" && \"Pending\";\n        const rejectedStatus = status === \"rejected\" && \"Rejected\";\n        const approvedStatus = status === \"approved\" && \"Approved\";\n        const steps = [\n            {\n                title: \"Junior Officer\",\n                icon: JuniorLoadingicon || JuniorUsericon || Usericon\n            },\n            {\n                title: \"Assistant General\",\n                icon: SeniorLoadingicon || SeniorUsericon || Usericon\n            },\n            {\n                title: pendingStatus || rejectedStatus || approvedStatus,\n                icon: status === \"rejected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n                    lineNumber: 58,\n                    columnNumber: 39\n                }, undefined) : status === \"pending\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n                    lineNumber: 58,\n                    columnNumber: 84\n                }, undefined) : status === \"approved\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n                    lineNumber: 58,\n                    columnNumber: 135\n                }, undefined) : null\n            }\n        ];\n        // Check for the application status and update the steps accordingly\n        if (status === \"rejected\") {\n            steps[2].status = \"error\"; // Set the Approved step to error status\n        } else if (status === \"pending\") {\n            steps[2].status = \"wait\"; // Set the Approved step to wait status for pending applications\n        }\n        return steps;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_steps__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            curren: 0,\n            style: {\n                width: \"85%\",\n                margin: \"0 auto\",\n                fontFamily: \"sans-serif\"\n            },\n            items: generateSteps(applicationStatus, statusByRole)\n        }, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProcessSteps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessSteps);\nvar _c;\n$RefreshReg$(_c, \"ProcessSteps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9Qcm9jZXNzU3RlcHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRDtBQUNMO0FBRXJCLE1BQU1PLGVBQWU7UUFBQyxFQUFFQyxpQkFBaUIsRUFBRUMsWUFBWSxFQUFFO0lBQ3ZELE1BQU1DLGdCQUFnQixDQUFDQyxRQUFRQztRQUM3QixNQUFNQyxvQkFDSkYsV0FBVyxhQUFhQyxTQUFTLGdDQUMvQiw4REFBQ1gsbUZBQWVBOzs7O3dCQUNkVSxXQUFXLG1CQUNiLDhEQUFDVCxnRkFBWUE7Ozs7d0JBQ1hTLFdBQVcsMkJBQ2IsOERBQUNULGdGQUFZQTs7Ozt3QkFBUztRQUMxQixNQUFNWSxpQkFDSkgsV0FBVyxhQUFhQyxTQUFTLG1DQUMvQiw4REFBQ1YsZ0ZBQVlBOzs7O3dCQUNYUyxXQUFXLG1CQUNiLDhEQUFDVCxnRkFBWUE7Ozs7d0JBQ1g7UUFFTixNQUFNYSxvQkFDSkosV0FBVyxhQUFhQyxTQUFTLG1DQUMvQiw4REFBQ1gsbUZBQWVBOzs7O3dCQUNkVSxXQUFXLG1CQUNiLDhEQUFDVCxnRkFBWUE7Ozs7d0JBQ1g7UUFDTixNQUFNYyxpQkFDSkwsV0FBVyxjQUFjQyxTQUFTLG1DQUNoQyw4REFBQ1YsZ0ZBQVlBOzs7O3dCQUNYUyxXQUFXLG1CQUNiLDhEQUFDVCxnRkFBWUE7Ozs7d0JBQ1g7UUFDSixNQUFNZSxXQUNOTixXQUFXLDJCQUNULDhEQUFDVCxnRkFBWUE7Ozs7d0JBQ1hTLFdBQVcsbUJBQ2IsOERBQUNULGdGQUFZQTs7Ozt3QkFDWDtRQUNOLE1BQU1nQixnQkFBZ0JQLFdBQVcsYUFBYTtRQUM5QyxNQUFNUSxpQkFBaUJSLFdBQVcsY0FBYztRQUNoRCxNQUFNUyxpQkFBaUJULFdBQVcsY0FBYztRQUNoRCxNQUFNVSxRQUFRO1lBQ1o7Z0JBQ0VDLE9BQU87Z0JBQ1BDLE1BQU1WLHFCQUFxQkMsa0JBQWtCRztZQUMvQztZQUNBO2dCQUNFSyxPQUFPO2dCQUNQQyxNQUFNUixxQkFBcUJDLGtCQUFrQkM7WUFDL0M7WUFDQTtnQkFDRUssT0FBT0osaUJBQWlCQyxrQkFBa0JDO2dCQUMxQ0csTUFBTVosV0FBVywyQkFBYSw4REFBQ1IsbUZBQWVBOzs7O2dDQUFNUSxXQUFXLDBCQUFZLDhEQUFDTix1RkFBbUJBOzs7O2dDQUFNTSxXQUFXLDJCQUFjLDhEQUFDUCxpRkFBYUE7Ozs7Z0NBQUs7WUFDbko7U0FDRDtRQUVELG9FQUFvRTtRQUNwRSxJQUFJTyxXQUFXLFlBQVk7WUFDekJVLEtBQUssQ0FBQyxFQUFFLENBQUNWLE1BQU0sR0FBRyxTQUFTLHdDQUF3QztRQUNyRSxPQUFPLElBQUlBLFdBQVcsV0FBVztZQUMvQlUsS0FBSyxDQUFDLEVBQUUsQ0FBQ1YsTUFBTSxHQUFHLFFBQVEsZ0VBQWdFO1FBQzVGO1FBRUEsT0FBT1U7SUFDVDtJQUVBLHFCQUNFLDhEQUFDRztrQkFDQyw0RUFBQ3hCLHNEQUFLQTtZQUNOeUIsUUFBUTtZQUNOQyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFPQyxRQUFRO2dCQUFVQyxZQUFZO1lBQWE7WUFDbEVDLE9BQU9wQixjQUFjRixtQkFBbUJDOzs7Ozs7Ozs7OztBQUloRDtLQXZFTUY7QUF5RU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvUHJvY2Vzc1N0ZXBzLmpzPzRmNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RlcHMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIExvYWRpbmdPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgV2FybmluZ091dGxpbmVkLENoZWNrT3V0bGluZWQsQ2xvY2tDaXJjbGVPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5jb25zdCBQcm9jZXNzU3RlcHMgPSAoeyBhcHBsaWNhdGlvblN0YXR1cywgc3RhdHVzQnlSb2xlIH0pID0+IHtcclxuICBjb25zdCBnZW5lcmF0ZVN0ZXBzID0gKHN0YXR1cywgcm9sZSkgPT4ge1xyXG4gICAgY29uc3QgSnVuaW9yTG9hZGluZ2ljb24gPVxyXG4gICAgICBzdGF0dXMgPT09IFwicGVuZGluZ1wiICYmIHJvbGUgPT09IFwianVuaW9yT2ZmaWNlclwiID8gKFxyXG4gICAgICAgIDxMb2FkaW5nT3V0bGluZWQgLz5cclxuICAgICAgKSA6IHN0YXR1cyA9PT0gXCJcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+XHJcbiAgICAgICkgOiBzdGF0dXMgPT09IFwiYXBwcm92ZWRcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+ICkgOiAgbnVsbDtcclxuICAgIGNvbnN0IEp1bmlvclVzZXJpY29uID1cclxuICAgICAgc3RhdHVzID09PSBcInBlbmRpbmdcIiAmJiByb2xlID09PSBcImFzc2lzdGFudEdlbmVyYWxcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+XHJcbiAgICAgICkgOiBzdGF0dXMgPT09IFwiXCIgPyAoXHJcbiAgICAgICAgPFVzZXJPdXRsaW5lZCAvPlxyXG4gICAgICApIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBTZW5pb3JMb2FkaW5naWNvbiA9XHJcbiAgICAgIHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIgJiYgcm9sZSA9PT0gXCJhc3Npc3RhbnRHZW5lcmFsXCIgPyAoXHJcbiAgICAgICAgPExvYWRpbmdPdXRsaW5lZCAvPlxyXG4gICAgICApIDogc3RhdHVzID09PSBcIlwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IG51bGw7XHJcbiAgICBjb25zdCBTZW5pb3JVc2VyaWNvbiA9XHJcbiAgICAgIHN0YXR1cyA9PT0gXCJhcHByb3ZlZFwiICYmIHJvbGUgPT09IFwiYXNzaXN0YW50R2VuZXJhbFwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IHN0YXR1cyA9PT0gXCJcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+XHJcbiAgICAgICkgOiBudWxsO1xyXG4gICAgICBjb25zdCBVc2VyaWNvbiA9XHJcbiAgICAgIHN0YXR1cyA9PT0gXCJyZWplY3RlZFwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IHN0YXR1cyA9PT0gXCJcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+XHJcbiAgICAgICkgOiBudWxsO1xyXG4gICAgY29uc3QgcGVuZGluZ1N0YXR1cyA9IHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIgJiYgXCJQZW5kaW5nXCI7XHJcbiAgICBjb25zdCByZWplY3RlZFN0YXR1cyA9IHN0YXR1cyA9PT0gXCJyZWplY3RlZFwiICYmIFwiUmVqZWN0ZWRcIjtcclxuICAgIGNvbnN0IGFwcHJvdmVkU3RhdHVzID0gc3RhdHVzID09PSBcImFwcHJvdmVkXCIgJiYgXCJBcHByb3ZlZFwiO1xyXG4gICAgY29uc3Qgc3RlcHMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJKdW5pb3IgT2ZmaWNlclwiLFxyXG4gICAgICAgIGljb246IEp1bmlvckxvYWRpbmdpY29uIHx8IEp1bmlvclVzZXJpY29uIHx8IFVzZXJpY29uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQXNzaXN0YW50IEdlbmVyYWxcIixcclxuICAgICAgICBpY29uOiBTZW5pb3JMb2FkaW5naWNvbiB8fCBTZW5pb3JVc2VyaWNvbiB8fCBVc2VyaWNvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBwZW5kaW5nU3RhdHVzIHx8IHJlamVjdGVkU3RhdHVzIHx8IGFwcHJvdmVkU3RhdHVzLFxyXG4gICAgICAgIGljb246IHN0YXR1cyA9PT0gXCJyZWplY3RlZFwiID8gPFdhcm5pbmdPdXRsaW5lZCAvPiA6IHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIgPyA8Q2xvY2tDaXJjbGVPdXRsaW5lZCAvPiA6IHN0YXR1cyA9PT0gXCJhcHByb3ZlZFwiID8gIDxDaGVja091dGxpbmVkLz4gOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgdGhlIGFwcGxpY2F0aW9uIHN0YXR1cyBhbmQgdXBkYXRlIHRoZSBzdGVwcyBhY2NvcmRpbmdseVxyXG4gICAgaWYgKHN0YXR1cyA9PT0gXCJyZWplY3RlZFwiKSB7XHJcbiAgICAgIHN0ZXBzWzJdLnN0YXR1cyA9IFwiZXJyb3JcIjsgLy8gU2V0IHRoZSBBcHByb3ZlZCBzdGVwIHRvIGVycm9yIHN0YXR1c1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XHJcbiAgICAgIHN0ZXBzWzJdLnN0YXR1cyA9IFwid2FpdFwiOyAvLyBTZXQgdGhlIEFwcHJvdmVkIHN0ZXAgdG8gd2FpdCBzdGF0dXMgZm9yIHBlbmRpbmcgYXBwbGljYXRpb25zXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0ZXBzO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U3RlcHNcclxuICAgICAgY3VycmVuPXswfVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjg1JVwiLCBtYXJnaW46IFwiMCBhdXRvXCIsIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiIH19XHJcbiAgICAgICAgaXRlbXM9e2dlbmVyYXRlU3RlcHMoYXBwbGljYXRpb25TdGF0dXMsIHN0YXR1c0J5Um9sZSl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvY2Vzc1N0ZXBzO1xyXG4iXSwibmFtZXMiOlsiU3RlcHMiLCJMb2FkaW5nT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJXYXJuaW5nT3V0bGluZWQiLCJDaGVja091dGxpbmVkIiwiQ2xvY2tDaXJjbGVPdXRsaW5lZCIsIlJlYWN0IiwiUHJvY2Vzc1N0ZXBzIiwiYXBwbGljYXRpb25TdGF0dXMiLCJzdGF0dXNCeVJvbGUiLCJnZW5lcmF0ZVN0ZXBzIiwic3RhdHVzIiwicm9sZSIsIkp1bmlvckxvYWRpbmdpY29uIiwiSnVuaW9yVXNlcmljb24iLCJTZW5pb3JMb2FkaW5naWNvbiIsIlNlbmlvclVzZXJpY29uIiwiVXNlcmljb24iLCJwZW5kaW5nU3RhdHVzIiwicmVqZWN0ZWRTdGF0dXMiLCJhcHByb3ZlZFN0YXR1cyIsInN0ZXBzIiwidGl0bGUiLCJpY29uIiwiZGl2IiwiY3VycmVuIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsImZvbnRGYW1pbHkiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dashboard/ProcessSteps.js\n"));

/***/ })

});