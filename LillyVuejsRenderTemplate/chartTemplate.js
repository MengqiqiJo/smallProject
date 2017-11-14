/**
 * @file
 */
Vue.component('vue-chartjs-top', {
  template: '<div class="bg-0082ba height-32 color-fff padding-10">this is the top</div>'
})

var app = new Vue({
    el: "#page-wrapper",
    data: {
      blockData: "",
      pieChartData: "",
      barChartData: "",
    },
    created: function () {
       var self = this;
       axios.get('jsonData.json').then((response) => {
         console.log("3333");
         self.pieChartData = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartData;
         self.barChartData = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartData;
         console.log(self.pieChartData);
       })
       .catch((error) => {
         console.log(error);
       });
    },
    methods: {
      drawChart: function(canvas, type, chartData) {
        console.log("2222");
          let chart = new Chart(canvas, {
            type: type,
            data: this.pieChartData,
            options: {
              animation:{
                animateScale:false
              }
            }
          })
      }
    },
    watch: {
      pieChartData: function () {
        this.drawChart(this.$refs.canvas, 'pie', this.pieChartData);
      }
    },
    template:`
      <span class="chart-wrapper">
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
