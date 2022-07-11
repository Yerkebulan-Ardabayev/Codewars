// Count the Monkeys!

// You take your son to the forest to see the monkeys.You know that there are a certain number there(n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him.Given the number(n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input-- > Output):

// 10 -- > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 -- > [1]


// Вы ведете своего сына в лес, чтобы увидеть обезьян.Вы знаете, что там есть определенное число(n), но ваш сын слишком мал, чтобы просто оценить полное число, ему приходится начинать считать их с 1.

// Как хороший родитель, вы будете сидеть и считать с ним.Учитывая число(n), заполните массив всеми числами до этого числа включительно, но исключая ноль.

//   Например(ввод-- > вывод):

// 10 -- > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 -- > [1]

function monkeyCount(n) {
  let arrMonkey = [];
  for (let i = 1;i < n+1; i++){
    arrMonkey.push(i);
  }
  return arrMonkey;
}
console.log((monkeyCount(20)));