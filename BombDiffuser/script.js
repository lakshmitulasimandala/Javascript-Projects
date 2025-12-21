let timerElem = document.getElementById("timer");
let defuserElem = document.getElementById("defuser");

let countdown = 10;

let intervalId = setInterval(function(){
    countdown--;
    timerElem.textContent = countdown;
    if(countdown === 0 ){
        timerElem.textContent = "BOOM!";
        clearInterval(intervalId);
    }
}, 1000)

defuserElem.addEventListener("keydown", function(event){
    let userInput = defuserElem.value;
    if(event.key === "Enter" && userInput === "defuse" && countdown !== 0){
        timerElem.textContent = "You Did It !!";
        clearInterval(intervalId);
    }
})

