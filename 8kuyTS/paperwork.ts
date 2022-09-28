// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть «n» одноклассников, а в документах «m» страниц.

// Ваша задача — посчитать, сколько чистых страниц вам нужно. Если n < 0 или m < 0 вернуться 0.

// Пример:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Ждем переводов и отзывов! Спасибо!

export const paperwork = (n: number, m: number): number => n < 0 || m < 0 ? 0 : n * m;
