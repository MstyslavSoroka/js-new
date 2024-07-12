const user = {
    name: "Mstyslav",
    age: 14,
    hobby: "games",
    premium: true,
  };

const {name, age, premium} = user
console.log(name, age)


// ================================================1====================================================

const exampleObj = {
    a: 1,
    b: 2,
    c: 3,
  };

  const {a, b, c} = exampleObj
  console.log(a, b, c)

// ================================================2====================================================

const employees = {
    ann: 29,
    david: 35,
    daniel: 1,
    vlad: 99,
  };

  const{ ann, david, vlad} = employees
  console.log(ann, vlad)

// ================================================3====================================================

const salaries = {
    john: 1000,
    jane: 1500,
    max: 900,
  };

const{jane, max} = salaries
console.log(max)

// ================================================4====================================================

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "dron", price: 400, quantity: 7 },
    { name: "laptop", price: 1200, quantity: 9 },
  ];

  for (i of products) {
    const { name, price, quantity } = i;
    console.log(name, price);
  }
// ================================================5====================================================

// завдання 7



// ================================================6====================================================
