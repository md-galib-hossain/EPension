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

/***/ "./components/dashboard/ViewReason.js":
/*!********************************************!*\
  !*** ./components/dashboard/ViewReason.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ViewReason; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons_lib_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/icons/EyeOutlined */ \"./node_modules/@ant-design/icons/lib/icons/EyeOutlined.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction ViewReason(param) {\n    let { setOpen, open, rejectionReason, rejected_by_role } = param;\n    const closeModal = ()=>{\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setOpen(!open),\n                \"data-modal-target\": \"authentication-modal\",\n                \"data-modal-toggle\": \"authentication-modal\",\n                type: \"button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    style: {\n                        color: \"green\",\n                        fontSize: \"1.5rem\"\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"authentication-modal\",\n                tabIndex: \"-1\",\n                className: \"\".concat(open ? \"block bg-[#009688]\" : \"hidden\", \" fixed top-30 z-50 w-full p-4 md:inset-0 max-h-full\"),\n                // h-[calc(100%-1rem)]\n                \"aria-hidden\": !open,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-full max-w-2xl max-h-full\",\n                    style: {\n                        top: \"10%\",\n                        left: \"30%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative bg-white rounded-lg shadow dark:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: closeModal,\n                                className: \"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white\",\n                                \"data-modal-hide\": \"authentication-modal\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-3 h-3\",\n                                        \"aria-hidden\": !open,\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 14 14\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            stroke: \"currentColor\",\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: \"2\",\n                                            d: \"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Close modal\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-6 py-6 lg:px-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"mb-4 text-xl font-medium text-gray-900 dark:text-white\",\n                                        children: \"Rejection Reason\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"space-y-6 flex-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: rejectionReason\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 51\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"space-y-6 flex-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: rejected_by_role\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewReason.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ViewReason;\nvar _c;\n$RefreshReg$(_c, \"ViewReason\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9WaWV3UmVhc29uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3VCO0FBQ1I7QUFDekIsU0FBU0csV0FBVyxLQUFnRDtRQUFoRCxFQUFDQyxPQUFPLEVBQUVDLElBQUksRUFBQ0MsZUFBZSxFQUFDQyxnQkFBZ0IsRUFBQyxHQUFoRDtJQUVqQyxNQUFNQyxhQUFhO1FBQ2pCSixRQUFRO0lBQ1Y7SUFDQSxxQkFDRSw4REFBQ0s7OzBCQUVDLDhEQUFDQztnQkFDQ0MsU0FBUyxJQUFNUCxRQUFRLENBQUNDO2dCQUN4Qk8scUJBQWtCO2dCQUNsQkMscUJBQWtCO2dCQUNsQkMsTUFBSzswQkFFTCw0RUFBQ2IsK0VBQVdBO29CQUFDYyxPQUFPO3dCQUFFQyxPQUFPO3dCQUFTQyxVQUFVO29CQUFTOzs7Ozs7Ozs7OzswQkFJM0QsOERBQUNSO2dCQUNDUyxJQUFHO2dCQUNIQyxVQUFTO2dCQUNUQyxXQUFXLEdBRVYsT0FEQ2YsT0FBTyx1QkFBdUIsVUFDL0I7Z0JBQ0Qsc0JBQXNCO2dCQUN0QmdCLGVBQWEsQ0FBQ2hCOzBCQUVkLDRFQUFDSTtvQkFDQ1csV0FBVTtvQkFDUEwsT0FBTzt3QkFDUk8sS0FBSTt3QkFDSkMsTUFBSztvQkFDUDs4QkFHQSw0RUFBQ2Q7d0JBQUlXLFdBQVU7OzBDQUNiLDhEQUFDVjtnQ0FDQ0ksTUFBSztnQ0FDTEgsU0FBU0g7Z0NBQ1RZLFdBQVU7Z0NBQ1ZJLG1CQUFnQjs7a0RBRWhCLDhEQUFDQzt3Q0FDQ0wsV0FBVTt3Q0FDVkMsZUFBYSxDQUFDaEI7d0NBQ2RxQixPQUFNO3dDQUNOQyxNQUFLO3dDQUNMQyxTQUFRO2tEQUVSLDRFQUFDQzs0Q0FDQ0MsUUFBTzs0Q0FDUEMsZUFBYzs0Q0FDZEMsZ0JBQWU7NENBQ2ZDLGFBQVk7NENBQ1pDLEdBQUU7Ozs7Ozs7Ozs7O2tEQUdOLDhEQUFDQzt3Q0FBS2YsV0FBVTtrREFBVTs7Ozs7Ozs7Ozs7OzBDQUc1Qiw4REFBQ1g7Z0NBQUlXLFdBQVU7O2tEQUNiLDhEQUFDZ0I7d0NBQUdoQixXQUFVO2tEQUF5RDs7Ozs7O2tEQUl2RSw4REFBQ1g7d0NBQUlXLFdBQVU7OzBEQUdiLDhEQUFDWDtnREFBSVcsV0FBVTswREFBbUIsNEVBQUNnQjs4REFDOUI5Qjs7Ozs7Ozs7Ozs7MERBR0wsOERBQUNHO2dEQUFJVyxXQUFVOzBEQUNYLDRFQUFDZ0I7OERBQUk3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3pCO0tBbEZ3QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvVmlld1JlYXNvbi5qcz84ZGM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRXllT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdSZWFzb24oe3NldE9wZW4sIG9wZW4scmVqZWN0aW9uUmVhc29uLHJlamVjdGVkX2J5X3JvbGV9KSB7XHJcbiAgICBcclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIDwhLS0gTW9kYWwgdG9nZ2xlIC0tPiAqL31cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgIGRhdGEtbW9kYWwtdGFyZ2V0PVwiYXV0aGVudGljYXRpb24tbW9kYWxcIlxyXG4gICAgICAgIGRhdGEtbW9kYWwtdG9nZ2xlPVwiYXV0aGVudGljYXRpb24tbW9kYWxcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEV5ZU91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIsIGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgey8qIDwhLS0gTWFpbiBtb2RhbCAtLT4gKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cImF1dGhlbnRpY2F0aW9uLW1vZGFsXCJcclxuICAgICAgICB0YWJJbmRleD1cIi0xXCJcclxuICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgb3BlbiA/IFwiYmxvY2sgYmctWyMwMDk2ODhdXCIgOiBcImhpZGRlblwiXHJcbiAgICAgICAgfSBmaXhlZCB0b3AtMzAgei01MCB3LWZ1bGwgcC00IG1kOmluc2V0LTAgbWF4LWgtZnVsbGB9XHJcbiAgICAgICAgLy8gaC1bY2FsYygxMDAlLTFyZW0pXVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPXshb3Blbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBtYXgtdy0yeGwgbWF4LWgtZnVsbFwiXHJcbiAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0b3A6XCIxMCVcIixcclxuICAgICAgICAgICAgbGVmdDpcIjMwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogPCEtLSBNb2RhbCBjb250ZW50IC0tPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMyByaWdodC0yLjUgdGV4dC1ncmF5LTQwMCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ncmF5LTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbGcgdGV4dC1zbSB3LTggaC04IG1sLWF1dG8gaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICBkYXRhLW1vZGFsLWhpZGU9XCJhdXRoZW50aWNhdGlvbi1tb2RhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMgaC0zXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXshb3Blbn1cclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNCAxNFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJtMSAxIDYgNm0wIDAgNiA2TTcgN2w2LTZNNyA3bC02IDZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q2xvc2UgbW9kYWw8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi00IHRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIFJlamVjdGlvbiBSZWFzb25cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIHsvKiBtYWluIGZsZXggc3RhcnQgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogcGVyc29uYWwgaW5mb3JtYXRpb24gc3RhcnQgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgZmxleC0xXCI+PGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWplY3Rpb25SZWFzb259XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntyZWplY3RlZF9ieV9yb2xlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJFeWVPdXRsaW5lZCIsInVzZVJvdXRlciIsIlZpZXdSZWFzb24iLCJzZXRPcGVuIiwib3BlbiIsInJlamVjdGlvblJlYXNvbiIsInJlamVjdGVkX2J5X3JvbGUiLCJjbG9zZU1vZGFsIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImRhdGEtbW9kYWwtdGFyZ2V0IiwiZGF0YS1tb2RhbC10b2dnbGUiLCJ0eXBlIiwic3R5bGUiLCJjb2xvciIsImZvbnRTaXplIiwiaWQiLCJ0YWJJbmRleCIsImNsYXNzTmFtZSIsImFyaWEtaGlkZGVuIiwidG9wIiwibGVmdCIsImRhdGEtbW9kYWwtaGlkZSIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJwYXRoIiwic3Ryb2tlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwic3BhbiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/ViewReason.js\n"));

/***/ })

});