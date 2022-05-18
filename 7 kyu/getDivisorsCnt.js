function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

//мой вариант
function getDivisorsCnt(n) {
  let count = 0;
  if (n % 2 === 0) {
    return count;
  }
  else if (n % 2 !== 0) {
    return
  }
}