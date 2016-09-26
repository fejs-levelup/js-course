import { Component, Input } from "@angular/core";
import { Giphy } from "../services/giphy.service";
import { BlockedUsers } from "../services/blocked-users.service";

@Component({
  selector: "chat-message",
  template: `
    <div class="user-name">
      {{message.name}}<br>
      <span>{{time | date:"yyyy/MM/dd HH:mm:ss"}}</span><br>
      <i (click)="blockUser(message.name)">×</i>
    </div>

    <div
      *ngIf="message.type === 'TEXT'"
      class="text-message">
     {{message.message}}
    </div>

    <div
      *ngIf="message.type === 'IMAGE'"
      class="image=message">
      <img *ngIf="src" [src]="src"/>
    </div>
  `,
  styleUrls: [ "app/chat-message/style.css" ],
  providers: [ Giphy, BlockedUsers ]
})
export class ChatMessage {
  @Input()
  message;

  private src: string;
  private time: Date;

  constructor(
    private giphy: Giphy,
    private blockedUsers: BlockedUsers) {}

  ngOnInit() {
    if(this.message.type === 'IMAGE') {
      this.giphy.getGifById(this.message.message).subscribe(image => {
        this.src = image.url;
      });
    }

    setTimeout(() => {
      console.log("Hey from message");
    }, 10000);

    this.time = new Date();
  }

  blockUser(name) {
    console.log(this.blockedUsers.isBlocked(name));
  }
}