//Selectors
const gameboard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById("playText");
const restartBtn = document.getElementById("restartBtn");
const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += "border-bottom: 3px solid var(--black);";
    }
    if (index % 3 === 0) {
      styleString += "border-right: 3px solid var(--black);";
    }
    if (index % 3 === 2) {
      styleString += "border-left: 3px solid var(--black);";
    }
    if (index > 5) {
      styleString += "border-top: 3px solid var(--black);";
    }
    box.style = styleString;

    //Event Listeners
    box.addEventListener("click", boxClicked);
    restartBtn.addEventListener("click", boxClicked);

    //Functions
  });
};
function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (playerHasWon(currentPlayer)) {
      playText.innerText = `$(currentPlayer) has won!`;
      return;
    }
    currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
  }
}

const playerHasWon = () => {
  //from top left, check across, down, and diagonal
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`$(currentPlayer) wins up top!`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`$(currentPlayer) wins on left!`);
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      console.log(`$(currentPlayer) wins diagonally!`);
      return true;
    }
  }
  //from bottom check up and across
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`$(currentPlayer) wins on the right!`);
      return true;
    }
    if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`$(currentPlayer) wins on the bottom!`);
      return true;
    }
  }
  //from middle check middle vertical and middle horizontal
  if (spaces[4] === player) {
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`$(currentPlayer) wins horizontal middle!`);
      return true;
    }
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`$(currentPlayer) wins vertical middle!`);
      return true;
    }
  }
};

const restart = () => {
  spaces.forEach((spaces, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerText = `Play Time!`;

  currentPlayer = O_TEXT;
};

drawBoard();
