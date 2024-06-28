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


const myArray = {

    increaseAge(numberToIncrease)  {

        return (myArray.age + numberToIncrease)
        
    }

    
};

myArray.name = "Mstyslav";
myArray.age = 13;
myArray.city = "Aberdeen";
myArray.occupation = "Student";




console.log(myArray);
