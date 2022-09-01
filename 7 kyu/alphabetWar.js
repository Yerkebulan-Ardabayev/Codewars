// Alphabet war

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters.The tension between left side letters and right side letters was too high and the war began.

//   Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight.When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

// w - 4
// p - 3
// b - 2
// s - 1
// The right side letters and their power:

// m - 4
// q - 3
// d - 2
// z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// Введение
// Идет война и никто не знает - война алфавитов!
// Есть две группы враждебных писем.Напряжение между левыми и правыми буквами было слишком велико, и началась война.

//   Задача
// Напишите функцию, которая принимает fight строку, состоящую только из строчных букв, и возвращает, кто победил в битве.Когда побеждает левая сторона, возвращаются Left side wins!, когда выигрывает правая сторона, возвращаются Right side wins!, в остальных случаях возвращаются Let's fight again!.

// Левые боковые буквы и их сила:

// w - 4
// p - 3
// b - 2
// s - 1
// Правые боковые буквы и их сила:

// m - 4
// q - 3
// d - 2
// z - 1
// Остальные письма не имеют силы и являются только жертвами.

//   Пример
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

const alphabetWar = fight => {
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  };
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  };
  let leftScore = 0;
  let rightScore = 0;
  for (let i = 0; i < fight.length; i++) {
    if (left[fight[i]]) {
      leftScore += left[fight[i]];
    } else if (right[fight[i]]) {
      rightScore += right[fight[i]];
    }
  }
  if (leftScore > rightScore) {
    return "Left side wins!";
  } else if (rightScore > leftScore) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}