// Who is going to pay for the wall ?

//   Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go.Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it.He begins to solicit his neighbors to petition to get the association to build the wall.Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names.As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array.If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

// Дон Драмфет живет в хорошем районе, но один из его соседей начал сдавать его дом.Дон Драмфет хочет построить стену между своим домом и домом соседа и пытается заставить местную ассоциацию заплатить за это.Он начинает просить своих соседей подать прошение, чтобы ассоциация построила стену.К несчастью для Дона Драмфета, он не очень хорошо читает, у него очень ограниченный объем внимания и он может запомнить только две буквы из имен каждого из своих соседей.Собирая подписи, он настаивает на том, чтобы его соседи продолжали сокращать свои имена, пока не останется две буквы, и он, наконец, сможет их прочитать.

// Ваш код покажет полное имя соседа и усеченную версию имени в виде массива.Если количество символов в имени меньше или равно двум, будет возвращен массив, содержащий только имя как есть.

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

const whoIsPaying = name => [...new Set([name, name.slice(0, 2)])];