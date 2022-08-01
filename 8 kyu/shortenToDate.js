// Remove the time

// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

// Weekday Month Day, time e.g., Friday May 2, 7pm

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function, shortenToDate, that takes the Website date / time in its original string format, and returns the shortened format.

// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

// Вы перепроектируете блог, и записи в блоге имеют следующий формат для отображения даты и времени публикации:

// День недели Месяц День, время, например, пятница, 2 мая, 19: 00

// У вас заканчивается свободное место на экране, и на некоторых страницах вы хотите отображать более короткий формат, день недели, месяц, день, без времени.

// Напишите функцию shortenToDate, которая принимает дату / время веб - сайта в исходном строковом формате и возвращает сокращенный формат.

//   Предположим, что ввод shortenToDate всегда будет строкой, например, «Пятница, 2 мая, 19: 00».Предположим, что вывод shortenToDate будет сокращенной строкой, например, «Пятница, 2 мая».

const shortenToDate = (longDate) => longDate.split(',')[0]
console.log(shortenToDate("Friday May 2, 9am"));