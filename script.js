/* pseudo code - 
1. 1st prompt  - length of the password
take input  and store in the variable
Check the input and validate with the requirements(should be between 8 - 128 chracters) and prompt them again to get the right input.
var charTypes = []

2. confirm for lowwercase - store in variable
3. confirm for uppercase - store in variable
4. confirm for numeric - store in variable
5. confrim for special characters - store in variable
*/

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let passLength = 8;
let charTypes = [];
// Function to prompt user for password options
function getPasswordOptions() {
  alert("Enter options for password");
  while (passLength < 8 || passLength > 128) {
    passLength = prompt(
      "Passwords can only be between 8 to 128 characters in length"
    );
  }
  alert("Enter the types of characters to use");
  while (charTypes.length < 1) {
    if (confirm("You want to add uppercase letter"))
      charTypes.push(upperCasedCharacters);
    if (confirm("You want to add lowercase letter"))
      charTypes.push(lowerCasedCharacters);
    if (confirm("You want to add special character"))
      charTypes.push(specialCharacters);
    if (confirm("You want to add any numbers"))
      charTypes.push(numericCharacters);
  }
}

function randomNum(high) {
  return Math.floor(Math.random() * high);
}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[randomNum(arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  let generatePassword = [];
  while (passLength > 0) {
    let charaters = charTypes[randomNum(charTypes.length)];
    generatePassword.push(getRandom(charaters));
    passLength--;
  }
  return generatePassword.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passLength = 0;
  charTypes = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
