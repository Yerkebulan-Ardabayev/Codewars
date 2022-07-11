// Total amount of points
// Our football team finished the championship.The result of each match look like "x:y".Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship.Rules for counting points for each match:

//   if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// Наша футбольная команда завершила чемпионат.Результат каждого совпадения выглядит как "x:y". Результаты всех матчей фиксируются в сборнике.

//   Например: ["3:1", "2:2", "0:1", ...]

// Напишите функцию, которая берет такую ​​коллекцию и считает очки нашей команды в чемпионате.Правила подсчета очков за каждый матч:

// если х > у: 3 балла
// если х < у: 0 баллов
// если х = у: 1 балл
// Заметки:

// в чемпионате 10 матчей
// 0 <= х <= 4
// 0 <= у <= 4
const points = games => games.reduce((output, current) => {
  return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}