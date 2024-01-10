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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-lightbox/style.css */ \"./node_modules/react-image-lightbox/style.css\");\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n // This only needs to be imported once\nconst Home = ()=>{\n    _s();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // replace with actual data fetching\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentFile, setCurrentFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const openLightbox = (index)=>{\n        setCurrentImageIndex(index);\n        setIsOpen(true);\n    };\n    function getFileExtension(filename) {\n        // Find the last dot in the filename\n        const lastDotIndex = filename === null || filename === void 0 ? void 0 : filename.lastIndexOf(\".\");\n        return lastDotIndex !== -1 ? filename === null || filename === void 0 ? void 0 : filename.substring(lastDotIndex + 1) : \"\";\n    }\n    function removeFileExtension(fileName) {\n        // Use a regular expression to replace the file extension with an empty string\n        return fileName.replace(/\\.[^/.]+$/, \"\");\n    }\n    async function convertDropboxLink(file) {\n        try {\n            return file === null || file === void 0 ? void 0 : file.url.replace(\"www.dropbox.com\", \"dl.dropboxusercontent.com\").replace(\"dl=0\", \"dl=1\");\n        } catch (error) {\n            console.error(\"Error in convertDropboxLink:\", error);\n            return null; // or some fallback URL\n        }\n    }\n    const fetchDropboxFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/dropbox\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            const processedFiles = await Promise.all(data.map(async (file)=>{\n                const url = await convertDropboxLink(file);\n                if (url != null) {\n                    return {\n                        ...file,\n                        preview_url: url\n                    };\n                }\n            // Combine the file info with the new URL\n            }));\n            const filteredFiles = processedFiles.filter((file)=>file != null);\n            console.log(filteredFiles);\n            setFiles(filteredFiles);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    const closeLightbox = ()=>{\n        setIsOpen(false);\n    };\n    const moveToNextMedia = ()=>{\n        setCurrentImageIndex((currentImageIndex + 1) % files.length);\n    };\n    const moveToPrevMedia = ()=>{\n        setCurrentImageIndex((currentImageIndex - 1 + files.length) % files.length);\n    };\n    const LightboxContent = ()=>{\n        const file = files[currentImageIndex];\n        const isVideo = getFileExtension(file.name) === \"mp4\";\n        // Function to handle closing with animation\n        const handleCloseLightbox = ()=>{\n            document.querySelector(\".\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightboxBackdrop))).classList.add((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().closeLightbox));\n            setTimeout(()=>{\n                setIsOpen(false);\n            }, 300); // Corresponds to the animation duration\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightboxBackdrop), \" \").concat(isOpen ? \"\" : (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().closeLightbox)),\n            onClick: handleCloseLightbox,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().mediaContainer),\n                    children: isVideo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        controls: true,\n                        src: file.preview_url\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: file.preview_url,\n                        alt: file.name\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined),\n                files.length > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightboxButton), \" \").concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().prev)),\n                            onClick: moveToPrevMedia,\n                            children: \"‹\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightboxButton), \" \").concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().next)),\n                            onClick: moveToNextMedia,\n                            children: \"›\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightboxButton), \" \").concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().close)),\n                    onClick: handleCloseLightbox,\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, undefined);\n    };\n    const fetchCloudinaryFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/cloudinary\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchDropboxFiles();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),\n                children: \"LESLIE SHARPE\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 136,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().gridContainer),\n                    children: files === null || files === void 0 ? void 0 : files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                        href: \"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap\",\n                                        rel: \"stylesheet\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().gridItem),\n                                    onClick: ()=>openLightbox(index),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageWrapper),\n                                                children: (file === null || file === void 0 ? void 0 : file.preview_url) && getFileExtension(file === null || file === void 0 ? void 0 : file.name) === \"mp4\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().videoThumbnail),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                                        src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                                        preload: \"metadata\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 151,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 150,\n                                                    columnNumber: 19\n                                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                                    alt: file === null || file === void 0 ? void 0 : file.name\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 155,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                lineNumber: 147,\n                                                columnNumber: 13\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 146,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().textContainer),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().gridItemName),\n                                                    children: removeFileExtension(file === null || file === void 0 ? void 0 : file.name)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 160,\n                                                    columnNumber: 13\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().gridItemDate),\n                                                    children: file === null || file === void 0 ? void 0 : file.client_modified\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 161,\n                                                    columnNumber: 13\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 159,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, (file === null || file === void 0 ? void 0 : file.id) || index, true, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true))\n                }, void 0, false, {\n                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 137,\n                columnNumber: 5\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LightboxContent, {}, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 169,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"OnoK6szfmZl2ueIEXJqhsnAccew=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEJwRDdELENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTThELEVBQUUsS0FBSXhFOzs7Ozs7Ozs7Ozs7Ozs7OztZQXdCM0JQLHdCQUFTLDhEQUFDeUM7Ozs7Ozs7QUFHZjtHQXBKTTVDO0tBQUFBO0FBc0pOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlnaHRib3ggZnJvbSAncmVhY3QtaW1hZ2UtbGlnaHRib3gnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJ3JlYWN0LWltYWdlLWxpZ2h0Ym94L3N0eWxlLmNzcyc7IC8vIFRoaXMgb25seSBuZWVkcyB0byBiZSBpbXBvcnRlZCBvbmNlXHJcblxyXG50eXBlIEZpbGVUeXBlID0ge1xyXG4gIFwiLnRhZ1wiOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxpbmtfcGVybWlzc2lvbnM6IHN0cmluZztcclxuICBjbGllbnRfbW9kaWZpZWQ6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcGF0aF9sb3dlcjogc3RyaW5nO1xyXG4gIHJldjogc3RyaW5nO1xyXG4gIHNlcnZlcl9tb2RpZmllZDogc3RyaW5nO1xyXG4gIHRlYW1fbWVtYmVyX2luZm86c3RyaW5nO1xyXG4gIGNvbnRlbnRfb3duZXJfdGVhbV9pbmZvOiBzdHJpbmc7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIHByZXZpZXdfdXJsIDpzdHJpbmc7XHJcbn07XHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEZpbGVUeXBlW10+KFtdKTsgLy8gcmVwbGFjZSB3aXRoIGFjdHVhbCBkYXRhIGZldGNoaW5nXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEZpbGUsIHNldEN1cnJlbnRGaWxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtjdXJyZW50SW1hZ2VJbmRleCwgc2V0Q3VycmVudEltYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgb3BlbkxpZ2h0Ym94ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNldEN1cnJlbnRJbWFnZUluZGV4KGluZGV4KTtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb24oZmlsZW5hbWUpIHtcclxuICAgIC8vIEZpbmQgdGhlIGxhc3QgZG90IGluIHRoZSBmaWxlbmFtZVxyXG4gICAgY29uc3QgbGFzdERvdEluZGV4ID0gZmlsZW5hbWU/Lmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICByZXR1cm4gbGFzdERvdEluZGV4ICE9PSAtMSA/IGZpbGVuYW1lPy5zdWJzdHJpbmcobGFzdERvdEluZGV4ICsgMSkgOiAnJztcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlRmlsZUV4dGVuc2lvbihmaWxlTmFtZSkge1xyXG4gICAgLy8gVXNlIGEgcmVndWxhciBleHByZXNzaW9uIHRvIHJlcGxhY2UgdGhlIGZpbGUgZXh0ZW5zaW9uIHdpdGggYW4gZW1wdHkgc3RyaW5nXHJcbiAgICByZXR1cm4gZmlsZU5hbWUucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpO1xyXG4gIH1cclxuICBcclxuICBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RHJvcGJveExpbmsoZmlsZTogRmlsZVR5cGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBmaWxlPy51cmwucmVwbGFjZShcInd3dy5kcm9wYm94LmNvbVwiLCBcImRsLmRyb3Bib3h1c2VyY29udGVudC5jb21cIikucmVwbGFjZShcImRsPTBcIiwgXCJkbD0xXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY29udmVydERyb3Bib3hMaW5rOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIG9yIHNvbWUgZmFsbGJhY2sgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICBjb25zdCBmZXRjaERyb3Bib3hGaWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Ryb3Bib3gnKTtcclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHByb2Nlc3NlZEZpbGVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgZmlsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgY29udmVydERyb3Bib3hMaW5rKGZpbGUpO1xyXG4gICAgICAgIGlmKHVybCE9bnVsbCl7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5maWxlLCBwcmV2aWV3X3VybDogdXJsIH07IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDb21iaW5lIHRoZSBmaWxlIGluZm8gd2l0aCB0aGUgbmV3IFVSTFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkRmlsZXMgPSBwcm9jZXNzZWRGaWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlIT0gbnVsbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRmlsZXMpXHJcbiAgICAgIHNldEZpbGVzKGZpbHRlcmVkRmlsZXMpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgRHJvcGJveCBmaWxlcycsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNsb3NlTGlnaHRib3ggPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgbW92ZVRvTmV4dE1lZGlhID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEltYWdlSW5kZXgoKGN1cnJlbnRJbWFnZUluZGV4ICsgMSkgJSBmaWxlcy5sZW5ndGgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vdmVUb1ByZXZNZWRpYSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRJbWFnZUluZGV4KChjdXJyZW50SW1hZ2VJbmRleCAtIDEgKyBmaWxlcy5sZW5ndGgpICUgZmlsZXMubGVuZ3RoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBMaWdodGJveENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gZmlsZXNbY3VycmVudEltYWdlSW5kZXhdO1xyXG4gICAgY29uc3QgaXNWaWRlbyA9IGdldEZpbGVFeHRlbnNpb24oZmlsZS5uYW1lKSA9PT0gJ21wNCc7XHJcbiAgXHJcbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2xvc2luZyB3aXRoIGFuaW1hdGlvblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VMaWdodGJveCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c3R5bGVzLmxpZ2h0Ym94QmFja2Ryb3B9YCkuY2xhc3NMaXN0LmFkZChzdHlsZXMuY2xvc2VMaWdodGJveCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgIH0sIDMwMCk7IC8vIENvcnJlc3BvbmRzIHRvIHRoZSBhbmltYXRpb24gZHVyYXRpb25cclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpZ2h0Ym94QmFja2Ryb3B9ICR7aXNPcGVuID8gJycgOiBzdHlsZXMuY2xvc2VMaWdodGJveH1gfSBvbkNsaWNrPXtoYW5kbGVDbG9zZUxpZ2h0Ym94fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtpc1ZpZGVvID8gKFxyXG4gICAgICAgICAgICA8dmlkZW8gY29udHJvbHMgc3JjPXtmaWxlLnByZXZpZXdfdXJsfS8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17ZmlsZS5wcmV2aWV3X3VybH0gYWx0PXtmaWxlLm5hbWV9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtmaWxlcy5sZW5ndGggPiAxICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlnaHRib3hCdXR0b259ICR7c3R5bGVzLnByZXZ9YH0gb25DbGljaz17bW92ZVRvUHJldk1lZGlhfT4mbHNhcXVvOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpZ2h0Ym94QnV0dG9ufSAke3N0eWxlcy5uZXh0fWB9IG9uQ2xpY2s9e21vdmVUb05leHRNZWRpYX0+JnJzYXF1bzs8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5saWdodGJveEJ1dHRvbn0gJHtzdHlsZXMuY2xvc2V9YH0gb25DbGljaz17aGFuZGxlQ2xvc2VMaWdodGJveH0+w5c8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgZmV0Y2hDbG91ZGluYXJ5RmlsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9jbG91ZGluYXJ5Jyk7XHJcbiAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIERyb3Bib3ggZmlsZXMnLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEcm9wYm94RmlsZXMoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8dGV4dCBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5MRVNMSUUgU0hBUlBFPC90ZXh0PlxyXG4gICAgPGRpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgIHtmaWxlcz8ubWFwKChmaWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGtleT17ZmlsZT8uaWQgfHwgaW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfSBvbkNsaWNrPXsoKSA9PiBvcGVuTGlnaHRib3goaW5kZXgpfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIHtmaWxlPy5wcmV2aWV3X3VybCAmJiBnZXRGaWxlRXh0ZW5zaW9uKGZpbGU/Lm5hbWUpID09PSAnbXA0J1xyXG4gICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9UaHVtYm5haWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx2aWRlbyBzcmM9e2ZpbGU/LnByZXZpZXdfdXJsfSBwcmVsb2FkPVwibWV0YWRhdGFcIiAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtmaWxlPy5wcmV2aWV3X3VybH0gYWx0PXtmaWxlPy5uYW1lfSAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbU5hbWV9PntyZW1vdmVGaWxlRXh0ZW5zaW9uKGZpbGU/Lm5hbWUpfTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW1EYXRlfT57ZmlsZT8uY2xpZW50X21vZGlmaWVkfTwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAge2lzT3BlbiAmJjxMaWdodGJveENvbnRlbnQgLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJIZWFkIiwiSG9tZSIsImZpbGVzIiwic2V0RmlsZXMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjdXJyZW50RmlsZSIsInNldEN1cnJlbnRGaWxlIiwiY3VycmVudEltYWdlSW5kZXgiLCJzZXRDdXJyZW50SW1hZ2VJbmRleCIsIm9wZW5MaWdodGJveCIsImluZGV4IiwiZ2V0RmlsZUV4dGVuc2lvbiIsImZpbGVuYW1lIiwibGFzdERvdEluZGV4IiwibGFzdEluZGV4T2YiLCJzdWJzdHJpbmciLCJyZW1vdmVGaWxlRXh0ZW5zaW9uIiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwiY29udmVydERyb3Bib3hMaW5rIiwiZmlsZSIsInVybCIsImVycm9yIiwiY29uc29sZSIsImZldGNoRHJvcGJveEZpbGVzIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJwcm9jZXNzZWRGaWxlcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJwcmV2aWV3X3VybCIsImZpbHRlcmVkRmlsZXMiLCJmaWx0ZXIiLCJsb2ciLCJjbG9zZUxpZ2h0Ym94IiwibW92ZVRvTmV4dE1lZGlhIiwibGVuZ3RoIiwibW92ZVRvUHJldk1lZGlhIiwiTGlnaHRib3hDb250ZW50IiwiaXNWaWRlbyIsIm5hbWUiLCJoYW5kbGVDbG9zZUxpZ2h0Ym94IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGlnaHRib3hCYWNrZHJvcCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibWVkaWFDb250YWluZXIiLCJ2aWRlbyIsImNvbnRyb2xzIiwic3JjIiwiaW1nIiwiYWx0IiwiYnV0dG9uIiwibGlnaHRib3hCdXR0b24iLCJwcmV2IiwibmV4dCIsImNsb3NlIiwiZmV0Y2hDbG91ZGluYXJ5RmlsZXMiLCJ0ZXh0IiwiZ3JpZENvbnRhaW5lciIsImxpbmsiLCJocmVmIiwicmVsIiwiZ3JpZEl0ZW0iLCJpbWFnZVdyYXBwZXIiLCJ2aWRlb1RodW1ibmFpbCIsInByZWxvYWQiLCJ0ZXh0Q29udGFpbmVyIiwiZ3JpZEl0ZW1OYW1lIiwiZ3JpZEl0ZW1EYXRlIiwiY2xpZW50X21vZGlmaWVkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});