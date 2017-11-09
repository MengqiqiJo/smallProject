'use strict';
// vue.data

Vue.component('doughnutchart', {

  mounted: function(){
    this.startPie(this.$refs.canvas, 'doughnut');
  },
  methods: {
    startPie: function(canvas, type){
      console.log("lslslslslslslsls");
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
  template: `<canvas ref="canvas"></canvas>`
});

Vue.component('vue-chartjs-pie', {
  // props: ['text'],
  template: '<canvas ref="canvas"></canvas>',
  mounted: function(){
    this.startPie(this.$refs.canvas, 'pie');
  },
  methods: {
    startPie: function(canvas, type){
      console.log("lslslslslslslsls");
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
  }
});

Vue.component('vue-chartjs-bar', {
  // props: ['text'],
  template: '<canvas ref="canvas"></canvas>',
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
        }]
      },
        options: {
          legend: { display: false },
          // responsive: true,
          // maintainAspectRatio: false,
      // title: {
      //   display: true,
      //   text: 'Predicted world population (millions) in 2050'
      // }
        }
      })
    }
  }
});


Vue.component('vue-chartjs-top', {
  template: '<div class="bg-0082ba height-32 color-fff padding-10">this is the top</div>'
})

new Vue({
  el: "#page-wrapper",

});
