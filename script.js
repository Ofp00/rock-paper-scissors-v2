let playerSelectionPrompt = prompt('Type ROCK, PAPER or SCISSORS'); // Choice of the player 
let computerSelection = getComputerChoice(); // Choice of the computer
let playerSelection = playerSelectionPrompt.toUpperCase(); // Makes it so that it the input is always Upper Case
let playerScore = 0; // Players score
let computerScore = 0; // Computers score

function getComputerChoice() { // Function that randomly chooses rock paper or scissors
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'ROCK';
    } else if (randomNumber === 1) {
        return 'PAPER';
    } else if (randomNumber === 2) {
        return 'SCISSORS';
    }
} 

function playRound() {  // Change 'You won...' to console.log and make the return 'tie' ' player' or 'computer' like dev-emad-777 on github
    if (playerSelection === 'ROCK' && computerSelection === 'ROCK') {  
            console.log('Tie! Rock equals Rock');
            return 'tie'; 
        } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
            console.log('Tie paper equals Paper');
            return 'tie'; 
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
            console.log('Tie! Scissors equals Scissors');
            return 'tie'; 
        } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
            console.log('You lost! Rock beats paper');
            return 'computer'; 
        } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
            console.log('You won! Paper beats Rock');
            return 'player';
        } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
            console.log('You lost! Scissors  beats paper');
            return 'computer'; 
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
            console.log('You won! Scissors beat Paper');
            return 'player';
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
            console.log('You lost! Rock beats Scissors');
            return 'computer'; 
        } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
            console.log('You won! Rock beats Scissors');
            return 'player';
        }
}

function playGame(){ // kikade pa dors coding schools video for denna funktion 
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

 /* function playGame() {
    let  winner;
    winner = playRound(playerSelection, computerSelection);
    
    if (winner == 'computer') {
        return 'pc won';
    } else if (winner == 'player') {
        return 'player won';
    }
} */
playGame();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection)); // Returns the result of the round in textformat
console.log(playerScore); // Returns the score of the player