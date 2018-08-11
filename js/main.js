window.addEventListener('load', init);

// Globals

// Available lavels
const lavels = {
    easy: 5,
    medium: 3,
    hard: 2
}

// To change lavel
const currentLavel = lavels.easy;

let time = currentLavel,
    score = 0,
    isPlaying;

// Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Initialize game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLavel;
  // Load word from array words
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
    if(matchWords()) {
      isPlaying = true;
      time = currentLavel + 1;
      showWord(words);
      wordInput.value = '';
      score++;
    }

    // If score is -1, display 0;
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    }else{
      scoreDisplay.innerHTML = score;
    }
}

// Match the current word to the Input
function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
      message.innerHTML = "Correct!!!";
      return true;
  }else{
    message.innerHTML = "";
    return false;
  }
}

// Pick and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
  // Check sure time is not run out
  if(time > 0) {
    // Decrement
    time--;
  } else if(time === 0) {
    // Game is over
    isPlaying = false;
  }
   // Show time
   timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
  if(!isPlaying && time === 0) {
      message.innerHTML = "Game over!!!";
      score = -1;
  }
}
