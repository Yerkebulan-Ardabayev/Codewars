// Take the Derivative

// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent.Then, it has to print out an expression(like 28x ^ 7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8)-- > this should output "56x^7"
// derive(5, 9)-- > this should output "45x^8"
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0

// Эта функция принимает в качестве параметров два числа, первое число — коэффициент, а второе — показатель степени.

// Ваша функция должна умножить два числа, а затем вычесть 1 из показателя степени.Затем он должен распечатать выражение(например, 28x ^ 7). "^1"не следует усекать, когда показатель степени = 2.

// Например:

// derive(7, 8)
// В этом случае функция должна умножить 7 и 8, а затем вычесть 1 из 8. Она должна вывести "56x^7", первое число 56 будет произведением двух чисел, а второе число будет показателем степени минус 1.

// derive(7, 8)-- > this should output "56x^7"
// derive(5, 9)-- > this should output "45x^8"
// Заметки:

// Вывод этой функции должен быть строкой
// Показатель степени никогда не будет равен 1, и ни одно из чисел никогда не будет равно 0.

const derive = (coefficient, exponent) => `${coefficient * exponent}x^${exponent - 1}`