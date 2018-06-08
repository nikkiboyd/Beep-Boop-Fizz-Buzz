//Business Logic
function robotSpeak() {
  }

function divisibleByThree(inputNumber) {
  if (inputNumber % 3 === 0) {
  $("#divisible-by-three").show();
  }
}

function containsOne(inputNumber) {
  var string = inputNumber
  var numberOne = string.indexOf("1")
  if (numberOne === 0) {
    $("#boop").show();
  }
}

//User Interface Logic
$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
    event.preventDefault();
    var userInput = $(parseInt("#user-input").val());
    var robotOutput = robotSpeak(userInput);
    $("#result").text(robotOutput);
  });
});
