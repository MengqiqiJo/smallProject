'use strict';

Vue.component('doughnutchart', {
  // props: ['text'],
  template: '<canvas class="col-md-3" ref="canvas" width="40px" height="40px"></canvas>',
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
  }
});

Vue.component('piechart', {
  // props: ['text'],
  template: '<canvas class="col-md-3" ref="canvas" width="40px" height="40px"></canvas>',
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

new Vue({
  el: "#app",

});