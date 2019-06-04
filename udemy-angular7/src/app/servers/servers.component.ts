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
  styles: [`
	.online {
		color: white;
	}
  `]
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = true;

	serverCreationStatus = "no server was created";
	serverName = 'test server';
	serverCreated = false;
	serverStatus: string = 'offline';

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = false;
  	}, 2000);

  	this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreationStatus = "server was created";

  	this.serverCreated = true; 
  }

  onUpdateServerName(event: any) {
  	console.log(event);

  	this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
  	return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
