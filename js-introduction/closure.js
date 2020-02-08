// console.log('Closure');
// let myname = 'Harry Potter';

// function outerFn() {
//   let firstname = 'Shahid';
//   console.log('Hello ', firstname);

//   function innerFn() {
//     let lastname = 'Khan';
//     console.log(`Hello ${firstname} ${lastname} and ${myname}`);
//   }
//   return innerFn;
// }

// let someFn = outerFn();
// someFn();
// -------------

// function outerFn(greeting) {
//   let name = 'Shahid';

//   function innerFn() {
//     console.log(`${greeting} ${name}`);
//   }

//   return innerFn;
// }

// let inner = outerFn('Good evening');
// inner();

// Multiplication Table

// function multiplierFactory(firstMultiplier) {
//   return function multix(secondMultiplier) {
//     return firstMultiplier * secondMultiplier;
//   };
// }

// function multiplicationFactory(firstMultiplier) {
//   let taxValue = 100;
//   return function(secondMultiplier) {
//     return firstMultiplier * secondMultiplier + result;
//   };
// }

// const muliple5 = multiplicationFactory(5);
// const muliple15 = multiplicationFactory(15);
// const muliple17 = multiplicationFactory(17);

// console.log(muliple5(3));
// console.log(muliple15(13));
// console.log(muliple17(13));

// CricBookGame

// Two Players - round robin
// add if turn score is 2, 4, 6
// whoever score most after 5 turn

function cricBookGame() {
  let total = 0;
  let turns = 0;
  return function(score) {
    turns++;
    if (turns > 5) {
      return `FINAL SCORE is ${total}`;
    } else {
      total = total + score;
      return `${turns} - Your current score is ${total}`;
    }
  };
}

const playerOne = cricBookGame();
const playerTwo = cricBookGame();
