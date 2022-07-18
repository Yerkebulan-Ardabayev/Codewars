// Add Length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array ?

//   Example(Input-- > Output)

// "apple ban" -- > ["apple 5", "ban 3"]
// "you will win" -- > ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array / list with the length of each word added to each element.

//   Note: String will have at least one element; words will always be separated by a space.

//   Что, если нам нужно, чтобы длина слов, разделенных пробелом, была добавлена ​​в конце того же слова и возвращена в виде массива ?

//     Пример(ввод-- > вывод)

// "apple ban" -- > ["apple 5", "ban 3"]
// "you will win" -- > ["you 3", "will 4", "win 3"]
// Ваша задача — написать функцию, которая принимает строку и возвращает массив / список с длиной каждого слова, добавленного к каждому элементу.

//   Примечание.Строка будет содержать как минимум один элемент; слова всегда будут разделены пробелом.

const addLength = (str) => str.split(' ').map((e) => `${e} ${e.length}`);


console.log(addLength('apple ban'))