(function() {
  let inputItem = document.querySelector('#input');
  inputItem.onkeyup = function(e) {
    if (e.keyCode === 13) {
      if (inputItem.value) {
        addItem(inputItem);
      }
    }
  };

  function addItem(item) {
    let ul = document.querySelector('#list');
    let li = document.createElement('li');
    let textNode = document.createTextNode(inputItem.value);
    li.appendChild(textNode);
    ul.appendChild(li);
    inputItem.value = '';
    li.onclick = function(e) {
      e.target.remove();
    };
  }
})();
