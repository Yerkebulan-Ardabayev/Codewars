// The Feast of Many Beasts
// All of the animals are having a feast! Each animal is bringing one dish.There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters.beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.They will not contain numerals.

// У всех животных праздник! Каждое животное приносит одно блюдо.Есть только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного.Например, большая голубая цапля приносит чесночный наан, а синица приносит шоколадный торт.

// Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы указать, разрешено ли животному принести блюдо на пир.

//   Предположим, что beastи dish всегда строчные строки, и каждая из них состоит как минимум из двух букв.beastи dishможет содержать дефисы и пробелы, но они не будут отображаться в начале или конце строки.Они не будут содержать цифр.

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}