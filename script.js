const STORAGE_KEY = "drPepperCrackCount";
const countEl = document.getElementById("count");
const statusEl = document.getElementById("status");
const canButton = document.getElementById("canButton");
const undoButton = document.getElementById("undoButton");
const resetButton = document.getElementById("resetButton");
const resetDialog = document.getElementById("resetDialog");
const confirmReset = document.getElementById("confirmReset");

let count = Number.parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
if (!Number.isFinite(count) || count < 0) count = 0;

const messages = [
  "No suspicious activity yet.",
  "First pepper of the operation.",
  "The fizz investigation continues.",
  "Another can has fallen.",
  "Pepper levels are becoming concerning.",
  "Hydration? Debatable. Commitment? Absolute.",
  "This is now a documented pattern.",
  "The fridge never stood a chance.",
  "Doctor Pepper has entered the chat.",
  "A historic amount of fizz."
];

function getStatus(value) {
  if (value === 0) return messages[0];
  if (value === 1) return messages[1];
  if (value < 5) return messages[2];
  if (value < 10) return messages[3];
  if (value < 20) return messages[4];
  if (value < 35) return messages[5];
  if (value < 50) return messages[6];
  if (value < 75) return messages[7];
  if (value < 100) return messages[8];
  return messages[9];
}

function render() {
  countEl.textContent = count.toLocaleString("en-GB");
  statusEl.textContent = getStatus(count);
  localStorage.setItem(STORAGE_KEY, String(count));
}

function popCan() {
  canButton.classList.remove("pop");
  void canButton.offsetWidth;
  canButton.classList.add("pop");
}

canButton.addEventListener("click", () => {
  count += 1;
  popCan();
  render();
});

undoButton.addEventListener("click", () => {
  if (count > 0) count -= 1;
  render();
});

resetButton.addEventListener("click", () => resetDialog.showModal());

confirmReset.addEventListener("click", () => {
  count = 0;
  render();
});

render();
