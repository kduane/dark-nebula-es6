globals = () => {
  var myObject = {
    name : 'Jory'
  };

  return myObject;
};

identity = (val1, val2) => {
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};
