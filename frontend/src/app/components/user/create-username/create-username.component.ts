import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-username',
  templateUrl: './create-username.component.html',
  styleUrls: ['./create-username.component.css']
})
export class CreateUsernameComponent implements OnInit {
  unameMsg = '';
  unameInput = '';
  msg = '';
  isExist = 0;
  userNameForm = new FormGroup({
    chatHandle:new FormControl(this.unameInput,[
      Validators.required,
      Validators.minLength(4)
    ])
  })
  constructor(private service:UserService,private router:Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  get chatHandle(){ return this.userNameForm.controls.chatHandle; } 

  onSubmitUsername(values:any){
    console.log("UserName is ="+values);
    this._Activatedroute.paramMap.subscribe(params => { 
      let userId = params.get('_id'); 
      this.service.createUserName(values,userId).subscribe((data)=>{
        var x=JSON.parse(JSON.stringify(data));
            Swal.fire({
              icon: 'success',
              title: 'Account created successfully. Login to continue',
              showConfirmButton: true
            }).then((result)=>{
              if(result.isConfirmed){
                this.router.navigate(['/']);
              }
            })
      });
    });
  } 
  
  uniqueUserName(event:any){
    event = event.target as HTMLInputElement;
    const userName = event.value;
    this.service.allChatHandles(userName).subscribe((data)=>{
      if (typeof data == 'object' && Object.keys(data).length === 0) {
        this.unameMsg = '';
        this.isExist = 0;
        console.log(this.isExist);
      }
      else{
        this.unameMsg = 'User name already exists';
        this.isExist = 1;
        console.log(this.isExist);
      }
    })
  }

}
