// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super(the second and fourth letters).

// So given a string "super", we should return a list of[2, 4].

// Some examples:
// Mmmm => []
// Super => [2, 4]
// Apple => [1, 5]
// YoMama -> [1, 2, 4, 6]

// Мы хотим знать индекс гласных в данном слове, например, в слове супер две гласные(вторая и четвертая буквы).

// Таким образом, учитывая строку «super», мы должны вернуть список файлов[2, 4].

// Some examples:
// Mmmm => []
// Super => [2, 4]
// Apple => [1, 5]
// YoMama -> [1, 2, 4, 6]
// ЗАМЕТКИ
// Гласные в этом контексте относятся к: aeiouy(включая верхний регистр)
// Это проиндексировано[1..n](не нулевым индексом!)

const vowelIndices = word => {
  const vowels = 'aeiouy'.split('');
  return word.split('').map((letter, index) => vowels.includes(letter.toLowerCase()) ? index + 1 : null).filter(index => index);
}