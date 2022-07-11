// L1: Set Alarm

// Write a function named setAlarm which receives two parameters.The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation(because these are the circumstances under which you need to set an alarm).It should return false otherwise.Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// Напишите функцию с именем setAlarm, которая получает два параметра.Первый параметр, employed, истинен, когда вы работаете, а второй параметр, Vacation истинен, когда вы находитесь в отпуске.

// Функция должна возвращать true, если вы работаете, а не в отпуске(поскольку это обстоятельства, при которых вам нужно установить будильник).В противном случае он должен возвращать false.Примеры:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation) {
  if (employed === true && vacation === true) {
    return false;
  }
  if (employed === false && vacation === true) {
      return false;
  }
  if (employed === false && vacation === false) {
    return false;
  }
  if (employed === true && vacation === false) {
    return true;
  }
}

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, false));