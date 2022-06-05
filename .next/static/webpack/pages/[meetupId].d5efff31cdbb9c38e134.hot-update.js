webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId].js":
/*!*****************************!*\
  !*** ./pages/[meetupId].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\nvar _jsxFileName = \"/Users/emreeryigit/Documents/coding/againreact_Max/23advNEXT/pages/[meetupId].js\";\n\n\n\n\nfunction MeetupDetails(props) {\n  console.log(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: props.meetup.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"nice places to Meet UP!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: props.meetup.image,\n      title: props.meetup.title,\n      address: props.meetup.address,\n      description: props.meetup.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails); // import { MongoClient, ObjectId } from \"mongodb\";\n// import MeetupDetail from \"../components/meetups/MeetupDetail\";\n// function MeetupDetails(props) {\n//   return (\n//     <MeetupDetail\n//       image={props.meetupData.image}\n//       title={props.meetupData.title}\n//       address={props.meetupData.address}\n//       description={props.meetupData.description}\n//     />\n//   );\n// }\n// export async function getStaticPaths() {\n//   const client = await MongoClient.connect(\n//     \"mongodb+srv://Emre_DB:808OC7zLkQgVqzk1@cluster0.pvcaw.mongodb.net/meetups?retryWrites=true&w=majority\"\n//   );\n//   const db = client.db();\n//   const meetupsCollection = db.collection(\"meetups\");\n//   const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();\n//   client.close();\n//   return {\n//     fallback: false,\n//     paths: meetups.map((meetup) => ({\n//       params: { meetupId: meetup._id.toString() },\n//     })),\n//   };\n// }\n// export async function getStaticProps(context) {\n//   // fetch data for a single meetup\n//   const meetupId = context.params.meetupId;\n//     console.log(meetupId);\n//   const client = await MongoClient.connect(\n//     \"mongodb+srv://Emre_DB:808OC7zLkQgVqzk1@cluster0.pvcaw.mongodb.net/meetups?retryWrites=true&w=majority\"\n//   );\n//   const db = client.db();\n//   const meetupsCollection = db.collection(\"meetups\");\n//   const selectedMeetup = await meetupsCollection.findOne({\n//     _id: ObjectId(meetupId),\n//   });\n//   client.close();\n//   return {\n//     props: {\n//       meetupData: {\n//         id: selectedMeetup._id.toString(),\n//         title: selectedMeetup.title,\n//         address: selectedMeetup.address,\n//         image: selectedMeetup.image,\n//         description: selectedMeetup.description,\n//       },\n//     },\n//   };\n// }\n// export default MeetupDetails;\n\nvar _c;\n\n$RefreshReg$(_c, \"MeetupDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS5qcz80NTQ3Il0sIm5hbWVzIjpbIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtZWV0dXAiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRixzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFFQSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQVFBLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFPQSxxRUFBQyx3RUFBRDtBQUFlLFdBQUssRUFBRUosS0FBSyxDQUFDRyxNQUFOLENBQWFFLEtBQW5DO0FBQ0UsV0FBSyxFQUFFTCxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FEdEI7QUFFRSxhQUFPLEVBQUVKLEtBQUssQ0FBQ0csTUFBTixDQUFhRyxPQUZ4QjtBQUdFLGlCQUFXLEVBQUVOLEtBQUssQ0FBQ0csTUFBTixDQUFhSTtBQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7S0FqQlFSLGE7O0FBMkRNQSw0RUFBZixFLENBUUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbCc7XG5cbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICBcbiAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXAudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIm5pY2UgcGxhY2VzIHRvIE1lZXQgVVAhXCIvPlxuICAgIDwvSGVhZD5cbiAgICAgIFxuICAgIDxNZWV0dXBEZXRhaWwgIGltYWdlPXtwcm9wcy5tZWV0dXAuaW1hZ2V9XG4gICAgICB0aXRsZT17cHJvcHMubWVldHVwLnRpdGxlfVxuICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwLmFkZHJlc3N9XG4gICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwLmRlc2NyaXB0aW9ufSAgLz5cblxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9FbXJlX0RCOjgwOE9DN3pMa1FnVnF6azFAY2x1c3RlcjAucHZjYXcubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIilcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKVxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7X2lkOiAxfSkudG9BcnJheSgpXG4gICAgY2xpZW50LmNsb3NlKClcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzIChjb250ZXh0KSB7XG4gICAgXG4gICAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9FbXJlX0RCOjgwOE9DN3pMa1FnVnF6azFAY2x1c3RlcjAucHZjYXcubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIilcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKVxuICAgIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgICAgIF9pZDogT2JqZWN0SWQobWVldHVwSWQpLFxuICAgICAgfSlcbiAgICBjbGllbnQuY2xvc2UoKVxuICAgIFxuICAgIC8vIGZldGNoIG1lZXR1cHMgZnJvbSB0aGUgQVBJXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG1lZXR1cDoge1xuICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiAxMFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsc1xuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vLyBpbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XG5cbi8vIGZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8TWVldHVwRGV0YWlsXG4vLyAgICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cbi8vICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxuLy8gICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxuLy8gICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XG4vLyAgICAgLz5cbi8vICAgKTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuLy8gICAgIFwibW9uZ29kYitzcnY6Ly9FbXJlX0RCOjgwOE9DN3pMa1FnVnF6azFAY2x1c3RlcjAucHZjYXcubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuLy8gICApO1xuLy8gICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4vLyAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG5cbi8vICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcblxuLy8gICBjbGllbnQuY2xvc2UoKTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIGZhbGxiYWNrOiBmYWxzZSxcbi8vICAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcbi8vICAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXG4vLyAgICAgfSkpLFxuLy8gICB9O1xuLy8gfVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuLy8gICAvLyBmZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXBcblxuLy8gICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xuLy8gICAgIGNvbnNvbGUubG9nKG1lZXR1cElkKTtcbi8vICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbi8vICAgICBcIm1vbmdvZGIrc3J2Oi8vRW1yZV9EQjo4MDhPQzd6TGtRZ1ZxemsxQGNsdXN0ZXIwLnB2Y2F3Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbi8vICAgKTtcbi8vICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuLy8gICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuXG4vLyAgIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4vLyAgICAgX2lkOiBPYmplY3RJZChtZWV0dXBJZCksXG4vLyAgIH0pO1xuXG4vLyAgIGNsaWVudC5jbG9zZSgpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cERhdGE6IHtcbi8vICAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxuLy8gICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXG4vLyAgICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXG4vLyAgICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcbi8vICAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId].js\n");

/***/ })

})