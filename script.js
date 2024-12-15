let x= "rock";
let y= "paper";
let z= "scissors";
let humanScore=0;
let computerScore=0;
let HumanChoice="";
const paper =document.querySelector(".paper");
const rock =document.querySelector(".rock");
const scissors =document.querySelector(".scissors");
const yourChoice = document.querySelector(".yourChoice");
const computerChoice = document.querySelector(".computerChoice");
const yourScore= document.querySelector("#yourScore");
const computerScore1= document.querySelector("#computerScore");
const middle= document.querySelector(".middle");
const playGame1=document.querySelector("#button");
const on=document.getElementsByClassName("on");
const onPlay=document.getElementsByClassName("onPlay");
const playAgain=document.getElementById("playAgain");
const photo=document.getElementsByClassName("photo");
const result=document.getElementById("result");
const up=document.getElementById("up")
const down=document.getElementById("down")
startGame()

function getComputerChoice(){
    random=Math.floor(Math.random()*3);
    if (random===0){
        computerChoice.innerHTML='<img src="images/rock.png">';
        return x;
    }
    else if (random===1){
        computerChoice.innerHTML='<img src="images/paper.png">';
        return y;
    }
    else {
        computerChoice.innerHTML='<img src="images/scissors.png">';
        return z;
    }
}
function getHumanChoice(HumanChoice){
    if (HumanChoice===x){
        yourChoice.innerHTML='<img src="images/rock.png">';
        return x;    
    }
    else if(HumanChoice===y){
        yourChoice.innerHTML='<img src="images/paper.png">';
        return y;
    }
    else if(HumanChoice===z){
        yourChoice.innerHTML='<img src="images/scissors.png">';
        return z;
    }
}
function playRound(humanChoice,ComputerChoice){
    const humanSelection = getHumanChoice(HumanChoice);
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
    paper.addEventListener("click",function(){
        HumanChoice="paper";
        playRound();
        winOrLose();
    });
    rock.addEventListener("click",function(){
        HumanChoice="rock";
        playRound();
        winOrLose();
    
    });
    scissors.addEventListener("click",function(){
        HumanChoice="scissors";
        playRound();
        winOrLose();
    }); 
    down.style.display="flex"
    up.style.display="flex";
}
function endGame(){
    for (let i=0;i<on.length;i++){
        on[i].style.display="block"
    }
    for (let i=0;i<onPlay.length;i++){
        onPlay[i].style.display="none"
    }  
    down.style.display="none"
    up.style.display="none"
    humanScore=0;
    computerScore=0; 
}
function winOrLose(){
    yourScore.innerHTML=`Your Score Is:${humanScore} `;
    computerScore1.innerHTML=`Computer Score Is:${computerScore}`;
    if (humanScore ===5 ){
        endGame();
        result.innerHTML="<p>Congrats! You Win</p>";}
    else if( computerScore===5 ){
        endGame();
        result.innerHTML="<p>Game Over! You lose</p>" 
    }
}
function startGame(){
    for (let i=0;i<onPlay.length;i++){
            onPlay[i].style.display="none"
        }  
    for (let i=0;i<photo.length;i++){
            photo[i].style.display="none"
        }
    down.style.display="none"
    up.style.display="none";
}
playAgain.addEventListener("click",function(){
    for (let i=0;i<on.length;i++){
        on[i].style.display="none";
    }
    for (let i=0;i<onPlay.length;i++){
        onPlay[i].style.display="flex";
    }
    down.style.display="flex"
    up.style.display="flex"
    humanScore=0;
    computerScore=0;
    yourScore.innerHTML=`Your Score Is:${humanScore} `;
    computerScore1.innerHTML=`Computer Score Is:${computerScore}`;
    yourChoice.innerHTML='';
    computerChoice.innerHTML='';
    })
playGame1.addEventListener("click",function(){
    playGame()
    playGame1.style.display="none"
    for (let i=0;i<on.length;i++){
        on[i].style.display="none";
    }
    for (let i=0;i<onPlay.length;i++){
        onPlay[i].style.display="flex";
    }
    down.style.display="flex"
    })

