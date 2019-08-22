(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n      <!--<div id=\"marlboroLogo\"><img src=\"../assets/images/marlboroLogo.png\" alt=\"\" /></div>-->\n      <div class=\"ctrBox\">\n          <div class=\"introTxt\">\n    \n         \n             <div class=\"heading\">\n               <div class=\"strapLeft\"></div>\n                 <div class=\"title\">Tombola</div>\n               <div class=\"strapRight\"></div>\n             </div>\n              \n            <div id=\"formContainer\">\n                <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\">\n                    <label>Nom complet</label>\n                    <input type=\"text\" ngModel name=\"fName\" value=\"\" class=\"champMe\"/>\n\n                    <label>Numéro de téléphone</label>\n                    <input type=\"text\"ngModel  name=\"phone\" value=\"\" class=\"champMe\"/>\n                    \n                    <label>Ville</label>\n                    <select ngModel name=\"city\" class=\"champMe\">\n                        <option value=\"\"></option>\n                        <option value=\"Agadir\">Agadir\t</option>\n                        <option value=\"Aghram\">Aghram\t</option>\n                        <option value=\"Ain chair\">Ain chair\t</option>\n                        <option value=\"Akka\">Akka\t</option>\n                        <option value=\"Aknoul\">Aknoul\t</option>\n                        <option value=\"Alhoceima\">Alhoceima\t</option>\n                        <option value=\"Araich\">Araich\t</option>\n                        <option value=\"Arbaoua\">Arbaoua\t</option>\n                        <option value=\"Arfoud\">Arfoud\t</option>\n                        <option value=\"Assa\">Assa\t</option>\n                        <option value=\"Assila\">Assila\t</option>\n                        <option value=\"Azemour\">Azemour\t</option>\n                        <option value=\"Azilal\">Azilal\t</option>\n                        <option value=\"Azrou\">Azrou\t</option>\n                        <option value=\"Ben slimane\">Ben slimane\t</option>\n                        <option value=\"Bengrire\">Bengrire\t</option>\n                        <option value=\"Beni Mellal\">Beni Mellal\t</option>\n                        <option value=\"Berkane\">Berkane\t</option>\n                        <option value=\"Berrchid\">Berrchid\t</option>\n                        <option value=\"Boujdour\">Boujdour\t</option>\n                        <option value=\"Boulemane\">Boulemane\t</option>\n                        <option value=\"Bourd\">Bourd\t</option>\n                        <option value=\"Boutagit\">Boutagit\t</option>\n                        <option value=\"Bouznika\">Bouznika\t</option>\n                        <option value=\"Bouaarfa\">Bouaarfa\t</option>\n                        <option value=\"Bouanane\">Bouanane\t</option>\n                        <option value=\"Casablanca\">Casablanca\t</option>\n                        <option value=\"Chefchaouan\">Chefchaouan\t</option>\n                        <option value=\"Dakhla\">Dakhla\t</option>\n                        <option value=\"Demnat\">Demnat\t</option>\n                        <option value=\"Eljadida\">Eljadida\t</option>\n                        <option value=\"Errachidia\">Errachidia\t</option>\n                        <option value=\"Essaouira\">Essaouira\t</option>\n                        <option value=\"Feguig\">Feguig\t</option>\n                        <option value=\"Fes\">Fes\t</option>\n                        <option value=\"Gelmim\">Gelmim\t</option>\n                        <option value=\"Guelmima\">Guelmima\t</option>\n                        <option value=\"Guersif\">Guersif\t</option>\n                        <option value=\"Hajb\">Hajb\t</option>\n                        <option value=\"Ifrane\">Ifrane\t</option>\n                        <option value=\"Imouzar Kandar\">Imouzar Kandar\t</option>\n                        <option value=\"Jrada\">Jrada\t</option>\n                        <option value=\"Kalaa Megouna \">Kalaa Megouna \t</option>\n                        <option value=\"Kesbat Tadla\">Kesbat Tadla\t</option>\n                        <option value=\"Khouribga\">Khouribga\t</option>\n                        <option value=\"Khemissat\">Khemissat\t</option>\n                        <option value=\"Khenifra\">Khenifra\t</option>\n                        <option value=\"Kenitra\">Kenitra\t</option>\n                        <option value=\"Laayoune\">Laayoune\t</option>\n                        <option value=\"Lagouira\">Lagouira\t</option>\n                        <option value=\"Laksar lakbire\">Laksar lakbire\t</option>\n                        <option value=\"Lgara\">Lgara\t</option>\n                        <option value=\"Meknes\">Meknes\t</option>\n                        <option value=\"Melilla\">Melilla\t</option>\n                        <option value=\"Menzal beni yazgha\">Menzal beni yazgha\t</option>\n                        <option value=\"Merrakech\">Merrakech\t</option>\n                        <option value=\"Meskoura\">Meskoura\t</option>\n                        <option value=\"Midelet\">Midelet\t</option>\n                        <option value=\"Missour\">Missour\t</option>\n                        <option value=\"Mohammedia\">Mohammedia\t</option>\n                        <option value=\"Moulay Bouaaza\">Moulay Bouaaza\t</option>\n                        <option value=\"Moulay Yaagoub\">Moulay Yaagoub\t</option>\n                        <option value=\"Nador\">Nador\t</option>\n                        <option value=\"Ouazane\">Ouazane\t</option>\n                        <option value=\"Oued Amlil\">Oued Amlil\t</option>\n                        <option value=\"Oued Zam\">Oued Zam\t</option>\n                        <option value=\"Oued zam\">Oued zam\t</option>\n                        <option value=\"Ouerzazat\">Ouerzazat\t</option>\n                        <option value=\"Oujda\">Oujda\t</option>\n                        <option value=\"Rabat\">Rabat\t</option>\n                        <option value=\"Remani\">Remani\t</option>\n                        <option value=\"Rich\">Rich\t</option>\n                        <option value=\"Rissani\">Rissani\t</option>\n                        <option value=\"Safi\">Safi\t</option>\n                        <option value=\"Sale\">Sale\t</option>\n                        <option value=\"Sebta\">Sebta\t</option>\n                        <option value=\"Sefrou\">Sefrou\t</option>\n                        <option value=\"Settat\">Settat\t</option>\n                        <option value=\"Sidi Ifni\">Sidi Ifni\t</option>\n                        <option value=\"Sidi Slimane\">Sidi Slimane\t</option>\n                        <option value=\"Sidi kacem\">Sidi kacem\t</option>\n                        <option value=\"Sidi yahya lgharb\">Sidi yahya lgharb\t</option>\n                        <option value=\"Smara\">Smara\t</option>\n                        <option value=\"Souq Arbia Gharb\">Souq Arbia Gharb\t</option>\n                        <option value=\"Tafraout\">Tafraout\t</option>\n                        <option value=\"Talouine\">Talouine\t</option>\n                        <option value=\"Tandit\">Tandit\t</option>\n                        <option value=\"Tanger\">Tanger\t</option>\n                        <option value=\"Tantan\">Tantan\t</option>\n                        <option value=\"Taounat\">Taounat\t</option>\n                        <option value=\"Taourirt\">Taourirt\t</option>\n                        <option value=\"Taroudent\">Taroudent\t</option>\n                        <option value=\"Tata\">Tata\t</option>\n                        <option value=\"Taza\">Taza\t</option>\n                        <option value=\"Tehla\">Tehla\t</option>\n                        <option value=\"Terfaya\">Terfaya\t</option>\n                        <option value=\"Tetouan\">Tetouan\t</option>\n                        <option value=\"Tiflet\">Tiflet\t</option>\n                        <option value=\"Tinjdad\">Tinjdad\t</option>\n                        <option value=\"Tissa\">Tissa\t</option>\n                        <option value=\"Tizi ousli\">Tizi ousli\t</option>\n                        <option value=\"Tiznit\">Tiznit\t</option>\n                        <option value=\"Youssoufia\">Youssoufia\t</option>\n                        <option value=\"Zag\">Zag\t</option>\n                        <option value=\"Zagoura\">Zagoura\t</option>\n                        <option value=\"Zerhoune\">Zerhoune\t</option>\n                        <option value=\"kelaat Esraghna\">kelaat Esraghna\t</option>\n\n                    </select>    \n                    \n                    \n                    <div class=\"contBtns_inline\">\n                        <ion-button type=\"submit\" expand=\"full\" color=\"danger\" class=\"btnMe\">JE PARTICIPE</ion-button>\n                        <!--<div class=\"btnMe\"><a href=\"#\" title=\"\" (click)=\"clickedPlay()\">JE PARTICIPE</a></div>-->\n                    </div>  \n\n                    <span class=\"spacer-20\"></span>\n\n                    <ion-item class=\"checkBox\">\n                    <ion-checkbox checked ></ion-checkbox>\n                    <ion-label>Je confirme que j'ai + 18 ans et que je suis fumeur.</ion-label>\n                    </ion-item>\n\n                    <ion-item class=\"checkBox\">\n                    <ion-checkbox checked ></ion-checkbox>\n                    <ion-label>J'accepte les conditions d'utilisation.</ion-label>\n                    </ion-item>        \n\n\n                   \n\n\n                </form>\n            </div>\n\n              <!-- <div class=\"largeBtn\">\n                  <label>Je ne participe pas à la tombola</label>\n                  <a href=\"#\" title=\"\" (click)=\"clickedCompte(3)\">Sans enregistrement</a>\n              </div> -->\n\n             \n    \n          </div>\n        \n      </div>\n      <!--<div id=\"decideGraphic\" class=\"bottom\"><img src=\"../assets/images/decide_graphic.png\" alt=\"\"/></div>-->\n</ion-content>\n    \n    \n<ion-footer class=\"txtCenter\">\n  <ion-toolbar>\n    <ion-title>Fumer tue</ion-title>\n  </ion-toolbar>\n</ion-footer>\n    \n    \n"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");








var RegisterPage = /** @class */ (function () {
    function RegisterPage(modalController, navCtrl, authService, loading, router, toastController, alertService) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loading = loading;
        this.router = router;
        this.toastController = toastController;
        this.alertService = alertService;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        this.loading.present();
        this.authService.register(form.value.fName, form.value.phone, form.value.city).subscribe(function (res) {
            _this.loading.dismiss();
            if (res.erreur) {
                _this.presentToast(res.erreur);
            }
            console.log(JSON.stringify(res));
            if (res.message) {
                _this.router.navigate(['merci']);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    RegisterPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map