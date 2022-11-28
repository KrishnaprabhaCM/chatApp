import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  currentuser = localStorage.getItem('username');

  constructor(private router:Router,public service:UserService) { }

  ngOnInit(): void {
  }
  logoutUser(){
    // localStorage.removeItem('token')
    this.service.inactiveStatus("0",this.currentuser).subscribe((data)=>{
      console.log(data);
    })
    localStorage.removeItem('username');  
    this.router.navigate(['/']);
   }

}
