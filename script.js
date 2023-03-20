var generateBtn = document.querySelector("#generate");

// When "Generate Password" button is clicked, the code runs.
generateBtn.addEventListener("click", writePassword);

//Character options, length slection and prompts "OK"-ing the use of lowercase letters, uppercase letters, numbers and symbols.
function questionsRun() {
  choiceArr = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '/', ',', '.', '?', '+'];

  //parseInt converting the typed number from a string to interger. 
  passLength = parseInt (prompt("How many characters do you want your password to be? (8-128 characters)"));

  //Parameters for password length. If in invalid number of characters is entered or letters/symbols alert will pop up.
  if(isNaN(passLength) || passLength <8 || passLength >128) {
    alert("Character length has to be a number between 8-128. Please try again!");
    return false;
  }

  //"OK" button selection leads to next question, "cancel" button selection closes prompt windows
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

//if the user selected OK to all of the prompts this becomes TRUE-only then will a password generate
function writePassword() {
  var YesPrompts = questionsRun();
  var passwordText = document.querySelector("#password");
  if(YesPrompts) {
    var makePassword = generatePassword();
    passwordText.value = makePassword;    
  }
}


function generatePassword(){
 var password = ""; //empty string as nothing is generated yet
 for(var i = 0; i < passLength; i++) { //dictates length of password 
  var randomChoice = Math.floor (Math.random()* choiceArr.length); //random selection from our choiceArr
  password= password + choiceArr[randomChoice]; //enmpty string becomes filled with the correct number of choiceArr items
 }
 return password; //password is created 
}
