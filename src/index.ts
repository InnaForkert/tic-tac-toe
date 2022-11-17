export const stuf = [];

const menu: HTMLElement | null = document.querySelector(".menu");
const field: HTMLElement | null = document.querySelector(".field");
const form: HTMLElement | null = document.querySelector(".form");
const player1: HTMLInputElement | null = document.querySelector("#player1");
const player2: HTMLInputElement | null = document.querySelector("#player2");
const player1GameName: HTMLElement | null =
  document.querySelector("#player1Name");
const player2GameName: HTMLElement | null =
  document.querySelector("#player2Name");
const fieldies: NodeListOf<HTMLElement> = document.querySelectorAll(".fieldy");
const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let currentComboX: number[] = [];
let currentComboO: number[] = [];
let currentSymbol: string = "X";
let activePlayer: string = "";
let player1Name: string;
let player2Name: string;

if (form) form.addEventListener("submit", handleSubmit);
fieldies.forEach((fieldy) => {
  fieldy.addEventListener("click", handlePlayerMove);
});

(function checkSaves() {
  const currentSaveX = localStorage.getItem("playerX");
  if (currentSaveX) {
    currentComboX = JSON.parse(currentSaveX);
    showField();
    paintSaved("X", currentComboX);
  }
  const currentSaveO = localStorage.getItem("playerO");
  if (currentSaveO) {
    currentComboO = JSON.parse(currentSaveO);
    showField();
    paintSaved("O", currentComboO);
  }

  let name1 = localStorage.getItem("player1");
  let name2 = localStorage.getItem("player2");
  if (name1 && name2) {
    setPlayers(JSON.parse(name1), JSON.parse(name2));
  }

  let savedActive = localStorage.getItem("activePlayer");
  if (savedActive) currentSymbol = savedActive;
})();

function paintSaved(N: string, arr: number[]) {
  fieldies.forEach((fieldy) => {
    if (fieldy.dataset.id && arr.includes(+fieldy.dataset.id)) {
      fieldy.innerText = N;
    }
  });
}

function saveData() {
  localStorage.setItem("playerX", JSON.stringify(currentComboX));
  localStorage.setItem("playerO", JSON.stringify(currentComboO));
}

function checkForVictory(arr: number[]) {
  const victory = winningCombos.find((combo) =>
    combo.every((num) => arr.includes(num))
  );
  if (victory) {
    setTimeout(() => {
      alert("Victory");
      localStorage.clear();
    }, 0);
    location.reload();
  }
}

function handlePlayerMove(e: MouseEvent) {
  const target = e.target as HTMLElement;
  target.removeEventListener("click", handlePlayerMove);
  target.innerText = currentSymbol;
  if (currentSymbol === "X") {
    currentComboX.push(Number(target.dataset.id));
    checkForVictory(currentComboX);
  } else {
    currentComboO.push(Number(target.dataset.id));
    checkForVictory(currentComboO);
  }
  currentSymbol = currentSymbol === "X" ? "O" : "X";
  localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
  player1GameName?.classList.toggle("active-player");
  player2GameName?.classList.toggle("active-player");
  swapPlayers();
  saveData();
}

function swapPlayers() {
  if (activePlayer === "" || player1Name) {
    activePlayer = player2Name;
  } else {
    activePlayer = player1Name;
  }
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  player1Name = player1?.value || "Player1";
  player2Name = player2?.value || "Player2";
  localStorage.setItem("player1", player1Name);
  localStorage.setItem("player2", player2Name);
  showField();
  setPlayers(player1Name, player2Name);
}

function setPlayers(name1: string, name2: string) {
  if (player1GameName && player2GameName) {
    player1GameName.innerText = name1;
    player2GameName.innerText = name2;
  }
}

function showField() {
  menu?.classList.add("visually-hidden");
  field?.classList.remove("visually-hidden");
}
