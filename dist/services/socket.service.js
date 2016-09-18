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
var io = require("socket.io-client");
var Observable_1 = require("rxjs/Observable");
var Socket = (function () {
    function Socket() {
        this.link = "178.62.203.188:8888";
    }
    Socket.prototype.connectSocket = function () {
        var _this = this;
        this.socket = io.connect(this.link);
        this.socket.on("connect", function () {
            console.log("Connected to socket");
        });
        return Observable_1.Observable.create(function (observer) {
            _this.socket.on("chat message", function (message) { return observer.next(message); });
            return function () {
                _this.socket.close();
            };
        });
    };
    Socket.prototype.sendMessage = function (message) {
        this.socket.emit("chat message", message);
    };
    Socket = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Socket);
    return Socket;
}());
exports.Socket = Socket;
//# sourceMappingURL=socket.service.js.map