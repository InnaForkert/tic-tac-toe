export const refs = {
  menu: document.querySelector(".menu") as HTMLElement | null,
  gameDiv: document.querySelector(".gameDiv"),
  gameDivBot: document.querySelector(".gameDivBot"),
  form: document.querySelector(".form") as HTMLElement | null,
  player1: document.querySelector("#player1") as HTMLInputElement | null,
  player2: document.querySelector("#player2") as HTMLInputElement | null,
  player1GameName: document.querySelector("#player1Name") as HTMLElement | null,
  player2GameName: document.querySelector("#player2Name") as HTMLElement | null,
  fieldies: document.querySelectorAll(".fieldy") as NodeListOf<HTMLElement>,
  fieldiesBot: document.querySelectorAll(
    ".fieldyBot"
  ) as NodeListOf<HTMLElement>,
  restartBtn: document.querySelector("#restartBtn"),
  restartBtnBot: document.querySelector("#restartBtnBot"),
  resetBtn: document.querySelector("#resetBtn"),
  resetBtnBot: document.querySelector("#resetBtnBot"),
  botStart: document.querySelector(".botButton"),
  musicBtn: document.querySelector(".music"),
  soundBtn: document.querySelector(".sound"),
};
