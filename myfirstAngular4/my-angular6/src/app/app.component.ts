import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MyappService } from './myapp.service';
import { CopyComponent } from './app.copycomponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/plugin.css', '../../node_modules/primeng/resources/primeng.min.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {

  copyMessage(val: any) {
    var copyButton = new CopyComponent();
    copyButton.copyMessage(val);
  }


  // primeng dialog
  // display: boolean = false;
  // showDialog() {
  //   this.display = true;
  // }

  // get json data
  sectionContent: any;
  primengDataGeneral: any[];

  constructor(private myService: MyappService) {
  }

  getChartJSONAndDisplay() {
    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;
      this.primengDataGeneral = this.sectionContent.primengcontentdata;

    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });


  }

  chartOption : any;
  ngOnInit() {
    // Chart.defaults.global.defaultFontColor = 'red';
    // Chart.defaults.global.tooltips = {
    //   bodyFontSize: 50
    // };
    // Chart.defaults.global.tooltipFillColor = 'red';
    // Chart.defaults.global.plugins.labels = {
    //   fontStyle: 'light',
    //   render: function (args) {
    //     if (args.value > 4) {
    //       return args.value;
    //     }
    //   }
      // render: 'percentage',
    // };
    this.getChartJSONAndDisplay();
    // Chart.defaults.scale.ticks.suggestedMin = 10;

    // google.charts.load('current', {'packages':['corechart']});

    // google.charts.setOnLoadCallback(drawChart);

    // function drawChart() {

    //    let data = google.visualization.arrayToDataTable([
    //      ['Task', 'Hours per Day'],
    //      ['Work',     31],
    //      ['Eat',      1],
    //      ['Commute',  2],
    //      ['Watch TV', 2],
    //      ['Sleep',    7]
    //    ]);

    //    let options = {
    //      title: 'My Daily Activities'
    //    };

    //    let chart = new google.visualization.PieChart(document.getElementById('piechart'));

    //    chart.draw(data, options);
    // }


  this.chartOption = {
      title: {
          text: '天气情况统计',
          subtext: '虚构数据',
          left: 'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
      },
      legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: 'center',
          data: ['西凉', '益州','兖州','荆州','幽州']
      },
      series : [
          {
              type: 'pie',
              radius : '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data:[
                  {value:305, name: '荆州'},
                  {value:510, name: '兖州'},
                  {value:634, name: '益州'},
                  {value:735, name: '西凉'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  };

  }
}

