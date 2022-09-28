// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// Вы были в походе с друзьями далеко от дома, но когда пришло время возвращаться, вы понимаете, что топливо на исходе, а ближайшая заправка 50далеко! Вы знаете, что в среднем ваш автомобиль расходует около 25миль на галлон. Остаются 2галлоны.

// Учитывая эти факторы, напишите функцию, которая говорит вам, можно ли добраться до насоса или нет.

// Функция должна возвращаться true, если это возможно, а falseесли нет.

export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => mpg * fuelLeft >= distance;