/**
 * @file
 */
Vue.component('vue-chartjs-top', {
  template: '<div class="bg-0082ba height-32 color-fff padding-10">this is the top</div>'
})
/**
 * @
 */
Vue.component('vue-chartjs-pie', {
  props: ['pieChartData'],
  mounted: function(){
    this.startPie(this.$refs.canvas, 'pie');
  },
  methods: {
    startPie: function(canvas, type){
      console.log(this.pieChartData);
      console.log("lsl-pie");
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
  template:`
    <span class="doughnutchart">
      <span class="col-sm-12 col-md-6 col-lg-6">
        <div class="margin-left-20 margin-top-16">
          <div class="border-1-e7e7e7">
            <vue-chartjs-top></vue-chartjs-top>
            <div class="margin-50">
              <p>{{pieChartData}}</p>
            </div>
          </div>
        </div>
      </span>
    </span>`
});

/**
 * @
 */
var app = new Vue({
    el: "#page-wrapper",
    data: {
      blockData: "",
      pieChartData: "dddddddddd",
      barChartData: "",
    },
    created: function () {
       var self = this;
        axios.get('jsonData.json').then((response) => {
        self.pieChartData = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartData;
        self.barChartData = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartData;
        // console.log(self.pieChartData);
      })
      .catch((error) => {
        console.log(error);
      });
      // console.log(self.pieChartData);
    },
    mounted: function () {
    },
    methods: {
    },
    template:`
      <div>
        <vue-chartjs-pie>
        </vue-chartjs-pie>
      </div>`
  });
