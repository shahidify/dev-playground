// setTimeout(function() {
//   document.body.appendChild(amazingDiv);
// }, 2000);

function gimmeNewText() {
  let amazingDiv = document.createElement('div');
  amazingDiv.style.display = 'inline-block';
  let para = document.createElement('p');
  para.classList.add('para');
  para.textContent = ' 🔥 ';
  amazingDiv.appendChild(para);

  document.body.appendChild(amazingDiv);
}

function gimmeNewImage() {
  let amazingDiv = document.createElement('div');
  amazingDiv.style = 'display: inline-block;';
  let img = document.createElement('img');
  img.src = 'https://source.unsplash.com/100x100/?peace';
  img.classList.add('img');
  img.style.borderRadius = '50%';
  amazingDiv.appendChild(img);

  const targetEle = document.querySelector('.main');
  targetEle.insertAdjacentElement('beforeend', amazingDiv);

  //document.body.appendChild(amazingDiv);
}

setTimeout(function() {
  document.querySelector('.para1').remove();
}, 3000);
