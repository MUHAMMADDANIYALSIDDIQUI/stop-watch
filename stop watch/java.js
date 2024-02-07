let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").innerHTML = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
    }

    isRunning = !isRunning;
}


function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("startStop").innerHTML = "Start";
    updateTime();  
}

function updateTime() {
    if (seconds >= 59) {
        seconds = -1; // Reset seconds to 0 on the next line
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    seconds++;

    const display = document.getElementById("display");
    display.innerHTML =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}
