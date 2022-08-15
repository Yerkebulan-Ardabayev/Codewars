// Sum of the first nth term of Series

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

//   Series: 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 + 1 / 16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

//   Examples: (Input-- > Output)
// 1 -- > 1 -- > "1.00"
// 2 -- > 1 + 1 / 4 -- > "1.25"
// 5 -- > 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 -- > "1.57"

// Задача:
// Ваша задача — написать функцию, которая возвращает сумму следующих рядов до n - го члена(параметра).

//   Series: 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 + 1 / 16 +...
// Правила:
// Вам нужно округлить ответ до 2 знаков после запятой и вернуть его как строку.

// Если заданное значение равно 0, оно должно вернуть 0, 00.

// В качестве аргументов вам будут предоставлены только натуральные числа.

//   Примеры: (Ввод-- > Вывод)
// 1 -- > 1 -- > "1.00"
// 2 -- > 1 + 1 / 4 -- > "1.25"
// 5 -- > 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 -- > "1.57"

function SeriesSum(n) {
  if (0 == n) return "0.00"
  let s = 1;
  for (let i = 1; i < n; i++) s += 1 / (1 + 3 * i);
  return `${s.toFixed(2)}`;
}