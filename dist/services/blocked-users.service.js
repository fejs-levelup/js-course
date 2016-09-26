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
var BlockedUsers = (function () {
    function BlockedUsers() {
        this.blockedUsers = [];
    }
    BlockedUsers.prototype.addUser = function (name) {
        if (this.isBlocked(name))
            return name;
        else {
            this.blockedUsers.push(name);
            return name;
        }
    };
    BlockedUsers.prototype.rmUser = function (name) {
        var i = this.blockedUsers.indexOf(name);
        if (i === -1)
            return null;
        this.blockedUsers.splice(i, 1);
        return name;
    };
    BlockedUsers.prototype.isBlocked = function (name) {
        return this.blockedUsers.includes(name);
    };
    BlockedUsers = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BlockedUsers);
    return BlockedUsers;
}());
exports.BlockedUsers = BlockedUsers;
//# sourceMappingURL=blocked-users.service.js.map