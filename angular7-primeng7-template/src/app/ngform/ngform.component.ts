import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NGFormComponent implements OnInit {

	@Input('meetingEventData') meetingEventData: any[];

	selectedProgram: any;
	enteredMeetingName: string;
	selectedEvaluationForms: any;
	selectedModules: string;
	selectedProgramType: any;
	selectedMeetingTimes: any;
	selectedSpeakers: string;

	selectedMultiTherapeitucEvent: any;
	selectedMeetingLocation: any;
	selectedCanadaCity: any;

  constructor() { 
  	this.selectedProgram = {
  	      "name": "2018 Diabetes Canada Clinical Practice Guidelines: Chapter 23: Cardiovascular Protection"
  	    };
  	this.enteredMeetingName = "Meeting - 2018 Diabetes Canada Clinical Practice Guidelines: Chapter 23: Cardiovascular Protection";
  	this.selectedEvaluationForms = {
  	      "name": "2018 Diabetes Canada Clinical Practice Guidelines: Chapter 23: Cardiovascular Protection"
  	    };
  }

  save() {
    console.log(
    	this.enteredMeetingName + '\n' + 
    	this.selectedProgram.name + '\n' + 
    	this.selectedModules + '\n' + 
    	this.selectedProgramType.name + '\n' + 
    	this.selectedEvaluationForms.name + '\n' +
    	this.selectedMeetingTimes.name + '\n' +
    	this.selectedSpeakers + '\n' +
    	this.selectedMultiTherapeitucEvent + '\n' +
			this.selectedMeetingLocation + '\n' +
			this.selectedCanadaCity
    	);
  }

  ngOnInit() {
  }

}
