/**
 * @file
 */
Vue.component('vue-chartjs-top', {
  props: ['chartTop'],
  template: '<div v-if="chartTop != \'\' " class="bg-0082ba max-height-32 color-fff padding-10" v-html="chartTop"></div>'
})

Vue.component('vue-chartjs-bottom', {
  props: ['chartBottomValue'],
  template: '<div v-if="chartBottomValue != \'\' " class="border-1-e7e7e7" v-html="chartBottomValue"></div>'
})

/**
 * @
 */
Vue.component('vue-chartjs-pie', {
  props: ['chartData', 'chartOptions', 'chartTop', 'chartType', 'chartTopClass', 'chartMiddleMiddleClass', 'chartMiddleRightClass', 'chartBottomValue'],
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
      <div class="col-md-12" v-bind:class="chartTopClass">
        <div class="margin-left-20 margin-top-16">
          <div class="border-1-e7e7e7">
            <vue-chartjs-top v-bind:chartTop="chartTop"></vue-chartjs-top>
            <div class="row">
              <div v-bind:class="chartMiddleMiddleClass">
                <div class="margin-50 max-height-480">
                  <canvas ref="canvas"></canvas>
                </div>
              </div>
              <div v-bind:class="chartMiddleRightClass">
                <div>lsls</div>
              </div>
            </div>
            <vue-chartjs-bottom v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-bottom>
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
    pieChartType: "pie",
    doughnutChartType: "doughnut",
    lineChartType: "line",
    barChartType: "bar",
    chart: [
      {
        chartData: {},
        chartOptions: {},
        chartTop: {},
        chartTopClass: {},
        chartMiddleMiddleClass: {},
        chartMiddleRightClass: {},
        chartBottomValue: "",
      },
      {
        chartData: {},
        chartOptions: {},
        chartTop: {},
        chartTopClass: {},
        chartMiddleMiddleClass: {},
        chartMiddleRightClass: {},
        chartBottomValue: "",
      },
      {
        chartData: {},
        chartOptions: {},
        chartTop: {},
        chartTopClass: {},
        chartMiddleMiddleClass: {},
        chartMiddleRightClass: {},
        chartBottomValue: "",
      },
    ]

  },
  created: function () {
    var self = this;
    var countChart = 0;
    axios.get('jsonData.json').then((response) => {
      countChart = response.data.contentSection.length;

      for(var i = 0; i < countChart; i++) {
        // self.chart[0] = response.data.contentSection[0];

        self.chart[i].chartData = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddle.chartData;
        self.chart[i].chartOptions = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddle.chartOptions;
        self.chart[i].chartTop = response.data.contentSection[i].top.value;
        self.chart[i].chartTopClass = response.data.contentSection[i].top.class;
        self.chart[i].chartMiddleMiddleClass = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddleClass;
        self.chart[i].chartMiddleRightClass = response.data.contentSection[i].middle.middleMiddle.middleMiddleRightClass;
        self.chart[i].chartBottomValue = response.data.contentSection[i].bottom.value;

      console.log(self.chart[i].chartData);
      console.log(self.chart[i].chartOptions);
      console.log(self.chart[i].chartTop);
      console.log(self.chart[i].chartTopClass);
      console.log(self.chart[i].chartMiddleMiddleClass);
      console.log(self.chart[i].chartMiddleRightClass);
      console.log(self.chart[i].chartBottomValue);
      console.log(i);

        // self.chart[0].chartData = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartData;
        // self.chart[0].chartOptions = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartOptions;
        // self.chart[0].chartTop = response.data.contentSection[0].top.value;
        // self.chart[0].chartTopClass = response.data.contentSection[0].top.class;
        // self.chart[0].chartMiddleMiddleClass = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddleClass;
        // self.chart[0].chartMiddleRightClass = response.data.contentSection[0].middle.middleMiddle.middleMiddleRightClass;
        // self.chart[0].chartBottomValue = response.data.contentSection[0].bottom.value;

        // self.chart[1].chartData = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartData;
        // self.chart[1].chartOptions = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartOptions;
        // self.chart[1].chartTop = response.data.contentSection[1].top.value;
        // self.chart[1].chartTopClass = response.data.contentSection[1].top.class;
        // self.chart[1].chartMiddleMiddleClass = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddleClass;
        // self.chart[1].chartMiddleRightClass = response.data.contentSection[0].middle.middleMiddle.middleMiddleRightClass;
        // self.chart[1].chartBottomValue = response.data.contentSection[0].bottom.value;


        // self.chartData[i] = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddle.chartData;
        // self.chartOptions[i] = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddle.chartOptions;
        // self.chartTop[i] = response.data.contentSection[i].top.value;
        // self.chartTopClass[i] = response.data.contentSection[i].top.class;
      }

      console.log(self.chart[1].chartMiddleRightClass);
      console.log(self.chart[1].chartMiddleMiddleClass);
      console.log(98);
// <vue-chartjs-pie v-bind:chartData=chart[0].middle.middleMiddle.middleMiddleMiddle.chartData v-bind:chartOptions=chart[0].chartOptions v-bind:chartTop=chart[0].chartTop v-bind:chartType="doughnutChartType" v-bind:chartTopClass=chart[0].chartTopClass></vue-chartjs-pie>


      self.topClass = self.chart[0].chartTopClass;
      })
      .catch((error) => {
      console.log(error);
    });
  },
  template:`
    <div>
      <vue-chartjs-pie v-bind:chartData=chart[0].chartData v-bind:chartOptions=chart[0].chartOptions v-bind:chartTop=chart[0].chartTop v-bind:chartType="doughnutChartType" v-bind:chartTopClass=chart[0].chartTopClass v-bind:chartMiddleMiddleClass=chart[0].chartMiddleMiddleClass v-bind:chartMiddleRightClass=chart[0].chartMiddleRightClass v-bind:chartBottomValue=chart[0].chartBottomValue></vue-chartjs-pie>
      <vue-chartjs-pie v-bind:chartData=chart[0].chartData v-bind:chartOptions=chart[0].chartOptions v-bind:chartTop=chart[0].chartTop v-bind:chartType="pieChartType" v-bind:chartTopClass=chart[0].chartTopClass v-bind:chartMiddleMiddleClass=chart[0].chartMiddleMiddleClass v-bind:chartMiddleRightClass=chart[0].chartMiddleRightClass v-bind:chartBottomValue=chart[0].chartBottomValue></vue-chartjs-pie>
      <vue-chartjs-pie v-bind:chartData=chart[1].chartData v-bind:chartOptions=chart[1].chartOptions v-bind:chartTop=chart[1].chartTop v-bind:chartType="barChartType" v-bind:chartTopClass=chart[1].chartTopClass v-bind:chartMiddleMiddleClass=chart[1].chartMiddleMiddleClass v-bind:chartMiddleRightClass=chart[1].chartMiddleRightClass v-bind:chartBottomValue=chart[1].chartBottomValue></vue-chartjs-pie>
    </div>`
});
