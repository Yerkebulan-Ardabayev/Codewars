// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

//   Task
// Given an array of positive integers(the weights of the people), return a new array / tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
//   Input >> Output Examples
// rowWeights([13, 27, 49]) ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80]) ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80]) ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// Сценарий
// Несколько человек стоят в ряд, разделившись на две команды.
// Первый человек входит в команду 1, второй — в команду 2, третий — в команду 1 и так далее.

//   Задача
// Учитывая массив положительных целых чисел(веса людей), верните новый массив / кортеж из двух целых чисел, где первое — это общий вес команды 1, а второе — общий вес команды 2.

//   Заметки
// Размер массива не менее 1.
// Все числа будут положительными.
//   Ввод >> Примеры вывода
// rowWeights([13, 27, 49]) ==>  return (62, 27)
// Объяснение:
// Первый элемент 62 — это общий вес команды 1, а второй 27 — общий вес команды 2.

//   rowWeights([50, 60, 70, 80]) ==>  return (120, 140)
// Объяснение:
// Первый элемент 120 — это общий вес команды 1, а второй 140 — общий вес команды 2.

//   rowWeights([80]) ==>  return (80, 0)
// Объяснение:
// Первый элемент 80 — это общий вес команды 1, а второй 0 — общий вес команды 2.

const rowWeights = arr => arr.reduce((result, i, index) => (result[index % 2] += i, result), [0, 0]);