const cells = document.querySelectorAll(".cell");
const currentTurn = document.querySelector(".currentTurn");
const restartBtn = document.querySelector(".restart");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let fields = ["", "", "", "", "", "", "", "", ""]; // 9 Leere strings, hier können wir das Brett einfach darstellen für den Computer
let currentPlayer = "X";
let running = false;
var points1 = 0;
var points2 = 0;

const clicker = new Event("click");

loadGame();

function loadGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  currentTurn.textContent = `${currentPlayer}'s turn`;
  restartBtn.addEventListener("click", restartGame);
  running = true;
}

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = fields[condition[0]];
    const cellB = fields[condition[1]];
    const cellC = fields[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    if (currentPlayer == "X") points1++;
    else poins2++;
    alert(
      `${currentPlayer} wins! \nX has ${points1} Points\nO has ${points2} Points`
    );
    running = false;
  } else if (!fields.includes("")) {
    alert(`It is a draw! \nX has ${points1} Points\nO has ${points2} Points`);
    running = false;
  } else {
    changePlayer();
  }
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (fields[cellIndex] != "" || !running) {
    return;
  }
  updateCell(this, cellIndex);
  checkWinner();
}
function updateCell(cell, index) {
  fields[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  currentTurn.textContent = `${currentPlayer}'s turn`;

  if (currentPlayer == "O") {
    GiornoMove();
  }
}

function GiornoMove() {
  while (true) {
    var random = Math.floor(Math.random() * 9);
    if (fields[random] == "") {
      cells[random].dispatchEvent(clicker);
      break;
    }
  }
}

function restartGame() {
  currentPlayer = "X";
  fields = ["", "", "", "", "", "", "", "", ""];
  currentTurn.textContent = `${currentPlayer}'s turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}

function randombg() {
  var random = Math.floor(Math.random() * 5);
  var img = [
    "url(img/landscape-7236275_1280.jpg)",
    "url(img/lightning-7401119_1280.webp)",
    "url(img/mountains-7345777_1280.jpg)",
    "url(img/nature-6602056_1280.jpg)",
    "url(img/sea-7125929_1280.jpg)",
  ];
  document.getElementById("random").style.backgroundImage = img[random];
}
