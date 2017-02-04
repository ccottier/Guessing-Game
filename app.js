var count = 0;
var totalQuestions = 9;

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
    alert('That is incorrect.  We must have different taste in drinks.');
    console.log('That is incorrect.  We must have different taste in drinks.');
  }
}

kombucha();


function vegan() {
  var yearsVegan = 18;
  var numGuesses = 0;

  for(var v = 0; v < 4; v++) {
    var userGuess = parseInt(prompt('Can you guess how long I have been a vegan?\n(You have ' + (4 - v) + ' guesses left.)'));

    if(userGuess < yearsVegan) {
      alert('You\'re guess is too low.');
      console.log(userGuess);
      console.log(userGuess < yearsVegan);
    }
    else if(userGuess > yearsVegan) {
      alert('You\'re guess is too high');
      console.log(userGuess);
      console.log(userGuess > yearsVegan);
    }
    else if(userGuess === 18) {
      alert('You\'re correct! Great guess.');
      count++;
      v = 5;
      // Added something to make the for loop end
    }
  }
  if((userGuess !== 18) && (numGuesses > 4)) {
    alert('Sorry, you ran out of guesses. I have been a vegan for 18 years.');
  }
}
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
    alert('Sorry you ran out of guesses.  My favorites stones are herkimer, black tourmaline, apatite, labrodorite, amethyst, selenite, and pyrite.');
  }
}

labrodorite();


userName();
alert('You got ' + count + ' questions out of ' + totalQuestions + ' correct!  Thanks for planying ' + userName + '!');
//Tells user how many questions they got correct // is not working
