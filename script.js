let hunger = 5;
let happiness = 5;

const hungerSpan = document.getElementById('hunger');
const happinessSpan = document.getElementById('happiness');
const petImage = document.getElementById('pet');

function updateDisplay() {
  hungerSpan.textContent = hunger;
  happinessSpan.textContent = happiness;
}

function showHappyFace() {
  petImage.src = "character_happy.png";
  setTimeout(() => {
    petImage.src = "character_normal.png";
  }, 3000);
}

function feed() {
  if (hunger > 0) hunger--;
  updateDisplay();
  showHappyFace();
}

function play() {
  if (happiness < 10) happiness++;
  updateDisplay();
  showHappyFace();
}