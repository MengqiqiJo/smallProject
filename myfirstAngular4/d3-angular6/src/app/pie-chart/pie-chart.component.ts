import { Component, OnInit } from '@angular/core';
import { JsonAppService } from '../getjson.service';

import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private dataService: JsonAppService) {}

  public data: any[];
  colorPalette: any;
  width: number;
  height: number;
  radius: number;
  chartID: string;
  chartCol: string;
  centroidRadius: any;
  innerRadius: number;
  outerRadius: number;

  getChartJSON() {
    this.dataService.getJsonData().subscribe(jsonData => {
      jsonData['d3ContentData'].forEach(eachChart => {
        this.chartID = eachChart['chartId'];
        this.data = eachChart['chartData'];
        this.colorPalette = eachChart['colorPalette'];
        this.width = eachChart['width'];
        this.height = eachChart['height'];
        this.chartCol = eachChart['chartCol'];
        this.radius = Math.min(this.width, this.height) / 2;
        this.innerRadius = eachChart['innerRadius'];
        this.outerRadius = eachChart['outerRadius'];
       
        this.draw();

      });
    },
    err => {
      console.log('error: ', err);
    });
  }

  ngOnInit() {
    this.getChartJSON();
  }

  manageLabelText(g) {
    

    var tots = d3.sum(this.data, function(d) { 
      return d['num']; 
    });

    var inner = this.innerRadius;
    var outer = this.outerRadius;

    g.append('text')
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
            var finalPercent = (d['data']['num'] / tots) * 100;
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

  

    var divNode = d3.select("body").node();

    var color = d3.scaleOrdinal()
      .range(this.colorPalette);


    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius);

    var pie = d3.pie()
      .sort(null)
      .value(function(d) { return d['num']; });

    d3.select(".pie-chart")
      .append("div")
      .attr("id", this.chartID)
      .attr("class", "pieBox")
      .attr("class", this.chartCol);

    var svg = d3.select("#"+this.chartID)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

    var g = svg.selectAll("path")
      .data(pie(this.data))
      .enter()
      .append("g");
      

    g.append("path")
      .attr("d", <any>arc) 
      .style("fill", (d) => { return (color(d.data['name']) as any) })
      .on("mousemove", function(d) {
        var mousePos: any = d3.mouse(divNode as any);
        d3.select("#mainTooltip")
        .style("left", mousePos[0] - 40 + "px")
        .style("top", mousePos[1] - 100 + "px")
        .select("#value")
        .attr("text-anchor", "middle")
        .html(d.data['name'] + "<br />" + d.data['num']);

        d3.select("#mainTooltip").classed("hidden", false);
      })
      .on("mouseout", function(d){
        d3.select("#mainTooltip").classed("hidden", true);
      });

      this.manageLabelText(g);
  }

}
