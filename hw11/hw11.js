const bankAccount = {
  ownerName: "Mstyslav",
  accountNumber: "123456789",
  balance: 1000000,

  deposit(amount) {
    this.balance += amount;
    this.displayBalance();
  },

  withdraw(amount) {
    this.balance -= amount;
    this.displayBalance();
  },

  displayBalance: function () {
    console.log(`Залишок на рахунку: ${this.balance} грн.`);
  },
};

console.log(`Власник: ${bankAccount.ownerName}`);
console.log(`Номер рахунку: ${bankAccount.accountNumber}`);
bankAccount.displayBalance();

function deposit(amount) {
  bankAccount.deposit(amount);
}

function withdraw(amount) {
  bankAccount.withdraw(amount);
}

deposit(500);
withdraw(200);
withdraw(1500);

// =============================================================1=====================================================================

const weather = {
  temperature: null,

  isBelow0() {
    return this.temperature < 0;
  },

  checkTemperature: function () {
    if (this.isBelow0() === true) {
      console.log("Температура нижче 0 градусів Цельсія");
    } else {
      console.log("Температура вище 0 градусів Цельсія");
    }
  },
};

function inputTemperature(temp) {
  weather.temperature = temp;
  weather.checkTemperature();
}

let temperature1 = parseInt(prompt("Введіть температуру"));

inputTemperature(temperature1);

// =============================================================2=====================================================================

const user = {
  name: "",
  email: "",
  password: "",

  login(inputEmail, inputPassword) {
    if (this.email === inputEmail && this.password === inputPassword) {
      console.log("Успішно");
    } else {
      console.log("Неправильний пароль або email");
    }
  },
};

function setUserDetails(name, email, password) {
  user.name = name;
  user.email = email;
  user.password = password;
}

setUserDetails("Mstyslav", "mstyslav@example.com", "qwerty123");
user.login("mstyslav@example.com", "qwerty123");
user.login("wrong@example.com", "abcdefg123");

// =============================================================2=====================================================================

const movie = {
  title: "",
  director: "",
  year: 0,
  rating: 0,

  isHighRated: function () {
    return this.rating > 8;
  },

  displayRating: function () {
    if (this.isHighRated()) {
      console.log("Високий рейтинг (зелений)");
    } else {
      console.log("Рейтинг 8 або нижче");
    }
  },
};

function setMovieDetails(rating) {
  movie.rating = rating;
}

setMovieDetails(8.8);
movie.displayRating();

setMovieDetails(2);
movie.displayRating();
