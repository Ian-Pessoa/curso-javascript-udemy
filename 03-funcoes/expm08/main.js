function isPalindrome(word) {
  let reverseString = word.split('').reverse().join('');
  if(reverseString === word) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('radar');
isPalindrome('hello');