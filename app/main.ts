import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from "./app.router";
import { AppUser } from "./services/user.service";

bootstrap(AppComponent, [
  appRouterProviders,
  AppUser
]);
