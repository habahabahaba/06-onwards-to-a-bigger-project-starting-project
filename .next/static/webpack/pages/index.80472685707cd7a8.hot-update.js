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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 5, 12345 Some City\",\n        description: \"This is a first meetup.\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 10, 12345 Some City\",\n        description: \"This is a second meetup.\"\n    }\n];\nvar __N_SSG = true;\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            meetups: props.meetups\n        }, void 0, false, {\n            fileName: \"/Users/alexsmola/udemy React - The Complete Guide /06-onwards-to-a-bigger-project-starting-project/pages/index.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n // export async function getServerSideProps(context){\n //   const request=context.req\n //   const response=context.res\n //   // fetch data...\n //   return {\n //     props:{\n //       meetups:DUMMY_MEETUPS,\n //     }\n //   }\n // }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFMEQ7QUFFMUQsTUFBTUMsZ0JBQWdCO0lBQ3BCO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUNFO1FBQ0ZDLFNBQVM7UUFDVEMsYUFBYTtJQUNmO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQ0U7UUFDRkMsU0FBUztRQUNUQyxhQUFhO0lBQ2Y7Q0FDRDs7QUFFYyxTQUFTQyxTQUFTQyxLQUFLLEVBQUU7SUFDdEMscUJBQ0U7a0JBQ0UsNEVBQUNSLHNFQUFVQTtZQUFDUyxTQUFTRCxNQUFNQyxPQUFPOzs7Ozs7O0FBR3hDLENBQUM7S0FOdUJGOzs7Q0FtQ3hCLHFEQUFxRDtDQUNyRCw4QkFBOEI7Q0FDOUIsK0JBQStCO0NBRS9CLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsY0FBYztDQUNkLCtCQUErQjtDQUMvQixRQUFRO0NBQ1IsTUFBTTtDQUNOLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XG5cbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gIHtcbiAgICBpZDogJ20xJyxcbiAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcbiAgICBpbWFnZTpcbiAgICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxuICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnbTInLFxuICAgIHRpdGxlOiAnQSBTZWNvbmQgTWVldHVwJyxcbiAgICBpbWFnZTpcbiAgICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxuICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgMTAsIDEyMzQ1IFNvbWUgQ2l0eScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cC4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgJ21vbmdvZGIrc3J2Oi8vaGFiYWhhYmFoYWJhOmxoV1hpUll6Q253MzJDYnZAY2x1c3RlcjAuaXNyaDhjai5tb25nb2RiLm5ldC9uZXh0anMtbWVldHVwcy1hcHA/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICAgICk7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oJ01lZXR1cHMgQ29sbGVjdGlvbicpO1xuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgfSkpLFxuICAgICAgfSxcbiAgICAgIHJldmFsaWRhdGU6IDEwLCAvLyBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZW4gcGFnZSBzZXJ2ZXItc2lkZSByZWdlbmVyYXRpb25cbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4vLyAgIGNvbnN0IHJlcXVlc3Q9Y29udGV4dC5yZXFcbi8vICAgY29uc3QgcmVzcG9uc2U9Y29udGV4dC5yZXNcblxuLy8gICAvLyBmZXRjaCBkYXRhLi4uXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6e1xuLy8gICAgICAgbWVldHVwczpEVU1NWV9NRUVUVVBTLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuIl0sIm5hbWVzIjpbIk1lZXR1cExpc3QiLCJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});