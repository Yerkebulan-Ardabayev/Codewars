// Find the capitals
// Instructions
// Write a function that takes a single string(word) as argument.The function must return an ordered list containing the indexes of all capital letters in the string.

//   Example
// Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);

// инструкции
// Напишите функцию, которая принимает одну строку(word) в качестве аргумента.Функция должна возвращать упорядоченный список, содержащий индексы всех заглавных букв в строке.

//   Пример
// Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);

const capitals = word => {
  return word.split('')
    .map(function (l, i) { if (l.toUpperCase() === l) return i; })
    .filter(function (i) { return i != null })
  
}
console.log(capitals('CodEWaRs'));