"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Board() {\n    _s();\n    const [xIsNext, setXIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [squares, setSquares] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    const winner = calculateWinner(squares);\n    let status;\n    if (winner) {\n        status = \"Winner: \" + winner;\n    } else {\n        status = \"Next player: \" + (xIsNext ? \"X\" : \"O\");\n    }\n    function handleClick(i) {\n        const nextSquares = squares.slice();\n        if (squares[i] || calculateWinner(squares)) {\n            return;\n        }\n        if (xIsNext) {\n            nextSquares[i] = \"X\";\n        } else {\n            nextSquares[i] = \"O\";\n        }\n        setSquares(nextSquares);\n        setXIsNext(!xIsNext);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"board-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[0],\n                        onSquareClick: ()=>handleClick(0)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[1],\n                        onSquareClick: ()=>handleClick(1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[2],\n                        onSquareClick: ()=>handleClick(2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"board-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[3],\n                        onSquareClick: ()=>handleClick(3)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[4],\n                        onSquareClick: ()=>handleClick(4)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[5],\n                        onSquareClick: ()=>handleClick(5)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"board-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[6],\n                        onSquareClick: ()=>handleClick(6)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[7],\n                        onSquareClick: ()=>handleClick(7)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[8],\n                        onSquareClick: ()=>handleClick(8)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Board, \"coMecpjTzg1W7KUe5tSm+DrcByQ=\");\n_c = Board;\nfunction Square(param) {\n    let { value, onSquareClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"square\",\n        onClick: onSquareClick,\n        children: value\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\eveni\\\\OneDrive\\\\Documents\\\\react\\\\app\\\\page.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Square;\nfunction calculateWinner(squares) {\n    const lines = [\n        [\n            0,\n            1,\n            2\n        ],\n        [\n            3,\n            4,\n            5\n        ],\n        [\n            6,\n            7,\n            8\n        ],\n        [\n            0,\n            3,\n            6\n        ],\n        [\n            1,\n            4,\n            7\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            0,\n            4,\n            8\n        ],\n        [\n            2,\n            4,\n            6\n        ]\n    ];\n    for(let i = 0; i < lines.length; i++){\n        const [a, b, c] = lines[i];\n        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n            return squares[a];\n        }\n    }\n    return null;\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"Board\");\n$RefreshReg$(_c1, \"Square\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQ1YsRUFBRTtRQUMxQixJQUFJUixPQUFPLENBQUNvQixFQUFFLElBQUlwQixPQUFPLENBQUNvQixFQUFFLEtBQUtwQixPQUFPLENBQUNxQixFQUFFLElBQUlyQixPQUFPLENBQUNvQixFQUFFLEtBQUtwQixPQUFPLENBQUNzQixFQUFFLEVBQUU7WUFDeEUsT0FBT3RCLE9BQU8sQ0FBQ29CLEVBQUU7UUFDbkI7SUFDRjtJQUNBLE9BQU87QUFDVCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxldmVuaVxcT25lRHJpdmVcXERvY3VtZW50c1xccmVhY3RcXGFwcFxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgY29uc3QgW3hJc05leHQsIHNldFhJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoOSkuZmlsbChudWxsKSk7XHJcbiAgY29uc3Qgd2lubmVyID0gY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpO1xyXG4gIGxldCBzdGF0dXM7XHJcbiAgaWYod2lubmVyKXtcclxuICAgIHN0YXR1cyA9IFwiV2lubmVyOiBcIiArIHdpbm5lcjtcclxuICB9IGVsc2V7XHJcbiAgICBzdGF0dXMgPSBcIk5leHQgcGxheWVyOiBcIiArICh4SXNOZXh0ID8gXCJYXCIgOiBcIk9cIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhpKXtcclxuICAgIGNvbnN0IG5leHRTcXVhcmVzID0gc3F1YXJlcy5zbGljZSgpO1xyXG5cclxuICAgIGlmKHNxdWFyZXNbaV0gfHwgY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHhJc05leHQpe1xyXG4gICAgICBuZXh0U3F1YXJlc1tpXSA9IFwiWFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgbmV4dFNxdWFyZXNbaV0gPSBcIk9cIjtcclxuICAgIH1cclxuICAgIHNldFNxdWFyZXMobmV4dFNxdWFyZXMpO1xyXG4gICAgc2V0WElzTmV4dCgheElzTmV4dCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgIDxTcXVhcmUgdmFsdWU9e3NxdWFyZXNbMF19IG9uU3F1YXJlQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDApfS8+XHJcbiAgICAgICAgPFNxdWFyZSB2YWx1ZT17c3F1YXJlc1sxXX0gb25TcXVhcmVDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMSl9Lz5cclxuICAgICAgICA8U3F1YXJlIHZhbHVlPXtzcXVhcmVzWzJdfSBvblNxdWFyZUNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygyKX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICA8U3F1YXJlIHZhbHVlPXtzcXVhcmVzWzNdfSBvblNxdWFyZUNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygzKX0vPlxyXG4gICAgICAgIDxTcXVhcmUgdmFsdWU9e3NxdWFyZXNbNF19IG9uU3F1YXJlQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDQpfS8+XHJcbiAgICAgICAgPFNxdWFyZSB2YWx1ZT17c3F1YXJlc1s1XX0gb25TcXVhcmVDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soNSl9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XHJcbiAgICAgICAgPFNxdWFyZSB2YWx1ZT17c3F1YXJlc1s2XX0gb25TcXVhcmVDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soNil9Lz5cclxuICAgICAgICA8U3F1YXJlIHZhbHVlPXtzcXVhcmVzWzddfSBvblNxdWFyZUNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg3KX0vPlxyXG4gICAgICAgIDxTcXVhcmUgdmFsdWU9e3NxdWFyZXNbOF19IG9uU3F1YXJlQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDgpfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTcXVhcmUoe3ZhbHVlLCBvblNxdWFyZUNsaWNrfSl7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGJ1dHRvbiBcclxuICAgICAgY2xhc3NOYW1lPVwic3F1YXJlXCJcclxuICAgICAgb25DbGljaz17b25TcXVhcmVDbGlja31cclxuICAgID5cclxuICAgICAge3ZhbHVlfVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpe1xyXG4gIGNvbnN0IGxpbmVzID0gW1xyXG4gICAgWzAsIDEsIDJdLFxyXG4gICAgWzMsIDQsIDVdLFxyXG4gICAgWzYsIDcsIDhdLFxyXG4gICAgWzAsIDMsIDZdLFxyXG4gICAgWzEsIDQsIDddLFxyXG4gICAgWzIsIDUsIDhdLFxyXG4gICAgWzAsIDQsIDhdLFxyXG4gICAgWzIsIDQsIDZdXHJcbiAgXTtcclxuXHJcbiAgZm9yKCBsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKyl7XHJcbiAgICBjb25zdCBbYSwgYiwgY10gPSBsaW5lc1tpXTtcclxuICAgIGlmIChzcXVhcmVzW2FdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbYl0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tjXSkge1xyXG4gICAgICByZXR1cm4gc3F1YXJlc1thXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQm9hcmQiLCJ4SXNOZXh0Iiwic2V0WElzTmV4dCIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwid2lubmVyIiwiY2FsY3VsYXRlV2lubmVyIiwic3RhdHVzIiwiaGFuZGxlQ2xpY2siLCJpIiwibmV4dFNxdWFyZXMiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsIlNxdWFyZSIsInZhbHVlIiwib25TcXVhcmVDbGljayIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsaW5lcyIsImxlbmd0aCIsImEiLCJiIiwiYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});