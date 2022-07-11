// WeIrD StRiNg CaSe

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// Напишите функцию toWeirdCase( weirdcaseв Ruby), которая принимает строку и возвращает ту же строку со всеми символами с четным индексом в каждом слове в верхнем регистре и всеми символами с нечетным индексом в каждом слове в нижнем регистре. Только что объясненная индексация основана на нуле, поэтому нулевой индекс четный, поэтому этот символ должен быть в верхнем регистре, и вам нужно начинать заново для каждого слова.

// Передаваемая строка будет состоять только из букв алфавита и пробелов ( ' '). Пробелы будут присутствовать только в том случае, если слов несколько. Слова будут разделены одним пробелом ( ' ').

// Примеры:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
  return string.split(' ').map((v,i)=>v.split('').map((v,i)=>i%2===0?v.toUpperCase():v.toLowerCase()).join('')).join(' ')
}