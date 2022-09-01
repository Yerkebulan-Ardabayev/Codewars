// Task
// Given an array of integers, Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

//   Notes
// Array / list size is at least 2.

// Array / list numbers could be a mixture of positives, negatives also zeroes.

//   Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10  =  50.

//   adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) ==>  return -14
// Explanation:
// The maximum product obtained from multiplying - 2 * 7 = -14, and they're adjacent numbers in the array.


// Задача
// Учитывая массив целых чисел, Найдите максимальное произведение, полученное от умножения 2 соседних чисел в массиве.

//   Заметки
// Размер массива / списка не менее 2.

// Числа массива / списка могут быть как положительными, так и отрицательными, а также нулями.

//   Ввод >> Примеры вывода
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Объяснение:
// Максимальный продукт, полученный от умножения 2 * 3 = 6, и они являются соседними числами в массиве.
//   adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Объяснение:
// Максимальный продукт, полученный от умножения 5 * 10  =  50.

//   adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) ==>  return -14
// Объяснение:
// Максимальный продукт, полученный от умножения - 2 * 7 = -14, и они являются соседними числами в массиве.


const adjacentElementsProduct = (array) => {
  let cache = (-Infinity);
  array.map((v, i, arr) => arr[i] * arr[i + 1] > cache ? cache = arr[i] * arr[i + 1] : cache);
  return cache
}

const adjacentElementsProduct = array => Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1))