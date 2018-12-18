const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const resetIt = document.querySelector('.reset');

let randomNumber = Math.floor(Math.random()* 100) +1;

let guessCount = 1;


document.getElementById("reset").style.visibility = 'hidden'; //peidab reset nupu ära


const checkGuess = () => {
  let userGuess = Number(guessField.value);
  
  
  if (guessCount === 1) {
    guesses.textContent = 'Eelnevad pakkumised: '
  }
  
  guesses.textContent += `${userGuess} `;
  
  if (userGuess === randomNumber) {
    // Siin on see kood, kui kasutaja arvab õigesti
    lastResult.textContent = 'Nice job boiiii!';
    lastResult.style.backgroundColor = 'deeppink';
    lowOrHigh.textContent = '';
    document.getElementById("reset").style.visibility = '';
    document.getElementById("guessField").disabled = "true";
    document.getElementById("disable").disabled = "true";
    
    
  } else if (guessCount === 10) {
    //siia kood kui kasutaja on vastanud kümme korda mööda
    lastResult.textContent = 'Game over boiiii!';
    lastResult.style.backgroundColor = 'darkred';
    lastResult.style.color = 'white';
    lowOrHigh.textContent = '';
    document.getElementById("reset").style.visibility = ''; //reset nupp tuleb nähtavale
    document.getElementById("guessField").disabled = "true"; //disableib ära sisestusvälja ja alumine disableib kontrolli nupu ära ülemises koodis // // samamoodi
    document.getElementById("disable").disabled = "true";
    
    
    
  } else {
    lastResult.textContent = 'Wrong answer boiiii!';
    lastResult.style.backgroundColor = 'darkred';
    lastResult.style.color = 'white';
    
    const lowOrHighText = 'Viimane pakkumine oli ';
    
    if (userGuess < randomNumber) {
      // kui ta arvab vähem
      lowOrHigh.textContent = lowOrHighText + 'Too low boiiii';
    } else if (userGuess > randomNumber) {
      // kui ta arvab rohkem
      lowOrHigh.textContent = lowOrHighText + 'Too high boiiii';
    };
  };
  
  guessCount++
  guessField.value = '';
  guessField.focus();
  
};

const reset = () => {
  
  let userGuess = Number(guessField.value); // ei tea ei saanud tööle veel, pean uurima asja
  userGuess.value = "";
  guessCount = 1;
  randomNumber = Math.floor(Math.random() * 100) +1;
  return false;
  document.getElementById("disable").disabled = "false";
  
}


guessSubmit.addEventListener('click', checkGuess);
resetIt.addEventListener('click', reset);
