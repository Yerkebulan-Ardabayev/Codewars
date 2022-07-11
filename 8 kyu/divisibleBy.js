// Find numbers which are divisible by given number
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.First argument is an array of numbers and the second is the divisor.

//   Example(Input1, Input2-- > Output)
// [1, 2, 3, 4, 5, 6], 2 -- > [2, 4, 6]

// Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на заданный делитель.Первый аргумент — это массив, numbers, а второй — divisor.

//   Пример(Ввод1, Ввод2-- > Выход)
// [1, 2, 3, 4, 5, 6], 2 -- > [2, 4, 6]

function divisibleBy(numbers, divisor) {
  const newArr = [];
  for (let i = 0; i < numbers.length; i++)  {
    if (numbers[i] % divisor === 0) { 
      newArr.push(numbers[i]);
    } 
  }
  return newArr;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0)