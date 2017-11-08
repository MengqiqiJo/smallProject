<template>

  <canvas v-el:canvas style="width: 100%; height: 200px"></canvas>

</template>

<script>
new Vue({
  el: '#block',

  data: {

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
</script>