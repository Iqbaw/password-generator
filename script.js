const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const passwordField = document.getElementById("password");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let chars = "";
  
  if (uppercaseInput.checked) chars += uppercaseChars;
  if (lowercaseInput.checked) chars += lowercaseChars;
  if (numbersInput.checked) chars += numberChars;
  if (symbolsInput.checked) chars += symbolChars;
  
  if (chars === "") {
    alert("Pilih minimal satu opsi karakter!");
    return;
  }
  
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  
  passwordField.value = password;
}

generateButton.addEventListener("click", generatePassword);
