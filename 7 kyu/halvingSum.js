// Task
// Given a positive integer n, calculate the following sum:

// n + n / 2 + n / 4 + n / 8 + ...
// All elements of the sum are the results of integer division.

//   Example
// 25  => 25 + 12 + 6 + 3 + 1 = 47

// Задача
// Учитывая положительное целое число n, вычислите следующую сумму:

// n + n / 2 + n / 4 + n / 8 + ...
// Все элементы суммы являются результатом целочисленного деления.

//   Пример
// 25  => 25 + 12 + 6 + 3 + 1 = 47

const halvingSum = n => {
  let sum = n;
  while (n > 1) {
    n = Math.floor(n / 2);
    sum += n;
  }
  return sum;
}

const halvingSum = n => n > 1 ? n + halvingSum(n / 2 | 0) : n
