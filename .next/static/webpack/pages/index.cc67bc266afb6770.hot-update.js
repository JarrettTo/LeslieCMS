"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ \"./node_modules/react-image-lightbox/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // replace with actual data fetching\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentFile, setCurrentFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openLightbox = (url)=>{\n        setCurrentFile(url);\n        setIsOpen(true);\n    };\n    function convertDropboxLink(dropboxLink) {\n        return dropboxLink.replace(\"www.dropbox.com\", \"dl.dropboxusercontent.com\").replace(\"dl=0\", \"dl=1\");\n    }\n    const fetchDropboxFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/dropbox\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            console.log(data);\n            setFiles(data);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchDropboxFiles();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchDropboxFiles,\n                children: \"Load Files from Dropbox\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    files === null || files === void 0 ? void 0 : files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>openLightbox(convertDropboxLink(file === null || file === void 0 ? void 0 : file.url)),\n                            children: file === null || file === void 0 ? void 0 : file.name\n                        }, (file === null || file === void 0 ? void 0 : file.id) || index, false, {\n                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, undefined)),\n                    isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        mainSrc: currentFile,\n                        onCloseRequest: ()=>setIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"/rb4oKfseRd0pa44BUQag1Iw+S0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDRjtBQW1CakQsTUFBTUksT0FBaUI7O0lBRXJCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBYSxFQUFFLEdBQUcsb0NBQW9DO0lBQ3hGLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQVM7SUFDdkQsTUFBTVUsZUFBZSxDQUFDQztRQUNwQkYsZUFBZUU7UUFDZkosVUFBVTtJQUNaO0lBQ0EsU0FBU0ssbUJBQW1CQyxXQUFXO1FBQ3JDLE9BQU9BLFlBQ0pDLE9BQU8sQ0FBQyxtQkFBbUIsNkJBQzNCQSxPQUFPLENBQUMsUUFBUTtJQUNyQjtJQUNBLE1BQU1DLG9CQUFvQjtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1lBQ3hCLElBQUksQ0FBQ0QsSUFBSUUsRUFBRSxFQUFFO2dCQUNYLE1BQU0sSUFBSUMsTUFBTSxVQUFxQixPQUFYSCxJQUFJSSxNQUFNO1lBQ3RDO1lBQ0EsTUFBTUMsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO1lBQzNCQyxRQUFRQyxHQUFHLENBQUNIO1lBQ1poQixTQUFTZ0I7UUFFWCxFQUFFLE9BQU9JLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLGlEQUFpREE7UUFDakU7SUFDRjtJQUNBeEIsZ0RBQVNBLENBQUM7UUFDUmM7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ1c7OzBCQUNDLDhEQUFDQztnQkFBT0MsU0FBU2I7MEJBQW1COzs7Ozs7MEJBQ3BDLDhEQUFDVzs7b0JBQ0F0QixrQkFBQUEsNEJBQUFBLE1BQU95QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pCLDhEQUFDSjs0QkFBK0JDLFNBQVMsSUFBTWxCLGFBQWFFLG1CQUFtQmtCLGlCQUFBQSwyQkFBQUEsS0FBTW5CLEdBQUc7c0NBQ3JGbUIsaUJBQUFBLDJCQUFBQSxLQUFNRSxJQUFJOzJCQURBRixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1HLEVBQUUsS0FBSUY7Ozs7O29CQUkxQnpCLHdCQUNDLDhEQUFDSiw0REFBYUE7d0JBQ1pnQyxTQUFTMUI7d0JBQ1QyQixnQkFBZ0IsSUFBTTVCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQztHQWxETUo7S0FBQUE7QUFvRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZUxpZ2h0Ym94IGZyb20gJ3JlYWN0LWltYWdlLWxpZ2h0Ym94JztcclxuaW1wb3J0IHsgZmlsZXMgfSBmcm9tICdkcm9wYm94JztcclxuXHJcbnR5cGUgRmlsZVR5cGUgPSB7XHJcbiAgXCIudGFnXCI6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGlua19wZXJtaXNzaW9uczogc3RyaW5nO1xyXG4gIGNsaWVudF9tb2RpZmllZDogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBwYXRoX2xvd2VyOiBzdHJpbmc7XHJcbiAgcmV2OiBzdHJpbmc7XHJcbiAgc2VydmVyX21vZGlmaWVkOiBzdHJpbmc7XHJcbiAgdGVhbV9tZW1iZXJfaW5mbzpzdHJpbmc7XHJcbiAgY29udGVudF9vd25lcl90ZWFtX2luZm86IHN0cmluZztcclxuICBzaXplOiBudW1iZXI7XHJcbn07XHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEZpbGVUeXBlW10+KFtdKTsgLy8gcmVwbGFjZSB3aXRoIGFjdHVhbCBkYXRhIGZldGNoaW5nXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEZpbGUsIHNldEN1cnJlbnRGaWxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IG9wZW5MaWdodGJveCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZpbGUodXJsKTtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGNvbnZlcnREcm9wYm94TGluayhkcm9wYm94TGluaykge1xyXG4gICAgcmV0dXJuIGRyb3Bib3hMaW5rXHJcbiAgICAgIC5yZXBsYWNlKFwid3d3LmRyb3Bib3guY29tXCIsIFwiZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbVwiKVxyXG4gICAgICAucmVwbGFjZShcImRsPTBcIiwgXCJkbD0xXCIpO1xyXG4gIH1cclxuICBjb25zdCBmZXRjaERyb3Bib3hGaWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Ryb3Bib3gnKTtcclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIHNldEZpbGVzKGRhdGEpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgRHJvcGJveCBmaWxlcycsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERyb3Bib3hGaWxlcygpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaERyb3Bib3hGaWxlc30+TG9hZCBGaWxlcyBmcm9tIERyb3Bib3g8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAge2ZpbGVzPy5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGJ1dHRvbiBrZXk9e2ZpbGU/LmlkIHx8IGluZGV4fSBvbkNsaWNrPXsoKSA9PiBvcGVuTGlnaHRib3goY29udmVydERyb3Bib3hMaW5rKGZpbGU/LnVybCkpfT5cclxuICAgICAgICAgIHtmaWxlPy5uYW1lfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApKX1cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPEltYWdlTGlnaHRib3hcclxuICAgICAgICAgIG1haW5TcmM9e2N1cnJlbnRGaWxlfVxyXG4gICAgICAgICAgb25DbG9zZVJlcXVlc3Q9eygpID0+IHNldElzT3BlbihmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlTGlnaHRib3giLCJIb21lIiwiZmlsZXMiLCJzZXRGaWxlcyIsImlzT3BlbiIsInNldElzT3BlbiIsImN1cnJlbnRGaWxlIiwic2V0Q3VycmVudEZpbGUiLCJvcGVuTGlnaHRib3giLCJ1cmwiLCJjb252ZXJ0RHJvcGJveExpbmsiLCJkcm9wYm94TGluayIsInJlcGxhY2UiLCJmZXRjaERyb3Bib3hGaWxlcyIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImZpbGUiLCJpbmRleCIsIm5hbWUiLCJpZCIsIm1haW5TcmMiLCJvbkNsb3NlUmVxdWVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});