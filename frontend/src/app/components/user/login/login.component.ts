import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  chatHandleInput = '';
  pwdInput = '';
  userMsg = '';

  loginForm = new FormGroup({
    chatHandle: new FormControl(this.chatHandleInput,[
      Validators.required,
      Validators.minLength(4)
    ]),
    pwd: new FormControl(this.pwdInput,[
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
    ]),
  })

  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  get chatHandle(){ return this.loginForm.controls.chatHandle; } 
  get pwd(){ return this.loginForm.controls.pwd; } 

     onsubmitLogin(values:any){
      this.service.getLogin(values).subscribe((data)=>{
        var x=JSON.parse(JSON.stringify(data));
          if(x.user == true)
          {
            localStorage.setItem('username',x.username);
            this.router.navigate(['dashboard']);
          }
          else{
            this.userMsg = "Invalid login or password. Please try again.";
          }
      })
     }   
}
