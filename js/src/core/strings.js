reduceString = (str, amount) => {
  var count = 0;
  var result = '';
  for (var i = 0; i< str.length; i++) {
    if (str[i] === str[i+1]) {
      count ++;
      if (count < amount) {
        result += str[i];
      }
    } else {
      count = 0;
      result += str[i];
    }
  }
  return result;
};

reverseString = (str) => {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};
