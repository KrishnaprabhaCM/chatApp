import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // signuphide=true;
  submittedsignup=false;
  nameInput = '';
  latNameInput = '';
  chatHandleInput = '';
  unameMsg = '';
  emailInput = '';
  emailMsg = '';
  pwdInput = '';
  confPwdInput = '';
  confPwdMsg = '';
  
  signupForm = new FormGroup({
    firstName: new FormControl(this.nameInput,[
      Validators.required,
      Validators.minLength(1)
    ]),
    lastName: new FormControl(this.latNameInput,[
      Validators.required,
    ]),
    chatHandle: new FormControl(this.chatHandleInput,[
      Validators.required,
      Validators.minLength(4)
    ]),
    userEmail: new FormControl(this.emailInput,[
      Validators.required,
      Validators.pattern('^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})$'),
    ]),
    pwd: new FormControl(this.pwdInput,[
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
    ]),
    confPwd: new FormControl(this.confPwdInput,[
      Validators.required,
      
    ]),
  })
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    
  }

  get firstName(){ return this.signupForm.controls.firstName; } 
  get lastName(){ return this.signupForm.controls.lastName; } 
  get chatHandle(){ return this.signupForm.controls.chatHandle; } 
  get userEmail(){ return this.signupForm.controls.userEmail; } 
  get pwd(){ return this.signupForm.controls.pwd; } 
  get confPwd(){ return this.signupForm.controls.confPwd; } 
   
  onsubmitsignup(values:any){
    this.submittedsignup=true;
    this.service.signup(values)
     .subscribe((data)=>{
      console.log(data);
      var x=JSON.parse(JSON.stringify(data))
      this.router.navigate(['/'])
      //   if(x.status){
      //      this.router.navigate(['login']);
      //   }
      //   else{
      //      alert("User already exist");
      //   }
  });
    
  } 
  uniqueUserName(event:any){
    event = event.target as HTMLInputElement;
    const userName = event.value;
    this.service.allChatHandles(userName).subscribe((data)=>{
      if (typeof data == 'object' && Object.keys(data).length === 0) {
        this.unameMsg = '';
      }
      else{
        this.unameMsg = 'User name already exists';
      }
    })
  }
  uniqueEmail(event:any){
    event = event.target as HTMLInputElement;
    const emailId = event.value;
    this.service.existinEmails(emailId).subscribe((data)=>{
      if (typeof data == 'object' && Object.keys(data).length === 0) {
        this.emailMsg = '';
      }
      else{
        this.emailMsg = 'Email already exists';
      }
    })
  }
  confirmPassword(event:any){
    event = event?.target as HTMLInputElement;
    const confPwd = event.value;
    const pwd = this.signupForm.controls.pwd.value;
    if(pwd == confPwd)
    {
      this.confPwdMsg = '';
    }
    else{
       this.confPwdMsg = 'Password mismatch';
    }
  }

}
