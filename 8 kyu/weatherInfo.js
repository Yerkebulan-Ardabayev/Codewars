// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius.Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5 / 9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers.It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth.Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

// Отладка конвертера Цельсия
// Ваш друг едет за границу в Соединенные Штаты, поэтому он написал программу для преобразования Фаренгейта в Цельсий.К сожалению, в его коде есть ошибки.

// Найдите ошибки в коде, чтобы конвертер Цельсия работал правильно.

// Чтобы перевести фаренгейты в градусы Цельсия:

// celsius = (fahrenheit - 32) * (5 / 9)
// Помните, что обычно температуры в текущих погодных условиях даются целыми числами.Датчики температуры могут сообщать о температуре с более высокой точностью, например, с точностью до десятых.Однако погрешность прибора делает такую ​​точность ненадежной для многих типов датчиков измерения температуры.


function convertToCelsius(temperature) {
  const celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

function weatherInfo(temp) {
  const celsius = (temp - 32) * (5 / 9);;
  if (celsius <= 0) {
    return celsius + " is freezing temperature";
  }
  else {
    return celsius + " is above freezing temperature";
  }
}

