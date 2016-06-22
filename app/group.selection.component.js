System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var GroupSelection;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GroupSelection = (function () {
                function GroupSelection() {
                    this.title = "Or, you can explore the group you belong to.";
                    this.selections = ["Pre-Enlistees", "National Service", "In-service Personnel", "NSmen", "SAF VC Volunteers", "Employers", "Public"];
                }
                GroupSelection = __decorate([
                    core_1.Component({
                        selector: 'div.user-selection',
                        template: "\n        <div class=\"user-group\">\n            <h2>{{title}}</h2>\n            <ul class=\"selection\">\n                <li *ngFor=\"#select of selections\">\n                    <a href=\"#\">{{select}}</a>\n                </li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], GroupSelection);
                return GroupSelection;
            }());
            exports_1("GroupSelection", GroupSelection);
        }
    }
});
//# sourceMappingURL=group.selection.component.js.map