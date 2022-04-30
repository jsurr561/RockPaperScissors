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
    string = toString(string);
    string = string.toLowerCase(); //stopped working after writing game()
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
        return 'tie';  //Currently returns 'tie' regardless of replay outcome...
    } else {
        console.log(capitalize(computerSelection) + ' beats ' + capitalize(playerSelection) + ', You Lose!');
        return 'lose';
    }
}

function game() {
    let win;
    let loss;

    for (let i = 0; i < 5; i++) {
        playRound(prompt('Select Item'), computerPlay);
        if (playRound() == 'win') {
            win++;
        } else {
            loss++;
        }
    }

    win = toString(win);
    loss = toString(loss);

    let result = "Player: " + win + " Computer: " + loss; // win and loss both print as "object Undefined"

    if (win > loss) {
        console.log(result + " You Win!");
    } else {
        console.log(result + " You Lose!");
    }
}

game();
//function game
//plays a 5 round game
//use prompt() to get user input
