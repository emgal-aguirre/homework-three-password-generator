// Assignment Code
var generateBtn = document.querySelector("#generate");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create functions to respond to buttons 

function generatePassword() {
  let passwordLength = prompt("How many characters are in your password? Enter a number between 8-128");
  passwordLength = parseInt(passwordLength)
  if (passwordLength >= 8 && passwordLength <= 128) {
    const includeUpper = confirm("Should the password include uppcase letters?");
    const includeLower = confirm("Should the password include Lowercase letters?");
    const includeNumber = confirm("Should the password include numbers?");
    const includeSymbols = confirm("Should the password include special characterss?");
    if (includeUpper === true || includeLower === true || includeNumber === true || includeSymbols === true) {
      let temporaryPassword = "";
      for (var i = 1; i <= passwordLength; i++) {
        if (includeUpper) {
          temporaryPassword += getRandomUpper();
        }
        if (includeLower) {
          temporaryPassword += getRandomLower();
        }
        if (includeNumber) {
          temporaryPassword += getRandomNumber();
        }
        if (includeSymbols) {
          temporaryPassword += getRandomSymbol();
        }
      }
      return temporaryPassword.substr(0, passwordLength);
    } else {
      alert("Must include at least one requirment")
    }
  } else {
    alert("Password length needs to be more than 8 and less than 128");
  }
}

function getRandomUpper() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getRandomLower() {
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getRandomNumber() {
  return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}
