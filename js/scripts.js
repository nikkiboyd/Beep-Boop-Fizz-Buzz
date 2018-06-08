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
  var splitNumber = string.split("");
  var numberOne = splitNumber.includes("1")
  if (numberOne === true) {
    $("#boop").show();
  }
}

function containsZero(inputNumber) {
  var string = inputNumber
  var splitNumber = string.split("");
  var numberZero = splitNumber.includes("0")
  if (numberZero === true) {
    $("#beep").show();
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
