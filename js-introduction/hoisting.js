// console.log('Start');

// first function
// function greet() {
//   console.log('Good morning');
// }
// greet(); // function call or function invocation

// parameter and argument
// function multiplier(x, y) {
//   return x * y;
// }
// let result = multiplier(2, 10); // argument
// console.log(result);
// console.log(multiplier(123, 456));

// FUNCTION - FIRST CLASS CITIZEN
//

// Function Expression
// const greetUser = function() {
//   console.log('Hello world');
// };

// Anonymous function
// const newMultiplier = function(x, y) {
//   callshahid();
//   return x * y;
// };
// console.log(newMultiplier(20, 5));

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

// Hoisting
// variable declaration, if using var, are hosted
// variable declaration, if using let or const, are NOT hosted

// console.log(greet);
// var greet = 'Good morning';
// console.log(greet);
greetMe();
greetAgain();
var greetAgain;

function greetMe() {
  console.log('Hello');
}

function greetAgain() {
  console.log('Again Hello');
}
