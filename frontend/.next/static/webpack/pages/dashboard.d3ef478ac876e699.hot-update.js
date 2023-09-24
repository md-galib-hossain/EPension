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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/steps */ \"./node_modules/antd/lib/steps/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LoadingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ \"./node_modules/@ant-design/icons/lib/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/WarningOutlined */ \"./node_modules/@ant-design/icons/lib/icons/WarningOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CheckOutlined */ \"./node_modules/@ant-design/icons/lib/icons/CheckOutlined.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./components/dashboard/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\nconst ProcessSteps = (param)=>{\n    let { applicationStatus, statusByRole } = param;\n    const generateSteps = (status, role)=>{\n        const JuniorLoadingicon = status === \"pending\" && role === \"juniorOfficer\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined) : status === \"approved\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined) : null;\n        const JuniorUsericon = status === \"pending\" && role === \"assistantGeneral\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined) : null;\n        const SeniorLoadingicon = status === \"pending\" && role === \"assistantGeneral\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined) : null;\n        const SeniorUsericon = status === \"approved\" && role === \"assistantGeneral\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined) : null;\n        const Usericon = status === \"rejected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, undefined) : status === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined) : null;\n        const pendingStatus = status === \"pending\" && \"Pending\";\n        const rejectedStatus = status === \"rejected\" && \"Rejected\";\n        const approvedStatus = status === \"approved\" && \"Approved\";\n        const steps = [\n            {\n                title: \"Junior Officer\",\n                icon: JuniorLoadingicon || JuniorUsericon || Usericon\n            },\n            {\n                title: \"Assistant General\",\n                icon: SeniorLoadingicon || SeniorUsericon || Usericon\n            },\n            {\n                title: pendingStatus || rejectedStatus || approvedStatus,\n                icon: status === \"rejected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n                    lineNumber: 58,\n                    columnNumber: 39\n                }, undefined) : status === \"pending\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n                    lineNumber: 58,\n                    columnNumber: 84\n                }, undefined) : status === \"approved\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n                    lineNumber: 58,\n                    columnNumber: 131\n                }, undefined) : null\n            }\n        ];\n        // Check for the application status and update the steps accordingly\n        if (status === \"rejected\") {\n            steps[2].status = \"error\"; // Set the Approved step to error status\n        } else if (status === \"pending\") {\n            steps[2].status = \"wait\"; // Set the Approved step to wait status for pending applications\n        }\n        return steps;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_steps__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            style: {\n                width: \"85%\",\n                margin: \"0 auto\",\n                fontFamily: \"sans-serif\"\n            },\n            items: generateSteps(applicationStatus, statusByRole)\n        }, void 0, false, {\n            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ProcessSteps.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProcessSteps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessSteps);\nvar _c;\n$RefreshReg$(_c, \"ProcessSteps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9Qcm9jZXNzU3RlcHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBS0Y7QUFBQTtBQUFBO0FBQUE7QUFDRDtBQUNMO0FBRXJCLE1BQU1NLGVBQWU7UUFBQyxFQUFFQyxpQkFBaUIsRUFBRUMsWUFBWSxFQUFFO0lBQ3ZELE1BQU1DLGdCQUFnQixDQUFDQyxRQUFRQztRQUM3QixNQUFNQyxvQkFDSkYsV0FBVyxhQUFhQyxTQUFTLGdDQUMvQiw4REFBQ1YsbUZBQWVBOzs7O3dCQUNkUyxXQUFXLG1CQUNiLDhEQUFDUixnRkFBWUE7Ozs7d0JBQ1hRLFdBQVcsMkJBQ2IsOERBQUNSLGdGQUFZQTs7Ozt3QkFBUztRQUMxQixNQUFNVyxpQkFDSkgsV0FBVyxhQUFhQyxTQUFTLG1DQUMvQiw4REFBQ1QsZ0ZBQVlBOzs7O3dCQUNYUSxXQUFXLG1CQUNiLDhEQUFDUixnRkFBWUE7Ozs7d0JBQ1g7UUFFTixNQUFNWSxvQkFDSkosV0FBVyxhQUFhQyxTQUFTLG1DQUMvQiw4REFBQ1YsbUZBQWVBOzs7O3dCQUNkUyxXQUFXLG1CQUNiLDhEQUFDUixnRkFBWUE7Ozs7d0JBQ1g7UUFDTixNQUFNYSxpQkFDSkwsV0FBVyxjQUFjQyxTQUFTLG1DQUNoQyw4REFBQ1QsZ0ZBQVlBOzs7O3dCQUNYUSxXQUFXLG1CQUNiLDhEQUFDUixnRkFBWUE7Ozs7d0JBQ1g7UUFDSixNQUFNYyxXQUNOTixXQUFXLDJCQUNULDhEQUFDUixnRkFBWUE7Ozs7d0JBQ1hRLFdBQVcsbUJBQ2IsOERBQUNSLGdGQUFZQTs7Ozt3QkFDWDtRQUNOLE1BQU1lLGdCQUFnQlAsV0FBVyxhQUFhO1FBQzlDLE1BQU1RLGlCQUFpQlIsV0FBVyxjQUFjO1FBQ2hELE1BQU1TLGlCQUFpQlQsV0FBVyxjQUFjO1FBQ2hELE1BQU1VLFFBQVE7WUFDWjtnQkFDRUMsT0FBTztnQkFDUEMsTUFBTVYscUJBQXFCQyxrQkFBa0JHO1lBQy9DO1lBQ0E7Z0JBQ0VLLE9BQU87Z0JBQ1BDLE1BQU1SLHFCQUFxQkMsa0JBQWtCQztZQUMvQztZQUNBO2dCQUNFSyxPQUFPSixpQkFBaUJDLGtCQUFrQkM7Z0JBQzFDRyxNQUFNWixXQUFXLDJCQUFhLDhEQUFDUCxtRkFBZUE7Ozs7Z0NBQU1PLFdBQVcsMEJBQVksOERBQUNQLG1GQUFlQTs7OztnQ0FBTU8sV0FBVywyQkFBYyw4REFBQ04saUZBQWFBOzs7O2dDQUFLO1lBQy9JO1NBQ0Q7UUFFRCxvRUFBb0U7UUFDcEUsSUFBSU0sV0FBVyxZQUFZO1lBQ3pCVSxLQUFLLENBQUMsRUFBRSxDQUFDVixNQUFNLEdBQUcsU0FBUyx3Q0FBd0M7UUFDckUsT0FBTyxJQUFJQSxXQUFXLFdBQVc7WUFDL0JVLEtBQUssQ0FBQyxFQUFFLENBQUNWLE1BQU0sR0FBRyxRQUFRLGdFQUFnRTtRQUM1RjtRQUVBLE9BQU9VO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUN2QixzREFBS0E7WUFDSndCLE9BQU87Z0JBQUVDLE9BQU87Z0JBQU9DLFFBQVE7Z0JBQVVDLFlBQVk7WUFBYTtZQUNsRUMsT0FBT25CLGNBQWNGLG1CQUFtQkM7Ozs7Ozs7Ozs7O0FBSWhEO0tBdEVNRjtBQXdFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9Qcm9jZXNzU3RlcHMuanM/NGY0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGVwcyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgTG9hZGluZ091dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBXYXJuaW5nT3V0bGluZWQsQ2hlY2tPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5jb25zdCBQcm9jZXNzU3RlcHMgPSAoeyBhcHBsaWNhdGlvblN0YXR1cywgc3RhdHVzQnlSb2xlIH0pID0+IHtcclxuICBjb25zdCBnZW5lcmF0ZVN0ZXBzID0gKHN0YXR1cywgcm9sZSkgPT4ge1xyXG4gICAgY29uc3QgSnVuaW9yTG9hZGluZ2ljb24gPVxyXG4gICAgICBzdGF0dXMgPT09IFwicGVuZGluZ1wiICYmIHJvbGUgPT09IFwianVuaW9yT2ZmaWNlclwiID8gKFxyXG4gICAgICAgIDxMb2FkaW5nT3V0bGluZWQgLz5cclxuICAgICAgKSA6IHN0YXR1cyA9PT0gXCJcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+XHJcbiAgICAgICkgOiBzdGF0dXMgPT09IFwiYXBwcm92ZWRcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+ICkgOiAgbnVsbDtcclxuICAgIGNvbnN0IEp1bmlvclVzZXJpY29uID1cclxuICAgICAgc3RhdHVzID09PSBcInBlbmRpbmdcIiAmJiByb2xlID09PSBcImFzc2lzdGFudEdlbmVyYWxcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+XHJcbiAgICAgICkgOiBzdGF0dXMgPT09IFwiXCIgPyAoXHJcbiAgICAgICAgPFVzZXJPdXRsaW5lZCAvPlxyXG4gICAgICApIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBTZW5pb3JMb2FkaW5naWNvbiA9XHJcbiAgICAgIHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIgJiYgcm9sZSA9PT0gXCJhc3Npc3RhbnRHZW5lcmFsXCIgPyAoXHJcbiAgICAgICAgPExvYWRpbmdPdXRsaW5lZCAvPlxyXG4gICAgICApIDogc3RhdHVzID09PSBcIlwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IG51bGw7XHJcbiAgICBjb25zdCBTZW5pb3JVc2VyaWNvbiA9XHJcbiAgICAgIHN0YXR1cyA9PT0gXCJhcHByb3ZlZFwiICYmIHJvbGUgPT09IFwiYXNzaXN0YW50R2VuZXJhbFwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IHN0YXR1cyA9PT0gXCJcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+XHJcbiAgICAgICkgOiBudWxsO1xyXG4gICAgICBjb25zdCBVc2VyaWNvbiA9XHJcbiAgICAgIHN0YXR1cyA9PT0gXCJyZWplY3RlZFwiID8gKFxyXG4gICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgKSA6IHN0YXR1cyA9PT0gXCJcIiA/IChcclxuICAgICAgICA8VXNlck91dGxpbmVkIC8+XHJcbiAgICAgICkgOiBudWxsO1xyXG4gICAgY29uc3QgcGVuZGluZ1N0YXR1cyA9IHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIgJiYgXCJQZW5kaW5nXCI7XHJcbiAgICBjb25zdCByZWplY3RlZFN0YXR1cyA9IHN0YXR1cyA9PT0gXCJyZWplY3RlZFwiICYmIFwiUmVqZWN0ZWRcIjtcclxuICAgIGNvbnN0IGFwcHJvdmVkU3RhdHVzID0gc3RhdHVzID09PSBcImFwcHJvdmVkXCIgJiYgXCJBcHByb3ZlZFwiO1xyXG4gICAgY29uc3Qgc3RlcHMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJKdW5pb3IgT2ZmaWNlclwiLFxyXG4gICAgICAgIGljb246IEp1bmlvckxvYWRpbmdpY29uIHx8IEp1bmlvclVzZXJpY29uIHx8IFVzZXJpY29uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQXNzaXN0YW50IEdlbmVyYWxcIixcclxuICAgICAgICBpY29uOiBTZW5pb3JMb2FkaW5naWNvbiB8fCBTZW5pb3JVc2VyaWNvbiB8fCBVc2VyaWNvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBwZW5kaW5nU3RhdHVzIHx8IHJlamVjdGVkU3RhdHVzIHx8IGFwcHJvdmVkU3RhdHVzLFxyXG4gICAgICAgIGljb246IHN0YXR1cyA9PT0gXCJyZWplY3RlZFwiID8gPFdhcm5pbmdPdXRsaW5lZCAvPiA6IHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIgPyA8V2FybmluZ091dGxpbmVkIC8+IDogc3RhdHVzID09PSBcImFwcHJvdmVkXCIgPyAgPENoZWNrT3V0bGluZWQvPiA6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciB0aGUgYXBwbGljYXRpb24gc3RhdHVzIGFuZCB1cGRhdGUgdGhlIHN0ZXBzIGFjY29yZGluZ2x5XHJcbiAgICBpZiAoc3RhdHVzID09PSBcInJlamVjdGVkXCIpIHtcclxuICAgICAgc3RlcHNbMl0uc3RhdHVzID0gXCJlcnJvclwiOyAvLyBTZXQgdGhlIEFwcHJvdmVkIHN0ZXAgdG8gZXJyb3Igc3RhdHVzXHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHtcclxuICAgICAgc3RlcHNbMl0uc3RhdHVzID0gXCJ3YWl0XCI7IC8vIFNldCB0aGUgQXBwcm92ZWQgc3RlcCB0byB3YWl0IHN0YXR1cyBmb3IgcGVuZGluZyBhcHBsaWNhdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RlcHM7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTdGVwc1xyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjg1JVwiLCBtYXJnaW46IFwiMCBhdXRvXCIsIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiIH19XHJcbiAgICAgICAgaXRlbXM9e2dlbmVyYXRlU3RlcHMoYXBwbGljYXRpb25TdGF0dXMsIHN0YXR1c0J5Um9sZSl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvY2Vzc1N0ZXBzO1xyXG4iXSwibmFtZXMiOlsiU3RlcHMiLCJMb2FkaW5nT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJXYXJuaW5nT3V0bGluZWQiLCJDaGVja091dGxpbmVkIiwiUmVhY3QiLCJQcm9jZXNzU3RlcHMiLCJhcHBsaWNhdGlvblN0YXR1cyIsInN0YXR1c0J5Um9sZSIsImdlbmVyYXRlU3RlcHMiLCJzdGF0dXMiLCJyb2xlIiwiSnVuaW9yTG9hZGluZ2ljb24iLCJKdW5pb3JVc2VyaWNvbiIsIlNlbmlvckxvYWRpbmdpY29uIiwiU2VuaW9yVXNlcmljb24iLCJVc2VyaWNvbiIsInBlbmRpbmdTdGF0dXMiLCJyZWplY3RlZFN0YXR1cyIsImFwcHJvdmVkU3RhdHVzIiwic3RlcHMiLCJ0aXRsZSIsImljb24iLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luIiwiZm9udEZhbWlseSIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/ProcessSteps.js\n"));

/***/ })

});