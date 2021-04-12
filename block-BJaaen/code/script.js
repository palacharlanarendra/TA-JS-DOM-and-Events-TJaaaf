let userInput = "";
let computerInput = "";
let root = document.querySelector(".user_choice");
root.addEventListener("click",handleEvent);
let message = document.querySelector(".message");
let userScore = 0;
let computerScore = 0;
let user_score = document.querySelector(".user_score");
let computer_score = document.querySelector(".computer_score");
function handleEvent(event){
    userInput = event.target.innerText;
    console.log(userInput);
    let array=["rock","paper","scissor"];
    let getRandomInt=(max)=> {
        return Math.floor(Math.random() * max);
    };
    let randomNumber = getRandomInt(array.length);
    computerInput = array[randomNumber];
    console.log(computerInput);
    if(computerInput==userInput){
        message.innerText="Tie";
    }
    if(computerInput=="rock"){
        if(userInput=="paper"){
            message.innerText="user won";
            userScore+=1;
            user_score.innerText=userScore;
        }
    }
    if(computerInput=="rock"){
        if(userInput=="scissor"){
            message.innerText="computer won";
            computerScore+=1;
            computer_score.innerText=computerScore;
        }
    }
    if(computerInput=="paper"){
        if(userInput=="rock"){
            message.innerText="computer won";
            computerScore+=1;
            computer_score.innerText=computerScore;
        }
    }
    if(computerInput=="paper"){
        if(userInput=="scissor"){
            message.innerText="user won";
            userScore+=1;
            user_score.innerText=userScore;
        }
    }
    if(computerInput=="scissor"){
        if(userInput=="rock"){
            message.innerText="user won";
            userScore+=1;
            user_score.innerText=userScore;
        }
    }
    if(computerInput=="scissor"){
        if(userInput=="paper"){
            message.innerText="computer won";
            computerScore+=1;
            computer_score.innerText=computerScore;
        }
    }
      
}


