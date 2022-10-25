import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUri: string = 'http://localhost:5000/api/user';
  
  constructor(private http:HttpClient) { }


  signup=(item:any,otp:any)=>{
    let url = `${this.baseUri}/signup/`+otp;
    return  this.http.post(url,{item});
  }
  
  allChatHandles(item:any){
    let url = `${this.baseUri}/allChatHandles`;
    return this.http.post(url,{item});
  }

  existinEmails(item:any){
    let url = `${this.baseUri}/allExistingEmails`;
    return this.http.post(url,{item});
  }

  sendEmailOTP(item:any,otp:any){
    let url = `${this.baseUri}/sendEmailOTP/`+ otp;
    return this.http.post(url,{item});
  }

  getUserById(userId:any){
    let url = `${this.baseUri}/getUserById/`+ userId;
    return this.http.get(url);
  }

  verifyOTP(item:any){
    let url = `${this.baseUri}/verifyOTP`;
    return this.http.put(url,{item});
  }

  getLogin(item:any){
    let url = `${this.baseUri}/login`;
    return this.http.post(url,{item});
  }

  loggedin(){
    return !!localStorage.getItem('username');
  }

  createUserName(values:any,item:any){
    let url = `${this.baseUri}/createUserName/`+item;
    return this.http.put(url,{values});
  }
}
