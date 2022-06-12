// Improving Math.round(x)
// Javascript has a handy built -in Math.round(x) method that rounds a number to the nearest integer:

// Math.round(3.14); // Returns 3
// Math.round(17.43); // 17
// Math.round(198.499); // 198
// Math.round(200.5); // 201
// Math.round(1784.76); // 1785
// But that is sometimes not enough! What if we wanted to round 3.1415926535 to two decimal places ? While some languages(such as PHP) has a round() function that supports rounding to a specified number of decimal places(e.g. <? php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified) */ ?>), Javascript does not!

// Task
// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

// You may find the following Math methods useful:

// Math.round(x)(of course)
// Math.pow(x, y)(returns x to the power of y - e.g.Math.pow(3, 4) == 81)

// Улучшение Math.round(x)
// Javascript имеет удобный встроенный Math.round(x)метод, который округляет число до ближайшего целого числа:

// Math.round(3.14); // Returns 3
// Math.round(17.43); // 17
// Math.round(198.499); // 198
// Math.round(200.5); // 201
// Math.round(1784.76); // 1785
// Но этого иногда недостаточно! Что, если мы хотим округлить 3.1415926535до двух знаков после запятой ? В то время как некоторые языки(например, PHP) имеют round()функцию, поддерживающую округление до заданного числа знаков после запятой(например <? php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified) */ ?>, ), Javascript не поддерживает округление!

// Задача
// Ваша задача — создать метод, Math.roundTo(number, precision)округляющий заданное number до precision десятичных знаков.

// Вам могут Math пригодиться следующие методы:

// Math.round(x)(конечно)
// Math.pow(x, y)(возвращает x в степень y - например Math.pow(3, 4) == 81)

Math.roundTo = function (number, precision) {
  return Number(number.toFixed(precision));
}

Math.roundTo = function (number, precision) {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}

Math.roundTo = function (number, precision) {
  var calculatedPrecision = Math.pow(10, precision);
  return (Math.round(number * calculatedPrecision)) / calculatedPrecision;
};

console.log(Math.roundTo(3.1415926535, 4));