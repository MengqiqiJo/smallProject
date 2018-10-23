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
  fruits = ['apple', 'pear', 'orange', 'kiwi', 'peach'];
  inputFirstName = '';
  result = '';

  showResult() {
    this.result = this.inputFirstName;
  }

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
  pageTopFixedTilesDataGeneral: any[];

  initChart: any[];
  initChartId: any;

  constructor(private myService: MyappService) {}
  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;

      this.pageTopFixedTilesDataGeneral = this.sectionContent.pageTopFixedSection;
      this.contentGeneral = this.sectionContent.contentSection;
      this.tableDataGeneral = this.sectionContent.tablecontent;

      this.initChartId = document.getElementById('myChart');
      this.initChart = new Chart(this.initChartId,{
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
          }]
      });

    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });

  }

// save png

  // testChartId: any;
  // imgData: '';
  saveImage() {
    // this.testChartId = document.getElementById("barChart");
    // this.testChartId.toBlob(function(blob) {
    //   saveAs(blob,"summary.jpg");
    // })

    html2canvas(document.getElementById("demoChart")).then(canvas => {
      // this.imgData = canvas.toDataURL("image/png");
      document.body.appendChild(canvas);
        // window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
    })

  }

  ngOnInit() {

    this.getChartJSONAndDisplay();

  }

}
