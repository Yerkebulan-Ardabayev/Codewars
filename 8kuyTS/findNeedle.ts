// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

// Сможете ли вы найти иголку в стоге сена?

// Напишите функцию findNeedle(), которая принимает array полный мусор, но содержит один"needle"

// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:

// "found the needle at position "плюс index он нашел иглу, так что:

// Пример (ввод --> вывод)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Примечание. В COBOL он должен возвращать "found the needle at position 6"

export const findNeedle = (haystack: any[]): string => `found the needle at position ${haystack.indexOf("needle")}`;
