import { refs } from "./refs";
import { createBotCombo } from "./botCombo";
import { createSwal, createSwalConfirm, createSwalForbidden } from "./swal";
import { sounds } from "./sounds";
import "./sounds";

const {
  menu,
  gameDiv,
  gameDivBot,
  form,
  player1,
  player2,
  player1GameName,
  player2GameName,
  fieldies,
  fieldiesBot,
  restartBtn,
  restartBtnBot,
  resetBtn,
  resetBtnBot,
  botStart,
} = refs;

const { stepSound } = sounds;

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

let comboArray: number[] = createBotCombo();
let currentComboX: number[] = [];
let currentComboO: number[] = [];
let currentSymbol: string = "X";
let activePlayer: string = "";
let player1Name: string = "Player I";
let player2Name: string = "Player II";
let isBotGame: boolean;
let victory = false;

if (form) form.addEventListener("submit", handleSubmit);
botStart?.addEventListener("click", startBotGame);

fieldies.forEach((fieldy) => {
  fieldy.addEventListener("click", handlePlayerMove);
});
fieldiesBot.forEach((fieldy) => {
  fieldy.addEventListener("click", handlePlayerMoveBot);
});

resetBtn?.addEventListener("click", reset);
resetBtnBot?.addEventListener("click", reset);

restartBtn?.addEventListener("click", async () => {
  if (await createSwalConfirm("Are you sure you want to restart?")) restart();
});
restartBtnBot?.addEventListener("click", async () => {
  if (await createSwalConfirm("Are you sure you want to restart?")) restart();
});

// player vs player

// game start

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  isBotGame = false;
  setNames();
  showField(gameDiv);
  setPlayers(player1Name, player2Name);
}

function setNames() {
  player1Name = player1?.value || "Player I";
  player2Name = player2?.value || "Player II";
  localStorage.setItem("player1", player1Name);
  localStorage.setItem("player2", player2Name);
}

function showField(thumb: Element | null) {
  menu?.classList.add("visually-hidden");
  thumb?.classList.remove("visually-hidden");
}

function setPlayers(name1: string, name2: string) {
  if (player1GameName && player2GameName) {
    player1GameName.innerText = `PlayerX: ${name1}`;
    player2GameName.innerText = `PlayerO: ${name2}`;
  }
}

//player makes a move

function handlePlayerMove(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target.textContent === "") {
    paintSymbol(target);
    updateCombos(target);
    changeSymbol();
    swapPlayers();
    saveData();
  } else {
    createSwalForbidden("This one is taken!");
  }
}

function paintSymbol(div: HTMLElement) {
  div.innerText = currentSymbol;
  stepSound.play();
}

function updateCombos(target: HTMLElement) {
  if (currentSymbol === "X") {
    currentComboX.push(Number(target.dataset.id));
    if (currentComboX.length > 2) checkForVictory(currentComboX);
  } else {
    currentComboO.push(Number(target.dataset.id));
    if (currentComboO.length > 2) checkForVictory(currentComboO);
  }
}

function checkForVictory(arr: number[]) {
  victory = !!winningCombos.find((combo) =>
    combo.every((num) => arr.includes(num))
  );
  if (victory) {
    setTimeout(() => alertVictory(arr), 10);
  } else checkForNoMoves();
}

async function alertVictory(arr: number[]) {
  let wantsMore: boolean;
  if (isBotGame) {
    if (arr === currentComboX) {
      wantsMore = await createSwal("Yahoo! You win! Another round?", true);
    } else
      wantsMore = await createSwal(
        "Oh no, bot won:( Looking for revenge?",
        false
      );
  } else {
    wantsMore = await createSwal(
      `${activePlayer} was crushed! Another round?`,
      true
    );
  }
  if (wantsMore) reset();
  else restart();
}

async function checkForNoMoves() {
  if (currentComboO.length === 4 && currentComboX.length === 5) {
    const wantsReset = await createSwalConfirm("Oh no, no more moves! Reset?");
    wantsReset ? reset() : restart();
  }
}

function changeSymbol() {
  currentSymbol = currentSymbol === "X" ? "O" : "X";
  localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
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

function saveData() {
  localStorage.setItem("playerX", JSON.stringify(currentComboX));
  localStorage.setItem("playerO", JSON.stringify(currentComboO));
}

// check for saved progress

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

function paintSaved(N: string, arr: number[]) {
  fieldies.forEach((fieldy) => {
    if (fieldy.dataset.id && arr.includes(+fieldy.dataset.id)) {
      fieldy.innerText = N;
    }
  });
}

//player vs bot

function startBotGame() {
  isBotGame = true;
  clearCombos();
  showField(gameDivBot);
}

function clearCombos() {
  currentComboO = [];
  currentComboX = [];
}

function handlePlayerMoveBot(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target.textContent === "") {
    stopListening();
    paintSymbol(target);
    updateCombos(target);
    if (!victory) {
      currentSymbol = currentSymbol === "X" ? "O" : "X";
      if (currentSymbol === "O") botMove();
    }
  } else {
    createSwalForbidden("This one is taken!");
  }
}

function stopListening() {
  fieldiesBot.forEach((fieldy) =>
    fieldy.removeEventListener("click", handlePlayerMoveBot)
  );
}

function startListening() {
  fieldiesBot.forEach((fieldy) => {
    fieldy.addEventListener("click", handlePlayerMoveBot);
  });
}

function botMove() {
  let didntMakeAMove: undefined | boolean = true;
  if (!victory && didntMakeAMove) {
    didntMakeAMove = checkPossibleWin(currentComboO);
  }
  if (didntMakeAMove && !victory) {
    didntMakeAMove = checkPossibleWin(currentComboX);
  }
  if (didntMakeAMove && !victory) {
    didntMakeAMove = counterAttack(currentComboX);
  }
  if (didntMakeAMove && !victory) {
    buildCombo(comboArray);
  }
}

function handleBotMove(num: number) {
  setTimeout(() => {
    paintSymbol(fieldiesBot[num]);
    updateCombos(fieldiesBot[num]);
    currentSymbol = currentSymbol === "X" ? "O" : "X";
    startListening();
  }, 450);
}

//common

function reset() {
  if (isBotGame) {
    localStorage.clear();
    clearCombos();
    comboArray = createBotCombo();
    setTimeout(() => {
      currentSymbol = "X";
      fieldiesBot.forEach((fieldy) => (fieldy.innerHTML = ""));
      victory = false;
      startListening();
    }, 0);
  } else {
    const placeholderName = localStorage.getItem("player1") || "Player II";
    player1Name = localStorage.getItem("player2") || "Player I";
    player2Name = placeholderName || "Player II";

    localStorage.removeItem("playerX");
    localStorage.removeItem("playerO");
    localStorage.removeItem("activePlayer");

    localStorage.setItem("player1", player1Name);
    localStorage.setItem("player2", player2Name);
    clearCombos();
    location.reload();
  }
}

function restart() {
  localStorage.clear();
  location.reload();
}

//bot move logic

function buildCombo(arr: number[]) {
  const num = arr.find((num) => !fieldiesBot[num].innerText);
  if (num || num === 0) handleBotMove(num);
}

function counterAttack(arr: number[]) {
  if (arr.includes(1) && !fieldiesBot[8].innerText) {
    handleBotMove(8);
    return;
  } else if (arr.includes(3) && !fieldiesBot[6].innerText) {
    handleBotMove(6);
    return;
  } else if (arr.includes(7) && !fieldiesBot[2].innerText) {
    handleBotMove(2);
    return;
  } else if (arr.includes(9) && !fieldiesBot[0].innerText) {
    handleBotMove(0);
    return;
  }
  return true;
}

function checkPossibleWin(arr: number[] | undefined) {
  if (arr?.includes(1)) {
    if (arr.includes(2) && !fieldiesBot[2].innerText) {
      handleBotMove(2);
      return;
    }
    if (arr.includes(3) && !fieldiesBot[1].innerText) {
      handleBotMove(1);
      return;
    }
    if (arr.includes(4) && !fieldiesBot[6].innerText) {
      handleBotMove(6);
      return;
    }
    if (arr.includes(7) && !fieldiesBot[3].innerText) {
      handleBotMove(3);
      return;
    }
    if (arr.includes(5) && !fieldiesBot[8].innerText) {
      handleBotMove(8);
      return;
    }
    if (arr.includes(9) && !fieldiesBot[4].innerText) {
      handleBotMove(4);
      return;
    }
  }
  if (arr?.includes(2)) {
    if (arr.includes(3) && !fieldiesBot[0].innerText) {
      handleBotMove(0);
      return;
    }
    if (arr.includes(5) && !fieldiesBot[7].innerText) {
      handleBotMove(7);
      return;
    }
    if (arr.includes(8) && !fieldiesBot[4].innerText) {
      handleBotMove(4);
      return;
    }
  }
  if (arr?.includes(3)) {
    if (arr.includes(6) && !fieldiesBot[8].innerText) {
      handleBotMove(8);
      return;
    }
    if (arr.includes(9) && !fieldiesBot[5].innerText) {
      handleBotMove(5);
      return;
    }
    if (arr.includes(5) && !fieldiesBot[6].innerText) {
      handleBotMove(6);
      return;
    }
    if (arr.includes(7) && !fieldiesBot[4].innerText) {
      handleBotMove(4);
      return;
    }
  }
  if (arr?.includes(4)) {
    if (arr.includes(5) && !fieldiesBot[5].innerText) {
      handleBotMove(5);
      return;
    }
    if (arr.includes(6) && !fieldiesBot[4].innerText) {
      handleBotMove(4);
      return;
    }
    if (arr.includes(7) && !fieldiesBot[0].innerText) {
      handleBotMove(0);
      return;
    }
  }
  if (arr?.includes(5)) {
    if (arr.includes(6) && !fieldiesBot[3].innerText) {
      handleBotMove(3);
      return;
    }
    if (arr.includes(8) && !fieldiesBot[1].innerText) {
      handleBotMove(1);
      return;
    }
    if (arr.includes(9) && !fieldiesBot[0].innerText) {
      handleBotMove(0);
      return;
    }
    if (arr.includes(7) && !fieldiesBot[2].innerText) {
      handleBotMove(2);
      return;
    }
  }
  if (arr?.includes(6)) {
    if (arr.includes(9) && !fieldiesBot[2].innerText) {
      handleBotMove(2);
      return;
    }
  }
  if (arr?.includes(7)) {
    if (arr.includes(8) && !fieldiesBot[8].innerText) {
      handleBotMove(8);
      return;
    }
    if (arr.includes(9) && !fieldiesBot[7].innerText) {
      handleBotMove(7);
      return;
    }
  }
  if (arr?.includes(8)) {
    if (arr.includes(9) && !fieldiesBot[6].innerText) {
      handleBotMove(6);
      return;
    }
  }
  return true;
}
