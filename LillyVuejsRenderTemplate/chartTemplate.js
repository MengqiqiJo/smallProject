

var app = new Vue({
    el: "#page-wrapper",
    data: {
      blockData: "",
      pieChartData: "",
      barChartData: "",
    },
    created: function () {
      axios.get('jsonData.json').then(function(response) {
        console.log(response.data.contentSection[0]);
        app.blockData = response.data.contentSection[0];
        app.pieChartData = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartData;
        app.barChartData = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartData;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  });
