// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var YesPrompts = questionsRun();
  var passwordText = document.querySelector("#password");
  if(YesPrompts) {
    var makePassword = generatePassword();
    passwordText.value = makePassword;    
  }
}

function questionsRun() {
  choiceArr = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '/', ',', '.', '?', '+'];

  
  passLength = parseInt (prompt("How many characters do you want your password to be? (8-128 characters)"));

  if(isNaN(passLength) || passLength <8 || passLength >128) {
    alert("Character length has to be a number between 8-128. Please try again!");
    return false;
  }

  
  var userChoice = confirm("Would you like lowercase letters in your password?");
  if (!userChoice) {
    return;
  }
  var userChoice = confirm("Would you like uppercase letters in your password?");
  if (!userChoice) {
    return;
  }
  var userChoice = confirm("Would you like numbers in your password?");
  if (!userChoice) {
    return;
  }
  var userChoice = confirm("Would you like special characters in your password?");
  if (!userChoice) {
    return;
  }
  return true;
}


function generatePassword(){
  var password = ""; 
  for(var i = 0; i < passLength; i++) { 
   var randomChoice = Math.floor (Math.random()* choiceArr.length); 
   password= password + choiceArr[randomChoice]; 
  }
  return password;
}