// function openModal(){
//   var yearValue = 89;
//   $('#myModal-1').modal('show');
//   $("#ytd-value-wrapper").text(function(){
//       return yearValue;
//   });
// }

// $(document).ready(function(){
//   console.log("0000");
//     $.getJSON("tabValue.json", function (result) {
//       console.log("1111");
//       $("#aLink").click(function(){
//         console.log("2222");
//         $('#myModal-1').modal('show');
//         console.log("3333");

//         $("#ytd-value-wrapper").text(function(){
//             return result.firstTab[1].tabNumber + result.firstTab[1].tabContent;
//         });

//       });
//     });
// });


$(document).ready(function() {
  console.log("ready");
  $("#aLink").click(function() {
    $.getJSON("tabValue.json", function (result) {
      $('#myModal-1').modal('show');
      $("#ytd-value-wrapper").text(function() {
        return result.firstTab[1].tabNumber + result.firstTab[1].tabContent;
      });
    });
  });
});
