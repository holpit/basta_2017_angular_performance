webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-indicator {\r\n    position: fixed;\r\n    left: 0px;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    opacity: 0.3;\r\n}\r\n\r\n.spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n\r\n    position: relative;\r\n    margin: 100px auto;\r\n}\r\n\r\n.double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #FFF;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n}\r\n\r\n.double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n}\r\n\r\n@-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n}\r\n\r\n@keyframes sk-bounce {\r\n    0%, 100% {\r\n        transform: scale(0.0);\r\n        -webkit-transform: scale(0.0);\r\n    } 50% {\r\n          transform: scale(1.0);\r\n          -webkit-transform: scale(1.0);\r\n      }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n  \r\n  <reactive-flight-search></reactive-flight-search>\r\n  \r\n    <hr>\r\n  \r\n    <!-- <flight-search></flight-search>\r\n  <mouse-move></mouse-move>\r\n</div> -->\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  \r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">Holiday42</a>\r\n      </div>\r\n      \r\n      <ul class=\"nav navbar-nav\">\r\n\r\n          <li><a routerLink=\"home\">Home</a></li> \r\n          <li><a routerLink=\"flight-booking/flight-search\">Flight Booking</a></li> \r\n          <li><a [routerLink]=\"[{ outlets: { aux: 'basket' }}]\">Show Basket</a></li> \r\n          <li><a [routerLink]=\"[{ outlets: { aux: null }}]\">Hide Basket</a></li> \r\n          <!--\r\n          <li><a routerLink=\"flight-search\">Flight Search</a></li> \r\n          <li><a routerLink=\"passenger-search\">Passenger Search</a></li> \r\n          -->\r\n      </ul>\r\n  </nav>\r\n  \r\n  <div class=\"container\">\r\n  \r\n    <div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div>\r\n      <router-outlet name=\"aux\"></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"loading-indicator\" *ngIf=\"showWaitInfo\">\r\n      <div class=\"spinner\">\r\n          <div class=\"double-bounce1\"></div>\r\n          <div class=\"double-bounce2\"></div>\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function AppComponent(oauthService, router) {
        this.oauthService = oauthService;
        this.router = router;
        this.title = 'Hello World!';
        this.showWaitInfo = false;
        oauthService.configure({
            issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
            redirectUri: window.location.origin + '/index.html',
            clientId: 'spa-demo',
            scope: 'openid profile email voucher'
        });
        this.oauthService.tokenValidationHandler = new __WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc__["JwksValidationHandler"]();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
        this.oauthService.setupAutomaticSilentRefresh();
    }
    AppComponent.prototype.doStuff = function () {
        this.title = "Goodbye!";
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .router
            .events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]; })
            .subscribe(function (_) {
            _this.showWaitInfo = true;
        });
        this
            .router
            .events
            .filter(function (e) {
            return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]
                || e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationCancel */]
                || e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationError */];
        })
            .subscribe(function (_) {
            _this.showWaitInfo = false;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'flight-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc__["OAuthService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basket_basket_component__ = __webpack_require__("../../../../../src/app/basket/basket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flight_booking_flight_booking_module__ = __webpack_require__("../../../../../src/app/flight-booking/flight-booking.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_tokens__ = __webpack_require__("../../../../../src/app/app.tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__flight_booking_flight_booking_module__["a" /* FlightBookingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* APP_ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthModule"].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__basket_basket_component__["a" /* BasketComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */]
        ],
        providers: [
            // { provide: FlightService, useClass: FlightService }
            // FlightService
            { provide: __WEBPACK_IMPORTED_MODULE_11__app_tokens__["a" /* BASE_URL */], useValue: 'http://www.angular.at/api/' }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basket_basket_component__ = __webpack_require__("../../../../../src/app/basket/basket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");


var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'basket',
        component: __WEBPACK_IMPORTED_MODULE_0__basket_basket_component__["a" /* BasketComponent */],
        outlet: 'aux'
    },
    /*
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    },
    */
    {
        path: '**',
        redirectTo: 'home'
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_URL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var BASE_URL = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]("BASE_URL");
//# sourceMappingURL=app.tokens.js.map

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gray-bg {\r\n    opacity: 0.4;\r\n    background-color: black;\r\n    left:0px;\r\n    top:0px;\r\n    width:100%;\r\n    height:100%;\r\n    position: fixed;\r\n}\r\n\r\n.flight-history {\r\n    left:0px;\r\n    top:0px;\r\n    width:100%;\r\n    height:100%;\r\n    position: fixed;\r\n}\r\n\r\n.flight-history-inside {\r\n    background-color: white;\r\n    margin: 100px auto;\r\n    width: 400px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gray-bg\"></div>\r\n\r\n<div class=\"flight-history\">\r\n\r\n  <div class=\"flight-history-inside card\">\r\n\r\n    <h2>Your Basket <a [routerLink]=\"['/', {outlets: {aux: null}}]\">[x]</a></h2>\r\n\r\n    <ul class=\"list-group\">\r\n\r\n      <li class=\"list-group-item\">\r\n        <p>Hamburg - Graz</p>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <p>Graz - Hamburg</p>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasketComponent = (function () {
    function BasketComponent() {
    }
    return BasketComponent;
}());
BasketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'basket',
        template: __webpack_require__("../../../../../src/app/basket/basket.component.html"),
        styles: [__webpack_require__("../../../../../src/app/basket/basket.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BasketComponent);

//# sourceMappingURL=basket.component.js.map

/***/ }),

/***/ "../../../../../src/app/entities/flight.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=flight.js.map

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-booking.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-sm-3\" style=\"padding-top:70px\">\r\n    <div class=\"card\">\r\n        <ul class=\"nav nav-pills nav-stacked\" style=\"margin-top:20px;\">\r\n            <li><a [routerLink]=\"['./flight-search']\">Flight Search</a></li>\r\n            <li><a [routerLink]=\"['./passenger-search']\">Passenger Search</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-sm-9\">\r\n        <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlightBookingComponent = (function () {
    function FlightBookingComponent() {
    }
    FlightBookingComponent.prototype.ngOnInit = function () { };
    return FlightBookingComponent;
}());
FlightBookingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-booking',
        template: __webpack_require__("../../../../../src/app/flight-booking/flight-booking.component.html")
    }),
    __metadata("design:paramtypes", [])
], FlightBookingComponent);

//# sourceMappingURL=flight-booking.component.js.map

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-booking.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightBookingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_service__ = __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_booking_component__ = __webpack_require__("../../../../../src/app/flight-booking/flight-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__passenger_search_passenger_search_component__ = __webpack_require__("../../../../../src/app/passenger-search/passenger-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flight_search_flight_card_component__ = __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flight_search_flight_search_components__ = __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight-search.components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flight_booking_routes__ = __webpack_require__("../../../../../src/app/flight-booking/flight-booking.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reactive_flight_search_reactive_flight_search_components__ = __webpack_require__("../../../../../src/app/reactive-flight-search/reactive-flight-search.components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__flight_edit_flight_edit_component__ = __webpack_require__("../../../../../src/app/flight-booking/flight-edit/flight-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var FlightBookingModule = (function () {
    function FlightBookingModule() {
    }
    return FlightBookingModule;
}());
FlightBookingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__flight_booking_routes__["a" /* FLIGHT_SEARCH_ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__reactive_flight_search_reactive_flight_search_components__["a" /* ReactiveFlightSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_3__passenger_search_passenger_search_component__["a" /* PassengerSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_5__flight_search_flight_search_components__["a" /* FlightSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_4__flight_search_flight_card_component__["a" /* FlightCardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__flight_edit_flight_edit_component__["a" /* FlightEditComponent */],
            __WEBPACK_IMPORTED_MODULE_2__flight_booking_component__["a" /* FlightBookingComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_service__["a" /* FlightService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_11__reactive_flight_search_reactive_flight_search_components__["a" /* ReactiveFlightSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_5__flight_search_flight_search_components__["a" /* FlightSearchComponent */]
        ]
    })
], FlightBookingModule);

//# sourceMappingURL=flight-booking.module.js.map

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-booking.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FLIGHT_SEARCH_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flight_edit_flight_resolver__ = __webpack_require__("../../../../../src/app/flight-booking/flight-edit/flight.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_exit_exit_guard__ = __webpack_require__("../../../../../src/app/shared/exit/exit.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_booking_component__ = __webpack_require__("../../../../../src/app/flight-booking/flight-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flight_edit_flight_edit_component__ = __webpack_require__("../../../../../src/app/flight-booking/flight-edit/flight-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flight_search_flight_search_components__ = __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight-search.components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__passenger_search_passenger_search_component__ = __webpack_require__("../../../../../src/app/passenger-search/passenger-search.component.ts");






var FLIGHT_SEARCH_ROUTES = [
    {
        path: 'flight-booking',
        component: __WEBPACK_IMPORTED_MODULE_2__flight_booking_component__["a" /* FlightBookingComponent */],
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'flight-search',
                component: __WEBPACK_IMPORTED_MODULE_4__flight_search_flight_search_components__["a" /* FlightSearchComponent */]
            },
            {
                path: 'passenger-search',
                component: __WEBPACK_IMPORTED_MODULE_5__passenger_search_passenger_search_component__["a" /* PassengerSearchComponent */]
            },
            {
                path: 'flight-edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__flight_edit_flight_edit_component__["a" /* FlightEditComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_1__shared_exit_exit_guard__["a" /* ExitGuard */]],
                resolve: {
                    flight: __WEBPACK_IMPORTED_MODULE_0__flight_edit_flight_resolver__["a" /* FlightResolver */]
                }
            }
        ]
    }
];
//# sourceMappingURL=flight-booking.routes.js.map

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-edit/flight-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-edit/flight-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Flight Edit</h1>\n<div class=\"card\">\n  <p>Id: {{id}}</p>\n  <p>ShowDetails: {{showDetails}}</p>\n  \n  <pre>{{ flight | json }}</pre>\n\n  <div style=\"position:relative; z-index: 100\" *ngIf=\"warningDialog.show\" class=\"alert alert-warning\">\n      <div>\n      Daten wurden nicht gespeichert! Trotzdem Maske verlassen?\n      </div>\n      <div>\n          <a href=\"javascript:void(0)\" (click)=\"decide(true)\" class=\"btn btn-danger\">Yes</a>\n          <a href=\"javascript:void(0)\" (click)=\"decide(false)\" class=\"btn btn-default\">No</a>\n      </div>\n  </div>\n\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-edit/flight-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightEditComponent = (function () {
    function FlightEditComponent(route) {
        this.route = route;
        this.warningDialog = {
            show: false,
            sender: null
        };
    }
    FlightEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.warningDialog.show = true;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (sender) {
            _this.warningDialog.sender = sender;
        });
    };
    FlightEditComponent.prototype.decide = function (d) {
        this.warningDialog.show = false;
        this.warningDialog.sender.next(d);
        this.warningDialog.sender.complete();
    };
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
            _this.showDetails = p['showDetails'];
        });
        this.route.data.subscribe(function (data) {
            _this.flight = data['flight'];
        });
    };
    return FlightEditComponent;
}());
FlightEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-flight-edit',
        template: __webpack_require__("../../../../../src/app/flight-booking/flight-edit/flight-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/flight-booking/flight-edit/flight-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], FlightEditComponent);

var _a;
//# sourceMappingURL=flight-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-edit/flight.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flight_search_flight_service__ = __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightResolver = (function () {
    function FlightResolver(flightService) {
        this.flightService = flightService;
    }
    FlightResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        return this.flightService.findById(id); //.delay(4000);
    };
    return FlightResolver;
}());
FlightResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__flight_search_flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__flight_search_flight_service__["a" /* FlightService */]) === "function" && _a || Object])
], FlightResolver);

var _a;
//# sourceMappingURL=flight.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-search/flight-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div\r\n    style=\"padding:20px;\"\r\n    class=\"card\"\r\n    [ngStyle]=\"{'background-color': (selected) ?  'orange' : 'white' }\"\r\n>\r\n\r\n    <h2>{{item.from}} - {{item.to}}</h2>\r\n    <p>Flight-No.: #{{item.id}}</p>\r\n    <p>Date: {{item.date | date:'dd.MM.yyyy HH:mm'}}</p>\r\n\r\n    <p>\r\n        <button\r\n            class=\"btn btn-default\"\r\n            *ngIf=\"!selected\"\r\n            (click)=\"select()\"\r\n        >Select</button>\r\n        <button\r\n            class=\"btn btn-default\"\r\n            *ngIf=\"selected\" \r\n            (click)=\"deselect()\"\r\n        >Remove</button>   \r\n\r\n        <a class=\"btn btn-default\" [routerLink]=\"['../flight-edit', item.id, {showDetails: true}]\">Edit</a>\r\n    </p>\r\n</div>\r\n\r\n{{ blink() }}"

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-search/flight-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_flight__ = __webpack_require__("../../../../../src/app/entities/flight.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_flight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__entities_flight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightCardComponent = (function () {
    function FlightCardComponent(element, zone) {
        this.element = element;
        this.zone = zone;
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    FlightCardComponent.prototype.ngOnInit = function () { };
    FlightCardComponent.prototype.select = function () {
        this.selected = true;
        this.selectedChange.next(this.selected);
    };
    FlightCardComponent.prototype.deselect = function () {
        this.selected = false;
        this.selectedChange.next(this.selected);
    };
    FlightCardComponent.prototype.blink = function () {
        var _this = this;
        // Dirty Hack used to visualize the change detector
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        // Bypass the change tracker to avoid infinity cycles when 
        // visualizing the change tracking process
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
            }, 1000);
        });
        return null;
    };
    return FlightCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__entities_flight__["Flight"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__entities_flight__["Flight"]) === "function" && _a || Object)
], FlightCardComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FlightCardComponent.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "selectedChange", void 0);
FlightCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'flight-card',
        template: __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight-card.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]) === "function" && _c || Object])
], FlightCardComponent);

var _a, _b, _c;
//# sourceMappingURL=flight-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-search/flight-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* input.ng-invalid {\r\n    border-left: 5px solid firebrick;\r\n}\r\n\r\ninput.ng-valid {\r\n    border-left: 5px solid green;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-search/flight-search.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Flight Search</h1>\r\n\r\n<div class=\"row\">\r\n<div class=\"card\">\r\n<form #f=\"ngForm\" roundTrip>\r\n\r\n    <div *ngIf=\"f?.hasError('roundTrip')\">... roundTrip ...</div>\r\n    <div *ngIf=\"f?.invalid\">... Fehler auf Form-Ebene <pre>{{f.errors | json }}</pre>...</div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>From:</label>\r\n        <input \r\n            name=\"from\" \r\n            [(ngModel)]=\"from\" \r\n            [ngStyle]=\"{ 'background-color': (f?.invalid || f?.controls['from']?.invalid) ? 'hotpink' : 'white' }\"\r\n            class=\"form-control\"\r\n            required\r\n            minlength=\"3\"\r\n            maxlength=\"30\"\r\n            asyncLocation\r\n            location=\"Graz,Hamburg,Nürnberg,Frankfurt,Wien,Zürich\"\r\n            pattern=\"[A-Za-zöäüßÖÄÜ]*\">\r\n\r\n        <div *ngIf=\"f?.controls['from']?.invalid && f?.controls['from']?.dirty\">...Fehler <pre>{{ f?.controls['from']?.errors | json }}</pre>...</div>  \r\n        <div *ngIf=\"f?.controls['from']?.hasError('required')\">...Required...</div>  \r\n        <div *ngIf=\"f?.controls['from']?.hasError('minlength')\">...minlength...</div>  \r\n        <div *ngIf=\"f?.controls['from']?.hasError('maxlength')\">...maxlength...</div>  \r\n        <div *ngIf=\"f?.controls['from']?.hasError('pattern')\">...pattern...</div>  \r\n        <div *ngIf=\"f?.controls['from']?.hasError('city')\">...city...</div>  \r\n        <div *ngIf=\"f?.controls['from']?.hasError('asyncCity')\">...asyncCity...</div>  \r\n        <div *ngIf=\"f?.controls['from']?.pending\"><marquee direction=\"down\">Validiere</marquee></div>  \r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>To:</label>\r\n        <input name=\"to\" [(ngModel)]=\"to\" class=\"form-control\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <button \r\n            class=\"btn btn-default\"\r\n            (click)=\"search()\" \r\n            [disabled]=\"!from || !to\">Search</button>\r\n\r\n            <button \r\n            class=\"btn btn-default\"\r\n            (click)=\"delay()\" \r\n            [disabled]=\"!flights.length\">Delay</button>\r\n\r\n    </div>\r\n</form>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div *ngFor=\"let f of flights\" class=\"col col-lg-3 col-md-4 col-sm-6 col-xs-12\">\r\n        <flight-card \r\n            [item]=\"f\" \r\n            [(selected)]=\"basket[f.id]\"></flight-card>\r\n            <!-- (selectedChange)=\"basket[f.id] = $event\" -->\r\n    </div>\r\n</div>\r\n<!--\r\n<div class=\"card\">\r\n\r\n\r\n    <table class=\"table table-contensed\">\r\n       \r\n        <tr *ngFor=\"let f of flights\" [class.active]=\"f === selectedFlight\">\r\n            <td>{{f.id}}</td>\r\n            <td>{{f.from | city:'short'}}</td>\r\n            <td>{{f.to | city:'long' }}</td>\r\n            <td>{{f.date | date:'dd.MM.yyyy HH:mm'}}</td>\r\n            <td><a (click)=\"select(f)\">Select</a></td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n-->\r\n\r\n<div class=\"row\">\r\n<div class=\"card\">\r\n    <pre>{{ basket | json }}</pre>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-search/flight-search.components.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_service__ = __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightSearchComponent = (function () {
    //private http: Http;
    function FlightSearchComponent(flightService) {
        this.flightService = flightService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.basket = {
            "3": true,
            "5": true
        };
        this.afterSearch$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        //this.http = http;
    }
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.search = function () {
        if (!this.from || !this.to) {
            this.afterSearch$.error('to and from expected!');
            return;
        }
        this.flightService.load(this.from, this.to);
    };
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchComponent.prototype.ngOnInit = function () { };
    return FlightSearchComponent;
}());
FlightSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-search',
        template: __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/flight-booking/flight-search/flight-search.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__flight_search_flight_service__["a" /* FlightService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_service__["a" /* FlightService */]) === "function" && _a || Object])
], FlightSearchComponent);

var _a;
//# sourceMappingURL=flight-search.components.js.map

/***/ }),

/***/ "../../../../../src/app/flight-booking/flight-search/flight.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_tokens__ = __webpack_require__("../../../../../src/app/app.tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FlightService = (function () {
    function FlightService(http, oauthService, baseUrl) {
        this.http = http;
        this.oauthService = oauthService;
        this.baseUrl = baseUrl;
        this.flights = [];
    }
    FlightService.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        var oldFlights = this.flights;
        var oldFlight = oldFlights[0];
        var oldDate = new Date(oldFlight.date);
        var newDate = new Date(oldDate.getTime() + ONE_MINUTE * 15);
        // Mutable
        // oldFlight.date = newDate.toISOString();
        // Immutable
        var newFlight = __assign({}, oldFlight, { date: newDate.toISOString() });
        var newFlights = [newFlight].concat(oldFlights.slice(1));
        this.flights = newFlights;
    };
    FlightService.prototype.load = function (from, to) {
        var _this = this;
        this.find(from, to)
            .subscribe(function (flights) { return _this.flights = flights; }, function (err) { return console.error('Error loading flights', err); });
    };
    FlightService.prototype.findById = function (id) {
        var url = this.baseUrl + 'flight';
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('id', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    FlightService.prototype.find = function (from, to) {
        var url = this.baseUrl + 'flight';
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('from', from)
            .set('to', to);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    return FlightService;
}());
FlightService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__app_tokens__["a" /* BASE_URL */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular_oauth2_oidc__["OAuthService"]) === "function" && _b || Object, String])
], FlightService);

var _a, _b;
//# sourceMappingURL=flight.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HomeComponent(authService) {
        this.authService = authService;
    }
    Object.defineProperty(HomeComponent.prototype, "userName", {
        get: function () {
            return this.authService.userName;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.login = function () {
        this.authService.login();
    };
    HomeComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'home',
        template: "\n        <h2 *ngIf=\"!userName\" style=\"color: white;\">Welcome!</h2>\n        <h2 *ngIf=\"userName\" style=\"color: white;\">Welcome, {{userName}}!</h2>\n        <p>\n            <button class=\"btn btn-default\" (click)=\"login()\">Login</button>\n            <button class=\"btn btn-default\" (click)=\"logout()\">Logout</button>\n        </p>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/passenger-search/passenger-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PassengerSearchComponent = (function () {
    function PassengerSearchComponent() {
    }
    PassengerSearchComponent.prototype.ngOnInit = function () { };
    return PassengerSearchComponent;
}());
PassengerSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'passenger-search',
        template: "\n        <h1 style=\"color: white;\">Passenger Search</h1>\n        <div class=\"row\">\n        <div class=\"card\">\n            <p>\n                <strong>Just a dummy page!</strong>\n            </p>\n        </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], PassengerSearchComponent);

//# sourceMappingURL=passenger-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/reactive-flight-search/reactive-flight-search.components.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\ninput.ng-invalid {\r\n\r\n    border-left: 5px solid firebrick;\r\n}\r\n\r\ninput.ng-valid {\r\n    border-left: 5px solid green;\r\n}\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reactive-flight-search/reactive-flight-search.components.html":
/***/ (function(module, exports) {

module.exports = "<h1>Flight Search</h1>\r\n\r\n<div class=\"row\">\r\n<div class=\"card\">\r\n<form roundTrip [formGroup]=\"filter\">\r\n\r\n    <h2>Dynamic</h2>\r\n    <div class=\"form-group\" *ngFor=\"let item of formMetadata\">\r\n        <label>{{item.label}}</label>\r\n        <input \r\n            [formControlName]=\"item.name\"\r\n            class=\"form-control\">\r\n    </div>\r\n\r\n    <h2>Static</h2>\r\n\r\n    <div *ngIf=\"filter.hasError('roundTrip')\">... roundTrip ...</div>\r\n    <div *ngIf=\"filter.invalid\">... Fehler auf Form-Ebene <pre>{{filter.errors | json }}</pre>...</div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>From:</label>\r\n        <input \r\n            formControlName=\"from\"\r\n            class=\"form-control\">\r\n\r\n        <div *ngIf=\"filter.controls['from'].invalid && filter.controls['from'].dirty\">...Fehler <pre>{{ filter.controls['from'].errors | json }}</pre>...</div>  \r\n        <div *ngIf=\"filter.controls['from'].hasError('required')\">...Required...</div>  \r\n        <div *ngIf=\"filter.controls['from'].hasError('minlength')\">...minlength...</div>  \r\n        <div *ngIf=\"filter.controls['from'].hasError('maxlength')\">...maxlength...</div>  \r\n        <div *ngIf=\"filter.controls['from'].hasError('pattern')\">...pattern...</div>  \r\n        <div *ngIf=\"filter.controls['from'].hasError('city')\">...city...</div>  \r\n        <div *ngIf=\"filter.controls['from'].hasError('asyncCity')\">...asyncCity...</div>  \r\n        <div *ngIf=\"filter.controls['from'].pending\"><marquee direction=\"down\">Validiere</marquee></div>  \r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>To:</label>\r\n        <input formControlName=\"to\" class=\"form-control\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <button \r\n            class=\"btn btn-default\"\r\n            (click)=\"search()\" \r\n            [disabled]=\"!filter.valid\">Search</button>\r\n    </div>\r\n</form>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div *ngFor=\"let f of flights\" class=\"col col-lg-3 col-md-4 col-sm-6 col-xs-12\">\r\n        <flight-card \r\n            [item]=\"f\" \r\n            [(selected)]=\"basket[f.id]\"></flight-card>\r\n            <!-- (selectedChange)=\"basket[f.id] = $event\" -->\r\n    </div>\r\n</div>\r\n<!--\r\n<div class=\"card\">\r\n\r\n\r\n    <table class=\"table table-contensed\">\r\n       \r\n        <tr *ngFor=\"let f of flights\" [class.active]=\"f === selectedFlight\">\r\n            <td>{{f.id}}</td>\r\n            <td>{{f.from | city:'short'}}</td>\r\n            <td>{{f.to | city:'long' }}</td>\r\n            <td>{{f.date | date:'dd.MM.yyyy HH:mm'}}</td>\r\n            <td><a (click)=\"select(f)\">Select</a></td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n-->\r\n\r\n<div class=\"row\">\r\n<div class=\"card\">\r\n    <pre>{{ basket | json }}</pre>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reactive-flight-search/reactive-flight-search.components.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveFlightSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flight_booking_flight_search_flight_service__ = __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReactiveFlightSearchComponent = (function () {
    //private http: Http;
    function ReactiveFlightSearchComponent(fb, flightService) {
        //this.http = http;
        this.fb = fb;
        this.flightService = flightService;
        this.flights = [];
        this.formMetadata = [
            { name: 'from', label: 'Airport of departure' },
            { name: 'to', label: 'Airport of destination' }
        ];
        this.basket = {
            "3": true,
            "5": true
        };
        this.afterSearch$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.filter = fb.group({
            from: ['Graz', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            to: ['Hamburg']
        });
        this.filter.valueChanges.subscribe(function (changes) {
            console.debug('Formular hat sich geändert', changes);
        });
    }
    ReactiveFlightSearchComponent.prototype.search = function () {
        var _this = this;
        var value = this.filter.value;
        if (!value.from || !value.to) {
            this.afterSearch$.error('to and from expected!');
            return;
        }
        this
            .flightService
            .find(value.from, value.to)
            .subscribe(function (flights) {
            _this.flights = flights;
            _this.afterSearch$.next(_this.flights);
        }, function (errResponse) {
            _this.afterSearch$.error(errResponse);
            console.error('Fehler beim Laden', errResponse);
        });
    };
    ReactiveFlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    ReactiveFlightSearchComponent.prototype.ngOnInit = function () { };
    return ReactiveFlightSearchComponent;
}());
ReactiveFlightSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'reactive-flight-search',
        template: __webpack_require__("../../../../../src/app/reactive-flight-search/reactive-flight-search.components.html"),
        styles: [__webpack_require__("../../../../../src/app/reactive-flight-search/reactive-flight-search.components.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__flight_booking_flight_search_flight_service__["a" /* FlightService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__flight_booking_flight_search_flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__flight_booking_flight_search_flight_service__["a" /* FlightService */]) === "function" && _b || Object])
], ReactiveFlightSearchComponent);

var _a, _b;
//# sourceMappingURL=reactive-flight-search.components.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.debug('route.data', route.data);
        console.debug('AuthGuard::currentUser', this.authService.userName);
        if (!this.authService.userName) {
            this.router.navigate(['home', { plsLoginNow: true }]);
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function () {
        this.userName = 'Max';
    };
    AuthService.prototype.logout = function () {
        this.userName = null;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/exit/exit.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExitGuard = (function () {
    function ExitGuard() {
    }
    ExitGuard.prototype.canDeactivate = function (component, currentRoute, currentState) {
        return component.canDeactivate();
    };
    return ExitGuard;
}());
ExitGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ExitGuard);

//# sourceMappingURL=exit.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/location.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocationPipe = (function () {
    function LocationPipe() {
    }
    LocationPipe.prototype.transform = function (value, fmt, lang) {
        var long, short;
        switch (value) {
            case "Hamburg":
                long = 'Airport Hamburg Fulsbüttel - Helmut Schmidt';
                short = 'HAM';
                break;
            case "Graz":
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
                break;
            case "Nürnberg":
                long = 'Airport Nürnberg - Albrecht Dürrer';
                short = 'NUE';
                break;
            default:
                long = short = 'ROM';
        }
        if (fmt == 'short')
            return short;
        return long;
    };
    return LocationPipe;
}());
LocationPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'location',
        pure: true
    })
], LocationPipe);

//# sourceMappingURL=location.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/preloading/custom-preloading-strategy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPreloadingStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomPreloadingStrategy = (function () {
    function CustomPreloadingStrategy() {
    }
    CustomPreloadingStrategy.prototype.preload = function (route, fn) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of(true).delay(8000).switchMap(function (_) { return fn(); });
    };
    return CustomPreloadingStrategy;
}());
CustomPreloadingStrategy = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], CustomPreloadingStrategy);

//# sourceMappingURL=custom-preloading-strategy.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preloading_custom_preloading_strategy__ = __webpack_require__("../../../../../src/app/shared/preloading/custom-preloading-strategy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_booking_flight_edit_flight_resolver__ = __webpack_require__("../../../../../src/app/flight-booking/flight-edit/flight.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exit_exit_guard__ = __webpack_require__("../../../../../src/app/shared/exit/exit.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_location_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/location.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validation_location_validation_directive__ = __webpack_require__("../../../../../src/app/shared/validation/location.validation.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__validation_round_trip_validation_directive__ = __webpack_require__("../../../../../src/app/shared/validation/round-trip.validation.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validation_async_location_validation_directive__ = __webpack_require__("../../../../../src/app/shared/validation/async-location.validation.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forChild = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__auth_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_3__exit_exit_guard__["a" /* ExitGuard */],
                __WEBPACK_IMPORTED_MODULE_2__flight_booking_flight_edit_flight_resolver__["a" /* FlightResolver */],
                __WEBPACK_IMPORTED_MODULE_0__preloading_custom_preloading_strategy__["a" /* CustomPreloadingStrategy */]
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__pipes_location_pipe__["a" /* LocationPipe */],
            __WEBPACK_IMPORTED_MODULE_8__validation_location_validation_directive__["a" /* LocationValidationDirective */],
            __WEBPACK_IMPORTED_MODULE_9__validation_round_trip_validation_directive__["a" /* RoundTripValidationDirective */],
            __WEBPACK_IMPORTED_MODULE_10__validation_async_location_validation_directive__["a" /* AsyncLocationValidationDirective */]
        ],
        providers: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__pipes_location_pipe__["a" /* LocationPipe */],
            __WEBPACK_IMPORTED_MODULE_8__validation_location_validation_directive__["a" /* LocationValidationDirective */],
            __WEBPACK_IMPORTED_MODULE_9__validation_round_trip_validation_directive__["a" /* RoundTripValidationDirective */],
            __WEBPACK_IMPORTED_MODULE_10__validation_async_location_validation_directive__["a" /* AsyncLocationValidationDirective */]
        ]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validation/async-location.validation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncLocationValidationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flight_booking_flight_search_flight_service__ = __webpack_require__("../../../../../src/app/flight-booking/flight-search/flight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsyncLocationValidationDirective = AsyncLocationValidationDirective_1 = (function () {
    function AsyncLocationValidationDirective(flightService) {
        this.flightService = flightService;
    }
    AsyncLocationValidationDirective.prototype.validate = function (control) {
        return this
            .flightService
            .find(control.value, '') // exists
            .map(function (flights) {
            if (flights.length > 0) {
                return {};
            }
            else {
                return { asyncLocation: true };
            }
        });
        //.delay(4000);
    };
    return AsyncLocationValidationDirective;
}());
AsyncLocationValidationDirective = AsyncLocationValidationDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'input[asyncLocation]',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_ASYNC_VALIDATORS */],
                useExisting: AsyncLocationValidationDirective_1,
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__flight_booking_flight_search_flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__flight_booking_flight_search_flight_service__["a" /* FlightService */]) === "function" && _a || Object])
], AsyncLocationValidationDirective);

var AsyncLocationValidationDirective_1, _a;
//# sourceMappingURL=async-location.validation.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validation/location.validation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationValidationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationValidationDirective = LocationValidationDirective_1 = (function () {
    function LocationValidationDirective() {
    }
    LocationValidationDirective.prototype.validate = function (control) {
        var allowedLocations = this.location.split(',');
        var value = control.value;
        if (allowedLocations.indexOf(value) > -1) {
            return {};
        }
        return {
            location: {
                actual: value,
                allowed: allowedLocations,
                reason: 42,
                tryAgain: 60
            }
        };
    };
    return LocationValidationDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LocationValidationDirective.prototype, "location", void 0);
LocationValidationDirective = LocationValidationDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'input[location]',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */],
                useExisting: LocationValidationDirective_1,
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], LocationValidationDirective);

var LocationValidationDirective_1;
//# sourceMappingURL=location.validation.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validation/round-trip.validation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundTripValidationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RoundTripValidationDirective = RoundTripValidationDirective_1 = (function () {
    function RoundTripValidationDirective() {
    }
    RoundTripValidationDirective.prototype.validate = function (control) {
        var group = control;
        var fromCtrl = group.controls['from'];
        var toCtrl = group.controls['to'];
        if (!fromCtrl || !toCtrl)
            return {};
        if (fromCtrl.value == toCtrl.value) {
            return {
                roundTrip: true
            };
        }
        return {};
    };
    return RoundTripValidationDirective;
}());
RoundTripValidationDirective = RoundTripValidationDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'form[roundTrip]',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */],
                useExisting: RoundTripValidationDirective_1,
                multi: true
            }
        ]
    })
], RoundTripValidationDirective);

var RoundTripValidationDirective_1;
//# sourceMappingURL=round-trip.validation.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_imports__ = __webpack_require__("../../../../../src/rxjs-imports.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/rxjs-imports.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_sample__ = __webpack_require__("../../../../rxjs/add/operator/sample.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_sample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_sample__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
// import 'rxjs/Rx';







//# sourceMappingURL=rxjs-imports.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map