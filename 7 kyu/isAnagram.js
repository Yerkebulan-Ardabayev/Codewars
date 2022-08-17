// An anagram is the result of rearranging the letters of a word to produce a new word(see wikipedia).

//   Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//   Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// Анаграмма — это результат перестановки букв слова для получения нового слова(см.Википедию).

//   Примечание: анаграммы нечувствительны к регистру.

// Завершите возвращаемую функцию, true если два заданных аргумента являются анаграммами друг друга; вернуть false иначе.

//   Примеры
// "foefet"является анаграммой"toffee"

// "Buckethead"является анаграммой"DeathCubeK"


const isAnagram = (test, original) => test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("dumble", "bumble"));

