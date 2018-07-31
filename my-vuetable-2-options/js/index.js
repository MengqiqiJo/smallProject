Vue.use(VueTables.ClientTable);
new Clipboard('.btn');
new Vue({
  el: "#people",
  data: {
    columns: [],
    data: [],
    options: {

    }
  },
  created: function () {
    var self = this;
    axios.get('getJsonData2.php').then((response) => {
      // self.options = response.data.options;
      self.columns = response.data.columns;
      self.data = response.data.data;

    })
    .catch((error) => {
      console.log(error);
    });
  },
  methods: {
    copyTextArea() {
      this.$refs.text.select();
      document.execCommand('copy');
    }
  }

})


