// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate a random integer given max and min criteria
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//create an array of numbers with length of generated random integer 
function getRandom(list) {
  return list[getRandomIntInclusive(0, list.length - 1)];
}

function generatePassword() {
  var passwordLength = prompt("Please choose a password length of at least 8 characters and no more than 128 characters");

  if (passwordLength >= 8 && passwordLength <= 128) {
    var lower = confirm("Should the password include lowercase?");
  } else {alert("Please choose a password length of at least 8 characters and no more than 128 characters!!") ;
    return;
  }

  //user selects options to include in generated password
  var upper = confirm("Should the password include uppercase?");
  var numeric = confirm("Should the password include numbers?");
  var special = confirm("Should the password include special characters?");

  //alerts user if at least one character type is not selected
  if (lower === false && upper === false && numeric === false && special === false) {
    alert("Please select at least one character type!!");
    return;
  }

  //create arrays for each options
  var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericOptions = ["0", "!", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialOptions = ["!", "@", "#", "$", "%", "^", "&", "*"];

  //container that holds all options that user picked
  var options = []

  //only selected options arrays will be pushed into options container
  if (lower === true) {
    options.push(lowerOptions);
  }
  if (upper === true) {
    options.push(upperOptions);
  }
  if (numeric === true) {
    options.push(numericOptions);
  }
  if (special === true) {
    options.push(specialOptions);
  }

  //empty string to hold randomized password given selected options
  var randomizedPassword = "";

  //iterate for every position of password length array 
  for (var i = 0; i < passwordLength; i++) {
    //randomize position of selected option arrays
    var randomList = getRandom(options);
    //randomize individual characters for each position of array
    var randomChar = getRandom(randomList);
    //randomized characters get added to empty string
    randomizedPassword += randomChar;
  }
  return randomizedPassword; 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
