// Exclamation marks series #1: Remove an exclamation mark from the end of string
// Description:
// Remove an exclamation mark from the end of a string.For a beginner kata, you can assume that the input data is always a string, no need to verify it.

//   Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// Note
// Please don't post issue about difficulty or duplicate.

// Описание:
// Убрать восклицательный знак в конце строки.Для начинающего ката можно считать, что входные данные всегда являются строкой, проверять ее не нужно.

//   Примеры
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// Примечание
// Пожалуйста, не публикуйте проблему о сложности или дублировании.

function remove(string) {
  return string.replace(/!$/, '');
}

function remove(s) {
  return s[s.length - 1] == '!' ? s.slice(0, s.length - 1) : s;
}

console.log(remove("Hi!"));