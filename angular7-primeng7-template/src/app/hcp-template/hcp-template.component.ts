import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hcp-template',
  templateUrl: './hcp-template.component.html',
  styleUrls: ['./hcp-template.component.css']
})
export class HcpTemplateComponent implements OnInit {

	// businessUnit: any[];
	therapArea: any[];
	programArea: any[];
	availableTherapArea: any[];
	availableProgram: any[];
	enableHCPSubmitButton : boolean;
	selectedCity: string;
	selectedTherap: string;
	selectedProgram: string;
	display: boolean = false;

  @Input('hcpbusinessUnitData') businessUnit: any[];
	@Input('hcpData') hcpData: any[];


	
  constructor() { 
  	this.availableTherapArea = [];
  	this.availableProgram = [];
  	this.enableHCPSubmitButton = true;	    
  }

  updateTherapeuticAreas(event) {
    console.log(this.hcpData[0].businessUnit);
    this.therapArea = this.hcpData[0].therapArea;
    var temporaryTherap = [];

    this.therapArea.forEach(thearpData => {
      if (thearpData.businessUnitId == event.value.businessUnitId) {
        temporaryTherap.push(thearpData);
      }
    });

    this.availableTherapArea = [];
    this.availableTherapArea = temporaryTherap;
    this.availableProgram = [];
  }

  updateProgram(event) {
    this.programArea = this.hcpData[0].programArea;
    var temopraryProgram = [];

    this.programArea.forEach(programData => {
      if (programData.therapAreaId == event.value.therapAreaId) {
        temopraryProgram.push(programData);
      }
    });

    this.availableProgram = [];
    this.availableProgram = temopraryProgram;
  }

  updateSubmitButton(event) {
    this.enableHCPSubmitButton = false;
    console.log(this.enableHCPSubmitButton);
  }

  ngOnInit() {

  }

}
