const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const questionE1 = document.getElementById("question");
const formE1 = document.getElementById("form");
const inputE1 = document.getElementById("input");
const scoreE1 = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
scoreE1.innerText = `score: ${score}`
questionE1.innerText = `what is ${num1} multiplied by ${num2}?`;

const correctans = num1*num2;
formE1.addEventListener("submit",() =>{
    const userAns = +inputE1.value;
    
    if(userAns === correctans ){
        score++;
        updatelocalStorage()
    }
    else{   
        score --;
        updatelocalStorage()
    }
 });


 function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
 }

