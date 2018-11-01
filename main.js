(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-panel/user-panel.component */ "./src/app/components/user-panel/user-panel.component.ts");
/* harmony import */ var _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/password-reset/password-reset.component */ "./src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var _components_register_verify_register_verify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register-verify/register-verify.component */ "./src/app/components/register-verify/register-verify.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'user-panel', component: _components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__["UserPanelComponent"] },
    { path: 'password-reset', component: _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetComponent"] },
    { path: 'register-verify', component: _components_register_verify_register_verify_component__WEBPACK_IMPORTED_MODULE_8__["RegisterVerifyComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    box-sizing: border-box;\r\n    font-size: 16px;\r\n    z-index: 1;\r\n}\r\n\r\nfooter {\r\n    background-color: #1d1d1d;\r\n    width: 100%;\r\n    height: 10vh;\r\n    text-align: center\r\n}\r\n\r\nfooter p {\r\n    font-size: 0.7rem;\r\n    color: white;\r\n    padding-top: 20px\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <app-cookie-bar></app-cookie-bar> -->\n<div class=\"container\">\n    <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<!-- <app-site-map></app-site-map> -->\n<footer><p>© 2018 Copyright You Can Play It, Poland</p></footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'youCanPlayIt';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_site_map_site_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/site-map/site-map.component */ "./src/app/components/site-map/site-map.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_cookie_bar_cookie_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cookie-bar/cookie-bar.component */ "./src/app/components/cookie-bar/cookie-bar.component.ts");
/* harmony import */ var _components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-panel/user-panel.component */ "./src/app/components/user-panel/user-panel.component.ts");
/* harmony import */ var _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/password-reset/password-reset.component */ "./src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var _components_register_verify_register_verify_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/register-verify/register-verify.component */ "./src/app/components/register-verify/register-verify.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // components
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_site_map_site_map_component__WEBPACK_IMPORTED_MODULE_11__["SiteMapComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                _components_cookie_bar_cookie_bar_component__WEBPACK_IMPORTED_MODULE_16__["CookieBarComponent"],
                _components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_17__["UserPanelComponent"],
                _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_18__["PasswordResetComponent"],
                _components_register_verify_register_verify_component__WEBPACK_IMPORTED_MODULE_19__["RegisterVerifyComponent"]
            ],
            //modules go into imports
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'angularfs'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__["FlashMessagesModule"].forRoot()
            ],
            // services go into providers
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_20__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact-container{\r\n    margin-top: 100px;\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact-container\">\n  This is contact container\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/cookie-bar/cookie-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/cookie-bar/cookie-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cookie-bar-container{\r\n    width: 98.6vw;\r\n    display: block;\r\n    height: 20vh;\r\n    position: fixed;\r\n    top: 0;\r\n    background-color: #333;\r\n    color: #ffffff;\r\n    padding: 20px;\r\n    z-index: 5;\r\n}"

/***/ }),

/***/ "./src/app/components/cookie-bar/cookie-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/cookie-bar/cookie-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cookie-bar-container\">\n  <p>To jest cookie bar</p>\n  <button type=\"submit\" (click)=\"closeCookieBar()\">Ok, Rozumiem</button>\n</div>"

/***/ }),

/***/ "./src/app/components/cookie-bar/cookie-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/cookie-bar/cookie-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: CookieBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBarComponent", function() { return CookieBarComponent; });
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

var CookieBarComponent = /** @class */ (function () {
    function CookieBarComponent() {
    }
    CookieBarComponent.prototype.ngOnInit = function () {
    };
    CookieBarComponent.prototype.closeCookieBar = function () {
        document.getElementById("cookie-bar-container").style.display = "none";
    };
    CookieBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cookie-bar',
            template: __webpack_require__(/*! ./cookie-bar.component.html */ "./src/app/components/cookie-bar/cookie-bar.component.html"),
            styles: [__webpack_require__(/*! ./cookie-bar.component.css */ "./src/app/components/cookie-bar/cookie-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CookieBarComponent);
    return CookieBarComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MOBILE */\r\n@media (min-width: 1px){\r\n    #bg {\r\n        background-color: transparent;\r\n    }\r\n\r\n    .section_name{\r\n        margin-top: 10%;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    #home, #about, #contact {\r\n        padding: 30px 4%;\r\n    }\r\n    \r\n    #home{\r\n        display: block;\r\n        background-color: white;\r\n        height: 100vh;\r\n    }\r\n\r\n    #home_poster{\r\n        background: url('AdobeStock_82121408.png');\r\n        background-size: cover;\r\n        background-repeat: repeat-y;\r\n        background-position: top center;\r\n        background-attachment: fixed;\r\n        position: absolute;\r\n        width: 90vw;\r\n        height: 120vh;\r\n        z-index: 2\r\n    }\r\n\r\n    #home_poster p{\r\n        color: #e76543;\r\n        padding: 50vh 40vw 40vh 10vw;\r\n        font-size: 1.8rem;\r\n        font-weight: bold;\r\n    }\r\n\r\n    #about{\r\n        padding-top:100px;\r\n    }\r\n\r\n    #ab{\r\n        display: block;\r\n        background-color: #46b4c2;\r\n        padding-top: 5vh;\r\n        color: #ffffff;\r\n        z-index: 1;\r\n        width: 98.6vw;\r\n    }\r\n\r\n    #ab p, #ab p b{\r\n        margin: 20px 0;\r\n        padding: 0;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .flex_container{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .flex_photo{\r\n        display: none;\r\n        margin-left: 4%;        \r\n    }\r\n\r\n    .Agaty img{\r\n        max-width: 300px;\r\n    }\r\n\r\n    .flex_content{\r\n        display: block;\r\n        max-width: 750px;\r\n        margin-left: 4%;   \r\n    }\r\n\r\n    .flex_container, .flex_container .flex_content p b, .flex_container .flex_content p{\r\n        padding: 0 4%;\r\n        margin: 0;\r\n        text-align: justify;\r\n    }\r\n\r\n    #relax p b{\r\n        font-size: 1.5rem;\r\n        color: #eac13a;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n\r\n    .learning{\r\n        padding: 0 4%;\r\n    }\r\n\r\n    .learning p, .learning p span, .orange p, .flex_content h1, #prices h1{\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    #videos{\r\n        width: 98.6vw;\r\n    }\r\n\r\n    .big-video{\r\n        height: 40vh;\r\n        color: #ffffff;\r\n        border: #333 solid 1px;\r\n        background-color: #666;\r\n        background-size: 100%;\r\n    }\r\n\r\n    .big-video p{\r\n        padding: 20% 50%;\r\n        font-size: 3rem;\r\n    }\r\n\r\n    #main-video{\r\n        background-image: url('You_can_play_it-video_link6.jpg');\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n        z-index: 3;\r\n    }\r\n\r\n    .video-list{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: nowrap;\r\n        justify-content: space-evenly;\r\n        /* height: 25vh; */\r\n    }\r\n\r\n    .video-link{\r\n        width: 25%;\r\n        background-color: #666;\r\n        border: solid 1px #333;\r\n        display: block;\r\n        color: #ffffff;\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n        background-size: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .video-link p{\r\n        padding: 9% 50%;\r\n    }\r\n\r\n    #video-link-1{\r\n        background-image: url('You_can_play_it-video_link1.jpg');\r\n    }\r\n\r\n    #video-link-2{\r\n        background-image: url('You_can_play_it-video_link4.jpg');\r\n    }\r\n\r\n    #video-link-3{\r\n        background-image: url('You_can_play_it-video_link3.jpg');\r\n    }\r\n\r\n    #video-link-4{\r\n        background-image: url('You_can_play_it-video_link2.jpg');\r\n    }\r\n\r\n    .text p{\r\n        color: #666;\r\n        padding: 0 4%;\r\n        font-size: 1rem;\r\n        text-align: justify;\r\n    }\r\n\r\n    .text p span{\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .text li{\r\n        font-size: 1rem;\r\n        color: #666;\r\n        padding: 10px 4% 10px 4%;\r\n        list-style-type: none;\r\n        text-align: justify;\r\n    }\r\n\r\n    .orange{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: nowrap;\r\n        justify-content: space-between;\r\n        background-color: #f1602b;\r\n        height: auto;\r\n        color: #ffffff;\r\n        padding: 5vh 8vw 5vw 4%;\r\n    }\r\n\r\n    /* .orange p{\r\n        padding: 10vh 0;\r\n    } */\r\n\r\n    .full-screen-photo{\r\n        height: 32vh;\r\n        width: auto;\r\n        background-image: url('YouCanPlayIt_skrzyp03.png');\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        background-position: top center;\r\n    }\r\n\r\n    .flex_content p{\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .flex_content h1{\r\n        font-size: 1.5rem;\r\n        padding: 20px 0;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .poster{\r\n        height: 120vh;\r\n    }\r\n\r\n    #follow{\r\n        width: 98.6vw;\r\n        margin-top: 100px;\r\n    }\r\n\r\n    #follow h1{\r\n        padding-left: 4%;\r\n        font-size: 1.5rem;\r\n        color: #eac13a;\r\n    }\r\n\r\n    .flex-names{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: nowrap;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .flex-names p{\r\n        display: block;\r\n        width: auto;\r\n        color: #e76543;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    /* #prices{\r\n        margin: 100px 0 0 0;\r\n        padding: 0 8vw;\r\n        color: #333;\r\n        width: 98.6vw;\r\n    }\r\n\r\n    #prices h1{\r\n        border-top: solid 2px #666;\r\n    }\r\n\r\n    .price_placeholder{\r\n        height: 200px;\r\n        width: 200px;\r\n        background-color: #666;\r\n        margin-top: 20px;\r\n    } */\r\n\r\n    #contact{\r\n        display: block;\r\n        background-image: url('YouCanPlayIt_social-media.png');\r\n        background-size: 130%;\r\n        background-repeat: no-repeat;\r\n        width: 98.6vw;\r\n        height: 45vh;\r\n        /* margin-top: 100px; */\r\n        padding: 10px 10%;\r\n    }\r\n\r\n    #contact p{\r\n        color: #333;\r\n        font-size: 1rem;\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    #social{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: nowrap;\r\n        justify-content: flex-start;\r\n        background-position: top center;\r\n        /* width: 83.8vw; */\r\n        height: auto;\r\n        margin: 0;\r\n    }\r\n\r\n    #social a{\r\n        display: block;\r\n        color: #333;\r\n        font-size: 2rem;\r\n        margin: 15px;\r\n        width: 40px;\r\n        height: 40px;\r\n        text-align: center;\r\n        border-radius: 10%;\r\n        background-color: #ffffff\r\n    }\r\n\r\n    #social a:hover{\r\n        color: #eac13a;\r\n        background-color: #ffffff;\r\n    }\r\n}\r\n/*MOBILE LANDSCAPE*/\r\n@media (min-width: 480px){\r\n    \r\n    #home_poster{\r\n        background: url('AdobeStock_82121407.png');\r\n        background-size: cover;\r\n        background-repeat: repeat-y;\r\n        background-position: top center;\r\n        background-attachment: fixed;\r\n        position: absolute;\r\n        width: 90vw;\r\n        height: 130vh;\r\n        z-index: 2\r\n    }\r\n\r\n    #home_poster p{\r\n        padding: 50vh 40vw 10vh 15vw;\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    #ab p, #ab p b{\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    #relax p, #relax p b{\r\n        font-size: 2.2rem;\r\n    }\r\n\r\n    .big-video{\r\n        height: 70vh;\r\n    }\r\n\r\n    .big-video p{\r\n        padding: 10% 50%;\r\n    }\r\n\r\n    #main-video{\r\n        background-position: center;\r\n        background-size: 80%;\r\n    }\r\n\r\n    .learning{\r\n        padding: 25px 4%;\r\n    }\r\n\r\n    .learning p, .learning p span, .orange p, .flex_content h1, #prices h1{\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .text p{\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .text p span{\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .text li{\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .flex_content{\r\n        margin-left: 4%;   \r\n    }\r\n\r\n    .flex_content p{\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .flex_content h1{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    #follow h1{\r\n        font-size: 2rem\r\n    }\r\n\r\n    .full-screen-photo{\r\n        width: 100%;\r\n        height: 100vh;\r\n        background-image: url('YouCanPlayIt_skrzyp03.png');\r\n        background-size: cover;\r\n        background-repeat: repeat-y;\r\n        background-position: top center;\r\n    }\r\n\r\n    #contact{\r\n        width: 98.6vw;\r\n        height: 100vh;\r\n        padding: 0 10%;\r\n        background-size: 100%\r\n    }\r\n\r\n    #contact p{\r\n        font-size: 1.5rem;\r\n        margin: 65px 0;\r\n    }\r\n\r\n    #social a{\r\n        font-size: 3rem;\r\n        width: 50px;\r\n        height: 70px;\r\n    }\r\n\r\n}\r\n/* TABLETY */\r\n@media (min-width: 768px){\r\n    #home_poster p{\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    #about{\r\n        padding-top: 220px;\r\n    }\r\n\r\n    .flex_container{\r\n        flex-direction: column;\r\n    }\r\n\r\n    .flex_content{\r\n        margin-left: 0;\r\n    }\r\n    \r\n    .flex_photo{\r\n        display: block;   \r\n        max-width: none;\r\n    }\r\n\r\n    .Agaty img{\r\n        max-width: none;\r\n        width: 650px\r\n    }\r\n\r\n    .full-screen-photo{\r\n        background-image: url('YouCanPlayIt_skrzyp03.png');\r\n        background-size: 100%;\r\n        background-repeat: no-repeat;\r\n        background-position: top center;\r\n        max-height: 40vh;\r\n    }\r\n\r\n    .big-video{\r\n        height: 30vh;\r\n    }\r\n\r\n    .big-video p{\r\n        padding: 15% 50%;\r\n    }\r\n\r\n    #contact{\r\n        display: block;\r\n        background-image: url('YouCanPlayIt_social-media.png');\r\n        background-size: 100%;\r\n        background-repeat: no-repeat;\r\n        width: 98.6vw;\r\n        height: 40vh;\r\n        margin-top: 100px;\r\n        padding: 0 10%;\r\n    }\r\n\r\n    #contact p{\r\n        margin-top: 140px;\r\n    }\r\n}\r\n/* DESKTOP */\r\n@media (min-width: 960px){\r\n\r\n    #home_poster{\r\n        background: url('AdobeStock_82121409.png');\r\n        background-size: cover;\r\n        background-repeat: repeat-y;\r\n        background-position: top center;\r\n        background-attachment: fixed;\r\n        position: absolute;\r\n        width: 90vw;\r\n        height: 150vh;\r\n        z-index: 2;\r\n    }\r\n\r\n    #home_poster p{\r\n        padding: 60vh 40vw 10vh 15vw;\r\n        font-size: 3rem;\r\n    }\r\n\r\n    #about{\r\n        padding-top: 100px\r\n    }\r\n\r\n    #ab{\r\n        display: block;\r\n        padding-top: 45vh;\r\n        color: #ffffff;\r\n        z-index: 1;\r\n        width: 98.6vw;\r\n    }\r\n\r\n    .Agaty img{\r\n        max-width: none;\r\n    }\r\n\r\n    #Agaty_about img{\r\n        width: 350px;\r\n        padding-top: 50px;\r\n    }\r\n\r\n    .full-screen-photo{\r\n        width: 100%;\r\n        height: 120vh;\r\n        background-image: url('YouCanPlayIt_skrzyp03.png');\r\n        background-size: cover;\r\n        background-repeat: repeat-y;\r\n        background-position: top center;\r\n    }\r\n\r\n    #relax p, #relax p b{\r\n        font-size: 3.5rem;\r\n    }\r\n\r\n    .flex_container, .flex_container .flex_content p b, .flex_container .flex_content p{\r\n        padding: 0 4% 5% 0;\r\n        margin: 0;\r\n        text-align: justify;\r\n    }\r\n\r\n    .flex_container{\r\n        flex-direction: row;\r\n        flex-wrap: nowrap;\r\n    }\r\n\r\n    .flex_content{\r\n        padding-left: 4%;   \r\n    }\r\n\r\n    .learning{\r\n        padding: 25px 4%;\r\n    }\r\n\r\n    .learning p, .learning p span, .orange p, .flex_content h1, #prices h1{\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    .big-video{\r\n        width: 100%;\r\n        height: auto;\r\n        color: #ffffff;\r\n        border: #333 solid 1px;\r\n        background-color: #666\r\n    }\r\n\r\n    #main-video{\r\n        background-image: url('You_can_play_it-video_link6.jpg');\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n        z-index: 3;\r\n    }\r\n\r\n    .video-list{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: nowrap;\r\n        justify-content: space-evenly;\r\n        height: 25vh;\r\n    }\r\n\r\n    .video-link{\r\n        width: 25%;\r\n        height: auto;\r\n    }\r\n\r\n    .big-video p{\r\n        padding: 15% 45%;\r\n        font-size: 3rem;\r\n    }\r\n\r\n    .video-link p{\r\n        padding: 30% 45%;\r\n    }\r\n\r\n    .text p{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .text p span{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .text li{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .flex_content p{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .flex_content h1{\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    #follow h1{\r\n        font-size: 2.5rem\r\n    }\r\n\r\n    .space{\r\n        margin-top: 100px;\r\n    }\r\n\r\n    .full-screen-photo{\r\n        max-height: 100vh;\r\n    }\r\n\r\n    #contact{\r\n        height: 70vh;\r\n        background-size: 100%;\r\n    }\r\n\r\n    #contact p{\r\n        font-size: 3rem;\r\n    }\r\n\r\n    #social a{\r\n        font-size: 4.5rem;\r\n        width: 80px;\r\n        height: 100px;\r\n    }\r\n}\r\n@media (min-width: 1280px){\r\n    #contact{\r\n        height: 100vh;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n  <div id=\"home_poster\">\n  <p>nauka gry na instrumencie właśnie stała się łatwa</p>\n\n  </div>\n</div> \n<div id=\"ab\">\n<br><br>\n  <div class=\"content\" id=\"about\">\n      <p>Czy twoja pociecha oprócz gry na skrzypcach ćwiczy także twoją anielską cierpliwość?</p>\n      <p>O co powinieneś spytać zanim zaczniesz przygodę z instrumentem?</p>\n      <p>A może jesteś uczniem i nie pamiętasz, co nauczyciel kazał ci wyćwiczyć na poprzedniej lekcji?</p>\n  </div>\n  <div class=\"flex_container\">\n      <div class=\"flex_photo Agaty\" id=\"Agaty_about\">\n          <img src=\"../../../assets/img/YouCanPlayIt_Agaty1.png\">\n      </div>\n      <div class=\"flex_content\">\n          <div id=\"relax\"><p><b>Zrelaksuj się. </b></p></div>\n          <p><b>A my poprowadzimy Was przez proces nauki.</b></p> \n          <p>Wyobraź sobie, że wracasz po każdej lekcji skrzypiec do domu i po prostu WIESZ. Wiesz dokładnie krok po kroku jak rozplanować i skutecznie pomagać swojemu dziecku w ćwiczeniu. Mało tego - proces pracy nad utworem jest przyjemny, krótszy, a efekt spektakularny. Jesteś we właściwym miejscu, aby stało się to dla ciebie codziennością.</p>\n      </div>\n  </div>\n</div> \n<div id=\"videos\"><br><br><br>\n  <div class=\"learning\"><p>Proces nauki jest <span style=\"color: #e76543\">nowoczesny</span></p></div>\n  <div id=\"main-video\" class=\"big-video\"><p><i class=\"fa fa-play\" style=\"cursor:pointer\"></i></p></div>\n  <div class=\"video-list\">\n      <div id=\"video-link-1\" class=\"video-link\"><p><i class=\"fa fa-play\" style=\"cursor:pointer\"></i></p></div>\n      <div id=\"video-link-2\" class=\"video-link\"><p><i class=\"fa fa-play\" style=\"cursor:pointer\"></i></p></div>\n      <div id=\"video-link-3\" class=\"video-link\"><p><i class=\"fa fa-play\" style=\"cursor:pointer\"></i></p></div>\n      <div id=\"video-link-4\" class=\"video-link\"><p><i class=\"fa fa-play\" style=\"cursor:pointer\"></i></p></div>\n  </div><br>\n  <div class=\"learning\"><p><span style=\"color: #46b4c2\">Jak uczymy?</span></p></div>\n  <div class=\"text\">\n      <p>Stworzyłyśmy dla Was program, w którym krok po kroku opisujemy:</p>\n      <li><i class=\"fa fa-music\" style=\"color: #eac13a\"></i> wyjaśniamy jak ćwiczyć z dzieckiem konkretny utwór;</li>\n      <li><i class=\"fa fa-music\" style=\"color: #eac13a\"></i> pokazujemy na co zwrócić szczególną uwagę;</li>\n      <li><i class=\"fa fa-music\" style=\"color: #eac13a\"></i> odkrywamy tajniki efektywnej pracy na codzień;</li>\n      <li><i class=\"fa fa-music\" style=\"color: #eac13a\"></i> mamy dla Was specjalne filmiki instruktażowe, które możecie oglądać razem z dzieckiem;</li>\n      <li><i class=\"fa fa-music\" style=\"color: #eac13a\"></i> omawiamy te rzeczy, na które zwykle nie starcza czasu na lekcji skrzypiec, a nawet...dajemy możliwość ćwieczenia z fortepianem!</li>\n      <p><span style=\"color: #e76543\">You can play it</span> wspiera rodziców i młode talenty w skutecznym ćwiczeniu i osiąganiu szybkich efektów.</p>\n  </div>\n  <div class=\"orange\">\n      <div class=\"flex_content\">\n          <p>Ucz się gdzie chcesz i kiedy chcesz!</p>\n      </div>\n      <div class=\"flex_photo\">\n           <img src=\"../../../assets/img/YouCanPlayIt_device.png\">\n      </div>\n  </div>\n</div> \n<div class=\"space\"></div>\n\n<div id=\"follow\">\n  <h1>Skrzypce to nasza pasja</h1>\n  <div class=\"full-screen-photo\"></div>\n  <br><br>\n      <div class=\"text\">\n          <p>Jesteśmy skrzypaczkami i absolwentkami jednej z najbardziej cenionych klas skrzypiec w Polsce - klasy prof. Jadwigi Kaliszewskiej w Poznaniu. Tysiące godzin spędzone na ćwiczeniu, niezliczone koncerty, kursy i konkursy, pozwoliły nam skrócić do minimum czas spędzany codziennie przy instrumencie i wypracować setki trików, dzięki którym granie na skrzypcach staje się prostsze, logiczne i fajne.</p>\n          <p>Po co ćwiczyć bez sensu?</p>\n          <p>Po co wieczenie kłócić się z dzieckiem, kto ma rację?</p>\n          <p>Pozwól, że Wam pomożemy.</p>\n          <br><br>\n          <p>Poznaj nas bliżej.</p>\n          <div class=\"flex-names\">\n          <p>Agata Sanocka</p>\n          <p>Agata Jeleńska</p>\n          </div>\n      </div>\n</div> \n\n<!-- <div id=\"prices\">\n      <br><br><br><br><br><br><br>    <h1>Pakiety i cennik</h1>\n  <div class=\"flex_container\">\n      <div class=\"price_placeholder\"></div>\n      <div class=\"price_placeholder\"></div>\n      <div class=\"price_placeholder\"></div>\n      <div class=\"price_placeholder\"></div>\n  </div>\n</div>  -->\n\n<div id=\"contact\">\n    <!-- <br> -->\n    <p>Chcesz więcej?</p>\n    <p>Zapraszamy na nasze social media</p>\n  <div id=\"social\">\n      <a href=\"#\" target=\"_blank\"><i class=\"fa fa-facebook-square\"></i></a>\n      <a href=\"#\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n      <a href=\"#\" target=\"_blank\"><i class=\"fa fa-youtube\"></i></a>\n  </div>\n</div>\n<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js\"></script>\n<script>\n    Caman(\"#contact\", function () {\n        this.exposure(-10);\n        this.newLayer(function () {\n            this.setBlendingMode(\"multiply\");\n            this.opacity(100);\n            this.fillColor('#e9c13b');\n        });\n        this.render();\n    });\n</script>"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
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

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-container{\r\n    margin-top: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login-container\">\n  <div class=\"frame\">\n      <h1>\n        <span><i class=\"fa fa-lock\"></i> Podaj dane logowania</span>\n      </h1>\n      <form>\n          <div class=\"form-group\">\n            <label for=\"email\">E-mail</label>\n            <input type=\"email\" name=\"email\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"password\">Hasło</label>\n              <input type=\"password\" name=\"password\" class=\"form-control\" required>\n          </div>\n          <input type=\"submit\" value=\"Zaloguj się\" class=\"btn btn-primary btn-block\">\n        </form>\n      <p>Nie masz konta? <a routerLink=\"/register\">Zarejestruj się!</a></p>\n      <p>Masz konto, ale nie pamiętasz hasła? <a routerLink=\"/password-reset\">Odzyskiwanie hasła</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@media (min-width: 300px){\r\n    #header {\r\n        height: auto; \r\n        position: fixed;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex-wrap: nowrap;\r\n        justify-content: flex-start;\r\n        background: #ffffff;\r\n        z-index: 3;\r\n        width: 100%;\r\n        top:0;\r\n        opacity: 0.95;\r\n    }\r\n\r\n    #logo{\r\n        width: auto;\r\n        margin: auto;\r\n    }\r\n\r\n    #logo img {\r\n        height: 100px;\r\n        width: auto;\r\n    }\r\n\r\n    #nav #links{\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex-wrap: nowrap;\r\n        justify-content: center;\r\n    }\r\n\r\n    #nav #links a, .nav_btn{\r\n        display: block;\r\n        text-decoration: none;\r\n        text-transform: uppercase;\r\n        border-top: solid 1px black;\r\n        color: black;\r\n        text-align: center;\r\n        width: 100%;\r\n        padding: 0 30px 0 30px;\r\n        background-color:  white;\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    #nav_down, #nav_up{\r\n        border-top: solid 1px black;\r\n        border-bottom: solid 1px black;\r\n    }\r\n\r\n    #nav #links a:hover, .nav_btn:hover{\r\n        color:  #e76543;\r\n        text-decoration: underline;   \r\n    }\r\n}\r\n@media (min-width: 480px){\r\n    #logo img {\r\n        height: 70px;\r\n        width: auto;\r\n    }\r\n\r\n}\r\n@media (min-width: 768px){\r\n\r\n    #header {\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        padding: 0 4%;\r\n    }\r\n\r\n    #logo{\r\n        margin-left: 0;\r\n    }\r\n    \r\n    #links{\r\n        display: none;\r\n        justify-content: flex-end;\r\n        margin-top: 20px;\r\n        border-right: solid 1px black;\r\n    }\r\n\r\n    #nav #links{\r\n        flex-direction: row;\r\n    }\r\n    \r\n    #nav #links a{\r\n        padding: 15px;\r\n        width: auto;\r\n        height: 50px;\r\n        border: none;\r\n        border-left: solid 1px black;\r\n    }\r\n    #nav #links a, .nav_btn{\r\n        font-size: 0.7rem;\r\n    }\r\n    .nav_btn{\r\n        display: none;\r\n    }\r\n\r\n}\r\n@media (min-width: 960px){\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n    <div id=\"logo\"><a routerLink=\"/\"><img src=\"/src/assets/img/YCPI_logo_c.jpg\"></a>\n    </div>\n\n    <div id=\"nav\">\n        <div id=\"links\">\n        <a href=\"#home\" (click)=\"navbarHide()\">główna</a>\n        <a href=\"#about\" (click)=\"navbarHide()\">co robimy</a>\n        <a href=\"#videos\" (click)=\"navbarHide()\">nauka</a>\n        <a href=\"#follow\" (click)=\"navbarHide()\">o nas</a>\n        <!-- <a href=\"#prices\" (click)=\"navbarHide()\">cennik</a> -->\n        <a routerLink=\"/contact\" (click)=\"navbarHide()\">kontakt</a>\n        <a routerLink=\"/register\" (click)=\"navbarHide()\">rejestracja</a>\n        <a routerLink=\"/login\" (click)=\"navbarHide()\">zaloguj się</a>\n        <!-- <a routerLink=\"/user-panel\" (click)=\"navbarHide()\">panel</a> -->\n        <!-- <a routerLink=\"/\" (click)=\"navbarHide()\">wyloguj się</a> -->\n        </div>\n        <div class=\"nav_btn\" id=\"nav_down\"><a (click)=\"navbarShow()\"><i class=\"fa fa-angle-double-down\"></i></a></div>\n        <div class=\"nav_btn\" id=\"nav_up\"><a (click)=\"navbarHide()\"><i class=\"fa fa-angle-double-up\"></i></a></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var headerWidth = document.getElementById("header").offsetWidth;
        var linkHeight = document.querySelector("a").offsetHeight;
        var linkHeightPx = linkHeight + "px";
        if (headerWidth > 767) {
            document.getElementById("nav_down").style.display = "none";
            document.getElementById("nav_up").style.display = "none";
            document.getElementById("links").style.display = "flex";
        }
        else {
            document.getElementById("header").style.height = linkHeightPx + "100px";
            document.getElementById("links").style.display = "none";
            document.getElementById("nav_down").style.display = "block";
            document.getElementById("nav_up").style.display = "none";
        }
        ;
    };
    NavbarComponent.prototype.navbarShow = function () {
        document.getElementById("links").style.display = "flex";
        document.getElementById("nav_down").style.display = "none";
        document.getElementById("nav_up").style.display = "block";
    };
    NavbarComponent.prototype.navbarHide = function () {
        var headerWidth = document.getElementById("header").offsetWidth;
        if (headerWidth > 767) {
        }
        else {
            document.getElementById("links").style.display = "none";
            document.getElementById("nav_down").style.display = "block";
            document.getElementById("nav_up").style.display = "none";
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found-container {\r\n    margin-top: 100px;\r\n}"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found-container\">\n  <p>404: There is no such page!</p>\n</div>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#password-reset-container{\r\n    margin-top: 100px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"password-reset-container\">\n    <div class=\"frame\">\n        <h1>\n          <span><i class=\"fa fa-lock\"></i> Podaj swój adres E-mail</span>\n        </h1>\n        <form>\n            <div class=\"form-group\">\n              <label for=\"email\">E-mail</label>\n              <input type=\"email\" name=\"email\" class=\"form-control\" required>\n            </div>\n            <input type=\"submit\" value=\"Zresetuj Hasło\" class=\"btn btn-primary btn-block\">\n          </form>\n        <p style=\"text-align: start\">Reset hasła spowoduje, że na Twoją skrzynkę zostanie przysłany mail z linkiem, poprzez który będzie możliwa zmiana Twojego hasła</p>\n        <p><a routerLink=\"/login\">Wróć do strony logowania</a></p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.ts ***!
  \***********************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
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

var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent() {
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
    PasswordResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-reset',
            template: __webpack_require__(/*! ./password-reset.component.html */ "./src/app/components/password-reset/password-reset.component.html"),
            styles: [__webpack_require__(/*! ./password-reset.component.css */ "./src/app/components/password-reset/password-reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/components/register-verify/register-verify.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/register-verify/register-verify.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#register-verify-container{\r\n    margin-top: 100px;\r\n}\r\n\r\n.frame{\r\n    border: none\r\n}\r\n\r\n.frame h3{\r\n    text-align: center\r\n}\r\n\r\n.frame p{\r\n     text-align: justify\r\n }\r\n"

/***/ }),

/***/ "./src/app/components/register-verify/register-verify.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/register-verify/register-verify.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"register-verify-component\">\n  <div class=\"frame\">\n    <h1>Dziękujemy za rejestrację! Twoje konto zostało utworzone pomyślnie!</h1>\n    <br><br>\n    <h3>To już prawie wszystko</h3>\n    <h1>Potwierdź swój adres email</h1>\n    <p>Na podany przez Ciebie adres email przyjdzie link aktywacyjny do konta. Kliknij go, lub przekopiuj go do przeglądarki aby aktywować swoje konto.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register-verify/register-verify.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/register-verify/register-verify.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterVerifyComponent", function() { return RegisterVerifyComponent; });
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

var RegisterVerifyComponent = /** @class */ (function () {
    function RegisterVerifyComponent() {
    }
    RegisterVerifyComponent.prototype.ngOnInit = function () {
    };
    RegisterVerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-verify',
            template: __webpack_require__(/*! ./register-verify.component.html */ "./src/app/components/register-verify/register-verify.component.html"),
            styles: [__webpack_require__(/*! ./register-verify.component.css */ "./src/app/components/register-verify/register-verify.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterVerifyComponent);
    return RegisterVerifyComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#register-container{\r\n    margin-top: 100px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"register-container\">\n        <div class=\"frame\">\n            <h1>\n              <span><i class=\"fa fa-lock\"></i> Zarejestruj się</span>\n            </h1>\n            <form>\n                <div class=\"form-group\">\n                  <label for=\"email\">E-mail</label>\n                  <input [(ngModel)]=\"email\" type=\"email\" name=\"email\" class=\"form-control\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Hasło</label>\n                    <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" class=\"form-control\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Powtórz Hasło</label>\n                    <input [(ngModel)]=\"passwordConfirm\" type=\"password\" name=\"passwordConfirm\" class=\"form-control\" ng-reflect-model=\"\"> \n                </div>\n                <input (click)=\"onRegisterSubmit()\" type=\"submit\" value=\"Zarejestruj się\" class=\"btn btn-primary btn-block\">\n              </form>\n            <p>Masz już konto? <a routerLink=\"/login\">Zaloguj się!</a></p>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(af, validateService, router, flashMessages) {
        this.af = af;
        this.validateService = validateService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var user = {
            email: this.email,
            password: this.password,
            passwordConfirm: this.passwordConfirm
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessages.show('Proszę wypełnić wszystkie pola', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        else if (!this.validateService.validateEmail(user.email)) {
            this.flashMessages.show('Proszę podać właściwy adres email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        else if (!this.validateService.validatePassword(user)) {
            this.flashMessages.show('Podane hasła nie są takie same', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // else {
        this.router.navigate(['/register-verify']);
        // }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"], _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/site-map/site-map.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/site-map/site-map.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#site-map-container{\r\n    width: 98.66vw;\r\n    min-height: 80vh;\r\n    background-color: #54a8b6;\r\n    color: #ffffff;\r\n    margin: 0;\r\n    padding: 5vh 8vw 0 8vw;\r\n}\r\n\r\n.flex-content{\r\n    margin: 5vh 0 5vh 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.flex-item{\r\n    width: 250px;\r\n    max-height: 300px;\r\n    justify-content: center;\r\n    padding: 10px 10px 0 10px;\r\n}\r\n\r\n.flex-item a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.flex-item a:hover {\r\n    color: #ffffff;\r\n    transition-delay:0.2s;\r\n}\r\n\r\n.flex-item .underline {\r\n    border-bottom: solid 1px #666;\r\n    text-decoration: none;\r\n}\r\n\r\n.flex-item h5 {\r\n    border-bottom: solid 2px #666;\r\n}\r\n\r\n.logo img{\r\n    max-width: 250px;\r\n    max-height: 250px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/site-map/site-map.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/site-map/site-map.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"site-map-container\">\n    <div class=\"flex-content\">\n      <div class=\"flex-item\">\n        <h5 class=\"sm-head\">Skontakuj się</h5>\n        <h2>Agata Agata</h2>\n        <p><i class=\"fa fa-phone\"></i>\n         +48 222 333 444</p>\n        <p><i class=\"fa fa-envelope\"></i>\n        agata@youcanplayit.com</p>\n        <p class=\"underline\"><a routerLink=\"/contact\">Skontaktuj się z nami</a></p>\n        <!-- <p class=\"underline\"><a routerLink=\"/login\">Login </a> | <a routerLink=\"/register\">Sign Up</a></p> -->\n      </div>\n      <div class=\"flex-item\">\n        <h5 class=\"sm-head\">Courses</h5>\n        <p class=\"underline\"><a href=\"#\">course 1</a></p>\n        <p class=\"underline\"><a href=\"#\">course 2</a></p>\n        <p class=\"underline\"><a href=\"#\">course 3</a></p>\n        <p class=\"underline\"><a href=\"#\">course 4</a></p>\n        <p class=\"underline\"><a href=\"#\">course 5</a></p>\n      </div>\n      <div class=\"flex-item\">\n        <h5 class=\"sm-head\">Legal</h5>\n        <p class=\"underline\"><a href=\"#\">legal 1</a></p>\n        <p class=\"underline\"><a href=\"#\">legal 2</a></p>\n        <p class=\"underline\"><a href=\"#\">legal 3</a></p>\n        <p class=\"underline\"><a href=\"#\">legal 4</a></p>\n        <p class=\"underline\"><a href=\"#\">legal 5</a></p>\n      </div>\n      <div class=\"flex-item logo\">\n        <img src=\"/src/assets/img/YCPI_logo_c.jpg\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/site-map/site-map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/site-map/site-map.component.ts ***!
  \***********************************************************/
/*! exports provided: SiteMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteMapComponent", function() { return SiteMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteMapComponent = /** @class */ (function () {
    function SiteMapComponent(router) {
        this.router = router;
    }
    SiteMapComponent.prototype.ngOnInit = function () {
    };
    SiteMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-map',
            template: __webpack_require__(/*! ./site-map.component.html */ "./src/app/components/site-map/site-map.component.html"),
            styles: [__webpack_require__(/*! ./site-map.component.css */ "./src/app/components/site-map/site-map.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SiteMapComponent);
    return SiteMapComponent;
}());



/***/ }),

/***/ "./src/app/components/user-panel/user-panel.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/user-panel/user-panel.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#user-container{\r\n    margin-top: 100px;\r\n}"

/***/ }),

/***/ "./src/app/components/user-panel/user-panel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-panel/user-panel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"user-container\">\n  This is user panel container\n</div>"

/***/ }),

/***/ "./src/app/components/user-panel/user-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-panel/user-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
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

var UserPanelComponent = /** @class */ (function () {
    function UserPanelComponent() {
    }
    UserPanelComponent.prototype.ngOnInit = function () {
    };
    UserPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-panel',
            template: __webpack_require__(/*! ./user-panel.component.html */ "./src/app/components/user-panel/user-panel.component.html"),
            styles: [__webpack_require__(/*! ./user-panel.component.css */ "./src/app/components/user-panel/user-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserPanelComponent);
    return UserPanelComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.password == undefined || user.passwordConfirm == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validatePassword = function (user) {
        if (user.password === user.passwordConfirm) {
            console.log('hasła są takie same');
            return true;
        }
        else {
            console.log('hasła nie sa takie same');
            return false;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCOz-qgc4iVF1JdzegB5TcVGXTkhVl2OrM",
        authDomain: "ycpi-dev.firebaseapp.com",
        databaseURL: "https://ycpi-dev.firebaseio.com",
        projectId: "ycpi-dev",
        storageBucket: "ycpi-dev.appspot.com",
        messagingSenderId: "783621451736"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andrzej.garstecki\Desktop\webProjects\angular\youCanPlayIt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map