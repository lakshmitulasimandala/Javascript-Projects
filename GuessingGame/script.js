let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let random = Math.ceil(Math.random()*100);

console.log(random);
function checkGuess(){
    let guessedNum = parseInt(userInput.value);

    if (guessedNum > random){
        gameResult.textContent = "It's Too High! Try again.";
        gameResult.style.backgroundColor = "#1e2173";
    }
    else if (guessedNum < random){
        gameResult.textContent = "It's Too Low! Try again.";
        gameResult.style.backgroundColor = "#1e2173";
    }
    else if (guessedNum === random){
        gameResult.textContent = "Congratulations u got it right!";
        gameResult.style.backgroundColor = "green";
    }
    else{
        gameResult.textContent = "Provide a Valid Input 1";
        gameResult.style.backgroundColor = "red";
    }
}