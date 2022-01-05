var signs = ["R", "S", "P"];
var ties = 0
var wins = 0
var losses = 0

var game = function() {
// Initial prompt to play and enter choice
let play = prompt("Let's play Rock, Paper, Scissors! Enter R, P or S to play!");

var randomNumber = function(max) {
    return Math.floor(Math.random() * max);
}
// get random number
var computerChoice = randomNumber(3);

// based on random number, what does computer choose from signs array
if (computerChoice === 0) {
    window.alert("Computer chose Rock!")
}
else if (computerChoice === 1) {
    window.alert("Computer chose Scissors!")
}
else if (computerChoice === 2) {
    window.alert("Computer chose Paper!")
};

// compare player's choice to computer choice
if (play.toUpperCase() === signs[computerChoice]) {
    window.alert("Tie!");
    ties++;
}
else if (
    (play.toUpperCase() == "R" && signs[computerChoice] == "S") || (play.toUpperCase() == "S" && signs[computerChoice] == "P") || (play.toUpperCase() == "P" && signs[computerChoice] == "R") 
) {
    window.alert("You Win!"); 
    wins++
}
else if (
    (play.toUpperCase() == "R" && signs[computerChoice] == "P") || (play.toUpperCase() == "S" && signs[computerChoice] == "R") || (play.toUpperCase() == "P" && signs[computerChoice] == "S") 
) {
    window.alert("You Lose!");
    losses++;
};

// Give score and ask to play again
if (window.confirm("Score:\nTies: " + ties + "\nWins: " + wins + "\nLosses: " + losses +
"\n\nDo you want to play again?")) {
    game();
}
}

game();