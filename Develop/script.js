// DATA 
var generatePasswordBtn = document.getElementById("generate");

function generatePassword() {
  var userChoiceLength = parseInt(prompt("Enter the length of your desired password between 8 - 128 characters"))

  if (isNaN(userChoiceLength)) {
    alert("You must enter a number between 8 and 128.")
  }

//array for special, lower, upper, numeric characters
  var specialChars = "~!@#$%^&*_+=".split("");
  var lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numericChars = "1234567890".split("");

  var passwordArr = []; 

// User choices of length, special chars, upper, lower, number
  var userChoiceSpecial = confirm("Including special characters?");
  var userChoiceUpper = confirm("Including uppercase characters?");
  var userChoiceLower = confirm("Including lowercase characters?");
  var userChoiceNumberic = confirm("Including any numbers?");

    if (userChoiceLength < 8 || userChoiceLength > 128 ) {
      alert("The length must be between 8 and 128.")
    }

  if (userChoiceSpecial === false && userChoiceUpper === false &&
    userChoiceLower === false && userChoiceNumberic === false) {
      alert("You must choose at least one character set.")
    }

  var userCharPool = []; 

  function copyArrayPool(arr) {
    for (var i = 0; i < arr.length; i++) {
      userCharPool.push(arr[i]);
    };
  }

  if (userChoiceSpecial) {
    copyArrayPool(specialChars);
  }

  if (userChoiceUpper) {
    userCharPool = userCharPool.concat(upperChars)
    console.log(userCharPool);
  }

  if(userChoiceLower) {
    copyArrayPool(lowerChars);
  }

  if (userChoiceNumberic) {
    userCharPool = userCharPool.concat(numericChars);
    console.log(userCharPool);
  };

  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor( Math.random() * userCharPool.length );
    console.log(userCharPool[index]);
    passwordArr.push(userCharPool[index]);
  }
  console.log(passwordArr);

// TODO: create a guarenteed array to store 1 random character from each of user chosen character set.
// then replace the first password array elements with these gaurenteed characters

// meaning: pool created -> random number selects -> random number doesnt guarenntee all sets lie upper lower and number will be chosen
// empty guarenntee array - push 1 index to select all 4 



// TODO: convert password array to a string, then return that string to the caller, writePassword
  console.log(passwordArr.join(""));

// make generate passsword function
  for (let i = 0; i < length; i++) {
   myPassword += selectedSet[Math.floor(Math.random() * selectedSet.length)];
  }
};

//MAIN PROCESS
function writePassword () {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password");
  passwordTextEl.value = password;
}

generatePasswordBtn.addEventListener("click", writePassword);
