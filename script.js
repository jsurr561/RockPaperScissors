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

//Capitalize function currently not in use due to bugs (Object Undefined)
function capitalize(string) {
    string = toString(string);
    string = string.toLowerCase(); //stopped working after writing game()
    first = string.slice(0,1);
    first = first.toUpperCase();
    string = first + (string.slice(1));
    return string;
}

//Plays one round of Rock Paper Scissors and returns whether the player won.

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
        //console.log('Tie! Try Again!');
        return 'tie';  //Currently returns 'tie' regardless of replay outcome...
    } else {
        console.log(computerSelection + ' beats ' + playerSelection + ', You Lose!'); //Would like to capitalize output
        return 'lose';
    }
}
//playRound test
//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {
    let win = 0;
    let loss = 0;

    for (let i = 0; i <= 1; i++) { //wrong number of loops?
        const computerSelection = computerPlay();
        const playerSelection = prompt('Select Item');

        playRound(playerSelection, computerSelection);
        if (playRound() == 'win') {
            win++;
        } else if (playRound() == 'lose') {
            loss++;
        } else if (playRound() == 'tie') {
            playRound(prompt('Tie! Try Again'), computerSelection)
        }
    }

    let result = "Player: " + win + " Computer: " + loss;

    if (win > loss) {
        console.log(result + " You Win the Match!");
    } else {
        console.log(result + " You Lose the Match!");
    }
}

game();
//function game
//plays a 5 round game
//use prompt() to get user input
