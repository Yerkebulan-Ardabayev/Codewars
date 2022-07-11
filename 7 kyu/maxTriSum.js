// Task
// Given an array / list[] of n integers, find maximum triplet sum in the array Without duplications.

//   Notes :
// Array / list size is at least 3.

//   Array / list numbers could be a mixture of positives, negatives and zeros.

// Repetition of numbers in the array / list could occur, So(duplications are not included when summing).
//   Input >> Output Examples
// 1 - maxTriSum({ 3, 2, 6, 8, 2, 3}) ==> return (17)
// Explanation:
// As the triplet that maximize the sum { 6, 8, 3 } in order, their sum is(17)

// Note: duplications are not included when summing, (i.e) the numbers added only once.

// 2 - maxTriSum({ 2, 1, 8, 0, 6, 4, 8, 6, 2, 4}) ==> return (18)
// Explanation:
// As the triplet that maximize the sum { 8, 6, 4 } in order, their sum is(18),

//   Note : duplications are not included when summing, (i.e) the numbers added only once.

// 3 - maxTriSum({- 7, 12, -7, 29, -5, 0, -7, 0, 0, 29}) ==> return (41)
// Explanation:
// As the triplet that maximize the sum { 12, 29, 0 } in order, their sum is(41),

//   Note : duplications are not included when summing, (i.e) the numbers added only once.



//   Задача
// Учитывая массив / список[] из n целых чисел, найти максимальную сумму троек в массиве без повторений.

//   Заметки :
// Размер массива / списка не менее 3.

// Числа массива / списка могут состоять из положительных, отрицательных и нулевых чисел.

// Возможно повторение чисел в массиве / списке, т.е. (дублирование не учитывается при суммировании).

//   Ввод >> Примеры вывода
// 1 - maxTriSum({ 3, 2, 6, 8, 2, 3}) ==> return (17)
// Объяснение:
// Как тройка, максимизирующая сумму { 6, 8, 3 } в порядке, их сумма равна(17)

// Примечание: повторения не учитываются при суммировании, (т.е.числа добавляются только один раз) .

// 2 - maxTriSum({ 2, 1, 8, 0, 6, 4, 8, 6, 2, 4}) ==> return (18)
// Объяснение:
// Как тройка, которая максимизирует сумму { 8, 6, 4 } по порядку, их сумма равна(18),

//   Примечание : повторения не учитываются при суммировании, (т.е.числа добавляются только один раз) .

// 3 - maxTriSum({- 7, 12, -7, 29, -5, 0, -7, 0, 0, 29}) ==> return (41)
// Объяснение:
// Как тройка, которая максимизирует сумму { 12, 29, 0 } по порядку, их сумма равна(41),

//   Примечание : повторения не учитываются при суммировании, (т.е.числа добавляются только один раз) .


function maxTriSum(numbers) {
  const sorted = [...new Set(numbers.sort((a, b) => b - a))]
  return sorted[0] + sorted[1] + sorted[2]
}