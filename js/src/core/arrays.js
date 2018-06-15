removeWithoutCopy = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i --;
      }
  }
  return arr;
};

append = (arr, item) => {
  arr[arr.length] = item;
  return arr;
};

truncate = (arr) => {
  arr.pop();
  return arr;
};

prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

curtail = (arr) => {
  arr.shift();
  return arr;
};

concat = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2);
  return arr3;
};

insert = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
};

count = (arr, item) => {
  let count = 0;
  for (let i = 0; i < (arr.length); i++) {
    if (arr[i] == item) {
      count += 1;
    }
  }
  return count;
};

duplicates = (arr) => {
  let results = [];
  for (a = 0; a < arr.length; a++) {
    if (!results.includes(arr[a])) {
      for (b = 0; b < arr.length; b++) {
        if (a != b && arr[a] == arr[b]) {
          results.push(arr[a]);
          break;
        }
      }
    }
  }


  // let results = [];
  // for (i = 0; i < arr.length; i++) {
  //   if (!results.includes(arr[i])) {
  //     for (ii = 0; ii < arr.length; ii++) {
  //       if (arr[i] == arr[ii]) {
  //         results.push(arr[ii]);
  //         break;
  //       }
  //     }
  //   }
  // }
  return results;
};

square = (arr) => {

  let result = [];
  for (i = 0; i < len; i++) {
    var square = Math.pow(arr[i], 2);
    result.push(square);
  }
  return result;
};

findAllOccurrences = (arr, item) => {

};
