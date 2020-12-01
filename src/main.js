import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Complete } from './js/mode-complete.js';

// function setTimeout(onSubmit, 3000) {
//     onSubmit.disabled = true;
//     $(".gameOver").show();
//   }, 3000);
// }

function Timer(event) {
  event.preventDefault();
  setTimeout(function() {
    $(".gameOver").show();
  }, 3000);
}

$("#gamestart").click(Timer());

$(document).ready(function() {
  let game = new Complete();
  $("#promptOut").text(game.prompt1[0]); 
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