import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild} from '@angular/core';

import { MyappService } from './myapp.service';
import { CopyComponent } from './app.copycomponent';

import {SelectItem} from 'primeng/api';

import * as html2canvas from "html2canvas";

import echarts from 'echarts';

import * as d3 from 'd3';

import * as Chart from 'chart.js';

import 'chartjs-plugin-labels';

import 'chartjs-plugin-stacked100';

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
  blockData: any;

  // new chart.js data
  blockIsChart: boolean;
  tabContent: any;
  pluginLabel: any;


  // d3 parameters
  d3data: any[];
  d3colorPalette: any;
  d3width: number;
  d3height: number;
  d3radius: number;
  d3chartID: string;
  d3chartCol: string;
  d3centroidRadius: any;
  d3innerRadius: number;
  d3outerRadius: number;
  d3groupSvg: any;

  // function
  d3chartSvg;
  d3pieChartArc;
  d3color;
  d3pieChart ;


businessUnit: any[];
therapArea: any[];
programArea: any[];
availableTherapArea: any[];
availableProgram: any[];
enableHCPSubmitButton : boolean;
selectedCity: string;
selectedTherap: string;
selectedProgram: string;
text: string;
val1: string;
selectedRoles: string[] = [];
display: boolean = false;
userRoles: any[];

  constructor(private myService: MyappService) {

    // this.businessUnit = [
    //   {businessUnitId : 1, name: 'Immunology'},
    //   {businessUnitId : 2, name: 'Oncology'},
    //   {businessUnitId : 3, name: 'Speacialty'}
    // ];

    this.availableTherapArea = [];
    this.availableProgram = [];
    this.enableHCPSubmitButton = true;
    
    // this.therapArea = [
    //   {
    //     businessUnitId : 1,
    //     therapAreaId : 6,
    //     therapAreaName : "Hematology"
    //   },
    //   {
    //     businessUnitId : 1,
    //     therapAreaId : 7,
    //     therapAreaName : "solid Tumor"
    //   },
    //   {
    //     businessUnitId : 2,
    //     therapAreaId : 8,
    //     therapAreaName : "Bio T"
    //   },
    //   {
    //     businessUnitId : 2,
    //     therapAreaId : 9,
    //     therapAreaName : "Dermatology"
    //   },
    //   {
    //     businessUnitId : 3,
    //     therapAreaId : 10,
    //     therapAreaName : "Gastrointestinal"
    //   }
    // ];

    // this.programArea = [
    //   {
    //     therapAreaId : 6,
    //     programId : 11,
    //     programName : "CONII - Value Based Advisory Board"
    //   },
    //   {
    //     therapAreaId : 7,
    //     programId : 12,
    //     programName : "Changing the Goals: Optimizing Therapeutic Approaches in AML"
    //   },
    //   {
    //     therapAreaId : 6,
    //     programId : 13,
    //     programName : "APSHO Symposium: Targeted Agents and Goals of Therapy in CLL"
    //   },
    //   {
    //     therapAreaId : 7,
    //     programId : 14,
    //     programName : "CONII – Hematology Advisory Board"
    //   },
    //   {
    //     therapAreaId : 7,
    //     programId : 15,
    //     programName : "ONS Symposium: Goals of CLL Therapy and Targeted Agents"
    //   }
    // ];

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


  buonclick() {
    // this.availableTherapArea = [];
    // this.selectedTherap = null;
  }

  updateTherapeuticAreas(event) {
    var temporaryTherap = [];

      this.therapArea.forEach(thearpData => {
        if (thearpData.businessUnitId == event.value.businessUnitId) {
          console.log("thearpData");
          console.log(thearpData);
          // this.availableTherapArea.push(thearpData);
          // console.log(this.availableTherapArea);
          temporaryTherap.push(thearpData);
        }
      });

      this.availableTherapArea = [];
      this.availableTherapArea = temporaryTherap;
      this.availableProgram = [];

  }

  updateProgram(event) {
    var temopraryProgram = [];

    this.programArea.forEach(programData => {
      if (programData.therapAreaId == event.value.therapAreaId) {
        temopraryProgram.push(programData);
        console.log(temopraryProgram);
      }
    });

    this.availableProgram = [];
    this.availableProgram = temopraryProgram;
  }

  updateSubmitButton(event) {
    console.log(event);
    console.log(this.enableHCPSubmitButton);
    this.enableHCPSubmitButton = false;
    console.log(this.enableHCPSubmitButton);
  }

  showDialog() {
    this.display = true;
  }

  // get all data 
  getChartJSONAndDisplay() {

    this.myService.getMyJson().subscribe(data => {
      this.sectionContent = data;

      this.businessUnit = this.sectionContent.hcpcontentdata[0].businessUnit;
      this.therapArea = this.sectionContent.hcpcontentdata[0].therapArea;
      this.programArea = this.sectionContent.hcpcontentdata[0].programArea;

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

      
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }

  getD3ChartJson(d3JsonData) {

    if (d3JsonData.tabData['type'] == 'd3') {
      console.log("d3444");
      console.log(d3JsonData.tabData.type);
      this.d3chartID = d3JsonData.tabData.middle.middleMiddle['chartId'];
      this.d3data = d3JsonData.tabData.middle.middleMiddle['chartData'];
      this.d3colorPalette = d3JsonData.tabData.middle.middleMiddle['colorPalette'];
      this.d3width = d3JsonData.tabData.middle.middleMiddle['width'];
      this.d3height = d3JsonData.tabData.middle.middleMiddle['height'];
      this.d3chartCol = d3JsonData.tabData.middle.middleMiddle['chartCol'];
      this.d3radius = Math.min(this.d3width, this.d3height) / 2;
      this.d3innerRadius = d3JsonData.tabData.middle.middleMiddle['innerRadius'];
      this.d3outerRadius = d3JsonData.tabData.middle.middleMiddle['outerRadius'];

      this.draw();
    }

  }

  manageLabelText(groupSvg) {
    
    var totalNum = d3.sum(this.d3data, function(d) { 
      return d['num']; 
    });

    var inner = this.d3innerRadius;
    var outer = this.d3outerRadius;

    groupSvg.append('text')
      .style('fill', '#F2F2F2')
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .attr("text-anchor", "middle")
      .each(function(d, i) {
        let centroid = d3.arc()
          .innerRadius(inner)
          .outerRadius(outer)
          .centroid(d as any);

        d3.select(this)
          .attr('x', centroid[0])
          .attr('y', centroid[1])
          .attr('dy', '0.33em')
          .text(function(d) { 
            var finalPercent = (d['data']['num'] / totalNum) * 100;
            if (finalPercent > 5) {
              return Math.round(finalPercent) + "%"; 
            }
            else {
              return " "; 
            }
          });  
      });
  }

  draw() {

    console.log("hello I am d3");

    var divNode = d3.select("body").node();

    console.log(typeof divNode);

    this.d3color = d3.scaleOrdinal()
      .range(this.d3colorPalette);

    this.d3pieChartArc = d3.arc()
      .innerRadius(0)
      .outerRadius(this.d3radius);

    this.d3pieChart = d3.pie()
      .sort(null)
      .value(function(d) { return d['num']; });

    d3.select(".pie-chart")
      .append("div")
      .attr("id", this.d3chartID)
      .attr("class", "pieBox")
      .attr("class", this.d3chartCol);

    this.d3chartSvg = d3.select("#"+this.d3chartID)
      .append("svg")
      .attr("width", this.d3width)
      .attr("height", this.d3height)
      .append("g")
      .attr("transform", "translate(" + this.d3width / 2 + "," + this.d3height / 2 + ")");

    this.d3groupSvg = this.d3chartSvg.selectAll("path")
      .data(this.d3pieChart(this.d3data))
      .enter()
      .append("g");
      
    this.d3groupSvg.append("path")
      .attr("d", <any>this.d3pieChartArc) 
      .style("fill", (d) => { return (this.d3color(d.data['label']) as any) })
      .on("mousemove", function(d) {
        var mousePos: any = d3.mouse(divNode as any);
        d3.select("#mainTooltip")
        .style("left", mousePos[0] - 40 + "px")
        .style("top", mousePos[1] - 500 + "px")
        .select("#value")
        .attr("text-anchor", "middle")
        .html(d.data['label'] + "<br />" + d.data['num']);

        d3.select("#mainTooltip").classed("hidden", false);
      })
      .on("mouseout", function(d){
        d3.select("#mainTooltip").classed("hidden", true);
      });

      this.manageLabelText(this.d3groupSvg);
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

  @ViewChild('divClick') divClick: ElementRef;

  ngOnInit() {



    setTimeout(() => {
      // this.divClick.nativeElement.click();
    }, 200);
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

    

  }
}

