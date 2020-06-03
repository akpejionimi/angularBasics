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
  serverCreated = false;
  servers = ['test','test 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateUserName(){
    this.userNameStatus = "username was created. your username is " +  this.userName
  }


  onCreatedServer(e) {
    this.servers.push(this.serverName)
    this.serverCreated = true;
    this.serverCreatedSatus ="Server was Created. Name is " + this.serverName
    // console.log("submit");
    
  }

  // onUpdateServerName(event){
  //   this.serverName = (<HTMLInputElement>event.target).value
  //   // console.log(event);
    
  // }

  
}
