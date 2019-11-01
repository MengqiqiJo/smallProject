import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-primeng-chartjs',
  templateUrl: './primeng-chartjs.component.html',
  styleUrls: ['./primeng-chartjs.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PrimengChartjsComponent implements OnInit {

	// @Input('chartInputData') eachtabcontent: any[];

	eachtabcontent: any[];
  // get json data
  sectionContent: any;
  primengDataGeneral: any[];
  blockData: any;

  constructor(private myService: AppService) { }

  // get all data
  getChartJSONAndDisplay() {

    this.myService.getChartData().subscribe(data => {
      this.sectionContent = data[0];

      // this.sectionContent.forEach(eachComponent => {
        if (this.sectionContent.componentname == 'primengchartjs') {
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
            });
          });
        }
      // });
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }

  ngOnInit() {
  	this.getChartJSONAndDisplay() ;
  }

}
