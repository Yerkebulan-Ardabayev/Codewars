// Разбить предложение
// Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение.Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны добавлять пробелы между каждым словом.Будьте внимательны, не должно быть пробела ни в начале, ни в конце предложения!

// Пример
// ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'

function smash(words) {
  return words.join(' ').trim();
};
console.log(smash(["hello", "amazing", "world"]));