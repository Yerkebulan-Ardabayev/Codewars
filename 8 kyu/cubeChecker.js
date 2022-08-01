// Find out whether the shape is a cube

// To find the volume(centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too(e.g volume or side is less than or equal to 0).

//   Note: the sides must be integers

//   Чтобы найти объем(в кубических сантиметрах) прямоугольного параллелепипеда, используйте формулу:

// volume = Length * Width * Height

// Но кто - то забыл использовать надлежащий учет, поэтому у нас есть только объем и длина одной стороны!

// Вы должны выяснить, равны ли стороны прямоугольного параллелепипеда(= является кубом).

// Возврат true, если кубоид может иметь равные стороны, возврат в false противном случае.

// Возврат false также для недопустимых чисел(например, объем или сторона меньше или равна 0).

//   Примечание: стороны должны быть целыми числами.

const cubeChecker = (volume, side) => side > 0 && volume == side * side * side;