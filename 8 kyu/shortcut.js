// Vowel remover

// Create a function called shortcut to remove the lowercase vowels(a, e, i, o, u) in a given string.

//   Examples
// "hello"     -- > "hll"
// "codewars"  -- > "cdwrs"
// "goodbye"   -- > "gdby"
// "HELLO"     -- > "HELLO"

// Создайте функцию, вызываемую shortcut для удаления строчных гласных(a, e, i, o, u) в заданной строке.

//   Примеры
// "hello"     -- > "hll"
// "codewars"  -- > "cdwrs"
// "goodbye"   -- > "gdby"
// "HELLO"     -- > "HELLO"

const shortcut = (str) => str.replace(/[aeiou]/gi, '');
console.log(shortcut('how are you today?'));