// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2(February), is part of the first quarter; month 6(June), is part of the second quarter; and month 11(November), is part of the fourth quarter.

// Дан месяц как целое число от 1 до 12, вернитесь к тому, к какому кварталу года он принадлежит, как целое число.

//   Например: 2 - й месяц(февраль) является частью первого квартала; 6 месяц(июнь) входит во второй квартал; и месяц 11(ноябрь) является частью четвертого квартала.

const quarterOf = (month) => {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else {
    return 4;
  }
}

const quarterOf = m => Math.ceil(m / 3);

console.log(quarterOf(3));