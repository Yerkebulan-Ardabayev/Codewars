// Your function takes two arguments:

// current father's age (years)
// current age of his son(years)
// Сalculate how many years ago the father was twice as old as his son(or in how many years he will be twice as old).

// Ваша функция принимает два аргумента:

// текущий возраст отца(лет)
// текущий возраст его сына(лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына(или через сколько лет он будет вдвое старше).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twice = dadYearsOld - sonYearsOld * 2;
  return twice < 0 ? twice * (-1) : twice;
}

const twiceAsOld = (d, s) => Math.abs(d - 2 * s);