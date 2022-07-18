// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome.If the input is a number, convert it to string first.

//   Examples(Input ==> Output)
// "anna" ==> true
// "walter" ==> false
// 12321 ==> true
// 123456 ==> false

// Струны палиндрома
// Палиндром — это слово, фраза, число или другая последовательность символов, которая одинаково читается как в прямом, так и в обратном порядке.Это включает в себя заглавные буквы, знаки препинания и разделители слов.

// Реализуйте функцию, которая проверяет, является ли что - то палиндромом.Если ввод представляет собой число, сначала преобразуйте его в строку.

//   Примеры(ввод ==> вывод)
// "anna" ==> true
// "walter" ==> false
// 12321 ==> true
// 123456 ==> false

const isPalindrome = (x) => String(x).toLowerCase().split('').reverse().join('') === String(x).toLowerCase().split('').join('');

console.log(isPalindrome("walter"))
console.log(isPalindrome(123456))