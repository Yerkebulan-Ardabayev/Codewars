// Find Mean
// Find the mean(average) of a list of numbers in an array.

//   Information
// To find the mean(average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1 + 3 + 5 + 7 = 16
// 2. Divide by the number of values in the list.In this example there are 4 numbers in the list.

// 16 / 4 = 4
// 3. The mean(or average) of this list is 4

// Найти среднее
// Найдите среднее значение(среднее) списка чисел в массиве.

//   Информация
// Чтобы найти среднее значение(среднее) набора чисел, сложите все числа вместе и разделите на количество значений в списке.

// Для примера список1, 3, 5, 7

// 1. Сложите все числа

// 1 + 3 + 5 + 7 = 16
// 2. Разделить на количество значений в списке.В этом примере в списке 4 числа.

// 16 / 4 = 4
// 3. Среднее(или среднее) этого списка равно 4.

const findAverage = function (nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}


let findAverage = function (nums) {
  let result = 0
  for (let num of nums) {
    result += num
  }
  return result / nums.length
}