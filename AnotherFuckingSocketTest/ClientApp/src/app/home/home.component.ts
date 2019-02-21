import { Component, OnInit } from "@angular/core";
import { ChatService } from "../../socket/chatService";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(public chatService: ChatService) {}
  ngOnInit(): void {}
  sendMessage() {
    this.chatService.sendMessageSocketIo("");
    this.chatService.sendMessageWebSocket();
  }
}
