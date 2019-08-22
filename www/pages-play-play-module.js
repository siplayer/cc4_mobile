(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-play-play-module"],{

/***/ "./src/app/pages/play/play.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/play/play.module.ts ***!
  \*******************************************/
/*! exports provided: PlayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageModule", function() { return PlayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play.page */ "./src/app/pages/play/play.page.ts");







var routes = [
    {
        path: '',
        component: _play_page__WEBPACK_IMPORTED_MODULE_6__["PlayPage"]
    }
];
var PlayPageModule = /** @class */ (function () {
    function PlayPageModule() {
    }
    PlayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_play_page__WEBPACK_IMPORTED_MODULE_6__["PlayPage"]]
        })
    ], PlayPageModule);
    return PlayPageModule;
}());



/***/ }),

/***/ "./src/app/pages/play/play.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/play/play.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Tu Décides. </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content>\n      <div id=\"marlboroLogo\"><img src=\"../assets/images/marlboroLogo.png\" alt=\"\" /></div>\n      <div class=\"ctrBox\">\n\n        <div id=\"paquet\">\n          <img src=\"../assets/images/paquet.png\" alt=\"\" />\n          <div id=\"question\">\n              {{question}}                         \n          </div>\n          <div id=\"answer\" (click)=\"showAnswer()\">\n            <div id=\"interactUser\"><span>{{answers}}</span></div>\n          </div>\n        </div>\n        \n      </div>\n      <div id=\"decideGraphic\" class=\"bottom\"><img src=\"../assets/images/decide_graphic.png\" alt=\"\"/></div>\n    </ion-content>\n    \n    \n    <ion-footer class=\"txtCenter\">\n      <ion-toolbar>\n        <ion-title>Fumer tue</ion-title>\n      </ion-toolbar>\n    </ion-footer>\n    \n    \n\n\n\n\n\n\n\n\n<!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Tu Décides. </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-button (click)=\"Compte()\" expand=\"full\" color=\"primary\">Register</ion-button>\n  </ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-title>Fumer tue</ion-title>\n    </ion-toolbar>\n  </ion-footer> -->"

/***/ }),

/***/ "./src/app/pages/play/play.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/play/play.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXkvcGxheS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/play/play.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/play/play.page.ts ***!
  \*****************************************/
/*! exports provided: PlayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPage", function() { return PlayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var PlayPage = /** @class */ (function () {
    function PlayPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.answers = 0;
        this.question = '';
        this.myPoints = ['10', '20', '30', '40', '50', '100', '150', '500', '1000'];
        this.myQuestion = ['Combien de personnes dans le monde connaissent le secret de Marlboro ?',
            'Combien de vérifications le paquet Marlboro doit passer pour être validé ?',
            'Combien de variétés Marlboro existe-t-il  au Maroc ?',
            'Dans combien de pays Marlboro est savouré ?'];
    }
    PlayPage.prototype.shuffle = function (a) {
        var rand = a[Math.floor(Math.random() * a.length)];
        return rand;
    };
    PlayPage.prototype.ngOnInit = function () {
        this.answers = this.shuffle(this.myPoints);
        localStorage.setItem('bonnus', this.answers);
        this.question = this.shuffle(this.myQuestion);
    };
    PlayPage.prototype.Compte = function () {
        this.navCtrl.navigateRoot('/compte');
    };
    PlayPage.prototype.showAnswer = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__("#interactUser span").show(600);
        setTimeout(function () {
            _this.Compte();
        }, 2000);
    };
    PlayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-play',
            template: __webpack_require__(/*! ./play.page.html */ "./src/app/pages/play/play.page.html"),
            styles: [__webpack_require__(/*! ./play.page.scss */ "./src/app/pages/play/play.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PlayPage);
    return PlayPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-play-play-module.js.map