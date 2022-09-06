// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

//   Example:

// "riley" -- > "Hello Riley!"
// "JACK"  -- > "Hello Jack!"
// Напишите метод, который принимает один аргумент в качестве имени, а затем приветствует это имя, пишется с заглавной буквы и заканчивается восклицательным знаком.

//   Пример:

// "riley" -- > "Hello Riley!"
// "JACK"  -- > "Hello Jack!"

const greet = (name) => `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;