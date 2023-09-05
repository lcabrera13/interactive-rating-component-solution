const firstStep = document.getElementById('first-step');
const secondStep = document.getElementById('second-step');
const btnFirstStep = document.getElementById('btn-first-step');
const btnsNumbers = document.getElementsByClassName('btn-number');
const messageSecondStep = document.getElementById('message-second-step');

let isValid = false;

for(let b = 0; b < btnsNumbers.length; b++) {
  let button = btnsNumbers[b];
  button.onclick = function() {
    messageSecondStep.innerText = `You selected ${b + 1} out of 5`;
    isValid = true;
  }
}

btnFirstStep.onclick = function() {
  if(isValid) {
    firstStep.classList.remove('flex');
    firstStep.classList.add('hidden');

    secondStep.classList.remove('hidden');
    secondStep.classList.add('flex');
  }
}