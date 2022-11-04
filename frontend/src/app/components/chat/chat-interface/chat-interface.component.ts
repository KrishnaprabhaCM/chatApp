import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit {
  chatInput='';
  chatForm = new FormGroup({
    chat:new FormControl(this.chatInput,[
      Validators.required,
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }
  get chat(){ return this.chatForm.controls.chat; } 
  sendChat(values:any){
    console.log("Hello");
  }
}
