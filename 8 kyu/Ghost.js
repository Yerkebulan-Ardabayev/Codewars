// Создайте класс Ghost

// Объекты - призраки создаются без каких - либо аргументов.

//   Объектам - призракам при создании экземпляра присваивается случайный атрибут цвета «белый», «желтый», «фиолетовый» или «красный».

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

let Ghost = function () {
  let colors = ['white', 'yellow', 'purple', 'red'];
  this.color = colors[Math.floor(Math.random() * colors.length)];
};