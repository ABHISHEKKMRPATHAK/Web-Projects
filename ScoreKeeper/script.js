let p1Display = document.querySelector("#p1");
let p2Dispay =document.querySelector("#p2");
let player1=document.querySelector("#player1");
let player2=document.querySelector("#player2");
let resetButton=document.querySelector("#reset");
let winningScoreSelect= document.querySelector("#playTo")

let p1Score=0;
let p2Score=0;
let isGameover=false;

let winningScore =  5;


player1.addEventListener("click",()=>{
    if(!isGameover){
        p1Score+=1;
    if(p1Score===winningScore){
         isGameover=true;
    }
    p1Display.innerHTML=p1Score;
    }})


player2.addEventListener("click",()=>{
    if(!isGameover)   {
        p2Score+=1;
        if(p2Score===winningScore){
           isGameover=true;
        }
    } 
p2Dispay.innerHTML=p2Score
})

resetButton.addEventListener('click',reset);
winningScoreSelect.addEventListener('change',function(){
   winningScore=parseInt(this.value);
   reset();
})

function reset(){
    isGameover=false;
    p1Score=0;
    p2Score=0;

    p1Display.innerHTML=p1Score;
    p2Dispay.innerHTML=p2Score;  
}