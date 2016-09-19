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
var socket_service_1 = require("../services/socket.service");
var giphy_service_1 = require("../services/giphy.service");
var chat_message_component_1 = require("../chat-message/chat-message.component");
var Message = (function () {
    function Message(name, message, type) {
    }
    return Message;
}());
var AppChat = (function () {
    function AppChat(appUser, route, socket, giphy) {
        this.appUser = appUser;
        this.route = route;
        this.socket = socket;
        this.giphy = giphy;
        this.newMessage = "";
        this.messages = [];
    }
    AppChat.prototype.ngOnInit = function () {
        var _this = this;
        if (this.appUser.getUser().isLogin === false) {
            this.route.navigate(["/login"]);
            return;
        }
        this.io = this.socket.connectSocket().subscribe(function (message) {
            console.log(message);
            _this.messages.push(message);
        });
        this.userName = this.appUser.getUser().name;
        this.giphy.getTrendyGifs().subscribe(function (images) {
            console.log(images);
            _this.images = images;
        });
    };
    AppChat.prototype.ngOnDestroy = function () {
        if (typeof this.io === "function")
            this.io();
    };
    AppChat.prototype.logout = function () {
        this.appUser.logout();
        this.route.navigate(["/login"]);
    };
    AppChat.prototype.addNewMessage = function (message) {
        this.socket.sendMessage({
            message: message,
            type: "TEXT",
            name: this.userName
        });
        this.newMessage = "";
    };
    AppChat.prototype.sendImage = function (id) {
        this.socket.sendMessage({
            message: id,
            type: "IMAGE",
            name: this.userName
        });
    };
    AppChat = __decorate([
        core_1.Component({
            selector: "app-chat",
            template: "\n    <button\n      class=\"logout-btn\"\n      type=\"button\"\n      (click)=\"logout()\">\n      Logout\n    </button>\n\n    <div class=\"chat-input-wrapper\">\n      <input #messageInput type=\"text\" [(ngModel)]=\"newMessage\">\n      <button type=\"button\" (click)=\"addNewMessage(messageInput.value)\">Send</button>\n    </div>\n\n    <div class=\"gifs-container\">\n      <img\n        *ngFor=\"let image of images\"\n        [src]=\"image.url\"\n        (click)=\"sendImage(image.id)\">\n    </div>\n\n    <chat-message\n      *ngFor=\"let message of messages\"\n      [message]=\"message\"\n    ></chat-message>\n  ",
            styles: ["\n    :host {\n      height: 90%;\n      overflow-y: scroll;\n    }\n\n    .logout-btn {\n      width: 70px;\n      height: 30px;\n      color: #fff;\n      border: none;\n      padding: 0;\n      margin: 0 0 10px 10px;\n      background: #ff5722;\n      text-transform: uppercase;\n    }\n\n    .chat-input-wrapper {\n      margin: 0 10px 10px;\n      display: flex;\n      justify-content: flex-start;\n    }\n\n    .chat-input-wrapper input {\n      height: 30px;\n      width: 400px;\n      border: 1px solid #2196f3;\n      padding: 0 10px;\n    }\n\n    .chat-input-wrapper button {\n      height: 30px;\n      width: 70px;\n      border: none;\n      color: #fff;\n      background: #2196f3;\n      font: 16px Arial, sans-serif;\n    }\n\n    .gifs-container {\n      height: 120px;\n      margin: 0 10px;\n      display: flex;\n      align-items: center;\n      overflow-x: scroll;\n    }\n\n    .gifs-container img {\n      margin: 0 0 0 5px;\n    }\n\n    .gifs-container img:first-child {\n      margin: 0;\n    }\n  "],
            providers: [socket_service_1.Socket, giphy_service_1.Giphy],
            directives: [chat_message_component_1.ChatMessage]
        }), 
        __metadata('design:paramtypes', [user_service_1.AppUser, router_1.Router, socket_service_1.Socket, giphy_service_1.Giphy])
    ], AppChat);
    return AppChat;
}());
exports.AppChat = AppChat;
//# sourceMappingURL=app-chat.component.js.map