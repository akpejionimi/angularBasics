import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatedSatus = "No server was created";
  serverName = "";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreatedServer(e) {
    this.serverCreatedSatus ="Server was Created"
    // console.log("submit");
    
  }

  onUpdateServerName(event){
    this.serverName = (<HTMLInputElement>event.target).value
    // console.log(event);
    
  }

  
}
