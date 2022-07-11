// Who is the killer ?
//   Some people have been killed!
// You have managed to narrow the suspects down to just a few.Luckily, you know every person who those suspects have seen on the day of the murders.

//   Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {
//   'James': ['Jacob', 'Bill', 'Lucas'],
//     'Johnny': ['David', 'Kyle', 'Lucas'],
//       'Peter': ['Lucy', 'Kyle']
// }
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

// Кто убийца ?
//   Некоторые люди были убиты!
// Вам удалось сузить круг подозреваемых до нескольких человек.К счастью, вы знаете всех, кого подозреваемые видели в день убийства.

//   Задача.
// Дан словарь со всеми именами подозреваемых и всех, кого они видели в тот день, который может выглядеть так:

// {
//   'James': ['Jacob', 'Bill', 'Lucas'],
//     'Johnny': ['David', 'Kyle', 'Lucas'],
//       'Peter': ['Lucy', 'Kyle']
// }
// а также список имен погибших людей:

// ['Lucas', 'Bill']
// вернуть имя одного убийцы, в нашем случае, 'James' потому что он единственный человек, который видел и то, 'Lucas'и другое.'Bill'

function killer(suspectInfo, dead) {
  let result = '';
  for (let key in suspectInfo) {
    let count = 0;
    for (let i = 0; i < dead.length; i++) {
      if (suspectInfo[key].includes(dead[i])) {
        count++;
      }
    }
    if (count === dead.length) {
      result = key;
    }
  }
  return result;
}