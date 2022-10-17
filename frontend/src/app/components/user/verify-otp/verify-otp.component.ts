import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})

export class VerifyOTPComponent implements OnInit {

  otpInput = '';
  otpForm = new FormGroup({
  otp: new FormControl(this.otpInput,[
    Validators.required,
    // Validators.minLength(1)
  ])
})


  constructor() { }

  ngOnInit(): void {
  }

  get otp(){ return this.otpForm.controls.otp; } 
  onSubmitOTP(values:any){
    // this.submittedsignup=true;
    // this.service.signup(values)
    //  .subscribe((data)=>{
    //   console.log(data);
    //   var x=JSON.parse(JSON.stringify(data))
    //   this.router.navigate(['/verifyOTP'])
    //   //   if(x.status){
    //   //      this.router.navigate(['login']);
    //   //   }
    //   //   else{
    //   //      alert("User already exist");
    //   //   }
    // }); 
  } 

}
