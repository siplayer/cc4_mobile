(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tirage-tirage-module"],{

/***/ "./src/app/pages/tirage/tirage.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tirage/tirage.module.ts ***!
  \***********************************************/
/*! exports provided: TiragePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiragePageModule", function() { return TiragePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tirage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tirage.page */ "./src/app/pages/tirage/tirage.page.ts");







var routes = [
    {
        path: '',
        component: _tirage_page__WEBPACK_IMPORTED_MODULE_6__["TiragePage"]
    }
];
var TiragePageModule = /** @class */ (function () {
    function TiragePageModule() {
    }
    TiragePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tirage_page__WEBPACK_IMPORTED_MODULE_6__["TiragePage"]]
        })
    ], TiragePageModule);
    return TiragePageModule;
}());



/***/ }),

/***/ "./src/app/pages/tirage/tirage.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/tirage/tirage.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tirage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tirage/tirage.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/tirage/tirage.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcmFnZS90aXJhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tirage/tirage.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tirage/tirage.page.ts ***!
  \*********************************************/
/*! exports provided: TiragePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiragePage", function() { return TiragePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TiragePage = /** @class */ (function () {
    function TiragePage() {
    }
    TiragePage.prototype.ngOnInit = function () {
    };
    TiragePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tirage',
            template: __webpack_require__(/*! ./tirage.page.html */ "./src/app/pages/tirage/tirage.page.html"),
            styles: [__webpack_require__(/*! ./tirage.page.scss */ "./src/app/pages/tirage/tirage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TiragePage);
    return TiragePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tirage-tirage-module.js.map