//funtion computerPlay
//Randomly returns rock, paper, or scissors
function computerPlay() {
    let num = (Math.floor(Math.random()*3) + 1);
    let answer;
    if (num === 1) {
        answer = 'rock';
    } else if (num === 2) {
        answer = 'paper';
    } else {
        answer = 'scissors';
    }
    return answer;
}

alert(computerPlay());

//function playRound (playerSelection, computerSelection)
//return winner/loser + message
//make playerSelection case insensitive

//function playRound(playerSelection, computerSelection) {
//    if playRound.toLowerCase() ==
//}

//function game
//plays a 5 round game
//use prompt() to get user input
