// Write a function that checks if a given string(case insensitive) is a palindrome.
// Напишите функцию, которая проверяет, является ли заданная строка(без учета регистра) палиндромом.

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');  
 
}
console.log(isPalindrome("hello"));