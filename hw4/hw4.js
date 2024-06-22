function checkFields() {
  let field1 = document.getElementById("field1").value;
  let field2 = document.getElementById("field2").value;

  if (field1 && field2) {
    alert("Обидва поля заповнені");
  } else {
    alert("Не всі поля заповнені");
  }
}
// ====================================================1===========================================
function checkSum() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (num1 + num2 > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
}
// ====================================================2===========================================
function checkText() {
  let text = document.getElementById("text").value;

  if (text.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
}
// ====================================================3===========================================
function checkRange() {
  let number = parseInt(document.getElementById("number").value);

  if (number > 10 && number < 20) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
}
// ====================================================4===========================================
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (
    name.length >= 3 &&
    email.includes("@") &&
    email.includes(".") &&
    password.length >= 6
  ) {
    window.location.href = "secondPage.html";
  } else {
    alert("Помилка! Перевірте правильність введених даних.");
  }
}
// ====================================================5===========================================
