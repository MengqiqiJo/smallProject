import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

	userRoles: any[];
	
  constructor() {
	  this.userRoles = [
	    {
	      name: "answer1",
	      value: "Speaker",
	      label: "Speaker"
	    },
	    {
	      name: "answer2",
	      value: "Rep",
	      label: "Rep"
	    },
	    {
	      name: "answer3",
	      value: "Siteadmin",
	      label: "Siteadmin"
	    },
	    {
	      name: "answer4",
	      value: "Moderate",
	      label: "Moderate"
	    },
	    {
	      name: "answer5",
	      value: "Client",
	      label: "Client"
	    }
	  ]; 
	}

  ngOnInit() {
  }

}
