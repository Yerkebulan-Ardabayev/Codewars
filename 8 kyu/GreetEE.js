// Grasshopper - Personalized Message
// Create a function that gives a personalized greeting.This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// Создайте функцию, которая выдает персонализированное приветствие.Эта функция принимает два параметра: name и owner.

// Используйте условные выражения, чтобы вернуть правильное сообщение:

// кейс	возвращаться
// имя равно владельцу	'Привет босс'
// в противном случае	«Привет, гость»

function greet(name, owner) {
  return name === owner ? 'Hello Boss' : 'Hello guest';
}
console.log(greet('Daniel', 'ccc'))