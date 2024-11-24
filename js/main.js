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
      square.style.backgroundColor = `rgb(${rng255()}, ${rng255()}, ${rng255()})`;
    }, {once : true});
  });
}

function decrementSquareOpacity() {
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('click', () => {
      
      let opacity = parseFloat(getComputedStyle(square).getPropertyValue('opacity'));

      if (!opacity) {
        square.style.opacity = '1';
      } else {
        opacity = (opacity - 0.1).toFixed(1);
        square.style.opacity = `${opacity}`;
      }
      console.log(getComputedStyle(square).getPropertyValue('opacity'));
    });
  });
}

constructGrid(16);
hoverDraw();
decrementSquareOpacity();

let newGridBtn = document.querySelector('.generate-new-grid');
newGridBtn.addEventListener('click', () => {
  let userDimensions = parseInt(prompt('How many squares per side? No more than 100. Default is 16.'));

  if (Number.isInteger(userDimensions) && (userDimensions >= 1 && userDimensions <= 100)) {
    removeAllChildNodes(grid);
    constructGrid(userDimensions);
    hoverDraw();
    decrementSquareOpacity();
  } else {
    alert('Grid unchanged.');
  }
});

let resetIcon = document.querySelector('img');
resetIcon.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  console.log(squares.length);

  squares.forEach((square) => {
    square.style.backgroundColor = 'white';
    square.style.opacity = '1';
  });
  hoverDraw();
});

