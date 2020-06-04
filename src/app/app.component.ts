import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecrete = false;
  logs = []

  constructor(){
  }
 
  onToggleDetails(){
    this.showSecrete = !this.showSecrete
    this.logs.push(this.logs.length + 1)
  }
}
         