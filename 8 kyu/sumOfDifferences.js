// Sum of differences in array

// Your task is to sum the differences between consecutive pairs in the array in descending order.

//   Example
// [2, 1, 10]-- > 9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0(Nothing in Haskell, None in Rust).

// Ваша задача — просуммировать различия между последовательными парами в массиве в порядке убывания.

//   Пример
// [2, 1, 10]-- > 9
// В порядке убывания: [10, 2, 1]

// Сумма: (10 - 2) + (2 - 1) = 8 + 1 = 9

// Если массив пуст или содержит только один элемент, результат должен быть 0(Nothing в Haskell, None в Rust).

const sumOfDifferences = (arr) => arr.length > 0 || arr.length === 1 ? ((arr[0] - arr[1]) + (arr[1] - arr[2])) * (-1) : 0;

const sumOfDifferences = (arr) => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

console.log(sumOfDifferences([-3, -2, -1]))
console.log(sumOfDifferences([1, 2, 10]));