function remember(string) {
  var dublicates = [];
  while (string.length !== 0) {
    var letter = string.charAt(0);
    var regExp = new RegExp(letter, 'g');
    if (string.match(regExp).length !== 1) 
      dublicates.push(letter);
    string = string.replace(regExp, '');
  }
  return dublicates;
}
console.log(remember('apple'));
console.log(remember('apPle'));
console.log(remember('pippi'));
console.log(remember('Pippi'));