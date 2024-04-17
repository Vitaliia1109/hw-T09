
let intervalID;
let counter = 0;

let startCounter = function() {
    intervalID = setInterval(() => { 
        counter++;
        console.log(counter);
    }, 1000);
}

function stopCounter() {
    clearInterval(intervalID);
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

startButton.addEventListener("click", startCounter);

stopButton.addEventListener("click", stopCounter);
