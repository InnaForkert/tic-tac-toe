"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var refs_1 = require("./scripts/refs");
var botCombo_1 = require("./scripts/botCombo");
var swal_1 = require("./scripts/swal");
var sounds_1 = require("./scripts/sounds");
require("./scripts/sounds");
var menu = refs_1.refs.menu, gameDiv = refs_1.refs.gameDiv, gameDivBot = refs_1.refs.gameDivBot, form = refs_1.refs.form, player1 = refs_1.refs.player1, player2 = refs_1.refs.player2, player1GameName = refs_1.refs.player1GameName, player2GameName = refs_1.refs.player2GameName, fieldies = refs_1.refs.fieldies, fieldiesBot = refs_1.refs.fieldiesBot, restartBtn = refs_1.refs.restartBtn, restartBtnBot = refs_1.refs.restartBtnBot, resetBtn = refs_1.refs.resetBtn, resetBtnBot = refs_1.refs.resetBtnBot, botStart = refs_1.refs.botStart;
var backgroundSound = sounds_1.sounds.backgroundSound, lostSound = sounds_1.sounds.lostSound, stepSound = sounds_1.sounds.stepSound, takenSound = sounds_1.sounds.takenSound, victorySound = sounds_1.sounds.victorySound;
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
var comboArray = (0, botCombo_1.createBotCombo)();
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
    stepSound.play();
}
function updateCombos(target) {
    if (currentSymbol === "X") {
        currentComboX.push(Number(target.dataset.id));
        if (currentComboX.length > 2)
            checkForVictory(currentComboX);
    }
    else {
        currentComboO.push(Number(target.dataset.id));
        if (currentComboO.length > 2)
            checkForVictory(currentComboO);
    }
}
function checkForVictory(arr) {
    victory = !!winningCombos.find(function (combo) {
        return combo.every(function (num) { return arr.includes(num); });
    });
    if (victory) {
        setTimeout(function () { return alertVictory(arr); }, 10);
    }
    else
        checkForNoMoves();
}
function alertVictory(arr) {
    return __awaiter(this, void 0, void 0, function () {
        var wantsMore;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isBotGame) return [3 /*break*/, 5];
                    if (!(arr === currentComboX)) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, swal_1.createSwal)("Yahoo! You win! Another round?", true)];
                case 1:
                    wantsMore = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, (0, swal_1.createSwal)("Oh no, bot won:( Looking for revenge?", false)];
                case 3:
                    wantsMore = _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, (0, swal_1.createSwal)("".concat(activePlayer, " was crushed! Another round?"), true)];
                case 6:
                    wantsMore = _a.sent();
                    _a.label = 7;
                case 7:
                    if (wantsMore)
                        reset();
                    else
                        restart();
                    return [2 /*return*/];
            }
        });
    });
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
        stopListening();
        paintSymbol(target);
        updateCombos(target);
        if (!victory) {
            currentSymbol = currentSymbol === "X" ? "O" : "X";
            if (currentSymbol === "O")
                botMove();
        }
    }
    else {
        alert("This one is taken!");
    }
}
function stopListening() {
    fieldiesBot.forEach(function (fieldy) {
        return fieldy.removeEventListener("click", handlePlayerMoveBot);
    });
}
function startListening() {
    fieldiesBot.forEach(function (fieldy) {
        fieldy.addEventListener("click", handlePlayerMoveBot);
    });
}
function botMove() {
    var didntMakeAMove = true;
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
function handleBotMove(num) {
    setTimeout(function () {
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
        comboArray = (0, botCombo_1.createBotCombo)();
        setTimeout(function () {
            currentSymbol = "X";
            fieldiesBot.forEach(function (fieldy) { return (fieldy.innerHTML = ""); });
            victory = false;
            startListening();
        }, 0);
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
        clearCombos();
        location.reload();
    }
}
function restart() {
    localStorage.clear();
    location.reload();
}
//bot move logic
function buildCombo(arr) {
    var num = arr.find(function (num) { return !fieldiesBot[num].innerText; });
    if (num || num === 0)
        handleBotMove(num);
}
function counterAttack(arr) {
    if (arr.includes(1) && !fieldiesBot[8].innerText) {
        handleBotMove(8);
        return;
    }
    else if (arr.includes(3) && !fieldiesBot[6].innerText) {
        handleBotMove(6);
        return;
    }
    else if (arr.includes(7) && !fieldiesBot[2].innerText) {
        handleBotMove(2);
        return;
    }
    else if (arr.includes(9) && !fieldiesBot[0].innerText) {
        handleBotMove(0);
        return;
    }
    return true;
}
function checkPossibleWin(arr) {
    if (arr === null || arr === void 0 ? void 0 : arr.includes(1)) {
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
    if (arr === null || arr === void 0 ? void 0 : arr.includes(2)) {
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
    if (arr === null || arr === void 0 ? void 0 : arr.includes(3)) {
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
    if (arr === null || arr === void 0 ? void 0 : arr.includes(4)) {
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
    if (arr === null || arr === void 0 ? void 0 : arr.includes(5)) {
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
    if (arr === null || arr === void 0 ? void 0 : arr.includes(6)) {
        if (arr.includes(9) && !fieldiesBot[2].innerText) {
            handleBotMove(2);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(7)) {
        if (arr.includes(8) && !fieldiesBot[8].innerText) {
            handleBotMove(8);
            return;
        }
        if (arr.includes(9) && !fieldiesBot[7].innerText) {
            handleBotMove(7);
            return;
        }
    }
    if (arr === null || arr === void 0 ? void 0 : arr.includes(8)) {
        if (arr.includes(9) && !fieldiesBot[6].innerText) {
            handleBotMove(6);
            return;
        }
    }
    return true;
}
