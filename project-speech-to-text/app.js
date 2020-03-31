const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

let para = document.createElement('p');
const content = document.querySelector('.content');
content.appendChild(para);

recognition.addEventListener('result', e => {
  console.log(e);
  const transcript = e.results[0][0].transcript;

  if (transcript.includes('stupid')) {
    para.textContent = transcript.replace('stupid', '🤬');
  } else {
    para.textContent = transcript;
  }

  if (e.results[0].isFinal) {
    para = document.createElement('p');
    content.appendChild(para);
  }
});

recognition.addEventListener('end', recognition.start);
recognition.start();
