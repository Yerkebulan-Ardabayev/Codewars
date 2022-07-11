// Grasshopper - Terminal game combat function

//   Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health.Health can't be less than 0.

//   Создайте боевую функцию, которая берет текущее здоровье игрока и количество полученных повреждений и возвращает новое здоровье игрока.Здоровье не может быть меньше 0.

function combat(health, damage) {
  let wellness = health - damage;
  if (wellness > 0 ) {
    return wellness;
  }
  if (wellness < 0|| wellness === 0) {
    return 0;
  }
}
console.log(combat(20, 35))