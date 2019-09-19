// Gobal Variables
var quizCalc = function(number1, number2, number3) {
  return ((number1 + number2 + number3) % 4)
};

// Start of javascript
$(document).ready(function() {
  $("form#characterQuiz").submit(function(event) {
    event.preventDefault();
    var yourName = $("#firstName").val();
    var number1 = parseInt($("#age").val());
    var number2 = parseInt($("#favoriteColor").val());
    // var number2 = parseInt($("#favoriteFood").val());
    var number3 = $("input:radio[name=favoriteFood]:checked").val();

    var result = quizCalc(number1, number2, number3);

    if ( result === 0 ) {
      $("#output h2 #name").text(yourName);
      $("#output h2 #seinfeldCharacter").text("Elaine");
    } else if (result === 1) {
      $("#output h2 #name").text(yourName);
      $("#output h2 #seinfeldCharacter").text("Jerry");
    } else if (result === 2) {
      $("#output h2 #name").text(yourName);
      $("#output h2 #seinfeldCharacter").text("Kramer");
    } else if (result === 3) {
      $("#output h2 #name").text(yourName);
      $("#output h2 #seinfeldCharacter").text("Newman");
    } else {
      $("#output").text('Make sure you enter an integer for your age. ie: 24');

    }


    // Debugging
    // console.log(number1);
    // console.log(number2);
    // console.log(number3);



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
