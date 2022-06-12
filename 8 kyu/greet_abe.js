// Functional closures can get overly attached.Set them straight!

// Why doesn't greet_abe() actually greet Abe?
// Функциональные затворы могут быть чрезмерно привязаны.Поправьте их!

// Почему функция welcome_abe() на самом деле не приветствует Эйба ?

// let name = 'Abe';
// let greet_abe = function () {
//   return "Hello, " + name + '!';
// };

// name = 'Ben';
// let greet_ben = function () {
//   return "Hello, " + name + '!';
// };
// console.log(greet_ben(name));

const greet_abe = () => 'Hello, Abe!';
const greet_ben = () => 'Hello, Ben!';