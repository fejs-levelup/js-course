import { Component, ViewEncapsulation } from "@angular/core";
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

      <button
        type="button"
        (click)="login(loginNameInput.value)">
        Login
       </button>
    </div>
  `,
  styles: [`
    .login-wrapper {
      height: 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    input, button {
      width: 200px;
      height: 40px;
      font: 16px/30px Arial, sans-serif;
    }

    input {
      border: 1px solid #777;
      padding: 0 10px;
    }

    button {

      border: none;
      background: #2196f3;
      padding: 0;
      color: #fff;
      box-shadow: 5px 5px 20px 1px rgba(0,0,0,.4);
      cursor: pointer;
    }

    button:hover,
    button:active {
      box-shadow: 3px 3px 15px 1px rgba(0,0,0,.3);
    }
  `],
  encapsulation: ViewEncapsulation.Native
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