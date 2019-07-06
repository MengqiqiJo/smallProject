import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild} from '@angular/core';

import { AppService } from './app.service';

import {SelectItem} from 'primeng/api';

import 'chart.js';

import 'chartjs-plugin-labels';

import 'chartjs-plugin-stacked100';


interface DropDownDataFormat {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/plugin.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {


 
  // get json data
  sectionContent: any;
  primengDataGeneral: any[];
  blockData: any;

  // new chart.js data
  blockIsChart: boolean;
  tabContent: any;
  pluginLabel: any;

  hcpData: any[];


	businessUnit: any[];
	therapArea: any[];
	programArea: any[];
	selectedRoles: string[] = [];
	display: boolean = false;
	userRoles: any[];

  // evaluation form
  enteredMeetingName: string;
  // programs: DropDownDataFormat[];
  selectedProgram: string;
  // modules: SelectItem[];
  selectedModules: string = "";

  // programTypes: DropDownDataFormat[];
  // selectedProgramType: DropDownDataFormat;

  // evaluationForms: DropDownDataFormat[];
  // selectedEvaluationForms: DropDownDataFormat;

  // meetingFormats: DropDownDataFormat[];
  // selectedMeetingFormats: DropDownDataFormat;

  // meetingTimes: DropDownDataFormat[];
  // selectedMeetingTimes: DropDownDataFormat;

  // speakers: SelectItem[];
  // selectedSpeakers: string = "";

  meetingEventData: string;

  constructor(private myService: AppService) {

    

    // this.programTypes = [
    //   {"name": "None"},
    //   {"name": "Accredited"},
    //   {"name": "OLAs"},
    //   {"name": "Symposia"},
    //   {"name": "Non Accredited"}
    // ];

    // this.selectedProgram = {
    //   "name": "2018 Diabetes Canada Clinical Practice Guidelines: Chapter 23: Cardiovascular Protection"
    // };

    // this.programs = [
    //   {"name": "None"},
    //   {"name": "2017 COPD & Asthma Update: Hot Topics"},
    //   {"name": "2017 COPD Review with Graeme McCauley"},
    //   {"name": "2017 Let\'s Have a Heart to Heart: CV Considerations in Type 2 DM"},
    //   {"name": "2017: The Changing Landscape in the Treatment of COPD"},
    //   {"name": "2018 Diabetes Canada Clinical Practice Guidelines: Chapter 23: Cardiovascular Protection"}
    // ];
    
    // this.enteredMeetingName = "Meeting - 2018 Diabetes Canada Clinical Practice Guidelines: Chapter 23: Cardiovascular Protection";
    
    // this.modules = [
    //   {
    //     "label": "MODULE 5: MANAGING SPECIAL SITUATIONS AND PATIENT POPULATIONS: HIV, TUBERCULOSIS (TB), HEPATITIS B & C, CHRONIC PERIODONTITIS AND THE USE OF BIOLOGICS IN PREGNANCY",
    //     "value": "MODULE 5: MANAGING SPECIAL SITUATIONS AND PATIENT POPULATIONS: HIV, TUBERCULOSIS (TB), HEPATITIS B & C, CHRONIC PERIODONTITIS AND THE USE OF BIOLOGICS IN PREGNANCY"
    //   },
    //   {
    //     "label": "Chronic Kidney Disease",
    //     "value": "Chronic Kidney Disease"
    //   },
    //   {
    //     "label": "Complex Patients: Therapies that Can Reduce Mortality",
    //     "value": "Complex Patients: Therapies that Can Reduce Mortality",
    //   },
    //   {
    //     "label": "Diabetes in Aboriginal Populations",
    //     "value": "Diabetes in Aboriginal Populations"
    //   },
    //   {
    //     "label": "Diabetes Management in the Presence of Glucocorticoids", 
    //     "value": "Diabetes Management in the Presence of Glucocorticoids" 
    //   },
    //   {
    //     "label": "Early Use of Insulin Therapy in T2D",
    //     "value": "Early Use of Insulin Therapy in T2D"
    //   },
    //   {
    //     "label": "Eating Disorders in Diabetes",
    //     "value": "Eating Disorders in Diabetes"
    //   }
    // ];

    // this.speakers = [
    //   {
    //     "label": "Marie-Claude Racine",
    //     "value": "Marie-Claude Racine"
    //   },
    //   {
    //     "label": "Larry Dian",
    //     "value": "Larry Dian",
    //   },
    //   {
    //     "label": "Shereen Metias",
    //     "value": "Shereen Metias"
    //   },
    //   {
    //     "label": "Marie-Hélène Robert", 
    //     "value": "Marie-Hélène Robert" 
    //   },
    //   {
    //     "label": "Patrice Gosselin",
    //     "value": "Patrice Gosselin"
    //   },
    //   {
    //     "label": "Danielle Houde",
    //     "value": "Danielle Houde"
    //   }
    // ];

    // this.evaluationForms = [
    //   {"name": "None"},
    //   {"name": "If you hear hoofbeats, think..."},
    //   {"name": "(New Advances in the Management of Respiratory Disorders) Shifting Paradigms in COPD Management & Navigating COPD Devices"},
    //   {"name": "2017 Lets have a Heart to Heart: CV Considerations in T2DM"},
    //   {"name": "2018 Diabetes Canada Clinical Practice Guidelines: Chapter 23: Cardiovascular Protection"},
    //   {"name": "A Change Of Heart: Emerging Strategies In The Management Of CV Risk In Type 2 Diabetes Overview"},
    //   {"name": "Acides gras oméga-3 alimentaires d’origine marine et rétinopathie menaçant la vue chez les personnes d’âge mûr et âgées atteintes de diabète de type 2"}
    // ];

    // this.selectedEvaluationForms = {
    //   "name": "2018 Diabetes Canada Clinical Practice Guidelines: Chapter 23: Cardiovascular Protection"
    // };

    // this.meetingFormats = [
    //   {"name": "None"},
    //   {"name": "HCP Scholarships"},
    //   {"name": "Hybrid (Live/virtual)"},
    //   {"name": "Independent Sponsor Materials"},
    //   {"name": "Live"},
    //   {"name": "Webinar"}
    // ];

    // this.meetingTimes = [
    //   {"name": "12:00 AM"},
    //   {"name": "3:00 AM"},
    //   {"name": "6:00 AM"},
    //   {"name": "9:00 AM"},
    //   {"name": "12:00 PM"},
    //   {"name": "3:00 PM"},
    //   {"name": "6:00 PM"},
    //   {"name": "9:00 PM"},
    // ];

  }

  

  showDialog() {
    this.display = true;
  }

  // get all data 
  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;

      this.sectionContent.forEach(eachComponent => {
        if (eachComponent.componentname == 'primengcontentdata') {
          this.primengDataGeneral = eachComponent.primengcontentdata;
          this.primengDataGeneral.forEach(eachBlockData => {
            eachBlockData.blockContent.forEach(eachTabData => {
              if (eachBlockData.isChartjs) {

                if (typeof eachTabData.chartjsPluginsOptions !== 'undefined') {
                  if (typeof eachTabData.chartjsPluginsOptions.calculateLabel !== 'undefined') {
                    if (eachTabData.chartjsPluginsOptions.calculateLabel) {
                      if (eachTabData['tabData'].middle.middleMiddle.renderLabel == "value") {
                        eachTabData['tabData'].middle.middleMiddle.options.plugins.labels.render = "value";
                      }
                      else {
                        eachTabData['tabData'].middle.middleMiddle.options.plugins.labels.render = function(args) {
                          var result = '';
                          if (args.percentage > 5) {
                            result = args.percentage + " %";
                          }
                          return result;
                        };
                      }
                    }
                  }

                  if (typeof eachTabData.chartjsPluginsOptions.calculateLabel !== 'undefined') {
                    if (eachTabData.chartjsPluginsOptions.calculateTooltip) {
                      eachTabData['tabData'].middle.middleMiddle.options.tooltips = {
                        callbacks: {
                          label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                              return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percentage = Math.floor(((currentValue/total) * 100)+0.5);       
                            return currentValue + ' - - ' + percentage + "%";
                          }
                        }
                      };
                    }
                  }
                }
              }
            });
          });
        }
      
      });
    
      

      
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }

  // @ViewChild('divClick') divClick: ElementRef;

  ngOnInit() {

    setTimeout(() => {
      // this.divClick.nativeElement.click();
    }, 200);
   
    this.getChartJSONAndDisplay();
    
  }
}

