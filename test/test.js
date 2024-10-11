// const input = document.querySelector(`.js-input`);
// const button = document.querySelector(`.js-button span`);

// input.addEventListener(`input`, function () {
//   const name = input.value.trim();
//   button.textContent = name ? name : "Анонім";
// });

// const form = document.querySelector('.js-register-form');
// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const email = formData.get('email');
//     const password = formData.get('password');
//     const subscription = formData.get('subscription');
//     console.log(`Емаіл: ${email}`);
//     console.log(`Пароль: ${password}`);
//     console.log(`Тип підписки: ${subscription}`);

//     alert('Форма відправлена, перевірте в консолі введені дані!')

// });

// const button = document.querySelector(`.btn`);
// const heading = document.querySelector(`.title`);
// button.addEventListener(`click`, function () {
//   heading.classList.add(`style`);
// });

// input.addEventListener(`input`, function(){
//     const text = input.value.trim()
//     result.textContent = text
// })

// const input = document.querySelector(`.inputText`)
// const result = document.querySelector(`.result`)
// const btn = document.querySelector(`.btn`)

// btn.addEventListener(`click`, function(event) {
//     event.preventDefault()
//    result.textContent = "Ви зареєструвалися успішно! Дякую!"
// } )

// btn.addEventListener(`click`, function(event){
//     event.preventDefault()
//     const name = input.value.trim()
//     result.textContent = `Привіт ${name}`
// })

// const btn = document.querySelector(`.js-clear`);
// const output = document.querySelector(`.output`);

// let currentText = "";

// document.addEventListener(`keydown`, function (event) {
//   currentText += event.key;
//   output.textContent = currentText;
// });

// btn.addEventListener(`click`, function (event) {
//   output.textContent = " ";
//   currentText = "";
// });

// const input = document.getElementById(`input`)
// const output = document.getElementById(`message`)

// input.addEventListener(`keydown`, function(event){
//     output.textContent = event.code
// })

// const parent = document.getElementById(`parent`)
// const child = document.getElementById(`child`)
// const descendant = document.getElementById(`descendant`)

// parent.addEventListener(`click`, ()=>{
//     alert("parent clicked")
// })

// child.addEventListener(`click`, ()=>{
//     alert("Child clicked")
// })

// descendant.addEventListener(`click`, (event)=>{
//     event.stopPropagation()
//     alert("Descendant clicked")
// })

// const parent = document.querySelector(`.users_parent`)

// parent.addEventListener(`click`, (event)=>{
//     if(event.target.tagName === `LI`) {
//         alert(`You clicked on ${event.target.textContent}`)
//     }

// })

// const parent = document.getElementById(`userList`)
// const button = document.getElementById(`deleteButton`)

// parent.addEventListener(`click`, (event)=> {
//     if(event.target.tagName === `BUTTON`) {
//         const li = event.target.closest(`LI`)
//         li.remove()
//     }
// })

// const form = document.getElementById('taskForm');
// const list = document.getElementById('taskList');
// const input = document.getElementById('newTask');

//     form.addEventListener('submit', function (event) {
//       event.preventDefault();
//       const taskText = input.value;
//       if (taskText) {
//         const item = document.createElement('li');
//         item.innerHTML = `
//           <input type="checkbox" class="taskCheckbox">
//           <p>${taskText}</p>
//           <button class="delete">[Delete]</button>
//         `;
//         list.appendChild(item);
//       }
//     });

//     list.addEventListener('click', function (event) {

//       if (event.target.tagName === 'BUTTON') {
//         const item = event.target.closest('li');
//         list.removeChild(item);
//       }
// });

// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const color = event.target.getAttribute("data-color");
//   const element = document.querySelector(".output");

//   element.textContent = "Selected color:" + color;
//   element.style.color = event.target.style.backgroundColor;
// }

// const palette = document.querySelector(".color-palette");

// palette.addEventListener("click", selectColor);


const nav = document.querySelector('.js-nav');

nav.addEventListener('click', (event) => {

    if (event.target.tagName === 'A') {

        const activeButtons = nav.querySelectorAll('.btn.active');
        activeButtons.forEach(btn => btn.classList.remove('active'));

        event.target.classList.add('active');
    }
});
