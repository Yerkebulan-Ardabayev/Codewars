// Deodorant Evaporator

// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator(content in ml), the percentage of foam or gas lost every day(evap_per_day) and the threshold(threshold) in percentage beyond which the evaporator is no longer useful.All numbers are strictly positive.

// The program reports the nth day(as an integer) on which the evaporator will be out of use.

//   Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish.Some people might prefer to reason with content, some other with percentages only.It's up to you but you must keep it as a parameter because the tests have it as an argument.

// Эта программа проверяет срок службы испарителя, содержащего газ.

// Мы знаем содержимое испарителя(содержимое в мл), процент пены или газа, теряемый каждый день(evap_per_day) и пороговое значение(threshold) в процентах, выше которого испаритель становится бесполезным.Все числа строго положительные.

// Программа сообщает n - й день(в виде целого числа), когда испаритель не будет использоваться.

//   Пример:
// evaporator(10, 10, 5) -> 29
// Примечание:
// Содержимое по сути не обязательно в теле функции "испаритель", вы можете использовать его или не использовать, как хотите.Кто - то предпочитает рассуждать содержанием, кто - то — только процентами.Это зависит от вас, но вы должны оставить его в качестве параметра, потому что тесты используют его в качестве аргумента.

const evaporator = (content, evap_per_day, threshold) => {
  let result = 0;
  let percentage = 100;
  while (percentage > threshold) {
    percentage = percentage - percentage * (evap_per_day / 100);
    result += 1;
  }
  return result;
}