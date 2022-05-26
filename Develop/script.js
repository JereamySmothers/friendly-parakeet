// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generateABCUp = ['A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z']
var generateABCL = ['a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z']
var numbers = ['1, 2, 3, 4, 5, 6, 7, 8, 9, 0']
var specialC = ['~!@#$%^&*()-_=+[{]}\|;:,<.>/?] ']

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (generateBtn) {
    Math.random(generateABCL)
    window.prompt('How many characters would you like? (8-128)');
    var generatePassLength = window.prompt;
    if(generatePassLength > 8 || < 128){

      window.confirm('Would you like to include Uppercase letters?');
      if(window.confirm){
        Math.random(generateABCUp);

        for(var generateABCUp=0; generateABCUp< generateABCUp.length; generateABCUp++){
          console.log
        }
      }

      window.confirm('Would you like to include numbers?')
      if(window.confirm){
        Math.random(numbers);

        for(var numbers=0; numbers< numbers.length; numbers++){
          console.log
        }
      }

      window.confirm('Would you like to include special characters?')
      if(window.confirm){
        Math.random(specialC);

        for(var specialC=0; specialC< specialC.length; numbers++){
          console.log
        }
      }

      Math.add(console.log = generatePassLength);
    }
  }

  passwordText.value = password;
  return writePassword;
}

generate.writePassword
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
