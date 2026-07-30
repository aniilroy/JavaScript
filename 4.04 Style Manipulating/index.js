'use strict'
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';
document.querySelector('.number').textContent= 13;
document.querySelector('.score').textContent= 21;
document.querySelector('.guess').value = 17;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Initial Game Score
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No Input
  if (!guess) {
    document.querySelector('.message').textContent =
      '🚫 Please enter a number!';
  }

  // Correct Guess
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 Congratulations! Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    // High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // Wrong Guess (Too High / Too Low)
  else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'; //Ternary operator

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  // New Secret Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset Score
  score = 20;

  // Reset UI
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Reset Background
  document.body.style.backgroundColor = '#222';
});