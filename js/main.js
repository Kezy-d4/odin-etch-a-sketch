let container = document.querySelector('#container');
let grid = document.querySelector('.grid');

function constructGrid(dimensions) {
  for (let rowCounter = 1; rowCounter <= dimensions; rowCounter++) { 
    let row = document.createElement('div');

    for (let squareCounter = 1; squareCounter <= dimensions; squareCounter++) {
      let square = document.createElement('div');
      square.className = 'square';
      row.appendChild(square);
    }

    row.className = 'row';
    grid.appendChild(row);
  }

  let numberOfSquares = document.querySelectorAll('.square');
  console.log(numberOfSquares.length);
}

function hoverDraw() {
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = `rgb(${randomNumberGenerator()}, ${randomNumberGenerator()}, ${randomNumberGenerator()})`;
    });
  });
}

constructGrid(16);
hoverDraw();

let newGridBtn = document.querySelector('.generate-new-grid');
newGridBtn.addEventListener('click', () => {
  let userDimensions = parseInt(prompt('How many squares per side? No more than 100. Default is 16.'));

  if (Number.isInteger(userDimensions) && (userDimensions >= 1 && userDimensions <= 100)) {
    removeAllChildNodes(grid);
    constructGrid(userDimensions);
    hoverDraw();
  } else {
    alert('Grid unchanged.');
  }
});

let resetIcon = document.querySelector('img');
resetIcon.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.style.backgroundColor = 'white';
  });
});

