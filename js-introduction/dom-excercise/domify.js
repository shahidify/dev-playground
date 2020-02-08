let parentEle = document.querySelector('.row');

let title = 'Article Title 1';
let imgSrc = 'https://source.unsplash.com/640x480/?laptop';
let imgAlt = 'Laptop image';
let articleText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum debitis ut assumenda perspiciatis, iure necessitatibus omnis aut dolor nam tempore dolorum porro blanditiis earum eos modi quam, dolorem soluta. Quisquam.`;

createArticle(title, imgSrc, imgAlt, articleText);
createArticle(
  'Title Two',
  'https://source.unsplash.com/640x480/?javascript',
  'Javascript image',
  articleText
);
createArticle(title, imgSrc, imgAlt, articleText);
// createArticle();
// createArticle();

function createArticle(titleText, imgSrc, altText, articleText) {
  let article = document.createElement('div');
  article.classList.add('article');
  let title = document.createElement('h2');
  title.textContent = titleText;
  let image = document.createElement('img');
  image.src = imgSrc;
  image.alt = altText;
  image.classList.add('article-image');
  let para = document.createElement('p');
  para.textContent = articleText;
  let tagPara = document.createElement('p');
  let tagSpan = document.createElement('span');
  tagSpan.classList.add('article-tag');
  tagSpan.textContent = 'Learn More';
  tagPara.appendChild(tagSpan);
  article.insertAdjacentElement('afterbegin', title);
  article.insertAdjacentElement('beforeend', image);
  article.insertAdjacentElement('beforeend', para);
  article.insertAdjacentElement('beforeend', tagPara);

  console.log(article);

  parentEle.insertAdjacentElement('beforebegin', article);
}
