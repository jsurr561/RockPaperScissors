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
            
            console.log(playerSelection + " beats " + computerSelection + ", You win this round!");
            return 'win';
        } else if (playerSelection == computerSelection) {
            console.log('You Tied!');
            return 'tie';
        } else {
            console.log(playerSelection + " loses to " + computerSelection + ", You lose this round.");
            return 'lose';
        }
}

function game() {
    let win = 0;
    let loss = 0;

    for(let i=0; i<5; i++) {
        const computerChoice = computerPlay();
        const playerChoice = prompt('Select Item');

        let result = playRound(playerChoice, computerChoice);

        if (result == 'win') {
            win++;
        } else if (result == 'lose') {
            loss++;
        } else if (result == 'tie') {
            i--; //not sure if this works, if not probably need to call playRound again somehow
        } else {
            console.log('Error in game() if loop')
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