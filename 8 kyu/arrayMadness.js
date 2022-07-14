// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

//   E.g.

//   arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

//   SpeedCode #2 - Безумие массивов
// Задача
// Даны два целочисленных массива a, b, оба из length >= 1, создайте программу, которая возвращает true значение, если сумма квадратов каждого элемента a массива строго больше суммы кубов каждого элемента массива b.

//   Например

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

const arrayMadness = (a, b) => {
  let newArr = a.map((e) => e ** 2).reduce((e, i)=> e + i);
  let newArray = b.map((e) => e ** 3).reduce((e, i) => e + i);
  return newArr > newArray;
}


console.log(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]))

console.log(1 ** 2 + 3 ** 2 + 5 ** 2 + 2 ** 2 + 4 ** 2)
console.log(2 ** 3 + 2 ** 3 + 2 ** 3 + 2 ** 3 + 2 ** 3 + 2 ** 3 + 2 ** 3 + 1 ** 3)

// const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0);