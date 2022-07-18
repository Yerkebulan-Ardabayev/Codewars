// Training JS #5: Basic data types--Object

// In javascript, Object is one of basic data types.Define an Object can use var obj = new Object() or var obj = {}

// You can define the object attributes during initialization, like this:

// var animal = { name: "dog" }
// you can also set / get some properties after the object definition, like this:

// var animal = {}
// animal.name = "dog"(or animal["name"] = "dog")
// Task
// Give you a function animal, accept 1 parameter:obj like this:

// { name: "dog", legs: 4, color: "white" }
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// В javascript объект является одним из основных типов данных.Определите, что объект может использовать var obj = new Object() или var obj = {}

// Вы можете определить атрибуты объекта во время инициализации, например:

// var animal = { name: "dog" }
// вы также можете установить / получить некоторые свойства после определения объекта, например:

// var animal = {}
// animal.name = "dog"( or animal["name"] = "dog")

// Задача
// Дайте вам функцию animal, примите 1 параметр: obj вот так:

// { name: "dog", legs: 4, color: "white" }
// и вернуть такую ​​строку:

// "This white dog has 4 legs."
// Когда вы закончите работу, нажмите «Выполнить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код для прохождения этого ката.

const animal = (obj) => `This ${obj['color']} ${obj['name']} has ${obj['legs']} legs.`;

console.log(animal({ name: "dog", legs: 4, color: "white" }))