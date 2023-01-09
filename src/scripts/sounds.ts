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
sounds.backgroundSound.muted = true;
sounds.backgroundSound.loop = true;

function toggleMusic() {
  sounds.backgroundSound.muted = !sounds.backgroundSound.muted;
  if (!sounds.backgroundSound.muted) {
    sounds.backgroundSound.play();
    sounds.backgroundSound.addEventListener("timeupdate", () => {
      const buffer = 0.5;
      if (
        sounds.backgroundSound.currentTime >
        sounds.backgroundSound.duration - buffer
      ) {
        setTimeout(() => {
          sounds.backgroundSound.currentTime = 0;
          sounds.backgroundSound.play();
        }, 0.27);
      }
    });
  }

  musicBtn?.classList.toggle("musicOff");
}

function toggleSounds() {
  sounds.stepSound.muted = !sounds.stepSound.muted;
  sounds.lostSound.muted = !sounds.lostSound.muted;
  sounds.victorySound.muted = !sounds.victorySound.muted;
  sounds.takenSound.muted = !sounds.takenSound.muted;
  soundBtn?.classList.toggle("musicOff");
}
