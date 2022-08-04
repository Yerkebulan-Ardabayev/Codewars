// Get the Middle Character

// You are going to be given a word.Your job is to return the middle character of the word.If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//   #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word(string) of length 0 < str < 1000(In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).You do not need to test for this.This is only here to tell you that you do not need to worry about your solution timing out.

//   #Output

// The middle character(s) of the word represented as a string.

// Вам дадут слово.Ваша задача — вернуть средний символ слова.Если длина слова нечетная, вернуть средний символ.Если длина слова четная, верните средние 2 символа.

//   #Примеры:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Вход

// Слово(строка) длины 0 < str < 1000(в javascript вы можете получить чуть больше 1000 в некоторых тестовых примерах из - за ошибки в тестовых примерах).Вам не нужно тестировать для этого.Это только здесь, чтобы сказать вам, что вам не нужно беспокоиться о тайм - ауте вашего решения.

//   #Выход

// Средний символ(символы) слова, представленного в виде строки.

const getMiddle = s => {
  const length = s.length;
  if (length === 1) {
    return s;
  }
  return length % 2 === 1 ? [...s][Math.ceil((length / 2) - 1)] : [...s][(length / 2) - 1] + [...s][(length / 2)]
}

console.log(getMiddle("middle"));
console.log(getMiddle("testing"));