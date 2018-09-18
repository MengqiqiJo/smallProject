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
  chartDataId: any;

  firstBlcok: any;

  constructor(private myService: MyappService) {}

  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;
      this.contentGeneral = this.sectionContent.contentSection;

      this.firstBlcok = this.contentGeneral[0].middle.value;

      console.log(this.firstBlcok);

      this.contentGeneral.forEach((blockData, key) => {
        this.chartData = blockData.middle;
        this.chartDataId = document.getElementById(this.chartData.id);
        this.getChart[key] = new Chart(this.chartDataId, {
        });


      });
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });

  }

  primeData: any;

  ngOnInit() {

    this.getChartJSONAndDisplay();


    this.primeData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

  }

}
