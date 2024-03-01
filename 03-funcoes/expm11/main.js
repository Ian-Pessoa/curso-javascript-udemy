function countVowels(word) {
  let lowerCase = word.toLowerCase();
  let count = 0;
  for(let i = 0; i < word.length; i++) {
    if (lowerCase[i] === 'a' || lowerCase[i] === 'e' || lowerCase[i] === 'i' || lowerCase[i] === 'o' || lowerCase[i] === 'u') {
      count++;
    }
  }
  return count;
}
