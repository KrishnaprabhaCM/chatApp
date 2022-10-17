import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // url = "http://localhost:5000/api/user/"
  baseUri: string = 'http://localhost:5000/api/user';
  constructor(private http:HttpClient) { }
  signup=(item:any)=>{
    let url = `${this.baseUri}/signup`;
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
  sendEmailOTP(item:any){
    let url = `${this.baseUri}/sendEmailOTP`;
    return this.http.post(url,{item});
  }
}
