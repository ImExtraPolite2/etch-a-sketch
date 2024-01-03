const createBoard = () => {
  const boardContainer = document.querySelector('.board');

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const createSquare = document.createElement('div');
      createSquare.classList.add('square');
      boardContainer.appendChild(createSquare);
    }
    const nextLine = document.createElement('br');
    boardContainer.appendChild(nextLine);
  } 
}

createBoard();