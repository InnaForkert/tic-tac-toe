import { refs } from "./refs";

const { musicBtn, soundBtn } = refs;

export const sounds = {
  stepSound: new Audio(require("url:../sounds/step.wav")),
  backgroundSound: new Audio(require("url:../sounds/bcg.wav")),
  lostSound: new Audio(require("url:../sounds/lost.wav")),
  victorySound: new Audio(require("url:../sounds/victory.wav")),
  takenSound: new Audio(require("url:../sounds/taken.wav")),
};

musicBtn?.addEventListener("click", toggleMusic);
soundBtn?.addEventListener("click", toggleSounds);

sounds.backgroundSound.addEventListener("canplaythrough", () => {
  sounds.backgroundSound.play();
});

function toggleMusic() {
  sounds.backgroundSound.muted = !sounds.backgroundSound.muted;
  musicBtn?.classList.toggle("musicOff");
}

function toggleSounds() {
  sounds.stepSound.muted = !sounds.stepSound.muted;
  sounds.lostSound.muted = !sounds.lostSound.muted;
  sounds.victorySound.muted = !sounds.victorySound.muted;
  sounds.takenSound.muted = !sounds.takenSound.muted;
  soundBtn?.classList.toggle("musicOff");
}
