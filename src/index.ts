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
const currentComboX: number[] = [];
const currentComboO: number[] = [];

let currentSymbol: string = "X";
let activePlayer: string = "";
let player1Name: string;
let player2Name: string;

if (form) form.addEventListener("submit", handleSubmit);
fieldies.forEach((fieldy) => {
  fieldy.addEventListener("click", handlePlayerMove);
});

function checkForVictory(arr: number[]) {
  const victory = winningCombos.find((combo) =>
    combo.every((num) => arr.includes(num))
  );
  if (victory) alert("Victory!");
}

function handlePlayerMove(e: MouseEvent) {
  const target = e.target as HTMLElement;
  target.innerText = currentSymbol;
  target.removeEventListener("click", handlePlayerMove);
  if (currentSymbol === "X") {
    currentComboX.push(Number(target.dataset.id));
    checkForVictory(currentComboX);
  } else {
    currentComboO.push(Number(target.dataset.id));
    checkForVictory(currentComboO);
  }
  currentSymbol = currentSymbol === "X" ? "O" : "X";
  player1GameName?.classList.toggle("active-player");
  player2GameName?.classList.toggle("active-player");
  swapPlayers();
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
  menu?.classList.add("visually-hidden");
  field?.classList.remove("visually-hidden");
  if (player1GameName) player1GameName.innerText = player1Name;
  if (player2GameName) player2GameName.innerText = player2Name;
}
