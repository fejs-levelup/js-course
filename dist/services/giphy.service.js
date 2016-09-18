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
var http_1 = require("@angular/http");
var Giphy = (function () {
    function Giphy(http) {
        this.http = http;
        this.link = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=20";
        this.basicUrl = "http://api.giphy.com/v1/gifs";
        this.apiKey = "api_key=dc6zaTOxFJmzC";
    }
    Giphy.prototype.getTrendyGifs = function () {
        return this.http.get(this.link).
            map(function (res) {
            var result = res.json(), data = result.data;
            if (!data)
                return [];
            return data.map(function (element) { return ({
                url: element.images.fixed_height_small.url,
                id: element.id
            }); });
        });
    };
    Giphy.prototype.getGifById = function (id) {
        return this.http.get(this.basicUrl + "/" + id + "?" + this.apiKey).
            map(function (res) {
            var result = res.json(), data = result.data;
            if (!data)
                return {};
            return {
                url: data.images.fixed_height_small.url,
                id: data.id
            };
        });
    };
    Giphy = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Giphy);
    return Giphy;
}());
exports.Giphy = Giphy;
//# sourceMappingURL=giphy.service.js.map