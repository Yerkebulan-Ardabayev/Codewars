// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);  // return -1
// makeNegative(-5); // return -5
// makeNegative(0);  // return 0
// Notes
// The number can be negative already, in which case no change is required.
//   Zero(0) is not checked for any specific sign.Negative zeros make no mathematical sense.

//   В этом простом задании вам дается число, и вы должны сделать его отрицательным. А может быть, число уже отрицательное?

// Примеры
// makeNegative(1);  // return -1
// makeNegative(-5); // return -5
// makeNegative(0);  // return 0
// Заметки
// Число может быть уже отрицательным, и в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.

export const makeNegative = (num: number): number => num > 0 ? -num : num;
