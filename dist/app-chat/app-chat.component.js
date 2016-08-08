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
var user_service_1 = require("../services/user.service");
var router_1 = require("@angular/router");
var AppChat = (function () {
    function AppChat(appUser, route) {
        this.appUser = appUser;
        this.route = route;
        this.newMessage = "";
        this.messages = ["hello", "you"];
    }
    AppChat.prototype.ngOnInit = function () {
        if (this.appUser.getUser().isLogin === false) {
            this.route.navigate(["/login"]);
        }
    };
    AppChat.prototype.logout = function () {
        this.appUser.logout();
        this.route.navigate(["/login"]);
    };
    AppChat.prototype.addNewMessage = function (message) {
        this.messages.push(message);
        this.newMessage = "";
    };
    AppChat = __decorate([
        core_1.Component({
            selector: "app-chat",
            template: "\n    <input #messageInput type=\"text\" [(ngModel)]=\"newMessage\"><br>\n    <button type=\"button\" (click)=\"addNewMessage(messageInput.value)\">Send new message</button>\n    <ul>\n      <li *ngFor=\"let message of messages\">{{message}}</li>\n    </ul>\n    <button\n      type=\"button\"\n      (click)=\"logout()\">\n      Logout\n    </button>\n  "
        }), 
        __metadata('design:paramtypes', [user_service_1.AppUser, router_1.Router])
    ], AppChat);
    return AppChat;
}());
exports.AppChat = AppChat;
//# sourceMappingURL=app-chat.component.js.map