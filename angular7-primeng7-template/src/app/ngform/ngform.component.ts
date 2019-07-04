import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NGFormComponent implements OnInit {

	@Input('meetingEventData') meetingEventData: any[];

	selectedProgram: string="20178";
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

  cars: any[];
  selectedCar: string='Fiat';
  dds: any[];


  constructor() {
    console.log("meetingEventData");
    // console.log(this.meetingEventData);
    // this.meetingEventData.forEach(obj => {
    //   console.log(obj);
    // });
    this.dds = [
                {label: 'Audi', value: 'Audi'},
                {label: 'BMW', value: 'BMW'},
                {label: 'Fiat', value: 'Fiat'},
                {label: 'Ford', value: 'Ford'},
                {label: 'Honda', value: 'Honda'},
                {label: 'Jaguar', value: 'Jaguar'},
                {label: 'Mercedes', value: 'Mercedes'},
                {label: 'Renault', value: 'Renault'},
                {label: 'VW', value: 'VW'},
                {label: 'Volvo', value: 'Volvo'},
            ];

    // this.selectedProgram = {"name" : 'india'};
  }

  save() {
    console.log(
    	this.enteredMeetingName + '\n' + 
    	'selected program' + this.selectedProgram + '\n' + 
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
  }

}
