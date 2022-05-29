// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

// Вы были в походе с друзьями далеко от дома, но когда пришло время возвращаться, вы понимаете, что топливо на исходе, а ближайшая заправка 50далеко! Вы знаете, что в среднем ваш автомобиль расходует около 25миль на галлон.Остаются 2галлоны.Учитывая эти факторы, напишите функцию, которая говорит вам, можно ли добраться до насоса или нет.Функция должна возвращать true(1в Прологе, NASM и COBOL), если это возможно, и false(0в Прологе, NASM и COBOL), если нет.Входные значения всегда положительны.

// let mpg = 25;
// let fuelLeft = 2;
// let distanceToPump = 25 * 2;
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump => 50) {
//     return true;
//   }
//   else {
//     return false
//   }
// }

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
  
}