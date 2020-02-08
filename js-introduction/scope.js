// SCOPE
// Global
// Function
// Block

console.log('Scope');
// What I can access at the time of execution
// Global Scope
// Function scope
// Block scope
// Accidental Global Variable Scope

// function checkVoteStatus() {
//   var age = prompt('Enter you age ?');
//   console.log(age);

//   if (age >= 18) {
//     canVote = true;
//   } else {
//     canVote = false;
//   }
//   console.log('Status : Can vote ? - ', canVote);
// }
// checkVoteStatus();
// console.log('Status : Can vote ? - ', canVote);

// var arr = [1,2,3]
// for (let index = 0; index < arr.length; index++) {
//   const element = array[index];

// }

// function globalTest() {
//   var greeting = 'Hello';
//   let firstname = 'Harry';
//   const lastname = 'Potter';

//   console.log("I'm inside function : ", greeting, firstname, lastname);
// }
// globalTest();
// console.log(greeting, firstname, lastname);
// ---------------------

// function greet() {
//   let msg = 'morning';
//   console.log(msg);

//   function greetMe() {
//     let msg = 'evening';
//     console.log(`Good ${msg}`);
//   }
//   greetMe();

//   console.log(msg);
// }
// greet();

// console.log(msg);

// ----------------

// function checkVoter() {
//   let age = prompt('Enter you age ?');
//   console.log(age);

//   // let canVote;
//   {
//     var canVote = true;
//   }
//   console.log('Status : Can vote ? - ', canVote);
// }

// checkVoter();

// -----------
// function firstFn() {
//   let firstVar = "I'm the first";
//   console.log(firstVar);

//   function secondFn() {
//     let secondVar = "I'm the second";
//     console.log(firstVar, secondVar);

//     function thirdFn() {
//       let thirdVar = "I'm the third";
//       console.log(firstVar, secondVar, thirdVar);
//     }
//     thirdFn();
//   }
//   secondFn();
// }
