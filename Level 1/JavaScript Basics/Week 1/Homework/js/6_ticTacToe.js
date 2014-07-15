var player = 1;
var numberOfCells = 3;
var cells = (!cells) ? document.getElementsByTagName("td") : cells;

function changeCellState() {
    this.className = "player" + player;
    checkIfWon();
    
    player = (player == 1) ? 2 : 1;
    document.getElementById("playerName").innerHTML = "Player " + player;
}

function checkIfWon() {
    // checks if someone has won the game

    // for(var i = 0; i < numberOfCells; i++) {
    //     for(var j = 0; j < numberOfCells; j++) {
    //         if(cells[i] == )
    //     }
    // }
}

function resetGame() {
    player = 1;
    for (var i = 0; i < cells.length; i++) { 
        var cell = cells[i];
        cell.className = "";
        cell.addEventListener("click", changeCellState);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    resetGame();
});