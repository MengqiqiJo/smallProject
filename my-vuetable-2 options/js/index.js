Vue.use(VueTables.client, {
  perPage: 25
})

new Vue({
  el: "#vue-tables-options",
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
  }

})


