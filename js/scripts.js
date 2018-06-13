//Business Logic
function robotSpeak(inputNumber) {
  var parsedInputNumber = parseInt(inputNumber)
  var userString = inputNumber
  var userArray = userString.split("");
  if (parsedInputNumber % 3 === 0) {
    return sorryDave;
  } else if (userArray.includes("1")) {
    return boop;
  } else if (userArray.includes("0")) {
    return beep;
  } else {
    countToInput(parsedInputNumber);
  };
};

function countToInput(inputNumber) {
  var allNumbers = [];
  for (var i = 0; i <= inputNumber; i++) {
    allNumbers.push(i);
    var x = document.getElementById("result");
    x.innerHTML = allNumbers.join(", ");
  }
}

//User Interface Logic
var sorryDave = "I'm sorry, Dave. I'm afraid I can't do that.";
var beep = "Beep!"
var boop = "Boop!"

$(document).ready(function() {
  $("#beep-boop").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    var robotOutput = robotSpeak(userInput);
    $("#result").text(robotOutput);
  });
});
