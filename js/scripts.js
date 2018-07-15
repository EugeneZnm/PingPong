//BUSINESS END LOGIC
var player;

function play() {
    for (var y = 0; y <= player; y++) {
        if ((y % 3 === 0) && (y % 5 === 0)) {
            $("#result").append("<li>ping pong</li>");
        } else if (y % 3 === 0) {
            $("#result").append("<li>ping</li>");
        } else if (y % 5 === 0) {
            $("#result").append("<li>pong</li>");
        } else {
            $("#result").append("<li>" + y + "</li>");
        }
    }

}


//USER INTERFACE LOGIC
$(document).ready(function() {
    $("#btnFirst").click(function() {
        player = $("#Input1").val();
        $("#result").text('');
        play();
        $("#Input1").val()
        event.preventDefault();
    });



});