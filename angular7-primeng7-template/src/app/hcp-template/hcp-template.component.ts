import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hcp-template',
  templateUrl: './hcp-template.component.html',
  styleUrls: ['./hcp-template.component.css']
})
export class HcpTemplateComponent implements OnInit {

	businessUnit: any[];
	therapArea: any[];
	programArea: any[];
	availableTherapArea: any[];
	availableProgram: any[];
	enableHCPSubmitButton : boolean;
	selectedCity: string;
	selectedTherap: string;
	selectedProgram: string;
	display: boolean = false;

	@Input('hcpData') availableHcpData: any[];

	
  constructor() { 
  	this.availableTherapArea = [];
  	this.availableProgram = [];
  	this.enableHCPSubmitButton = true;	
  }

  updateTherapeuticAreas(event) {
    var temporaryTherap = [];

    this.therapArea.forEach(thearpData => {
      if (thearpData.businessUnitId == event.value.businessUnitId) {
        console.log("thearpData");
        console.log(thearpData);
        // this.availableTherapArea.push(thearpData);
        // console.log(this.availableTherapArea);
        temporaryTherap.push(thearpData);
      }
    });

    this.availableTherapArea = [];
    this.availableTherapArea = temporaryTherap;
    this.availableProgram = [];
  }

  updateProgram(event) {
    var temopraryProgram = [];

    this.programArea.forEach(programData => {
      if (programData.therapAreaId == event.value.therapAreaId) {
        temopraryProgram.push(programData);
        console.log(temopraryProgram);
      }
    });

    this.availableProgram = [];
    this.availableProgram = temopraryProgram;
  }

  updateSubmitButton(event) {
    console.log(event);
    console.log(this.enableHCPSubmitButton);
    this.enableHCPSubmitButton = false;
    console.log(this.enableHCPSubmitButton);
  }

  ngOnInit() {
  }

}
