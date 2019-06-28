import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NGFormComponent implements OnInit {

	@Input('meetingEventData') meetingEventData: any[];

	selectedProgram: any={};
	enteredMeetingName: string="";
	selectedEvaluationForms: any={};
	selectedModules: string="";
	selectedProgramType: any={};
	selectedMeetingTimes: any={};
	selectedSpeakers: string="";

  selectedMeetingFormats: any={};

	selectedMultiTherapeitucEvent: any={};
	selectedMeetingLocation: any={};
	selectedCanadaCity: any={};

  enteredEventME: string="";
  enteredSignature: string="";
  enteredEvaluationNumber: string="";

  constructor() { 
  }

  save() {
    console.log(
    	this.enteredMeetingName + '\n' + 
    	this.selectedProgram.name + '\n' + 
    	this.selectedModules + '\n' + 
    	this.selectedProgramType.name + '\n' + 
    	this.selectedEvaluationForms.name + '\n' +
      this.selectedMeetingFormats.name + '\n' +
    	this.selectedMeetingTimes.name + '\n' +
    	this.selectedSpeakers + '\n' +
    	this.selectedMultiTherapeitucEvent.name + '\n' +
			this.selectedMeetingLocation.name + '\n' +
			this.selectedCanadaCity.name + '\n' +
      this.enteredEventME + '\n' +
      this.enteredSignature + '\n' +
      this.enteredEvaluationNumber
    	);
  }

  ngOnInit() {
    console.log();
  }

}
