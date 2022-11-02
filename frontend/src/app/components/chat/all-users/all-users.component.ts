import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  searchInput = '';
  datas = '';
  currentUser = localStorage.getItem('username');
  allUsers = new FormGroup({
    searchTerm:new FormControl(this.searchInput,[
      Validators.required
    ])
  })
  firstName: any;
  lastName: any;
  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
  }
  get searchTerm(){ return this.allUsers.controls.searchTerm};
  searchUser(values:any){
    this.chatService.searchUser(values,this.currentUser)
    .subscribe((data)=>{
      console.log(data);
      var x = JSON.parse(JSON.stringify(data));
      this.firstName = x[0].firstName;
      this.lastName = x[0].lastName;
    })
  }

}
