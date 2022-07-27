// Training JS #10: loop statement--for

// for loop is one of the most frequently used loop statements in JS.It works like while loop.In lesson 9, we wrote a while loop:

//   function sum1_100() {
//     var sum = 0, num = 1
//     while (num <= 100) {
//       sum += num;
//       num++;
//     }
//     return sum;
//   }
// We can rewrite it by using for loop, like this:

//   function sum1_100() {
//     for (var sum = 0, num = 1; num <= 100; num++) {
//       sum += num;
//     }
//     return sum;
//   }
// As you see, there are three parts in the brackets, separated by ";".The first part is the initialization variable, this part will run before the loop starts.The second part is the conditional expressions, check the expression before the start of each time loops, when the value of the expression is false, loop will be terminated.The third part is the statement about increasing and decreasing variables, they will run after the code block.

// For the example above, the running order of the code is:

//                               < --- back to part 2
// -------------------------------------------
//                   | true |
// var sum = 0, num = 1  -- -> num <= 100 ? ------> code block-- -> num++
//   |
//   false |
//   loop terminated
// When you need to traverse an array, you can use the for loop.look this example:

//   function displayElements(array) {
//     for (var i = 0; i < array.length; i++) {
//       console.log(array[i]);
//     }
//   }
// This function will display every element of array on your screen.

//   Ok, lesson is over, let's us do some task with for.

// Task
// Coding in function pickIt, function accept 1 parameter: arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

//   I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

// If you forgot how to push an element to array, please refer to lesson 4.

// forloop — один из наиболее часто используемых операторов цикла в JS.Это работает как whileцикл.В уроке 9 мы написали цикл while:

//   function sum1_100() {
//     var sum = 0, num = 1
//     while (num <= 100) {
//       sum += num;
//       num++;
//     }
//     return sum;
//   }
// Мы можем переписать его, используя цикл for, например:

//   function sum1_100() {
//     for (var sum = 0, num = 1; num <= 100; num++) {
//       sum += num;
//     }
//     return sum;
//   }
// Как видите, в скобках три части, разделенные ";".Первая часть — это переменная инициализации, эта часть будет выполняться до запуска цикла.Вторая часть - это условные выражения, проверяйте выражение перед началом каждого временного цикла, когда значение выражения ложно, цикл будет завершен.Третья часть — это утверждение об увеличении и уменьшении переменных, они будут выполняться после блока кода.

// В приведенном выше примере порядок выполнения кода следующий:

//                               < --- back to part 2
// -------------------------------------------
//                   | true |
// var sum = 0, num = 1  -- -> num <= 100 ? ------> code block-- -> num++
//   |
//   false |
//   loop terminated
// Когда вам нужно обойти массив, вы можете использовать цикл for.посмотрите этот пример:

//   function displayElements(array) {
//     for (var i = 0; i < array.length; i++) {
//       console.log(array[i]);
//     }
//   }
// Эта функция отобразит каждый элемент массива на вашем экране.

//   Ладно, урок окончен, давайте порешаем какую - нибудь задачу с for.

//     Задача
// Кодирование в функции pickIt, функция принимает 1 параметр: arr это массив чисел, нам нужно пройти arr с помощью for цикла, если элемент нечетное число, поместите его в массив odd, если это четное число, поместите его в массив even.

// Я определил два массива odd и even в функции, а также написал оператор возврата.your work is write a for loop.

// Если вы забыли, как вставить элемент в массив, обратитесь к уроку 4.

function pickIt(arr) {
  let odd = [];
  let even = [];

  for (let i = 1; i <= arr.length; i++){
    if (i % 2 !== 0) {
      odd.push(i);
    }
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return [odd, even];
}

const pickIt = array => {
  for (let i = 0; i < array.length; i++) { }
  return [array.filter(number => number % 2 !== 0), array.filter(number => number % 2 === 0)]
}

function pickIt(arr) {
  var odd = [], even = [];
  for (var item of arr) {
    (item % 2 === 1 ? odd : even).push(item);
  }


  return [odd, even];
}

console.log(pickIt([1, 2, 3]));
console.log(pickIt([3, 2, 1]));
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]))