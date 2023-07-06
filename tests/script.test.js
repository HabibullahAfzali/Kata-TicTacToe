const { handleCellClick, checkWin, checkDraw, resetGame } = require("../main");

test("handleCellClick should update board and currentPlayer", () => {
  const mockEvent = {
    target: { textContent: "", classList: { add: jest.fn() } },
  };
  const expectedBoard = ["", "", "", "", "", "", "", "", "X"];
  const expectedCurrentPlayer = "O";

  handleCellClick(mockEvent);

  expect(mockEvent.target.textContent).toBe("X");
  expect(mockEvent.target.classList.add).toHaveBeenCalledWith("X");
  expect(board).toEqual(expectedBoard);
  expect(currentPlayer).toBe(expectedCurrentPlayer);
});

test("checkWin should return true when there is a winning combination", () => {
  board = ["X", "X", "X", "", "", "", "", "", ""];
  const player = "X";

  expect(checkWin(player)).toBe(true);
});

test("checkWin should return false when there is no winning combination", () => {
  board = ["X", "O", "X", "", "", "", "", "", ""];
  const player = "X";

  expect(checkWin(player)).toBe(false);
});

test("checkDraw should return true when all cells are filled", () => {
  board = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];

  expect(checkDraw()).toBe(true);
});

test("checkDraw should return false when there are empty cells", () => {
  board = ["X", "O", "X", "", "", "", "", "", "O"];

  expect(checkDraw()).toBe(false);
});

test("resetGame should reset board and currentPlayer", () => {
  board = ["X", "O", "X", "", "", "", "", "", "O"];
  currentPlayer = "O";

  resetGame();

  expect(board).toEqual(["", "", "", "", "", "", "", "", ""]);
  expect(currentPlayer).toBe("X");
});
