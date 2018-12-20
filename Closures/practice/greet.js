function greet(greeting, name) {
  return greeting + ', ' + name;
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

var sayHello = partial(greet, 'Hello');
var sayHi = partial(greet, 'Hi');