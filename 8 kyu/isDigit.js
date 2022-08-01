// Is it a number ?

//   Given a string s, write a method(function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

// Получив строку s, напишите метод(функцию), который вернет true, если это допустимое одиночное целое число или число с плавающей запятой, или false, если это не так.

// Допустимые примеры должны возвращать true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// должен вернуть ложь:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

const isDigit = s => s == parseFloat(s);