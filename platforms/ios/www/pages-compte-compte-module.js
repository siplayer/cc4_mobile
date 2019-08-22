(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-compte-compte-module"],{

/***/ "./src/app/pages/compte/compte.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/compte/compte.module.ts ***!
  \***********************************************/
/*! exports provided: ComptePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComptePageModule", function() { return ComptePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _compte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compte.page */ "./src/app/pages/compte/compte.page.ts");







var routes = [
    {
        path: '',
        component: _compte_page__WEBPACK_IMPORTED_MODULE_6__["ComptePage"]
    }
];
var ComptePageModule = /** @class */ (function () {
    function ComptePageModule() {
    }
    ComptePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_compte_page__WEBPACK_IMPORTED_MODULE_6__["ComptePage"]]
        })
    ], ComptePageModule);
    return ComptePageModule;
}());



/***/ }),

/***/ "./src/app/pages/compte/compte.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/compte/compte.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Tu Décides. </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content>\n      <div id=\"marlboroLogo\"><img src=\"../assets/images/marlboroLogo.png\" alt=\"\" /></div>\n      <div class=\"ctrBox\">\n          <div class=\"introTxt\">\n    \n          <div class=\"contBtns_inline\">\n             <div class=\"largeBtn\">\n               <label>JE N’AI PAS DE COMPTE</label>\n               <a href=\"#\" title=\"\" (click)=\"clickedCompte(1)\">M’ENREGISTRER</a>\n             </div>\n\n             <div class=\"largeBtn\">\n                <label>J’AI UN COMPTE</label>\n                <a href=\"#\" title=\"\" (click)=\"clickedCompte(2)\">M’IDENTIFIER</a>\n              </div>\n              \n              <div class=\"largeBtn\">\n                  <label>Je ne participe pas à la tombola</label>\n                  <a href=\"#\" title=\"\" (click)=\"clickedCompte(3)\">Sans enregistrement</a>\n              </div>\n\n          </div>    \n    \n          </div>\n        \n      </div>\n      <div id=\"decideGraphic\" class=\"bottom\"><img src=\"../assets/images/decide_graphic.png\" alt=\"\"/></div>\n    </ion-content>\n    \n    \n    <ion-footer class=\"txtCenter\">\n      <ion-toolbar>\n        <ion-title>Fumer tue</ion-title>\n      </ion-toolbar>\n    </ion-footer>\n    \n    "

/***/ }),

/***/ "./src/app/pages/compte/compte.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/compte/compte.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXB0ZS9jb21wdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/compte/compte.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/compte/compte.page.ts ***!
  \*********************************************/
/*! exports provided: ComptePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComptePage", function() { return ComptePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ComptePage = /** @class */ (function () {
    function ComptePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ComptePage.prototype.ngOnInit = function () {
    };
    ComptePage.prototype.clickedCompte = function (id) {
        if (id == 1) {
            this.navCtrl.navigateRoot('/register');
        }
        else if (id == 2) {
            this.navCtrl.navigateRoot('/newcompte');
        }
        else {
            this.navCtrl.navigateRoot('/home');
        }
        return false;
    };
    ComptePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compte',
            template: __webpack_require__(/*! ./compte.page.html */ "./src/app/pages/compte/compte.page.html"),
            styles: [__webpack_require__(/*! ./compte.page.scss */ "./src/app/pages/compte/compte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ComptePage);
    return ComptePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-compte-compte-module.js.map