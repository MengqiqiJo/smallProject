/**
 * @file
 */
Vue.component('vue-chartjs-top', {
  props: ['chartTop'],
  template: '<div v-if="chartTop != \'\' " class="bg-0082ba max-height-32 color-fff padding-10">{{chartTop}}</div>'
})

/**
 * @
 */
Vue.component('vue-chartjs-pie', {
  props: ['chartData', 'chartOptions', 'chartTop', 'chartType', 'chartTopClass'],
  methods: {
    drawChart: function(canvas, type, chartData, chartOptions) {
      console.log("2222");
      let chart = new Chart(canvas, {
        type: type,
        data: chartData,
        options: chartOptions,
      })
    }
  },
  watch: {
    chartData: function () {
      this.drawChart(this.$refs.canvas, this.chartType, this.chartData, this.chartOptions);
    },
  },
  template:`
    <div class="vue-chart-block">
      <div class="col-md-12 pppppleft" v-bind:class="chartTopClass">
        <div class="margin-left-20 margin-top-16">
          <div class="border-1-e7e7e7">
            <vue-chartjs-top v-bind:chartTop="chartTop"></vue-chartjs-top>
             <div class="margin-50 max-height-480">
              <canvas ref="canvas"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>`
});

/**
 * @
 */
var app = new Vue({
  el: "#page-wrapper",
  data: {
    blockData: "",
    chartData: [],
    chartOptions: [],
    pieChartType: "pie",
    doughnutChartType: "doughnut",
    lineChartType: "line",
    barChartType: "bar",
    chartTop: [],
    chartTopClass: [],
    topClass: ""
  },
  created: function () {
    var self = this;
    var countChart = 0;
    axios.get('jsonData.json').then((response) => {
      countChart = response.data.contentSection.length;
      // console.log(countChart);
      for(var i=0; i<countChart; i++) {
        self.chartData[i] = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddle.chartData;
        self.chartOptions[i] = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddle.chartOptions;
        self.chartTop[i] = response.data.contentSection[i].top.value;
        self.chartTopClass[i] = response.data.contentSection[i].top.class;
      }

      self.topClass = self.chartTopClass[0];

      })
      .catch((error) => {
      console.log(error);
    });
  },
  template:`
    <div>
      <vue-chartjs-pie v-bind:chartData=chartData[0] v-bind:chartOptions=chartOptions[0] v-bind:chartTop=chartTop[0] v-bind:chartType="doughnutChartType" v-bind:chartTopClass=chartTopClass[0]></vue-chartjs-pie>
      <vue-chartjs-pie v-bind:chartData=chartData[0] v-bind:chartOptions=chartOptions[0] v-bind:chartTop=chartTop[0] v-bind:chartType="pieChartType" v-bind:chartTopClass=chartTopClass[0]></vue-chartjs-pie>
      <vue-chartjs-pie v-bind:chartData=chartData[1] v-bind:chartOptions=chartOptions[1] v-bind:chartTop=chartTop[1] v-bind:chartType="barChartType" v-bind:chartTopClass="topClass"></vue-chartjs-pie>
    </div>`
});
