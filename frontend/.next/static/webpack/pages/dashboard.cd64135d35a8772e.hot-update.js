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

/***/ "./components/dashboard/ViewTestimonial.js":
/*!*************************************************!*\
  !*** ./components/dashboard/ViewTestimonial.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ViewTestimonial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons_lib_icons_FileTextOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/icons/FileTextOutlined */ \"./node_modules/@ant-design/icons/lib/icons/FileTextOutlined.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ViewTestimonial(param) {\n    let { setTestimonialtestimonialOpen, testimonialOpen } = param;\n    var _singleUserData, _singleUserData1;\n    _s();\n    const closeModal = ()=>{\n        setTestimonialtestimonialOpen(false);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const singleUserData = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setTestimonialtestimonialOpen(!testimonialOpen),\n                \"data-modal-target\": \"authentication-modal\",\n                \"data-modal-toggle\": \"authentication-modal\",\n                type: \"button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_FileTextOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    style: {\n                        fontSize: \"1.5rem\"\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"authentication-modal\",\n                tabIndex: \"-1\",\n                className: \"\".concat(testimonialOpen ? \"block bg-[#009688]\" : \"hidden\", \" fixed top-30 z-50 w-full p-4 md:inset-0 max-h-full\"),\n                // h-[calc(100%-1rem)]\n                \"aria-hidden\": !testimonialOpen,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-full max-w-2xl max-h-full\",\n                    style: {\n                        top: \"10%\",\n                        left: \"30%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative bg-white rounded-lg shadow dark:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: closeModal,\n                                className: \"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white\",\n                                \"data-modal-hide\": \"authentication-modal\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-3 h-3\",\n                                        \"aria-hidden\": !testimonialOpen,\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 14 14\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            stroke: \"currentColor\",\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: \"2\",\n                                            d: \"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Close modal\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: (_singleUserData = singleUserData) === null || _singleUserData === void 0 ? void 0 : _singleUserData.testimonialImage\n                            }, void 0, false, {\n                                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                                lineNumber: 67,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: (_singleUserData1 = singleUserData) === null || _singleUserData1 === void 0 ? void 0 : _singleUserData1.testimonialImage\n                            }, void 0, false, {\n                                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                                lineNumber: 68,\n                                columnNumber: 1\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\ViewTestimonial.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(ViewTestimonial, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ViewTestimonial;\nvar _c;\n$RefreshReg$(_c, \"ViewTestimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9WaWV3VGVzdGltb25pYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQzRCO0FBQ2I7QUFDekIsU0FBU0csZ0JBQWdCLEtBQWdEO1FBQWhELEVBQUNDLDZCQUE2QixFQUFFQyxlQUFlLEVBQUMsR0FBaEQ7UUErRHBDQyxpQkFDTUE7O0lBOURSLE1BQU1DLGFBQWE7UUFDakJILDhCQUE4QjtJQUNoQztJQUNBLE1BQU1JLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNSSxpQkFBaUJFLE9BQU9DLEtBQUs7SUFDbkMscUJBQ0UsOERBQUNDOzswQkFFQyw4REFBQ0M7Z0JBQ0NDLFNBQVMsSUFBTVIsOEJBQThCLENBQUNDO2dCQUM5Q1EscUJBQWtCO2dCQUNsQkMscUJBQWtCO2dCQUNsQkMsTUFBSzswQkFFTCw0RUFBQ2Qsb0ZBQWdCQTtvQkFBRWUsT0FBTzt3QkFBRUMsVUFBVTtvQkFBUzs7Ozs7Ozs7Ozs7MEJBSWpELDhEQUFDUDtnQkFDQ1EsSUFBRztnQkFDSEMsVUFBUztnQkFDVEMsV0FBVyxHQUVWLE9BRENmLGtCQUFrQix1QkFBdUIsVUFDMUM7Z0JBQ0Qsc0JBQXNCO2dCQUN0QmdCLGVBQWEsQ0FBQ2hCOzBCQUVkLDRFQUFDSztvQkFDQ1UsV0FBVTtvQkFDUEosT0FBTzt3QkFDUk0sS0FBSTt3QkFDSkMsTUFBSztvQkFDUDs4QkFHQSw0RUFBQ2I7d0JBQUlVLFdBQVU7OzBDQUNiLDhEQUFDVDtnQ0FDQ0ksTUFBSztnQ0FDTEgsU0FBU0w7Z0NBQ1RhLFdBQVU7Z0NBQ1ZJLG1CQUFnQjs7a0RBRWhCLDhEQUFDQzt3Q0FDQ0wsV0FBVTt3Q0FDVkMsZUFBYSxDQUFDaEI7d0NBQ2RxQixPQUFNO3dDQUNOQyxNQUFLO3dDQUNMQyxTQUFRO2tEQUVSLDRFQUFDQzs0Q0FDQ0MsUUFBTzs0Q0FDUEMsZUFBYzs0Q0FDZEMsZ0JBQWU7NENBQ2ZDLGFBQVk7NENBQ1pDLEdBQUU7Ozs7Ozs7Ozs7O2tEQUdOLDhEQUFDQzt3Q0FBS2YsV0FBVTtrREFBVTs7Ozs7Ozs7Ozs7OzBDQUl4Qyw4REFBQ2dCOzJDQUFHOUIsa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCK0IsZ0JBQWdCOzs7Ozs7MENBQ3BDLDhEQUFDQztnQ0FBSUMsR0FBRyxHQUFFakMsbUJBQUFBLDRCQUFBQSx1Q0FBQUEsaUJBQWdCK0IsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDO0dBdEV3QmxDOztRQUtQRCxrREFBU0E7OztLQUxGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9WaWV3VGVzdGltb25pYWwuanM/Y2UwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpbGVUZXh0T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdUZXN0aW1vbmlhbCh7c2V0VGVzdGltb25pYWx0ZXN0aW1vbmlhbE9wZW4sIHRlc3RpbW9uaWFsT3Blbn0pIHtcclxuICAgIFxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRUZXN0aW1vbmlhbHRlc3RpbW9uaWFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzaW5nbGVVc2VyRGF0YSA9IHJvdXRlci5xdWVyeTsgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogPCEtLSBNb2RhbCB0b2dnbGUgLS0+ICovfVxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGVzdGltb25pYWx0ZXN0aW1vbmlhbE9wZW4oIXRlc3RpbW9uaWFsT3Blbil9XHJcbiAgICAgICAgZGF0YS1tb2RhbC10YXJnZXQ9XCJhdXRoZW50aWNhdGlvbi1tb2RhbFwiXHJcbiAgICAgICAgZGF0YS1tb2RhbC10b2dnbGU9XCJhdXRoZW50aWNhdGlvbi1tb2RhbFwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8RmlsZVRleHRPdXRsaW5lZCAgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0vPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiA8IS0tIE1haW4gbW9kYWwgLS0+ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJhdXRoZW50aWNhdGlvbi1tb2RhbFwiXHJcbiAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgIHRlc3RpbW9uaWFsT3BlbiA/IFwiYmxvY2sgYmctWyMwMDk2ODhdXCIgOiBcImhpZGRlblwiXHJcbiAgICAgICAgfSBmaXhlZCB0b3AtMzAgei01MCB3LWZ1bGwgcC00IG1kOmluc2V0LTAgbWF4LWgtZnVsbGB9XHJcbiAgICAgICAgLy8gaC1bY2FsYygxMDAlLTFyZW0pXVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPXshdGVzdGltb25pYWxPcGVufVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIG1heC13LTJ4bCBtYXgtaC1mdWxsXCJcclxuICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRvcDpcIjEwJVwiLFxyXG4gICAgICAgICAgICBsZWZ0OlwiMzAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0zIHJpZ2h0LTIuNSB0ZXh0LWdyYXktNDAwIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWdyYXktMjAwIGhvdmVyOnRleHQtZ3JheS05MDAgcm91bmRlZC1sZyB0ZXh0LXNtIHctOCBoLTggbWwtYXV0byBpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtbW9kYWwtaGlkZT1cImF1dGhlbnRpY2F0aW9uLW1vZGFsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMyBoLTNcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49eyF0ZXN0aW1vbmlhbE9wZW59XHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTQgMTRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwibTEgMSA2IDZtMCAwIDYgNk03IDdsNi02TTcgN2wtNiA2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNsb3NlIG1vZGFsPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuey8qICAqL31cclxuXHJcbjxwPntzaW5nbGVVc2VyRGF0YT8udGVzdGltb25pYWxJbWFnZX08L3A+XHJcbjxpbWcgc3JjPXtzaW5nbGVVc2VyRGF0YT8udGVzdGltb25pYWxJbWFnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmlsZVRleHRPdXRsaW5lZCIsInVzZVJvdXRlciIsIlZpZXdUZXN0aW1vbmlhbCIsInNldFRlc3RpbW9uaWFsdGVzdGltb25pYWxPcGVuIiwidGVzdGltb25pYWxPcGVuIiwic2luZ2xlVXNlckRhdGEiLCJjbG9zZU1vZGFsIiwicm91dGVyIiwicXVlcnkiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiZGF0YS1tb2RhbC10YXJnZXQiLCJkYXRhLW1vZGFsLXRvZ2dsZSIsInR5cGUiLCJzdHlsZSIsImZvbnRTaXplIiwiaWQiLCJ0YWJJbmRleCIsImNsYXNzTmFtZSIsImFyaWEtaGlkZGVuIiwidG9wIiwibGVmdCIsImRhdGEtbW9kYWwtaGlkZSIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJwYXRoIiwic3Ryb2tlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwic3BhbiIsInAiLCJ0ZXN0aW1vbmlhbEltYWdlIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/ViewTestimonial.js\n"));

/***/ })

});