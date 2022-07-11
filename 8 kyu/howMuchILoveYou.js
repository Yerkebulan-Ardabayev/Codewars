// I love you, a little, a lot, passionately ... not at all

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// Кто помнит свое время на школьном дворе, когда девочки брали цветок и рвали его лепестки, произнося каждую из следующих фраз каждый раз, когда отрывался лепесток:

// Я тебя люблю
// немного
// много
// страстно
// безумно
// нисколько
// Когда был сорван последний лепесток, раздались крики волнения, мечты, нахлынувшие мысли и эмоции.

// Ваша цель в этом ката — определить, какую фразу девушки сказали бы о цветке с заданным количеством лепестков, где nb_petals > 0.
function howMuchILoveYou(nbPetals) {
  // your code
  const arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  for (let i = 0; i <= nbPetals - 1; i += 1) {

    if (i === nbPetals - 1) {
      return arr[i % 6];
    }
  }
}

const howMuchILoveYou = n => ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][n % 6]