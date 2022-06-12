// Ваша задача — добавить новое свойство usersAnswer к каждому объекту в массиве questions.Значение usersAnswer должно быть установлено равным null. Решение должно работать для массива любой длины.

//   Например:

// var questions = [{
//   question: "What's the currency of the USA?",
//   choices: ["US dollar", "Ruble", "Horses", "Gold"],
//   corAnswer: 0
// }, {
//   question: "Where was the American Declaration of Independence signed?",
//   choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//   corAnswer: 0
// }];
// После добавления свойства результат должен быть:

// var questions = [{
//   question: "What's the currency of the USA?",
//   choices: ["US dollar", "Ruble", "Horses", "Gold"],
//   corAnswer: 0,
//   usersAnswer: null
// }, {
//   question: "Where was the American Declaration of Independence signed?",
//   choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//   corAnswer: 0,
//   usersAnswer: null
// }];
// Массив questionsуже определен для вас и не такой, как в примере.

// usersAnswer to every object in the array questions.The value of usersAnswer should be set to null.The solution should work for array of any length.

// For example:

// var questions = [{
//   question: "What's the currency of the USA?",
//   choices: ["US dollar", "Ruble", "Horses", "Gold"],
//   corAnswer: 0
// }, {
//   question: "Where was the American Declaration of Independence signed?",
//   choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//   corAnswer: 0
// }];
// After adding the property the result should be:

// var questions = [{
//   question: "What's the currency of the USA?",
//   choices: ["US dollar", "Ruble", "Horses", "Gold"],
//   corAnswer: 0,
//   usersAnswer: null
// }, {
//   question: "Where was the American Declaration of Independence signed?",
//   choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//   corAnswer: 0,
//   usersAnswer: null
// }];
// The questions array is already defined for you and is not the same as the one in the example.

let questions = [{
  question: "What's the currency of the USA?",
  choices: ["US dollar", "Ruble", "Horses", "Gold"],
  corAnswer: 0,
  usersAnswer: null,
}, {
  question: "Where was the American Declaration of Independence signed?",
  choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
  corAnswer: 0,
  usersAnswer: null,
}];

function addUsersAnswer(questions) {
  for (let i = 0; i < questions.length; i++) {
  questions[i].usersAnswer = null;
  }
  return questions;
}
console.log(addUsersAnswer(questions));