(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n<div class=\"main\">\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-company/about-company.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-company/about-company.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about\" id=\"aboutCompany\">\n  <div class=\"about__i\">\n    <p class=\"about__title\">{{ 'about_title' | translate}}</p>\n    <hr class=\"about__hr\">\n    <div class=\"about__text\">\n      {{ about.about_text }}\n    </div>\n  </div>\n</div>\n<app-services-list></app-services-list>\n<app-clients></app-clients>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contacts\" id=\"Contacts\">\n  <div class=\"contacts__i\">\n    <h3 class=\"contacts__title\">{{ \"contacts.title\" | translate }}</h3>\n    <hr class=\"contacts__hr\">\n    <div class=\"contacts__desc\">\n      <div class=\"contacts__map\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.68776786793!2d30.25251409688048!3d50.4016990539146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2sru!4v1571950368962!5m2!1sru!2sru\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n      </div>\n      <div class=\"contacts__inner\">\n        <div class=\"contacts__group\">\n          <h5 class=\"contacts__name\">{{ \"contacts.adress\" | translate }}</h5>\n          <p class=\"contacts__text\">{{ contacts.contacts_address }}</p>\n        </div>\n        <div class=\"contacts__group\">\n          <h5 class=\"contacts__name\">{{ \"contacts.phone\" | translate }}</h5>\n          <p class=\"contacts__text\">{{ contacts.contacts_phone }}</p>\n        </div>\n        <div class=\"contacts__group contacts__group_last\">\n          <h5 class=\"contacts__name\">{{ \"contacts.email\" | translate }}</h5>\n          <a href=\"mailto:{{ contacts.contacts_email }}\" target=\"_blank\" class=\"contacts__link\">{{ contacts.contacts_email }}</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lisences/lisences.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lisences/lisences.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"licences\" id=\"lic\">\n  <div class=\"licences__i\">\n    <h3 class=\"licences__title\">{{ \"licences_title\" | translate }}</h3>\n    <hr class=\"licences__hr\">\n    <div class=\"licences__gallery\" *ngIf=\"licence != undefined\">\n      <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/object/object.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/object/object.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"object\" id=\"objectOne\">\n  <div class=\"object__i\">\n    <h3 class=\"object__title\">{{ object.name }}</h3>\n    <hr class=\"object__hr\">\n    <div class=\"object__gallery\" *ngIf=\"galleryImages\">\n      <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/objects/objects.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/objects/objects.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"objects\" id=\"Objects\">\n  <div class=\"objects__i\">\n    <h3 class=\"objects__title\">{{ \"objects__title\" | translate }}</h3>\n    <hr class=\"objects__hr\">\n    <div class=\"objects__list\">\n      <div class=\"objects__item\" *ngFor=\"let obj of objects, let x = index\">\n        <a [routerLink]=\"'/object/' + obj.id\" class=\"objects__link\">\n          <img style=\"float: left\" [src]=\"obj.img_main\" alt=\"{{ obj.alt }}\" class=\"objects__img\">\n          <h5 class=\"objects__name\">{{ obj.name }}</h5>\n          <div style=\"clear: both;\"></div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/partners/partners.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/partners/partners.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"partners\" id=\"Partners\">\n  <div class=\"partners__i\">\n    <h3 class=\"partners__title\">{{ \"partners__title\" | translate }}</h3>\n    <hr class=\"partners__hr\">\n    <div class=\"partners__list\">\n      <div class=\"partners__item\" *ngFor=\"let part of partners\">\n        <a href=\"{{ part.link }}\" class=\"partners__link\">\n          <img [src]=\"part.img\" alt=\"\" class=\"partners__img\">\n          <p class=\"partners__name\">{{ part.name }}</p>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<app-services-list></app-services-list>\n<app-clients></app-clients>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/service/service.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/service/service.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"service\" id=\"servOne\">\n  <div class=\"service__i\">\n    <h3 class=\"service__title\">{{ service.name }}</h3>\n    <hr class=\"service__hr\">\n    <div class=\"service__description\">\n      <img [src]=\"service.img\" alt=\"{{ service.alt }}\" class=\"service__img\">\n      <p class=\"service__text\">{{ service.text }}</p>\n      <div style=\"clear: both;\"></div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services-list/services-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/services-list/services-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"services-list\">\n  <owl-carousel\n    [options]=\"options\" [items]=\"services\" [carouselClasses]=\"['owl-theme', 'sliding']\" #owlCarousel  (mousewheel)=\"mouseWheel($event)\">\n    <div class=\"services-list__item item\" *ngFor=\"let ser of services, let x = index\">\n      <a routerLink=\"/service/{{ser.id}}\" class=\"services-list__link\">\n        <div class=\"services-list__i\">\n          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 134 116\" xml:space=\"preserve\" width=\"134\" height=\"116\">\n        <g>\n          <polygon class=\"polygon\" stroke=\"#000000\" points=\"34.4,114.5 1.7,58 34.4,1.5 99.6,1.5 132.3,58 99.6,114.5\"></polygon>\n          <path d=\"M35.2,3l63.5,0l31.8,55l-31.8,55l-63.5,0L3.5,58L35.2,3 M33.5,0L0,58l33.5,58l67,0L134,58L100.5,0L33.5,0L33.5,0z\"></path>\n        </g>\n        <g>\n          <path class=\"stroke-inside\" d=\"M94.7,9.8l27.9,48.1l-27.7,48.2l-55.6,0.1L11.4,58.1L39.1,9.9L94.7,9.8 M96.4,6.8l-59,0.1L8,58.1l29.6,51.1l59-0.1L126,57.9L96.4,6.8L96.4,6.8z\"></path>\n        </g>\n      </svg>\n          <div class=\"services-list__icon\">\n            {{ser.icon}}\n          </div>\n        </div>\n        <div class=\"services-list__name\">{{ ser.name }}</div>\n      </a>\n    </div>\n    <div class=\"services-list__item item\">\n      <a href=\"https://alef-stroy.com/\" target=\"_blank\" class=\"services-list__link\">\n        <div class=\"services-list__i\">\n          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 134 116\" xml:space=\"preserve\" width=\"134\" height=\"116\">\n        <g>\n          <polygon class=\"polygon\" stroke=\"#000000\" points=\"34.4,114.5 1.7,58 34.4,1.5 99.6,1.5 132.3,58 99.6,114.5\"></polygon>\n          <path d=\"M35.2,3l63.5,0l31.8,55l-31.8,55l-63.5,0L3.5,58L35.2,3 M33.5,0L0,58l33.5,58l67,0L134,58L100.5,0L33.5,0L33.5,0z\"></path>\n        </g>\n        <g>\n          <path class=\"stroke-inside\" d=\"M94.7,9.8l27.9,48.1l-27.7,48.2l-55.6,0.1L11.4,58.1L39.1,9.9L94.7,9.8 M96.4,6.8l-59,0.1L8,58.1l29.6,51.1l59-0.1L126,57.9L96.4,6.8L96.4,6.8z\"></path>\n        </g>\n      </svg>\n          <div class=\"fa services-list__icon\">\n            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n              <g>\n                  <g>\n                      <path d=\"M442.547,143.877c-3.46-4.855-9.054-7.737-15.016-7.737h-70.827c-7.511,0-14.271,4.556-17.092,11.517L291.55,266.289\n                          h-43.252L230.19,97.342c-1.004-9.371-8.912-16.476-18.337-16.476H18.442C8.257,80.866,0,89.123,0,99.308\n                          c0,10.185,8.257,18.442,18.442,18.442h8.1v150.433c-2.448-1.2-5.19-1.893-8.1-1.893C8.257,266.289,0,274.546,0,284.731v40.582\n                          c0,7.347,4.308,13.673,10.525,16.637c11.122-10.395,26.04-16.776,42.427-16.776h201.657l-2.358-22.002h51.725\n                          c7.511,0,14.271-4.556,17.092-11.517l48.062-118.632h48.899l12.135,17.022h45.295L442.547,143.877z M85.227,229.085H63.425V117.75\n                          h21.802V229.085z M122.11,229.085V117.75h73.172l11.933,111.335H122.11z\"/>\n                  </g>\n              </g>\n              <g>\n                  <g>\n                      <path d=\"M433.83,208.487v0.001v46.981c33.643,14.851,60.944,40.235,78.17,72.576V208.487H433.83z\"/>\n                  </g>\n              </g>\n              <g>\n                  <g>\n                      <path d=\"M366.119,343.617H52.952c-24.128,0-43.759,19.629-43.759,43.759s19.631,43.759,43.759,43.759h313.166\n                          c24.128,0,43.759-19.629,43.759-43.759S390.247,343.617,366.119,343.617z M57.182,405.037c-9.754,0-17.662-7.908-17.662-17.662\n                          c0-9.754,7.908-17.662,17.662-17.662s17.662,7.908,17.662,17.662C74.844,397.13,66.936,405.037,57.182,405.037z M364.187,405.036\n                          c-9.754,0-17.662-7.908-17.662-17.662c0-9.754,7.908-17.662,17.662-17.662c9.754,0,17.662,7.908,17.662,17.662\n                          C381.849,397.128,373.942,405.036,364.187,405.036z\"/>\n                  </g>\n              </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n            </svg>\n          </div>\n        </div>\n        <div class=\"services-list__name\">{{'service_alef_name' | translate}}</div>\n      </a>\n    </div>\n  </owl-carousel>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"services\" id=\"serv\">\n  <div class=\"services__i\">\n    <p class=\"services__title\">{{ 'services_title' | translate }}</p>\n    <hr class=\"services__hr\">\n    <div class=\"services__list\">\n      <div class=\"services__item\" *ngFor=\"let ser of services\">\n        <a [routerLink]=\"'/service/' + ser.id\" class=\"services__link\">\n          <div class=\"services__desc\">\n            <img [src]=\"ser.img\" alt=\"{{ ser.alt }}\" class=\"services__img\">\n            <div class=\"services__description\">\n              <h5 class=\"services__name\">{{ ser.name }}</h5>\n              <p class=\"services__text\">{{ ser.text }}</p>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"services__item\">\n        <a href=\"https://alef-stroy.com/\" target=\"_blank\" class=\"services__link\">\n          <div class=\"services__desc\">\n            <img src=\"/assets/img/alef.png\" alt=\"alef-stroy\" class=\"services__img\">\n            <div class=\"services__description\">\n              <h5 class=\"services__name\">{{ 'service_alef_name' | translate }}</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/clients/clients.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/clients/clients.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clients\">\n  <div class=\"clients__i\">\n    <p class=\"clients__title\">{{ 'clients_title' | translate }}</p>\n    <hr class=\"clients__hr\">\n    <div class=\"clients__list\">\n      <div class=\"clients__item\" *ngFor=\"let client of clients\">\n        <a href=\"{{ client.link }}\" target=\"_blank\" class=\"clients__link\">\n          <img [src]=\"client.img\" alt=\"{{  client.ceo_alt }}\" class=\"clients__img\">\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n  <p class=\"footer__text\">\n    &copy; 2019 Sheppard.  All Rights Reserved. Privacy Policy\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"menu\">\n    <div class=\"menu__logo\">\n      <a [routerLink]=\"'home'\" class=\"menu__logo-link\">\n        <img src=\"../../../../assets/img/logo.png\" alt=\"logo\" class=\"menu__logo-img\">\n      </a>\n    </div>\n    <div class=\"menu__i\">\n      <ul class=\"menu__list\">\n        <li class=\"menu__item\">\n          <a [routerLink]=\"'home'\" routerLinkActive=\"menu__link_active\" class=\"menu__link\">{{ 'menu.home' | translate }}</a>\n        </li>\n        <li class=\"menu__item\">\n          <a [routerLink]=\"'about-us'\" routerLinkActive=\"menu__link_active\" class=\"menu__link\">{{ 'menu.about' | translate }}</a>\n        </li>\n        <li class=\"menu__item\">\n          <a [routerLink]=\"'services'\" routerLinkActive=\"menu__link_active\" class=\"menu__link\">{{ 'menu.services' | translate }}</a>\n        </li>\n        <li class=\"menu__item\">\n          <a [routerLink]=\"'lisences'\" routerLinkActive=\"menu__link_active\" class=\"menu__link\">{{ 'menu.licences' | translate }}</a>\n        </li>\n        <li class=\"menu__item\">\n          <a [routerLink]=\"'partners'\" routerLinkActive=\"menu__link_active\" class=\"menu__link\">{{ 'menu.partners' | translate }}</a>\n        </li>\n        <li class=\"menu__item\">\n          <a [routerLink]=\"'objects'\" routerLinkActive=\"menu__link_active\" class=\"menu__link\">{{ 'menu.objects' | translate }}</a>\n        </li>\n        <li class=\"menu__item\">\n          <a [routerLink]=\"'contacts'\" routerLinkActive=\"menu__link_active\" class=\"menu__link\">{{ 'menu.contacts' | translate }}</a>\n        </li>\n      </ul>\n    </div>\n    <mat-form-field class=\"menu__lang\">\n      <mat-select name=\"lang\" class=\"menu__select\" [(value)]=\"selectedLanguage\" (valueChange)=\"changeLanguage()\">\n        <mat-select-trigger>\n          <span class=\"menu__lang-icon menu__lang-icon-{{ selectedLanguage | lowercase}}\"> </span>\n        </mat-select-trigger>\n        <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.code\" class=\"menu__option\">\n          <span class=\"menu__lang-img menu__lang-img-{{lang.code | lowercase}}\"></span>\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n</div>\n<mat-sidenav-container class=\"example-container menu-phone\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" class=\"menu-phone__sidenav\">\n    <div class=\"menu-phone__logo\">\n      <a [routerLink]=\"'home'\" class=\"menu__logo-link_phone\">\n        <img src=\"../../../../assets/img/logo.png\" alt=\"logo\" class=\"menu__logo-img_phone\">\n      </a>\n    </div>\n    <div class=\"menu-phone__i\">\n      <ul class=\"menu-phone__list\">\n        <li class=\"menu-phone__item\">\n          <a [routerLink]=\"'home'\" (click)=\"sidenav.toggle()\" routerLinkActive=\"menu-phone__link_active\" class=\"menu-phone__link\">{{ 'menu.home' | translate }}</a>\n        </li>\n        <li class=\"menu-phone__item\">\n          <a [routerLink]=\"'about-us'\" (click)=\"sidenav.toggle()\" routerLinkActive=\"menu-phone__link_active\" class=\"menu-phone__link\">{{ 'menu.about' | translate }}</a>\n        </li>\n        <li class=\"menu-phone__item\">\n          <a [routerLink]=\"'services'\" (click)=\"sidenav.toggle()\" routerLinkActive=\"menu-phone__link_active\" class=\"menu-phone__link\">{{ 'menu.services' | translate }}</a>\n        </li>\n        <li class=\"menu-phone__item\">\n          <a [routerLink]=\"'lisences'\" (click)=\"sidenav.toggle()\" routerLinkActive=\"menu-phone__link_active\" class=\"menu-phone__link\">{{ 'menu.licences' | translate }}</a>\n        </li>\n        <li class=\"menu-phone__item\">\n          <a [routerLink]=\"'partners'\" (click)=\"sidenav.toggle()\" routerLinkActive=\"menu-phone__link_active\" class=\"menu-phone__link\">{{ 'menu.partners' | translate }}</a>\n        </li>\n        <li class=\"menu-phone__item\">\n          <a [routerLink]=\"'objects'\" (click)=\"sidenav.toggle()\" routerLinkActive=\"menu-phone__link_active\" class=\"menu-phone__link\">{{ 'menu.objects' | translate }}</a>\n        </li>\n        <li class=\"menu-phone__item\">\n          <a [routerLink]=\"'contacts'\" (click)=\"sidenav.toggle()\" routerLinkActive=\"menu-phone__link_active\" class=\"menu-phone__link\">{{ 'menu.contacts' | translate }}</a>\n        </li>\n      </ul>\n      <mat-form-field class=\"menu__lang menu__lang_phone\">\n        <mat-select name=\"lang\" class=\"menu__select\" [(value)]=\"selectedLanguage\" (valueChange)=\"changeLanguage()\">\n          <mat-select-trigger>\n            <span class=\"menu__lang-icon menu__lang-icon-{{ selectedLanguage | lowercase}}\"> </span>\n          </mat-select-trigger>\n          <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.code\" class=\"menu__option\">\n            <span class=\"menu__lang-img menu__lang-img-{{lang.code | lowercase}}\"></span>\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"menu-phone__content\">\n    <p><i (click)=\"sidenav.toggle()\" class=\"material-icons menu-phone__icon\">menu</i></p>\n    <mat-form-field class=\"menu__lang menu__lang_tablet\">\n      <mat-select name=\"lang\" class=\"menu__select\" [(value)]=\"selectedLanguage\" (valueChange)=\"changeLanguage()\">\n        <mat-select-trigger>\n          <span class=\"menu__lang-icon menu__lang-icon-{{ selectedLanguage | lowercase}}\"> </span>\n        </mat-select-trigger>\n        <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.code\" class=\"menu__option\">\n          <span class=\"menu__lang-img menu__lang-img-{{lang.code | lowercase}}\"></span>\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/slider/slider.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/slider/slider.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slider\">\n  <div class=\"slider__i\">\n    <ngb-carousel\n      [showNavigationArrows]=\"false\"\n      [showNavigationIndicators]=\"true\"\n      interval=\"10000\"\n      class=\"slider-carousel\">\n      <ng-template ngbSlide class=\"slider-carousel__template\" *ngFor=\"let slide of slides\">\n        <div class=\"picsum-img-wrapper slider-carousel__slide\">\n          <div [ngStyle]=\"{'background': 'url(' + slide.img + ') center no-repeat',\n          'background-size': 'cover'}\" class=\"slider-carousel__img\">\n          </div>\n        </div>\n      </ng-template>\n    </ngb-carousel>\n    <div class=\"slider-carousel__caption\">\n      <p class=\"slider-carousel__text\">\n        {{ 'slider_text' | translate }}\n      </p>\n      <form class=\"slider-carousel__form\" (ngSubmit)=\"submitForm()\" [formGroup]=\"form\">n\n        <h6 class=\"slider-carousel__title\">{{ 'request.text' | translate }}</h6>\n        <div class=\"slider-carousel__group\">\n          <input type=\"text\" class=\"slider-carousel__input\" placeholder=\"{{ 'request.name' | translate }}\" formControlName=\"name\" [ngModel]=\"name\">\n          <input prefix=\"+38 \" mask=\"(000) 000 00 00\" type=\"text\" class=\"slider-carousel__input\" placeholder=\"{{ 'request.phone' | translate }}\" formControlName=\"phone\" [ngModel]=\"phone\">\n          <textarea class=\"slider-carousel__textarea\" placeholder=\"{{ 'request.question' | translate }}\" formControlName=\"question\" [ngModel]=\"text\"></textarea>\n          <button *ngIf=\"form.status === 'VALID'\" type=\"submit\" class=\"slider-carousel__button slider-caroudel__button_active\">Отправить</button>\n          <button *ngIf=\"form.status != 'VALID'\" disabled class=\"slider-carousel__button\">{{ 'request.button' | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-services-list></app-services-list>\n<app-clients></app-clients>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _components_lisences_lisences_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lisences/lisences.component */ "./src/app/components/lisences/lisences.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_about_company_about_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about-company/about-company.component */ "./src/app/components/about-company/about-company.component.ts");
/* harmony import */ var _components_service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/service/service.component */ "./src/app/components/service/service.component.ts");
/* harmony import */ var _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/partners/partners.component */ "./src/app/components/partners/partners.component.ts");
/* harmony import */ var _components_objects_objects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/objects/objects.component */ "./src/app/components/objects/objects.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_object_object_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/object/object.component */ "./src/app/components/object/object.component.ts");
/* harmony import */ var _shared_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/slider/slider.component */ "./src/app/shared/components/slider/slider.component.ts");












var routes = [
    {
        path: 'home',
        component: _shared_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_11__["SliderComponent"]
    },
    {
        path: 'about-us',
        component: _components_about_company_about_company_component__WEBPACK_IMPORTED_MODULE_5__["AboutCompanyComponent"]
    },
    {
        path: 'services',
        component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"]
    },
    {
        path: 'service/:id',
        component: _components_service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"]
    },
    {
        path: 'lisences',
        component: _components_lisences_lisences_component__WEBPACK_IMPORTED_MODULE_3__["LisencesComponent"]
    },
    {
        path: 'partners',
        component: _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_7__["PartnersComponent"]
    },
    {
        path: 'objects',
        component: _components_objects_objects_component__WEBPACK_IMPORTED_MODULE_8__["ObjectsComponent"]
    },
    {
        path: 'object/:id',
        component: _components_object_object_component__WEBPACK_IMPORTED_MODULE_10__["ObjectComponent"]
    },
    {
        path: 'contacts',
        component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
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

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */");

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
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/language.service */ "./src/app/shared/services/language.service.ts");
/* harmony import */ var _shared_services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/home.service */ "./src/app/shared/services/home.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(languageServicve, homeService, meta, titleService) {
        this.languageServicve = languageServicve;
        this.homeService = homeService;
        this.meta = meta;
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reloadData();
        this.languageServicve.selectLang.subscribe(function () {
            _this.reloadData();
        });
    };
    AppComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageServicve.selectLang.value) {
            this.homeService.getHomeSeo().subscribe(function (data) {
                if (data) {
                    _this.titleService.setTitle(data.home_title);
                    _this.meta.addTags([
                        { name: 'description', content: data.home_description },
                        { name: 'keywords', content: data.home_keywords }
                    ]);
                }
            });
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] },
        { type: _shared_services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_about_company_about_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about-company/about-company.component */ "./src/app/components/about-company/about-company.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_lisences_lisences_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/lisences/lisences.component */ "./src/app/components/lisences/lisences.component.ts");
/* harmony import */ var _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/partners/partners.component */ "./src/app/components/partners/partners.component.ts");
/* harmony import */ var _components_objects_objects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/objects/objects.component */ "./src/app/components/objects/objects.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/menu/menu.component */ "./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _shared_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/components/slider/slider.component */ "./src/app/shared/components/slider/slider.component.ts");
/* harmony import */ var _components_service_service_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/service/service.component */ "./src/app/components/service/service.component.ts");
/* harmony import */ var _components_object_object_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/object/object.component */ "./src/app/components/object/object.component.ts");
/* harmony import */ var _shared_services_slide_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/services/slide.service */ "./src/app/shared/services/slide.service.ts");
/* harmony import */ var _shared_services_request_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/services/request.service */ "./src/app/shared/services/request.service.ts");
/* harmony import */ var _shared_services_service_services__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/services/service.services */ "./src/app/shared/services/service.services.ts");
/* harmony import */ var _shared_services_home_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/services/home.service */ "./src/app/shared/services/home.service.ts");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/services/language.service */ "./src/app/shared/services/language.service.ts");
/* harmony import */ var _shared_components_clients_clients_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/components/clients/clients.component */ "./src/app/shared/components/clients/clients.component.ts");
/* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/services/client.service */ "./src/app/shared/services/client.service.ts");
/* harmony import */ var _shared_services_about_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/services/about.service */ "./src/app/shared/services/about.service.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _shared_services_licence_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/services/licence.service */ "./src/app/shared/services/licence.service.ts");
/* harmony import */ var _shared_services_object_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/services/object.service */ "./src/app/shared/services/object.service.ts");
/* harmony import */ var _shared_services_partner_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/services/partner.service */ "./src/app/shared/services/partner.service.ts");
/* harmony import */ var _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/services/contacts.service */ "./src/app/shared/services/contacts.service.ts");
/* harmony import */ var _components_services_list_services_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/services-list/services-list.component */ "./src/app/components/services-list/services-list.component.ts");








































function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_about_company_about_company_component__WEBPACK_IMPORTED_MODULE_15__["AboutCompanyComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"],
                _components_lisences_lisences_component__WEBPACK_IMPORTED_MODULE_17__["LisencesComponent"],
                _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_18__["PartnersComponent"],
                _components_objects_objects_component__WEBPACK_IMPORTED_MODULE_19__["ObjectsComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_20__["ContactsComponent"],
                _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__["MenuComponent"],
                _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _shared_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_23__["SliderComponent"],
                _components_service_service_component__WEBPACK_IMPORTED_MODULE_24__["ServiceComponent"],
                _components_object_object_component__WEBPACK_IMPORTED_MODULE_25__["ObjectComponent"],
                _shared_components_clients_clients_component__WEBPACK_IMPORTED_MODULE_31__["ClientsComponent"],
                _components_services_list_services_list_component__WEBPACK_IMPORTED_MODULE_39__["ServicesListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                }),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_12__["NgxGalleryModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_34__["ScrollToModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__["OwlModule"]
            ],
            entryComponents: [
                _components_about_company_about_company_component__WEBPACK_IMPORTED_MODULE_15__["AboutCompanyComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"],
                _components_lisences_lisences_component__WEBPACK_IMPORTED_MODULE_17__["LisencesComponent"],
                _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_18__["PartnersComponent"],
                _components_objects_objects_component__WEBPACK_IMPORTED_MODULE_19__["ObjectsComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_20__["ContactsComponent"],
                _components_service_service_component__WEBPACK_IMPORTED_MODULE_24__["ServiceComponent"],
                _shared_components_clients_clients_component__WEBPACK_IMPORTED_MODULE_31__["ClientsComponent"]
            ],
            providers: [
                _shared_services_slide_service__WEBPACK_IMPORTED_MODULE_26__["SlideService"],
                _shared_services_request_service__WEBPACK_IMPORTED_MODULE_27__["RequestService"],
                _shared_services_service_services__WEBPACK_IMPORTED_MODULE_28__["ServiceService"],
                _shared_services_home_service__WEBPACK_IMPORTED_MODULE_29__["HomeService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
                _shared_services_language_service__WEBPACK_IMPORTED_MODULE_30__["LanguageService"],
                _shared_services_client_service__WEBPACK_IMPORTED_MODULE_32__["ClientService"],
                _shared_services_about_service__WEBPACK_IMPORTED_MODULE_33__["AboutService"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_34__["ScrollToService"],
                _shared_services_licence_service__WEBPACK_IMPORTED_MODULE_35__["LicenceService"],
                _shared_services_object_service__WEBPACK_IMPORTED_MODULE_36__["ObjectService"],
                _shared_services_partner_service__WEBPACK_IMPORTED_MODULE_37__["PartnerService"],
                _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_38__["ContactsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-company/about-company.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/about-company/about-company.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* # Setup devices width */\n/* # Variables for mobile first approach and strict ranges */\n.about {\n  padding: 60px 0;\n  text-align: center;\n  background: url('bg_body.png');\n}\n.about__i {\n  width: 50%;\n  margin: 0 auto;\n}\n@media only screen and (max-width: 991px) {\n  .about__i {\n    width: 100%;\n    padding: 0 20px;\n  }\n}\n.about__title {\n  margin-top: 100px;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #484848;\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 1.5;\n}\n.about__hr {\n  width: 32px;\n  height: 8px;\n  background: #1d6887;\n}\n.about__text {\n  font-size: 16px;\n  line-height: 1.84615;\n  font-weight: 400;\n  color: #6f6f6f;\n  text-align: justify;\n  text-indent: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1jb21wYW55L2Fib3V0LWNvbXBhbnkuY29tcG9uZW50Lmxlc3MiLCIvVm9sdW1lcy9Db2RlL29wL2Zyb250X2J1aWxkaWluZy9zcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtY29tcGFueS9hYm91dC1jb21wYW55LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQiw0REFBNEQ7QUNDNUQ7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBRENGO0FDQ0U7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBRENKO0FDQ0k7RUFBQTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VERUo7QUFDRjtBQ0NFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEQ0o7QUNFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QURBSjtBQ0dFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRERKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1jb21wYW55L2Fib3V0LWNvbXBhbnkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjIFNldHVwIGRldmljZXMgd2lkdGggKi9cbi8qICMgVmFyaWFibGVzIGZvciBtb2JpbGUgZmlyc3QgYXBwcm9hY2ggYW5kIHN0cmljdCByYW5nZXMgKi9cbi5hYm91dCB7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmdfYm9keS5wbmcnKTtcbn1cbi5hYm91dF9faSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYWJvdXRfX2kge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxufVxuLmFib3V0X190aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmFib3V0X19ociB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogIzFkNjg4Nztcbn1cbi5hYm91dF9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuODQ2MTU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNmY2ZjZmO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWluZGVudDogNTBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL19tZWRpYVwiO1xuXG4uYWJvdXQge1xuICBwYWRkaW5nOiA2MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnX2JvZHkucG5nJyk7XG5cbiAgJl9faSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIEBtZWRpYSBAdGFibGV0LW1heC13aWR0aCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB9XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAmX19ociB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYmFja2dyb3VuZDogIzFkNjg4NztcbiAgfVxuXG4gICZfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS44NDYxNTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNmY2ZjZmO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/about-company/about-company.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/about-company/about-company.component.ts ***!
  \*********************************************************************/
/*! exports provided: AboutCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCompanyComponent", function() { return AboutCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/about.service */ "./src/app/shared/services/about.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_models_about_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/about.model */ "./src/app/shared/models/about.model.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/language.service */ "./src/app/shared/services/language.service.ts");







var AboutCompanyComponent = /** @class */ (function () {
    function AboutCompanyComponent(aboutService, meta, titleService, scrollToService, languageService) {
        this.aboutService = aboutService;
        this.meta = meta;
        this.titleService = titleService;
        this.scrollToService = scrollToService;
        this.languageService = languageService;
        this.about = new _shared_models_about_model__WEBPACK_IMPORTED_MODULE_4__["About"]('', '', '', '');
    }
    AboutCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.triggerScrollTo();
        this.reloadData();
        this.languageService.selectLang.subscribe(function (lang) {
            _this.reloadData();
        });
    };
    AboutCompanyComponent.prototype.triggerScrollTo = function () {
        var config = {
            target: 'aboutCompany'
        };
        this.scrollToService.scrollTo(config);
    };
    AboutCompanyComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageService.selectLang.value) {
            this.aboutService.getAbout().subscribe(function (data) {
                _this.about = data;
                _this.titleService.setTitle(_this.about.about_title);
                _this.meta.addTags([
                    { name: 'description', content: _this.about.about_description },
                    { name: 'keywords', content: _this.about.about_keywords }
                ]);
            });
        }
    };
    AboutCompanyComponent.ctorParameters = function () { return [
        { type: _shared_services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToService"] },
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }
    ]; };
    AboutCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-company',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-company/about-company.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-company.component.less */ "./src/app/components/about-company/about-company.component.less")).default]
        })
    ], AboutCompanyComponent);
    return AboutCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/contacts/contacts.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.less ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* # Setup devices width */\n/* # Variables for mobile first approach and strict ranges */\n.contacts {\n  padding: 60px 0;\n  text-align: center;\n  background: url('bg_body.png');\n}\n.contacts__i {\n  width: 80%;\n  margin: 0 auto;\n}\n@media only screen and (max-width: 991px) {\n  .contacts__i {\n    width: 100%;\n    padding: 0 20px;\n  }\n}\n.contacts__title {\n  margin-top: 100px;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #484848;\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 1.5;\n}\n.contacts__hr {\n  width: 32px;\n  height: 8px;\n  background: #1d6887;\n}\n.contacts__text {\n  font-size: 22px;\n  line-height: 1.84615;\n  font-weight: 400;\n  color: #6f6f6f;\n  text-align: justify;\n}\n@media only screen and (max-width: 991px) {\n  .contacts__text {\n    text-align: center;\n  }\n}\n.contacts__map {\n  width: 100%;\n  height: 400px;\n}\n.contacts__map iframe {\n  width: 100%;\n  height: 100%;\n}\n.contacts__inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 30px 0;\n  background: #fff;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  padding: 30px;\n}\n@media only screen and (max-width: 991px) {\n  .contacts__inner {\n    display: block;\n    text-align: center;\n  }\n}\n.contacts__link {\n  text-decoration: underline;\n  color: #1d6887;\n}\n.contacts__link:hover {\n  text-decoration: none;\n}\n@media only screen and (max-width: 991px) {\n  .contacts__group {\n    padding: 10px;\n    border-bottom: 1px solid #ccc;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .contacts__group_last {\n    border-bottom: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQubGVzcyIsIi9Wb2x1bWVzL0NvZGUvb3AvZnJvbnRfYnVpbGRpaW5nL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIsNERBQTREO0FDQzVEO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QURDRjtBQ0NFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QURDSjtBQ0NJO0VBQUE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFREVKO0FBQ0Y7QUNDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRENKO0FDRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FEQUo7QUNHRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEREo7QUNHSTtFQUFBO0lBQ0Usa0JBQUE7RURBSjtBQUNGO0FDR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBRERKO0FDR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBREROO0FDS0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtBREhKO0FDS0k7RUFBQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFREZKO0FBQ0Y7QUNLRTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBREhKO0FDS0k7RUFDRSxxQkFBQTtBREhOO0FDUUk7RUFBQTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtFRExKO0FBQ0Y7QUNRTTtFQUFBO0lBQ0UsbUJBQUE7RURMTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICMgU2V0dXAgZGV2aWNlcyB3aWR0aCAqL1xuLyogIyBWYXJpYWJsZXMgZm9yIG1vYmlsZSBmaXJzdCBhcHByb2FjaCBhbmQgc3RyaWN0IHJhbmdlcyAqL1xuLmNvbnRhY3RzIHtcbiAgcGFkZGluZzogNjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iZ19ib2R5LnBuZycpO1xufVxuLmNvbnRhY3RzX19pIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWN0c19faSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG4uY29udGFjdHNfX3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uY29udGFjdHNfX2hyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMWQ2ODg3O1xufVxuLmNvbnRhY3RzX190ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMS44NDYxNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2ZjZmNmY7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWN0c19fdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uY29udGFjdHNfX21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLmNvbnRhY3RzX19tYXAgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWN0c19faW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWN0c19faW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmNvbnRhY3RzX19saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMWQ2ODg3O1xufVxuLmNvbnRhY3RzX19saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY29udGFjdHNfX2dyb3VwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWN0c19fZ3JvdXBfbGFzdCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX21lZGlhXCI7XG5cbi5jb250YWN0cyB7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmdfYm9keS5wbmcnKTtcblxuICAmX19pIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgQG1lZGlhIEB0YWJsZXQtbWF4LXdpZHRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gICZfX2hyIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWQ2ODg3O1xuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg0NjE1O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM2ZjZmNmY7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxuICAgIEBtZWRpYSBAdGFibGV0LW1heC13aWR0aCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuXG4gICAgJiBpZnJhbWUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJl9faW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuXG4gICAgQG1lZGlhIEB0YWJsZXQtbWF4LXdpZHRoIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2xpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMWQ2ODg3O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJl9fZ3JvdXAge1xuICAgIEBtZWRpYSBAdGFibGV0LW1heC13aWR0aCB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgfVxuXG4gICAgJl9sYXN0IHtcbiAgICAgIEBtZWRpYSBAdGFibGV0LW1heC13aWR0aCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/contacts.service */ "./src/app/shared/services/contacts.service.ts");
/* harmony import */ var _shared_models_contacts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/contacts.model */ "./src/app/shared/models/contacts.model.ts");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/language.service */ "./src/app/shared/services/language.service.ts");







var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(meta, titleService, scrollToService, contactsService, languageServices) {
        this.meta = meta;
        this.titleService = titleService;
        this.scrollToService = scrollToService;
        this.contactsService = contactsService;
        this.languageServices = languageServices;
        this.contacts = new _shared_models_contacts_model__WEBPACK_IMPORTED_MODULE_5__["Contact"]('', '', '', '', '', '');
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.triggerScrollTo();
        this.reloadData();
        this.languageServices.selectLang.subscribe(function (lang) {
            _this.reloadData();
        });
    };
    ContactsComponent.prototype.triggerScrollTo = function () {
        var config = {
            target: 'Contacts'
        };
        this.scrollToService.scrollTo(config);
    };
    ContactsComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageServices.selectLang.value) {
            this.contactsService.getContacts().subscribe(function (data) {
                if (data) {
                    _this.contacts = data;
                    _this.titleService.setTitle(_this.contacts.contacts_title);
                    _this.meta.addTags([
                        { name: 'description', content: _this.contacts.contacts_description },
                        { name: 'keywords', content: _this.contacts.contacts_keywords }
                    ]);
                }
            });
        }
    };
    ContactsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"] },
        { type: _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_4__["ContactsService"] },
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }
    ]; };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts.component.less */ "./src/app/components/contacts/contacts.component.less")).default]
        })
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/lisences/lisences.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/lisences/lisences.component.less ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".licences {\n  padding: 60px 0;\n  text-align: center;\n  background: url('bg_body.png');\n}\n.licences__i {\n  margin: 0 30px;\n}\n.licences__title {\n  margin-top: 100px;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #484848;\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 1.5;\n}\n.licences__hr {\n  width: 32px;\n  height: 8px;\n  background: #1d6887;\n}\n.licences ngx-gallery {\n  position: relative;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0NvZGUvb3AvZnJvbnRfYnVpbGRpaW5nL3NyYy9hcHAvY29tcG9uZW50cy9saXNlbmNlcy9saXNlbmNlcy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saXNlbmNlcy9saXNlbmNlcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc2VuY2VzL2xpc2VuY2VzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpY2VuY2VzIHtcbiAgcGFkZGluZzogNjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iZ19ib2R5LnBuZycpO1xuXG4gICZfX2kge1xuICAgIG1hcmdpbjogMCAzMHB4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgJl9faHIge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJhY2tncm91bmQ6ICMxZDY4ODc7XG4gIH1cblxuICAmIG5neC1nYWxsZXJ5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuIiwiLmxpY2VuY2VzIHtcbiAgcGFkZGluZzogNjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iZ19ib2R5LnBuZycpO1xufVxuLmxpY2VuY2VzX19pIHtcbiAgbWFyZ2luOiAwIDMwcHg7XG59XG4ubGljZW5jZXNfX3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4ubGljZW5jZXNfX2hyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMWQ2ODg3O1xufVxuLmxpY2VuY2VzIG5neC1nYWxsZXJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/lisences/lisences.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/lisences/lisences.component.ts ***!
  \***********************************************************/
/*! exports provided: LisencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LisencesComponent", function() { return LisencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _shared_services_licence_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/licence.service */ "./src/app/shared/services/licence.service.ts");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/language.service */ "./src/app/shared/services/language.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var LisencesComponent = /** @class */ (function () {
    function LisencesComponent(scrollToService, licenceService, languageService, meta, titleService) {
        this.scrollToService = scrollToService;
        this.licenceService = licenceService;
        this.languageService = languageService;
        this.meta = meta;
        this.titleService = titleService;
        this.images = [];
    }
    LisencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.triggerScrollTo();
        this.reloadData();
        this.languageService.selectLang.subscribe(function () {
            _this.reloadData();
        });
    };
    LisencesComponent.prototype.triggerScrollTo = function () {
        var config = {
            target: 'lic'
        };
        this.scrollToService.scrollTo(config);
    };
    LisencesComponent.prototype.getGalleryOptions = function () {
        this.galleryOptions = [
            {
                width: '800px',
                height: '600px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [];
        for (var i = 0; i < this.images.length; i++) {
            this.galleryImages.push({
                small: this.images[i],
                medium: this.images[i],
                big: this.images[i]
            });
        }
    };
    LisencesComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageService.selectLang.value) {
            this.licenceService.getLicences().subscribe(function (data) {
                if (data) {
                    _this.licence = data;
                    _this.images = _this.licence.images.split(';');
                    _this.titleService.setTitle(_this.licence.title);
                    _this.meta.addTags([
                        { name: 'description', content: _this.licence.description },
                        { name: 'keywords', content: _this.licence.keywords }
                    ]);
                    _this.getGalleryOptions();
                }
            });
        }
    };
    LisencesComponent.ctorParameters = function () { return [
        { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToService"] },
        { type: _shared_services_licence_service__WEBPACK_IMPORTED_MODULE_4__["LicenceService"] },
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }
    ]; };
    LisencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lisences',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lisences.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lisences/lisences.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lisences.component.less */ "./src/app/components/lisences/lisences.component.less")).default]
        })
    ], LisencesComponent);
    return LisencesComponent;
}());



/***/ }),

/***/ "./src/app/components/object/object.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/object/object.component.less ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".object {\n  padding: 60px 0;\n  text-align: center;\n  background: url('bg_body.png');\n}\n.object__i {\n  margin: 0 30px;\n}\n.object__title {\n  margin-top: 100px;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #484848;\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 1.5;\n}\n.object__hr {\n  width: 32px;\n  height: 8px;\n  background: #1d6887;\n}\n.object ngx-gallery {\n  position: relative;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0NvZGUvb3AvZnJvbnRfYnVpbGRpaW5nL3NyYy9hcHAvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm9iamVjdCB7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmdfYm9keS5wbmcnKTtcblxuICAmX19pIHtcbiAgICBtYXJnaW46IDAgMzBweDtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gICZfX2hyIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWQ2ODg3O1xuICB9XG5cbiAgJiBuZ3gtZ2FsbGVyeSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cbiIsIi5vYmplY3Qge1xuICBwYWRkaW5nOiA2MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnX2JvZHkucG5nJyk7XG59XG4ub2JqZWN0X19pIHtcbiAgbWFyZ2luOiAwIDMwcHg7XG59XG4ub2JqZWN0X190aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLm9iamVjdF9faHIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxZDY4ODc7XG59XG4ub2JqZWN0IG5neC1nYWxsZXJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/object/object.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/object/object.component.ts ***!
  \*******************************************************/
/*! exports provided: ObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectComponent", function() { return ObjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_object_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/object.service */ "./src/app/shared/services/object.service.ts");
/* harmony import */ var _shared_models_object_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/object.model */ "./src/app/shared/models/object.model.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/language.service */ "./src/app/shared/services/language.service.ts");









var ObjectComponent = /** @class */ (function () {
    function ObjectComponent(activatedRoute, objectService, meta, titleService, scrollToService, languageService) {
        this.activatedRoute = activatedRoute;
        this.objectService = objectService;
        this.meta = meta;
        this.titleService = titleService;
        this.scrollToService = scrollToService;
        this.languageService = languageService;
        this.images = [];
        this.object = new _shared_models_object_model__WEBPACK_IMPORTED_MODULE_6__["Obj"]('', '', '', '', '', '', '', '');
    }
    ObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.triggerScrollTo();
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.id = +params.get('id');
            _this.reloadData();
        });
        this.languageService.selectLang.subscribe(function (lang) {
            _this.reloadData();
        });
    };
    ObjectComponent.prototype.triggerScrollTo = function () {
        var config = {
            target: 'objectOne'
        };
        this.scrollToService.scrollTo(config);
    };
    ObjectComponent.prototype.getGalleryOptions = function () {
        this.galleryImages = [];
        for (var i = 0; i < this.images.length; i++) {
            this.galleryImages.push({
                small: this.images[i],
                medium: this.images[i],
                big: this.images[i]
            });
        }
        this.galleryOptions = [
            {
                width: '800px',
                height: '600px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_7__["NgxGalleryAnimation"].Slide
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            {
                breakpoint: 400,
                preview: false
            }
        ];
    };
    ObjectComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageService.selectLang.value) {
            this.objectService.getObjectById(this.id).subscribe(function (data) {
                if (data) {
                    _this.object = data;
                    _this.images = _this.object.images.split(';');
                    _this.titleService.setTitle(_this.object.title);
                    _this.meta.addTags([
                        { name: 'description', content: _this.object.description },
                        { name: 'keywords', content: _this.object.keywords }
                    ]);
                    _this.getGalleryOptions();
                }
            });
        }
    };
    ObjectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services_object_service__WEBPACK_IMPORTED_MODULE_5__["ObjectService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToService"] },
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"] }
    ]; };
    ObjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-object',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./object.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/object/object.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./object.component.less */ "./src/app/components/object/object.component.less")).default]
        })
    ], ObjectComponent);
    return ObjectComponent;
}());



/***/ }),

/***/ "./src/app/components/objects/objects.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/objects/objects.component.less ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* # Setup devices width */\n/* # Variables for mobile first approach and strict ranges */\n.objects {\n  padding: 60px 0;\n  text-align: center;\n  background: url('bg_body.png');\n}\n.objects__i {\n  width: 80%;\n  margin: 0 auto;\n}\n@media only screen and (max-width: 991px) {\n  .objects__i {\n    width: 100%;\n    padding: 0 20px;\n  }\n}\n.objects__title {\n  margin-top: 100px;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #484848;\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 1.5;\n}\n.objects__hr {\n  width: 32px;\n  height: 8px;\n  background: #1d6887;\n}\n.objects__list {\n  flex-flow: row wrap;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.objects__item {\n  width: 370px;\n  margin: 10px;\n  border: 1px solid transparent;\n}\n.objects__link {\n  text-decoration: none;\n  color: #3b4047;\n  display: flex;\n  align-items: center;\n  flex-flow: row wrap;\n  background: #fff;\n  height: 100%;\n  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.75);\n  transition: all 0.3s;\n}\n.objects__link:hover {\n  transform: scale(1.05, 1.05);\n}\n.objects__img {\n  max-width: 100%;\n  max-height: 300px;\n}\n.objects__name {\n  text-align: center;\n  width: 100%;\n  font-size: 22px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vYmplY3RzL29iamVjdHMuY29tcG9uZW50Lmxlc3MiLCIvVm9sdW1lcy9Db2RlL29wL2Zyb250X2J1aWxkaWluZy9zcmMvYXBwL2NvbXBvbmVudHMvb2JqZWN0cy9vYmplY3RzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQiw0REFBNEQ7QUNDNUQ7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBRENGO0FDQ0U7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBRENKO0FDQ0k7RUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VERUY7QUFDRjtBQ0NFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEQ0o7QUNFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QURBSjtBQ0dFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBRERKO0FDSUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FERko7QUNLRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQkFBQTtBREhKO0FDS0k7RUFDRSw0QkFBQTtBREhOO0FDT0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURMSjtBQ1FFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRE5KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vYmplY3RzL29iamVjdHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjIFNldHVwIGRldmljZXMgd2lkdGggKi9cbi8qICMgVmFyaWFibGVzIGZvciBtb2JpbGUgZmlyc3QgYXBwcm9hY2ggYW5kIHN0cmljdCByYW5nZXMgKi9cbi5vYmplY3RzIHtcbiAgcGFkZGluZzogNjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iZ19ib2R5LnBuZycpO1xufVxuLm9iamVjdHNfX2kge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm9iamVjdHNfX2kge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxufVxuLm9iamVjdHNfX3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4ub2JqZWN0c19faHIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxZDY4ODc7XG59XG4ub2JqZWN0c19fbGlzdCB7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm9iamVjdHNfX2l0ZW0ge1xuICB3aWR0aDogMzcwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ub2JqZWN0c19fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzYjQwNDc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm9iamVjdHNfX2xpbms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xufVxuLm9iamVjdHNfX2ltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG4ub2JqZWN0c19fbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL19tZWRpYVwiO1xuXG4ub2JqZWN0cyB7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmdfYm9keS5wbmcnKTtcblxuICAmX19pIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgQG1lZGlhIEB0YWJsZXQtbWF4LXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gICZfX2hyIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWQ2ODg3O1xuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICB3aWR0aDogMzcwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJl9fbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjM2I0MDQ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XG4gICAgfVxuICB9XG5cbiAgJl9faW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gIH1cblxuICAmX19uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/objects/objects.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/objects/objects.component.ts ***!
  \*********************************************************/
/*! exports provided: ObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectsComponent", function() { return ObjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_objectpage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/objectpage.model */ "./src/app/shared/models/objectpage.model.ts");
/* harmony import */ var _shared_services_object_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/object.service */ "./src/app/shared/services/object.service.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/language.service */ "./src/app/shared/services/language.service.ts");







var ObjectsComponent = /** @class */ (function () {
    function ObjectsComponent(objectService, meta, titleService, scrollToService, languageService) {
        this.objectService = objectService;
        this.meta = meta;
        this.titleService = titleService;
        this.scrollToService = scrollToService;
        this.languageService = languageService;
        this.objectCeo = new _shared_models_objectpage_model__WEBPACK_IMPORTED_MODULE_2__["Objectpage"]('', '', '', '');
    }
    ObjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.triggerScrollTo();
        this.reloadData();
        this.languageService.selectLang.subscribe(function () {
            _this.reloadData();
        });
    };
    ObjectsComponent.prototype.triggerScrollTo = function () {
        var config = {
            target: 'Objects'
        };
        this.scrollToService.scrollTo(config);
    };
    ObjectsComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageService.selectLang.value) {
            this.objectService.getObjectPage().subscribe(function (data) {
                if (data) {
                    _this.objectCeo = data;
                    _this.titleService.setTitle(_this.objectCeo.object_title);
                    _this.meta.addTags([
                        { name: 'description', content: _this.objectCeo.object_description },
                        { name: 'keywords', content: _this.objectCeo.object_description }
                    ]);
                }
            });
            this.objectService.getObjects().subscribe(function (data) {
                if (data) {
                    _this.objects = data;
                }
            });
        }
    };
    ObjectsComponent.ctorParameters = function () { return [
        { type: _shared_services_object_service__WEBPACK_IMPORTED_MODULE_3__["ObjectService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
        { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToService"] },
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }
    ]; };
    ObjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-objects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./objects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/objects/objects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./objects.component.less */ "./src/app/components/objects/objects.component.less")).default]
        })
    ], ObjectsComponent);
    return ObjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/partners/partners.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/partners/partners.component.less ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* # Setup devices width */\n/* # Variables for mobile first approach and strict ranges */\n.partners {\n  padding: 60px 0;\n  text-align: center;\n  background: url('bg_body.png');\n}\n.partners__i {\n  width: 80%;\n  margin: 0 auto;\n}\n@media only screen and (max-width: 991px) {\n  .partners__i {\n    width: 100%;\n    padding: 0 20px;\n  }\n}\n.partners__title {\n  margin-top: 100px;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #484848;\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 1.5;\n}\n.partners__hr {\n  width: 32px;\n  height: 8px;\n  background: #1d6887;\n}\n.partners__list {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-items: center;\n}\n.partners__item {\n  width: 200px;\n  float: left;\n  margin: 30px;\n}\n.partners__img {\n  width: 100%;\n}\n.partners__link {\n  text-decoration: none;\n  color: #3b4047;\n  font-size: 16px;\n  text-align: center;\n}\n.partners__link:hover {\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQubGVzcyIsIi9Wb2x1bWVzL0NvZGUvb3AvZnJvbnRfYnVpbGRpaW5nL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIsNERBQTREO0FDQzVEO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QURDRjtBQ0NFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QURDSjtBQ0NJO0VBQUE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFREVKO0FBQ0Y7QUNDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRENKO0FDRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FEQUo7QUNHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QURESjtBQ0lFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FERko7QUNLRTtFQUNFLFdBQUE7QURISjtBQ01FO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FESko7QUNNSTtFQUNFLDBCQUFBO0FESk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIyBTZXR1cCBkZXZpY2VzIHdpZHRoICovXG4vKiAjIFZhcmlhYmxlcyBmb3IgbW9iaWxlIGZpcnN0IGFwcHJvYWNoIGFuZCBzdHJpY3QgcmFuZ2VzICovXG4ucGFydG5lcnMge1xuICBwYWRkaW5nOiA2MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnX2JvZHkucG5nJyk7XG59XG4ucGFydG5lcnNfX2kge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnBhcnRuZXJzX19pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbn1cbi5wYXJ0bmVyc19fdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5wYXJ0bmVyc19faHIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxZDY4ODc7XG59XG4ucGFydG5lcnNfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXJ0bmVyc19faXRlbSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMzBweDtcbn1cbi5wYXJ0bmVyc19faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFydG5lcnNfX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjM2I0MDQ3O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYXJ0bmVyc19fbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX21lZGlhXCI7XG5cbi5wYXJ0bmVycyB7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmdfYm9keS5wbmcnKTtcblxuICAmX19pIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgQG1lZGlhIEB0YWJsZXQtbWF4LXdpZHRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gICZfX2hyIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWQ2ODg3O1xuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAzMHB4O1xuICB9XG5cbiAgJl9faW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2xpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzNiNDA0NztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/partners/partners.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/partners/partners.component.ts ***!
  \***********************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/partner.service */ "./src/app/shared/services/partner.service.ts");
/* harmony import */ var _shared_models_partnerpage_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/partnerpage.model */ "./src/app/shared/models/partnerpage.model.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/language.service */ "./src/app/shared/services/language.service.ts");







var PartnersComponent = /** @class */ (function () {
    function PartnersComponent(partnersService, meta, titleService, scrollToService, languageService) {
        this.partnersService = partnersService;
        this.meta = meta;
        this.titleService = titleService;
        this.scrollToService = scrollToService;
        this.languageService = languageService;
        this.pageCeo = new _shared_models_partnerpage_model__WEBPACK_IMPORTED_MODULE_3__["Partnerpage"]('', '', '', '');
    }
    PartnersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.triggerScrollTo();
        this.reloadData();
        this.languageService.selectLang.subscribe(function (lang) {
            _this.reloadData();
        });
    };
    PartnersComponent.prototype.triggerScrollTo = function () {
        var config = {
            target: 'Partners'
        };
        this.scrollToService.scrollTo(config);
    };
    PartnersComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageService.selectLang.value) {
            this.partnersService.getPartners().subscribe(function (data) {
                if (data) {
                    _this.partners = data;
                }
            });
            this.partnersService.getPartnersPage().subscribe(function (data) {
                if (data) {
                    _this.pageCeo = data;
                    _this.titleService.setTitle(_this.pageCeo.partner_title);
                    _this.meta.addTags([
                        { name: 'description', content: _this.pageCeo.partner_description },
                        { name: 'keywords', content: _this.pageCeo.partner_keywords }
                    ]);
                }
            });
        }
    };
    PartnersComponent.ctorParameters = function () { return [
        { type: _shared_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
        { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToService"] },
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }
    ]; };
    PartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partners',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partners.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/partners/partners.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partners.component.less */ "./src/app/components/partners/partners.component.less")).default]
        })
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/components/service/service.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/service/service.component.less ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* # Setup devices width */\n/* # Variables for mobile first approach and strict ranges */\n.service {\n  padding: 60px 0;\n  text-align: center;\n  background: url('bg_body.png');\n}\n.service__i {\n  width: 65%;\n  margin: 0 auto;\n}\n@media only screen and (max-width: 991px) {\n  .service__i {\n    width: 100%;\n    padding: 0 20px;\n  }\n}\n.service__title {\n  margin-top: 100px;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #484848;\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 1.5;\n}\n.service__hr {\n  width: 32px;\n  height: 8px;\n  background: #1d6887;\n}\n.service__description {\n  padding: 30px 0;\n}\n.service__img {\n  width: 400px;\n  float: left;\n  margin: 0 20px 20px 0;\n}\n@media only screen and (max-width: 991px) {\n  .service__img {\n    width: 100%;\n    float: none;\n  }\n}\n.service__text {\n  font-size: 16px;\n  line-height: 1.84615;\n  font-weight: 400;\n  color: #6f6f6f;\n  text-align: justify;\n  text-indent: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50Lmxlc3MiLCIvVm9sdW1lcy9Db2RlL29wL2Zyb250X2J1aWxkaWluZy9zcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQiw0REFBNEQ7QUNDNUQ7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBRENGO0FDQ0U7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBRENKO0FDQ0k7RUFBQTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VERUo7QUFDRjtBQ0NFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEQ0o7QUNFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QURBSjtBQ0dFO0VBQ0UsZUFBQTtBRERKO0FDSUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FERko7QUNJSTtFQUFBO0lBQ0UsV0FBQTtJQUNBLFdBQUE7RURESjtBQUNGO0FDSUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FERkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICMgU2V0dXAgZGV2aWNlcyB3aWR0aCAqL1xuLyogIyBWYXJpYWJsZXMgZm9yIG1vYmlsZSBmaXJzdCBhcHByb2FjaCBhbmQgc3RyaWN0IHJhbmdlcyAqL1xuLnNlcnZpY2Uge1xuICBwYWRkaW5nOiA2MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnX2JvZHkucG5nJyk7XG59XG4uc2VydmljZV9faSB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2VydmljZV9faSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG4uc2VydmljZV9fdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5zZXJ2aWNlX19ociB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogIzFkNjg4Nztcbn1cbi5zZXJ2aWNlX19kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbi5zZXJ2aWNlX19pbWcge1xuICB3aWR0aDogNDAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zZXJ2aWNlX19pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG59XG4uc2VydmljZV9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuODQ2MTU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNmY2ZjZmO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWluZGVudDogNTBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL19tZWRpYVwiO1xuXG4uc2VydmljZSB7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmdfYm9keS5wbmcnKTtcblxuICAmX19pIHtcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgQG1lZGlhIEB0YWJsZXQtbWF4LXdpZHRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gICZfX2hyIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWQ2ODg3O1xuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcblxuICAgIEBtZWRpYSBAdGFibGV0LW1heC13aWR0aCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS44NDYxNTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNmY2ZjZmO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/service/service.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/service/service.component.ts ***!
  \*********************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_service_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/service.services */ "./src/app/shared/services/service.services.ts");
/* harmony import */ var _shared_models_service_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/service.model */ "./src/app/shared/models/service.model.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/language.service */ "./src/app/shared/services/language.service.ts");








var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(activatedRoute, serviceService, meta, titleService, scrollToService, languageService) {
        this.activatedRoute = activatedRoute;
        this.serviceService = serviceService;
        this.meta = meta;
        this.titleService = titleService;
        this.scrollToService = scrollToService;
        this.languageService = languageService;
        this.id = 0;
        this.service = new _shared_models_service_model__WEBPACK_IMPORTED_MODULE_4__["Service"]('', '', '', '', '', '', '', '', '', '', '');
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.id = +params.get('id');
            _this.reloadData();
        });
        this.triggerScrollTo();
        this.languageService.selectLang.subscribe(function (lang) {
            _this.reloadData();
        });
    };
    ServiceComponent.prototype.triggerScrollTo = function () {
        var config = {
            target: 'servOne'
        };
        this.scrollToService.scrollTo(config);
    };
    ServiceComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageService.selectLang.value) {
            this.serviceService.getServiceById(this.id).subscribe(function (data) {
                console.log(data);
                if (data) {
                    _this.service = data;
                    _this.titleService.setTitle(_this.service.title);
                    _this.meta.addTags([
                        { name: 'description', content: _this.service.description },
                        { name: 'keywords', content: _this.service.keywords }
                    ]);
                }
            });
        }
    };
    ServiceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services_service_services__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
        { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToService"] },
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] }
    ]; };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/service/service.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service.component.less */ "./src/app/components/service/service.component.less")).default]
        })
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/services-list/services-list.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/services-list/services-list.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".services-list {\n  width: 80%;\n  margin: 0 auto;\n  padding: 40px 50px;\n}\n.services-list__item {\n  position: relative;\n  height: 200px;\n  width: 200px;\n  text-align: center;\n  margin: 0 auto;\n}\n.services-list__item svg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n.services-list__item svg polygon {\n  fill-opacity: 0;\n  fill: #000;\n}\n.services-list__item:hover svg polygon {\n  fill-opacity: 1;\n  fill: #1d6887;\n  stroke: #ffffff;\n}\n.services-list__item:hover svg .stroke-inside {\n  fill-opacity: 1;\n  fill: #ffffff;\n  stroke: #ffffff;\n}\n.services-list__item:hover .services-list__icon svg {\n  top: 38%;\n  fill: #fff;\n}\n.services-list__item:hover .services-list__name {\n  color: #1d6887;\n}\n.services-list__icon svg {\n  position: absolute;\n  left: 50%;\n  top: 28%;\n  transform: translate(-50%, -50%);\n  transition: all ease 0.35s;\n  height: 45px;\n  width: 45px;\n  display: inline-block;\n  line-height: 1;\n}\n.services-list__icon svg:before {\n  position: relative;\n  display: inline-block;\n  font-weight: 400;\n  font-style: normal;\n  speak: none;\n  text-transform: none;\n}\n.services-list__link {\n  display: block;\n  text-decoration: none;\n  width: 100%;\n  height: 100%;\n}\n.services-list__link:hover {\n  text-decoration: none;\n}\n.services-list__i {\n  margin-bottom: 20px;\n}\n.services-list__name {\n  font-size: 14px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #484848;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0NvZGUvb3AvZnJvbnRfYnVpbGRpaW5nL3NyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy1saXN0L3NlcnZpY2VzLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMtbGlzdC9zZXJ2aWNlcy1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUNDTjtBRENNO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNDUjtBRElNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRlI7QURLTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0hSO0FETU07RUFDRSxRQUFBO0VBQ0EsVUFBQTtBQ0pSO0FET007RUFDRSxjQUFBO0FDTFI7QURVRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFVJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNSTjtBRFlFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNWSjtBRFlJO0VBQ0UscUJBQUE7QUNWTjtBRGNFO0VBQ0UsbUJBQUE7QUNaSjtBRGVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMtbGlzdC9zZXJ2aWNlcy1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2VzLWxpc3Qge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNDBweCA1MHB4O1xuXG4gICZfX2l0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAmIHN2ZyB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgJiBwb2x5Z29uIHtcbiAgICAgICAgZmlsbC1vcGFjaXR5OiAwO1xuICAgICAgICBmaWxsOiAjMDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgJiBzdmcgcG9seWdvbiB7XG4gICAgICAgIGZpbGwtb3BhY2l0eTogMTtcbiAgICAgICAgZmlsbDogIzFkNjg4NztcbiAgICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgICAgfVxuXG4gICAgICAmIHN2ZyAuc3Ryb2tlLWluc2lkZSB7XG4gICAgICAgIGZpbGwtb3BhY2l0eTogMTtcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgICAgfVxuXG4gICAgICAmIC5zZXJ2aWNlcy1saXN0X19pY29uIHN2ZyB7XG4gICAgICAgIHRvcDogMzglO1xuICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAmIC5zZXJ2aWNlcy1saXN0X19uYW1lIHtcbiAgICAgICAgY29sb3I6ICMxZDY4ODc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9faWNvbiBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyOCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjM1cztcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIHNwZWFrOiBub25lO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJl9fbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZfX2kge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAmX19uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gIH1cbn1cblxuIiwiLnNlcnZpY2VzLWxpc3Qge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNDBweCA1MHB4O1xufVxuLnNlcnZpY2VzLWxpc3RfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zZXJ2aWNlcy1saXN0X19pdGVtIHN2ZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uc2VydmljZXMtbGlzdF9faXRlbSBzdmcgcG9seWdvbiB7XG4gIGZpbGwtb3BhY2l0eTogMDtcbiAgZmlsbDogIzAwMDtcbn1cbi5zZXJ2aWNlcy1saXN0X19pdGVtOmhvdmVyIHN2ZyBwb2x5Z29uIHtcbiAgZmlsbC1vcGFjaXR5OiAxO1xuICBmaWxsOiAjMWQ2ODg3O1xuICBzdHJva2U6ICNmZmZmZmY7XG59XG4uc2VydmljZXMtbGlzdF9faXRlbTpob3ZlciBzdmcgLnN0cm9rZS1pbnNpZGUge1xuICBmaWxsLW9wYWNpdHk6IDE7XG4gIGZpbGw6ICNmZmZmZmY7XG4gIHN0cm9rZTogI2ZmZmZmZjtcbn1cbi5zZXJ2aWNlcy1saXN0X19pdGVtOmhvdmVyIC5zZXJ2aWNlcy1saXN0X19pY29uIHN2ZyB7XG4gIHRvcDogMzglO1xuICBmaWxsOiAjZmZmO1xufVxuLnNlcnZpY2VzLWxpc3RfX2l0ZW06aG92ZXIgLnNlcnZpY2VzLWxpc3RfX25hbWUge1xuICBjb2xvcjogIzFkNjg4Nztcbn1cbi5zZXJ2aWNlcy1saXN0X19pY29uIHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDI4JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMzVzO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnNlcnZpY2VzLWxpc3RfX2ljb24gc3ZnOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNwZWFrOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5zZXJ2aWNlcy1saXN0X19saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zZXJ2aWNlcy1saXN0X19saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNlcnZpY2VzLWxpc3RfX2kge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNlcnZpY2VzLWxpc3RfX25hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/services-list/services-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/services-list/services-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServicesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesListComponent", function() { return ServicesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/service.services */ "./src/app/shared/services/service.services.ts");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/language.service */ "./src/app/shared/services/language.service.ts");




var ServicesListComponent = /** @class */ (function () {
    function ServicesListComponent(serviceService, languageService) {
        this.serviceService = serviceService;
        this.languageService = languageService;
        this.width = document.body.clientWidth;
        this.sliderItemsNumber = 4;
        this.options = { items: this.sliderItemsNumber, dots: false, nav: true };
    }
    ServicesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reloadData();
        this.languageService.selectLang.subscribe(function (lang) {
            _this.reloadData();
        });
        this.getOptions();
    };
    ServicesListComponent.prototype.mouseWheel = function (e) {
        if (this.sliderItemsNumber < this.services.length) {
            if (e.deltaY > 0) {
                this.owlCarousel.previous([500]);
            }
            else {
                this.owlCarousel.next([500]);
            }
            e.preventDefault();
        }
    };
    ServicesListComponent.prototype.getOptions = function () {
        if (this.width <= 767) {
            this.sliderItemsNumber = 1;
            this.options = { items: this.sliderItemsNumber, dots: false, nav: true };
        }
        else if (this.width <= 991) {
            this.sliderItemsNumber = 3;
            this.options = { items: this.sliderItemsNumber, dots: false, nav: true };
        }
    };
    ServicesListComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageService.selectLang.value) {
            this.serviceService.getServices().subscribe(function (data) {
                if (data) {
                    console.log(data);
                    _this.services = data;
                }
                else {
                    _this.languageService.setDefaultLang();
                }
            });
        }
    };
    ServicesListComponent.ctorParameters = function () { return [
        { type: _shared_services_service_services__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('owlCarousel', { static: false })
    ], ServicesListComponent.prototype, "owlCarousel", void 0);
    ServicesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services-list/services-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services-list.component.less */ "./src/app/components/services-list/services-list.component.less")).default]
        })
    ], ServicesListComponent);
    return ServicesListComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.less ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* # Setup devices width */\n/* # Variables for mobile first approach and strict ranges */\n.services {\n  width: 100%;\n  background: url('bg_body.png');\n  padding: 40px 0;\n  border: 1px solid transparent;\n}\n.services__i {\n  width: 85%;\n  margin: 50px auto;\n  text-align: center;\n}\n@media only screen and (max-width: 991px) {\n  .services__i {\n    width: 100%;\n    padding: 0 20px;\n  }\n}\n.services__list {\n  width: 100%;\n  flex-flow: row wrap;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.services__title {\n  margin-top: 100px;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #484848;\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 1.5;\n}\n.services__hr {\n  width: 32px;\n  height: 8px;\n  background: #1d6887;\n}\n.services__item {\n  width: 370px;\n  margin: 10px;\n  border: 1px solid transparent;\n}\n.services__link {\n  text-decoration: none;\n  display: block;\n  transition: all 0.3s;\n  width: 100%;\n  height: 100%;\n}\n.services__link:hover {\n  text-decoration: none;\n}\n.services__link:hover .services__desc {\n  transform: scale(1.05, 1.05);\n}\n.services__img {\n  width: 100%;\n  max-height: 300px;\n}\n.services__description {\n  margin: 10px 20px;\n  border: 1px solid transparent;\n}\n.services__name {\n  color: #3b4047;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.services__text {\n  font-size: 16px;\n  line-height: 1.84615;\n  font-weight: 400;\n  color: #6f6f6f;\n  text-align: justify;\n  text-indent: 50px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 82px;\n}\n.services__desc {\n  display: flex;\n  flex-flow: row wrap;\n  height: 100%;\n  justify-content: center;\n  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.75);\n  border: none;\n  background: #f1f1f1;\n  transition: all 0.3s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQubGVzcyIsIi9Wb2x1bWVzL0NvZGUvb3AvZnJvbnRfYnVpbGRpaW5nL3NyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIsNERBQTREO0FDQzVEO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FEQ0Y7QUNDRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEQ0o7QUNDSTtFQUFBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RURFSjtBQUNGO0FDQ0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBRENKO0FDRUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURBSjtBQ0dFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRERKO0FDSUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FERko7QUNLRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURISjtBQ0tJO0VBQ0UscUJBQUE7QURITjtBQ0tNO0VBQ0UsNEJBQUE7QURIUjtBQ1FFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FETko7QUNTRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QURQSjtBQ1VFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QURSSjtBQ1dFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBRFRKO0FDWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrREFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEVkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIyBTZXR1cCBkZXZpY2VzIHdpZHRoICovXG4vKiAjIFZhcmlhYmxlcyBmb3IgbW9iaWxlIGZpcnN0IGFwcHJvYWNoIGFuZCBzdHJpY3QgcmFuZ2VzICovXG4uc2VydmljZXMge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnX2JvZHkucG5nJyk7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uc2VydmljZXNfX2kge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2VydmljZXNfX2kge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxufVxuLnNlcnZpY2VzX19saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlcnZpY2VzX190aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLnNlcnZpY2VzX19ociB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogIzFkNjg4Nztcbn1cbi5zZXJ2aWNlc19faXRlbSB7XG4gIHdpZHRoOiAzNzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5zZXJ2aWNlc19fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNlcnZpY2VzX19saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNlcnZpY2VzX19saW5rOmhvdmVyIC5zZXJ2aWNlc19fZGVzYyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XG59XG4uc2VydmljZXNfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cbi5zZXJ2aWNlc19fZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDEwcHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uc2VydmljZXNfX25hbWUge1xuICBjb2xvcjogIzNiNDA0NztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zZXJ2aWNlc19fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuODQ2MTU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNmY2ZjZmO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWluZGVudDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC1oZWlnaHQ6IDgycHg7XG59XG4uc2VydmljZXNfX2Rlc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL19tZWRpYVwiO1xuXG4uc2VydmljZXMge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnX2JvZHkucG5nJyk7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgJl9faSB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBAbWVkaWEgQHRhYmxldC1tYXgtd2lkdGgge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgfVxuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAmX19ociB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYmFja2dyb3VuZDogIzFkNjg4NztcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIHdpZHRoOiAzNzBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmX19saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgJiAuc2VydmljZXNfX2Rlc2Mge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmX19uYW1lIHtcbiAgICBjb2xvcjogIzNiNDA0NztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAmX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuODQ2MTU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzZmNmY2ZjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHRleHQtaW5kZW50OiA1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LWhlaWdodDogODJweDtcbiAgfVxuXG4gICZfX2Rlc2Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/service.services */ "./src/app/shared/services/service.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/language.service */ "./src/app/shared/services/language.service.ts");






var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(serviceService, meta, titleService, scrollToService, languageService) {
        this.serviceService = serviceService;
        this.meta = meta;
        this.titleService = titleService;
        this.scrollToService = scrollToService;
        this.languageService = languageService;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reloadData();
        this.languageService.selectLang.subscribe(function (lang) {
            _this.reloadData();
        });
        this.triggerScrollTo();
    };
    ServicesComponent.prototype.triggerScrollTo = function () {
        var config = {
            target: 'serv'
        };
        this.scrollToService.scrollTo(config);
    };
    ServicesComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.languageService.selectLang.value) {
            this.serviceService.getServices().subscribe(function (data) {
                if (data) {
                    _this.services = data;
                }
                else {
                    _this.languageService.setDefaultLang();
                }
            });
            this.serviceService.getServicesPage().subscribe(function (data) {
                if (data) {
                    _this.ser_ceo = data;
                    _this.titleService.setTitle(_this.ser_ceo.service_title);
                    _this.meta.addTags([
                        { name: 'description', content: _this.ser_ceo.service_description },
                        { name: 'keywords', content: _this.ser_ceo.service_keywords }
                    ]);
                }
            });
        }
    };
    ServicesComponent.ctorParameters = function () { return [
        { type: _shared_services_service_services__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToService"] },
        { type: _shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }
    ]; };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.less */ "./src/app/components/services/services.component.less")).default]
        })
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/base-api/base-api.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/base-api/base-api.ts ***!
  \*********************************************/
/*! exports provided: BaseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApi", function() { return BaseApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BaseApi = /** @class */ (function () {
    // private token = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    function BaseApi(http) {
        this.http = http;
        // private baseUrl = 'http://localhost:3330/';
        this.baseUrl = 'http://api.elitproektbud.com.ua/api/';
    }
    BaseApi.prototype.getUrl = function (url) {
        if (url === void 0) { url = ''; }
        return this.baseUrl + url;
    };
    BaseApi.prototype.get = function (url) {
        if (url === void 0) { url = ''; }
        return this.http.get(this.getUrl(url));
    };
    BaseApi.prototype.post = function (url, data) {
        if (url === void 0) { url = ''; }
        if (data === void 0) { data = {}; }
        // return this.http.post(this.getUrl(url), data, this.getToken());
        return this.http.post(this.getUrl(url), data);
    };
    BaseApi.prototype.put = function (url, data) {
        if (url === void 0) { url = ''; }
        if (data === void 0) { data = {}; }
        return this.http.put(this.getUrl(url), data);
        // return this.http.put(this.getUrl(url), data, this.getToken());
    };
    BaseApi.prototype.delete = function (url) {
        if (url === void 0) { url = ''; }
        return this.http.delete(this.getUrl(url));
        // return this.http.delete(this.getUrl(url), this.getToken());
    };
    BaseApi.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BaseApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BaseApi);
    return BaseApi;
}());



/***/ }),

/***/ "./src/app/shared/components/clients/clients.component.less":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/clients/clients.component.less ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* # Setup devices width */\n/* # Variables for mobile first approach and strict ranges */\n.clients {\n  text-align: center;\n  background: url('bg_body.png');\n  border: 1px solid transparent;\n}\n.clients__i {\n  width: 80%;\n  margin: 50px auto;\n}\n@media only screen and (max-width: 991px) {\n  .clients__i {\n    width: 100%;\n    padding: 0 20px;\n  }\n}\n.clients__list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: row wrap;\n}\n.clients__title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #484848;\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 1.5;\n}\n.clients__hr {\n  width: 32px;\n  height: 8px;\n  background: #1d6887;\n}\n.clients__item {\n  width: 150px;\n  height: 150px;\n  margin: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.clients__link {\n  text-decoration: none;\n  display: block;\n  opacity: 0.5;\n  transition: all 0.3s;\n}\n.clients__link:hover {\n  text-decoration: none;\n  opacity: 1;\n}\n.clients__img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5sZXNzIiwiL1ZvbHVtZXMvQ29kZS9vcC9mcm9udF9idWlsZGlpbmcvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLDREQUE0RDtBQ0M1RDtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBRENGO0FDQ0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QURDSjtBQ0NJO0VBQUE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFREVKO0FBQ0Y7QUNDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QURDSjtBQ0VFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURBSjtBQ0dFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRERKO0FDSUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBREZKO0FDS0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QURISjtBQ0tJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FESE47QUNPRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRExKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIyBTZXR1cCBkZXZpY2VzIHdpZHRoICovXG4vKiAjIFZhcmlhYmxlcyBmb3IgbW9iaWxlIGZpcnN0IGFwcHJvYWNoIGFuZCBzdHJpY3QgcmFuZ2VzICovXG4uY2xpZW50cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JnX2JvZHkucG5nJyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmNsaWVudHNfX2kge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNsaWVudHNfX2kge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxufVxuLmNsaWVudHNfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG4uY2xpZW50c19fdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmNsaWVudHNfX2hyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMWQ2ODg3O1xufVxuLmNsaWVudHNfX2l0ZW0ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2xpZW50c19fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uY2xpZW50c19fbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cbi5jbGllbnRzX19pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fbWVkaWFcIjtcblxuLmNsaWVudHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iZ19ib2R5LnBuZycpO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAmX19pIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuXG4gICAgQG1lZGlhIEB0YWJsZXQtbWF4LXdpZHRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgJl9faHIge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJhY2tncm91bmQ6ICMxZDY4ODc7XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgJl9fbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/clients/clients.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/clients/clients.component.ts ***!
  \****************************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/shared/services/client.service.ts");



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) {
            if (data) {
                _this.clients = data;
            }
        });
    };
    ClientsComponent.ctorParameters = function () { return [
        { type: _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"] }
    ]; };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/clients/clients.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clients.component.less */ "./src/app/shared/components/clients/clients.component.less")).default]
        })
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.less":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.less ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background: #1d6887;\n  padding: 20px;\n  color: #fff;\n  text-align: center;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0NvZGUvb3AvZnJvbnRfYnVpbGRpaW5nL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzFkNjg4NztcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxZDY4ODc7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.less */ "./src/app/shared/components/footer/footer.component.less")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.less":
/*!************************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.less ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* # Setup devices width */\n/* # Variables for mobile first approach and strict ranges */\n.menu {\n  padding: 20px 50px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 100px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 20;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n}\n@media only screen and (max-width: 991px) {\n  .menu {\n    display: none;\n  }\n}\n.menu__logo-link {\n  display: block;\n  height: 100%;\n  position: absolute;\n  top: 5px;\n}\n.menu__logo-link_phone {\n  text-align: center;\n  display: block;\n}\n.menu__logo-img {\n  height: 93%;\n}\n.menu__logo-img_phone {\n  width: 80%;\n}\n.menu__logo {\n  height: 100%;\n  min-width: 150px;\n}\n.menu__list {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.menu__item {\n  min-width: 50px;\n  margin: 0 15px;\n}\n.menu__link {\n  color: #484848;\n  background: transparent;\n  display: block;\n  position: relative;\n}\n.menu__link:before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 6px;\n  background-color: #1d6887;\n  top: -41px;\n  left: 0;\n  opacity: 0;\n  transition: all ease 0.55s;\n}\n.menu__link:hover {\n  text-decoration: none;\n}\n.menu__link:hover:before {\n  opacity: 1;\n}\n.menu__link_active:before {\n  opacity: 1;\n}\n.menu__lang {\n  width: 50px;\n}\n.menu__lang-img {\n  max-height: calc(100% - 10px);\n  max-width: 100%;\n  padding: 5px 0;\n}\n.menu__lang-img-ru {\n  background: url('russia.png') center no-repeat;\n  background-size: contain;\n  height: 100%;\n  display: block;\n}\n.menu__lang-img-ua {\n  background: url('ukraine.png') center no-repeat;\n  background-size: contain;\n  height: 100%;\n  display: block;\n}\n.menu__lang-img-en {\n  background: url('united-kingdom.png') center no-repeat;\n  background-size: contain;\n  height: 100%;\n  display: block;\n}\n@media only screen and (max-width: 991px) {\n  .menu__lang_phone {\n    display: none;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .menu__lang_phone {\n    margin: 10px auto;\n    display: block;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .menu__lang_tablet {\n    display: block;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .menu__lang_tablet {\n    display: none;\n  }\n}\n.menu__lang-icon-ru {\n  background: url('russia.png') center no-repeat;\n  background-size: contain;\n  height: 100%;\n  display: block;\n}\n.menu__lang-icon-ua {\n  background: url('ukraine.png') center no-repeat;\n  background-size: contain;\n  height: 100%;\n  display: block;\n}\n.menu__lang-icon-en {\n  background: url('united-kingdom.png') center no-repeat;\n  background-size: contain;\n  height: 100%;\n  display: block;\n}\n.menu-phone {\n  display: none;\n  width: 100%;\n  height: 100px;\n  position: fixed;\n  top: 0;\n  z-index: 20;\n}\n@media only screen and (max-width: 991px) {\n  .menu-phone {\n    display: block;\n  }\n}\n.menu-phone__content {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n}\n.menu-phone__icon {\n  font-size: 50px;\n  cursor: pointer;\n}\n.menu-phone__sidenav {\n  height: 100%;\n  position: fixed;\n  padding: 20px;\n  max-width: 80%;\n}\n.menu-phone-logo {\n  width: 100%;\n}\n.menu-phone__list {\n  text-align: center;\n}\n.menu-phone__item {\n  margin: 15px;\n}\n.menu-phone__link {\n  color: #484848;\n  background: transparent;\n  display: block;\n  position: relative;\n  font-size: 20px;\n}\n.menu-phone__link:hover {\n  text-decoration: none;\n}\n.menu-phone__link_active {\n  border-bottom: 3px solid #1d6887;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5sZXNzIiwiL1ZvbHVtZXMvQ29kZS9vcC9mcm9udF9idWlsZGlpbmcvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLDREQUE0RDtBQ0M1RDtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBREFGO0FDRUU7RUFBQTtJQUNFLGFBQUE7RURDRjtBQUNGO0FDQ0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBRENKO0FDQ0k7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QURDTjtBQ0dFO0VBQ0UsV0FBQTtBRERKO0FDR0k7RUFDRSxVQUFBO0FERE47QUNLRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBREhKO0FDTUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREpKO0FDT0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBRExKO0FDUUU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUROSjtBQ1FJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBRE5OO0FDU0k7RUFDRSxxQkFBQTtBRFBOO0FDU007RUFDRSxVQUFBO0FEUFI7QUNhTTtFQUNFLFVBQUE7QURYUjtBQ2dCRTtFQUNFLFdBQUE7QURkSjtBQ2dCSTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURkTjtBQ2dCTTtFQUNFLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRGRSO0FDaUJNO0VBQ0UsK0NBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEZlI7QUNrQk07RUFDRSxzREFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURoQlI7QUNxQk07RUFBQTtJQUNFLGFBQUE7RURsQk47QUFDRjtBQ29CTTtFQUFBO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VEakJOO0FBQ0Y7QUNxQk07RUFBQTtJQUNFLGNBQUE7RURsQk47QUFDRjtBQ29CTTtFQUFBO0lBQ0UsYUFBQTtFRGpCTjtBQUNGO0FDcUJNO0VBQ0UsOENBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEbkJSO0FDc0JNO0VBQ0UsK0NBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEcEJSO0FDdUJNO0VBQ0Usc0RBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEckJSO0FDMEJFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FEeEJKO0FDMEJJO0VBQUE7SUFDRSxjQUFBO0VEdkJKO0FBQ0Y7QUN5Qkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBRHZCTjtBQzBCSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FEeEJOO0FDMkJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBRHpCTjtBQzRCSTtFQUNFLFdBQUE7QUQxQk47QUM2Qkk7RUFDRSxrQkFBQTtBRDNCTjtBQzhCSTtFQUNFLFlBQUE7QUQ1Qk47QUMrQkk7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEN0JOO0FDK0JNO0VBQ0UscUJBQUE7QUQ3QlI7QUNnQ007RUFDRSxnQ0FBQTtBRDlCUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICMgU2V0dXAgZGV2aWNlcyB3aWR0aCAqL1xuLyogIyBWYXJpYWJsZXMgZm9yIG1vYmlsZSBmaXJzdCBhcHByb2FjaCBhbmQgc3RyaWN0IHJhbmdlcyAqL1xuLm1lbnUge1xuICBwYWRkaW5nOiAyMHB4IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDIwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5tZW51X19sb2dvLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xufVxuLm1lbnVfX2xvZ28tbGlua19waG9uZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWVudV9fbG9nby1pbWcge1xuICBoZWlnaHQ6IDkzJTtcbn1cbi5tZW51X19sb2dvLWltZ19waG9uZSB7XG4gIHdpZHRoOiA4MCU7XG59XG4ubWVudV9fbG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbi5tZW51X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudV9faXRlbSB7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG4ubWVudV9fbGluayB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZW51X19saW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDY4ODc7XG4gIHRvcDogLTQxcHg7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNTVzO1xufVxuLm1lbnVfX2xpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWVudV9fbGluazpob3ZlcjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xufVxuLm1lbnVfX2xpbmtfYWN0aXZlOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ubWVudV9fbGFuZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLm1lbnVfX2xhbmctaW1nIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4ubWVudV9fbGFuZy1pbWctcnUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcnVzc2lhLnBuZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZW51X19sYW5nLWltZy11YSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy91a3JhaW5lLnBuZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZW51X19sYW5nLWltZy1lbiB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy91bml0ZWQta2luZ2RvbS5wbmcnKSBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tZW51X19sYW5nX3Bob25lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tZW51X19sYW5nX3Bob25lIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWVudV9fbGFuZ190YWJsZXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tZW51X19sYW5nX3RhYmxldCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLm1lbnVfX2xhbmctaWNvbi1ydSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ydXNzaWEucG5nJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1lbnVfX2xhbmctaWNvbi11YSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy91a3JhaW5lLnBuZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZW51X19sYW5nLWljb24tZW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdW5pdGVkLWtpbmdkb20ucG5nJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1lbnUtcGhvbmUge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDIwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWVudS1waG9uZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5tZW51LXBob25lX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5tZW51LXBob25lX19pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudS1waG9uZV9fc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cbi5tZW51LXBob25lLWxvZ28ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZW51LXBob25lX19saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lbnUtcGhvbmVfX2l0ZW0ge1xuICBtYXJnaW46IDE1cHg7XG59XG4ubWVudS1waG9uZV9fbGluayB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1lbnUtcGhvbmVfX2xpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWVudS1waG9uZV9fbGlua19hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzFkNjg4Nztcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL19tZWRpYVwiO1xuXG4ubWVudSB7XG4gIHBhZGRpbmc6IDIwcHggNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXG4gIEBtZWRpYSBAdGFibGV0LW1heC13aWR0aCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICZfX2xvZ28tbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcblxuICAgICZfcGhvbmUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgJl9fbG9nby1pbWcge1xuICAgIGhlaWdodDogOTMlO1xuXG4gICAgJl9waG9uZSB7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgfVxuXG4gICZfX2xvZ28ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9faXRlbSB7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICB9XG5cbiAgJl9fbGluayB7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ2ODg3O1xuICAgICAgdG9wOiAtNDFweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjU1cztcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfYWN0aXZlIHtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2xhbmcge1xuICAgIHdpZHRoOiA1MHB4O1xuXG4gICAgJi1pbWcge1xuICAgICAgbWF4LWhlaWdodDogY2FsYyh+JzEwMCUgLSAxMHB4Jyk7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA1cHggMDtcblxuICAgICAgJi1ydSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ydXNzaWEucG5nJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAmLXVhIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3VrcmFpbmUucG5nJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAmLWVuIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3VuaXRlZC1raW5nZG9tLnBuZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX3Bob25lIHtcbiAgICAgIEBtZWRpYSBAdGFibGV0LW1heC13aWR0aCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBAcGhvbmUtbWF4LXdpZHRoIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfdGFibGV0IHtcbiAgICAgIEBtZWRpYSBAdGFibGV0LW1heC13aWR0aCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgQHBob25lLW1heC13aWR0aCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1pY29uIHtcbiAgICAgICYtcnUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcnVzc2lhLnBuZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgJi11YSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy91a3JhaW5lLnBuZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgJi1lbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy91bml0ZWQta2luZ2RvbS5wbmcnKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi1waG9uZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMjA7XG5cbiAgICBAbWVkaWEgQHRhYmxldC1tYXgtd2lkdGgge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICB9XG5cbiAgICAmX19pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAmX19zaWRlbmF2IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICAmLWxvZ28ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fbGlzdCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9faXRlbSB7XG4gICAgICBtYXJnaW46IDE1cHg7XG4gICAgfVxuXG4gICAgJl9fbGluayB7XG4gICAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICZfYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxZDY4ODc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/shared/services/language.service.ts");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(translate, languageService) {
        this.translate = translate;
        this.languageService = languageService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.setLanguages();
    };
    MenuComponent.prototype.changeLanguage = function () {
        this.languageService.changeLanguage(this.selectedLanguage);
    };
    MenuComponent.prototype.setLanguages = function () {
        var _this = this;
        this.languageService.getLanguages().subscribe(function (data) {
            var e_1, _a;
            if (data) {
                _this.languages = data;
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.languages), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var language = _c.value;
                        _this.languageService.languages.push(language.code);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.languageService.defaultLang = data.filter((function (lang) { return +lang.is_default == 1; }))[0];
                if (localStorage.getItem('lang')) {
                    _this.selectedLanguage = localStorage.getItem('lang');
                }
                else {
                    _this.selectedLanguage = _this.languageService.defaultLang.code;
                    localStorage.setItem('lang', _this.languageService.defaultLang.code);
                }
                _this.languageService.changeLanguage(_this.selectedLanguage);
            }
        });
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.less */ "./src/app/shared/components/menu/menu.component.less")).default]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/slider/slider.component.less":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/slider/slider.component.less ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* # Setup devices width */\n/* # Variables for mobile first approach and strict ranges */\n.slider {\n  width: 100%;\n  height: 60vh;\n  min-height: 400px;\n  margin-top: 100px;\n}\n@media only screen and (max-width: 991px) {\n  .slider {\n    min-height: 500px;\n  }\n}\n.slider__i {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.slider-carousel {\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n.slider-carousel__img {\n  width: 100%;\n  height: 100%;\n}\n.slider-carousel__caption {\n  position: absolute;\n  top: 0;\n}\n.slider-carousel__slide {\n  height: 100%;\n}\n.slider-carousel__caption {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.1);\n}\n@media only screen and (max-width: 991px) {\n  .slider-carousel__caption {\n    flex-flow: row wrap;\n  }\n}\n.slider-carousel__text {\n  font-size: 48px;\n  color: #fff;\n  font-weight: 500;\n  line-height: 65px;\n  max-width: 50%;\n}\n@media only screen and (max-width: 991px) {\n  .slider-carousel__text {\n    font-size: 30px;\n    text-align: center;\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.slider-carousel__form {\n  max-width: 350px;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 20px 40px;\n}\n@media only screen and (max-width: 991px) {\n  .slider-carousel__form {\n    margin-bottom: 30px;\n  }\n}\n.slider-carousel__title {\n  font-weight: 500;\n  color: #fff;\n  font-size: 24px;\n  text-align: center;\n  padding-bottom: 15px;\n  line-height: 1;\n}\n.slider-carousel__group {\n  text-align: center;\n}\n.slider-carousel__input {\n  padding-left: 40px;\n  height: 48px;\n  border: none;\n  font-size: 14px;\n  width: 100%;\n  line-height: 20px;\n  color: #3b4047;\n  margin-bottom: 20px;\n  outline: none;\n}\n.slider-carousel__button {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n  background: #73a1b4;\n  background: linear-gradient(180deg, #73a1b4 0%, #1d6887 35%, #1d6887 100%);\n  font-size: 24px;\n  color: #fff;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);\n  font-weight: 500;\n  border: 0;\n  padding: 5px;\n  width: 100%;\n  outline: none;\n}\n.slider-carousel__textarea {\n  width: 100%;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQubGVzcyIsIi9Wb2x1bWVzL0NvZGUvb3AvZnJvbnRfYnVpbGRpaW5nL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIsNERBQTREO0FDQzVEO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FEQ0Y7QUNDRTtFQUFBO0lBQ0UsaUJBQUE7RURFRjtBQUNGO0FDQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FERUo7QUNDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRENKO0FDQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRENOO0FDRUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7QURBTjtBQ0dJO0VBQ0UsWUFBQTtBREROO0FDSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QURGTjtBQ0lNO0VBQUE7SUFDRSxtQkFBQTtFREROO0FBQ0Y7QUNJSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURGTjtBQ0lNO0VBQUE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFREROO0FBQ0Y7QUNJSTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBREZOO0FDSU07RUFBQTtJQUNFLG1CQUFBO0VERE47QUFDRjtBQ0lJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FERk47QUNLSTtFQUNFLGtCQUFBO0FESE47QUNNSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBREpOO0FDT0k7RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FETE47QUNRSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FETk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIyBTZXR1cCBkZXZpY2VzIHdpZHRoICovXG4vKiAjIFZhcmlhYmxlcyBmb3IgbW9iaWxlIGZpcnN0IGFwcHJvYWNoIGFuZCBzdHJpY3QgcmFuZ2VzICovXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjB2aDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2xpZGVyIHtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuLnNsaWRlcl9faSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZXItY2Fyb3VzZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNsaWRlci1jYXJvdXNlbF9faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zbGlkZXItY2Fyb3VzZWxfX2NhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5zbGlkZXItY2Fyb3VzZWxfX3NsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNsaWRlci1jYXJvdXNlbF9fY2FwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zbGlkZXItY2Fyb3VzZWxfX2NhcHRpb24ge1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIH1cbn1cbi5zbGlkZXItY2Fyb3VzZWxfX3RleHQge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogNjVweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zbGlkZXItY2Fyb3VzZWxfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uc2xpZGVyLWNhcm91c2VsX19mb3JtIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zbGlkZXItY2Fyb3VzZWxfX2Zvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5zbGlkZXItY2Fyb3VzZWxfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uc2xpZGVyLWNhcm91c2VsX19ncm91cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zbGlkZXItY2Fyb3VzZWxfX2lucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjM2I0MDQ3O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNsaWRlci1jYXJvdXNlbF9fYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6ICM3M2ExYjQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM3M2ExYjQgMCUsICMxZDY4ODcgMzUlLCAjMWQ2ODg3IDEwMCUpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zbGlkZXItY2Fyb3VzZWxfX3RleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fbWVkaWFcIjtcblxuLnNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwdmg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcblxuICBAbWVkaWEgQHRhYmxldC1tYXgtd2lkdGgge1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB9XG5cbiAgJl9faSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICYtY2Fyb3VzZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJl9faW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICZfX2NhcHRpb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgIH1cblxuICAgICZfX3NsaWRlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19jYXB0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgICAgQG1lZGlhIEB0YWJsZXQtbWF4LXdpZHRoIHtcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xuICAgICAgbWF4LXdpZHRoOiA1MCU7XG5cbiAgICAgIEBtZWRpYSBAdGFibGV0LW1heC13aWR0aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX2Zvcm0ge1xuICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcblxuICAgICAgQG1lZGlhIEB0YWJsZXQtbWF4LXdpZHRoIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cblxuICAgICZfX2dyb3VwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19pbnB1dCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgY29sb3I6ICMzYjQwNDc7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAmX19idXR0b24ge1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsLjI0KTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigxMTUsMTYxLDE4MCk7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDExNSwxNjEsMTgwLDEpIDAlLCByZ2JhKDI5LDEwNCwxMzUsMSkgMzUlLCByZ2JhKDI5LDEwNCwxMzUsMSkgMTAwJSk7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMTUpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAmX190ZXh0YXJlYSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/slider/slider.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/slider/slider.component.ts ***!
  \**************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_slide_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/slide.service */ "./src/app/shared/services/slide.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/shared/services/request.service.ts");
/* harmony import */ var _models_requestt_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/requestt.model */ "./src/app/shared/models/requestt.model.ts");






var SliderComponent = /** @class */ (function () {
    function SliderComponent(slideService, requestService) {
        this.slideService = slideService;
        this.requestService = requestService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)])
        });
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideService.getSlides().subscribe(function (data) {
            if (data) {
                _this.slides = data;
            }
        });
    };
    SliderComponent.prototype.submitForm = function () {
        var _this = this;
        var req = new _models_requestt_model__WEBPACK_IMPORTED_MODULE_5__["Requestt"](this.form.value.name, this.form.value.phone, this.form.value.question);
        this.requestService.addRequest(req).subscribe(function (data) {
            if (data) {
                _this.name = '';
                _this.phone = '';
                _this.text = '';
            }
        });
    };
    SliderComponent.ctorParameters = function () { return [
        { type: _services_slide_service__WEBPACK_IMPORTED_MODULE_2__["SlideService"] },
        { type: _services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] }
    ]; };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/slider/slider.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.less */ "./src/app/shared/components/slider/slider.component.less")).default]
        })
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/about.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/about.model.ts ***!
  \**********************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var About = /** @class */ (function () {
    function About(about_text, about_title, about_description, about_keywords, id) {
        this.about_text = about_text;
        this.about_title = about_title;
        this.about_description = about_description;
        this.about_keywords = about_keywords;
        this.id = id;
    }
    return About;
}());



/***/ }),

/***/ "./src/app/shared/models/contacts.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/contacts.model.ts ***!
  \*************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Contact = /** @class */ (function () {
    function Contact(contacts_phone, contacts_email, contacts_address, contacts_title, contacts_description, contacts_keywords, id) {
        this.contacts_phone = contacts_phone;
        this.contacts_email = contacts_email;
        this.contacts_address = contacts_address;
        this.contacts_title = contacts_title;
        this.contacts_description = contacts_description;
        this.contacts_keywords = contacts_keywords;
        this.id = id;
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/shared/models/object.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/object.model.ts ***!
  \***********************************************/
/*! exports provided: Obj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obj", function() { return Obj; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Obj = /** @class */ (function () {
    function Obj(alt, code, description, images, img_main, keywords, name, title, id) {
        this.alt = alt;
        this.code = code;
        this.description = description;
        this.images = images;
        this.img_main = img_main;
        this.keywords = keywords;
        this.name = name;
        this.title = title;
        this.id = id;
    }
    return Obj;
}());



/***/ }),

/***/ "./src/app/shared/models/objectpage.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/objectpage.model.ts ***!
  \***************************************************/
/*! exports provided: Objectpage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Objectpage", function() { return Objectpage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Objectpage = /** @class */ (function () {
    function Objectpage(object_title, object_description, object_keywords, object_alt, id) {
        this.object_title = object_title;
        this.object_description = object_description;
        this.object_keywords = object_keywords;
        this.object_alt = object_alt;
        this.id = id;
    }
    return Objectpage;
}());



/***/ }),

/***/ "./src/app/shared/models/partnerpage.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/partnerpage.model.ts ***!
  \****************************************************/
/*! exports provided: Partnerpage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partnerpage", function() { return Partnerpage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Partnerpage = /** @class */ (function () {
    function Partnerpage(partner_title, partner_description, partner_keywords, partner_alt, id) {
        this.partner_title = partner_title;
        this.partner_description = partner_description;
        this.partner_keywords = partner_keywords;
        this.partner_alt = partner_alt;
        this.id = id;
    }
    return Partnerpage;
}());



/***/ }),

/***/ "./src/app/shared/models/requestt.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/requestt.model.ts ***!
  \*************************************************/
/*! exports provided: Requestt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Requestt", function() { return Requestt; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Requestt = /** @class */ (function () {
    function Requestt(name, phone, text, id) {
        this.name = name;
        this.phone = phone;
        this.text = text;
        this.id = id;
    }
    return Requestt;
}());



/***/ }),

/***/ "./src/app/shared/models/service.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/service.model.ts ***!
  \************************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Service = /** @class */ (function () {
    function Service(img, video, icon, created_at, name, text, description, keywords, alt, code, title, id) {
        this.img = img;
        this.video = video;
        this.icon = icon;
        this.created_at = created_at;
        this.name = name;
        this.text = text;
        this.description = description;
        this.keywords = keywords;
        this.alt = alt;
        this.code = code;
        this.title = title;
        this.id = id;
    }
    return Service;
}());



/***/ }),

/***/ "./src/app/shared/services/about.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/about.service.ts ***!
  \**************************************************/
/*! exports provided: AboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutService", function() { return AboutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "./src/app/shared/services/language.service.ts");





var AboutService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AboutService, _super);
    function AboutService(http, languageService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.languageService = languageService;
        return _this;
    }
    AboutService.prototype.getAbout = function () {
        return this.get("about/" + this.languageService.selectLang.value)
            .map(function (about) { return about[0] ? about[0] : undefined; });
    };
    AboutService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    AboutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AboutService);
    return AboutService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/client.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/client.service.ts ***!
  \***************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");




var ClientService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientService, _super);
    function ClientService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ClientService.prototype.getClients = function () {
        return this.get('clients')
            .map(function (client) { return client[0] ? client[0] : undefined; });
    };
    ClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ClientService);
    return ClientService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/contacts.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/contacts.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "./src/app/shared/services/language.service.ts");





var ContactsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactsService, _super);
    function ContactsService(http, languageService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.languageService = languageService;
        return _this;
    }
    ContactsService.prototype.getContacts = function () {
        return this.get("contact/" + this.languageService.selectLang.value)
            .map(function (con) { return con[0] ? con[0] : undefined; });
    };
    ContactsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ContactsService);
    return ContactsService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/home.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/home.service.ts ***!
  \*************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "./src/app/shared/services/language.service.ts");





var HomeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeService, _super);
    function HomeService(http, languageService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.languageService = languageService;
        return _this;
    }
    HomeService.prototype.getHomeSeo = function () {
        return this.get("home/" + this.languageService.selectLang.value + "/seo")
            .map(function (home) { return home[0] ? home[0] : undefined; });
    };
    HomeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HomeService);
    return HomeService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/language.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/language.service.ts ***!
  \*****************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var LanguageService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LanguageService, _super);
    function LanguageService(http, translate) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.translate = translate;
        _this.selectLang = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        _this.languages = [];
        return _this;
    }
    LanguageService.prototype.changeLanguage = function (lang) {
        this.translate.addLangs(this.languages);
        this.translate.setDefaultLang(this.defaultLang.code);
        this.translate.use(lang);
        this.selectLang.next(lang);
        localStorage.setItem('lang', lang);
    };
    LanguageService.prototype.getLanguages = function () {
        return this.get('languages')
            .map(function (data) { return data[0] ? data[0] : undefined; });
    };
    LanguageService.prototype.setDefaultLang = function () {
        this.translate.addLangs(this.languages);
        this.translate.setDefaultLang(this.defaultLang.code);
        this.translate.use(this.defaultLang.code);
        this.selectLang.next(this.defaultLang.code);
        localStorage.setItem('lang', this.defaultLang.code);
    };
    LanguageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LanguageService);
    return LanguageService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/licence.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/licence.service.ts ***!
  \****************************************************/
/*! exports provided: LicenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenceService", function() { return LicenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "./src/app/shared/services/language.service.ts");





var LicenceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LicenceService, _super);
    function LicenceService(http, languageServices) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.languageServices = languageServices;
        return _this;
    }
    LicenceService.prototype.getLicences = function () {
        return this.get("licenses/" + this.languageServices.selectLang.value)
            .map(function (lic) { return lic[0] ? lic[0] : undefined; });
    };
    LicenceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    LicenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LicenceService);
    return LicenceService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/object.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/object.service.ts ***!
  \***************************************************/
/*! exports provided: ObjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectService", function() { return ObjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "./src/app/shared/services/language.service.ts");





var ObjectService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ObjectService, _super);
    function ObjectService(http, languageService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.languageService = languageService;
        return _this;
    }
    ObjectService.prototype.getObjects = function () {
        return this.get("objects/" + this.languageService.selectLang.value)
            .map(function (obj) { return obj[0] ? obj[0] : undefined; });
    };
    ObjectService.prototype.getObjectPage = function () {
        return this.get("objects/" + this.languageService.selectLang.value + "/seo")
            .map(function (obj) { return obj[0] ? obj[0] : undefined; });
    };
    ObjectService.prototype.getObjectById = function (id) {
        return this.get("objects/" + this.languageService.selectLang.value + "/show/" + id)
            .map(function (obj) { return obj[0] ? obj[0] : undefined; });
    };
    ObjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    ObjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ObjectService);
    return ObjectService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/partner.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/partner.service.ts ***!
  \****************************************************/
/*! exports provided: PartnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerService", function() { return PartnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "./src/app/shared/services/language.service.ts");





var PartnerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PartnerService, _super);
    function PartnerService(http, languageService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.languageService = languageService;
        return _this;
    }
    PartnerService.prototype.getPartners = function () {
        return this.get("partners/" + this.languageService.selectLang.value)
            .map(function (part) { return part[0] ? part[0] : undefined; });
    };
    PartnerService.prototype.getPartnersPage = function () {
        return this.get("partners/" + this.languageService.selectLang.value + "/seo")
            .map(function (partner) { return partner[0] ? partner[0] : undefined; });
    };
    PartnerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    PartnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PartnerService);
    return PartnerService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/request.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/request.service.ts ***!
  \****************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "./src/app/shared/services/language.service.ts");





var RequestService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RequestService, _super);
    function RequestService(http, languageService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.languageService = languageService;
        return _this;
    }
    RequestService.prototype.addRequest = function (req) {
        return this.post("request-call/store/" + this.languageService.selectLang.value, req);
    };
    RequestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RequestService);
    return RequestService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/service.services.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/service.services.ts ***!
  \*****************************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "./src/app/shared/services/language.service.ts");





var ServiceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServiceService, _super);
    function ServiceService(http, languageService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.languageService = languageService;
        return _this;
    }
    ServiceService.prototype.getServices = function () {
        return this.get("services/" + this.languageService.selectLang.value)
            .map(function (ser) { return ser[0] ? ser[0] : undefined; });
    };
    ServiceService.prototype.getServiceById = function (id) {
        return this.get("services/" + this.languageService.selectLang.value + "/show/" + id)
            .map(function (ser) { return ser[0] ? ser[0] : undefined; });
    };
    ServiceService.prototype.getServicesPage = function () {
        return this.get("services/" + this.languageService.selectLang.value + "/seo")
            .map(function (ser) { return ser[0] ? ser[0] : undefined; });
    };
    ServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ServiceService);
    return ServiceService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



/***/ }),

/***/ "./src/app/shared/services/slide.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/slide.service.ts ***!
  \**************************************************/
/*! exports provided: SlideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideService", function() { return SlideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_api_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api/base-api */ "./src/app/shared/base-api/base-api.ts");




var SlideService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlideService, _super);
    function SlideService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    SlideService.prototype.getSlides = function () {
        return this.get('slides')
            .map(function (slide) { return slide[0] ? slide[0] : undefined; });
    };
    SlideService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SlideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SlideService);
    return SlideService;
}(_base_api_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");









if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Code/op/front_buildiing/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map