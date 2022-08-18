// Are the numbers in order ?
//   In this Kata, your function receives an array of integers as input.Your task is to determine whether the numbers are in ascending order.An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e.non - empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all(zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

// For example:

// inAscOrder([1, 2, 4, 7, 19]); // returns true
// inAscOrder([1, 2, 3, 4, 5]); // returns true
// inAscOrder([1, 6, 10, 18, 2, 4, 20]); // returns false
// inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]); // returns false because the numbers are in DESCENDING order

// Номера в порядке ?
//   В этом Ката ваша функция получает на вход массив целых чисел.Ваша задача — определить, расположены ли числа в порядке возрастания.Говорят, что массив находится в порядке возрастания, если нет двух соседних целых чисел, где левое целое число превышает по значению правое целое.

// Для целей этого Ката вы можете предположить, что все входные данные допустимы, т.е.непустые массивы, содержащие только целые числа.

// Обратите внимание, что массив из 1 целого числа автоматически считается отсортированным в порядке возрастания, поскольку все(нулевые) соседние пары целых чисел удовлетворяют условию, согласно которому левое целое число не превышает по значению правое целое число.Пустой список считается вырожденным случаем и, следовательно, не будет тестироваться в этом Ката — не стесняйтесь поднимать вопрос, если вы видите, что такой список тестируется.

//   Например:

// inAscOrder([1, 2, 4, 7, 19]); // returns true
// inAscOrder([1, 2, 3, 4, 5]); // returns true
// inAscOrder([1, 6, 10, 18, 2, 4, 20]); // returns false
// inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]); // returns false because the numbers are in DESCENDING order
// NB.Если ваше решение проходит все фиксированные тесты, но терпит неудачу в случайных тестах, убедитесь, что вы не мутируете входной массив.



function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}