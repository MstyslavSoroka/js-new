// let drink = prompt("Оберіть свій напій (сік чай або кава) ");

// switch (drink) {
//     case "сік":
//         console.log("Ви обрали сік")
//         break;
//     case "кава":
//         console.log("Ви обрали каву")
//         break;
//     case "чай":
//         console.log("Ви обрали чай")
//         break;
//     default: console.log ("помилка");

// }
// // =============================================1========================================================

// let day = prompt("Введіть день неділі (з великої літери)");

// switch(day) {
//     case "Понеділок":
//         console.log("робочий день")
//         break;
//     case "Вівторок":
//         console.log("робочий день")
//         break;
//     case "Середа":
//         console.log("робочий день")
//         break;
//     case "Четвер":
//         console.log("робочий день")
//         break;
//     case "П'ятниця":
//         console.log("робочий день")
//         break;
//     case "Субота":
//         console.log("вихідний")
//         break;
//     case "Неділя":
//         console.log("вихідний")
//         break;
//     default: console.log("помилка");
// }
// // =============================================2========================================================

// let month0 = parseInt(prompt("Введіть номер місяця"))

// let season

// switch (month0) {
//     case 12: case 1: case 2:
//         season = 'Зима';
//         break;
//     case 3: case 4: case 5:
//         season = 'Весна';
//         break;
//     case 6: case 7: case 8:
//         season = 'Літо';
//         break;
//     case 9: case 10: case 11:
//         season = 'Осінь';
//         break;
//     default: console.log("Помилка")
// }

// console.log ( season)

// // ============================================3========================================================

// let month = parseInt(prompt("Введіть номер місяця"));

// let days

// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         days = 31;
//         break;
//     case 4: case 6: case 9: case 11:
//         days = 30;
//         break;
//     case 2:
//         days = 28; 
//         break;
//     default:
//         console.log ('Будь ласка, введіть номер місяця від 1 до 12');
// }

// console.log(days)
// // =============================================4========================================================


// let color = prompt("введіть колір світлофора")

// let action

// switch (color) {
//     case 'червоний':
//         action = 'стоп';
//         break;
//     case 'зелений':
//         action = 'йти';
//         break;
//     case 'жовтий':
//         action = 'чекати';
//         break;
//     default: console.log("Помилка")
// }

// console.log (action)
// =============================================5========================================================

let num1 = parseFloat(prompt("перше число"));
let num2 = parseFloat(prompt("друге число"))
let operation = prompt("введіть операцію (+ - * /)")
 

let result 

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            resultElement.textContent = 'Ділення на нуль неможливе!';
            break;
        } else {
            result = num1 / num2;
        }
        break;
    default: console.log ("помилка")
    break
}

console.log ( result)