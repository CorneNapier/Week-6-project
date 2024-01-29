//gathers data from the html file.
let display = document.getElementById('display');
let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('secs');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let clear = document.getElementById('clear');

//sets the timer variables to zero.
let numberHr = 0;
let numberMin = 0;
let numberSec = 0;

//This sets the timer variables to show in the timer display whilst using a min of two digits.
function timerDisplay() {
    display.innerHTML = Number(numberHr).toLocaleString('en', { minimumIntegerDigits: 2, useGrouping: false }) + ':' + Number(numberMin).toLocaleString('en', { minimumIntegerDigits: 2, useGrouping: false }) + ':' + Number(numberSec).toLocaleString('en', { minimumIntegerDigits: 2, useGrouping: false });
}
timerDisplay();

//sets timer variables using buttons
hr.addEventListener('click', function increment() {
    if (numberHr >= 23) {
        return numberHr = -1;
    }
    else {
        numberHr++
        timerDisplay();
    }
});

min.addEventListener('click', function increment() {
    if (numberMin >= 59) {
        return numberMin = -1, numberHr++;
    }
    else {
        numberMin++
        timerDisplay();
    }
});

sec.addEventListener('click', function increment() {
    if (numberSec >= 59) {
        return numberSec = -1, numberMin++;
    }
    else {
        numberSec++
        timerDisplay();
    }
});

//resets timer variables and clears the display 
clear.addEventListener('click', function clear() {
    numberHr = 0;
    numberMin = 0;
    numberSec = 0;
    timerDisplay();
});
