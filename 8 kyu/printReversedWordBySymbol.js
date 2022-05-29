// Реализуйте функцию printReversedWordBySymbol(), которая печатает переданное слово посимвольно, как в примере из теории, но делает это в обратном порядке.

const name = 'Arya';
const printReversedWordBySymbol = (name) => {
  let i = 0;
  let newName = name.split('').reverse().join('');
  // Такая проверка будет выполняться до конца строки
  // включая последний символ. Его индекс `length - 1`.
  while (i <= newName.length - 1) {
    // Обращаемся к символу по индексу
    console.log(newName[i]);
    i = i + 1;
  }
  console.log(newName);
};
console.log(printReversedWordBySymbol(newName));


const word = 'Arya';
const printReversedWordBySymbol = (word) => {
  let i = word.length - 1;
  while (i >= 0) {
    console.log(word[i]);
    i = i - 1;// если нужно перебрать в обратном порядке, то нужно использовать -1
  }
};
console.log(printReversedWordBySymbol(word));


