(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

(function(n) {
  for (i = n; i >= 0; i--) {
    console.log(i);
  }
  console.log('Done!')
})(7);

(function foo() {
  console.log('Bar');
})(); // IIFE create its own scope, foo is not visible outside.
