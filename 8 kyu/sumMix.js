// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.

// Верните ответ в виде числа.

function sumMix(x) {
  return x.reduce((e, r) => Number(e) + Number(r), 0);
}
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));