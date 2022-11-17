"use strict";
exports.__esModule = true;
exports.constForExport = void 0;
exports.constForExport = "";
var field = document.querySelector(".field");
var form = document.querySelector(".form");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
if (form)
    form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    var player1Name = (player1 === null || player1 === void 0 ? void 0 : player1.value) || "Player1";
    var player2Name = (player2 === null || player2 === void 0 ? void 0 : player2.value) || "Player2";
}
(function createFieldies(num) {
    var marcup = [];
    for (var i = 1; i <= num; i += 1) {
        marcup.push("<div class='fieldy' id='".concat(i, "'></div>"));
    }
    field.innerHTML = marcup.join("");
})(9);
