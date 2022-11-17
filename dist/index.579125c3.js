"use strict";
exports.__esModule = true;
exports.stuf = void 0;
exports.stuf = [];
var menu = document.querySelector(".menu");
var field = document.querySelector(".field");
var form = document.querySelector(".form");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var player1GameName = document.querySelector("#player1Name");
var player2GameName = document.querySelector("#player2Name");
var fieldies = document.querySelectorAll(".fieldy");
var winningCombos = [
    [
        1,
        2,
        3
    ],
    [
        4,
        5,
        6
    ],
    [
        7,
        8,
        9
    ],
    [
        1,
        4,
        7
    ],
    [
        2,
        5,
        8
    ],
    [
        3,
        6,
        9
    ],
    [
        1,
        5,
        9
    ],
    [
        3,
        5,
        7
    ], 
];
var currentComboX = [];
var currentComboO = [];
var currentSymbol = "X";
var activePlayer = "";
var player1Name;
var player2Name;
if (form) form.addEventListener("submit", handleSubmit);
fieldies.forEach(function(fieldy) {
    fieldy.addEventListener("click", handlePlayerMove);
});
function checkForVictory(arr) {
    var victory = winningCombos.find(function(combo) {
        return combo.every(function(num) {
            return arr.includes(num);
        });
    });
    if (victory) alert("Victory!");
}
function handlePlayerMove(e) {
    var target = e.target;
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
    player1GameName === null || player1GameName === void 0 || player1GameName.classList.toggle("active-player");
    player2GameName === null || player2GameName === void 0 || player2GameName.classList.toggle("active-player");
    swapPlayers();
}
function swapPlayers() {
    if (activePlayer === "" || player1Name) activePlayer = player2Name;
    else activePlayer = player1Name;
}
function handleSubmit(e) {
    e.preventDefault();
    player1Name = (player1 === null || player1 === void 0 ? void 0 : player1.value) || "Player1";
    player2Name = (player2 === null || player2 === void 0 ? void 0 : player2.value) || "Player2";
    menu === null || menu === void 0 || menu.classList.add("visually-hidden");
    field === null || field === void 0 || field.classList.remove("visually-hidden");
    if (player1GameName) player1GameName.innerText = player1Name;
    if (player2GameName) player2GameName.innerText = player2Name;
}

//# sourceMappingURL=index.579125c3.js.map
