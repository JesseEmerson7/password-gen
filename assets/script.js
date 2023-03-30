// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 

let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let numbers = [1,2,3,4,5,6,7,8,9,0];

let special = ['!','#','”','$','%','&','’','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','//',']','^','_','`','{','|','}','~'];


function generatePassword(){
  console.log('hey you clicked the button')
//1. prompt user for password criteria
//a. password length between 8-128
//b. prompt user if they want uppercase lowercase and special char
//2. validate the input.
//3. generate password
//4. display generated password on the page.
 let length = window.prompt('How long would you like your password length 8-128?');
console.log(length);



if (length >= 8 && length <= 128){
  console.log('next option');
} else { (window.alert('Must be 8-128 characters long.'));
  return;
};

let capitalSelect = window.confirm('Would you like capital letters?');
console.log(capitalSelect);

let lowerSelect = window.confirm('Would you like lowercase letters?');
console.log(lowerSelect);

let numberSelect = window.confirm('would you like numbers?');
console.log(numberSelect);

let specialSelect = window.confirm('would you like special characters?');
console.log(specialSelect);
var randomAll= []

if(capitalSelect){
  randomAll =randomAll.concat(upperCase)
};

if(lowerSelect){
  randomAll =randomAll.concat(lowerCase)
};

if (numberSelect){
  randomAll = randomAll.concat(numbers)
};

if(specialSelect){
  randomAll = randomAll.concat(special)
};


let newPass = randomAll.sort(())
// var index = Math.floor(Math.random() * );
//   var newPass = randomAll[index];



console.log(randomAll);
console.log(newPass);
  return "password return";
};