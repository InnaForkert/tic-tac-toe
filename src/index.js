"use strict";
exports.__esModule = true;
exports.stuf = void 0;
exports.stuf = [];
var menu = document.querySelector(".menu");
var field = document.querySelector(".field");
var gameDiv = document.querySelector(".gameDiv");
var form = document.querySelector(".form");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var player1GameName = document.querySelector("#player1Name");
var player2GameName = document.querySelector("#player2Name");
var fieldies = document.querySelectorAll(".fieldy");
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
var resetBtn = document.querySelector("#resetBtn");
var currentComboX = [];
var currentComboO = [];
var currentSymbol = "X";
var activePlayer = "";
var player1Name;
var player2Name;
if (form)
    form.addEventListener("submit", handleSubmit);
fieldies.forEach(function (fieldy) {
    fieldy.addEventListener("click", handlePlayerMove);
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", reset);
restartBtn === null || restartBtn === void 0 ? void 0 : restartBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to restart?"))
        restart();
});
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
        showField();
    }
    var savedActive = localStorage.getItem("activePlayer");
    if (savedActive)
        currentSymbol = JSON.parse(savedActive);
})();
function reset() {
    var placeholderName = localStorage.getItem("player1") || "Player2";
    player1Name = localStorage.getItem("player2") || "Player1";
    player2Name = placeholderName || "Player2";
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
function paintSaved(N, arr) {
    fieldies.forEach(function (fieldy) {
        if (fieldy.dataset.id && arr.includes(+fieldy.dataset.id)) {
            fieldy.innerText = N;
        }
    });
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
        var wantsMore = confirm("Victory! One more round?");
        if (wantsMore)
            reset();
        else
            restart();
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
function updateCombos(target) {
    if (currentSymbol === "X") {
        currentComboX.push(Number(target.dataset.id));
        if (currentComboX.length > 2)
            setTimeout(function () { return checkForVictory(currentComboX); }, 0);
    }
    else {
        currentComboO.push(Number(target.dataset.id));
        if (currentComboO.length > 2)
            setTimeout(function () { return checkForVictory(currentComboO); }, 0);
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
function handleSubmit(e) {
    e.preventDefault();
    player1Name = (player1 === null || player1 === void 0 ? void 0 : player1.value) || "Player1";
    player2Name = (player2 === null || player2 === void 0 ? void 0 : player2.value) || "Player2";
    localStorage.setItem("player1", player1Name);
    localStorage.setItem("player2", player2Name);
    showField();
    setPlayers(player1Name, player2Name);
}
function setPlayers(name1, name2) {
    if (player1GameName && player2GameName) {
        player1GameName.innerText = name1;
        player2GameName.innerText = name2;
    }
}
function showField() {
    menu === null || menu === void 0 ? void 0 : menu.classList.add("visually-hidden");
    gameDiv === null || gameDiv === void 0 ? void 0 : gameDiv.classList.remove("visually-hidden");
}
