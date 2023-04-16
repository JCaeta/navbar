"use strict";
(() => {
var exports = {};
exports.id = 28;
exports.ids = [28];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendGetRequest": () => (/* binding */ sendGetRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5687);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = "https://localhost:7093";
async function sendGetRequest() {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url + "/Text/random", {
        httpsAgent: new https__WEBPACK_IMPORTED_MODULE_1__.Agent({
            rejectUnauthorized: false
        })
    });
    // The option { httpsAgent: new https.Agent({ rejectUnauthorized: false }) } used only for testing purposes. It disables the SSL certificate security
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1482));
module.exports = __webpack_exports__;

})();