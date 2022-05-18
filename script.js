function paperwork(n, m) {
  let a = n * m;
  
  if (n > 0 && m > 0) {
    return a;
  }
  if  (n < 0 || m < 0) {
    return 0;
  }
  else (n < 0 && m < 0)
  return 0
}
console.log(paperwork(8, 7));


function rockPaperScissors(p1, p2) {
  if (p1 === p2) {
    return `Draw!`;
  }
  if (p1 === 'rock' && p2 === 'scissors') {
    return `Player 1 won!`;
  } else if (p1 === 'paper' && p2 === 'rock') {
    return `Player 1 won!`;
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return `Player 1 won!`;
  } else {
    return `Player 2 won!`;
  }
}

  function getVolumeOfCuboid(length, width, height) {
    let V = length * width * height;
    return V;
  }
console.log(getVolumeOfCuboid(5, 5, 5));
  

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const newArray = [];
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newArray.push(str[i]);
    }
  }
  return newArray.join('');
}
console.log(disemvowel("This website is for losers LOL!"));

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  }
  else {
    return "No";
  }
}

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false
  }
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {
      return false
    }
  }
  return true
}