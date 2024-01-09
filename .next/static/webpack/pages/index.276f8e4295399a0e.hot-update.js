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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ \"./node_modules/react-image-lightbox/dist/index.es.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // replace with actual data fetching\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentFile, setCurrentFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openLightbox = (url)=>{\n        setCurrentFile(url);\n        setIsOpen(true);\n    };\n    function getFileExtension(filename) {\n        // Find the last dot in the filename\n        const lastDotIndex = filename === null || filename === void 0 ? void 0 : filename.lastIndexOf(\".\");\n        return lastDotIndex !== -1 ? filename === null || filename === void 0 ? void 0 : filename.substring(lastDotIndex + 1) : \"\";\n    }\n    function bufferToArrayBuffer(buffer) {\n        var _buffer_buffer;\n        return (_buffer_buffer = buffer.buffer) === null || _buffer_buffer === void 0 ? void 0 : _buffer_buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);\n    }\n    function convertToUrl(buffer) {\n        const arrayBuffer = bufferToArrayBuffer(buffer);\n        const blob = new Blob([\n            arrayBuffer\n        ]); // Adjust the MIME type as needed\n        const imageUrl = URL.createObjectURL(blob);\n        console.log(imageUrl);\n        return imageUrl;\n    }\n    async function convertDropboxLink(file) {\n        try {\n            return file === null || file === void 0 ? void 0 : file.url.replace(\"www.dropbox.com\", \"dl.dropboxusercontent.com\").replace(\"dl=0\", \"dl=1\");\n        } catch (error) {\n            console.error(\"Error in convertDropboxLink:\", error);\n            return null; // or some fallback URL\n        }\n    }\n    const fetchDropboxFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/dropbox\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            const processedFiles = await Promise.all(data.map(async (file)=>{\n                const url = await convertDropboxLink(file);\n                if (url != null) {\n                    return {\n                        ...file,\n                        preview_url: url\n                    };\n                }\n            // Combine the file info with the new URL\n            }));\n            const filteredFiles = processedFiles.filter((file)=>file != null);\n            console.log(filteredFiles);\n            setFiles(filteredFiles);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    const fetchCloudinaryFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/cloudinary\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchDropboxFiles,\n                children: \"Load Files from Dropbox\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridContainer),\n                children: files === null || files === void 0 ? void 0 : files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridItem),\n                        onClick: ()=>openLightbox(file === null || file === void 0 ? void 0 : file.preview_url),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageWrapper),\n                                children: (file === null || file === void 0 ? void 0 : file.preview_url) && getFileExtension(file === null || file === void 0 ? void 0 : file.name) === \"mp4\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().videoThumbnail),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                            src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                            preload: \"metadata\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().playButton),\n                                            children: \"Play\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 19\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                    alt: file === null || file === void 0 ? void 0 : file.name\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridItemText),\n                                children: file === null || file === void 0 ? void 0 : file.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridItemText),\n                                children: file === null || file === void 0 ? void 0 : file.client_modified\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, (file === null || file === void 0 ? void 0 : file.id) || index, true, {\n                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mainSrc: currentFile,\n                onCloseRequest: ()=>setIsOpen(false)\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"/rb4oKfseRd0pa44BUQag1Iw+S0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsSUFBTWpFLFVBQVU7Ozs7Ozs7Ozs7OztBQUsxQztHQXRHTUo7S0FBQUE7QUF3R04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XHJcblxyXG50eXBlIEZpbGVUeXBlID0ge1xyXG4gIFwiLnRhZ1wiOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxpbmtfcGVybWlzc2lvbnM6IHN0cmluZztcclxuICBjbGllbnRfbW9kaWZpZWQ6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcGF0aF9sb3dlcjogc3RyaW5nO1xyXG4gIHJldjogc3RyaW5nO1xyXG4gIHNlcnZlcl9tb2RpZmllZDogc3RyaW5nO1xyXG4gIHRlYW1fbWVtYmVyX2luZm86c3RyaW5nO1xyXG4gIGNvbnRlbnRfb3duZXJfdGVhbV9pbmZvOiBzdHJpbmc7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIHByZXZpZXdfdXJsIDpzdHJpbmc7XHJcbn07XHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEZpbGVUeXBlW10+KFtdKTsgLy8gcmVwbGFjZSB3aXRoIGFjdHVhbCBkYXRhIGZldGNoaW5nXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEZpbGUsIHNldEN1cnJlbnRGaWxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IG9wZW5MaWdodGJveCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZpbGUodXJsKTtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb24oZmlsZW5hbWUpIHtcclxuICAgIC8vIEZpbmQgdGhlIGxhc3QgZG90IGluIHRoZSBmaWxlbmFtZVxyXG4gICAgY29uc3QgbGFzdERvdEluZGV4ID0gZmlsZW5hbWU/Lmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICByZXR1cm4gbGFzdERvdEluZGV4ICE9PSAtMSA/IGZpbGVuYW1lPy5zdWJzdHJpbmcobGFzdERvdEluZGV4ICsgMSkgOiAnJztcclxuICB9XHJcbiAgZnVuY3Rpb24gYnVmZmVyVG9BcnJheUJ1ZmZlcihidWZmZXIpIHtcclxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyPy5zbGljZShidWZmZXIuYnl0ZU9mZnNldCwgYnVmZmVyLmJ5dGVPZmZzZXQgKyBidWZmZXIuYnl0ZUxlbmd0aCk7XHJcbn1cclxuICBmdW5jdGlvbiBjb252ZXJ0VG9VcmwoYnVmZmVyKSB7XHJcbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGJ1ZmZlclRvQXJyYXlCdWZmZXIoYnVmZmVyKTtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYXJyYXlCdWZmZXJdKTsgLy8gQWRqdXN0IHRoZSBNSU1FIHR5cGUgYXMgbmVlZGVkXHJcblxyXG4gICAgY29uc3QgaW1hZ2VVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2VVcmwpXHJcbiAgICByZXR1cm4gaW1hZ2VVcmw7XHJcbn1cclxuICBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RHJvcGJveExpbmsoZmlsZTogRmlsZVR5cGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBmaWxlPy51cmwucmVwbGFjZShcInd3dy5kcm9wYm94LmNvbVwiLCBcImRsLmRyb3Bib3h1c2VyY29udGVudC5jb21cIikucmVwbGFjZShcImRsPTBcIiwgXCJkbD0xXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY29udmVydERyb3Bib3hMaW5rOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIG9yIHNvbWUgZmFsbGJhY2sgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaERyb3Bib3hGaWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Ryb3Bib3gnKTtcclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHByb2Nlc3NlZEZpbGVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgZmlsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgY29udmVydERyb3Bib3hMaW5rKGZpbGUpO1xyXG4gICAgICAgIGlmKHVybCE9bnVsbCl7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5maWxlLCBwcmV2aWV3X3VybDogdXJsIH07IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDb21iaW5lIHRoZSBmaWxlIGluZm8gd2l0aCB0aGUgbmV3IFVSTFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkRmlsZXMgPSBwcm9jZXNzZWRGaWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlIT0gbnVsbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRmlsZXMpXHJcbiAgICAgIHNldEZpbGVzKGZpbHRlcmVkRmlsZXMpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgRHJvcGJveCBmaWxlcycsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaENsb3VkaW5hcnlGaWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Nsb3VkaW5hcnknKTtcclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgRHJvcGJveCBmaWxlcycsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgIFxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaERyb3Bib3hGaWxlc30+TG9hZCBGaWxlcyBmcm9tIERyb3Bib3g8L2J1dHRvbj5cclxuICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZENvbnRhaW5lcn0+XHJcbiAgICAgICAge2ZpbGVzPy5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17ZmlsZT8uaWQgfHwgaW5kZXh9ICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbX0gb25DbGljaz17KCkgPT4gb3BlbkxpZ2h0Ym94KGZpbGU/LnByZXZpZXdfdXJsKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VXcmFwcGVyfT5cclxuICAgICAgICAgICAge2ZpbGU/LnByZXZpZXdfdXJsICYmIGdldEZpbGVFeHRlbnNpb24oZmlsZT8ubmFtZSkgPT09ICdtcDQnXHJcbiAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvVGh1bWJuYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICA8dmlkZW8gc3JjPXtmaWxlPy5wcmV2aWV3X3VybH0gcHJlbG9hZD1cIm1ldGFkYXRhXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn0+UGxheTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtmaWxlPy5wcmV2aWV3X3VybH0gYWx0PXtmaWxlPy5uYW1lfSAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtVGV4dH0+e2ZpbGU/Lm5hbWV9PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbVRleHR9PntmaWxlPy5jbGllbnRfbW9kaWZpZWR9PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8TGlnaHRib3hcclxuICAgICAgICAgIG1haW5TcmM9e2N1cnJlbnRGaWxlfVxyXG4gICAgICAgICAgb25DbG9zZVJlcXVlc3Q9eygpID0+IHNldElzT3BlbihmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpZ2h0Ym94Iiwic3R5bGVzIiwiSG9tZSIsImZpbGVzIiwic2V0RmlsZXMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjdXJyZW50RmlsZSIsInNldEN1cnJlbnRGaWxlIiwib3BlbkxpZ2h0Ym94IiwidXJsIiwiZ2V0RmlsZUV4dGVuc2lvbiIsImZpbGVuYW1lIiwibGFzdERvdEluZGV4IiwibGFzdEluZGV4T2YiLCJzdWJzdHJpbmciLCJidWZmZXJUb0FycmF5QnVmZmVyIiwiYnVmZmVyIiwic2xpY2UiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsImNvbnZlcnRUb1VybCIsImFycmF5QnVmZmVyIiwiYmxvYiIsIkJsb2IiLCJpbWFnZVVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbnNvbGUiLCJsb2ciLCJjb252ZXJ0RHJvcGJveExpbmsiLCJmaWxlIiwicmVwbGFjZSIsImVycm9yIiwiZmV0Y2hEcm9wYm94RmlsZXMiLCJyZXMiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsInByb2Nlc3NlZEZpbGVzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInByZXZpZXdfdXJsIiwiZmlsdGVyZWRGaWxlcyIsImZpbHRlciIsImZldGNoQ2xvdWRpbmFyeUZpbGVzIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImdyaWRDb250YWluZXIiLCJpbmRleCIsImdyaWRJdGVtIiwiaW1hZ2VXcmFwcGVyIiwibmFtZSIsInZpZGVvVGh1bWJuYWlsIiwidmlkZW8iLCJzcmMiLCJwcmVsb2FkIiwicGxheUJ1dHRvbiIsImltZyIsImFsdCIsInRleHQiLCJncmlkSXRlbVRleHQiLCJjbGllbnRfbW9kaWZpZWQiLCJpZCIsIm1haW5TcmMiLCJvbkNsb3NlUmVxdWVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});