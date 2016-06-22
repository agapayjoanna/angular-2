System.register(['angular2/core', './headline.component', './group.selection.component', './loginpanel.component', './footer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, headline_component_1, group_selection_component_1, loginpanel_component_1, footer_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (headline_component_1_1) {
                headline_component_1 = headline_component_1_1;
            },
            function (group_selection_component_1_1) {
                group_selection_component_1 = group_selection_component_1_1;
            },
            function (loginpanel_component_1_1) {
                loginpanel_component_1 = loginpanel_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header>\n            <div class=\"logo\">\n                <img src=\"app/img/logo.jpg\"/>\n            </div>\n        </header>\n        <div class=\"test\"></div>\n        <div class=\"user-selection\"></div>\n        <div class=\"login-panel\"></div>\n        <div class=\"footer\"></div>\n    ",
                        directives: [headline_component_1.HeadlineComponent, group_selection_component_1.GroupSelection, loginpanel_component_1.LoginPanelComponent, footer_component_1.FooterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map