const field = document.querySelector('.field');
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

createFieldies(9);

function handleSubmit(e) {
  e.preventDefault();
  const {elements: {player1, player2}} = e.target;
}

function createFieldies(num) {
  const marcup = []
  for (let i=1; i<=num; i+=1) {
    marcup.push(`<div class='fieldy' id='${i}'></div>`);
  }
  field.innerHTML = marcup.join('')
}

