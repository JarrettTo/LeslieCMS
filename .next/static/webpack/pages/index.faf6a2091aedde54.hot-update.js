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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ \"./node_modules/react-image-lightbox/dist/index.es.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // replace with actual data fetching\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentFile, setCurrentFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openLightbox = (url)=>{\n        setCurrentFile(url);\n        setIsOpen(true);\n    };\n    function getFileExtension(filename) {\n        // Find the last dot in the filename\n        const lastDotIndex = filename === null || filename === void 0 ? void 0 : filename.lastIndexOf(\".\");\n        return lastDotIndex !== -1 ? filename === null || filename === void 0 ? void 0 : filename.substring(lastDotIndex + 1) : \"\";\n    }\n    function bufferToArrayBuffer(buffer) {\n        var _buffer_buffer;\n        return (_buffer_buffer = buffer.buffer) === null || _buffer_buffer === void 0 ? void 0 : _buffer_buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);\n    }\n    function convertToUrl(buffer) {\n        const arrayBuffer = bufferToArrayBuffer(buffer);\n        const blob = new Blob([\n            arrayBuffer\n        ]); // Adjust the MIME type as needed\n        const imageUrl = URL.createObjectURL(blob);\n        console.log(imageUrl);\n        return imageUrl;\n    }\n    async function convertDropboxLink(file) {\n        try {\n            return file === null || file === void 0 ? void 0 : file.url.replace(\"www.dropbox.com\", \"dl.dropboxusercontent.com\").replace(\"dl=0\", \"dl=1\");\n        } catch (error) {\n            console.error(\"Error in convertDropboxLink:\", error);\n            return null; // or some fallback URL\n        }\n    }\n    const fetchDropboxFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/dropbox\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            const processedFiles = await Promise.all(data.map(async (file)=>{\n                const url = await convertDropboxLink(file);\n                if (url != null) {\n                    return {\n                        ...file,\n                        preview_url: url\n                    };\n                }\n            // Combine the file info with the new URL\n            }));\n            const filteredFiles = processedFiles.filter((file)=>file != null);\n            console.log(filteredFiles);\n            setFiles(filteredFiles);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    const fetchCloudinaryFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/cloudinary\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Create an observer for the images to set width after load\n        const observer = new ResizeObserver((entries)=>{\n            entries.forEach((entry)=>{\n                // Cast the target to an HTMLImageElement to access the src property\n                const img = entry.target;\n                const { width } = entry.contentRect;\n                setGridItemWidths((prevWidths)=>({\n                        ...prevWidths,\n                        [img.src]: width // Use the image src as a unique key\n                    }));\n            });\n        });\n        // Observe each image\n        const images = document.querySelectorAll(\".\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridItem), \" img\"));\n        images.forEach((img)=>{\n            if (img instanceof HTMLImageElement) {\n                observer.observe(img);\n            }\n        });\n        // Clean up the observer\n        return ()=>observer.disconnect();\n    }, [\n        files\n    ]); // Dependency array, re-run if files change\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchDropboxFiles,\n                children: \"Load Files from Dropbox\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridContainer),\n                children: files === null || files === void 0 ? void 0 : files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridItem),\n                            onClick: ()=>openLightbox(file === null || file === void 0 ? void 0 : file.preview_url),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageWrapper),\n                                        children: (file === null || file === void 0 ? void 0 : file.preview_url) && getFileExtension(file === null || file === void 0 ? void 0 : file.name) === \"mp4\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().videoThumbnail),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                                    src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                                    preload: \"metadata\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 129,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().playButton),\n                                                    children: \"Play\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 130,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 19\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                            alt: file === null || file === void 0 ? void 0 : file.name\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().textContainer),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridItemText),\n                                            children: file === null || file === void 0 ? void 0 : file.name\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 138,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridItemText),\n                                            children: file === null || file === void 0 ? void 0 : file.client_modified\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 139,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, (file === null || file === void 0 ? void 0 : file.id) || index, true, {\n                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false))\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mainSrc: currentFile,\n                onCloseRequest: ()=>setIsOpen(false)\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"/rb4oKfseRd0pa44BUQag1Iw+S0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSUcsV0FBV3ZFLDBFQUFxQjs7OERBQ25DLDhEQUFDNkU7b0RBQU1qQixHQUFHLEVBQUU5QixpQkFBQUEsMkJBQUFBLEtBQU1lLFdBQVc7b0RBQUVpQyxTQUFROzs7Ozs7OERBQ3ZDLDhEQUFDVjtvREFBSUcsV0FBV3ZFLHNFQUFpQjs4REFBRTs7Ozs7Ozs7Ozs7c0VBR3JDLDhEQUFDc0Q7NENBQUlNLEdBQUcsRUFBRTlCLGlCQUFBQSwyQkFBQUEsS0FBTWUsV0FBVzs0Q0FBRW1DLEdBQUcsRUFBRWxELGlCQUFBQSwyQkFBQUEsS0FBTTZDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSXBELDhEQUFDUDtvQ0FBSUcsV0FBV3ZFLHlFQUFvQjs7c0RBQ2xDLDhEQUFDa0Y7NENBQUtYLFdBQVd2RSx3RUFBbUI7c0RBQUc4QixpQkFBQUEsMkJBQUFBLEtBQU02QyxJQUFJOzs7Ozs7c0RBQ2pELDhEQUFDTzs0Q0FBS1gsV0FBV3ZFLHdFQUFtQjtzREFBRzhCLGlCQUFBQSwyQkFBQUEsS0FBTXNELGVBQWU7Ozs7Ozs7Ozs7Ozs7MkJBaEJwRHRELENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTXVELEVBQUUsS0FBSVo7Ozs7Ozs7Ozs7O1lBc0J6QnJFLHdCQUNDLDhEQUFDTCw0REFBUUE7Z0JBQ1B1RixTQUFTaEY7Z0JBQ1RpRixnQkFBZ0IsSUFBTWxGLFVBQVU7Ozs7Ozs7Ozs7OztBQUsxQztHQW5JTUo7S0FBQUE7QUFxSU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XHJcblxyXG50eXBlIEZpbGVUeXBlID0ge1xyXG4gIFwiLnRhZ1wiOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxpbmtfcGVybWlzc2lvbnM6IHN0cmluZztcclxuICBjbGllbnRfbW9kaWZpZWQ6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcGF0aF9sb3dlcjogc3RyaW5nO1xyXG4gIHJldjogc3RyaW5nO1xyXG4gIHNlcnZlcl9tb2RpZmllZDogc3RyaW5nO1xyXG4gIHRlYW1fbWVtYmVyX2luZm86c3RyaW5nO1xyXG4gIGNvbnRlbnRfb3duZXJfdGVhbV9pbmZvOiBzdHJpbmc7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIHByZXZpZXdfdXJsIDpzdHJpbmc7XHJcbn07XHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEZpbGVUeXBlW10+KFtdKTsgLy8gcmVwbGFjZSB3aXRoIGFjdHVhbCBkYXRhIGZldGNoaW5nXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEZpbGUsIHNldEN1cnJlbnRGaWxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IG9wZW5MaWdodGJveCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZpbGUodXJsKTtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb24oZmlsZW5hbWUpIHtcclxuICAgIC8vIEZpbmQgdGhlIGxhc3QgZG90IGluIHRoZSBmaWxlbmFtZVxyXG4gICAgY29uc3QgbGFzdERvdEluZGV4ID0gZmlsZW5hbWU/Lmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICByZXR1cm4gbGFzdERvdEluZGV4ICE9PSAtMSA/IGZpbGVuYW1lPy5zdWJzdHJpbmcobGFzdERvdEluZGV4ICsgMSkgOiAnJztcclxuICB9XHJcbiAgZnVuY3Rpb24gYnVmZmVyVG9BcnJheUJ1ZmZlcihidWZmZXIpIHtcclxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyPy5zbGljZShidWZmZXIuYnl0ZU9mZnNldCwgYnVmZmVyLmJ5dGVPZmZzZXQgKyBidWZmZXIuYnl0ZUxlbmd0aCk7XHJcbn1cclxuICBmdW5jdGlvbiBjb252ZXJ0VG9VcmwoYnVmZmVyKSB7XHJcbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGJ1ZmZlclRvQXJyYXlCdWZmZXIoYnVmZmVyKTtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYXJyYXlCdWZmZXJdKTsgLy8gQWRqdXN0IHRoZSBNSU1FIHR5cGUgYXMgbmVlZGVkXHJcblxyXG4gICAgY29uc3QgaW1hZ2VVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2VVcmwpXHJcbiAgICByZXR1cm4gaW1hZ2VVcmw7XHJcbn1cclxuICBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RHJvcGJveExpbmsoZmlsZTogRmlsZVR5cGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBmaWxlPy51cmwucmVwbGFjZShcInd3dy5kcm9wYm94LmNvbVwiLCBcImRsLmRyb3Bib3h1c2VyY29udGVudC5jb21cIikucmVwbGFjZShcImRsPTBcIiwgXCJkbD0xXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY29udmVydERyb3Bib3hMaW5rOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIG9yIHNvbWUgZmFsbGJhY2sgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaERyb3Bib3hGaWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Ryb3Bib3gnKTtcclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHByb2Nlc3NlZEZpbGVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgZmlsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgY29udmVydERyb3Bib3hMaW5rKGZpbGUpO1xyXG4gICAgICAgIGlmKHVybCE9bnVsbCl7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5maWxlLCBwcmV2aWV3X3VybDogdXJsIH07IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDb21iaW5lIHRoZSBmaWxlIGluZm8gd2l0aCB0aGUgbmV3IFVSTFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkRmlsZXMgPSBwcm9jZXNzZWRGaWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlIT0gbnVsbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRmlsZXMpXHJcbiAgICAgIHNldEZpbGVzKGZpbHRlcmVkRmlsZXMpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgRHJvcGJveCBmaWxlcycsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaENsb3VkaW5hcnlGaWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Nsb3VkaW5hcnknKTtcclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgRHJvcGJveCBmaWxlcycsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgYW4gb2JzZXJ2ZXIgZm9yIHRoZSBpbWFnZXMgdG8gc2V0IHdpZHRoIGFmdGVyIGxvYWRcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgIC8vIENhc3QgdGhlIHRhcmdldCB0byBhbiBIVE1MSW1hZ2VFbGVtZW50IHRvIGFjY2VzcyB0aGUgc3JjIHByb3BlcnR5XHJcbiAgICAgICAgY29uc3QgaW1nID0gZW50cnkudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gZW50cnkuY29udGVudFJlY3Q7XHJcbiAgICAgICAgc2V0R3JpZEl0ZW1XaWR0aHMocHJldldpZHRocyA9PiAoe1xyXG4gICAgICAgICAgLi4ucHJldldpZHRocyxcclxuICAgICAgICAgIFtpbWcuc3JjXTogd2lkdGggLy8gVXNlIHRoZSBpbWFnZSBzcmMgYXMgYSB1bmlxdWUga2V5XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gT2JzZXJ2ZSBlYWNoIGltYWdlXHJcbiAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtzdHlsZXMuZ3JpZEl0ZW19IGltZ2ApO1xyXG4gICAgaW1hZ2VzLmZvckVhY2goaW1nID0+IHtcclxuICAgICAgaWYgKGltZyBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGltZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gQ2xlYW4gdXAgdGhlIG9ic2VydmVyXHJcbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gIH0sIFtmaWxlc10pOyAvLyBEZXBlbmRlbmN5IGFycmF5LCByZS1ydW4gaWYgZmlsZXMgY2hhbmdlXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17ZmV0Y2hEcm9wYm94RmlsZXN9PkxvYWQgRmlsZXMgZnJvbSBEcm9wYm94PC9idXR0b24+XHJcbiAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgIHtmaWxlcz8ubWFwKChmaWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYga2V5PXtmaWxlPy5pZCB8fCBpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW19IG9uQ2xpY2s9eygpID0+IG9wZW5MaWdodGJveChmaWxlPy5wcmV2aWV3X3VybCl9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAge2ZpbGU/LnByZXZpZXdfdXJsICYmIGdldEZpbGVFeHRlbnNpb24oZmlsZT8ubmFtZSkgPT09ICdtcDQnXHJcbiAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb1RodW1ibmFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHNyYz17ZmlsZT8ucHJldmlld191cmx9IHByZWxvYWQ9XCJtZXRhZGF0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufT5QbGF5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17ZmlsZT8ucHJldmlld191cmx9IGFsdD17ZmlsZT8ubmFtZX0gLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW1UZXh0fT57ZmlsZT8ubmFtZX08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtVGV4dH0+e2ZpbGU/LmNsaWVudF9tb2RpZmllZH08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8TGlnaHRib3hcclxuICAgICAgICAgIG1haW5TcmM9e2N1cnJlbnRGaWxlfVxyXG4gICAgICAgICAgb25DbG9zZVJlcXVlc3Q9eygpID0+IHNldElzT3BlbihmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpZ2h0Ym94Iiwic3R5bGVzIiwiSG9tZSIsImZpbGVzIiwic2V0RmlsZXMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjdXJyZW50RmlsZSIsInNldEN1cnJlbnRGaWxlIiwib3BlbkxpZ2h0Ym94IiwidXJsIiwiZ2V0RmlsZUV4dGVuc2lvbiIsImZpbGVuYW1lIiwibGFzdERvdEluZGV4IiwibGFzdEluZGV4T2YiLCJzdWJzdHJpbmciLCJidWZmZXJUb0FycmF5QnVmZmVyIiwiYnVmZmVyIiwic2xpY2UiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsImNvbnZlcnRUb1VybCIsImFycmF5QnVmZmVyIiwiYmxvYiIsIkJsb2IiLCJpbWFnZVVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbnNvbGUiLCJsb2ciLCJjb252ZXJ0RHJvcGJveExpbmsiLCJmaWxlIiwicmVwbGFjZSIsImVycm9yIiwiZmV0Y2hEcm9wYm94RmlsZXMiLCJyZXMiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsInByb2Nlc3NlZEZpbGVzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInByZXZpZXdfdXJsIiwiZmlsdGVyZWRGaWxlcyIsImZpbHRlciIsImZldGNoQ2xvdWRpbmFyeUZpbGVzIiwib2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpbWciLCJ0YXJnZXQiLCJ3aWR0aCIsImNvbnRlbnRSZWN0Iiwic2V0R3JpZEl0ZW1XaWR0aHMiLCJwcmV2V2lkdGhzIiwic3JjIiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ3JpZEl0ZW0iLCJIVE1MSW1hZ2VFbGVtZW50Iiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiZ3JpZENvbnRhaW5lciIsImluZGV4IiwiaW1hZ2VXcmFwcGVyIiwibmFtZSIsInZpZGVvVGh1bWJuYWlsIiwidmlkZW8iLCJwcmVsb2FkIiwicGxheUJ1dHRvbiIsImFsdCIsInRleHRDb250YWluZXIiLCJ0ZXh0IiwiZ3JpZEl0ZW1UZXh0IiwiY2xpZW50X21vZGlmaWVkIiwiaWQiLCJtYWluU3JjIiwib25DbG9zZVJlcXVlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});