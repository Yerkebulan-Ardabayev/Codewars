// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Получив строку, сделайте заглавными буквы, которые занимают четные и нечетные индексы отдельно, и верните, как показано ниже.Индекс 0 будет считаться четным.

//   Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].См.тестовые случаи для большего количества примеров.

// Ввод будет строчной строкой без пробелов.

const capitalize = s => {
  return [s.split('').map((v, i) => i % 2 == 0 ? v.toUpperCase() : v.toLowerCase()).join(''),
         s.split('').map((v, i) => i % 2 !== 0 ? v.toUpperCase() : v.toLowerCase()).join('')]
} 
console.log(capitalize("codewars"))