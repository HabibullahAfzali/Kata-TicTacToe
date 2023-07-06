let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameover = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(e) {
  if (gameover) {
    return;
  }

  const cell = e.target;
  const cellIndex = Array.from(cells).indexOf(cell);

  if (board[cellIndex] === "") {
    board[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin(currentPlayer)) {
      showWinner(currentPlayer);
      gameover = true;
      return;
    }

    if (checkDraw()) {
      showDraw();
      gameover = true;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin(player) {
  for (let combination of winningCombinations) {
    if (
      board[combination[0]] === player &&
      board[combination[1]] === player &&
      board[combination[2]] === player
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return board.every((cell) => cell !== "");
}

function showWinner(player) {
  alert(`Player ${player} wins!`);
}

function showDraw() {
  alert("It's a draw!");
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameover = false;
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);
