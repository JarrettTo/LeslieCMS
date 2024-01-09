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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ \"./node_modules/react-image-lightbox/dist/index.es.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // replace with actual data fetching\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentFile, setCurrentFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openLightbox = (url)=>{\n        setCurrentFile(url);\n        setIsOpen(true);\n    };\n    function getFileExtension(filename) {\n        // Find the last dot in the filename\n        const lastDotIndex = filename === null || filename === void 0 ? void 0 : filename.lastIndexOf(\".\");\n        return lastDotIndex !== -1 ? filename === null || filename === void 0 ? void 0 : filename.substring(lastDotIndex + 1) : \"\";\n    }\n    function bufferToArrayBuffer(buffer) {\n        var _buffer_buffer;\n        return (_buffer_buffer = buffer.buffer) === null || _buffer_buffer === void 0 ? void 0 : _buffer_buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);\n    }\n    function convertToUrl(buffer) {\n        const arrayBuffer = bufferToArrayBuffer(buffer);\n        const blob = new Blob([\n            arrayBuffer\n        ]); // Adjust the MIME type as needed\n        const imageUrl = URL.createObjectURL(blob);\n        console.log(imageUrl);\n        return imageUrl;\n    }\n    async function convertDropboxLink(file) {\n        try {\n            return file === null || file === void 0 ? void 0 : file.url.replace(\"www.dropbox.com\", \"dl.dropboxusercontent.com\").replace(\"dl=0\", \"dl=1\");\n        } catch (error) {\n            console.error(\"Error in convertDropboxLink:\", error);\n            return null; // or some fallback URL\n        }\n    }\n    const fetchDropboxFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/dropbox\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            const processedFiles = await Promise.all(data.map(async (file)=>{\n                const url = await convertDropboxLink(file);\n                if (url != null) {\n                    return {\n                        ...file,\n                        preview_url: url\n                    };\n                }\n            // Combine the file info with the new URL\n            }));\n            const filteredFiles = processedFiles.filter((file)=>file != null);\n            console.log(filteredFiles);\n            setFiles(filteredFiles);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    const fetchCloudinaryFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/cloudinary\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchDropboxFiles,\n                children: \"Load Files from Dropbox\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridContainer),\n                children: files === null || files === void 0 ? void 0 : files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridItem),\n                        onClick: ()=>openLightbox(file === null || file === void 0 ? void 0 : file.preview_url),\n                        children: (file === null || file === void 0 ? void 0 : file.preview_url) && getFileExtension(file === null || file === void 0 ? void 0 : file.name) === \"mp4\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().videoThumbnail),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                    preload: \"metadata\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().playButton),\n                                    children: \"Play\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 19\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: file === null || file === void 0 ? void 0 : file.preview_url,\n                            alt: file === null || file === void 0 ? void 0 : file.name\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 17\n                        }, undefined)\n                    }, (file === null || file === void 0 ? void 0 : file.id) || index, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mainSrc: currentFile,\n                onCloseRequest: ()=>setIsOpen(false)\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"/rb4oKfseRd0pa44BUQag1Iw+S0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7SUFDTCxxQkFDRSw4REFBQ21EOzswQkFDQyw4REFBQ0M7Z0JBQU9DLFNBQVNsQjswQkFBbUI7Ozs7OzswQkFDcEMsOERBQUNnQjtnQkFBS0csV0FBV3BELHlFQUFvQjswQkFDbENFLGtCQUFBQSw0QkFBQUEsTUFBTzBDLEdBQUcsQ0FBQyxDQUFDZCxNQUFNd0Isc0JBQ2pCLDhEQUFDTDt3QkFBNkJHLFdBQVdwRCxvRUFBZTt3QkFBRW1ELFNBQVMsSUFBTTNDLGFBQWFzQixpQkFBQUEsMkJBQUFBLEtBQU1lLFdBQVc7a0NBRXBHZixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1lLFdBQVcsS0FBSW5DLGlCQUFpQm9CLGlCQUFBQSwyQkFBQUEsS0FBTTBCLElBQUksTUFBTSxzQkFFakQsOERBQUNQOzRCQUFLRyxXQUFXcEQsMEVBQXFCOzs4Q0FDcEMsOERBQUMwRDtvQ0FBTUMsR0FBRyxFQUFFN0IsaUJBQUFBLDJCQUFBQSxLQUFNZSxXQUFXO29DQUFFZSxTQUFROzs7Ozs7OENBQ3ZDLDhEQUFDWDtvQ0FBSUcsV0FBV3BELHNFQUFpQjs4Q0FBRTs7Ozs7Ozs7Ozs7c0RBR3ZDLDhEQUFDOEQ7NEJBQUlILEdBQUcsRUFBRTdCLGlCQUFBQSwyQkFBQUEsS0FBTWUsV0FBVzs0QkFBRWtCLEdBQUcsRUFBRWpDLGlCQUFBQSwyQkFBQUEsS0FBTTBCLElBQUk7Ozs7Ozt1QkFUeEMxQixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1rQyxFQUFFLEtBQUlWOzs7Ozs7Ozs7O1lBY3pCbEQsd0JBQ0MsOERBQUNMLDREQUFRQTtnQkFDUGtFLFNBQVMzRDtnQkFDVDRELGdCQUFnQixJQUFNN0QsVUFBVTs7Ozs7Ozs7Ozs7O0FBSzFDO0dBcEdNSjtLQUFBQTtBQXNHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gJ3JlYWN0LWltYWdlLWxpZ2h0Ym94JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcclxuXHJcbnR5cGUgRmlsZVR5cGUgPSB7XHJcbiAgXCIudGFnXCI6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGlua19wZXJtaXNzaW9uczogc3RyaW5nO1xyXG4gIGNsaWVudF9tb2RpZmllZDogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBwYXRoX2xvd2VyOiBzdHJpbmc7XHJcbiAgcmV2OiBzdHJpbmc7XHJcbiAgc2VydmVyX21vZGlmaWVkOiBzdHJpbmc7XHJcbiAgdGVhbV9tZW1iZXJfaW5mbzpzdHJpbmc7XHJcbiAgY29udGVudF9vd25lcl90ZWFtX2luZm86IHN0cmluZztcclxuICBzaXplOiBudW1iZXI7XHJcbiAgcHJldmlld191cmwgOnN0cmluZztcclxufTtcclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGU8RmlsZVR5cGVbXT4oW10pOyAvLyByZXBsYWNlIHdpdGggYWN0dWFsIGRhdGEgZmV0Y2hpbmdcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50RmlsZSwgc2V0Q3VycmVudEZpbGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3Qgb3BlbkxpZ2h0Ym94ID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50RmlsZSh1cmwpO1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbihmaWxlbmFtZSkge1xyXG4gICAgLy8gRmluZCB0aGUgbGFzdCBkb3QgaW4gdGhlIGZpbGVuYW1lXHJcbiAgICBjb25zdCBsYXN0RG90SW5kZXggPSBmaWxlbmFtZT8ubGFzdEluZGV4T2YoJy4nKTtcclxuICAgIHJldHVybiBsYXN0RG90SW5kZXggIT09IC0xID8gZmlsZW5hbWU/LnN1YnN0cmluZyhsYXN0RG90SW5kZXggKyAxKSA6ICcnO1xyXG4gIH1cclxuICBmdW5jdGlvbiBidWZmZXJUb0FycmF5QnVmZmVyKGJ1ZmZlcikge1xyXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXI/LnNsaWNlKGJ1ZmZlci5ieXRlT2Zmc2V0LCBidWZmZXIuYnl0ZU9mZnNldCArIGJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxufVxyXG4gIGZ1bmN0aW9uIGNvbnZlcnRUb1VybChidWZmZXIpIHtcclxuICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYnVmZmVyVG9BcnJheUJ1ZmZlcihidWZmZXIpO1xyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pOyAvLyBBZGp1c3QgdGhlIE1JTUUgdHlwZSBhcyBuZWVkZWRcclxuXHJcbiAgICBjb25zdCBpbWFnZVVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZVVybClcclxuICAgIHJldHVybiBpbWFnZVVybDtcclxufVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnREcm9wYm94TGluayhmaWxlOiBGaWxlVHlwZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGZpbGU/LnVybC5yZXBsYWNlKFwid3d3LmRyb3Bib3guY29tXCIsIFwiZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbVwiKS5yZXBsYWNlKFwiZGw9MFwiLCBcImRsPTFcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjb252ZXJ0RHJvcGJveExpbms6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gb3Igc29tZSBmYWxsYmFjayBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoRHJvcGJveEZpbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvZHJvcGJveCcpO1xyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc3QgcHJvY2Vzc2VkRmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBmaWxlID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBjb252ZXJ0RHJvcGJveExpbmsoZmlsZSk7XHJcbiAgICAgICAgaWYodXJsIT1udWxsKXtcclxuICAgICAgICAgIHJldHVybiB7IC4uLmZpbGUsIHByZXZpZXdfdXJsOiB1cmwgfTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENvbWJpbmUgdGhlIGZpbGUgaW5mbyB3aXRoIHRoZSBuZXcgVVJMXHJcbiAgICAgIH0pKTtcclxuICAgICAgY29uc3QgZmlsdGVyZWRGaWxlcyA9IHByb2Nlc3NlZEZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUhPSBudWxsKTtcclxuICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRGaWxlcylcclxuICAgICAgc2V0RmlsZXMoZmlsdGVyZWRGaWxlcyk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBEcm9wYm94IGZpbGVzJywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoQ2xvdWRpbmFyeUZpbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY2xvdWRpbmFyeScpO1xyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBEcm9wYm94IGZpbGVzJywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgXHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoRHJvcGJveEZpbGVzfT5Mb2FkIEZpbGVzIGZyb20gRHJvcGJveDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkQ29udGFpbmVyfT5cclxuICAgICAgICB7ZmlsZXM/Lm1hcCgoZmlsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtmaWxlPy5pZCB8fCBpbmRleH0gIGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfSBvbkNsaWNrPXsoKSA9PiBvcGVuTGlnaHRib3goZmlsZT8ucHJldmlld191cmwpfT5cclxuXHJcbiAgICAgICAgICAgIHtmaWxlPy5wcmV2aWV3X3VybCAmJiBnZXRGaWxlRXh0ZW5zaW9uKGZpbGU/Lm5hbWUpID09PSAnbXA0J1xyXG4gICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy52aWRlb1RodW1ibmFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHNyYz17ZmlsZT8ucHJldmlld191cmx9IHByZWxvYWQ9XCJtZXRhZGF0YVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdXR0b259PlBsYXk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiA8aW1nIHNyYz17ZmlsZT8ucHJldmlld191cmx9IGFsdD17ZmlsZT8ubmFtZX0gLz59XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPExpZ2h0Ym94XHJcbiAgICAgICAgICBtYWluU3JjPXtjdXJyZW50RmlsZX1cclxuICAgICAgICAgIG9uQ2xvc2VSZXF1ZXN0PXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaWdodGJveCIsInN0eWxlcyIsIkhvbWUiLCJmaWxlcyIsInNldEZpbGVzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY3VycmVudEZpbGUiLCJzZXRDdXJyZW50RmlsZSIsIm9wZW5MaWdodGJveCIsInVybCIsImdldEZpbGVFeHRlbnNpb24iLCJmaWxlbmFtZSIsImxhc3REb3RJbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwiYnVmZmVyVG9BcnJheUJ1ZmZlciIsImJ1ZmZlciIsInNsaWNlIiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJjb252ZXJ0VG9VcmwiLCJhcnJheUJ1ZmZlciIsImJsb2IiLCJCbG9iIiwiaW1hZ2VVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb25zb2xlIiwibG9nIiwiY29udmVydERyb3Bib3hMaW5rIiwiZmlsZSIsInJlcGxhY2UiLCJlcnJvciIsImZldGNoRHJvcGJveEZpbGVzIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJwcm9jZXNzZWRGaWxlcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJwcmV2aWV3X3VybCIsImZpbHRlcmVkRmlsZXMiLCJmaWx0ZXIiLCJmZXRjaENsb3VkaW5hcnlGaWxlcyIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJncmlkQ29udGFpbmVyIiwiaW5kZXgiLCJncmlkSXRlbSIsIm5hbWUiLCJ2aWRlb1RodW1ibmFpbCIsInZpZGVvIiwic3JjIiwicHJlbG9hZCIsInBsYXlCdXR0b24iLCJpbWciLCJhbHQiLCJpZCIsIm1haW5TcmMiLCJvbkNsb3NlUmVxdWVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});