// You will be given an array and a limit value.You must check that all values in the array are below or equal to the limit value.If they are, return true.Else, return false.

// You can assume all values in the array are numbers.

// Вам будет предоставлено значение array и limit.Вы должны убедиться, что все значения в массиве ниже или равны предельному значению.Если они есть, верните true. Иначе возвращайся false.

// Вы можете предположить, что все значения в массиве являются числами.

const smallEnough = (a, limit) => !a.some((e) => e > limit);

function smallEnough(a, limit) {
  return Math.max(...a) <= limit
} 


console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));