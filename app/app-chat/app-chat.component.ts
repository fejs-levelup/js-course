import { Component } from "@angular/core";

@Component({
  selector: "app-chat",
  template: `
    <input #messageInput type="text" [(ngModel)]="newMessage"><br>
    <button type="button" (click)="addNewMessage(messageInput.value)">Send new message</button>
    <ul>
      <li *ngFor="let message of messages">{{message}}</li>
    </ul>
  `
})
export class AppChat {
  newMessage: string = "";
  messages: [string] = ["hello", "you"];

  addNewMessage(message: string)  {
    this.messages.push(message);
    this.newMessage = "";
  }
}