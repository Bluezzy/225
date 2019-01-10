/* 
1.
Higher-order functions either take a function as func as an argument or return one.


2.
filter is evocked with a func as an argument, which makes it a higher-order func.
checkEven doesn't have a func as argument and doesn't return a func.



3. */
var numbers = [1, 2, 3, 4];

function makeCheckEven() {
  return function(number) {
    return number % 2 === 0;
  }
}

var checkEven = makeCheckEven();
numbers.filter(checkEven); // [2, 4]




// 4.
function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // 'HEY THERE BUDDY'




// 5.
function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  };
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]