$(document).ready(function() {
  var number = "";
  var newnumber = "";
  var operator = "";
  var total = "0";
  var display = $("#display");
  var operatorButton =  $(".operators");

  operatorButton.prop("disabled", true);
  
  $("#clearall").click(function() {
      number = "";
      newnumber = "";
      display.html("0");
    operatorButton.prop("disabled", true);
  });
  
  $("#clear").click(function() {
    number = number.slice(0, (number.length - 1));
    $("#display").html(number);
  });
  
  $(".numbers").click(function(){
    number += $(this).html();
    strLength(number);

    operatorButton.not("#equals").prop("disabled", false);
  });
  
  operatorButton.not("#equals").click(function() {
    operator = $(this).val();
    newnumber = number;
    number = "";
    display.html(operator);
    operatorButton.prop("disabled", true);
  });
  
  operatorButton.not("#equals").click(function() {
    $("#equals").prop("disabled", false);
  });
  
  $("#equals").click(function() {
    number = parseFloat(number);
    newnumber = parseFloat(newnumber);
    switch(operator) {
      case "+":
        newnumber += number;
          break;
        case "-":
        newnumber -= number;
          break;
        case "*":
        newnumber *= number;
          break;
        case "/":
        newnumber /= number;
          break;
    }
    total = newnumber.toString();
    strLength(total);
    number = newnumber;
    newnumber = "";

    $(this).prop("disabled", true);
  });
  
  display.html(total);
  
  function strLength(a) {
      if (a.length > 7) {
          display.html("Err");
          number = "";
          operatorButton.prop("disabled", true);
      } else {
          display.html(a);
      }
  }
  
});