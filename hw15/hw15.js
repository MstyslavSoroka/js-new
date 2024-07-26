const users = [
  {
    name: "Mstyslav",
    surname: "Soroka",
    balance: 1000,

    friends: [
      { name: "Ivan" },
      { name: "Max" },
      { name: "John" },
      { name: "User3" },
    ],

    skills: ["Python", "JavaScript"]
  },

  {
    name: "User2",
    surname: "2",
    balance: 12,

    friends: [{ name: "Mstyslav" }, { name: "Ivan" }],

    skills: ["Ruby", "Java"]
  },

  {
    name: "User3",
    surname: "3",
    balance: 999,

    friends: [{ name: "User2" }, { name: "Ivan" }, { name: "John" }],

    skills: ["c++", "JavaScript"]
  },
];

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
console.log(totalBalance);

// ===============================================1=================================================

// ?

// ===============================================2=================================================


const sortByFriends = users.slice().sort((a, b) => b.friends.length - a.friends.length).map((user) => user.name);
console.log(sortByFriends);

// ===============================================3=================================================

const skills = [...new Set(users.flatMap(user => user.skills))].sort();
console.log(skills);

// ===============================================4=================================================
