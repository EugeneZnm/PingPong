//BUSINESS END LOGIC
var play = function(newNumber) {
    for (var y = 0; y <= newNumber; y++) {
        if ((y % 3 === 0) && (y % 5 === 0)) {
            return ("ping pong");
        } else if (y % 3 === 0) {
            return ("ping");
        } else if (y % 5 === 0) {
            return ("pong");
        } else {
            return (y);
        }

    }

}


//USER INTERFACE LOGIC
$(document).ready(function() {
    $("form#firstForm").click(function(event) {
        event.preventDefault();
        var newNumber = $("input#numberInput").val();
        var result = play(y);
        $("ul#result").append("<li>" + "The result is" + result + "</li>")

    });
});