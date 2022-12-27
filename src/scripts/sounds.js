"use strict";
exports.__esModule = true;
exports.sounds = void 0;
var refs_1 = require("./refs");
var musicBtn = refs_1.refs.musicBtn, soundBtn = refs_1.refs.soundBtn;
exports.sounds = {
    stepSound: new Audio(require("url:../sounds/step.wav")),
    backgroundSound: new Audio(require("url:../sounds/bcg.wav")),
    lostSound: new Audio(require("url:../sounds/lost.wav")),
    victorySound: new Audio(require("url:../sounds/victory.wav")),
    takenSound: new Audio(require("url:../sounds/taken.wav"))
};
musicBtn === null || musicBtn === void 0 ? void 0 : musicBtn.addEventListener("click", toggleMusic);
soundBtn === null || soundBtn === void 0 ? void 0 : soundBtn.addEventListener("click", toggleSounds);
exports.sounds.backgroundSound.addEventListener("canplaythrough", function () {
    exports.sounds.backgroundSound.play();
    exports.sounds.backgroundSound.addEventListener("timeupdate", function () {
        var buffer = 0.5;
        if (exports.sounds.backgroundSound.currentTime >
            exports.sounds.backgroundSound.duration - buffer) {
            setTimeout(function () {
                exports.sounds.backgroundSound.currentTime = 0;
                exports.sounds.backgroundSound.play();
            }, 0.27);
        }
    });
});
function toggleMusic() {
    exports.sounds.backgroundSound.muted = !exports.sounds.backgroundSound.muted;
    musicBtn === null || musicBtn === void 0 ? void 0 : musicBtn.classList.toggle("musicOff");
}
function toggleSounds() {
    exports.sounds.stepSound.muted = !exports.sounds.stepSound.muted;
    exports.sounds.lostSound.muted = !exports.sounds.lostSound.muted;
    exports.sounds.victorySound.muted = !exports.sounds.victorySound.muted;
    exports.sounds.takenSound.muted = !exports.sounds.takenSound.muted;
    soundBtn === null || soundBtn === void 0 ? void 0 : soundBtn.classList.toggle("musicOff");
}
