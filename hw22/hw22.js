const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

const resizeImage = (value) => {
  sliderImage.style.width = `${value * 3}px`;
};

const debouncedResize = _.debounce((event) => {
  resizeImage(event.target.value);
}, 100);

sliderInput.addEventListener("input", debouncedResize);

// ================================1===========================
const btn = document.querySelector(`.hw_show`);
const box = document.getElementById("box");

const moveBox = (event) => {
  box.style.left = `${event.pageX - 25}px`;
  box.style.top = `${event.pageY - 25}px`;
};

const debouncedMove = _.debounce(moveBox, 50);

document.addEventListener("mousemove", debouncedMove);

btn.addEventListener("click", () => {
  if (box.style.display === "") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});
