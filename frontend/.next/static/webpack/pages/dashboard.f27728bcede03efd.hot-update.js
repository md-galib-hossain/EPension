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

/***/ "./components/dashboard/PerformanceChart.js":
/*!**************************************************!*\
  !*** ./components/dashboard/PerformanceChart.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PerformanceChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/component/Tooltip.js\");\n\n\n\nfunction PerformanceChart(param) {\n    let { applicationCountByMonth } = param;\n    // const CustomizedDot = (props) => {\n    //     const { cx, cy, stroke, payload, value } = props;\n    //     if (value > 0.7) {\n    //       return (\n    //         <svg x={cx - 10} y={cy - 10} width={20} height={20} fill=\"green\" viewBox=\"0 0 1024 1024\">\n    //           <path d=\"M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z\" />\n    //         </svg>\n    //       );\n    //     }\n    //     return (\n    //       <svg x={cx - 10} y={cy - 10} width={20} height={20} fill=\"red\" viewBox=\"0 0 1024 1024\">\n    //         <path d=\"M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z\" />\n    //       </svg>\n    //     );\n    //   };\n    const gradientOffset = ()=>{\n        const dataMax = Math.max(...applicationCountByMonth.map((i)=>i.performance));\n        const dataMin = Math.min(...applicationCountByMonth.map((i)=>i.performance));\n        if (dataMax <= 0.5) {\n            return 0;\n        }\n        if (dataMin >= 0.51) {\n            return 1;\n        }\n        return dataMax / (dataMax - dataMin);\n    };\n    const off = gradientOffset();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-96 my-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"PerformanceChart\"\n            }, void 0, false, {\n                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n                width: \"100%\",\n                height: \"100%\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AreaChart, {\n                    width: 500,\n                    height: 400,\n                    data: applicationCountByMonth,\n                    margin: {\n                        top: 10,\n                        right: 30,\n                        left: 0,\n                        bottom: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {\n                            strokeDasharray: \"3 3\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                            dataKey: \"month\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, {}, void 0, false, {\n                            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {}, void 0, false, {\n                            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                id: \"splitColor\",\n                                x1: \"0\",\n                                y1: \"0\",\n                                x2: \"0\",\n                                y2: \"1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                        offset: off,\n                                        stopColor: \"green\",\n                                        stopOpacity: 1\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                        offset: off,\n                                        stopColor: \"red\",\n                                        stopOpacity: 1\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Area, {\n                            type: \"monotone\",\n                            dataKey: \"performance\",\n                            stroke: \"#000\",\n                            fill: \"url(#splitColor)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n                lineNumber: 61,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\programming hero\\\\projects\\\\Pernsion Project\\\\EPension\\\\frontend\\\\components\\\\dashboard\\\\PerformanceChart.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c = PerformanceChart;\nvar _c;\n$RefreshReg$(_c, \"PerformanceChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9QZXJmb3JtYW5jZUNoYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDcUY7QUFFL0YsU0FBU1MsaUJBQWlCLEtBQTJCO1FBQTNCLEVBQUVDLHVCQUF1QixFQUFFLEdBQTNCO0lBQ3JDLHFDQUFxQztJQUNyQyx3REFBd0Q7SUFFeEQseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvR0FBb0c7SUFDcEcsNnhCQUE2eEI7SUFDN3hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsUUFBUTtJQUVSLGVBQWU7SUFDZixnR0FBZ0c7SUFDaEcsNjlCQUE2OUI7SUFDNzlCLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUVQLE1BQU1DLGlCQUFpQjtRQUNuQixNQUFNQyxVQUFVQyxLQUFLQyxHQUFHLElBQUlKLHdCQUF3QkssR0FBRyxDQUFDLENBQUNDLElBQU1BLEVBQUVDLFdBQVc7UUFDNUUsTUFBTUMsVUFBVUwsS0FBS00sR0FBRyxJQUFJVCx3QkFBd0JLLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxXQUFXO1FBRTVFLElBQUlMLFdBQVcsS0FBSztZQUNsQixPQUFPO1FBQ1Q7UUFDQSxJQUFJTSxXQUFXLE1BQU07WUFDbkIsT0FBTztRQUNUO1FBRUEsT0FBT04sVUFBV0EsQ0FBQUEsVUFBVU0sT0FBTTtJQUNwQztJQUVBLE1BQU1FLE1BQU1UO0lBRWhCLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBb0I1Qyw4REFBQ2pCLHlEQUFtQkE7Z0JBQUNtQixPQUFNO2dCQUFPQyxRQUFPOzBCQUNqQyw0RUFBQ0M7b0JBQ0NGLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JFLE1BQU1qQjtvQkFDTmtCLFFBQVE7d0JBQ05DLEtBQUs7d0JBQ0xDLE9BQU87d0JBQ1BDLE1BQU07d0JBQ05DLFFBQVE7b0JBQ1Y7O3NDQUVBLDhEQUFDL0IsbURBQWFBOzRCQUFDZ0MsaUJBQWdCOzs7Ozs7c0NBQy9CLDhEQUFDMUIsMkNBQUtBOzRCQUFDMkIsU0FBUTs7Ozs7O3NDQUNmLDhEQUFDMUIsMkNBQUtBOzs7OztzQ0FDTiw4REFBQ0YsNkNBQU9BOzs7OztzQ0FDUiw4REFBQzZCO3NDQUNDLDRFQUFDQztnQ0FBZUMsSUFBRztnQ0FBYUMsSUFBRztnQ0FBSUMsSUFBRztnQ0FBSUMsSUFBRztnQ0FBSUMsSUFBRzs7a0RBQ3RELDhEQUFDQzt3Q0FBS0MsUUFBUXZCO3dDQUFLd0IsV0FBVTt3Q0FBUUMsYUFBYTs7Ozs7O2tEQUNsRCw4REFBQ0g7d0NBQUtDLFFBQVF2Qjt3Q0FBS3dCLFdBQVU7d0NBQU1DLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdwRCw4REFBQ0M7NEJBQUtDLE1BQUs7NEJBQVdiLFNBQVE7NEJBQWNjLFFBQU87NEJBQU9DLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpFO0tBckZ3QnhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1BlcmZvcm1hbmNlQ2hhcnQuanM/NTNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcnRlc2lhbkdyaWQsIExlZ2VuZCwgTGluZSwgTGluZUNoYXJ0LCBSZXNwb25zaXZlQ29udGFpbmVyLCBUb29sdGlwLCBYQXhpcywgWUF4aXMgfSBmcm9tICdyZWNoYXJ0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJmb3JtYW5jZUNoYXJ0KHsgYXBwbGljYXRpb25Db3VudEJ5TW9udGggfSkge1xyXG4gICAgLy8gY29uc3QgQ3VzdG9taXplZERvdCA9IChwcm9wcykgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHsgY3gsIGN5LCBzdHJva2UsIHBheWxvYWQsIHZhbHVlIH0gPSBwcm9wcztcclxuICAgICAgXHJcbiAgICAvLyAgICAgaWYgKHZhbHVlID4gMC43KSB7XHJcbiAgICAvLyAgICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgICA8c3ZnIHg9e2N4IC0gMTB9IHk9e2N5IC0gMTB9IHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gZmlsbD1cImdyZWVuXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIj5cclxuICAgIC8vICAgICAgICAgICA8cGF0aCBkPVwiTTUxMiAxMDA5Ljk4NGMtMjc0LjkxMiAwLTQ5Ny43Ni0yMjIuODQ4LTQ5Ny43Ni00OTcuNzZzMjIyLjg0OC00OTcuNzYgNDk3Ljc2LTQ5Ny43NmMyNzQuOTEyIDAgNDk3Ljc2IDIyMi44NDggNDk3Ljc2IDQ5Ny43NnMtMjIyLjg0OCA0OTcuNzYtNDk3Ljc2IDQ5Ny43NnpNMzQwLjc2OCAyOTUuOTM2Yy0zOS40ODggMC03MS41MiAzMi44LTcxLjUyIDczLjI0OHMzMi4wMzIgNzMuMjQ4IDcxLjUyIDczLjI0OGMzOS40ODggMCA3MS41Mi0zMi44IDcxLjUyLTczLjI0OHMtMzIuMDMyLTczLjI0OC03MS41Mi03My4yNDh6TTY4Ni4xNzYgMjk2LjcwNGMtMzkuNDg4IDAtNzEuNTIgMzIuOC03MS41MiA3My4yNDhzMzIuMDMyIDczLjI0OCA3MS41MiA3My4yNDhjMzkuNDg4IDAgNzEuNTItMzIuOCA3MS41Mi03My4yNDhzLTMyLjAzMi03My4yNDgtNzEuNTItNzMuMjQ4ek03NzIuOTI4IDU1NS4zOTJjLTE4Ljc1Mi04Ljg2NC00MC45MjgtMC41NzYtNDkuNjMyIDE4LjUyOC00MC4yMjQgODguNTc2LTEyMC4yNTYgMTQzLjU1Mi0yMDguODMyIDE0My41NTItODUuOTUyIDAtMTY0Ljg2NC01Mi42NC0yMDUuOTUyLTEzNy4zNzYtOS4xODQtMTguOTEyLTMxLjY0OC0yNi41OTItNTAuMDgtMTcuMjgtMTguNDY0IDkuNDA4LTIxLjIxNiAyMS40NzItMTUuOTM2IDMyLjY0IDUyLjggMTExLjQyNCAxNTUuMjMyIDE4Ni43ODQgMjY5Ljc2IDE4Ni43ODQgMTE3Ljk4NCAwIDIxNy4xMi03MC45NDQgMjY5Ljc2LTE4Ni43ODQgOC42NzItMTkuMTM2IDkuNTY4LTMxLjItOS4xMi00MC4wOTZ6XCIgLz5cclxuICAgIC8vICAgICAgICAgPC9zdmc+XHJcbiAgICAvLyAgICAgICApO1xyXG4gICAgLy8gICAgIH1cclxuICAgICAgXHJcbiAgICAvLyAgICAgcmV0dXJuIChcclxuICAgIC8vICAgICAgIDxzdmcgeD17Y3ggLSAxMH0geT17Y3kgLSAxMH0gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSBmaWxsPVwicmVkXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIj5cclxuICAgIC8vICAgICAgICAgPHBhdGggZD1cIk01MTcuMTIgNTMuMjQ4cTk1LjIzMiAwIDE3OS4yIDM2LjM1MnQxNDUuOTIgOTguMzA0IDk4LjMwNCAxNDUuOTIgMzYuMzUyIDE3OS4yLTM2LjM1MiAxNzkuMi05OC4zMDQgMTQ1LjkyLTE0NS45MiA5OC4zMDQtMTc5LjIgMzYuMzUyLTE3OS4yLTM2LjM1Mi0xNDUuOTItOTguMzA0LTk4LjMwNC0xNDUuOTItMzYuMzUyLTE3OS4yIDM2LjM1Mi0xNzkuMiA5OC4zMDQtMTQ1LjkyIDE0NS45Mi05OC4zMDQgMTc5LjItMzYuMzUyek02NjMuNTUyIDI2MS4xMnEtMTUuMzYgMC0yOC4xNiA2LjY1NnQtMjMuMDQgMTguNDMyLTE1Ljg3MiAyNy42NDgtNS42MzIgMzMuMjhxMCAzNS44NCAyMS41MDQgNjEuNDR0NTEuMiAyNS42IDUxLjItMjUuNiAyMS41MDQtNjEuNDRxMC0xNy40MDgtNS42MzItMzMuMjh0LTE1Ljg3Mi0yNy42NDgtMjMuMDQtMTguNDMyLTI4LjE2LTYuNjU2ek0zNzMuNzYgMjYxLjEycS0yOS42OTYgMC01MC42ODggMjUuMDg4dC0yMC45OTIgNjAuOTI4IDIwLjk5MiA2MS40NCA1MC42ODggMjUuNiA1MC4xNzYtMjUuNiAyMC40OC02MS40NC0yMC40OC02MC45MjgtNTAuMTc2LTI1LjA4OHpNNTIwLjE5MiA2MDIuMTEycS01MS4yIDAtOTcuMjggOS43Mjh0LTgyLjk0NCAyNy42NDgtNjIuNDY0IDQxLjQ3Mi0zNS44NCA1MS4ycS0xLjAyNCAxLjAyNC0xLjAyNCAyLjA0OC0xLjAyNCAzLjA3Mi0xLjAyNCA4LjcwNHQyLjU2IDExLjc3NiA3LjE2OCAxMS4yNjQgMTIuOCA2LjE0NHEyNS42LTI3LjY0OCA2Mi40NjQtNTAuMTc2IDMxLjc0NC0xOS40NTYgNzkuMzYtMzUuMzI4dDExNC4xNzYtMTUuODcycTY3LjU4NCAwIDExNi43MzYgMTUuODcydDgxLjkyIDM1LjMyOHEzNy44ODggMjIuNTI4IDYzLjQ4OCA1MC4xNzYgMTcuNDA4LTUuMTIgMTkuOTY4LTE4Ljk0NHQwLjUxMi0xOC45NDQtMy4wNzItNy4xNjgtMS4wMjQtMy4wNzJxLTI2LjYyNC01NS4yOTYtMTAwLjM1Mi04OC41NzZ0LTE3Ni4xMjgtMzMuMjh6XCIgLz5cclxuICAgIC8vICAgICAgIDwvc3ZnPlxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgIH07XHJcblxyXG4gICAgY29uc3QgZ3JhZGllbnRPZmZzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YU1heCA9IE1hdGgubWF4KC4uLmFwcGxpY2F0aW9uQ291bnRCeU1vbnRoLm1hcCgoaSkgPT4gaS5wZXJmb3JtYW5jZSkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFNaW4gPSBNYXRoLm1pbiguLi5hcHBsaWNhdGlvbkNvdW50QnlNb250aC5tYXAoKGkpID0+IGkucGVyZm9ybWFuY2UpKTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKGRhdGFNYXggPD0gMC41KSB7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGFNaW4gPj0gMC41MSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gZGF0YU1heCAvIChkYXRhTWF4IC0gZGF0YU1pbik7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBvZmYgPSBncmFkaWVudE9mZnNldCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05NiBteS0xMFwiPlxyXG4gICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+UGVyZm9ybWFuY2VDaGFydDwvaDI+XHJcbiAgICB7LyogPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgXHJcbiAgICAgICAgICBkYXRhPXthcHBsaWNhdGlvbkNvdW50QnlNb250aH1cclxuICAgICAgICAgIG1hcmdpbj17e1xyXG4gICAgICAgICAgICB0b3A6IDUsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzMCxcclxuICAgICAgICAgICAgLy8gbGVmdDogMjAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIC8+XHJcbiAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm1vbnRoXCIgLz5cclxuICAgICAgICAgIDxZQXhpcyAvPlxyXG4gICAgICAgICAgPFRvb2x0aXAgLz5cclxuICAgICAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwZXJmb3JtYW5jZVwiIHN0cm9rZT1cIiMwRTM2NEFcIiBkb3Q9ezxDdXN0b21pemVkRG90IC8+fSAvPlxyXG4gICAgICAgIDwvTGluZUNoYXJ0PlxyXG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+ICovfVxyXG5cclxuXHJcbjxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICA8QXJlYUNoYXJ0XHJcbiAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICBkYXRhPXthcHBsaWNhdGlvbkNvdW50QnlNb250aH1cclxuICAgICAgICAgIG1hcmdpbj17e1xyXG4gICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICByaWdodDogMzAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgLz5cclxuICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwibW9udGhcIiAvPlxyXG4gICAgICAgICAgPFlBeGlzIC8+XHJcbiAgICAgICAgICA8VG9vbHRpcCAvPlxyXG4gICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInNwbGl0Q29sb3JcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjBcIiB5Mj1cIjFcIj5cclxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9e29mZn0gc3RvcENvbG9yPVwiZ3JlZW5cIiBzdG9wT3BhY2l0eT17MX0gLz5cclxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9e29mZn0gc3RvcENvbG9yPVwicmVkXCIgc3RvcE9wYWNpdHk9ezF9IC8+XHJcbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICA8QXJlYSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicGVyZm9ybWFuY2VcIiBzdHJva2U9XCIjMDAwXCIgZmlsbD1cInVybCgjc3BsaXRDb2xvcilcIiAvPlxyXG4gICAgICAgIDwvQXJlYUNoYXJ0PlxyXG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcblxyXG4gIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJ0ZXNpYW5HcmlkIiwiTGVnZW5kIiwiTGluZSIsIkxpbmVDaGFydCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJUb29sdGlwIiwiWEF4aXMiLCJZQXhpcyIsIlBlcmZvcm1hbmNlQ2hhcnQiLCJhcHBsaWNhdGlvbkNvdW50QnlNb250aCIsImdyYWRpZW50T2Zmc2V0IiwiZGF0YU1heCIsIk1hdGgiLCJtYXgiLCJtYXAiLCJpIiwicGVyZm9ybWFuY2UiLCJkYXRhTWluIiwibWluIiwib2ZmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ3aWR0aCIsImhlaWdodCIsIkFyZWFDaGFydCIsImRhdGEiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJzdHJva2VEYXNoYXJyYXkiLCJkYXRhS2V5IiwiZGVmcyIsImxpbmVhckdyYWRpZW50IiwiaWQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInN0b3AiLCJvZmZzZXQiLCJzdG9wQ29sb3IiLCJzdG9wT3BhY2l0eSIsIkFyZWEiLCJ0eXBlIiwic3Ryb2tlIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dashboard/PerformanceChart.js\n"));

/***/ })

});