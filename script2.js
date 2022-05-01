//Rock Paper Scissors, v1.0
//JD Surrett 4/30/22

function capitalize(string) {
    string = string.toString();
    string = string.toLowerCase(); //stopped working after writing game()
    first = string.slice(0,1);
    first = first.toUpperCase();
    string = first + (string.slice(1));
    return string;
}

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

    }
    if (win > loss) {
        console.log('You win the match!')
    } else if (win < loss) {
        console.log('You lose the match!')
    } else {
        console.log('Error at end of game()')
    }
}

game()