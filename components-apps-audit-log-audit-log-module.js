(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-apps-audit-log-audit-log-module"],{

/***/ "./src/app/content/pages/components/apps/audit-log/audit-log.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/components/apps/audit-log/audit-log.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n\t<b>Audit Log:</b> - Coming soon in the following update.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/apps/audit-log/audit-log.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/components/apps/audit-log/audit-log.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuditLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditLogComponent", function() { return AuditLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuditLogComponent = /** @class */ (function () {
    function AuditLogComponent() {
    }
    AuditLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-audit-log',
            template: __webpack_require__(/*! ./audit-log.component.html */ "./src/app/content/pages/components/apps/audit-log/audit-log.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], AuditLogComponent);
    return AuditLogComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/apps/audit-log/audit-log.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/components/apps/audit-log/audit-log.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuditLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditLogModule", function() { return AuditLogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _audit_log_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-log.component */ "./src/app/content/pages/components/apps/audit-log/audit-log.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuditLogModule = /** @class */ (function () {
    function AuditLogModule() {
    }
    AuditLogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _audit_log_component__WEBPACK_IMPORTED_MODULE_2__["AuditLogComponent"]
                    }
                ])
            ],
            declarations: [_audit_log_component__WEBPACK_IMPORTED_MODULE_2__["AuditLogComponent"]]
        })
    ], AuditLogModule);
    return AuditLogModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-apps-audit-log-audit-log-module.js.map