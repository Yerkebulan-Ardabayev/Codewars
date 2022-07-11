// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// Незавершенный цикл — исправление ошибки № 1
// О нет, Тимми создал бесконечный цикл! Помогите Тимми найти и исправить ошибку в его незавершенном цикле for!

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number;) {
    newArray.push(counter);
  }

  return newArray;
}

function createArray(number) {
  let newArray = [];

  for (let i = 0; i <= number; i++) {
    newArray.push(i);
  }

  return newArray.slice(1);
}
console.log(createArray(4))