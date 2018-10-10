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
  chartDataId: any;

  firstBlcok: any;
  firstBlcokTop: any;
  firstBlcokBottom: any;

  cars: any;

  constructor(private myService: MyappService) {}

  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;
      this.contentGeneral = this.sectionContent.contentSection;
      this.cars = this.sectionContent.tablecontent;

      this.firstBlcok = this.contentGeneral[0];
      this.firstBlcokTop = this.firstBlcok.top.value;
      this.firstBlcokBottom = this.firstBlcok.bottom.value;

      new Chart();

    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });

  }

  testChartId: any;
  imgData: '';

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

  cols: any[];

  yearTimeout: any;

  selectedColumns: any[];

  ngOnInit() {

    this.getChartJSONAndDisplay();

    // this.cars = this.sectionContent.tablecontent;

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'pooooooYear' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];

  this.selectedColumns = this.cols;
  }

}
