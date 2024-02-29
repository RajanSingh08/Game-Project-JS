
let userScore=0;
let compScore=0;

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");

const getCompchoice=()=>{
    const option=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3); //it is a method which genert random val b/w 0to1
    return option[idx];
}

const msg=document.querySelector("#msg");

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw.Play Again";
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win");
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red"
    }

}

const playgame=(userchoice)=>{
    console.log("user-choice",userchoice);

    const compchoice=getCompchoice();

    console.log("comp-choice",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }

    else{

        let userWin=true;

        if(userchoice==="rock"){
            //paper,scissors
            userWin=compchoice==="paper"?false:true;
        }

        else if(userchoice==="paper"){
            //rock,scissors
            userWin=compchoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compchoice==="rock"?false:true;
        }

        showWinner(userWin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{

    const choiceId=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });

})