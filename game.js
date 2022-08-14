//WORDLE GAME//
//word to guess: MARRY
// input 'pizza'
// output [ , , , , a]
//'apple'
// output [a, , , , ]
//uppercase: right place and right letter
//lowercase: right letter but wrong place
//empty: not in the word


//TO DO LIST
//get an array with lots of popular 5 letter words
const wordBank = [
    'Abuse',
    'Adult',
    'Agent',
    'Anger',
    'Apple',
    'Award',
    'Basis',
    'Beach',
    'Birth',
    'Block',
    'Blood',
    'Board',
    'Brain',
    'Bread',
    'Break',
    'Brown',
    'Buyer',
    'Cause',
    'Chain',
    'Chair',
    'Chest',
    'Chief',
    'Child',
    'China',
    'Claim',
    'Class',
    'Clock',
    'Coach',
    'Coast',
    'Court',
    'Cover',
    'Cream',
    'Crime',
    'Cross',
    'Crowd',
    'Crown',
    'Cycle',
    'Dance',
    'Death',
    'Depth',
    'Doubt',
    'Draft',
    'Drama',
    'Dream',
    'Dress',
    'Drink',
    'Drive',
    'Earth',
    'Enemy',
    'Entry',
    'Error',
    'Event',
    'Faith',
    'Fault',
    'Field',
    'Final',
    'Floor',
    'Focus',
    'Force',
    'Frame',
    'Frank',
    'Front',
    'Fruit',
    'Glass',
    'Grant',
    'Grass',
    'Green',
    'Group',
    'Guide',
    'Heart',
    'Henry',
    'Horse',
    'Hotel',
    'House',
    'Image',
    'Index',
    'Input',
    'Issue',
    'Japan',
    'Jones',
    'Judge',
    'Knife',
    'Laura',
    'Layer',
    'Level',
    'Lewis',
    'Light',
    'Limit',
    'Lunch',
    'Major',
    'March',
    'Match',
    'Metal',
    'Model',
    'Money',
    'monke',
    'Month',
    'Motor',
    'Mouth',
    'Music',
    'Night',
    'Noise',
    'North',
    'Novel',
    'Nurse',
    'Offer',
    'onion',
    'Order',
    'Other',
    'Owner',
    'Panel',
    'Paper',
    'Party',
    'Peace',
    'Peter',
    'Phase',
    'Phone',
    'Piece',
    'Pilot',
    'Pitch',
    'Place',
    'Plane',
    'Plant',
    'Plate',
    'Point',
    'Pound',
    'Power',
    'Press',
    'Price',
    'Pride',
    'Prize',
    'Proof',
    'Pizza',
    'Queen',
    'Radio',
    'Range',
    'Ratio',
    'Reply',
    'Right',
    'River',
    'Round',
    'Route',
    'Rugby',
    'Scale',
    'Scene',
    'Scope',
    "Score",
    'Sense',
    'Shape',
    'Share',
    'Sheep',
    'Sheet',
    'Shift',
    'Shirt',
    'Shock',
    'Sight',
    'Simon',
    "Skill",
    "Sleep",
    'Smile',
    'Smith',
    'Smoke',
    'Sound',
    'South',
    'Space',
    'Speed',
    'Spite',
    'Sport',
    'Squad',
    'Staff',
    'Stage',
    "Start",
    "State",
    "Steam",
    "Steel",
    "Stock",
    "Stone",
    "Store",
    "Study",
    "Stuff",
    "Style",
    "sugar",
    "table",
    "taste",
    "terry",
    "theme",
    "thing",
    "title",
    "total",
    "touch",
    "tower",
    "track",
    "trade",
    "train",
    "trend",
    "trial",
    "trust",
    'truth',
    'uncle',
    'union',
    'unity',
    'value',
    'video',
    'visit',
    'voice',
    'waste',
    'watch',
    'water',
    'while',
    'white',
    'whole',
    'woman',
    'world',
    'youth'
  ]
  
  //function to select random word index
  function generateRandomWord(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //assigns newWords to random generated word
  let newWords = wordBank[generateRandomWord(0, 210)].toLowerCase();
  
  
  function wordle() {
    //about WORDLE
    console.log('|||Welcome to WORDLE|||')
    console.log()
    console.log('How to Play: Guess the 5 letter word!')
    console.log()
    console.log('UpperCase letters mean you have the right')
    console.log("letter in the right place.")
    console.log()
    console.log('LowerCase letters mean you have the right')
    console.log("letter BUT wrong place.")
    console.log()
    console.log('Empty Spaces mean the letter is not found in the word.')
    console.log()
    console.log('You have 6 tries to guess the word! Have fun playing!')
    console.log();
  
    //declare a variable called count with value 0 and guess for our closed over variable enviornment 
    let count = 0;
    let guess;
    //declare anon func
    return function() {
      //increment counter and generate new word to be stored in COVE
      count++;
      if (count === 1) {
        //guess is stored as the target word
        guess = newWords
      }
      // console.log(guess)
      //declare output as empty array
      let output = []
      //loop up to 6 times thru game data, incrementing count each loop
      while (count <= 6) {
        count++;
        //enter 5 letter word input
        str = prompt('Please Input 5 Letter Word').toLowerCase();
        //if word is not 5 letter, input a new word
        while (str.length !== 5) {
          str = prompt('Your input is not 5 letters, please try again').toLowerCase();
        }
        //loop over str
        for (let i = 0; i < str.length; i++) {
          //if the current element is at the correct index and is the correct letter, push uppercase letter to output
          if (str[i] === guess[i]) output.push(str[i].toUpperCase())
          //if current element is included in guess word, but not at right index, push lowercase to output
          else if (guess.includes(str[i])) output.push(str[i])
          //if current element does not appear in guess, push empty space
          else output.push(" ")
        }
        //log the array with correct/incorrect results + tries left
        console.log(output, "Tries Left:", 7 - count)
        //if guess = input word, you win! :)
        if (guess === str) {
          console.log()
          return console.log('You Win! Thanks for playing! :)');
        }//reassigns output as empty array to get ready for new word
        output = []
      }
      console.log()
      //after 6 tries, you lose1 :(
      return console.log(`You Lose!, The word was ${guess}!`)
    }
  }
  //runs the game
  const wordleGuess = wordle();
  wordleGuess();
  
  
  //if count <= 6, throw new prompt asking for new input
  //return win/lose with guess + output array