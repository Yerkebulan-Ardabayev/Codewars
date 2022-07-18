// Smallest unused ID

// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted.For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

// Привет крутой программист!

// У вас есть много данных для управления, и, конечно же, вы используете отсчитываемые от нуля и неотрицательные идентификаторы, чтобы сделать каждый элемент данных уникальным!

// Поэтому вам нужен метод, который возвращает наименьший неиспользуемый идентификатор для вашего следующего нового элемента данных...

// Примечание.Данный массив используемых идентификаторов может быть несортированным.В целях тестирования могут быть повторяющиеся идентификаторы, но вам не нужно их находить или удалять!

// Продолжайте и закодируйте немного чистой удивительности!

const nextId = (ids) => ids.sort((a, b) => a - b).reduce((e, i) => e + (i === e), 0);

function nextId(ids) {
  let i = 0;
  while (ids.includes(i)) i++;
  return i;
}
