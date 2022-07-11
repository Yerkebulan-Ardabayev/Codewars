// It's the academic year's end, fateful moment of your school report.The averages must be calculated.All the students come to you and entreat you to calculate their average for them.Easy! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Конец учебного года, судьбоносный момент твоего школьного отчета.Средние значения должны быть рассчитаны.Все ученики подходят к вам и умоляют вас подсчитать для них их средний балл.Легкий! Вам просто нужно написать сценарий.

// Возвращает среднее значение данного массива, округленное до ближайшего целого числа.

// Массив никогда не будет пустым.

function getAverage(marks) {

  let count = marks.length;

  let newMarks = marks.reduce((e, r) => { return e + r }, 0);

  return Math.floor((newMarks / count));
}

console.log(getAverage([3, 5, 4, 17, 13, 5, 5, 11]))