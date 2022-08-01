// Get number from string

// Write a function which removes from string all non - digit characters and parse the remaining to number.E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// Напишите функцию, которая удаляет из строки все нецифровые символы и преобразует оставшиеся в числа.Например: "hell5o world6ld" -> 56


const getNumberFromString = s => +s.replace(/[^0-9]/g, '');

console.log(getNumberFromString("this is number: 7"))