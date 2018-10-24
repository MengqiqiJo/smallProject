import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Chart } from 'chart.js';

import { MyappService } from './myapp.service';

import * as html2canvas from "html2canvas";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/plugin.css', '../../node_modules/primeicons/primeicons.css', '../../node_modules/primeng/resources/themes/omega/theme.css', '../../node_modules/primeng/resources/primeng.min.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  title = 'my-angular6999';

// copy to clipboard
  clipBoardArrayContent: any[];
  clipBoardStringContent: '';

  myCopyClipboard(copyContent) {
    this.clipBoardArrayContent = [];
    this.clipBoardStringContent = '';

    for (var i= copyContent.length - 1; i >= 0; i--) {
      this.clipBoardArrayContent = Object.values(copyContent[i]);
      this.clipBoardStringContent += this.clipBoardArrayContent.join('\t');
      this.clipBoardStringContent += '\n';
    }

    return this.clipBoardStringContent;
  }

  copyMessage(val: any){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.myCopyClipboard(val);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

// get json data
  contentGeneral: any;
  sectionContent: any;
  tableDataGeneral: any[];

  initChart: any[];
  initChartId: any;

  constructor(private myService: MyappService) {}
  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;

      this.contentGeneral = this.sectionContent.contentSection;
      this.tableDataGeneral = this.sectionContent.tablecontent;

      this.initChartId = document.getElementById('myChart');
      this.initChart = new Chart(this.initChartId,{
        type: 'line',
        data: {
          labels: ["January", "February"],
          datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10],
          }]
        },
        options: {
        }
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
