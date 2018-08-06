function range(start, end, step) {
  if (start > end || start === undefined || end === undefined || step < 0) {
    var array = [];
    return array;
  }
  var stepIntervals = [];
  for (var i = start; i <= end; i += step) {
    stepIntervals.push(i);
  }
  return stepIntervals;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, -2));
console.log(range(-5, 2, 3));
console.log(range(5));