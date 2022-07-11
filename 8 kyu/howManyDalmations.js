// 101 Dalmatians - squash the bugs, not the dogs!

// Your friend has been out shopping for puppies(what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Ваш друг пошел покупать щенков(какое время, чтобы быть живым!)... Он вернулся с несколькими собаками, и вы просто не знаете, что ответить!

// Отремонтировав предоставленную функцию, вы узнаете, как именно вам следует реагировать, в зависимости от количества собак, которые у него есть.

// Количество собак всегда будет числом, и всегда будет как минимум 1 собака.

function howManyDalmatians(number) {
  const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  const respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number <= 100 ? dogs[2] : number === 101 ? dogs[3] : false;
  return respond;
}
console.log(howManyDalmatians(101))


