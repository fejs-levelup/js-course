import { Component } from "@angular/core";
import { AppUser } from "../services/user.service";
import { Router } from "@angular/router";
import { Socket } from "../services/socket.service";
import { Giphy } from "../services/giphy.service";
import { ChatMessage } from "../chat-message/chat-message.component";

class Message {
  constructor(
    name: string,
    message: string,
    type: string) {}
}

@Component({
  selector: "app-chat",
  template: `
    <button
      class="logout-btn"
      type="button"
      (click)="logout()">
      Logout
    </button>

    <div class="chat-input-wrapper">
      <input #messageInput type="text" [(ngModel)]="newMessage">
      <button type="button" (click)="addNewMessage(messageInput.value)">Send</button>
    </div>

    <div class="gifs-container">
      <img
        *ngFor="let image of images"
        [src]="image.url"
        (click)="sendImage(image.id)">
    </div>

    <div class="chat-messages">
      <chat-message
        *ngFor="let message of messages"
        [message]="message"
      ></chat-message>
    </div>
  `,
  styles: [`
    :host {
      height: 90%;
      overflow-y: scroll;
    }

    .logout-btn {
      width: 70px;
      height: 30px;
      color: #fff;
      border: none;
      padding: 0;
      margin: 0 0 10px 10px;
      background: #ff5722;
      text-transform: uppercase;
    }

    .chat-input-wrapper {
      margin: 0 10px 10px;
      display: flex;
      justify-content: flex-start;
    }

    .chat-input-wrapper input {
      height: 30px;
      width: 400px;
      border: 1px solid #2196f3;
      padding: 0 10px;
    }

    .chat-input-wrapper button {
      height: 30px;
      width: 70px;
      border: none;
      color: #fff;
      background: #2196f3;
      font: 16px Arial, sans-serif;
    }

    .gifs-container {
      height: 120px;
      margin: 0 10px;
      display: flex;
      align-items: center;
      overflow-x: scroll;
    }

    .gifs-container img {
      margin: 0 0 0 5px;
    }

    .gifs-container img:first-child {
      margin: 0;
    }

    .chat-messages {
      height: 380px;
      overflow-y: scroll;
    }
  `],
  providers: [ Socket, Giphy ],
  directives: [ ChatMessage ]
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