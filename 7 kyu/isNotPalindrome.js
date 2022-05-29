
const isNotPalindrome = (word) => {
  const newWord = word.toLowerCase().split('').reverse().join('');
  return word !== newWord;
  // if (word[0].toUpperCase() !== newWord[0]) {
  //   return false;
  // } else if (word === newWord) {
  //   return true;
  // }
}
  
console.log(isNotPalindrome('хекслет'));

const isPalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === reverse(lowerWord);
};

const isNotPalindrome = (word) => !isPalindrome(word)//вариант из курса;