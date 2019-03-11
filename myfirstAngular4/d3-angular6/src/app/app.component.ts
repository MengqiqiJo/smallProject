import { Component, OnInit} from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'd3 app';

  radius = 10;

  constructor() {

   }

  ngOnInit() {


    var dataset = [55, 45];

      var pie=d3.layout.pie()
              .value(function(d){return d})
              .sort(null);

      var w=300,h=300;

      var outerRadius=(w-2)/2;

      var color1 = "#e75244";
      var color2 = "#33bb9d";

      var arc=d3.svg.arc()
              .innerRadius(0)
              .outerRadius(outerRadius);

      var svg=d3.select("#chart")
              .append("svg")
              .attr({
                  width:w,
                  height:h,
                  class:'shadow'
              }).append('g')
              .attr({
                  transform:'translate('+w/2+','+h/2+')'
              });
      var path=svg.selectAll('path')
              .data(pie(dataset))
              .enter()
              .append('path')
              .attr({
                  d:<any>arc,
                  fill:color1
              })
              .style({
                  'fill-opacity':.15,
                  stroke: color1,
                  'stroke-width': '2px'
              });

  }
}
