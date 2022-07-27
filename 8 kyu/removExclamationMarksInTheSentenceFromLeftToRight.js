// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

// Description:
// Remove n exclamation marks in the sentence from left to right.n is positive integer.

//   Examples
// remove("Hi!", 1) === "Hi"
// remove("Hi!", 100) === "Hi"
// remove("Hi!!!", 1) === "Hi!!"
// remove("Hi!!!", 100) === "Hi"
// remove("!Hi", 1) === "Hi"
// remove("!Hi!", 1) === "Hi!"
// remove("!Hi!", 100) === "Hi"
// remove("!!!Hi !!hi!!! !hi", 1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi", 3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi", 5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi", 100) === "Hi hi hi"

// Описание:
// Убрать nвосклицательные знаки в предложении слева направо. n является положительным целым числом.

//   Примеры
// remove("Hi!", 1) === "Hi"
// remove("Hi!", 100) === "Hi"
// remove("Hi!!!", 1) === "Hi!!"
// remove("Hi!!!", 100) === "Hi"
// remove("!Hi", 1) === "Hi"
// remove("!Hi!", 1) === "Hi!"
// remove("!Hi!", 100) === "Hi"
// remove("!!!Hi !!hi!!! !hi", 1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi", 3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi", 5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi", 100) === "Hi hi hi"

const remove = (s, n) => n > 0 ? remove(s.replace('!', ''), n - 1) : s;

console.log(remove("!!!Hi !!hi!!! !hi", 1));