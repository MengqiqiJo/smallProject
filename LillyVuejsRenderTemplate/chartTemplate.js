

var app = new Vue({
    el: "#page-wrapper",
    data: {
      blockData: "",
      pieChartData: "",
      barChartData: "",
    },
    created: function () {
      axios.get('jsonData.json').then(function(response) {
        console.log("1111");
        console.log(response.data.contentSection[0]);
        app.blockData = response.data.contentSection[0];
        app.pieChartData = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartData;
        app.barChartData = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartData;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    mounted: function(){
      this.startPie(this.$refs.canvas, 'pie', this.pieChartData);
    },
    methods: {
      startPie: function(canvas, type, chartData){
        console.log("2222"+this.pieChartData);
        let chart = new Chart(canvas, {
          type: type,
          data: { "datasets": [ { "data": [ 45, 12, 32, 15 ], "backgroundColor": [ "#2fa9e0", "#f24b99", "#37d8b3", "#bfbfbf" ] } ] },
          options: {
            animation:{
              animateScale:false
            }
          }
        })
      }
    },
    template:`
      <span class="doughnutchart">
        <span class="col-sm-12 col-md-6 col-lg-6">
          <div class="margin-left-20 margin-top-16">
            <div class="border-1-e7e7e7">
              <vue-chartjs-top></vue-chartjs-top>
              <div class="margin-50">
                <canvas ref="canvas"></canvas>
              </div>
            </div>
          </div>
        </span>
      </span>`
  });
