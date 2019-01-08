import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MyappService } from './myapp.service';
import { CopyComponent } from './app.copycomponent';

import * as html2canvas from "html2canvas";

import echarts from 'echarts';

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

  saveImage() {
    // this.testChartId = document.getElementById("barChart");
    // this.testChartId.toBlob(function(blob) {
    //   saveAs(blob,"summary.jpg");
    // })

      html2canvas(document.getElementById("demoChart")).then(function(canvas) {
        var element = document.createElement('a');
        element.href = canvas.toDataURL("image/png");
        element.download = 'download.png';
        element.click();
      });
        // window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
  }

  chartOption : any;
  echartOption : any;
  myChart: any;

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
            text: 'weahther',
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
          data: []
        },
        series : [
            {
              type: 'pie',
              radius : '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(a) {
                        console.log(Number(a.percent) > 5);
                      if (Number(a.percent) > 5) {
                        return (a.percent + '%');
                      }
                      else {
                        return " ";
                      }
                    },
                   textStyle : {
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 15,
                    fontWeight : 'bolder'
                 }
                },
              },
              data:[
                {value:35, name: 'Windsor'},
                {value:10, name: 'London'},
                {value:34, name: 'Waterloo'},
                {value:35, name: 'Guelph'},
                {value:35, name: 'Hamilton'},
                {value:735, name: 'Oakvile'}
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

    // setTimeout(() => {
    //   this.myChart = echarts.init(document.getElementById('setOptionChart'));
    //   this.myChart.clear();
      // this.echartOption = {
      //     title: {
      //         text: '111weahther',
      //         left: 'center'
      //     }
      // };
      // this.myChart.setOption(this.echartOption);
    //   this.echartOption = this.myChart.getOption();
    //   console.log("echartOption");
    //   console.log(this.echartOption);
    // }, 2000);

  }
}

