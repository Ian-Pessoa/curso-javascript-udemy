class WordCounter {
  constructor(){};

  countWords(string) {
    if(string === '') {
      return 0;
    }

    let arrayString = string.split(/\s+/);
    return arrayString.length;
  }
}