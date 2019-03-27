import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  title = 'd3 app';


   constructor() {

    }

   data: any;
   width: number;
   height: number;
   radius: number;

   ngOnInit() {
     this.data = [
       {
         "name": "Jon",
         "num": 100
       },
       {
         "name": "Shaggydog",
         "num": 44
       },
       {
         "name": "Ghost",
         "num": 215
       },
       {
         "name": "Nymeria",
         "num": 385
       },
       {
         "name": "Summer",
         "num": 141
       },
       {
         "name": "Grey wind",
         "num": 340
       },
       {
         "name": "Ghost",
         "num": 215
       },
       {
         "name": "Nymeria",
         "num": 385
       },
       {
         "name": "Summer",
         "num": 141
       },
       {
         "name": "Grey wind",
         "num": 340
       }
     ];
     this.width = 300,
       this.height = 300,
       this.radius = Math.min(this.width, this.height) / 2;

     var tots = d3.sum(this.data, function(d) { 
       return d['num']; 
     });

     var divNode = d3.select("body").node();
     
     var color = d3.scaleOrdinal()
       .range(['#2fa9e0','#0099ff', '#05d23e', '#009900', '#c6c6c6', '#f7d417', '#ff9933', '#ff66ff', '#ff66cc', '#f24b99']);

     var arc = d3.arc()
       .innerRadius(0)
       .outerRadius(this.radius - 50);

     var pie = d3.pie()
         .sort(null)
         .value(function(d) { return d['num']; });

     d3.select("#pie-chart").append("div")
       .attr("id","mainPie")
       .attr("class","pieBox");

     var svg = d3.select("#mainPie").append("svg")
       .attr("width", this.width)
       .attr("height", this.height)
       .append("g")
       .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

     var g = svg.selectAll("path")
       .data(pie(this.data))
       .enter().append("g")
       .attr("class", "arc");

     g.append("path")
       .attr("d", <any>arc) // define d attribute with arc function above
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
       
         g.append('text')
           .style('fill', '#F2F2F2')
           .style("font-size", "18px")
           .style("font-weight", "bold")
           .attr("text-anchor", "middle")
           .each(function(d, i) {
               let centroid = d3.arc()
                .innerRadius(20)
                .outerRadius(100)
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

}
