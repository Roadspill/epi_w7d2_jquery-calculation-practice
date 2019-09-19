// Gobal Variables


// Start of javascript
$(document).ready(function() {
  $("form#characterQuiz").submit(function(event) {
    var number1 = parseInt($("#age")).val();
    var number1 = parseInt($("#favoriteColor").val());
    var number2 = parseInt($("#favoriteFood").val());

    console.log(number1);
    console.log(number2);
    console.log(number3);


    event.preventDefault();
    // var operator = $("input:radio[name=operator]:checked").val();
    // var result;
    // if (operator === "add") {
    //   result = add(number1, number2);
    // } else if (operator === "subtract") {
    //   result = subtract(number1, number2);
    // } else if (operator === "multiply") {
    //   result = multiply(number1, number2);
    // } else if (operator === "divide") {
    //   result = divide(number1, number2);
    // }
    // $("#output").text(result);
  });
});
