import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`, //backticks to make it multiline
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  username = '';

  detailsOn = false;
  detailToggles = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverName + ' server was created!';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //it can also be just event.target.value, this is just an explicit casting
  }

  // onUpdateUsername(event) { --- wouldn't react to the button trigger
  //   this.username = event.target.value;
  // }

  onEnableUsernameReset() {
    if ( this.username == '' ) {
      return true;
    } else {
      return false;
    }
  }

  onResetUsername() {
    this.username = '';
  }

  onToggleDetails() {
    this.detailsOn = !this.detailsOn;
    //this.detailToggles.push(this.detailToggles.length + 1);
    this.detailToggles.push(new Date());
  }
}
