// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generateABCUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var generateABCL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialC = ['~', ',', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', ']', '}']

// Write password to the #password input
function writePassword() {

  var password = '';
  var passwordText = document.querySelector("#password");
  

  var generatePassLength = window.prompt('How many characters?(8-128)');
  if (generatePassLength >= 8 && generatePassLength <= 128) {

    var checkforUppercase = window.confirm('Would you like to include Uppercase letters?');
    var checkforLowercase = window.confirm('would you like to add lowercase letter?');
    var checkforNum = window.confirm('Would you like to include numbers?');
    var checkSpec = window.confirm('Would you like to include special characters?');

    for (let i = 0; i < generatePassLength; i++) {

      if (checkforUppercase && password.length < generatePassLength) {
        var index = Math.floor(Math.random() * 26);
        password = password + generateABCUp[index];
      };


      if (checkforLowercase && password.length < generatePassLength) {
        var indexLow = Math.floor(Math.random() * 26);
        password = password + generateABCL[indexLow];
      };


      if (checkforNum && password.length < generatePassLength) {
        var indexNum = Math.floor(Math.random() * 10);
        password = password + numbers[indexNum];

      }


      if (checkSpec && password.length < generatePassLength) {
        var indexSpec = Math.floor(Math.random() * specialC.length);
        password = password + specialC[indexSpec];

      }
    }
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
