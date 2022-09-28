// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.

// Массив может содержать числа или строки. Х может быть любым.

// Возврат true, если массив содержит значение, false если нет.

export const check = (a: (number | string)[], x: number | string): boolean => a.includes(x);
