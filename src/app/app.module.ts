import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { WarningDanger } from './warning-danger/warning-dan.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    WarningDanger,
  ], 
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
