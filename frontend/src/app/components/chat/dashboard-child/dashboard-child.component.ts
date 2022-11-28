import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.css']
})
export class DashboardChildComponent implements OnInit {

  constructor(private router:Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      let userName = params.get('userName'); 
    this.router.navigate(['dashboard/chat/'+userName]);
    });
  }

}
