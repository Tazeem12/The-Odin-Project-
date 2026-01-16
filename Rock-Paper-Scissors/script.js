const prompt =require('prompt-sync')();
function getHumanChoice(){
    let value=prompt("Enter your choice");
    
    if(value="rock"){
        return "rock";
    }
    else if(value="paper"){
        return "paper";
    }
    else {
        return "scissors";
    } 
}
console.log("human choice=",getHumanChoice());
var humanselection=getHumanChoice();
//var humanselection=/humanselection/i;

let humanscore=0;
let computerscore=0;

function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    if (choice==0){
        return "rock";
    }
    else if (choice==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
var computerselection=getComputerChoice();
console.log("computer choice=",getComputerChoice());


function playRound(humanChoice,computerChoice){
  //  humanChoice=/humanChoice/i;
    if(humanselection==computerselection){
        console.log("Its a draw");
    }
    if(
    (humanselection=="rock" && computerselection=="scissors") ||
    (humanselection =="paper" && computerselection=="rock") ||
    (humanselection=="scissors" && computerselection=="paper"))
    {console.log("You Wins");
        humanscore++;
    }
    if(
    (humanselection=="rock" && computerselection=="paper") ||
    (humanselection=="paper" && computerselection=="scissors")||
    (humanselection=="scissors" && computerselection=="rock"))
    {console.log("You Lose");
        computerscore++;
    }
}
   
    /*else if(humanselection=="rock" && computerselection=="scissors"){
        console.log("You Wins");
        return humanscore++;
    }
    else if(humanselection=="paper" && computerselection=="rock"){
        console.log("You Wins");
        return humanscore++;
    }
    else if(humanselection=="paper" && computerselection=="scissors"){
        console.log("You Lose");
        return computerscore++;
    }
    else if(humanselection=="scissors" && computerselection=="rock"){
        console.log("You Lose");
        return computerselection++;
    }
    else if(humanselection=="scissors" && computerselection=="paper"){
        console.log("You Wins");
        return humanscore++;
    }
    else{
        console.log("Wrong inputs");
    }
}*/
playRound(humanselection,computerselection);
console.log(humanscore,computerscore);



