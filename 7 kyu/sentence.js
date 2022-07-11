// String Reordering

// The input will be an array of dictionaries.

// Return the values as a string - seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is - 999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

// Example
// Input:
// List = [
//   { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
//   { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
// ]

// Output:
// 'Vatsan took his dog for a spin'

// Входными данными будет массив словарей.

// Возвращает значения в виде предложения, разделенного строками, в порядке целочисленного эквивалента их ключей(в порядке возрастания).

// Ключи не повторяются, и их диапазон равен - 999 < key < 999. Ключи и значения словарей всегда будут строками и не будут пустыми.

//   Пример
// Input:
// List = [
//   { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
//   { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
// ]

// Output:
// 'Vatsan took his dog for a spin'

function sentence(List) {
  return List.sort((curr, next) => Object.keys(curr)[0] - Object.keys(next)[0]).map(item => item[Object.keys(item)[0]]).join(' ');
}