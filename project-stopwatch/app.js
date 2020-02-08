const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

stopButton.style.display = 'none';

let intervalId;
let timerTime = 00;
let isTimerRunning = false;

// listen to click
function startTimer() {
  if (isTimerRunning) return;

  isTimerRunning = true;
  intervalId = setInterval(incrementTimer, 1000);
  stopButton.style.display = 'inline-block';
  startButton.style.display = 'none';
}
function stopTimer() {
  if (!isTimerRunning) return;

  isTimerRunning = false;
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
  const numberOfSecs = timerTime % 60;

  secs.innerText = zeroPadding(numberOfSecs);
  mins.innerText = zeroPadding(numberOfMins);
}

function zeroPadding(number) {
  return number < 10 ? '0' + number : number;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
