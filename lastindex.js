function lastIndexOf(array, i) {
  var lastValue = i;
  var length = array.length;
  for (var j = length; j >= 0; j--) {
    if (lastValue === array[j]) {
      return j;
    }
  }
  return -1;
}

console.log(lastIndexOf([3], 3));

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);