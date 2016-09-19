import { Component, Input } from "@angular/core";
import { Giphy } from "../services/giphy.service";

@Component({
  selector: "chat-message",
  template: `
    <div class="user-name">
      {{message.name}}<br>
      <span>{{time}}</span>
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
  providers: [ Giphy ]
})
export class ChatMessage {
  @Input()
  message;

  private src: string;
  private time: Date;

  constructor(
    private giphy: Giphy) {}

  ngOnInit() {
    if(this.message.type === 'IMAGE') {
      this.giphy.getGifById(this.message.message).subscribe(image => {
        this.src = image.url;
      });
    }

    this.time = (new Date()).toISOString();
  }
}