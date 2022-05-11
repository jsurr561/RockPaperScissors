//Rock Paper Scissors, v1.0
//JD Surrett 4/30/22

//Adds scoreboard to html
const scoreboard = document.querySelector('#scoreboard');
const score = document.createElement('p');
score.textContent = 'Player: 0 Computer: 0'
scoreboard.appendChild(score);

//Convenience Capitalize function
function capitalize(string) {
    string = string.toString();
    string = string.toLowerCase(); 
    first = string.slice(0,1);
    first = first.toUpperCase();
    string = first + (string.slice(1));
    return string;
}

//Randomly determines the computer's choice
function computerPlay() {
    let num = Math.floor(Math.random()*3) + 1;
    let answer;
    switch (num) {
        case 1:
            answer = 'rock';
            break;
        case 2:
            answer = 'paper';
            break;
        case 3:
            answer = 'scissors';
            break;
        default: 'Error in computerPlay'
    }
    return answer;
}

//Plays one round of RPS
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            
            console.log(capitalize(playerSelection) + " beats " + capitalize(computerSelection) + ", You win this round!");
            return 'win';
        } else if (playerSelection == computerSelection) {
            console.log('You Tied, Try Again!');
            return 'tie';
        } else {
            console.log(capitalize(playerSelection) + " loses to " + capitalize(computerSelection) + ", You lose this round.");
            return 'lose';
        }
}

//Plays a best-of-5 game of rps
function game() {
    let win = 0;
    let loss = 0;

    for(let i=0; i<5; i++) {
        const computerChoice = computerPlay();
        const playerChoice = prompt('Choose Your Weapon!');

        let result = playRound(playerChoice, computerChoice);

        if (result == 'win') {
            win++;
        } else if (result == 'lose') {
            loss++;
        } else if (result == 'tie') {
            i--;
        } else {
            console.log('Error in game() _if_ loop')
        }

        console.log(`Player: ${win} Computer: ${loss}`);
        if (win >= 3 || loss >= 3) break;

    }
    if (win > loss) {
        console.log('You win the match!')
    } else if (win < loss) {
        console.log('You lose the match!')
    } else {
        console.log('Error at end of game()')
    }
}

//Adds event listener to each button that calls playRound(button.id)
const btn = Array.from(document.querySelectorAll('.choiceButton'));
btn.forEach(button => button.addEventListener('click', () => playRound(button.id, computerPlay())));

//