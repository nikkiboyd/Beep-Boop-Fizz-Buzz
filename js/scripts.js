//Business Logic
function robotSpeak(inputNumber) {
  var parsedInputNumber = parseInt(inputNumber)
  var userString = inputNumber
  var userArray = userString.split("");
    if (parsedInputNumber % 3 === 0) {
      divisibleByThree(inputNumber);
    } else if (userArray.includes("1")) {
      containsOne(inputNumber);
    } else if (userArray.includes("0")) {
      containsZero(inputNumber);
    }
  };

function divisibleByThree(inputNumber) {
  var parsedInputNumber = parseInt(inputNumber)
  if (parsedInputNumber % 3 === 0)
  $("#divisible-by-three").show();
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

function countToInput(a, b) {
  var allNumbers = [];
  for (var i = a; i <= b; i++) {
    allNumbers.push(i);
  }
  return allNumbers.toString();
}

//User Interface Logic
$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
    event.preventDefault();
    var userInput = $("#user-input").val();
    var robotOutput = robotSpeak(userInput);
    $("#result").text(robotOutput);
  });
});
