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
       console.log("1111");
       axios.get('jsonData.json').then(function(response) {
         app.pieChartData = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartData;
         app.barChartData = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartData;
         console.log("3333");
       })
       .catch(function (error) {
         console.log(error);
       });

    },
    mounted: function(){
      console.log("2222");

      this.startPie(this.$refs.canvas, 'pie', this.pieChartData);
    },
    methods: {
      startPie: function(canvas, type, chartData){
        console.log(chartData);
          let chart = new Chart(canvas, {
            type: type,
            data: chartData,
            options: {
              animation:{
                animateScale:false
              }
            }
          })
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
