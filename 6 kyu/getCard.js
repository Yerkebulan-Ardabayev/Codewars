// Bingo Card

// After yet another dispute on their game the Bingo Association decides to change course and automate the game.

// Can you help the association by writing a method to create a random Bingo card ?

//   Bingo Cards
// A Bingo card contains 24 unique and random numbers according to this scheme:

// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75
// Task
// Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

// ['B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
// The numbers must be in the order of their column: B, I, N, G, O.Within the columns the order of the numbers is random.

// После очередного спора об их игре Ассоциация Бинго решает изменить курс и автоматизировать игру.

// Можете ли вы помочь ассоциации, написав метод для создания случайной карты Бинго ?

//   Карты Бинго
// Карта Бинго содержит 24 уникальных и случайных числа по следующей схеме:

// 5 чисел из столбца B в диапазоне от 1 до 15
// 5 чисел из I столбца в диапазоне от 16 до 30
// 4 числа из столбца N в диапазоне от 31 до 45
// 5 чисел из столбца G в диапазоне от 46 до 60
// 5 чисел из столбца О в диапазоне от 61 до 75
// Задача
// Напишите функцию get_card() / getCard().Карта должна быть возвращена в виде массива чисел в стиле бинго:

// ['B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
// Числа должны быть в порядке их столбца: B, I, N, G, O.Внутри столбцов порядок чисел случайный.

function getCard() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    let r = `B${getRandomIntInclusive(1, 15)}`
    if (!arr.includes(r)) {
      arr.push(r)
    } else { i-- }
  }
  for (let i = 0; i < 5; i++) {
    let r = `I${getRandomIntInclusive(16, 30)}`
    if (!arr.includes(r)) {
      arr.push(r)
    } else { i-- }
  }
  for (let i = 0; i < 5; i++) {
    let r = `N${getRandomIntInclusive(31, 45)}`
    if (i === 2) { }
    else if (!arr.includes(r)) {
      arr.push(r)
    } else { i-- }
  }
  for (let i = 0; i < 5; i++) {
    let r = `G${getRandomIntInclusive(46, 60)}`
    if (!arr.includes(r)) {
      arr.push(r)
    } else { i-- }
  }
  for (let i = 0; i < 5; i++) {
    let r = `O${getRandomIntInclusive(61, 75)}`
    if (!arr.includes(r)) {
      arr.push(r)
    } else { i-- }
  }
  return arr
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const BINGO = [['B', 5], ['I', 5], ['N', 4], ['G', 5], ['O', 5]]

const getCard = () => [].concat(...Array.from({ length: 5 }, (l, i) => Array.from({ length: BINGO[i][1] }, _ => BINGO[i][0] + (Math.random() * 14 + (1 + 15 * i)))))