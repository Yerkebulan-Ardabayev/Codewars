function fakeBin(x) {
  return x.split('').map(function (x) {
    if (x < 5) {
      return '0';
    } else {
      return '1';
    }
  }).join('');
}

function fakeBin(x) {
  let a = '';
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      a += 0;
    }
    else {
      a += 1
    }
  }
  return a;
}

console.log(fakeBin('45385593107843568'));