var checkedValue = null;
var inputElements = document.getElementsByClassName('messageCheckbox');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
}