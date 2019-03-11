(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-ngbootstrap-ngbootstrap-module"],{

/***/ "./src/app/content/pages/components/ngbootstrap/accordion/accordion.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/accordion/accordion.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\t\r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/accordion/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleAccordion\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<h3 class=\"m-section__heading\">Self closing</h3>\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\r\n\t\t\t\t\t\t<ngb-panel>\r\n\t\t\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t\t\t<span class=\"card-header--title\">Simple</span>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t\t<ngb-panel>\r\n\t\t\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t\t\t<span class=\"card-header--title\">&#9733;\r\n\t\t\t\t\t\t\t\t\t<b>Fancy</b> title &#9733;</span>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t\t<ngb-panel [disabled]=\"true\">\r\n\t\t\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t\t\t<span class=\"card-header--title\">Disabled</span>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t</ngb-accordion>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleOneOpenPanelAtAHome\">\r\n\t\t\t<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\r\n\t\t\t\t<ngb-panel id=\"static-1\">\r\n\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t<span class=\"card-header--title\">Simple</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-panel>\r\n\t\t\t\t<ngb-panel id=\"static-2\">\r\n\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t<span>&#9733;\r\n\t\t\t\t\t\t\t<b>Fancy</b> title &#9733;</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-panel>\r\n\t\t\t\t<ngb-panel id=\"static-3\" [disabled]=\"true\">\r\n\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t<span class=\"card-header--title\">Disabled</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-panel>\r\n\t\t\t</ngb-accordion>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleTogglePanels\">\r\n\t\t\t<ngb-accordion #acc11=\"ngbAccordion\">\r\n\t\t\t\t<ngb-panel id=\"toggle-11\">\r\n\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t<span class=\"card-header--title\">First panel</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-panel>\r\n\t\t\t\t<ngb-panel id=\"toggle-22\">\r\n\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t<span class=\"card-header--title\">Second</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-panel>\r\n\t\t\t</ngb-accordion>\r\n\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t<button class=\"btn btn-primary\" (click)=\"acc11.toggle('toggle-11')\">Toggle first</button>\r\n\t\t\t<button class=\"btn btn-info\" (click)=\"acc11.toggle('toggle-22')\">Toggle second</button>\r\n\r\n\t\t</m-material-preview>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"examplePreventPanelToggle\">\r\n\t\t\t<ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n\t\t\t\t<ngb-panel id=\"preventchange-1\">\r\n\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t<span class=\"card-header--title\">Simple</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-panel>\r\n\t\t\t\t<ngb-panel id=\"preventchange-2\">\r\n\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t<span class=\"card-header--title\">I can't be toggled...</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-panel>\r\n\t\t\t\t<ngb-panel id=\"preventchange-3\">\r\n\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t<span class=\"card-header--title\">I can be opened, but not closed...\"</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-panel>\r\n\t\t\t</ngb-accordion>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfAccordions\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThis accordion uses customized default values.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-accordion #acc33=\"ngbAccordion\" activeIds=\"config-panel-one\" [closeOthers]=\"'true'\" [type]=\"'info'\">\r\n\r\n\t\t\t\t\t\t<ngb-panel id=\"config-panel-one\">\r\n\t\t\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t\t\t<span class=\"card-header--title\">One</span>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t\t<ngb-panel>\r\n\t\t\t\t\t\t\t<ng-template ngbPanelTitle>\r\n\t\t\t\t\t\t\t\t<span class=\"card-header--title\">Two</span>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbPanelContent>\r\n\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-panel>\r\n\t\t\t\t\t</ngb-accordion>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/accordion/accordion.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/accordion/accordion.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var accordion = {
    beforeCodeTitle: 'Accordion',
    htmlCode: "\n<div class=\"m-section\">\n  <h3 class=\"m-section__heading\">Self closing</h3>\n  <div class=\"m-section__content\">\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n\t      <span class=\"card-header--title\">Simple</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat\n          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n\t    </ng-template>\n      </ngb-panel>\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">&#9733;\n\t\t    <b>Fancy</b> title &#9733;\n          </span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t\t  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel [disabled]=\"true\">\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">Disabled</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n          3 wolf moon officia aute,\n\t\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n          moon tempor, sunt aliqua put a bird\n\t\t  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt\n\t\t  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you\n          probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n\t  </ngb-panel>\n    </ngb-accordion>\n   </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'ngbd-accordion-basic',\n  templateUrl: './accordion-basic.html'\n})\nexport class NgbdAccordionBasic {}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var oneOpenPanelAtAHome = {
    beforeCodeTitle: 'One open panel at a time',
    htmlCode: "\n<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n  <ngb-panel id=\"static-1\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Simple</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n      raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"static-2\">\n  <ng-template ngbPanelTitle>\n     <span>&#9733;\n\t\t<b>Fancy</b> title &#9733;\n    </span>\n  </ng-template>\n  <ng-template ngbPanelContent>\n\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\n\tcupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n\ton it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n\tnesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n  </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"static-3\" [disabled]=\"true\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Disabled</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\n\t  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n\t  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson\n\t  cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n      synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n   </ngb-panel>\n</ngb-accordion>",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-accordion-static',\n\ttemplateUrl: './accordion-static.html',\n    styles: [`\n        .card-header--title {\n        display:block;\n    }\n    `],\n})\nexport class NgbdAccordionStatic {\n}",
    viewCode: "",
    isCodeVisible: false
};
var togglePanels = {
    beforeCodeTitle: 'Toggle panels',
    htmlCode: "\n<ngb-accordion #acc11=\"ngbAccordion\">\n  <ngb-panel id=\"toggle-11\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">First panel</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\n\t  labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n      beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"toggle-22\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Second</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\n\t  labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n      beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n<div class=\"m-separator m-separator--dashed\"></div>\n<button class=\"btn btn-primary\" (click)=\"acc11.toggle('toggle-11')\">Toggle first</button>\n<button class=\"btn btn-info\" (click)=\"acc11.toggle('toggle-22')\">Toggle second</button>\n\t  ",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-accordion-toggle',\n  templateUrl: './accordion-toggle.html'\n})\nexport class NgbdAccordionToggle { }\n",
    viewCode: "",
    isCodeVisible: false
};
var preventPanelToggle = {
    beforeCodeTitle: 'Prevent panel toggle',
    htmlCode: "\n<ngb-accordion (panelChange)=\"beforeChange($event)\">\n  <ngb-panel id=\"preventchange-1\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Simple</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\n\t labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n     farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"preventchange-2\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">I can't be toggled...</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n     raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"preventchange-3\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">I can be opened, but not closed...\"</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n      raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-accordion-preventchange',\n    templateUrl: './accordion-preventchange.html',\n})\nexport class NgbdAccordionPreventchange {\n    public beforeChange($event: NgbPanelChangeEvent) {\n\n        if ($event.panelId === 'preventchange-2') {\n            $event.preventDefault();\n        }\n\n        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {\n            $event.preventDefault();\n        }\n    };\n}",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfAccordions = {
    beforeCodeTitle: 'Global configuration of accordions',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    This accordion uses customized default values.\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-accordion #acc33=\"ngbAccordion\" activeIds=\"config-panel-one\">\n      <ngb-panel id=\"config-panel-one\">\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">One</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat\n          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">Two</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\n\t\t  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n\t\t  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n\t\t  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n          synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n   </div>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-accordion-config',\n        templateUrl: './accordion-config.html',\n        providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers\n    })\n\nexport class NgbdAccordionConfig {\n    constructor(config: NgbAccordionConfig) {\n        // customize default values of accordions used by this component tree\n        config.closeOthers = true;\n\t    config.type = 'info';\n    }\n}",
    viewCode: "",
    isCodeVisible: false
};
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(config) {
        // customize default values of accordions used by this component tree
        // config.closeOthers = true;
        //  config.type = 'info';
    }
    AccordionComponent.prototype.ngOnInit = function () {
        this.exampleAccordion = accordion;
        this.exampleOneOpenPanelAtAHome = oneOpenPanelAtAHome;
        this.exampleTogglePanels = togglePanels;
        this.examplePreventPanelToggle = preventPanelToggle;
        this.exampleGlobalConfigurationOfAccordions = globalConfigurationOfAccordions;
    };
    // api methods
    // ng-methods
    AccordionComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    AccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/content/pages/components/ngbootstrap/accordion/accordion.component.html"),
            styles: ["\n\t\t.card-header--title {\n\t\t\tdisplay:block;\n\t\t}\n\t"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]] // add the NgbAccordionConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]])
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/alert/alert.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/alert/alert.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/alert/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicAlert\">\r\n\t\t\t<ngb-alert [dismissible]=\"false\" [type]=\"'success'\">\r\n\t\t\t\t<strong>Well done! </strong> You successfully read this important alert message.\r\n\t\t\t</ngb-alert>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleCloseableAlert\">\r\n\t\t\t<div *ngFor=\"let alert of alerts\">\r\n\t\t\t\t<ngb-alert [dismissible]=\"true\" [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleSelfClosingAlert\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<h3 class=\"m-section__heading\">Self closing</h3>\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tStatic self-closing alert that disappears <strong>after 20 seconds</strong> (refresh the page if it has already disappeared)\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-alert *ngIf=\"!staticAlertClosed\" [type]=\"'brand'\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<h3 class=\"m-section__heading\">Change message</h3>\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tShow a self-closing success message that disappears after 5 seconds.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-alert *ngIf=\"successMessage\" [type]=\"'success'\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomAlert\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tShow a custom alert that can be styled via CSS or SCSS.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-alert type=\"custom\" [dismissible]=\"false\">\r\n\t\t\t\t\t\t<strong>Whoa!</strong> This is a custom alert.</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfAlerts\">\r\n\t\t\t<ngb-alert [dismissible]=\"false\" [type]=\"'success'\">\r\n\t\t\t\tThis alert's type is success and it's not dismissible because the config has been customized\r\n\t\t\t</ngb-alert>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/alert/alert.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/alert/alert.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var basicAlert = {
    beforeCodeTitle: 'Basic Alert',
    htmlCode: "\n<p>\n  <ngb-alert [dismissible]=\"false\" [type]=\"'success'\">\n    <strong>Well done! </strong> You successfully read this important alert message.\n  </ngb-alert>\n</p>",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-alert-basic',\n    templateUrl: './alert-basic.html'\n})\nexport class NgbdAlertBasic {}",
    isCodeVisible: false,
    isExampleExpanded: true
};
var closeableAlert = {
    beforeCodeTitle: 'Closeable Alert ',
    htmlCode: "\n<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\n</p>\n<p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n</p>",
    tsCode: "\nimport { Input, Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-alert-closeable',\n    templateUrl: './alert-closeable.html'\n})\nexport class NgbdAlertCloseable {\n\n    @Input() public alerts: Array<IAlert> = [];\n    private backup: Array<IAlert>;\n\n    constructor() {\n        this.alerts.push({\n            id: 1,\n            type: 'success',\n            message: 'This is an success alert',\n        }, {\n            id: 2,\n            type: 'info',\n            message: 'This is an info alert',\n        }, {\n            id: 3,\n            type: 'warning',\n            message: 'This is a warning alert',\n        }, {\n            id: 4,\n            type: 'danger',\n            message: 'This is a danger alert',\n        }, {\n            id: 5,\n            type: 'primary',\n            message: 'This is a primary alert',\n        }, {\n            id: 6,\n            type: 'secondary',\n            message: 'This is a secondary alert',\n        }, {\n            id: 7,\n            type: 'light',\n            message: 'This is a light alert',\n        }, {\n            id: 8,\n            type: 'dark',\n            message: 'This is a dark alert',\n        });\n        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));\n    }\n\n    public closeAlert(alert: IAlert) {\n\t\tconst index: number = this.alerts.indexOf(alert);\n        this.alerts.splice(index, 1);\n    }\n\n    public reset() {\n        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));\n    }\n}\n\nexport interface IAlert {\n    id: number;\n    type: string;\n    message: string;\n}",
    viewCode: "",
    isCodeVisible: false
};
var selfClosingAlert = {
    beforeCodeTitle: 'Self-Closing Alert',
    htmlCode: "\n<div class=\"m-section\">\n  <h3 class=\"m-section__heading\">Self closing</h3>\n  <span class=\"m-section__sub\">\n    Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <h3 class=\"m-section__heading\">Change message</h3>\n  <span class=\"m-section__sub\">\n    Show a self-closing success message that disappears after 5 seconds.\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n      <p>\n        <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\n      </p>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {Subject} from 'rxjs/Subject';\nimport {debounceTime} from 'rxjs/operator/debounceTime';\n\n@Component({\n    selector: 'ngbd-alert-selfclosing',\n    templateUrl: './alert-selfclosing.html'\n})\nexport class NgbdAlertSelfclosing implements OnInit {\n    private _success = new Subject<string>();\n\n    staticAlertClosed = false;\n    successMessage: string;\n\n    ngOnInit(): void {\n        setTimeout(() => this.staticAlertClosed = true, 20000);\n        this._success.pipe(\n          debounceTime(5000)\n        ).subscribe(() => this.successMessage = null);\n\n        public changeSuccessMessage() {\n            this._success.next(`${new Date()} - Message successfully changed.`);\n        }\n    }\n}",
    viewCode: "",
    isCodeVisible: false
};
var customAlert = {
    beforeCodeTitle: 'Custom Alert',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Show a custom alert that can be styled via CSS or SCSS.\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-alert type=\"custom\" [dismissible]=\"false\">\n      <strong>Whoa!</strong> This is a custom alert.</ngb-alert>\n  </div>\n</div>\n\t",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-alert-custom',\n    templateUrl: './alert-custom.html',\n\tstyles: [`\n\t    :host >>> .alert-custom {\n            color: #99004d;\n            background-color: #f169b4;\n            border-color: #800040;\n        }\n    `]\n})\nexport class NgbdAlertCustom {}",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfAlerts = {
    beforeCodeTitle: 'Global configuration of alerts',
    htmlCode: "\n<p>\n  <ngb-alert>\n    This alert's type is success and it's not dismissible because the config has been customized\n  </ngb-alert>\n</p>",
    tsCode: "\nimport {Component, Input} from '@angular/core';\nimport {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-alert-config',\n\ttemplateUrl: './alert-config.html',\n    // add NgbAlertConfig  to the component providers\n    providers: [NgbAlertConfig]\n})\nexport class NgbdAlertConfig {\n    @Input() public alerts: Array<string> = [];\n\n    constructor(alertConfig: NgbAlertConfig) {\n        // customize default values of alerts used by this component tree\n        alertConfig.type = 'success';\n        alertConfig.dismissible = false;\n    }\n}",
    viewCode: "",
    isCodeVisible: false
};
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertConfig) {
        // customize default values of alerts used by this component tree
        // alertConfig.type = 'success';
        // alertConfig.dismissible = false;
        this.alerts = [];
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
        }, {
            id: 5,
            type: 'brand',
            message: 'This is a brand  alert'
        }, {
            id: 6,
            type: 'primary',
            message: 'This is a primary alert'
        });
        this.backup = this.alerts.map(function (alert) {
            return Object.assign({}, alert);
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleBasicAlert = basicAlert;
        this.exampleCloseableAlert = closeableAlert;
        this.exampleSelfClosingAlert = selfClosingAlert;
        this.exampleCustomAlert = customAlert;
        this.exampleGlobalConfigurationOfAlerts = globalConfigurationOfAlerts;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    AlertComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    AlertComponent.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) {
            return Object.assign({}, alert);
        });
    };
    AlertComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AlertComponent.prototype, "alerts", void 0);
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/content/pages/components/ngbootstrap/alert/alert.component.html"),
            styles: [
                "\n    \t:host >>> .alert-custom {\n\t\t\tcolor: #99004d;\n\t\t\tbackground-color: #f169b4;\n\t\t\tborder-color: #800040;\n    \t}"
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertConfig"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/buttons/buttons.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/buttons/buttons.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/buttons/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleCheckboxButtons\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tClick buttons to get the result:\r\n\t\t\t\t\t<pre>{{modelFirst | json}}</pre>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"btn-group btn-group-toggle\">\r\n\t\t\t\t\t\t<label class=\"btn-primary\" ngbButtonLabel>\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.left\"> Left (pre-checked)\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label class=\"btn-success\" ngbButtonLabel>\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.middle\"> Middle\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label class=\"btn-info\" ngbButtonLabel>\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.right\"> Right\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleCheckboxButtonsReactiveForms\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tClick buttons to get the result:\r\n\t\t\t\t\t<pre>{{checkboxGroupForm.value | json}}</pre>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form [formGroup]=\"checkboxGroupForm\">\r\n\t\t\t\t\t\t<div class=\"btn-group btn-group-toggle\">\r\n\t\t\t\t\t\t\t<label class=\"btn-warning\" ngbButtonLabel>\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"btn-danger\" ngbButtonLabel>\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"btn-success\" ngbButtonLabel>\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleRadioButtons\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tClick buttons to get the result:\r\n\t\t\t\t\t<pre>{{secondModel}}</pre>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"secondModel\">\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-primary\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-info\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-danger\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" [value]=\"false\"> Right\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleRadioButtonsReactiveForms\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tClick buttons to get the result:\r\n\t\t\t\t\t<pre>{{radioGroupForm.value['model']}}</pre>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form [formGroup]=\"radioGroupForm\">\r\n\t\t\t\t\t\t<div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\r\n\t\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-warning\">\r\n\t\t\t\t\t\t\t\t<input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-success\">\r\n\t\t\t\t\t\t\t\t<input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-info\">\r\n\t\t\t\t\t\t\t\t<input ngbButton type=\"radio\" [value]=\"false\"> Right\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/buttons/buttons.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/buttons/buttons.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
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


var checkboxButtons = {
    beforeCodeTitle: 'Checkbox buttons',
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Click buttons to get the result:\n    <pre>{{modelFirst | json}}</pre>\n  </span>\n  <div class=\"m-section__content\">\n    <div class=\"btn-group btn-group-toggle\">\n      <label class=\"btn-primary\" ngbButtonLabel>\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.left\"> Left (pre-checked)\n      </label>\n      <label class=\"btn-success\" ngbButtonLabel>\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.middle\"> Middle\n      </label>\n      <label class=\"btn-info\" ngbButtonLabel>\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.right\"> Right\n       </label>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-buttons-checkbox',\n    templateUrl: './buttons-checkbox.html'\n})\nexport class NgbdButtonsCheckbox {\n    model = {\n    left: true,\n    middle: false,\n    right: false\n  };\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var checkboxButtonsReactiveForms = {
    beforeCodeTitle: 'Checkbox buttons (Reactive Forms)',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Click buttons to get the result:\n    <pre>{{checkboxGroupForm.value | json}}</pre>\n  </span>\n  <div class=\"m-section__content\">\n    <form [formGroup]=\"checkboxGroupForm\">\n      <div class=\"btn-group btn-group-toggle\">\n        <label class=\"btn-warning\" ngbButtonLabel>\n          <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\n        </label>\n        <label class=\"btn-danger\" ngbButtonLabel>\n          <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\n        </label>\n        <label class=\"btn-success\" ngbButtonLabel>\n          <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\n        </label>\n      </div>\n     </form>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-buttons-checkbox',\n    templateUrl: './buttons-checkbox.html'\n})\nexport class NgbdButtonsCheckbox {\n    model = {\n        left: true,\n        middle: false,\n        right: false\n    };\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var radioButtons = {
    beforeCodeTitle: 'Radio buttons',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Click buttons to get the result:\n    <pre>{{secondModel}}</pre>\n  </span>\n  <div class=\"m-section__content\">\n    <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"secondModel\">\n      <label ngbButtonLabel class=\"btn-primary\">\n        <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n      </label>\n      <label ngbButtonLabel class=\"btn-info\">\n        <input ngbButton type=\"radio\" value=\"middle\"> Middle\n      </label>\n      <label ngbButtonLabel class=\"btn-danger\">\n        <input ngbButton type=\"radio\" [value]=\"false\"> Right\n      </label>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-buttons-radio',\n    templateUrl: './buttons-radio.html'\n})\nexport class NgbdButtonsRadio {\n    model = 1;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var radioButtonsReactiveForms = {
    beforeCodeTitle: 'Radio buttons (Reactive Forms)',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Click buttons to get the result:\n    <pre>{{radioGroupForm.value['model']}}</pre>\n  </span>\n  <div class=\"m-section__content\">\n    <form [formGroup]=\"radioGroupForm\">\n      <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n        <label ngbButtonLabel class=\"btn-warning\">\n          <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n        </label>\n        <label ngbButtonLabel class=\"btn-success\">\n          <input ngbButton type=\"radio\" value=\"middle\"> Middle\n        </label>\n        <label ngbButtonLabel class=\"btn-info\">\n          <input ngbButton type=\"radio\" [value]=\"false\"> Right\n        </label>\n      </div>\n    </form>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {FormBuilder, FormGroup} from '@angular/forms';\n\n@Component({\n    selector: 'ngbd-buttons-radioreactive',\n    templateUrl: './buttons-radioreactive.html'\n})\nexport class NgbdButtonsRadioreactive implements OnInit {\n    public radioGroupForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    ngOnInit() {\n        this.radioGroupForm = this.formBuilder.group({\n            'model': 1\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.modelFirst = {
            left: true,
            middle: false,
            right: false
        };
        this.secondModel = 1;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        this.exampleCheckboxButtons = checkboxButtons;
        this.exampleCheckboxButtonsReactiveForms = checkboxButtonsReactiveForms;
        this.exampleRadioButtons = radioButtons;
        this.exampleRadioButtonsReactiveForms = radioButtonsReactiveForms;
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
            model: 1
        });
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/content/pages/components/ngbootstrap/buttons/buttons.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/carousel/carousel.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/carousel/carousel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/carousel/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<m-material-preview [viewItem]=\"exampleCarousel\">\r\n\t\t\t<ngb-carousel *ngIf=\"images\">\r\n\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t<img [src]=\"images[0]\" alt=\"Random first slide\" style=\"width: 100%\">\r\n\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t<h3>First slide label</h3>\r\n\t\t\t\t\t\t<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t<img [src]=\"images[1]\" alt=\"Random second slide\" style=\"width: 100%\">\r\n\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t<h3>Second slide label</h3>\r\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t<img [src]=\"images[2]\" alt=\"Random third slide\" style=\"width: 100%\">\r\n\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t<h3>Third slide label</h3>\r\n\t\t\t\t\t\t<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ngb-carousel>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-12\">\r\n\t\t<m-material-preview [viewItem]=\"exampleNavigationArrowsAndIndicatorsCarousel\">\r\n\t\t\t<ngb-carousel *ngIf=\"thirdImages\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\r\n\t\t\t\t<ng-template ngbSlide *ngFor=\"let image of images\">\r\n\t\t\t\t\t<img [src]=\"image\" alt=\"Random slide\" style=\"width: 100%\">\r\n\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t<h3>No mouse navigation</h3>\r\n\t\t\t\t\t\t<p>This carousel hides navigation arrows and indicators.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ngb-carousel>\r\n\t\t\t<hr />\r\n\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Carousel toggle controls\">\r\n\t\t\t\t<button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\r\n\t\t\t\t<button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-12\">\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfCarousels\">\r\n\t\t\t<ngb-carousel *ngIf=\"secondImages\">\r\n\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t<img [src]=\"secondImages[0]\" alt=\"Random first slide\" style=\"width: 100%\">\r\n\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t<h3>10 seconds between slides...</h3>\r\n\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t<img [src]=\"secondImages[1]\" alt=\"Random second slide\" style=\"width: 100%\">\r\n\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t<h3>No keyboard...</h3>\r\n\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t<img [src]=\"secondImages[2]\" alt=\"Random third slide\" style=\"width: 100%\">\r\n\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t<h3>And no wrap after last slide.</h3>\r\n\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ngb-carousel>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/carousel/carousel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/carousel/carousel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var carousel = {
    beforeCodeTitle: 'Carousel',
    htmlCode: "\n<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n  </ng-template>\n</ngb-carousel>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {HttpClient} from '@angular/common/http';\nimport {map} from 'rxjs/operators';\n\n@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})\nexport class NgbdCarouselBasic implements OnInit {\n    images: Array<string>;\n\n    constructor(private _http: HttpClient) {}\n\n    ngOnInit() {\n        this._http.get('https://picsum.photos/list')\n            .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))\n            .subscribe(images => this.images = images);\n    }\n\n    private _randomImageUrls(images: Array<{id: number}>): Array<string> {\n        return [1, 2, 3].map(() => {\n            const randomId = images[Math.floor(Math.random() * images.length)].id;\n            return `https://picsum.photos/900/500?image=${randomId}`;\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var navigationArrowsAndIndicatorsCarousel = {
    beforeCodeTitle: 'Navigation arrows and indicators',
    htmlCode: "\n<ngb-carousel *ngIf=\"images\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\n  <ng-template ngbSlide *ngFor=\"let image of images\">\n    <img [src]=\"image\" alt=\"Random slide\" />\n    <div class=\"carousel-caption\">\n      <h3>No mouse navigation</h3>\n      <p>This carousel hides navigation arrows and indicators.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n<hr />\n<div class=\"btn-group\" role=\"group\" aria-label=\"Carousel toggle controls\">\n  <button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\"\n    class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\n  <button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\"\n    class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\n  </div>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';\nimport {map} from 'rxjs/operators';\nimport {HttpClient} from '@angular/common/http';\n\n@Component({\n  selector: 'ngbd-carousel-navigation',\n  templateUrl: './carousel-navigation.html',\n  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers\n})\nexport class NgbdCarouselNavigation implements OnInit {\n  showNavigationArrows = false;\n  showNavigationIndicators = false;\n  images: Array<string>;\n\n\n  constructor(config: NgbCarouselConfig, private _http: HttpClient) {\n    // customize default values of carousels used by this component tree\n    config.showNavigationArrows = true;\n    config.showNavigationIndicators = true;\n  }\n\n\n  ngOnInit() {\n    this._http.get('https://picsum.photos/list')\n      .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))\n      .subscribe(images => this.images = images);\n  }\n\n\n  private _randomImageUrls(images: Array<{id: number}>): Array<string> {\n    return [1, 2].map(() => {\n      const randomId = images[Math.floor(Math.random() * images.length)].id;\n      return `https://picsum.photos/900/500?image=${randomId}`;\n    });\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var globalConfigurationOfCarousels = {
    beforeCodeTitle: 'Global configuration of carousels',
    htmlCode: "\n<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>10 seconds between slides...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\"  alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>No keyboard...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\n    <div class=\"carousel-caption\">\n      <h3>And no wrap after last slide.</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';\nimport {map} from 'rxjs/operators';\nimport {HttpClient} from '@angular/common/http';\n\n@Component({\n    selector: 'ngbd-carousel-config',\n    templateUrl: './carousel-config.html',\n    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers\n})\nexport class NgbdCarouselConfig implements OnInit {\n    images: Array<string>;\n\n    constructor(config: NgbCarouselConfig, private _http: HttpClient) {\n        // customize default values of carousels used by this component tree\n        config.interval = 10000;\n        config.wrap = false;\n        config.keyboard = false;\n    }\n\n    ngOnInit() {\n        this._http.get('https://picsum.photos/list')\n            .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))\n            .subscribe(images => this.images = images);\n    }\n\n    private _randomImageUrls(images: Array<{id: number}>): Array<string> {\n        return [1, 2, 3].map(() => {\n            const randomId = images[Math.floor(Math.random() * images.length)].id;\n            return `https://picsum.photos/900/500?image=${randomId}`;\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(_http, config) {
        this._http = _http;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleCarousel = carousel;
        this.exampleGlobalConfigurationOfCarousels = globalConfigurationOfCarousels;
        this.exampleNavigationArrowsAndIndicatorsCarousel = navigationArrowsAndIndicatorsCarousel;
        this._http.get('https://picsum.photos/list')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (images) { return _this._randomImageUrls(images); }))
            .subscribe(function (images) { return _this.images = images; });
        this._http.get('https://picsum.photos/list')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (images) { return _this._randomImageUrls(images); }))
            .subscribe(function (images) { return _this.secondImages = images; });
        this._http.get('https://picsum.photos/list')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (images) { return _this._randomImageUrls(images); }))
            .subscribe(function (images) { return _this.thirdImages = images; });
    };
    CarouselComponent.prototype._randomImageUrls = function (images) {
        return [1, 2, 3].map(function () {
            var randomId = images[Math.floor(Math.random() * images.length)].id;
            return "https://picsum.photos/900/500?image=" + randomId;
        });
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/content/pages/components/ngbootstrap/carousel/carousel.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/collapse/collapse.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/collapse/collapse.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/collapse/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<m-material-preview [viewItem]=\"exampleDemo\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" \r\n\t\t\t\t\t\tclass=\"btn btn-primary\" \r\n\t\t\t\t\t\t(click)=\"isCollapsed = !isCollapsed\" \r\n\t\t\t\t\t\t[attr.aria-expanded]=\"!isCollapsed\" \r\n\t\t\t\t\t\taria-controls=\"collapseExample\">\r\n\t\t\t\t\t\tToggle\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\tYou can collapse this card by clicking Toggle\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/collapse/collapse.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/collapse/collapse.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseComponent", function() { return CollapseComponent; });
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

var demo = {
    beforeCodeTitle: 'Demo',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <button type=\"button\"\n      class=\"btn btn-primary\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\"\n      aria-controls=\"collapseExample\">\n      Toggle\n    </button>\n  </div>\n  <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        You can collapse this card by clicking Toggle\n      </div>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-collapse-basic',\n    templateUrl: './collapse-basic.html'\n})\nexport class NgbdCollapseBasic {\n    public isCollapsed = false;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
    }
    CollapseComponent.prototype.ngOnInit = function () {
        this.exampleDemo = demo;
    };
    CollapseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-collapse',
            template: __webpack_require__(/*! ./collapse.component.html */ "./src/app/content/pages/components/ngbootstrap/collapse/collapse.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [])
    ], CollapseComponent);
    return CollapseComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/datepicker/datepicker.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/datepicker/datepicker.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/datepicker/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicDatepicker\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">Simple datepicker</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__heading\">\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"selectToday()\">Select Today</button>&nbsp;\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-info\" (click)=\"dp.navigateTo()\">To current month</button>&nbsp;\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-danger\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Month: {{ date.month }}.{{ date.year }}</pre>\r\n\t\t\t\t\t<pre>Model: {{ model | json }}</pre>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDatepickerInAPopup\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__heading\">\r\n\t\t\t\t\t<pre>Model: {{ secondModel | json }}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form class=\"form-inline\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\" \r\n\t\t\t\t\t\t\t\t\tname=\"dp\" \r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"secondModel\" \r\n\t\t\t\t\t\t\t\t\tngbDatepicker \r\n\t\t\t\t\t\t\t\t\t#dd=\"ngbDatepicker\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"dd.toggle()\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleMultipleMonths\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\"></ngb-datepicker>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form class=\"form-inline\">\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\" ngbDatepicker #d=\"ngbDatepicker\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t<div class=\"m-section m-form__group\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\r\n\t\t\t\t\t<select class=\"custom-select m-input\" [(ngModel)]=\"displayMonths\">\r\n\t\t\t\t\t\t<option [ngValue]=\"1\">One month</option>\r\n\t\t\t\t\t\t<option [ngValue]=\"2\">Two months</option>\r\n\t\t\t\t\t\t<option [ngValue]=\"3\">Three months</option>\r\n\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t<select class=\"custom-select m-input\" [(ngModel)]=\"navigation\">\r\n\t\t\t\t\t\t<option value=\"none\">Without navigation</option>\r\n\t\t\t\t\t\t<option value=\"select\">With select boxes</option>\r\n\t\t\t\t\t\t<option value=\"arrows\">Without select boxes</option>\r\n\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t<select class=\"custom-select m-input\" [(ngModel)]=\"showWeekNumbers\">\r\n\t\t\t\t\t\t<option [ngValue]=\"true\">Week numbers</option>\r\n\t\t\t\t\t\t<option [ngValue]=\"false\">No week numbers</option>\r\n\t\t\t\t\t</select>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleRangeSelection\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">Example of the range selection</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-datepicker #dp ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\">\r\n\t\t\t\t\t</ngb-datepicker>\r\n\r\n\t\t\t\t\t<ng-template #t let-date=\"date\" let-focused=\"focused\">\r\n\t\t\t\t\t\t<span class=\"custom-day\" [class.focused]=\"focused\" \r\n\t\t\t\t\t\t\t[class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\" \r\n\t\t\t\t\t\t\t[class.faded]=\"isHovered(date) || isInside(date)\" \r\n\t\t\t\t\t\t\t(mouseenter)=\"hoveredDate = date\" \r\n\t\t\t\t\t\t\t(mouseleave)=\"hoveredDate = null\">\r\n\t\t\t\t\t\t\t{{ date.day }}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>From: {{ fromDate | json }} </pre>\r\n\t\t\t\t\t<pre>To: {{ toDate | json }} </pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDisabledDatepicker\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-datepicker [(ngModel)]=\"thirdModel\" [disabled]=\"disabled\"></ngb-datepicker>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\r\n\t\t\t\t\t\t{{ disabled ? \"disabled\" : \"enabled\"}}\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomDateAdapter\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThese datepickers use custom Date adapter that lets you use your own model implementation. In this example we are converting from and to a JS native Date object\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-datepicker #d1 [(ngModel)]=\"model1\" #c1=\"ngModel\"></ngb-datepicker>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"model1 = today\">Select Today</button>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<pre>Model: {{ model1 | json }}</pre>\r\n\t\t\t\t\t<pre>State: {{ c1.status }}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThese datepickers use custom Date adapter that lets you use your own model implementation. In this example we are converting from and to a JS native Date object\r\n\t\t\t\t</span>\r\n\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form class=\"form-inline\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d22\" #c2=\"ngModel\" [(ngModel)]=\"model2\" ngbDatepicker #d22=\"ngbDatepicker\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"d22.toggle()\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-info\" (click)=\"model2 = today\">Select Today</button>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t\t\t<pre>Model: {{ model2 | json }}</pre>\r\n\t\t\t\t\t<pre>State: {{ c2.status }}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleInternationalizationOfDatepickers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tDatepicker in French\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-datepicker [(ngModel)]=\"fourthModel\"></ngb-datepicker>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomDayView\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThis datepicker uses a custom template to display days. All week-ends are displayed with an orange background.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<form class=\"form-inline\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"fifthModel\" ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #d=\"ngbDatepicker\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t<ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\r\n\t\t\t\t\t\t<span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.focused]=\"focused\" [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\r\n\t\t\t\t\t\t\t{{ date.day }}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfDatepickers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThis datepicker uses customized default values.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-datepicker [(ngModel)]=\"sixModel\"></ngb-datepicker>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/datepicker/datepicker.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/datepicker/datepicker.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NgbDateNativeAdapter, I18n, CustomDatepickerI18n, DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateNativeAdapter", function() { return NgbDateNativeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function() { return CustomDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var now = new Date();
var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var basicDatepicker = {
    beforeCodeTitle: 'Basic datepicker',
    htmlCode: "\n<div class=\"m-section\">\n  <h3 class=\"m-section__heading\">Simple datepicker</h3>\n  <div class=\"m-section__content\">\n    <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__heading\">\n    <button class=\"btn btn-sm btn-primary\" (click)=\"selectToday()\">Select Today</button>\n    <button class=\"btn btn-sm btn-info\" (click)=\"dp.navigateTo()\">To current month</button>\n    <button class=\"btn btn-sm btn-danger\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n  </div>\n  <div class=\"m-section__content\">\n    <pre>Month: {{ date.month }}.{{ date.year }}</pre>\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\nconst now = new Date();\n\n@Component({\n  selector: 'ngbd-datepicker-basic',\n  templateUrl: './datepicker-basic.html'\n})\nexport class NgbdDatepickerBasic {\n\n  model: NgbDateStruct;\n  date: {year: number, month: number};\n\n  selectToday() {\n    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var datepickerInAPopup = {
    beforeCodeTitle: 'Datepicker in a popup',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__heading\">\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n  <div class=\"m-section__content\">\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'ngbd-collapse-basic',\n  templateUrl: './collapse-basic.html'\n})\nexport class NgbdCollapseBasic {\n  public isCollapsed = false;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var multipleMonths = {
    beforeCodeTitle: 'Multiple months',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\"></ngb-datepicker>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <form class=\"form-inline\">\n      <div class=\"form-group m-form__group\">\n        <div class=\"input-group\">\n\t\t  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\"\n           [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\" ngbDatepicker #d=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <select class=\"custom-select m-input\" [(ngModel)]=\"displayMonths\">\n      <option [ngValue]=\"1\">One month</option>\n      <option [ngValue]=\"2\">Two months</option>\n      <option [ngValue]=\"3\">Three months</option>\n    </select>\n    <select class=\"custom-select m-input\" [(ngModel)]=\"navigation\">\n      <option value=\"none\">Without navigation</option>\n      <option value=\"select\">With select boxes</option>\n      <option value=\"arrows\">Without select boxes</option>\n    </select>\n    <select class=\"custom-select m-input\" [(ngModel)]=\"showWeekNumbers\">\n      <option [ngValue]=\"true\">Week numbers</option>\n      <option [ngValue]=\"false\">No week numbers</option>\n    </select>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-datepicker-multiple',\n  templateUrl: './datepicker-multiple.html',\n  styles: [`\n    select.custom-select {\n    margin-right: 0.5rem;\n    width: auto;\n  }\n `]\n})\nexport class NgbdDatepickerMultiple {\n  displayMonths = 2;\n  navigation = 'select';\n  showWeekNumbers = false;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var rangeSelection = {
    beforeCodeTitle: 'Range selection',
    htmlCode: "\n<div class=\"m-section\">\n  <h3 class=\"m-section__heading\">Example of the range selection</h3>\n  <div class=\"m-section__content\">\n    <ngb-datepicker #dp ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\"></ngb-datepicker>\n    <ng-template #t let-date=\"date\" let-focused=\"focused\">\n\t  <span class=\"custom-day\" [class.focused]=\"focused\"\n        [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\" [class.faded]=\"isHovered(date) || isInside(date)\"\n        (mouseenter)=\"hoveredDate = date\" (mouseleave)=\"hoveredDate = null\">\n        {{ date.day }}\n      </span>\n    </ng-template>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <pre>From: {{ fromDate | json }} </pre>\n    <pre>To: {{ toDate | json }} </pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';\n\nconst equals = (one: NgbDateStruct, two: NgbDateStruct) =>\n  one && two && two.year === one.year && two.month === one.month && two.day === one.day;\n\nconst before = (one: NgbDateStruct, two: NgbDateStruct) =>\n  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day\n  ? false : one.day < two.day : one.month < two.month : one.year < two.year;\n\nconst after = (one: NgbDateStruct, two: NgbDateStruct) =>\n  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day\n  ? false : one.day > two.day : one.month > two.month : one.year > two.year;\n\n@Component({\n  selector: 'ngbd-datepicker-range',\n  templateUrl: './datepicker-range.html',\n  styles: [`\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n\t}\n    .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n    .custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n `]\n})\nexport class NgbdDatepickerRange {\n  hoveredDate: NgbDateStruct;\n  fromDate: NgbDateStruct;\n  toDate: NgbDateStruct;\n\n  constructor(calendar: NgbCalendar) {\n    this.fromDate = calendar.getToday();\n    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);\n  }\n\n  onDateChange(date: NgbDateStruct) {\n    if (!this.fromDate && !this.toDate) {\n      this.fromDate = date;\n    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {\n      this.toDate = date;\n    } else {\n      this.toDate = null;\n      this.fromDate = date;\n    }\n  }\n\n  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);\n  isInside = date => after(date, this.fromDate) && before(date, this.toDate);\n  isFrom = date => equals(date, this.fromDate);\n  isTo = date => equals(date, this.toDate);\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var disabledDatepicker = {
    beforeCodeTitle: 'Disabled datepicker',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-datepicker [(ngModel)]=\"model\" [disabled]=\"disabled\"></ngb-datepicker>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <button class=\"btn btn-sm btn-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\n      {{ disabled ? \"disabled\" : \"enabled\"}}\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\nconst now = new Date();\n\n@Component({\n  selector: 'ngbd-datepicker-disabled',\n  templateUrl: './datepicker-disabled.html'\n})\nexport class NgbdDatepickerDisabled {\n  model: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};\n  disabled = true;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var customDateAdapter = {
    beforeCodeTitle: 'Custom date adapter',
    htmlCode: "\n\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n\tThese datepickers use custom Date adapter that lets you use your own model implementation.\n    In this example we are converting from and to a JS native Date object\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-datepicker #d1 [(ngModel)]=\"model1\" #c1=\"ngModel\"></ngb-datepicker>\n    <div class=\"m-separator m-separator--dashed\"></div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"model1 = today\">Select Today</button>\n    <div class=\"m-separator m-separator--dashed\"></div>\n    <pre>Model: {{ model1 | json }}</pre>\n    <pre>State: {{ c1.status }}</pre>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n\tThese datepickers use custom Date adapter that lets you use your own model implementation. In this example we are\n    converting from and to a JS native Date object\n  </span>\n\n  <div class=\"m-section__content\">\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n\t\t  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d22\" #c2=\"ngModel\" [(ngModel)]=\"model2\"\n            ngbDatepicker #d22=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d22.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class=\"m-separator m-separator--dashed\"></div>\n    <button class=\"btn btn-sm btn-info\" (click)=\"model2 = today\">Select Today</button>\n\t<div class=\"m-separator m-separator--dashed\"></div>\n    <pre>Model: {{ model2 | json }}</pre>\n    <pre>State: {{ c2.status }}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Injectable} from '@angular/core';\nimport {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\n/**\n* Example of a Native Date adapter\n*/\n@Injectable()\nexport class NgbDateNativeAdapter extends NgbDateAdapter<Date> {\n  fromModel(date: Date): NgbDateStruct {\n    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;\n  }\n\n  toModel(date: NgbDateStruct): Date {\n    return date ? new Date(date.year, date.month - 1, date.day) : null;\n  }\n}\n\n@Component({\n  selector: 'ngbd-datepicker-adapter',\n  templateUrl: './datepicker-adapter.html',\n\n  // NOTE: For this example we are only providing current component, but probably\n  // NOTE: you will want to provide your main App Module\n  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]\n})\nexport class NgbdDatepickerAdapter {\n  model1: Date;\n  model2: Date;\n\n  get today() {\n    return new Date();\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var iternationalizationOfDatepickers = {
    beforeCodeTitle: 'Internationalization of datepicker',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Datepicker in French\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-datepicker [(ngModel)]=\"fourthModel\"></ngb-datepicker>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Injectable} from '@angular/core';\nimport {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';\n\nconst I18N_VALUES = {\n  'fr': {\n    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],\n    months: ['Jan', 'F\u00E9v', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'D\u00E9c'],\n  }\n  // other languages you would support\n};\n\n// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also\n// use the Angular LOCALE_ID value\n@Injectable()\nexport class I18n {\n  language = 'fr';\n}\n\n// Define custom service providing the months and weekdays translations\n@Injectable()\nexport class CustomDatepickerI18n extends NgbDatepickerI18n {\n  constructor(private _i18n: I18n) {\n    super();\n  }\n\n  getWeekdayShortName(weekday: number): string {\n    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];\n  }\n\n  getMonthShortName(month: number): string {\n    return I18N_VALUES[this._i18n.language].months[month - 1];\n  }\n\n  getMonthFullName(month: number): string {\n    return this.getMonthShortName(month);\n  }\n}\n\n@Component({\n  selector: 'ngbd-datepicker-i18n',\n  templateUrl: './datepicker-i18n.html',\n  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}] // define custom NgbDatepickerI18n provider\n})\nexport class NgbdDatepickerI18n {\n  model;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var customDayView = {
    beforeCodeTitle: 'Custom day view',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.\n  </span>\n  <div class=\"m-section__content\">\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n\t\t  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"fifthModel\" ngbDatepicker\n           [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #d=\"ngbDatepicker\">\n\t      <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n   </form>\n\t<ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\"\n      let-focused=\"focused\">\n\t  <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.focused]=\"focused\" [class.bg-primary]=\"selected\"\n        [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\n        {{ date.day }}\n      </span>\n    </ng-template>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Input} from '@angular/core';\nimport {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n@Component({\n  selector: 'ngbd-datepicker-customday',\n  templateUrl: './datepicker-customday.html',\n  styles: [`\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      border-radius: 0.25rem;\n      display: inline-block;\n      width: 2rem;\n    }\n    .custom-day:hover, .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .weekend {\n      background-color: #f0ad4e;\n      border-radius: 1rem;\n      color: white;\n    }\n    .hidden {\n      display: none;\n    }\n `]\n})\nexport class NgbdDatepickerCustomday {\n  model: NgbDateStruct;\n\n  isWeekend(date: NgbDateStruct) {\n    const d = new Date(date.year, date.month - 1, date.day);\n    return d.getDay() === 0 || d.getDay() === 6;\n  }\n\n  isDisabled(date: NgbDateStruct, current: {month: number}) {\n    return date.month !== current.month;\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var alternativeCalendars = {
    beforeCodeTitle: 'Alternative calendars',
    htmlCode: "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <ngbd-islamic-civil></ngbd-islamic-civil>\n    </div>\n    <div class=\"col\">\n      <ngbd-islamic-umalqura></ngbd-islamic-umalqura>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-collapse-basic',\n    templateUrl: './collapse-basic.html'\n})\nexport class NgbdCollapseBasic {\n    public isCollapsed = false;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var globalConfigurationOfDatepickers = {
    beforeCodeTitle: 'Global configuration of datepickers',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    This datepicker uses customized default values.\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-datepicker [(ngModel)]=\"model\"></ngb-datepicker>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n  selector: 'ngbd-datepicker-config',\n  templateUrl: './datepicker-config.html',\n  providers: [NgbDatepickerConfig] // add NgbDatepickerConfig to the component providers\n})\nexport class NgbdDatepickerConfig {\n  model;\n\n  constructor(config: NgbDatepickerConfig) {\n    // customize default values of datepickers used by this component tree\n    config.minDate = {year: 1900, month: 1, day: 1};\n    config.maxDate = {year: 2099, month: 12, day: 31};\n\n    // days that don't belong to current month are not visible\n    config.outsideDays = 'hidden';\n\n    // weekends are disabled\n    config.markDisabled = (date: NgbDateStruct) => {\n    const d = new Date(date.year, date.month - 1, date.day);\n      return d.getDay() === 0 || d.getDay() === 6;\n     };\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
/**
 * Example of a Native Date adapter
 */
var NgbDateNativeAdapter = /** @class */ (function (_super) {
    __extends(NgbDateNativeAdapter, _super);
    function NgbDateNativeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateNativeAdapter.prototype.fromModel = function (date) {
        return (date && date.getFullYear) ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
    };
    NgbDateNativeAdapter.prototype.toModel = function (date) {
        return date ? new Date(date.year, date.month - 1, date.day) : null;
    };
    NgbDateNativeAdapter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NgbDateNativeAdapter);
    return NgbDateNativeAdapter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"]));

var I18N_VALUES = {
    'fr': {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'fr';
    }
    I18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], I18n);
    return I18n;
}());

// Define custom service providing the months and weekdays translations
var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getDayAriaLabel = function (date) {
        throw new Error('Method not implemented.'); // TODO: implement this
    };
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]));

var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(calendar, config) {
        var _this = this;
        this.displayMonths = 2;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        this.thirdModel = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.disabled = true;
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        // customize default values of datepickers used by this component tree
        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };
        // days that don't belong to current month are not visible
        config.outsideDays = 'hidden';
        // weekends are disabled
        config.markDisabled = function (date) {
            var d = new Date(date.year, date.month - 1, date.day);
            return d.getDay() === 0 || d.getDay() === 6;
        };
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.exampleBasicDatepicker = basicDatepicker;
        this.exampleDatepickerInAPopup = datepickerInAPopup;
        this.exampleMultipleMonths = multipleMonths;
        this.exampleRangeSelection = rangeSelection;
        this.exampleDisabledDatepicker = disabledDatepicker;
        this.exampleCustomDateAdapter = customDateAdapter;
        this.exampleInternationalizationOfDatepickers = iternationalizationOfDatepickers;
        this.exampleCustomDayView = customDayView;
        this.exampleAlternativeCalendar = alternativeCalendars;
        this.exampleGlobalConfigurationOfDatepickers = globalConfigurationOfDatepickers;
    };
    DatepickerComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    Object.defineProperty(DatepickerComponent.prototype, "today", {
        get: function () {
            return new Date();
        },
        enumerable: true,
        configurable: true
    });
    DatepickerComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DatepickerComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    DatepickerComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/content/pages/components/ngbootstrap/datepicker/datepicker.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n    select.custom-select {\n      margin-right: 0.5rem;\n      width: auto;\n\t}\n\t.custom-day {\n\t\ttext-align: center;\n\t\tpadding: 0.185rem 0.25rem;\n\t\tdisplay: inline-block;\n\t\theight: 2rem;\n\t\twidth: 2rem;\n\t  }\n\t  .custom-day.focused {\n\t\tbackground-color: #e6e6e6;\n\t  }\n\t  .custom-day.range, .custom-day:hover {\n\t\tbackground-color: rgb(2, 117, 216);\n\t\tcolor: white;\n\t  }\n\t  .custom-day.faded {\n\t\tbackground-color: rgba(2, 117, 216, 0.5);\n\t  }\n\t  .weekend {\n\t\tbackground-color: #f0ad4e;\n\t\tborder-radius: 1rem;\n\t\tcolor: white;\n\t  }\n\t  .hidden {\n\t\tdisplay: none;\n\t  }\n  "],
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerConfig"]])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/dropdown/dropdown.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/dropdown/dropdown.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/dropdown/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleDropdown\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<div ngbDropdown class=\"d-inline-block\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\r\n\t\t\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col text-right\">\r\n\t\t\t\t\t\t\t<div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-success\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\r\n\t\t\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleManualTriggers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tYou can easily control dropdowns programmatically using the exported dropdown instance.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" id=\"dropdownManual\" ngbDropdownToggle>Toggle dropdown</button>&nbsp;\r\n\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>&nbsp;\r\n\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleButtonGroupsAndSplitButtons\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tBootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\r\n\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\">Plain ol' button</button>&nbsp;\r\n\t\t\t\t\t\t<div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" ngbDropdownToggle>Drop me</button>&nbsp;\r\n\t\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary\">Split me</button>\r\n\t\t\t\t\t\t<div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-primary dropdown-toggle-split\" ngbDropdownToggle></button>&nbsp;\r\n\t\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t<div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" ngbDropdownToggle>Select me</button>&nbsp;\r\n\t\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-success\" ngbDropdownToggle>Or me</button>\r\n\t\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\r\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfDropdowns\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThis dropdown uses customized default values.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div ngbDropdown>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" id=\"dropdownConfig\" ngbDropdownToggle>Toggle</button>\r\n\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\r\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/dropdown/dropdown.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/dropdown/dropdown.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var dropdown = {
    beforeCodeTitle: 'Dropdown',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div ngbDropdown class=\"d-inline-block\">\n          <button class=\"btn btn-success\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button class=\"dropdown-item\">Action - 1</button>\n            <button class=\"dropdown-item\">Another Action</button>\n            <button class=\"dropdown-item\">Something else is here</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col text-right\">\n        <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n          <button class=\"btn btn-outline-success\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n            <button class=\"dropdown-item\">Action - 1</button>\n            <button class=\"dropdown-item\">Another Action</button>\n            <button class=\"dropdown-item\">Something else is here</button>\n           </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-dropdown-basic',\n  templateUrl: './dropdown-basic.html'\n})\nexport class NgbdDropdownBasic { }\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var manualTriggers = {
    beforeCodeTitle: 'Manual triggers',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    You can easily control dropdowns programmatically using the exported dropdown instance.\n  </span>\n  <div class=\"m-section__content\">\n    <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n      <button class=\"btn btn-primary\" id=\"dropdownManual\" ngbDropdownToggle>Toggle dropdown</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n      <button class=\"btn btn-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\n      <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-dropdown-manual',\n  templateUrl: './dropdown-manual.html'\n})\nexport class NgbdDropdownManual { }\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var buttonGroupsAndSplitButtons = {
    beforeCodeTitle: 'Button groups and split buttons',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.\n  </span>\n  <div class=\"m-section__content\">\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-success\">Plain ol' button</button>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-primary\" ngbDropdownToggle>Drop me</button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-outline-primary\">Split me</button>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-outline-primary dropdown-toggle-split\" ngbDropdownToggle></button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-group\">\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-danger\" ngbDropdownToggle>Select me</button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-success\" ngbDropdownToggle>Or me</button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n    </div>\n   </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-dropdown-split',\n    templateUrl: './dropdown-split.html'\n})\nexport class NgbdDropdownSplit {\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var globalConfigurationOfDropdowns = {
    beforeCodeTitle: 'Global configuration of dropdowns',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">This dropdown uses customized default values.</span>\n  <div class=\"m-section__content\">\n    <div ngbDropdown>\n      <button class=\"btn btn-primary\" id=\"dropdownConfig\" ngbDropdownToggle>Toggle</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n\t  </div>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-dropdown-config',\n    templateUrl: './dropdown-config.html',\n    providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers\n})\nexport class NgbdDropdownConfig {\n    constructor(config: NgbDropdownConfig) {\n        // customize default values of dropdowns used by this component tree\n        config.placement = 'top-left';\n        config.autoClose = false;\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(config) {
        // customize default values of dropdowns used by this component tree
        // config.placement = 'top-left';
        config.autoClose = true;
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.exampleDropdown = dropdown;
        this.exampleManualTriggers = manualTriggers;
        this.exampleButtonGroupsAndSplitButtons = buttonGroupsAndSplitButtons;
        this.exampleGlobalConfigurationOfDropdowns = globalConfigurationOfDropdowns;
    };
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/content/pages/components/ngbootstrap/dropdown/dropdown.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]] // add NgbDropdownConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/modal/modal.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/modal/modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/alert/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleModalWithDefaultOptions\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span *ngIf=\"closeResult\" class=\"m-section__sub\">\r\n\t\t\t\t\t<pre>{{closeResult}}</pre>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">Basic demo</h4>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"open(content)\">Launch demo modal</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleComponentsAsContent\">\r\n\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\t<p>You can pass an existing component as content of the modal window. In this case remember to add content component as an\r\n\t\t\t\t\t\t<code>entryComponents</code> section of your\r\n\t\t\t\t\t\t<code>NgModule</code>.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button class=\"btn btn-info\" (click)=\"open2()\">Launch demo modal</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleModalWithCustomClass\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #content3 let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t<p>One fine body&hellip;</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t<button class=\"btn btn-focus\" (click)=\"open3(content3)\">Launch demo modal</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleScrollableFixedContent\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #content4 let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">Scrollable fixed content</h4>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t<perfect-scrollbar style=\"height: 250px;\" [config]=\"config\">\r\n\t\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\t\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\t\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\t\t\t\t\t\t\t</perfect-scrollbar>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<button class=\"btn btn-metal\" (click)=\"open(content4)\">Launch demo modal</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleScrollingLongContent\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #content5 let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">Scrollable long content</h4>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<button class=\"btn btn-brand\" (click)=\"open(content5)\">Launch demo modal</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleLargeModal\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #content6 let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"openLarge(content6)\">Launch demo modal</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSmallModal\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #content7 let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<button class=\"btn btn-warning\" (click)=\"openSmall(content7)\">Launch demo modal</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleVerticallyCentered\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #content8 let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"openCentred(content7)\">Launch demo modal</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/modal/modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/modal/modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgbdModalContentComponent, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContentComponent", function() { return NgbdModalContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var modalWithDefaultOptions = {
    beforeCodeTitle: 'Modal with default options',
    htmlCode: "\n<div class=\"m-section\">\n  <span *ngIf=\"closeResult\" class=\"m-section__sub\">\n    <pre>{{closeResult}}</pre>\n  </span>\n  <div class=\"m-section__content\">\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Basic demo</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n\t\t  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n\t\t  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n\t\t  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\n          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-primary\" (click)=\"open(content)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\nimport {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-basic',\n    templateUrl: './modal-basic.html'\n})\nexport class NgbdModalBasic {\n    closeResult: string;\n\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content).result.then((result) => {\n        this.closeResult = `Closed with: ${result}`;\n        }, (reason) => {\n            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;\n        });\n    }\n\n    private getDismissReason(reason: any): string {\n        if (reason === ModalDismissReasons.ESC) {\n            return 'by pressing ESC';\n        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {\n            return 'by clicking on a backdrop';\n        } else {\n            return  `with: ${reason}`;\n        }\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var componentsAsContent = {
    beforeCodeTitle: 'Components as content',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    <p>You can pass an existing component as content of the modal window. In this case remember to add content component as an\n      <code>entryComponents</code> section of your\n      <code>NgModule</code>.\n    </p>\n  </div>\n  <div class=\"m-section__content\">\n    <button class=\"btn btn-info\" (click)=\"open2()\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Input} from '@angular/core';\n\nimport {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-content',\n    template: `\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Hi there!</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>Hello, {{name}}!</p>\n        </div>\n\t\t<div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        </div>\n    `\n})\nexport class NgbdModalContent {\n    @Input() name;\n    constructor(public activeModal: NgbActiveModal) {}\n    }\n\n@Component({\n    selector: 'ngbd-modal-component',\n    templateUrl: './modal-component.html'\n})\nexport class NgbdModalComponent {\n    constructor(private modalService: NgbModal) {}\n\n    open() {\n        const modalRef = this.modalService.open(NgbdModalContent);\n        modalRef.componentInstance.name = 'World';\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var modalWithCustomClass = {
    beforeCodeTitle: 'Modal with custom class',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n       </div>\n    </ng-template>\n    <button class=\"btn btn-focus\" (click)=\"open(content)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\n\nimport {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-customclass',\n    templateUrl: './modal-customclass.html',\n\tencapsulation: ViewEncapsulation.None,\n\tstyles: [`\n            .dark-modal .modal-content {\n            background-color: #292b2c;\n            color: white;\n        }\n            .dark-modal .close {\n            color: white;\n        }\n   `]\n})\nexport class NgbdModalCustomclass {\n    closeResult: string;\n\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content, { windowClass: 'dark-modal' });\n    }\n\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var scrollableFixedContent = {
    beforeCodeTitle: 'Scrollable fixed content',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Scrollable fixed content</h4>\n\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n\t    </button>\n      </div>\n      <div class=\"modal-body\">\n        <perfect-scrollbar style=\"height: 250px;\" [config]=\"config\">\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n\t\t\tstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n\t\t\ttype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n\t\t\tremaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n\t\t\tLorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n          </p>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n\t\t\tstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n\t\t\ttype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n\t\t\tessentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n\t\t   dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n\t\t   book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n        </perfect-scrollbar>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-metal\" (click)=\"open(content)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-scrollablefixedcontent',\n    templateUrl: './modal-scrollabledixedcontent.html',\n})\nexport class NgbdModalScrollableFixedContent {\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content);\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var scrollingLongContent = {
    beforeCodeTitle: 'Scrolling long content',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ng-template #content5 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Scrollable fixed content</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum ateros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo\n          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo\n          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo\n          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-brand\" (click)=\"open(content5)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-scrollingLongContent',\n    templateUrl: './modal-scrollingLongContent.html',\n})\nexport class NgbdModalScrollinglongcontent {\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content);\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var largeModal = {
    beforeCodeTitle: 'Large modal',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ng-template #content6 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-success\" (click)=\"openLarge(content6)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-largemodal',\n    templateUrl: './modal-largemodal.html',\n})\nexport class NgbdModalLargeModal {\n    constructor(private modalService: NgbModal) {}\n\n    openLarge(content) {\n        this.modalService.open(content, {\n            size: 'lg'\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var smallModal = {
    beforeCodeTitle: 'Small modal',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ng-template #content7 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-success\" (click)=\"openSmall(content7)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-smallmodal',\n    templateUrl: './modal-smallmodal.html',\n})\nexport class NgbdModalSmallmodal {\n    constructor(private modalService: NgbModal) {}\n\n    openSmall(content) {\n        this.modalService.open(content, {\n            size: 'sm'\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var verticallyCentered = {
    beforeCodeTitle: 'Vertically centered',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ng-template #content8 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-danger\" (click)=\"openCentred(content7)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-vertically\u0441entered',\n    templateUrl: './modal-vertically\u0441entered.html',\n})\nexport class NgbdModalVerticallycentered {\n    constructor(private modalService: NgbModal) {}\n\n    openCentred(content) {\n        this.modalService.open(content, { centered: true } );\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var NgbdModalContentComponent = /** @class */ (function () {
    function NgbdModalContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContentComponent.prototype, "name", void 0);
    NgbdModalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContentComponent);
    return NgbdModalContentComponent;
}());

var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.open2 = function () {
        var modalRef = this.modalService.open(NgbdModalContentComponent);
        modalRef.componentInstance.name = 'World';
    };
    ModalComponent.prototype.open3 = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent.prototype.openLarge = function (content) {
        this.modalService.open(content, {
            size: 'lg'
        });
    };
    ModalComponent.prototype.openSmall = function (content) {
        this.modalService.open(content, {
            size: 'sm'
        });
    };
    ModalComponent.prototype.openCentred = function (content) {
        this.modalService.open(content);
    };
    ModalComponent.prototype.ngOnInit = function () {
        this.exampleModalWithDefaultOptions = modalWithDefaultOptions;
        this.exampleComponentsAsContent = componentsAsContent;
        this.exampleModalWithCustomClass = modalWithCustomClass;
        this.exampleScrollableFixedContent = scrollableFixedContent;
        this.exampleScrollingLongContent = scrollingLongContent;
        this.exampleLargeModal = largeModal;
        this.exampleSmallModal = smallModal;
        this.exampleVerticallyCentered = verticallyCentered;
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/content/pages/components/ngbootstrap/modal/modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/ngbootstrap.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/ngbootstrap.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/ngbootstrap.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/ngbootstrap.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgbootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbootstrapComponent", function() { return NgbootstrapComponent; });
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

var NgbootstrapComponent = /** @class */ (function () {
    function NgbootstrapComponent() {
    }
    NgbootstrapComponent.prototype.ngOnInit = function () {
    };
    NgbootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-ngbootstrap',
            template: __webpack_require__(/*! ./ngbootstrap.component.html */ "./src/app/content/pages/components/ngbootstrap/ngbootstrap.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [])
    ], NgbootstrapComponent);
    return NgbootstrapComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/ngbootstrap.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/ngbootstrap.module.ts ***!
  \****************************************************************************/
/*! exports provided: NgbootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbootstrapModule", function() { return NgbootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngbootstrap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngbootstrap.component */ "./src/app/content/pages/components/ngbootstrap/ngbootstrap.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/content/pages/components/ngbootstrap/alert/alert.component.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/content/pages/components/ngbootstrap/accordion/accordion.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _partials_content_general_code_preview_code_preview_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/content/general/code-preview/code-preview.module */ "./src/app/content/partials/content/general/code-preview/code-preview.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/content/partials/partials.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_content_general_material_preview_material_preivew_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../partials/content/general/material-preview/material-preivew.module */ "./src/app/content/partials/content/general/material-preview/material-preivew.module.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/content/pages/components/ngbootstrap/buttons/buttons.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/content/pages/components/ngbootstrap/carousel/carousel.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./collapse/collapse.component */ "./src/app/content/pages/components/ngbootstrap/collapse/collapse.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/content/pages/components/ngbootstrap/datepicker/datepicker.component.ts");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/content/pages/components/ngbootstrap/dropdown/dropdown.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/content/pages/components/ngbootstrap/modal/modal.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/content/pages/components/ngbootstrap/pagination/pagination.component.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/content/pages/components/ngbootstrap/popover/popover.component.ts");
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/content/pages/components/ngbootstrap/progressbar/progressbar.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/content/pages/components/ngbootstrap/rating/rating.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/content/pages/components/ngbootstrap/tabs/tabs.component.ts");
/* harmony import */ var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./timepicker/timepicker.component */ "./src/app/content/pages/components/ngbootstrap/timepicker/timepicker.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/content/pages/components/ngbootstrap/tooltip/tooltip.component.ts");
/* harmony import */ var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./typehead/typehead.component */ "./src/app/content/pages/components/ngbootstrap/typehead/typehead.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var routes = [
    {
        path: '',
        component: _ngbootstrap_component__WEBPACK_IMPORTED_MODULE_3__["NgbootstrapComponent"],
        children: [
            {
                path: 'accordion',
                component: _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"]
            },
            {
                path: 'alert',
                component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]
            },
            {
                path: 'buttons',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsComponent"]
            },
            {
                path: 'carousel',
                component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"]
            },
            {
                path: 'collapse',
                component: _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_15__["CollapseComponent"]
            },
            {
                path: 'datepicker',
                component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__["DatepickerComponent"]
            },
            {
                path: 'dropdown',
                component: _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["DropdownComponent"]
            },
            {
                path: 'modal',
                component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"]
            },
            {
                path: 'pagination',
                component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__["PaginationComponent"]
            },
            {
                path: 'popover',
                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_20__["PopoverComponent"]
            },
            {
                path: 'progressbar',
                component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_21__["ProgressbarComponent"]
            },
            {
                path: 'rating',
                component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_22__["RatingComponent"]
            },
            {
                path: 'tabs',
                component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_23__["TabsComponent"]
            },
            {
                path: 'timepicker',
                component: _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_24__["TimepickerComponent"]
            },
            {
                path: 'tooltip',
                component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_25__["TooltipComponent"]
            },
            {
                path: 'typehead',
                component: _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_26__["TypeheadComponent"]
            }
        ]
    }
];
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
// suppressScrollX: true
};
var NgbootstrapModule = /** @class */ (function () {
    function NgbootstrapModule() {
    }
    NgbootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__["PartialsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _partials_content_general_code_preview_code_preview_module__WEBPACK_IMPORTED_MODULE_7__["CodePreviewModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _partials_content_general_material_preview_material_preivew_module__WEBPACK_IMPORTED_MODULE_10__["MaterialPreviewModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PerfectScrollbarModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _ngbootstrap_component__WEBPACK_IMPORTED_MODULE_3__["NgbootstrapComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"],
                _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"],
                _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_15__["CollapseComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__["DatepickerComponent"],
                _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["DropdownComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContentComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__["PaginationComponent"],
                _popover_popover_component__WEBPACK_IMPORTED_MODULE_20__["PopoverComponent"],
                _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_21__["ProgressbarComponent"],
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_22__["RatingComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_23__["TabsComponent"],
                _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_24__["TimepickerComponent"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_25__["TooltipComponent"],
                _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_26__["TypeheadComponent"]
            ],
            providers: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertConfig"], {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            entryComponents: [
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContentComponent"]
            ]
        })
    ], NgbootstrapModule);
    return NgbootstrapModule;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/pagination/pagination.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/pagination/pagination.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/pagination/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicPagination\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tDefault pagination:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tNo direction links:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tWith boundary links:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Current page: {{page}}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t\t\r\n\t\t<m-material-preview [viewItem]=\"exampleAdvancedPagination\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tRestricted size, no rotation:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tRestricted size with rotation:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tRestricted size with rotation and no ellipses:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Current page: {{page2}}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"examplePaginationSize\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"examplePaginationAlignment\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tChange the alignment of pagination components with flexbox utilities\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\r\n\t\t\t\t\t<ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\r\n\t\t\t\t\t<ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleDisabledPagination\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tPagination control can be disabled:</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page4\" [disabled]='isDisabled'></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"toggleDisabled()\">\r\n\t\t\t\t\t\tToggle disabled\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfiguration\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThis pagination uses custom default values</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page5\" [size]=\"'sm'\" [boundaryLinks]=\"'true'\"></ngb-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/pagination/pagination.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/pagination/pagination.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var basicPagination = {
    beforeCodeTitle: 'Basic pagination',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Default pagination:\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    No direction links:\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n  <div class=\"m-section\">\n    <span class=\"m-section__sub\">\n      With boundary links:\n    </span>\n  <div class=\"m-section__content\">\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n   <div class=\"m-section__content\">\n     <pre>Current page: {{page}}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-basic',\n    templateUrl: './pagination-basic.html'\n})\nexport class NgbdPaginationBasic {\n    page = 4;\n}\n\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var advancedPagination = {
    beforeCodeTitle: 'Advanced pagination',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Restricted size, no rotation:\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Restricted size with rotation:\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Restricted size with rotation and no ellipses:\n  </span>\n  <div class=\"m-section__content\">\n\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\"\n      [boundaryLinks]=\"true\"></ngb-pagination>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n  <div class=\"m-section\">\n    <div class=\"m-section__content\">\n      <pre>Current page: {{page2}}</pre>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-advanced',\n    templateUrl: './pagination-advanced.html'\n})\nexport class NgbdPaginationAdvanced {\n    page = 1;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var paginationSize = {
    beforeCodeTitle: 'Pagination size',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\n    <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\n    <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-size',\n    templateUrl: './pagination-size.html'\n})\nexport class NgbdPaginationSize {\n    currentPage = 3;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var paginationAlignment = {
    beforeCodeTitle: 'Pagination alignment',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Change the alignment of pagination components with flexbox utilities\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n    <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n    <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n  </div>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-pagination-justify',\n    templateUrl: './pagination-justify.html'\n})\nexport class NgbdPaginationJustify {\n    page = 4;\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var disabledPagination = {
    beforeCodeTitle: 'Disabled pagination',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Pagination control can be disabled:</span>\n  <div class=\"m-section__content\">\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page4\" [disabled]='isDisabled'></ngb-pagination>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <button class=\"btn btn-sm btn-primary\" (click)=\"toggleDisabled()\">\n      Toggle disabled\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-pagination-disabled',\n    templateUrl: './pagination-disabled.html'\n})\nexport class NgbdPaginationDisabled {\n    page = 3;\n    isDisabled = true;\n\n    toggleDisabled() {\n        this.isDisabled = !this.isDisabled;\n    }\n}",
    viewCode: "",
    isCodeVisible: false
};
var globalConfiguration = {
    beforeCodeTitle: 'Global configuration',
    htmlCode: "\n<div class=\"m-section\">\n  <h3 class=\"m-section__heading\">Self closing</h3>\n  <span class=\"m-section__sub\">\n\tThis pagination uses custom default values\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page5\" [size]=\"'sm'\" [boundaryLinks]=\"'true'\"></ngb-pagination>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-pagination-config',\n    templateUrl: './pagination-config.html',\n    providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers\n})\nexport class NgbdPaginationConfig {\n    page = 4;\n\n    constructor(config: NgbPaginationConfig) {\n        // customize default values of paginations used by this component tree\n        config.size = 'sm';\n        config.boundaryLinks = true;\n    }\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(config) {
        this.exampleBasicPagination = basicPagination;
        this.exampleAdvancedPagination = advancedPagination;
        this.examplePaginationSize = paginationSize;
        this.examplePaginationAlignment = paginationAlignment;
        this.exampleDisabledPagination = disabledPagination;
        this.exampleGlobalConfiguration = globalConfiguration;
        this.page = 4;
        this.page2 = 1;
        this.page3 = 4;
        this.currentPage = 3;
        this.page4 = 3;
        this.isDisabled = true;
        this.page5 = 4;
        // customize default values of paginations used by this component tree
        // config.size = 'sm';
        // config.boundaryLinks = true;
    }
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/content/pages/components/ngbootstrap/pagination/pagination.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/popover/popover.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/popover/popover.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/pagination/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleQuickAndEasyPopovers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" placement=\"right\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\r\n\t\t\t\t\t\tPopover on right\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary m-btn--wide\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\r\n\t\t\t\t\t\tPopover on top\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<button type=\"button\" \r\n\t\t\t\t\t\tclass=\"btn btn-danger m-btn--wide\" \r\n\t\t\t\t\t\tplacement=\"left\" \r\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" \r\n\t\t\t\t\t\tpopoverTitle=\"Popover on left\">\r\n\t\t\t\t\t\tPopover on left\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info m-btn--wide\" placement=\"bottom\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\r\n\t\t\t\t\t\tPopover on bottom\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleHTMLAndBindingsInPopovers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tPopovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a\r\n\t\t\t\t\t<code>&lt;ng-template&gt;</code> element.\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #popContent>\r\n\t\t\t\t\t\t<span>Hello</span>,\r\n\t\t\t\t\t\t<b>{{name}}</b>!\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\r\n\t\t\t\t\t\tI've got markup and bindings in my popover!\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomAndManualTriggers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tYou can easily override open and close triggers by specifying event names (separated by\r\n\t\t\t\t\t<code>:</code>) in the\r\n\t\t\t\t\t<code>triggers</code> property.\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Pop title\">\r\n\t\t\t\t\t\tHover over me!\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tAlternatively you can take full manual control over popover opening / closing events.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" ngbPopover=\"What a great tip!\" triggers=\"manual\" #p=\"ngbPopover\" (click)=\"p.open()\" popoverTitle=\"Pop title\">\r\n\t\t\t\t\t\tClick me to open a popover\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"p.close()\">\r\n\t\t\t\t\t\tClick me to close a popover\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleContextAndManualTriggers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tYou can optionally pass in a context when manually triggering a popover.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #popContent let-greeting=\"greeting\">{{greeting}},\r\n\t\t\t\t\t\t<b>{{name1}}</b>!</ng-template>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tHow would you like to greet\r\n\t\t\t\t\t\t<strong [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #p2=\"ngbPopover\" triggers=\"manual\">me</strong>?\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\r\n\t\t\t\t\t\tFrench\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\r\n\t\t\t\t\t\tGerman\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\r\n\t\t\t\t\t\tEnglish\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"examplePopoverVisibilityEvents\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\" #popover=\"ngbPopover\">\r\n\t\t\t\t\t\tOpen Popover\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tPopover is currently:\r\n\t\t\t\t\t<code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"examplePopoverVisibilityEvents\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tSet the\r\n\t\t\t\t\t<code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e.\r\n\t\t\t\t\t<code>overflow: hidden</code>).\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t<div class='card'>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n\t\t\t\t\t\t\t\tDefault popover\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\r\n\t\t\t\t\t\t\t\tPopover appended to body\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfPopovers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" ngbPopover=\"This popover gets its inputs from the customized configuration\" popoverTitle=\"Customized popover\" placement=\"right\" triggers=\"hover\">\r\n\t\t\t\t\t\tCustomized popover\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/popover/popover.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/popover/popover.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var quickAndEasyPopovers = {
    beforeCodeTitle: 'Quick and easy popovers',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <button type=\"button\" class=\"btn btn-primary m-btn--wide\" placement=\"top\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\n      Popover on top\n    </button>\n    <button type=\"button\" class=\"btn btn-success m-btn--wide\" placement=\"right\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\n      Popover on right\n    </button>\n    <button type=\"button\" class=\"btn btn-info m-btn--wide\" container=\"body\" placement=\"bottom\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\n      Popover on bottom\n    </button>\n\t<button type=\"button\" class=\"btn btn-danger m-btn--wide\" placement=\"left\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\n      Popover on left\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-basic',\n    templateUrl: './popover-basic.html'\n})\nexport class NgbdPopoverBasic {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var HTMLAndBindingsInPopovers = {
    beforeCodeTitle: 'HTML and bindings in popovers',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a\n    <code>&lt;ng-template&gt;</code> element.\n  </div>\n  <div class=\"m-section__content\">\n    <ng-template #popContent>\n      <span>Hello</span>,\n      <b>{{name}}</b>!\n    </ng-template>\n    <button type=\"button\" class=\"btn btn-warning\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\n      I've got markup and bindings in my popover!\n    </button>\n   </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-tplcontent',\n    templateUrl: './popover-tplcontent.html'\n})\nexport class NgbdPopoverTplcontent {\n    name = 'World';\n}",
    viewCode: "",
    isCodeVisible: false
};
var customAndManualTriggers = {
    beforeCodeTitle: 'Custom and manual triggers',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    You can easily override open and close triggers by specifying event names (separated by\n    <code>:</code>) in the\n    <code>triggers</code> property.\n  </div>\n  <div class=\"m-section__content\">\n\t<button type=\"button\" class=\"btn btn-primary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\"\n      popoverTitle=\"Pop title\">\n      Hover over me!\n    </button>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Alternatively you can take full manual control over popover opening / closing events.\n  </span>\n  <div class=\"m-section__content\">\n\t<button type=\"button\" class=\"btn btn-success\" ngbPopover=\"What a great tip!\" triggers=\"manual\" #p=\"ngbPopover\"\n      (click)=\"p.open()\" popoverTitle=\"Pop title\">\n      Click me to open a popover\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"p.close()\">\n      Click me to close a popover\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-triggers',\n    templateUrl: './popover-triggers.html'\n})\nexport class NgbdPopoverTriggers {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var contextAndManualTriggers = {
    beforeCodeTitle: 'Context and manual triggers',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    You can optionally pass in a context when manually triggering a popover.\n  </span>\n  <div class=\"m-section__content\">\n    <ng-template #popContent let-greeting=\"greeting\">{{greeting}},\n\t  <b>{{name1}}</b>!\n\t</ng-template>\n    <p>\n      How would you like to greet\n      <strong [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #p2=\"ngbPopover\" triggers=\"manual\">me</strong>?\n    </p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\n      French\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\n      German\n    </button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\n      English\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {NgbPopover} from '@ng-bootstrap/ng-bootstrap';\nimport {Component, ViewChild} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-tplwithcontext',\n    templateUrl: './popover-tplwithcontext.html'\n})\nexport class NgbdPopoverTplwithcontext {\n    greeting = {};\n    name = 'World';\n\n    @ViewChild('p') public popover: NgbPopover;\n\n    public changeGreeting(greeting: any): void {\n        const isOpen = this.popover.isOpen();\n        this.popover.close();\n        if (greeting !== this.greeting || !isOpen) {\n            this.greeting = greeting;\n            this.popover.open(greeting);\n        }\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var popoverVisibilityEvents = {
    beforeCodeTitle: 'Popover visibility events',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n\t<button type=\"button\" class=\"btn btn-primary\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum\n      faucibus.\" popoverTitle=\"Popover on top\" #popover=\"ngbPopover\">\n      Open Popover\n    </button>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    Popover is currently:\n    <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-visibility',\n    templateUrl: './popover-visibility.html'\n})\nexport class NgbdPopoverVisibility {}\n",
    viewCode: "",
    isCodeVisible: false
};
var appendPopoverInTheBody = {
    beforeCodeTitle: 'Append popover in the body',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    Set the\n\t<code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering element's\n      parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e.\n    <code>overflow: hidden</code>).\n  </div>\n  <div class=\"m-section__content\">\n    <div class='row'>\n      <div class='card'>\n        <button type=\"button\" class=\"btn btn-outline-info\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n\t\t  Default popover\n        </button>\n\t\t<br />\n\t\t<button type=\"button\" class=\"btn btn-outline-danger\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n          container=\"body\">\n          Popover appended to body\n        </button>\n      </div>\n\t</div>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-container',\n    templateUrl: './popover-container.html',\n    styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }']\n})\nexport class NgbdPopoverContainer {\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfPopovers = {
    beforeCodeTitle: 'Global configuration of popovers',
    htmlCode: "\n<button type=\"button\" class=\"btn btn-outline-secondary\"\n  ngbPopover=\"This popover gets its inputs from the customized configuration\" popoverTitle=\"Customized popover\">\n  Customized popover\n</button>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-popover-config',\n    templateUrl: './popover-config.html',\n    providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers\n})\nexport class NgbdPopoverConfig {\nconstructor(config: NgbPopoverConfig) {\n    // customize default values of popovers used by this component tree\n    config.placement = 'right';\n    config.triggers = 'hover';\n    }\n}\n", viewCode: "",
    isCodeVisible: false
};
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(config) {
        this.name = 'World';
        this.greeting = {};
        this.name1 = 'World';
        // customize default values of popovers used by this component tree
        // config.placement = 'right';
        config.container = 'body';
    }
    PopoverComponent.prototype.ngOnInit = function () {
        this.exampleQuickAndEasyPopovers = quickAndEasyPopovers;
        this.exampleHTMLAndBindingsInPopovers = HTMLAndBindingsInPopovers;
        this.exampleCustomAndManualTriggers = customAndManualTriggers;
        this.exampleContextAndManualTriggers = contextAndManualTriggers;
        this.examplePopoverVisibilityEvents = popoverVisibilityEvents;
        this.exampleAppendPopoverInTheBody = appendPopoverInTheBody;
        this.exampleGlobalConfigurationOfPopovers = globalConfigurationOfPopovers;
    };
    PopoverComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover2.isOpen();
        this.popover2.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover2.open(greeting);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('p'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"])
    ], PopoverComponent.prototype, "popover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('p2'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"])
    ], PopoverComponent.prototype, "popover2", void 0);
    PopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./src/app/content/pages/components/ngbootstrap/popover/popover.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // styles: [`.card { padding: 50px 0; text-align: center; overflow:hidden }`],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]] // add NgbPopoverConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]])
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/progressbar/progressbar.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/progressbar/progressbar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/progressbar/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleContextualProgressBars\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleProgressBarsWithCurrentValueLabels\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\" [max]=\"100\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\" [max]=\"100\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleStripedProgressBars\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleProgressBarsWithCustomLabels\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"info\" [value]=\"50\">Copying file\r\n\t\t\t\t\t\t\t<b>2 of 4</b>...</ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\">\r\n\t\t\t\t\t\t\t<i>50%</i>\r\n\t\t\t\t\t\t</ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleProgressBarsWithHeight\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"25\">default</ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"info\" [value]=\"50\" height=\"10px\">10px</ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"warning\" [value]=\"75\" height=\".5rem\">.5rem</ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar type=\"danger\" [value]=\"100\" [height]=\"height\">{{height}}</ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfProgressBars\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<p>This progress bar uses the customized default values.</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar value=\"250\" max=\"1000\" striped=\"true\" animated=\"true\" height=\"20px\" type=\"success\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>This progress bar uses the customized default values, but changes the type using an input.</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ngb-progressbar value=\"500\" max=\"1000\" striped=\"true\" animated=\"true\" height=\"20px\" type=\"info\"></ngb-progressbar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/progressbar/progressbar.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/progressbar/progressbar.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var contextualProgressBars = {
    beforeCodeTitle: 'Contextual progress bars',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar>\n    </p>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-basic',\n    templateUrl: './progressbar-basic.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n   `]\n})\nexport class NgbdProgressbarBasic {}\n\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var progressBarsWithCurrentValueLabels = {
    beforeCodeTitle: 'Progress bars with current value labels',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <p>\n      <ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar>\n    </p>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-showvalue',\n    templateUrl: './progressbar-showvalue.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n   `]\n})\nexport class NgbdProgressbarShowvalue {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var stripedProgressBars = {
    beforeCodeTitle: 'Striped progress bars',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-striped',\n    templateUrl: './progressbar-striped.html'\n})\nexport class NgbdProgressbarStriped {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var progressBarsWithCustomLabels = {
    beforeCodeTitle: 'Progress bars with custom labels',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\">Copying file\n\t\t<b>2 of 4</b>...\n\t  </ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\">\n        <i>50%</i>\n      </ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n    </p>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-labels',\n    templateUrl: './progressbar-labels.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n    `]\n})\nexport class NgbdProgressbarLabels {\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var progressBarsWithHeight = {
    beforeCodeTitle: 'Progress bars with height',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\">default</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\" height=\"10px\">10px</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\" height=\".5rem\">.5rem</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\" [height]=\"height\">{{height}}</ngb-progressbar>\n    </p>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-height',\n    templateUrl: './progressbar-height.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n    `]\n})\nexport class NgbdProgressbarHeight {\n    height = '20px';\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfProgressBars = {
    beforeCodeTitle: 'Global configuration of progress bars',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <p>This progress bar uses the customized default values.</p>\n    <p><ngb-progressbar value=\"250\"></ngb-progressbar></p>\n\t<p>This progress bar uses the customized default values, but changes the type using an input.</p>\n    <p><ngb-progressbar value=\"500\" type=\"info\"></ngb-progressbar></p>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-progressbar-config',\n    templateUrl: './progressbar-config.html',\n    providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers\n})\nexport class NgbdProgressbarConfig {\n    constructor(config: NgbProgressbarConfig) {\n        // customize default values of progress bars used by this component tree\n        config.max = 1000;\n        config.striped = true;\n\t\tconfig.animated = true;\n        config.type = 'success';\n        config.height = '20px';\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        this.height = '20px';
        // customize default values of progress bars used by this component tree
        // config.max = 1000;
        // config.striped = true;
        // config.animated = true;
        // config.type = 'success';
        // config.height = '20px';
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
        this.exampleContextualProgressBars = contextualProgressBars;
        this.exampleProgressBarsWithCurrentValueLabels = progressBarsWithCurrentValueLabels;
        this.exampleStripedProgressBars = stripedProgressBars;
        this.exampleProgressBarsWithCustomLabels = progressBarsWithCustomLabels;
        this.exampleProgressBarsWithHeight = progressBarsWithHeight;
        this.exampleGlobalConfigurationOfProgressBars = globalConfigurationOfProgressBars;
    };
    ProgressbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-progressbar',
            template: __webpack_require__(/*! ./progressbar.component.html */ "./src/app/content/pages/components/ngbootstrap/progressbar/progressbar.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n    \tngb-progressbar {\n      \t\tmargin-top: 5rem;\n    \t}\n\t  "],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]] // add the NgbProgressbarConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/rating/rating.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/rating/rating.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/rating/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleBasicDemo\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\t<pre>Rate: <b>{{currentRate}}</b></pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleEventsAndReadonlyRatings\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Selected: <b>{{selected}}</b></pre>\r\n\t\t\t\t\t<pre>Hovered: <b>{{hovered}}</b></pre>\r\n\t\t\t\t\t<ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\r\n\t\t\t\t\t\t{{ readonly ? \"readonly\" : \"editable\"}}\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomStarTemplate\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tCustom rating template provided as child element\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-rating [(rate)]=\"currentRate1\">\r\n\t\t\t\t\t\t<ng-template let-fill=\"fill\" let-index=\"index\">\r\n\t\t\t\t\t\t\t<span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-rating>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Rate: <b>{{currentRate1}}</b></pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomDecimalRating\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tCustom rating template provided via a variable. Shows fine-grained rating display\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #t let-fill=\"fill\">\r\n\t\t\t\t\t\t<span class=\"star2\" [class.full]=\"fill === 100\">\r\n\t\t\t\t\t\t\t<span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t<ngb-rating [(rate)]=\"currentRate2\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Rate: <b>{{currentRate2}}</b></pre>\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"currentRate2 = 1.35\">1.35</button>&nbsp;\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"currentRate2 = 4.72\">4.72</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleFormIntegration\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tNgModel and reactive forms can be used without the 'rate' binding\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<ngb-rating [formControl]=\"ctrl\"></ngb-rating>\r\n\t\t\t\t\t\t<div class=\"form-text small\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"ctrl.valid\" class=\"text-success\">Thanks!</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"ctrl.invalid\" class=\"text-danger\">Please rate us</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tModel:\r\n\t\t\t\t\t<b>{{ ctrl.value }}</b>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\r\n\t\t\t\t\t\t{{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfRatings\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThis rating uses customized default values.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-rating [rate]=\"3\" max=\"5\" [readonly]=\"true\"></ngb-rating>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/rating/rating.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/rating/rating.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var basicDemo = {
    beforeCodeTitle: 'Basic demo',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n    <div class=\"m-separator m-separator--dashed\"></div>\n    <pre>Rate: <b>{{currentRate}}</b></pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-rating-basic',\n    templateUrl: './rating-basic.html'\n})\nexport class NgbdRatingBasic {\n    currentRate = 8;\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var eventsAndReadonlyRatings = {
    beforeCodeTitle: 'Events and readonly ratings',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <pre>Selected: <b>{{selected}}</b></pre>\n    <pre>Hovered: <b>{{hovered}}</b></pre>\n    <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <button class=\"btn btn-sm btn-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\n      {{ readonly ? \"readonly\" : \"editable\"}}\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-rating-events',\n  templateUrl: './rating-events.html'\n})\nexport class NgbdRatingEvents {\n  selected = 0;\n  hovered = 0;\n  readonly = false;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var customStarTemplate = {
    beforeCodeTitle: 'Custom star template',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Custom rating template provided as child element\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-rating [(rate)]=\"currentRate1\">\n      <ng-template let-fill=\"fill\" let-index=\"index\">\n        <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n      </ng-template>\n\t</ngb-rating>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <pre>Rate: <b>{{currentRate1}}</b></pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-rating-template',\n    templateUrl: './rating-template.html',\n    styles: [`\n        .star {\n            font-size: 1.5rem;\n                color: #b0c4de;\n            }\n            .filled {\n                color: #1e90ff;\n            }\n            .bad {\n                color: #deb0b0;\n            }\n            .filled.bad {\n                color: #ff1e1e;\n            }\n        `]\n})\nexport class NgbdRatingTemplate {\n    currentRate = 6;\n}\n ",
    viewCode: "",
    isCodeVisible: false
};
var customDecimalRating = {
    beforeCodeTitle: 'Custom decimal rating',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    Custom rating template provided via a variable. Shows fine-grained rating display\n  </span>\n  <div class=\"m-section__content\">\n    <ng-template #t let-fill=\"fill\">\n      <span class=\"star2\" [class.full]=\"fill === 100\">\n        <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n      </span>\n    </ng-template>\n    <ngb-rating [(rate)]=\"currentRate2\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <pre>Rate: <b>{{currentRate2}}</b></pre>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"currentRate2 = 1.35\">1.35</button>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"currentRate2 = 4.72\">4.72</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-rating-decimal',\n    templateUrl: './rating-decimal.html',\n    styles: [`\n        .star {\n\t\t\tposition: relative;\n            display: inline-block;\n            font-size: 3rem;\n            color: #d3d3d3;\n        }\n        .full {\n             color: red;\n        }\n        .half {\n            position: absolute;\n            display: inline-block;\n            overflow: hidden;\n            color: red;\n        }\n   `]\n})\nexport class NgbdRatingDecimal {\n    currentRate = 3.14;\n}\n\t",
    viewCode: "",
    isCodeVisible: false
};
var formIntegration = {
    beforeCodeTitle: 'Form integration',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    NgModel and reactive forms can be used without the 'rate' binding\n  </span>\n  <div class=\"m-section__content\">\n    <div class=\"form-group\">\n\t  <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\n      <div class=\"form-text small\">\n        <div *ngIf=\"ctrl.valid\" class=\"text-success\">Thanks!</div>\n        <div *ngIf=\"ctrl.invalid\" class=\"text-danger\">Please rate us</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">Model: <b>{{ ctrl.value }}</b></span>\n  <div class=\"m-section__content\">\n    <button class=\"btn btn-sm btn-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\n      {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\n    </button>\n\t<button class=\"btn btn-sm btn-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\n\n@Component({\n    selector: 'ngbd-rating-form',\n    templateUrl: './rating-form.html'\n})\nexport class NgbdRatingForm {\n    ctrl = new FormControl(null, Validators.required);\n\n    toggle() {\n        if (this.ctrl.disabled) {\n            this.ctrl.enable();\n        } else {\n            this.ctrl.disable();\n        }\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfRatings = {
    beforeCodeTitle: 'Global configuration of ratings',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n    This rating uses customized default values.\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-rating [rate]=\"3\" max=\"5\" [readonly]=\"true\"></ngb-rating>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-rating-config',\n    templateUrl: './rating-config.html',\n    providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers\n})\nexport class NgbdRatingConfig {\n    constructor(config: NgbRatingConfig) {\n    // customize default values of ratings used by this component tree\n    config.max = 5;\n    config.readonly = true;\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(config) {
        this.currentRate = 8;
        this.currentRate1 = 6;
        this.currentRate2 = 3.14;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        // customize default values of ratings used by this component tree
        // config.max = 5;
        // config.readonly = true;
    }
    RatingComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    RatingComponent.prototype.ngOnInit = function () {
        this.exampleBasicDemo = basicDemo;
        this.exampleEventsAndReadonlyRatings = eventsAndReadonlyRatings;
        this.exampleCustomStarTemplate = customStarTemplate;
        this.exampleCustomDecimalRating = customDecimalRating;
        this.exampleFormIntegration = formIntegration;
        this.exampleGlobalConfigurationOfRatings = globalConfigurationOfRatings;
    };
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/content/pages/components/ngbootstrap/rating/rating.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n\t\t.star {\n\t\tf\tont-size: 1.5rem;\n\t\t\tcolor: #b0c4de;\n\t\t}\n\t\t.filled {\n\t\t\tcolor: #1e90ff;\n\t\t}\n\t\t.bad {\n\t\t\tcolor: #deb0b0;\n\t\t}\n\t\t.filled.bad {\n\t\t\tcolor: #ff1e1e;\n\t\t}\n\t\t.star2 {\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 3rem;\n\t\t\tcolor: #d3d3d3;\n\t\t  }\n\t\t.full {\n\t\t\tcolor: red;\n\t\t  }\n\t\t.half {\n\t\t\tposition: absolute;\n\t\t\tdisplay: inline-block;\n\t\t\toverflow: hidden;\n\t\t\tcolor: red;\n\t\t}\n\t"],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]] // add NgbRatingConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/tabs/tabs.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/tabs/tabs.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/tabs/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleTabset\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-tabset>\r\n\t\t\t\t\t\t<ngb-tab title=\"Simple\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab>\r\n\t\t\t\t\t\t\t<ng-template ngbTabTitle>\r\n\t\t\t\t\t\t\t\t<b>Fancy</b> title</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n\t\t\t\t\t\t\t\t<p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t</ngb-tabset>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"examplePills\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-tabset type=\"pills\">\r\n\t\t\t\t\t\t<ngb-tab title=\"Simple\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab>\r\n\t\t\t\t\t\t\t<ng-template ngbTabTitle>\r\n\t\t\t\t\t\t\t\t<b>Fancy</b> title</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n\t\t\t\t\t\t\t\t<p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t</ngb-tabset>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSelectAnActiveTabById\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-tabset #t=\"ngbTabset\">\r\n\t\t\t\t\t\t<ngb-tab id=\"tab-selectbyid1\" title=\"Simple\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab id=\"tab-selectbyid2\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabTitle>\r\n\t\t\t\t\t\t\t\t<b>Fancy</b> title</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n\t\t\t\t\t\t\t\t<p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t</ngb-tabset>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\r\n\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Selected tab with \"tab-selectbyid2\" id</button>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"examplePreventTabChange\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-tabset (tabChange)=\"beforeChange($event)\">\r\n\t\t\t\t\t\t<ngb-tab id=\"tab-preventchange1\" title=\"Simple\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab id=\"tab-preventchange2\" title=\"I can't be selected...\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n\t\t\t\t\t\t\t\t<p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab title=\"But I can!\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t</ngb-tabset>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleNavJustification\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-tabset [justify]=\"currentJustify\">\r\n\t\t\t\t\t\t<ngb-tab title=\"Simple\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab>\r\n\t\t\t\t\t\t\t<ng-template ngbTabTitle>\r\n\t\t\t\t\t\t\t\t<b>Fancy</b> title</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n\t\t\t\t\t\t\t\t<p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab title=\"A very long nav title\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t</ngb-tabset>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentJustify\">\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" value=\"start\">Start\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-info btn-sm\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" value=\"center\">Center\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-success btn-sm\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" value=\"end\">End\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-danger btn-sm\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" value=\"fill\">Fill\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-warning btn-sm\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" value=\"justified\">Justified\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleNavOrientation\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-tabset type=\"pills\" [orientation]=\"currentOrientation\">\r\n\t\t\t\t\t\t<ngb-tab title=\"Simple\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab>\r\n\t\t\t\t\t\t\t<ng-template ngbTabTitle>\r\n\t\t\t\t\t\t\t\t<b>Fancy</b> title</ng-template>\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n\t\t\t\t\t\t\t\t<p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t</ngb-tabset>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\r\n\t\t\t\t\t<div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentOrientation\">\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" value=\"horizontal\">Horizontal\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n\t\t\t\t\t\t\t<input ngbButton type=\"radio\" value=\"vertical\">Vertical\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleglobalConfigurationOfTabs\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-tabset type=\"pills\" [justify]=\"globalJustify\">\r\n\t\t\t\t\t\t<ngb-tab title=\"One\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>These tabs are displayed as pills...</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t<ngb-tab title=\"Two\">\r\n\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t\t<p>Because default values have been customized.</p>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t</ngb-tabset>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/tabs/tabs.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/tabs/tabs.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var tabset = {
    beforeCodeTitle: 'Tabset',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n  <ngb-tabset>\n    <ngb-tab title=\"Simple\">\n      <ng-template ngbTabContent>\n        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n          master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n          dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n          iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab>\n    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n        craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n        cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n        yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n        shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n        sint qui sapiente accusamus tattooed echo park.</p>\n      </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n        <ng-template ngbTabContent>\n\t\t  <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.\n\t\t\tDonec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.\n\t\t\tDuis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna,\n\t\t\tegestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec\n\t\t\ttristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et\n\t\t\tmagnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque.\n            Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n        </ng-template>\n      </ngb-tab>\n\t</ngb-tabset>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tabset-basic',\n    templateUrl: './tabset-basic.html'\n})\nexport class NgbdTabsetBasic { }\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var pills = {
    beforeCodeTitle: 'Pills',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n  <ngb-tabset type=\"pills\">\n    <ngb-tab title=\"Simple\">\n      <ng-template ngbTabContent>\n        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n          master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n          dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n          iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab>\n      <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n      <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n        <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n          craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n\t\t  cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n          yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n          shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n          sint qui sapiente accusamus tattooed echo park.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n        <ng-template ngbTabContent>\n\t\t  <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.\n\t\t\tDonec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.\n\t\t\tDuis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna,\n\t\t\tegestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec\n\t\t\ttristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et\n\t\t\tmagnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque.\n\t\t\tPhasellus nec tortor vel tellus pulvinar feugiat.\n          </p>\n        </ng-template>\n      </ngb-tab>\n\t</ngb-tabset>\n  </div>\n</div>\n",
    tsCode: "\n\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tabset-pills',\n    templateUrl: './tabset-pills.html'\n})\nexport class NgbdTabsetPills { }\n",
    viewCode: "",
    isCodeVisible: false
};
var selectAnActiveTabById = {
    beforeCodeTitle: 'Select an active tab by id',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-tabset #t=\"ngbTabset\">\n      <ngb-tab id=\"tab-selectbyid1\" title=\"Simple\">\n        <ng-template ngbTabContent>\n\t      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab id=\"tab-selectbyid2\">\n        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n        <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n          <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n            cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n            sint qui sapiente accusamus tattooed echo park.</p>\n\t    </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n\t<button class=\"btn btn-outline-primary\" (click)=\"t.select('tab-selectbyid2')\">Selected tab with \"tab-selectbyid2\"\n      id</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tabset-selectbyid',\n    templateUrl: './tabset-selectbyid.html'\n})\nexport class NgbdTabsetSelectbyid {\n}\n ",
    viewCode: "",
    isCodeVisible: false
};
var preventTabChange = {
    beforeCodeTitle: 'Prevent tab change',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-tabset (tabChange)=\"beforeChange($event)\">\n      <ngb-tab id=\"tab-preventchange1\" title=\"Simple\">\n        <ng-template ngbTabContent>\n          <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab id=\"tab-preventchange2\" title=\"I can't be selected...\">\n        <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n          <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n\t\t    cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n            sint qui sapiente accusamus tattooed echo park.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"But I can!\" >\n        <ng-template ngbTabContent>\n\t\t  <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.\n\t\t  Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.\n\t\t  Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna,\n\t\t  egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec\n\t\t  tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis\n\t\t  dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus\n\t\t  nec tortor vel tellus pulvinar feugiat.\n          </p>\n        </ng-template>\n      </ngb-tab>\n\t</ngb-tabset>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-tabset-preventchange',\n    templateUrl: './tabset-preventchange.html'\n})\nexport class NgbdTabsetPreventchange {\n    public beforeChange($event: NgbTabChangeEvent) {\n        if ($event.nextId === 'tab-preventchange2') {\n            $event.preventDefault();\n        }\n\t};\n}\n\t",
    viewCode: "",
    isCodeVisible: false
};
var navJustification = {
    beforeCodeTitle: 'Nav justification',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-tabset [justify]=\"currentJustify\">\n      <ngb-tab title=\"Simple\">\n        <ng-template ngbTabContent>\n          <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab>\n        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n        <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n          <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n            cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n            sint qui sapiente accusamus tattooed echo park.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"A very long nav title\">\n        <ng-template ngbTabContent>\n\t\t  <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.\n            Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu,\n\t\t\tcongue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et.\n            Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu.\n\t\t\tVivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio.\n\t\t\tOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac\n            lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentJustify\">\n      <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n        <input ngbButton type=\"radio\" value=\"start\">Start\n      </label>\n\t  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n        <input ngbButton type=\"radio\" value=\"center\">Center\n      </label>\n      <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n        <input ngbButton type=\"radio\" value=\"end\">End\n      </label>\n\t  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n        <input ngbButton type=\"radio\" value=\"fill\">Fill\n      </label>\n      <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n        <input ngbButton type=\"radio\" value=\"justified\">Justified\n      </label>\n\t</div>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tabset-justify',\n    templateUrl: './tabset-justify.html'\n})\nexport class NgbdTabsetJustify {\n    currentJustify = 'start';\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var navOrientation = {
    beforeCodeTitle: 'Nav orientation',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-tabset type=\"pills\" [orientation]=\"currentOrientation\">\n      <ngb-tab title=\"Simple\">\n        <ng-template ngbTabContent>\n          <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n        </ng-template>\n      </ngb-tab>\n\t  <ngb-tab>\n\t\t<ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n        <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n          <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n            cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n            sint qui sapiente accusamus tattooed echo park.</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n        <ng-template ngbTabContent>\n\t\t  <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.\n\t\t\tDonec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.\n\t\t\tDuis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna,\n\t\t\tegestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec\n\t\t\ttristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et\n\t\t\tmagnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque.\n\t\t\tPhasellus nec tortor vel tellus pulvinar feugiat.\n          </p>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentOrientation\">\n      <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n        <input ngbButton type=\"radio\" value=\"horizontal\">Horizontal\n      </label>\n      <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n        <input ngbButton type=\"radio\" value=\"vertical\">Vertical\n      </label>\n\t</div>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tabset-orientation',\n    templateUrl: './tabset-orientation.html'\n)\nexport class NgbdTabsetOrientation {\n    currentOrientation = 'horizontal';\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfTabs = {
    beforeCodeTitle: 'Global configuration of tabs',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-tabset>\n      <ngb-tab title=\"One\">\n        <ng-template ngbTabContent>\n          <p>These tabs are displayed as pills...</p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Two\">\n        <ng-template ngbTabContent>\n          <p>Because default values have been customized.</p>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-tabset-config',\n    templateUrl: './tabset-config.html',\n    providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers\n})\nexport class NgbdTabsetConfig {\n    constructor(config: NgbTabsetConfig) {\n        // customize default values of tabsets used by this component tree\n        config.justify = 'center';\n        config.type = 'pills';\n\t}\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var TabsComponent = /** @class */ (function () {
    function TabsComponent(config) {
        this.currentJustify = 'start';
        this.currentOrientation = 'horizontal';
        this.globalJustify = 'center';
        // customize default values of tabsets used by this component tree
        // config.justify = 'center';
        // config.type = 'pills';
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.exampleTabset = tabset;
        this.examplePills = pills;
        this.exampleSelectAnActiveTabById = selectAnActiveTabById;
        this.examplePreventTabChange = preventTabChange;
        this.exampleNavJustification = navJustification;
        this.exampleNavOrientation = navOrientation;
        this.exampleglobalConfigurationOfTabs = globalConfigurationOfTabs;
    };
    TabsComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/content/pages/components/ngbootstrap/tabs/tabs.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetConfig"]] // add NgbTabsetConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetConfig"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/timepicker/timepicker.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/timepicker/timepicker.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/timepicker/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleTimepicker\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Selected time: {{time | json}}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleMeridian\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"time2\" [meridian]=\"meridian\"></ngb-timepicker>\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\r\n\t\t\t\t\t\tMeridian - {{meridian ? \"ON\" : \"OFF\"}}\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Selected time: {{time2 | json}}</pre> </div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSeconds\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"time3\" [seconds]=\"seconds\"></ngb-timepicker>\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\r\n\t\t\t\t\t\tSeconds - {{seconds ? \"ON\" : \"OFF\"}}\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Selected time: {{time3 | json}}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSpinners\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"time7\" [spinners]=\"spinners\"></ngb-timepicker>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button class=\"m-t-1 btn btn-sm btn-{{spinners ? 'success' : 'danger'}}\" (click)=\"toggleSpinners()\">\r\n\t\t\t\t\t\tSpinners - {{spinners ? \"ON\" : \"OFF\"}}\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomSteps\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"time4\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<label for=\"changeHourStep\">Hour Step</label>\r\n\t\t\t\t\t\t\t<input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<label for=\"changeMinuteStep\">Minute Step</label>\r\n\t\t\t\t\t\t\t<input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<label for=\"changeSecondStep\">Second Step</label>\r\n\t\t\t\t\t\t\t<input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Selected time: {{time4 | json}}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomValidation\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tIllustrates custom validation, you have to select time between 12:00 and 13:59\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"time5\" [formControl]=\"ctrl\" required></ngb-timepicker>\r\n\t\t\t\t\t\t<div *ngIf=\"ctrl.valid\" class=\"small form-text text-success\">Great choice</div>\r\n\t\t\t\t\t\t<div class=\"small form-text text-danger\" *ngIf=\"!ctrl.valid\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"ctrl.errors['required']\">Select some time during lunchtime</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"ctrl.errors['tooLate']\">Oh no, it's way too late</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"ctrl.errors['tooEarly']\">It's a bit too early</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<pre>Selected time: {{time5 | json}}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfTimepickers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tThis timepicker uses customized default values.\r\n\t\t\t\t </span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"time6\" [seconds]=\"'true'\" [spinners]=\"'false'\"></ngb-timepicker>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/timepicker/timepicker.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/timepicker/timepicker.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TimepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var timepicker = {
    beforeCodeTitle: 'Timepicker',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-timepicker-basic',\n    templateUrl: './timepicker-basic.html'\n})\nexport class NgbdTimepickerBasic {\n    time = {hour: 13, minute: 30};\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var meridian = {
    beforeCodeTitle: 'Meridian',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\n    <button class=\"btn btn-sm btn-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\n      Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n    </button>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n\t<pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n",
    tsCode: "\n\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-timepicker-meridian',\n    templateUrl: './timepicker-meridian.html'\n})\nexport class NgbdTimepickerMeridian {\n    time = {hour: 13, minute: 30};\n    meridian = true;\n\n    toggleMeridian() {\n        this.meridian = !this.meridian;\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var seconds = {
    beforeCodeTitle: 'Seconds',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"seconds\"></ngb-timepicker>\n    <button class=\"btn btn-sm btn-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\n      Seconds - {{seconds ? \"ON\" : \"OFF\"}}\n    </button>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\nimport { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-timepicker-seconds',\n    templateUrl: './timepicker-seconds.html'\n})\nexport class NgbdTimepickerSeconds {\n    time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};\n    seconds = true;\n\n    toggleSeconds() {\n\t\tthis.seconds = !this.seconds;\n    }\n}\n ",
    viewCode: "",
    isCodeVisible: false
};
var spinners = {
    beforeCodeTitle: 'Spinners',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\" [spinners]=\"spinners\"></ngb-timepicker>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <button class=\"m-t-1 btn btn-sm btn-{{spinners ? 'success' : 'danger'}}\" (click)=\"toggleSpinners()\">\n      Spinners - {{spinners ? \"ON\" : \"OFF\"}}\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-timepicker-spinners',\n    templateUrl: './timepicker-spinners.html'\n})\nexport class NgbdTimepickerSpinners {\n    time = {hour: 13, minute: 30};\n    spinners = true;\n\n    toggleSpinners() {\n        this.spinners = !this.spinners;\n    }\n}\n\n\t",
    viewCode: "",
    isCodeVisible: false
};
var customSteps = {
    beforeCodeTitle: 'Custom steps',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n\t<ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\"\n      [secondStep]=\"secondStep\"></ngb-timepicker>\n     <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <label for=\"changeHourStep\">Hour Step</label>\n          <input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\n        </div>\n        <div class=\"col-sm-3\">\n          <label for=\"changeMinuteStep\">Minute Step</label>\n          <input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\n        </div>\n        <div class=\"col-sm-3\">\n          <label for=\"changeSecondStep\">Second Step</label>\n          <input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n  <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-timepicker-steps',\n    templateUrl: './timepicker-steps.html'\n})\nexport class NgbdTimepickerSteps {\n    time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};\n    hourStep = 1;\n    minuteStep = 15;\n    secondStep = 30;\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var customValidation = {
    beforeCodeTitle: 'Custom validation',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n\tIllustrates custom validation, you have to select time between 12:00 and 13:59\n  </span>\n  <div class=\"m-section__content\">\n    <div class=\"form-group\">\n      <ngb-timepicker [(ngModel)]=\"time\" [formControl]=\"ctrl\" required></ngb-timepicker>\n\t  <div *ngIf=\"ctrl.valid\" class=\"small form-text text-success\">Great choice</div>\n      <div class=\"small form-text text-danger\" *ngIf=\"!ctrl.valid\">\n      <div *ngIf=\"ctrl.errors['required']\">Select some time during lunchtime</div>\n      <div *ngIf=\"ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n      <div *ngIf=\"ctrl.errors['tooEarly']\">It's a bit too early</div>\n    </div>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n@Component({\n    selector: 'ngbd-timepicker-validation',\n    templateUrl: './timepicker-validation.html'\n})\nexport class NgbdTimepickerValidation {\n    time;\n\n    ctrl = new FormControl('', (control: FormControl) => {\n        const value = control.value;\n\n        if (!value) {\n            return null;\n        }\n\n        if (value.hour < 12) {\n            return {tooEarly: true};\n        }\n\n        if (value.hour > 13) {\n            return {tooLate: true};\n\t\t}\n\n        return null;\n    });\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfTimepickers = {
    beforeCodeTitle: 'Global configuration of timepickers',
    htmlCode: "\n<div class=\"m-section\">\n  <span class=\"m-section__sub\">\n\tThis timepicker uses customized default values.\n  </span>\n  <div class=\"m-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"'true'\" [spinners]=\"'false'\"></ngb-timepicker>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';\nimport {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-timepicker-config',\n    templateUrl: './timepicker-config.html',\n    providers: [NgbTimepickerConfig] // add NgbTimepickerConfig to the component providers\n})\nexport class NgbdTimepickerConfig {\n    time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};\n\n    constructor(config: NgbTimepickerConfig) {\n        // customize default values of ratings used by this component tree\n        config.seconds = true;\n        config.spinners = false;\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent(config) {
        this.time = { hour: 13, minute: 30 };
        this.time2 = { hour: 13, minute: 30 };
        this.meridian = true;
        this.time3 = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.time4 = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.time6 = { hour: 13, minute: 30, second: 0 };
        this.time7 = { hour: 13, minute: 30 };
        this.spinners = true;
        // customize default values of ratings used by this component tree
        // config.seconds = true;
        // config.spinners = false;
    }
    TimepickerComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    TimepickerComponent.prototype.ngOnInit = function () {
        this.exampleTimepicker = timepicker;
        this.exampleMeridian = meridian;
        this.exampleSeconds = seconds;
        this.exampleSpinners = spinners;
        this.exampleCustomSteps = customSteps;
        this.exampleCustomValidation = customValidation;
        this.exampleGlobalConfigurationOfTimepickers = globalConfigurationOfTimepickers;
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    };
    TimepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-timepicker',
            template: __webpack_require__(/*! ./timepicker.component.html */ "./src/app/content/pages/components/ngbootstrap/timepicker/timepicker.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerConfig"]] // add NgbTimepickerConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerConfig"]])
    ], TimepickerComponent);
    return TimepickerComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/tooltip/tooltip.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/tooltip/tooltip.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/tooltip/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleQuickAndEasyTooltips\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" placement=\"top\" ngbTooltip=\"Tooltip on top\" ngbTooltipClass=\"m-tooltip\">\r\n\t\t\t\t\t\tTooltip on top\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n\t\t\t\t\t\tTooltip on right\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n\t\t\t\t\t\tTooltip on bottom\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n\t\t\t\t\t\tTooltip on left\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleHTMLAndBindingsInTooltipsl\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tTooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a\r\n\t\t\t\t\t<code>&lt;ng-template&gt;</code> element.\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #tipContentS>Hello,\r\n\t\t\t\t\t\t<b>{{name}}</b>!</ng-template>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" [ngbTooltip]=\"tipContentS\">\r\n\t\t\t\t\t\tI've got markup and bindings in my tooltip!\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleCustomAndManualTriggers\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tYou can easily override open and close triggers by specifying event names (separated by\r\n\t\t\t\t\t<code>:</code>) in the\r\n\t\t\t\t\t<code>triggers</code> property.\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\r\n\t\t\t\t\t\tClick me!\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tAlternatively you can take full manual control over tooltip opening / closing events.\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\r\n\t\t\t\t\t\tClick me to open a tooltip\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"t.close()\">\r\n\t\t\t\t\t\tClick me to close a tooltip\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<m-material-preview [viewItem]=\"exampleContextAndManualTriggers\">\r\n\t\t\t<ng-template #tipContent let-greeting=\"greeting\">{{greeting}},\r\n\t\t\t\t<b>{{name2}}</b>!\r\n\t\t\t</ng-template>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tYou can optionally pass in a context when manually triggering a popover.\r\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t\t\tHow would you like to greet\r\n\t\t\t\t\t<strong [ngbTooltip]=\"tipContent\" #t2=\"ngbTooltip\" triggers=\"manual\">me</strong>?\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\r\n\t\t\t\t\t\tFrench\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\r\n\t\t\t\t\t\tGerman\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\r\n\t\t\t\t\t\tEnglish\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleAppendTooltipInTheBody\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tSet the\r\n\t\t\t\t\t<code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e.\r\n\t\t\t\t\t<code>overflow: hidden</code>).\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t<div class='card'>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary\" ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n\t\t\t\t\t\t\t\tDefault tooltip\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info\" ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\r\n\t\t\t\t\t\t\t\tTooltip appended to body\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfTooltips\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"This tooltip gets its inputs from the customized configuration\" placement=\"right\" triggers=\"click\">\r\n\t\t\t\t\t\tCustomized tooltip\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/tooltip/tooltip.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/tooltip/tooltip.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var quickAndEasyTooltips = {
    beforeCodeTitle: 'Quick and easy tooltips',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n    <button type=\"button\" class=\"btn btn-primary\" placement=\"top\" ngbTooltip=\"Tooltip on top\" ngbTooltipClass=\"m-tooltip\">\n      Tooltip on top\n\t</button>\n    <button type=\"button\" class=\"btn btn-info\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n      Tooltip on right\n    </button>\n    <button type=\"button\" class=\"btn btn-success\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n      Tooltip on bottom\n    </button>\n\t<button type=\"button\" class=\"btn btn-danger\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n      Tooltip on left\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tooltip-basic',\n    templateUrl: './tooltip-basic.html'\n})\nexport class NgbdTooltipBasic {}\n\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var HTMLAndBindingsInTooltips = {
    beforeCodeTitle: 'Progress bars with current value labels',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a\n    <code>&lt;ng-template&gt;</code> element.\n  </div>\n  <div class=\"m-section__content\">\n    <ng-template #tipContentS>Hello,\n      <b>{{name}}</b>!</ng-template>\n    <button type=\"button\" class=\"btn btn-primary\" [ngbTooltip]=\"tipContentS\">\n      I've got markup and bindings in my tooltip!\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tooltip-tplcontent',\n    templateUrl: './tooltip-tplcontent.html'\n})\nexport class NgbdTooltipTplcontent {\n    name = 'World';\n}\n\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var customAndManualTriggers = {
    beforeCodeTitle: 'Custom and manual triggers',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    You can easily override open and close triggers by specifying event names (separated by\n    <code>:</code>) in the\n    <code>triggers</code> property.\n  </div>\n  <div class=\"m-section__content\">\n    <button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\n      Click me!\n    </button>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    Alternatively you can take full manual control over tooltip opening / closing events.\n  </div>\n  <div class=\"m-section__content\">\n    <button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\n      Click me to open a tooltip\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"t.close()\">\n      Click me to close a tooltip\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-striped',\n    templateUrl: './progressbar-striped.html'\n})\nexport class NgbdProgressbarStriped {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var contextAndManualTriggers = {
    beforeCodeTitle: 'Context and manual triggers',
    htmlCode: "\n<ng-template #tipContent let-greeting=\"greeting\">{{greeting}},\n  <b>{{name2}}</b>!\n</ng-template>\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    You can optionally pass in a context when manually triggering a popover.\n    <div class=\"m-separator m-separator--dashed\"></div>\n    How would you like to greet\n   <strong [ngbTooltip]=\"tipContent\" #t2=\"ngbTooltip\" triggers=\"manual\">me</strong>?\n  </div>\n  <div class=\"m-section__content\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\n      French\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\n      German\n    </button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\n      English\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';\nimport {Component, ViewChild} from '@angular/core';\n\n@Component({\n     selector: 'ngbd-tooltip-tplwithcontext',\n     templateUrl: './tooltip-tplwithcontext.html'\n})\nexport class NgbdTooltipTplwithcontext {\n    greeting = {};\n    name = 'World';\n\n    @ViewChild('t') public tooltip: NgbTooltip;\n\n    public changeGreeting(greeting: any): void {\n        const isOpen = this.tooltip.isOpen();\n        this.tooltip.close();\n        if (greeting !== this.greeting || !isOpen) {\n\t\t    this.greeting = greeting;\n            this.tooltip.open(greeting);\n        }\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var appendTooltipInTheBody = {
    beforeCodeTitle: 'Append tooltip in the body',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    Set the\n\t<code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent.\n      This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e.\n    <code>overflow: hidden</code>).\n  </div>\n  <div class=\"m-section__content\">\n    <div class='row'>\n      <div class='card'>\n        <button type=\"button\" class=\"btn btn-outline-primary\" ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n          Default tooltip\n        </button>\n        <br />\n\t\t<button type=\"button\" class=\"btn btn-outline-info\"\n          ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\n          Tooltip appended to body\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tooltip-container',\n    templateUrl: './tooltip-container.html',\n    styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }']\n})\nexport class NgbdTooltipContainer {\n}\n\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfTooltips = {
    beforeCodeTitle: 'Global configuration of progress tooltips',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__content\">\n\t<button type=\"button\" class=\"btn btn-primary\"\n      ngbTooltip=\"This tooltip gets its inputs from the customized configuration\" placement=\"right\" triggers=\"click\">\n      Customized tooltip\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n  selector: 'ngbd-tooltip-config',\n  templateUrl: './tooltip-config.html',\n  providers: [NgbTooltipConfig] // add NgbTooltipConfig to the component providers\n})\nexport class NgbdTooltipConfig {\n    constructor(config: NgbTooltipConfig) {\n        // customize default values of tooltips used by this component tree\n        config.placement = 'right';\n        config.triggers = 'click';\n    }\n}\n\n",
    viewCode: "",
    isCodeVisible: false
};
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(config) {
        this.name = 'World';
        this.greeting = {};
        this.name2 = 'World';
        // customize default values of tooltips used by this component tree
        // config.placement = 'right';
        // config.triggers = 'click';
        config.container = 'body';
    }
    TooltipComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.tooltip.open(greeting);
        }
    };
    TooltipComponent.prototype.ngOnInit = function () {
        this.exampleQuickAndEasyTooltips = quickAndEasyTooltips;
        this.exampleHTMLAndBindingsInTooltipsl = HTMLAndBindingsInTooltips;
        this.exampleCustomAndManualTriggers = customAndManualTriggers;
        this.exampleContextAndManualTriggers = contextAndManualTriggers;
        this.exampleAppendTooltipInTheBody = appendTooltipInTheBody;
        this.exampleGlobalConfigurationOfTooltips = globalConfigurationOfTooltips;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('t2'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"])
    ], TooltipComponent.prototype, "tooltip", void 0);
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/content/pages/components/ngbootstrap/tooltip/tooltip.component.html"),
            styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"]] // add NgbTooltipConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"]])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/typehead/typehead.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/typehead/typehead.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<m-notice [icon]=\"'flaticon-exclamation m--font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"m-link\" href=\"https://ng-bootstrap.github.io/#/components/typeahead/examples\" target=\"_blank\">demos & documentation</a>\r\n</m-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleSimpleTypeahead\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tA typeahead example that gets values from a static\r\n\t\t\t\t\t<code>string[]</code>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<code>debounceTime</code> operator</li>\r\n\t\t\t\t\t\t<li>kicks in only if 2+ characters typed</li>\r\n\t\t\t\t\t\t<li>limits to 10 results</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<label for=\"typeahead-basic\">Search for a state:</label>\r\n\t\t\t\t\t<input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\t<pre>Model: {{ model | json }}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleOpenOnFocus\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tIt is possible to get the focus events with the current input value to emit results on focus with a great flexibility. In this simple example, a search is done no matter the content of the input:\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>on empty input all options will be taken</li>\r\n\t\t\t\t\t\t<li>otherwise options will be filtered against the search term</li>\r\n\t\t\t\t\t\t<li>it will limit the display to 10 results in all cases</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<label for=\"typeahead-focus\">Search for a state:</label>\r\n\t\t\t\t\t<input \r\n\t\t\t\t\t\tid=\"typeahead-focus\" \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tclass=\"form-control\" \r\n\t\t\t\t\t\t[(ngModel)]=\"model2\" \r\n\t\t\t\t\t\t[ngbTypeahead]=\"search2\" \r\n\t\t\t\t\t\t(focus)=\"focus$.next($event.target.value)\" \r\n\t\t\t\t\t\t(click)=\"click$.next($event.target.value)\" \r\n\t\t\t\t\t\t#instance=\"ngbTypeahead\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\t<pre>Model: {{ model2 | json }}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleFormattedResults\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tA typeahead example that uses a formatter function for string results\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<label for=\"typeahead-format\">Search for a state:</label>\r\n\t\t\t\t\t<input id=\"typeahead-format\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model3\" [ngbTypeahead]=\"search3\" [resultFormatter]=\"formatter3\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\t<pre>Model: {{ model3 | json }}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleWikipediaSearch\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tA typeahead example that gets values from the\r\n\t\t\t\t\t<code>Wikipedia Search</code>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>remote data retrieval</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<code>debounceTime</code> operator</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<code>do</code> operator</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<code>distinctUntilChanged</code> operator</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<code>switchMap</code> operator</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<code>catch</code> operator to display an error message in case of connectivity issue</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"typeahead-http\">Search for a wiki page:</label>\r\n\t\t\t\t\t\t<input id=\"typeahead-http\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"searchFailed\" [(ngModel)]=\"model4\" [ngbTypeahead]=\"search4\" placeholder=\"Wikipedia search\" />\r\n\t\t\t\t\t\t<span *ngIf=\"searching\">searching...</span>\r\n\t\t\t\t\t\t<div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\t<pre>Model: {{ model4 | json }}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleTemplateForResults\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tA typeahead example that uses custom template for results display and uses object as a model </div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<ng-template #rt let-r=\"result\" let-t=\"term\">\r\n\t\t\t\t\t\t<img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r['flag']\" width=\"16\"> {{ r.name}}\r\n\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t<label for=\"typeahead-template\">Search for a state:</label>\r\n\t\t\t\t\t<input id=\"typeahead-template\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model5\" [ngbTypeahead]=\"search5\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\t<pre>Model: {{ model5 | json }}</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\r\n\t\t<m-material-preview [viewItem]=\"exampleGlobalConfigurationOfTypeaheads\">\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<div class=\"m-section__sub\">\r\n\t\t\t\t\tThis typeahead shows a hint when the input matches because the default values have been customized.\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<label for=\"typeahead-config\">Search for a state:</label>\r\n\t\t\t\t\t<input id=\"typeahead-config\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model6\" [ngbTypeahead]=\"search6\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</m-material-preview>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/typehead/typehead.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/typehead/typehead.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TypeheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeheadComponent", function() { return TypeheadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _wikipedia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wikipedia.service */ "./src/app/content/pages/components/ngbootstrap/typehead/wikipedia.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var simpleTypeahead = {
    beforeCodeTitle: 'Simple Typeahead',
    htmlCode: "\n<div class=\"m-section\">\n<div class=\"m-section__sub\">\nA typeahead example that gets values from a static\n<code>string[]</code>\n<ul>\n  <li>\n\t<code>debounceTime</code> operator\n  </li>\n  <li>kicks in only if 2+ characters typed</li>\n  <li>limits to 10 results</li>\n</ul>\n</div>\n<div class=\"m-section__content\">\n<label for=\"typeahead-basic\">Search for a state:</label>\n<input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n</div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n<div class=\"m-section__sub\">\n<pre>Model: {{ model | json }}</pre>\n</div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\nselector: 'ngbd-typeahead-basic',\ntemplateUrl: './typeahead-basic.html',\nstyles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadBasic {\npublic model: any;\n\n  search = (text$: Observable<string>) =>\n  text$.pipe(\n    debounceTime(200),\n    distinctUntilChanged(),\n    map(term => term.length < 2 ? [] : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n  );\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var openOnFocus = {
    beforeCodeTitle: 'Open on focus',
    htmlCode: "\n<div class=\"m-section\">\n<div class=\"m-section__sub\">\nIt is possible to get the focus events with the current input value to emit results on focus with a great flexibility.\nIn this simple example, a search is done no matter the content of the input:\n<ul>\n  <li>on empty input all options will be taken</li>\n  <li>otherwise options will be filtered against the search term</li>\n  <li>it will limit the display to 10 results in all cases</li>\n</ul>\n</div>\n<div class=\"m-section__content\">\n<label for=\"typeahead-focus\">Search for a state:</label>\n<input id=\"typeahead-focus\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\"\n  (focus)=\"focus$.next($event.target.value)\" (click)=\"click$.next($event.target.value)\" #instance=\"ngbTypeahead\" />\n</div>\n</div>\n\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n<div class=\"m-section__sub\">\n<pre>Model: {{ model | json }}</pre>\n</div>\n</div>\n",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';\nimport {Observable} from 'rxjs/Observable';\nimport {Subject} from 'rxjs/Subject';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/merge';\nimport 'rxjs/add/operator/filter';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\nselector: 'ngbd-typeahead-focus',\ntemplateUrl: './typeahead-focus.html',\nstyles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadFocus {\nmodel: any;\n\n@ViewChild('instance') instance: NgbTypeahead;\nfocus$ = new Subject<string>();\nclick$ = new Subject<string>();\n\nsearch = (text$: Observable<string>) => {\n  const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());\n  const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));\n  const inputFocus$ = this.focus$;\n\n\n  return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(\n    map(term => (term === '' ? states\n      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))\n  );\n}\n\n",
    viewCode: "",
    isCodeVisible: false
};
var formattedResults = {
    beforeCodeTitle: 'Formatted results',
    htmlCode: "\n<div class=\"m-section\">\n<div class=\"m-section__sub\">\nA typeahead example that uses a formatter function for string results\n</div>\n<div class=\"m-section__content\">\n<label for=\"typeahead-format\">Search for a state:</label>\n<input id=\"typeahead-format\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\"\n  [resultFormatter]=\"formatter\" />\n</div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n<div class=\"m-section__sub\">\n<pre>Model: {{ model | json }}</pre>\n</div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\nselector: 'ngbd-typeahead-format',\ntemplateUrl: './typeahead-format.html',\nstyles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadFormat {\n  public model: any;\n\n  formatter = (result: string) => result.toUpperCase();\n\n  search = (text$: Observable<string>) =>\n    text$.pipe(\n      debounceTime(200),\n      distinctUntilChanged(),\n      map(term => term === '' ? []\n        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n    );\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var wikipediaSearch = {
    beforeCodeTitle: 'Wikipedia search',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    A typeahead example that gets values from the\n    <code>WikipediaService</code>\n    <ul>\n      <li>remote data retrieval</li>\n      <li><code>debounceTime</code> operator</li>\n      <li><code>do</code> operator</li>\n      <li><code>distinctUntilChanged</code> operator</li>\n      <li><code>switchMap</code> operator</li>\n      <li><code>catch</code> operator to display an error message in case of connectivity issue</li>\n    </ul>\n  </div>\n  <div class=\"m-section__content\">\n    <div class=\"form-group\">\n      <label for=\"typeahead-http\">Search for a wiki page:</label>\n      <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"searchFailed\" [(ngModel)]=\"model\"\n       [ngbTypeahead]=\"search\" placeholder=\"Wikipedia search\" />\n      <span *ngIf=\"searching\">searching...</span>\n      <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n    </div>\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Injectable} from '@angular/core';\nimport {HttpClient, HttpParams} from '@angular/common/http';\nimport {Observable} from 'rxjs/Observable';\nimport {of} from 'rxjs/observable/of';\nimport 'rxjs/add/operator/catch';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\nimport 'rxjs/add/operator/do';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/switchMap';\nimport 'rxjs/add/operator/merge';\n\nconst WIKI_URL = 'https://en.wikipedia.org/w/api.php';\nconst PARAMS = new HttpParams({\n  fromObject: {\n    action: 'opensearch',\n    format: 'json',\n    origin: '*'\n  }\n});\n\n@Injectable()\nexport class WikipediaService {\nconstructor(private http: HttpClient) {}\n\n  search(term: string) {\n    if (term === '') {\n      return of([]);\n    }\n\n    return this.http\n      .get(WIKI_URL, {params: PARAMS.set('search', term)})\n      .map(response => response[1]);\n  }\n}\n\n@Component({\n  selector: 'ngbd-typeahead-http',\n  templateUrl: './typeahead-http.html',\n  providers: [WikipediaService],\n  styles: [`.form-control { width: 300px; display: inline; }`]\n})\nexport class NgbdTypeaheadHttp {\n  model: any;\n  searching = false;\n  searchFailed = false;\n  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);\n\n  constructor(private _service: WikipediaService) {}\n\n  search = (text$: Observable<string>) =>\n    text$.pipe(\n      debounceTime(300),\n      distinctUntilChanged(),\n      tap(() => this.searching = true),\n      switchMap(term =>\n        this._service.search(term).pipe(\n        tap(() => this.searchFailed = false),\n        catchError(() => {\n\t\t  this.searchFailed = true;\n          return of([]);\n        }))\n    ),\n    tap(() => this.searching = false)\n  );\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var templateForResults = {
    beforeCodeTitle: 'Template for results',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    A typeahead example that uses custom template for results display and uses object as a model\n  </div>\n  <div class=\"m-section__content\">\n    <ng-template #rt let-r=\"result\" let-t=\"term\">\n      <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r['flag']\" width=\"16\"> {{ r.name}}\n    </ng-template>\n    <label for=\"typeahead-template\">Search for a state:</label>\n\t<input id=\"typeahead-template\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\"\n      [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" />\n  </div>\n</div>\n<div class=\"m-separator m-separator--dashed\"></div>\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/map';\n\nconst statesWithFlags = [\n  {'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},\n  {'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},\n  {'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},\n  {'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},\n  {'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},\n  {'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},\n  {'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},\n  {'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},\n  {'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},\n  {\n    'name': 'Georgia',\n    'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'\n  },\n  {'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},\n  {'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},\n  {'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},\n  {'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},\n  {'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},\n  {'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},\n  {'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},\n  {'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},\n  {'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},\n  {'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},\n  {'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},\n  {'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},\n  {'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},\n  {'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},\n  {'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},\n  {'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},\n  {'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},\n  {'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},\n  {'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},\n  {'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},\n  {'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},\n  {'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},\n  {'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},\n  {'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},\n  {'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},\n  {'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},\n  {'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},\n  {'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},\n  {'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},\n  {'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},\n  {'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},\n  {'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},\n  {'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},\n  {'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},\n  {'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},\n  {'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},\n  {'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},\n  {'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},\n  {'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},\n  {'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}\n]; \n\n@Component({\n  selector: 'ngbd-typeahead-template',\n  templateUrl: './typeahead-template.html',\n  styles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadTemplate {\n  public model: any;\n\n  search = (text$: Observable<string>) =>\n  text$.pipe(\n\tdebounceTime(200),\n    map(term => term === '' ? []\n      : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n  );\n\n  formatter = (x: {name: string}) => x.name;\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfTypeaheads = {
    beforeCodeTitle: 'Global configuration of progress typeaheads',
    htmlCode: "\n<div class=\"m-section\">\n  <div class=\"m-section__sub\">\n    This typeahead shows a hint when the input matches because the default values have been customized.\n  </div>\n  <div class=\"m-section__content\">\n    <label for=\"typeahead-config\">Search for a state:</label>\n    <input id=\"typeahead-config\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged'; \n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\n  selector: 'ngbd-typeahead-config',\n  templateUrl: './typeahead-config.html',\n  styles: [`.form-control { width: 300px; }`],\n  providers: [NgbTypeaheadConfig] // add NgbTypeaheadConfig to the component providers\n})\nexport class NgbdTypeaheadConfig {\n  public model: any;\n\n  constructor(config: NgbTypeaheadConfig) {\n    // customize default values of typeaheads used by this component tree\n    config.showHint = true;\n  } \n\n  search = (text$: Observable<string>) =>\n    text$.pipe(\n\t  debounceTime(200),\n      distinctUntilChanged(),\n      map(term => term.length < 2 ? []\n        : states.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))\n  );\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var statesWithFlags = [
    { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { 'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { 'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { 'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { 'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { 'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { 'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    {
        'name': 'Georgia',
        'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
    },
    { 'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { 'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { 'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { 'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { 'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { 'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { 'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { 'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { 'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { 'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { 'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { 'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { 'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { 'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { 'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { 'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { 'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { 'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { 'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { 'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { 'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { 'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { 'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { 'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { 'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { 'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { 'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { 'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { 'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { 'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { 'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { 'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { 'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { 'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { 'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { 'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { 'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { 'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { 'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { 'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var TypeheadComponent = /** @class */ (function () {
    function TypeheadComponent(_service, config) {
        var _this = this;
        this._service = _service;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searching = false;
        this.searchFailed = false;
        this.search6 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return v.toLowerCase().startsWith(term.toLocaleLowerCase()); }).splice(0, 10); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.search5 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term === '' ? []
                : statesWithFlags.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter3 = function (result) { return result.toUpperCase(); };
        this.formatter = function (x) { return x.name; };
        this.search4 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
                return _this._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searchFailed = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searching = false; }));
        };
        this.search3 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term === '' ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.search2 = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? states
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
        this.search = function (text$) { return (text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term.length < 2 ? [] : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }))); };
    }
    TypeheadComponent.prototype.ngOnInit = function () {
        this.exampleSimpleTypeahead = simpleTypeahead;
        this.exampleOpenOnFocus = openOnFocus;
        this.exampleFormattedResults = formattedResults;
        this.exampleWikipediaSearch = wikipediaSearch;
        this.exampleTemplateForResults = templateForResults;
        this.exampleGlobalConfigurationOfTypeaheads = globalConfigurationOfTypeaheads;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], TypeheadComponent.prototype, "instance", void 0);
    TypeheadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-typehead',
            template: __webpack_require__(/*! ./typehead.component.html */ "./src/app/content/pages/components/ngbootstrap/typehead/typehead.component.html"),
            styles: [".form-control { width: 300px; }"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_wikipedia_service__WEBPACK_IMPORTED_MODULE_4__["WikipediaService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadConfig"]],
        }),
        __metadata("design:paramtypes", [_wikipedia_service__WEBPACK_IMPORTED_MODULE_4__["WikipediaService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadConfig"]])
    ], TypeheadComponent);
    return TypeheadComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/ngbootstrap/typehead/wikipedia.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/components/ngbootstrap/typehead/wikipedia.service.ts ***!
  \************************************************************************************/
/*! exports provided: WikipediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaService", function() { return WikipediaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// https://ng-bootstrap.github.io/#/components/typeahead/examples
var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*'
    }
});
var WikipediaService = /** @class */ (function () {
    function WikipediaService(http) {
        this.http = http;
    }
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response[1]; }));
    };
    WikipediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WikipediaService);
    return WikipediaService;
}());



/***/ })

}]);
//# sourceMappingURL=components-ngbootstrap-ngbootstrap-module.js.map