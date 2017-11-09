'use strict';

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
          datasets: [
            {
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
          datasets: [
            {
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
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [2478,5267,734,784,433]
        }]
      },
        options: {
          legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
        }
      })
    }
  }
});


Vue.component('vue-chartjs-top', {
  template: '<div class="bg-0082ba height-32 width-280 color-fff padding-10">this is the top</div>'
})

new Vue({
  el: "#page-wrapper",

});
