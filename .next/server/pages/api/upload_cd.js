"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload_cd";
exports.ids = ["pages/api/upload_cd"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload_cd&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cupload_cd.ts&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload_cd&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cupload_cd.ts&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_upload_cd_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\upload_cd.ts */ \"(api)/./pages/api/upload_cd.ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_upload_cd_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_upload_cd_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/upload_cd\",\n        pathname: \"/api/upload_cd\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_upload_cd_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnVwbG9hZF9jZCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDdXBsb2FkX2NkLnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3VEO0FBQ3ZEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxvREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsb0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVzbGllLz80YjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcdXBsb2FkX2NkLnRzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXBsb2FkX2NkXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXBsb2FkX2NkXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload_cd&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cupload_cd.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/upload_cd.ts":
/*!********************************!*\
  !*** ./pages/api/upload_cd.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\nconst formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.config({\n    cloud_name: process.env.CLOUD_NAME,\n    api_key: process.env.API_KEY,\n    api_secret: process.env.API_SECRET,\n    secure: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(\"WTF\");\n    try {\n        // Parse JSON from the form data\n        const form = new formidable.IncomingForm();\n        form.parse(req, async (err, fields, files)=>{\n            if (err) {\n                console.error(\"Error parsing the form data:\", err);\n                return res.status(500).json({\n                    error: \"Error parsing form data\"\n                });\n            }\n            // Handle your logic here. 'fields' contains non-file fields; 'files' contains file data\n            const jsonData = JSON.parse(fields.json[0]);\n            console.log(\"DATA\" + fields.json[0]);\n            console.log(\"DATES\" + fields[\"dates[chineserestaurantopenedtakeoutbox32oz3dsmodel001.jpg]\"]);\n            const keys = Object.keys(jsonData);\n            const uploadPromises = jsonData.map((record)=>{\n                console.log(\"WOW\" + record);\n                console.log(\"FILES\" + files);\n                // Adjust the logic to find the correct file in the 'files' object\n                const file = files[record.FILE_NAME]; // Adjust this according to how files are named\n                if (!file) {\n                    throw new Error(`No file found matching the name: ${record.FILE_NAME}`);\n                }\n                const fileDate = new Date(fields[\"dates[chineserestaurantopenedtakeoutbox32oz3dsmodel001.jpg]\"]).toISOString();\n                const context = {\n                    award: record.AWARD,\n                    idea: record.IDEA,\n                    agency: record.AGENCY,\n                    clients: record.CLIENTS,\n                    director: record.DIRECTOR,\n                    sound: record.SOUND,\n                    with: record.WITH,\n                    my_role: record.MY_ROLE,\n                    production_co: record.PRODUCTION_CO,\n                    date: fileDate\n                };\n                console.log(context);\n                return new Promise((resolve, reject)=>{\n                    cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.uploader.upload_stream({\n                        resource_type: \"auto\",\n                        public_id: record[\"FILE_NAME\"],\n                        context: context // Optional: add additional metadata from the record\n                    }, (error, result)=>{\n                        if (error) {\n                            reject(error);\n                        } else {\n                            resolve(result);\n                        }\n                    }).end(file.buffer);\n                });\n            });\n            const uploadResults = await Promise.all(uploadPromises);\n            res.status(200).json({\n                message: \"Files uploaded successfully\",\n                data: uploadResults\n            });\n        });\n    // Send back the response with Cloudinary results\n    } catch (error) {\n        console.log(error);\n        res.status(500).json({\n            error: \"Error uploading to Cloudinary\",\n            details: error\n        });\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkX2NkLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxNQUFNQSxhQUFhQyxtQkFBT0EsQ0FBQztBQUdTO0FBS3BDQyxvREFBYSxDQUFDRSxNQUFNLENBQUM7SUFDbkJDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNsQ0MsU0FBU0gsUUFBUUMsR0FBRyxDQUFDRyxPQUFPO0lBQzVCQyxZQUFZTCxRQUFRQyxHQUFHLENBQUNLLFVBQVU7SUFDbENDLFFBQVE7QUFDVjtBQUtBLGlFQUFlLE9BQU9DLEtBQXFCQztJQUN6Q0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1osSUFBRztRQUVILGdDQUFnQztRQUM5QixNQUFNQyxPQUFPLElBQUlsQixXQUFXbUIsWUFBWTtRQUN4Q0QsS0FBS0UsS0FBSyxDQUFDTixLQUFLLE9BQU9PLEtBQUtDLFFBQVFDO1lBQ2xDLElBQUlGLEtBQUs7Z0JBQ1BMLFFBQVFRLEtBQUssQ0FBQyxnQ0FBZ0NIO2dCQUM5QyxPQUFPTixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRixPQUFPO2dCQUEwQjtZQUNqRTtZQUVELHdGQUF3RjtZQUV4RixNQUFNRyxXQUFXQyxLQUFLUixLQUFLLENBQUNFLE9BQU9JLElBQUksQ0FBQyxFQUFFO1lBQzFDVixRQUFRQyxHQUFHLENBQUMsU0FBT0ssT0FBT0ksSUFBSSxDQUFDLEVBQUU7WUFDakNWLFFBQVFDLEdBQUcsQ0FBQyxVQUFVSyxNQUFNLENBQUMsOERBQThEO1lBQzNGLE1BQU1PLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0Y7WUFDekIsTUFBTUksaUJBQWlCSixTQUFTSyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ3BDakIsUUFBUUMsR0FBRyxDQUFDLFFBQU1nQjtnQkFDbEJqQixRQUFRQyxHQUFHLENBQUMsVUFBVU07Z0JBQ3RCLGtFQUFrRTtnQkFDbEUsTUFBTVcsT0FBT1gsS0FBSyxDQUFDVSxPQUFPRSxTQUFTLENBQUMsRUFBRSwrQ0FBK0M7Z0JBQ3JGLElBQUksQ0FBQ0QsTUFBTTtvQkFDVCxNQUFNLElBQUlFLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBRUgsT0FBT0UsU0FBUyxDQUFDLENBQUM7Z0JBQ3hFO2dCQUNBLE1BQU1FLFdBQVcsSUFBSUMsS0FBS2hCLE1BQU0sQ0FBQyw4REFBOEQsRUFBRWlCLFdBQVc7Z0JBQzVHLE1BQU1DLFVBQVU7b0JBQ2RDLE9BQU9SLE9BQU9TLEtBQUs7b0JBQ25CQyxNQUFNVixPQUFPVyxJQUFJO29CQUNqQkMsUUFBUVosT0FBT2EsTUFBTTtvQkFDckJDLFNBQVNkLE9BQU9lLE9BQU87b0JBQ3ZCQyxVQUFVaEIsT0FBT2lCLFFBQVE7b0JBQ3pCQyxPQUFPbEIsT0FBT21CLEtBQUs7b0JBQ25CQyxNQUFNcEIsT0FBT3FCLElBQUk7b0JBQ2pCQyxTQUFTdEIsT0FBT3VCLE9BQU87b0JBQ3ZCQyxlQUFleEIsT0FBT3lCLGFBQWE7b0JBQ25DQyxNQUFNdEI7Z0JBQ1I7Z0JBQ0FyQixRQUFRQyxHQUFHLENBQUN1QjtnQkFDWixPQUFPLElBQUlvQixRQUFRLENBQUNDLFNBQVNDO29CQUMzQjVELG9EQUFhLENBQUM2RCxRQUFRLENBQUNDLGFBQWEsQ0FBQzt3QkFDbkNDLGVBQWU7d0JBQ2ZDLFdBQVdqQyxNQUFNLENBQUMsWUFBWTt3QkFDOUJPLFNBQVNBLFFBQVEsb0RBQW9EO29CQUN2RSxHQUFHLENBQUNoQixPQUFPMkM7d0JBQ1QsSUFBSTNDLE9BQU87NEJBQ1RzQyxPQUFPdEM7d0JBQ1QsT0FBTzs0QkFDTHFDLFFBQVFNO3dCQUNWO29CQUNGLEdBQUdDLEdBQUcsQ0FBQ2xDLEtBQUttQyxNQUFNO2dCQUNwQjtZQUNGO1lBQ0EsTUFBTUMsZ0JBQWdCLE1BQU1WLFFBQVFXLEdBQUcsQ0FBQ3hDO1lBQ3hDaEIsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRThDLFNBQVM7Z0JBQStCQyxNQUFNSDtZQUFjO1FBQ3BGO0lBS0QsaURBQWlEO0lBR2pELEVBQUUsT0FBTzlDLE9BQU87UUFDZFIsUUFBUUMsR0FBRyxDQUFDTztRQUNaVCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVGLE9BQU87WUFBaUNrRCxTQUFTbEQ7UUFBTTtJQUNoRjtBQUNGLEdBQUM7QUFHTSxNQUFNcEIsU0FBUztJQUNwQnVFLEtBQUs7UUFDSEMsWUFBWTtJQUNkO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlc2xpZS8uL3BhZ2VzL2FwaS91cGxvYWRfY2QudHM/ZmUxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuY29uc3QgZm9ybWlkYWJsZSA9IHJlcXVpcmUoJ2Zvcm1pZGFibGUnKTtcclxuaW1wb3J0IG11bHRlciBmcm9tICdtdWx0ZXInO1xyXG5pbXBvcnQgeyBNdWx0ZXIgfSBmcm9tICdtdWx0ZXInO1xyXG5pbXBvcnQgY2xvdWRpbmFyeSBmcm9tICdjbG91ZGluYXJ5JztcclxuaW1wb3J0ICogYXMgbmMgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IHsgRXhwcmVzcywgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnaHR0cDInO1xyXG5cclxuY2xvdWRpbmFyeS52Mi5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VEX05BTUUsXHJcbiAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQVBJX0tFWSxcclxuICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5BUElfU0VDUkVULFxyXG4gIHNlY3VyZTogdHJ1ZSxcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIldURlwiKVxyXG4gIHRyeXtcclxuXHJcbiAgLy8gUGFyc2UgSlNPTiBmcm9tIHRoZSBmb3JtIGRhdGFcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgZm9ybWlkYWJsZS5JbmNvbWluZ0Zvcm0oKTtcclxuICAgIGZvcm0ucGFyc2UocmVxLCBhc3luYyAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIHRoZSBmb3JtIGRhdGE6JywgZXJyKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIHBhcnNpbmcgZm9ybSBkYXRhJyB9KTtcclxuICAgICAgfVxyXG4gXHJcbiAgICAgLy8gSGFuZGxlIHlvdXIgbG9naWMgaGVyZS4gJ2ZpZWxkcycgY29udGFpbnMgbm9uLWZpbGUgZmllbGRzOyAnZmlsZXMnIGNvbnRhaW5zIGZpbGUgZGF0YVxyXG5cclxuICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZmllbGRzLmpzb25bMF0pO1xyXG4gICAgIGNvbnNvbGUubG9nKFwiREFUQVwiK2ZpZWxkcy5qc29uWzBdKVxyXG4gICAgIGNvbnNvbGUubG9nKFwiREFURVNcIiArIGZpZWxkc1snZGF0ZXNbY2hpbmVzZXJlc3RhdXJhbnRvcGVuZWR0YWtlb3V0Ym94MzJvejNkc21vZGVsMDAxLmpwZ10nXSlcclxuICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoanNvbkRhdGEpO1xyXG4gICAgIGNvbnN0IHVwbG9hZFByb21pc2VzID0ganNvbkRhdGEubWFwKChyZWNvcmQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJXT1dcIityZWNvcmQpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRklMRVNcIiArIGZpbGVzKVxyXG4gICAgICAvLyBBZGp1c3QgdGhlIGxvZ2ljIHRvIGZpbmQgdGhlIGNvcnJlY3QgZmlsZSBpbiB0aGUgJ2ZpbGVzJyBvYmplY3RcclxuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW3JlY29yZC5GSUxFX05BTUVdOyAvLyBBZGp1c3QgdGhpcyBhY2NvcmRpbmcgdG8gaG93IGZpbGVzIGFyZSBuYW1lZFxyXG4gICAgICBpZiAoIWZpbGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGZpbGUgZm91bmQgbWF0Y2hpbmcgdGhlIG5hbWU6ICR7cmVjb3JkLkZJTEVfTkFNRX1gKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmaWxlRGF0ZSA9IG5ldyBEYXRlKGZpZWxkc1snZGF0ZXNbY2hpbmVzZXJlc3RhdXJhbnRvcGVuZWR0YWtlb3V0Ym94MzJvejNkc21vZGVsMDAxLmpwZ10nXSkudG9JU09TdHJpbmcoKTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHtcclxuICAgICAgICBhd2FyZDogcmVjb3JkLkFXQVJELFxyXG4gICAgICAgIGlkZWE6IHJlY29yZC5JREVBLFxyXG4gICAgICAgIGFnZW5jeTogcmVjb3JkLkFHRU5DWSxcclxuICAgICAgICBjbGllbnRzOiByZWNvcmQuQ0xJRU5UUyxcclxuICAgICAgICBkaXJlY3RvcjogcmVjb3JkLkRJUkVDVE9SLFxyXG4gICAgICAgIHNvdW5kOiByZWNvcmQuU09VTkQsXHJcbiAgICAgICAgd2l0aDogcmVjb3JkLldJVEgsXHJcbiAgICAgICAgbXlfcm9sZTogcmVjb3JkLk1ZX1JPTEUsXHJcbiAgICAgICAgcHJvZHVjdGlvbl9jbzogcmVjb3JkLlBST0RVQ1RJT05fQ08sXHJcbiAgICAgICAgZGF0ZTogZmlsZURhdGVcclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2coY29udGV4dClcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLnVwbG9hZF9zdHJlYW0oeyBcclxuICAgICAgICAgIHJlc291cmNlX3R5cGU6ICdhdXRvJywgXHJcbiAgICAgICAgICBwdWJsaWNfaWQ6IHJlY29yZFtcIkZJTEVfTkFNRVwiXSwgLy8gT3B0aW9uYWw6IHVzZSBhIHB1YmxpYyBJRCBmcm9tIHRoZSByZWNvcmRcclxuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQgLy8gT3B0aW9uYWw6IGFkZCBhZGRpdGlvbmFsIG1ldGFkYXRhIGZyb20gdGhlIHJlY29yZFxyXG4gICAgICAgIH0sIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5lbmQoZmlsZS5idWZmZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXBsb2FkUmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHVwbG9hZFByb21pc2VzKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0ZpbGVzIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseScsIGRhdGE6IHVwbG9hZFJlc3VsdHMgfSk7XHJcbiAgIH0pO1xyXG4gICBcclxuICBcclxuICAgIFxyXG5cclxuICAvLyBTZW5kIGJhY2sgdGhlIHJlc3BvbnNlIHdpdGggQ2xvdWRpbmFyeSByZXN1bHRzXHJcbiAgICBcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIHVwbG9hZGluZyB0byBDbG91ZGluYXJ5JywgZGV0YWlsczogZXJyb3IgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLCAvLyBEaXNhYmxlcyBib2R5IHBhcnNpbmcsIGxlYXZpbmcgaXQgdG8gbXVsdGVyXHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbImZvcm1pZGFibGUiLCJyZXF1aXJlIiwiY2xvdWRpbmFyeSIsInYyIiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRF9OQU1FIiwiYXBpX2tleSIsIkFQSV9LRVkiLCJhcGlfc2VjcmV0IiwiQVBJX1NFQ1JFVCIsInNlY3VyZSIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiSW5jb21pbmdGb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImVycm9yIiwic3RhdHVzIiwianNvbiIsImpzb25EYXRhIiwiSlNPTiIsImtleXMiLCJPYmplY3QiLCJ1cGxvYWRQcm9taXNlcyIsIm1hcCIsInJlY29yZCIsImZpbGUiLCJGSUxFX05BTUUiLCJFcnJvciIsImZpbGVEYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29udGV4dCIsImF3YXJkIiwiQVdBUkQiLCJpZGVhIiwiSURFQSIsImFnZW5jeSIsIkFHRU5DWSIsImNsaWVudHMiLCJDTElFTlRTIiwiZGlyZWN0b3IiLCJESVJFQ1RPUiIsInNvdW5kIiwiU09VTkQiLCJ3aXRoIiwiV0lUSCIsIm15X3JvbGUiLCJNWV9ST0xFIiwicHJvZHVjdGlvbl9jbyIsIlBST0RVQ1RJT05fQ08iLCJkYXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRlciIsInVwbG9hZF9zdHJlYW0iLCJyZXNvdXJjZV90eXBlIiwicHVibGljX2lkIiwicmVzdWx0IiwiZW5kIiwiYnVmZmVyIiwidXBsb2FkUmVzdWx0cyIsImFsbCIsIm1lc3NhZ2UiLCJkYXRhIiwiZGV0YWlscyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload_cd.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload_cd&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cupload_cd.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();