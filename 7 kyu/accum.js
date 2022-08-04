// Mumbling

// This time no story, no theory.The examples below show you how to write function accum:

//   Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// На этот раз ни истории, ни теории.В приведенных ниже примерах показано, как написать функцию accum:

// Примеры:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Параметр accum представляет собой строку, состоящую только из букв из a..z и A..Z.

const accum = s => [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-");