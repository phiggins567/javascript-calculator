$(document).ready(function() {
  var number = "";
  var newnumber = "";
  var operator = "";
  var total = "0";
  var display = $("#display");
  

  $("#operators button").prop("disabled", true);
  
  $("#clearall").click(function() {
      number = "";
      newnumber = "";
      display.html("0");
    $("#operators button").prop("disabled", true);
  });
  
  $("#clear").click(function() {
    number = number.slice(0, (number.length - 1));
    $("#display").html(number);
  });
  
  $("#numbers button").not("#clear, #clearall").click(function(){
    number += $(this).html();
    $("#display").html(number);
    $("#operators button").not("#equals").prop("disabled", false);
  });
  
  $("#operators button").not("#equals").click(function() {
    operator = $(this).html();
    newnumber = number;
    number = "";
    display.html(operator);
  });
  
  $("#operators button").not("#equals").click(function() {
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
    display.html(total);
    number = newnumber;
    newnumber = "";

    $(this).prop("disabled", true);
  });
  
  display.html(total);
  
  
});