

var app = new Vue({
    el: "#page-wrapper",
    data: {
      blockData: "",
      pieChartData: "",
      barChartData: "",
    },
    created: function () {

    },
    mounted: function(){
      this.startPie(this.$refs.canvas, 'pie');
    },
    methods: {
      startPie: function(canvas, type){
        axios.get('jsonData.json').then(function(response) {
          console.log("1111");
          // console.log(response.data.contentSection[0]);
          // app.blockData = response.data.contentSection[0];
          this.pieChartData = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartData;
          // this.barChartData = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartData;

          console.log("111122");
          console.log(this.pieChartData);
          let chart = new Chart(canvas, {
            type: type,
            data: this.pieChartData,
            options: {
              animation:{
                animateScale:false
              }
            }
          })
        })
        .catch(function (error) {
          console.log(error);
        });
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
