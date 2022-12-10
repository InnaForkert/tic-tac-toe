"use strict";
exports.__esModule = true;
var refs_1 = require("./scripts/refs");
var menu = refs_1.refs.menu, gameDiv = refs_1.refs.gameDiv, gameDivBot = refs_1.refs.gameDivBot, form = refs_1.refs.form, player1 = refs_1.refs.player1, player2 = refs_1.refs.player2, player1GameName = refs_1.refs.player1GameName, player2GameName = refs_1.refs.player2GameName, fieldies = refs_1.refs.fieldies, fieldiesBot = refs_1.refs.fieldiesBot, restartBtn = refs_1.refs.restartBtn, restartBtnBot = refs_1.refs.restartBtnBot, resetBtn = refs_1.refs.resetBtn, resetBtnBot = refs_1.refs.resetBtnBot, botStart = refs_1.refs.botStart;
var winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];
var currentComboX = [];
var currentComboO = [];
var currentSymbol = "X";
var activePlayer = "";
var player1Name = "Player I";
var player2Name = "Player II";
var isBotGame;
var victory = false;
if (form)
    form.addEventListener("submit", handleSubmit);
botStart === null || botStart === void 0 ? void 0 : botStart.addEventListener("click", startBotGame);
fieldies.forEach(function (fieldy) {
    fieldy.addEventListener("click", handlePlayerMove);
});
fieldiesBot.forEach(function (fieldy) {
    fieldy.addEventListener("click", handlePlayerMoveBot);
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", reset);
resetBtnBot === null || resetBtnBot === void 0 ? void 0 : resetBtnBot.addEventListener("click", reset);
restartBtn === null || restartBtn === void 0 ? void 0 : restartBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to restart?"))
        restart();
});
restartBtnBot === null || restartBtnBot === void 0 ? void 0 : restartBtnBot.addEventListener("click", function () {
    if (confirm("Are you sure you want to restart?"))
        restart();
});
// player vs player
// game start
function handleSubmit(e) {
    e.preventDefault();
    isBotGame = false;
    setNames();
    showField(gameDiv);
    setPlayers(player1Name, player2Name);
}
function setNames() {
    player1Name = (player1 === null || player1 === void 0 ? void 0 : player1.value) || "Player I";
    player2Name = (player2 === null || player2 === void 0 ? void 0 : player2.value) || "Player II";
    localStorage.setItem("player1", player1Name);
    localStorage.setItem("player2", player2Name);
}
function showField(thumb) {
    menu === null || menu === void 0 ? void 0 : menu.classList.add("visually-hidden");
    thumb === null || thumb === void 0 ? void 0 : thumb.classList.remove("visually-hidden");
}
function setPlayers(name1, name2) {
    if (player1GameName && player2GameName) {
        player1GameName.innerText = "PlayerX: ".concat(name1);
        player2GameName.innerText = "PlayerO: ".concat(name2);
    }
}
//player makes a move
function handlePlayerMove(e) {
    var target = e.target;
    if (target.textContent === "") {
        paintSymbol(target);
        updateCombos(target);
        changeSymbol();
        swapPlayers();
        saveData();
    }
    else {
        alert("This one is taken!");
    }
}
function paintSymbol(div) {
    div.innerText = currentSymbol;
}
function updateCombos(target) {
    if (currentSymbol === "X") {
        currentComboX.push(Number(target.dataset.id));
        if (currentComboX.length > 2)
            setTimeout(function () { return checkForVictory(currentComboX); }, 10);
    }
    else {
        currentComboO.push(Number(target.dataset.id));
        if (currentComboO.length > 2)
            setTimeout(function () { return checkForVictory(currentComboO); }, 10);
    }
}
function checkForVictory(arr) {
    victory = !!winningCombos.find(function (combo) {
        return combo.every(function (num) { return arr.includes(num); });
    });
    if (victory) {
        if (isBotGame && currentSymbol === "X") {
            var wantsMore = confirm("You lose! Want a revenge?");
            if (wantsMore)
                reset();
            else
                restart();
        }
        else {
            alertVictory();
        }
    }
    else
        checkForNoMoves();
}
function alertVictory() {
    var wantsMore = confirm("Victory! Another round?");
    if (wantsMore)
        reset();
    else
        restart();
}
function checkForNoMoves() {
    if (currentComboO.length === 4 && currentComboX.length === 5) {
        var wantsReset = confirm("Oh no, no more moves! Reset?");
        wantsReset ? reset() : restart();
    }
}
function changeSymbol() {
    currentSymbol = currentSymbol === "X" ? "O" : "X";
    localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
}
function swapPlayers() {
    console.log(activePlayer);
    if (activePlayer === "" || player1Name) {
        activePlayer = player2Name;
    }
    else {
        activePlayer = player1Name;
    }
    player1GameName === null || player1GameName === void 0 ? void 0 : player1GameName.classList.toggle("active-player");
    player2GameName === null || player2GameName === void 0 ? void 0 : player2GameName.classList.toggle("active-player");
}
function saveData() {
    localStorage.setItem("playerX", JSON.stringify(currentComboX));
    localStorage.setItem("playerO", JSON.stringify(currentComboO));
}
// check for saved progress
(function checkSaves() {
    var currentSaveX = localStorage.getItem("playerX");
    if (currentSaveX) {
        currentComboX = JSON.parse(currentSaveX);
        paintSaved("X", currentComboX);
    }
    var currentSaveO = localStorage.getItem("playerO");
    if (currentSaveO) {
        currentComboO = JSON.parse(currentSaveO);
        paintSaved("O", currentComboO);
    }
    var name1 = localStorage.getItem("player1");
    var name2 = localStorage.getItem("player2");
    if (name1 && name2) {
        setPlayers(name1, name2);
        showField(gameDiv);
    }
    var savedActive = localStorage.getItem("activePlayer");
    if (savedActive)
        currentSymbol = JSON.parse(savedActive);
})();
function paintSaved(N, arr) {
    fieldies.forEach(function (fieldy) {
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
function handlePlayerMoveBot(e) {
    var target = e.target;
    if (target.textContent === "") {
        paintSymbol(target);
        updateCombos(target);
        changeSymbol();
        botMove();
    }
    else {
        alert("This one is taken!");
    }
}
function botMove() {
    var didntMakeAMove = checkPossibleWin(currentComboO);
    if (didntMakeAMove) {
        didntMakeAMove = checkPossibleWin(currentComboX);
    }
    if (didntMakeAMove) {
        buildCombo();
    }
}
function handleBotMove(num) {
    paintSymbol(fieldiesBot[num]);
    updateCombos(fieldiesBot[num]);
    currentSymbol = currentSymbol === "X" ? "O" : "X";
    fieldiesBot.forEach(function (fieldy) {
        fieldy.addEventListener("click", handlePlayerMoveBot);
    });
}
//common
function reset() {
    if (isBotGame) {
        localStorage.clear();
        clearCombos();
        currentSymbol = "X";
        fieldiesBot.forEach(function (fieldy) { return (fieldy.innerHTML = ""); });
        victory = false;
    }
    else {
        var placeholderName = localStorage.getItem("player1") || "Player II";
        player1Name = localStorage.getItem("player2") || "Player I";
        player2Name = placeholderName || "Player II";
        localStorage.removeItem("playerX");
        localStorage.removeItem("playerO");
        localStorage.removeItem("activePlayer");
        localStorage.setItem("player1", player1Name);
        localStorage.setItem("player2", player2Name);
        location.reload();
    }
}
function restart() {
    localStorage.clear();
    location.reload();
}
//bot move logic
function buildCombo() {
    if (!fieldiesBot[4].innerText) {
        setTimeout(function () {
            handleBotMove(4);
        }, 300);
    }
    else if (!fieldiesBot[0].innerText) {
        setTimeout(function () {
            handleBotMove(0);
        }, 300);
    }
    else if (!fieldiesBot[2].innerText) {
        setTimeout(function () {
            handleBotMove(2);
        }, 300);
    }
    else if (!fieldiesBot[6].innerText) {
        setTimeout(function () {
            handleBotMove(6);
        }, 300);
    }
    else if (!fieldiesBot[8].innerText) {
        setTimeout(function () {
            handleBotMove(8);
        }, 300);
    }
    else if (!fieldiesBot[1].innerText) {
        setTimeout(function () {
            handleBotMove(1);
        }, 300);
    }
    else if (!fieldiesBot[3].innerText) {
        setTimeout(function () {
            handleBotMove(3);
        }, 300);
    }
    else if (!fieldiesBot[5].innerText) {
        setTimeout(function () {
            handleBotMove(5);
        }, 300);
    }
    else if (!fieldiesBot[7].innerText) {
        setTimeout(function () {
            handleBotMove(7);
        }, 300);
    }
}
function stopListening() {
    fieldiesBot.forEach(function (fieldy) {
        return fieldy.removeEventListener("click", handlePlayerMoveBot);
    });
}
function checkPossibleWin(arr) {
    if (arr === null || arr === void 0 ? void 0 : arr.includes(1)) {
        if (arr.includes(2) && !fieldiesBot[2].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(2);
            }, 300);
            return;
        }
        if (arr.includes(3) && !fieldiesBot[1].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(1);
            }, 300);
            return;
        }
        if (arr.includes(4) && !fieldiesBot[6].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(6);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[3].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(3);
            }, 300);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[8].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(8);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[4].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(4);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(2)) {
        if (arr.includes(3) && !fieldiesBot[0].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(0);
            }, 300);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[7].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(7);
            }, 300);
            return;
        }
        if (arr.includes(8) && !fieldiesBot[4].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(4);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(3)) {
        if (arr.includes(6) && !fieldiesBot[8].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(8);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[5].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(5);
            }, 300);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[6].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(6);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[4].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(4);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(4)) {
        if (arr.includes(5) && !fieldiesBot[5].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(5);
            }, 300);
            return;
        }
        if (arr.includes(6) && !fieldiesBot[4].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(4);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[0].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(0);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(5)) {
        if (arr.includes(6) && !fieldiesBot[3].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(3);
            }, 300);
            return;
        }
        if (arr.includes(8) && !fieldiesBot[1].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(1);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[0].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(0);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[2].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(2);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(6)) {
        if (arr.includes(9) && !fieldiesBot[2].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(2);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(7)) {
        if (arr.includes(8) && !fieldiesBot[8].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(8);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[7].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(7);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(8)) {
        if (arr.includes(9) && !fieldiesBot[6].innerText) {
            stopListening();
            setTimeout(function () {
                handleBotMove(6);
            }, 300);
            return;
        }
    }
    return true;
}
