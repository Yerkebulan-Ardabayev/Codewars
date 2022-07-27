// Formatting decimal places #0

// Each number should be formatted that it is rounded to two decimal places.You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34

// Каждое число должно быть отформатировано так, чтобы оно округлялось до двух знаков после запятой.Вам не нужно проверять, является ли ввод допустимым числом, потому что в тестах используются только действительные числа.

//   Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34

const twoDecimalPlaces = n => +n.toFixed(2);
console.log(twoDecimalPlaces(4.659725356))
console.log(twoDecimalPlaces(173735326.3783732637948948))