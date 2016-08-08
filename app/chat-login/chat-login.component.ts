import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppUser } from "../services/user.service";

@Component({
  selector: "chat-login",
  template: `
    <div class="login-wrapper">
      <input
        #loginNameInput
        type="text"
        [(ngModel)]="loginName">
        <br>

      <button
        type="button"
        (click)="login(loginNameInput.value)">
        Login
       </button>
    </div>
  `
})
export class ChatLogin {
  constructor(
    private appUser: AppUser,
    private route: Router) {}

  login(loginName) {
    this.appUser.login(loginName);
    this.route.navigate(["/"]);
  }
}