const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

let randomNumber = Math.floor(Math.random()* 100) +1;

let guessCount = 1;

const checkGuess = () => {
  let userGuess = Number(guessField.value);
  
  
  if (guessCount === 1) {
    guesses.textCount = 'Eelnevad pakkumised: '
  }
  
  guesses.textContent += `${userGuess} `;
  
  if (userGuess === randomNumber) {
    // Siin on see kood, kui kasutaja arvab õigesti
    //
  } else if (guessCount === 10) {
    //siia kood kui kasutaja on vastanud kümme korda mööda
  } else {
    if (userGuess < randomNumber) {
      // kui ta arvab vähem
    } else if (userGuess > randomNumber) {
      // kui ta arvab rohkem
    };
  };
  
  guessCount++
  
};


guessSubmit.addEventListener('click', checkGuess);