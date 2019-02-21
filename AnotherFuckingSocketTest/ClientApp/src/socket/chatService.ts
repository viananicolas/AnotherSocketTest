import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { map } from "rxjs/operators";
@Injectable()
export class ChatService {
  webSocket: WebSocket;
  constructor(
    private socket: Socket
    ) {
    this.webSocket = new WebSocket("wss://localhost:44336/socket.io");

    this.webSocket.onmessage = function(e) {
      console.log(e.data);
    };
    this.webSocket.onopen = () => {
      console.log("foi");
      // this.webSocket.send("hello");
    };
    this.socket.connect();
  }

  sendMessageSocketIo(msg: string) {
    console.log(this.socket.emit("hello", "hello"));
    this.socket.fromEvent("hello").pipe(map(data => console.log(data)));
    // this.webSocket.send("hello");
  }
  sendMessageWebSocket(){
    this.webSocket.send("hello");
  }
  getMessage() {
    // return this.socket.fromEvent("hello").pipe(map(data => console.log(data)));
  }
}
