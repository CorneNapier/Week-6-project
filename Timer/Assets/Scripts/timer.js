let display = document.getElementById('display');
let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('secs');
let start = document.getElementById('start');
let pauseStop = document.getElementById('pause');
let clear = document.getElementById('clear');

let numberHr = 0;
let numberMin = 0;
let numberSec = 0;

//set timer
display.innerHTML = Number(numberHr).toLocaleString('en') + ':' + Number(numberMin).toLocaleString('en') + ':' + Number(numberSec).toLocaleString('en');

hr.addEventListener('click', function increment() {
    display.innerHTML = Number(numberHr).toLocaleString('en') + ':' + Number(numberMin).toLocaleString('en') + ':' + Number(numberSec).toLocaleString('en');
    
    if (numberHr >= 23) {
        return 0;
    }
    else {
        numberHr++

    }
});

min.addEventListener('click', function increment() {
    display.innerHTML = Number(numberHr).toLocaleString('en') + ':' + Number(numberMin).toLocaleString('en') + ':' + Number(numberSec).toLocaleString('en');
    if (numberMin >= 59) {
        return 0;
    }
    else { 
        numberMin++
    }
});

sec.addEventListener('click', function increment() {
    display.innerHTML = Number(numberHr).toLocaleString('en') + ':' + Number(numberMin).toLocaleString('en') + ':' + Number(numberSec).toLocaleString('en');
    if (numberSec >= 59) {
        return 0;
    }
    else {
        numberSec++
    }
});

clear.addEventListener('click', function clear() {
    display.innerHTML = "";
    numberHr = 0;
    numberMin = 0;
    numberSec = 0;
    display.innerHTML = Number(numberHr).toLocaleString('en') + ':' + Number(numberMin).toLocaleString('en') + ':' + Number(numberSec).toLocaleString('en');
})
