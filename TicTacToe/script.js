const gameBoard = document.getElementById("game-board");
const gridSizeSelector = document.getElementById("grid-size");
let board = [];

let currentPlayer = "X";

function createBoard(size){
    board = Array.from({ length: size }, () => Array(size).fill(null));


    gameBoard.innerHTML = "";
    currentPlayer= "X";

    gameBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

 for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row; 
      cell.dataset.col = col; 
      cell.addEventListener("click", () => handleCellClick(cell, row, col));
      gameBoard.appendChild(cell);
    }
  }
}

function handleCellClick(cell,row,col){
    if(!cell.textContent){
        cell.textContent = currentPlayer;
        board[row][col] = currentPlayer;
    
        if(checkWinner(row,col)){
            setTimeout(() => {
                alert(`Player ${currentPlayer} won`);
                createBoard(board.length); // Reiniciar el tablero
            }, 100);
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner(row,col){
    const size = board.length;
    const player = board[row][col];

    if(board[row].every((cell) => cell === player)) return true;

    if (board.every((row) => row[col] === player)) return true;

    if (row === col && board.every((_, idx) => board[idx][idx] === player)) return true;

    if (row + col === size - 1 && board.every((_, idx) => board[idx][size - 1 - idx] === player)) return true;

  // No hay ganador
  return false;

}

gridSizeSelector.addEventListener("change", (e)=> {
    const size = parseInt(e.target.value,10);
    createBoard(size);
}); 

createBoard(3);