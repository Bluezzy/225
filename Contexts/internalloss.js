var obj = {
  a: 'hello',
  b: 'hi',
  foo: function(func) {
    func();
  },
};

var general = function() { 
  console.log(this.a + ' ' + this.b); 
}

var me = {
  a: 'Marc',
  b: 'Battesti',
};

var student = function() {
  console.log(this.a + ' ' + this.b);
}.bind(me);

var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar();
  },
};

obj.foo();        // undefined undefined