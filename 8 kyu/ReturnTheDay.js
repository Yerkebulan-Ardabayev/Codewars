// Return the day

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

// Завершите функцию, которая возвращает день недели в соответствии с введенным числом:

// 1 возвращается "Sunday"
// 2 возвращается "Monday"
// 3 возвращается "Tuesday"
// 4 возвращается "Wednesday"
// 5 возвращается "Thursday"
// 6 возвращается "Friday"
// 7 возвращается "Saturday"
// В противном случае возвращает "Wrong, please enter a number between 1 and 7"

const whatday = (num) => num === 1 ? "Sunday" : num === 2 ? "Monday" : num === 3 ? "Tuesday" : num === 4 ? "Wednesday" : num === 5 ? "Thursday" : num === 6 ? "Friday" : num === 7 ? "Saturday" : "Wrong, please enter a number between 1 and 7";


function whatday(num) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}

console.log(whatday(2));
console.log(whatday(9));