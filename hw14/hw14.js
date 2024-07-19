const users = [
  {
    name: "John Doe",
    eyeColor: "blue",
    gender: "male",
    isActive: true,
    email: "john.doe@gmail.com",
    age: 25,
  },
  {
    name: "Jane Smith",
    eyeColor: "green",
    gender: "female",
    isActive: false,
    email: "jane.smith@gmail.com",
    age: 30,
  },
  {
    name: "Sam Brown",
    eyeColor: "brown",
    gender: "male",
    isActive: true,
    email: "sam.brown@gmail.com",
    age: 20,
  },
];

// =====================================================================================================

const userNames = users.map((user) => user.name);

console.log(userNames);

// ================================================1=====================================================

const getEyeColor = (color) => users.filter((user) => user.eyeColor === color);

const blueEye = getEyeColor("blue");
console.log(blueEye);

// ================================================2=====================================================

const getUserGender = (gender) =>
  users.filter((user) => user.gender === gender).map((user) => user.name);
const maleUsers = getUserGender("male");
console.log(maleUsers);

// ================================================3=====================================================

const offlineUsers = users.filter((user) => !user.isActive);
console.log(offlineUsers);

// ================================================4=====================================================

const getUserEmail = (email) => users.find((user) => user.email === email);
const user = getUserEmail("john.doe@gmail.com");
console.log(user);

// ================================================5=====================================================

const getUsersAge = (min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);
const usersInRange = getUsersAge(20, 30);
console.log(usersInRange);

// ================================================6=====================================================
