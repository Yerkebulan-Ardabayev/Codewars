// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Дан массив целых чисел.

// Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.

// Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.

// Пример
// Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]вы должны вернуть [10, -65].

export const countPositivesSumNegatives = (input: any) => {
  if (input === null || input.length === 0) return [];
  let count = 0;
  let sum = 0;
  input.forEach((el: number) => {
    if (el > 0) {
      count++;
    } else {
      sum += el;
    }
  });
  return [count, sum];
};
