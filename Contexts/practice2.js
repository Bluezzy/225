// 7

// on line 12, the using method implicit context rules, we know that
// the context is the foo object. what lines 12 does however is to define
// an inner function increment, then executes that function without
// explicit context. which will bind this to the Global Object.
// since it doesn't have a as a property, this.a will return undefined.
// reassigning it to undefined + 1 will cause weird coercion that will
// result to NaN. however, the a as a property to foo will remained untouched.
// so, foo.a remains 0.

// 8 We must provide context to line 8 :

var foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1; // the context is provided below, so this still
                   // refers to foo
    }

    increment.call(this); // method inplicit context is foo
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

var bar = {
  a: 0,
  incrementA: function() {
    var increment = function() {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
};