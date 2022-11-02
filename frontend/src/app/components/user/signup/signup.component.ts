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
  submittedsignup=false;
  nameInput = '';
  latNameInput = '';
  unameMsg = '';
  emailInput = '';
  emailMsg = '';
  pwdInput = '';
  confPwdInput = '';
  confPwdMsg = '';
  isExist = 0;
  
  signupForm = new FormGroup({
    firstName: new FormControl(this.nameInput,[
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^[A-Za-z]+[A-Za-z ]*$')
    ]),
    lastName: new FormControl(this.latNameInput,[
      Validators.required,
      Validators.pattern('^[A-Za-z]+[A-Za-z ]*$')
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
  // get chatHandle(){ return this.signupForm.controls.chatHandle; } 
  get userEmail(){ return this.signupForm.controls.userEmail; } 
  get pwd(){ return this.signupForm.controls.pwd; } 
  get confPwd(){ return this.signupForm.controls.confPwd; } 
   
  onsubmitsignup(values:any){
    this.submittedsignup = true;
    var otp = Math.floor(1000 + Math.random() * 9000);
    this.service.signup(values,otp).subscribe((data)=>{
      var x = JSON.parse(JSON.stringify(data));
      const userId = x._id;
      this.router.navigate(['/verifyOTP/'+ userId]);
    }); 
    this.service.sendEmailOTP(values,otp).subscribe(data2=>{
      console.log(data2);
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
      this.isExist = 0;
    }
    else{
       this.confPwdMsg = 'Password mismatch';
       this.isExist = 1;
    }
  }

}
