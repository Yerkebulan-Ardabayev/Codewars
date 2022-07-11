// Drink about

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

//   Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
//   Examples: (Input-- > Output)

// 13 -- > "drink toddy"
// 17 -- > "drink coke"
// 18 -- > "drink beer"
// 20 -- > "drink beer"
// 30 -- > "drink whisky"

// Дети пьют тодди.
// Подростки пьют колу.
// Молодые люди пьют пиво.
// Взрослые пьют виски.
// Сделайте функцию, которая получает возраст и возвращает то, что они пьют.

//   Правила:

// Дети до 14 лет.
// Подростки до 18 лет.
// Молодые до 21 года.
// У взрослых 21 и более.
//   Примеры: (Ввод-- > Вывод)

// 13 -- > "drink toddy"
// 17 -- > "drink coke"
// 18 -- > "drink beer"
// 20 -- > "drink beer"
// 30 -- > "drink whisky"
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
    age < 18 ? "drink coke" :
      age < 21 ? "drink beer" : "drink whisky";

function peopleWithAgeDrink(old) {
  return old <= 13 ? 'drink toddy' : old <= 17 ? "drink coke" : (old <= 18 || old <= 20) ? "drink beer" : "drink whisky"
};
console.log(peopleWithAgeDrink(14));