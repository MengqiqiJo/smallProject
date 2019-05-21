import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // <app-servers></app-servers>

  // attributes style.   selector: '[app-servers]',
  // <div app-servers></div>

  // class style.  selector: '.app-servers'
  // <div class="app-servers"></div>

  // template: `
	 //  <app-server></app-server>
	 //  <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = true;

	serverCreationStatus = "no server was created";
	serverName = '';

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = false;
  	}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreationStatus = "server was created";
  }

  onUpdateServerName(event: any) {
  	console.log(event);

  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
