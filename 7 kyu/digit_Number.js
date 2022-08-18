// Largest 5 digit number in a series
// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given.The number will be passed in as a string of only digits.It should return a five digit integer.The number passed may be as large as 1000 digits.

// В следующем 10 - значном числе:

// 1234567890
// 67890 это наибольшая последовательность из 5 последовательных цифр.

// Завершите решение так, чтобы оно возвращало наибольшую последовательность из пяти последовательных цифр, найденных в заданном числе.Число будет передано в виде строки, состоящей только из цифр.Он должен возвращать пятизначное целое число.Передаваемое число может состоять из 1000 цифр.

const solution = digits => Math.max(...digits.split('').map((x, i, a) => +(a.slice(i, i + 5).join(''))))