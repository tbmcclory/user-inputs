$(document).ready(function() {
  $("#height").change(function() {
    var heightString = $("#height").val();
    var height = parseInt(heightString);

    if (height >= 4.5) {
      $("#answer").text("Ok, hop in!");
    } else {
    	$("#answer").text("Nope, sorry kid.");
    }
  });
});