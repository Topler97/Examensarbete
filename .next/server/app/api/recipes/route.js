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
exports.id = "app/api/recipes/route";
exports.ids = ["app/api/recipes/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frecipes%2Froute&page=%2Fapi%2Frecipes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecipes%2Froute.js&appDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frecipes%2Froute&page=%2Fapi%2Frecipes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecipes%2Froute.js&appDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_amandatopler_Documents_GitHub_Examensarbete_Examensarbete_app_api_recipes_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/recipes/route.js */ \"(rsc)/./app/api/recipes/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/recipes/route\",\n        pathname: \"/api/recipes\",\n        filename: \"route\",\n        bundlePath: \"app/api/recipes/route\"\n    },\n    resolvedPagePath: \"/Users/amandatopler/Documents/GitHub/Examensarbete/Examensarbete/app/api/recipes/route.js\",\n    nextConfigOutput,\n    userland: _Users_amandatopler_Documents_GitHub_Examensarbete_Examensarbete_app_api_recipes_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZWNpcGVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyZWNpcGVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmVjaXBlcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmFtYW5kYXRvcGxlciUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRkV4YW1lbnNhcmJldGUlMkZFeGFtZW5zYXJiZXRlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmFtYW5kYXRvcGxlciUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRkV4YW1lbnNhcmJldGUlMkZFeGFtZW5zYXJiZXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN5QztBQUN0SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FtYW5kYXRvcGxlci9Eb2N1bWVudHMvR2l0SHViL0V4YW1lbnNhcmJldGUvRXhhbWVuc2FyYmV0ZS9hcHAvYXBpL3JlY2lwZXMvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JlY2lwZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yZWNpcGVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZWNpcGVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FtYW5kYXRvcGxlci9Eb2N1bWVudHMvR2l0SHViL0V4YW1lbnNhcmJldGUvRXhhbWVuc2FyYmV0ZS9hcHAvYXBpL3JlY2lwZXMvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frecipes%2Froute&page=%2Fapi%2Frecipes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecipes%2Froute.js&appDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/recipes/route.js":
/*!**********************************!*\
  !*** ./app/api/recipes/route.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_models_RecipeSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/models/RecipeSchema */ \"(rsc)/./lib/models/RecipeSchema.js\");\n\n\n\nasync function GET() {\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const recipes = await _lib_models_RecipeSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({});\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(recipes, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Misslyckades att hämta recepten:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Misslyckades att hämta recepten\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlY2lwZXMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNDO0FBQ1c7QUFFaEQsZUFBZUc7SUFDcEIsSUFBSTtRQUNGLE1BQU1GLGtEQUFTQTtRQUVmLE1BQU1HLFVBQVUsTUFBTUYsZ0VBQU9BLENBQUNHLElBQUksQ0FBQyxDQUFDO1FBQ3BDLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUNGLFNBQVM7WUFBRUcsUUFBUTtRQUFJO0lBQ2xELEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsb0NBQW9DQTtRQUNsRCxPQUFPUixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtZQUFFRSxPQUFPO1FBQWtDLEdBQzNDO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvYW1hbmRhdG9wbGVyL0RvY3VtZW50cy9HaXRIdWIvRXhhbWVuc2FyYmV0ZS9FeGFtZW5zYXJiZXRlL2FwcC9hcGkvcmVjaXBlcy9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJcIjtcbmltcG9ydCBSZWNpcGVzIGZyb20gXCIuLi8uLi8uLi9saWIvbW9kZWxzL1JlY2lwZVNjaGVtYVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGF3YWl0IGNvbm5lY3REQigpO1xuXG4gICAgY29uc3QgcmVjaXBlcyA9IGF3YWl0IFJlY2lwZXMuZmluZCh7fSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlY2lwZXMsIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk1pc3NseWNrYWRlcyBhdHQgaMOkbXRhIHJlY2VwdGVuOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJNaXNzbHlja2FkZXMgYXR0IGjDpG10YSByZWNlcHRlblwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdERCIiwiUmVjaXBlcyIsIkdFVCIsInJlY2lwZXMiLCJmaW5kIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/recipes/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n// Anslut till MongoDB\nconst connectDB = async ()=>{\n    if (mongoose__WEBPACK_IMPORTED_MODULE_0__.connection.readyState >= 1) {\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(process.env.MONGODB_URI);\n    } catch (error) {\n        throw new Error(\"Kunde inte ansluta till databasen\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFaEMsc0JBQXNCO0FBQ2YsTUFBTUMsWUFBWTtJQUN2QixJQUFJRCxnREFBbUIsQ0FBQ0csVUFBVSxJQUFJLEdBQUc7UUFDdkM7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNSCw2Q0FBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0lBQ2hELEVBQUUsT0FBT0MsT0FBTztRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGF0b3BsZXIvRG9jdW1lbnRzL0dpdEh1Yi9FeGFtZW5zYXJiZXRlL0V4YW1lbnNhcmJldGUvbGliL2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuLy8gQW5zbHV0IHRpbGwgTW9uZ29EQlxuZXhwb3J0IGNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA+PSAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJLdW5kZSBpbnRlIGFuc2x1dGEgdGlsbCBkYXRhYmFzZW5cIik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJlcnJvciIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/RecipeSchema.js":
/*!************************************!*\
  !*** ./lib/models/RecipeSchema.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst RecipeSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    imgUrl: {\n        type: String,\n        required: true\n    },\n    ingredients: {\n        type: String,\n        required: true\n    },\n    instructions: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: String,\n        required: false\n    }\n});\nconst Recipes = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Recipes || mongoose__WEBPACK_IMPORTED_MODULE_0__.model(\"Recipes\", RecipeSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recipes);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1JlY2lwZVNjaGVtYS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnQztBQUVoQyxNQUFNQyxlQUFlLElBQUlELDRDQUFlLENBQUM7SUFDdkNHLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3RDQyxRQUFRO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN2Q0UsYUFBYTtRQUFFSixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDNUNHLGNBQWM7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzdDSSxVQUFVO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBTTtBQUM1QztBQUVBLE1BQU1LLFVBQVVYLDRDQUFlLENBQUNXLE9BQU8sSUFBSVgsMkNBQWMsQ0FBQyxXQUFXQztBQUVyRSxpRUFBZVUsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FtYW5kYXRvcGxlci9Eb2N1bWVudHMvR2l0SHViL0V4YW1lbnNhcmJldGUvRXhhbWVuc2FyYmV0ZS9saWIvbW9kZWxzL1JlY2lwZVNjaGVtYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFJlY2lwZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGltZ1VybDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGluZ3JlZGllbnRzOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgaW5zdHJ1Y3Rpb25zOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgY2F0ZWdvcnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UgfSxcbn0pO1xuXG5jb25zdCBSZWNpcGVzID0gbW9uZ29vc2UubW9kZWxzLlJlY2lwZXMgfHwgbW9uZ29vc2UubW9kZWwoXCJSZWNpcGVzXCIsIFJlY2lwZVNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZXM7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiUmVjaXBlU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJpbWdVcmwiLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9ucyIsImNhdGVnb3J5IiwiUmVjaXBlcyIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/RecipeSchema.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frecipes%2Froute&page=%2Fapi%2Frecipes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecipes%2Froute.js&appDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famandatopler%2FDocuments%2FGitHub%2FExamensarbete%2FExamensarbete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();