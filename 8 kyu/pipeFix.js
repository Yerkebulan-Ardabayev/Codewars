// Lario and Muigi Pipe Problem
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater(+1) than the previous one, and that there is no duplicates.

//   Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value(both included).

//   Example
// Input: 1, 3, 5, 6, 7, 8 Output: 1, 2, 3, 4, 5, 6, 7, 8

// Проблема
// Похоже, какой - то хулиган - сантехник со своим братом снова бегают и портят ваши сцены.

// Соединение pipes этапов вашего уровня вместе должно быть исправлено, прежде чем вы получите больше жалоб.

// Список каналов правильный, когда каждый pipe после первого индекса больше(+1), чем предыдущий, и нет дубликатов.

//   Задача
// Учитывая список a numbers, верните фиксированный список, чтобы значения увеличивались на 1 для каждого индекса от минимального значения до максимального значения(включая оба).

//   Пример
// Input: 1, 3, 5, 6, 7, 8 Output: 1, 2, 3, 4, 5, 6, 7, 8


function pipeFix(numbers) {
  let arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}