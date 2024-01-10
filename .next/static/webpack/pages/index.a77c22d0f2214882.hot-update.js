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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ \"./node_modules/react-image-lightbox/dist/index.es.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // replace with actual data fetching\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentFile, setCurrentFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openLightbox = (url)=>{\n        setCurrentFile(url);\n        setIsOpen(true);\n    };\n    function getFileExtension(filename) {\n        // Find the last dot in the filename\n        const lastDotIndex = filename === null || filename === void 0 ? void 0 : filename.lastIndexOf(\".\");\n        return lastDotIndex !== -1 ? filename === null || filename === void 0 ? void 0 : filename.substring(lastDotIndex + 1) : \"\";\n    }\n    function removeFileExtension(fileName) {\n        // Use a regular expression to replace the file extension with an empty string\n        return fileName.replace(/\\.[^/.]+$/, \"\");\n    }\n    async function convertDropboxLink(file) {\n        try {\n            return file === null || file === void 0 ? void 0 : file.url.replace(\"www.dropbox.com\", \"dl.dropboxusercontent.com\").replace(\"dl=0\", \"dl=1\");\n        } catch (error) {\n            console.error(\"Error in convertDropboxLink:\", error);\n            return null; // or some fallback URL\n        }\n    }\n    const fetchDropboxFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/dropbox\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            const processedFiles = await Promise.all(data.map(async (file)=>{\n                const url = await convertDropboxLink(file);\n                if (url != null) {\n                    return {\n                        ...file,\n                        preview_url: url\n                    };\n                }\n            // Combine the file info with the new URL\n            }));\n            const filteredFiles = processedFiles.filter((file)=>file != null);\n            console.log(filteredFiles);\n            setFiles(filteredFiles);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    const fetchCloudinaryFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/cloudinary\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchDropboxFiles,\n                children: \"Load Files from Dropbox\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().gridContainer),\n                children: files === null || files === void 0 ? void 0 : files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                    href: \"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap\",\n                                    rel: \"stylesheet\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().gridItem),\n                                onClick: ()=>openLightbox(file === null || file === void 0 ? void 0 : file.preview_url),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageWrapper),\n                                            children: (file === null || file === void 0 ? void 0 : file.preview_url) && getFileExtension(file === null || file === void 0 ? void 0 : file.name) === \"mp4\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().videoThumbnail),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                                    src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                                    preload: \"metadata\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 19\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                                alt: file === null || file === void 0 ? void 0 : file.name\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().textContainer),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().gridItemName),\n                                                children: removeFileExtension(file === null || file === void 0 ? void 0 : file.name)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().gridItemDate),\n                                                children: file === null || file === void 0 ? void 0 : file.client_modified\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 13\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, (file === null || file === void 0 ? void 0 : file.id) || index, true, {\n                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true))\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mainSrc: currentFile,\n                onCloseRequest: ()=>setIsOpen(false)\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"/rb4oKfseRd0pa44BUQag1Iw+S0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbnR5cGUgRmlsZVR5cGUgPSB7XHJcbiAgXCIudGFnXCI6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGlua19wZXJtaXNzaW9uczogc3RyaW5nO1xyXG4gIGNsaWVudF9tb2RpZmllZDogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBwYXRoX2xvd2VyOiBzdHJpbmc7XHJcbiAgcmV2OiBzdHJpbmc7XHJcbiAgc2VydmVyX21vZGlmaWVkOiBzdHJpbmc7XHJcbiAgdGVhbV9tZW1iZXJfaW5mbzpzdHJpbmc7XHJcbiAgY29udGVudF9vd25lcl90ZWFtX2luZm86IHN0cmluZztcclxuICBzaXplOiBudW1iZXI7XHJcbiAgcHJldmlld191cmwgOnN0cmluZztcclxufTtcclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGU8RmlsZVR5cGVbXT4oW10pOyAvLyByZXBsYWNlIHdpdGggYWN0dWFsIGRhdGEgZmV0Y2hpbmdcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50RmlsZSwgc2V0Q3VycmVudEZpbGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3Qgb3BlbkxpZ2h0Ym94ID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50RmlsZSh1cmwpO1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbihmaWxlbmFtZSkge1xyXG4gICAgLy8gRmluZCB0aGUgbGFzdCBkb3QgaW4gdGhlIGZpbGVuYW1lXHJcbiAgICBjb25zdCBsYXN0RG90SW5kZXggPSBmaWxlbmFtZT8ubGFzdEluZGV4T2YoJy4nKTtcclxuICAgIHJldHVybiBsYXN0RG90SW5kZXggIT09IC0xID8gZmlsZW5hbWU/LnN1YnN0cmluZyhsYXN0RG90SW5kZXggKyAxKSA6ICcnO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVGaWxlRXh0ZW5zaW9uKGZpbGVOYW1lKSB7XHJcbiAgICAvLyBVc2UgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gcmVwbGFjZSB0aGUgZmlsZSBleHRlbnNpb24gd2l0aCBhbiBlbXB0eSBzdHJpbmdcclxuICAgIHJldHVybiBmaWxlTmFtZS5yZXBsYWNlKC9cXC5bXi8uXSskLywgXCJcIik7XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnREcm9wYm94TGluayhmaWxlOiBGaWxlVHlwZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGZpbGU/LnVybC5yZXBsYWNlKFwid3d3LmRyb3Bib3guY29tXCIsIFwiZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbVwiKS5yZXBsYWNlKFwiZGw9MFwiLCBcImRsPTFcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjb252ZXJ0RHJvcGJveExpbms6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gb3Igc29tZSBmYWxsYmFjayBVUkxcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIGNvbnN0IGZldGNoRHJvcGJveEZpbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvZHJvcGJveCcpO1xyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc3QgcHJvY2Vzc2VkRmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBmaWxlID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBjb252ZXJ0RHJvcGJveExpbmsoZmlsZSk7XHJcbiAgICAgICAgaWYodXJsIT1udWxsKXtcclxuICAgICAgICAgIHJldHVybiB7IC4uLmZpbGUsIHByZXZpZXdfdXJsOiB1cmwgfTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENvbWJpbmUgdGhlIGZpbGUgaW5mbyB3aXRoIHRoZSBuZXcgVVJMXHJcbiAgICAgIH0pKTtcclxuICAgICAgY29uc3QgZmlsdGVyZWRGaWxlcyA9IHByb2Nlc3NlZEZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUhPSBudWxsKTtcclxuICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRGaWxlcylcclxuICAgICAgc2V0RmlsZXMoZmlsdGVyZWRGaWxlcyk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBEcm9wYm94IGZpbGVzJywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoQ2xvdWRpbmFyeUZpbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY2xvdWRpbmFyeScpO1xyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBEcm9wYm94IGZpbGVzJywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgXHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoRHJvcGJveEZpbGVzfT5Mb2FkIEZpbGVzIGZyb20gRHJvcGJveDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkQ29udGFpbmVyfT5cclxuICAgICAgICB7ZmlsZXM/Lm1hcCgoZmlsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPGRpdiBrZXk9e2ZpbGU/LmlkIHx8IGluZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbX0gb25DbGljaz17KCkgPT4gb3BlbkxpZ2h0Ym94KGZpbGU/LnByZXZpZXdfdXJsKX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VXcmFwcGVyfT5cclxuICAgICAgICAgICAgICB7ZmlsZT8ucHJldmlld191cmwgJiYgZ2V0RmlsZUV4dGVuc2lvbihmaWxlPy5uYW1lKSA9PT0gJ21wNCdcclxuICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvVGh1bWJuYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICA8dmlkZW8gc3JjPXtmaWxlPy5wcmV2aWV3X3VybH0gcHJlbG9hZD1cIm1ldGFkYXRhXCIgLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17ZmlsZT8ucHJldmlld191cmx9IGFsdD17ZmlsZT8ubmFtZX0gLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW1OYW1lfT57cmVtb3ZlRmlsZUV4dGVuc2lvbihmaWxlPy5uYW1lKX08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtRGF0ZX0+e2ZpbGU/LmNsaWVudF9tb2RpZmllZH08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8TGlnaHRib3hcclxuICAgICAgICAgIG1haW5TcmM9e2N1cnJlbnRGaWxlfVxyXG4gICAgICAgICAgb25DbG9zZVJlcXVlc3Q9eygpID0+IHNldElzT3BlbihmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpZ2h0Ym94Iiwic3R5bGVzIiwiSGVhZCIsIkhvbWUiLCJmaWxlcyIsInNldEZpbGVzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY3VycmVudEZpbGUiLCJzZXRDdXJyZW50RmlsZSIsIm9wZW5MaWdodGJveCIsInVybCIsImdldEZpbGVFeHRlbnNpb24iLCJmaWxlbmFtZSIsImxhc3REb3RJbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwicmVtb3ZlRmlsZUV4dGVuc2lvbiIsImZpbGVOYW1lIiwicmVwbGFjZSIsImNvbnZlcnREcm9wYm94TGluayIsImZpbGUiLCJlcnJvciIsImNvbnNvbGUiLCJmZXRjaERyb3Bib3hGaWxlcyIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwicHJvY2Vzc2VkRmlsZXMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwicHJldmlld191cmwiLCJmaWx0ZXJlZEZpbGVzIiwiZmlsdGVyIiwibG9nIiwiZmV0Y2hDbG91ZGluYXJ5RmlsZXMiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiZ3JpZENvbnRhaW5lciIsImluZGV4IiwibGluayIsImhyZWYiLCJyZWwiLCJncmlkSXRlbSIsImltYWdlV3JhcHBlciIsIm5hbWUiLCJ2aWRlb1RodW1ibmFpbCIsInZpZGVvIiwic3JjIiwicHJlbG9hZCIsImltZyIsImFsdCIsInRleHRDb250YWluZXIiLCJ0ZXh0IiwiZ3JpZEl0ZW1OYW1lIiwiZ3JpZEl0ZW1EYXRlIiwiY2xpZW50X21vZGlmaWVkIiwiaWQiLCJtYWluU3JjIiwib25DbG9zZVJlcXVlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});