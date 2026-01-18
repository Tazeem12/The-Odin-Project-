const prompt=require('prompt-sync')();

function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    if(choice==0){
        return "rock";
    }
    else if(choice==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
//console.log("computer choice:",getComputerChoice());

function getHumanChoice(){
    let input=prompt("Enter your choice: ");
    if((input=="rock")||
    (input=="paper")||
    (input=="scissors")){
        return input;
    }
    else{
        console.log("Please enter a valid choice:rock,paper,scissors.")
    }
}
console.log("computer choice:",getComputerChoice());

var humanScore=0;
var computerScore=0;
function playRound(computerSelection,humanSelection){
    if(computerSelection==humanSelection){
        console.log("Its a Tie");
    }
    else if((humanSelection=="scissors" && computerSelection=="rock")||
(humanSelection=="rock" && computerSelection=="paper")||
(humanSelection=="paper" && computerSelection=="scissors")
){
    computerScore++;
    console.log("You Lose");
}
else if((humanSelection=="rock" && computerSelection=="scissors")||
(humanSelection=="paper" && computerSelection=="rock")||
(humanSelection=="scissors" && computerSelection=="paper")){
       humanScore++;
       console.log("You Wins");
}
}
let humanInput=getHumanChoice();
let computerInput=getComputerChoice();

playRound(computerInput,humanInput);
console.log(computerScore,humanScore);