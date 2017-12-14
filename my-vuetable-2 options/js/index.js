Vue.use(VueTables.ClientTable);

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
    axios.get('tableData.json').then((response) => {
      // self.options = response.data.options;
      self.columns = response.data.columns;
      self.data = response.data.data;

    })
    .catch((error) => {
      console.log(error);
    });
  }

})


