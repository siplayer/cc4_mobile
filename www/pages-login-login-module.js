(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-button color=\"light\" (click)=\"dismissLogin()\">Close</ion-button>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\">\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input ngModel type=\"email\" name=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input ngModel type=\"password\" name=\"password\"></ion-input>\n    </ion-item>\n  \n    <p text-right>Forgot Password?</p>\n  \n    <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Login</ion-button>\n  </form>\n</ion-content> -->\n\n\n\n<!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Tu Décides. </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content>\n      <div id=\"marlboroLogo\"><img src=\"../assets/images/marlboroLogo.png\" alt=\"\" /></div>\n      <div class=\"ctrBox\">\n        \n    \n         \n             <div class=\"heading\">\n               <div class=\"strapLeft\"></div>\n                 <div class=\"title\">S'identifier</div>\n               <div class=\"strapRight\"></div>\n             </div>\n              \n            <div id=\"formContainer\">\n                <form  [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\n                    <label>E-mail</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"champMe\"/>\n\n                    <label>Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"champMe\"/>\n                    \n                    <!--<label>Ville</label>\n                    <select name=\"city\" class=\"champMe\">\n                        <option value=\"\"></option>\n                        <option value=\"kelâat Esraghna\">Agadir</option>\n                        <option value=\"kelâat Esraghna\">Aghram</option>\n                        <option value=\"kelâat Esraghna\">Ain châir</option>\n                        <option value=\"kelâat Esraghna\">Akka</option>\n                        <option value=\"kelâat Esraghna\">Aknoul</option>\n                        <option value=\"kelâat Esraghna\">Alhoceima</option>\n                        <option value=\"kelâat Esraghna\">Araich</option>\n                        <option value=\"kelâat Esraghna\">Arbaoua</option>\n                        <option value=\"kelâat Esraghna\">Arfoud</option>\n                        <option value=\"kelâat Esraghna\">Assa</option>\n                        <option value=\"kelâat Esraghna\">Assila</option>\n                        <option value=\"kelâat Esraghna\">Azemour</option>\n                        <option value=\"kelâat Esraghna\">Azilal</option>\n                        <option value=\"kelâat Esraghna\">Azrou</option>\n                        <option value=\"kelâat Esraghna\">Ben slimane</option>\n                        <option value=\"kelâat Esraghna\">Bengrire</option>\n                        <option value=\"kelâat Esraghna\">Beni Mellal</option>\n                        <option value=\"kelâat Esraghna\">Berkane</option>\n                        <option value=\"kelâat Esraghna\">Berrchid</option>\n                        <option value=\"kelâat Esraghna\">Boujdour</option>\n                        <option value=\"kelâat Esraghna\">Boulemane</option>\n                        <option value=\"kelâat Esraghna\">Bourd</option>\n                        <option value=\"kelâat Esraghna\">Boutagit</option>\n                        <option value=\"kelâat Esraghna\">Bouznika</option>\n                        <option value=\"kelâat Esraghna\">Bouâarfa</option>\n                        <option value=\"kelâat Esraghna\">Bouânane</option>\n                        <option value=\"kelâat Esraghna\">Casablanca</option>\n                        <option value=\"kelâat Esraghna\">Chefchaouan</option>\n                        <option value=\"kelâat Esraghna\">Dakhla</option>\n                        <option value=\"kelâat Esraghna\">Demnat</option>\n                        <option value=\"kelâat Esraghna\">Eljadida</option>\n                        <option value=\"kelâat Esraghna\">Errachidia</option>\n                        <option value=\"kelâat Esraghna\">Essaouira</option>\n                        <option value=\"kelâat Esraghna\">Feguig</option>\n                        <option value=\"kelâat Esraghna\">Fes</option>\n                        <option value=\"kelâat Esraghna\">Gelmim</option>\n                        <option value=\"kelâat Esraghna\">Guelmima</option>\n                        <option value=\"kelâat Esraghna\">Guersif</option>\n                        <option value=\"kelâat Esraghna\">Hajb</option>\n                        <option value=\"kelâat Esraghna\">Ifrane</option>\n                        <option value=\"kelâat Esraghna\">Imouzar Kandar</option>\n                        <option value=\"kelâat Esraghna\">Jrada</option>\n                        <option value=\"kelâat Esraghna\">Kalâa Megouna </option>\n                        <option value=\"kelâat Esraghna\">Kesbat Tadla</option>\n                        <option value=\"kelâat Esraghna\">Khouribga</option>\n                        <option value=\"kelâat Esraghna\">Khémissat</option>\n                        <option value=\"kelâat Esraghna\">Khénifra</option>\n                        <option value=\"kelâat Esraghna\">Kénitra</option>\n                        <option value=\"kelâat Esraghna\">Laayoune</option>\n                        <option value=\"kelâat Esraghna\">Lagouira</option>\n                        <option value=\"kelâat Esraghna\">Laksar lakbire</option>\n                        <option value=\"kelâat Esraghna\">Lgara</option>\n                        <option value=\"kelâat Esraghna\">Meknes</option>\n                        <option value=\"kelâat Esraghna\">Melilla</option>\n                        <option value=\"kelâat Esraghna\">Menzal beni yazgha</option>\n                        <option value=\"kelâat Esraghna\">Merrakech</option>\n                        <option value=\"kelâat Esraghna\">Meskoura</option>\n                        <option value=\"kelâat Esraghna\">Midelet</option>\n                        <option value=\"kelâat Esraghna\">Missour</option>\n                        <option value=\"kelâat Esraghna\">Mohammedia</option>\n                        <option value=\"kelâat Esraghna\">Moulay Bouâaza</option>\n                        <option value=\"kelâat Esraghna\">Moulay Yaâgoub</option>\n                        <option value=\"kelâat Esraghna\">Nador</option>\n                        <option value=\"kelâat Esraghna\">Ouazane</option>\n                        <option value=\"kelâat Esraghna\">Oued Amlil</option>\n                        <option value=\"kelâat Esraghna\">Oued Zam</option>\n                        <option value=\"kelâat Esraghna\">Oued zam</option>\n                        <option value=\"kelâat Esraghna\">Ouerzazat</option>\n                        <option value=\"kelâat Esraghna\">Oujda</option>\n                        <option value=\"kelâat Esraghna\">Rabat</option>\n                        <option value=\"kelâat Esraghna\">Remani</option>\n                        <option value=\"kelâat Esraghna\">Rich</option>\n                        <option value=\"kelâat Esraghna\">Rissani</option>\n                        <option value=\"kelâat Esraghna\">Safi</option>\n                        <option value=\"kelâat Esraghna\">Salé</option>\n                        <option value=\"kelâat Esraghna\">Sebta</option>\n                        <option value=\"kelâat Esraghna\">Sefrou</option>\n                        <option value=\"kelâat Esraghna\">Settat</option>\n                        <option value=\"kelâat Esraghna\">Sidi Ifni</option>\n                        <option value=\"kelâat Esraghna\">Sidi Slimane</option>\n                        <option value=\"kelâat Esraghna\">Sidi kacém</option>\n                        <option value=\"kelâat Esraghna\">Sidi yahya lgharb</option>\n                        <option value=\"kelâat Esraghna\">Smara</option>\n                        <option value=\"kelâat Esraghna\">Souq Arbiâ Gharb</option>\n                        <option value=\"kelâat Esraghna\">Tafraout</option>\n                        <option value=\"kelâat Esraghna\">Talouine</option>\n                        <option value=\"kelâat Esraghna\">Tandit</option>\n                        <option value=\"kelâat Esraghna\">Tanger</option>\n                        <option value=\"kelâat Esraghna\">Tantan</option>\n                        <option value=\"kelâat Esraghna\">Taounat</option>\n                        <option value=\"kelâat Esraghna\">Taourirt</option>\n                        <option value=\"kelâat Esraghna\">Taroudent</option>\n                        <option value=\"kelâat Esraghna\">Tata</option>\n                        <option value=\"kelâat Esraghna\">Taza</option>\n                        <option value=\"kelâat Esraghna\">Tehla</option>\n                        <option value=\"kelâat Esraghna\">Terfaya</option>\n                        <option value=\"kelâat Esraghna\">Tetouan</option>\n                        <option value=\"kelâat Esraghna\">Tiflet</option>\n                        <option value=\"kelâat Esraghna\">Tinjdad</option>\n                        <option value=\"kelâat Esraghna\">Tissa</option>\n                        <option value=\"kelâat Esraghna\">Tizi ousli</option>\n                        <option value=\"kelâat Esraghna\">Tiznit</option>\n                        <option value=\"kelâat Esraghna\">Youssoufia</option>\n                        <option value=\"kelâat Esraghna\">Zag</option>\n                        <option value=\"kelâat Esraghna\">Zagoura</option>\n                        <option value=\"kelâat Esraghna\">Zerhoune</option>\n                        <option value=\"kelâat Esraghna\">kelâat Esraghna</option>\n                    </select>    \n                    -->\n                    \n                    <div class=\"contBtns_inline\">\n                        <ion-button  shape=\"round\" color=\"danger\" type=\"submit\" [disabled]=\"!loginForm.valid\">Valider</ion-button>\n                        <!--<div class=\"btnMe\"><a href=\"#\" title=\"\" (click)=\"clickedPlay()\">Valider</a></div>-->\n                    </div>  \n\n                    <span class=\"spacer-20\"></span>\n\n\n                </form>\n            </div>\n\n              <!-- <div class=\"largeBtn\">\n                  <label>Je ne participe pas à la tombola</label>\n                  <a href=\"#\" title=\"\" (click)=\"clickedCompte(3)\">Sans enregistrement</a>\n              </div> -->\n\n             \n    \n      \n        \n      </div>\n      <div id=\"decideGraphic\" class=\"bottom\"><img src=\"../assets/images/decide_graphic.png\" alt=\"\"/></div>\n    </ion-content>\n    \n    \n    <ion-footer class=\"txtCenter\">\n      <ion-toolbar>\n        <ion-title>Fumer tue</ion-title>\n      </ion-toolbar>\n    </ion-footer>\n    \n    \n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");








var LoginPage = /** @class */ (function () {
    function LoginPage(loading, formBuilder, router, authService, toastController, network) {
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.toastController = toastController;
        this.network = network;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginPage.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.loading.present();
        this.authService.login(form)
            .subscribe(function (res) {
            console.log(res);
            if (res.erreur) {
                _this.loading.dismiss();
                _this.presentToast(res.erreur);
            }
            else if (res.password) {
                localStorage.setItem('token', res.password);
                localStorage.setItem('id', res.id);
                localStorage.setItem('role', res.role);
                localStorage.setItem('parent', res.parent);
                _this.router.navigate(['/home']);
            }
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map