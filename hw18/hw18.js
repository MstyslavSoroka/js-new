const categories = document.querySelectorAll("#categories .item");

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});
// ================================1===============================

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientsList.append(...items);

// ================================2===============================

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");

const galleryItems = images
  .map(({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}" width="250"></li>`;
  })
  .join(" ");

gallery.insertAdjacentHTML("beforeend", galleryItems);

// ================================3===============================

let counterValue = 0;

const valueElem = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const updateValue = () => {
  valueElem.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});

// ================================4===============================
