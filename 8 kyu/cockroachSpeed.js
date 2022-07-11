// Beginner Series #4 Cockroach

// The cockroach is one of the fastest insects.Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer(= floored).

// For example:

// 1.08 -- > 30
// Note! The input is a Real number(actual type is language dependent) and is >= 0. The result should be an Integer.

// Серия для начинающих #4 Таракан

// Таракан – одно из самых быстрых насекомых.Напишите функцию, которая получает скорость в км / ч и возвращает ее в см / с с округлением в меньшую сторону до целого числа(= с точностью до пола).

//   Например:

// 1.08 -- > 30
// Примечание! Ввод представляет собой вещественное число(фактический тип зависит от языка) и >= 0. Результат должен быть целым числом.

function cockroachSpeed(s) {
  return Math.floor(s * 27.7778);
}

function cockroachSpeed(s) {
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;
  return Math.floor((s * centimetersInKilometers) / secsInHour);
}

function cockroachSpeed(s) {
  const KILOMETER_IN_CENTIMETERS = 1 * 1000 * 100;
  const HOUR_IN_SECONDS = 1 * 60 * 60;
  return Math.floor(s * KILOMETER_IN_CENTIMETERS / HOUR_IN_SECONDS);
}

console.log(cockroachSpeed(1.08));