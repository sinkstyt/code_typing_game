import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Complete } from './js/mode-complete.js';
import { validater } from './js/validate-char.js';

$(document).ready(function() {
  let game = new Complete();
  $("#promptOut").text(game.prompt1[0]);
  // jquery event listener for any kind of change to the user input, calls the validater function:
  // $('#inputField').on("input", ));
  $("#inputField").on("input", function() {
    $("#visual").html(validater($("#inputField").val(), game.prompt1[game.turnsTaken]));
  });

  $("form").submit(function(event) {
    event.preventDefault();
    game.userInput.push($("#inputField").val());
    if (game.checkAnswer() === "correct") {
      $("#correct").show();
      $("#inputField").val("");
      setTimeout(function() {
        $("#correct").hide();
        $("#promptOut").text(game.prompt1[game.turnsTaken]);
      } , 1000);
    } else {
      $("#incorrect").show();
      $("#inputField").val("");
      game.userInput.pop();
      setTimeout(function() {
        $("#incorrect").hide();
      } , 1000);
    }

  });
});

// validater($("#inputField").val(), game.prompt1[game.turnsTaken]