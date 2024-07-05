var sec = 00;
var milliSec = 00;
var addSec = document.getElementById("sec");
var addMilliSec = document.getElementById("milliSec");
var goBtn = document.getElementById("btn-go");
var startBtn = document.getElementById("btn-start");
var stopBtn = document.getElementById("btn-stop");
var retryBtn = document.getElementById("btn-retry");
var message = document.getElementById("message");
var milliInterval;
var secInterval;

startBtn.disabled = true;
stopBtn.disabled = true;
retryBtn.disabled = true;

startBtn.classList.add("btnNull");
stopBtn.classList.add("btnNull");
retryBtn.classList.add("btnNull");

// Function to start timer

function startTimer() {
  milliSec++;
  if (milliSec < 9) {
    addMilliSec.innerHTML = "0" + milliSec;
  }
  if (milliSec > 9) {
    addMilliSec.innerHTML = milliSec;
  }
  if (milliSec > 99) {
    sec++;
    addSec.innerHTML = "0" + sec;
    milliSec = 0;
    addMilliSec.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    addSec.innerHTML = sec;
  }
}

// To make our buttons operational
goBtn.onclick = function () {
  message.classList.add("null");
  goBtn.classList.add("goNull");
  startBtn.disabled = false;
  stopBtn.disabled = true;
  retryBtn.disabled = true;
  startBtn.classList.remove("btnNull");
  stopBtn.classList.remove("btnNull");
  retryBtn.classList.remove("btnNull");
};
startBtn.onclick = function () {
  milliInterval = setInterval(startTimer, 1);
  secInterval = setInterval(startTimer, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  retryBtn.disabled = false;
  message.classList.add("null");
};
stopBtn.onclick = function () {
  clearInterval(milliInterval);
  clearInterval(secInterval);
  message.classList.remove("null");
  message.classList.add("message");
  stopBtn.disabled = true;
  startBtn.disabled = true;
  retryBtn.disabled = false;

  if (sec < 5) {
    message.innerHTML = "Try again,you pressed stop button earlier!";
  }
  else if (sec >= 5 && sec < 6) {
    message.innerHTML = "Unreal! Your reflex falls between 150-200ms.";
  }
  else if (sec >= 6 && sec < 7) {
    message.innerHTML = "Cool, your reflex falls between 200-250ms.";
  }
  else {
    message.innerHTML = "Alas! You better need to look after your reflexes.";
  }
};
retryBtn.onclick = function () {
  clearInterval(milliInterval);
  clearInterval(secInterval);
  sec = 0;
  milliSec = 0;
  addSec.innerHTML = "0" + 0;
  addMilliSec.innerHTML = "0" + 0;
  message.classList.add("null");
  retryBtn.disabled = true;
  stopBtn.disabled = true;
  startBtn.disabled = false;
  message.classList.remove("null");
  message.classList.add("message");
  message.innerHTML =
    " Try to stop the timer between 5 to 7 seconds as faster as you can.";
};
