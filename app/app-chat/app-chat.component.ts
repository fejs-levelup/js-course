import { Component } from "@angular/core";
import { AppUser } from "../services/user.service";
import { Router } from "@angular/router";
import { Socket } from "../services/socket.service";
import { Giphy } from "../services/giphy.service";

class Message {
  constructor(
    name: string,
    message: string,
    type: string) {}
}

@Component({
  selector: "app-chat",
  template: `
    <input #messageInput type="text" [(ngModel)]="newMessage"><br>
    <button type="button" (click)="addNewMessage(messageInput.value)">Send new message</button>
    <div class="gifs-container">
      <img
        *ngFor="let image of images"
        [src]="image.url"
        (click)="sendImage(image.id)">
    </div>
    <ul>
      <li *ngFor="let message of messages">{{message.message}}</li>
    </ul>
    <button
      type="button"
      (click)="logout()">
      Logout
    </button>
  `,
  providers: [ Socket, Giphy ]
})
export class AppChat {
  newMessage: string = "";
  messages: Array<Message> = [];
  private io;
  private userName;
  private images;

  constructor(
    private appUser: AppUser,
    private route: Router,
    private socket: Socket,
    private giphy: Giphy) {}

  ngOnInit() {
    if(this.appUser.getUser().isLogin === false) {
      this.route.navigate(["/login"]);
      return;
    }

    this.io = this.socket.connectSocket().subscribe(message => {
      console.log(message);
      this.messages.push(message);
    });

    this.userName = this.appUser.getUser().name;

    this.giphy.getTrendyGifs().subscribe(images => {
      console.log(images);
      this.images = images;
    });
  }

  ngOnDestroy() {
    if(typeof this.io === "function") this.io();
  }

  logout() {
    this.appUser.logout();
    this.route.navigate(["/login"]);
  }

  addNewMessage(message: string)  {
    this.socket.sendMessage({
      message,
      type: "TEXT",
      name: this.userName
    });

    this.newMessage = "";
  }

  sendImage(id: string) {
    this.socket.sendMessage({
      message: id,
      type: "IMAGE",
      name: this.userName
    });
  }
}