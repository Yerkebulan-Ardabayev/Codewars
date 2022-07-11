// Given an array of integers your solution should find the smallest integer.

// For example:

// Given[34, 15, 88, 2] your solution will return 2
// Given[34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

//   Например:

// Учитывая[34, 15, 88, 2], что ваше решение вернется 2
// Учитывая[34, -345, -1, 100], что ваше решение вернется - 345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
