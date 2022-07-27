// validate code with simple regex

// Basic regex tasks.Write a function that takes in a numeric code of any length.The function should check if the code begins with 1, 2, or 3 and return true if so.Return false otherwise.

// You can assume the input will always be a number.

// Основные задачи регулярных выражений.Напишите функцию, которая принимает числовой код любой длины.Функция должна проверять, начинается ли код с 1, 2 или 3, и возвращать значение true, если да.Вернуть в false противном случае.

// Вы можете предположить, что ввод всегда будет числом.

const validateCode = (code) => /^[123]/.test(code);
console.log(validateCode(8));
console.log(validateCode(321));
console.log(validateCode(284));