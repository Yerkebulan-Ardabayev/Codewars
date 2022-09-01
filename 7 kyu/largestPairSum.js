// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19]-- > 42(= 23 + 19)
// [99, 2, 2, 23, 19]-- > 122(= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// Дана последовательность чисел, найти наибольшую сумму пар в последовательности.

//   Например

// [10, 14, 2, 23, 19]-- > 42(= 23 + 19)
// [99, 2, 2, 23, 19]-- > 122(= 99 + 23)
// Входная последовательность содержит как минимум два элемента, и каждый элемент является целым числом.

const largestPairSum = numbers => {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}