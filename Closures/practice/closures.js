function makeMultipleLister(n) {
  var starter = n;
  return function() {
    var current = starter;
    while(current < 100) {
      console.log(current);
      current += n;
    }
  }
}

var lister = makeMultipleLister(14);

var total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}

function later(func) {
  var args = Array.prototype.slice.call(arguments);
  args = args.slice(1);
  return function() {
    return func.apply(this, args);
  };
}

function doubled(n) {
  return n * 2;
}

function transform(func, n) {
  return func(n);
}

function ownMap(array, func) {
  arrayCopy = array.slice();
  arrayCopy.forEach(function(n, i) {
    arrayCopy[i] = transform(func, n);
  });
  return arrayCopy;
}

arr = [1, 2];
var doubles = later(ownMap, arr, doubled);

function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

var ready = startup();
var systemStatus = // ?




