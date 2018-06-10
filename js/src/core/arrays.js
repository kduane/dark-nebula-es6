removeWithoutCopy = (arr, item) => {
  // let index = arr.indexOf(item);
  // if (index !== -1) {
  //   arr.splice(index, 1);
  // }

  for (let i = 0; i < (arr.length); i++) {
    if (arr[i] == item) {
      arr.splice(i, 1);
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
  let i;
  const len = arr.length;
  const result = [];
  const obj = {};
  for (i = 0; i < len; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    result.push(i);
  }
  return result;
};

square = (arr) => {

};

findAllOccurrences = (arr, item) => {

};
