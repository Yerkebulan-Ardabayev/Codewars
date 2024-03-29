// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" -- > "www.codewars.com"
// "www.codewars.com?page=1" -- > "www.codewars.com?page=1"

// Завершите функцию / метод, чтобы он возвращал URL - адрес с чем - либо после # удаления привязки().

//   Примеры
// "www.codewars.com#about" -- > "www.codewars.com"
// "www.codewars.com?page=1" -- > "www.codewars.com?page=1"

const removeUrlAnchor = url => url.replace(/#.*/, '');

console.log(removeUrlAnchor('www.codewars.com#about'));