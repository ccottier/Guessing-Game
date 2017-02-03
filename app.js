var count = 0;
// var correctAnswers = [];

// function user() {
//Try to use an iffe to make last alert in code work//

var userName = prompt('What\'s Your Name?');
alert('Hello '+ userName +'\! Thanks for coming to my first website. Let\'s play a game so that you can get to know me better.');


function birthState() {
  var myState = 'Pennsylvania';
  var state = prompt('In which state was I born?');

  if (state === myState) {
    alert('You\'re correct! I was born in the oldest hospital in the United States which was founded by Ben Franklin.');
    count++;
  } else {
    alert('Sorry, that was incorrect.  I was born in Philadelphia, PA.');
  }
}
birthState();

function cat(){

  var pet = prompt('Do I prefer dogs over cats?');
  var myPet = 'NO';

  if (pet.toUpperCase() === myPet) {
    alert('Correct! I have two cats.');
    count++;
  } else {
    alert('Nope! I much prefer cats over dogs.');
  }
}

cat();


function nightOwl() {

  var morning = prompt('Am I a morning person?');
  var myMorning = 'NO';

  if (morning.toUpperCase() === myMorning) {
    alert('Correct! I\'m more of a night owl.');
    count++;
  } else {
    alert('Incorrect! I\'m not an early bird.');
  }
}

nightOwl();


function halloween(){

  var holiday = prompt('What is my favorite holiday?');
  var myHoliday = 'HALLOWEEN';

  if (holiday.toUpperCase() === myHoliday) {
    alert('Correct! I love costume parties!');
    count++;
  } else {
    alert('Wrong!  Halloween is my favorite holiday.');
  }
}

halloween();

function green(){

  var color = prompt('Is purple my favorite color?');
  var myColor = 'NO';

  if (color.toUpperCase() === myColor) {
    alert('Correct! I love green.');
    count++;
  } else {
    alert('Nice try, but green is actually my favorite color.  I love being surrounded by plants!');
  }
}

green();


function yoga(){

  var myMovement = ['yoga', 'hiking', 'qi gong', 'dancing'];
  var movement = prompt('Name one of my favorite forms of exercise.');

  if (myMovement.indexOf(movement) !== -1) {
    alert('You\'re right, ' + movement + ' is one of my favorite forms of exercise.');
    count++;
  } else {
    alert('That\'s not one of my favorites. I prefer yoga, qi gong, hiking, and dancing.');
  }
}

yoga();


function kombucha(){

  var beverage = prompt('What is one of my favorite beverages?');

  if(beverage.toLowerCase === 'kombucha' || 'green smoothies' || 'coconut water' || 'herbal tea'){
    alert('You\'re correct! My favorite beverages are kombucha, green smoothies, coconut water, and herbal tea.');
    console.log('You\'re correct! My favorite beverages are kombucha, green smoothies, coconut water, and herbal tea.');
    count++;
  } else {
    console.log('That is incorrect.  We must have different taste in drinks.');
  }
}

kombucha();

//
// function checkGuess() {
//   var yearsVegan = 18;
//   for(var v = 0; v < 4; v++) {
//   // var counter = 0;
//   var guess = prompt('Can you guess how many years I have been vegan?');
//   while ((v < 4) && (guess !== yearsVegan)) {
//     if(guess < yearsVegan) {
//       alert('You\'re guess is too low.');
//     }
//     if(guess > yearsVegan) {
//       alert('You\'re guess is too high');
//     }
//     if(guess === yearsVegan){
//       alert('You\'re correct! Great guess.');
//       // count++;
//     } else {
//       alert('Sorry, you ran out of guesses. I have been a vegan for 18 years.');
//     }
//   }
// }
// checkGuess();

// function checkGuess() {
//   var yearsVegan = 18;
//   var counter = 0;
//   var guess = prompt('Can you guess how many years I have been vegan? You have 4 guesses');
//   while ((counter < 4) && (guess !== yearsVegan)) {
//     counter++;
//     if(guess < yearsVegan) {
//       alert('You\'re guess is too low.');
//       counter++;
//       } else if (guess > yearsVegan) {
//         alert('You\'re guess is too high');
//         // counter++;
//       } else if (guess === yearsVegan) {
//         alert('You\'re correct! Great guess.');
//       // count++;
//       } else {
//         alert('Sorry, you ran out of guesses. I have been a vegan for 18 years.');
//       }
//   }
// }
// checkGuess();

function vegan() {
  var yearsVegan = 18;
  var numGuesses = 0; //Keeps track of # of user Guesses.

  while(numGuesses < 4) {
    var userGuess = parseInt(prompt('Can you guess how long I have been a vegan?\n(You have ' + (4 - numGuesses) + ' guesses left.)'));
    if(userGuess === yearsVegan) {
      alert('You guessed correctly! I have been a vegan for 18 years.');
      numGuesses = 4;
      count++;
    } else if(userGuess < yearsVegan) {
      alert('Too low! Guess again.');
    } else if(userGuess > yearsVegan) {
      alert('Too high! Guess again.');
    } else {
      alert('You ran out of guesses. I have been a vegan for 18 years.');
    }
    numGuesses++;
  }
}
// (userGuess !== yearsVegan) {
vegan();


  function labrodorite(){
    var favStones = ['herkimer', 'black tourmaline', 'apatite', 'labrodorite', 'amethyst', 'selenite', 'pyrite'];
    var sixGuesses = 0;

    for(var s=0; s < 6; s++) {
      var stones = prompt('I\'ve been a rock hound since I was a kid.  Can you guess one of my favorite gemstones? You have six guesses.');
      if ((favStones.indexOf(stones.toLowerCase())!== -1) && (sixGuesses < 6)) {
        alert('You\'re right, ' + stones + ' is one of my favorites!  My other gemstones include herkimer, black tourmaline, apatite, labrodorite, amethyst, selenite, and pyrite.');
        count++;
      } else if (favStones.indexOf(stones.toLowerCase) === -1) {
        alert('That\'s not one of my favorites.  Please guess again.');
        sixGuesses++;
      }
    }
    if(sixGuesses === 6){
      alert('Sorry you ran out of guesses.  My favorites are herkimer, black tourmaline, apatite, labrodorite, amethyst, selenite, and pyrite.');
    }
  }

  labrodorite();

  count();
  // prompt('What\'s Your Name?');
  // // correctAnswers = [count];
  alert('You got ' + count + ' questions out of eight correct!  Thanks for playing ' + userName + '!');
