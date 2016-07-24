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
var ChatLogin = (function () {
    function ChatLogin() {
    }
    ChatLogin = __decorate([
        core_1.Component({
            selector: "chat-login",
            template: "\n    <div class=\"login-wrapper\">\n      <input type=\"text\"><br>\n      <button type=\"button\">Login</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ChatLogin);
    return ChatLogin;
}());
exports.ChatLogin = ChatLogin;
//# sourceMappingURL=chat-login.component.js.map