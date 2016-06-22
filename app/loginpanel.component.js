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
    var LoginPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoginPanelComponent = (function () {
                function LoginPanelComponent() {
                }
                LoginPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'div.login-panel',
                        template: "\n        <div class=\"login-header\">\n            <p class=\"welcome\">WELCOME!</p>\n            <p class=\"wel-msg\">Please select your login method</p>\n        </div>\n        <div class=\"login-msg\">Lorem Ipsum Ipsum de sata motor de quello de abante de atras in short atras abante. Ambot unsay sunod.</div>\n        <div class=\"login-alternative\"><a href=\"#\">Login with user ID</a></div>\n        <div class=\"clearfix\"></div>\n        <div class=\"login-method\">\n            <a href=\"#\" class=\"login-option-1\">Facebook</a>\n            <a href=\"#\" class=\"login-option-2\">Twitter</a>\n        </div>\n        <div class=\"warning\">\n            <p class=\"warning-header\">WARNING!</p>\n            <p class=\"warning-msg\">\n                The user is reminded that he is logging into a program or data that is used directly in connection with or necessary for the security, defence or international relations of Banana Republic. Any unauthorised access, use, modification, interception, or obstruction of use (including such attempts) of the computer, program or data would attract an enhanced penalty (for an offence involving protected computers) under the Banana Misuse Act.\n                If found guilty, an offender can be fined up to $100,000 and/or imprisoned up to 20 years. If you are not authorised to use this system, do not log in or attempt to log in.\n            </p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginPanelComponent);
                return LoginPanelComponent;
            }());
            exports_1("LoginPanelComponent", LoginPanelComponent);
        }
    }
});
//# sourceMappingURL=loginpanel.component.js.map