// Training JS #1: create your first JS function and print "Hello World!"
// In JavaScript, your code is running in a function, let us step by step complete your first JS function.

// Look at this example:

// --------keyword "function"
//   | ----your function name
//       |       | ---if needed, some arguments will appear in brackets
//   |       |    |
//   function myfunc() {
//     --------- your function code will starting with "{"
//       //you should type your code here
//     }----------------------------ending with "}"
// If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

// function printWordToScreen() {
//   var somewords = "This is an example."
//   console.log(somewords)
// }
// If we run this function, This is an example.will be seen on the screen.As you see, console.log() is an useful method help your work, you will become more and more like it.

//   Task
// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

//     use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

//       type the console.log() in the next line(don't forget to put the str in the brackets).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.
// В JavaScript ваш код выполняется в функции, давайте шаг за шагом завершим вашу первую функцию JS.

// Посмотрите на этот пример:

// --------keyword "function"
//   | ----your function name
//       |       | ---if needed, some arguments will appear in brackets
//   |       |    |
//   function myfunc() {
//     --------- your function code will starting with "{"
//       //you should type your code here
//     }----------------------------ending with "}"
// Если мы хотим напечатать что - то на экране, может быть, мы можем использовать Document.write()в Интернете или использовать alert()всплывающее сообщение, но Codewars не поддерживает эти методы, мы должны использовать их console.log()в вашей функции.см.этот пример:

// function printWordToScreen() {
//   var somewords = "This is an example."
//   console.log(somewords)
// }
// Если мы запустим эту функцию, This is an example.будет видно на экране.Как видите, console.log()это полезный метод, помогающий вашей работе, вам будет нравиться все больше и больше.

//   Задача
// Пожалуйста, обратитесь к двум приведенным выше примерам и напишите свою первую функцию JS.

//   миссия 1:

// используйте ключевое слово function для определения вашей функции, имя функции должно быть helloWorld(не забудьте () and {})

// миссия 2:

// используйте ключевое слово var(или let или const) для определения переменной str, значение str должно быть строкой: "Hello World!"(не забудьте =).

// миссия 3:

// введите console.log()в следующей строке(не забудьте поставить str в скобках).

// Когда вы закончите работу, нажмите «Выполнить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код для прохождения этого ката.

function helloWorld(str) {
  let str = "Hello World!";
  console.log(str);
}