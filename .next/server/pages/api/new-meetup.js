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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newMeeetupHandler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// api/new-meetup\nasync function newMeeetupHandler(request, response) {\n    if (request.method === \"POST\") {\n        try {\n            const data = request.body;\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://habahabahaba:lhWXiRYzCnw32Cbv@cluster0.isrh8cj.mongodb.net/nextjs-meetups-app?retryWrites=true&w=majority\");\n            const database = client.db();\n            const meetupsCollection = database.collection(\"Meetups Collection\");\n            const result = await meetupsCollection.insertOne(data);\n            console.log(response);\n            client.close();\n            response.status(201).json(\"Meetup was uploaded!\");\n        } catch (error) {\n            console.error(error);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsaUJBQWlCO0FBRUYsZUFBZUMsa0JBQWtCQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNqRSxJQUFJRCxRQUFRRSxNQUFNLEtBQUssUUFBUTtRQUM3QixJQUFJO1lBQ0YsTUFBTUMsT0FBT0gsUUFBUUksSUFBSTtZQUV6QixNQUFNQyxTQUFTLE1BQU1QLHdEQUFtQixDQUN0QztZQUVGLE1BQU1TLFdBQVdGLE9BQU9HLEVBQUU7WUFFMUIsTUFBTUMsb0JBQW9CRixTQUFTRyxVQUFVLENBQUM7WUFFOUMsTUFBTUMsU0FBUyxNQUFNRixrQkFBa0JHLFNBQVMsQ0FBQ1Q7WUFDakRVLFFBQVFDLEdBQUcsQ0FBQ2I7WUFDWkksT0FBT1UsS0FBSztZQUVaZCxTQUFTZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQzVCLEVBQUUsT0FBT0MsT0FBTztZQUNkTCxRQUFRSyxLQUFLLENBQUNBO1FBQ2hCO0lBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG4vLyBhcGkvbmV3LW1lZXR1cFxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBuZXdNZWVldHVwSGFuZGxlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICBpZiAocmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5ib2R5O1xuXG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgICAnbW9uZ29kYitzcnY6Ly9oYWJhaGFiYWhhYmE6bGhXWGlSWXpDbnczMkNidkBjbHVzdGVyMC5pc3JoOGNqLm1vbmdvZGIubmV0L25leHRqcy1tZWV0dXBzLWFwcD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoKTtcblxuICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYXRhYmFzZS5jb2xsZWN0aW9uKCdNZWV0dXBzIENvbGxlY3Rpb24nKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICAgIHJlc3BvbnNlLnN0YXR1cygyMDEpLmpzb24oJ01lZXR1cCB3YXMgdXBsb2FkZWQhJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwibmV3TWVlZXR1cEhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYXRhYmFzZSIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();