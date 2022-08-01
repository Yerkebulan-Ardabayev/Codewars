// Who ate the cookie ?

//   For this problem you must create a program that says who ate the last cookie.If the input is a string then "Zach" ate the cookie.If the input is a float or an int then "Monica" ate the cookie.If the input is anything else "the dog" ate the cookie.The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" -- > Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata.Cheers!

// Для этой задачи вы должны создать программу, которая говорит, кто съел последнее печенье.Если ввод представляет собой строку, то «Зак» съел печенье.Если ввод представляет собой число с плавающей запятой или целое число, то «Моника» съела куки.Если на входе что - то еще, «собака» съела печенье.Способ возврата заявления: «Кто съел последнее печенье ? Это было(имя)!»

// Пример: Ввод = "привет" -- > Вывод = "Кто съел последнее печенье? Это был Зак! (Причина, по которой вы возвращаете Зака, заключается в том, что ввод представляет собой строку)

// Примечание.Убедитесь, что вы возвращаете правильное сообщение с правильными пробелами и пунктуацией.

//   Пожалуйста, оставьте отзыв об этом ката.Ваше здоровье!

const cookie = x => `Who ate the last cookie? It was ${{string: 'Zach', number: 'Monica' } [typeof x] || 'the dog'}!`;


function cookie(x) {
  return typeof x == "string" ? "Who ate the last cookie? It was Zach!" : typeof x == "number" ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";
}

console.log(cookie("Ryan"));
console.log(cookie(2.3));
console.log(cookie(true));
console.log(cookie(false));