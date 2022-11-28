import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  routeLink: string = '';
  currentUser = localStorage.getItem('username');
  msg: string = '';
  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
    // this.routeLink = "/dashboard/chat/";
    this.chatService.activeUsers(this.currentUser)
    .subscribe((data)=>{
      console.log(data);
      var x = JSON.parse(JSON.stringify(data));
      if(x != ''){
        this.msg = "";
      // this.firstName = x[0].firstName;
      // this.lastName = x[0].lastName;
      // this.userName = x[0].userName;
      // this.userId = x[0]._id;
      this.routeLink = "/dashboard/chat/";
    }
      if(x == ''){
        this.msg = "No user found";
      }
    })
  }

}
