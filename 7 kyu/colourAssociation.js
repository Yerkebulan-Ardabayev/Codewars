// Colour plays an important role in our lifes.Most of us like this colour better then another.User experience specialists believe that certain colours have certain psychological meanings for us.

// You are given a 2D array, composed of a colour and its 'common' association in each array element.The function you will write needs to return the colour as 'key' and association as its 'value'.

// For example:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

// Цвет играет важную роль в нашей жизни.Большинству из нас этот цвет нравится больше, чем другой.Специалисты по пользовательскому опыту считают, что определенные цвета имеют для нас определенное психологическое значение.

// Вам дан двумерный массив, состоящий из цвета и его «общей» ассоциации в каждом элементе массива.Функция, которую вы напишете, должна возвращать цвет как «ключ» и ассоциацию как «значение».

// Например:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

function colourAssociation(array) {
  return array.map(item => ({ [item[0]]: item[1] }));

}
console.log(colourAssociation([["red", "energy"], ["yellow", "creativity"], ["brown", "friendly"], ["green", "growth"]]));


function colourAssociation(array) {
  var ans = [];
  for (var i = 0; i < array.length; ++i) {
    var a = {};
    a[array[i][0]] = array[i][1];
    ans.push(a)
  }
  return ans;
}

function colourAssociation(array) {
  var res = [];
  array.forEach(i => res.push({ [i[0]]: i[1] }));
  return res;
}