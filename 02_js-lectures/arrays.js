function printReverse (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

//printReverse([1, 2 , 3])

function isUniform (arr) {
  const first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

console.log(isUniform([1, 2, 1, 1]));

function max (arr) {
  let max = arr[0];

  arr.forEach(function (elem) {
    if (elem > max) {
      max = elem;
    }
  });
  return max;
}

console.log(max([1, 20, 1, 4, -99]));
