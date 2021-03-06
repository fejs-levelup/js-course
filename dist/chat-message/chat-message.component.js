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
var giphy_service_1 = require("../services/giphy.service");
var blocked_users_service_1 = require("../services/blocked-users.service");
var ChatMessage = (function () {
    function ChatMessage(giphy, blockedUsers) {
        this.giphy = giphy;
        this.blockedUsers = blockedUsers;
    }
    ChatMessage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.message.type === 'IMAGE') {
            this.giphy.getGifById(this.message.message).subscribe(function (image) {
                _this.src = image.url;
            });
        }
        setTimeout(function () {
            console.log("Hey from message");
        }, 10000);
        this.time = new Date();
    };
    ChatMessage.prototype.blockUser = function (name) {
        console.log(this.blockedUsers.isBlocked(name));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChatMessage.prototype, "message", void 0);
    ChatMessage = __decorate([
        core_1.Component({
            selector: "chat-message",
            template: "\n    <div class=\"user-name\">\n      {{message.name}}<br>\n      <span>{{time | date:\"yyyy/MM/dd HH:mm:ss\"}}</span><br>\n      <i (click)=\"blockUser(message.name)\">\u00D7</i>\n    </div>\n\n    <div\n      *ngIf=\"message.type === 'TEXT'\"\n      class=\"text-message\">\n     {{message.message}}\n    </div>\n\n    <div\n      *ngIf=\"message.type === 'IMAGE'\"\n      class=\"image=message\">\n      <img *ngIf=\"src\" [src]=\"src\"/>\n    </div>\n  ",
            styleUrls: ["app/chat-message/style.css"],
            providers: [giphy_service_1.Giphy, blocked_users_service_1.BlockedUsers]
        }), 
        __metadata('design:paramtypes', [giphy_service_1.Giphy, blocked_users_service_1.BlockedUsers])
    ], ChatMessage);
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chat-message.component.js.map