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
}
