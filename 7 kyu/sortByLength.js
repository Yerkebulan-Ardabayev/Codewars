// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает отсортированный массив, содержащий те же строки, упорядоченные от самой короткой до самой длинной.

//   Например, если этот массив был передан в качестве аргумента:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Ваша функция вернет следующий массив:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// Все строки в массиве, переданном вашей функции, будут иметь разную длину, поэтому вам не придется решать, как упорядочить несколько строк одинаковой длины.

const sortByLength = array => {
  return array.sort((a, b) => { return a.length - b.length });
}

console.log(["Telescopes", "Glasses", "Eyes", "Monocles"]);