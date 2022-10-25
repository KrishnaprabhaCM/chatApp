import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private serve:UserService,private route:Router) { }
  canActivate():boolean{
    if(this.serve.loggedin()){
     return true;
    }
    else{
      this.route.navigate(['/']);
      return false;
    }
  }
}
