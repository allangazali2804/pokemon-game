let backgroundMusic = new Audio("pokemonbgm.mp3");
backgroundMusic.play();

var startButton = document.getElementById("button");
var restartButton = document.getElementById("restart");

startButton.addEventListener("click", start)

function start(){
    var player1 = prompt("Enter Player 1 Name!");
    var player2 = prompt("Enter Player 2 Name!");
    document.querySelector(".player-1").innerHTML = player1;
    document.querySelector(".player-2").innerHTML = player2;
    var randomNumber1 = Math.floor(Math.random() * 10 + 1);
    //var randomImage1 = "images/monster" + randomNumber1 + ".png";
    var randomNumber2 = Math.floor(Math.random() * 10 + 1);
    //var randomImage2 = "images/monster" + randomNumber2 + ".png";
    //document.querySelector(".img-1").setAttribute("src", randomImage1);
    //document.querySelector(".img-2").setAttribute("src", randomImage2);

let winner = "";
if (randomNumber1 > randomNumber2){
    winner += player1 + " is the winner!";
} else if(randomNumber1 = randomNumber2) {
    winner += "Draw !";
} else {
    winner += player2 + " is the winner!";
}
document.getElementById("winner").innerHTML = winner;

    startButton.innerHTML = "";
    restartButton.innerHTML = "Click here to restart!"
}




restartButton.addEventListener("click", function(){
    restartButton.innerHTML = "";
    start();
})