import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chatMessage';
import { ChatmessageService } from '../services/chatmessage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  ngOnInit(): void {}
}
