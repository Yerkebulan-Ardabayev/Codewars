// Вы пишете код для управления светофорами в вашем городе.Вам нужна функция для обработки каждого изменения с green, на yellow, на red, а затем greenснова на.

// Завершите функцию, которая принимает строку в качестве аргумента, представляющую текущее состояние источника света, и возвращает строку, представляющую состояние, в которое свет должен измениться.

//   Например, update_light('green')должен вернуть 'yellow'

function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
      break;
  }
}
console.log(updateLight('red'));

// function updateLight(current) {
//   return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// }

// const updateLight = current => ({
//   green: 'yellow',
//   yellow: 'red',
//   red: 'green',
// })[current]

// function updateLight(current) {
//   const lights = ['green', 'yellow', 'red'];
//   return lights[(lights.indexOf(current) + 1) % lights.length];
// } 