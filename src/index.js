"use strict";
exports.__esModule = true;
var menu = document.querySelector(".menu");
var gameDiv = document.querySelector(".gameDiv");
var gameDivBot = document.querySelector(".gameDivBot");
var form = document.querySelector(".form");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var player1GameName = document.querySelector("#player1Name");
var player2GameName = document.querySelector("#player2Name");
var fieldies = document.querySelectorAll(".fieldy");
var fieldiesBot = document.querySelectorAll(".fieldyBot");
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
var restartBtn = document.querySelector("#restartBtn");
var restartBtnBot = document.querySelector("#restartBtnBot");
var resetBtn = document.querySelector("#resetBtn");
var resetBtnBot = document.querySelector("#resetBtnBot");
var botStart = document.querySelector(".botButton");
var currentComboX = [];
var currentComboO = [];
var currentSymbol = "X";
var activePlayer = "";
var player1Name = "Player I";
var player2Name = "Player II";
var isBotGame;
if (form)
    form.addEventListener("submit", handleSubmit);
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
botStart === null || botStart === void 0 ? void 0 : botStart.addEventListener("click", startBotGame);
// player vs player
function handlePlayerMove(e) {
    var target = e.target;
    if (target.textContent === "") {
        target.innerText = currentSymbol;
        updateCombos(target);
        currentSymbol = currentSymbol === "X" ? "O" : "X";
        localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
        swapPlayers();
        saveData();
    }
    else {
        alert("This one is taken!");
    }
}
function handleSubmit(e) {
    e.preventDefault();
    isBotGame = false;
    player1Name = (player1 === null || player1 === void 0 ? void 0 : player1.value) || "Player I";
    player2Name = (player2 === null || player2 === void 0 ? void 0 : player2.value) || "Player II";
    localStorage.setItem("player1", player1Name);
    localStorage.setItem("player2", player2Name);
    showField(gameDiv);
    setPlayers(player1Name, player2Name);
}
function setPlayers(name1, name2) {
    if (player1GameName && player2GameName) {
        player1GameName.innerText = "PlayerX: ".concat(name1);
        player2GameName.innerText = "PlayerO: ".concat(name2);
    }
}
function paintSaved(N, arr) {
    fieldies.forEach(function (fieldy) {
        if (fieldy.dataset.id && arr.includes(+fieldy.dataset.id)) {
            fieldy.innerText = N;
        }
    });
}
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
//player vs bot
function handlePlayerMoveBot(e) {
    var target = e.target;
    if (target.textContent === "") {
        target.innerText = currentSymbol;
        updateCombos(target);
        currentSymbol = currentSymbol === "X" ? "O" : "X";
        localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
        swapPlayers();
        saveData();
        checkPossibleWin(currentComboO);
    }
    else {
        alert("This one is taken!");
    }
}
function checkPossibleWin(arr) {
    if (arr === null || arr === void 0 ? void 0 : arr.includes(1)) {
        if (arr.includes(2) && !fieldiesBot[2].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(2);
            }, 300);
            return;
        }
        if (arr.includes(3) && !fieldiesBot[1].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(1);
            }, 300);
            return;
        }
        if (arr.includes(4) && !fieldiesBot[6].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(6);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[3].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(3);
            }, 300);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[8].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(8);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[4].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(4);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(2)) {
        if (arr.includes(3) && !fieldiesBot[0].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(0);
            }, 300);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[7].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(7);
            }, 300);
            return;
        }
        if (arr.includes(8) && !fieldiesBot[4].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(4);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(3)) {
        if (arr.includes(6) && !fieldiesBot[8].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(8);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[5].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(5);
            }, 300);
            return;
        }
        if (arr.includes(5) && !fieldiesBot[6].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(6);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[4].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(4);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(4)) {
        if (arr.includes(5) && !fieldiesBot[5].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(5);
            }, 300);
            return;
        }
        if (arr.includes(6) && !fieldiesBot[4].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(4);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[0].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(0);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(5)) {
        if (arr.includes(6) && !fieldiesBot[3].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(3);
            }, 300);
            return;
        }
        if (arr.includes(8) && !fieldiesBot[1].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(1);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[0].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(0);
            }, 300);
            return;
        }
        if (arr.includes(7) && !fieldiesBot[2].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(2);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(6)) {
        if (arr.includes(9) && !fieldiesBot[2].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(2);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(7)) {
        if (arr.includes(8) && !fieldiesBot[8].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(8);
            }, 300);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[7].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(7);
            }, 300);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(8)) {
        if (arr.includes(9) && !fieldiesBot[6].innerText) {
            fieldiesBot.forEach(function (fieldy) {
                return fieldy.removeEventListener("click", handlePlayerMoveBot);
            });
            setTimeout(function () {
                handleBotMove(6);
            }, 300);
            return;
        }
    }
    if ((arr === null || arr === void 0 ? void 0 : arr.join("")) === currentComboO.join("")) {
        checkPossibleWin(currentComboX);
    }
    else {
        buildCombo();
    }
}
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
function handleBotMove(num) {
    fieldiesBot[num].innerText = currentSymbol;
    updateCombos(fieldiesBot[num]);
    currentSymbol = currentSymbol === "X" ? "O" : "X";
    localStorage.setItem("activePlayer", JSON.stringify(currentSymbol));
    swapPlayers();
    saveData();
    fieldiesBot.forEach(function (fieldy) {
        fieldy.addEventListener("click", handlePlayerMoveBot);
    });
}
function startBotGame() {
    isBotGame = true;
    currentComboO = [];
    currentComboX = [];
    showField(gameDivBot);
}
//common
function reset() {
    console.log(isBotGame);
    if (isBotGame) {
        localStorage.clear();
        currentComboO = [];
        currentComboX = [];
        currentSymbol = "X";
        fieldiesBot.forEach(function (fieldy) { return (fieldy.innerHTML = ""); });
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
    if (isBotGame) {
        currentSymbol = "X";
    }
    localStorage.clear();
    location.reload();
}
function saveData() {
    localStorage.setItem("playerX", JSON.stringify(currentComboX));
    localStorage.setItem("playerO", JSON.stringify(currentComboO));
}
function checkForVictory(arr) {
    var victory = winningCombos.find(function (combo) {
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
            var wantsMore = confirm("Victory! Another round?");
            if (wantsMore)
                reset();
            else
                restart();
        }
    }
    else
        checkForNoMoves();
}
function checkForNoMoves() {
    if (currentComboO.length === 4 && currentComboX.length === 5) {
        var wantsReset = confirm("Oh no, no more moves! Reset?");
        wantsReset ? reset() : restart();
        return;
    }
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
function swapPlayers() {
    if (activePlayer === "" || player1Name) {
        activePlayer = player2Name;
    }
    else {
        activePlayer = player1Name;
    }
    player1GameName === null || player1GameName === void 0 ? void 0 : player1GameName.classList.toggle("active-player");
    player2GameName === null || player2GameName === void 0 ? void 0 : player2GameName.classList.toggle("active-player");
}
function showField(thumb) {
    menu === null || menu === void 0 ? void 0 : menu.classList.add("visually-hidden");
    thumb === null || thumb === void 0 ? void 0 : thumb.classList.remove("visually-hidden");
}
