let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");

const drawGame=()=>{
    msg.innerText="game was draw,play again";
    msg.style.backgroundColor ="black";
};
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        user.innerText=userscore;
        msg.innerText=`you win!,your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor ="green";
    }else{
        compscore++;
        comp.innerText=compscore;
        msg.innerText=`you lost. ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor ="red";

    }
};
const gencompchoice=()=>{
    const options=["stone","paper","scissors"];
    const randIdx= Math.floor(Math.random() *3);
    return options[randIdx];
};
const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    
    if (userchoice === compchoice){
        drawGame();
    }else{
            let userWin=true;
            if(userchoice ==="stone"){
                userWin=compchoice==="paper"?false:true;
            }else if(userchoice==="paper")
                {
                userWin=compchoice==="scissors"?false:true;
                }
                else{
                    userWin=compchoice==="stone"?false:true;
                }
                showWinner(userWin,userchoice,compchoice);

        }
    };
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});