// Write a function which calculates the average of the numbers in a given list.

//   Note: Empty arrays should return 0.

//   Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.

// Примечание. Пустые массивы должны возвращать 0.

export const findAverage = (array: number[]): number => {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => a + b) / array.length;
} 