// Palindrome chain length

// Number is a palindrome if it is equal to the number with digits in reversed order.For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome.The special step is: "reverse the digits, and add to the original number".If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

//   Example
// For example, start with 87:

// 87 + 78 =  165 - step 1, not a palindrome
// 165 + 561 =  726 - step 2, not a palindrome
// 726 + 627 = 1353 - step 3, not a palindrome
// 1353 + 3531 = 4884 - step 4, palindrome!
// 4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

// Число является палиндромом, если оно равно числу, в котором цифры расположены в обратном порядке.Например, 5, 44, 171, 4884 являются палиндромами, а 43, 194, 4773 не являются.

// Напишите функцию, которая принимает положительное целое число и возвращает количество специальных шагов, необходимых для получения палиндрома.Специальный шаг: «Поменять местами цифры и добавить к исходному числу». Если полученное число не является палиндромом, повторяйте процедуру с суммой до тех пор, пока полученное число не станет палиндромом.

// Если входное число уже является палиндромом, число шагов равно 0.

// Все входные данные гарантированно имеют конечный палиндром, который не переполняется MAX_SAFE_INTEGER.

//   Пример
// Например, начните с 87:

// 87 + 78 =  165 - step 1, not a palindrome
// 165 + 561 =  726 - step 2, not a palindrome
// 726 + 627 = 1353 - step 3, not a palindrome
// 1353 + 3531 = 4884 - step 4, palindrome!
// 4884является палиндромом, и нам потребовались шаги для его получения, 4 поэтому ответ для .874

const palindromeChainLength = (n) => {
  let x = parseInt(("" + n).split('').reverse().join(''));
  if (n != x) {
    return 1 + palindromeChainLength(n + x);
  }
  return 0;
};
