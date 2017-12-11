Vue.use(VueTables.client, {
  perPage: 25
})

new Vue({
  el: "#vue-tables-options",
  data: {
    columns: [],
    data: [],
    options: {sortable: ['option','type']}
  },
  created: function () {
    var self = this;
    axios.get('tableData.json').then((response) => {
      self.columns = response.data.columns;
      self.data = response.data.data;
      // self.options = response.data.options;
      console.log(self.columns);
      console.log(self.data);
      console.log(self.options);
    })
    .catch((error) => {
      console.log(error);
    });
  }

})