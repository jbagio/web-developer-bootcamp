// color variables
let numColors = 6;
let colors = [];
let colorToGuess;

// page elements
const squares = document.querySelectorAll('.square');
const colorDisplaySpan = document.querySelector('h1 span');
const messageSpan = document.getElementById('message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#btn-reset');
const modeButtons = document.querySelectorAll('.btn-mode');

init();

function init () {
  setupModeButtons();
  setupResetButton();
  setupSquares();
  // first reset
  resetGame();
}

function setupModeButtons () {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numColors = 3 : numColors = 6;
      resetGame();
    });
  }
}

function setupSquares () {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
      // compare clicked color with picked color
      const clickedColor = this.style.backgroundColor;
      if (clickedColor === colorToGuess) {
        // user guessed color
        messageSpan.textContent = 'That\'s correct!';
        resetButton.textContent = 'Play again?';
        changeSquaresColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageSpan.textContent = 'Try again!';
      }
    });
  }
}

function setupResetButton () {
  resetButton.addEventListener('click', function () {
    resetGame();
  });
}

function resetGame () {
  // generate new array of colors
  colors = fillRandomColors(numColors);
  // pick new winning color
  colorToGuess = pickWinningColor();
  // adjust color display on header
  colorDisplaySpan.textContent = colorToGuess;
  // clear message span
  messageSpan.textContent = '';
  // change reset button text
  resetButton.textContent = 'New colors';
  // assing colors to squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  // reset h1 to initial color
  h1.style.backgroundColor = '#40497e';
}

function changeSquaresColor (color) {
  // change the color of all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickWinningColor () {
  // get random element from colors array
  return colors[Math.floor(Math.random() * colors.length)];
}

function fillRandomColors (num) {
  // create and fill out array with num amount of random colors
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(generateRandomColor());
  }
  return arr;
}

function generateRandomColor () {
  // generate a random color with the "rgb(r, g, b)" format, where r, g and b are numbers between 0 and 255
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
