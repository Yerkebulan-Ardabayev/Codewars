// You're a square!
// A square of squares
// You like building blocks.You especially like building blocks that are squares.And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
//   - 1  => false
// 0  => true
// 3  => false
// 4  => true
// 25  => true
// 26  => false

// Квадрат из квадратов
// Вам нравятся строительные блоки.Вам особенно нравятся квадратные строительные блоки.А что вам еще больше нравится, так это собирать их в квадрат из квадратных строительных блоков!

// Однако иногда вы не можете расположить их в квадрат.Вместо этого у вас получится обычный прямоугольник! Эти проклятые вещи! Если бы у вас был способ узнать, не зря ли вы сейчас работаете… Подождите! Вот и все! Вам просто нужно проверить, является ли количество строительных блоков идеальным квадратом.

//   Задача
// Учитывая целое число, определите, является ли оно квадратным числом:

// В математике квадратное число или идеальный квадрат — это целое число, являющееся квадратом целого числа; другими словами, это произведение некоторого целого числа на самого себя.

// В тестах всегда будет использоваться некоторое целое число, так что не беспокойтесь об этом в языках с динамической типизацией.

//   Примеры
//   - 1  => false
// 0  => true
// 3  => false
// 4  => true
// 25  => true
// 26  => false

const isSquare = n => Math.sqrt(n) % 1 === 0;

const isSquare = n => Number.isInteger(Math.sqrt(n));

console.log(isSquare(25));
console.log(isSquare(26));