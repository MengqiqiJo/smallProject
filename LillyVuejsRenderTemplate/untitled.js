// 'use strict';
// vue.data

// Vue.component('doughnutchart', {

//   mounted: function(){
//     this.startPie(this.$refs.canvas, 'doughnut');
//   },
//   methods: {
//     startPie: function(canvas, type){
//       console.log("lsls-doughnut-02");
//       let chart = new Chart(canvas, {
//         type: type,
//         data: {
//           datasets: [{
//             data : [45, 12, 32, 15],
//             backgroundColor : ["#2fa9e0", "#f24b99", "#37d8b3","#bfbfbf"]
//           }]
//       },
//         options: {
//           animation:{
//             animateScale:false
//           }
//         }
//       })
//     }
//   },
//   template:`
//     <span class="doughnutchart">
//       <span class="col-sm-12 col-md-6 col-lg-6">
//         <div class="margin-left-20 margin-top-16">
//           <div class="border-1-e7e7e7">
//             <vue-chartjs-top></vue-chartjs-top>
//             <div class="margin-50">
//               <canvas ref="canvas"></canvas>
//             </div>
//           </div>
//         </div>
//       </span>
//     </span>`
// });

Vue.component('vue-chartjs-pie', {
  mounted: function(){
    this.startPie(this.$refs.canvas, 'pie');
  },
  methods: {
    startPie: function(canvas, type){
      console.log("lsl-pie");
      let chart = new Chart(canvas, {
        type: type,
        data: {
          datasets: [{
            data : [45, 12, 32, 15],
            backgroundColor : ["#2fa9e0", "#f24b99", "#37d8b3","#bfbfbf"]
          }]
      },
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

Vue.component('vue-chartjs-bar', {
  mounted: function(){
    this.startPie(this.$refs.canvas, 'bar');
  },
  methods: {
    startPie: function(canvas, type){
      console.log("lslslslslslslsls");
      let chart = new Chart(canvas, {
        type: type,
        data: {
          labels: ["1(45)", "2(12)", "3(32)", "4(15)"],
          datasets: [
            {
              backgroundColor: ["#2fa9e0", "#f24b99", "#37d8b3","#bfbfbf"],
              data: [45, 12, 32, 15]
            }
          ]
       },
        options: {
          legend: { display: false },
          responsive: true,
          maintainAspectRatio: false,
      // title: {
      //   display: true,
      //   text: 'Predicted world population (millions) in 2050'
      // }
        }
      })
    }
  },
  template:`
    <div class="doughnutchart">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="margin-left-20 margin-top-16">
          <div class="border-1-e7e7e7">
            <vue-chartjs-top></vue-chartjs-top>
            <div class="margin-50 min-height-382">
              <canvas ref="canvas"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>`
});

Vue.component('vue-chartjs-line', {
  mounted: function(){
    this.startPie(this.$refs.canvas, 'line');
  },
  methods: {
    startPie: function(canvas, type){
      console.log("lslslslslslslsls");
      let chart = new Chart(canvas, {
        type: type,
        data: {
          labels: ["1(45)", "2(12)", "3(32)", "4(15)"],
          datasets: [
            {
              data: [45, 12, 32, 15]
        }]
      },
        options: {
          legend: { display: false },
          responsive: true,
          maintainAspectRatio: false
        }
      })
    }
  },
//   template:`
//     <div class="doughnutchart">
//       <div class="col-sm-12 col-md-6 col-lg-6">
//         <div class="margin-left-20 margin-top-16">
//           <div class="border-1-e7e7e7">
//             <vue-chartjs-top></vue-chartjs-top>
//             <div class="margin-50 min-height-382">
//               <canvas ref="canvas"></canvas>
//             </div>
//           </div>
// //         </div>
// //       </div>
// //     </div>`
// // });

// Vue.component('vue-chartjs-top', {
//   template: '<div class="bg-0082ba height-32 color-fff padding-10">this is the top</div>'
// })

// var app = new Vue({
//   el: "#page-wrapper",
//   data: {
//     blocks: "",
//     option: "",
//     chartType: "",
//     dataset: "",
//   },
//   mounted: function () {
//     this.getData();
//   },
//   methods: {
//     getData: function () {
//       console.log("gettttddddddaaatttaaa111122002");
//       $.getJSON( "jsonData.json").then( function(res) {
//         // this.blocks=res;
//         console.log("gettttddddddaaatttaaa2");
//         // this.option = this.blocks['contentSection'][0].middle.middleMiddle.middleMiddleMiddle.chartOptions
//         // this.chartType = this.blocks['contentSection'][0].middle.middleMiddle.middleMiddleMiddle.chartType
//         // this.dataset = this.blocks['contentSection'][0].middle.middleMiddle.middleMiddleMiddle.chartData
//       });
//       console.log("gettttddddddaaatttaaa33");
//     }
//   }
// });




// template:`
//       <span class="chart-wrapper">
//         <span class="col-sm-12 col-md-6 col-lg-6">
//           <div class="margin-left-20 margin-top-16">
//             <div class="border-1-e7e7e7">
//               <vue-chartjs-top></vue-chartjs-top>
//               <div class="margin-50">
//                 <canvas ref="canvas"></canvas>
//               </div>
//             </div>
//           </div>
//         </span>
//       </span>`




<vue-chartjs-pie v-bind:pieChartData="pieChartData[0]" v-bind:pieChartOptions="pieChartOptions[0]" v-bind:chartTop="pieChartTop[0]" v-bind:chartType="doughnutChartType" v-bind:chartTopClass="pieChartTopClass[0]"></vue-chartjs-pie>
      <vue-chartjs-pie v-bind:pieChartData="pieChartData[1]" v-bind:pieChartOptions="pieChartOptions[1]" v-bind:chartTop="pieChartTop[1]" v-bind:chartType="barChartType" v-bind:chartTopClass="pieChartTopClass[1]"></vue-chartjs-pie>
      <vue-chartjs-pie v-bind:pieChartData="pieChartData[1]" v-bind:pieChartOptions="pieChartOptions[1]" v-bind:chartTop="pieChartTop[1]" v-bind:chartType="lineChartType" v-bind:chartTopClass="pieChartTopClass[1]"></vue-chartjs-pie>
<vue-chartjs-pie v-bind:pieChartData="data" v-bind:pieChartOptions="option" v-bind:chartTop="top" v-bind:chartType="pieChartType" v-bind:chartTopClass="topClass"></vue-chartjs-pie>
