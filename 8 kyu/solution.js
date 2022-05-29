// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент(строка) заканчивается вторым аргументом(тоже строкой).

function solution(str, ending) {
  return str.endsWith(ending);
}
console.log(solution('abcde', 'cde'));