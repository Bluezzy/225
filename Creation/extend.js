function extend(destination) {
  var objects = Array.prototype.slice.call(arguments).slice(1);
  var prop;
  objects.forEach(function(obj) {
    for (prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        destination[prop] = obj[prop];
      }
    }
  });

  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // 1
object.sayHello();                // "Hello, Joe"