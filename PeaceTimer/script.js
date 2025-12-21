let twentyBtn = document.getElementById("twentySecondsBtn");
let thirtyBtn = document.getElementById("thirtySecondsBtn");
let fortyBtn = document.getElementById("fortySecondsBtn");
let oneMinBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");

let intervalId = null;

function setMomentTimer(count){
    if(intervalId !== null){
        clearInterval(intervalId);
    }
    
    timerText.textContent = count + " seconds Left";
    intervalId = setInterval(function(){
        count -= 1;
        timerText.textContent = count + " seconds Left";
        if(count === 0){
            clearInterval(intervalId);
            timerText.textContent = "Your moment is complete";
        }
    }, 1000);
}

twentyBtn.onclick = function(){
    let count = 20;
    setMomentTimer(count);
}

thirtyBtn.onclick = function(){
    let count = 30;
    setMomentTimer(count);
}

fortyBtn.onclick = function(){
    let count = 40;
    setMomentTimer(count);
}

oneMinBtn.onclick = function(){
    let count = 60;
    setMomentTimer(count);
}




