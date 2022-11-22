export {};

const menu: HTMLElement | null = document.querySelector(".menu");
const field: HTMLElement | null = document.querySelector(".field");
const gameDiv = document.querySelector(".gameDiv");
const gameDivBot = document.querySelector(".gameDivBot");
const form: HTMLElement | null = document.querySelector(".form");
const player1: HTMLInputElement | null = document.querySelector("#player1");
const player2: HTMLInputElement | null = document.querySelector("#player2");
const player1GameName: HTMLElement | null =
  document.querySelector("#player1Name");
const player2GameName: HTMLElement | null =
  document.querySelector("#player2Name");
const fieldies: NodeListOf<HTMLElement> = document.querySelectorAll(".fieldy");
const fieldiesBot: NodeListOf<HTMLElement> =
  document.querySelectorAll(".fieldyBot");
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
const restartBtn = document.querySelector("#restartBtn");
const resetBtn = document.querySelector("#resetBtn");
const botStart = document.querySelector(".botButton");

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
fieldiesBot.forEach((fieldy) => {
  fieldy.addEventListener("click", handlePlayerMoveBot);
});
resetBtn?.addEventListener("click", reset);
restartBtn?.addEventListener("click", () => {
  if (confirm("Are you sure you want to restart?")) restart();
});
botStart?.addEventListener("click", startBotGame);

function handlePlayerMoveBot(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target.textContent === "") {
    target.innerText = currentSymbol;
    updateCombos(target);
    currentSymbol = currentSymbol === "X" ? "O" : "X";
    localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
    swapPlayers();
    saveData();
  } else {
    alert("This one is taken!");
  }
  checkPossibleWin(currentComboO);
}

function checkPossibleWin(arr: number[] | undefined) {
  if (arr?.includes(1)) {
    if (arr.includes(2) && !fieldiesBot[2].innerText) {
      setTimeout(() => {
        handleBotMove(2);
      }, 600);
      return;
    } else if (arr.includes(3) && !fieldiesBot[1].innerText) {
      setTimeout(() => {
        handleBotMove(1);
      }, 600);
      return;
    } else if (arr.includes(4) && !fieldiesBot[6].innerText) {
      setTimeout(() => {
        handleBotMove(6);
      }, 600);
      return;
    } else if (arr.includes(7) && !fieldiesBot[3].innerText) {
      setTimeout(() => {
        handleBotMove(3);
      }, 600);
      return;
    } else if (arr.includes(5) && !fieldiesBot[8].innerText) {
      setTimeout(() => {
        handleBotMove(8);
      }, 600);
      return;
    } else if (arr.includes(9) && !fieldiesBot[4].innerText) {
      setTimeout(() => {
        handleBotMove(4);
      }, 600);
      return;
    }
  } else if (arr?.includes(2)) {
    if (arr.includes(3) && !fieldiesBot[0].innerText) {
      setTimeout(() => {
        handleBotMove(0);
      }, 600);
      return;
    } else if (arr.includes(5) && !fieldiesBot[7].innerText) {
      setTimeout(() => {
        handleBotMove(7);
      }, 600);
      return;
    } else if (arr.includes(8) && !fieldiesBot[4].innerText) {
      setTimeout(() => {
        handleBotMove(4);
      }, 600);
      return;
    }
  } else if (arr?.includes(3)) {
    if (arr.includes(6) && !fieldiesBot[8].innerText) {
      setTimeout(() => {
        handleBotMove(8);
      }, 600);
      return;
    } else if (arr.includes(9) && !fieldiesBot[5].innerText) {
      setTimeout(() => {
        handleBotMove(5);
      }, 600);
      return;
    } else if (arr.includes(5) && !fieldiesBot[6].innerText) {
      setTimeout(() => {
        handleBotMove(6);
      }, 600);
      return;
    } else if (arr.includes(7) && !fieldiesBot[4].innerText) {
      setTimeout(() => {
        handleBotMove(4);
      }, 600);
      return;
    }
  } else if (arr?.includes(4)) {
    if (arr.includes(5) && !fieldiesBot[5].innerText) {
      setTimeout(() => {
        handleBotMove(5);
      }, 600);
      return;
    } else if (arr.includes(6) && !fieldiesBot[4].innerText) {
      setTimeout(() => {
        handleBotMove(4);
      }, 600);
      return;
    } else if (arr.includes(7) && !fieldiesBot[0].innerText) {
      setTimeout(() => {
        handleBotMove(0);
      }, 600);
      return;
    }
  } else if (arr?.includes(5)) {
    if (arr.includes(6) && !fieldiesBot[3].innerText) {
      setTimeout(() => {
        handleBotMove(3);
      }, 600);
      return;
    } else if (arr.includes(8) && !fieldiesBot[1].innerText) {
      setTimeout(() => {
        handleBotMove(1);
      }, 600);
      return;
    } else if (arr.includes(9) && !fieldiesBot[0].innerText) {
      setTimeout(() => {
        handleBotMove(0);
      }, 600);
      return;
    } else if (arr.includes(7) && !fieldiesBot[2].innerText) {
      setTimeout(() => {
        handleBotMove(2);
      }, 600);
      return;
    }
  } else if (arr?.includes(6)) {
    if (arr.includes(9) && !fieldiesBot[2].innerText) {
      setTimeout(() => {
        handleBotMove(2);
      }, 600);
      return;
    }
  } else if (arr?.includes(7)) {
    if (arr.includes(8) && !fieldiesBot[8].innerText) {
      setTimeout(() => {
        handleBotMove(8);
      }, 600);
      return;
    } else if (arr.includes(9) && !fieldiesBot[7].innerText) {
      setTimeout(() => {
        handleBotMove(7);
      }, 600);
      return;
    }
  } else if (arr?.includes(8)) {
    if (arr.includes(9) && !fieldiesBot[6].innerText) {
      setTimeout(() => {
        handleBotMove(6);
      }, 600);
      return;
    }
  }
  if (arr?.join("") === currentComboO.join("")) {
    checkPossibleWin(currentComboX);
  } else {
    buildCombo();
  }
}

function buildCombo() {
  if (!fieldiesBot[4].innerText) {
    setTimeout(() => {
      handleBotMove(4);
    }, 600);
  } else if (!fieldiesBot[0].innerText) {
    setTimeout(() => {
      handleBotMove(0);
    }, 600);
  } else if (!fieldiesBot[2].innerText) {
    setTimeout(() => {
      handleBotMove(2);
    }, 600);
  } else if (!fieldiesBot[6].innerText) {
    setTimeout(() => {
      handleBotMove(6);
    }, 600);
  } else if (!fieldiesBot[8].innerText) {
    setTimeout(() => {
      handleBotMove(8);
    }, 600);
  }
}

function handleBotMove(num: number) {
  console.log(num);
  fieldiesBot[num].innerText = currentSymbol;
  updateCombos(fieldiesBot[num]);
  currentSymbol = currentSymbol === "X" ? "O" : "X";
  localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
  swapPlayers();
  saveData();
}

function startBotGame() {
  showField(gameDivBot);
}

(function checkSaves() {
  const currentSaveX = localStorage.getItem("playerX");
  if (currentSaveX) {
    currentComboX = JSON.parse(currentSaveX);
    paintSaved("X", currentComboX);
  }
  const currentSaveO = localStorage.getItem("playerO");
  if (currentSaveO) {
    currentComboO = JSON.parse(currentSaveO);
    paintSaved("O", currentComboO);
  }

  let name1 = localStorage.getItem("player1");
  let name2 = localStorage.getItem("player2");
  if (name1 && name2) {
    setPlayers(name1, name2);
    showField(gameDiv);
  }

  const savedActive = localStorage.getItem("activePlayer");
  if (savedActive) currentSymbol = JSON.parse(savedActive);
})();

function reset() {
  const placeholderName = localStorage.getItem("player1") || "Player II";
  player1Name = localStorage.getItem("player2") || "Player I";
  player2Name = placeholderName || "Player II";

  localStorage.removeItem("playerX");
  localStorage.removeItem("playerO");
  localStorage.removeItem("activePlayer");

  localStorage.setItem("player1", player1Name);
  localStorage.setItem("player2", player2Name);
  location.reload();
}

function restart() {
  localStorage.clear();
  location.reload();
}

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
    const wantsMore = confirm("Victory! One more round?");
    if (wantsMore) reset();
    else restart();
  } else checkForNoMoves();
}

function checkForNoMoves() {
  if (currentComboO.length === 4 && currentComboX.length === 5) {
    const wantsReset = confirm("Oh no, no more moves! Reset?");
    wantsReset ? reset() : restart();
    return;
  }
}

function handlePlayerMove(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target.textContent === "") {
    target.innerText = currentSymbol;
    updateCombos(target);
    currentSymbol = currentSymbol === "X" ? "O" : "X";
    localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
    swapPlayers();
    saveData();
  } else {
    alert("This one is taken!");
  }
}

function updateCombos(target: HTMLElement) {
  if (currentSymbol === "X") {
    currentComboX.push(Number(target.dataset.id));
    if (currentComboX.length > 2)
      setTimeout(() => checkForVictory(currentComboX), 0);
  } else {
    currentComboO.push(Number(target.dataset.id));
    if (currentComboO.length > 2)
      setTimeout(() => checkForVictory(currentComboO), 0);
  }
}

function swapPlayers() {
  if (activePlayer === "" || player1Name) {
    activePlayer = player2Name;
  } else {
    activePlayer = player1Name;
  }
  player1GameName?.classList.toggle("active-player");
  player2GameName?.classList.toggle("active-player");
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  player1Name = player1?.value || "Player I";
  player2Name = player2?.value || "Player II";
  localStorage.setItem("player1", player1Name);
  localStorage.setItem("player2", player2Name);
  showField(gameDiv);
  setPlayers(player1Name, player2Name);
}

function setPlayers(name1: string, name2: string) {
  if (player1GameName && player2GameName) {
    player1GameName.innerText = `PlayerX: ${name1}`;
    player2GameName.innerText = `PlayerO: ${name2}`;
  }
}

function showField(thumb: Element | null) {
  menu?.classList.add("visually-hidden");
  thumb?.classList.remove("visually-hidden");
}
