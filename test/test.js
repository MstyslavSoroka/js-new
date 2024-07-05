// function average(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum / arr.length;
// }

// const numbers = [1, 32, 7, 3, 65];
// const avg = average(numbers);
// console.log(avg);

// function even(num) {
//     if (num % 2 === 0) {
//         return true
//     }

//     else {
//         return false
//     }
// }

// const number1 = 4;
// const number2 = 7;

// console.log(even(number1));
// console.log(even(number2));

// function findMax(arr) {

//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// const numbers = [1, 24, 37, 4, 32, 10, 62, 72, 811, 921];
// const maxNumber = findMax(numbers);
// console.log(maxNumber);

// function factorial(lastNum) {
//     let total = 1;
//     for (let i = 1; i <= lastNum; i++) {
//     total *= i;
//     };
//     return total;
//     };
//     console.log(factorial(5));

// const hello1 = () => "Hello JS";

// console.log(hello1());

// =============================================================

// const hello2 = () => {
//   let name = prompt("your name?");
//   return "hello, " + name;
// };
// console.log(hello2());

// const hotel = {

//     name: "coolhotel",
//     stars: 5,
//     price: 100,

// }

// console.log(hotel.stars)
// hotel.stars = 2;
// console.log(hotel.stars)

// const myArray = {

//     increaseAge(numberToIncrease)  {

//         return (myArray.age + numberToIncrease)

//     }

// };

// myArray.name = "Mstyslav";
// myArray.age = 13;
// myArray.city = "Aberdeen";
// myArray.occupation = "Student";

// console.log(myArray);

// const human = {
//   name: "mstyslav",
//   age: 14,
//   gender: "male",

//   display() {
//     console.log(`${this.name}  ${this.age}  ${this.gender}`);
//   },
// };

// human.display();

// const book = {
//   title: "Harry Potter",
//   author: "Jk Rowling",
//   year: 123,
//   genre: "fantasy",

//   newBook: function (newTitle, newAuthor, newYear, newGenre) {
//     newTitle = this.title = newTitle;
//     newAuthor = this.author = newAuthor;
//     newYear = this.year = newYear;
//     newGenre = this.genre = newGenre;
//   },
// };

// book.newBook("new title", "new author", 2222, "new genre");

// console.log(book);



const products = [
  pc = {
     name: "PC",
     price: 1000,
     category: "Electronics",
     stock: 5 
      },
  phone = { 
    name: "Phone",
    price: 500,
    category: "Electronics", 
    stock: 10 
    },
  skirt = {
    name: "Shirt",
    price: 50,
    category: "Clothing", 
    stock: 20 
    },
  jeans = {
    name: "Jeans", 
    price: 80,
    category: "Clothing", 
    stock: 15 
    },
  milk = { 
    name: "Milk", 
    price: 2,
    category: "food",
    stock: 100
     },
  bread = { 
    name: "Bread",
    price: 2,
    category: "food",
    stock: 50 
      }
];


function getTotalStockValueByCategory(products, category) {
let totalValue = 0;

for (let i in products) {
    let product = products[i];
    if (product.category === category) {
        totalValue += product.price * product.stock;
    }
}

return totalValue;
}


const electronicsValue = getTotalStockValueByCategory(products, "Electronics");
console.log(`Загальна вартість товарів в категорії Electronics: $${electronicsValue}`);

const clothingValue = getTotalStockValueByCategory(products, "Clothing");
console.log(`Загальна вартість товарів в категорії Clothing: $${clothingValue}`);

const foodValue = getTotalStockValueByCategory(products, "food");
console.log(`Загальна вартість товарів в категорії food: $${foodValue}`);

// ===========================================================================================


const person = {
  firstName: "Mstyslav",
  lastName: "Soroka",

  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  },

  printFullName() {
      console.log(`Повне ім'я: ${this.fullName}`);
  }
};

person.printFullName(); 

// ===========================================================================================


const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,

  TotalValue() {
      const totalValue = this.price * this.quantity;
      console.log(`Вартість всіх (${this.name}): $${totalValue}`);
  }
};


product.TotalValue(); 
