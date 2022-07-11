Summation
Write a program that finds the summation of every number from 1 to num.The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

Суммирование
Напишите программу, которая находит сумму всех чисел от 1 до num.Число всегда будет положительным целым числом больше 0.

Например:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

let summation = function (num) {
  return num * (num + 1) / 2
}

let summation = function (num) {
  let sum = 0
  for (let i = 0; i <= num; i++) {
    sum += i
  }
  return sum;
}