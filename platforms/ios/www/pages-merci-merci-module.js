(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-merci-merci-module"],{

/***/ "./src/app/pages/merci/merci.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/merci/merci.module.ts ***!
  \*********************************************/
/*! exports provided: MerciPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerciPageModule", function() { return MerciPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _merci_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merci.page */ "./src/app/pages/merci/merci.page.ts");







var routes = [
    {
        path: '',
        component: _merci_page__WEBPACK_IMPORTED_MODULE_6__["MerciPage"]
    }
];
var MerciPageModule = /** @class */ (function () {
    function MerciPageModule() {
    }
    MerciPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_merci_page__WEBPACK_IMPORTED_MODULE_6__["MerciPage"]]
        })
    ], MerciPageModule);
    return MerciPageModule;
}());



/***/ }),

/***/ "./src/app/pages/merci/merci.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/merci/merci.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Tu Décides. </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content>\n      <div id=\"marlboroLogo\"><img src=\"../assets/images/marlboroLogo.png\" alt=\"\" /></div>\n      <div class=\"ctrBox\">\n          <div class=\"introTxt\">\n             \n            <div id=\"thankxBox\"><img src=\"../assets/images/merci.png\" alt=\"\" /></div>\n         \n             \n            <div class=\"divider\"></div>\n              \n\n             <div class=\"contBtns_inline\">\n                <div class=\"btnMe\"><a href=\"#\" title=\"\" (click)=\"clickedhome()\">terminer</a></div>\n             </div> \n\n             \n    \n          </div>\n        \n      </div>\n      <div id=\"decideGraphic\" class=\"bottom\"><img src=\"../assets/images/decide_graphic.png\" alt=\"\"/></div>\n    </ion-content>\n    \n    \n    <ion-footer class=\"txtCenter\">\n      <ion-toolbar>\n        <ion-title>Fumer tue</ion-title>\n      </ion-toolbar>\n    </ion-footer>\n    \n    \n"

/***/ }),

/***/ "./src/app/pages/merci/merci.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/merci/merci.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lcmNpL21lcmNpLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/merci/merci.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/merci/merci.page.ts ***!
  \*******************************************/
/*! exports provided: MerciPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerciPage", function() { return MerciPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MerciPage = /** @class */ (function () {
    function MerciPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MerciPage.prototype.ngOnInit = function () {
    };
    MerciPage.prototype.clickedhome = function () {
        this.navCtrl.navigateRoot('/home');
        return false;
    };
    MerciPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-merci',
            template: __webpack_require__(/*! ./merci.page.html */ "./src/app/pages/merci/merci.page.html"),
            styles: [__webpack_require__(/*! ./merci.page.scss */ "./src/app/pages/merci/merci.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MerciPage);
    return MerciPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-merci-merci-module.js.map