import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NGFormComponent implements OnInit {

	@Input('meetingEventData') meetingEventData: any[];

	selectedProgram: string="2017 COPD Review with Graeme McCauley";
	enteredMeetingName: string="Meeting - 2017 Lets have a Heart to Heart: CV Considerations in T2DM";
	selectedEvaluationForms: string="2017 Lets have a Heart to Heart: CV Considerations in T2DM";
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

  cars: any[];
  selectedCar: string='Fiat';
  dds: any[];


  constructor() {
    console.log("meetingEventData");
   
  }

  save() {
    console.log(
    	this.enteredMeetingName + '\n' + 
    	'selected program' + this.selectedProgram + '\n' + 
    	this.selectedModules + '\n' + 
    	this.selectedProgramType.name + '\n' + 
    	this.selectedEvaluationForms + '\n' +
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
  }

}
