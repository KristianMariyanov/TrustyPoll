webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_index__ = __webpack_require__("./src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_index__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_index__ = __webpack_require__("./src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_index__ = __webpack_require__("./src/app/pipes/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__components_index__["a" /* APP_COMPONENTS */],
                __WEBPACK_IMPORTED_MODULE_13__directives_index__["a" /* APP_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_index__["a" /* APP_PIPES */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_index__["a" /* APP_SERVICES */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__components_index__["b" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index__ = __webpack_require__("./src/app/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var APP_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_index__["c" /* HomeComponent */] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(APP_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<loader></loader>\r\n\r\n<nav-menu></nav-menu>\r\n\r\n<div class='container container-fluid app-wrapper'>\r\n    <div class='body-content'>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<footer-menu></footer-menu>\r\n"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* LoaderService */].show();
        this.appService.init().subscribe(function () { return __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* LoaderService */].hide(); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app',
            template: __webpack_require__("./src/app/components/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/footermenu/footermenu.component.css":
/***/ (function(module, exports) {

module.exports = "footer {\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n    background-color: #101010;\r\n    color: #fff;\r\n}\r\n\r\nfooter a {\r\n    color: #fff;\r\n}\r\n\r\n.social {\r\n    display: inline-block;\r\n    width: 17px;\r\n    height: 16px;\r\n    background: url(/content/img/social.png)no-repeat;\r\n    font-size: 16px;\r\n}\r\n\r\n.social-email {\r\n    background-position: -193px 0;\r\n}\r\n\r\n.social-telegram {\r\n    background-position: -167px 0;\r\n}\r\n\r\n.social-facebook {\r\n    background-position: -2px 0;\r\n}\r\n\r\n.social-twitter {\r\n    background-position: -22px 0;\r\n}\r\n\r\n.social-reddit {\r\n    background-position: -115px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footermenu/footermenu.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"pull-left\">\r\n                    <a href=\"Abount\">About</a>\r\n                    &nbsp;&nbsp;&nbsp;\r\n                    <a href=\"Abount\">Terms</a>\r\n                    &nbsp;&nbsp;&nbsp;\r\n                    <a href=\"Abount\">Privacy</a>\r\n                    &nbsp;&nbsp;&nbsp;\r\n                    <a href=\"Abount\">Contact</a>\r\n                    &nbsp;&nbsp;&nbsp;\r\n                    <a href=\"Abount\">Security</a>\r\n                    &nbsp;&nbsp;&nbsp;\r\n                    <a href=\"Abount\">Help</a>\r\n                    &nbsp;&nbsp;&nbsp;\r\n                    <a href=\"Abount\">FAQ</a>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                    <a href=\"#\"><i class=\"social social-facebook\"></i></a>\r\n                    &nbsp;\r\n                    <a href=\"#\"><i class=\"social social-telegram\"></i></a>\r\n                    &nbsp;\r\n                    <a href=\"#\"><i class=\"social social-twitter\"></i></a>\r\n                    &nbsp;\r\n                    <a href=\"#\"><i class=\"social social-reddit\"></i></a>\r\n                    &nbsp;\r\n                    <a href=\"#\"><i class=\"social social-email\"></i></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <hr />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <span class=\"pull-left\">\r\n                    @2018 Trusty Poll All Rights Reserved\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footermenu/footermenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterMenuComponent = (function () {
    function FooterMenuComponent() {
    }
    FooterMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'footer-menu',
            template: __webpack_require__("./src/app/components/footermenu/footermenu.component.html"),
            styles: [__webpack_require__("./src/app/components/footermenu/footermenu.component.css")]
        })
    ], FooterMenuComponent);
    return FooterMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>HOME</h1>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_COMPONENTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("./src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footermenu_footermenu_component__ = __webpack_require__("./src/app/components/footermenu/footermenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navmenu_navmenu_component__ = __webpack_require__("./src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_loader_loader_component__ = __webpack_require__("./src/app/components/shared/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_wizard_wizard_component__ = __webpack_require__("./src/app/components/shared/wizard/wizard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */












var APP_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_1__footermenu_footermenu_component__["a" /* FooterMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_3__navmenu_navmenu_component__["a" /* NavMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_4__shared_loader_loader_component__["a" /* LoaderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__shared_wizard_wizard_component__["a" /* WizardComponent */]
];


/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.css":
/***/ (function(module, exports) {

module.exports = "div.navbar{\r\n    margin-bottom:5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse p-0\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Trusty Poll</a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n\r\n                <li *ngIf=\"isLoggedIn\" class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle cursor-pointer\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">LINK</a>\r\n                    <ul class=\"dropdown-menu\" role=\"menu\">\r\n                        <li [routerLinkActive]=\"['link-active']\"><a [routerLink]=\"['/sublink1']\">SUBLINK1</a></li>\r\n                        <li [routerLinkActive]=\"['link-active']\"><a [routerLink]=\"['/sublink2']\">SUBLINK2</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n\r\n            <ng-container *ngIf=\"isLoggedIn\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle cursor-pointer\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n                            <img *ngIf=\"imgUrl\" [src]=\"imgUrl\" width=\"22\" />\r\n                            &nbsp;\r\n                            ACCOUNT\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li [routerLinkActive]=\"['link-active']\"><a [routerLink]=\"['/profile']\">SETTINGS</a></li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </ng-container>\r\n\r\n            <ul *ngIf=\"!isLoggedIn\" class=\"nav navbar-nav navbar-right\">\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/welcome']\">\r\n                        <span class='glyphicon glyphicon-flag'></span> GET STARTED\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavMenuComponent = (function () {
    function NavMenuComponent(identityService) {
        this.identityService = identityService;
        this.imgUrl = '';
        this.isLoggedIn = this.identityService.isLoggedIn();
        this.user = this.identityService.getAddress();
    }
    NavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-menu',
            template: __webpack_require__("./src/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("./src/app/components/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* IdentityService */]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLoading\" class=\"loader-wrapper\">\r\n    <div class=\"loader\">\r\n        <div class=\"roller\"></div>\r\n        <div class=\"roller\"></div>\r\n    </div>\r\n\r\n    <div id=\"loader2\" class=\"loader\">\r\n        <div class=\"roller\"></div>\r\n        <div class=\"roller\"></div>\r\n    </div>\r\n\r\n    <div id=\"loader3\" class=\"loader\">\r\n        <div class=\"roller\"></div>\r\n        <div class=\"roller\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderComponent = (function () {
    function LoaderComponent() {
        this.showLoading = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* LoaderService */].onToggle.subscribe(function (v) { return _this.showLoading = v; });
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'loader',
            template: __webpack_require__("./src/app/components/shared/loader/loader.component.html")
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/wizard/wizard.component.css":
/***/ (function(module, exports) {

module.exports = "/*!\n\n =========================================================\n * Paper Bootstrap Wizard - v1.0.2\n =========================================================\n \n * Product Page: https://www.creative-tim.com/product/paper-bootstrap-wizard\n * Copyright 2017 Creative Tim (http://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/paper-bootstrap-wizard/blob/master/LICENSE.md)\n \n =========================================================\n \n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n */\n\n/*     Theme overrides */\n\n.nav-pills > li i {\n    padding: 0 !important;\n}\n\n.nav-pills > li.active > a {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\n\n/*     Parts of the original theme */\n\n.wizard-card {\n    z-index: 3;\n    margin-bottom:100px;\n}\n\n.wizard-card .wizard-navigation .progress-bar {\n    background-color: #9c27b0;\n}\n\n.wizard-card .wizard-navigation {\n    position: relative;\n}\n\n.wizard-card .wizard-navigation .progress-with-circle {\n        position: relative;\n        top: 40px;\n        z-index: 50;\n        height: 4px;\n    }\n\n.wizard-card .wizard-navigation .progress-with-circle .progress-bar {\n            -webkit-box-shadow: none;\n                    box-shadow: none;\n            -webkit-transition: width .3s ease;\n            transition: width .3s ease;\n        }\n\n.wizard-card .icon-circle {\n    font-size: 20px;\n    border: 3px solid #F3F2EE;\n    text-align: center;\n    border-radius: 50%;\n    color: rgba(0, 0, 0, 0.2);\n    font-weight: 600;\n    width: 70px;\n    height: 70px;\n    background-color: #FFFFFF;\n    margin: 0 auto;\n    position: relative;\n    top: -2px;\n}\n\n.wizard-card .icon-circle [class=\"material-icons\"] {\n        position: absolute;\n        z-index: 1;\n        left: 1px;\n        right: 0px;\n        top: 18px;\n    }\n\n.wizard-card .nav-pills > li.active > a:after {\n    background-color: #9c27b0;\n}\n\n.wizard-card .nav-pills > li.active > a {\n    color: #9c27b0;\n}\n\n.wizard-card .nav-pills .icon-circle.checked {\n    border-color: #9c27b0;\n}\n\n.wizard-card .choice.active .card-checkboxes {\n    color: #9c27b0;\n}\n\n.wizard-card .wizard-navigation .progress-bar {\n    background-color: #9c27b0;\n}\n\n.nav-pills {\n    background-color: #F3F2EE;\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    top: 40px;\n    text-align: center;\n}\n\n.nav-pills > li + li {\n        margin-left: 0;\n    }\n\n.nav-pills > li > a {\n        padding: 0;\n        max-width: 78px;\n        margin: 0 auto;\n        color: rgba(0, 0, 0, 0.2);\n        border-radius: 50%;\n        position: relative;\n        top: -32px;\n        z-index: 100;\n    }\n\n.nav-pills > li > a:after {\n            content: '';\n            width: 70px;\n            height: 70px;\n            border-radius: 50%;\n            display: inline-block;\n            position: absolute;\n            left: 15px;\n            top: -2px;\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n            -webkit-transition: .2s all linear;\n            transition: .2s all linear;\n        }\n\n.nav-pills > li > a:hover, .nav-pills > li > a:focus {\n            background-color: transparent;\n            color: rgba(0, 0, 0, 0.2);\n            outline: 0 !important;\n            cursor: pointer;\n        }\n\n.nav-pills > li.active > a:after {\n        content: '';\n        width: 70px;\n        height: 70px;\n        border-radius: 50%;\n        display: inline-block;\n        position: absolute;\n        right: 5px;\n        top: -2px;\n        -webkit-transform: scale(1);\n        -moz-transform: scale(1);\n        -o-transition: scale(1);\n        transform: scale(1);\n        -webkit-transition: all 0.2s linear;\n        transition: all 0.2s linear;\n    }\n\n.nav-pills > li.active > a,\n    .nav-pills > li.active > a:hover,\n    .nav-pills > li.active > a:focus {\n        background-color: transparent;\n        font-size: 15px;\n        -webkit-transition: font-size 0.2s linear;\n        transition: font-size 0.2s linear;\n    }\n\n.nav-pills > li.active > a [class=\"material-icons\"],\n        .nav-pills > li.active > a:hover [class=\"material-icons\"],\n        .nav-pills > li.active > a:focus [class=\"material-icons\"] {\n            color: #FFFFFF;\n            font-size: 24px;\n            top: 21px;\n            -webkit-transition: all 0.2s linear;\n            transition: all 0.2s linear;\n        }\n"

/***/ }),

/***/ "./src/app/components/shared/wizard/wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wizard-card\">\r\n    <div class=\"wizard-navigation\">\r\n        <div class=\"progress-with-circle\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"1\" aria-valuemin=\"1\" [attr.aria-valuemax]=\"steps.length\" style=\"width: 21%;\"></div>\r\n        </div>\r\n        <ul>\r\n            <ng-template ngFor let-step [ngForOf]=\"steps\">\r\n                <li>\r\n                    <a href=\"#{{step.href}}\" data-toggle=\"tab\">\r\n                        <div class=\"icon-circle\">\r\n                            <i class=\"material-icons\">{{step.icon}}</i>\r\n                        </div>\r\n                        {{step.title}}\r\n                    </a>\r\n                </li>\r\n            </ng-template>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/wizard/wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardComponent = (function () {
    function WizardComponent(el) {
        this.el = el;
        this.index = 0;
        this.indexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.steps = [];
        this.enableTabChange = true;
        this.enableForwardTabChange = true;
        this.enableBackwardTabChange = true;
        this.tabClass = 'nav nav-pills';
        this.nextSelector = '.btn-next';
        this.previousSelector = '.btn-previous';
        this.finishSelector = '.btn-finish';
        this.firstSelector = '.wizard li.first';
        this.lastSelector = '.wizard li.last';
        this.onInit = null;
        this.onTabShow = null;
        this.onTabClick = this.onWizardTabClick;
        this.onShow = null;
        this.onNext = null;
        this.onPrevious = null;
        this.onLast = null;
        this.onFirst = null;
        this.onTabChange = null;
        this.wizard = null;
    }
    WizardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.wizard = $(this.el.nativeElement).find('.wizard-card').bootstrapWizard({
            tabClass: this.tabClass,
            nextSelector: this.nextSelector,
            previousSelector: this.previousSelector,
            firstSelector: this.firstSelector,
            lastSelector: this.lastSelector,
            onInit: function (tab, navigation, currentIndex) { return _this.onWizardInit(tab, navigation, currentIndex); },
            onTabShow: function (tab, navigation, currentIndex) { return _this.onWizardTabShow(tab, navigation, currentIndex); },
            onTabClick: function (tab, navigation, currentIndex, nextTab) { return _this.onWizardTabClick(tab, navigation, currentIndex, nextTab); },
            onShow: this.onShow,
            onNext: this.onNext,
            onPrevious: this.onPrevious,
            onLast: this.onLast,
            onFirst: this.onFirst,
            onTabChange: null,
        }).data('bootstrapWizard');
    };
    WizardComponent.prototype.ngOnChanges = function (changes) {
        if (!changes) {
            return;
        }
        if (changes.index && this.wizard) {
            this.wizard.show(changes.index.currentValue);
        }
    };
    WizardComponent.prototype.onWizardInit = function (tab, navigation, currentIndex) {
        var $total = navigation.find('li').length;
        var $width = 100 / $total;
        navigation.find('li').css('width', $width + '%');
        if (this.onInit) {
            this.onInit(tab, navigation, currentIndex);
        }
    };
    WizardComponent.prototype.onWizardTabClick = function (tab, navigation, currentIndex, nextIndex) {
        if (this.enableTabChange) {
            if (currentIndex < nextIndex) {
                if (this.enableForwardTabChange) {
                    this.index = nextIndex;
                    this.indexChange.emit(this.index);
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (nextIndex < currentIndex) {
                if (this.enableBackwardTabChange) {
                    this.index = nextIndex;
                    this.indexChange.emit(this.index);
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return false;
        }
    };
    WizardComponent.prototype.onWizardTabShow = function (tab, navigation, currentIndex) {
        var $total = navigation.find('li').length;
        var $current = currentIndex + 1;
        var $wizard = navigation.closest('.wizard-card');
        // If it's the last tab then hide the last button and show the finish instead
        if ($current >= $total) {
            $($wizard).find(this.nextSelector).hide();
            $($wizard).find(this.finishSelector).show();
        }
        else {
            $($wizard).find(this.nextSelector).show();
            $($wizard).find(this.finishSelector).hide();
        }
        //update progress
        var move_distance = 100 / $total;
        move_distance = move_distance * (currentIndex) + move_distance / 2;
        $wizard.find($('.progress-bar')).css({ width: move_distance + '%' });
        $wizard.find($('.wizard-card .nav-pills li.active a .icon-circle')).addClass('checked');
        if (this.onTabShow) {
            this.onTabShow(tab, navigation, currentIndex);
        }
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], WizardComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], WizardComponent.prototype, "indexChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], WizardComponent.prototype, "steps", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], WizardComponent.prototype, "enableTabChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], WizardComponent.prototype, "enableForwardTabChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], WizardComponent.prototype, "enableBackwardTabChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WizardComponent.prototype, "tabClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WizardComponent.prototype, "nextSelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WizardComponent.prototype, "previousSelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WizardComponent.prototype, "finishSelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WizardComponent.prototype, "firstSelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WizardComponent.prototype, "lastSelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], WizardComponent.prototype, "onInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], WizardComponent.prototype, "onTabShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], WizardComponent.prototype, "onTabClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], WizardComponent.prototype, "onShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], WizardComponent.prototype, "onNext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], WizardComponent.prototype, "onPrevious", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], WizardComponent.prototype, "onLast", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], WizardComponent.prototype, "onFirst", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], WizardComponent.prototype, "onTabChange", void 0);
    WizardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wizard',
            template: __webpack_require__("./src/app/components/shared/wizard/wizard.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ }),

/***/ "./src/app/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_directive__ = __webpack_require__("./src/app/directives/tooltip.directive.ts");
/* unused harmony namespace reexport */


var APP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__tooltip_directive__["a" /* TooltipDirective */]
];


/***/ }),

/***/ "./src/app/directives/tooltip.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipDirective = (function () {
    function TooltipDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.placement = 'top';
    }
    TooltipDirective.prototype.ngOnInit = function () {
        this.renderer.setAttribute(this.el.nativeElement, 'data-original-title', this.tooltip);
        this.renderer.setAttribute(this.el.nativeElement, 'rel', 'tooltip');
        this.renderer.setAttribute(this.el.nativeElement, 'data-placement', this.placement);
        $(this.el.nativeElement).tooltip();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "placement", void 0);
    TooltipDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[tooltip]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_PIPES; });
var APP_PIPES = [];


/***/ }),

/***/ "./src/app/services/base/base-initable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseInitableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_service__ = __webpack_require__("./src/app/services/core/utils.service.ts");

var BaseInitableService = (function () {
    function BaseInitableService() {
        this.initialized = false;
        this.initializing = false;
        this.stopping = false;
        this.subscriptions = [];
        this.preInitObservables = [];
        this.preInitCbs = [];
    }
    BaseInitableService.prototype.init = function () {
        var _this = this;
        this.log('init');
        if (this.initialized) {
            this.log('Already initialized - canceling');
            return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFromEmpty();
        }
        if (this.initializing) {
            this.log('Already initializing - canceling');
            return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFromEmpty();
        }
        if (!this.initCheck()) {
            this.log('initCheck not passed - canceling');
            return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFromEmpty();
        }
        this.initializing = true;
        return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFromCb(function (done) {
            _this.initImpl().subscribe(function () {
                _this.log("init DONE with " + _this.preInitObservables.length + " pre init observables and " + _this.preInitCbs.length + " pre init cbs");
                _this.initialized = true;
                _this.initializing = false;
                _this.preInitObservables.forEach(function (obs) { return obs.observable().subscribe(function (r) { return obs.done(true, r); }); });
                _this.preInitCbs.forEach(function (obs) { return obs.done(true, obs.cb()); });
                done(true);
            }, function (error) {
                _this.log('init FAIL', true);
                _this.log(error, true);
                _this.initializing = false;
                done(false, error);
            });
        });
    };
    BaseInitableService.prototype.stop = function () {
        var _this = this;
        this.log('stop');
        if (!this.initialized) {
            this.log('Not initialized - canceling');
            return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFromEmpty();
        }
        if (this.stopping) {
            this.log('Already stopping - canceling');
            return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFromEmpty();
        }
        if (!this.stopCheck()) {
            this.log('initCheck fail - canceling');
            return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFromEmpty();
        }
        this.stopping = true;
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFromCb(function (done) {
            _this.stopImpl().subscribe(function () {
                _this.log('stop DONE');
                _this.stopping = false;
                _this.initialized = false;
                done(true);
            }, function (error) {
                _this.log('stop FAIL', true);
                _this.log(error, true);
                _this.stopping = false;
                done(false, error);
            });
        });
    };
    BaseInitableService.prototype.ensureInitedObservableFromCb = function (cb) {
        var _this = this;
        if (this.initialized) {
            return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFrom(cb());
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */].observableFromCb(function (done) {
                _this.preInitCbs.push({ done: done, cb: cb });
            });
        }
    };
    BaseInitableService.prototype.ensureInitedFromCb = function (cb) {
        if (this.initialized) {
            cb();
        }
        else {
            this.preInitCbs.push({ cb: cb, done: function () { } });
        }
    };
    BaseInitableService.prototype.initCheck = function () {
        return true;
    };
    BaseInitableService.prototype.stopCheck = function () {
        return true;
    };
    return BaseInitableService;
}());



/***/ }),

/***/ "./src/app/services/core/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base_initable_service__ = __webpack_require__("./src/app/services/base/base-initable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_service__ = __webpack_require__("./src/app/services/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_service__ = __webpack_require__("./src/app/services/core/logger.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppService = (function (_super) {
    __extends(AppService, _super);
    function AppService(loggerService) {
        var _this = _super.call(this) || this;
        _this.loggerService = loggerService;
        return _this;
    }
    AppService.prototype.initImpl = function () {
        var _this = this;
        var initSubscriptions = [];
        return __WEBPACK_IMPORTED_MODULE_2__utils_service__["a" /* UtilsService */].observableFromCb(function (done) {
            _this.initSubscriptionBatch(initSubscriptions, 0, function () { return done(true); });
        });
    };
    AppService.prototype.stopImpl = function () {
        var stopSubscriptions = [];
        return __WEBPACK_IMPORTED_MODULE_2__utils_service__["a" /* UtilsService */].observableFromObservables(stopSubscriptions);
    };
    AppService.prototype.log = function (message, isError) {
        if (isError === void 0) { isError = false; }
        this.loggerService.debugOrError('[S]APP', message, isError);
    };
    AppService.prototype.initSubscriptionBatch = function (initSubscriptions, index, doneCb) {
        var _this = this;
        var batch = initSubscriptions.map(function (s) { return s[index]; }).filter(function (e) { return !!e; });
        if (batch.length) {
            this.log('initializing batch ' + index);
            __WEBPACK_IMPORTED_MODULE_2__utils_service__["a" /* UtilsService */].observableFromObservables(batch.map(function (s) { return s.init(); })).subscribe(function () { return _this.initSubscriptionBatch(initSubscriptions, index + 1, doneCb); });
        }
        else {
            this.log('initializing done');
            doneCb();
        }
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* LoggerService */]])
    ], AppService);
    return AppService;
}(__WEBPACK_IMPORTED_MODULE_1__base_base_initable_service__["a" /* BaseInitableService */]));



/***/ }),

/***/ "./src/app/services/core/datetime.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateTimeService = (function () {
    function DateTimeService() {
    }
    DateTimeService_1 = DateTimeService;
    DateTimeService.formatFullDateFromString = function (date, showYears, defaultIfNull) {
        if (showYears === void 0) { showYears = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (date) {
            var dt = new Date(date);
            return DateTimeService_1.formatFullDateFromDate(dt, showYears, defaultIfNull);
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatDateFromString = function (date, showYears, defaultIfNull) {
        if (showYears === void 0) { showYears = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (date) {
            var dt = new Date(date);
            return DateTimeService_1.formatDateFromDate(dt, showYears, defaultIfNull);
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatDateFromNumber = function (date, showYears, defaultIfNull) {
        if (showYears === void 0) { showYears = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (date) {
            var dt = new Date(date);
            return DateTimeService_1.formatDateFromDate(dt, showYears, defaultIfNull);
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatDateFromDate = function (date, showYears, defaultIfNull) {
        if (showYears === void 0) { showYears = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (date) {
            var month = date.getMonth() + 1;
            if (month < 10) {
                month = '0' + month;
            }
            var day = date.getDate();
            if (day < 10) {
                day = '0' + day;
            }
            if (showYears) {
                return "" + month + DateTimeService_1.DATE_DIVIDER + day + DateTimeService_1.DATE_DIVIDER + date.getFullYear().toString();
            }
            return "" + month + DateTimeService_1.DATE_DIVIDER + day + DateTimeService_1.DATE_DIVIDER;
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatFullDateFromDate = function (date, showYears, defaultIfNull) {
        if (showYears === void 0) { showYears = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (date) {
            var month = date.getMonth();
            var day = date.getDate();
            var weekDay = date.getDay();
            if (showYears) {
                return DateTimeService_1.DAYS_OF_WEEK[weekDay] + ", " + DateTimeService_1.MONTHS[month] + " " + day + ", " + date.getFullYear().toString();
            }
            return DateTimeService_1.DAYS_OF_WEEK[weekDay] + ", " + DateTimeService_1.MONTHS[month] + " " + day;
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatTimeFromString = function (date, showSeconds, defaultIfNull, midnightSystem) {
        if (showSeconds === void 0) { showSeconds = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (midnightSystem === void 0) { midnightSystem = true; }
        if (date) {
            var dt = new Date(date);
            return DateTimeService_1.formatTimeFromDate(dt, showSeconds, defaultIfNull, midnightSystem);
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatTimeFromNumber = function (date, showSeconds, defaultIfNull, midnightSystem) {
        if (showSeconds === void 0) { showSeconds = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (midnightSystem === void 0) { midnightSystem = true; }
        if (date) {
            var dt = new Date(date);
            return DateTimeService_1.formatTimeFromDate(dt, showSeconds, defaultIfNull, midnightSystem);
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatTimeFromDate = function (date, showSeconds, defaultIfNull, midnightSystem) {
        if (showSeconds === void 0) { showSeconds = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (midnightSystem === void 0) { midnightSystem = false; }
        if (date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var timeString = "" + hours + DateTimeService_1.TIME_DIVIDER + minutes;
            if (showSeconds) {
                var seconds = date.getSeconds();
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                timeString = timeString + ("" + DateTimeService_1.TIME_DIVIDER + seconds);
            }
            if (midnightSystem) {
                var mid = 'AM';
                if (!hours) {
                    hours = 12;
                }
                else if (hours > 12) {
                    mid = 'PM';
                    hours -= 12;
                }
                timeString = timeString + (" " + mid);
            }
            return timeString;
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatDateTimeFromString = function (date, showYears, showSeconds, defaultIfNull) {
        if (showYears === void 0) { showYears = true; }
        if (showSeconds === void 0) { showSeconds = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (date) {
            var dt = new Date(date);
            return DateTimeService_1.formatDateTimeFromDate(dt, showYears, showSeconds, defaultIfNull);
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatDateTimeFromNumber = function (date, showYears, showSeconds, defaultIfNull) {
        if (showYears === void 0) { showYears = true; }
        if (showSeconds === void 0) { showSeconds = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (date) {
            var dt = new Date(date);
            return this.formatDateTimeFromDate(dt, showYears, showSeconds, defaultIfNull);
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.formatDateTimeFromDate = function (date, showYears, showSeconds, defaultIfNull, midnightSystem) {
        if (showYears === void 0) { showYears = true; }
        if (showSeconds === void 0) { showSeconds = true; }
        if (defaultIfNull === void 0) { defaultIfNull = true; }
        if (midnightSystem === void 0) { midnightSystem = true; }
        if (date) {
            return DateTimeService_1.formatDateFromDate(date, showYears, defaultIfNull) + " " + DateTimeService_1.formatTimeFromDate(date, showSeconds, defaultIfNull, midnightSystem);
        }
        else if (defaultIfNull) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
    };
    DateTimeService.createDateFromString = function (date) {
        return new Date(date);
    };
    DateTimeService.getMonthFromNumber = function (month) {
        return DateTimeService_1.getMonthFromDate(new Date(2017, month));
    };
    DateTimeService.getMonthFromDate = function (date) {
        return date.toLocaleString('un-us', { month: 'long' });
    };
    DateTimeService.convertToLocalDate = function (utcDate) {
        if (!utcDate) {
            return;
        }
        var localDate = new Date(utcDate);
        localDate.setMinutes(utcDate.getMinutes() - localDate.getTimezoneOffset());
        return localDate;
    };
    DateTimeService.convertToUtcDate = function (date, includeTime) {
        if (includeTime === void 0) { includeTime = true; }
        if (!date) {
            return;
        }
        if (includeTime) {
            return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes() + date.getTimezoneOffset(), date.getUTCSeconds(), date.getUTCMilliseconds()));
        }
        return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    };
    DateTimeService.formatServerDateTime = function (date, includeTime) {
        if (includeTime === void 0) { includeTime = false; }
        if (!date) {
            return DateTimeService_1.DEFAULT_VALUE;
        }
        var result = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        if (includeTime) {
            var hours = date.getHours();
            var mid = 'AM';
            if (!hours) {
                hours = 12;
            }
            else if (hours > 12) {
                mid = 'PM';
                hours -= 12;
            }
            result += " " + hours + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + mid;
        }
        return result;
    };
    DateTimeService.getUtcTodayDate = function () {
        var now = new Date();
        var todayUTCDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
        return todayUTCDate;
    };
    DateTimeService.jsonDateParser = function (key, value) {
        if (typeof value === 'string') {
            if (DateTimeService_1.ISO_DATE_REGEX.exec(value)) {
                return new Date(value);
            }
        }
        return value;
    };
    DateTimeService.formatDiffToElapsed = function (diff) {
        var hours = Math.floor(diff.asHours());
        var minutes = Math.floor(diff.asMinutes());
        minutes -= hours * 60;
        var seconds = Math.floor(diff.asSeconds());
        seconds -= (hours * 60 * 60) + (minutes * 60);
        return "" + (hours !== 0 ? hours + ':' : '') + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    };
    DateTimeService.DEFAULT_VALUE = '';
    DateTimeService.DATE_DIVIDER = '/';
    DateTimeService.TIME_DIVIDER = ':';
    DateTimeService.DATE_FORMAT = "MM" + DateTimeService_1.DATE_DIVIDER + "dd";
    DateTimeService.DATE_FORMAT_FULL = "MM" + DateTimeService_1.DATE_DIVIDER + "dd" + DateTimeService_1.DATE_DIVIDER + "yyyy";
    DateTimeService.TIME_FORMAT = "HH" + DateTimeService_1.TIME_DIVIDER + "mm";
    DateTimeService.TIME_FORMAT_FULL = "HH" + DateTimeService_1.TIME_DIVIDER + "mm" + DateTimeService_1.TIME_DIVIDER + "ss";
    DateTimeService.DATE_TIME_FORMAT = DateTimeService_1.DATE_FORMAT + " " + DateTimeService_1.TIME_FORMAT;
    DateTimeService.DATE_TIME_FORMAT_FULL = DateTimeService_1.DATE_FORMAT_FULL + " " + DateTimeService_1.TIME_FORMAT_FULL;
    DateTimeService.DATE_TIME_FORMAT_FULL_MS = DateTimeService_1.DATE_FORMAT_FULL + " " + DateTimeService_1.TIME_FORMAT_FULL + ".fff";
    DateTimeService.DATE_TIME_FORMAT_FULL_DATE = DateTimeService_1.DATE_FORMAT_FULL + " " + DateTimeService_1.TIME_FORMAT;
    DateTimeService.DATE_TIME_FORMAT_FULL_TIME = DateTimeService_1.DATE_FORMAT + " " + DateTimeService_1.TIME_FORMAT_FULL;
    DateTimeService.DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    DateTimeService.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    DateTimeService.ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
    DateTimeService = DateTimeService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DateTimeService);
    return DateTimeService;
    var DateTimeService_1;
}());



/***/ }),

/***/ "./src/app/services/core/grid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridService = (function () {
    function GridService() {
    }
    GridService.sort = function (arr, currentSort, sortBy, allowedVals) {
        if (!allowedVals[sortBy]) {
            return null;
        }
        var compare = function (a, b) { return a - b; };
        if (typeof (allowedVals[sortBy](arr[0])) === typeof ('string')) {
            compare = function (a, b) { return a.localeCompare(b); };
        }
        if (currentSort === sortBy + '-a') {
            arr.sort(function (a, b) { return compare(allowedVals[sortBy](b), allowedVals[sortBy](a)); });
            return sortBy + '-d';
        }
        else {
            arr.sort(function (a, b) { return compare(allowedVals[sortBy](a), allowedVals[sortBy](b)); });
            return sortBy + '-a';
        }
    };
    GridService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GridService);
    return GridService;
}());



/***/ }),

/***/ "./src/app/services/core/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__identity_service__ = __webpack_require__("./src/app/services/core/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service__ = __webpack_require__("./src/app/services/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpService = (function () {
    function HttpService(http, identityService, loggerService) {
        this.http = http;
        this.identityService = identityService;
        this.loggerService = loggerService;
    }
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        if (options === void 0) { options = null; }
        var opts = this.buildOptions(options);
        this.log('GET -> ' + url);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'api/' + url, opts)
            .map(function (res) {
            _this.log('GET SUCCESS -> ' + url);
            return _this.extractData(res);
        })
            .catch(function (err) {
            _this.log('GET ERROR -> ' + url);
            return _this.handleError(err);
        });
    };
    HttpService.prototype.post = function (url, data, options) {
        var _this = this;
        if (options === void 0) { options = null; }
        var opts = this.buildOptions(options);
        this.log('POST -> ' + url);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + 'api/' + url, data, opts)
            .map(function (res) {
            _this.log('POST SUCCESS -> ' + url);
            return _this.extractData(res);
        })
            .catch(function (err) {
            _this.log('POST ERROR -> ' + url);
            _this.loggerService.debug(err);
            return _this.handleError(err);
        });
    };
    HttpService.prototype.extractData = function (res) {
        if (res.text()) {
            var body = res.json();
            if (body && body.data) {
                return body.data;
            }
            return body;
        }
        return res;
    };
    HttpService.prototype.handleError = function (error) {
        if (!error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('An unknown error has occurred.');
        }
        var errMsg = '';
        if (error.text) {
            errMsg = error.text();
            if (errMsg) {
                try {
                    var parsed = JSON.parse(errMsg);
                    if (parsed) {
                        var keys = Object.getOwnPropertyNames(parsed);
                        if (keys.length) {
                            var message = parsed[keys[0]];
                            if (typeof (message) === 'string') {
                                errMsg = message;
                            }
                            else if (typeof (message) === 'object' && message.length) {
                                errMsg = message[0];
                            }
                            else if (message) {
                                errMsg = message;
                            }
                        }
                    }
                }
                catch (e) {
                    // No need errMsg to be parsed
                }
            }
        }
        else {
            errMsg = error.message || error.status || error.statusText;
        }
        this.loggerService.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    HttpService.prototype.buildOptions = function (options) {
        options = options || {};
        options.headers = options.headers || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (!options.headers.has('Content-Type')) {
            options.headers.append('Content-Type', 'application/json');
        }
        var address = this.identityService.getAddress();
        if (address) {
            options.headers.set('User', address);
        }
        return options;
    };
    HttpService.prototype.log = function (message, isError) {
        if (isError === void 0) { isError = false; }
        this.loggerService.debugOrError('[S]HTTP', message, isError);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__identity_service__["a" /* IdentityService */],
            __WEBPACK_IMPORTED_MODULE_4__logger_service__["a" /* LoggerService */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/core/identity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__("./src/app/services/core/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__("./src/app/services/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_service__ = __webpack_require__("./src/app/services/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_service__ = __webpack_require__("./src/app/services/core/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IdentityService = (function () {
    function IdentityService(loggerService, storageService) {
        this.loggerService = loggerService;
        this.storageService = storageService;
    }
    IdentityService_1 = IdentityService;
    IdentityService.prototype.tempToggleLogin = function () {
        if (this.address) {
            this.removeAddress();
        }
        else {
            this.setAddress('0x0000000000000000000000000000000000000000');
        }
    };
    IdentityService.prototype.isLoggedIn = function () {
        return !!this.getAddress();
    };
    IdentityService.prototype.getAddress = function () {
        if (!this.address) {
            var persistedDisplayName = this.storageService.getItem(IdentityService_1.ADDRESS_KEY);
            if (persistedDisplayName) {
                this.address = persistedDisplayName;
            }
        }
        return this.address;
    };
    IdentityService.prototype.setAddress = function (address) {
        this.address = address.toLowerCase();
        this.storageService.setItem(IdentityService_1.ADDRESS_KEY, this.address);
        window.location.href = '/';
    };
    IdentityService.prototype.removeAddress = function () {
        this.address = null;
        this.storageService.removeItem(IdentityService_1.ADDRESS_KEY);
        window.location.href = '/';
    };
    IdentityService.prototype.getPk = function () {
        // TODO: Dynamic?
        this.pwd = '0x01759e83dfae7067a1151233e52092e75b58b14e7fa5f92ddc5c999235d6ba48';
        return __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */].observableFrom(this.pwd);
    };
    IdentityService.prototype.setPwd = function (pwd) {
        var _this = this;
        this.pwd = pwd;
        var activeTo = new Date();
        activeTo.setHours(activeTo.getHours() + 2);
        this.pwdActiveTo = activeTo;
        this.pwdCleanHandle = setTimeout(function () { return _this.removePwd(); }, 1000 * 60 * 60 * 2); // 2 hours
    };
    IdentityService.prototype.isUnlocked = function () {
        if (this.pwd) {
            if (this.pwdActiveTo < new Date()) {
                this.removePwd();
            }
            else {
                return true;
            }
        }
        return false;
    };
    IdentityService.prototype.getPwd = function () {
        var _this = this;
        if (this.isUnlocked()) {
            return __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */].observableFrom(this.pwd);
        }
        else {
            return this.promptPwd().catch(function () {
                __WEBPACK_IMPORTED_MODULE_4__notifications_service__["a" /* NotificationsService */].error('Invalid password');
                return _this.promptPwd();
            });
        }
    };
    IdentityService.prototype.promptPwd = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */].observableFromCb(function (done) { return __WEBPACK_IMPORTED_MODULE_4__notifications_service__["a" /* NotificationsService */].prompt(null, 'Please input your password', function (val) {
            if (_this.validatePwd(val)) {
                _this.setPwd(val);
                done(true, val);
            }
            else {
                done(false, null);
            }
        }, null, function (val) {
            if (!val) {
                return 'Password is required';
            }
        }, 'password', 'Password'); });
    };
    IdentityService.prototype.removeAll = function () {
        this.removePwd();
        this.removeAddress();
    };
    IdentityService.prototype.withPasswordCb = function (cb) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */].observableFromCb(function (done) {
            _this.getPwd().subscribe(function (pwd) {
                done(true, cb(pwd));
            });
        });
    };
    IdentityService.prototype.withPasswordObs = function (obs) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */].observableFromCb(function (done) {
            _this.getPwd().subscribe(function (pwd) {
                obs(pwd).subscribe(function (r) {
                    done(true, r);
                });
            });
        });
    };
    IdentityService.prototype.removePwd = function () {
        if (this.pwdCleanHandle) {
            clearTimeout(this.pwdCleanHandle);
        }
        this.pwd = null;
        this.pwdActiveTo = null;
        this.pwdCleanHandle = null;
    };
    IdentityService.prototype.validatePwd = function (pwd) {
        // TODO: Is this possible? Try to sign something and validate ?
        return !!pwd;
    };
    IdentityService.prototype.log = function (message, isError) {
        if (isError === void 0) { isError = false; }
        this.loggerService.debugOrError('[S]IDENTITY', message, isError);
    };
    IdentityService.ADDRESS_KEY = 'ADDRESS_KEY';
    IdentityService = IdentityService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* LoggerService */],
            __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]])
    ], IdentityService);
    return IdentityService;
    var IdentityService_1;
}());



/***/ }),

/***/ "./src/app/services/core/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoaderService = (function () {
    function LoaderService() {
    }
    LoaderService_1 = LoaderService;
    LoaderService.show = function () {
        if (LoaderService_1.value === false) {
            LoaderService_1.value = true;
            LoaderService_1.onToggle.emit(true);
            // $('#loaderwrapper').show();
            // $('#appwrapper').hide();
        }
    };
    LoaderService.hide = function () {
        if (LoaderService_1.value === true) {
            LoaderService_1.value = false;
            LoaderService_1.onToggle.emit(false);
            // $('#loaderwrapper').hide();
            // $('#appwrapper').show();
        }
    };
    LoaderService.showFor = function (ms) {
        if (LoaderService_1.value === false) {
            LoaderService_1.show();
            setTimeout(function () { return LoaderService_1.hide(); }, ms);
        }
    };
    LoaderService.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    LoaderService.value = false;
    LoaderService = LoaderService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoaderService);
    return LoaderService;
    var LoaderService_1;
}());



/***/ }),

/***/ "./src/app/services/core/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datetime_service__ = __webpack_require__("./src/app/services/core/datetime.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoggerService = (function () {
    function LoggerService() {
    }
    // public log(message: any): void {
    //     console.log(this.format(message));
    // }
    // 
    // public logWithColor(message: any, color: string = '#3F73F8') {
    //     console.log('%c' + this.format(message), 'color:' + color + ';');
    // }
    LoggerService.prototype.debug = function (message) {
        console.log(this.format(message));
    };
    LoggerService.prototype.debugWithColor = function (message, color) {
        if (color === void 0) { color = '#3F73F8'; }
        console.log('%c' + this.format(message), 'color:' + color + ';');
    };
    LoggerService.prototype.error = function (message) {
        console.warn(this.format(message));
    };
    LoggerService.prototype.debugOrError = function (logger, message, isError) {
        if (isError === void 0) { isError = false; }
        this[isError ? 'error' : 'debug'](logger + ' # ' + message);
    };
    LoggerService.prototype.format = function (message) {
        var date = __WEBPACK_IMPORTED_MODULE_1__datetime_service__["a" /* DateTimeService */].convertToUtcDate(new Date());
        var time = __WEBPACK_IMPORTED_MODULE_1__datetime_service__["a" /* DateTimeService */].formatTimeFromDate(date, true);
        time = time.substring(0, time.length - 3); // Remove _AM/_PM
        var ms = date.getMilliseconds().toString();
        if (ms.length === 2) {
            ms = '0' + ms;
        }
        else if (ms.length === 1) {
            ms = '00' + ms;
        }
        return "[" + time + "." + ms + "] " + message;
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/services/core/notifications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsService = (function () {
    function NotificationsService() {
    }
    NotificationsService_1 = NotificationsService;
    NotificationsService.success = function (text, cb, title, timeout) {
        if (cb === void 0) { cb = null; }
        if (title === void 0) { title = 'SUCCESS'; }
        if (timeout === void 0) { timeout = 2000; }
        NotificationsService_1.buildAlert('success', title, text, null, timeout);
    };
    NotificationsService.successTx = function (text, txs, cb, title, timeout) {
        if (cb === void 0) { cb = null; }
        if (title === void 0) { title = 'SUCCESS'; }
        if (timeout === void 0) { timeout = 2000; }
        NotificationsService_1.buildAlert('success', title, text, txs, timeout);
    };
    NotificationsService.error = function (text, cb, title, timeout) {
        if (cb === void 0) { cb = null; }
        if (title === void 0) { title = 'ERROR'; }
        if (timeout === void 0) { timeout = 2000; }
        NotificationsService_1.buildAlert('danger', title, text, null, timeout);
    };
    NotificationsService.warning = function (text, cb, title, timeout) {
        if (cb === void 0) { cb = null; }
        if (title === void 0) { title = 'WARNING'; }
        if (timeout === void 0) { timeout = 2000; }
        NotificationsService_1.buildAlert('warning', title, text, null, timeout);
    };
    NotificationsService.confirm = function (html, successCb, failCb, title, confirmButtonText, cancelButtonText) {
        if (failCb === void 0) { failCb = null; }
        if (title === void 0) { title = 'CONFIRMATION'; }
        if (confirmButtonText === void 0) { confirmButtonText = 'YES'; }
        if (cancelButtonText === void 0) { cancelButtonText = 'NO'; }
        NotificationsService_1.confirmSwal(html, successCb, failCb, title, confirmButtonText, cancelButtonText);
    };
    NotificationsService.prompt = function (html, title, confirmCb, cancelCb, validateCb, inputType, inputPlaceholder, confirmButtonText, cancelButtonText, showCancelButton) {
        if (inputType === void 0) { inputType = 'text'; }
        if (inputPlaceholder === void 0) { inputPlaceholder = null; }
        if (confirmButtonText === void 0) { confirmButtonText = 'DONE'; }
        if (cancelButtonText === void 0) { cancelButtonText = 'CANCEL'; }
        if (showCancelButton === void 0) { showCancelButton = true; }
        NotificationsService_1.promptSwal(html, title, confirmCb, cancelCb, validateCb, inputType, inputPlaceholder, confirmButtonText, cancelButtonText, showCancelButton);
    };
    NotificationsService.buildAlert = function (type, title, message, txs, timeout) {
        if (timeout === void 0) { timeout = 2000; }
        var urlsMarkup = '';
        if (txs && txs.length) {
            txs.forEach(function (t) { return urlsMarkup += "<p><a href=\"https://etherscan/tx/" + t + "\" target=\"_blank\">View transaction</a><p>"; });
        }
        $('body').append($("\n<div class=\"notification alert alert-" + type + "\" style=\"position:fixed; bottom:0%; width:100%\">\n    <div class=\"container\">\n        <div class=\"alert-icon\">\n            <i class=\"material-icons\">" + type + "_outline</i>\n        </div>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span>\n        </button>\n        <b>" + title + "</b> " + message + "\n        " + urlsMarkup + "\n    </div>\n</div>\n"));
        if (timeout) {
            setTimeout(function () { return $('.notification.alert button.close').click(); }, timeout);
        }
    };
    // swal
    NotificationsService.successSwal = function (text, cb, title) {
        if (cb === void 0) { cb = null; }
        if (title === void 0) { title = 'Success'; }
        if (cb) {
            swal({
                title: title,
                text: text,
                type: 'success'
            }).then(cb);
        }
        else {
            swal(title, text, 'success');
        }
    };
    NotificationsService.errorSwal = function (text, cb, title) {
        if (cb === void 0) { cb = null; }
        if (title === void 0) { title = 'Error'; }
        if (cb) {
            swal({
                title: title,
                text: text,
                type: 'error'
            }).then(cb);
        }
        else {
            swal(title, text, 'error');
        }
    };
    NotificationsService.warningSwal = function (text, cb, title, allowEscapeKey, allowOutsideClick) {
        if (cb === void 0) { cb = null; }
        if (title === void 0) { title = 'Warning'; }
        if (allowEscapeKey === void 0) { allowEscapeKey = true; }
        if (allowOutsideClick === void 0) { allowOutsideClick = false; }
        if (cb) {
            swal({
                title: title,
                text: text,
                type: 'warning',
                allowEscapeKey: allowEscapeKey,
                allowOutsideClick: allowOutsideClick
            }).then(cb);
        }
        else {
            swal({
                title: title,
                text: text,
                type: 'warning',
                allowEscapeKey: allowEscapeKey,
                allowOutsideClick: allowOutsideClick
            });
        }
    };
    NotificationsService.confirmSwal = function (html, successCb, failCb, title, confirmButtonText, cancelButtonText) {
        if (failCb === void 0) { failCb = null; }
        if (title === void 0) { title = 'Confirmation'; }
        if (confirmButtonText === void 0) { confirmButtonText = 'Yes'; }
        if (cancelButtonText === void 0) { cancelButtonText = 'No'; }
        swal({
            title: title,
            html: html,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            confirmButtonClass: 'btn btn-primary',
            cancelButtonClass: 'btn btn-default',
            buttonsStyling: false
        }).then(function () {
            if (successCb) {
                successCb();
            }
        }, function () {
            if (failCb) {
                failCb();
            }
        });
    };
    NotificationsService.promptSwal = function (html, title, confirmCb, cancelCb, validateCb, inputType, inputPlaceholder, confirmButtonText, cancelButtonText, showCancelButton) {
        if (inputType === void 0) { inputType = 'text'; }
        if (inputPlaceholder === void 0) { inputPlaceholder = null; }
        if (confirmButtonText === void 0) { confirmButtonText = 'Done'; }
        if (cancelButtonText === void 0) { cancelButtonText = 'Cancel'; }
        if (showCancelButton === void 0) { showCancelButton = true; }
        var opts = {
            html: html,
            title: title,
            input: inputType,
            inputPlaceholder: inputPlaceholder,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            showCancelButton: true,
            confirmButtonClass: 'btn btn-primary',
            cancelButtonClass: 'btn btn-default',
            buttonsStyling: false
        };
        if (validateCb) {
            opts.preConfirm = function (val) {
                return new Promise(function (resolve, reject) {
                    var err = validateCb(val);
                    if (err) {
                        swal.showValidationError(err);
                        reject(err);
                    }
                    else {
                        resolve(val);
                    }
                });
            };
        }
        confirmCb = confirmCb || (function (v) { });
        cancelCb = cancelCb || (function (v) { });
        swal(opts).then(function (val) { return confirmCb(val); }, function (dismiss) { return cancelCb(dismiss); });
    };
    NotificationsService.customBootstrapNotify = function (title, message, type, url, icon) {
        if (type === void 0) { type = 'sucess'; }
        if (url === void 0) { url = null; }
        if (icon === void 0) { icon = null; }
        var opts = {
            title: title,
            message: message
        };
        if (icon) {
            opts.icon = icon;
        }
        if (url) {
            opts.url = url;
            opts.target = '_blank';
        }
        var settings = {
            element: 'body',
            position: null,
            type: type,
            allow_dismiss: true,
            newest_on_top: true,
            showProgressbar: false,
            placement: {
                from: 'top',
                align: 'right'
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 1000,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        };
        $.notify(opts, settings);
    };
    NotificationsService.getToastrOpts = function () {
        var opts = {
            closeButton: true,
            progressBar: true,
            debug: false,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            escapeHtml: true,
            showDuration: 333,
            hideDuration: 333,
            timeOut: 2500,
            extendedTimeOut: 5000,
            showEasing: 'swing',
            hideEasing: 'swing',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
        };
        return opts;
    };
    NotificationsService = NotificationsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
    var NotificationsService_1;
}());



/***/ }),

/***/ "./src/app/services/core/router.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service__ = __webpack_require__("./src/app/services/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_service__ = __webpack_require__("./src/app/services/core/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RouterService = (function () {
    function RouterService(router, location, injector, loggerService) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.injector = injector;
        this.loggerService = loggerService;
        this.routes = {};
        this.onStart = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.onEnd = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.router.events.subscribe(function (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
                _this.routes[e.url] = true;
                _this.onStart.next(true);
            }
            else if (e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */] || e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationCancel */] || e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationError */]) {
                delete _this.routes[e.url];
                if (Object.getOwnPropertyNames(_this.routes).length === 0) {
                    _this.onEnd.next(true);
                }
            }
        });
    }
    RouterService.prototype._getRouteKey = function (key) {
        return this._getRoute().snapshot.params[key];
    };
    RouterService.prototype._getRoute = function () {
        return this.injector.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]);
    };
    RouterService.prototype.changeLocationWithoutChangingRoute = function (path) {
        this.log('changeLocationWithoutChangingRoute -> ' + path);
        this.location.go(path);
    };
    RouterService.prototype.locationReplaceState = function (path) {
        this.location.replaceState(path);
    };
    RouterService.prototype.goHome = function () {
        this.navigate(['']);
    };
    RouterService.prototype.subscribeOnStart = function (observerOrNext) {
        return this.onStart.subscribe(observerOrNext);
    };
    RouterService.prototype.subscribeOnEnd = function (observerOrNext) {
        return this.onEnd.subscribe(observerOrNext);
    };
    RouterService.prototype.navigateByUrl = function (url) {
        this.router.navigateByUrl(url);
    };
    RouterService.prototype.navigate = function (commands) {
        __WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */].showFor(2000);
        this.router.navigate(commands, { replaceUrl: true });
    };
    RouterService.prototype.navigateToMarket = function (market) {
        this.navigate(['exchange', market]);
    };
    RouterService.prototype.getUrl = function () {
        return this.router.url;
    };
    RouterService.prototype.getFullUrl = function () {
        return location.href;
    };
    RouterService.prototype.log = function (message, isError) {
        if (isError === void 0) { isError = false; }
        this.loggerService.debugOrError('[S]ROUTER', message, isError);
    };
    RouterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_4__logger_service__["a" /* LoggerService */]])
    ], RouterService);
    return RouterService;
}());



/***/ }),

/***/ "./src/app/services/core/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    StorageService.prototype.getObject = function (key) {
        var obj = localStorage.getItem(key);
        if (obj) {
            return JSON.parse(obj);
        }
    };
    StorageService.prototype.getBool = function (key) {
        var val = localStorage.getItem(key);
        if (val && val.toUpperCase() === 'TRUE') {
            return true;
        }
        if (val && val.toUpperCase() === 'FALSE') {
            return false;
        }
        return null;
    };
    StorageService.prototype.getNumber = function (key) {
        var val = localStorage.getItem(key);
        if (val) {
            return parseInt(val);
        }
    };
    StorageService.prototype.getArray = function (key) {
        return JSON.parse(localStorage.getItem(key) || '[]');
    };
    StorageService.prototype.setItem = function (key, data) {
        if (data && typeof data !== 'string') {
            if (typeof data === 'object') {
                data = JSON.stringify(data);
            }
            else {
                data = data.toString();
            }
        }
        localStorage.setItem(key, data);
    };
    StorageService.prototype.removeItem = function (key) {
        return localStorage.removeItem(key);
    };
    StorageService.prototype.removeAllWithKeyContaining = function (key, isCaseSensitive) {
        if (isCaseSensitive === void 0) { isCaseSensitive = true; }
        if (!key) {
            return;
        }
        var length = localStorage.length;
        for (var i = 0; i < length; i += 1) {
            var currentKey = localStorage.key(0);
            if (!isCaseSensitive) {
                currentKey = currentKey.toLowerCase();
                key = key.toLowerCase();
            }
            if (currentKey.indexOf(key) >= 0) {
                localStorage.removeItem(currentKey);
            }
        }
    };
    StorageService.prototype.clear = function () {
        localStorage.clear();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/core/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService_1 = UtilsService;
    UtilsService.mergeObjects = function (source, destination, properties) {
        if (properties === void 0) { properties = null; }
        if (source && destination) {
            if (!properties || !properties.length) {
                properties = Object.getOwnPropertyNames(source);
            }
            properties.forEach(function (prop) { return destination[prop] = source[prop]; });
        }
        return destination;
    };
    UtilsService.concatObjects = function (source, destination, sourcePropName, destinationPropName) {
        if (!source || !destination) {
            return source || destination;
        }
        var res = {};
        Object.getOwnPropertyNames(source).forEach(function (k) {
            if (destination[k]) {
                res[k] = {};
                res[k][sourcePropName] = source[k];
                res[k][destinationPropName] = destination[k];
            }
        });
        return res;
    };
    UtilsService.generateNonce = function () {
        return new Date().getTime() + Math.random().toFixed(19).toString().substring(2);
    };
    UtilsService.arrayFromObject = function (obj, skippedProps) {
        if (skippedProps === void 0) { skippedProps = null; }
        if (obj) {
            if (skippedProps && skippedProps.length) {
                return Object.getOwnPropertyNames(obj).filter(function (prop) { return skippedProps.indexOf(prop) < 0; }).map(function (p) { return obj[p]; });
            }
            else {
                return Object.getOwnPropertyNames(obj).map(function (p) { return obj[p]; });
            }
        }
    };
    UtilsService.objectAny = function (obj, cb) {
        return !!UtilsService_1.objectFirst(obj, cb);
    };
    UtilsService.objectFirst = function (obj, cb) {
        if (obj && cb) {
            for (var k in obj) {
                if (obj.hasOwnProperty(k)) {
                    if (cb(obj[k])) {
                        return obj[k];
                    }
                }
            }
        }
    };
    UtilsService.objectWhere = function (obj, cb) {
        var result = [];
        if (obj && cb) {
            for (var k in obj) {
                if (obj.hasOwnProperty(k)) {
                    if (cb(obj[k])) {
                        result.push(obj[k]);
                    }
                }
            }
        }
        return result;
    };
    UtilsService.objectGroup = function (obj, cbKeyExtraction) {
        var result = {};
        if (obj && cbKeyExtraction) {
            for (var k in obj) {
                if (obj.hasOwnProperty(k)) {
                    var key = cbKeyExtraction(obj[k]);
                    if (!result[key]) {
                        result[key] = [];
                    }
                    result[key].push(obj[k]);
                }
            }
        }
        return result;
    };
    UtilsService.objectMap = function (obj, cb) {
        return Object.getOwnPropertyNames(obj).map(function (p) { return cb(p, obj[p]); });
    };
    UtilsService.objectFromArrayKeysOnly = function (arr, keyProperty) {
        var result = {};
        if (arr) {
            arr.forEach(function (item) { return result[item[keyProperty]] = true; });
        }
        return result;
    };
    UtilsService.objectFromArray = function (arr, keyProperty, valueProperty) {
        if (keyProperty === void 0) { keyProperty = 'id'; }
        if (valueProperty === void 0) { valueProperty = null; }
        var result = {};
        if (arr) {
            if (valueProperty) {
                arr.forEach(function (item) {
                    if (item) {
                        result[item[keyProperty]] = item[valueProperty];
                    }
                });
            }
            else {
                arr.forEach(function (item) {
                    if (item) {
                        result[item[keyProperty]] = item;
                    }
                });
            }
        }
        return result;
    };
    UtilsService.objectFromArrayKeyFunc = function (arr, keyCb, valueProperty) {
        if (valueProperty === void 0) { valueProperty = null; }
        var result = {};
        if (arr) {
            if (valueProperty) {
                arr.forEach(function (item) {
                    if (item) {
                        result[keyCb(item)] = item[valueProperty];
                    }
                });
            }
            else {
                arr.forEach(function (item) {
                    if (item) {
                        result[keyCb(item)] = item;
                    }
                });
            }
        }
        return result;
    };
    UtilsService.valuesCount = function (obj, valueValue) {
        var count = 0;
        if (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] === valueValue) {
                        count++;
                    }
                }
            }
        }
        return count;
    };
    UtilsService.arrayFirst = function (arr, cb) {
        if (arr && cb) {
            for (var i = 0; i < arr.length; i++) {
                if (cb(arr[i])) {
                    return arr[i];
                }
            }
        }
    };
    UtilsService.arrayAny = function (arr, cb) {
        return !!UtilsService_1.arrayFirst(arr, cb);
    };
    UtilsService.arrayIndexOf = function (arr, cb) {
        if (arr && cb) {
            for (var i = 0; i < arr.length; i++) {
                if (cb(arr[i])) {
                    return i;
                }
            }
        }
    };
    UtilsService.maxFromArray = function (arr, key) {
        if (arr) {
            var max_1 = key ? arr[0][key] : arr[0];
            arr.forEach(function (el) {
                if (key && el[key] > max_1) {
                    max_1 = el[key];
                }
                else if (!key && el > max_1) {
                    max_1 = el;
                }
            });
            return max_1;
        }
    };
    UtilsService.formatPercentage = function (value, total) {
        var percentage = ((total ? (value / total) : 0) * 100).toFixed(2);
        if (percentage[0] === '0') {
            return percentage.substr(1);
        }
        return percentage;
    };
    UtilsService.observableFromCb = function (callback) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            callback(function (success, payload) {
                if (success) {
                    observer.next(payload);
                    observer.complete();
                }
                else {
                    observer.error(payload);
                }
            });
        });
    };
    UtilsService.observableFromEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
    };
    UtilsService.observableFrom = function (obj) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(obj);
    };
    UtilsService.observableFromObservables = function (observables) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].forkJoin(observables);
    };
    UtilsService.observableFromPromise = function (pr) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromPromise(pr);
    };
    UtilsService.copyToClipboard = function (val) {
        var el = $('<input />').val(val);
        $('body').append(el);
        el[0].select();
        document.execCommand('Copy');
        el.remove();
    };
    UtilsService.trimLeft = function (val, char) {
        if (char === void 0) { char = ' '; }
        if (val) {
            while (val[0] === char) {
                val = val.substring(1);
            }
        }
        return val;
    };
    UtilsService.trimRight = function (val, char) {
        if (char === void 0) { char = ' '; }
        if (val) {
            while (val[val.length - 1] === char) {
                val = val.substring(0, val.length - 1);
            }
        }
        return val;
    };
    UtilsService = UtilsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UtilsService);
    return UtilsService;
    var UtilsService_1;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_SERVICES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_app_service__ = __webpack_require__("./src/app/services/core/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_datetime_service__ = __webpack_require__("./src/app/services/core/datetime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_grid_service__ = __webpack_require__("./src/app/services/core/grid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_http_service__ = __webpack_require__("./src/app/services/core/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_identity_service__ = __webpack_require__("./src/app/services/core/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_loader_service__ = __webpack_require__("./src/app/services/core/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_logger_service__ = __webpack_require__("./src/app/services/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_notifications_service__ = __webpack_require__("./src/app/services/core/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_router_service__ = __webpack_require__("./src/app/services/core/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_storage_service__ = __webpack_require__("./src/app/services/core/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_utils_service__ = __webpack_require__("./src/app/services/core/utils.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__core_app_service__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__core_identity_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__core_loader_service__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */






















var APP_SERVICES = [
    __WEBPACK_IMPORTED_MODULE_0__core_app_service__["a" /* AppService */],
    __WEBPACK_IMPORTED_MODULE_1__core_datetime_service__["a" /* DateTimeService */],
    __WEBPACK_IMPORTED_MODULE_2__core_grid_service__["a" /* GridService */],
    __WEBPACK_IMPORTED_MODULE_3__core_http_service__["a" /* HttpService */],
    __WEBPACK_IMPORTED_MODULE_4__core_identity_service__["a" /* IdentityService */],
    __WEBPACK_IMPORTED_MODULE_5__core_loader_service__["a" /* LoaderService */],
    __WEBPACK_IMPORTED_MODULE_6__core_logger_service__["a" /* LoggerService */],
    __WEBPACK_IMPORTED_MODULE_7__core_notifications_service__["a" /* NotificationsService */],
    __WEBPACK_IMPORTED_MODULE_8__core_router_service__["a" /* RouterService */],
    __WEBPACK_IMPORTED_MODULE_9__core_storage_service__["a" /* StorageService */],
    __WEBPACK_IMPORTED_MODULE_10__core_utils_service__["a" /* UtilsService */]
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: '/'
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/app/app.main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map