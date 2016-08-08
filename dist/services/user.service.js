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
var User = (function () {
    function User() {
        this.name = "";
        this.isLogin = false;
    }
    return User;
}());
var AppUser = (function () {
    function AppUser() {
        this.user = new User();
    }
    AppUser.prototype.login = function (name) {
        this.user.name = name;
        this.user.isLogin = true;
        console.log(this.user);
    };
    AppUser.prototype.logout = function () {
        this.user.name = "";
        this.user.isLogin = false;
    };
    AppUser.prototype.getUser = function () {
        console.log(this.user);
        return this.user;
    };
    AppUser = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppUser);
    return AppUser;
}());
exports.AppUser = AppUser;
//# sourceMappingURL=user.service.js.map