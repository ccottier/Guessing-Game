var count = 0;
var correctAnswers =[];


var userName = prompt('What\'s Your Name?');
alert('Hello '+ userName +'\! Thanks for coming to my first website. Let\'s play a game so that you can get to know me a better.');


var myAnswerOne = 'Pennsylvania';
var answerOne = prompt('In which state was I born?');

if (answerOne === myAnswerOne) {
  alert('You\'re correct! I was born in the oldest hospital in the United States which was founded by Ben Franklin.');
  count++;
} else {
  alert('Sorry, that was incorrect.  I was born in Philadelphia, PA.');
}


var pet = prompt('Do I prefer dogs to cats?');
var myPet = 'NO';

if (pet.toUpperCase() === myPet) {
  alert('Correct! I love cats.');
  count++;
} else {
  alert('Nope! I much prefer cats over dogs.');
}


var answerThree = prompt('Am I a morning person?');
var myAnswerThree = 'NO';

if (answerThree.toUpperCase() === myAnswerThree) {
  alert('Correct! I\'m more of a night owl.');
  count++;
} else {
  alert('Incorrect! I\'m not an early bird.');
}

var holiday = prompt('What is my favorite holiday?');
var myHoliday = 'HALLOWEEN';

if (holiday.toUpperCase() === myHoliday) {
  alert('Correct! I love costume parties!');
  count++;
} else {
  alert('Wrong!  Halloween is my favorite holiday.');
}

var color = prompt('Is purple my favorite color?');
var myColor = 'NO';

if (color.toUpperCase() === myColor) {
  alert('Correct! I love green.');
  count++;
} else {
  alert('Nice try, but green is actually my favorite color.  I love being surrounded by plants!');
}

var myMovement = ['yoga', 'hiking', 'qi gong', 'dancing'];
var movement = prompt('Name one of my favorite forms of exercise.');

if (myMovement.indexOf(movement)!== -1) {
  alert('You\'re right, ' + movement + ' is one of my favorite forms of exercise.');
  count++;
} else {
  alert('That\'s not one of my favorites. I prefer yoga, qi goong, hiking, and dancing.');
}


var beverage = prompt('What is one of my favorite beverages?');

if(beverage.toLowerCase === 'kombucha' || 'green smoothies' || 'coconut water' || 'herbal tea'){
  console.log('You guessed correct! My favorite beverages are kombucha, green smoothies, coconut water, and herbal tea.');
  count++;
} else {
  console.log('That is incorrect.  We must have different taste in drinks.');
}


function checkGuess() {
  var yearsVegan = 18;
  var counter = 0;
  var guess = prompt('Can you guess how many years I have been vegan?');
  while ((counter > 4) && (guess !== 18)) {
    if(guess < yearsVegan) {
      alert('You\'re guess is too low.');
    }
    if(guess > yearsVegan) {
      alert('You\'re guess is too high');
    }
    if(guess === yearsVegan){
      alert('You\'re correct! Great guess.');
      count++;
    }
    if(counter < 4){
      alert('Sorry, you ran out of guesses.  The answer was 18.');
    }
  }
}
checkGuess();

// var favStones = ['herkimer', 'black tourmaline', 'apatite', 'labrodorite', 'amethyst', 'selenite', 'pyrite'];
//   var sixGuesses = 0;
//   var stones = prompt('I\'ve been a rock hound since I was a young child.  Can you guess some of my favorite gemstones or crystals? I\'ll give you six guesses.');
//
// for(var s=0; s < 6; i++) {
//   if ((favStones.indexOf(stones.toLowerCase)!== -1) && (sixGuesses < 6)) {
//     if(favStones.indexOf(stones.toLowerCase) === 1) {
//       alert('You\'re right, ' + stones + ' is one of my favorites.  My other favorites include herkimer, black tourmaline, apatite, labrodorite, amethyst, selenite, and pyrite.');
//       count++;
//   } else if {
//       alert('That\'s not one of my favorites.  Please guess again.');
//       sixGuesses++;
//     }
// while
//       (sixGuesses > 6);
//       alert('Sorry you ran out of guesses.  Most people don\'t love rocks & crystals as much as I do.  My favorites are herkimer, black tourmaline, apatite, labrodorite, amethyst, selenite, and pyrite.');
//     }
// favStones();


var favStones = ['herkimer', 'black tourmaline', 'apatite', 'labrodorite', 'amethyst', 'selenite', 'pyrite'];
var stones = prompt('I\'ve been a rock hound since I was a young child.  Can you guess some of my favorite gemstones or crystals? I\'ll give you six guesses.');
var s //counter
for(var s=0; s < 6; i++) {
while ((favStones.indexOf(stones.toLowerCase)!== -1) && (sixGuesses < 6)) {
    if alert('That\'s not one of my favorites.  Please guess again.');

  } else {
    (favStones.indexOf(stones.toLowerCase) === 1)
    alert('You\'re right, ' + stones + ' is one of my favorites.  My other favorites include herkimer, black tourmaline, apatite, labrodorite, amethyst, selenite, and pyrite.');
    count++;
  } else if {
    (sixGuesses >= 6);
    alert('Sorry you ran out of guesses.  Most people don\'t love rocks & crystals as much as I do.  My current favorites are herkimer, black tourmaline, apatite, labrodorite, amethyst, selenite, and pyrite.');
  }

favStones();

correctAnswers = [count];
alert('You got ' + count + ' questions out of eight correct!  Thanks for playing ' + userName + '!');
