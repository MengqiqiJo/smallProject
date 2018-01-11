function openModal(){
  var yearValue = 89;
  $('#myModal-1').modal('show');
  $("#ytd-value-wrapper").text(function(){
      return yearValue;
  });
}

// $(document).ready(function(){
//     $("a").click(function(){
//       $('#myModal-1').modal('show');
//       $("#ytd-value-wrapper").text(function(){
//           return "Old text: ";
//       });
//     });
// });