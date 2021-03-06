createGrid = (x) => {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++){
            $("#container").append("<div class='grid'></div>")
        }
    }
    $(".grid").width(960/x);
    $(".grid").height(960/x);
}


$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function(){
        $(this).css("background-color", "pink");
    })

    $(".newGrid").click(function() {
        promptUser();

        $(".grid").mouseover(function() {
            $(this).css("background-color", "pink");
        })
    })
})

clearGrid = () => {
    $(".grid").remove();
}

promptUser = () => {
    let userPrompt = prompt("How many boxes per side?");
    clearGrid();
    createGrid(userPrompt);
}
