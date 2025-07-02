"use strict";
(self["webpackChunkAmazonLoyality_UI"] = self["webpackChunkAmazonLoyality_UI"] || []).push([["main"],{

/***/ 8644:
/*!**************************************************************!*\
  !*** ./src/app/Shared/Components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/loader.service */ 1264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class LoaderComponent {
  constructor(loaderService) {
    this.loaderService = loaderService;
  }
  static {
    this.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      decls: 2,
      vars: 3,
      consts: [["id", "loader", 4, "ngIf"], ["id", "loader"], [1, "logo"], ["src", "assets/images/orange-logo-animated.gif", "alt", "Orange Logo Animated"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 3, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.loaderService.isLoading$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4656:
/*!************************************************************!*\
  !*** ./src/app/Shared/Components/popup/popup.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function PopupComponent_div_0_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_0_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 13)(3, "path", 14)(4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function PopupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopupComponent_div_0_a_6_Template, 5, 0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onButtonClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.popup_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.popup_close);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.popup_icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.popup_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.popup_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.popup_btn_name);
  }
}
class PopupComponent {
  constructor() {
    this.show_popup = false;
    this.popup_icon = "";
    this.popup_title = "";
    this.popup_description = "";
    this.popup_id = "";
    this.popup_btn_name = "";
    this.popup_close = false;
    this.close_popup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.popup_function = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  onClose() {
    this.close_popup.emit(); //X btn call closePopup()
    // this.popup_function.emit(); //X btn call PopupStatusBtnFunction()
  }

  onButtonClick() {
    this.popup_function.emit();
  }
  static {
    this.ɵfac = function PopupComponent_Factory(t) {
      return new (t || PopupComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopupComponent,
      selectors: [["app-popup"]],
      inputs: {
        show_popup: "show_popup",
        popup_icon: "popup_icon",
        popup_title: "popup_title",
        popup_description: "popup_description",
        popup_id: "popup_id",
        popup_btn_name: "popup_btn_name",
        popup_close: "popup_close"
      },
      outputs: {
        close_popup: "close_popup",
        popup_function: "popup_function"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "Offer-details_modal", 4, "ngIf"], [1, "Offer-details_modal"], [1, "Offer-details_close"], [1, "Offer-details_content"], [1, "offer-details_head"], [1, "offer-popup__title"], ["class", "btn_close", 3, "click", 4, "ngIf"], [1, "offer-popup__icon", 3, "src"], [1, "offer-popup__desc"], [1, "mt-3", "mb-3", "d-flex"], [1, "w-100", "btn", "btn-gradient", 3, "id", "click"], [1, "btn_close", 3, "click"], ["width", "41", "height", "40", "viewBox", "0 0 41 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "20.5", "cy", "20", "r", "19.5", "fill", "white", "stroke", "#F0EEED"], ["d", "M15.5 25L25.5 15", "stroke", "#24180E", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M25.5 25L15.5 15", "stroke", "#24180E", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]],
      template: function PopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopupComponent_div_0_Template, 13, 6, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_popup);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5332:
/*!*******************************************************!*\
  !*** ./src/app/Shared/Helpers/loading-interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/loader.service */ 1264);



class LoaderInterceptor {
  constructor(loaderService) {
    this.loaderService = loaderService;
    this.totalRequests = 0;
  }
  intercept(req, next) {
    this.totalRequests++;
    this.loaderService.show();
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
      this.totalRequests--;
      if (this.totalRequests === 0) {
        this.loaderService.hide();
      }
    }));
  }
  static {
    this.ɵfac = function LoaderInterceptor_Factory(t) {
      return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LoaderInterceptor,
      factory: LoaderInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 8266:
/*!*************************************************!*\
  !*** ./src/app/Shared/Services/data.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class DataService {
  constructor() {
    this.getDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
    this.getData$ = this.getDataSubject.asObservable();
  }
  getData(data) {
    // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.getDataSubject.next(data);
  }
  static {
    this.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1264:
/*!***************************************************!*\
  !*** ./src/app/Shared/Services/loader.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LoaderService {
  constructor() {
    this.isLoading$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isLoading$ = this.isLoading$$.asObservable();
  }
  show() {
    this.isLoading$$.next(true);
  }
  hide() {
    this.isLoading$$.next(false);
  }
  static {
    this.ɵfac = function LoaderService_Factory(t) {
      return new (t || LoaderService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_b2b_b2b_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/b2b/b2b.component */ 612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'b2b',
  component: _pages_b2b_b2b_component__WEBPACK_IMPORTED_MODULE_1__.B2bComponent
}, {
  path: '**',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _Shared_Services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/Services/data.service */ 8266);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Shared_Components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shared/Components/loader/loader.component */ 8644);
/* harmony import */ var _Shared_Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/Components/popup/popup.component */ 4656);







class AppComponent {
  constructor(translateService, dataService, renderer, router) {
    this.translateService = translateService;
    this.dataService = dataService;
    this.renderer = renderer;
    this.router = router;
    this.language = 'en';
    /// popupS
    this.showPopup = false;
    this.PopupIcon = "";
    this.PopupTitle = "";
    this.PopupDescription = "";
    this.PopupErrorIcon = "assets/images/error.png";
    this.PopupSuccessIcon = "assets/images/success.png";
    this.PopupConfirmIcon = "assets/images/confirm.png";
    this.PopupId = "";
    this.PopupBtnName = "";
    this.PopupClose = false;
    this.params = new URLSearchParams(window.location.search);
    this.language = this.params.get('language');
    this.translateService.setDefaultLang('en'); // set default localization lang
    this.translateService.use(this.language);
    this.switchLanguage(this.language);
  }
  ngOnInit() {
    this.router.navigate([''], {
      queryParams: {
        dial: this.params.get('dial'),
        language: this.params.get('language'),
        token: this.params.get('token')
      }
    });
  }
  switchLanguage(lang) {
    if (lang == 'ar') {
      document.querySelector('html').setAttribute('dir', 'rtl');
    } else {
      document.querySelector('html').setAttribute('dir', 'ltr');
    }
    localStorage.setItem('lang', lang);
  }
  /////// Handel status popup
  openPopup(title, icon, desc, id, callback, btnName, close) {
    this.PopupTitle = title;
    this.PopupIcon = icon;
    this.PopupDescription = desc;
    this.PopupId = id;
    this.showPopup = true;
    this.PopupStatusFunction = callback;
    this.PopupBtnName = btnName;
    this.PopupClose = close;
    document.querySelector('body').style.overflow = 'hidden';
  }
  closePopup() {
    this.showPopup = false;
    document.querySelector('body').style.overflow = 'initial';
  }
  PopupStatusBtnFunction() {
    if (this.PopupStatusFunction) {
      this.PopupStatusFunction();
    }
  }
  // redirect to dashboard
  ToDashboard() {
    window.location.href = this.getResultURL({
      errorCode: '101',
      screenName: 'dashboard',
      isSuccessful: false,
      errorDescription: 'invalid'
    });
  }
  getResultURL(params) {
    const queryString = new URLSearchParams(params);
    return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resultPage}?${queryString}`;
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Shared_Services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 7,
      consts: [[3, "show_popup", "popup_icon", "popup_title", "popup_description", "popup_id", "popup_btn_name", "popup_close", "close_popup", "popup_function"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader")(1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-popup", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close_popup", function AppComponent_Template_app_popup_close_popup_2_listener() {
            return ctx.closePopup();
          })("popup_function", function AppComponent_Template_app_popup_popup_function_2_listener() {
            return ctx.PopupStatusBtnFunction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show_popup", ctx.showPopup)("popup_icon", ctx.PopupIcon)("popup_title", ctx.PopupTitle)("popup_description", ctx.PopupDescription)("popup_id", ctx.PopupId)("popup_btn_name", ctx.PopupBtnName)("popup_close", ctx.PopupClose);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _Shared_Components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _Shared_Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_3__.PopupComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _Shared_Helpers_loading_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared/Helpers/loading-interceptor */ 5332);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-otp-input */ 9306);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _Shared_Components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/Components/loader/loader.component */ 8644);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _Shared_Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shared/Components/popup/popup.component */ 4656);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_b2b_b2b_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/b2b/b2b.component */ 612);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ 3769);




















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
        useClass: _Shared_Helpers_loading_interceptor__WEBPACK_IMPORTED_MODULE_0__.LoaderInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_11__.NgOtpInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
        }
      }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.isDevMode)(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _Shared_Components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _Shared_Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__.PopupComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _pages_b2b_b2b_component__WEBPACK_IMPORTED_MODULE_7__.B2bComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_11__.NgOtpInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule]
  });
})();
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__.TranslateHttpLoader(http, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.localizationFileUrl, '.txt');
}

/***/ }),

/***/ 612:
/*!********************************************!*\
  !*** ./src/app/pages/b2b/b2b.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bComponent": () => (/* binding */ B2bComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-otp-input */ 9306);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Shared_Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Components/popup/popup.component */ 4656);









const _c0 = ["ngOtpInput"];
function B2bComponent_label_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@giftInfoAnimation", undefined);
  }
}
function B2bComponent_label_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@giftInfoAnimation", undefined);
  }
}
function B2bComponent_div_69_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function B2bComponent_div_69_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.CloseOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "circle", 73)(3, "path", 74)(4, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function B2bComponent_div_69_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 76)(1, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Seconds.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.counter);
  }
}
function B2bComponent_div_69_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function B2bComponent_div_69_a_14_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.resendOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    length: a0,
    allowNumbersOnly: true,
    inputClass: "OTP__input"
  };
};
function B2bComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 58)(3, "div", 59)(4, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, B2bComponent_div_69_a_6_Template, 5, 0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Please enter your OTP to Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 63)(10, "ng-otp-input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onInputChange", function B2bComponent_div_69_Template_ng_otp_input_onInputChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.onOtpChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, B2bComponent_div_69_div_13_Template, 4, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, B2bComponent_div_69_a_14_Template, 2, 0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 69)(16, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function B2bComponent_div_69_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.ProceedOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.showOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, ctx_r5.otpLength));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.showResend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.showResend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r5.isButtonDimmed);
  }
}
const _c2 = function (a0) {
  return {
    "disabled-parent": a0
  };
};
class B2bComponent {
  constructor() {
    this.input1Value = '';
    this.input2Value = '';
    /// otp
    this.showOtp = false;
    this.counter = 60;
    this.tick = 1000;
    this.showResend = false;
    this.otpLength = 6;
    this.isButtonDimmed = true;
    this.OtpCode = "";
    /// popupS
    this.showPopup = false;
    this.PopupIcon = "";
    this.PopupTitle = "";
    this.PopupDescription = "";
    this.PopupErrorIcon = "assets/images/error.png";
    this.PopupSuccessIcon = "assets/images/success.png";
    this.PopupConfirmIcon = "assets/images/confirm.png";
    this.PopupId = "";
    this.PopupBtnName = "";
    this.PopupClose = false;
  }
  ngOnInit() {}
  ///otp
  onOtpChange(code) {
    if (code.length < this.otpLength) {
      this.isButtonDimmed = true;
      return;
    } else {
      this.isButtonDimmed = false;
      this.OtpCode = code;
      // console.log(this.OtpCode)
    }
  }

  clearOtp() {
    this.ngOtpInputRef.setValue('');
    this.ngOtpInputRef.focusTo(this.ngOtpInputRef.getBoxId(0));
  }
  resendOTP() {
    this.showResend = false;
    this.counter = 60;
    this.clearOtp();
    this.startTimer();
    // this.GetResend();
  }

  ProceedOTP() {
    this.CloseOtp();
    this.openPopup("title", this.PopupSuccessIcon, "Desc", "DoneID", this.ToDashboard,
    //() => {}
    "Done", false);
  }
  OpenOtp() {
    this.closePopup();
    this.startTimer();
    this.showOtp = true;
    document.querySelector('body').style.overflow = 'hidden';
  }
  CloseOtp() {
    this.stopTimer();
    this.counter = 60;
    this.showOtp = false;
    document.querySelector('body').style.overflow = 'initial';
  }
  ///timer
  stopTimer() {
    this.countDown.unsubscribe();
  }
  startTimer() {
    this.countDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0, this.tick).subscribe(() => {
      --this.counter;
      if (this.counter <= 0) {
        this.stopTimer();
        this.showResend = true;
      }
    });
  }
  onSubmit(form) {
    if (!form.valid) {
      console.log('form invaild');
      return;
    } else {
      console.log(form + (form.value['phoneNumber'] || form.value['accountNumber']));
      this.openPopup("title", this.PopupConfirmIcon, "Desc", "DoneID", this.OpenOtp,
      //() => {}
      "Done", true);
    }
  }
  /////// redirect to dashboard
  ToDashboard() {
    window.location.href = this.getResultURL({
      errorCode: '101',
      screenName: 'dashboard',
      isSuccessful: false,
      errorDescription: 'invalid'
    });
  }
  getResultURL(params) {
    const queryString = new URLSearchParams(params);
    return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resultPage}?${queryString}`;
  }
  /////// Handel status popup
  openPopup(title, icon, desc, id, callback, btnName, close) {
    this.PopupTitle = title;
    this.PopupIcon = icon;
    this.PopupDescription = desc;
    this.PopupId = id;
    this.showPopup = true;
    this.PopupStatusFunction = callback;
    this.PopupBtnName = btnName;
    this.PopupClose = close;
    document.querySelector('body').style.overflow = 'hidden';
  }
  closePopup() {
    this.showPopup = false;
    document.querySelector('body').style.overflow = 'initial';
  }
  PopupStatusBtnFunction() {
    if (this.PopupStatusFunction) {
      this.PopupStatusFunction();
    }
  }
  static {
    this.ɵfac = function B2bComponent_Factory(t) {
      return new (t || B2bComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: B2bComponent,
      selectors: [["app-b2b"]],
      viewQuery: function B2bComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ngOtpInputRef = _t.first);
        }
      },
      decls: 71,
      vars: 17,
      consts: [[1, "main-section", "page-wrapper"], [1, "page-wrapper__top"], [1, "offer-header"], [1, "offer-name"], ["routerLink", "/", "queryParamsHandling", "preserve", 1, "btn-back-page", "reverse-rtl", "border-0"], ["width", "40", "height", "40", "viewBox", "0 0 40 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["filter", "url(#filter0_b_513_123)"], ["cx", "20", "cy", "20", "r", "20", "fill", "white", "fill-opacity", "0.1"], ["cx", "20", "cy", "20", "r", "19.5", "stroke", "url(#paint0_linear_513_123)"], ["clip-path", "url(#clip0_513_123)"], ["d", "M21.3492 24.5833L16.9841 20L21.3492 15.4167", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "filter0_b_513_123", "x", "-4", "y", "-4", "width", "48", "height", "48", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "BackgroundImageFix", "stdDeviation", "2"], ["in2", "SourceAlpha", "operator", "in", "result", "effect1_backgroundBlur_513_123"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_backgroundBlur_513_123", "result", "shape"], ["id", "paint0_linear_513_123", "x1", "4.46483", "y1", "-8.57141", "x2", "43.1484", "y2", "-6.73257", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FFFCFA"], ["offset", "1", "stop-color", "white", "stop-opacity", "0"], ["id", "clip0_513_123"], ["width", "20", "height", "20", "fill", "white", "transform", "translate(10 10)"], [1, "page-title"], [2, "width", "40px"], [1, "page-content"], [1, "page-desc"], [1, "share-to-wrapper", "text-start"], [3, "ngSubmit"], ["SentTo", "ngForm"], ["for", "mobile", 1, "sent-to__border", 3, "ngClass"], [1, "sent-to__icon"], ["cx", "20", "cy", "20", "r", "20", "fill", "#FFF1E5"], ["clip-path", "url(#clip0_973_355)"], ["d", "M16.25 17.5C18.1485 17.5 19.6875 15.961 19.6875 14.0625C19.6875 12.164 18.1485 10.625 16.25 10.625C14.3515 10.625 12.8125 12.164 12.8125 14.0625C12.8125 15.961 14.3515 17.5 16.25 17.5Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.625 24.375C10.6254 23.1686 11.0137 21.9942 11.7325 21.0253C12.4513 20.0564 13.4626 19.3443 14.617 18.9941C15.7715 18.6438 17.008 18.6741 18.1439 19.0803C19.2799 19.4865 20.2552 20.2471 20.9258 21.25", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M26.25 26.5625C26.3118 26.5625 26.3722 26.5808 26.4236 26.6152C26.475 26.6495 26.5151 26.6983 26.5387 26.7554C26.5624 26.8125 26.5686 26.8753 26.5565 26.936C26.5444 26.9966 26.5147 27.0523 26.471 27.096C26.4273 27.1397 26.3716 27.1694 26.311 27.1815C26.2503 27.1936 26.1875 27.1874 26.1304 27.1637C26.0733 27.1401 26.0245 27.1 25.9902 27.0486C25.9558 26.9972 25.9375 26.9368 25.9375 26.875C25.9375 26.7921 25.9704 26.7126 26.029 26.654C26.0876 26.5954 26.1671 26.5625 26.25 26.5625Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M28.125 19.375H24.375C23.6846 19.375 23.125 19.9346 23.125 20.625V28.125C23.125 28.8154 23.6846 29.375 24.375 29.375H28.125C28.8154 29.375 29.375 28.8154 29.375 28.125V20.625C29.375 19.9346 28.8154 19.375 28.125 19.375Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_973_355"], [1, "input-wrapper"], ["class", "sent-to__focusLabel", 4, "ngIf"], ["type", "tel", "id", "mobile", "placeholder", "Mobile Number", "pattern", "^01[0125][0-9]{8}$", "maxlength", "11", "minlength", "11", "oninput", "this.value = this.value.replace(/[^0-9]/g, '');", "name", "phoneNumber", "ngModel", "", 1, "share-to__input", "allow-select"], ["phoneNumber", "ngModel"], [1, "dividing-line"], ["for", "accountNumber", 1, "sent-to__border", 3, "ngClass"], ["clip-path", "url(#clip0_195_1710)"], ["d", "M11.0968 24.2333C11.2929 25.5923 12.4132 26.65 13.7809 26.7719C15.7866 26.9505 17.8671 27.1429 20 27.1429C22.1329 27.1429 24.2134 26.9505 26.219 26.7719C27.5867 26.65 28.7071 25.5923 28.9033 24.2333C29.1011 22.8616 29.2857 21.4465 29.2857 20C29.2857 18.5535 29.1011 17.1385 28.9033 15.7668C28.7071 14.4077 27.5867 13.35 26.219 13.2282C24.2134 13.0496 22.1329 12.8572 20 12.8572C17.8671 12.8572 15.7866 13.0496 13.7809 13.2282C12.4132 13.35 11.2929 14.4077 11.0968 15.7668C10.8988 17.1385 10.7143 18.5535 10.7143 20C10.7143 21.4465 10.8988 22.8616 11.0968 24.2333Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.4286 22.1429C17.612 22.1429 18.5714 21.1835 18.5714 20C18.5714 18.8166 17.612 17.8572 16.4286 17.8572C15.2451 17.8572 14.2857 18.8166 14.2857 20C14.2857 21.1835 15.2451 22.1429 16.4286 22.1429Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22.1429 17.8572H25", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22.1429 22.1429H25", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_195_1710"], ["type", "text", "inputmode", "decimal", "id", "accountNumber", "placeholder", "Account Number", "maxlength", "21", "minlength", "1", "maxlength", "21", "pattern", "^\\d+(\\.\\d+)*$", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '')", "name", "accountNumber", "ngModel", "", 1, "share-to__input", "allow-select"], ["accountNumber", "ngModel"], [1, "page-wrapper__bottom"], [1, "w-100", "btn", "btn-primary", "btn-gradient", 3, "disabled", "click"], ["class", "Offer-details_modal", 4, "ngIf"], [3, "show_popup", "popup_icon", "popup_title", "popup_description", "popup_id", "popup_btn_name", "popup_close", "close_popup", "popup_function"], [1, "sent-to__focusLabel"], [1, "Offer-details_modal"], [1, "Offer-details_close"], [1, "Offer-details_content"], [1, "offer-details_head"], [1, "offer-popup__title"], ["class", "btn_close", 3, "click", 4, "ngIf"], [1, "offer-popup__desc"], [1, "otp_inputs", "dir-ltr", "mb-4"], [3, "config", "onInputChange"], ["ngOtpInput", ""], [1, "otp-wrapper"], ["class", "otp-counter", 4, "ngIf"], ["class", "otp-resend", 3, "click", 4, "ngIf"], [1, "mt-3", "mb-3", "d-flex"], [1, "w-100", "btn", "btn-gradient", 3, "disabled", "click"], [1, "btn_close", 3, "click"], ["width", "41", "height", "40", "viewBox", "0 0 41 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "20.5", "cy", "20", "r", "19.5", "fill", "white", "stroke", "#F0EEED"], ["d", "M15.5 25L25.5 15", "stroke", "#24180E", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M25.5 25L15.5 15", "stroke", "#24180E", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "otp-counter"], [1, "counter_sec"], [1, "otp-resend", 3, "click"]],
      template: function B2bComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3)(4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 5)(6, "g", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "circle", 7)(8, "circle", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "g", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "defs")(12, "filter", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "feFlood", 12)(14, "feGaussianBlur", 13)(15, "feComposite", 14)(16, "feBlend", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "linearGradient", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "stop", 17)(19, "stop", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "clipPath", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "rect", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "B2B Voucher Request");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 23)(26, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Choose ONLY one of the below fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 25)(29, "form", 26, 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function B2bComponent_Template_form_ngSubmit_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(_r0));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 28)(32, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "circle", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "g", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "path", 32)(37, "path", 33)(38, "path", 34)(39, "path", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "defs")(41, "clipPath", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "rect", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, B2bComponent_label_44_Template, 2, 1, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 39, 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 41)(48, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Or");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "label", 42)(51, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "circle", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "g", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "path", 44)(56, "path", 45)(57, "path", 46)(58, "path", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "defs")(60, "clipPath", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "rect", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, B2bComponent_label_63_Template, 2, 1, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 49, 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 51)(67, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function B2bComponent_Template_button_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(_r0));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Proceed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, B2bComponent_div_69_Template, 18, 7, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "app-popup", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close_popup", function B2bComponent_Template_app_popup_close_popup_70_listener() {
            return ctx.closePopup();
          })("popup_function", function B2bComponent_Template_app_popup_popup_function_70_listener() {
            return ctx.PopupStatusBtnFunction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c2, _r4.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c2, _r2.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", (_r0.invalid || !_r2.value) && (_r0.invalid || !_r4.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showOtp);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show_popup", ctx.showPopup)("popup_icon", ctx.PopupIcon)("popup_title", ctx.PopupTitle)("popup_description", ctx.PopupDescription)("popup_id", ctx.PopupId)("popup_btn_name", ctx.PopupBtnName)("popup_close", ctx.PopupClose);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ng_otp_input__WEBPACK_IMPORTED_MODULE_6__.NgOtpInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _Shared_Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('giftInfoAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 1,
          transform: 'translateY(10px)'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 1,
          transform: 'translateY(0)'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms ease-in-out')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0ms ease-in-out')])])]
      }
    });
  }
}

/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-otp-input */ 9306);
/* harmony import */ var _Shared_Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Components/popup/popup.component */ 4656);








const _c0 = ["ngOtpInput"];
function HomeComponent_img_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.previewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Latitude:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Longitude:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.latitude, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.longitude, "");
  }
}
function HomeComponent_ng_template_52_p_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.error);
  }
}
function HomeComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_ng_template_52_p_0_Template, 2, 1, "p", 45);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.error);
  }
}
function HomeComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_ng_container_54_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.SelectedVoucher());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 48)(3, "div", 49)(4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "circle", 52)(7, "path", 53)(8, "path", 54)(9, "path", 55)(10, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 48)(12, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "500 EGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "1000 Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Get This Voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_ng_container_54_Template_div_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.SelectedVoucher());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 48)(20, "div", 49)(21, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "circle", 52)(24, "path", 53)(25, "path", 54)(26, "path", 55)(27, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 48)(29, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "500 EGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "1000 Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Get This Voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_ng_container_54_Template_div_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.SelectedVoucher());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 48)(37, "div", 49)(38, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "circle", 52)(41, "path", 53)(42, "path", 54)(43, "path", 55)(44, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 48)(46, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "500 EGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "1000 Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Get This Voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 60)(53, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_ng_container_54_Template_div_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.toggleCollapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "How does it work?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "circle", 64)(59, "path", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 66)(61, "ul")(62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "aaaaaa");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "bbbbbb");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "cccccc");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded", ctx_r5.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@collapseExpand", ctx_r5.isExpanded ? "expanded" : "collapsed");
  }
}
function HomeComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 63)(3, "g", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 69)(5, "path", 70)(6, "path", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "defs")(8, "clipPath", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "rect", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "AmazonLoyality Vouchers couldn\u2019t be loaded. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Back To Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function HomeComponent_div_56_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_56_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.CloseOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "circle", 91)(3, "path", 92)(4, "path", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_56_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 94)(1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Seconds.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.counter);
  }
}
function HomeComponent_div_56_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_56_a_14_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.resendOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    length: a0,
    allowNumbersOnly: true,
    inputClass: "OTP__input"
  };
};
function HomeComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 76)(3, "div", 77)(4, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_div_56_a_6_Template, 5, 0, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Please enter your OTP to Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 81)(10, "ng-otp-input", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onInputChange", function HomeComponent_div_56_Template_ng_otp_input_onInputChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.onOtpChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HomeComponent_div_56_div_13_Template, 4, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HomeComponent_div_56_a_14_Template, 2, 0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 87)(16, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_56_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.ProceedOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.showOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, ctx_r7.otpLength));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r7.showResend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.showResend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.isButtonDimmed);
  }
}
class HomeComponent {
  constructor(router) {
    this.router = router;
    this.isExpanded = false;
    this.previewUrl = null;
    this.latitude = null;
    this.longitude = null;
    this.error = null;
    /// otp
    this.showOtp = false;
    this.counter = 60;
    this.tick = 1000;
    this.showResend = false;
    this.otpLength = 6;
    this.isButtonDimmed = true;
    this.OtpCode = "";
    /// popupS
    this.showPopup = false;
    this.PopupIcon = "";
    this.PopupTitle = "";
    this.PopupDescription = "";
    this.PopupErrorIcon = "assets/images/error.png";
    this.PopupSuccessIcon = "assets/images/success.png";
    this.PopupConfirmIcon = "assets/images/confirm.png";
    this.PopupId = "";
    this.PopupBtnName = "";
    this.PopupClose = false;
  }
  ngOnInit() {}
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file); // convert image to base64 for preview
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.error = null;
      }, error => {
        this.error = 'Unable to retrieve location.';
        this.latitude = null;
        this.longitude = null;
      });
    } else {
      this.error = 'Geolocation is not supported by this browser.';
    }
  }
  SelectedVoucher() {
    this.router.navigate(['/b2b'], {
      queryParamsHandling: 'preserve'
    });
  }
  ///otp
  onOtpChange(code) {
    if (code.length < this.otpLength) {
      this.isButtonDimmed = true;
      return;
    } else {
      this.isButtonDimmed = false;
      this.OtpCode = code;
      // console.log(this.OtpCode)
    }
  }

  clearOtp() {
    this.ngOtpInputRef.setValue('');
    this.ngOtpInputRef.focusTo(this.ngOtpInputRef.getBoxId(0));
  }
  resendOTP() {
    this.showResend = false;
    this.counter = 60;
    this.clearOtp();
    this.startTimer();
    // this.GetResend();
  }

  ProceedOTP() {
    this.CloseOtp();
    this.openPopup("title", this.PopupSuccessIcon, "Desc", "DoneID", this.ToDashboard,
    //() => {}
    "Done", false);
  }
  OpenOtp() {
    this.closePopup();
    this.startTimer();
    this.showOtp = true;
    document.querySelector('body').style.overflow = 'hidden';
  }
  CloseOtp() {
    this.stopTimer();
    this.counter = 60;
    this.showOtp = false;
    document.querySelector('body').style.overflow = 'initial';
  }
  ///timer
  stopTimer() {
    this.countDown.unsubscribe();
  }
  startTimer() {
    this.countDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0, this.tick).subscribe(() => {
      --this.counter;
      if (this.counter <= 0) {
        this.stopTimer();
        this.showResend = true;
      }
    });
  }
  // how does work
  toggleCollapse() {
    this.isExpanded = !this.isExpanded;
  }
  /////// redirect to dashboard
  ToDashboard() {
    window.location.href = this.getResultURL({
      errorCode: '101',
      screenName: 'dashboard',
      isSuccessful: false,
      errorDescription: 'invalid'
    });
  }
  getResultURL(params) {
    const queryString = new URLSearchParams(params);
    return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resultPage}?${queryString}`;
  }
  /////// Handel status popup
  openPopup(title, icon, desc, id, callback, btnName, close) {
    this.PopupTitle = title;
    this.PopupIcon = icon;
    this.PopupDescription = desc;
    this.PopupId = id;
    this.showPopup = true;
    this.PopupStatusFunction = callback;
    this.PopupBtnName = btnName;
    this.PopupClose = close;
    document.querySelector('body').style.overflow = 'hidden';
  }
  closePopup() {
    this.showPopup = false;
    document.querySelector('body').style.overflow = 'initial';
  }
  PopupStatusBtnFunction() {
    if (this.PopupStatusFunction) {
      this.PopupStatusFunction();
    }
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      viewQuery: function HomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ngOtpInputRef = _t.first);
        }
      },
      decls: 58,
      vars: 13,
      consts: [[1, "main-section", "page-wrapper"], [1, "page-wrapper__top"], [1, "offer-header"], [1, "offer-name"], [1, "btn-back-page", "reverse-rtl", "border-0", 3, "click"], ["width", "40", "height", "40", "viewBox", "0 0 40 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["filter", "url(#filter0_b_513_123)"], ["cx", "20", "cy", "20", "r", "20", "fill", "white", "fill-opacity", "0.1"], ["cx", "20", "cy", "20", "r", "19.5", "stroke", "url(#paint0_linear_513_123)"], ["clip-path", "url(#clip0_513_123)"], ["d", "M21.3492 24.5833L16.9841 20L21.3492 15.4167", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "filter0_b_513_123", "x", "-4", "y", "-4", "width", "48", "height", "48", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "BackgroundImageFix", "stdDeviation", "2"], ["in2", "SourceAlpha", "operator", "in", "result", "effect1_backgroundBlur_513_123"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_backgroundBlur_513_123", "result", "shape"], ["id", "paint0_linear_513_123", "x1", "4.46483", "y1", "-8.57141", "x2", "43.1484", "y2", "-6.73257", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FFFCFA"], ["offset", "1", "stop-color", "white", "stop-opacity", "0"], ["id", "clip0_513_123"], ["width", "20", "height", "20", "fill", "white", "transform", "translate(10 10)"], [1, "page-title"], [2, "width", "40px"], [1, "points-wrapper"], [1, "points-content"], [1, "points-title"], [1, "page-content"], ["type", "file", "accept", "image/*", "capture", "environment", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "w-100", "btn", "btn-primary", "btn-gradient", 2, "margin-bottom", "20px", "display", "flex", "align-items", "center", "justify-content", "center", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20px", "height", "20px", "viewBox", "0 0 24 24", "fill", "none", 2, "margin-inline-end", "3px"], ["cx", "12", "cy", "13", "r", "3", "stroke", "#1C274C", "stroke-width", "1.5", 2, "stroke", "#fff"], ["d", "M9.77778 21H14.2222C17.3433 21 18.9038 21 20.0248 20.2646C20.51 19.9462 20.9267 19.5371 21.251 19.0607C22 17.9601 22 16.4279 22 13.3636C22 10.2994 22 8.76721 21.251 7.6666C20.9267 7.19014 20.51 6.78104 20.0248 6.46268C19.3044 5.99013 18.4027 5.82123 17.022 5.76086C16.3631 5.76086 15.7959 5.27068 15.6667 4.63636C15.4728 3.68489 14.6219 3 13.6337 3H10.3663C9.37805 3 8.52715 3.68489 8.33333 4.63636C8.20412 5.27068 7.63685 5.76086 6.978 5.76086C5.59733 5.82123 4.69555 5.99013 3.97524 6.46268C3.48995 6.78104 3.07328 7.19014 2.74902 7.6666C2 8.76721 2 10.2994 2 13.3636C2 16.4279 2 17.9601 2.74902 19.0607C3.07328 19.5371 3.48995 19.9462 3.97524 20.2646C5.09624 21 6.65675 21 9.77778 21Z", "stroke", "#1C274C", "stroke-width", "1.5", 2, "stroke", "#fff"], ["d", "M19 10H18", "stroke", "#1C274C", "stroke-width", "1.5", "stroke-linecap", "round", 2, "stroke", "#fff"], ["alt", "Preview", "style", "max-width: 100%; border-radius: 8px; margin-bottom: 20px;", 3, "src", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "sketch", "http://www.bohemiancoding.com/sketch/ns", "width", "20px", "height", "20px", "viewBox", "-4 0 32 32", "version", "1.1", 2, "margin-inline-end", "3px"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd", 0, "sketch", "type", "MSPage"], ["id", "Icon-Set", 0, "sketch", "type", "MSLayerGroup", "transform", "translate(-104.000000, -411.000000)", "fill", "#000000", 2, "fill", "#fff"], ["d", "M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z", "id", "location", 0, "sketch", "type", "MSShapeGroup"], [4, "ngIf", "ngIfElse"], ["noLocation", ""], [4, "ngIf"], ["class", "Offer-details_modal", 4, "ngIf"], [3, "show_popup", "popup_icon", "popup_title", "popup_description", "popup_id", "popup_btn_name", "popup_close", "close_popup", "popup_function"], ["alt", "Preview", 2, "max-width", "100%", "border-radius", "8px", "margin-bottom", "20px", 3, "src"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"], [1, "voucher-wrapper", 3, "click"], [1, "voucher-content"], [1, "voucher_top"], [1, "voucher-icon"], ["width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "24", "cy", "24", "r", "24", "fill", "#FFF2E6"], ["d", "M36.3686 18.198V20.4719C34.9633 21.072 33.9799 22.4535 33.9799 24.0618C33.9799 25.6701 34.9633 27.0516 36.3686 27.6517V29.9255C36.3686 32.0845 34.7983 33.529 32.4106 33.8348C25.8425 34.676 22.1691 34.6817 15.5894 33.8348C13.2678 33.536 11.6314 32.0845 11.6314 29.9255V27.6518C13.0368 27.0518 14.0203 25.6702 14.0203 24.0618C14.0203 22.4534 13.0368 21.0718 11.6314 20.4718V18.198C11.6314 16.039 13.2836 14.675 15.5894 14.2888C22.091 13.1998 25.8153 13.3636 32.4106 14.2888C34.5915 14.5948 36.3686 16.039 36.3686 18.198Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20.2333 21.7301C21.2626 21.7301 22.0971 20.8957 22.0971 19.8663C22.0971 18.8369 21.2626 18.0024 20.2333 18.0024C19.2039 18.0024 18.3694 18.8369 18.3694 19.8663C18.3694 20.8957 19.2039 21.7301 20.2333 21.7301Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M27.8447 29.3806C28.8741 29.3806 29.7086 28.5462 29.7086 27.5168C29.7086 26.4874 28.8741 25.653 27.8447 25.653C26.8154 25.653 25.9809 26.4874 25.9809 27.5168C25.9809 28.5462 26.8154 29.3806 27.8447 29.3806Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M19.6349 28.0371C23.4886 24.8659 25.4143 22.9622 28.3646 19.3075", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "voucher_currency"], [1, "voucher_Points"], [1, "voucher_bottom"], [1, "collapsible-item"], [1, "header", 3, "click"], [1, "arrow"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "11.5", "transform", "matrix(-1 0 0 1 24 0)", "fill", "#F3F3F5", "stroke", "#F3F3F5"], ["d", "M14.75 11.125L12 13.875L9.25 11.125", "stroke", "#948F8D", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "body"], [1, "error-section"], ["clip-path", "url(#clip0_244_1234)"], ["d", "M12 18.75C11.9258 18.75 11.8533 18.772 11.7917 18.8132C11.73 18.8544 11.6819 18.913 11.6535 18.9815C11.6252 19.05 11.6177 19.1254 11.6322 19.1982C11.6467 19.2709 11.6824 19.3377 11.7348 19.3902C11.7873 19.4426 11.8541 19.4783 11.9268 19.4928C11.9996 19.5073 12.075 19.4998 12.1435 19.4715C12.212 19.4431 12.2706 19.395 12.3118 19.3333C12.353 19.2717 12.375 19.1992 12.375 19.125C12.375 19.0255 12.3355 18.9302 12.2652 18.8598C12.1948 18.7895 12.0995 18.75 12 18.75Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 15.75V8.25", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round"], ["d", "M13.621 1.76001C13.4722 1.45702 13.2414 1.20181 12.9549 1.02333C12.6684 0.844851 12.3376 0.750244 12 0.750244C11.6624 0.750244 11.3316 0.844851 11.0451 1.02333C10.7586 1.20181 10.5278 1.45702 10.379 1.76001L0.905994 21.058C0.791964 21.29 0.738931 21.5472 0.751901 21.8053C0.764871 22.0635 0.843416 22.3141 0.980122 22.5334C1.11683 22.7528 1.30718 22.9337 1.53322 23.0591C1.75926 23.1845 2.01352 23.2502 2.27199 23.25H21.728C21.9865 23.2502 22.2407 23.1845 22.4668 23.0591C22.6928 22.9337 22.8832 22.7528 23.0199 22.5334C23.1566 22.3141 23.2351 22.0635 23.2481 21.8053C23.2611 21.5472 23.208 21.29 23.094 21.058L13.621 1.76001Z", "stroke", "#F16E00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_244_1234"], ["width", "24", "height", "24", "fill", "white"], [1, "Offer-details_modal"], [1, "Offer-details_close"], [1, "Offer-details_content"], [1, "offer-details_head"], [1, "offer-popup__title"], ["class", "btn_close", 3, "click", 4, "ngIf"], [1, "offer-popup__desc"], [1, "otp_inputs", "dir-ltr", "mb-4"], [3, "config", "onInputChange"], ["ngOtpInput", ""], [1, "otp-wrapper"], ["class", "otp-counter", 4, "ngIf"], ["class", "otp-resend", 3, "click", 4, "ngIf"], [1, "mt-3", "mb-3", "d-flex"], [1, "w-100", "btn", "btn-gradient", 3, "disabled", "click"], [1, "btn_close", 3, "click"], ["width", "41", "height", "40", "viewBox", "0 0 41 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "20.5", "cy", "20", "r", "19.5", "fill", "white", "stroke", "#F0EEED"], ["d", "M15.5 25L25.5 15", "stroke", "#24180E", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M25.5 25L15.5 15", "stroke", "#24180E", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "otp-counter"], [1, "counter_sec"], [1, "otp-resend", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3)(4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_4_listener() {
            return ctx.ToDashboard();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 5)(6, "g", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "circle", 7)(8, "circle", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "g", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "defs")(12, "filter", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "feFlood", 12)(14, "feGaussianBlur", 13)(15, "feComposite", 14)(16, "feBlend", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "linearGradient", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "stop", 17)(19, "stop", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "clipPath", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "rect", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "AmazonLoyality Vouchers");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 23)(26, "div", 24)(27, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "My Points");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span")(30, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "7,500");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Points");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 26)(34, "div")(35, "input", 27, 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_35_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "svg", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "circle", 31)(40, "path", 32)(41, "path", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Open Camera ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, HomeComponent_img_43_Template, 1, 1, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div")(45, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_45_listener() {
            return ctx.getLocation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "svg", 35)(47, "g", 36)(48, "g", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "path", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Get My Location ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, HomeComponent_div_51_Template, 9, 2, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, HomeComponent_ng_template_52_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, HomeComponent_ng_container_54_Template, 68, 3, "ng-container", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, HomeComponent_ng_container_55_Template, 14, 0, "ng-container", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, HomeComponent_div_56_Template, 18, 7, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "app-popup", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close_popup", function HomeComponent_Template_app_popup_close_popup_57_listener() {
            return ctx.closePopup();
          })("popup_function", function HomeComponent_Template_app_popup_popup_function_57_listener() {
            return ctx.PopupStatusBtnFunction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.previewUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.latitude && ctx.longitude)("ngIfElse", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showOtp);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show_popup", ctx.showPopup)("popup_icon", ctx.PopupIcon)("popup_title", ctx.PopupTitle)("popup_description", ctx.PopupDescription)("popup_id", ctx.PopupId)("popup_btn_name", ctx.PopupBtnName)("popup_close", ctx.PopupClose);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_otp_input__WEBPACK_IMPORTED_MODULE_6__.NgOtpInputComponent, _Shared_Components_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('collapseExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0px',
          opacity: 0
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*',
          opacity: 1
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('collapsed => expanded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms ease-in-out')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('expanded => collapsed', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms ease-in-out')])])]
      }
    });
  }
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  localizationFileUrl: 'assets/i18n/',
  resultPage: "http://staging.orange.eg/en/offers-promotions/dynamic-offer-result",
  apiUrl: 'http://services.staging.orange.eg/APIs/Shop'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map