import { Injectable } from "@angular/core";
import * as io from "socket.io-client";

@Injectable()
export class Socket {
  private link = "178.62.203.188:8888";
  private socket;

  connectSocket() {
    this.socket = io.connect(this.link);
    this.socket.on("connect", () => {
      console.log("Connected to socket");
    });
  }
}