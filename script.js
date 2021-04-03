'use strict';

let highscore = Number(document.querySelector('.label-highscore').textContent);
let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === num) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.guessed--number').textContent = num;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guessed--number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.label-highscore').textContent = highscore;
    }
  } else if (guess !== num) {
    if (score > 1) {
      displayMessage(guess > num ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  num = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guessed--number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.guessed--number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
