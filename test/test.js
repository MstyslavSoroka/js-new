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


const input = document.querySelector(`.inputText`)
const result = document.querySelector(`.result`)

input.addEventListener(`input`, function(){
    const text = input.value.trim()
    result.textContent = text
})

