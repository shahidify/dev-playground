(function() {
  const screen = document.querySelector('.screen');
  let buffer = '0';
  let total = 0;
  let prevOp;

  document
    .querySelector('.calc-buttons')
    .addEventListener('click', e => buttonClickFn(e.target.innerText));

  function buttonClickFn(value) {
    isNaN(parseInt(value)) ? handleSymbol(value) : handleNumber(value);
    // re-render;'
    render();
  }

  function handleNumber(value) {
    return buffer === '0' ? (buffer = value) : (buffer += value);
  }

  function handleSymbol(value) {
    switch (value) {
      case 'C':
        buffer = '0';
        total = 0;
        break;
      case '=':
        if (prevOp === null) return;
        calculate(parseInt(buffer));
        prevOp = null;
        buffer = '' + total;
        total = 0;
        break;
      case '←':
        if (buffer.length === 1) {
          buffer = '0';
        } else {
          buffer = buffer.slice(0, buffer.length - 1);
        }
        break;
      default:
        handleMath(value);
    }
  }

  function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if (total === 0) {
      total = intBuffer;
    } else {
      calculate(intBuffer);
    }
    prevOp = value;
    buffer = '0';
  }
  function render() {
    screen.innerText = buffer;
  }
  function calculate(intBuffer) {
    console.log('calculate');
    if (prevOp === '+') {
      total += intBuffer;
    } else if (prevOp === '-') {
      total -= intBuffer;
    } else if (prevOp === 'x') {
      total *= intBuffer;
    } else {
      total /= intBuffer;
    }
  }
})();
