
var app = new Vue({
  el: '#block',
  data: {
    blocks: "",
    option: "",
    chartType: "",
    dataset: [],
    mydata2: "",
    opt: ""

  },
  created: function () {
    this.getDoughnutChartData();
  },
  mounted: function () {
    var self = this;
    self.dataset = "ready";
    this.drawDoughnutChart();
  },
  // methods: {
  //   getData: function () {
  //      var self = this;
  //   $.get( "jsonData.json", function(data) {
  //       self.blocks = data;
  //       self.option = self.blocks['contentSection'][2].middle.middleMiddle.middleMiddleMiddle.chartOptions
  //       self.chartType = self.blocks['contentSection'][2].middle.middleMiddle.middleMiddleMiddle.chartType
  //       // blocks['contentSection'][2].middle.middleMiddle.middleMiddleMiddle.chartId
  //       self.dataset = self.blocks['contentSection'][2].middle.middleMiddle.middleMiddleMiddle.chartData

  //   });
 //    window.onload = function() {
 //    var myLine = new Chart(document.getElementById("canvas_Doughnut").getContext("2d")).Doughnut(self.dataset,self.opt);
 //  }
 // },
 getDoughnutChartData: function () {
  var self = this;
  self.mydata2 = {
       datasets : [
             {
        data : [45],
        fillColor : "#2fa9e0",
        title : "1(12)",
             },
             {
        data : [12],
        fillColor : "#f24b99",
        title : "2(28)",
             },
             {
        data : [32],
        fillColor : "#37d8b3",
        title : "data3"
             },
             {
        data : [15],
        fillColor : "#bfbfbf",
        title : "data4",
             }
  ]
  };
  self.opt = {
        canvasBorders : true,
        canvasBordersWidth : 2,
        canvasBordersColor : "black",
        graphTitle : "my inGraphData",
        graphMin : 0,
        legend : true,
        inGraphDataShow : false,    // -> ingraphData are written through shapes in the chart
        annotateDisplay : true,
        graphTitleFontSize: 18,
        endDrawDataFunction: drawShapes

  };
  self.dataset = "mounted1";
 },
 drawDoughnutChart: function () {
  window.onload = function() {
    var myLine = new Chart(document.getElementById("canvasForChart").getContext("2d")).Doughnut(this.mydata2, this.opt);
  }
 }
  }
});

