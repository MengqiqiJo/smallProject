import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

import { MyappService } from './myapp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular6999';
  fruits = ['apple', 'pear', 'orange', 'kiwi', 'peach'];
  inputFirstName = '';
  result = '';
  log(x) {
    this.inputFirstName += x + ' ; ';
  }

  showResult() {
    this.result = this.inputFirstName;
  }

  getChart = [];
  contentGeneral: any;
  chartData : any;
  canvasBlockId = '';

  firstTitle = '';
  firstChartLegends = [];

  constructor(private myService: MyappService) {}

  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.contentGeneral = data.contentSection;

      console.log(this.contentGeneral);
      this.firstTitle = this.contentGeneral[0].top;
      this.firstChartLegends = this.contentGeneral[0].middle.legends;

      this.contentGeneral.forEach((blockData, key) => {
        this.canvasBlockId = blockData.blockId;
        this.chartData = blockData.middle;
        this.getChart[key] = new Chart(this.chartData.id, {
          type: this.chartData.type,
          data: this.chartData.data,
          options: {
            title: {
              text: this.chartData.title,
              display: true
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
        });
      });
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });

  }


  ngOnInit() {

    this.getChartJSONAndDisplay();

  }

}
