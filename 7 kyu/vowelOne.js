// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non - vowels including non alpha characters(spaces, commas etc.) should be included.

//   Examples:

// vowelOne("abceios") // "1001110"

// vowelOne("aeiou, abc") // "1111100100"

// гласный Один
// Напишите функцию, которая принимает строку и выводит строки из 1 и 0, где гласные становятся 1, а не гласные — 0.

// Должны быть включены все негласные, включая небуквенные символы(пробелы, запятые и т.д.).

//   Примеры:

// vowelOne("abceios") // "1001110"

// vowelOne("aeiou, abc") // "1111100100"

function vowelOne(s) {
  return s.replace(/./g, v => /[aeiou]/i.test(v) ? 1 : 0)
}
