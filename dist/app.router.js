"use strict";
var router_1 = require('@angular/router');
var app_chat_component_1 = require("./app-chat/app-chat.component");
var chat_login_component_1 = require("./chat-login/chat-login.component");
var routes = [
    { path: "", component: app_chat_component_1.AppChat },
    { path: "login", component: chat_login_component_1.ChatLogin }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.router.js.map