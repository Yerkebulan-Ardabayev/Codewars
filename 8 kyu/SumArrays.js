// Sum Arrays

// Write a function that takes an array of numbers and returns the sum of the numbers.The numbers can be negative or non - integer.If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел.Числа могут быть отрицательными или не целыми.Если массив не содержит чисел, вы должны вернуть 0.

// Примеры
// Вход: [1, 5.2, 4, 0, -1]
// Выход: 9.2

// Вход: []
// Выход: 0

// Вход: [-2.398]
// Выход: -2.398

// Предположения
// Вы можете считать, что вам даны только цифры.
// Вы не можете предположить размер массива.
// Вы можете предположить, что вы получили массив, и если массив пуст, верните 0.
// Что мы тестируем
// Мы тестируем базовые циклы и математические операции.Это для новичков, которые только изучают циклы и математические операции.
// Продвинутым пользователям это может показаться очень простым, и они могут легко записать это в одну строку.

function sum (numbers) {
  "use strict";
  return numbers.reduce((e, r) => {return t + n}, 0);
};

const sum = n => n.reduce((a, b) => a + b, 0);

function sum(numbers) {
  let sum = 0; 

  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];

  return sum;
}
console.log(sum([1, 5.2, 4, 0, -1]));