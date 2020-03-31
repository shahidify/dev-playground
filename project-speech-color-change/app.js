const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

let clicker = document.querySelector('#speechInput');
const outputResult = document.querySelector('.output');
let startFlag = false;

clicker.addEventListener('click', e => {
  if (!startFlag) {
    recognition.start();
    startFlag = true;
    outputResult.textContent = 'Listening...';
  }
});

recognition.addEventListener('result', e => {
  console.log(e.results[0][0].transcript);
  const color = e.results[0][0].transcript.replace(' ', '');
  outputResult.textContent = color;
  document.body.style.backgroundColor = color;
  startFlag = false;
});

recognition.addEventListener('end', e => {
  recognition.stop();
  startFlag = false;
});

recognition.addEventListener('error', e => {
  outputResult.textContent = ' Error occured in recognition';
  startFlag = false;
});

recognition.addEventListener('nomatch', e => {
  outputResult.textContent = ' Input does not match';
  startFlag = false;
});
