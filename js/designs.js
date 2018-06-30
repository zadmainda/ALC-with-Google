// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    $("#pixelCanvas").html("");
    const height = $("#inputHeight").val();
    const width = $("#inputWeight").val();
    for (i = 0; i < height; i++) {
        $("#pixelCanvas").append("<tr></tr>");
        for (j = 0; j < width; j++) {
            $("#pixelCanvas")
                .children()
                .last()
                .append("<td></td>");
        }
    }

}

$("form#sizePicker").on("submit", function(ev) {
    ev.preventDefault();
    makeGrid();
});


$("#pixelCanvas").on("click", "td", function() {
    $(this).css("background-color", $("#colorPicker").val());
});
