//funtion computerPlay
//Randomly returns rock, paper, or scissors
function computerPlay() {
    let num = (Math.floor(Math.random()*3) + 1);
    return num;
}

alert(computerPlay());

//function playRound (playerSelection, computerSelection)
//return winner/loser + message
//make playerSelection case insensitive

//function game
//plays a 5 round game
//use prompt() to get user input
