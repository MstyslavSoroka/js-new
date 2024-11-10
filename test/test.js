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

// const nav = document.querySelector('.js-nav');

// nav.addEventListener('click', (event) => {

//     if (event.target.tagName === 'A') {

//         const activeButtons = nav.querySelectorAll('.btn.active');
//         activeButtons.forEach(btn => btn.classList.remove('active'));

//         event.target.classList.add('active');
//     }
// });

// const boxes = document.querySelectorAll(".box");

// const option = {
//   threshold: [0.6],
// };

// const onEntry = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0.6) {
//       entry.target.classList.add("active");
//     } else {
//       entry.target.classList.remove("active");
//     }
//   });
// };

// const observer = new IntersectionObserver(onEntry, option);

// boxes.forEach((box) => observer.observe(box));

// const items = document.querySelectorAll(".lazy-list li");

// const options = {
//   threshold: [0.5],
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("in-view");
//     } else {
//       entry.target.classList.remove("in-view");
//     }
//   });
// }, options);

// items.forEach((item) => {
//   observer.observe(item);
// });

// const data = {
//   labels: [
//     "8.00",
//     "9.00",
//     "10.00",
//     "11.00",
//     "12.00",
//     "13.00",
//     "14.00",
//     "15.00",
//     "16.00",
//     "17.00",
//     "18.00",
//     "19.00",
//     "20.00",
//     "21.00",
//     "22.00",
//   ],
//   datasets: [
//     {
//       label: "Продажі за останній тиждень",
//       data: [11, 12, 9, 11, 19, 21, 25, 23, 24, 23, 18, 15, 11, 9, 8],
//       borderColor: "#141414",
//       borderWidth: 1,
//     },
//   ],
// };

// const config = {
//   type: "line",
//   data: data,
//   options: {
//     animations: {
//       tension: {
//          duration: 750,
//          easing: 'easing',
//          from: 1,
//          to: 0,
//          loop: false
//       }
//    },
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: "Час",
//         },
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: "Продажі",
//         },
//       },
//     },
//   },
// };
// 
const data = {
  labels: ["Компанія A", "Компанія B", "Компанія C", "Компанія D", "Компанія E"],
  datasets: [{
      label: "Частки ринку",
      data: [11, 12, 9, 14, 1],
      backgroundColor: ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"],
      borderWidth: 1
  }]
};

const config = {
  type: "pie",  
  data: data,
  options: {
      responsive: true,
      plugins: {
          legend: {
              position: "top",  
              labels: {
                  boxWidth: 20
              }
          },
      },
      animation: {
          animateScale: true,  
          animateRotate: true  
      },
      onClick: function(e, elements) {
        if (elements.length > 0) {
          const firstElement = elements[0];
          const label = chart.data.labels[firstElement.index];
          const value = chart.data.datasets[firstElement.datasetIndex].data[firstElement.index];
          alert(`Компанія ${label},\nчастина ринку ${value}.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio eros, luctus nec dignissim placerat, fringilla ut massa. Aenean gravida.`);
        }
      }
  }
};

const chart = new Chart(document.getElementById("chart"), config);
