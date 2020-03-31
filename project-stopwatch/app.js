const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

let intervalId;
let timerTime = 0;

stopButton.style.display = 'none';

function startTimer() {
  intervalId = setInterval(incrementTimer, 1000);

  startButton.style.display = 'none';
  stopButton.style.display = 'inline-block';
}
function stopTimer() {
  clearInterval(intervalId);

  stopButton.style.display = 'none';
  startButton.style.display = 'inline-block';
}
function resetTimer() {
  stopTimer();
  timerTime = 0;
  secs.innerText = '00';
  mins.innerText = '00';
}

function incrementTimer() {
  timerTime++;

  const numberOfMins = Math.floor(timerTime / 60);
  const numberOfSec = timerTime % 60;

  secs.innerText = zeroPadding(numberOfSec);
  mins.innerText = zeroPadding(numberOfMins);
}

function zeroPadding(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
