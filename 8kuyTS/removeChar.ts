// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.You don't have to worry with strings with less than two characters.

// Это довольно просто.Ваша цель — создать функцию, которая удаляет первый и последний символы строки.Вам дан один параметр, исходная строка.Вам не нужно беспокоиться о строках, содержащих менее двух символов.

export const removeChar = (str: string): string => str.slice(1, -1);