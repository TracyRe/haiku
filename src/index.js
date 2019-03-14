import $ from 'jquery';
import "./css/styles.css";
// import { } from "./js/backend.js";

$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();
    const userNameInput = $("#name").val();
    const userInput = $("#poem").val();
    const splitEntry = userInput.split("\n");
    if (splitEntry.length === 3){
      $(".name-output").html(userNameInput)
      $(".entry-output").html(userInput.replace(/\n/g, '<br>'));
      } else {
      $(".entry-output").html("");
      alert("Make sure your poem is three lines long");
    }
  });
});
