// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to.As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space.Mind that you need to account for both "year" and "years", depending on the result.

// Филипу только что исполнилось четыре года, и он хочет знать, сколько ему будет лет в разные годы в будущем, например, в 2090 или 3044 году.может ответить на бесконечные вопросы Филиппа.

// Ваша задача — написать функцию, которая принимает два параметра: год рождения и год, по отношению к которому считается количество лет.Поскольку Филип с каждым днем ​​становится все более любопытным, он может вскоре захотеть узнать, сколько лет прошло до его рождения, поэтому ваша функция должна работать как с датами в будущем, так и с прошлыми датами.

// Предоставьте вывод в следующем формате: Для дат в будущем: «Вам ...лет». Для дат в прошлом: «Вы родитесь в ...году(годах)». Если год рождения равен запрашиваемому году: "Вы родились в этом году!"

// "..." должны быть заменены числом, за которым следует один пробел.Имейте в виду, что вам нужно учитывать как «год», так и «годы», в зависимости от результата.

const calculateAge = (yers, yersBorn) => {
  if (yersBorn === yers) {
    return `You were born this very year!`;
  }
  if ((yersBorn - yers) === 1) {
     return `You are ${yersBorn - yers} year old.`;
  }
  if ((yers - yersBorn) === 1) {
    return `You will be born in ${(yersBorn - yers) * (-1)} year.`;
  }

  if (yersBorn > yers  ) {
    return `You are ${yersBorn - yers} years old.`;
  }
 
  if (yersBorn <= yers) {
    return `You will be born in ${(yersBorn - yers) *(-1)} years.`;
  }
}


console.log(calculateAge(1989, 2016))
console.log(calculateAge(900, 2900))
console.log(calculateAge(2000, 1990))
console.log(calculateAge(2001, 2000))
