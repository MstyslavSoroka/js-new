function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo();

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo();

// ======================================================1===============================================

function User({ name, age, followers }) {
  this.name = name;
  this.age = age;
  this.followers = followers;
}

User.prototype.getInfo = function () {
  console.log(
    `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
  );
};

const mango1 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mango1.getInfo(); // User Mango is 2 years old and has 20 followers

const poly1 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly1.getInfo(); // User Poly is 3 years old and has 17 followers

// ======================================================2===============================================

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); 

storage.addItem("Дроїд");
console.table(storage.items); 

storage.removeItem("Пролонгер");
console.table(storage.items); 

// ======================================================3===============================================

class StringBuilder {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    append(str) {
        this._value += str;
    }

    prepend(str) {
        this._value = str + this._value;
    }

    pad(str) {
        this._value = str + this._value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='


// ======================================================4===============================================

// ?

// ======================================================5===============================================
