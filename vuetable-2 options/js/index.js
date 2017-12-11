Vue.use(VueTables.client, {
  perPage: 25
})

new Vue({
  el: "#vue-tables-options",
  data: {
    tableDetail: ''
  },
  created: function () {
    var self = this;
    axios.get('tableData.json').then((response) => {
        self.tableDetail = response.data;
        console.log(response.data);
      })
      .catch((error) => {
      console.log(error);
    });
  }
})