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
    } else {
      countToInput(parsedInputNumber);
  };
};

function divisibleByThree(inputNumber) {
  var parsedInputNumber = parseInt(inputNumber)
  if (parsedInputNumber % 3 === 0)
  // $("#divisible-by-three").show();
    document.getElementById("result").innerHTML = "I'm sorry, Dave. I'm afraid I can't do that.";
  }

function containsOne(inputNumber) {
  var string = inputNumber
  var splitNumber = string.split("");
  var numberOne = splitNumber.includes("1")
  if (numberOne === true) {
    // $("#boop").show();
    document.getElementById("result").innerHTML = "Boop!";
  }
}

function containsZero(inputNumber) {
  var string = inputNumber
  var splitNumber = string.split("");
  var numberZero = splitNumber.includes("0")
  if (numberZero === true) {
    // $("#beep").show();
    document.getElementById("result").innerHTML = "Beep!";
  }
}

function countToInput(inputNumber) {
  var allNumbers = [];
  for (var i = 0; i <= inputNumber; i++) {
    allNumbers.push(i);
    var x = document.getElementById("result");
    x.innerHTML = allNumbers.join(", ");
  }
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
