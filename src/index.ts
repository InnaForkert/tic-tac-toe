export const constForExport: string = "";

const field: HTMLElement | null = document.querySelector(".field");
const form: HTMLElement | null = document.querySelector(".form");
const player1: HTMLInputElement | null = document.querySelector("#player1");
const player2: HTMLInputElement | null = document.querySelector("#player2");

if (form) form.addEventListener("submit", handleSubmit);

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const player1Name: string = player1?.value || "Player1";
  const player2Name: string = player2?.value || "Player2";
}

(function createFieldies(num: number) {
  const marcup: string[] = [];
  for (let i = 1; i <= num; i += 1) {
    marcup.push(`<div class='fieldy' id='${i}'></div>`);
  }
  field!.innerHTML = marcup.join("");
})(9);
