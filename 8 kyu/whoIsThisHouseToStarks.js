// Напишите для Сэма функцию whoIsThisHouseToStarks(), которая принимает на вход фамилию семьи и возвращает одно из трёх значений: 'friend', 'enemy', 'neutral'.

// Правила определения:

// Друзья('friend'): 'Karstark', 'Tally'
// Враги('enemy'): 'Lannister', 'Frey'
// Любые другие семьи считаются нейтральными

const whoIsThisHouseToStarks = (surname) => {
  let surnameType;

  if (surname === 'Karstark' || surname === 'Tally') {
    surnameType = 'friend';
  } else if (surname === 'Lannister' || surname === 'Frey') {
    surnameType = 'enemy';
  } else if (surname === 'undefined') {
    surnameType = 'neutral';
  }
  else {
    surnameType = 'neutral';
  }
  return surnameType;
};