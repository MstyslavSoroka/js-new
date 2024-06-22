const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(list)

list[1] = "changed value"

console.log(list)

// =========================================1===========================================================

const rows = ["row1", "row2", "row3"]

console.log(rows)

list[list.length]= "row4"

console.log(rows)

// =========================================2===========================================================

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);  

// =========================================3===========================================================

const numbers1 = [1, 2, 4, 12, 41]

for (let i = 0; i < numbers1.length; i++) {
    console.log (numbers1[i])
}

// =========================================4===========================================================

const strings = ["abcdefg", "hello!", "qwerty", "hello world", "string"]

for (let i = 0; i < strings.length; i++) {
    console.log (strings[i])
}

// =========================================5===========================================================

const biggestNum = [34,123,65,132,76,34,12,3,99,1234]

let max = biggestNum[0];  

for (let i = 0; i < biggestNum.length; i++) {
  if (biggestNum[i] > max) {
    max = biggestNum[i];
  }
}

console.log("Максимальне значення в лісті: " + max);


// =========================================6===========================================================


const numbers2 = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];


for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) {
    console.log(numbers2[i]);
  }
  else {
    continue;
  }
}


