// Grasshopper Order of Operations
// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

// Порядок действий кузнечика
// Вы выполняете вычисление 2 + 2 * 2 + 2 * 2 и ожидаете получить ответ 32, но вместо этого функция продолжает возвращать 10. Исправьте функцию, чтобы она возвращала 32 без изменения числа или операторов.

function orderOperations() {
  return (2 + 2) * (2 + 2) * 2
}