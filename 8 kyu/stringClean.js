
// String cleaning

// Your boss decided to save money by purchasing some cut - rate optical character recognition software for scanning in the text of old novels to your database.At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

//   Examples(input -> output)
// '! !' -> '! !'
// '123456789' -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co - workers are looking to you for a solution to take this garbled text and remove all of the numbers.Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$ %^& !@* (): ; "'.,? all intact.

// Ваш босс решил сэкономить деньги, купив удешевленное программное обеспечение для оптического распознавания символов для сканирования текста старых романов в вашу базу данных.Поначалу кажется, что он хорошо захватывает слова, но вы быстро замечаете, что он выбрасывает много чисел в случайных местах в тексте.

//   Примеры(ввод -> вывод)
// '! !' -> '! !'
// '123456789' -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Ваши измученные коллеги ищут у вас решение взять этот искаженный текст и удалить все числа.Ваша программа примет строку и очистит все числовые символы и вернет строку с пробелами и специальными символами ~#$ %^& !@* (): ; "'.,?без изменений.

const stringClean = (s) => s.replace(/[0-9]/g, '');
const stringClean = (s) => s.replace(/\d/gi, '');
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"))