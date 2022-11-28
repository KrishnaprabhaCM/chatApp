import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  baseUri: string = 'http://localhost:5000/api/chat';
  constructor(private http:HttpClient) { }
  
  searchUser = (values:any,username:any) => {
    let url = `${this.baseUri}/searchUser/`+username;
    return this.http.post(url,{values});
  }
  sendMessage = (values:any,username:any,currentuser:any) => {
    let url = 'http://localhost:5000/sendMessage/'+username+'/'+currentuser;
    return this.http.post(url,values);
  }

  getMsg = (username:any,currentuser:any) =>{
    let url = `${this.baseUri}/getMsg/`+username+`/`+currentuser;
    return this.http.get(url);
  }
  activeUsers = (username:any) =>{
    let url = `${this.baseUri}/activeUsers/`+username;
    return this.http.get(url);
  }
  blockUser = (currentuser:any,username:any) => {
    let url = `${this.baseUri}/blockUser/`+username;
    return this.http.post(url,{currentuser});
  }
  muteUser = (currentuser:any,username:any) => {
    let url = `${this.baseUri}/muteUser/`+username;
    return this.http.post(url,{currentuser});
  }

}
