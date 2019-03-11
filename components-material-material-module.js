(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-material-material-module"],{

/***/ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js ***!
  \*******************************************************************************************/
/*! exports provided: MomentDateModule, MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateModule", function() { return MomentDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMomentDateModule", function() { return MatMomentDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY", function() { return MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS", function() { return MAT_MOMENT_DATE_ADAPTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateAdapter", function() { return MomentDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_FORMATS", function() { return MAT_MOMENT_DATE_FORMATS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = moment__WEBPACK_IMPORTED_MODULE_3___default.a || moment__WEBPACK_IMPORTED_MODULE_3__;
/**
 * InjectionToken for moment date adapter to configure options.
 * @type {?}
 */
var MAT_MOMENT_DATE_ADAPTER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
    return {
        useUtc: false
    };
}
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts Moment.js Dates for use with Angular Material.
 */
var MomentDateAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MomentDateAdapter, _super);
    function MomentDateAdapter(dateLocale, options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.setLocale(dateLocale || moment.locale());
        return _this;
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    MomentDateAdapter.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
        /** @type {?} */
        var momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, function (i) { return _this.createDate(2017, 0, i + 1).format('D'); }),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).year();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).month();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).date();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getDayOfWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).day();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MomentDateAdapter.prototype.getMonthNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
        return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.getDateNames = /**
     * @return {?}
     */
    function () {
        return this._localeData.dates;
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MomentDateAdapter.prototype.getDayOfWeekNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        if (style == 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style == 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getYearName = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).format('YYYY');
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this._localeData.firstDayOfWeek;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getNumDaysInMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).daysInMonth();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.clone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.clone().locale(this.locale);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.createDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        /** @type {?} */
        var result = this._createMoment({ year: year, month: month, date: date }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.today = /**
     * @return {?}
     */
    function () {
        return this._createMoment().locale(this.locale);
    };
    /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    MomentDateAdapter.prototype.parse = /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    function (value, parseFormat) {
        if (value && typeof value == 'string') {
            return this._createMoment(value, parseFormat, this.locale);
        }
        return value ? this._createMoment(value).locale(this.locale) : null;
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    MomentDateAdapter.prototype.format = /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    function (date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarYears = /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    function (date, years) {
        return this.clone(date).add({ years: years });
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarMonths = /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    function (date, months) {
        return this.clone(date).add({ months: months });
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarDays = /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    function (date, days) {
        return this.clone(date).add({ days: days });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.toIso8601 = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).format();
    };
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     */
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    MomentDateAdapter.prototype.deserialize = /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var date;
        if (value instanceof Date) {
            date = this._createMoment(value).locale(this.locale);
        }
        else if (this.isDateInstance(value)) {
            // Note: assumes that cloning also sets the correct locale.
            return this.clone(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return this._createMoment(date).locale(this.locale);
        }
        return _super.prototype.deserialize.call(this, value);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    MomentDateAdapter.prototype.isDateInstance = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return moment.isMoment(obj);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).isValid();
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.invalid = /**
     * @return {?}
     */
    function () {
        return moment.invalid();
    };
    /** Creates a Moment instance while respecting the current UTC settings. */
    /**
     * Creates a Moment instance while respecting the current UTC settings.
     * @private
     * @param {...?} args
     * @return {?}
     */
    MomentDateAdapter.prototype._createMoment = /**
     * Creates a Moment instance while respecting the current UTC settings.
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (this.options && this.options.useUtc) ? moment.utc.apply(moment, args) : moment.apply(void 0, args);
    };
    MomentDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    MomentDateAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS,] }] }
    ]; };
    return MomentDateAdapter;
}(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
var MAT_MOMENT_DATE_FORMATS = {
    parse: {
        dateInput: 'l',
    },
    display: {
        dateInput: 'l',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MomentDateModule = /** @class */ (function () {
    function MomentDateModule() {
    }
    MomentDateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    providers: [
                        {
                            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                            useClass: MomentDateAdapter,
                            deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                        }
                    ],
                },] },
    ];
    return MomentDateModule;
}());
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
var MatMomentDateModule = /** @class */ (function () {
    function MatMomentDateModule() {
    }
    MatMomentDateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [MomentDateModule],
                    providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: ɵ0 }],
                },] },
    ];
    return MatMomentDateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=material-moment-adapter.es5.js.map


/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/button-toggle/button-toggle.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/button-toggle/button-toggle.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/button-toggle/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-button-toggle&gt;</code> are on/off toggles with the appearance of a button. These toggles can be configured to behave as either radio-buttons or checkboxes. While they can be standalone, they are typically part of a\r\n\t\t\t\t\t<mark>mat-button-toggle-group</mark>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-button-toggle>Toggle me!</mat-button-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleVertical\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThe button-toggles can be rendered in a vertical orientation by adding the\r\n\t\t\t\t\t<mark>vertical</mark> attribute.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-button-toggle vertical=\"true\">Toggle me!</mat-button-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleList\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tDividers can be added to lists as a means of separating content into distinct sections. Inset dividers can also be added to provide the appearance of distinct elements in a list without cluttering content like avatar images or icons. Make sure to avoid adding an inset divider to the last element in a list, because it will overlap with the section divider.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n\t\t\t\t\t\t<mat-button-toggle value=\"left\">\r\n\t\t\t\t\t\t\t<mat-icon>format_align_left</mat-icon>\r\n\t\t\t\t\t\t</mat-button-toggle>\r\n\t\t\t\t\t\t<mat-button-toggle value=\"center\">\r\n\t\t\t\t\t\t\t<mat-icon>format_align_center</mat-icon>\r\n\t\t\t\t\t\t</mat-button-toggle>\r\n\t\t\t\t\t\t<mat-button-toggle value=\"right\">\r\n\t\t\t\t\t\t\t<mat-icon>format_align_right</mat-icon>\r\n\t\t\t\t\t\t</mat-button-toggle>\r\n\t\t\t\t\t\t<mat-button-toggle value=\"justify\" disabled>\r\n\t\t\t\t\t\t\t<mat-icon>format_align_justify</mat-icon>\r\n\t\t\t\t\t\t</mat-button-toggle>\r\n\t\t\t\t\t</mat-button-toggle-group>\r\n\t\t\t\t\t<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/button-toggle/button-toggle.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/button-toggle/button-toggle.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ButtonToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToggleComponent", function() { return ButtonToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basic = {
    beforeCodeTitle: 'Basic button-toggles',
    htmlCode: "<mat-button-toggle>Toggle me!</mat-button-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Basic button-toggles\n*/\n@Component({\n  selector: 'button-toggle-overview-example',\n  templateUrl: 'button-toggle-overview-example.html',\n  styleUrls: ['button-toggle-overview-example.css'],\n})\nexport class ButtonToggleOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var vertical = {
    beforeCodeTitle: 'Vertical button toggle',
    htmlCode: "<mat-button-toggle [vertical]=\"true\">Toggle me!</mat-button-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title  Vertical button-toggles\n*/\n@Component({\n  selector: 'button-toggle-vertical-example',\n  templateUrl: 'button-toggle-vertical-example.html',\n  styleUrls: ['button-toggle-vertical-example.css'],\n})\nexport class ButtonToggleVerticalExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var listExample = {
    beforeCodeTitle: 'Exclusive selection',
    htmlCode: "\n<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled>\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Exclusive selection\n*/\n@Component({\n  selector: 'button-toggle-exclusive-example',\n  templateUrl: 'button-toggle-exclusive-example.html',\n  styleUrls: ['button-toggle-exclusive-example.css'],\n})\nexport class ButtonToggleExclusiveExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ButtonToggleComponent = /** @class */ (function () {
    function ButtonToggleComponent() {
    }
    ButtonToggleComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleVertical = vertical;
        this.exampleList = listExample;
    };
    ButtonToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-button-toggle',
            template: __webpack_require__(/*! ./button-toggle.component.html */ "./src/app/content/pages/components/material/buttons-and-indicators/button-toggle/button-toggle.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-selected-value {\n\t\tmargin: 15px 0;\n\t  }\n\t"]
        })
    ], ButtonToggleComponent);
    return ButtonToggleComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/button/button.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/button/button.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/button/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tAngular Material buttons are native\r\n\t\t\t\t\t<code>&lt;button&gt;</code> or\r\n\t\t\t\t\t<code>&lt;a&gt;</code> elements enhanced with Material Design styling and ink ripples.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t\tNative\r\n\t\t\t\t\t\t<code>&lt;button&gt;</code> and\r\n\t\t\t\t\t\t<code>&lt;a&gt;</code> elements are always used in order to provide the most straightforward and accessible experience for users. A\r\n\t\t\t\t\t\t<code>&lt;button&gt;</code> element should be used whenever some action is performed. An\r\n\t\t\t\t\t\t<code>&lt;a&gt;</code> element should be used whenever the user will navigate to another view.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-button>Basic</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-button color=\"primary\">Primary</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-button color=\"accent\">Accent</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-button color=\"warn\">Warn</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-button disabled>Disabled</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-button routerLink=\".\">Link</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleRaised\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-raised-button>Basic</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button color=\"primary\">Primary</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button color=\"accent\">Accent</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button color=\"warn\">Warn</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button disabled>Disabled</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-raised-button routerLink=\".\">Link</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleIcon\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-icon-button>\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"accent\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button disabled>\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exmapleFab\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-fab>Basic</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab color=\"primary\">Primary</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab color=\"accent\">Accent</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab color=\"warn\">Warn</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab disabled>Disabled</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab>\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-fab routerLink=\".\">Link</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleMiniFav\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-mini-fab>Basic</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab color=\"primary\">Primary</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab color=\"accent\">Accent</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab color=\"warn\">Warn</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab disabled>Disabled</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab>\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-mini-fab routerLink=\".\">Link</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/button/button.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/button/button.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basic = {
    beforeCodeTitle: 'Basic buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var raised = {
    beforeCodeTitle: 'Raised buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var icon = {
    beforeCodeTitle: 'Icon buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-icon-button>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  </div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}\n\n",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var fab = {
    beforeCodeTitle: 'Fab buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var miniFab = {
    beforeCodeTitle: 'Mini Fab buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleRaised = raised;
        this.exampleIcon = icon;
        this.exmapleFab = fab;
        this.exampleMiniFav = miniFab;
    };
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/content/pages/components/material/buttons-and-indicators/button/button.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-button-row {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-around;\n\t  }\n\t"]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/chips/chips.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/chips/chips.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/chips/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-chip-list&gt;</code> displays a list of values as individual, keyboard accessible, chips.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-chip-list>\r\n\t\t\t\t\t\t<mat-chip>One fish</mat-chip>\r\n\t\t\t\t\t\t<mat-chip>Two fish</mat-chip>\r\n\t\t\t\t\t\t<mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n\t\t\t\t\t\t<mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n\t\t\t\t\t</mat-chip-list>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleInput\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tThe\r\n\t\t\t\t\t<mark>MatChipInput</mark> directive can be used together with a chip-list to streamline the interaction between the two components. This directive adds chip-specific behaviors to the input element within\r\n\t\t\t\t\t<code>&lt;mat-form-field&gt;</code> for adding and removing chips. The\r\n\t\t\t\t\t<code>&lt;input&gt;</code> with\r\n\t\t\t\t\t<mark>MatChipInput</mark> can be placed inside or outside the chip-list element.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tAn example of chip input placed inside the chip-list element.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"demo-chip-list\">\r\n\t\t\t\t\t\t<mat-chip-list #chipList>\r\n\t\t\t\t\t\t\t<mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(fruit)\">\r\n\t\t\t\t\t\t\t\t{{fruit.name}}\r\n\t\t\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n\t\t\t\t\t\t\t</mat-chip>\r\n\t\t\t\t\t\t\t<input placeholder=\"New fruit...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" />\r\n\t\t\t\t\t\t</mat-chip-list>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleStacked\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t\t<mat-chip-list class=\"mat-chip-list-stacked\">\r\n\t\t\t\t\t\t\t\t<mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\">\r\n\t\t\t\t\t\t\t\t  {{chip.name}}\r\n\t\t\t\t\t\t\t\t</mat-chip>\r\n\t\t\t\t\t\t\t  </mat-chip-list>\r\n\t\t\t\t\t\t\t  \r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/chips/chips.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/chips/chips.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var basic = {
    beforeCodeTitle: 'Basic chips',
    htmlCode: "\n<mat-chip-list>\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\n  <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\n</mat-chip-list>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Basic chips\n*/\n@Component({\n  selector: 'chips-overview-example',\n  templateUrl: 'chips-overview-example.html',\n  styleUrls: ['chips-overview-example.css'],\n})\nexport class ChipsOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var input = {
    beforeCodeTitle: 'Chips with input',
    htmlCode: "\n<mat-form-field class=\"demo-chip-list\">\n  <mat-chip-list #chipList>\n    <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\n      [removable]=\"removable\" (remove)=\"remove(fruit)\">\n      {{fruit.name}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input placeholder=\"New fruit...\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\" />\n  </mat-chip-list>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatChipInputEvent} from '@angular/material';\nimport {ENTER, COMMA} from '@angular/cdk/keycodes';\n\n\n/**\n* @title Chips with input\n*/\n@Component({\n  selector: 'chips-input-example',\n  templateUrl: 'chips-input-example.html',\n  styleUrls: ['chips-input-example.css']\n})\nexport class ChipsInputExample {\n  visible: boolean = true;\n  selectable: boolean = true;\n  removable: boolean = true;\n  addOnBlur: boolean = true;\n\n\n  // Enter, comma\n  separatorKeysCodes = [ENTER, COMMA];\n\n\n  fruits = [\n    { name: 'Lemon' },\n    { name: 'Lime' },\n    { name: 'Apple' },\n  ];\n\n\n  add(event: MatChipInputEvent): void {\n    let input = event.input;\n    let value = event.value;\n\n\n    // Add our fruit\n    if ((value || '').trim()) {\n      this.fruits.push({ name: value.trim() });\n    }\n\n\n    // Reset the input value\n    if (input) {\n      input.value = '';\n    }\n  }\n\n\n  remove(fruit: any): void {\n    let index = this.fruits.indexOf(fruit);\n\n    if (index >= 0) {\n      this.fruits.splice(index, 1);\n    }\n  }\n}\n",
    cssCode: "\n.demo-chip-list {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var stacked = {
    beforeCodeTitle: 'Stacked chips',
    htmlCode: "\n<<mat-chip-list class=\"mat-chip-list-stacked\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Stacked chips\n*/\n@Component({\n  selector: 'chips-stacked-example',\n  templateUrl: 'chips-stacked-example.html',\n  styleUrls: ['chips-stacked-example.css'],\n})\nexport class ChipsStackedExample {\n  color: string;\n\n\n  availableColors = [\n    { name: 'none', color: '' },\n    { name: 'Primary', color: 'primary' },\n    { name: 'Accent', color: 'accent' },\n    { name: 'Warn', color: 'warn' }\n  ];\n}\n",
    cssCode: "\n\t\tmat-chip {\n\t\t\tmax-width: 200px;\n\t\t}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ChipsComponent = /** @class */ (function () {
    function ChipsComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleInput = input;
        this.exampleStacked = stacked;
    };
    ChipsComponent.prototype.add = function (event) {
        var inputText = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (inputText) {
            inputText.value = '';
        }
    };
    ChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-chips',
            template: __webpack_require__(/*! ./chips.component.html */ "./src/app/content/pages/components/material/buttons-and-indicators/chips/chips.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.demo-chip-list {\n\t\twidth: 100%;\n\t}\n\tmat-chip {\n\t\tmax-width: 200px;\n\t}\n\t"]
        })
    ], ChipsComponent);
    return ChipsComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/icon/icon.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/icon/icon.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/icon/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-icon&gt;</code> makes it easier to use vector-based icons in your app. This directive supports both icon fonts and SVG icons, but not bitmap-based formats (png, jpg, etc.).\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<b>Registering icons:</b>\r\n\t\t\t\t\t<mark>MatIconRegistry</mark> is an injectable service that allows you to associate icon names with SVG URLs and define aliases for CSS font classes. Its methods are discussed below and listed in the API summary.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<b> Font icons with ligatures:</b> Some fonts are designed to show icons by using\r\n\t\t\t\t\t<a href=\"https://en.wikipedia.org/wiki/Typographic_ligature\" target=\"_blank\">ligatures</a>, for example by rendering the text \"home\" as a home image. To use a ligature icon, put its text in the content of the\r\n\t\t\t\t\t<mark>mat-icon</mark> component.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tBy default,\r\n\t\t\t\t\t<code>&lt;mat-icon&gt;</code> expects the\r\n\t\t\t\t\t<a href=\"http://google.github.io/material-design-icons/#icon-font-for-the-web\" target=\"_blank\">Material icons font</a>. (You will still need to include the HTML to load the font and its CSS, as described in the link). You can specify a different font by setting the\r\n\t\t\t\t\t<mark>fontSet</mark> input to either the CSS class to apply to use the desired font, or to an alias previously registered with\r\n\t\t\t\t\t<mark>MatIconRegistry.registerFontClassAlias</mark>.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-icon>home</mat-icon>\r\n\t\t\t\t\t<mat-icon>queue music</mat-icon>\r\n\t\t\t\t\t<mat-icon>call split</mat-icon>\r\n\t\t\t\t\t<mat-icon>event note</mat-icon>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleSVG\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-icon&gt;</code> \r\n\t\t\t\t\tWhen an <mark>mat-icon</mark> component displays an SVG icon, it does so by directly inlining the SVG content into the page as a child of the component. \r\n\t\t\t\t\t(Rather than using an tag or a div background image). This makes it easier to apply CSS styles to SVG icons. For example, the default color of the SVG content is the CSS \r\n\t\t\t\t\t<a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword\" target=\"_blank\">currentColor</a> value. \r\n\t\t\t\t\tThis makes SVG icons by default have the same color as surrounding text, and allows you to change the color by setting the \"color\" style on the <mark>mat-icon</mark> element.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t\tIn order to prevent XSS vulnerabilities, any SVG URLs passed to the \r\n\t\t\t\t\t\t<mark>MatIconRegistry</mark> must be marked as trusted resource URLs by using Angular's \r\n\t\t\t\t\t\t<mark>DomSanitizer</mark> service.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-icon svgIcon=\"explore\"></mat-icon>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/icon/icon.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/icon/icon.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var basic = {
    beforeCodeTitle: 'Basic icons',
    htmlCode: "\n<mat-icon>home</mat-icon>\n<mat-icon>queue music</mat-icon>\n<mat-icon>call split</mat-icon>\n<mat-icon>event note</mat-icon>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Basic icons\n*/\n@Component({\n  selector: 'icon-overview-example',\n  templateUrl: 'icon-overview-example.html',\n  styleUrls: ['icon-overview-example.css']\n})\nexport class IconOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var sVG = {
    beforeCodeTitle: 'SVG icons',
    htmlCode: "<mat-icon svgIcon=\"thumbs-up\"></mat-icon>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {MatIconRegistry} from '@angular/material';\n\n\n/**\n* @title SVG icons\n*/\n@Component({\n  selector: 'icon-svg-example',\n  templateUrl: 'icon-svg-example.html',\n  styleUrls: ['icon-svg-example.css'],\n})\nexport class IconSvgExample {\n  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {\n  iconRegistry.addSvgIcon(\n    'thumbs-up',\n     sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var IconComponent = /** @class */ (function () {
    function IconComponent(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('explore', sanitizer.bypassSecurityTrustResourceUrl('./assets/app/media/img/icons/warning.svg'));
    }
    IconComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleSVG = sVG;
    };
    IconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-icon',
            template: __webpack_require__(/*! ./icon.component.html */ "./src/app/content/pages/components/material/buttons-and-indicators/icon/icon.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/progress-bar/progress-bar.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/progress-bar/progress-bar.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/button/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleDeterminate\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-progress-bar&gt;</code>is a horizontal progress-bar for indicating progress and activity.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<b>Determinate:</b> Operations where the percentage of the operation complete is known should use the determinate indicator.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleIndeterminate\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tOperations where the user is asked to wait while something finishes and it’s not necessary to indicate how long it will take should use the indeterminate indicator.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleBuffer\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tOperations where the user wants to indicate some activity or loading from the server, use the buffer indicator.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exmapleQuery\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tFor situations where the user wants to indicate pre-loading (until the loading can actually be made), use the query indicator.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleConfig\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<h2 class=\"example-h2\">Progress bar configuration</h2>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Color:</label>\r\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"color\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\r\n\t\t\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\r\n\t\t\t\t\t\t\t\t\t\tAccent\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\r\n\t\t\t\t\t\t\t\t\t\tWarn\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Mode:</label>\r\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"mode\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n\t\t\t\t\t\t\t\t\t\tDeterminate\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n\t\t\t\t\t\t\t\t\t\tIndeterminate\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"buffer\">\r\n\t\t\t\t\t\t\t\t\t\tBuffer\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"query\">\r\n\t\t\t\t\t\t\t\t\t\tQuery\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Progress:</label>\r\n\t\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\r\n\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"mode == 'buffer'\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Buffer:</label>\r\n\t\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\r\n\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<h2 class=\"example-h2\">Result</h2>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\r\n\t\t\t\t\t\t\t\t</mat-progress-bar>\r\n\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/progress-bar/progress-bar.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/progress-bar/progress-bar.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var determinate = {
    beforeCodeTitle: 'Determinate progress-bar',
    htmlCode: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Determinate progress-bar\n*/\n@Component({\n  selector: 'progress-bar-determinate-example',\n  templateUrl: 'progress-bar-determinate-example.html',\n  styleUrls: ['progress-bar-determinate-example.css'],\n})\nexport class ProgressBarDeterminateExample {}\n\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var indeterminate = {
    beforeCodeTitle: 'Indeterminate progress-bar',
    htmlCode: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Indeterminate progress-bar\n*/\n@Component({\n  selector: 'progress-bar-indeterminate-example',\n  templateUrl: 'progress-bar-indeterminate-example.html',\n  styleUrls: ['progress-bar-indeterminate-example.css'],\n})\nexport class ProgressBarIndeterminateExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var buffer = {
    beforeCodeTitle: 'Buffer progress-bar',
    htmlCode: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Buffer progress-bar\n*/\n@Component({\n  selector: 'progress-bar-buffer-example',\n  templateUrl: 'progress-bar-buffer-example.html',\n  styleUrls: ['progress-bar-buffer-example.css'],\n})\nexport class ProgressBarBufferExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var query = {
    beforeCodeTitle: 'Query progress-bar',
    htmlCode: "<mat-progress-bar mode=\"query\"></mat-progress-bar>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Query progress-bar\n*/\n@Component({\n  selector: 'progress-bar-query-example',\n  templateUrl: 'progress-bar-query-example.html',\n  styleUrls: ['progress-bar-query-example.css'],\n})\nexport class ProgressBarQueryExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var config = {
    beforeCodeTitle: 'Configurable progress-bar',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\t<section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode == 'buffer'\">\n      <label class=\"example-margin\">Buffer:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <section class=\"example-section\">\n     <mat-progress-bar\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\"\n        [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Configurable progress-bar\n*/\n@Component({\n  selector: 'progress-bar-configurable-example',\n  templateUrl: 'progress-bar-configurable-example.html',\n  styleUrls: ['progress-bar-configurable-example.css'],\n})\nexport class ProgressBarConfigurableExample {\n  color = 'primary';\n  mode = 'determinate';\n  value = 50;\n  bufferValue = 75;\n}",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 0 10px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.exampleDeterminate = determinate;
        this.exampleIndeterminate = indeterminate;
        this.exampleBuffer = buffer;
        this.exmapleQuery = query;
        this.exampleConfig = config;
    };
    ProgressBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/content/pages/components/material/buttons-and-indicators/progress-bar/progress-bar.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-h2 {\n\t\tmargin: 10px;\n\t}\n\t.example-section {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\theight: 60px;\n\t}\n\n\t.example-margin {\n\t\tmargin: 0 10px;\n\t}"]
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/progress-spinner/progress-spinner.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/progress-spinner/progress-spinner.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/progress-spinner/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-progress-spinner&gt;</code> and\r\n\t\t\t\t\t<code>&lt;mat-spinner&gt;</code> are a circular indicators of progress and activity.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-spinner></mat-spinner>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleWarn\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThe color of a progress-spinner can be changed by using the\r\n\t\t\t\t\t<mark>color</mark> property. By default, progress-spinners use the theme's primary color. This can be changed to\r\n\t\t\t\t\t<mark>'accent'</mark> or\r\n\t\t\t\t\t<mark>'warn'</mark>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-spinner [color]=\"'accent'\"></mat-spinner>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-spinner [color]=\"'warn'\"></mat-spinner>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleConfig\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Color:</label>\r\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"color\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\r\n\t\t\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\r\n\t\t\t\t\t\t\t\t\t\tAccent\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\r\n\t\t\t\t\t\t\t\t\t\tWarn\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Mode:</label>\r\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"mode\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n\t\t\t\t\t\t\t\t\t\tDeterminate\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n\t\t\t\t\t\t\t\t\t\tIndeterminate\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"mode == 'determinate'\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Progress:</label>\r\n\t\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\r\n\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<h2 class=\"example-h2\">Result</h2>\r\n\r\n\t\t\t\t\t\t\t<mat-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\r\n\t\t\t\t\t\t\t</mat-progress-spinner>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/buttons-and-indicators/progress-spinner/progress-spinner.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/buttons-and-indicators/progress-spinner/progress-spinner.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ProgressSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerComponent", function() { return ProgressSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basic = {
    beforeCodeTitle: 'Basic progressbar-spinner',
    htmlCode: "<mat-spinner></mat-spinner>",
    tsCode: "import {Component} from '@angular/core';\n\n\n/**\n* @title Basic progress-spinner\n*/\n@Component({\n  selector: 'progress-spinner-overview-example',\n  templateUrl: 'progress-spinner-overview-example.html',\n  styleUrls: ['progress-spinner-overview-example.css'],\n})\nexport class ProgressSpinnerOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var config = {
    beforeCodeTitle: 'Configurable progress spinner',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n\t    <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode == 'determinate'\">\n      <label class=\"example-margin\">Progress:</label>\n        <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <mat-progress-spinner\n     class=\"example-margin\"\n     [color]=\"color\"\n     [mode]=\"mode\"\n     [value]=\"value\">\n    </mat-progress-spinner>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Configurable progress spinner\n*/\n@Component({\n  selector: 'progress-spinner-configurable-example',\n  templateUrl: 'progress-spinner-configurable-example.html',\n  styleUrls: ['progress-spinner-configurable-example.css'],\n})\nexport class ProgressSpinnerConfigurableExample {\n  color = 'primary';\n  mode = 'determinate';\n  value = 50;\n}",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 0 10px;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var warn = {
    beforeCodeTitle: 'Colorized progressbar-spinner',
    htmlCode: "\n<mat-spinner [color]=\"'accent'\"></mat-spinner>\n<mat-spinner [color]=\"'warn'\"></mat-spinner>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Colorized progress-spinner\n*/\n@Component({\n  selector: 'progress-spinner-colorized-example',\n  templateUrl: 'progress-spinner-colorized-example.html',\n  styleUrls: ['progress-spinner-colorized-example.css'],\n})\nexport class ProgressSpinnerColorizedExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ProgressSpinnerComponent = /** @class */ (function () {
    function ProgressSpinnerComponent() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    ProgressSpinnerComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleWarn = warn;
        this.exampleConfig = config;
    };
    ProgressSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-progress-spinner',
            template: __webpack_require__(/*! ./progress-spinner.component.html */ "./src/app/content/pages/components/material/buttons-and-indicators/progress-spinner/progress-spinner.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-h2 {\n\t\tmargin: 10px;\n\t  }\n\t  .example-section {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\theight: 60px;\n\t  }\n\t  .example-margin {\n\t\tmargin: 0 10px;\n\t  }\n\t"]
        })
    ], ProgressSpinnerComponent);
    return ProgressSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/data-table/material-table/material-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/data-table/material-table/material-table.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/table/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n\r\n<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t<div class=\"m-section\">\r\n\t\t<p class=\"m-section__sub\">\r\n\t\t\tThe\r\n\t\t\t<mark>mat-table</mark> provides a Material Design styled data-table that can be used to display rows of data.\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\tThis table builds on the foundation of the CDK data-table and uses a similar interface for its data input and template, except\r\n\t\t\tthat its element and attribute selectors will be prefixed with\r\n\t\t\t<mark>mat-</mark> instead of\r\n\t\t\t<mark>cdk-</mark>. For more information on the interface and a detailed look at how the table is implemented, see the\r\n\t\t\t<a href=\"https://material.angular.io/cdk/table/overview\" target=\"_blank\">guide covering the CDK data-table</a>.\r\n\t\t</p>\r\n\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table1 [dataSource]=\"dataSource1\">\r\n\t\t\t\t\t<!--- Note that these columns can be defined in any order.\r\n\t\t\t\t\t\t\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\r\n\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns1\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n<m-material-preview [viewItem]=\"examplePagination\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table2 [dataSource]=\"dataSource2\">\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns2\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t\t<mat-paginator #matPaginator2 [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\">\r\n\t\t\t\t</mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n<m-material-preview [viewItem]=\"exampleSorting\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table3 [dataSource]=\"dataSource3\" #sort3=\"matSort\" matSort>\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns3\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns3;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n<m-material-preview [viewItem]=\"exampleFiltering\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<div class=\"example-header\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field\">\r\n\t\t\t\t\t\t<input matInput (keyup)=\"applyFilter4($event.target.value)\" placeholder=\"Filter\">\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<mat-table #table4 [dataSource]=\"dataSource4\">\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns4\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns4;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n<m-material-preview [viewItem]=\"exampleSelection\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table5 [dataSource]=\"dataSource5\">\r\n\t\t\t\t\t<!-- Checkbox Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef>\r\n\t\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle5() : null\" [checked]=\"selection.hasValue() && isAllSelected5()\" [indeterminate]=\"selection.hasValue() && !isAllSelected5()\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let row\">\r\n\t\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns5\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns5;\" (click)=\"selection.toggle(row)\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n<m-material-preview [viewItem]=\"exampleHTTP\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t<div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n\t\t\t\t<mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t\t<div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n\t\t\t\t\tGitHub's API rate limit has been reached. It will be reset in one minute.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<mat-table #sort6=\"matSort\" #table6 [dataSource]=\"dataSource6\" class=\"example-table\" matSort matSortActive=\"created\" matSortDisableClear\r\n\t\t\t matSortDirection=\"asc\">\r\n\t\t\t\t<!--- Note that these columns can be defined in any order.\r\n\t\t                                The actual rendered columns are set as a property on the row definition\" -->\r\n\t\t\t\t<!-- Number Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"number\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>#</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.number }}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Title Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"title\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Title</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.title }}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- State Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"state\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>State</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.state }}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Created Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"created\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header disableClear=\"true\">\r\n\t\t\t\t\t\tCreated\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.created_at | date }}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns6\"></mat-header-row>\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns6;\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<mat-paginator #matPaginator6 [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n<m-material-preview [viewItem]=\"exampleMain\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"example-header\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput (keyup)=\"applyFilter7($event.target.value)\" placeholder=\"Filter\">\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t<mat-table #sort7=\"matSort\" [dataSource]=\"dataSource7\" matSort>\r\n\t\t\t\t<!-- ID Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Progress Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"progress\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Color Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"color\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns7\"></mat-header-row>\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns7;\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<mat-paginator #matPaginator7 [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>"

/***/ }),

/***/ "./src/app/content/pages/components/material/data-table/material-table/material-table.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/data-table/material-table/material-table.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ExampleHttpDao, MaterialTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function() { return ExampleHttpDao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTableComponent", function() { return MaterialTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var basic = {
    beforeCodeTitle: 'Basic table',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!--- Note that these columns can be defined in any order.\n\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n\t</ng-container>\n\t<!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic table\n*/\n@Component({\n  selector: 'table-basic-example',\n  styleUrls: ['table-basic-example.css'],\n  templateUrl: 'table-basic-example.html',\n})\nexport class TableBasicExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = ELEMENT_DATA;\n}\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var pagination = {
    beforeCodeTitle: 'Table with pagination',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator #paginator\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 20]\"\n    [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n\t\t",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {MatPaginator, MatTableDataSource} from '@angular/material';\n\n/**\n* @title Table with pagination\n*/\n@Component({\n  selector: 'table-pagination-example',\n  styleUrls: ['table-pagination-example.css'],\n  templateUrl: 'table-pagination-example.html',\n})\nexport class TablePaginationExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);\n\n  @ViewChild(MatPaginator) paginator: MatPaginator;\n\n  /**\n  * Set the paginator after the view init since this component will\n  * be able to query its view for the initialized paginator.\n  */\n  ngAfterViewInit() {\n    this.dataSource.paginator = this.paginator;\n  }\n}\n\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var sorting = {
    beforeCodeTitle: 'Table with sorting',
    beforeCodeDescription: "",
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {MatTableDataSource, MatSort} from '@angular/material';\n\n/**\n* @title Table with sorting\n*/\n@Component({\n  selector: 'table-sorting-example',\n  styleUrls: ['table-sorting-example.css'],\n  templateUrl: 'table-sorting-example.html',\n})\nexport class TableSortingExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource(ELEMENT_DATA);\n\n  @ViewChild(MatSort) sort: MatSort;\n\n\n  /**\n  * Set the sort after the view init since this component will\n  * be able to query its view for the initialized sort.\n  */\n  ngAfterViewInit() {\n    this.dataSource.sort = this.sort;\n  }\n}\n\n\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n.mat-header-cell.mat-sort-header-sorted {\n  color: black;\n}",
    viewCode: "",
    isCodeVisible: false
};
var filtering = {
    beforeCodeTitle: 'Table with filtering',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatTableDataSource} from '@angular/material';\n\n\n/**\n* @title Table with filtering\n*/\n@Component({\n  selector: 'table-filtering-example',\n  styleUrls: ['table-filtering-example.css'],\n  templateUrl: 'table-filtering-example.html',\n})\nexport class TableFilteringExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource(ELEMENT_DATA);\n\n\n  applyFilter(filterValue: string) {\n    filterValue = filterValue.trim(); // Remove whitespace\n    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches\n    this.dataSource.filter = filterValue;\n  }\n}\n\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n/* Structure */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var selection = {
    beforeCodeTitle: 'Table with selection',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n          [checked]=\"selection.hasValue() && isAllSelected()\"\n          [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n          (change)=\"$event ? selection.toggle(row) : null\"\n          [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      (click)=\"selection.toggle(row)\">\n    </mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatTableDataSource} from '@angular/material';\nimport {SelectionModel} from '@angular/cdk/collections';\n\n/**\n* @title Table with selection\n*/\n@Component({\n  selector: 'table-selection-example',\n  styleUrls: ['table-selection-example.css'],\n  templateUrl: 'table-selection-example.html',\n})\nexport class TableSelectionExample {\n  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);\n  selection = new SelectionModel<Element>(true, []);\n\n  /** Whether the number of selected elements matches the total number of rows. */\n  isAllSelected() {\n    const numSelected = this.selection.selected.length;\n    const numRows = this.dataSource.data.length;\n    return numSelected === numRows;\n  }\n\n  /** Selects all rows if they are not all selected; otherwise clear selection. */\n  masterToggle() {\n    this.isAllSelected() ?\n    this.selection.clear() :\n    this.dataSource.data.forEach(row => this.selection.select(row));\n  }\n}\n\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    viewCode: "",
    isCodeVisible: false
};
var main = {
    beforeCodeTitle: 'Data table with sorting, pagination, and filtering.',
    htmlCode: "\n<div class=\"example-header\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" matSort>\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';\n\n/**\n* @title Data table with sorting, pagination, and filtering.\n*/\n@Component({\n  selector: 'table-overview-example',\n  styleUrls: ['table-overview-example.css'],\n  templateUrl: 'table-overview-example.html',\n})\nexport class TableOverviewExample {\n  displayedColumns = ['id', 'name', 'progress', 'color'];\n  dataSource: MatTableDataSource<UserData>;\n\n  @ViewChild(MatPaginator) paginator: MatPaginator;\n  @ViewChild(MatSort) sort: MatSort;\n\n  constructor() {\n    // Create 100 users\n    const users: UserData[] = [];\n      for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }\n\n      // Assign the data to the data source for the table to render\n      this.dataSource = new MatTableDataSource(users);\n  }\n\n  /**\n  * Set the paginator and sort after the view init since this component will\n  * be able to query its view for the initialized paginator and sort.\n  */\n  ngAfterViewInit() {\n    this.dataSource.paginator = this.paginator;\n    this.dataSource.sort = this.sort;\n  }\n\n  applyFilter(filterValue: string) {\n    filterValue = filterValue.trim(); // Remove whitespace\n    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches\n    this.dataSource.filter = filterValue;\n  }\n}\n\n\n/** Builds and returns a new User. */\nfunction createNewUser(id: number): UserData {\n  const name =\n    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +\n    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';\n\n\n  return {\n    id: id.toString(),\n    name: name,\n    progress: Math.round(Math.random() * 100).toString(),\n    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]\n   };\n}\n\n\n/** Constants used to fill up our data base. */\nconst COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',\n  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];\nconst NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',\n  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',\n  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];\n\nexport interface UserData {\n  id: string;\n  name: string;\n  progress: string;\n  color: string;\n}",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var hTTP = {
    beforeCodeTitle: 'Table retrieving data through HTTP',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n    *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n\t  GitHub's API rate limit has been reached. It will be reset in one minute.\n    </div>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\" class=\"example-table\"\n    matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\">\n    <!--- Note that these columns can be defined in any order.\n    The actual rendered columns are set as a property on the row definition\" -->\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"number\">\n      <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{ row.number }}</mat-cell>\n    </ng-container>\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{ row.title }}</mat-cell>\n    </ng-container>\n    <!-- State Column -->\n    <ng-container matColumnDef=\"state\">\n      <mat-header-cell *matHeaderCellDef>State</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{ row.state }}</mat-cell>\n    </ng-container>\n    <!-- Created Column -->\n    <ng-container matColumnDef=\"created\">\n      <mat-header-cell *matHeaderCellDef\n        mat-sort-header\n        disableClear=\"true\">\n        Created\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{ row.created_at | date }}</mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\">\n  </mat-paginator>\n </div>",
    tsCode: "\nimport {Component, OnInit, ViewChild} from '@angular/core';\nimport {HttpClient} from '@angular/common/http';\nimport {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';\nimport {Observable} from 'rxjs/Observable';\nimport {merge} from 'rxjs/observable/merge';\nimport {of as observableOf} from 'rxjs/observable/of';\nimport {catchError} from 'rxjs/operators/catchError';\nimport {map} from 'rxjs/operators/map';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {switchMap} from 'rxjs/operators/switchMap';\n\n/**\n* @title Table retrieving data through HTTP\n*/\n@Component({\n  selector: 'table-http-example',\n  styleUrls: ['table-http-example.css'],\n  templateUrl: 'table-http-example.html',\n})\nexport class TableHttpExample implements OnInit {\n  displayedColumns = ['created', 'state', 'number', 'title'];\n  exampleDatabase: ExampleHttpDao | null;\n  dataSource = new MatTableDataSource();\n\n  resultsLength = 0;\n  isLoadingResults = true;\n  isRateLimitReached = false;\n\n  @ViewChild(MatPaginator) paginator: MatPaginator;\n  @ViewChild(MatSort) sort: MatSort;\n\n  constructor(private http: HttpClient) {}\n\n  ngOnInit() {\n    this.exampleDatabase = new ExampleHttpDao(this.http);\n\n\n    // If the user changes the sort order, reset back to the first page.\n\tthis.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);\n\n    merge(this.sort.sortChange, this.paginator.page)\n      .pipe(\n        startWith({}),\n\t    switchMap(() => {\n          this.isLoadingResults = true;\n\t\t\t  return this.exampleDatabase!.getRepoIssues(\n          this.sort.active, this.sort.direction, this.paginator.pageIndex);\n        }),\n        map(data => {\n        // Flip flag to show that loading has finished.\n          this.isLoadingResults = false;\n          this.isRateLimitReached = false;\n          this.resultsLength = data.total_count;\n\n\n          return data.items;\n        }),\n        catchError(() => {\n          this.isLoadingResults = false;\n          // Catch if the GitHub API has reached its rate limit. Return empty data.\n          this.isRateLimitReached = true;\n            return observableOf([]);\n      })\n    ).subscribe(data => this.dataSource.data = data);\n  }\n}\n\n\nexport interface GithubApi {\n  items: GithubIssue[];\n  total_count: number;\n}\n\nexport interface GithubIssue {\n  created_at: string;\n  number: string;\n  state: string;\n  title: string;\n}\n\n/** An example database that the data source uses to retrieve data for the table. */\nexport class ExampleHttpDao {\n  constructor(private http: HttpClient) {}\n  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {\n    const href = 'https://api.github.com/search/issues';\n    const requestUrl =\n    `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;\n\n    return this.http.get<GithubApi>(requestUrl);\n  }\n}",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  position: relative;\n}\n.example-header {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n.example-table {\n  overflow: auto;\n  min-height: 300px;\n}\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n.mat-column-created {\n  max-width: 124px;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var ELEMENT_DATA2 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (sort, order, page) {
        var href = 'https://api.github.com/search/issues';
        var requestUrl = href + "?q=repo:angular/material2&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.http.get(requestUrl);
    };
    return ExampleHttpDao;
}());

/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
var MaterialTableComponent = /** @class */ (function () {
    function MaterialTableComponent(http) {
        this.http = http;
        this.displayedColumns1 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns2 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns3 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns4 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns5 = ['select', 'position', 'name', 'weight', 'symbol'];
        this.displayedColumns6 = ['created', 'state', 'number', 'title'];
        this.displayedColumns7 = ['id', 'name', 'progress', 'color'];
        this.dataSource1 = ELEMENT_DATA;
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA2);
        this.dataSource3 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource4 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource5 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource6 = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource7 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](users);
    }
    MaterialTableComponent.prototype.ngAfterViewInit = function () {
    };
    MaterialTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleBasic = basic;
        this.examplePagination = pagination;
        this.exampleSorting = sorting;
        this.exampleFiltering = filtering;
        this.exampleSelection = selection;
        this.exampleHTTP = hTTP;
        this.exampleMain = main;
        this.dataSource2.paginator = this.paginator2;
        this.dataSource3.sort = this.sort3;
        // Example 6
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort6.sortChange.subscribe(function () { return _this.paginator6.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.sort6.sortChange, this.paginator6.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            _this.isLoadingResults = true;
            // tslint:disable-next-line:no-non-null-assertion
            return _this.exampleDatabase.getRepoIssues(_this.sort6.active, _this.sort6.direction, _this.paginator6.pageIndex);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data.total_count;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        })).subscribe(function (data) { return _this.dataSource6 = data; });
        // Example 7
        this.dataSource7.paginator = this.paginator7;
        this.dataSource7.sort = this.sort7;
    };
    MaterialTableComponent.prototype.applyFilter4 = function (filterValue) {
        this.dataSource4.filter = filterValue.trim().toLowerCase();
    };
    MaterialTableComponent.prototype.applyFilter7 = function (filterValue) {
        this.dataSource7.filter = filterValue.trim().toLowerCase();
        if (this.dataSource7.paginator) {
            this.dataSource7.paginator.firstPage();
        }
    };
    /** Whether the number of selected elements matches the total number of rows. */
    MaterialTableComponent.prototype.isAllSelected5 = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource5.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    MaterialTableComponent.prototype.masterToggle5 = function () {
        var _this = this;
        this.isAllSelected5() ?
            this.selection.clear() :
            this.dataSource5.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('matPaginator2'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MaterialTableComponent.prototype, "paginator2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('matPaginator6'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MaterialTableComponent.prototype, "paginator6", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('matPaginator7'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MaterialTableComponent.prototype, "paginator7", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sort3'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MaterialTableComponent.prototype, "sort3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sort6'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MaterialTableComponent.prototype, "sort6", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sort7'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MaterialTableComponent.prototype, "sort7", void 0);
    MaterialTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-material-table',
            template: __webpack_require__(/*! ./material-table.component.html */ "./src/app/content/pages/components/material/data-table/material-table/material-table.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            styles: ["\n\t.example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmax-height: 500px;\n\t\tmin-width: 300px;\n\t\tposition: relative;\n\t  }\n\n\t  .mat-table {\n\t\toverflow: auto;\n\t\tmax-height: 500px;\n\t  }\n\n\t  .mat-header-cell.mat-sort-header-sorted {\n\t\tcolor: black;\n\t  }\n\n\t  .example-header {\n\t\tmin-height: 64px;\n\t\tpadding: 8px 24px 0;\n\t  }\n\n\t  .mat-form-field {\n\t\tfont-size: 14px;\n\t\twidth: 100%;\n\t  }\n\n\t  .mat-table {\n\t\toverflow: auto;\n\t\tmax-height: 500px;\n\t  }\n\t  .mat-column-select {\n\t\toverflow: initial;\n\t  }\n\t  .example-header {\n\t\tmin-height: 64px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding-left: 24px;\n\t\tfont-size: 20px;\n\t  }\n\n\t  .example-table {\n\t\toverflow: auto;\n\t\tmin-height: 300px;\n\t  }\n\n.example-loading-shade {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 56px;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.15);\n\tz-index: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n  }\n\n  .example-rate-limit-reached {\n\tcolor: #980000;\n\tmax-width: 360px;\n\ttext-align: center;\n  }\n\n  /* Column Widths */\n  .mat-column-number,\n  .mat-column-state {\n\tmax-width: 64px;\n  }\n\n  .mat-column-created {\n\tmax-width: 124px;\n  }\n\t"]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MaterialTableComponent);
    return MaterialTableComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/data-table/paginator/paginator.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/data-table/paginator/paginator.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/paginator/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n\r\n<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t<div class=\"m-section\">\r\n\t\t<p class=\"m-section__sub\">\r\n\t\t\t<code>&lt;mat-paginator&gt;</code> provides navigation for paged information, typically used with a table.\r\n\t\t</p>\r\n\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t<div class=\"m-section__content\">\r\n\r\n\t\t\t<mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n\t\t\t</mat-paginator>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n<m-material-preview [viewItem]=\"exampleConfig\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"m-section__content\">\r\n\r\n\t\t\t<mat-form-field>\r\n\t\t\t\tList length:\r\n\t\t\t\t<input matInput [(ngModel)]=\"length\">\r\n\t\t\t</mat-form-field>\r\n\r\n\t\t\t<mat-form-field>\r\n\t\t\t\tPage size:\r\n\t\t\t\t<input matInput [(ngModel)]=\"pageSize\">\r\n\t\t\t</mat-form-field>\r\n\t\t\t<mat-form-field>\r\n\t\t\t\tPage size options:\r\n\t\t\t\t<input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\">\r\n\t\t\t</mat-form-field>\r\n\r\n\t\t\t<mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event\">\r\n\t\t\t</mat-paginator>\r\n\r\n\t\t\t<div *ngIf=\"pageEvent\">\r\n\t\t\t\t<h5>Page Change Event Properties</h5>\r\n\t\t\t\t<div>List length: {{pageEvent.length}}</div>\r\n\t\t\t\t<div>Page size: {{pageEvent.pageSize}}</div>\r\n\t\t\t\t<div>Page index: {{pageEvent.pageIndex}}</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>"

/***/ }),

/***/ "./src/app/content/pages/components/material/data-table/paginator/paginator.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/data-table/paginator/paginator.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basic = {
    beforeCodeTitle: 'Paginator',
    htmlCode: "\n<mat-paginator [length]=\"100\"\n  [pageSize]=\"10\"\n  [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Paginator\n*/\n@Component({\n  selector: 'paginator-overview-example',\n  templateUrl: 'paginator-overview-example.html',\n  styleUrls: ['paginator-overview-example.css'],\n})\nexport class PaginatorOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var config = {
    beforeCodeTitle: 'Configurable paginatorn',
    htmlCode: "\n<mat-form-field>\n  List length:\n  <input matInput [(ngModel)]=\"length\">\n</mat-form-field>\n  <mat-form-field>\n    Page size:\n    <input matInput [(ngModel)]=\"pageSize\">\n  </mat-form-field>\n  <mat-form-field>\n    Page size options:\n    <input matInput\n      [ngModel]=\"pageSizeOptions\"\n      (ngModelChange)=\"setPageSizeOptions($event)\">\n  </mat-form-field>\n  <mat-paginator [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    (page)=\"pageEvent = $event\">\n  </mat-paginator>\n  <div *ngIf=\"pageEvent\">\n    <h5>Page Change Event Properties</h5>\n    <div>List length: {{pageEvent.length}}</div>\n    <div>Page size: {{pageEvent.pageSize}}</div>\n    <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {PageEvent} from '@angular/material';\n\n/**\n* @title Configurable paginator\n*/\n@Component({\n  selector: 'paginator-configurable-example',\n  templateUrl: 'paginator-configurable-example.html',\n  styleUrls: ['paginator-configurable-example.css'],\n})\nexport class PaginatorConfigurableExample {\n  // MatPaginator Inputs\n  length = 100;\n  pageSize = 10;\n  pageSizeOptions = [5, 10, 25, 100];\n\n  // MatPaginator Output\n  pageEvent: PageEvent;\n  setPageSizeOptions(setPageSizeOptionsInput: string) {\n    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    PaginatorComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleConfig = config;
    };
    PaginatorComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    PaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/content/pages/components/material/data-table/paginator/paginator.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/data-table/sort-header/sort-header.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/data-table/sort-header/sort-header.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/sort/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n\r\n<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t<div class=\"m-section\">\r\n\t\t<p class=\"m-section__sub\">\r\n\t\t\tThe\r\n\t\t\t<mark>matSort</mark> and\r\n\t\t\t<mark>mat-sort-header</mark> are used, respectively, to add sorting state and display to tabular data.\r\n\t\t</p>\r\n\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<table  #sort1=\"matSort\" (matSortChange)=\"sortData($event)\" matSort>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th mat-sort-header=\"name\">Dessert (100g)</th>\r\n\t\t\t\t\t<th mat-sort-header=\"calories\">Calories</th>\r\n\t\t\t\t\t<th mat-sort-header=\"fat\">Fat (g)</th>\r\n\t\t\t\t\t<th mat-sort-header=\"carbs\">Carbs (g)</th>\r\n\t\t\t\t\t<th mat-sort-header=\"protein\">Protein (g)</th>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t\t<tr *ngFor=\"let dessert of sortedData\">\r\n\t\t\t\t\t<td>{{dessert.name}}</td>\r\n\t\t\t\t\t<td>{{dessert.calories}}</td>\r\n\t\t\t\t\t<td>{{dessert.fat}}</td>\r\n\t\t\t\t\t<td>{{dessert.carbs}}</td>\r\n\t\t\t\t\t<td>{{dessert.protein}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n<m-material-preview [viewItem]=\"exampleConfig\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"m-section__content\">\r\n\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table [dataSource]=\"dataSource\" #sort2=\"matSort\" matSort>\r\n\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>"

/***/ }),

/***/ "./src/app/content/pages/components/material/data-table/sort-header/sort-header.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/data-table/sort-header/sort-header.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SortHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortHeaderComponent", function() { return SortHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var basic = {
    beforeCodeTitle: 'Sorting overview',
    htmlCode: "\n<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Sort} from '@angular/material';\n\n/**\n* @title Sorting overview\n*/\n@Component({\n  selector: 'sort-overview-example',\n  templateUrl: 'sort-overview-example.html',\n  styleUrls: ['sort-overview-example.css'],\n})\nexport class SortOverviewExample {\n  desserts = [\n    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},\n    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},\n    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},\n    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},\n    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},\n  ];\n\n  sortedData;\n\n  constructor() {\n    this.sortedData = this.desserts.slice();\n  }\n\n  sortData(sort: Sort) {\n    const data = this.desserts.slice();\n    if (!sort.active || sort.direction == '') {\n      this.sortedData = data;\n      return;\n    }\n\n    this.sortedData = data.sort((a, b) => {\n      let isAsc = sort.direction == 'asc';\n      switch (sort.active) {\n        case 'name': return compare(a.name, b.name, isAsc);\n        case 'calories': return compare(+a.calories, +b.calories, isAsc);\n        case 'fat': return compare(+a.fat, +b.fat, isAsc);\n        case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);\n        case 'protein': return compare(+a.protein, +b.protein, isAsc);\n        default: return 0;\n      }\n    });\n  }\n}\n\n\nfunction compare(a, b, isAsc) {\n  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);\n}",
    cssCode: "\n.mat-sort-header-container {\n  align-items: center;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var config = {
    beforeCodeTitle: 'Table with sorting',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n  </ng-container>\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n  </ng-container>\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n  </ng-container>\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {MatTableDataSource, MatSort} from '@angular/material';\n\n/**\n* @title Table with sorting\n*/\n@Component({\n  selector: 'table-sorting-example',\n  styleUrls: ['table-sorting-example.css'],\n  templateUrl: 'table-sorting-example.html',\n})\nexport class TableSortingExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource(ELEMENT_DATA);\n\n  @ViewChild(MatSort) sort: MatSort;\n\n  /**\n  * Set the sort after the view init since this component will\n  * be able to query its view for the initialized sort.\n  */\n  ngAfterViewInit() {\n    this.dataSource.sort = this.sort;\n  }\n}\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n.mat-header-cell.mat-sort-header-sorted {\n  color: black;\n}",
    viewCode: "",
    isCodeVisible: false
};
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
var SortHeaderComponent = /** @class */ (function () {
    function SortHeaderComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.desserts = [
            { name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4' },
        ];
        this.sortedData = this.desserts.slice();
    }
    SortHeaderComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleConfig = config;
    };
    SortHeaderComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort2;
    };
    SortHeaderComponent.prototype.sortData = function (_sort) {
        var data = this.desserts.slice();
        if (!_sort.active || _sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = _sort.direction === 'asc';
            switch (_sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(+a.calories, +b.calories, isAsc);
                case 'fat': return compare(+a.fat, +b.fat, isAsc);
                case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
                case 'protein': return compare(+a.protein, +b.protein, isAsc);
                default: return 0;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sort1'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SortHeaderComponent.prototype, "sort1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sort2'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SortHeaderComponent.prototype, "sort2", void 0);
    SortHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-sort-header',
            template: __webpack_require__(/*! ./sort-header.component.html */ "./src/app/content/pages/components/material/data-table/sort-header/sort-header.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.mat-sort-header-container {\n\t\talign-items: center;\n\t  }\n\t  .example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-width: 300px;\n\t  }\n\t  .mat-table {\n\t\toverflow: auto;\n\t\tmax-height: 500px;\n\t  }\n\t  .mat-header-cell.mat-sort-header-sorted {\n\t\tcolor: black;\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], SortHeaderComponent);
    return SortHeaderComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/autocomplete/autocomplete.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/autocomplete/autocomplete.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/autocomplete/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleSimpleAutocomplete\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">The autocomplete is a normal text input enhanced by a panel of suggested options.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto1\">\r\n\t\t\t\t\t\t\t<mat-autocomplete #auto1=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n\t\t\t\t\t\t\t\t\t{{ option }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleAddingACustomFilter\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tAt this point, the autocomplete panel should be toggleable on focus and options should be selectable. But if we want our options to filter when we type, we need to add a custom filter.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl2\" [matAutocomplete]=\"auto2\">\r\n\t\t\t\t\t\t\t<mat-autocomplete #auto2=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n\t\t\t\t\t\t\t\t\t{{ option }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSettingSeparateControlAndDisplayValues\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tIf you want the option's control value (what is saved in the form) to be different than the option's display value (what is displayed in the text field), you'll need to set the\r\n\t\t\t\t\t<code>displayWith</code> property on your autocomplete element. A common use case for this might be if you want to save your data as an object, but display just one of the option's string properties. To make this work, create a function on your component class that maps the control value to the desired display value. Then bind it to the autocomplete's\r\n\t\t\t\t\t<code>displayWith</code> property.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl33\" [matAutocomplete]=\"auto33\">\r\n\t\t\t\t\t\t\t<mat-autocomplete #auto33=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptions33 | async\" [value]=\"option\">\r\n\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleAutomaticallyHighlightingTheFirstOption\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tIf your use case requires for the first autocomplete option to be highlighted when the user opens the panel, you can do so by setting the\r\n\t\t\t\t\t<code>autoActiveFirstOption</code> input on the\r\n\t\t\t\t\t<code>mat-autocomplete</code> component. This behavior can be configured globally using the\r\n\t\t\t\t\t<code>MAT_AUTOCOMPLETE_DEFAULT_OPTIONS</code> injection token.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl44\" [matAutocomplete]=\"auto44\">\r\n\t\t\t\t\t\t\t<mat-autocomplete autoActiveFirstOption #auto44=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptions44 | async\" [value]=\"option\">\r\n\t\t\t\t\t\t\t\t\t{{ option }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleAutocompleteOverview\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tIf your use case requires for the first autocomplete option to be highlighted when the user opens the panel, you can do so by setting the\r\n\t\t\t\t\t<code>autoActiveFirstOption</code> input on the\r\n\t\t\t\t\t<code>mat-autocomplete</code> component. This behavior can be configured globally using the\r\n\t\t\t\t\t<code>MAT_AUTOCOMPLETE_DEFAULT_OPTIONS</code> injection token.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto55\" [formControl]=\"stateCtrl\">\r\n\t\t\t\t\t\t\t<mat-autocomplete #auto55=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\r\n\t\t\t\t\t\t\t\t\t<img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\r\n\t\t\t\t\t\t\t\t\t<span>{{ state.name }}</span> |\r\n\t\t\t\t\t\t\t\t\t<small>Population: {{state.population}}</small>\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t<mat-slide-toggle [checked]=\"stateCtrl.disabled\" (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\r\n\t\t\t\t\t\t\tDisable Input?\r\n\t\t\t\t\t\t</mat-slide-toggle>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleOptionGroupsAutocomplete\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>mat-option</code>can be collected into groups using the mat-optgroup element:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form [formGroup]=\"stateForm\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<input type=\"text\" \r\n\t\t\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\t\t\tplaceholder=\"States Group\" \r\n\t\t\t\t\t\t\t\tformControlName=\"stateGroup\" \r\n\t\t\t\t\t\t\t\trequired \r\n\t\t\t\t\t\t\t\t[matAutocomplete]=\"autoGroup\" />\r\n\t\t\t\t\t\t\t<mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n\t\t\t\t\t\t\t\t\t\t{{ name }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-optgroup>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/autocomplete/autocomplete.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/autocomplete/autocomplete.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: User, State, AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var simpleAutocomplete = {
    beforeCodeTitle: 'Simple autocomplete',
    htmlCode: "\n<form class=\"example-full-width\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\"\n      matInput [formControl]=\"myControl\"\n      [matAutocomplete]=\"auto\">\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n          {{ option }}\n        </mat-option>\n       </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/**\n* @title Simple autocomplete\n*/\n@Component({\n    selector: 'autocomplete-simple-example',\n    templateUrl: 'autocomplete-simple-example.html',\n    styleUrls: ['autocomplete-simple-example.css']\n})\nexport class AutocompleteSimpleExample {\n    myControl: FormControl = new FormControl();\n    options = [\n        'One',\n        'Two',\n        'Three'\n    ];\n}",
    cssCode: "\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n.example-full-width {\n    width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var addingACustomFilter = {
    beforeCodeTitle: 'Adding a custom filter',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n          {{ option }}\n        </mat-option>\n      </mat-autocomplete>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {Observable} from 'rxjs/Observable';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {map} from 'rxjs/operators/map';\n\n/**\n* @title Filter autocomplete\n*/\n@Component({\n  selector: 'autocomplete-filter-example',\n  templateUrl: 'autocomplete-filter-example.html',\n  styleUrls: ['autocomplete-filter-example.css']\n})\nexport class AutocompleteFilterExample {\n\n  myControl: FormControl = new FormControl();\n\n  options = [\n    'One',\n    'Two',\n\t'Three'\n  ];\n\n  filteredOptions: Observable<string[]>;\n\n  ngOnInit() {\n    this.filteredOptions = this.myControl.valueChanges\n      .pipe(\n        startWith(''),\n         map(val => this.filter(val))\n      );\n  }\n\n  filter(val: string): string[] {\n    return this.options.filter(option =>\n\t\toption.toLowerCase().includes(val.toLowerCase()));\n  }\n}",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var settingSeparateControlAndDisplayValues = {
    beforeCodeTitle: 'Setting separate control and display valuess',
    beforeCodeDescription: "",
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{ option.name }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {Observable} from 'rxjs/Observable';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {map} from 'rxjs/operators/map';\n\nexport class User {\n  constructor(public name: string) { }\n}\n/**\n* @title Display value autocomplete\n*/\n@Component({\n  selector: 'autocomplete-display-example',\n  templateUrl: 'autocomplete-display-example.html',\n  styleUrls: ['autocomplete-display-example.css']\n})\nexport class AutocompleteDisplayExample {\n\n  myControl = new FormControl();\n\n  options = [\n    new User('Mary'),\n    new User('Shelley'),\n    new User('Igor')\n  ];\n\n  filteredOptions: Observable<User[]>;\n\n  ngOnInit() {\n    this.filteredOptions = this.myControl.valueChanges\n      .pipe(\n        startWith<string | User>(''),\n        map(value => typeof value === 'string' ? value : value.name),\n        map(name => name ? this.filter(name) : this.options.slice())\n      );\n  }\n\n  filter(name: string): User[] {\n    return this.options.filter(option =>\n      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);\n  }\n\n  displayFn(user?: User): string | undefined {\n    return user ? user.name : undefined;\n  }\n\n}",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var automaticallyHighlightingTheFirstOption = {
    beforeCodeTitle: 'Automatically highlighting the first option',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{ option }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {Observable} from 'rxjs/Observable';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {map} from 'rxjs/operators/map';\n/**\n* @title Highlight the first autocomplete option\n*/\n@Component({\n  selector: 'autocomplete-auto-active-first-option-example',\n  templateUrl: 'autocomplete-auto-active-first-option-example.html',\n  styleUrls: ['autocomplete-auto-active-first-option-example.css']\n})\nexport class AutocompleteAutoActiveFirstOptionExample {\n  myControl: FormControl = new FormControl();\n  options = ['One', 'Two', 'Three'];\n  filteredOptions: Observable<string[]>;\n\n  ngOnInit() {\n    this.filteredOptions = this.myControl.valueChanges.pipe(\n      startWith(''),\n      map(val => this.filter(val))\n    );\n\n  filter(val: string): string[] {\n    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);\n  }\n\n}",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var autocompleteOverview = {
    beforeCodeTitle: 'Autocomplete overview',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\n        <span>{{ state.name }}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n  <br />\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\nimport {Observable} from 'rxjs/Observable';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {map} from 'rxjs/operators/map';\n\nexport class State {\n  constructor(public name: string, public population: string, public flag: string) { }\n}\n\n/**\n * @title Autocomplete overview\n*/\n@Component({\n  selector: 'autocomplete-overview-example',\n  templateUrl: 'autocomplete-overview-example.html',\n  styleUrls: ['autocomplete-overview-example.css']\n})\nexport class AutocompleteOverviewExample {\n  stateCtrl: FormControl;\n  filteredStates: Observable<any[]>;\n  states: State[] = [\n  {\n    name: 'Arkansas',\n    population: '2.978M',\n    // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg\n    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'\n  },\n  {\n\tname: 'California',\n    population: '39.14M',\n    // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg\n    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'\n  },\n  {\n    name: 'Florida',\n\tpopulation: '20.27M',\n\t// https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg\n\tflag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'\n  },\n  {\n    name: 'Texas',\n    population: '27.47M',\n    // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg\n    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'\n  }\n];\n  constructor() {\n    this.stateCtrl = new FormControl();\n     this.filteredStates = this.stateCtrl.valueChanges\n      .pipe(\n        startWith(''),\n        map(state => state ? this.filterStates(state) : this.states.slice())\n      );\n}\n  filterStates(name: string) {\n    return this.states.filter(state =>\n      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);\n  }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var optionGroupsAutocomplete = {
    beforeCodeTitle: 'Option groups autocomplete',
    htmlCode: "\n<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\"/>\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{ name }}\n          </mat-option>\n        </mat-optgroup>\n      </mat-autocomplete>\n  </mat-form-field>\n</form>  ",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {FormGroup, FormBuilder} from '@angular/forms';\nimport {Observable} from 'rxjs';\nimport {startWith, map} from 'rxjs/operators';\n\nexport interface StateGroup {\n  letter: string;\n  names: string[];\n}\n\n/**\n* @title Option groups autocomplete\n*/\n@Component({\n  templateUrl: './autocomplete-optgroup-example.html',\n  styleUrls: ['./autocomplete-optgroup-example.css'],\n})\n\nexport class AutocompleteOptgroupExample implements OnInit {\n  stateForm: FormGroup = this.fb.group({\n  stateGroup: '',\n});\n\nstateGroups: StateGroup[] = [{\n  letter: 'A',\n  names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']\n}, {\n  letter: 'C',\n  names: ['California', 'Colorado', 'Connecticut']\n}, {\n  letter: 'D',\n  names: ['Delaware']\n}, {\n  letter: 'F',\n  names: ['Florida']\n}, {\n  letter: 'G',\n  names: ['Georgia']\n}, {\n  letter: 'H',\n  names: ['Hawaii']\n}, {\n  letter: 'I',\n  names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']\n}, {\n  letter: 'K',\n  names: ['Kansas', 'Kentucky']\n}, {\n  letter: 'L',\n  names: ['Louisiana']\n}, {\n  letter: 'M',\n  names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',\n  'Minnesota', 'Mississippi', 'Missouri', 'Montana']\n}, {\n  letter: 'N',\n  names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',\n  'New Mexico', 'New York', 'North Carolina', 'North Dakota']\n}, {\n  letter: 'O',\n  names: ['Ohio', 'Oklahoma', 'Oregon']\n}, {\n  letter: 'P',\n  names: ['Pennsylvania']\n}, {\n  letter: 'R',\n  names: ['Rhode Island']\n}, {\n  letter: 'S',\n  names: ['South Carolina', 'South Dakota']\n}, {\n  letter: 'T',\n  names: ['Tennessee', 'Texas']\n}, {\n  letter: 'U',\n  names: ['Utah']\n}, {\n  letter: 'V',\n  names: ['Vermont', 'Virginia']\n}, {\n  letter: 'W',\n  names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']\n}];\n\n  stateGroupOptions: Observable<StateGroup[]>;\n\n  constructor(private fb: FormBuilder) { }\n\n  ngOnInit() {\n    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges\n      .pipe(\n        startWith(''),\n          map(val => this.filterGroup(val))\n       );\n  }\n\n  filterGroup(val: string): StateGroup[] {\n    if (val) {\n      return this.stateGroups\n      .map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))\n      .filter(group => group.names.length > 0);\n    }\n\n     return this.stateGroups;\n  }\n\n  private _filter(opt: string[], val: string) {\n    const filterValue = val.toLowerCase();\n      return opt.filter(item => item.toLowerCase().startsWith(filterValue));\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());

var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());

var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
        this.myControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.myControl33 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options33 = [
            new User('Mary'),
            new User('Shelley'),
            new User('Igor')
        ];
        this.myControl44 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options44 = ['One', 'Two', 'Three'];
        this.myControl3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
    }
    AutocompleteComponent.prototype.filterStates = function (name) {
        return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleSimpleAutocomplete = simpleAutocomplete;
        this.exampleAddingACustomFilter = addingACustomFilter;
        this.exampleSettingSeparateControlAndDisplayValues = settingSeparateControlAndDisplayValues;
        this.exampleAutomaticallyHighlightingTheFirstOption = automaticallyHighlightingTheFirstOption;
        this.exampleAutocompleteOverview = autocompleteOverview;
        this.exampleOptionGroupsAutocomplete = optionGroupsAutocomplete;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.filter(val); }));
        this.filteredOptions33 = this.myControl33.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return name ? _this.filter33(name) : _this.options33.slice(); }));
        this.filteredOptions44 = this.myControl44.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.filter44(val); }));
        // tslint:disable-next-line:no-non-null-assertion
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.filterGroup(val); }));
    };
    AutocompleteComponent.prototype.filter33 = function (name) {
        return this.options33.filter(function (option) {
            return option.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    AutocompleteComponent.prototype.filter44 = function (val) {
        return this.options44.filter(function (option) { return option.toLowerCase().indexOf(val.toLowerCase()) === 0; });
    };
    AutocompleteComponent.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    AutocompleteComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AutocompleteComponent.prototype.filterGroup = function (val) {
        var _this = this;
        if (val) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _this._filter(group.names, val) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    AutocompleteComponent.prototype._filter = function (opt, val) {
        var filterValue = val.toLowerCase();
        return opt.filter(function (item) { return item.toLowerCase().startsWith(filterValue); });
    };
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/content/pages/components/material/formcontrols/autocomplete/autocomplete.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-form {\n\t\tmin-width: 150px;\n\t\tmax-width: 500px;\n\t\twidth: 100%;\n\t}\n\t.example-full-width {\n\t\twidth: 100%;\n\t}\n\t"]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/checkbox/checkbox.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/checkbox/checkbox.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/checkbox/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicCheckboxes\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-checkbox&gt;</code> provides the same functionality as a native\r\n\t\t\t\t\t<code>&lt;input type=\"checkbox\"&gt;</code> enhanced with Material Design styling and animations.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-checkbox>Check me!</mat-checkbox>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleLabelPositions\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>@Input() labelPosition: 'before' | 'after'</code> Whether the label should appear after or before the checkbox. Defaults to 'after'\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-checkbox [labelPosition]=\"labelPosition\">Check me!</mat-checkbox>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleChangeEvent\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>@Output() change: EventEmitter&lt;MatCheckboxChange&gt;</code> Event emitted when the checkbox's checked value changes.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-checkbox [(ngModel)]=\"myValue\" (change)=\"changeValueEvent()\">Check me!</mat-checkbox>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<span>Checked: <mark>{{ myValue }}</mark></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleConfigurableCheckbox\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tWhen user clicks on the\r\n\t\t\t\t\t<code>mat-checkbox</code>, the default behavior is toggle checked value and set indeterminate to false. This behavior can be customized by\r\n\t\t\t\t\t<a href=\"https://angular.io/guide/dependency-injection\" target=\"_blank\">providing a new value</a> of\r\n\t\t\t\t\t<code>MAT_CHECKBOX_CLICK_ACTION</code> to the checkbox.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<label class=\"example-margin\">Align:</label>\r\n\t\t\t\t\t<mat-radio-group [(ngModel)]=\"align\">\r\n\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"start\">Start</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"end\">End</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\tResult: \r\n\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\" [(indeterminate)]=\"indeterminate\" [disabled]=\"disabled\">\r\n\t\t\t\t\t\tI'm a checkbox\r\n\t\t\t\t\t</mat-checkbox>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/checkbox/checkbox.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/checkbox/checkbox.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
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

var basicCheckboxes = {
    beforeCodeTitle: 'Basic checkboxes',
    htmlCode: "<mat-checkbox>Check me!</mat-checkbox>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic checkboxes\n*/\n@Component({\n  selector: 'checkbox-overview-example',\n  templateUrl: 'checkbox-overview-example.html',\n  styleUrls: ['checkbox-overview-example.css'],\n})\nexport class CheckboxOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var configurableCheckbox = {
    beforeCodeTitle: 'Configurable checkbox',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"align\">\n        <mat-radio-button class=\"example-margin\" value=\"start\">Start</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"end\">End</mat-radio-button>\n      </mat-radio-group>\n\t</section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <section class=\"example-section\">\n      <mat-checkbox\n        class=\"example-margin\"\n        [(ngModel)]=\"checked\"\n        [(indeterminate)]=\"indeterminate\"\n        [align]=\"align\"\n        [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n * @title Configurable checkbox\n */\n@Component({\n  selector: 'checkbox-configurable-example',\n  templateUrl: 'checkbox-configurable-example.html',\n  styleUrls: ['checkbox-configurable-example.css'],\n})\nexport class CheckboxConfigurableExample {\n  checked = false;\n  indeterminate = false;\n  align = 'start';\n  disabled = false;\n}",
    viewCode: "",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 0 10px;\n}",
    isCodeVisible: false
};
var labelPositions = {
    beforeCodeTitle: 'Label positions',
    htmlCode: "<mat-checkbox>Check me!</mat-checkbox>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'checkbox-label-positions-example',\n  templateUrl: 'checkbox-label-positions-example.html',\n  styleUrls: ['checkbox-label-positions-example.css'],\n})\nexport class CheckboxLabelPositionsExample {\n\n  labelPosition: string = \"before\";\n\n  changeLablesPositions() {\n    this.labelPosition = this.labelPosition == \"before\" ? \"after\" : \"before\";\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var changeEvent = {
    beforeCodeTitle: 'Change event binding',
    htmlCode: "\n<mat-checkbox [(ngModel)]=\"myValue\" (change)=\"changeValueEvent()\">Check me!</mat-checkbox>\n<div class=\"m-separator m-separator--dashed\"></div>\n<span>Checked: <mark>{{ myValue }}</mark></span>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'checkbox-change-event-example',\n  templateUrl: 'checkbox-change-event-example.html',\n  styleUrls: ['checkbox-change-event-example.css'],\n})\nexport class CheckboxChangeEventExample {\n  myValue: boolean = true;\n  changeValueEvent() {\n    console.log(\"myValue:\", this.myValue);\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
        this.labelPosition = 'before';
        this.myValue = true;
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        this.exampleBasicCheckboxes = basicCheckboxes;
        this.exampleConfigurableCheckbox = configurableCheckbox;
        this.exampleLabelPositions = labelPositions;
        this.exampleChangeEvent = changeEvent;
    };
    CheckboxComponent.prototype.changeLablesPositions = function () {
        this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
    };
    CheckboxComponent.prototype.changeValueEvent = function () {
        console.log('myValue:', this.myValue);
    };
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/content/pages/components/material/formcontrols/checkbox/checkbox.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [
                "\n\t\t.example-h2 {\n\t\t\tmargin: 10px;\n\t\t}\n\t\t.example-section {\n\t\t\tdisplay: flex;\n\t\t\talign-content: center;\n\t\t\talign-items: center;\n\t\t\theight: 60px;\n\t\t}\n\t\t.example-margin {\n\t\t\tmargin: 0 10px;\n\t\t}\n\t"
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/datepicker/datepicker.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/datepicker/datepicker.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/datepicker/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicDatepicker\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThe datepicker allows users to enter a date either through text input, or by choosing a date from the calendar. It is made up of several components and directives that work together.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDatepickerStartDate\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDatepickerSelectedValue\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker1></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker3\" placeholder=\"Angular forms (w/ deserialization)\" [formControl]=\"serializedDate\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker3></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker4\" placeholder=\"Value binding\" [value]=\"date.value\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker4></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDatepickerWithMinMaxValidation\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t<input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker5\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker5></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDatepickerWithFilterValidation\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t<input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker6\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker6></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleDatepickerInputAndChangeEvents\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker7\" placeholder=\"Input & change events\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker7\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker7></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\" *ngIf=\"events && events.length > 0\"></div>\r\n\t\t\t\t\t<div class=\"m-demo\" *ngIf=\"events && events.length > 0\">\r\n\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t<div *ngFor=\"let e of events\">{{e}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDisabledDatepicker\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #dp1></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #dp2></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDatepickerTouchUI\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker8\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker8\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker touchUi=\"true\" #picker8></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDatepickerOpenMethod\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker9\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker #picker9></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<button mat-raised-button (click)=\"picker9.open()\">Open</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleUsesMomentJsDates\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp10\" placeholder=\"Moment.js datepicker\" [formControl]=\"date10\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp10\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #dp10></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/datepicker/datepicker.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/datepicker/datepicker.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports

var basicDatepicker = {
    beforeCodeTitle: 'Basic datepicker',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Basic datepicker */\n@Component({\n  selector: 'datepicker-overview-example',\n  templateUrl: 'datepicker-overview-example.html',\n  styleUrls: ['datepicker-overview-example.css'],\n})\nexport class DatepickerOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var datepickerSelectedValue = {
    beforeCodeTitle: 'Datepicker selected value',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"align\">\n        <mat-radio-button class=\"example-margin\" value=\"start\">Start</mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"end\">End</mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <section class=\"example-section\">\n      <mat-checkbox\n        class=\"example-margin\"\n        [(ngModel)]=\"checked\"\n        [(indeterminate)]=\"indeterminate\"\n        [align]=\"align\"\n        [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/** @title Datepicker selected value */\n@Component({\n  selector: 'datepicker-value-example',\n  templateUrl: 'datepicker-value-example.html',\n  styleUrls: ['datepicker-value-example.css'],\n})\nexport class DatepickerValueExample {\n  date = new FormControl(new Date());\n  serializedDate = new FormControl((new Date()).toISOString());\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerStartDate = {
    beforeCodeTitle: 'Datepicker start date',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker start date */\n@Component({\n  selector: 'datepicker-start-view-example',\n  templateUrl: 'datepicker-start-view-example.html',\n  styleUrls: ['datepicker-start-view-example.css'],\n})\nexport class DatepickerStartViewExample {\n  startDate = new Date(1990, 0, 1);\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerWithMinMaxValidation = {
    beforeCodeTitle: 'Datepicker with min & max validation',
    htmlCode: "\n<mat-form-field class=\"example-full-width\">\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker with min & max validation */\n@Component({\n  selector: 'datepicker-min-max-example',\n  templateUrl: 'datepicker-min-max-example.html',\n  styleUrls: ['datepicker-min-max-example.css'],\n})\nexport class DatepickerMinMaxExample {\n  minDate = new Date(2000, 0, 1);\n  maxDate = new Date(2020, 0, 1);\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerWithFilterValidation = {
    beforeCodeTitle: 'Datepicker with filter validation',
    htmlCode: "\n<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker with filter validation */\n@Component({\n  selector: 'datepicker-filter-example',\n  templateUrl: 'datepicker-filter-example.html',\n  styleUrls: ['datepicker-filter-example.css'],\n})\nexport class DatepickerFilterExample {\n  myFilter = (d: Date): boolean => {\n    const day = d.getDay();\n    // Prevent Saturday and Sunday from being selected.\n    return day !== 0 && day !== 6;\n  }\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerInputAndChangeEvents = {
    beforeCodeTitle: 'Datepicker input and change events',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\"\n    (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatDatepickerInputEvent} from '@angular/material/datepicker';\n\n/** @title Datepicker input and change events */\n@Component({\n  selector: 'datepicker-events-example',\n  templateUrl: 'datepicker-events-example.html',\n  styleUrls: ['datepicker-events-example.css'],\n})\nexport class DatepickerEventsExample {\n  events: string[] = [];\n\n  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {\n  this.events.push(`${type}: ${event.value}`);\n  }\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var disabledDatepicker = {
    beforeCodeTitle: 'Disabled datepicker',
    htmlCode: "\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\n\t<mat-datepicker-toggle matSuffix [for]=\"dp3\">\n  </mat-datepicker-toggle>\n  <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n    </mat-form-field>\n</p>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Disabled datepicker */\n@Component({\n  selector: 'datepicker-disabled-example',\n  templateUrl: 'datepicker-disabled-example.html',\n  styleUrls: ['datepicker-disabled-example.css'],\n})\nexport class DatepickerDisabledExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerTouchUI = {
    beforeCodeTitle: 'Datepicker touch UI',
    htmlCode: "\n<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker touch UI */\n@Component({\n  selector: 'datepicker-touch-example',\n  templateUrl: 'datepicker-touch-example.html',\n  styleUrls: ['datepicker-touch-example.css'],\n})\nexport class DatepickerTouchExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerOpenMethod = {
    beforeCodeTitle: 'Datepicker open method',
    htmlCode: "\n<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n    <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker open method */\n@Component({\n  selector: 'datepicker-api-example',\n  templateUrl: 'datepicker-api-example.html',\n  styleUrls: ['datepicker-api-example.css'],\n})\nexport class DatepickerApiExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerWithDifferentLocale = {
    beforeCodeTitle: 'Datepicker with different locale',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n/** @title Datepicker with different locale */\n@Component({\n  selector: 'datepicker-locale-example',\n  templateUrl: 'datepicker-locale-example.html',\n  styleUrls: ['datepicker-locale-example.css'],\n  providers: [\n    // The locale would typically be provided on the root module of your application. We do it at\n    // the component level here, due to limitations of our example generation script.\n    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},\n\n    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n    // `MatMomentDateModule` in your applications root module. We provide it at the component level\n\t// here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerLocaleExample {\n  constructor(private adapter: DateAdapter<any>) {}\n  french() {\n    this.adapter.setLocale('fr');\n  }\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerThatUsesMomentJsDates = {
    beforeCodeTitle: 'Datepicker that uses Moment.js dates',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n// Depending on whether rollup is used, moment needs to be imported differently.\n// Since Moment.js doesn't have a default export, we normally need to import using the `* as`\n// syntax. However, rollup creates a synthetic default module and we thus need to import it using\n// the `default as` syntax.\nimport * as _moment from 'moment';\nimport {default as _rollupMoment} from 'moment';\nconst moment = _rollupMoment || _moment;\n\n/** @title Datepicker that uses Moment.js dates */\n@Component({\n  selector: 'datepicker-moment-example',\n  templateUrl: 'datepicker-moment-example.html',\n  styleUrls: ['datepicker-moment-example.css'],\n  providers: [\n    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n    // `MatMomentDateModule` in your applications root module. We provide it at the component level\n    // here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerMomentExample {\n// Datepicker takes `Moment` objects instead of `Date` objects.\n  date = new FormControl(moment([2017, 0, 1]));\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerWithCustomFormats = {
    beforeCodeTitle: 'Datepicker with custom formats',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n// Depending on whether rollup is used, moment needs to be imported differently.\n// Since Moment.js doesn't have a default export, we normally need to import using the `* as`\n// syntax. However, rollup creates a synthetic default module and we thus need to import it using\n// the `default as` syntax.\nimport * as _moment from 'moment';\nimport {default as _rollupMoment} from 'moment';\nconst moment = _rollupMoment || _moment;\n// See the Moment.js docs for the meaning of these formats:\n// https://momentjs.com/docs/#/displaying/format/\nexport const MY_FORMATS = {\n  parse: {\n    dateInput: 'LL',\n  },\n  display: {\n    dateInput: 'LL',\n    monthYearLabel: 'MMM YYYY',\n    dateA11yLabel: 'LL',\n    monthYearA11yLabel: 'MMMM YYYY',\n  },\n};\n/** @title Datepicker with custom formats */\n@Component({\n  selector: 'datepicker-formats-example',\n  templateUrl: 'datepicker-formats-example.html',\n  styleUrls: ['datepicker-formats-example.css'],\n  providers: [\n  // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your\n  // application's root module. We provide it at the component level here, due to limitations of\n  // our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n\t{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},\n  ],\n})\nexport class DatepickerFormatsExample {\n  date = new FormControl(moment());\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var usesMomentJsDates = {
    beforeCodeTitle: 'Datepicker uses Moment.js dates',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n// Depending on whether rollup is used, moment needs to be imported differently.\n// Since Moment.js doesn't have a default export, we normally need to import using the `* as`\n// syntax. However, rollup creates a synthetic default module and we thus need to import it using\n// the `default as` syntax.\nimport * as _moment from 'moment';\n// tslint:disable-next-line:no-duplicate-imports\nimport {default as _rollupMoment} from 'moment';\n\nconst moment = _rollupMoment || _moment;\n\n/** @title Datepicker that uses Moment.js dates */\n@Component({\n  selector: 'datepicker-moment-example',\n  templateUrl: 'datepicker-moment-example.html',\n  styleUrls: ['datepicker-moment-example.css'],\n  providers: [\n  // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n  // `MatMomentDateModule` in your applications root module. We provide it at the component level\n  // here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerMomentExample {\n  // Datepicker takes `Moment` objects instead of `Date` objects.\n  date = new FormControl(moment([2017, 0, 1]));\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var moment = moment__WEBPACK_IMPORTED_MODULE_4___default.a || moment__WEBPACK_IMPORTED_MODULE_4__;
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this.startDate = new Date(1990, 0, 1);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.date10 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment([2017, 0, 1]));
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
        this.minDate = new Date(2011, 0, 1);
        this.maxDate = new Date(2018, 11, 1);
        this.events = [];
        this.myFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.exampleBasicDatepicker = basicDatepicker;
        this.exampleDatepickerStartDate = datepickerStartDate;
        this.exampleDatepickerSelectedValue = datepickerSelectedValue;
        this.exampleDatepickerWithMinMaxValidation = datepickerWithMinMaxValidation;
        this.exampleDatepickerWithFilterValidation = datepickerWithFilterValidation;
        this.exampleDatepickerInputAndChangeEvents = datepickerInputAndChangeEvents;
        this.exampleDisabledDatepicker = disabledDatepicker;
        this.exampleDatepickerTouchUI = datepickerTouchUI;
        this.exampleDatepickerOpenMethod = datepickerOpenMethod;
        this.exampleDatepickerWithDifferentLocale = datepickerWithDifferentLocale;
        this.exampleDatepickerThatUsesMomentJsDates = datepickerThatUsesMomentJsDates;
        this.exampleDatepickerWithCustomFormats = datepickerWithCustomFormats;
        this.exampleUsesMomentJsDates = usesMomentJsDates;
    };
    DatepickerComponent.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/content/pages/components/material/formcontrols/datepicker/datepicker.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-events {\n\t\twidth: 400px;\n\t\theight: 200px;\n\t\tborder: 1px solid #555;\n\t\toverflow: auto;\n\t  }\n\t"],
            providers: [
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MAT_MOMENT_DATE_FORMATS"] },
            ],
        }),
        __metadata("design:paramtypes", [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/formfield/formfield.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/formfield/formfield.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/form-field/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleSimpleFormField\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>mat-form-field</code> is a component used to wrap several Angular Material components and apply common Text field styles such as the underline, floating label, and hint messages.\r\n\t\t\t\t\t<br /> The following Angular Material components are designed to work inside a\r\n\t\t\t\t\t<code>mat-form-field</code>:\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<code>input matInput & textarea matInput</code>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<code>mat-select</code>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<code>mat-chip-list</code>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Input\">\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<textarea matInput placeholder=\"Textarea\"></textarea>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Select\">\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Alabama</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Alaska</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Florida</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Illinois</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Kansas</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Michigan</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleFormFieldWithLabel\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\" [formGroup]=\"options\">\r\n\t\t\t\t\t\t<mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<label>Float label: </label>\r\n\t\t\t\t\t\t\t<mat-radio-group formControlName=\"floatLabel\">\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"auto\">Auto</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"always\">Always</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"never\">Never</mat-radio-button>\r\n\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Simple placeholder\" required>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field [floatLabel]=\"options.value.floatLabel\">\r\n\t\t\t\t\t\t<mat-label>Both a label and a placeholder</mat-label>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Simple placeholder\">\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\">\r\n\t\t\t\t\t\t<mat-select required>\r\n\t\t\t\t\t\t\t<mat-option>-- None --</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Alabama</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Alaska</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Florida</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Illinois</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Kansas</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Michigan</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-placeholder>\r\n\t\t\t\t\t\t\t<!-- <mat-icon>favorite</mat-icon> -->\r\n\t\t\t\t\t\t\t<b> Fancy</b>\r\n\t\t\t\t\t\t\t<i> placeholder</i>\r\n\t\t\t\t\t\t</mat-placeholder>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleFormFieldWithHints\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field hintLabel=\"Max 10 characters\">\r\n\t\t\t\t\t\t<input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\r\n\t\t\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Select me\">\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Option</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleFormFieldWithErrorMessages\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleFormFieldWithPrefixSuffix\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\r\n\t\t\t\t\t\t<i matSuffix (click)=\"hide = !hide\" class=\"la\" [ngClass]=\"{'la-toggle-on' : !hide, 'la-toggle-off': hide }\"></i>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\">\r\n\t\t\t\t\t\t<span matPrefix>$&nbsp;</span>\r\n\t\t\t\t\t\t<span matSuffix>.00</span>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleFormFieldTheming\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\" [formGroup]=\"options2\" [style.fontSize.px]=\"getFontSize()\">\r\n\t\t\t\t\t\t<mat-form-field [color]=\"options2.value.color\">\r\n\t\t\t\t\t\t\t<mat-select placeholder=\"Color\" formControlName=\"color\">\r\n\t\t\t\t\t\t\t\t<mat-option value=\"primary\">Primary</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"accent\">Accent</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"warn\">Warn</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field [color]=\"options2.value.color\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"options2.get('fontSize')?.invalid\">Min size: 10px</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleFormFieldAppearanceVariants\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<mat-form-field appearance=\"legacy\">\r\n\t\t\t\t\t\t\t<mat-label>Legacy form field</mat-label>\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Placeholder\">\r\n\t\t\t\t\t\t\t<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t<mat-hint>Hint</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<mat-form-field appearance=\"standard\">\r\n\t\t\t\t\t\t\t<mat-label>Standard form field</mat-label>\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Placeholder\">\r\n\t\t\t\t\t\t\t<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t<mat-hint>Hint</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<mat-form-field appearance=\"fill\">\r\n\t\t\t\t\t\t\t<mat-label>Fill form field</mat-label>\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Placeholder\">\r\n\t\t\t\t\t\t\t<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t<mat-hint>Hint</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t\t\t\t\t<mat-label>Outline form field</mat-label>\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Placeholder\">\r\n\t\t\t\t\t\t\t<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t<mat-hint>Hint</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/formfield/formfield.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/formfield/formfield.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FormfieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormfieldComponent", function() { return FormfieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var simpleFormField = {
    beforeCodeTitle: 'Simple form field',
    htmlCode: "\n<div class=\"example-container\">\n  <mat-form-field>\n     <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Simple form field */\n=@Component({\n  selector: 'form-field-overview-example',\n  templateUrl: 'form-field-overview-example.html',\n  styleUrls: ['form-field-overview-example.css']\n})\nexport class FormFieldOverviewExample {}",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var formFieldAppearanceVariants = {
    beforeCodeTitle: 'Form field appearance variants',
    htmlCode: "\n<p>\n  <mat-form-field appearance=\"legacy\">\n    <mat-label>Legacy form field</mat-label>\n      <input matInput placeholder=\"Placeholder\">\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n      <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Standard form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n     <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n  ",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/** @title Form field appearance variants */\n@Component({\n  selector: 'form-field-appearance-example',\n  templateUrl: 'form-field-appearance-example.html',\n  styleUrls: ['form-field-appearance-example.css'],\n})\nexport class FormFieldAppearanceExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var formFieldWithLabel = {
    beforeCodeTitle: 'Form field with label',
    htmlCode: "\n<div class=\"example-container\">\n  <form class=\"example-container\" [formGroup]=\"options\">\n    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group formControlName=\"floatLabel\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n        <mat-radio-button value=\"never\">Never</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </form>\n  <mat-form-field\n    [hideRequiredMarker]=\"options.value.hideRequired\"\n    [floatLabel]=\"options.value.floatLabel\">\n    <input matInput placeholder=\"Simple placeholder\" required>\n  </mat-form-field>\n  <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n    <mat-label>Both a label and a placeholder</mat-label>\n    <input matInput placeholder=\"Simple placeholder\">\n  </mat-form-field>\n  <mat-form-field\n    [hideRequiredMarker]=\"options.value.hideRequired\"\n    [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-placeholder><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> placeholder</i></mat-placeholder>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormBuilder, FormGroup} from '@angular/forms';\n/** @title Form field with label */\n@Component({\n  selector: 'form-field-label-example',\n  templateUrl: 'form-field-label-example.html',\n  styleUrls: ['form-field-label-example.css']\n})\nexport class FormFieldLabelExample {\n  options: FormGroup;\n  constructor(fb: FormBuilder) {\n    this.options = fb.group({\n      hideRequired: false,\n      floatLabel: 'auto',\n    });\n  }\n}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}\n.example-container form {\n  margin-bottom: 20px;\n}\n.example-container form > * {\n  margin: 5px 0;\n}\n.example-container .mat-radio-button {\n  margin: 0 5px;\n}",
    isCodeVisible: false
};
var formFieldWithHints = {
    beforeCodeTitle: 'Form field with hints',
    htmlCode: "\n<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\n    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"Select me\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Form field with hints */\n@Component({\n  selector: 'form-field-hint-example',\n  templateUrl: 'form-field-hint-example.html',\n  styleUrls: ['form-field-hint-example.css']\n})\nexport class FormFieldHintExample {}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}",
    isCodeVisible: false
};
var formFieldWithErrorMessages = {
    beforeCodeTitle: 'Form field with error messages',
    htmlCode: "\n<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\n\n/** @title Form field with error messages */\n@Component({\n  selector: 'form-field-error-example',\n  templateUrl: 'form-field-error-example.html',\n  styleUrls: ['form-field-error-example.css']\n})\nexport class FormFieldErrorExample {\n  email = new FormControl('', [Validators.required, Validators.email]);\n\n  getErrorMessage() {\n    return this.email.hasError('required') ? 'You must enter a value' :\n      this.email.hasError('email') ? 'Not a valid email' :\n    '';\n  }\n}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}",
    isCodeVisible: false
};
var formFieldWithPrefixSuffix = {
    beforeCodeTitle: 'Form field with prefix & suffix',
    htmlCode: "\n<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\">\n    <span matPrefix>$&nbsp;</span>\n    <span matSuffix>.00</span>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Form field with prefix & suffix */\n@Component({\n  selector: 'form-field-prefix-suffix-example',\n  templateUrl: 'form-field-prefix-suffix-example.html',\n  styleUrls: ['form-field-prefix-suffix-example.css']\n})\nexport class FormFieldPrefixSuffixExample {\n  hide = true;\n}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}\n.example-right-align {\n  text-align: right;\n}\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\ninput.example-right-align {\n  -moz-appearance: textfield;\n}",
    isCodeVisible: false
};
var formFieldTheming = {
    beforeCodeTitle: 'Form field theming',
    htmlCode: "\n<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field [color]=\"options.value.color\">\n    <mat-select placeholder=\"Color\" formControlName=\"color\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field [color]=\"options.value.color\">\n    <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\n     <mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n </form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormBuilder, FormGroup, Validators} from '@angular/forms';\n\n/** @title Form field theming */\n@Component({\n  selector: 'form-field-theming-example',\n  templateUrl: 'form-field-theming-example.html',\n  styleUrls: ['form-field-theming-example.css']\n})\nexport class FormFieldThemingExample {\n  options: FormGroup;\n\n  constructor(fb: FormBuilder) {\n    this.options = fb.group({\n      'color': 'primary',\n      'fontSize': [16, Validators.min(10)],\n    });\n  }\n  getFontSize() {\n    return Math.max(10, this.options.value.fontSize);\n  }\n}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}",
    isCodeVisible: false
};
var formFieldWithCustomTelephoneNumberInputControl = {
    beforeCodeTitle: 'Form field with custom telephone number input control.',
    htmlCode: "\n<div [formGroup]=\"parts\">\n  <input class=\"area\" formControlName=\"area\" size=\"3\">\n  <span>&ndash;</span>\n  <input class=\"exchange\" formControlName=\"exchange\" size=\"3\">\n  <span>&ndash;</span>\n  <input class=\"subscriber\" formControlName=\"subscriber\" size=\"4\">\n</div>",
    tsCode: "\nimport {FocusMonitor} from '@angular/cdk/a11y';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {Component, ElementRef, Input, OnDestroy} from '@angular/core';\nimport {FormBuilder, FormGroup} from '@angular/forms';\nimport {MatFormFieldControl} from '@angular/material';\nimport {Subject} from 'rxjs/Subject';\n\n/** Data structure for holding telephone number. */\nexport class MyTel {\n  constructor(public area: string, public exchange: string, public subscriber: string) {}\n}\n/** Custom `MatFormFieldControl` for telephone number input. */\n@Component({\n  selector: 'my-tel-input',\n  templateUrl: 'form-field-custom-control-example.html',\n  styleUrls: ['form-field-custom-control-example.css'],\n  providers: [{provide: MatFormFieldControl, useExisting: MyTelInput}],\n  host: {\n    '[class.floating]': 'shouldLabelFloat',\n    '[id]': 'id',\n    '[attr.aria-describedby]': 'describedBy',\n  }\n})\nexport class MyTelInput implements MatFormFieldControl<MyTel>, OnDestroy {\n  static nextId = 0;\n  parts: FormGroup;\n  stateChanges = new Subject<void>();\n  focused = false;\n  ngControl = null;\n  errorState = false;\n  controlType = 'my-tel-input';\n  get empty() {\n    let n = this.parts.value;\n    return !n.area && !n.exchange && !n.subscriber;\n  }\n  get shouldLabelFloat() { return this.focused || !this.empty; }\n  id = `my-tel-input-${MyTelInput.nextId++}`;\n  describedBy = '';\n\n  @Input()\n  get placeholder() { return this._placeholder; }\n  set placeholder(plh) {\n    this._placeholder = plh;\n    this.stateChanges.next();\n  }\n\n  private _placeholder: string;\n  @Input()\n  get required() { return this._required; }\n  set required(req) {\n    this._required = coerceBooleanProperty(req);\n    this.stateChanges.next();\n  }\n\n  private _required = false;\n\n  @Input()\n  get disabled() { return this._disabled; }\n  set disabled(dis) {\n    this._disabled = coerceBooleanProperty(dis);\n    this.stateChanges.next();\n  }\n\n  private _disabled = false;\n\n  @Input()\n  get value(): MyTel | null {\n    let n = this.parts.value;\n    if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {\n      return new MyTel(n.area, n.exchange, n.subscriber);\n    }\n    return null;\n  }\n  set value(tel: MyTel | null) {\n    tel = tel || new MyTel('', '', '');\n    this.parts.setValue({area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber});\n    this.stateChanges.next();\n  }\n\n  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef) {\n    this.parts = fb.group({\n      'area': '',\n      'exchange': '',\n     'subscriber': '',\n    });\n\n    fm.monitor(elRef.nativeElement, true).subscribe((origin) => {\n      this.focused = !!origin;\n      this.stateChanges.next();\n    });\n  }\n\n  ngOnDestroy() {\n    this.stateChanges.complete();\n    this.fm.stopMonitoring(this.elRef.nativeElement);\n  }\n\n  setDescribedByIds(ids: string[]) {\n    this.describedBy = ids.join(' ');\n  }\n\n  onContainerClick(event: MouseEvent) {\n    if ((event.target as Element).tagName.toLowerCase() != 'input') {\n      this.elRef.nativeElement.querySelector('input').focus();\n    }\n  }\n}\n\n\n/** @title Form field with custom telephone number input control. */\n@Component({\n  selector: 'form-field-custom-control-example',\n  template: `\n    <mat-form-field>\n      <my-tel-input placeholder=\"Phone number\" required></my-tel-input>\n      <mat-icon matSuffix>phone</mat-icon>\n      <mat-hint>Include area code</mat-hint>\n    </mat-form-field>\n  `\n})\nexport class FormFieldCustomControlExample {}",
    viewCode: "",
    cssCode: "\ndiv {\n  display: flex;\n}\n\ninput {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\nspan {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.floating span {\n  opacity: 1;\n}",
    isCodeVisible: false
};
var FormfieldComponent = /** @class */ (function () {
    function FormfieldComponent(fb) {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.hide = true;
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.options2 = fb.group({
            'color': 'primary',
            'fontSize': [16, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10)],
        });
    }
    FormfieldComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormfieldComponent.prototype.getFontSize = function () {
        return Math.max(10, this.options2.value.fontSize);
    };
    FormfieldComponent.prototype.ngOnInit = function () {
        this.exampleSimpleFormField = simpleFormField;
        this.exampleFormFieldWithLabel = formFieldWithLabel;
        this.exampleFormFieldWithHints = formFieldWithHints;
        this.exampleFormFieldWithErrorMessages = formFieldWithErrorMessages;
        this.exampleFormFieldWithPrefixSuffix = formFieldWithPrefixSuffix;
        this.exampleFormFieldTheming = formFieldTheming;
        this.exampleFormFieldWithCustomTelephoneNumberInputControl = formFieldWithCustomTelephoneNumberInputControl;
        this.exampleFormFieldAppearanceVariants = formFieldAppearanceVariants;
    };
    FormfieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-formfield',
            template: __webpack_require__(/*! ./formfield.component.html */ "./src/app/content/pages/components/material/formcontrols/formfield/formfield.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t  }\n\t  .example-container > * {\n\t\twidth: 100%;\n\t  }\n\n\t  .example-container form {\n\t  \tmargin-bottom: 20px;\n  \t  }\n  \t  .example-container form > * {\n\t    margin: 5px 0;\n      }\n  \t  .example-container .mat-radio-button {\n\t    margin: 0 5px;\n\t  }\n\t  .example-right-align {\n\t\ttext-align: right;\n\t  }\n\t  input.example-right-align::-webkit-outer-spin-button,\n\t  input.example-right-align::-webkit-inner-spin-button {\n\t\tdisplay: none;\n\t  }\n\t  input.example-right-align {\n\t\t-moz-appearance: textfield;\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormfieldComponent);
    return FormfieldComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/input/input.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/input/input.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/input/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicInputs\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tmatInput is a directive that allows native\r\n\t\t\t\t\t<mark>input</mark> and\r\n\t\t\t\t\t<mark>textarea</mark> elements to work with\r\n\t\t\t\t\t<code>mat-form-field</code>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Favorite food\" value=\"Sushi\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleInputWithACustomErrorStateMatcher\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t\t\t<mat-hint>Errors appear instantly!</mat-hint>\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n\t\t\t\t\t\t\t\tPlease enter a valid email address\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n\t\t\t\t\t\t\t\tEmail is\r\n\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleAutoResizingTextarea\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<textarea matInput placeholder=\"Autosize textarea\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleInputWithAClearButton\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field class=\"example-form-field\">\r\n\t\t\t\t\t\t<input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\" />\r\n\t\t\t\t\t\t<button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n\t\t\t\t\t\t\t<i class=\"la la-close\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleInputWithErrorMessages\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" [formControl]=\"emailFormControl2\">\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"emailFormControl2.hasError('email') && !emailFormControl2.hasError('required')\">\r\n\t\t\t\t\t\t\t\tPlease enter a valid email address\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"emailFormControl2.hasError('required')\">\r\n\t\t\t\t\t\t\t\tEmail is\r\n\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleInputsInAForm\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t\t<table class=\"example-full-width\" cellspacing=\"0\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Long Last Name That Will Be Truncated\">\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<textarea matInput placeholder=\"Address 2\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t\t<table class=\"example-full-width\" cellspacing=\"0\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"City\">\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"State\">\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleInputWithHints\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput #message maxlength=\"256\" placeholder=\"Message\">\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>Don't disclose personal info</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t<mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</m-material-preview>\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleInputsWithPrefixesAndSuffixes\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<span matPrefix>+1 &nbsp;</span>\r\n\t\t\t\t\t\t\t<input type=\"tel\" matInput placeholder=\"Telephone\">\r\n\t\t\t\t\t\t\t<i class=\"la la-edit\" matSuffix></i>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/input/input.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/input/input.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MyErrorStateMatcher, InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var basicInputs = {
    beforeCodeTitle: 'Basic Inputs',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\"></textarea>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic Inputs\n*/\n@Component({\n  selector: 'input-overview-example',\n  styleUrls: ['input-overview-example.css'],\n  templateUrl: 'input-overview-example.html',\n})\nexport class InputOverviewExample {}",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var inputWithACustomErrorStateMatcher = {
    beforeCodeTitle: 'Input with a custom ErrorStateMatcher',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n      [errorStateMatcher]=\"matcher\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';\nimport {ErrorStateMatcher} from '@angular/material/core';\n\n/** Error when invalid control is dirty, touched, or submitted. */\nexport class MyErrorStateMatcher implements ErrorStateMatcher {\n  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {\n  const isSubmitted = form && form.submitted;\n    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));\n  }\n}\n/** @title Input with a custom ErrorStateMatcher */\n@Component({\n  selector: 'input-error-state-matcher-example',\n  templateUrl: './input-error-state-matcher-example.html',\n  styleUrls: ['./input-error-state-matcher-example.css'],\n})\nexport class InputErrorStateMatcherExample {\n  emailFormControl = new FormControl('', [\n  Validators.required,\n  Validators.email,\n]);\n  matcher = new MyErrorStateMatcher();\n}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var autoResizingTextarea = {
    beforeCodeTitle: 'Auto-resizing textarea',
    htmlCode: "\n<mat-form-field>\n  <textarea matInput placeholder=\"Autosize textarea\" matTextareaAutosize matAutosizeMinRows=\"2\"\n    matAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';'n\n/** @title Auto-resizing textarea */\n@Component({\n  selector: 'input-autosize-textarea-example',\n  templateUrl: './input-autosize-textarea-example.html',\n  styleUrls: ['./input-autosize-textarea-example.css'],\n})\nexport class InputAutosizeTextareaExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var inputWithAClearButton = {
    beforeCodeTitle: 'Input with a clear button',
    htmlCode: "\n<mat-form-field class=\"example-form-field\">\n  <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"/>\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n </mat-form-field>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Input with a clear button\n*/\n@Component({\n  selector: 'input-clearable-example',\n  templateUrl: './input-clearable-example.html',\n  styleUrls: ['./input-clearable-example.css'],\n})\nexport class InputClearableExample {\n  value = 'Clear me';\n}",
    viewCode: "",
    cssCode: "\n.example-form-field {\n  width: 200px;\n}",
    isCodeVisible: false
};
var inputWithErrorMessages = {
    beforeCodeTitle: 'Input with error messages',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n </form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\n\n/**\n* @title Input with error messages\n*/\n@Component({\n  selector: 'input-errors-example',\n  templateUrl: 'input-errors-example.html',\n  styleUrls: ['input-errors-example.css'],\n})\nexport class InputErrorsExample {\n  emailFormControl = new FormControl('', [\n    Validators.required,\n    Validators.email,\n  ]);\n}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var inputsInAForm = {
    beforeCodeTitle: 'Inputs in a form',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n  </mat-form-field>\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"First name\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n    </mat-form-field></td>\n  </tr></table>\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address 2\"></textarea>\n    </mat-form-field>\n  </p>\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"City\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"State\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Inputs in a form\n*/\n@Component({\n  selector: 'input-form-example',\n  templateUrl: 'input-form-example.html',\n  styleUrls: ['input-form-example.css'],\n})\nexport class InputFormExample {}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var inputWithHints = {
    beforeCodeTitle: 'Input with hints',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Input with hints\n*/\n@Component({\n  selector: 'input-hint-example',\n  templateUrl: 'input-hint-example.html',\n  styleUrls: ['input-hint-example.css'],\n})\nexport class InputHintExample {}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var inputsWithPrefixesAndSuffixes = {
    beforeCodeTitle: 'Inputs with prefixes and suffixes',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"Telephone\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Inputs with prefixes and suffixes\n*/\n@Component({\n  selector: 'input-prefix-suffix-example',\n  templateUrl: 'input-prefix-suffix-example.html',\n styleUrls: ['input-prefix-suffix-example.css'],\n})\nexport class InputPrefixSuffixExample {}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var datepickerOpenMethod = {
    beforeCodeTitle: 'Datepicker open method',
    htmlCode: "\n<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n    <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker open method */\n@Component({\n  selector: 'datepicker-api-example',\n  templateUrl: 'datepicker-api-example.html',\n  styleUrls: ['datepicker-api-example.css'],\n})\nexport class DatepickerApiExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerWithDifferentLocale = {
    beforeCodeTitle: 'Datepicker with different locale',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n/** @title Datepicker with different locale */\n@Component({\n  selector: 'datepicker-locale-example',\n  templateUrl: 'datepicker-locale-example.html',\n  styleUrls: ['datepicker-locale-example.css'],\n  providers: [\n    // The locale would typically be provided on the root module of your application. We do it at\n    // the component level here, due to limitations of our example generation script.\n    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},\n    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n    // `MatMomentDateModule` in your applications root module. We provide it at the component level\n\t// here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerLocaleExample {\n  constructor(private adapter: DateAdapter<any>) {}\n  french() {\n    this.adapter.setLocale('fr');\n  }\n}",
    viewCode: "",
    cssCode: "\n\t\t",
    isCodeVisible: false
};
var datepickerThatUsesMomentJsDates = {
    beforeCodeTitle: 'Datepicker that uses Moment.js dates',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n// Depending on whether rollup is used, moment needs to be imported differently.\n// Since Moment.js doesn't have a default export, we normally need to import using the `* as`\n// syntax. However, rollup creates a synthetic default module and we thus need to import it using\n// the `default as` syntax.\nimport * as _moment from 'moment';\nimport {default as _rollupMoment} from 'moment';\nconst moment = _rollupMoment || _moment;\n\n/** @title Datepicker that uses Moment.js dates */\n@Component({\n  selector: 'datepicker-moment-example',\n  templateUrl: 'datepicker-moment-example.html',\n  styleUrls: ['datepicker-moment-example.css'],\n  providers: [\n    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n    // `MatMomentDateModule` in your applications root module. We provide it at the component level\n    // here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerMomentExample {\n// Datepicker takes `Moment` objects instead of `Date` objects.\n  date = new FormControl(moment([2017, 0, 1]));\n}",
    viewCode: "",
    cssCode: "\n\t\t",
    isCodeVisible: false
};
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.emailFormControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.value = 'Clear me';
    }
    InputComponent.prototype.ngOnInit = function () {
        this.exampleBasicInputs = basicInputs;
        this.exampleInputWithACustomErrorStateMatcher = inputWithACustomErrorStateMatcher;
        this.exampleAutoResizingTextarea = autoResizingTextarea;
        this.exampleInputWithAClearButton = inputWithAClearButton;
        this.exampleInputWithErrorMessages = inputWithErrorMessages;
        this.exampleInputsInAForm = inputsInAForm;
        this.exampleInputWithHints = inputWithHints;
        this.exampleInputsWithPrefixesAndSuffixes = inputsWithPrefixesAndSuffixes;
    };
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/content/pages/components/material/formcontrols/input/input.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-form {\n\t\tmin-width: 150px;\n\t\tmax-width: 500px;\n\t\twidth: 100%;\n\t  }\n\t  .example-full-width {\n\t\twidth: 100%;\n\t  }\n\t  .example-form-field {\n\t\twidth: 200px;\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/radiobutton/radiobutton.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/radiobutton/radiobutton.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/radio/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicRadios\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>mat-radio</code> provides the same functionality as a native\r\n\t\t\t\t\t<code>&lt;input type=\"radio\"&gt;</code> enhanced with Material Design styling and animations.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDisabledRadios\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>@Input() disabled: boolean</code> Whether the radio group is disabled\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group disabled=\"true\">\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exmapleLabelPosition\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>@Input() labelPosition: 'before' | 'after'</code> Whether the labels should appear after or before the radio-buttons. Defaults to 'after'\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group [labelPosition]=\"labelPosition\">\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleRadiosWithNgModel\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\">\r\n\t\t\t\t\t\t<mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\r\n\t\t\t\t\t\t\t{{season}}\r\n\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<div class=\"example-selected-value\">Your favorite season is: <mark *ngIf=\"favoriteSeason\">{{favoriteSeason}}</mark></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleChangeEvent\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>@Output() change: EventEmitter&lt;MatRadioChange&gt;</code> \r\n\t\t\t\t\t\tEvent emitted when the group value changes. Change events are only emitted when the value changes due to user interaction with a radio button (the same behavior as \r\n\t\t\t\t\t\t<code>&lt;input type-\"radio\"&gt;</code>).\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group (change)=\"changeState()\" [(ngModel)]=\"selectedState\">\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\" *ngIf=\"state\"></div>\r\n\t\t\t\t\t<span *ngIf=\"state\">Welcome to <mark>{{ state }}</mark>!</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/radiobutton/radiobutton.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/radiobutton/radiobutton.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RadiobuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiobuttonComponent", function() { return RadiobuttonComponent; });
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

var basicRadios = {
    beforeCodeTitle: 'Basic radios',
    htmlCode: "\n<mat-radio-group>\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic radios\n*/\n@Component({\n  selector: 'radio-overview-example',\n  templateUrl: 'radio-overview-example.html',\n styleUrls: ['radio-overview-example.css'],\n})\nexport class RadioOverviewExample {}",
    cssCode: "\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var radiosWithNgModel = {
    beforeCodeTitle: 'Radios with ngModel',
    htmlCode: "\n<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Radios with ngModel\n*/\n@Component({\n  selector: 'radio-ng-model-example',\n  templateUrl: 'radio-ng-model-example.html',\n  styleUrls: ['radio-ng-model-example.css'],\n})\nexport class RadioNgModelExample {\n  favoriteSeason: string;\n\n  seasons = [\n    'Winter',\n    'Spring',\n    'Summer',\n    'Autumn',\n  ];\n}",
    viewCode: "",
    cssCode: "\n.example-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n.example-radio-button {\n  margin: 5px;\n}\n.example-selected-value {\n  margin: 15px 0;\n}\n\t\t",
    isCodeVisible: false
};
var disabledRadios = {
    beforeCodeTitle: 'Disabled radios',
    htmlCode: "\n<mat-radio-group disabled=\"true\">\n  <mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\n  <mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\n  <mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\n  <mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\n  <mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\n</mat-radio-group>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'radio-disabled-example',\n  templateUrl: 'radio-disabled-example.html',\n styleUrls: ['radio-disabled-example.css'],\n})\nexport class RadioDisabledExample {}",
    cssCode: "\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var labelPosition = {
    beforeCodeTitle: 'Label position',
    htmlCode: "\n<mat-radio-group [labelPosition]=\"labelPosition\">\n  <mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\n  <mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\n  <mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\n  <mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\n  <mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\n</mat-radio-group>\n<div class=\"m-separator m-separator--dashed\"></div>\n<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'radio-label-position-example',\n  templateUrl: 'radio-lablel-position.html',\n styleUrls: ['radio-label-position-example.css'],\n})\nexport class RadioLabelPositionExample {\n  labelPosition: string = \"before\";\n\n  changeLablesPositions() {\n    this.labelPosition = this.labelPosition == \"before\" ? \"after\" : \"before\";\n  }\n}",
    cssCode: "\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var changeEvent = {
    beforeCodeTitle: 'Change event binding',
    htmlCode: "\n<mat-radio-group (change)=\"changeState()\" [(ngModel)]=\"selectedState\">\n  <mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\n  <mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\n  <mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\n  <mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\n  <mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\n</mat-radio-group>\n<div class=\"m-separator m-separator--dashed\" *ngIf=\"state\"></div>\n<span *ngIf=\"state\">Welcome to <mark>{{ state }}</mark>!</span>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\nselector: 'radio-change-event-example',\ntemplateUrl: 'radio-change-event.html',\nstyleUrls: ['radio-change-event-example.css'],\n})\nexport class RadioChangeEventExample {\n  state: string = \"\";\n  selectedState: string = \"\";\n\n  changeState() {\n    this.state = this.selectedState;\n  }\n}",
    cssCode: "\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var RadiobuttonComponent = /** @class */ (function () {
    function RadiobuttonComponent() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
        this.state = '';
        this.selectedState = '';
        this.labelPosition = 'before';
    }
    RadiobuttonComponent.prototype.changeLablesPositions = function () {
        this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
    };
    RadiobuttonComponent.prototype.ngOnInit = function () {
        this.exampleBasicRadios = basicRadios;
        this.exampleRadiosWithNgModel = radiosWithNgModel;
        this.exampleDisabledRadios = disabledRadios;
        this.exmapleLabelPosition = labelPosition;
        this.exampleChangeEvent = changeEvent;
    };
    RadiobuttonComponent.prototype.changeState = function () {
        this.state = this.selectedState;
    };
    RadiobuttonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-radiobutton',
            template: __webpack_require__(/*! ./radiobutton.component.html */ "./src/app/content/pages/components/material/formcontrols/radiobutton/radiobutton.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\tmat-radio-button {\n\t\tpadding-right: 16px;\n\t}\n\t.example-radio-group {\n\t\tdisplay: inline-flex;\n\t\tflex-direction: column;\n\t  }\n\t  .example-radio-button {\n\t\tmargin: 15px;\n\t  }\n\t.example-selected-value {\n\t\tmargin: 15px 0;\n\t}\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], RadiobuttonComponent);
    return RadiobuttonComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/select/select.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/select/select.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/select/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicSelect\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>mat-select</code> is a form control for selecting a value from a set of options, similar to the native\r\n\t\t\t\t\t<code>&lt;select&gt;</code> element. You can read more about selects in the Material Design spec. It is designed to work inside of a\r\n\t\t\t\t\t<code>mat-form-field</code> element.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Favorite food\">\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n\t\t\t\t\t\t\t\t{{ food.viewValue }}\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectWith2WayValueBinding\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select [(value)]=\"selected\">\r\n\t\t\t\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">Option 1</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option2\">Option 2</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option3\">Option 3</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t\t\tYou selected:\r\n\t\t\t\t\t<mark *ngIf=\"selected\">{{selected}}</mark>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectInAForm\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n\t\t\t\t\t\t\t\t\t{{food.viewValue}}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>Selected value:\r\n\t\t\t\t\t\t<mark *ngIf=\"selectedValue\">{{selectedValue}}</mark>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectWithFormFieldFeature\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required>\r\n\t\t\t\t\t\t\t<mat-option>--</mat-option>\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\r\n\t\t\t\t\t\t\t\t{{animal.name}}\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\r\n\t\t\t\t\t\t<mat-hint>{{animalControl.value?.sound}}</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectWithResetOption\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"State\">\r\n\t\t\t\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectWithOptionGroups\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\">\r\n\t\t\t\t\t\t\t<mat-option>-- None --</mat-option>\r\n\t\t\t\t\t\t\t<mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\r\n\t\t\t\t\t\t\t\t\t{{ pokemon.viewValue }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-optgroup>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectWithMultipleSelection\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectWithCustomTriggerText\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Toppings\" [formControl]=\"toppings2\" multiple>\r\n\t\t\t\t\t\t\t<mat-select-trigger>\r\n\t\t\t\t\t\t\t\t{{toppings2.value ? toppings2.value[0] : ''}}\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"toppings2.value?.length > 1\" class=\"example-additional-selection\">\r\n\t\t\t\t\t\t\t\t\t(+{{toppings2.value.length - 1}} others)\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</mat-select-trigger>\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let topping of toppingList2\" [value]=\"topping\">{{topping}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectWithCustomPanelStyling\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\" panelClass=\"example-panel-{{panelColor.value}}\">\r\n\t\t\t\t\t\t\t<mat-option value=\"red\">Red</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"green\">Green</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"blue\">Blue</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectWithACustomErrorStateMatcher\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Choose one\" [formControl]=\"selected2\" [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t\t\t<mat-option>Clear</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"valid\">Valid option</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"invalid\">Invalid option</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-hint>Errors appear instantly!</mat-hint>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"selected2.hasError('required')\">You must make a selection</mat-error>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"selected2.hasError('pattern') && !selected2.hasError('required')\">\r\n\t\t\t\t\t\t\tYour selection is invalid\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/select/select.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/select/select.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MyErrorStateMatcher, SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var basicSelect = {
    beforeCodeTitle: 'Basic select',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Favorite food\">\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{ food.viewValue }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic select\n*/\n@Component({\n  selector: 'select-overview-example',\n  templateUrl: 'select-overview-example.html',\n  styleUrls: ['select-overview-example.css'],\n})\nexport class SelectOverviewExample {\n  foods = [\n    {value: 'steak-0', viewValue: 'Steak'},\n    {value: 'pizza-1', viewValue: 'Pizza'},\n    {value: 'tacos-2', viewValue: 'Tacos'}\n  ];\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var selectWith2WayValueBinding = {
    beforeCodeTitle: 'Select with 2-way value binding',
    htmlCode: "\n<mat-form-field>\n  <mat-select [(value)]=\"selected\">\n    <mat-option>None</mat-option>\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\">Option 2</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n<p>You selected: {{selected}}</p>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Select with 2-way value binding */\n@Component({\n  selector: 'select-value-binding-example',\n  templateUrl: 'select-value-binding-example.html',\n  styleUrls: ['select-value-binding-example.css'],\n})\nexport class SelectValueBindingExample {\n  selected = 'option2';\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectInAForm = {
    beforeCodeTitle: 'Select in a form',
    htmlCode: "\n<form>\n  <mat-form-field>\n    <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\t<p> Selected value: {{selectedValue}} </p>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Select in a form\n*/\n@Component({\n  selector: 'select-form-example',\n  templateUrl: 'select-form-example.html',\n  styleUrls: ['select-form-example.css'],\n})\nexport class SelectFormExample {\n selectedValue: string;\n  foods = [\n    {value: 'steak-0', viewValue: 'Steak'},\n    {value: 'pizza-1', viewValue: 'Pizza'},\n    {value: 'tacos-2', viewValue: 'Tacos'}\n  ];\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithFormFieldFeature = {
    beforeCodeTitle: 'Select with form field features',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required>\n    <mat-option>--</mat-option>\n    <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n      {{animal.name}}\n\t</mat-option>\n  </mat-select>\n  <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\n\n/** @title Select with form field features */\n@Component({\n  selector: 'select-hint-error-example',\n  templateUrl: 'select-hint-error-example.html',\n  styleUrls: ['select-hint-error-example.css'],\n})\nexport class SelectHintErrorExample {\n  animalControl = new FormControl('', [Validators.required]);\n  animals = [\n    {name: 'Dog', sound: 'Woof!'},\n    {name: 'Cat', sound: 'Meow!'},\n    {name: 'Cow', sound: 'Moo!'},\n    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},\n  ];\n}\n",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithResetOption = {
    beforeCodeTitle: 'Select with reset option',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"State\">\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Select with reset option */\n@Component({\n  selector: 'select-reset-example',\n  templateUrl: 'select-reset-example.html',\n  styleUrls: ['select-reset-example.css'],\n})\nexport class SelectResetExample {\n  states = [\n    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',\n    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',\n    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',\n    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',\n    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',\n    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',\n    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'\n  ];\n}\n",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithOptionGroups = {
    beforeCodeTitle: 'Select with option groups',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n      [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n         {{ pokemon.viewValue }}\n        </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/** @title Select with option groups */\n@Component({\n  selector: 'select-optgroup-example',\n  templateUrl: 'select-optgroup-example.html',\n  styleUrls: ['select-optgroup-example.css'],\n})\nexport class SelectOptgroupExample {\n  pokemonControl = new FormControl();\n  pokemonGroups = [\n  {\n    name: 'Grass',\n    pokemon: [\n    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },\n    { value: 'oddish-1', viewValue: 'Oddish' },\n    { value: 'bellsprout-2', viewValue: 'Bellsprout' }\n  ]\n  },\n  {\n    name: 'Water',\n    pokemon: [\n    { value: 'squirtle-3', viewValue: 'Squirtle' },\n    { value: 'psyduck-4', viewValue: 'Psyduck' },\n    { value: 'horsea-5', viewValue: 'Horsea' }\n  ]\n  },\n  {\n    name: 'Fire',\n    disabled: true,\n    pokemon: [\n    { value: 'charmander-6', viewValue: 'Charmander' },\n    { value: 'vulpix-7', viewValue: 'Vulpix' },\n    { value: 'flareon-8', viewValue: 'Flareon' }\n  ]\n  },\n  {\n    name: 'Psychic',\n    pokemon: [\n    { value: 'mew-9', viewValue: 'Mew' },\n    { value: 'mewtwo-10', viewValue: 'Mewtwo' },\n  ]\n  }\n  ];\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithMultipleSelection = {
    beforeCodeTitle: 'Select with multiple selection',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/** @title Select with multiple selection */\n@Component({\n  selector: 'select-multiple-example',\n  templateUrl: 'select-multiple-example.html',\n  styleUrls: ['select-multiple-example.css'],\n})\nexport class SelectMultipleExample {\n  toppings = new FormControl();\n  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];\n}\n\t\t",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithCustomTriggerText = {
    beforeCodeTitle: 'Select with custom trigger text',
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-select-trigger>\n      {{toppings.value ? toppings.value[0] : ''}}\n      <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n        (+{{toppings.value.length - 1}} others)\n       </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/** @title Select with custom trigger text */\n@Component({\n  selector: 'select-custom-trigger-example',\n  templateUrl: 'select-custom-trigger-example.html',\n  styleUrls: ['select-custom-trigger-example.css'],\n})\nexport class SelectCustomTriggerExample {\n  toppings = new FormControl();\n  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];\n}",
    viewCode: "",
    cssCode: "\n.example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em;\n}",
    isCodeVisible: false
};
var selectWithNoOptionRipple = {
    beforeCodeTitle: 'Select with no option ripple',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Select an option\" disableRipple>\n    <mat-option value=\"1\">Option 1</mat-option>\n    <mat-option value=\"2\">Option 2</mat-option>\n    <mat-option value=\"3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Select with no option ripple */\n@Component({\n  selector: 'select-no-ripple-example',\n  templateUrl: 'select-no-ripple-example.html',\n  styleUrls: ['select-no-ripple-example.css'],\n})\nexport class SelectNoRippleExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithCustomPanelStyling = {
    beforeCodeTitle: 'Select with custom panel styling',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\"\n    panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/**\n* @title Select with custom panel styling\n*/\n@Component({\n  selector: 'select-panel-class-example',\n  templateUrl: 'select-panel-class-example.html',\n  styleUrls: ['select-panel-class-example.css'],\n  encapsulation: ViewEncapsulation.None,\n})\nexport class SelectPanelClassExample {\n  panelColor = new FormControl('red');\n}",
    viewCode: "",
    cssCode: "\n.example-panel-red .mat-select-content {\n  background: rgba(255, 0, 0, 0.5);\n}\n.example-panel-green .mat-select-content {\n  background: rgba(0, 255, 0, 0.5);\n}\n.example-panel-blue .mat-select-content {\n  background: rgba(0, 0, 255, 0.5);\n}",
    isCodeVisible: false
};
var selectWithACustomErrorStateMatcher = {
    beforeCodeTitle: 'Select with a custom ErrorStateMatcher',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Choose one\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\n    <mat-option>Clear</mat-option>\n    <mat-option value=\"valid\">Valid option</mat-option>\n    <mat-option value=\"invalid\">Invalid option</mat-option>\n  </mat-select>\n  <mat-hint>Errors appear instantly!</mat-hint>\n  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n  <mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">\n    Your selection is invalid\n  </mat-error>\n</mat-form-field>\n\t  \t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';\nimport {ErrorStateMatcher} from '@angular/material/core';\n\n/** Error when invalid control is dirty, touched, or submitted. */\nexport class MyErrorStateMatcher implements ErrorStateMatcher {\n  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {\n    const isSubmitted = form && form.submitted;\n    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));\n  }\n}\n\n/** @title Select with a custom ErrorStateMatcher */\n@Component({\n  selector: 'select-error-state-matcher-example',\n  templateUrl: 'select-error-state-matcher-example.html',\n  styleUrls: ['select-error-state-matcher-example.css'],\n})\nexport class SelectErrorStateMatcherExample {\n  selected = new FormControl('valid', [\n    Validators.required,\n    Validators.pattern('valid'),\n  ]);\n\n  matcher = new MyErrorStateMatcher();\n}",
    viewCode: "",
    cssCode: "\n\t\t",
    isCodeVisible: false
};
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppings2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.panelColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('red');
        this.toppingList2 = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
        this.selected = 'option2';
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
        this.animalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
        this.selected2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('valid', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.exampleBasicSelect = basicSelect;
        this.exampleSelectWith2WayValueBinding = selectWith2WayValueBinding;
        this.exampleSelectInAForm = selectInAForm;
        this.exampleSelectWithFormFieldFeature = selectWithFormFieldFeature;
        this.exampleSelectWithResetOption = selectWithResetOption;
        this.exampleSelectWithOptionGroups = selectWithOptionGroups;
        this.exampleSelectWithMultipleSelection = selectWithMultipleSelection;
        this.exampleSelectWithCustomTriggerText = selectWithCustomTriggerText;
        this.exampleSelectWithCustomPanelStyling = selectWithCustomPanelStyling;
        this.exampleSelectWithACustomErrorStateMatcher = selectWithACustomErrorStateMatcher;
    };
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/content/pages/components/material/formcontrols/select/select.component.html"),
            styles: ["\n\t.example-additional-selection {\n\t\topacity: 0.75;\n\t\tfont-size: 0.75em;\n\t  }\n\t  .example-panel-red .mat-select-content {\n\t\tbackground: rgba(255, 0, 0, 0.5);\n\t  }\n\t  .example-panel-green .mat-select-content {\n\t\tbackground: rgba(0, 255, 0, 0.5);\n\t  }\n\t  .example-panel-blue .mat-select-content {\n\t\tbackground: rgba(0, 0, 255, 0.5);\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/slider/slider.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/slider/slider.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/slider/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicSlider\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>mat-slider</code> allows for the selection of a value from a range via mouse, touch, or keyboard, similar to\r\n\t\t\t\t\t<code>&lt;input type=\"range\"&gt;</code>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-slider></mat-slider>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleChangeEvent\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>@Output() change: EventEmitter&lt;MatSliderChange&gt;</code> Event emitted when the slider value has changed.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"myValue\" min=\"0\" max=\"100\" step=\"1\"></mat-slider>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\" *ngIf=\"myValue\"></div>\r\n\t\t\t\t\t<span *ngIf=\"myValue\">Selected: <mark>{{ myValue }}</mark>%</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleConfigurableSlider\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\r\n\t\t\t\t\t\t\tAuto ticks\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<h5>Result</h5>\r\n\t\t\t\t\t<mat-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumbLabel]=\"thumbLabel\" [tickInterval]=\"tickInterval\" [(ngModel)]=\"value\" [vertical]=\"vertical\">\r\n\t\t\t\t\t</mat-slider>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/slider/slider.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/slider/slider.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicSlider = {
    beforeCodeTitle: 'Basic slider',
    htmlCode: "<mat-slider></mat-slider>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n * @title Basic slider\n */\n@Component({\n  selector: 'slider-overview-example',\n  templateUrl: 'slider-overview-example.html',\n  styleUrls: ['slider-overview-example.css'],\n})\nexport class SliderOverviewExample {}\n\t\t",
    cssCode: "\n/** No CSS for this example */\n.mat-slider {\n  width: 300px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var configurableSlider = {
    beforeCodeTitle: 'Configurable slider',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\n        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n     </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <mat-slider\n      class=\"example-margin\"\n      [disabled]=\"disabled\"\n      [invert]=\"invert\"\n      [max]=\"max\"\n      [min]=\"min\"\n      [step]=\"step\"\n      [thumb-label]=\"thumbLabel\"\n      [tick-interval]=\"tickInterval\"\n      [(ngModel)]=\"value\"\n      [vertical]=\"vertical\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\n\n/**\n* @title Configurable slider\n*/\n@Component({\n  selector: 'slider-configurable-example',\n  templateUrl: 'slider-configurable-example.html',\n  styleUrls: ['slider-configurable-example.css'],\n  encapsulation: ViewEncapsulation.None,\n  preserveWhitespaces: false,\n})\nexport class SliderConfigurableExample {\n  autoTicks = false;\n  disabled = false;\n  invert = false;\n  max = 100;\n  min = 0;\n  showTicks = false;\n  step = 1;\n  thumbLabel = false;\n  value = 0;\n  vertical = false;\n\n  get tickInterval(): number | 'auto' {\n    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;\n  }\n  set tickInterval(v) {\n    this._tickInterval = Number(v);\n  }\n  private _tickInterval = 1;\n}",
    viewCode: "",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 10px;\n}\n.mat-slider-horizontal {\n  width: 300px;\n}\n.mat-slider-vertical {\n  height: 300px;\n}",
    isCodeVisible: false
};
var changeEvent = {
    beforeCodeTitle: 'Change event binding',
    htmlCode: "\n<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"myValue\" min=\"0\" max=\"100\" step=\"1\"></mat-slider>\n<div class=\"m-separator m-separator--dashed\" *ngIf=\"myValue\"></div>\n<span *ngIf=\"myValue\">Selected: <mark>{{ myValue }}</mark>%</span>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'slider-change-event-example',\n  templateUrl: 'slider-change-event-example.html',\n  styleUrls: ['slider-change-event-example.css'],\n})\nexport class SliderChangeEventExample {\n\n  myValue = 50;\n  changeSlider() {\n    console.log('myValue:', this.myValue);\n  }\n}",
    cssCode: "\n.mat-slider {\n  width: 300px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
        this.myValue = 50;
    }
    Object.defineProperty(SliderComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnInit = function () {
        this.exampleBasicSlider = basicSlider;
        this.exampleConfigurableSlider = configurableSlider;
        this.exampleChangeEvent = changeEvent;
    };
    SliderComponent.prototype.changeSlider = function () {
        console.log('myValue', this.myValue);
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/content/pages/components/material/formcontrols/slider/slider.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.mat-slider {\n\t\twidth: 300px;\n\t}\n\t.example-margin {\n\t\t  margin: 15px;\n\t  }\n\t"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
        })
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/slidertoggle/slidertoggle.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/slidertoggle/slidertoggle.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/slide-toggle/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicSlideToggles\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>mat-slide-toggle</code> is an\r\n\t\t\t\t\t<mark>on/off</mark> control that can be toggled via clicking or dragging.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-slide-toggle>Slide me!</mat-slide-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleLabelPositions\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<code>@Input() labelPosition: 'before' | 'after'</code> Whether the label should appear after or before the slide-toggle. Defaults to 'after'\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<code>@Output() change: EventEmitter&lt;MatSlideToggleChange&gt;</code> An event will be dispatched each time the slide-toggle changes its value.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-slide-toggle [labelPosition]=\"labelPosition\">Slide me!</mat-slide-toggle>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleConfigurableSlideToggle\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<label class=\"example-margin\">Color:</label>\r\n\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"color\">\r\n\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\r\n\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\r\n\t\t\t\t\t\t\t\tAccent\r\n\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\r\n\t\t\t\t\t\t\t\tWarn\r\n\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<h5 class=\"example-h2\">Result</h5>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">\r\n\t\t\t\t\t\t\tSlide me!\r\n\t\t\t\t\t\t</mat-slide-toggle>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/formcontrols/slidertoggle/slidertoggle.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/formcontrols/slidertoggle/slidertoggle.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SlidertoggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidertoggleComponent", function() { return SlidertoggleComponent; });
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

var basicSlideToggles = {
    beforeCodeTitle: 'Basic slide-toggles',
    htmlCode: "<mat-slide-toggle>Slide me!</mat-slide-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic slide-toggles\n*/\n@Component({\n  selector: 'slide-toggle-overview-example',\n  templateUrl: 'slide-toggle-overview-example.html',\n  styleUrls: ['slide-toggle-overview-example.css'],\n})\nexport class SlideToggleOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var configurableSlideToggle = {
    beforeCodeTitle: 'Configurable slide-toggle',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <section class=\"example-section\">\n      <mat-slide-toggle\n        class=\"example-margin\"\n        [color]=\"color\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\">\n        Slide me!\n      </mat-slide-toggle>\n    </section>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Configurable slide-toggle\n*/\n@Component({\n  selector: 'slide-toggle-configurable-example',\n  templateUrl: 'slide-toggle-configurable-example.html',\n  styleUrls: ['slide-toggle-configurable-example.css'],\n})\nexport class SlideToggleConfigurableExample {\n  color = 'accent';\n  checked = false;\n  disabled = false;\n}\n\t\t",
    viewCode: "",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 10px;\n}\n\t\t",
    isCodeVisible: false
};
var labelPositions = {
    beforeCodeTitle: 'Label positions and \'Change\' event binding examples',
    htmlCode: "\n<mat-slide-toggle [labelPosition]=\"labelPosition\">Slide me!</mat-slide-toggle>\n<div class=\"m-separator m-separator--dashed\"></div>\n<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'slide-toggle-label-positions-example',\n  templateUrl: 'slide-toggle-lable-positions-example.html',\n  styleUrls: ['slide-toggle-label-positions--example.css'],\n})\nexport class SlideToggleLabelPositionsExample {\n\n  labelPosition: string = \"before\";\n\n  changeLablesPositions() {\n    this.labelPosition = this.labelPosition == \"before\" ? \"after\" : \"before\";\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var SlidertoggleComponent = /** @class */ (function () {
    function SlidertoggleComponent() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.labelPosition = 'before';
    }
    SlidertoggleComponent.prototype.ngOnInit = function () {
        this.exampleBasicSlideToggles = basicSlideToggles;
        this.exampleConfigurableSlideToggle = configurableSlideToggle;
        this.exampleLabelPositions = labelPositions;
    };
    SlidertoggleComponent.prototype.changeLablesPositions = function () {
        this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
    };
    SlidertoggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-slidertoggle',
            template: __webpack_require__(/*! ./slidertoggle.component.html */ "./src/app/content/pages/components/material/formcontrols/slidertoggle/slidertoggle.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-h2 {\n\t\tmargin: 10px;\n\t  }\n\t  .example-section {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\theight: 60px;\n\t  }\n\t  .example-margin {\n\t\tmargin: 10px;\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], SlidertoggleComponent);
    return SlidertoggleComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/layout/card/card.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/card/card.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/card/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicCards\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-card&gt;</code> is a content container for text, photos, and actions in the context of a single subject.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-card>Simple card</mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleCardWithTitle\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tIn addition to the aforementioned sections,\r\n\t\t\t\t\t<code>&lt;mat-card-header&gt;</code> gives the ability to add a rich header to a card.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-header>\r\n\t\t\t\t\t\t\t<div mat-card-avatar class=\"example-header-image\"></div>\r\n\t\t\t\t\t\t\t<mat-card-title>Shiba Inu</mat-card-title>\r\n\t\t\t\t\t\t\t<mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n\t\t\t\t\t\t</mat-card-header>\r\n\t\t\t\t\t\t<mat-card-content>Simple card</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"examplBigExample\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-card class=\"example-card\">\r\n\t\t\t\t\t\t<mat-card-header>\r\n\t\t\t\t\t\t\t<div mat-card-avatar class=\"example-header-image\"></div>\r\n\t\t\t\t\t\t\t<mat-card-title>Shiba Inu</mat-card-title>\r\n\t\t\t\t\t\t\t<mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n\t\t\t\t\t\t</mat-card-header>\r\n\t\t\t\t\t\t<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t\t<mat-card-actions>\r\n\t\t\t\t\t\t\t<button mat-button>LIKE</button>\r\n\t\t\t\t\t\t\t<button mat-button>SHARE</button>\r\n\t\t\t\t\t\t</mat-card-actions>\r\n\t\t\t\t\t</mat-card>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/layout/card/card.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/card/card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicCards = {
    beforeCodeTitle: 'Basic cards',
    htmlCode: "<mat-card>Simple card</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n/**\n* @title Basic cards\n*/\n@Component({\n  selector: 'card-overview-example',\n  templateUrl: 'card-overview-example.html',\n  styleUrls: ['card-overview-example.css'],\n})\nexport class CardOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var cardWithTitle = {
    beforeCodeTitle: 'Card header',
    htmlCode: "\n<mat-toolbar>\n  <mat-toolbar-row>\n    <span>First Row</span>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span>Second Row</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Card with title\n*/\n@Component({\nselector: 'card-title-example',\ntemplateUrl: 'card-title-example.html',\nstyleUrls: ['card-title-example.css'],\n})\nexport class CardTitleExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var bigExample = {
    beforeCodeTitle: 'Example with image',
    htmlCode: "\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n  </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Card with iamge\n*/\n@Component({\nselector: 'card-image-example',\ntemplateUrl: 'card-image-example.html',\nstyleUrls: ['card-image-example.css'],\n})\nexport class CardImageExample {}\n",
    cssCode: "\n.example-card {\n  max-width: 400px;\n}\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
        this.exampleBasicCards = basicCards;
        this.exampleCardWithTitle = cardWithTitle;
        this.examplBigExample = bigExample;
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/content/pages/components/material/layout/card/card.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-card {\n\t\tmax-width: 400px;\n\t  }\n\t.example-header-image {\n\t\tbackground-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n\t\tbackground-size: cover;\n\t  }\n\t"]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/layout/default-forms/default-forms.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/default-forms/default-forms.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-lg-6\">\r\n\t\t<div class=\"m-portlet\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tDefault Form Layout\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"m-form\">\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"m-form__section m-form__section--first\">\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\r\n\t\t\t\t\t\t\t\t\t\t<img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ state.name }}</span> |\r\n\t\t\t\t\t\t\t\t\t\t<small>Population: {{state.population}}</small>\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\" value=\"99.9\">\r\n\t\t\t\t\t\t\t\t<span matPrefix>$&nbsp;</span>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t<div class=\"m-form__actions m-form__actions\">\r\n\t\t\t\t\t\t<button mat-raised-button color=\"primary\" (click)=\"openSnackBar()\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\r\n\t\t<div class=\"m-portlet\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tHorizontal Form Layout\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"m-form\">\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"m-form__section m-form__section--first\">\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Full Name:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Email address:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput type=\"email\" placeholder=\"Enter email\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">State:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n\t\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\r\n\t\t\t\t\t\t\t\t\t\t\t<span>{{ state.name }}</span> |\r\n\t\t\t\t\t\t\t\t\t\t\t<small>Population: {{state.population}}</small>\r\n\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Progress:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container example-full-width\">\r\n\t\t\t\t\t\t\t\t<mat-slider></mat-slider>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Contact</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-icon matPrefix>local_phone</mat-icon>\r\n\t\t\t\t\t\t\t\t\t<input type=\"tel\" matInput placeholder=\"Phone number\">\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-form__group form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Communication:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-checkbox-inline\">\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t<div class=\"m-form__actions m-form__actions\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-3\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<button mat-raised-button color=\"accent\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-6\">\r\n\t\t<div class=\"m-portlet\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tForm Sections\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"m-form m-form--fit\">\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"m-form__section m-form__section--first\">\r\n\t\t\t\t\t\t<div class=\"m-form__heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-form__heading-title\">1. Customer Info:</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<mat-select placeholder=\"Favorite food\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n\t\t\t\t\t\t\t\t\t\t{{ food.viewValue }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t<label>Contact:</label>\r\n\t\t\t\t\t\t\t<div class=\"m-input-icon m-input-icon--left\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon matPrefix>local_phone</mat-icon>\r\n\t\t\t\t\t\t\t\t\t<input type=\"tel\" matInput placeholder=\"Phone number\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your phone number with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t<label for=\"\">Communication:</label>\r\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n\r\n\t\t\t\t\t<div class=\"m-form__section m-form__section--last\">\r\n\t\t\t\t\t\t<div class=\"m-form__heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-form__heading-title\">2. Payment Info:</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t<label for=\"\">Payment Method:</label>\r\n\t\t\t\t\t\t\t<div class=\"m-radio-list\">\r\n\t\t\t\t\t\t\t\t<mat-radio-group>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"1\">Credit Card</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"2\">Bitcoin</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"3\">Cash</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">Please select payment method:</mat-hint>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group m-form__group--last\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Amount\" type=\"number\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter amount</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\r\n\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\r\n\t\t\t\t\t\t<button mat-raised-button color=\"accent\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-lg-12\">\r\n\t\t<div class=\"m-portlet\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tHorizontal Form Sections\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"m-form m-form--label-align-right\">\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"m-form__section m-form__section--first\">\r\n\t\t\t\t\t\t<div class=\"m-form__heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-form__heading-title\">Customer Info:</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Full Name:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Email address:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Date of birth:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-form__group form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Communication:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n\r\n\t\t\t\t\t<div class=\"m-form__section m-form__section--last\">\r\n\t\t\t\t\t\t<div class=\"m-form__heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-form__heading-title\">Payment Info:</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-form__group form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Payment Method:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-radio-list\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-group>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"1\">Credit Card</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"2\">Bitcoin</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"3\">Cash</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-form__help\">Please select payment method</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Amount:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Amount\" type=\"number\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter amount</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t<div class=\"m-form__actions m-form__actions\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t\t\t<mat-slide-toggle [(ngModel)]=\"isHuman\" (change)=\"onChange($event)\" name=\"human1\"\t>I am not a robot</mat-slide-toggle>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" disabled=\"{{!isHuman}}\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\r\n\t\t<div class=\"m-portlet\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tBorder Seperator Form Groups\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator\">\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Full Name:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Email address:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Date of birth:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Favorite foods:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"dexample-full-width\">\r\n\t\t\t\t\t\t\t\t<mat-chip-list #chipList>\r\n\t\t\t\t\t\t\t\t\t<mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(fruit)\">\r\n\t\t\t\t\t\t\t\t\t\t{{fruit.name}}\r\n\t\t\t\t\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</mat-chip>\r\n\t\t\t\t\t\t\t\t\t<input placeholder=\"New food...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" />\r\n\t\t\t\t\t\t\t\t</mat-chip-list>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-form__group m-form__group--last form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Communication:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\r\n\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t\t\t<mat-slide-toggle [(ngModel)]=\"isHuman2\" (change)=\"onChange2($event)\" name=\"human2\">I am not a robot</mat-slide-toggle>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<button mat-raised-button color=\"accent\" disabled=\"{{!isHuman2}}\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\r\n\t\t<div class=\"m-portlet\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tDashed Seperator Form Groups\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed\">\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Full Name:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Email address:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Favorite food:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<mat-select placeholder=\"Favorite food\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n\t\t\t\t\t\t\t\t\t\t{{ food.viewValue }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-form__group m-form__group--last form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Communication:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\r\n\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/layout/default-forms/default-forms.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/default-forms/default-forms.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: State, DefaultFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFormsComponent", function() { return DefaultFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popups-and-modals/snackbar/pizza-party.component */ "./src/app/content/pages/components/material/popups-and-modals/snackbar/pizza-party.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());

var DefaultFormsComponent = /** @class */ (function () {
    function DefaultFormsComponent(snackBar) {
        var _this = this;
        this.snackBar = snackBar;
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.isHuman = true;
        this.isHuman2 = true;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.fruits = [
            { name: 'Pizza' },
            { name: 'Steak' },
            { name: 'Tacos' },
        ];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
    }
    DefaultFormsComponent.prototype.ngOnInit = function () { };
    DefaultFormsComponent.prototype.onChange = function (value) {
        this.isHuman = value.checked === true;
    };
    DefaultFormsComponent.prototype.onChange2 = function (value) {
        this.isHuman2 = value.checked === true;
    };
    DefaultFormsComponent.prototype.filterStates = function (name) {
        return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    DefaultFormsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    DefaultFormsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    DefaultFormsComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_5__["PizzaPartyComponent"], {
            duration: 500,
        });
    };
    DefaultFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-default-forms',
            template: __webpack_require__(/*! ./default-forms.component.html */ "./src/app/content/pages/components/material/layout/default-forms/default-forms.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\t.example-full-width {\n\t\twidth: 100%;\n\t  }\n\n\t .m-checkbox-inline > mat-checkbox {\n\t\t padding-right: 20px;\n\t }\n\t"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], DefaultFormsComponent);
    return DefaultFormsComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/layout/divider/divider.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/divider/divider.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/divider\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicDivider\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-divider&gt;</code> is a component that allows for Material styling of a line separator with various orientation options.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-list>\r\n\t\t\t\t\t\t<mat-list-item>Alabama</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Alaska</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Arizona</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Arizona</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>California</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Colorado</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Connecticut</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Delaware</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Florida</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleVertical\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tAdd the\r\n\t\t\t\t\t<mark>vertical</mark> attribute in order to set whether or not the divider is vertically-oriented.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-list>\r\n\t\t\t\t\t\t<mat-list-item>Item 1</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider [vertical]=\"true\"></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Item 2</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider [vertical]=\"true\"></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Item 3</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleList\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tDividers can be added to lists as a means of separating content into distinct sections. Inset dividers can also be added to provide the appearance of distinct elements in a list without cluttering content like avatar images or icons. Make sure to avoid adding an inset divider to the last element in a list, because it will overlap with the section divider.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-list>\r\n\t\t\t\t\t\t<h3 mat-subheader>Folders</h3>\r\n\t\t\t\t\t\t<mat-list-item *ngFor=\"let folder of folders\">\r\n\t\t\t\t\t\t\t<mat-icon mat-list-icon>folder</mat-icon>\r\n\t\t\t\t\t\t\t<h4 mat-line>{{folder.name}}</h4>\r\n\t\t\t\t\t\t\t<p mat-line> {{folder.updated | date}} </p>\r\n\t\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<h3 mat-subheader>Notes</h3>\r\n\t\t\t\t\t\t<mat-list-item *ngFor=\"let note of notes\">\r\n\t\t\t\t\t\t\t<mat-icon mat-list-icon>note</mat-icon>\r\n\t\t\t\t\t\t\t<h4 mat-line>{{note.name}}</h4>\r\n\t\t\t\t\t\t\t<p mat-line> {{note.updated | date}} </p>\r\n\t\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/layout/divider/divider.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/divider/divider.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerComponent", function() { return DividerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicDivider = {
    beforeCodeTitle: 'Basic divider',
    htmlCode: "\n\t\t<mat-list>\n\t\t<mat-list-item>Item 1</mat-list-item>\n\t\t<mat-divider></mat-divider>\n\t\t<mat-list-item>Item 2</mat-list-item>\n\t\t<mat-divider></mat-divider>\n\t\t<mat-list-item>Item 3</mat-list-item>\n\t  </mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic divider\n*/\n@Component({\n  selector: 'divider-overview-example',\n  templateUrl: 'divider-overview-example.html',\n  styleUrls: ['divider-overview-example.css'],\n})\nexport class DividerOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var verticalDivider = {
    beforeCodeTitle: 'Vertical divider',
    htmlCode: "\n<mat-divider [vertical]=\"true\"></mat-divider>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title vertical divider\n*/\n@Component({\n  selector: 'divider-vertical-example',\n  templateUrl: 'divider-vertical-example.html',\n  styleUrls: ['divider-vertical-example.css'],\n})\nexport class DividerVerticalExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var listExample = {
    beforeCodeTitle: 'Lists with inset dividers',
    htmlCode: "\n<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders; last as last\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>{{folder.name}}</h4>\n    <p mat-line class=\"demo-2\"> {{folder.updated}} </p>\n    <mat-divider [inset]=\"true\" *ngIf=\"!last\"></mat-divider>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 md-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon md-list-icon>note</mat-icon>\n    <h4 md-line>{{note.name}}</h4>\n    <p md-line class=\"demo-2\"> {{note.updated}} </p>\n  </mat-list-item>\n</mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title list divider\n*/\n@Component({\n  selector: 'divider-list-example',\n  templateUrl: 'divider-list-example.html',\n  styleUrls: ['divider-list-example.css'],\n})\nexport class DividerListExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var DividerComponent = /** @class */ (function () {
    function DividerComponent() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    DividerComponent.prototype.ngOnInit = function () {
        this.exampleBasicDivider = basicDivider;
        this.exampleVertical = verticalDivider;
        this.exampleList = listExample;
    };
    DividerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-divider',
            template: __webpack_require__(/*! ./divider.component.html */ "./src/app/content/pages/components/material/layout/divider/divider.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.mat-list-icon {\n\t\tcolor: rgba(0, 0, 0, 0.54);\n\t  }\n\t  .mat-toolbar > * + .mat-divider-vertical {\n\t\tmargin-right: 16px;\n\t}\n\t.mat-toolbar > .mat-divider-vertical + * {\n\t\tmargin-right: 24px;\n\t\tmargin-left: -1px;\n\t}\n\t"]
        })
    ], DividerComponent);
    return DividerComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/layout/expansion-panel/expansion-panel.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/expansion-panel/expansion-panel.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/expansion/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicPanel\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-expansion-panel&gt;</code> provides an expandable details-summary view.is a component that allows for Material styling of a line separator with various orientation options.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-accordion>\r\n\t\t\t\t\t\t<mat-expansion-panel>\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tPersonal data\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tType your name and age\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Age\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\t\t\t\t\t\t<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tSelf aware panel\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tCurrently I am {{panelOpenState ? 'open' : 'closed'}}\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t<p>I'm visible because I am open</p>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\t\t\t\t\t</mat-accordion>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleDisabledPanel\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tExpansion panels can be\r\n\t\t\t\t\t<mark>disabled</mark> using the disabled attribute. A disabled expansion panel can't be toggled by the user, but can still be manipulated programmatically.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-expansion-panel [disabled]=\"isDisabled\">\r\n\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\tThis is the expansion title\r\n\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\tThis is a summary of the content\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleAccordion\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-accordion class=\"example-headers-align\">\r\n\t\t\t\t\t\t<mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tPersonal data\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tType your name and age\r\n\t\t\t\t\t\t\t\t\t<mat-icon>account_circle</mat-icon>\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t<mat-action-row>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n\t\t\t\t\t\t\t</mat-action-row>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t\t\t<mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tDestination\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tType the country name\r\n\t\t\t\t\t\t\t\t\t<mat-icon>map</mat-icon>\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Country\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t<mat-action-row>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n\t\t\t\t\t\t\t</mat-action-row>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t\t\t<mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tDay of the trip\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tInform the date you wish to travel\r\n\t\t\t\t\t\t\t\t\t<mat-icon>date_range</mat-icon>\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\r\n\r\n\t\t\t\t\t\t\t<mat-action-row>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n\t\t\t\t\t\t\t</mat-action-row>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t\t</mat-accordion>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/layout/expansion-panel/expansion-panel.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/expansion-panel/expansion-panel.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicPanel = {
    beforeCodeTitle: 'Basic expansion panel',
    htmlCode: "\n<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n\t  <mat-panel-description>\n        Type your name and age\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Age\">\n    </mat-form-field>\n  </mat-expansion-panel>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n    (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic expansion panel\n*/\n@Component({\n  selector: 'expansion-overview-example',\n  templateUrl: 'expansion-overview-example.html',\n  styleUrls: ['expansion-overview-example.css'],\n})\nexport class ExpansionOverviewExample {\n  panelOpenState: boolean = false;\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var disabledPanel = {
    beforeCodeTitle: 'Disabling a panel',
    htmlCode: "\n<mat-expansion-panel [disabled]=\"isDisabled\">\n  <mat-expansion-panel-header>\n\tThis is the expansion title\n  </mat-expansion-panel-header>\n  <mat-panel-description>\n    This is a summary of the content\n  </mat-panel-description>\n</mat-expansion-panel>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Disabled expansion panel\n*/\n@Component({\n  selector: 'expansion-disabled-example',\n  templateUrl: 'expansion-disabled-example.html',\n  styleUrls: ['expansion-disabled-example.css'],\n})\nexport class ExpansionDisabledExample {\n  isDisabled: boolean = true;\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var accordion = {
    beforeCodeTitle: 'Expansion panel as accordion',
    htmlCode: "\n<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n\t  <mat-panel-description>\n\t\tType your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n    </mat-form-field>\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput placeholder=\"Country\">\n    </mat-form-field>\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n   </mat-expansion-panel>\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n\t  </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n     </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n</mat-accordion>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Expansion panel as accordion\n*/\n@Component({\n  selector: 'expansion-steps-example',\n  templateUrl: 'expansion-steps-example.html',\n  styleUrls: ['expansion-steps-example.css']\n})\nexport class ExpansionStepsExample {\n  step = 0;\n\n  setStep(index: number) {\n    this.step = index;\n  }\n\n  nextStep() {\n    this.step++;\n   }\n\n  prevStep() {\n    this.step--;\n  }\n}\n",
    cssCode: "\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ExpansionPanelComponent = /** @class */ (function () {
    function ExpansionPanelComponent() {
        this.panelOpenState = false;
        this.isDisabled = true;
        this.step = 0;
    }
    ExpansionPanelComponent.prototype.ngOnInit = function () {
        this.exampleBasicPanel = basicPanel;
        this.exampleDisabledPanel = disabledPanel;
        this.exampleAccordion = accordion;
    };
    ExpansionPanelComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionPanelComponent.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionPanelComponent.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-expansion-panel',
            template: __webpack_require__(/*! ./expansion-panel.component.html */ "./src/app/content/pages/components/material/layout/expansion-panel/expansion-panel.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\t"]
        })
    ], ExpansionPanelComponent);
    return ExpansionPanelComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/layout/grid-list/grid-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/grid-list/grid-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/grid-list\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n<m-material-preview [viewItem]=\"exampleBasicGrid\">\r\n\t<div class=\"m-section\">\r\n\t\t<span class=\"m-section__sub\">\r\n\t\t\t<code>&lt;mat-grid-list&gt;</code> is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec here.\r\n\t\t</span>\r\n\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n\t\t\t\t<mat-grid-tile>1</mat-grid-tile>\r\n\t\t\t\t<mat-grid-tile>2</mat-grid-tile>\r\n\t\t\t\t<mat-grid-tile>3</mat-grid-tile>\r\n\t\t\t\t<mat-grid-tile>4</mat-grid-tile>\r\n\t\t\t</mat-grid-list>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n\r\n<m-material-preview [viewItem]=\"exampleDynamicGrid\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n\t\t\t\t<mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\r\n\t\t\t\t\t{{tile.text}}\r\n\t\t\t\t</mat-grid-tile>\r\n\t\t\t</mat-grid-list>\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>"

/***/ }),

/***/ "./src/app/content/pages/components/material/layout/grid-list/grid-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/grid-list/grid-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: GridListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridListComponent", function() { return GridListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var dynamicGrid = {
    beforeCodeTitle: 'Dynamic grid-list',
    htmlCode: "\n<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n<mat-grid-tile\n*ngFor=\"let tile of tiles\"\n[colspan]=\"tile.cols\"\n[rowspan]=\"tile.rows\"\n[style.background]=\"tile.color\">\n{{tile.text}}\n</mat-grid-tile>\n</mat-grid-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Dynamic grid-list\n*/\n@Component({\nselector: 'grid-list-dynamic-example',\ntemplateUrl: 'grid-list-dynamic-example.html',\nstyleUrls: ['grid-list-dynamic-example.css'],\n})\nexport class GridListDynamicExample {\ntiles = [\n{text: 'One', cols: 3, rows: 1, color: 'lightblue'},\n{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},\n{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},\n{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},\n];\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var basicGrid = {
    beforeCodeTitle: 'Basic grid-list',
    htmlCode: "\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n<mat-grid-tile>1</mat-grid-tile>\n<mat-grid-tile>2</mat-grid-tile>\n<mat-grid-tile>3</mat-grid-tile>\n<mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic grid-list\n*/\n@Component({\nselector: 'grid-list-overview-example',\nstyleUrls: ['grid-list-overview-example.css'],\ntemplateUrl: 'grid-list-overview-example.html',\n})\nexport class GridListOverviewExample {}\n",
    cssCode: "\nmat-grid-tile {\nbackground: lightblue;\n}\n\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var GridListComponent = /** @class */ (function () {
    function GridListComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    GridListComponent.prototype.ngOnInit = function () {
        this.exampleBasicGrid = basicGrid;
        this.exampleDynamicGrid = dynamicGrid;
    };
    GridListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-grid-list',
            template: __webpack_require__(/*! ./grid-list.component.html */ "./src/app/content/pages/components/material/layout/grid-list/grid-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\tmat-grid-tile {\n\t\tbackground: lightblue;\n\t  }\n\t"]
        })
    ], GridListComponent);
    return GridListComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/layout/list/list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/list/list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/list/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicList\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-list&gt;</code> is a container component that wraps and formats a series of line items. As the base list component, it provides Material Design styling, but no behavior of its own.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-list role=\"list\">\r\n\t\t\t\t\t\t<mat-list-item role=\"listitem\">Item 1</mat-list-item>\r\n\t\t\t\t\t\t<mat-list-item role=\"listitem\">Item 2</mat-list-item>\r\n\t\t\t\t\t\t<mat-list-item role=\"listitem\">Item 3</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleListWithSelection\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tA selection list provides an interface for selecting values, where each list item is an option.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-selection-list #shoes>\r\n\t\t\t\t\t\t<mat-list-option *ngFor=\"let shoe of typesOfShoes\">\r\n\t\t\t\t\t\t\t{{shoe}}\r\n\t\t\t\t\t\t</mat-list-option>\r\n\t\t\t\t\t</mat-selection-list>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\tOptions selected: <mark>{{shoes.selectedOptions.selected.length}}</mark>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleListWithSection\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-list>\r\n\t\t\t\t\t\t<h3 mat-subheader>Folders</h3>\r\n\t\t\t\t\t\t<mat-list-item *ngFor=\"let folder of folders\">\r\n\t\t\t\t\t\t\t<mat-icon mat-list-icon>folder</mat-icon>\r\n\t\t\t\t\t\t\t<h4 mat-line>{{folder.name}}</h4>\r\n\t\t\t\t\t\t\t<p mat-line> {{folder.updated | date}} </p>\r\n\t\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<h3 mat-subheader>Notes</h3>\r\n\t\t\t\t\t\t<mat-list-item *ngFor=\"let note of notes\">\r\n\t\t\t\t\t\t\t<mat-icon mat-list-icon>note</mat-icon>\r\n\t\t\t\t\t\t\t<h4 mat-line>{{note.name}}</h4>\r\n\t\t\t\t\t\t\t<p mat-line> {{note.updated | date}} </p>\r\n\t\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/layout/list/list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/list/list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicList = {
    beforeCodeTitle: 'Basic list',
    htmlCode: "\n<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic list\n*/\n@Component({\n  selector: 'list-overview-example',\n  templateUrl: 'list-overview-example.html',\n  styleUrls: ['list-overview-example.css'],\n})\nexport class ListOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var listWithSelection = {
    beforeCodeTitle: 'List with selection',
    htmlCode: "\n<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title List with selection\n*/\n@Component({\n  selector: 'list-selection-example',\n  styleUrls: ['list-selection-example.css'],\n  templateUrl: 'list-selection-example.html',\n})\nexport class ListSelectionExample {\n  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var listWithSection = {
    beforeCodeTitle: 'List with sections',
    htmlCode: "\n<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n\t<h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title List with sections\n*/\n@Component({\n  selector: 'list-sections-example',\n  styleUrls: ['list-sections-example.css'],\ntemplateUrl: 'list-sections-example.html',\n})\nexport class ListSectionsExample {\n  folders = [\n  {\n    name: 'Photos',\n    updated: new Date('1/1/16'),\n  },\n  {\n    name: 'Recipes',\n    updated: new Date('1/17/16'),\n  },\n  {\n    name: 'Work',\n    updated: new Date('1/28/16'),\n  }\n  ];\n  notes = [\n  {\n    name: 'Vacation Itinerary',\n    updated: new Date('2/20/16'),\n  },\n  {\n    name: 'Kitchen Remodel',\n    updated: new Date('1/18/16'),\n  }\n  ];\n}\n",
    cssCode: "\n.mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.exampleBasicList = basicList;
        this.exampleListWithSelection = listWithSelection;
        this.exampleListWithSection = listWithSection;
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/content/pages/components/material/layout/list/list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.mat-list-icon {\n\t\tcolor: rgba(0, 0, 0, 0.54);\n\t  }\n\t"]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/layout/material-tabs/material-tabs.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/material-tabs/material-tabs.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/tabs/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<m-material-preview [viewItem]=\"exampleBasicTabs\">\r\n\t<div class=\"m-section\">\r\n\t\t<span class=\"m-section__sub\">\r\n\t\t\tAngular Material\r\n\t\t\t<mark>tabs</mark> organize content into separate views where only one view can be visible at a time. Each tab's label is shown in the tab header and the active tab's label is designated with the animated ink bar. When the list of tab labels exceeds the width of the header, pagination controls appear to let the user scroll left and right across the labels.\r\n\t\t</span>\r\n\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<mat-tab-group>\r\n\t\t\t\t<mat-tab label=\"Tab 1\">Content 1</mat-tab>\r\n\t\t\t\t<mat-tab label=\"Tab 2\">Content 2</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>\r\n\r\n\r\n<m-material-preview [viewItem]=\"exampleComplex\">\r\n\t<div class=\"m-section\">\r\n\t\t<div class=\"m-section__content\">\r\n\t\t\t<mat-card>\r\n\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t<h5 class=\"example-h2\">Tabs with text labels</h5>\r\n\t\t\t\t\t<mat-tab-group class=\"demo-tab-group\">\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 1\">\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 2\">\r\n\t\t\t\t\t\t\t<div \tclass=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 3\" disabled>\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 4\">\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 5\">\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 6\">\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t</mat-tab-group>\r\n\t\t\t\t</mat-card-content>\r\n\t\t\t</mat-card>\r\n\r\n\t\t\t<mat-card>\r\n\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t<h5 class=\"example-h2\">Tabs with icon labels</h5>\r\n\t\t\t\t\t<mat-tab-group class=\"demo-tab-group\">\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 1\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>security</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 2\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>attach_file</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 3\" disabled>\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>block</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 4\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>loop</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 5\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>build</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 6\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>thumb_down</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t</mat-tab-group>\r\n\t\t\t\t</mat-card-content>\r\n\t\t\t</mat-card>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</m-material-preview>"

/***/ }),

/***/ "./src/app/content/pages/components/material/layout/material-tabs/material-tabs.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/material-tabs/material-tabs.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MaterialTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTabsComponent", function() { return MaterialTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicTabs = {
    beforeCodeTitle: 'Basic tabs',
    htmlCode: "\n<mat-tab-group>\n  <mat-tab label=\"Tab 1\">Content 1</mat-tab>\n  <mat-tab label=\"Tab 2\">Content 2</mat-tab>\n</mat-tab-group>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic tabs\n*/\n@Component({\n  selector: 'tabs-overview-example',\n  templateUrl: 'tabs-overview-example.html',\n  styleUrls: ['tabs-overview-example.css'],\n})\nexport class TabsOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var complex = {
    beforeCodeTitle: 'Complex Example',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Tabs with text labels</h2>\n    <mat-tab-group class=\"demo-tab-group\">\n      <mat-tab label=\"Tab 1\">\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 2\">\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 3\" disabled>\n        No content\n      </mat-tab>\n      <mat-tab label=\"Tab 4\">\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n          <br />\n          <br />\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 5\">\n        No content\n      </mat-tab>\n      <mat-tab label=\"Tab 6\">\n        No content\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Tabs with icon labels</h2>\n    <mat-tab-group class=\"demo-tab-group\">\n      <mat-tab label=\"Tab 1\">\n        <ng-template mat-tab-label>\n          <mat-icon>security</mat-icon>\n        </ng-template>\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n\t\t  In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 2\">\n        <ng-template mat-tab-label>\n          <mat-icon>attach_file</mat-icon>\n        </ng-template>\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 3\" disabled>\n        <ng-template mat-tab-label>\n          <mat-icon>block</mat-icon>\n        </ng-template>\n        No content\n      </mat-tab>\n      <mat-tab label=\"Tab 4\">\n        <ng-template mat-tab-label>\n          <mat-icon>loop</mat-icon>\n        </ng-template>\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n          <br />\n          <br />\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n\t\t</div>\n      </mat-tab>\n      <mat-tab label=\"Tab 5\">\n        <ng-template mat-tab-label>\n          <mat-icon>build</mat-icon>\n        </ng-template>\n        No content\n      </mat-tab>\n\t  <mat-tab label=\"Tab 6\">\n        <ng-template mat-tab-label>\n          <mat-icon>thumb_down</mat-icon>\n        </ng-template>\n        No content\n\t  </mat-tab>\n\t</mat-tab-group>\n  </mat-card-content>\n</mat-card>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Complex Example\n*/\n@Component({\n  selector: 'tabs-template-label-example',\n  templateUrl: 'tabs-template-label-example.html',\n  styleUrls: ['./tabs-template-label-example.css']\n  })\nexport class TabsTemplateLabelExample {}\n",
    cssCode: "\n.demo-tab-group {\n  border: 1px solid #e8e8e8;\n}\n.demo-tab-content {\n  padding: 16px;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var MaterialTabsComponent = /** @class */ (function () {
    function MaterialTabsComponent() {
    }
    MaterialTabsComponent.prototype.ngOnInit = function () {
        this.exampleBasicTabs = basicTabs;
        this.exampleComplex = complex;
    };
    MaterialTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-material-tabs',
            template: __webpack_require__(/*! ./material-tabs.component.html */ "./src/app/content/pages/components/material/layout/material-tabs/material-tabs.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.demo-tab-group {\n\t\tborder: 1px solid #e8e8e8;\n\t  }\n\t  .demo-tab-content {\n\t\tpadding: 16px;\n\t  }\n\t"]
        })
    ], MaterialTabsComponent);
    return MaterialTabsComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/layout/stepper/stepper.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/stepper/stepper.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/list/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicStepper\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tAngular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-vertical-stepper>\r\n\t\t\t\t\t\t<mat-step label=\"Step 1\">\r\n\t\t\t\t\t\t\tContent 1\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t\t<mat-step label=\"Step 1\">\r\n\t\t\t\t\t\t\tContent 2\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t</mat-vertical-stepper>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleHorizontalStepper\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThe only difference is the orientation of stepper.\r\n\t\t\t\t\t<code>&lt;mat-horizontal-steppert&gt;</code> selector can be used to create a horizontal stepper\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-horizontal-stepper>\r\n\t\t\t\t\t\t<mat-step label=\"Step 1\">\r\n\t\t\t\t\t\t\tContent 1\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t\t<mat-step label=\"Step 1\">\r\n\t\t\t\t\t\t\tContent 2\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t</mat-horizontal-stepper>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleStepperOverview\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\r\n\r\n\t\t\t\t\t<mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\r\n\t\t\t\t\t\t<mat-step [stepControl]=\"firstFormGroup\">\r\n\t\t\t\t\t\t\t<form [formGroup]=\"firstFormGroup\">\r\n\t\t\t\t\t\t\t\t<ng-template matStepLabel>Fill out your name</ng-template>\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<button mat-button matStepperNext>Next</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t\t<mat-step [stepControl]=\"secondFormGroup\">\r\n\t\t\t\t\t\t\t<form [formGroup]=\"secondFormGroup\">\r\n\t\t\t\t\t\t\t\t<ng-template matStepLabel>Fill out your address</ng-template>\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<button mat-button matStepperPrevious>Back</button>\r\n\t\t\t\t\t\t\t\t\t<button mat-button matStepperNext>Next</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t\t<mat-step>\r\n\t\t\t\t\t\t\t<ng-template matStepLabel>Done</ng-template>\r\n\t\t\t\t\t\t\tYou are now done.\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<button mat-button matStepperPrevious>Back</button>\r\n\t\t\t\t\t\t\t\t<button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t</mat-horizontal-stepper>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/layout/stepper/stepper.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/stepper/stepper.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var basicStepper = {
    beforeCodeTitle: 'Basic stepper',
    htmlCode: "\n<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n     <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormBuilder, FormGroup, Validators} from '@angular/forms';\n/**\n* @title Stepper overview\n*/\n@Component({\n  selector: 'stepper-overview-example',\n  templateUrl: 'stepper-overview-example.html',\n  styleUrls: ['stepper-overview-example.css']\n})\nexport class StepperOverviewExample {\n  isLinear = false;\n  firstFormGroup: FormGroup;\n  secondFormGroup: FormGroup;\n  constructor(private _formBuilder: FormBuilder) { }\n  ngOnInit() {\n    this.firstFormGroup = this._formBuilder.group({\n      firstCtrl: ['', Validators.required]\n    });\n    this.secondFormGroup = this._formBuilder.group({\n      secondCtrl: ['', Validators.required]\n    });\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var horizontalStepper = {
    beforeCodeTitle: 'Horizontal stepper',
    htmlCode: "\n<mat-horizontal-stepper>\n  <mat-step label=\"Step 1\">\n    Content 1\n  </mat-step>\n  <mat-step label=\"Step 1\">\n    Content 2\n  </mat-step>\n</mat-horizontal-stepper>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Horizontal stepper\n*/\n@Component({\n  selector: 'stepper-horizontal-example',\n  styleUrls: ['stepper-horizontal-example.css'],\n  templateUrl: 'stepper-horizontal-example.html',\n})\nexport class StepperHorizontalExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var stepperOverview = {
    beforeCodeTitle: 'Stepper overview',
    htmlCode: "\n<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n\t<h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title List with sections\n*/\n@Component({\n  selector: 'list-sections-example',\n  styleUrls: ['list-sections-example.css'],\ntemplateUrl: 'list-sections-example.html',\n})\nexport class ListSectionsExample {\n  folders = [\n  {\n    name: 'Photos',\n    updated: new Date('1/1/16'),\n  },\n  {\n    name: 'Recipes',\n    updated: new Date('1/17/16'),\n  },\n  {\n    name: 'Work',\n    updated: new Date('1/28/16'),\n  }\n  ];\n  notes = [\n  {\n    name: 'Vacation Itinerary',\n    updated: new Date('2/20/16'),\n  },\n  {\n    name: 'Kitchen Remodel',\n    updated: new Date('1/18/16'),\n  }\n  ];\n}\n",
    cssCode: "\n.mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var StepperComponent = /** @class */ (function () {
    function StepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    StepperComponent.prototype.ngOnInit = function () {
        this.exampleBasicStepper = basicStepper;
        this.exampleHorizontalStepper = horizontalStepper;
        this.exampleStepperOverview = stepperOverview;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    StepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-stepper',
            template: __webpack_require__(/*! ./stepper.component.html */ "./src/app/content/pages/components/material/layout/stepper/stepper.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StepperComponent);
    return StepperComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/layout/tree/tree.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/tree/tree.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/tree/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleTreeWithDynamicData\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThe\r\n\t\t\t\t\t<code>mat-tree</code> provides a Material Design styled tree that can be used to display hierarchy data.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t{{node.item}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t\t\t\t\t\t\t{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t{{node.item}}\r\n\t\t\t\t\t\t\t<mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"example-tree-progress-bar\"></mat-progress-bar>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t</mat-tree>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleTreeWithFlatNodes\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-tree [dataSource]=\"dataSource2\" [treeControl]=\"treeControl2\">\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t{{node.filename}} : {{node.type}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node;when: hasChild2\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\">\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t\t\t\t\t\t\t{{treeControl2.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t{{node.filename}} : {{node.type}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t</mat-tree>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleTreeWithCheckboxes\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-tree [dataSource]=\"dataSource3\" [treeControl]=\"treeControl3\">\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t<mat-checkbox class=\"checklist-leaf-node\" [checked]=\"checklistSelection3.isSelected(node)\" (change)=\"checklistSelection3.toggle(node);\">{{node.item}}</mat-checkbox>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent3\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput #itemValue placeholder=\"New item...\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<button mat-button (click)=\"saveNode3(node, itemValue.value)\">Save</button>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: hasChild3\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\">\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t\t\t\t\t\t\t{{treeControl3.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<mat-checkbox [checked]=\"descendantsAllSelected3(node)\" [indeterminate]=\"descendantsPartiallySelected3(node)\" (change)=\"todoItemSelectionToggle3(node)\">{{node.item}}</mat-checkbox>\r\n\t\t\t\t\t\t\t<button mat-icon-button (click)=\"addNewItem3(node)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>add</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t</mat-tree>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleTreeWithPartiallyLoadedData\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-tree [dataSource]=\"dataSource4\" [treeControl]=\"treeControl4\">\r\n\t\t\t\t\t\t<!-- Leaf node -->\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t{{node.item}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<!-- expandable node -->\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: hasChild4\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" (click)=\"loadChildren4(node)\" matTreeNodeToggle>\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t\t\t\t\t\t\t{{treeControl4.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t{{node.item}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore4\">\r\n\t\t\t\t\t\t\t<button mat-button (click)=\"loadMore4(node.loadMoreParentItem)\">\r\n\t\t\t\t\t\t\t\tLoad more...\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t</mat-tree>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/layout/tree/tree.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/material/layout/tree/tree.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FileNode, FileFlatNode, FileDatabase, DynamicFlatNode, DynamicDatabase, DynamicDataSource, TodoItemNode, TodoItemFlatNode, ChecklistDatabase, LoadmoreNode, LoadmoreFlatNode, LoadmoreDatabase, TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFlatNode", function() { return FileFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDatabase", function() { return FileDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function() { return DynamicFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function() { return DynamicDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function() { return DynamicDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmoreNode", function() { return LoadmoreNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmoreFlatNode", function() { return LoadmoreFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmoreDatabase", function() { return LoadmoreDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var treeWithDynamicData = {
    beforeCodeTitle: 'Tree with dynamic data',
    htmlCode: "\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n      [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n      mode=\"indeterminate\"\n      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>",
    tsCode: "\nimport {CollectionViewer, SelectionChange} from '@angular/cdk/collections';\nimport {FlatTreeControl} from '@angular/cdk/tree';\nimport {Component, Injectable} from '@angular/core';\nimport {BehaviorSubject, merge, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n/** Flat node with expandable and level information */\nexport class DynamicFlatNode {\n  constructor(public item: string, public level = 1, public expandable = false,\n    public isLoading = false) {}\n  }\n\n  /**\n  * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch\n  * the descendants data from the database.\n  */\n  export class DynamicDatabase {\n    dataMap = new Map<string, string[]>([\n      ['Vegetables', ['Tomato', 'Potato', 'Onion']],\n      ['Apple', ['Fuji', 'Macintosh']],\n      ['Onion', ['Yellow', 'White', 'Purple']]\n    ]);\n\n    rootLevelNodes: string[] = ['Fruits', 'Vegetables'];\n    /** Initial data from database */\n    initialData(): DynamicFlatNode[] {\n    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));\n  }\n\n  getChildren(node: string): string[] | undefined {\n    return this.dataMap.get(node);\n  }\n\n  isExpandable(node: string): boolean {\n    return this.dataMap.has(node);\n  }\n}\n\n/**\n* File database, it can build a tree structured Json object from string.\n* Each node in Json object represents a file or a directory. For a file, it has filename and type.\n* For a directory, it has filename and children (a list of files or directories).\n* The input will be a json object string, and the output is a list of `FileNode` with nested\n* structure.\n*/\n@Injectable()\nexport class DynamicDataSource {\n\n  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);\n\n  get data(): DynamicFlatNode[] { return this.dataChange.value; }\n  set data(value: DynamicFlatNode[]) {\n    this.treeControl.dataNodes = value;\n    this.dataChange.next(value);\n  }\n\n  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,\n    private database: DynamicDatabase) {}\n\n  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {\n    this.treeControl.expansionModel.onChange!.subscribe(change => {\n    if ((change as SelectionChange<DynamicFlatNode>).added ||\n      (change as SelectionChange<DynamicFlatNode>).removed) {\n        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);\n      }\n    });\n\n    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));\n  }\n\n\n  /** Handle expand/collapse behaviors */\n  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {\n    if (change.added) {\n      change.added.forEach(node => this.toggleNode(node, true));\n    }\n    if (change.removed) {\n      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));\n    }\n  }\n\n\n  /**\n  * Toggle the node, remove from display list\n  */\n  toggleNode(node: DynamicFlatNode, expand: boolean) {\n    const children = this.database.getChildren(node.item);\n    const index = this.data.indexOf(node);\n    if (!children || index < 0) { // If no children, or cannot find the node, no op\n      return;\n    }\n\n\n    node.isLoading = true;\n\n    setTimeout(() => {\n      if (expand) {\n        const nodes = children.map(name =>\n          new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));\n          this.data.splice(index + 1, 0, ...nodes);\n      } else {\n        let count = 0;\n        for (let i = index + 1; i < this.data.length\n          && this.data[i].level > node.level; i++, count++) {}\n          this.data.splice(index + 1, count);\n        }\n\n\n        // notify the change\n        this.dataChange.next(this.data);\n        node.isLoading = false;\n    }, 1000);\n  }\n}\n\n\n/**\n* @title Tree with dynamic data\n*/\n@Component({\n  selector: 'tree-dynamic-example',\n  templateUrl: 'tree-dynamic-example.html',\n  styleUrls: ['tree-dynamic-example.css'],\n  providers: [DynamicDatabase]\n})\nexport class TreeDynamicExample {\n  constructor(database: DynamicDatabase) {\n    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);\n    this.dataSource = new DynamicDataSource(this.treeControl, database);\n\n    this.dataSource.data = database.initialData();\n  }\n\n  treeControl: FlatTreeControl<DynamicFlatNode>;\n\n  dataSource: DynamicDataSource;\n\n  getLevel = (node: DynamicFlatNode) => node.level;\n\n  isExpandable = (node: DynamicFlatNode) => node.expandable;\n\n  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var treeWithFlatNodes = {
    beforeCodeTitle: 'Tree with flat nodes',
    htmlCode: "\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n      [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n</mat-tree>",
    tsCode: "\nimport {FlatTreeControl} from '@angular/cdk/tree';\nimport {Component, Injectable} from '@angular/core';\nimport {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';\nimport {BehaviorSubject, Observable, of as observableOf} from 'rxjs';\n\n/**\n* File node data with nested structure.\n* Each node has a filename, and a type or a list of children.\n*/\nexport class FileNode {\n  children: FileNode[];\n  filename: string;\n  type: any;\n}\n\n/** Flat node with expandable and level information */\n  export class FileFlatNode {\n  constructor(\n  public expandable: boolean, public filename: string, public level: number, public type: any) {}\n\n}\n\n/**\n* The file structure tree data in string. The data could be parsed into a Json object\n*/\nconst TREE_DATA = JSON.stringify({\n  Applications: {\n    Calendar: 'app',\n    Chrome: 'app',\n    Webstorm: 'app'\n  },\n  Documents: {\n    angular: {\n      src: {\n        compiler: 'ts',\n        core: 'ts'\n      }\n    },\n    material2: {\n      src: {\n        button: 'ts',\n        checkbox: 'ts',\n        input: 'ts'\n      }\n    }\n  },\n  Downloads: {\n    October: 'pdf',\n    November: 'pdf',\n    Tutorial: 'html'\n  },\n  Pictures: {\n    'Photo Booth Library': {\n      Contents: 'dir',\n      Pictures: 'dir'\n    },\n    Sun: 'png',\n    Woods: 'jpg'\n   }\n});\n\n/**\n* File database, it can build a tree structured Json object from string.\n* Each node in Json object represents a file or a directory. For a file, it has filename and type.\n* For a directory, it has filename and children (a list of files or directories).\n* The input will be a json object string, and the output is a list of `FileNode` with nested\n* structure.\n*/\n@Injectable()\n  export class FileDatabase {\n  dataChange = new BehaviorSubject<FileNode[]>([]);\n\n  get data(): FileNode[] { return this.dataChange.value; }\n\n  constructor() {\n    this.initialize();\n  }\n\n  initialize() {\n    // Parse the string to json object.\n    const dataObject = JSON.parse(TREE_DATA);\n\n    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested\n    //     file node as children.\n    const data = this.buildFileTree(dataObject, 0);\n\n    // Notify the change.\n    this.dataChange.next(data);\n  }\n\n  /**\n  * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.\n  * The return value is the list of `FileNode`.\n  */\n  buildFileTree(obj: object, level: number): FileNode[] {\n    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {\n    const value = obj[key];\n    const node = new FileNode();\n    node.filename = key;\n\n     if (value != null) {\n       if (typeof value === 'object') {\n         node.children = this.buildFileTree(value, level + 1);\n       } else {\n         node.type = value;\n       }\n      }\n\n      return accumulator.concat(node);\n    }, []);\n  }\n}\n\n\n/**\n* @title Tree with flat nodes\n*/\n@Component({\n  selector: 'tree-flat-overview-example',\n  templateUrl: 'tree-flat-overview-example.html',\n  styleUrls: ['tree-flat-overview-example.css'],\n  providers: [FileDatabase]\n})\nexport class TreeFlatOverviewExample {\n  treeControl: FlatTreeControl<FileFlatNode>;\n  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;\n  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;\n\n  constructor(database: FileDatabase) {\n    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,\n    this._isExpandable, this._getChildren);\n    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);\n    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);\n\n    database.dataChange.subscribe(data => this.dataSource.data = data);\n  }\n\n  transformer = (node: FileNode, level: number) => {\n    return new FileFlatNode(!!node.children, node.filename, level, node.type);\n  }\n\n  private _getLevel = (node: FileFlatNode) => node.level;\n  private _isExpandable = (node: FileFlatNode) => node.expandable;\n  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);\n  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var treeWithCheckboxes = {
    beforeCodeTitle: 'Tree with checkboxes',
    htmlCode: "\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n      [checked]=\"checklistSelection.isSelected(node)\"\n      (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n     <button mat-icon-button disabled></button>\n     <mat-form-field>\n       <input matInput #itemValue placeholder=\"New item...\">\n     </mat-form-field>\n     <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n      [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n      [indeterminate]=\"descendantsPartiallySelected(node)\"\n      (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>",
    tsCode: "\nimport {SelectionModel} from '@angular/cdk/collections';\nimport {FlatTreeControl} from '@angular/cdk/tree';\nimport {Component, Injectable} from '@angular/core';\nimport {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';\nimport {BehaviorSubject} from 'rxjs';\n\n/**\n* Node for to-do item\n*/\nexport class TodoItemNode {\n  children: TodoItemNode[];\n  item: string;\n}\n\n/** Flat to-do item node with expandable and level information */\nexport class TodoItemFlatNode {\n  item: string;\n  level: number;\n  expandable: boolean;\n}\n\n/**\n* The Json object for to-do list data.\n*/\nconst TREE_DATA = {\n  Groceries: {\n    'Almond Meal flour': null,\n    'Organic eggs': null,\n    'Protein Powder': null,\n    Fruits: {\n      Apple: null,\n      Berries: ['Blueberry', 'Raspberry'],\n      Orange: null\n    }\n  },\n  Reminders: [\n    'Cook dinner',\n    'Read the Material Design spec',\n    'Upgrade Application to Angular'\n  ]\n};\n\n/**\n* Checklist database, it can build a tree structured Json object.\n* Each node in Json object represents a to-do item or a category.\n* If a node is a category, it has children items and new items can be added under the category.\n*/\n@Injectable()\nexport class ChecklistDatabase {\n  dataChange = new BehaviorSubject<TodoItemNode[]>([]);\n\n  get data(): TodoItemNode[] { return this.dataChange.value; }\n\n  constructor() {\n    this.initialize();\n  }\n\n  initialize() {\n    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested\n    //     file node as children.\n    const data = this.buildFileTree(TREE_DATA, 0);\n\n    // Notify the change.\n    this.dataChange.next(data);\n  }\n\n  /**\n  * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.\n  * The return value is the list of `TodoItemNode`.\n  */\n  buildFileTree(obj: object, level: number): TodoItemNode[] {\n    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {\n      const value = obj[key];\n      const node = new TodoItemNode();\n      node.item = key;\n\n      if (value != null) {\n        if (typeof value === 'object') {\n          node.children = this.buildFileTree(value, level + 1);\n        } else {\n          node.item = value;\n        }\n      }\n\n      return accumulator.concat(node);\n    }, []);\n  }\n\n/** Add an item to to-do list */\n  insertItem(parent: TodoItemNode, name: string) {\n    if (parent.children) {\n      parent.children.push({item: name} as TodoItemNode);\n      this.dataChange.next(this.data);\n    }\n  }\n\n  updateItem(node: TodoItemNode, name: string) {\n    node.item = name;\n\tthis.dataChange.next(this.data);\n  }\n}\n\n/**\n* @title Tree with checkboxes\n*/\n@Component({\n  selector: 'tree-checklist-example',\n  templateUrl: 'tree-checklist-example.html',\n  styleUrls: ['tree-checklist-example.css'],\n  providers: [ChecklistDatabase]\n)\nexport class TreeChecklistExample {\n  /** Map from flat node to nested node. This helps us finding the nested node to be modified */\n  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();\n\n  /** Map from nested node to flattened node. This helps us to keep the same object for selection */\n  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();\n\n  /** A selected parent node to be inserted */\n  selectedParent: TodoItemFlatNode | null = null;\n\n  /** The new item's name */\n  newItemName = '';\n\n  treeControl: FlatTreeControl<TodoItemFlatNode>;\n\n  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;\n\n  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;\n\n  /** The selection for checklist */\n  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);\n\n  constructor(private database: ChecklistDatabase) {\n    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,\n    this.isExpandable, this.getChildren);\n    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);\n    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);\n\n    database.dataChange.subscribe(data => {\n      this.dataSource.data = data;\n    });\n  }\n\n  getLevel = (node: TodoItemFlatNode) => node.level;\n\n  isExpandable = (node: TodoItemFlatNode) => node.expandable;\n\n  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;\n\n  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;\n\n  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';\n\n  /**\n  * Transformer to convert nested node to flat node. Record the nodes in maps for later use.\n  */\n  transformer = (node: TodoItemNode, level: number) => {\n    const existingNode = this.nestedNodeMap.get(node);\n    const flatNode = existingNode && existingNode.item === node.item\n      ? existingNode\n      : new TodoItemFlatNode();\n    flatNode.item = node.item;\n    flatNode.level = level;\n    flatNode.expandable = !!node.children;\n    this.flatNodeMap.set(flatNode, node);\n    this.nestedNodeMap.set(node, flatNode);\n    return flatNode;\n  }\n\n  /** Whether all the descendants of the node are selected */\n  descendantsAllSelected(node: TodoItemFlatNode): boolean {\n  const descendants = this.treeControl.getDescendants(node);\n     return descendants.every(child => this.checklistSelection.isSelected(child));\n  }\n\n  /** Whether part of the descendants are selected */\n  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {\n  const descendants = this.treeControl.getDescendants(node);\n  const result = descendants.some(child => this.checklistSelection.isSelected(child));\n    return result && !this.descendantsAllSelected(node);\n  }\n\n  /** Toggle the to-do item selection. Select/deselect all the descendants node */\n  todoItemSelectionToggle(node: TodoItemFlatNode): void {\n    this.checklistSelection.toggle(node);\n    const descendants = this.treeControl.getDescendants(node);\n    this.checklistSelection.isSelected(node) ? this.checklistSelection.select(...descendants)\n      : this.checklistSelection.deselect(...descendants);\n  }\n\n  /** Select the category so we can insert the new item. */\n  addNewItem(node: TodoItemFlatNode) {\n    const parentNode = this.flatNodeMap.get(node);\n    this.database.insertItem(parentNode!, '');\n    this.treeControl.expand(node);\n  }\n\n  /** Save the node to database */\n  saveNode(node: TodoItemFlatNode, itemValue: string) {\n    const nestedNode = this.flatNodeMap.get(node);\n    this.database.updateItem(nestedNode!, itemValue);\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var treeWithPartiallyLoadedData = {
    beforeCodeTitle: 'Tree with partially loaded data',
    htmlCode: "\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n      {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n      [attr.aria-label]=\"'toggle ' + node.filename\"\n      (click)=\"loadChildren(node)\"\n      matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n   </button>\n   {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>",
    tsCode: "\n/**\n* @license\n* Copyright Google LLC All Rights Reserved.\n*\n* Use of this source code is governed by an MIT-style license that can be\n* found in the LICENSE file at https://angular.io/license\n*/\nimport {FlatTreeControl} from '@angular/cdk/tree';\nimport {Component, Injectable} from '@angular/core';\nimport {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';\nimport {BehaviorSubject, Observable} from 'rxjs';\n\nconst LOAD_MORE = 'LOAD_MORE';\n/** Nested node */\nexport class LoadmoreNode {\n  childrenChange = new BehaviorSubject<LoadmoreNode[]>([]);\n\n  get children(): LoadmoreNode[] {\n    return this.childrenChange.value;\n  }\n\n  constructor(public item: string,\n  public hasChildren = false,\n  public loadMoreParentItem: string | null = null) {}\n}\n\n/** Flat node with expandable and level information */\nexport class LoadmoreFlatNode {\n  constructor(public item: string,\n  public level = 1,\n  public expandable = false,\n  public loadMoreParentItem: string | null = null) {}\n}\n\n/**\n* A database that only load part of the data initially. After user clicks on the `Load more`\n* button, more data will be loaded.\n*/\n@Injectable()\nexport class LoadmoreDatabase {\n  batchNumber = 5;\n  dataChange = new BehaviorSubject<LoadmoreNode[]>([]);\n  nodeMap = new Map<string, LoadmoreNode>();\n\n  /** The data */\n  rootLevelNodes: string[] = ['Vegetables', 'Fruits'];\n  dataMap = new Map<string, string[]>([\n    ['Fruits', ['Apple', 'Orange', 'Banana']],\n    ['Vegetables', ['Tomato', 'Potato', 'Onion']],\n    ['Apple', ['Fuji', 'Macintosh']],\n    ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],\n  ]);\n\n  initialize() {\n    const data = this.rootLevelNodes.map(name => this._generateNode(name));\n    this.dataChange.next(data);\n  }\n\n  /** Expand a node whose children are not loaded */\n  loadMore(item: string, onlyFirstTime = false) {\n    if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {\n      return;\n    }\n    const parent = this.nodeMap.get(item)!;\n    const children = this.dataMap.get(item)!;\n    if (onlyFirstTime && parent.children!.length > 0) {\n      return;\n    }\n    const newChildrenNumber = parent.children!.length + this.batchNumber;\n    const nodes = children.slice(0, newChildrenNumber).map(name => this._generateNode(name));\n    if (newChildrenNumber < children.length) {\n    // Need a new load more node\n      nodes.push(new LoadmoreNode(LOAD_MORE, false, item));\n    }\n\n    parent.childrenChange.next(nodes);\n    this.dataChange.next(this.dataChange.value);\n  }\n\n  private _generateNode(item: string): LoadmoreNode {\n    if (this.nodeMap.has(item)) {\n      return this.nodeMap.get(item)!;\n    }\n    const result = new LoadmoreNode(item, this.dataMap.has(item));\n    this.nodeMap.set(item, result);\n    return result;\n  }\n}\n\n/**\n* @title Tree with partially loaded data\n*/\nComponent({\n  selector: 'tree-loadmore-example',\n  templateUrl: 'tree-loadmore-example.html',\n  styleUrls: ['tree-loadmore-example.css'],\n  providers: [LoadmoreDatabase]\n})\nexport class TreeLoadmoreExample {\n  nodeMap = new Map<string, LoadmoreFlatNode>();\n  treeControl: FlatTreeControl<LoadmoreFlatNode>;\n  treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;\n  // Flat tree data source\n  dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;\n\n  constructor(private database: LoadmoreDatabase) {\n    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,\n    this.isExpandable, this.getChildren);\n\n    this.treeControl = new FlatTreeControl<LoadmoreFlatNode>(this.getLevel, this.isExpandable);\n\n    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);\n\n    database.dataChange.subscribe(data => {\n      this.dataSource.data = data;\n    });\n\n    database.initialize();\n  }\n\n  getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> => node.childrenChange;\n\n  transformer = (node: LoadmoreNode, level: number) => {\n    const existingNode = this.nodeMap.get(node.item);\n\n    if (existingNode) {\n      return existingNode;\n    }\n\n    const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);\n    this.nodeMap.set(node.item, newNode);\n    return newNode;\n  }\n\n  getLevel = (node: LoadmoreFlatNode) => node.level;\n\n  isExpandable = (node: LoadmoreFlatNode) => node.expandable;\n\n  hasChild = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable;\n\n  isLoadMore = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.item === LOAD_MORE;\n\n  /** Load more nodes from data source */\n  loadMore(item: string) {\n    this.database.loadMore(item);\n  }\n\n  loadChildren(node: LoadmoreFlatNode) {\n    this.database.loadMore(node.item, true);\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());

/** Flat node with expandable and level information */
var FileFlatNode = /** @class */ (function () {
    function FileFlatNode(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
    return FileFlatNode;
}());

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
var TREE_DATA = JSON.stringify({
    Applications: {
        Calendar: 'app',
        Chrome: 'app',
        Webstorm: 'app'
    },
    Documents: {
        angular: {
            src: {
                compiler: 'ts',
                core: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        October: 'pdf',
        November: 'pdf',
        Tutorial: 'html'
    },
    Pictures: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    }
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.initialize = function () {
        // Parse the string to json object.
        var dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    FileDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new FileNode();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    FileDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FileDatabase);
    return FileDatabase;
}());

/** Flat node with expandable and level information */
var DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(item, level, expandable, isLoading) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (isLoading === void 0) { isLoading = false; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
    return DynamicFlatNode;
}());

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    DynamicDatabase.prototype.initialData = function () {
        return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
    };
    DynamicDatabase.prototype.getChildren = function (node) {
        return this.dataMap.get(node);
    };
    DynamicDatabase.prototype.isExpandable = function (node) {
        return this.dataMap.has(node);
    };
    return DynamicDatabase;
}());

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var DynamicDataSource = /** @class */ (function () {
    function DynamicDataSource(treeControl, database) {
        this.treeControl = treeControl;
        this.database = database;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: function () { return this.dataChange.value; },
        set: function (value) {
            this.treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        // tslint:disable-next-line:no-non-null-assertion
        this.treeControl.expansionModel.onChange.subscribe(function (change) {
            if (change.added ||
                change.removed) {
                _this.handleTreeControl(change);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return _this.data; }));
    };
    /** Handle expand/collapse behaviors */
    DynamicDataSource.prototype.handleTreeControl = function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    /**
     * Toggle the node, remove from display list
     */
    DynamicDataSource.prototype.toggleNode = function (node, expand) {
        var _this = this;
        var children = this.database.getChildren(node.item);
        var index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            var _a;
            if (expand) {
                var nodes = children.map(function (name) {
                    return new DynamicFlatNode(name, node.level + 1, _this.database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, [index + 1, 0].concat(nodes));
            }
            else {
                var count = 0;
                for (var i = index + 1; i < _this.data.length
                    && _this.data[i].level > node.level; i++, count++) { }
                _this.data.splice(index + 1, count);
            }
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
        }, 500);
    };
    DynamicDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"],
            DynamicDatabase])
    ], DynamicDataSource);
    return DynamicDataSource;
}());

/**
 * Node for to-do item
 */
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA_3 = {
    Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberry', 'Raspberry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA_3, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    /** Add an item to to-do list */
    ChecklistDatabase.prototype.insertItem = function (parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());

var LOAD_MORE = 'LOAD_MORE';
/** Nested node */
var LoadmoreNode = /** @class */ (function () {
    function LoadmoreNode(item, hasChildren, loadMoreParentItem) {
        if (hasChildren === void 0) { hasChildren = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    Object.defineProperty(LoadmoreNode.prototype, "children", {
        get: function () {
            return this.childrenChange.value;
        },
        enumerable: true,
        configurable: true
    });
    return LoadmoreNode;
}());

/** Flat node with expandable and level information */
var LoadmoreFlatNode = /** @class */ (function () {
    function LoadmoreFlatNode(item, level, expandable, loadMoreParentItem) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
    return LoadmoreFlatNode;
}());

/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
var LoadmoreDatabase = /** @class */ (function () {
    function LoadmoreDatabase() {
        this.batchNumber = 5;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.nodeMap = new Map();
        /** The data */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    LoadmoreDatabase.prototype.initialize = function () {
        var _this = this;
        var data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
        this.dataChange.next(data);
    };
    /** Expand a node whose children are not loaded */
    LoadmoreDatabase.prototype.loadMore = function (item, onlyFirstTime) {
        var _this = this;
        if (onlyFirstTime === void 0) { onlyFirstTime = false; }
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        // tslint:disable-next-line:no-non-null-assertion
        var parent = this.nodeMap.get(item);
        // tslint:disable-next-line:no-non-null-assertion
        var children = this.dataMap.get(item);
        // tslint:disable-next-line:no-non-null-assertion
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        // tslint:disable-next-line:no-non-null-assertion
        var newChildrenNumber = parent.children.length + this.batchNumber;
        var nodes = children.slice(0, newChildrenNumber)
            .map(function (name) { return _this._generateNode(name); });
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    };
    LoadmoreDatabase.prototype._generateNode = function (item) {
        if (this.nodeMap.has(item)) {
            // tslint:disable-next-line:no-non-null-assertion
            return this.nodeMap.get(item);
        }
        var result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    };
    LoadmoreDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], LoadmoreDatabase);
    return LoadmoreDatabase;
}());

/**
 * @title Tree with dynamic data
 */
var TreeComponent = /** @class */ (function () {
    function TreeComponent(database, database2, database3, database4) {
        var _this = this;
        this.database3 = database3;
        this.database4 = database4;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap3 = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap3 = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent3 = null;
        /** The new item's name */
        this.newItemName3 = '';
        /** The selection for checklist */
        this.checklistSelection3 = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true /* multiple */);
        this.nodeMap4 = new Map();
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.transformer2 = function (node, level) {
            return new FileFlatNode(!!node.children, node.filename, level, node.type);
        };
        this._getLevel2 = function (node) { return node.level; };
        this._isExpandable2 = function (node) { return node.expandable; };
        this._getChildren2 = function (node) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(node.children); };
        this.hasChild2 = function (_, _nodeData) { return _nodeData.expandable; };
        this.getLevel3 = function (node) { return node.level; };
        this.isExpandable3 = function (node) { return node.expandable; };
        this.getChildren3 = function (node) { return node.children; };
        this.hasChild3 = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent3 = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer3 = function (node, level) {
            var existingNode = _this.nestedNodeMap3.get(node);
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap3.set(flatNode, node);
            _this.nestedNodeMap3.set(node, flatNode);
            return flatNode;
        };
        this.getChildren4 = function (node) { return node.childrenChange; };
        this.transformer4 = function (node, level) {
            var existingNode = _this.nodeMap4.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            _this.nodeMap4.set(node.item, newNode);
            return newNode;
        };
        this.getLevel4 = function (node) { return node.level; };
        this.isExpandable4 = function (node) { return node.expandable; };
        this.hasChild4 = function (_, _nodeData) { return _nodeData.expandable; };
        this.isLoadMore4 = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
        this.treeFlattener2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer2, this._getLevel2, this._isExpandable2, this._getChildren2);
        this.treeControl2 = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this._getLevel2, this._isExpandable2);
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl2, this.treeFlattener2);
        database2.dataChange.subscribe(function (data) { return _this.dataSource2.data = data; });
        this.treeFlattener3 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer3, this.getLevel3, this.isExpandable3, this.getChildren3);
        this.treeControl3 = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel3, this.isExpandable3);
        this.dataSource3 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl3, this.treeFlattener3);
        database3.dataChange.subscribe(function (data) {
            _this.dataSource3.data = data;
        });
        this.treeFlattener4 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer4, this.getLevel4, this.isExpandable4, this.getChildren4);
        this.treeControl4 = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel4, this.isExpandable4);
        this.dataSource4 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl4, this.treeFlattener4);
        database4.dataChange.subscribe(function (data) {
            _this.dataSource4.data = data;
        });
        database4.initialize();
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.exampleTreeWithDynamicData = treeWithDynamicData;
        this.exampleTreeWithFlatNodes = treeWithFlatNodes;
        this.exampleTreeWithCheckboxes = treeWithCheckboxes;
        this.exampleTreeWithPartiallyLoadedData = treeWithPartiallyLoadedData;
    };
    /** Whether all the descendants of the node are selected */
    TreeComponent.prototype.descendantsAllSelected3 = function (node) {
        var _this = this;
        var descendants = this.treeControl3.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection3.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    TreeComponent.prototype.descendantsPartiallySelected3 = function (node) {
        var _this = this;
        var descendants = this.treeControl3.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection3.isSelected(child); });
        return result && !this.descendantsAllSelected3(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    TreeComponent.prototype.todoItemSelectionToggle3 = function (node) {
        var _a, _b;
        this.checklistSelection3.toggle(node);
        var descendants = this.treeControl3.getDescendants(node);
        this.checklistSelection3.isSelected(node)
            ? (_a = this.checklistSelection3).select.apply(_a, descendants) : (_b = this.checklistSelection3).deselect.apply(_b, descendants);
    };
    /** Select the category so we can insert the new item. */
    TreeComponent.prototype.addNewItem3 = function (node) {
        var parentNode = this.flatNodeMap3.get(node);
        // tslint:disable-next-line:no-non-null-assertion
        this.database3.insertItem(parentNode, '');
        this.treeControl3.expand(node);
    };
    /** Save the node to database */
    TreeComponent.prototype.saveNode3 = function (node, itemValue) {
        var nestedNode = this.flatNodeMap3.get(node);
        // tslint:disable-next-line:no-non-null-assertion
        this.database3.updateItem(nestedNode, itemValue);
    };
    /** Load more nodes from data source */
    TreeComponent.prototype.loadMore4 = function (item) {
        this.database4.loadMore(item);
    };
    TreeComponent.prototype.loadChildren4 = function (node) {
        this.database4.loadMore(node.item, true);
    };
    TreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'm-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/content/pages/components/material/layout/tree/tree.component.html"),
            styles: ["\n\t.example-tree-progress-bar {\n\t\tmargin-left: 30px;\n\t  }\n\t"],
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [DynamicDatabase, FileDatabase, ChecklistDatabase, LoadmoreDatabase]
        }),
        __metadata("design:paramtypes", [DynamicDatabase,
            FileDatabase,
            ChecklistDatabase,
            LoadmoreDatabase])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/material.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/components/material/material.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/material/material.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/pages/components/material/material.component.ts ***!
  \*************************************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaterialComponent = /** @class */ (function () {
    function MaterialComponent() {
    }
    MaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-material',
            template: __webpack_require__(/*! ./material.component.html */ "./src/app/content/pages/components/material/material.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], MaterialComponent);
    return MaterialComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/material.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/pages/components/material/material.module.ts ***!
  \**********************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.component */ "./src/app/content/pages/components/material/material.component.ts");
/* harmony import */ var _formcontrols_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formcontrols/autocomplete/autocomplete.component */ "./src/app/content/pages/components/material/formcontrols/autocomplete/autocomplete.component.ts");
/* harmony import */ var _formcontrols_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formcontrols/checkbox/checkbox.component */ "./src/app/content/pages/components/material/formcontrols/checkbox/checkbox.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _partials_content_general_code_preview_code_preview_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/content/general/code-preview/code-preview.module */ "./src/app/content/partials/content/general/code-preview/code-preview.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/content/partials/partials.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_content_general_material_preview_material_preivew_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../partials/content/general/material-preview/material-preivew.module */ "./src/app/content/partials/content/general/material-preview/material-preivew.module.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _formcontrols_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formcontrols/datepicker/datepicker.component */ "./src/app/content/pages/components/material/formcontrols/datepicker/datepicker.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _formcontrols_formfield_formfield_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formcontrols/formfield/formfield.component */ "./src/app/content/pages/components/material/formcontrols/formfield/formfield.component.ts");
/* harmony import */ var _formcontrols_input_input_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formcontrols/input/input.component */ "./src/app/content/pages/components/material/formcontrols/input/input.component.ts");
/* harmony import */ var _formcontrols_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formcontrols/radiobutton/radiobutton.component */ "./src/app/content/pages/components/material/formcontrols/radiobutton/radiobutton.component.ts");
/* harmony import */ var _formcontrols_select_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./formcontrols/select/select.component */ "./src/app/content/pages/components/material/formcontrols/select/select.component.ts");
/* harmony import */ var _formcontrols_slider_slider_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./formcontrols/slider/slider.component */ "./src/app/content/pages/components/material/formcontrols/slider/slider.component.ts");
/* harmony import */ var _formcontrols_slidertoggle_slidertoggle_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./formcontrols/slidertoggle/slidertoggle.component */ "./src/app/content/pages/components/material/formcontrols/slidertoggle/slidertoggle.component.ts");
/* harmony import */ var _navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./navigation/menu/menu.component */ "./src/app/content/pages/components/material/navigation/menu/menu.component.ts");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.component */ "./src/app/content/pages/components/material/navigation/sidenav/sidenav.component.ts");
/* harmony import */ var _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./navigation/toolbar/toolbar.component */ "./src/app/content/pages/components/material/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var _layout_card_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./layout/card/card.component */ "./src/app/content/pages/components/material/layout/card/card.component.ts");
/* harmony import */ var _layout_divider_divider_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./layout/divider/divider.component */ "./src/app/content/pages/components/material/layout/divider/divider.component.ts");
/* harmony import */ var _layout_expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./layout/expansion-panel/expansion-panel.component */ "./src/app/content/pages/components/material/layout/expansion-panel/expansion-panel.component.ts");
/* harmony import */ var _layout_grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./layout/grid-list/grid-list.component */ "./src/app/content/pages/components/material/layout/grid-list/grid-list.component.ts");
/* harmony import */ var _layout_list_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./layout/list/list.component */ "./src/app/content/pages/components/material/layout/list/list.component.ts");
/* harmony import */ var _layout_material_tabs_material_tabs_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./layout/material-tabs/material-tabs.component */ "./src/app/content/pages/components/material/layout/material-tabs/material-tabs.component.ts");
/* harmony import */ var _layout_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./layout/stepper/stepper.component */ "./src/app/content/pages/components/material/layout/stepper/stepper.component.ts");
/* harmony import */ var _layout_tree_tree_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./layout/tree/tree.component */ "./src/app/content/pages/components/material/layout/tree/tree.component.ts");
/* harmony import */ var _layout_default_forms_default_forms_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./layout/default-forms/default-forms.component */ "./src/app/content/pages/components/material/layout/default-forms/default-forms.component.ts");
/* harmony import */ var _buttons_and_indicators_button_button_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./buttons-and-indicators/button/button.component */ "./src/app/content/pages/components/material/buttons-and-indicators/button/button.component.ts");
/* harmony import */ var _buttons_and_indicators_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./buttons-and-indicators/button-toggle/button-toggle.component */ "./src/app/content/pages/components/material/buttons-and-indicators/button-toggle/button-toggle.component.ts");
/* harmony import */ var _buttons_and_indicators_chips_chips_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./buttons-and-indicators/chips/chips.component */ "./src/app/content/pages/components/material/buttons-and-indicators/chips/chips.component.ts");
/* harmony import */ var _buttons_and_indicators_icon_icon_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./buttons-and-indicators/icon/icon.component */ "./src/app/content/pages/components/material/buttons-and-indicators/icon/icon.component.ts");
/* harmony import */ var _buttons_and_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./buttons-and-indicators/progress-bar/progress-bar.component */ "./src/app/content/pages/components/material/buttons-and-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var _buttons_and_indicators_progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./buttons-and-indicators/progress-spinner/progress-spinner.component */ "./src/app/content/pages/components/material/buttons-and-indicators/progress-spinner/progress-spinner.component.ts");
/* harmony import */ var _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./popups-and-modals/dialog/dialog.component */ "./src/app/content/pages/components/material/popups-and-modals/dialog/dialog.component.ts");
/* harmony import */ var _popups_and_modals_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./popups-and-modals/snackbar/snackbar.component */ "./src/app/content/pages/components/material/popups-and-modals/snackbar/snackbar.component.ts");
/* harmony import */ var _popups_and_modals_material_tooltip_material_tooltip_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./popups-and-modals/material-tooltip/material-tooltip.component */ "./src/app/content/pages/components/material/popups-and-modals/material-tooltip/material-tooltip.component.ts");
/* harmony import */ var _popups_and_modals_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./popups-and-modals/bottom-sheet/bottom-sheet.component */ "./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _popups_and_modals_bottom_sheet_bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component */ "./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.ts");
/* harmony import */ var _popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./popups-and-modals/snackbar/pizza-party.component */ "./src/app/content/pages/components/material/popups-and-modals/snackbar/pizza-party.component.ts");
/* harmony import */ var _data_table_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./data-table/paginator/paginator.component */ "./src/app/content/pages/components/material/data-table/paginator/paginator.component.ts");
/* harmony import */ var _data_table_sort_header_sort_header_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./data-table/sort-header/sort-header.component */ "./src/app/content/pages/components/material/data-table/sort-header/sort-header.component.ts");
/* harmony import */ var _data_table_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./data-table/material-table/material-table.component */ "./src/app/content/pages/components/material/data-table/material-table/material-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// Form controls








// Navigation



// Layout









// Buttons & indicators






// Popups & modals






// Data table



var routes = [
    {
        path: '',
        component: _material_component__WEBPACK_IMPORTED_MODULE_3__["MaterialComponent"],
        children: [
            {
                path: 'form-controls/autocomplete',
                component: _formcontrols_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__["AutocompleteComponent"]
            },
            {
                path: 'form-controls/checkbox',
                component: _formcontrols_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"]
            },
            {
                path: 'form-controls/datepicker',
                component: _formcontrols_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__["DatepickerComponent"]
            },
            {
                path: 'form-controls/formfield',
                component: _formcontrols_formfield_formfield_component__WEBPACK_IMPORTED_MODULE_18__["FormfieldComponent"]
            },
            {
                path: 'form-controls/input',
                component: _formcontrols_input_input_component__WEBPACK_IMPORTED_MODULE_19__["InputComponent"]
            },
            {
                path: 'form-controls/radiobutton',
                component: _formcontrols_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_20__["RadiobuttonComponent"]
            },
            {
                path: 'form-controls/select',
                component: _formcontrols_select_select_component__WEBPACK_IMPORTED_MODULE_21__["SelectComponent"]
            },
            {
                path: 'form-controls/slider',
                component: _formcontrols_slider_slider_component__WEBPACK_IMPORTED_MODULE_22__["SliderComponent"]
            },
            {
                path: 'form-controls/slidertoggle',
                component: _formcontrols_slidertoggle_slidertoggle_component__WEBPACK_IMPORTED_MODULE_23__["SlidertoggleComponent"]
            },
            {
                path: 'navigation/menu',
                component: _navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_24__["MenuComponent"]
            },
            {
                path: 'navigation/sidenav',
                component: _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_25__["SidenavComponent"]
            },
            {
                path: 'navigation/toolbar',
                component: _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_26__["ToolbarComponent"]
            },
            {
                path: 'layout/card',
                component: _layout_card_card_component__WEBPACK_IMPORTED_MODULE_27__["CardComponent"]
            },
            {
                path: 'layout/divider',
                component: _layout_divider_divider_component__WEBPACK_IMPORTED_MODULE_28__["DividerComponent"]
            },
            {
                path: 'layout/expansion-panel',
                component: _layout_expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_29__["ExpansionPanelComponent"]
            },
            {
                path: 'layout/grid-list',
                component: _layout_grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_30__["GridListComponent"]
            },
            {
                path: 'layout/list',
                component: _layout_list_list_component__WEBPACK_IMPORTED_MODULE_31__["ListComponent"]
            },
            {
                path: 'layout/tabs',
                component: _layout_material_tabs_material_tabs_component__WEBPACK_IMPORTED_MODULE_32__["MaterialTabsComponent"]
            },
            {
                path: 'layout/stepper',
                component: _layout_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_33__["StepperComponent"]
            },
            {
                path: 'layout/default-forms',
                component: _layout_default_forms_default_forms_component__WEBPACK_IMPORTED_MODULE_35__["DefaultFormsComponent"]
            },
            {
                path: 'layout/tree',
                component: _layout_tree_tree_component__WEBPACK_IMPORTED_MODULE_34__["TreeComponent"]
            },
            {
                path: 'buttons-and-indicators/button',
                component: _buttons_and_indicators_button_button_component__WEBPACK_IMPORTED_MODULE_36__["ButtonComponent"]
            },
            {
                path: 'buttons-and-indicators/button-toggle',
                component: _buttons_and_indicators_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_37__["ButtonToggleComponent"]
            },
            {
                path: 'buttons-and-indicators/chips',
                component: _buttons_and_indicators_chips_chips_component__WEBPACK_IMPORTED_MODULE_38__["ChipsComponent"]
            },
            {
                path: 'buttons-and-indicators/icon',
                component: _buttons_and_indicators_icon_icon_component__WEBPACK_IMPORTED_MODULE_39__["IconComponent"]
            },
            {
                path: 'buttons-and-indicators/progress-bar',
                component: _buttons_and_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_40__["ProgressBarComponent"]
            },
            {
                path: 'buttons-and-indicators/progress-spinner',
                component: _buttons_and_indicators_progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_41__["ProgressSpinnerComponent"]
            },
            {
                path: 'popups-and-modals/bottom-sheet',
                component: _popups_and_modals_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_45__["BottomSheetComponent"]
            },
            {
                path: 'popups-and-modals/dialog',
                component: _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__["DialogComponent"]
            },
            {
                path: 'popups-and-modals/snackbar',
                component: _popups_and_modals_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_43__["SnackbarComponent"]
            },
            {
                path: 'popups-and-modals/tooltip',
                component: _popups_and_modals_material_tooltip_material_tooltip_component__WEBPACK_IMPORTED_MODULE_44__["MaterialTooltipComponent"]
            },
            {
                path: 'data'
            },
            {
                path: 'data-table/paginator',
                component: _data_table_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_48__["PaginatorComponent"]
            },
            {
                path: 'data-table/sort-header',
                component: _data_table_sort_header_sort_header_component__WEBPACK_IMPORTED_MODULE_49__["SortHeaderComponent"]
            },
            {
                path: 'data-table/table',
                component: _data_table_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_50__["MaterialTableComponent"]
            }
        ]
    }
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // material modules
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__["PartialsModule"],
                _partials_content_general_material_preview_material_preivew_module__WEBPACK_IMPORTED_MODULE_10__["MaterialPreviewModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _partials_content_general_code_preview_code_preview_module__WEBPACK_IMPORTED_MODULE_7__["CodePreviewModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            entryComponents: [
                _popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_47__["PizzaPartyComponent"],
                _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__["DialogComponent"],
                _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__["ModalComponent"],
                _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__["Modal2Component"],
                _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__["Modal3Component"],
                _buttons_and_indicators_icon_icon_component__WEBPACK_IMPORTED_MODULE_39__["IconComponent"],
                _layout_tree_tree_component__WEBPACK_IMPORTED_MODULE_34__["TreeComponent"],
                _popups_and_modals_bottom_sheet_bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_46__["BottomSheetExampleComponent"]
            ],
            providers: [
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconRegistry"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetRef"], useValue: {} },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_BOTTOM_SHEET_DATA"], useValue: {}
                }
            ],
            declarations: [
                _material_component__WEBPACK_IMPORTED_MODULE_3__["MaterialComponent"],
                _formcontrols_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__["AutocompleteComponent"],
                _formcontrols_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"],
                _formcontrols_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__["DatepickerComponent"],
                _formcontrols_formfield_formfield_component__WEBPACK_IMPORTED_MODULE_18__["FormfieldComponent"],
                _formcontrols_input_input_component__WEBPACK_IMPORTED_MODULE_19__["InputComponent"],
                _formcontrols_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_20__["RadiobuttonComponent"],
                _formcontrols_select_select_component__WEBPACK_IMPORTED_MODULE_21__["SelectComponent"],
                _formcontrols_slider_slider_component__WEBPACK_IMPORTED_MODULE_22__["SliderComponent"],
                _formcontrols_slidertoggle_slidertoggle_component__WEBPACK_IMPORTED_MODULE_23__["SlidertoggleComponent"],
                _navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_24__["MenuComponent"],
                _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_25__["SidenavComponent"],
                _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_26__["ToolbarComponent"],
                _layout_card_card_component__WEBPACK_IMPORTED_MODULE_27__["CardComponent"],
                _layout_divider_divider_component__WEBPACK_IMPORTED_MODULE_28__["DividerComponent"],
                _layout_expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_29__["ExpansionPanelComponent"],
                _layout_grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_30__["GridListComponent"],
                _layout_list_list_component__WEBPACK_IMPORTED_MODULE_31__["ListComponent"],
                _layout_material_tabs_material_tabs_component__WEBPACK_IMPORTED_MODULE_32__["MaterialTabsComponent"],
                _layout_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_33__["StepperComponent"],
                _buttons_and_indicators_button_button_component__WEBPACK_IMPORTED_MODULE_36__["ButtonComponent"],
                _buttons_and_indicators_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_37__["ButtonToggleComponent"],
                _buttons_and_indicators_chips_chips_component__WEBPACK_IMPORTED_MODULE_38__["ChipsComponent"],
                _buttons_and_indicators_icon_icon_component__WEBPACK_IMPORTED_MODULE_39__["IconComponent"],
                _buttons_and_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_40__["ProgressBarComponent"],
                _buttons_and_indicators_progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_41__["ProgressSpinnerComponent"],
                _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__["DialogComponent"],
                _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__["ModalComponent"],
                _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__["Modal2Component"],
                _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_42__["Modal3Component"],
                _popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_47__["PizzaPartyComponent"],
                _popups_and_modals_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_43__["SnackbarComponent"],
                _popups_and_modals_material_tooltip_material_tooltip_component__WEBPACK_IMPORTED_MODULE_44__["MaterialTooltipComponent"],
                _data_table_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_48__["PaginatorComponent"],
                _data_table_sort_header_sort_header_component__WEBPACK_IMPORTED_MODULE_49__["SortHeaderComponent"],
                _data_table_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_50__["MaterialTableComponent"],
                _layout_default_forms_default_forms_component__WEBPACK_IMPORTED_MODULE_35__["DefaultFormsComponent"],
                _layout_tree_tree_component__WEBPACK_IMPORTED_MODULE_34__["TreeComponent"],
                _popups_and_modals_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_45__["BottomSheetComponent"],
                _popups_and_modals_bottom_sheet_bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_46__["BottomSheetExampleComponent"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/navigation/menu/menu.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/navigation/menu/menu.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/menu/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicMenu\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button mat-button [matMenuTriggerFor]=\"menu10\">Menu</button>\r\n\t\t\t\t\t<mat-menu #menu10=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Item 1</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Item 2</button>\r\n\t\t\t\t\t</mat-menu>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleMenuWithIcons\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tMenus support displaying\r\n\t\t\t\t\t<code>&ltmat-icon&gt;</code> elements before the menu item text.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu32\">\r\n\t\t\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<mat-menu #menu32=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>\r\n\t\t\t\t\t\t\t<mat-icon>dialpad</mat-icon>\r\n\t\t\t\t\t\t\t<span>Redial</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button mat-menu-item disabled>\r\n\t\t\t\t\t\t\t<mat-icon>voicemail</mat-icon>\r\n\t\t\t\t\t\t\t<span>Check voicemail</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button mat-menu-item>\r\n\t\t\t\t\t\t\t<mat-icon>notifications_off</mat-icon>\r\n\t\t\t\t\t\t\t<span>Disable alerts</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleNestedMenu\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tMaterial supports the ability for an\r\n\t\t\t\t\t<mark>mat-menu-item</mark> to open a\r\n\t\t\t\t\t<mark>sub-menu</mark>. To do so, you have to define your root menu and sub-menus, in addition to setting the\r\n\t\t\t\t\t<mark>[matMenuTriggerFor]</mark> on the mat-menu-item that should trigger the sub-menu\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\r\n\r\n\t\t\t\t\t<mat-menu #animals=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #vertebrates=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Birds</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Mammals</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #invertebrates=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Insects</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Molluscs</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Crustaceans</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Corals</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Arachnids</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Velvet worms</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Horseshoe crabs</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #fish=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Baikal oilfish</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Bala shark</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Ballan wrasse</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Bamboo shark</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Banded killifish</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #amphibians=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Sonoran desert toad</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Western toad</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Arroyo toad</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Yosemite toad</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #reptiles=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Banded Day Gecko</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Banded Gila Monster</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Black Tree Monitor</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Blue Spiny Lizard</button>\r\n\t\t\t\t\t\t<button mat-menu-item disabled>Velociraptor</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleToggling\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tBy default, the menu will display below (y-axis), after (x-axis), and overlapping its trigger. The position can be changed using the\r\n\t\t\t\t\t<mark>xPosition</mark> (\r\n\t\t\t\t\t<mark>before | after</mark>) and\r\n\t\t\t\t\t<mark>yPosition</mark> (\r\n\t\t\t\t\t<mark>above | below</mark>) attributes. The menu can be be forced to not overlap the trigger using\r\n\t\t\t\t\t<code>[overlapTrigger]=\"false\"</code> attribute.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-menu #appMenu=\"matMenu\" yPosition=\"above\">\r\n\t\t\t\t\t\t<button mat-menu-item>Settings</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Help</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\r\n\t\t\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/navigation/menu/menu.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/navigation/menu/menu.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicMenu = {
    beforeCodeTitle: 'Basic menu',
    htmlCode: "\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic menu\n */\n@Component({\n  selector: 'menu-overview-example',\n  templateUrl: 'menu-overview-example.html',\n  styleUrls: ['menu-overview-example.css'],\n})\nexport class MenuOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var nestedMenu = {
    beforeCodeTitle: 'Nested menu',
    htmlCode: "\n<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n<mat-menu #animals=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n</mat-menu>\n<mat-menu #vertebrates=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n  <button mat-menu-item>Birds</button>\n  <button mat-menu-item>Mammals</button>\n</mat-menu>\n<mat-menu #invertebrates=\"matMenu\">\n  <button mat-menu-item>Insects</button>\n  <button mat-menu-item>Molluscs</button>\n  <button mat-menu-item>Crustaceans</button>\n  <button mat-menu-item>Corals</button>\n  <button mat-menu-item>Arachnids</button>\n  <button mat-menu-item>Velvet worms</button>\n  <button mat-menu-item>Horseshoe crabs</button>\n</mat-menu>\n<mat-menu #fish=\"matMenu\">\n  <button mat-menu-item>Baikal oilfish</button>\n  <button mat-menu-item>Bala shark</button>\n  <button mat-menu-item>Ballan wrasse</button>\n  <button mat-menu-item>Bamboo shark</button>\n  <button mat-menu-item>Banded killifish</button>\n</mat-menu>\n<mat-menu #amphibians=\"matMenu\">\n  <button mat-menu-item>Sonoran desert toad</button>\n  <button mat-menu-item>Western toad</button>\n  <button mat-menu-item>Arroyo toad</button>\n  <button mat-menu-item>Yosemite toad</button>\n</mat-menu>\n<mat-menu #reptiles=\"matMenu\">\n  <button mat-menu-item>Banded Day Gecko</button>\n  <button mat-menu-item>Banded Gila Monster</button>\n  <button mat-menu-item>Black Tree Monitor</button>\n  <button mat-menu-item>Blue Spiny Lizard</button>\n  <button mat-menu-item disabled>Velociraptor</button>\n</mat-menu>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Nested menu\n*/\n@Component({\n  selector: 'nested-menu-example',\n  templateUrl: 'nested-menu-example.html',\n  styleUrls: ['nested-menu-example.css']\n})\nexport class NestedMenuExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var menuWithIcons = {
    beforeCodeTitle: 'Menu with icons',
    htmlCode: "\n<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voicemail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Menu with icons\n*/\n@Component({\n  selector: 'menu-icons-example',\n  templateUrl: 'menu-icons-example.html',\n  styleUrls: ['menu-icons-example.css'],\n})\nexport class MenuIconsExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var toggling = {
    beforeCodeTitle: 'Customizing menu position',
    htmlCode: "\n<mat-menu #appMenu=\"matMenu\" yPosition=\"above\">\n  <button mat-menu-item>Settings</button>\n  <button mat-menu-item>Help</button>\n</mat-menu>\n<button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @Customizing menu position\n */\n@Component({\n  selector: 'menu-customizing-example',\n  templateUrl: 'menu-customizing-example.html',\n  styleUrls: ['menu-customizing-example.css'],\n})\nexport class MenuCustomizingExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.exampleBasicMenu = basicMenu;
        this.exampleNestedMenu = nestedMenu;
        this.exampleMenuWithIcons = menuWithIcons;
        this.exampleToggling = toggling;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/content/pages/components/material/navigation/menu/menu.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/navigation/sidenav/sidenav.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/navigation/sidenav/sidenav.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/sidenav/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicSidenav\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tAngular Material provides two sets of components designed to add collapsible side content (often navigation, though it can be any content) alongside some primary content. These are the sidenav and drawer components.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tThe sidenav components are designed to add side content to a fullscreen app. To set up a sidenav we use three components:\r\n\t\t\t\t\t<code>&lt;mat-sidenav-container&gt;</code> which acts as a structural container for our content and sidenav,\r\n\t\t\t\t\t<code>&lt;mat-sidenav-content&gt;</code> which represents the main content, and\r\n\t\t\t\t\t<code>&lt;mat-sidenav&gt;</code> which represents the added side content.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\r\n\t\t\t\t\t\t<mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\r\n\t\t\t\t\t\t<mat-sidenav-content>Main content</mat-sidenav-content>\r\n\t\t\t\t\t</mat-sidenav-container>\r\n\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<a href=\"https://stackblitz.com/angular/vqvkrekvgga\" target=\"_blank\">\r\n\t\t\t\t\t\t\tPlease open on Stackblitz to see result\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleAutosizeSidenav\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tBy default, Material will only measure and resize the drawer container in a few key moments (on open, on window resize, on mode change) in order to avoid layout thrashing, however there are cases where this can be problematic. If your app requires for a drawer to change its width while it is open, you can use the\r\n\t\t\t\t\t<mark>autosize</mark> option to tell Material to continue measuring it. Note that you should use this option\r\n\t\t\t\t\t<b>at your own risk</b>, because it could cause performance issues.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-drawer-container class=\"example-container\" autosize>\r\n\t\t\t\t\t\t<mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\r\n\t\t\t\t\t\t\t<p>Auto-resizing sidenav</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\r\n\t\t\t\t\t\t\t<button (click)=\"showFiller = !showFiller\" mat-raised-button>\r\n\t\t\t\t\t\t\t\tToggle extra text\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-drawer>\r\n\r\n\t\t\t\t\t\t<div class=\"example-sidenav-content\">\r\n\t\t\t\t\t\t\t<button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n\t\t\t\t\t\t\t\tToggle sidenav\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</mat-drawer-container>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicDrawer\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tThe drawer component is designed to add side content to a small section of your app. This is accomplished using the\r\n\t\t\t\t\t<code>&lt;mat-drawer-container&gt;</code>,\r\n\t\t\t\t\t<code>&lt;mat-drawer-content&gt;</code>, and\r\n\t\t\t\t\t<code>&lt;mat-drawer&gt;</code> components, which are analogous to their sidenav equivalents. Rather than adding side content to the app as a whole, these are designed to add side content to a small section of your app. They support almost all of the same features, but do not support fixed positioning.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-drawer-container class=\"example-container\">\r\n\t\t\t\t\t\t<mat-drawer mode=\"side\" opened=\"true\">Drawer content</mat-drawer>\r\n\t\t\t\t\t\t<mat-drawer-content>Main content</mat-drawer-content>\r\n\t\t\t\t\t</mat-drawer-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/navigation/sidenav/sidenav.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/navigation/sidenav/sidenav.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicSidenav = {
    beforeCodeTitle: 'Basic sidenav',
    htmlCode: "\n<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>Main content</mat-sidenav-content>\n</mat-sidenav-container>\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Basic sidenav */\n@Component({\n  selector: 'sidenav-overview-example',\n  templateUrl: 'sidenav-overview-example.html',\n  styleUrls: ['sidenav-overview-example.css'],\n})\nexport class SidenavOverviewExample {\n  shouldRun = [/(^|.)plnkr.co$/, /(^|.)stackblitz.io$/].some(h => h.test(window.location.host));\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var basicDrawer = {
    beforeCodeTitle: 'Basic drawer',
    htmlCode: "\n<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened=\"true\">Drawer content</mat-drawer>\n  <mat-drawer-content>Main content</mat-drawer-content>\n</mat-drawer-container>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Basic drawer */\n@Component({\n  selector: 'sidenav-drawer-overview-example',\n  templateUrl: 'sidenav-drawer-overview-example.html',\n  styleUrls: ['sidenav-drawer-overview-example.css'],\n})\nexport class SidenavDrawerOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var autosizeSidenav = {
    beforeCodeTitle: 'Autosize sidenav',
    htmlCode: "\n<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n</mat-drawer-container>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Autosize sidenav\n*/\n@Component({\n  selector: 'sidenav-autosize-example',\n  templateUrl: 'sidenav-autosize-example.html',\n  styleUrls: ['sidenav-autosize-example.css'],\n})\nexport class SidenavAutosizeExample {\n  showFiller = false;\n}\n",
    cssCode: "\n.example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.example-sidenav {\n  padding: 20px;\n}\n\t\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.showFiller = false;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.exampleBasicSidenav = basicSidenav;
        this.exampleBasicDrawer = basicDrawer;
        this.exampleAutosizeSidenav = autosizeSidenav;
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/content/pages/components/material/navigation/sidenav/sidenav.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-container {\n\t\twidth: 400px;\n\t\theight: 200px;\n\t\tmargin: 10px;\n\t\tborder: 1px solid #555;\n\t  }\n\t  .example-container {\n\t\twidth: 500px;\n\t\theight: 300px;\n\t\tborder: 1px solid rgba(0, 0, 0, 0.5);\n\t  }\n\t  .example-sidenav-content {\n\t\tdisplay: flex;\n\t\theight: 100%;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t  }\n\t  .example-sidenav {\n\t\tpadding: 20px;\n\t  }\n\t"]
        })
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/navigation/toolbar/toolbar.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/navigation/toolbar/toolbar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/toolbar/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleSingleRow\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-toolbar&gt;</code> is a container for headers, titles, or actions.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\t<b>Single row:</b>\r\n\t\t\t\t\tIn the most situations, a toolbar will be placed at the top of your application and will only have a single row that includes the title of your application.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-toolbar>\r\n\t\t\t\t\t\t<span>My Application</span>\r\n\t\t\t\t\t</mat-toolbar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"examplMultipleRows\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThe Material Design specifications describe that toolbars can also have multiple rows. Creating toolbars with multiple rows in Angular Material can be done by placing\r\n\t\t\t\t\t<code>&lt;mat-toolbar-row&gt;</code> elements inside of a\r\n\t\t\t\t\t<code>&lt;mat-toolbar&gt;</code>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-toolbar>\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>First Row</span>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>Second Row</span>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\t\t\t\t\t</mat-toolbar>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"examplMultipleRows2\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<b>Note:</b> Placing content outside of a\r\n\t\t\t\t\t<code>&lt;mat-toolbar-row&gt;</code> when multiple rows are specified is not supported.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-toolbar color=\"primary\">\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>Custom Toolbar</span>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>Second Line</span>\r\n\t\t\t\t\t\t\t<span class=\"example-spacer\"></span>\r\n\t\t\t\t\t\t\t<mat-icon class=\"example-icon\">verified_user</mat-icon>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>Third Line</span>\r\n\t\t\t\t\t\t\t<span class=\"example-spacer\"></span>\r\n\t\t\t\t\t\t\t<mat-icon class=\"example-icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t\t<mat-icon class=\"example-icon\">delete</mat-icon>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\t\t\t\t\t</mat-toolbar>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/navigation/toolbar/toolbar.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/navigation/toolbar/toolbar.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var singleRow = {
    beforeCodeTitle: 'Single row',
    htmlCode: "\n<mat-toolbar>\n  <span>My Application</span>\n</mat-toolbar>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic toolbar : single row\n*/\n@Component({\n  selector: 'toolbar-overview-example',\n  templateUrl: 'toolbar-overview-example.html',\n  styleUrls: ['toolbar-overview-example.css'],\n})\nexport class ToolbarOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var multipleRows = {
    beforeCodeTitle: 'Multiple rows',
    htmlCode: "\n<mat-toolbar>\n  <mat-toolbar-row>\n    <span>First Row</span>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span>Second Row</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic toolbar : multiple rows\n*/\n@Component({\nselector: 'toolbar-multi-example',\ntemplateUrl: 'toolbar-multi-example.html',\nstyleUrls: ['toolbar-multi-example.css'],\n})\nexport class ToolbarMultiExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var multipleRows2 = {
    beforeCodeTitle: 'Multi-row toolbar',
    htmlCode: "\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic toolbar : Multi-row toolbar\n*/\n@Component({\nselector: 'toolbar-multi-example',\ntemplateUrl: 'toolbar-multi-example.html',\nstyleUrls: ['toolbar-multi-example.css'],\n})\nexport class ToolbarMultiExample {}\n",
    cssCode: "\n.example-icon {\n  padding: 0 14px;\n}\n.example-spacer {\n  flex: 1 1 auto;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.exampleSingleRow = singleRow;
        this.examplMultipleRows = multipleRows;
        this.examplMultipleRows2 = multipleRows2;
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/content/pages/components/material/navigation/toolbar/toolbar.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t.example-icon {\n\t\tpadding: 0 14px;\n\t}\n\t.example-spacer {\n\t\tflex: 1 1 auto;\n\t}\n\t"]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n\t\t<a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n\t\t  <span mat-line>Google Keep</span>\r\n\t\t  <span mat-line>Add to a note</span>\r\n\t\t</a>\r\n\t  \r\n\t\t<a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n\t\t  <span mat-line>Google Docs</span>\r\n\t\t  <span mat-line>Embed in a document</span>\r\n\t\t</a>\r\n\t  \r\n\t\t<a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n\t\t  <span mat-line>Google Plus</span>\r\n\t\t  <span mat-line>Share with your friends</span>\r\n\t\t</a>\r\n\t  \r\n\t\t<a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n\t\t  <span mat-line>Google Hangouts</span>\r\n\t\t  <span mat-line>Show to your coworkers</span>\r\n\t\t</a>\r\n\t  </mat-nav-list>\r\n\t  \r\n\t  \r\n\t  <!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n\t\t  Use of this source code is governed by an MIT-style license that\r\n\t\t  can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: BottomSheetExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetExampleComponent", function() { return BottomSheetExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BottomSheetExampleComponent = /** @class */ (function () {
    function BottomSheetExampleComponent(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    BottomSheetExampleComponent.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-bottom-sheet-example',
            template: __webpack_require__(/*! ./bottom-sheet-example.component.html */ "./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.html")
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])
    ], BottomSheetExampleComponent);
    return BottomSheetExampleComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/bottom-sheet/\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThe\r\n\t\t\t\t\t<code>MatBottomSheet</code> service can be used to open Material Design panels to the bottom of the screen. These panels are intended primarily as an interaction on mobile devices where they can be used as an alternative to dialogs and menus.\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t\tYou can open a bottom sheet by calling the <code>open</code> method with a component to be loaded and an optional config object. The <code>open</code> method will return an instance of <code>MatBottomSheetRef</code></span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<p>You have receive a file called \"cat-picture.jpeg\".</p>\r\n\t\t\t\t\t<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom-sheet-example/bottom-sheet-example.component */ "./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var basic = {
    beforeCodeTitle: 'Bottom Sheet Overview',
    htmlCode: "\nimport {Component} from '@angular/core';\nimport {MatBottomSheet, MatBottomSheetRef} from '@angular/material';\n\n/**\n* @title Bottom Sheet Overview\n@Component({\n  selector: 'bottom-sheet-overview-example',\n  templateUrl: 'bottom-sheet-overview-example.html',\n  styleUrls: ['bottom-sheet-overview-example.css'],\n})\nexport class BottomSheetOverviewExample {\n  constructor(private bottomSheet: MatBottomSheet) {}\n\n  openBottomSheet(): void {\n    this.bottomSheet.open(BottomSheetOverviewExampleSheet);\n  }\n}\n\n\n@Component({\n  selector: 'bottom-sheet-overview-example-sheet',\n  templateUrl: 'bottom-sheet-overview-example-sheet.html',\n})\nexport class BottomSheetOverviewExampleSheet {\n  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}\n\n  openLink(event: MouseEvent): void {\n    this.bottomSheetRef.dismiss();\n    event.preventDefault();\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var BottomSheetComponent = /** @class */ (function () {
    function BottomSheetComponent(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    BottomSheetComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(_bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_2__["BottomSheetExampleComponent"]);
    };
    BottomSheetComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
    };
    BottomSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-bottom-sheet',
            template: __webpack_require__(/*! ./bottom-sheet.component.html */ "./src/app/content/pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet.component.html")
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"]])
    ], BottomSheetComponent);
    return BottomSheetComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/dialog/dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/dialog/dialog.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/dialog/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThe\r\n\t\t\t\t\t<mark>MatDialog</mark> service can be used to open modal dialogs with Material Design styling and animations.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t  <mat-form-field>\r\n\t\t\t\t\t\t\t<input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\r\n\t\t\t\t\t\t  </mat-form-field>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t  <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li *ngIf=\"animal$ | async as anim\">\r\n\t\t\t\t\t\t  You chose: {{anim}}\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t  </ol>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleInjecting\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tTo access the data in your dialog component, you have to use the\r\n\t\t\t\t\t<mark>MAT_DIALOG_DATA</mark> injection token\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button mat-button (click)=\"openDialog2()\">Open dialog</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"examplHeader\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tOnce a dialog opens, the dialog will automatically focus the first tabbable element.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"m-section__sub\">\r\n\t\t\t\t\tYou can control which elements are tab stops with the\r\n\t\t\t\t\t<mark>tabindex</mark> attribute\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button mat-button (click)=\"openDialog3()\">Open dialog</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/dialog/dialog.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/dialog/dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: Modal3Component, Modal2Component, ModalComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal3Component", function() { return Modal3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal2Component", function() { return Modal2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var Modal3Component = /** @class */ (function () {
    function Modal3Component() {
    }
    Modal3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-modal3',
            template: "<div class=\"col-xl-12\"><div class=\"col-xl-12\"><h1 mat-dialog-title>Favorite Animal</h1>\n\t<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content>\n  <h3>DEVELOP ACROSS ALL PLATFORMS</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n  <h3>SPEED &amp; PERFORMANCE</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements\n    by building data models on RxJS, Immutable.js or another push-model.</p>\n  <h3>INCREDIBLE TOOLING</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with your own\n    components and use a wide array of existing components. Get immediate Angular-specific help and feedback\n    with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather\n    than trying to make the code work.</p>\n  <h3>LOVED BY MILLIONS</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure\n    that supports Google's largest applications.</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions></div></div>",
        })
    ], Modal3Component);
    return Modal3Component;
}());

var Modal2Component = /** @class */ (function () {
    function Modal2Component(data) {
        this.data = data;
    }
    Modal2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-modal2',
            template: "<div class=\"col-xl-12\"><div class=\"col-xl-12\"><h1 mat-dialog-title>Favorite Animal</h1>\n\t<div mat-dialog-content>\n\t  My favorite animal is:\n\t  <ul>\n\t\t<li>\n\t\t  <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n\t\t</li>\n\t\t<li>\n\t\t  <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n\t\t</li>\n\t\t<li>\n\t\t  <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n\t\t</li>\n\t  </ul>\n\t</div>\n\t</div>\n\t</div>\n\t",
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], Modal2Component);
    return Modal2Component;
}());

var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-modal',
            template: "\n\t<div class=\"col-xl-12\">\n\t<div class=\"col-xl-12\">\n\t\t<br />\n\t\t<h1 mat-dialog-title>Hi {{data.name}}</h1>\n\t\t<div mat-dialog-content>\n\t\t  <p>What's your favorite animal?</p>\n\t\t  <mat-form-field>\n\t\t\t<input matInput [(ngModel)]=\"data.animal\">\n\t\t  </mat-form-field>\n\t\t</div>\n\t\t<div mat-dialog-actions>\n\t\t  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n\t\t  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n\t\t</div>\n\t\t<br />\n\t</div>\n\t</div>",
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ModalComponent);
    return ModalComponent;
}());

var basic = {
    beforeCodeTitle: 'Dialog Overview',
    htmlCode: "\n\t\t<h1 mat-dialog-title>Hi {{data.name}}</h1>\n\t\t<div mat-dialog-content>\n\t\t  <p>What's your favorite animal?</p>\n\t\t  <mat-form-field>\n\t\t\t<input matInput [(ngModel)]=\"data.animal\">\n\t\t  </mat-form-field>\n\t\t</div>\n\t\t<div mat-dialog-actions>\n\t\t  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n\t\t  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n\t\t</div>\n",
    tsCode: "\nimport {Component, Inject} from '@angular/core';\nimport {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';\n\n/**\n* @title Dialog Overview\n*/\n@Component({\n  selector: 'dialog-overview-example',\n  templateUrl: 'dialog-overview-example.html',\n  styleUrls: ['dialog-overview-example.css'],\n})\nexport class DialogOverviewExample {\n\n  animal: string;\n  name: string;\n\n  constructor(public dialog: MatDialog) {}\n\n  openDialog(): void {\n    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {\n      width: '250px',\n      data: { name: this.name, animal: this.animal }\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log('The dialog was closed');\n      this.animal = result;\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-overview-example-dialog',\n  template: `\n    <h1 mat-dialog-title>Hi {{data.name}}</h1>\n    <div mat-dialog-content>\n      <p>What's your favorite animal?</p>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"data.animal\">\n      </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n      <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n    </div>`\n})\nexport class DialogOverviewExampleDialog {\n\n  constructor(\n    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,\n      @Inject(MAT_DIALOG_DATA) public data: any) { }\n\n  onNoClick(): void {\n    this.dialogRef.close();\n  }\n\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var injecting = {
    beforeCodeTitle: 'Injecting data when opening a dialog',
    htmlCode: '<button mat-button (click)="openDialog()">Open dialog</button>',
    tsCode: "\nimport {Component, Inject} from '@angular/core';\nimport {MatDialog, MAT_DIALOG_DATA} from '@angular/material';\n\n/**\n* @title Injecting data when opening a dialog\n*/\n@Component({\n  selector: 'dialog-data-example',\n  templateUrl: 'dialog-data-example.html',\n  styleUrls: ['dialog-data-example.css']\n})\nexport class DialogDataExample {\n  constructor(public dialog: MatDialog) {}\n\n  openDialog() {\n    this.dialog.open(DialogDataExampleDialog, {\n      data: {\n        animal: 'panda'\n     }\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-data-example-dialog',\n  template: `\n    <h1 mat-dialog-title>Favorite Animal</h1>\n    <div mat-dialog-content>\n      My favorite animal is:\n      <ul>\n        <li>\n          <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n        </li>\n        <li>\n          <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n        </li>\n        <li>\n          <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n        </li>\n      </ul>\n    </div>\n\t`,\n})\nexport class DialogDataExampleDialog {\n  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var header = {
    beforeCodeTitle: 'Dialog with header, scrollable content and actions',
    htmlCode: "\n<button mat-button (click)=\"openDialog()\">Open dialog</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatDialog} from '@angular/material';\n\n/**\n* @title Dialog with header, scrollable content and actions\n*/\n@Component({\n  selector: 'dialog-content-example',\n  templateUrl: 'dialog-content-example.html',\n  styleUrls: ['dialog-content-example.css'],\n})\nexport class DialogContentExample {\n  constructor(public dialog: MatDialog) {}\n\n  openDialog() {\n    const dialogRef = this.dialog.open(DialogContentExampleDialog, {\n      height: '350px'\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(`Dialog result: ${result}`);\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-content-example-dialog',\n  templateUrl: 'dialog-content-example-dialog.html',\n})\nexport class DialogContentExampleDialog {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
        this.animal2 = '';
        this.animalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animal$ = this.animalSubject.asObservable();
        this.animal$.subscribe(function (result) { _this.animal = result; });
        this.exampleBasic = basic;
        this.exampleInjecting = injecting;
        this.examplHeader = header;
    };
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ModalComponent, {
            width: '280px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.animalSubject.next(result);
            }
        });
    };
    DialogComponent.prototype.openDialog2 = function () {
        this.dialog.open(Modal2Component, {
            data: {
                animal: 'panda'
            }
        });
    };
    DialogComponent.prototype.openDialog3 = function () {
        var dialogRef = this.dialog.open(Modal3Component, {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/content/pages/components/material/popups-and-modals/dialog/dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/material-tooltip/material-tooltip.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/material-tooltip/material-tooltip.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/tooltip/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThe Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<span matTooltip=\"Tooltip!\">I have a tooltip</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomPosition\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\r\n\t\t\t\t\t\t<span>Show tooltip:</span>&nbsp;&nbsp;\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-select class=\"example-select\" [(ngModel)]=\"position\">\r\n\t\t\t\t\t\t\t\t<mat-option value=\"before\">Before</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"after\">After</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"above\">Above</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"below\">Below</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"left\">Left</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"right\">Right</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleShowHigh\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<b>Show and hide delays:</b>\r\n\t\t\t\t\tTo add a delay before showing or hiding the tooltip, you can use the inputs\r\n\t\t\t\t\t<mark>matTooltipShowDelay</mark> and\r\n\t\t\t\t\t<mark>matTooltipHideDelay</mark> to provide a delay time in milliseconds.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button mat-raised-button matTooltip=\"Tooltip!\" matTooltipShowDelay=\"1000\">\r\n\t\t\t\t\t\tMy tooltip waits one second to show\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<button mat-raised-button matTooltip=\"Tooltip!\" matTooltipHideDelay=\"2000\">\r\n\t\t\t\t\t\tMy tooltip waits two seconds to hide\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t <m-material-preview [viewItem]=\"exampleDelay\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t\t<b>Changing the default delay behavior:</b>\r\n\t\t\t\t\t\tYou can configure your app's tooltip default show/hide delays by configuring and providing your options using the <mark>MAT_TOOLTIP_DEFAULT_OPTIONS</mark> injection token.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t\t<button mat-raised-button matTooltip=\"By default, I delay\">\r\n\t\t\t\t\t\t\t\tButton with delay-default tooltip\r\n\t\t\t\t\t\t\t  </button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleManually\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t\t<b>Manually calling show() and hide():</b>\r\n\t\t\t\t\t\tTo manually cause the tooltip to show or hide, you can call the <mark>show</mark> and <mark>hide</mark> directive methods, which both accept a number in milliseconds to delay before applying the display change.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t\t<button mat-raised-button (click)=\"tooltip.show()\"> Show tooltip </button>\r\n\r\n\t\t\t\t\t\t<span matTooltip=\"This is the tooltip message\" #tooltip=\"matTooltip\">\r\n\t\t\t\t\t\t  I have a tooltip\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</m-material-preview> \r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/material-tooltip/material-tooltip.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/material-tooltip/material-tooltip.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: MaterialTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTooltipComponent", function() { return MaterialTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basic = {
    beforeCodeTitle: 'Basic table',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!--- Note that these columns can be defined in any order.\n\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n/**\n* @title Basic tooltip\n*/\n@Component({\n  selector: 'tooltip-overview-example',\n  templateUrl: 'tooltip-overview-example.html',\n  styleUrls: ['tooltip-overview-example.css'],\n})\nexport class TooltipOverviewExample {}\n\t\t",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var customPosition = {
    beforeCodeTitle: 'Tooltip with custom position',
    htmlCode: "\n<div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\n  <span>Show tooltip</span>\n  <mat-form-field>\n    <mat-select class=\"example-select\" [(ngModel)]=\"position\">\n      <mat-option value=\"before\">Before</mat-option>\n      <mat-option value=\"after\">After</mat-option>\n      <mat-option value=\"above\">Above</mat-option>\n      <mat-option value=\"below\">Below</mat-option>\n      <mat-option value=\"left\">Left</mat-option>\n      <mat-option value=\"right\">Right</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Tooltip with custom position\n*/\n@Component({\n  selector: 'tooltip-position-example',\n  templateUrl: 'tooltip-position-example.html',\n  styleUrls: ['tooltip-position-example.css'],\n})\nexport class TooltipPositionExample {\n  position = 'before';\n}\n\t\t",
    cssCode: "\n.example-tooltip-host {\n  display: inline-flex;\n  align-items: center;\n  margin: 50px;\n}\n.example-select {\n  margin: 0 10px;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var showHigh = {
    beforeCodeTitle: 'Tooltip with a show and hide delay',
    beforeCodeDescription: "",
    htmlCode: "\n<button mat-raised-button matTooltip=\"Tooltip!\" matTooltipShowDelay=\"1000\">\n  My tooltip waits one second to show\n</button>\n<button mat-raised-button matTooltip=\"Tooltip!\" matTooltipHideDelay=\"2000\">\n  My tooltip waits two seconds to hide\n</button>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Tooltip with a show and hide delay\n*/\n@Component({\n  selector: 'tooltip-delay-example',\n  templateUrl: 'tooltip-delay-example.html',\n  styleUrls: ['tooltip-delay-example.css'],\n})\nexport class TooltipDelayExample {}\n",
    cssCode: "\nbutton {\n  margin: 8px;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var delay = {
    beforeCodeTitle: 'Tooltip with a show and hide delay',
    htmlCode: "\n<button mat-raised-button matTooltip=\"By default, I delay\">\n  Button with delay-default tooltip\n</button>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material';\n\n/** Custom options the configure the tooltip's default show/hide delays. */\nexport const myCustomTooltipDefaults: MatTooltipDefaultOptions = {\n  showDelay: 1000,\n  hideDelay: 1000,\n  touchendHideDelay: 1000,\n};\n\n/**\n* @title Tooltip with a show and hide delay\n*/\n@Component({\n  selector: 'tooltip-modified-defaults-example',\n  templateUrl: 'tooltip-modified-defaults-example.html',\n  styleUrls: ['tooltip-modified-defaults-example.css'],\n  providers: [\n    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}\n  ],\n})\nexport class TooltipModifiedDefaultsExample {}\n\t\t",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var manually = {
    beforeCodeTitle: 'Tooltip that can be manually shown/hidden.',
    htmlCode: "\n<button mat-raised-button (click)=\"tooltip.show()\"> Show tooltip </button>\n<span matTooltip=\"This is the tooltip message\" #tooltip=\"matTooltip\">\n  I have a tooltip\n</span>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Tooltip that can be manually shown/hidden.\n*/\n@Component({\n  selector: 'tooltip-manual-example',\n  templateUrl: 'tooltip-manual-example.html',\n  styleUrls: ['tooltip-manual-example.css'],\n})\nexport class TooltipManualExample {}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var MaterialTooltipComponent = /** @class */ (function () {
    function MaterialTooltipComponent() {
        this.position = 'before';
    }
    MaterialTooltipComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleCustomPosition = customPosition;
        this.exampleShowHigh = showHigh;
        this.exampleDelay = delay;
        this.exampleManually = manually;
    };
    MaterialTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-material-tooltip',
            template: __webpack_require__(/*! ./material-tooltip.component.html */ "./src/app/content/pages/components/material/popups-and-modals/material-tooltip/material-tooltip.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        })
    ], MaterialTooltipComponent);
    return MaterialTooltipComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/snackbar/pizza-party.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/snackbar/pizza-party.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PizzaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function() { return PizzaPartyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-snack-bar-component-example-snack',
            template: "\n\t<span class=\"example-pizza-party\">Pizza party!!! \uD83C\uDF55</span>\n\t",
            styles: [".example-pizza-party { color: hotpink; }"],
        })
    ], PizzaPartyComponent);
    return PizzaPartyComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/snackbar/snackbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/snackbar/snackbar.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://material.angular.io/components/snack-bar/overview\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<mark>MatSnackBar</mark> is a service for displaying snack-bar notifications.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput value=\"Dance\" placeholder=\"Action\" #action>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t<m-material-preview [viewItem]=\"exampleCustom\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button mat-button (click)=\"openSnackBar2()\" aria-label=\"Show an example snack-bar\">\r\n\t\t\t\t\t\tPizza party\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleDismissal\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t<mark>Dismissal</mark> example with 6 seconds duration\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput value=\"Dance\" placeholder=\"Action\" #action>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t<button mat-button (click)=\"openSnackBar3(message.value, action.value)\">Show snack-bar</button>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/material/popups-and-modals/snackbar/snackbar.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/content/pages/components/material/popups-and-modals/snackbar/snackbar.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pizza_party_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizza-party.component */ "./src/app/content/pages/components/material/popups-and-modals/snackbar/pizza-party.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var basic = {
    beforeCodeTitle: 'Basic snack-bar',
    htmlCode: "\n<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatSnackBar} from '@angular/material';\n\n/**\n* @title Basic snack-bar\n*/\n@Component({\n  selector: 'snack-bar-overview-example',\n  templateUrl: 'snack-bar-overview-example.html',\n  styleUrls: ['snack-bar-overview-example.css'],\n})\nexport class SnackBarOverviewExample {\n  constructor(public snackBar: MatSnackBar) {}\n\n  openSnackBar(message: string, action: string) {\n    this.snackBar.open(message, action, {\n      duration: 2000,\n    });\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var custom = {
    beforeCodeTitle: 'Snack-bar with a custom component',
    htmlCode: "\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatSnackBar} from '@angular/material';\n\n/**\n* @title Snack-bar with a custom component\n*/\n@Component({\n  selector: 'snack-bar-component-example',\n  templateUrl: 'snack-bar-component-example.html',\n})\nexport class SnackBarComponentExample {\n  constructor(public snackBar: MatSnackBar) {}\n\n  openSnackBar() {\n    this.snackBar.openFromComponent(PizzaPartyComponent, {\n      duration: 500,\n    });\n  }\n}\n\n@Component({\n  selector: 'snack-bar-component-example-snack',\n  template: `\n\t<span _ngcontent-c3=\"\" class=\"example-pizza-party\">\n      Pizza party!!! \uD83C\uDF55\n    </span>`,\n  styles: [`.example-pizza-party { color: hotpink; }`],\n})\nexport class PizzaPartyComponent {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var dismissal = {
    beforeCodeTitle: 'Dismissal example with 6 seconds duration',
    htmlCode: "\n<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatSnackBar} from '@angular/material';\n\n/**\n* @title Basic snack-bar\n*/\n@Component({\n  selector: 'snack-bar-overview-example',\n  templateUrl: 'snack-bar-overview-example.html',\n  styleUrls: ['snack-bar-overview-example.css'],\n})\nexport class SnackBarOverviewExample {\n  constructor(public snackBar: MatSnackBar) {}\n\n  openSnackBar(message: string, action: string) {\n    this.snackBar.open(message, action, {\n      duration: 2000,\n    });\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackbarComponent.prototype.openSnackBar2 = function () {
        this.snackBar.openFromComponent(_pizza_party_component__WEBPACK_IMPORTED_MODULE_2__["PizzaPartyComponent"], {
            duration: 500,
        });
    };
    SnackbarComponent.prototype.openSnackBar3 = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 6500,
        });
    };
    SnackbarComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleCustom = custom;
        this.exampleDismissal = dismissal;
    };
    SnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/content/pages/components/material/popups-and-modals/snackbar/snackbar.component.html"),
            styles: ["\n\t"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-material-material-module.js.map