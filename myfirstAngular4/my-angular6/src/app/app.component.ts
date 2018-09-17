import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Chart } from 'chart.js';

import { MyappService } from './myapp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
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
  sectionContent: any;
  chartData: any;
  canvasBlockId = '';

  firstTitle: any;
  firstTitleValue = "";
  firstBottom = "";
  firstBlockContent = [{"top": "" , "middle": "", "bottom": ""}];

  constructor(private myService: MyappService) {}

  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;
      this.contentGeneral = this.sectionContent.contentSection;

      console.log(this.contentGeneral);
      this.firstTitle = this.contentGeneral[0];
      this.firstTitleValue = this.firstTitle.top.value;
      this.firstBottom = this.firstTitle.bottom.value;

      this.firstBlockContent[0].top = this.firstTitleValue;
      this.firstBlockContent[0].bottom = this.firstBottom;

      console.log(this.firstBlockContent[0]);

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
