
var userName = prompt('What\'s Your Name?');
alert('Hello '+ userName +'\! Thanks for coming to my first website. Let\'s play a game so that you can get to know me a better.');


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

if (answerThree.toUpperCase() === myAnswerThree) {
  alert('Correct! I\'m more of a night owl.');
} else {
  alert('Incorrect! I\'m not an early bird.');
}

var holiday = prompt('What is my favorite holiday?');
var myHoliday = 'HALLOWEEN';

if (holiday.toUpperCase() === myHoliday) {
  alert('Correct! I love costume parties!');
} else {
  alert('Wrong!  Halloween is my favorite holiday.');
}

var color = prompt('Is purple my favorite color?');
var myColor = 'NO';

if (color.toUpperCase() === myColor) {
  alert('Correct! I love green.');
} else {
  alert('Nice try, but green is actually my favorite color.  I love being surrounded by plants!');
}

var myMovement = ['yoga', 'hiking', 'qi gong', 'dancing'];
var movement = prompt('Name one of my favorite forms of exercise.');

if (myMovement.indexOf(movement)!== -1) {
  alert('You\'re right, ' + movement + ' is one of my favorite forms of exercise.');
} else {
  alert('That\'s not one of my favorites. I prefer yoga, qi goong, hiking, and dancing.');
}


var beverage = prompt('What is one of my favorite beverages?');

if(beverage.toLowerCase === 'kombucha' || 'green smoothies' || 'coconut water' || 'herbal tea'){
  console.log('You guessed correct! My favorite beverages are kombucha, green smoothies, coconut water, and herbal tea.');
} else {
  console.log('That is incorrect.  We must have different taste in drinks.');
}




function checkGuess() {
  for(var i = 0; i <= 4; i++) {
    var yearsVegan = 18;
    // var counter = 0;
    var correct = false;
  }
  while ((counter > 4) && (correct === false));
  var guess = prompt('Can you guess how many years I have been vegan?');
  if(guess < yearsVegan) {
    alert('You\'re guess is too low.');
  }
  if(guess > yearsVegan) {
    alert('You\'re guess is too high');
  }
  if(guess === yearsVegan){
    alert('You\'re correct! Great guess.');
    correct = true;
  }
  if(counter < 4){
    alert('Sorry, you ran out of guesses.  The answer was 18.');
  }
}
checkGuess();

var arr ['Pennsylvania',  ]
var counter = 0;
for (var c = 0; c < arr.length; c++) {
  alert('You got ' + arr.lenth + ' questions out of eight correct!  Thanks for playing.')
}
// //This loop runs for each of 4 guesses//
// if (guess === yearsVegan){
//   alert('Great guess! You are correct!');
// } else {
//   alert('Please guess again.')
//  }
//
//  if (counter === numGuess) {
//    alert('Sorry, game over.');
//  }
// if(guess < yearsVegan){
//   alert('You\'re guess is to low')
// }
