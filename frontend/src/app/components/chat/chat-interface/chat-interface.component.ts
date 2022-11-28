import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit {
  
  currentuser = localStorage.getItem('username');
  messages: any;
  posts = {
    image:'',
    chat:'',
  }
  constructor(private service:ChatService,private router:Router,private _Activatedroute:ActivatedRoute) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      let userName = params.get('userName'); 
      this.service.getMsg(userName,this.currentuser).subscribe((data)=>{
        // console.log(data);
        var x = JSON.parse(JSON.stringify(data));
        this.messages = x;
        // console.log(x);
      });
    });
  }

  selectImage(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.posts.image=file;
      // console.log("Image = "+file);
    }
  }

  sendChat(){
    this._Activatedroute.paramMap.subscribe(params => { 
      let userName = params.get('userName'); 
      const formData=new FormData();
       formData.append('image', this.posts.image)
       formData.append('chat',this.posts.chat)
      //  console.log(formData);
      this.service.sendMessage(formData,userName,this.currentuser).subscribe((data)=>{
        // console.log(data);
        this.router.navigate(['/dashboard/dashboard-child/'+userName]);
      });
    });
    
  }
  blockUser(event:any){
    // console.log("BlockUserdata");
    this._Activatedroute.paramMap.subscribe(params => { 
      let userName = params.get('userName');
      this.service.blockUser(this.currentuser,userName).subscribe((data)=>{
        console.log(data);
      })
    });
  }
  muteUser(event:any){
    this._Activatedroute.paramMap.subscribe(params => { 
      let userName = params.get('userName'); 
      this.service.muteUser(this.currentuser,userName).subscribe((data)=>{
        console.log(data);
      })
    });
  }
}
