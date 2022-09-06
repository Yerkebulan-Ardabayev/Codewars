// Task
// Given an array of integers, Find the minimum sum which is obtained from summing each Two integers product.

//   Notes
// Array / list will contain positives only.
//   Array / list will always have even size
// Input >> Output Examples
// minSum({ 5, 4, 2, 3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product, 5 * 2 + 3 * 4 = 22
// minSum({ 12, 6, 10, 26, 3, 24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product, 26 * 3 + 24 * 6 + 12 * 10 = 342
// minSum({ 9, 2, 8, 7, 5, 4, 0, 6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product, 9 * 0 + 8 * 2 + 7 * 4 + 6 * 5 = 74


// Задача
// Учитывая массив целых чисел, Найдите минимальную сумму, которая получается в результате суммирования каждого произведения двух целых чисел.

//   Заметки
// Массив / список будет содержать только положительные значения.
//   Массив / список всегда будет иметь четный размер
// Ввод >> Примеры вывода
// minSum({ 5, 4, 2, 3}) ==> return (22)
// Объяснение:
// Минимальная сумма, полученная при суммировании каждого произведения двух целых чисел, 5 * 2 + 3 * 4 = 22
// minSum({ 12, 6, 10, 26, 3, 24}) ==> return (342)
// Объяснение:
// Минимальная сумма, полученная при суммировании каждого произведения двух целых чисел, 26 * 3 + 24 * 6 + 12 * 10 = 342
// minSum({ 9, 2, 8, 7, 5, 4, 0, 6}) ==> return (74)
// Объяснение:
// Минимальная сумма, полученная при суммировании каждого произведения двух целых чисел, 9 * 0 + 8 * 2 + 7 * 4 + 6 * 5 = 74
const minSum = arr => {
  let sum = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length / 2; i++) {
    sum += arr[i] * arr[arr.length - 1 - i];
  }
  return sum;
};