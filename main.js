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

/***/ "./src/app/anfahrt/anfahrt.component.css":
/*!***********************************************!*\
  !*** ./src/app/anfahrt/anfahrt.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frame{\r\n    margin: 0 auto;\r\ndisplay: block;\r\npadding: 40px;\r\nwidth: 720px;\r\nheight: 600px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5mYWhydC9hbmZhaHJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsWUFBWTtBQUNaLGFBQWE7O0FBRWIiLCJmaWxlIjoic3JjL2FwcC9hbmZhaHJ0L2FuZmFocnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmFtZXtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5kaXNwbGF5OiBibG9jaztcclxucGFkZGluZzogNDBweDtcclxud2lkdGg6IDcyMHB4O1xyXG5oZWlnaHQ6IDYwMHB4O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/anfahrt/anfahrt.component.html":
/*!************************************************!*\
  !*** ./src/app/anfahrt/anfahrt.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<iframe class=\"frame\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" id=\"gmap_canvas\"\r\n src=\"https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Bahnhofstra%C3%9Fe%2013%20Lauenstein,%20Geising+(Wellness-Massagen%20Anja%20Kretschmer)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"></iframe>\r\n <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=50fd944b77b9a9b2c5480b92bed42254dcc17b6c'></script>"

/***/ }),

/***/ "./src/app/anfahrt/anfahrt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/anfahrt/anfahrt.component.ts ***!
  \**********************************************/
/*! exports provided: AnfahrtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnfahrtComponent", function() { return AnfahrtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnfahrtComponent = /** @class */ (function () {
    function AnfahrtComponent() {
    }
    AnfahrtComponent.prototype.ngOnInit = function () {
    };
    AnfahrtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anfahrt',
            template: __webpack_require__(/*! ./anfahrt.component.html */ "./src/app/anfahrt/anfahrt.component.html"),
            styles: [__webpack_require__(/*! ./anfahrt.component.css */ "./src/app/anfahrt/anfahrt.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnfahrtComponent);
    return AnfahrtComponent;
}());



/***/ }),

/***/ "./src/app/angebot/angebot.component.css":
/*!***********************************************!*\
  !*** ./src/app/angebot/angebot.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acc{\r\n    margin-top: 30px;\r\n}\r\n.acc2{\r\n    background-color:#EFE3F3;\r\n    color: #9540ad;\r\n}\r\n.taH{\r\n    font-family:Arial, Helvetica, sans-serif;\r\n    font-size: 20px;\r\n    text-align: left;\r\n    color: #9540ad;\r\n}\r\n.taR{\r\n    font-size: 15px;\r\n    padding-right: 120px;\r\n    color: #9540ad;\r\n    padding-top: 20px;\r\n}\r\n.img1{\r\n    width: 300px;\r\n    height: auto;\r\n}\r\n.imgB{\r\n    display: inline-block;\r\n    padding-right: 50px;\r\n}\r\n.imgB2{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    align-content: center;\r\n}\r\n.u1{\r\n    font-family:Arial, Helvetica, sans-serif;\r\n    font-size: 25px;\r\n    text-align: left;\r\n    color: #9540ad;\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n.u2{\r\n    font-family:Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    text-align: left;\r\n    color: #9540ad;\r\n}\r\n.angebot{\r\n    background-color: #EFE3F3;\r\n    border-radius: 6px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 24px;\r\n    box-shadow: 1px 1px rgb(177, 173, 173);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5nZWJvdC9hbmdlYm90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvYW5nZWJvdC9hbmdlYm90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNje1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uYWNjMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VGRTNGMztcclxuICAgIGNvbG9yOiAjOTU0MGFkO1xyXG59XHJcbi50YUh7XHJcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjOTU0MGFkO1xyXG59XHJcbi50YVJ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjBweDtcclxuICAgIGNvbG9yOiAjOTU0MGFkO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmltZzF7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmltZ0J7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5pbWdCMntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnUxe1xyXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzk1NDBhZDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi51MntcclxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICM5NTQwYWQ7XHJcbn1cclxuLmFuZ2Vib3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFM0YzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggcmdiKDE3NywgMTczLCAxNzMpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/angebot/angebot.component.html":
/*!************************************************!*\
  !*** ./src/app/angebot/angebot.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"acc\">\n<mat-accordion >\n    <mat-expansion-panel class=\"acc2\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"taH\">\n          Entspannungsmassagen\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class=\"imgB\">\n          <img class=\"img1\" src=\"/assets/massage1.JPG\">\n      </div>\n      <div class=\"imgB2\">\n        <table matTable >\n            <tr>\n                <th class=\"taH\"></th>\n                <th class=\"taH\">Dauer*</th>\n                <th class=\"taH\">Preis</th>\n            </tr>\n            <tr>\n                <td class=\"taR\">Rücken-/ Nackenmassage</td>\n                <td class=\"taR\">30 Minuten</td>\n                <td class=\"taR\">28,00 €</td>\n            </tr>\n            <tr>\n                <td class=\"taR\">Ganzkörpermassage</td>\n                <td class=\"taR\">60 Minuten</td>\n                <td class=\"taR\">55,00 €</td>\n            </tr>\n            <tr>\n                <td class=\"taR\">ganzheitliche Fußmassage</td>\n                <td class=\"taR\">30 Minuten</td>\n                <td class=\"taR\">28,00 €</td>\n            </tr>\n        </table>\n    </div>\n    </mat-expansion-panel>\n    <br>\n    <mat-expansion-panel class=\"acc2\">\n        <mat-expansion-panel-header>\n          <mat-panel-title class=\"taH\">\n            Bamboo-Massagen\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div class=\"imgB2\">\n          <table matTable >\n              <tr>\n                  <th class=\"taH\"></th>\n                  <th class=\"taH\">Dauer*</th>\n                  <th class=\"taH\">Preis</th>\n              </tr>\n              <tr>\n                  <td class=\"taR\">Rückenmassage</td>\n                  <td class=\"taR\">20 Minuten</td>\n                  <td class=\"taR\">20,00 €</td>\n              </tr>\n              <tr>\n                  <td class=\"taR\">Ganzkörpermassage</td>\n                  <td class=\"taR\">40 Minuten</td>\n                  <td class=\"taR\">40,00 €</td>\n              </tr>\n          </table>\n      </div>\n      </mat-expansion-panel>\n      <br>\n      <mat-expansion-panel class=\"acc2\">\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"taH\">\n                Hot Stone Massagen\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"imgB\">\n              <img class=\"img1\" src=\"/assets/hotStone.JPG\">\n          </div>\n          <div class=\"imgB2\">\n            <table matTable >\n                <tr>\n                    <th class=\"taH\"></th>\n                    <th class=\"taH\">Dauer*</th>\n                    <th class=\"taH\">Preis</th>\n                </tr>\n                <tr>\n                    <td class=\"taR\">Rückenmassage</td>\n                    <td class=\"taR\">30 Minuten</td>\n                    <td class=\"taR\">33,00 €</td>\n                </tr>\n                <tr>\n                    <td class=\"taR\">Ganzkörpermassage</td>\n                    <td class=\"taR\">60 Minuten</td>\n                    <td class=\"taR\">65,00 €</td>\n                </tr>\n            </table>\n        </div>\n        </mat-expansion-panel>\n        <br>\n      <mat-expansion-panel class=\"acc2\">\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"taH\">\n                Ayurvedische Massagen\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n        <!-- <div class=\"imgB\">\n              <img class=\"img1\" src=\"/assets/hotStone.JPG\">\n          </div>--> \n          <div class=\"imgB2\">\n            <table matTable >\n                <tr>\n                    <th class=\"taH\"></th>\n                    <th class=\"taH\">Dauer*</th>\n                    <th class=\"taH\">Preis</th>\n                </tr>\n                <tr>\n                    <td class=\"taR\">Rückenmassage</td>\n                    <td class=\"taR\">30 Minuten</td>\n                    <td class=\"taR\">30,00 €</td>\n                </tr>\n                <tr>\n                    <td class=\"taR\">Fußmassage</td>\n                    <td class=\"taR\">30 Minuten</td>\n                    <td class=\"taR\">30,00 €</td>\n                </tr>\n            </table>\n        </div>\n        </mat-expansion-panel>\n        <br>\n        <mat-expansion-panel class=\"acc2\">\n            <mat-expansion-panel-header>\n              <mat-panel-title class=\"taH\">\n                Schröpfkopfmassage\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n          <!-- <div class=\"imgB\">\n                <img class=\"img1\" src=\"/assets/hotStone.JPG\">\n            </div>--> \n            <div class=\"imgB2\">\n              <table matTable >\n                  <tr>\n                      <th class=\"taH\"></th>\n                      <th class=\"taH\">Dauer*</th>\n                      <th class=\"taH\">Preis</th>\n                  </tr>\n                  <tr>\n                      <td class=\"taR\">Schröpfkopfmassage</td>\n                      <td class=\"taR\">20 Minuten</td>\n                      <td class=\"taR\">20,00 €</td>\n                  </tr>\n               \n              </table>\n          </div>\n          </mat-expansion-panel>\n          <br>\n        <mat-expansion-panel class=\"acc2\">\n            <mat-expansion-panel-header>\n              <mat-panel-title class=\"taH\">\n                Reiki-Behandlung\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n          <!-- <div class=\"imgB\">\n                <img class=\"img1\" src=\"/assets/hotStone.JPG\">\n            </div>--> \n            <div class=\"imgB2\">\n              <table matTable >\n                  <tr>\n                      <th class=\"taH\"></th>\n                      <th class=\"taH\">Dauer*</th>\n                      <th class=\"taH\">Preis</th>\n                  </tr>\n                  <tr>\n                      <td class=\"taR\">Reiki-Behandlung</td>\n                      <td class=\"taR\">60 Minuten</td>\n                      <td class=\"taR\">55,00 €</td>\n                  </tr>\n              </table>\n          </div>\n          </mat-expansion-panel>\n  </mat-accordion>\n  <br>\n  <div class=\"angebot\">\n  <label class=\"u1\">Verschenken Sie Wohlfühlzeit mit einem Gutschein.</label></div>\n  <br><br><br>\n  <label class=\"u2\">Wellness-Masssagen sind keine Heilbehandlung und dienen ausschließlich der Entspannung und Prävention.</label>\n  <br><br>\n  <label class=\"u2\">* Massagedauer beinhaltet eine kurze Ruhephase am Ende der Massage</label>\n</div>"

/***/ }),

/***/ "./src/app/angebot/angebot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/angebot/angebot.component.ts ***!
  \**********************************************/
/*! exports provided: AngebotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngebotComponent", function() { return AngebotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngebotComponent = /** @class */ (function () {
    function AngebotComponent() {
    }
    AngebotComponent.prototype.ngOnInit = function () {
    };
    AngebotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angebot',
            template: __webpack_require__(/*! ./angebot.component.html */ "./src/app/angebot/angebot.component.html"),
            styles: [__webpack_require__(/*! ./angebot.component.css */ "./src/app/angebot/angebot.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngebotComponent);
    return AngebotComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _anfahrt_anfahrt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anfahrt/anfahrt.component */ "./src/app/anfahrt/anfahrt.component.ts");
/* harmony import */ var _angebot_angebot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angebot/angebot.component */ "./src/app/angebot/angebot.component.ts");
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kontakt/kontakt.component */ "./src/app/kontakt/kontakt.component.ts");
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./impressum/impressum.component */ "./src/app/impressum/impressum.component.ts");








var routes = [
    { path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    { path: "Home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
        path: 'Massagen/Preise',
        component: _angebot_angebot_component__WEBPACK_IMPORTED_MODULE_5__["AngebotComponent"]
    }, {
        path: 'Kontakt',
        component: _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__["KontaktComponent"]
    }, {
        path: 'Anfahrt',
        component: _anfahrt_anfahrt_component__WEBPACK_IMPORTED_MODULE_4__["AnfahrtComponent"]
    }, {
        path: 'Impressum',
        component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_7__["ImpressumComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".myContainer1{\r\n    position:relative;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    height: auto;\r\n    left: 0;\r\n    top: 0;\r\n    background: #e7d6ec;\r\n    padding-bottom: 50px;\r\n    padding-top: 10px;\r\n}\r\n.myContainer2{\r\n    \r\n    width: 1200px;\r\n    height: 95%;\r\n    min-height: 652px;\r\n    padding: 10px;\r\n    background-color: white;\r\n    align-content: center;\r\n    margin: 0 auto;\r\n    border-radius: 25px;\r\n    box-shadow: 5px 5px 5px grey;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q29udGFpbmVyMXtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNlN2Q2ZWM7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5teUNvbnRhaW5lcjJ7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG1pbi1oZWlnaHQ6IDY1MnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZ3JleTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"myContainer1\">\r\n    <div class=\"myContainer2\">\r\n      <app-menuebar></app-menuebar> \r\n      <router-outlet></router-outlet>\r\n</div>\r\n</div>\r\n\r\n "

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menuebar_menuebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuebar/menuebar.component */ "./src/app/menuebar/menuebar.component.ts");
/* harmony import */ var _angebot_angebot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angebot/angebot.component */ "./src/app/angebot/angebot.component.ts");
/* harmony import */ var _anfahrt_anfahrt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./anfahrt/anfahrt.component */ "./src/app/anfahrt/anfahrt.component.ts");
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kontakt/kontakt.component */ "./src/app/kontakt/kontakt.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./impressum/impressum.component */ "./src/app/impressum/impressum.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _menuebar_menuebar_component__WEBPACK_IMPORTED_MODULE_6__["MenuebarComponent"],
                _angebot_angebot_component__WEBPACK_IMPORTED_MODULE_7__["AngebotComponent"],
                _anfahrt_anfahrt_component__WEBPACK_IMPORTED_MODULE_8__["AnfahrtComponent"],
                _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_9__["KontaktComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_13__["ImpressumComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text1{\r\n    margin-top: 30px;\r\n    font-size: 30px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: #9540ad;\r\n    text-align: center;\r\n}\r\n.img1{\r\n    width: 300px;\r\n    height: auto;\r\n    display: block;\r\n    margin: 0 auto;\r\n\r\n}\r\n.text2{\r\n    font-size: 25px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: #9540ad;\r\n    text-align: center;\r\n}\r\n.angebot{\r\n    background-color: #EFE3F3;\r\n    border-radius: 25px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjOztBQUVsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0MXtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjOTU0MGFkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbWcxe1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuLnRleHQye1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzk1NDBhZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYW5nZWJvdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkUzRjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"text1\">Herzlich Willkommen bei Wellness Massagen Anja Kretschmer</h2>\n<img class=\"img1\" src=\"/assets/hotStone.JPG\">\n<br>\n<div class=\"angebot\">\n<h1 class=\"text2\">Monatsangebot - April</h1>\n<p class=\"text2\">Entspannungsmassage 60 Minuten für nur 49,00 €</p>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/impressum/impressum.component.css":
/*!***************************************************!*\
  !*** ./src/app/impressum/impressum.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcHJlc3N1bS9pbXByZXNzdW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/impressum/impressum.component.html":
/*!****************************************************!*\
  !*** ./src/app/impressum/impressum.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Impressum</h1>\n<p>  Wellness-Masssagen Anja Kretschmer</p> \n<p> Inh. Anja Kretschmer</p>\n<p>Bahnhofstraße 13</p>\n<p>01778 Lauenstein</p>\n<br>\n<p>Telefon: 0175-8890333</p>\n<p>E-Mail: wellness-massagen-kretschmer@web.de</p>\n<br>\n<p>Steuer-ID: 69281403591</p>\n<p>\"Kein Ausweis von Umsatzsteuer, da Kleinunternehmer gemäß § 19 UStG.\"</p>"

/***/ }),

/***/ "./src/app/impressum/impressum.component.ts":
/*!**************************************************!*\
  !*** ./src/app/impressum/impressum.component.ts ***!
  \**************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImpressumComponent = /** @class */ (function () {
    function ImpressumComponent() {
    }
    ImpressumComponent.prototype.ngOnInit = function () {
    };
    ImpressumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-impressum',
            template: __webpack_require__(/*! ./impressum.component.html */ "./src/app/impressum/impressum.component.html"),
            styles: [__webpack_require__(/*! ./impressum.component.css */ "./src/app/impressum/impressum.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImpressumComponent);
    return ImpressumComponent;
}());



/***/ }),

/***/ "./src/app/kontakt/kontakt.component.css":
/*!***********************************************!*\
  !*** ./src/app/kontakt/kontakt.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgLogo{\r\n    min-width: 400px;\r\n    height: 400px;\r\n    float: left;\r\n}\r\n.kontaktDiv{\r\n    padding-top: 120px;\r\n    display: inline-block;\r\n    align-content: center;\r\n    margin-left: 70px;\r\n    vertical-align:middle;\r\n}\r\n.textP1{\r\n    display: inline-block;\r\n    padding-left: 190px;\r\n    font-size: 20px;\r\n    color: #9540ad;\r\n}\r\n.textP2{\r\n    display: inline-block;\r\n    padding-left: 120px;\r\n    font-size: 20px;\r\n    color: #9540ad;\r\n}\r\n.textP3{\r\n    display: inline-block;\r\n    padding-left: 130px;\r\n    font-size: 20px;\r\n    color: #9540ad;\r\n}\r\n.textP4{\r\n    display: inline-block;\r\n    padding-left: 112px;\r\n    font-size: 20px;\r\n    color: #9540ad;\r\n}\r\n.textA{\r\n    font-size: 20px;\r\n    color: #9540ad;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29udGFrdC9rb250YWt0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9rb250YWt0L2tvbnRha3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdMb2dve1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ua29udGFrdERpdntcclxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcbi50ZXh0UDF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE5MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM5NTQwYWQ7XHJcbn1cclxuLnRleHRQMntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzk1NDBhZDtcclxufVxyXG4udGV4dFAze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjOTU0MGFkO1xyXG59XHJcbi50ZXh0UDR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM5NTQwYWQ7XHJcbn1cclxuLnRleHRBe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM5NTQwYWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/kontakt/kontakt.component.html":
/*!************************************************!*\
  !*** ./src/app/kontakt/kontakt.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<div>\n<img class=\"imgLogo\" src=\"/assets/logo.png\">\n<div class=\"kontaktDiv\">\n    <label class=\"textA\">Termine nach Vereinbarung</label>\n    <br><br><br>\n    <label class=\"textA\">Telefon:</label> <label class=\"textP2\">0175 8890333</label>\n    <br><br>\n    <label class=\"textA\">E-Mail:</label> <label class=\"textP3\">wellness-massagen-kretschmer@web.de</label>\n    <br><br>    \n    <label class=\"textA\">Adresse:</label> <label class=\"textP4\">Bahnhofstraße 13 </label>\n    <br> <label class=\"textP1\">01778 Lauenstein</label>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/kontakt/kontakt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/kontakt/kontakt.component.ts ***!
  \**********************************************/
/*! exports provided: KontaktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktComponent", function() { return KontaktComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KontaktComponent = /** @class */ (function () {
    function KontaktComponent() {
    }
    KontaktComponent.prototype.ngOnInit = function () {
    };
    KontaktComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kontakt',
            template: __webpack_require__(/*! ./kontakt.component.html */ "./src/app/kontakt/kontakt.component.html"),
            styles: [__webpack_require__(/*! ./kontakt.component.css */ "./src/app/kontakt/kontakt.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KontaktComponent);
    return KontaktComponent;
}());



/***/ }),

/***/ "./src/app/menuebar/menuebar.component.css":
/*!*************************************************!*\
  !*** ./src/app/menuebar/menuebar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgSz{\r\n    width: auto;\r\n    height: 187px;\r\n    align-self: center;\r\n    border-radius: 25px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    box-shadow: 5px 5px 5px grey;\r\n}\r\n.myDiv{\r\n    width: auto;\r\n    height: 240px;\r\n    align-items: center;\r\n}\r\n.myDiv2{\r\n    margin-top: 10px;\r\n    width: auto;\r\n    height: 30px;\r\n    border-radius: 25px;\r\n    text-align: center;\r\n    background-color: #EFE3F3;\r\n}\r\n.route{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 50px;\r\n    font-size: 25px;\r\n    text-decoration: none;\r\n}\r\n.active{\r\n    text-decoration: underline;\r\n    font-weight:bool;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudWViYXIvbWVudWViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL21lbnVlYmFyL21lbnVlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nU3p7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTg3cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmV5O1xyXG59XHJcbi5teURpdntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm15RGl2MntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFM0YzO1xyXG59XHJcbi5yb3V0ZXtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9vbDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menuebar/menuebar.component.html":
/*!**************************************************!*\
  !*** ./src/app/menuebar/menuebar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Menüleiste mit Schriftzug-->\n\n<div class=\"myDiv\" >\n  <img class=\"imgSz\" src=\"\\assets\\schriftzug4.png\">\n \n <div class=\"myDiv2\">\n   \n  <a class=\"route\" routerLink=\"Home\" routerLinkActive=\"active\">Home</a>\n  &nbsp;\n  <a class=\"route\" routerLink=\"Massagen/Preise\" routerLinkActive=\"active\">Massagen/Preise</a>\n  &nbsp;\n  <a class=\"route\" routerLink=\"Kontakt\" routerLinkActive=\"active\">Kontakt</a>\n  &nbsp;\n  <a class=\"route\" routerLink=\"Anfahrt\" routerLinkActive=\"active\">Anfahrt</a>\n  &nbsp;\n  <a class=\"route\" routerLink=\"Impressum\" routerLinkActive=\"active\">Impressum</a>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/menuebar/menuebar.component.ts":
/*!************************************************!*\
  !*** ./src/app/menuebar/menuebar.component.ts ***!
  \************************************************/
/*! exports provided: MenuebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuebarComponent", function() { return MenuebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuebarComponent = /** @class */ (function () {
    function MenuebarComponent() {
    }
    MenuebarComponent.prototype.ngOnInit = function () {
    };
    MenuebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menuebar',
            template: __webpack_require__(/*! ./menuebar.component.html */ "./src/app/menuebar/menuebar.component.html"),
            styles: [__webpack_require__(/*! ./menuebar.component.css */ "./src/app/menuebar/menuebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuebarComponent);
    return MenuebarComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ALLWEM\Documents\Privat\anjaK\web-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map