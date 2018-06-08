//User Interface Logic
$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
    event.preventDefault();
    var userInput = $("#user-input").val();
    var robotOutput = robotSpeak(userInput);
    $("#result").text(robotOutput);
  });
