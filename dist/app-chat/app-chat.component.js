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
var AppChat = (function () {
    function AppChat() {
        this.newMessage = "";
        this.messages = ["hello", "you"];
    }
    AppChat.prototype.addNewMessage = function (message) {
        this.messages.push(message);
        this.newMessage = "";
    };
    AppChat = __decorate([
        core_1.Component({
            selector: "app-chat",
            template: "\n    <input #messageInput type=\"text\" [(ngModel)]=\"newMessage\"><br>\n    <button type=\"button\" (click)=\"addNewMessage(messageInput.value)\">Send new message</button>\n    <ul>\n      <li *ngFor=\"let message of messages\">{{message}}</li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppChat);
    return AppChat;
}());
exports.AppChat = AppChat;
//# sourceMappingURL=app-chat.component.js.map