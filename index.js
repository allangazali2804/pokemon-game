// Agar game memiliki musik di background, best practicenya adalah harus memiliki play and pause.
var x = document.getElementById("myAudio");

function playAudio() {
  x.loop = true;
  x.play();
}

function pauseAudio() {
  x.pause();
}

window.addEventListener("load", function(){
    x.play();
    x.loop = true;
})


//Deklarasi variabel button
var startButton = document.getElementById("button");
var restartButton = document.getElementById("restart");

// Event Listener untuk Start Button
startButton.addEventListener("click", start)

function start(){
    var player1 = prompt("Enter Player 1 Name!");
    var player2 = prompt("Enter Player 2 Name!");
    document.querySelector(".player-1").innerHTML = player1;
    document.querySelector(".player-2").innerHTML = player2;
    var randomNumber1 = Math.floor(Math.random() * 10 + 1);
    var randomImage1 = "images/img-" + randomNumber1 + ".png";
    var randomNumber2 = Math.floor(Math.random() * 10 + 1);
    var randomImage2 = "images/img-" + randomNumber2 + ".png";
    document.querySelector(".img-1").setAttribute("src", randomImage1);
    document.querySelector(".img-2").setAttribute("src", randomImage2);

let winner = "";
if (randomNumber1 > randomNumber2){
    winner += player1 + " is the winner!";
} else if(randomNumber1 < randomNumber2) {
    winner += player2 + " is the winner!";
} else {
    winner += "Draw!";
}
document.getElementById("winner").innerHTML = winner;

    startButton.innerHTML = "";
    restartButton.innerHTML = "Click here to restart!"
}

// Event Listener untuk Restart Button
restartButton.addEventListener("click", function(){
    restartButton.innerHTML = "";
    start();
})