containsNumber = (string) => {
  // var regex = /\d+/g;
  // var found = string.match(regex);
  // if (isNaN(found) == true) {
  //   return false;
  // } else {
  //   return true;
  // }
  return /\d/.test(string);
};

containsRepeatingLetter = (string) => {
  return (/([a-z])\1/i).test(string);
};

endsWithVowel = (string) => {
  return (/[aeiou]$/i).test(string);
};

captureThreeNumbers = (string) => {
  return (/\d{3}/).test(string);
};

matchesPattern = (string) => {
  // return ().test(string);
};

isUSD = (string) => {
  // return ().test(string);
};
