document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector(".open");
  const closeModalBtn = document.querySelector(".close");
  const backdrop = document.querySelector(".js-backdrop");

  openModalBtn.addEventListener("click", function () {
    document.body.classList.add("show-modal");
  });
  closeModalBtn.addEventListener("click", function () {
    document.body.classList.remove("show-modal");
  });

  // ======================================1=================================================

  function closeModal() {
    document.body.classList.remove("show-modal");
  }

  backdrop.addEventListener("click", function (event) {
    if (event.target === backdrop) {
      closeModal();
    }
  });
});

// ======================================2=================================================

const red = document.querySelector(".red");
const white = document.querySelector(".white");
const green = document.querySelector(".green");
const body = document.querySelector(".body");

red.addEventListener("change", function () {
  if (red.checked) {
    body.style.backgroundColor = "red";
  }
});

white.addEventListener("change", function () {
  if (white.checked) {
    body.style.backgroundColor = "white";
  }
});

green.addEventListener("change", function () {
  if (green.checked) {
    body.style.backgroundColor = "green";
  }
});

// ======================================3=================================================

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  nameOutput.textContent = name ? name : "незнайомець";
});

// ======================================4=================================================

const fontSize = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSize.addEventListener("input", () => {
  text.style.fontSize = `${fontSize.value}px`;
});

// ======================================5=================================================
