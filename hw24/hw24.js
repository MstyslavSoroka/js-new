const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "N"];

let key = 0;

let game = true;

const keyElement = document.getElementById("key");
const messageElement = document.getElementById("message");
const btn = document.getElementById('btn');

function newGame() {
  key = 0;
  game = true;
  keyDisplay();
}

function keyDisplay() {
  if (key < keys.length) {
    keyElement.textContent = keys[key];
  } else {
    messageElement.textContent = "Вітаємо! Ви пройшли гру!";
    game = false;
  }
}

document.addEventListener("keydown", (e) => {
  const pressedKey = e.key.toUpperCase();
  if (pressedKey === keys[key]) {
    key++;
    keyDisplay();
  } else {
    PNotify.error({
      text: `Невірна клавіша! Натисніть ${keys[key]}.`,
      delay: 1000,
    });
  }
});
document.addEventListener("keypress", (e) => {
  e.preventDefault();
});

btn.addEventListener('click', () => {
    PNotify.success({
      text: 'Гра перезапускається...',
      delay: 1000
    });
    newGame();
  });

newGame();
