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
              data: this.data,
              backgroundColor: [
                "#e25039",
                "#27a86e",
                "#f39c12",
                "#00c0ef",
                "#428dbc"
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
              ]
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