const user = {
  name: "Mstyslav",
  age: 14,
  hobby: "games",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}

// =============================================================1=======================================================

function count(obj) {
  return Object.keys(obj).length;
}

const exampleObj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(count(exampleObj));

// =============================================================2=======================================================

function findBest(employees) {
  let bestEmployee;
  let maxTasks = 0;

  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }

  return bestEmployee;
}

const employees = {
  ann: 29,
  david: 35,
  daniel: 1,
  vlad: 99,
};
console.log(findBest(employees));

// =============================================================3=======================================================

function countTotal(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

const salaries = {
  john: 1000,
  jane: 1500,
  max: 900,
};
console.log(countTotal(salaries));

// =============================================================4=======================================================

function getPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
}

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "dron", price: 400, quantity: 7 },
  { name: "laptop", price: 1200, quantity: 9 },
];
console.log(getPropValues(products, "name"));

// =============================================================5=======================================================

function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break;
    }
  }

  return totalPrice;
}

const productsList = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "dron", price: 400, quantity: 7 },
  { name: "laptop", price: 1200, quantity: 9 },
];
console.log(calculateTotalPrice(productsList, "Radar"));
console.log(calculateTotalPrice(productsList, "dron"));

// =============================================================6=======================================================
