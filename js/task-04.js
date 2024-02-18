const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById('value');

let counterValue = 0;
function updateCounterValue() {
    counterValueSpan.textContent = counterValue;
}

function incrementCounter() {
    counterValue += 1;
    updateCounterValue();
}
  
function decrementCounter() {
    counterValue -= 1;
    updateCounterValue();
}
  
decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);

updateCounterValue();
