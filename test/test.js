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

// const products = [
//   pc = {
//      name: "PC",
//      price: 1000,
//      category: "Electronics",
//      stock: 5
//       },
//   phone = {
//     name: "Phone",
//     price: 500,
//     category: "Electronics",
//     stock: 10
//     },
//   skirt = {
//     name: "Shirt",
//     price: 50,
//     category: "Clothing",
//     stock: 20
//     },
//   jeans = {
//     name: "Jeans",
//     price: 80,
//     category: "Clothing",
//     stock: 15
//     },
//   milk = {
//     name: "Milk",
//     price: 2,
//     category: "food",
//     stock: 100
//      },
//   bread = {
//     name: "Bread",
//     price: 2,
//     category: "food",
//     stock: 50
//       }
// ];

// function getTotalStockValueByCategory(products, category) {
// let totalValue = 0;

// for (let i in products) {
//     let product = products[i];
//     if (product.category === category) {
//         totalValue += product.price * product.stock;
//     }
// }

// return totalValue;
// }

// const electronicsValue = getTotalStockValueByCategory(products, "Electronics");
// console.log(`Загальна вартість товарів в категорії Electronics: $${electronicsValue}`);

// const clothingValue = getTotalStockValueByCategory(products, "Clothing");
// console.log(`Загальна вартість товарів в категорії Clothing: $${clothingValue}`);

// const foodValue = getTotalStockValueByCategory(products, "food");
// console.log(`Загальна вартість товарів в категорії food: $${foodValue}`);

// ===========================================================================================

// const person = {
//   firstName: "Mstyslav",
//   lastName: "Soroka",

//   get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//   },

//   printFullName() {
//       console.log(`Повне ім'я: ${this.fullName}`);
//   }
// };

// person.printFullName();

// ===========================================================================================
// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//     }
//   }

// const {make, model, features, year} = car

// console.log(make, model, features, year
// )

// const movie = {
// title: 'The Shawshank Redemption',
// director: {
// name: 'Frank Darabont',
// nationality: 'American'
// },
// actors: ['Tim Robbins', 'Morgan Freeman'],
// release_year: 1994,
// ratings: {
// imdb: 9.3,
// rotten_tomatoes: 90
// }
// }

// const {title, director, ratings} = movie

// console.log(title, director, ratings)

// const student = {
//   name: "Bruce",
//   surname: "Lee",
//   grades: [4, 5, 3],
// };

// const { name, surname, grades } = student;

// console.log(grades);

// function getAverageGrade(num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i += 1) {
//     sum += num[i];
//   }
//   return sum / num.length;
// }

// console.log(`${name} ${surname} average grade =  ${getAverageGrade(grades)}`);

// const items = [
//     { name: 'Футболка', price: 250, quantity: 2 },
//     { name: 'Джинси', price: 800, quantity: 1 },
//     { name: 'Кросівки', price: 1200, quantity: 1 }
//     ];

// function totalPrice(arr) {
//     let total = 0
//     for(i of items) {
//         const {price, quantity} = i
//         total += price * quantity
//     }

//     return total
// }

// console.log(totalPrice(items))

// const person = {
//     name: 'John',
//     emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
//     };

//     function firstEmail(object) {
//     const {emails } = object;
//     const [firstEmail] = emails;
//     console.log(firstEmail);
//     }

//     firstEmail(person);

// const data = {
//   users: [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Bob", age: 30 },
//     { name: "Alice", age: 20 },
//   ],
// };

// function older(object) {
//   const arr = [];
//   const { users } = object;
//   for (i of users) {
//     const { name, age } = i;
//     if (age >= 18) {
//       console.log(age);
//     }
//   }
// }

// console.log(older(data))

// const nums = [1, 2, 3, 4, 5, 6];
// const newNums = nums.map((num) => num * 2);
// console.log(newNums);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//   ];

//   const isOnline = players.filter(player => player.online);
//   console.log('Online', isOnline);

//   const isOffline = players.filter(player => !player.online);
//   console.log('Offline', isOffline);

// const numbersArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function newNums(nums) {
//   return nums.filter(num => num % 2 === 0);
// }

// console.log(newNums(numbersArr));

// const peoples = [
//   { name: 'John', age: 32, occupation: 'programmer' },
//   { name: 'Jane', age: 26, occupation: 'teacher' },
//   { name: 'Mike', age: 42, occupation: 'engineer' },
//   { name: 'Emily', age: 17, occupation: 'designer' }
//   ];

//   const older = peoples.filter(people => people.age > 18)
//   peopleNames = older.map(item => item.name);
//   console.log(peopleNames)

// function connect(array1, array2) {
//   let combinedArray = []
//   for (indexOf(combinedArray[i]) === -1) {
//     combinedArray.push(array1[i])
//   }

// }

// const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
// const array2 = [5, 12, 3, 14, 4, 5, 6, 6, 7];

// console.log(connect(array1, array2))

// const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
// const array2 = [5, 12, 3, 14, 4, 5, 6, 6, 7];

// function combine(array1, array2) {
//   const combinedArray = array1.concat(array2);

//   const newArr = [];

//   for (let i = 0; i < combinedArray.length; i++) {
//     if (newArr.indexOf(combinedArray[i]) === -1) {
//       newArr.push(combinedArray[i]);
//     }
//   }

//   return newArr;
// }

// console.log(combine(array1, array2));

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//   ];

// const timeSum = players.reduce((totalTime, player) => totalTime + player.timePlayed, 0);

// console.log(timeSum)

// const pointSum = players.reduce((totalPoints, player)=> totalPoints + player.points, 0)
// console.log(pointSum)

// const avgTime = timeSum / players.length
// console.log(avgTime)
// const avgPoints = pointSum / players.length
// console.log(avgPoints)

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs '] },
//   { id: '001', likes: 2, tags: ['html', 'css '] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs '] },
//   { id: '003', likes: 8, tags: ['css', 'react '] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react '] },
//   ];

//   const getTags = tweets.reduce((tags, tweet)=> tags + tweet.tags, "")
// console.log(getTags)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]

// const result = nums.filter(x => x % 2 === 0 ).map(y => y * 2).reverse()
// console.log(result)

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const sortByTime = (a, b) => a.timePlayed - b.timePlayed;

console.log(players.sort(sortByTime));

const sortByPoints = (a, b) => a.points - b.points;

console.log(players.sort(sortByPoints));

const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
console.log(totalQuantity);

const arr = [
  { name: "John", age: 32 },
  { name: "Jane", age: 26 },
  { name: "Mike", age: 42 },
  { name: "Emily", age: 29 },
];

const newArr = arr.map((item) => item.name);

console.log(newArr.sort());
