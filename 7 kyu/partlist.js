// Write a function partlist that gives all the ways to divide a list(an array) of at least two elements into two non - empty parts.

// Each two non empty parts will be in a pair(or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"]-- >
//   [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
// or
// a = { "az", "toto", "picaro", "zone", "kiwi"} -- >
//   {{ "az", "toto picaro zone kiwi" }, { "az toto", "picaro zone kiwi" }, { "az toto picaro", "zone kiwi" }, { "az toto picaro zone", "kiwi" }}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"]-- >
//   [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = [| "az", "toto", "picaro", "zone", "kiwi" |]-- >
//   [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"]-- >
//   "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

//   Напишите функцию partlist, которая дает все способы разделить список(массив) не менее чем из двух элементов на две непустые части.

// Каждые две непустые части будут в паре(или массиве для языков без кортежей или a structв C - C: см.Примеры тестовых случаев - )
// Каждая часть будет в строке
// Элементы пары должны быть в том же порядке, что и в исходном массиве.
// Примеры возвратов на разных языках:
// a = ["az", "toto", "picaro", "zone", "kiwi"]-- >
//   [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
// or
// a = { "az", "toto", "picaro", "zone", "kiwi"} -- >
//   {{ "az", "toto picaro zone kiwi" }, { "az toto", "picaro zone kiwi" }, { "az toto picaro", "zone kiwi" }, { "az toto picaro zone", "kiwi" }}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"]-- >
//   [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = [| "az", "toto", "picaro", "zone", "kiwi" |]-- >
//   [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"]-- >
//   "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
// Примечание
// Вы можете увидеть другие примеры для каждого языка в разделе "Ваши тестовые примеры".

const partlist = arr => arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1);