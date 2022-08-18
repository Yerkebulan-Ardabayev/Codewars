// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once(ignore duplicates).

//   Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
//   Input >> Output Examples
// minValue({ 1, 3, 1}) ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from { 1, 3, 1 } , Without duplications

// minValue({ 5, 7, 5, 9, 7}) ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from { 5, 7, 5, 9, 7 } , Without duplications

// minValue({ 1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from { 1, 9, 3, 1, 7, 4, 6, 6, 7 } , Without duplications

// Задача
// Учитывая список цифр, верните наименьшее число, которое можно составить из этих цифр, используя цифры только один раз(игнорируя дубликаты).

//   Заметки:
// В функцию будут переданы только положительные целые числа(> 0), никаких отрицательных значений или нулей.
//   Ввод >> Примеры вывода
// minValue({ 1, 3, 1}) ==> return (13)
// Объяснение:
// (13) это минимальное число, которое можно составить из { 1, 3, 1 } без повторений

// minValue({ 5, 7, 5, 9, 7}) ==> return (579)
// Объяснение:
// (579) — это минимальное число, которое можно составить из { 5, 7, 5, 9, 7 } без повторений.

//   minValue({ 1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Объяснение:
// (134679) — минимальное число, которое можно составить из { 1, 9, 3, 1, 7, 4, 6, 6, 7 } без повторений


const minValue = values => +(Array.from(new Set(values))).sort((a, b) => a - b).join('');