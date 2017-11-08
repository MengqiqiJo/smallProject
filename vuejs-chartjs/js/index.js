new Vue({
  el: '.box-body',

  data: {
    labels: [
      "Active",
      "In Development",
      "Completed",
      "On Hold",
      "Canceled"
    ],

    data: [3, 5, 2, 6, 10]
  },

  mounted: function(){
    this.startPie(this.$refs.canvas, 'doughnut');
  },

  methods: {
    startPie: function(canvas, type){

      // init chart.js
      let chart = new Chart(canvas, {
        type: type,
        data: {
          labels: this.labels,
          datasets: [
            {
        data : [45],
        fillColor : "#2fa9e0",
        title : "1(12)",
             },
             {
        data : [12],
        fillColor : "#f24b99",
        title : "2(28)",
             },
             {
        data : [32],
        fillColor : "#37d8b3",
        title : "data3"
             },
             {
        data : [15],
        fillColor : "#bfbfbf",
        title : "data4",
             }]
        },
        options: {
          animation:{
            animateScale:true
          }
        }
      })
      }
  }
});