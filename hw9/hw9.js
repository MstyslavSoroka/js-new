function logItems(array) {
  for (let i = 1; i < 1 + array.length; i++) {
    console.log(i + "-" + array[i]);
  }
}

let list = ["hello", true, 4.32, "qwerty"];

logItems(list);

// =========================================================1==========================================================

function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ");
  let numberOfWords = words.length;
  let totalPrice = numberOfWords * pricePerWord;
  return totalPrice;
}

alert("Ціна гравірування одного слова - 100грн ");
let message = prompt("Введіть повідомлення для гравіювання:");
let pricePerWord = 100;

let totalCost = calculateEngravingPrice(message, pricePerWord);

console.log(`Загальна вартість гравіювання: ${totalCost} гривень`);

// =========================================================2==========================================================

function findLongestWord(string) {
  let words = string.split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

let sentence = "Це приклад реченяя, найдовше слово - найдовшеслово123";
let longestWord = findLongestWord(sentence);
console.log(`Найдовше слово: ${longestWord}`);

// =========================================================3==========================================================

function formatString(string) {
    if (string.length < 40) {
        return string; 
    } else {
        return string.slice(0, 40) + '...'; 
    }
}


let shortString = "Це короткий рядок.";
let longString = "Це дуже довгий рядок який необхідно обрізати до сорока символів.";

console.log(formatString(shortString)); 
console.log(formatString(longString));  


// =========================================================4==========================================================

function checkForSpam(message) {
    let lowerCaseMessage = message.toLowerCase(); 
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale'); 
}

const message1 = "Звичайне повідомлення";
const message2 = "SALE SALE SALE";
const message3 = "Це SPAM повідомлення";

console.log(checkForSpam(message1)); 
console.log(checkForSpam(message2)); 
console.log(checkForSpam(message3)); 



// =========================================================5==========================================================

let input;
const numbers = [];
let total = 0;

alert("Введіть числа сумму яких ви хочете дізнатися, натисніть cancel щоб дізнатися сумму")

while (true) {
    input = prompt("Введіть число:");

    if (input === null) { 
        break;
    }

    input = Number(input);

    if (isNaN(input)) {
        alert('Було введено не число, попробуйте ще раз');
    } else {
        numbers.push(input);
    }
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив чисел порожній.");
}


// =========================================================6==========================================================


