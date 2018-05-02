// score control variables
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

// elements
const p1Button = document.querySelector('#p1');
const p2Button = document.getElementById('p2');
const resetButton = document.querySelector('#reset');
const p1ScoreSpan = document.querySelector('h1 span:nth-of-type(1)');
const p2ScoreSpan = document.querySelector('h1 span:nth-of-type(2)');
const winningScoreInput = document.querySelector('input[type="number"]');
const winningScoreSpan = document.querySelector('p span:nth-of-type(1)');

// set up event listener on p1 button
p1Button.addEventListener('click', function () {
  if (!gameOver) {
    p1Score += 1;
    p1ScoreSpan.textContent = p1Score;
    if (p1Score === winningScore) {
      gameOver = true;
      p1ScoreSpan.classList.add('green');
    }
  }
});

// set up event listener on p2 button
p2Button.addEventListener('click', function () {
  if (!gameOver) {
    p2Score += 1;
    p2ScoreSpan.textContent = p2Score;
    if (p2Score === winningScore) {
      gameOver = true;
      p2ScoreSpan.classList.add('green');
    }
  }
});

// set up event listener on reset button
resetButton.addEventListener('click', function () {
  resetScores();
});

// set up event listener on totalScoreInput
winningScoreInput.addEventListener('change', function () {
  winningScore = Number(this.value);
  winningScoreSpan.textContent = winningScore;
  resetScores();
});

function resetScores () {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1ScoreSpan.textContent = p1Score;
  p2ScoreSpan.textContent = p2Score;
  p1ScoreSpan.classList.remove('green');
  p2ScoreSpan.classList.remove('green');
}
