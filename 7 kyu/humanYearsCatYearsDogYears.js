let humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 15;
  let dogYears = 15;
  let twoCatYears = 24;
  let twoDogYears = 24;
  let nextCatYears = ((humanYears - 2) * 4) + twoCatYears;
  let nextDogYears = ((humanYears - 2) * 5) + twoDogYears;

  if (humanYears === 1) {
    return [humanYears, catYears, dogYears];
  }
  else if (humanYears > 1 && humanYears < 3) {
    return [humanYears, twoCatYears, twoDogYears];
  }
  else if (humanYears >= 3) {
    return [humanYears, nextCatYears, nextDogYears];
  }
}

console.log(humanYearsCatYearsDogYears(10));
