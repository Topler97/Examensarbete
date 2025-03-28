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
exports.id = "app/api/news/route";
exports.ids = ["app/api/news/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnews%2Froute&page=%2Fapi%2Fnews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnews%2Froute.js&appDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnews%2Froute&page=%2Fapi%2Fnews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnews%2Froute.js&appDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_amandatopler_Documents_GitHub_Examensarbete_Examensarbete_app_api_news_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/news/route.js */ \"(rsc)/./app/api/news/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/news/route\",\n        pathname: \"/api/news\",\n        filename: \"route\",\n        bundlePath: \"app/api/news/route\"\n    },\n    resolvedPagePath: \"/Users/amandatopler/Documents/GitHub/Examensarbete/Examensarbete/app/api/news/route.js\",\n    nextConfigOutput,\n    userland: _Users_amandatopler_Documents_GitHub_Examensarbete_Examensarbete_app_api_news_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZuZXdzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZuZXdzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbmV3cyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmFtYW5kYXRvcGxlciUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRkV4YW1lbnNhcmJldGUlMkZFeGFtZW5zYXJiZXRlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmFtYW5kYXRvcGxlciUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRkV4YW1lbnNhcmJldGUlMkZFeGFtZW5zYXJiZXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNzQztBQUNuSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FtYW5kYXRvcGxlci9Eb2N1bWVudHMvR2l0SHViL0V4YW1lbnNhcmJldGUvRXhhbWVuc2FyYmV0ZS9hcHAvYXBpL25ld3Mvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL25ld3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9uZXdzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9uZXdzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FtYW5kYXRvcGxlci9Eb2N1bWVudHMvR2l0SHViL0V4YW1lbnNhcmJldGUvRXhhbWVuc2FyYmV0ZS9hcHAvYXBpL25ld3Mvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnews%2Froute&page=%2Fapi%2Fnews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnews%2Froute.js&appDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/news/route.js":
/*!*******************************!*\
  !*** ./app/api/news/route.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_models_NewsSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/models/NewsSchema */ \"(rsc)/./lib/models/NewsSchema.js\");\n\n\n\nasync function GET() {\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const news = await _lib_models_NewsSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({});\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(news, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Misslyckades att hämta nyheter:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Misslyckades att hämta nyheter\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL25ld3Mvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNDO0FBQ007QUFFM0MsZUFBZUc7SUFDcEIsSUFBSTtRQUNGLE1BQU1GLGtEQUFTQTtRQUVmLE1BQU1HLE9BQU8sTUFBTUYsOERBQUlBLENBQUNHLElBQUksQ0FBQyxDQUFDO1FBQzlCLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUNGLE1BQU07WUFBRUcsUUFBUTtRQUFJO0lBQy9DLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsbUNBQW1DQTtRQUNqRCxPQUFPUixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtZQUFFRSxPQUFPO1FBQWlDLEdBQzFDO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvYW1hbmRhdG9wbGVyL0RvY3VtZW50cy9HaXRIdWIvRXhhbWVuc2FyYmV0ZS9FeGFtZW5zYXJiZXRlL2FwcC9hcGkvbmV3cy9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJcIjtcbmltcG9ydCBOZXdzIGZyb20gXCIuLi8uLi8uLi9saWIvbW9kZWxzL05ld3NTY2hlbWFcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcblxuICAgIGNvbnN0IG5ld3MgPSBhd2FpdCBOZXdzLmZpbmQoe30pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihuZXdzLCB7IHN0YXR1czogMjAwIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNaXNzbHlja2FkZXMgYXR0IGjDpG10YSBueWhldGVyOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJNaXNzbHlja2FkZXMgYXR0IGjDpG10YSBueWhldGVyXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0REIiLCJOZXdzIiwiR0VUIiwibmV3cyIsImZpbmQiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/news/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n// Anslut till MongoDB\nconst connectDB = async ()=>{\n    if (mongoose__WEBPACK_IMPORTED_MODULE_0__.connection.readyState >= 1) {\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(process.env.MONGODB_URI);\n    } catch (error) {\n        throw new Error(\"Kunde inte ansluta till databasen\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFaEMsc0JBQXNCO0FBQ2YsTUFBTUMsWUFBWTtJQUN2QixJQUFJRCxnREFBbUIsQ0FBQ0csVUFBVSxJQUFJLEdBQUc7UUFDdkM7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNSCw2Q0FBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0lBQ2hELEVBQUUsT0FBT0MsT0FBTztRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGF0b3BsZXIvRG9jdW1lbnRzL0dpdEh1Yi9FeGFtZW5zYXJiZXRlL0V4YW1lbnNhcmJldGUvbGliL2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuLy8gQW5zbHV0IHRpbGwgTW9uZ29EQlxuZXhwb3J0IGNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA+PSAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJLdW5kZSBpbnRlIGFuc2x1dGEgdGlsbCBkYXRhYmFzZW5cIik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJlcnJvciIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/NewsSchema.js":
/*!**********************************!*\
  !*** ./lib/models/NewsSchema.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst NewsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    category: {\n        type: String,\n        required: true\n    },\n    imgUrl: {\n        type: String,\n        required: true\n    },\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    button: {\n        type: Boolean,\n        default: false\n    }\n});\nconst News = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.News || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('News', NewsSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL05ld3NTY2hlbWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCw0Q0FBZSxDQUFDO0lBQ25DRyxVQUFVO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0MsUUFBUTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdkNFLE9BQU87UUFBRUosTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3RDRyxhQUFhO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUM1Q0ksUUFBUTtRQUFFTixNQUFNTztRQUFTQyxTQUFTO0lBQU07QUFDNUM7QUFFQSxNQUFNQyxPQUFPYiw0Q0FBZSxDQUFDYSxJQUFJLElBQUliLDJDQUFjLENBQUMsUUFBUUM7QUFFNUQsaUVBQWVZLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGF0b3BsZXIvRG9jdW1lbnRzL0dpdEh1Yi9FeGFtZW5zYXJiZXRlL0V4YW1lbnNhcmJldGUvbGliL21vZGVscy9OZXdzU2NoZW1hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE5ld3NTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgaW1nVXJsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGJ1dHRvbjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9XG59KTtcblxuY29uc3QgTmV3cyA9IG1vbmdvb3NlLm1vZGVscy5OZXdzIHx8IG1vbmdvb3NlLm1vZGVsKCdOZXdzJywgTmV3c1NjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3M7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTmV3c1NjaGVtYSIsIlNjaGVtYSIsImNhdGVnb3J5IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaW1nVXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiTmV3cyIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/NewsSchema.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnews%2Froute&page=%2Fapi%2Fnews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnews%2Froute.js&appDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();