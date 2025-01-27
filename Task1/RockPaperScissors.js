const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let scorePlayer1=0;
let scorePlayer2=0;


// function to play
const play=(player1,player2)=>{
    if(player1==player2){
       console.log('Its a Tie')
       return;
    }
    else if((player1=='rock'&&player2=='paper')){
        scorePlayer2++;
    }
    else if(player1=='rock'&&player2=='scissors'){
             scorePlayer1++;
    }
    else if(player1=='paper'&&player2=='rock'){
        scorePlayer1++;
    }
    else if(player1=='paper'&&player2=='scissors'){
        scorePlayer2++;
    }
    else if(player1=='scissors'&&player2=='paper'){
        scorePlayer1++;
    }
    else if(player1=='scissors'&&player2=='rock'){
        scorePlayer2++;
    }
}


// function for generating choices
const getComputerChoice=()=>{
    let choice=Math.floor(Math.random()*3);
    if(choice==0){
        return 'rock';
    }
    else if(choice==1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}


// function for taking user input
const getUserChoice=()=>{
    return new Promise((resolve) => {
        rl.question('Enter Your Choice =', (input) => {
          if (input=='rock'||input=='paper'||input=='scissors') {
            resolve(input.toLowerCase());
          } else {
            console.log('Invalid Choice, please try again.');
            resolve(getUserChoice());
          }
        });
      });
}


// play game
const playGame=async ()=>{
   
    for(let i=0;i<5;i++){
        let player1=await getUserChoice();
        let player2=getComputerChoice();
        console.log(`Player 1: ${player1}`);
        console.log(`Player 2: ${player2}`);
        play(player1,player2);
        console.log(`Score Player 1: ${scorePlayer1}`);
        console.log(`Score Player 2: ${scorePlayer2}`);
        console.log('-----------------------------');
    }
    rl.close();
    if(scorePlayer1 > scorePlayer2){
        console.log(`Player 1 is winner: ${scorePlayer1}`);
    }
    else if(scorePlayer2 > scorePlayer1){
        console.log(`Player 2 is winner: ${scorePlayer2}`);
    }
    else{
        console.log('Its a Tie');
    }
}

playGame();