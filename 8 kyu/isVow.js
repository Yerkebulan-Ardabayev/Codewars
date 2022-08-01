// Is there a vowel in there ?

//   Given an array of numbers, check if any of the numbers are the character codes for lower case vowels(a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// Учитывая массив чисел, проверьте, являются ли какие - либо из чисел кодами символов для строчных гласных(a, e, i, o, u).

// Если это так, измените значение массива на строку этой гласной.

// Вернуть полученный массив.

const isVow = a => a.map(charCode => /[aeiou]/.test(String.fromCharCode(charCode)) ? String.fromCharCode(charCode) : charCode);