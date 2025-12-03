let counter = document.getElementById("counterValue");

function changeTextColor(){
    let val = parseInt(counter.textContent);

    if (val > 0){
        counter.style.color = "green";
    }
    else if (val < 0){
        counter.style.color = "red";
    }
    else{
        counter.style.color = "black";
    }
}

function onIncrement(){
    let prev_counter = counter.textContent;
    let next_counter = parseInt(prev_counter) + 1;
    counter.textContent = next_counter;

    changeTextColor();
}

function onDecrement(){
    let curr_counter = counter.textContent;
    let decr_counter = parseInt(curr_counter) - 1
    counter.textContent = decr_counter;
    
    changeTextColor();
}

function onReset(){
    let reset_counter = 0;
    counter.textContent = reset_counter;

    counter.style.color = "black";
}