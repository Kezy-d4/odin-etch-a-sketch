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

constructGrid(100);
