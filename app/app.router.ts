import { provideRouter, RouterConfig } from '@angular/router';
import { AppChat } from "./app-chat/app-chat.component";
import { ChatLogin } from "./chat-login/chat-login.component";

const routes: RouterConfig = [
  { path: "",       component: AppChat },
  { path: "login", component: ChatLogin }
];

export const appRouterProviders = [
  provideRouter(routes)
];
