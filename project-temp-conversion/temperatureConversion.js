// function ftoc(f) {
//   let c = ((f - 32) * 5) / 9;
//   return Math.round(c);
// }
// function ctof(c) {
//   let f = (c * 9) / 5 + 32;
//   return Math.round(f);
// }
// console.log(ctof(30));
// console.log(ftoc(73));

// ARROW FUNCTIONS =>

// const ftoc = f => Math.round(((f - 32) * 5) / 9);

// console.log(ftoc(39));

// 1. input some value in temp input box
// 2. read input box value
// 3. convert
// 4. set value to inputbox

function ftoc() {
  let tempF = document.getElementById('tempf').value;
  let c = ((tempF - 32) * 5) / 9;
  document.getElementById('tempc').value = Math.round(c);
}

function ctof() {
  let tempC = document.getElementById('tempc').value;
  let f = (tempC * 9) / 5 + 32;
  document.getElementById('tempf').value = Math.round(f);
}
