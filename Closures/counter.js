function makeCounter() {
  var count = 0;       // declare a new variable
  return function() {
    count += 1;        // references count from the outer scope
    console.log(count);
  };
}

var counter = makeCounter();
counter();
counter();
counter();

console.log('problems');

// Problems
// 1.

function makeCounterLogger(start) {
  return function(finish) {
    var current = start;
    while (current !== finish) {
      console.log(current);
      if (current < finish) {
        current++;
      } else {
        current--;
      }
    }
    console.log(current);
  }
}


var countlog = makeCounterLogger(5);
countlog(8);
countlog(2);