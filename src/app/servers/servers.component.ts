import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatedSatus = "No server was created";
  userNameStatus = "No username created"
  serverName = "";
  userName = "";
  allowClick = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 3000);
  }

  ngOnInit(): void {
  }

  disableEmpty(){
    if (this.userName === "") {
      this.allowClick= true
    } else{
      this.allowClick = false
    }
  }

  onCreateUserName(){
    this.userNameStatus = "username was created. your username is " +  this.userName
  }


  onCreatedServer(e) {
    this.serverCreatedSatus ="Server was Created. Name is " + this.serverName
    // console.log("submit");
    
  }

  // onUpdateServerName(event){
  //   this.serverName = (<HTMLInputElement>event.target).value
  //   // console.log(event);
    
  // }

  
}
