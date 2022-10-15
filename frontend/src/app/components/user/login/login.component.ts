import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true; 
  submitted=false;
  loginForm!: FormGroup; 
  totalBlogs: any;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(public fb:FormBuilder,private userServ:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  get login() {
    return this.loginForm.controls
    }
      
// onsubmitlogin(values:any){
//         this.submitted=true;
//         this.service.loginadd(values)
//          .subscribe((res)=>{
//           var x=JSON.parse(JSON.stringify(res));
//           console.log(x);
//           console.log(x.decoded1);
         
//           if(x.student){
//               localStorage.setItem('token',x.token);
//               localStorage.setItem('studentEmailToken',x.decoded1);
//               localStorage.setItem('userStudent',"Student");
//               this.postserve.getCurrentUser(x.decoded1)
//               .subscribe((res)=>{
//               var y=JSON.parse(JSON.stringify(res));
//               localStorage.setItem('currentStudent',y.name);
//               })
//               this.router.navigate(['studentnavbar/student-dashboard-child']);
//           }
//           else if(x.trainer){
//               localStorage.setItem('token',x.token);
//               localStorage.setItem('emailToken',x.decoded);
//               localStorage.setItem('userTrainer',"Trainer");
//               this.postserve.getCurrentUser(x.decoded)
//               .subscribe((res)=>{
//               var y=JSON.parse(JSON.stringify(res));
//               localStorage.setItem('currentTrainer',y.name);
//               })
//               this.router.navigate(['trainernavbar/trainer-dashboard-child']);
//             }
//           else if(x.admin){
//               localStorage.setItem('token',x.token);
//               localStorage.setItem('adminEmailToken',x.decodedAdminEmail);
//               localStorage.setItem('userAdmin',"Admin");
//               this.router.navigate(['admin-dashboard/admin-dashboard-child']);
//             }
//           else if(x.unathorised){
//             alert("Invalid email or password");
//           }
//         });
          
//       }   

}
