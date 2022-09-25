var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    if (currentNumber < 10)
        currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    if (currentNumber > 0)
        currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}