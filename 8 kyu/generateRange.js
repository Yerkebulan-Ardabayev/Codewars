// Generate range of integers

// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step.The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max(depending on the step)

// Реализуйте функцию с именем generateRange(min, max, step), которая принимает три аргумента и генерирует диапазон целых чисел от минимума до максимума с шагом. Первое целое число — это минимальное значение, второе — максимальное значение диапазона, а третье — шаг. (мин < макс)

// Задача
// Реализовать функцию с именем

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Примечание
// мин < макс
// шаг > 0
// диапазон НЕ ДОЛЖЕН включать max(в зависимости от шага)
function generateRange(min, max, step) {
  const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i)
  }
  return result
}
console.log(generateRange(2, 10, 2)); 