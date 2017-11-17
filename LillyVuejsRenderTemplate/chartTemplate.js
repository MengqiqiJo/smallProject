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
  props: ['pieChartData', 'pieChartOptions', 'chartTop', 'chartType', 'chartTopClass'],
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
    pieChartData: function () {
      this.drawChart(this.$refs.canvas, this.chartType, this.pieChartData, this.pieChartOptions);
    },
  },
  template:`
    <div class="vue-chart-block">
      <div v-bind:class="chartTopClass">
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
    pieChartData: [],
    pieChartOptions: [],
    barChartData: "",
    barChartOptions: "",
    pieChartType: "pie",
    doughnutChartType: "doughnut",
    lineChartType: "line",
    barChartType: "bar",
    pieChartTop: [],
    barChartTop: "",
    pieChartTopClass: [],
    barChartTopClass: "",
    data: "",
    option: "",
    top: "",
    topClass: ""
  },
  created: function () {
     var self = this;
     var countChart = 0;
     axios.get('jsonData.json').then((response) => {
       console.log("3333");
       // console.log(countChart);
       countChart = response.data.contentSection.length;
       console.log(countChart);
       for(var i=0; i<countChart; i++) {
        self.pieChartData[i] = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddle.chartData;
        self.pieChartOptions[i] = response.data.contentSection[i].middle.middleMiddle.middleMiddleMiddle.chartOptions;
        self.pieChartTop[i] = response.data.contentSection[i].top.value;
        self.pieChartTopClass[i] = response.data.contentSection[i].top.class;
        console.log(self.pieChartData[i]);
        console.log(self.pieChartOptions[i]);
        console.log(self.pieChartTop[i]);
        console.log(self.pieChartTopClass[i]);
        console.log(i);
       }



        self.data = self.pieChartData[0];
        self.option = self.pieChartOptions[0];
        self.top = self.pieChartTop[0];
        self.topClass = self.pieChartTopClass[0];


       // self.pieChartData = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartData;
       // self.pieChartOptions = response.data.contentSection[0].middle.middleMiddle.middleMiddleMiddle.chartOptions;
       // self.pieChartTop = response.data.contentSection[0].top.value;
       // self.pieChartTopClass = response.data.contentSection[0].top.class;

       // self.barChartTopClass = response.data.contentSection[1].top.class;
       // self.barChartTop = response.data.contentSection[1].top.value;
       // self.barChartData = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartData;
       // self.barChartOptions = response.data.contentSection[1].middle.middleMiddle.middleMiddleMiddle.chartOptions;

       // console.log(self.pieChartOptions);
       // console.log(self.barChartOptions);
     })
     .catch((error) => {
       console.log(error);
     });
  },
  template:`
    <div>
     <vue-chartjs-pie v-bind:pieChartData=pieChartData[1] v-bind:pieChartOptions=pieChartOptions[1] v-bind:chartTop=pieChartTop[1] v-bind:chartType="barChartType" v-bind:chartTopClass="topClass"></vue-chartjs-pie>
      <vue-chartjs-pie v-bind:pieChartData=pieChartData[0] v-bind:pieChartOptions=pieChartOptions[0] v-bind:chartTop=pieChartTop[0] v-bind:chartType="pieChartType" v-bind:chartTopClass="topClass"></vue-chartjs-pie>
    </div>`
});
