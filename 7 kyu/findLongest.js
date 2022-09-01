// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// Найдите число с наибольшим количеством цифр.

// Если два числа в массиве аргументов имеют одинаковое количество цифр, вернуть первое число в массиве.

const findLongest = array => array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a))
console.log(findLongest([1, 10, 100]));
