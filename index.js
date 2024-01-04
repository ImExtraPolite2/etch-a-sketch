const createBoard = () => {
  const boardContainer = document.querySelector('.board');

  for (let i = 0; i < 16; i++) {
    const createRow = document.createElement('div');
    createRow.classList.add('square-row');
    boardContainer.appendChild(createRow);

    for (let j = 0; j < 16; j++) {
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
    })
  })
}

createBoard();
fillInSquare();