var app = new Vue({
  el: '#block',
  data: {
    blocks: ""
  },
  mounted: function () {
    this.getData();
  },
  methods: {
    getData: function () {
       var self = this;
    $.get( "jsonData.json", function(data) {
        self.blocks = data;
    });
    }
  }
});

