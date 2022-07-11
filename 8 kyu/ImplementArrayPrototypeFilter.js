// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter().Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.


// Мы хотим реализовать Array.prototype.filter() функцию, как и существующий файл Array.prototype.filter().Еще одна похожая функция есть _.filter()в underscore.js и lodash.js.

// Использование будет довольно простым, например:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Конечно, существующая Array.prototype.filter() функция не была определена для целей этого Ката.

Array.prototype.filter = function (func) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

