// В JavaScript есть особый случай, когда строгое сравнение одной и той же переменной возвращает false! Попробуйте узнать, что нужно сделать, чтобы получить такой результат!

// var x = something;
// x === x // returns false!
// Напишите функцию, которая будет возвращать значение, для которого строгое сравнение даст false!

// In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!

// var x = something;
// x === x // returns false!
// Write a function which will return value for which strict comparison will give false!

function findStrangeValue() {
  return NaN;
}

function findStrangeValue() {
  return "batman" - 1
}