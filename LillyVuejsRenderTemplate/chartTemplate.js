

var app = new Vue({
    el: "#page-wrapper",
    data: {
      blockData: ""
    },
    created: function () {
      axios.get('jsonData.json').then(function(response) {
        console.log(response.data.contentSection[0]);
        app.blockData = response.data.contentSection[0];
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  });
