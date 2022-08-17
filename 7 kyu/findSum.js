// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8(3 + 5)

// findSum(10) should return 33(3 + 5 + 6 + 9 + 10)

// Ваша задача написать функцию findSum.

// До включительно n эта функция вернет сумму всех чисел, кратных 3 и 5.

// Например:

// findSum(5)должно вернуть 8(3 + 5)

// findSum(10)должно вернуть 33(3 + 5 + 6 + 9 + 10)

const findSum = number => {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
} 