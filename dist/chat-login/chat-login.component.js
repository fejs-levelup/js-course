"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../services/user.service");
var ChatLogin = (function () {
    function ChatLogin(appUser, route) {
        this.appUser = appUser;
        this.route = route;
    }
    ChatLogin.prototype.login = function (loginName) {
        this.appUser.login(loginName);
        this.route.navigate(["/"]);
    };
    ChatLogin = __decorate([
        core_1.Component({
            selector: "chat-login",
            template: "\n    <div class=\"login-wrapper\">\n      <input\n        #loginNameInput\n        type=\"text\"\n        [(ngModel)]=\"loginName\">\n\n      <button\n        type=\"button\"\n        (click)=\"login(loginNameInput.value)\">\n        Login\n       </button>\n    </div>\n  ",
            styles: ["\n    .login-wrapper {\n      height: 90px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    input, button {\n      width: 200px;\n      height: 40px;\n      font: 16px/30px Arial, sans-serif;\n    }\n\n    input {\n      border: 1px solid #777;\n      padding: 0 10px;\n    }\n\n    button {\n\n      border: none;\n      background: #2196f3;\n      padding: 0;\n      color: #fff;\n      box-shadow: 5px 5px 20px 1px rgba(0,0,0,.4);\n      cursor: pointer;\n    }\n\n    button:hover,\n    button:active {\n      box-shadow: 3px 3px 15px 1px rgba(0,0,0,.3);\n    }\n  "],
            encapsulation: core_1.ViewEncapsulation.Native
        }), 
        __metadata('design:paramtypes', [user_service_1.AppUser, router_1.Router])
    ], ChatLogin);
    return ChatLogin;
}());
exports.ChatLogin = ChatLogin;
//# sourceMappingURL=chat-login.component.js.map