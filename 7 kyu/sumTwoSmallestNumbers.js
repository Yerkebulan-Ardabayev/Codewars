// Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.No floats or non - positive integers will be passed.

// For example, when an array is passed like[19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива минимум из 4 положительных целых чисел.Не будут переданы числа с плавающей запятой или неположительные целые числа.

//   Например, когда массив передается как[19, 5, 42, 2, 77], вывод должен быть 7.

//   [10, 343445353, 3453445, 3453545353453]должен вернуться 3453455.

const sumTwoSmallestNumbers = numbers => {
  numbers.sort((a, b) => { return a - b });
  let sum = numbers[0] + numbers[1];
  return sum;
}
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));