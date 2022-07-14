// A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain.You are a sheep farmer, and are now plagued by wolves which pretend to be sheep.Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten.Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep](YOU ARE HERE AT THE FRONT OF THE QUEUE)
// 7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep".Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

//   Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// Волки были вновь завезены в Великобританию.Вы овцевод, и теперь вас преследуют волки, которые притворяются овцами.К счастью, вы умеете их замечать.

// Предупредите овцу перед волком, что ее вот - вот съедят. Помните, что вы стоите в начале очереди, которая находится в конце массива:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep](YOU ARE HERE AT THE FRONT OF THE QUEUE)
// 7      6      5      4      3            2      1
// Если волк — самое близкое вам животное, вернитесь "Pls go away and stop eating my sheep".В противном случае верните, "Oi! Sheep number N! You are about to be eaten by a wolf!"где N находится овца в очереди.

//   Примечание: в массиве всегда будет ровно один волк.

//     Примеры
// Вход: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Выход: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Вход: ["sheep", "sheep", "wolf"]
// Выход: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  } else {
    let index = queue.findIndex((x) => x == 'wolf');
    return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
  }
}

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}