const helloWorld = () => {
  let yesNo = confirm("Вивести хелло ворлд?");

  if (yesNo === true) {
    alert("Hello World!");
  } else {
    alert("Добре");
  }
};

helloWorld();

// ==========================================1=================================================

function checkGuess() {
  let randomNum = Math.floor(Math.random() * 100 + 1);
  let yourGuess = parseInt(document.getElementById("guessNum").value);
  if (randomNum === yourGuess) {
    let rightWrong = (document.getElementById("guessResult").innerHTML =
      "Ти вгадав");
  } else {
    let rightWrong = (document.getElementById(
      "guessResult"
    ).innerHTML = `Ти не вгадав, число було ${randomNum}`);
  }
}

// ==========================================2=================================================

// не проходили

// ==========================================3=================================================

const applyCallbackToEachElement = (arr, callback) => {
  return arr.map(callback);
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// ==========================================4=================================================

const calculateDiscountPrice = (price, discountPercentage) => {
  return price - (price * discountPercentage) / 100;
};

const getDiscountedPrice = (price, discountPercentage, callback) => {
  return callback(price, discountPercentage);
};

let price = 1200;
let discountPercentage = 20;

const discountedPrice = getDiscountedPrice(
  price,
  discountPercentage,
  calculateDiscountPrice
);
console.log(`Ціна після знижки ${discountedPrice}`);

// ==========================================5=================================================
