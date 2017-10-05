new Vue({
  el: '#app',
  data: {
    datenow: '',
    localStartTime: '',
    localEndTime: ''
  },
  mounted: function () {
    this.gettime();
  },
  methods: {
    gettime: function () {
      // var self = this;
      this.datenow = Math.floor(Date.now() / 1000);
      setInterval(this.gettime, 1000);
    },
    showButton: function (startDate, endDate) {
      var isShow = "false";
      this.localStartTime = startDate;
      this.localEndTime = endDate;
      if (this.datenow > startDate) {
        if (this.datenow < endDate) {
          isShow = true;
        }
      }
      return isShow;
    }
  }
});