// Consider the word "abode".We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.For example,

//   solve(["abode", "ABc", "xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase.No spaces.

// Рассмотрите слово "abode".Мы видим, что буква a находится в позиции 1 и b находится в позиции 2. В алфавите a и b также находятся в позициях 1 и 2. Обратите также внимание на то, что d and e in abode занимают позиции, которые они должны были бы занимать в алфавите, а именно позиции 4 и 5.

// Учитывая массив слов, вернуть массив количества букв, которые занимают свои позиции в алфавите для каждого слова.Например,

//   solve(["abode", "ABc", "xyzD"]) = [4, 3, 1]
// См.тестовые случаи для большего количества примеров.

// Ввод будет состоять из букв алфавита, как в верхнем, так и в нижнем регистре.Нет пробелов.

const solve = arr => arr.map(word => [...word].reduce((acc, letter, index) => acc + (letter.toLowerCase().charCodeAt() - 96 === index + 1 ? 1 : 0), 0));
