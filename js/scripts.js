//BUSINESS END LOGIC

function play() {
    for (var y = 0; y <= newNumber; y++) {
        if ((y % 3 === 0) && (y % 5 === 0)) {
            $("#result").append("ping pong");
        } else if (y % 3 === 0) {
            $("#result").append("ping");
        } else if (y % 5 === 0) {
            $("#result").append("pong");
        } else {
            $("#result").append(y);
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