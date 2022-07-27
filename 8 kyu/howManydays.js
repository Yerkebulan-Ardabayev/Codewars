// Training JS #8: Conditional statement--switch
// In javascript, switch is another condition statement.

//   switch(n){
//   case 1:
//   //code block
//   break;
//   case 2:
//   //code block
//   break;
//   case ...:
//   //code block
//   break;

//   default:       //default is optional, sometimes it can be omitted
//   //code block
//   //The last one does not need break
// }
// switch is the keyword, n is the variable to switch, case 1 means when n === 1, following the ":", you can add some executable statement, with keyword break as termination(if you forgot "break", code will running with case 2, case 3...until a "break" appear), default like else in the if..else statement.

// In some cases, use the switch statement to look more clearly than the if..else statement.

// For example, we can write a function to calculate what day is today, like this:

//   function whatDayIsToday(n) {
//     //getDay() is a methods of Date(), we will learn them later.
//     var day = new Date().getDay(), x;
//     switch (day) {
//       case 0:
//         x = "Today it's Sunday";
//         break;
//       case 1:
//         x = "Today it's Monday";
//         break;
//       case 2:
//         x = "Today it's Tuesday";
//         break;
//       case 3:
//         x = "Today it's Wednesday";
//         break;
//       case 4:
//         x = "Today it's Thursday";
//         break;
//       case 5:
//         x = "Today it's Friday";
//         break;
//       case 6:
//         x = "Today it's Saturday";
//         break;
//     }
//     return x;
//   }
//   Task
// Complete function howManydays, function accept 1 parameters: month, means the month of year, different month has different days(refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// + --------------- +------------- +
// | month | days |
//     +--------------- +------------- +
// | 1, 3, 5, 7, 8, 10, 12 | 31 |
//       +--------------- +------------- +
// | 4, 6, 9, 11 | 30 |
//         +--------------- +------------- +
// | 2 | 28 | (Do not consider the leap year)
//   +--------------- +------------- +
//     little tips: Use default for most of the cases can reduce your work.
// В javascript switchэто еще одно условие.

//       switch(n){
//   case 1:
//     //code block
//     break;
//   case 2:
//     //code block
//     break;
//   case ...:
//     //code block
//     break;

//   default:       //default is optional, sometimes it can be omitted
//   //code block
//   //The last one does not need break
// }
// switch это ключевое слово, n это переменная для переключения, case 1 означает n === 1, что после ":", вы можете добавить некоторый исполняемый оператор с ключевым словом breakв качестве завершения(если вы забыли «перерыв», код будет работать со случаем 2, случаем 3...до " break"), defaultкак elseв операторе if..else.

// В некоторых случаях используйте switchутверждение, чтобы выглядеть более четко, чем if..elseутверждение.

//   Например, мы можем написать функцию для вычисления того, какой сегодня день, например:

// function whatDayIsToday(n) {
//   //getDay() is a methods of Date(), we will learn them later.
//   var day = new Date().getDay(), x;
//   switch (day) {
//     case 0:
//       x = "Today it's Sunday";
//       break;
//     case 1:
//       x = "Today it's Monday";
//       break;
//     case 2:
//       x = "Today it's Tuesday";
//       break;
//     case 3:
//       x = "Today it's Wednesday";
//       break;
//     case 4:
//       x = "Today it's Thursday";
//       break;
//     case 5:
//       x = "Today it's Friday";
//       break;
//     case 6:
//       x = "Today it's Saturday";
//       break;
//   }
//   return x;
// }
// Задача
// Полная функция howManydays, функция принимает 1 параметр: month означает месяц года, разные месяцы имеют разные дни(см.следующую таблицу), возвращают число, указывающее, сколько дней в этом месяце (месяц всегда больше 0, меньше или равен до 12).

// + --------------- +------------- +
// | month | days |
//   +--------------- +------------- +
// | 1, 3, 5, 7, 8, 10, 12 | 31 |
//     +--------------- +------------- +
// | 4, 6, 9, 11 | 30 |
//       +--------------- +------------- +
// | 2 | 28 | (Do not consider the leap year)
// +--------------- +------------- +
//   маленькие советы: Использование default в большинстве случаев может сократить вашу работу.

// Когда вы закончите работу, нажмите «Выполнить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код для прохождения этого ката.
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function howManydays(month) {
  switch (month) {
    case 1:
      return 31;
    case 3: 
      return 31;
    case 5: 
      return 31;
    case 7:
      return 31;
    case 8:
      return 31;
    case 10:
      return 31;
    case 12:
      return 31;
    case 2:
      return 28;
    case 4:
      return 30;
    case 6:
      return 30;
    case 9:
      return 30;
    case 11:
      return 30;
    default: month;
  }
}

function howManydays(month) {
  switch (month) {
    case 2: return 28
    case 4:
    case 6:
    case 9:
    case 11: return 30
  }
  return 31
}

function howManydays(month) {
  switch (month) {
    case 2: return 28
    case 4: case 6: case 9: case 11: return 30
    default: return 31
  }
}

console.log(howManydays(1))