function shallowCopy(object) {
  var copy = Object.create(Object.getPrototypeOf(object));
  var properties = Object.keys(object);
  properties.forEach(function(prop) {
    copy[prop] = object[prop];
  });
  return copy;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

var baz = shallowCopy(bar);
console.log(baz.a);       // 1
baz.say();                // "c is 3"
baz.hasOwnProperty('a');  //false
baz.hasOwnProperty('b');  //false