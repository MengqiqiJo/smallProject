import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild} from '@angular/core';

import { AppService } from './app.service';

import {SelectItem} from 'primeng/api';

import 'chart.js';

import 'chartjs-plugin-labels';

import 'chartjs-plugin-stacked100';

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

  tableInputData: any;
  hcpbusinessUnitData: any[];
  
  hcpData: any[];
	businessUnit: any[];
	therapArea: any[];
	programArea: any[];
	// availableTherapArea: any[];
	// availableProgram: any[];
	// enableHCPSubmitButton : boolean;
	selectedRoles: string[] = [];
	display: boolean = false;
	userRoles: any[];

  constructor(private myService: AppService) {

    // this.availableTherapArea = [];
    // this.availableProgram = [];
    // this.enableHCPSubmitButton = true;
    
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

  // updateTherapeuticAreas(event) {
  //   var temporaryTherap = [];

  //   this.therapArea.forEach(thearpData => {
  //     if (thearpData.businessUnitId == event.value.businessUnitId) {
  //       console.log("thearpData");
  //       console.log(thearpData);
  //       // this.availableTherapArea.push(thearpData);
  //       // console.log(this.availableTherapArea);
  //       temporaryTherap.push(thearpData);
  //     }
  //   });

  //   this.availableTherapArea = [];
  //   this.availableTherapArea = temporaryTherap;
  //   this.availableProgram = [];
  // }

  // updateProgram(event) {
  //   var temopraryProgram = [];

  //   this.programArea.forEach(programData => {
  //     if (programData.therapAreaId == event.value.therapAreaId) {
  //       temopraryProgram.push(programData);
  //       console.log(temopraryProgram);
  //     }
  //   });

  //   this.availableProgram = [];
  //   this.availableProgram = temopraryProgram;
  // }

  // updateSubmitButton(event) {
  //   console.log(event);
  //   console.log(this.enableHCPSubmitButton);
  //   this.enableHCPSubmitButton = false;
  //   console.log(this.enableHCPSubmitButton);
  // }

  showDialog() {
    this.display = true;
  }

  // get all data 
  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;

      this.hcpData = this.sectionContent.hcpcontentdata;
      this.hcpbusinessUnitData = this.sectionContent.hcpcontentdata[0].businessUnit;
    
      this.primengDataGeneral = this.sectionContent.primengcontentdata;
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
          else {
            this.tableInputData = eachTabData;
          }
        });
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

