let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function setTime() {
    time.innerHTML = secondsElapsed;
}

function timer() {
    secondsElapsed++;
    setTime();
}

function startClock() {
    if (interval === null) {  // Prevent multiple intervals
        interval = setInterval(timer, 1000);
    }
}

function stopClock() {
    clearInterval(interval);
    interval = null;
}

function resetClock() {
    clearInterval(interval);
    interval = null;
    secondsElapsed = 0;
    setTime();
}
