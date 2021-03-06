var data = [
    {
        "str_lab": "Jon",
        "num": 100
    },
    {
        "str_lab": "Shaggydog",
        "num": 44
    },
    {
        "str_lab": "Ghost",
        "num": 215
    },
    {
        "str_lab": "Nymeria",
        "num": 385
    },
    {
        "str_lab": "Summer",
        "num": 141
    },
    {
        "str_lab": "Grey wind",
        "num": 340
    }
];
var width = 300,
    height = 300,
    radius = Math.min(width, height) / 2;

var tots = d3.sum(data, function(d) { 
                    return d.num; 
                });

var divNode = d3.select("body").node();
var outerRadius = radius - 10,
    innerRadius = radius - 80;
var color = d3.scaleOrdinal()
    .range(['#2fa9e0','#0099ff', '#05d23e', '#009900', '#c6c6c6', '#f7d417', '#ff9933', '#ff66ff', '#ff66cc', '#f24b99']);

var arc = d3.svg.arc()
    .outerRadius(radius - 10);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.num; });

d3.select("#chart").append("div")
    .attr("id","mainPie")
    .attr("class","pieBox");

var svg = d3.select("#mainPie").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


var defs = svg.append("defs");
var filter = defs.append("filter")
  .attr("id", "drop-shadow")
  .attr("height","130%");

filter.append("feGaussianBlur")
  .attr("in","SourceAlpha")
  .attr("stdDeviation", 3)
  .attr("result", "blur");

filter.append("feOffset")
  .attr("in", "blur")
  .attr("dx", 3)
  .attr("dy", 3)
  .attr("result", "offsetBlur");
var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
  .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
  .attr("in", "SourceGraphic");

var g = svg.selectAll(".arc")
  .data(pie(data))
  .enter().append("g")
  .attr("class", "arc");


g.append("path")
  .attr("d", arc)
  .style("fill", function(d) { return color(d.data.num); })
  .on("mousemove", function(d) {
    d3.select(this)
      .attr("stroke","#fff")
      .attr("stroke-width","2px")
      .style("filter", "url(#drop-shadow)");
	  d3.select(this)
  		.transition()
  		.duration(500)
  		.ease('elastic')
  		.attr('transform',function(d){
  			var dist = 1;
  			d.midAngle = ((d.endAngle - d.startAngle)/2) + d.startAngle;
  			var x = Math.sin(d.midAngle) * dist;
  			var y = Math.cos(d.midAngle) * dist;
  			return 'translate(' + x + ',' + y + ')';
  		});
    var mousePos = d3.mouse(divNode);
    d3.select("#mainTooltip")
      .style("left", mousePos[0] - 40 + "px")
      .style("top", mousePos[1] - 70 + "px")
      .select("#value")
      .attr("text-anchor", "middle")
      .html(d.data.str_lab + "<br />" + d.data.num);

		d3.select("#mainTooltip").classed("hidden", false);
  })
  .on("mouseout", function(d){
    d3.select(this)
        .attr("stroke","none")
        .style("filter","none");
  	d3.select(this)
  		.transition()
  		.duration(500)
  		.ease('bounce')
  		.attr('transform','translate(0,0)');

  	d3.select("#mainTooltip").classed("hidden", true);
  });
  
		g.append('text')
			.style('fill', '#F2F2F2')
			.style("font-size", "18px")
			.style("font-weight", "bold")
			.attr("text-anchor", "middle")
      .attr("transform", function(d) {                   
        d.innerRadius = 0;
        d.outerRadius = 100;
        return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
      })
			.text(function(d, i) { 
        var finalPercent = (data[i].num / tots) * 100;
        if (finalPercent > 5) {
          return Math.round(finalPercent) + "%"; 
        }
        else {
          return " "; 
        }
      });   
