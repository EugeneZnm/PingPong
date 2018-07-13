//BUSINESS END LOGIC
var player;

function play() {
    for (var y = 0; y <= newNumber; y++) {
        if ((y % 3 === 0) && (y % 5 === 0)) {
            $("#result").append("<li>ping pong</li>");
        } else if (y % 3 === 0) {
            $("#result").append("<li>ping</li>");
        } else if (y % 5 === 0) {
            $("#result").append("<li>pong</li>");
        } else {
            $("#result").append("<li>y</li>");
        }
    }

}


//USER INTERFACE LOGIC
$(document).ready(function() {
    $("#firstForm").click(function(event) {
        event.preventDefault();
        var newNumber = $("input#numberInput").val();
        play();
        $("#result").append("<li>" + "The result is" + result + "</li>")

    });
});