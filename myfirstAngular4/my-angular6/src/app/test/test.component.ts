import { Component, OnInit } from '@angular/core';
declare let Highcharts: any;

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Build the chart
    Highcharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares at a specific website, 2014'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors: [
            "#00134b",
            "#0093d0",
            "#00aeef",
            "#7dba00",
            "#c6c6c6",
            "#d6006e"
          ],
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          }
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'Chrome', y: 161.41 },
          { name: 'Internet Explorer', y: 11.84 },
          { name: 'Firefox', y: 10.85 },
          { name: 'Edge', y: 4.67 },
          { name: 'Safari', y: 4.18 },
          { name: 'Other', y: 7.05 }
        ]
      }]
    });

    // Create the chart
    Highcharts.chart('barChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Browser market shares. January, 2018'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total amount market share'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
      "series": [
        {
          "name": "Browsers",
          "colorByPoint": true,
          "data": [
            {
              "name": "Chrome",
              "y": 62.74,
              "drilldown": "Chrome"
            },
            {
              "name": "Firefox",
              "y": 10.57,
              "drilldown": "Firefox"
            },
            {
              "name": "Internet Explorer",
              "y": 7.23,
              "drilldown": "Internet Explorer"
            },
            {
              "name": "Safari",
              "y": 5.58,
              "drilldown": "Safari"
            },
            {
              "name": "Edge",
              "y": 4.02,
              "drilldown": "Edge"
            },
            {
              "name": "Opera",
              "y": 1.92,
              "drilldown": "Opera"
            },
            {
              "name": "Other",
              "y": 7.62,
              "drilldown": null
            }
          ]
        }
      ]
    });
  }

}
