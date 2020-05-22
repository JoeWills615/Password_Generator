var fromPromt = promot ("Select a number 8 through 128")
var totalCharacters = parsenInt (fromPrompt);

console.log (totalCharacters);

var typesOfCharacters = {
  lowercase: "abcdefghijklomnopqrstuvwxyz",
  specialCharacters: "!@#$%^&*()-_+=<>?\[]{}|~`"
}

var useLowerCase = confirm("Would you like to use Lowercase letters in your password?")
var useUpperCase = confirm("Would you like to use Uppercase letters in your password?")
var useSymbols = confirm("Would you like to use Symbols in your password?")
var useNumbers = confirm("Would you like to use some Numbers in your password?")

console.log("L: ", useLowerCase);
console.log("U: ", useUpperCase);
console.log("S: ", useSymbols);
console.log("N: ", useNumbers);

var possibleCharacters = []

if (useLowerCase) {
  possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.split(""));
}
if (useUpperCase) {
  possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.toUpperCase().split(""));
}
if (useSymbols) {
  possibleCharacters = possibleCharacters.concat(typesOfCharacters.specialCharacters.split(""));
}
if (useNumbers) {
  for (var i = 0; i < 10; i++) {
    possibleCharacters.push(i);
  }
}

console.log(possibleCharacters);

var password = "";

for (var i = 0; 1 < totalCharacters; i++) {
  var position = Math.floor(Math.random() * possibleCharacters.length);
  password = password + possibleCharacters[position];
}

document.write(password);

console.log(password);