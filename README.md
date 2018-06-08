Program will say "I'm sorry, Dave. I'm afraid I can't do that." if the input number is divisible by 3.
  input: 30
  output: "I'm sorry, Dave. I'm afraid I can't do that."

  input % 3

Program will say "Boop" if the number contains a 1.
  input: 10
  output: "Boop"

  var str = "10";
  var n = str.includes("1");

Program will say "Beep" if the number contains a 0.
  input: 20
  output: "Beep"

  var str = "20";
  var n = str.includes("2");

Program will return a list of numbers from 0 to the inputted number if none of the below conditions are met.
  input: 4
  output: 0, 1, 2, 3, 4

  may need to parseInt this one:
  function countToInput(userInput) {
    for(var i = 1; i <= userInput; i++) {
        console.log(i);
    }
}

countToInput();
