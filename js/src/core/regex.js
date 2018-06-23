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
  let regex = /(\d{3})/;
  let found = string.match(regex);
  if (found != null) {
    return found[0];
  } else {
    return false;
  }
};

matchesPattern = (string) => {
  var regex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
  return regex.test(string);
};

isUSD = (string) => {
  // return (/^\$?(([1-9]\d{0,50}(,\d{3})*)|0)?\.?\d{2}?$/).test(string);
  return (/^\$\d+(,\d{3})*(\.[0-9]{2})?$/).test(string);
  // return (/^\$?(([1-9]\d{0,50}(,\d{3})*)|0)?\.?[0-9]?[0-9]?$/).test(string);

};
