//Task 1

var s = 'RandomString';
var newLength = 3;

function truncate(s, newLength) {
  return s.substring(0, newLength) + '...';
}
console.log(truncate(s, newLength));

//Task 2

var s = 'Назва Львів дана місту на честь князя Лева Даниловича, сина засновника Львова Данила Галицького.';
var neededLetter = 'а';

function getLetterQuantity(s, neededLetter) {
  var quantity = 0;
  var pos = 0;
  while (true) {
    pos = s.indexOf(neededLetter, pos + 1);
    if (pos != -1){
      quantity++;
    } else {
      break;
    }
  }
  return quantity;
}
console.log(getLetterQuantity(s, neededLetter));

//Task 3

var s = 'f xxxx sds ddd polityka sdvd politykavv xxxx3';
var replaced = ' ';

function replaceWords(s, replaced) {
  return s
    .replace(/ xxxx /gi, replaced)
    .replace(/ polityka /gi, replaced);
}
console.log(replaceWords(s, replaced));

//Task 4

var s = 'іва 24 уц ац34434ауку';

function getDigits(s) {
  return str.replace(/\D+/gi, '');
}
console.log(getDigits(s));