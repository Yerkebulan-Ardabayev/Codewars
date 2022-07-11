// Grasshopper - Terminal game move function

//   Terminal game move function
//   In this game, the hero moves from left to right.The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll(1 - 6) and return the new position.

//   Example:
// move(3, 6) should equal 15

// Функция перемещения терминала
// В этой игре герой движется слева направо.Игрок бросает кубик и два раза перемещается на число клеток, указанное кубиком.

// Создайте функцию для терминальной игры, которая берет текущую позицию героя и бросок(1 - 6) и возвращает новую позицию.

//   Пример:
// move(3, 6) should equal 15

function move(position, roll) {
  return position + (roll * 2)
}