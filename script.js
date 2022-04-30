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

function capitalize(string) {
    string = string.toLowerCase();
    first = string.slice(0,1);
    first = first.toUpperCase();
    string = first + (string.slice(1));
    return string;
}

//function playRound (playerSelection, computerSelection)
//return winner/loser + message
//make playerSelection case insensitive

function playRound(playerSelection, computerSelection) {


    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('Rock beats Scissors, You Win!');
        return 'win';
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log('Scissors beats Paper, You win!');
        return 'win';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('Paper beats Rock, You Win!');
        return 'win';
    } else if (playerSelection == computerSelection) {
        console.log('Tie! Try Again!');
        playRound(prompt('Try Again'), computerPlay());
    } else {
        console.log(capitalize(computerSelection) + ' beats ' + capitalize(playerSelection) + ', You Lose!');
        return 'lose';
    }
}

console.log(playRound(prompt('Select Item'), computerPlay()));

//win Variable Check
//if (console.log(playRound('rock', 'rock')) == undefined) {
//    console.log('Match')
//} else {
//    console.log('Nope!')
//}


//function game
//plays a 5 round game
//use prompt() to get user input
