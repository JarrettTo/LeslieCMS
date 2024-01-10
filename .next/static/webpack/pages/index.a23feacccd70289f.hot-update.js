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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ \"./node_modules/react-image-lightbox/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // replace with actual data fetching\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentFile, setCurrentFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openLightbox = (url)=>{\n        setCurrentFile(url);\n        setIsOpen(true);\n    };\n    function getFileExtension(filename) {\n        // Find the last dot in the filename\n        const lastDotIndex = filename === null || filename === void 0 ? void 0 : filename.lastIndexOf(\".\");\n        return lastDotIndex !== -1 ? filename === null || filename === void 0 ? void 0 : filename.substring(lastDotIndex + 1) : \"\";\n    }\n    function bufferToArrayBuffer(buffer) {\n        var _buffer_buffer;\n        return (_buffer_buffer = buffer.buffer) === null || _buffer_buffer === void 0 ? void 0 : _buffer_buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);\n    }\n    function convertToUrl(buffer) {\n        const arrayBuffer = bufferToArrayBuffer(buffer);\n        const blob = new Blob([\n            arrayBuffer\n        ]); // Adjust the MIME type as needed\n        const imageUrl = URL.createObjectURL(blob);\n        console.log(imageUrl);\n        return imageUrl;\n    }\n    async function convertDropboxLink(file) {\n        try {\n            return file === null || file === void 0 ? void 0 : file.url.replace(\"www.dropbox.com\", \"dl.dropboxusercontent.com\").replace(\"dl=0\", \"dl=1\");\n        } catch (error) {\n            console.error(\"Error in convertDropboxLink:\", error);\n            return null; // or some fallback URL\n        }\n    }\n    const fetchDropboxFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/dropbox\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            const processedFiles = await Promise.all(data.map(async (file)=>{\n                const url = await convertDropboxLink(file);\n                return {\n                    ...file,\n                    preview_url: url\n                }; // Combine the file info with the new URL\n            }));\n            console.log(processedFiles);\n            setFiles(processedFiles);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    const fetchCloudinaryFiles = async ()=>{\n        try {\n            const res = await fetch(\"/api/cloudinary\");\n            if (!res.ok) {\n                throw new Error(\"Error: \".concat(res.status));\n            }\n            const data = await res.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"There was an error fetching the Dropbox files\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchDropboxFiles,\n                children: \"Load Files from Dropbox\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    files === null || files === void 0 ? void 0 : files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>openLightbox(file === null || file === void 0 ? void 0 : file.url),\n                            style: {\n                                padding: 0,\n                                border: \"none\",\n                                background: \"none\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: file === null || file === void 0 ? void 0 : file.preview_url,\n                                alt: file === null || file === void 0 ? void 0 : file.name,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"100px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined)\n                        }, (file === null || file === void 0 ? void 0 : file.id) || index, false, {\n                            fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)),\n                    isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        mainSrc: currentFile,\n                        onCloseRequest: ()=>setIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Jiu Studios\\\\Leslie\\\\pages\\\\index.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"/rb4oKfseRd0pa44BUQag1Iw+S0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQUFBLE1BQU8wQyxHQUFHLENBQUUsQ0FBQ2QsTUFBTW9CLHNCQUNsQiw4REFBQ0Y7NEJBQStCQyxTQUFTLElBQU16QyxhQUFhc0IsaUJBQUFBLDJCQUFBQSxLQUFNckIsR0FBRzs0QkFBRzBDLE9BQU87Z0NBQUVDLFNBQVM7Z0NBQUdDLFFBQVE7Z0NBQVFDLFlBQVk7NEJBQU87c0NBQzlILDRFQUFDQztnQ0FBSUMsR0FBRyxFQUFFMUIsaUJBQUFBLDJCQUFBQSxLQUFNZSxXQUFXO2dDQUFFWSxHQUFHLEVBQUUzQixpQkFBQUEsMkJBQUFBLEtBQU00QixJQUFJO2dDQUFFUCxPQUFPO29DQUFFUSxPQUFPO29DQUFTQyxRQUFRO2dDQUFROzs7Ozs7MkJBRDVFOUIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNK0IsRUFBRSxLQUFJWDs7Ozs7b0JBSTFCOUMsd0JBQ0MsOERBQUNKLDREQUFRQTt3QkFDUDhELFNBQVN4RDt3QkFDVHlELGdCQUFnQixJQUFNMUQsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVDO0dBeEZNSjtLQUFBQTtBQTBGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gJ3JlYWN0LWltYWdlLWxpZ2h0Ym94JztcclxuXHJcblxyXG50eXBlIEZpbGVUeXBlID0ge1xyXG4gIFwiLnRhZ1wiOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxpbmtfcGVybWlzc2lvbnM6IHN0cmluZztcclxuICBjbGllbnRfbW9kaWZpZWQ6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcGF0aF9sb3dlcjogc3RyaW5nO1xyXG4gIHJldjogc3RyaW5nO1xyXG4gIHNlcnZlcl9tb2RpZmllZDogc3RyaW5nO1xyXG4gIHRlYW1fbWVtYmVyX2luZm86c3RyaW5nO1xyXG4gIGNvbnRlbnRfb3duZXJfdGVhbV9pbmZvOiBzdHJpbmc7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIHByZXZpZXdfdXJsIDpzdHJpbmc7XHJcbn07XHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEZpbGVUeXBlW10+KFtdKTsgLy8gcmVwbGFjZSB3aXRoIGFjdHVhbCBkYXRhIGZldGNoaW5nXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEZpbGUsIHNldEN1cnJlbnRGaWxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IG9wZW5MaWdodGJveCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZpbGUodXJsKTtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb24oZmlsZW5hbWUpIHtcclxuICAgIC8vIEZpbmQgdGhlIGxhc3QgZG90IGluIHRoZSBmaWxlbmFtZVxyXG4gICAgY29uc3QgbGFzdERvdEluZGV4ID0gZmlsZW5hbWU/Lmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICByZXR1cm4gbGFzdERvdEluZGV4ICE9PSAtMSA/IGZpbGVuYW1lPy5zdWJzdHJpbmcobGFzdERvdEluZGV4ICsgMSkgOiAnJztcclxuICB9XHJcbiAgZnVuY3Rpb24gYnVmZmVyVG9BcnJheUJ1ZmZlcihidWZmZXIpIHtcclxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyPy5zbGljZShidWZmZXIuYnl0ZU9mZnNldCwgYnVmZmVyLmJ5dGVPZmZzZXQgKyBidWZmZXIuYnl0ZUxlbmd0aCk7XHJcbn1cclxuICBmdW5jdGlvbiBjb252ZXJ0VG9VcmwoYnVmZmVyKSB7XHJcbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGJ1ZmZlclRvQXJyYXlCdWZmZXIoYnVmZmVyKTtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYXJyYXlCdWZmZXJdKTsgLy8gQWRqdXN0IHRoZSBNSU1FIHR5cGUgYXMgbmVlZGVkXHJcblxyXG4gICAgY29uc3QgaW1hZ2VVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2VVcmwpXHJcbiAgICByZXR1cm4gaW1hZ2VVcmw7XHJcbn1cclxuICBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RHJvcGJveExpbmsoZmlsZTogRmlsZVR5cGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBmaWxlPy51cmwucmVwbGFjZShcInd3dy5kcm9wYm94LmNvbVwiLCBcImRsLmRyb3Bib3h1c2VyY29udGVudC5jb21cIikucmVwbGFjZShcImRsPTBcIiwgXCJkbD0xXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY29udmVydERyb3Bib3hMaW5rOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIG9yIHNvbWUgZmFsbGJhY2sgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaERyb3Bib3hGaWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Ryb3Bib3gnKTtcclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHByb2Nlc3NlZEZpbGVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgZmlsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgY29udmVydERyb3Bib3hMaW5rKGZpbGUpO1xyXG4gICAgICAgIHJldHVybiB7IC4uLmZpbGUsIHByZXZpZXdfdXJsOiB1cmwgfTsgLy8gQ29tYmluZSB0aGUgZmlsZSBpbmZvIHdpdGggdGhlIG5ldyBVUkxcclxuICAgICAgfSkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzZWRGaWxlcylcclxuICAgICAgc2V0RmlsZXMocHJvY2Vzc2VkRmlsZXMpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgRHJvcGJveCBmaWxlcycsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaENsb3VkaW5hcnlGaWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Nsb3VkaW5hcnknKTtcclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgRHJvcGJveCBmaWxlcycsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgIFxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaERyb3Bib3hGaWxlc30+TG9hZCBGaWxlcyBmcm9tIERyb3Bib3g8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZmlsZXM/Lm1hcCggKGZpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uIGtleT17ZmlsZT8uaWQgfHwgaW5kZXh9IG9uQ2xpY2s9eygpID0+IG9wZW5MaWdodGJveChmaWxlPy51cmwpfSBzdHlsZT17eyBwYWRkaW5nOiAwLCBib3JkZXI6ICdub25lJywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17ZmlsZT8ucHJldmlld191cmx9IGFsdD17ZmlsZT8ubmFtZX0gc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JyB9fSAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgICA8TGlnaHRib3hcclxuICAgICAgICAgICAgbWFpblNyYz17Y3VycmVudEZpbGV9XHJcbiAgICAgICAgICAgIG9uQ2xvc2VSZXF1ZXN0PXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaWdodGJveCIsIkhvbWUiLCJmaWxlcyIsInNldEZpbGVzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY3VycmVudEZpbGUiLCJzZXRDdXJyZW50RmlsZSIsIm9wZW5MaWdodGJveCIsInVybCIsImdldEZpbGVFeHRlbnNpb24iLCJmaWxlbmFtZSIsImxhc3REb3RJbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwiYnVmZmVyVG9BcnJheUJ1ZmZlciIsImJ1ZmZlciIsInNsaWNlIiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJjb252ZXJ0VG9VcmwiLCJhcnJheUJ1ZmZlciIsImJsb2IiLCJCbG9iIiwiaW1hZ2VVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb25zb2xlIiwibG9nIiwiY29udmVydERyb3Bib3hMaW5rIiwiZmlsZSIsInJlcGxhY2UiLCJlcnJvciIsImZldGNoRHJvcGJveEZpbGVzIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJwcm9jZXNzZWRGaWxlcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJwcmV2aWV3X3VybCIsImZldGNoQ2xvdWRpbmFyeUZpbGVzIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImluZGV4Iiwic3R5bGUiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImltZyIsInNyYyIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsImlkIiwibWFpblNyYyIsIm9uQ2xvc2VSZXF1ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});