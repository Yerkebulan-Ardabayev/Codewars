// Categorize New Member

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from - 2 to + 26; the better the player the lower the handicap.

//   Input
// Input will consist of a list of pairs.Each pair contains information for a single potential member.Information consists of an integer for the person's age and an integer for the person's handicap.

//   Output
// Output will consist of a list of string values(in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

//   Example
// input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// Крокетный клуб Western Suburbs имеет две категории членства: Senior и Open.Им нужна ваша помощь с формой заявки, в которой потенциальным членам будет указано, в какую категорию они будут помещены.

// Чтобы быть пожилым, член должен быть не моложе 55 лет и иметь гандикап больше 7. В этом крокетном клубе гандикап варьируется от - 2 до + 26; чем лучше игрок, тем ниже гандикап.

//   Вход
// Ввод будет состоять из списка пар.Каждая пара содержит информацию об одном потенциальном члене.Информация состоит из целого числа для возраста человека и целого числа для инвалидности человека.

//   Выход
// Вывод будет состоять из списка строковых значений(в Haskell и C: Open или Senior), указывающих, должен ли соответствующий элемент быть помещен в старшую или открытую категорию. 

//   Пример
// input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const openOrSenior = data => data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');

console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]));