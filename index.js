const createBoard = (size) => {
  const boardContainer = document.querySelector('.board');
  removeGrid();

  for (let i = 0; i < size; i++) {
    const createRow = document.createElement('div');
    createRow.classList.add('square-row');
    boardContainer.appendChild(createRow);

    for (let j = 0; j < size; j++) {
      const createSquare = document.createElement('div');
      createSquare.classList.add('square');
      createRow.appendChild(createSquare);
    }
  } 
}

const fillInSquare = () => {
  const allSquares = document.querySelectorAll('.square');

  allSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('change-color');
    });
  });
}

const removeGrid = () => {
  const board = document.querySelector('.board');
  const squareRow = document.querySelectorAll('.square-row');

  squareRow.forEach(row => {
    board.removeChild(row);
  })
}

const changeSize = () => {
  const changeSizeButton = document.querySelector('.change-size');

  changeSizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter size of grid');

    if (newSize > 0 && newSize <= 100) {
      createBoard(newSize);
      fillInSquare();
    } else {
      newSize = alert('Number is too large! Enter a number between the range 1 and 101.');
    }
  });
}

changeSize();
