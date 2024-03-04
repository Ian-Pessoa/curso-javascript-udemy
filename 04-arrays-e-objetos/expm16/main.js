function sumUniqueNumbers(array) {
  let count;
  let total = 0;
  for(let i = 0; i < array.length; i++) {
    count = 0;
    for(let j = 0; j < array.length; j++) {
      if(array[i] === array[j]) {
        count++
      };

      if(count >= 2) {
        break;
      }
    }
    if(count < 2) {
      total += array[i];
    }
  }
  return total;
}
