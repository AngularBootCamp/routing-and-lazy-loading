function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payroll-payroll-module"], {
  /***/
  "./src/app/payroll/payroll-search.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/payroll/payroll-search.component.ts ***!
    \*****************************************************/

  /*! exports provided: PayrollSearchComponent */

  /***/
  function srcAppPayrollPayrollSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayrollSearchComponent", function () {
      return PayrollSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_search_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/search-box.component */
    "./src/app/shared/search-box.component.ts");

    var PayrollSearchComponent = function PayrollSearchComponent() {
      _classCallCheck(this, PayrollSearchComponent);
    };

    PayrollSearchComponent.ɵfac = function PayrollSearchComponent_Factory(t) {
      return new (t || PayrollSearchComponent)();
    };

    PayrollSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PayrollSearchComponent,
      selectors: [["payroll-search"]],
      decls: 7,
      vars: 0,
      consts: [[1, "card"], [1, "card-content"], [1, "card-title"]],
      template: function PayrollSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Payroll Functionality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search for Employee Payroll Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "search-box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_search_box_component__WEBPACK_IMPORTED_MODULE_1__["SearchBoxComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayrollSearchComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'payroll-search',
        template: "\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <span class=\"card-title\">Payroll Functionality</span>\n        <div>Search for Employee Payroll Records</div>\n        <search-box></search-box>\n      </div>\n    </div>\n  "
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/payroll/payroll.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/payroll/payroll.module.ts ***!
    \*******************************************/

  /*! exports provided: PayrollModule */

  /***/
  function srcAppPayrollPayrollModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayrollModule", function () {
      return PayrollModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _payroll_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./payroll-search.component */
    "./src/app/payroll/payroll-search.component.ts");

    var payrollRoutes = [{
      path: '',
      component: _payroll_search_component__WEBPACK_IMPORTED_MODULE_4__["PayrollSearchComponent"]
    }];

    var PayrollModule = function PayrollModule() {
      _classCallCheck(this, PayrollModule);
    };

    PayrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PayrollModule
    });
    PayrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PayrollModule_Factory(t) {
        return new (t || PayrollModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(payrollRoutes)]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PayrollModule, {
      declarations: [_payroll_search_component__WEBPACK_IMPORTED_MODULE_4__["PayrollSearchComponent"]],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PayrollModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [_payroll_search_component__WEBPACK_IMPORTED_MODULE_4__["PayrollSearchComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(payrollRoutes)]
      }]
    }], null, null);
    /***/

  }
}]); //# sourceMappingURL=payroll-payroll-module-es2015.js.map
//# sourceMappingURL=payroll-payroll-module-es5.js.map