/**
 * @file
 */
Vue.component('vue-chartjs-top-test', {
  template: '<h5>fix header123123123123123132313123123132312323</h5>'
})
/**
 * @file
 */
Vue.component('vue-chartjs-top', {
  props: ['chartTop'],
  template: '<div v-html="chartTop"></div>'
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
Vue.component('vue-chartjs-multitabs-test-frame', {
  props: ['chart'],
  template:`
    <div class="vue-chart-block">
      <li v-for="chartdetail in chart">{{chartdetail}}</li>
    </div>`
});

/**
 * @
 */
Vue.component('vue-chartjs-multitabs-frame', {
  props: ['chartData', 'chartOptions', 'chartTop', 'chartType', 'chartTopClass', 'chartMiddleMiddleClass', 'chartMiddleRightClass', 'chartBottomValue', 'chartBottomValue'],
  template:`
    <div class="vue-chart-block">
      <div v-bind:class="chartTopClass">
        <div class="margin-top-16">
          <vue-chartjs-top v-bind:chartTop=chartTop></vue-chartjs-top>
        </div>

        <div class="border-1-e7e7e7">
          <vue-chartjs-multiTabs v-bind:chartData=chartData v-bind:chartOptions=chartOptions v-bind:chartType=chartType v-bind:chartMiddleMiddleClass=chartMiddleMiddleClass v-bind:chartMiddleRightClass=chartMiddleRightClass v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-multiTabs>
        </div>
        <vue-chartjs-bottom v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-bottom>

      </div>
    </div>`
});

/**
 * @
 */
Vue.component('vue-chartjs-singlechart-frame', {
  props: ['chartData', 'chartOptions', 'chartTop', 'chartType', 'chartTopClass', 'chartMiddleMiddleClass', 'chartMiddleRightClass', 'chartBottomValue', 'chartBottomValue'],
  template:`
    <div class="vue-chart-block">
      <div v-bind:class="chartTopClass">
        <div class="margin-top-16">
          <vue-chartjs-top v-bind:chartTop=chartTop></vue-chartjs-top>
        </div>

        <div class="border-1-e7e7e7">
          <div v-if="">
            <vue-chartjs-multiTabs v-bind:chartData=chartData v-bind:chartOptions=chartOptions v-bind:chartType=chartType v-bind:chartMiddleMiddleClass=chartMiddleMiddleClass v-bind:chartMiddleRightClass=chartMiddleRightClass v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-multiTabs>
          </div>
          <div>
            <vue-chartjs-drawchart v-bind:chartData=chartData v-bind:chartOptions=chartOptions v-bind:chartType=chartType v-bind:chartMiddleMiddleClass=chartMiddleMiddleClass v-bind:chartMiddleRightClass=chartMiddleRightClass v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-drawchart>
          </div v-else>
            </div>
        <vue-chartjs-bottom v-bind:chartBottomValue="chartBottomValue"></vue-chartjs-bottom>

      </div>
    </div>`
});

/**
 *
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
  props: ['chartData', 'chartOptions', 'chartType', 'chartMiddleMiddleClass', 'chartMiddleRightClass'],
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
    <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#chart1">chart 1</a></li>
              <li><a data-toggle="tab" href="#chart2">chart 2</a></li>
              <li><a data-toggle="tab" href="#chart3">chart 3</a></li>
              <li><a data-toggle="tab" href="#chart4">chart 4</a></li>
            </ul>
            <div class="tab-content">
              <div id="chart1" class="tab-pane fade in active">
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
    chartTop: "",
    chart: [

    ]

  },
  created: function () {
    var self = this;
    var countChart = 0;
    axios.get('jsonData_bkup.json').then((response) => {
      // countChart = response.data.contentSection.length;

      // response.data.contentSection = [];
      // for(var i = 0; i < countChart; i++) {
        // self.chart[0] = response.data.contentSection[0];

        // self.chart[i].chartData = response.data.contentSection[0].blockmiddle[0].tabmiddle[0];
        // self.chart[i].chartOptions = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddle.chartOptions;
        // self.chart[i].chartTop = response.data.contentSection[i].top.value;
        // self.chart[i].chartTopClass = response.data.contentSection[i].top.class;
        // self.chart[i].chartMiddleMiddleClass = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddleClass;
        // self.chart[i].chartMiddleRightClass = response.data.contentSection[i].middle.middleMiddle.middleMiddleRightClass;
        // self.chart[i].chartBottomValue = response.data.contentSection[i].bottom.value;

        // self.chart[i] = response.data.contentSection[i];
        // console.log(response.data);
        self.chartTop = response.data.contentSection[0].top.value;
        console.log(response.data.contentSection[0].top.value);
        // console.log(response.data.contentSection[0]);
        // console.log(response.data.contentSection[1]);
        // console.log(response.data.contentSection[2]);
        // console.log(self.chart[0]);

      // }

      // <vue-chartjs-multitabs-frame v-bind:chartData=chart[2].chartData v-bind:chartOptions=chart[2].chartOptions v-bind:chartTop=chart[2].chartTop v-bind:chartType="doughnutChartType" v-bind:chartTopClass=chart[2].chartTopClass v-bind:chartMiddleMiddleClass=chart[2].chartMiddleMiddleClass v-bind:chartMiddleRightClass=chart[2].chartMiddleRightClass v-bind:chartBottomValue=chart[2].chartBottomValue></vue-chartjs-multitabs-frame>
      // <vue-chartjs-singlechart-frame v-bind:chartData=chart[0].chartData v-bind:chartOptions=chart[0].chartOptions v-bind:chartTop=chart[0].chartTop v-bind:chartType="pieChartType" v-bind:chartTopClass=chart[0].chartTopClass v-bind:chartMiddleMiddleClass=chart[0].chartMiddleMiddleClass v-bind:chartMiddleRightClass=chart[0].chartMiddleRightClass v-bind:chartBottomValue=chart[0].chartBottomValue></vue-chartjs-singlechart-frame>
      // <vue-chartjs-singlechart-frame v-bind:chartData=chart[1].chartData v-bind:chartOptions=chart[1].chartOptions v-bind:chartTop=chart[1].chartTop v-bind:chartType="barChartType" v-bind:chartTopClass=chart[1].chartTopClass v-bind:chartMiddleMiddleClass=chart[1].chartMiddleMiddleClass v-bind:chartMiddleRightClass=chart[1].chartMiddleRightClass v-bind:chartBottomValue=chart[1].chartBottomValue></vue-chartjs-singlechart-frame>




// <vue-chartjs-pie v-bind:chartData=chart[0].middle.middleMiddle.middleMiddleMiddle.chartData v-bind:chartOptions=chart[0].chartOptions v-bind:chartTop=chart[0].chartTop v-bind:chartType="doughnutChartType" v-bind:chartTopClass=chart[0].chartTopClass></vue-chartjs-pie>
// <vue-chartjs-multitabs-test-frame v-bind:chart=chart[0]></vue-chartjs-multitabs-test-frame>
      // self.topClass = self.chart[0].chartTopClass;
      })
      .catch((error) => {
      console.log(error);
    });
  },
  template:`
    <div>
      <vue-chartjs-top v-bind:chartTop=chartTop></vue-chartjs-top>
    </div>`
});
