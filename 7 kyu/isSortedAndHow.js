// Sorted ? yes ? no ? how ?
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// Завершите метод, который принимает массив целых чисел и возвращает одно из следующих значений:

// "yes, ascending" - если числа в массиве отсортированы по возрастанию
// "yes, descending" - если числа в массиве отсортированы по убыванию
// "no" - в противном случае
// Вы можете предположить, что массив всегда будет действительным, и всегда будет один правильный ответ.


const isSortedAndHow = array => {
  if (array.every((e, i) => i === 0 || e >= array[i - 1])) return 'yes, ascending';
  if (array.every((e, i) => i === 0 || e <= array[i - 1])) return 'yes, descending';
  return 'no';
}