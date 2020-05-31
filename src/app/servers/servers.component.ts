import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatedSatus = "No server was created";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreatedServer() {
    this.serverCreatedSatus ="Server was Created"
  }

  
}
