var generatePasswordBtn = document.getElementById("generate");

function generatePassword() {
  var userChoiceLength = parseInt(prompt("Enter the length of your desired password between 8 - 128 characters"))

  if (isNaN(userChoiceLength)) {
    alert("You must enter a number between 8 and 128.");
    return generatePassword();
  }

  if (userChoiceLength < 8 || userChoiceLength > 128) {
    alert("The length must be between 8 and 128.");
    return generatePassword();
  }

  var specialChars = "~!@#$%^&*_+=".split("");
  var lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numericChars = "1234567890".split("");

  var passwordArr = []; 

  var userChoiceSpecial = confirm("Including special characters?");
  var userChoiceUpper = confirm("Including uppercase characters?");
  var userChoiceLower = confirm("Including lowercase characters?");
  var userChoiceNumberic = confirm("Including any numbers?");

  if (userChoiceSpecial === false && userChoiceUpper === false && userChoiceLower === false && userChoiceNumberic === false) {
      alert("You must choose at least one character set.");
      return generatePassword();
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
  }

  if(userChoiceLower) {
    copyArrayPool(lowerChars);
  }

  if (userChoiceNumberic) {
    userCharPool = userCharPool.concat(numericChars);
  };

  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor( Math.random() * userCharPool.length );
    passwordArr.push(userCharPool[index]);
  }

  var passwordString = passwordArr.join("");

  console.log(passwordString);

  return passwordString;
};

function writePassword () {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password");
  passwordTextEl.value = password;
}

generatePasswordBtn.addEventListener("click", writePassword);