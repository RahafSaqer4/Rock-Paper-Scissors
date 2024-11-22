let x= "rock";
let y= "paper";
let z= "scissors";
let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    random=Math.floor(Math.random()*3);
    if (random===0){
        return x;
    }
    else if (random===1){
        return y;
    }
    else {
        return z;
    }
}

function getHumanChoice(){
    let HumanChoice=prompt("What is you choice", "");
    HumanChoice=HumanChoice.toLowerCase();
    if (HumanChoice===x){
        return x;    
    }
    else if(HumanChoice===y){
        return y;
    }
    else if(HumanChoice===z){
        return z;
    }
}

function playRound(humanChoice,ComputerChoice){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (humanSelection===x){
        if(computerSelection===z){
            humanScore++;
            return "You Win your score is: "+ humanScore + ", Computer score is: " + computerScore
        }
        else if(computerSelection===y){
            computerScore++;
            return "You Lose your score is: "+ humanScore + ", Computer score is: " + computerScore
        }
        else {return "Its Draw your score is: "+ humanScore + ", Computer score is: " + computerScore}
    }
    else if (humanSelection===y){
        if(computerSelection===x){
            humanScore++;
            return "You Win your score is: "+ humanScore + ", Computer score is: " + computerScore
        }
        else if(computerSelection===z){
            computerScore++;
            return "You Lose your score is: "+ humanScore + ", Computer score is: " + computerScore
        }
        else {return "Its Draw your score is: "+ humanScore + ", Computer score is: " + computerScore}
    }
    else if (humanSelection===z){
        if(computerSelection===y){
            humanScore++;
            return "You Win your score is: "+ humanScore + ", Computer score is: " + computerScore
        }
        else if(computerSelection===x){
            computerScore++;
            return "You Lose your score is: "+ humanScore + ", Computer score is: " + computerScore
        }
        else {return "Its Draw your score is: "+ humanScore + ", Computer score is: " + computerScore}
    }
}

function playGame(){
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    if (computerScore>humanScore){
        return "Game Over!, Your Score is "+ humanScore + " Computer Score is " + computerScore
    }
    else if (computerScore<humanScore){
        return "Congrats! You Win, Your Score is "+ humanScore + ", Computer Score is " + computerScore
    }
    else { return "Its a Draw"} 
}
console.log(playGame());