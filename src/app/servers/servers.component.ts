import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    // console.log(this);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    // console.log(this);
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    // (<HTMLInputElement>event.target) is to inform TypeScript that this element is input type
  }
}

const a = new ServersComponent();

console.log(a);
