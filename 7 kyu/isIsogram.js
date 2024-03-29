// Isograms

// An isogram is a word that has no repeating letters, consecutive or non - consecutive.Implement a function that determines whether a string that contains only letters is an isogram.Assume the empty string is an isogram.Ignore letter case.

// Example: (Input-- > Output)

// "Dermatoglyphics" -- > true
// "aba" -- > false
// "moOse" -- > false(ignore letter case)


// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой.Предположим, что пустая строка является изограммой.Игнорировать регистр букв.

//   Пример: (Ввод-- > Вывод)

// "Dermatoglyphics" -- > true
// "aba" -- > false
// "moOse" -- > false(ignore letter case)

const isIsogram = str => !str.match(/([a-z]).*\1/i);

console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isogram"));