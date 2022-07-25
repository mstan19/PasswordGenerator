// // Assignment Code

// // Add event listener to generate button
// This function has two tasks. One: take the input and figure out if it a number. Two: set a limit of the number of characters for the password
//if answer is not a number then sent back message seend back a valid answer
  //return
  //if answer has < 8 then alert them and return
  //if answer over 128 then alert them and return

var answer = ""
document.getElementById("generate").addEventListener("click", 
function() {
  answer = prompt("How many characters would you like your password to contain?");
  
  if(isNaN(answer)){
    alert(answer + " is not a number ");
  return;
  }
  
  if (answer < 8) {
    alert(answer + " ; password needs to have at least 8 characters");
  }
  if (answer > 128) {
    alert(answer + " ; password cannot have more than 128 characters");
    return;
  }

  requirementsForPassword(); 
});


//Goal: Create series of prompts that allow the user to select the type characters to inlcude in their password
// you need the variable names to be included in the parameters so when calling the generatePassword it will use those variables since they are not global variables
//make sure to store the user answer into a variable
function requirementsForPassword() {
  var requirementsForUpper = confirm("Click OK to confirm including upper characters.");
  
  var requirementsForLower = confirm("Click OK to confirm including lower characters.");
  
  var requirementsForSpecial = confirm("Click OK to confirm including special characters.");
  
  var requirementsForNumber = confirm("Click OK to confirm including numberical characters.");
  
  generatePassword (requirementsForUpper, requirementsForLower, requirementsForSpecial, requirementsForNumber);
}

// Write password to the #password input
// Goal: create variables for each type of charatcers and store all user preference and them them together
// make a new var that stoes all user preference and use it condition for each var if it is true and add them together 

function generatePassword (requirementsForUpper, requirementsForLower, requirementsForSpecial, requirementsForNumber) {
  const keys = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    special: "!@#$%^&*_-+=",
    number: "0123456789",
  }
  var passwordPreference = ""
  if (requirementsForUpper) {
    passwordPreference += keys.upper;
  }

  if (requirementsForLower) {
    passwordPreference += keys.lower;
  }

   if (requirementsForSpecial) {
    passwordPreference += keys.special;
  } 

  if (requirementsForNumber) {
    passwordPreference += keys.number;
  }
  modifiedPassword(passwordPreference);
}

//Goal: from the last function, it stored all the user preferences but now it needs to be match the number of characters that the user wanted in their passwords
//need a for loop that concat all passwordPreference
function modifiedPassword(passwordPreference) {
var desirePassword = ""
  for (var i = 0; i < answer; i++) {
    desirePassword += passwordPreference.charAt(Math.floor(Math.random() * (passwordPreference.length -1)));
  }

writePassword(desirePassword);
}

//Goal: Now that we have the passwords match the number of characters that the user wanted in their password. The next goal is to print the password to the #password.
function writePassword(desirePassword) {
  var password = desirePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Remember to call all functions and double check if the variable name that you want access is accessible (meaning global and local)