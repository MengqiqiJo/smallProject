/**
 * @file
 */
Vue.component('vue-chartjs-top', {
  props: ['chartTop'],
  template: '<div v-if="chartTop != \'\' " class="bg-0082ba max-height-32 color-fff padding-10" v-html="chartTop"></div>'
})

/**
 * @
 */
Vue.component('vue-chartjs-bottom', {
  props: ['chartBottomValue'],
  template: '<div v-if="chartBottomValue != \'\' " class="border-1-e7e7e7" v-html="chartBottomValue"></div>'
})

/**
 * @
 */
Vue.component('vue-chartjs-singlechart-frame', {
  props: ['chartData', 'chartOptions', 'chartTop', 'chartType', 'chartTopClass', 'chartMiddleMiddleClass', 'chartMiddleRightClass', 'chartBottomValue'],
  template:`
    <div class="vue-chart-block">
      <div  v-bind:class="chartTopClass">
        <div class="margin-left-20 margin-top-16">
        <vue-chartjs-top v-bind:chartTop=chartTop></vue-chartjs-top>
          <div class="border-1-e7e7e7">
            <vue-chartjs-drawchart v-bind:chartData=chartData v-bind:chartOptions=chartOptions v-bind:chartType=chartType v-bind:chartMiddleMiddleClass=chartMiddleMiddleClass v-bind:chartMiddleRightClass=chartMiddleRightClass></vue-chartjs-drawchart>
            <vue-chartjs-bottom v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-bottom>
          </div>
        </div>
      </div>
    </div>`
});

/**
 * @
 */
Vue.component('vue-chartjs-multitabs-frame', {
  props: ['chartData', 'chartOptions', 'chartTop', 'chartType', 'chartTopClass', 'chartMiddleMiddleClass', 'chartMiddleRightClass', 'chartBottomValue', 'chartBottomValue'],
  template:`
    <div class="vue-chart-block">
      <div  v-bind:class="chartTopClass">
        <div class="margin-left-20 margin-top-16">
        </div>
        <vue-chartjs-top v-bind:chartTop=chartTop></vue-chartjs-top>
      </div>

        <div class="col-md-12">
          <div class="border-1-e7e7e7">
            <vue-chartjs-multiTabs v-bind:chartData=chartData v-bind:chartOptions=chartOptions v-bind:chartType=chartType v-bind:chartMiddleMiddleClass=chartMiddleMiddleClass v-bind:chartMiddleRightClass=chartMiddleRightClass v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-multiTabs>
          </div>
        </div>
    </div>`
});

/**
 * @v-bind:chartData=chartData v-bind:chartOptions=chartOptions v-bind:chartType=chartType v-bind:chartMiddleMiddleClass=chartMiddleMiddleClass v-bind:chartMiddleRightClass=chartMiddleRightClass
 */
Vue.component('vue-chartjs-drawchart', {
  props: ['chartData', 'chartOptions', 'chartType', 'chartMiddleMiddleClass', 'chartMiddleRightClass'],
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

   `
});

/**
 * @
 */
// Vue.component('vue-chartjs-frame', {
//   props: ['chartTop', 'chartTopClass', 'chartBottomValue'],
//   template:`
//     <div class="vue-chart-block">
//       <div  v-bind:class="chartTopClass">
//         <div class="margin-left-20 margin-top-16">
//           <div class="border-1-e7e7e7">
//             <vue-chartjs-bottom v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-bottom>
//           </div>
//         </div>
//       </div>
//     </div>`
// });
/**
 * @
 */
Vue.component('vue-chartjs-multiTabs', {
  props: ['chartData', 'chartOptions', 'chartType', 'chartMiddleMiddleClass', 'chartMiddleRightClass', 'chartBottomValue'],
  // methods: {
  //   drawChart: function(canvas, type, chartData, chartOptions) {
  //     console.log("tabs");
  //     let chart = new Chart(canvas, {
  //       type: type,
  //       data: chartData,
  //       options: chartOptions,
  //     })
  //   }
  // },
  // watch: {
  //   chartData: function () {
  //     this.drawChart(this.$refs.canvas, this.chartType, this.chartData, this.chartOptions);
  //   },
  // },
  template:`
    <div class="container col-md-6">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-tabs">
              <li><a data-toggle="tab" href="#chart1">chart 1</a></li>
              <li><a data-toggle="tab" href="#chart2">chart 2</a></li>
              <li><a data-toggle="tab" href="#chart3">chart 3</a></li>
              <li><a data-toggle="tab" href="#chart4">chart 4</a></li>
            </ul>
            <div class="tab-content col-md-12">
              <div id="chart1" class="tab-pane fade">
                <vue-chartjs-drawchart v-bind:chartData=chartData v-bind:chartOptions=chartOptions v-bind:chartType=chartType v-bind:chartMiddleMiddleClass=chartMiddleMiddleClass v-bind:chartMiddleRightClass=chartMiddleRightClass></vue-chartjs-drawchart>
              </div>
              <div id="chart2" class="tab-pane fade">
                <h3>Menu 1</h3>
              </div>
              <div id="chart3" class="tab-pane fade">
                <h3>Menu 2</h3>
              </div>
              <div id="chart4" class="tab-pane fade">
                <vue-chartjs-drawchart v-bind:chartData=chartData v-bind:chartOptions=chartOptions v-bind:chartType=chartType v-bind:chartMiddleMiddleClass=chartMiddleMiddleClass v-bind:chartMiddleRightClass=chartMiddleRightClass></vue-chartjs-drawchart>
              </div>
            </div>
          </div>
          <vue-chartjs-bottom v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-bottom>
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

      // console.log(self.chart[i].chartData);
      // console.log(self.chart[i].chartOptions);
      // console.log(self.chart[i].chartTop);
      // console.log(self.chart[i].chartTopClass);
      // console.log(self.chart[i].chartMiddleMiddleClass);
      // console.log(self.chart[i].chartMiddleRightClass);
      // console.log(self.chart[i].chartBottomValue);
      // console.log(i);

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

      // self.topClass = self.chart[0].chartTopClass;
      })
      .catch((error) => {
      console.log(error);
    });
  },
  template:`
    <div>
      <vue-chartjs-multitabs-frame v-bind:chartData=chart[2].chartData v-bind:chartOptions=chart[2].chartOptions v-bind:chartTop=chart[2].chartTop v-bind:chartType="doughnutChartType" v-bind:chartTopClass=chart[2].chartTopClass v-bind:chartMiddleMiddleClass=chart[2].chartMiddleMiddleClass v-bind:chartMiddleRightClass=chart[2].chartMiddleRightClass v-bind:chartBottomValue=chart[2].chartBottomValue></vue-chartjs-multitabs-frame>
      <vue-chartjs-singlechart-frame v-bind:chartData=chart[0].chartData v-bind:chartOptions=chart[0].chartOptions v-bind:chartTop=chart[0].chartTop v-bind:chartType="pieChartType" v-bind:chartTopClass=chart[0].chartTopClass v-bind:chartMiddleMiddleClass=chart[0].chartMiddleMiddleClass v-bind:chartMiddleRightClass=chart[0].chartMiddleRightClass v-bind:chartBottomValue=chart[0].chartBottomValue></vue-chartjs-singlechart-frame>
      <vue-chartjs-singlechart-frame v-bind:chartData=chart[1].chartData v-bind:chartOptions=chart[1].chartOptions v-bind:chartTop=chart[1].chartTop v-bind:chartType="barChartType" v-bind:chartTopClass=chart[1].chartTopClass v-bind:chartMiddleMiddleClass=chart[1].chartMiddleMiddleClass v-bind:chartMiddleRightClass=chart[1].chartMiddleRightClass v-bind:chartBottomValue=chart[1].chartBottomValue></vue-chartjs-singlechart-frame>
    </div>`
});
