
// Closest elevator


// Given 2 elevators(named "left" and "right") in a building with 3 floors(numbered 0 to 2), write a function elevator accepting 3 arguments(in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor("left" / "right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0 - 2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

// Даны 2 лифта(с именами «левый» и «правый») в трехэтажном здании(с номером 0) 2, напишите функцию, elevator принимающую 3 аргумента(по порядку):

// left - Текущий этаж левого лифта
// right - Текущий этаж правого лифта
// call - Этаж, который вызвал лифт
// Он должен вернуть название ближайшего к вызываемому этажу лифта("left" / "right").

// В случае, когда оба лифта одинаково удалены от вызываемого этажа, выбирайте лифт справа.

// Вы можете предположить, что входные данные всегда будут действительными целыми числами от 0 до 2.

// Примеры:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

const elevator = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';