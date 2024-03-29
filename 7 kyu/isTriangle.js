// Is this a triangle ?

//   Implement a function that accepts 3 integer values a, b, c.The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если можно построить треугольник со сторонами заданной длины, и false в любом другом случае.

// (В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми).

const isTriangle = (a, b, c) => a + b > c && b + c > a && c + a > b ? true : false;

console.log(isTriangle(1, 2, 2));