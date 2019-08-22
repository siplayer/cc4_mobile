(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newcompte-newcompte-module"],{

/***/ "./src/app/pages/newcompte/newcompte.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/newcompte/newcompte.module.ts ***!
  \*****************************************************/
/*! exports provided: NewcomptePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcomptePageModule", function() { return NewcomptePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newcompte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newcompte.page */ "./src/app/pages/newcompte/newcompte.page.ts");







var routes = [
    {
        path: '',
        component: _newcompte_page__WEBPACK_IMPORTED_MODULE_6__["NewcomptePage"]
    }
];
var NewcomptePageModule = /** @class */ (function () {
    function NewcomptePageModule() {
    }
    NewcomptePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newcompte_page__WEBPACK_IMPORTED_MODULE_6__["NewcomptePage"]]
        })
    ], NewcomptePageModule);
    return NewcomptePageModule;
}());



/***/ }),

/***/ "./src/app/pages/newcompte/newcompte.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/newcompte/newcompte.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <!--<div id=\"marlboroLogo\"><img src=\"../assets/images/marlboroLogo.png\" alt=\"\" /></div>-->\n  <div class=\"ctrBox\">\n      <div class=\"introTxt\">\n\n     \n         <div class=\"heading\">\n           <div class=\"strapLeft\"></div>\n             <div class=\"title\">Tombola</div>\n           <div class=\"strapRight\"></div>\n         </div>\n          \n        <div id=\"formContainer\">\n            <form #form=\"ngForm\" (ngSubmit)=\"new(form)\" method=\"post\">\n                <label>Nom complet</label>\n                <input type=\"text\" ngModel name=\"fName\" value=\"\" class=\"champMe\"/>\n\n                <label>Numéro de téléphone</label>\n                <input type=\"text\"ngModel  name=\"phone\" value=\"\" class=\"champMe\"/>\n                \n                \n                \n                <div class=\"contBtns_inline\">\n                    <ion-button type=\"submit\" expand=\"full\" color=\"danger\" class=\"btnMe\">JE PARTICIPE</ion-button>\n                </div>  \n\n                \n\n\n               \n\n\n            </form>\n        </div>\n\n         \n\n      </div>\n    \n  </div>\n  <div id=\"decideGraphic\" class=\"bottom\"><img src=\"../assets/images/decide_graphic.png\" alt=\"\"/></div>\n</ion-content>\n\n\n<ion-footer class=\"txtCenter\">\n<ion-toolbar>\n<ion-title>Fumer tue</ion-title>\n</ion-toolbar>\n</ion-footer>\n\n\n"

/***/ }),

/***/ "./src/app/pages/newcompte/newcompte.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/newcompte/newcompte.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld2NvbXB0ZS9uZXdjb21wdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/newcompte/newcompte.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/newcompte/newcompte.page.ts ***!
  \***************************************************/
/*! exports provided: NewcomptePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcomptePage", function() { return NewcomptePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewcomptePage = /** @class */ (function () {
    function NewcomptePage() {
    }
    NewcomptePage.prototype.ngOnInit = function () {
    };
    NewcomptePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newcompte',
            template: __webpack_require__(/*! ./newcompte.page.html */ "./src/app/pages/newcompte/newcompte.page.html"),
            styles: [__webpack_require__(/*! ./newcompte.page.scss */ "./src/app/pages/newcompte/newcompte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewcomptePage);
    return NewcomptePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-newcompte-newcompte-module.js.map