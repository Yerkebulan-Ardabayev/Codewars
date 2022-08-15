// Growth of a Population

// In a small town the population is p0 = 1000 at the beginning of a year.The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.How many years does the town need to see its population greater or equal to p = 1200 inhabitants ?

//   At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants(** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug(inhabitants coming or leaving each year), p(population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers(> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.


// В маленьком городке население p0 = 1000 на начало года. Население регулярно увеличивается на 2 percent 1 год, и, кроме того, 50 каждый год в город приезжают новые жители.Сколько лет нужно городу, чтобы его население было больше или равно количеству p = 1200 жителей ?

//   At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants(** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// Более общие параметры:

// p0, percent, aug(inhabitants coming or leaving each year), p(population to surpass)

// функция nb_year должна возвращать nколичество полных лет, необходимых для получения населения, большего или равного p.

//   aug — целое число, процент — положительное или нулевое плавающее число, p0 и p — положительные целые числа(> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Примечание:
// Не забудьте преобразовать параметр процента в процент в теле вашей функции: если параметр процента равен 2, вы должны преобразовать его в 0, 02.
function nbYear(p0, percent, aug, p, years = 0) {
  return p0 >= p
    ? years
    : nbYear(
      Math.floor(p0 + p0 * (percent / 100)) + aug,
      percent,
      aug,
      p,
      years + 1
    );
}