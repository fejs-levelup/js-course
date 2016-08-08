import { Component } from "@angular/core";
import { AppUser } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-chat",
  template: `
    <input #messageInput type="text" [(ngModel)]="newMessage"><br>
    <button type="button" (click)="addNewMessage(messageInput.value)">Send new message</button>
    <ul>
      <li *ngFor="let message of messages">{{message}}</li>
    </ul>
    <button
      type="button"
      (click)="logout()">
      Logout
    </button>
  `
})
export class AppChat {
  newMessage: string = "";
  messages: [string] = ["hello", "you"];

  constructor(
    private appUser: AppUser,
    private route: Router) {}

  ngOnInit() {
    if(this.appUser.getUser().isLogin === false) {
      this.route.navigate(["/login"]);
    }
  }

  logout() {
    this.appUser.logout();
    this.route.navigate(["/login"]);
  }

  addNewMessage(message: string)  {
    this.messages.push(message);
    this.newMessage = "";
  }
}