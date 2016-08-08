"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_router_1 = require("./app.router");
var user_service_1 = require("./services/user.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_router_1.appRouterProviders,
    user_service_1.AppUser
]);
//# sourceMappingURL=main.js.map