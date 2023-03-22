//connects to the button in html
var generateBtn = document.querySelector("#generate");

// When "Generate Password" button is clicked, the code runs.
generateBtn.addEventListener("click", writePassword);

//empty string as password is not generated yet from users selection
var choiceArr = "";

//Character options
function questionsRun() {
  var choiceArrLower= "abcdefghijklmnopqrstuvwxyz";
  var choiceArrUpper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var choiceArrNum= "0123456789";
  var choiceArrSym= "@!#$%^&*()<>/'.?+";

  //parseInt converting the typed number from a string to interger. 
  passLength = parseInt (prompt("How many characters do you want your password to be? (8-128 characters)"));

  //Parameters for password length. If in invalid number of characters is entered or letters/symbols alert will pop up.
  if(isNaN(passLength) || passLength <8 || passLength >128) {
    alert("Character length has to be a number between 8-128. Please try again!");
    return false;
  }

  //"OK" button selection adds element the password, "cancel" button indicates you do not want that element in your password
  var userChoice1 = confirm("Would you like lowercase letters in your password?");
  if (userChoice1) {
    choiceArr +=choiceArrLower;
  }
  var userChoice2 = confirm("Would you like uppercase letters in your password?");
  if (userChoice2) {
    choiceArr += choiceArrUpper;
  }
  var userChoice3 = confirm("Would you like numbers in your password?");
  if (userChoice3) {
    choiceArr +=choiceArrNum;
  }
  var userChoice4 = confirm("Would you like special characters in your password?");
  if (userChoice4) {
    choiceArr +=choiceArrSym;
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
 for(var i = 0; i < passLength; i++) { //loops through array options
  var randomChoice = Math.floor (Math.random()* choiceArr.length); //random selection from our choiceArr
  password= password + choiceArr[randomChoice]; //enmpty string becomes filled with the correct number of choiceArr items
 }
 return password; //password is created 
}
