import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
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
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  userName: any;
  msg = "";
  routeLink: string = "";
  userId: any;
  constructor(private chatService:ChatService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  
  get searchTerm(){ return this.allUsers.controls.searchTerm};
  searchUser(values:any){
    this.chatService.searchUser(values,this.currentUser)
    .subscribe((data)=>{
      console.log(data);
      var x = JSON.parse(JSON.stringify(data));
      if(x != ''){
        this.msg = "";
      this.firstName = x[0].firstName;
      this.lastName = x[0].lastName;
      this.userName = x[0].userName;
      this.userId = x[0]._id;
      this.routeLink = "/dashboard/chat/";
    }
      if(x == ''){
        this.msg = "No user found";
      }
    })
  }
  singleUser(event:any){
    console.log(event);
  }

}
