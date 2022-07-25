// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input




  //if upper preference is true then add this to password prefernce
  //
  

  // var getKey = [
  //   function upper() {
  //     return keys.upper[Math.floor(Math.random() * keys.upper.length)];
  //   },
  //   function lower() {
  //     return keys.lower[Math.floor(Math.random() * keys.lower.length)];
  //   },
  //   function number() {
  //     return keys.number[Math.floor(Math.random() * keys.number.length)];
  //   },
  //   function symbol() {
  //     return keys.special[Math.floor(Math.random() * keys.special.length)];
  //   }
  // ];
  // console.log(getKey);


// generatePassword();



//var a  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



var answer = ""
// // Add event listener to generate button
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

  //if answer is not a number then sent back message seend back a valid answer
  //return

  //if answer has < 8 then alert them and return
  //if answer over 128 then alert them and return 
});






//userpreference
//use confirm to add the messages requirements: upper, lower, no, special characters ... set as global var
//put upper in a string....apply to the rest. pspecial charaters 
//
//%/ use escape method
//make sure to store the user answer into a variable



// var characterAmount = document.getElementById ('chater')
// function myFunction() {
//   let text;
//   let characterAmount = prompt("How many characters would you like your password to contain?", "");
//   switch(favDrink) {
//     case "Coca-Cola":
//       text = "Excellent choice. Coca-Cola is good for your soul.";
//       break;
//     c0
//     default:
//       text = "I have never heard of that one..";
//   }
// generateBtn.addEventListener("click", writePassword);
