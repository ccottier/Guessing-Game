
var userName = prompt('What\'s Your Name?');
alert('Hello '+ userName +'\! Thanks for coming to my first website. Let\'s play a game so that you can get to know me a better.');

// myFunction()

var myAnswerOne = 'Pennsylvania';


var answerOne = prompt('In which state was I born?');

if (answerOne === myAnswerOne) {
  alert('You\'re correct! I was born in the oldest hospital in the United States which was founded by Ben Franklin.');
} else {
  alert('Sorry, that was incorrect.  I was born in Philadelphia, PA.');
}



var pet = prompt('Do I prefer dogs to cats?');
var myPet = 'NO';

if (pet.toUpperCase() === myPet) {
  alert('Correct! I love cats.');
} else {
  alert('Nope! I much prefer cats over dogs.');
}


var answerThree = prompt('Am I a morning person?');
var myAnswerThree = 'NO';

if (answerThree.toUpperCase === myAnswerThree) {
  alert('Correct! I\'m more of a night owl.');
} else {
  alert('Incorrect! I\'m not an early bird.');
}


var answerFour = prompt('Is purple my favorite color?');
var myAnswerFour = 'NO';

if (answerFour.toUpperCase === myAnswerFour) {
  alert('Correct! I love green.');
} else {
  alert('Nice try, but green is actually my favorite color.');
}
// myAnswerFour()


// var answerFive = prompt('Is Halloween my favorite holiday?');
// myAnswerFive = ['Yes', || 'yes', || 'YES', || 'y', or 'Y'];
//
// if(answerFive ==== myAnswerFive) {
//   console.log('Correct! Halloween is my favorite holiday.  I love costume parties!');
// } else {
//   console.log('Actually, my favorite holiday is Halloween!');
// }
// myHoliday ()


var answerSix = prompt('What is one of my favorite beverages?');
var myAnswerSix = ['kombucha', 'green smoothies', 'coconut water', 'herbal tea'];

if(answerSix === myAnswerSix) {
  console.log('You guessed correct! My favorite beverages are kombucha, green smoothies, coconut water, and herbal tea.');
} else {
  console.log('That is incorrect.  We must have different taste in drinks.');
}
// myBeverages ()
