// Welcome to the City

// Create a method sayHello / say_hello / SayHello that takes as input a name, city, and state to welcome a person.Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

//   Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// Создайте метод, sayHello// принимающий в качестве входных данных имя, город и штат, чтобы приветствовать человека. Обратите внимание, что это будет массив, состоящий из одного или нескольких значений, которые должны быть соединены вместе с одним пробелом между каждым, и длина массива в тестовых примерах будет варьироваться.say_helloSayHellonamename

// Пример:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// Этот пример вернет строку Hello, John Smith! Welcome to Phoenix, Arizona!

const sayHello = (name, city, state) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;