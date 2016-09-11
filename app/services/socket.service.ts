import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Socket {
  private link = "178.62.203.188:8888";
  private socket;

  connectSocket(): Observable<any> {
    this.socket = io.connect(this.link);
    this.socket.on("connect", () => {
      console.log("Connected to socket");
    });

    return Observable.create((observer: any) => {
      this.socket.on("chat message", (message) => observer.next(message));

      return () => {
        this.socket.close();
      };
    });
  }

  sendMessage(message) {
    this.socket.emit("chat message", message);
  }
}