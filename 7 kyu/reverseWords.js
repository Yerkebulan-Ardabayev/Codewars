// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string.All spaces in the string should be retained.

//   Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces" ==> "elbuod  secaps"

// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке.Все пробелы в строке должны быть сохранены.

//   Примеры
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces" ==> "elbuod  secaps"

const reverseWords = str => str.split('').reverse().join('').split(' ').reverse().join(' ');
console.log(reverseWords('This is an example!'));