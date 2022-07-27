// Find the Difference in Age between Oldest and Youngest Family Members

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// На ежегодном семейном собрании семье нравится находить возраст самого старшего из живущих членов семьи и возраст самого младшего члена семьи и вычислять разницу между ними.

// Вам будет предоставлен массив возрастов всех членов семьи в любом порядке.Возраст будет указан целыми числами, поэтому ребенку в возрасте 5 месяцев будет присвоен «возраст» равный 0. Верните новый массив(кортеж в Python) с [самый младший возраст, самый старший возраст, разница между самым младшим и самым старшим возрастом возраст].

const differenceInAges = (ages) => {
  let newArr = [];
  let old = Math.max(...ages);
  let june = Math.min(...ages);
  newArr.push(june, old, old - june);
  return newArr;
} 
console.log(differenceInAges([82, 15, 6, 38, 35]));
console.log(differenceInAges([57, 99, 14, 32]))