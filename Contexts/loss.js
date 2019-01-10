var john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

var bar = john.greetings; // Strips context
bar();

function repeatThreeTimes(func) {
  func();     // can't do func.call(john) out of scope
  func();
  func();
}

function foo() {
  var john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings.bind(john)); // Strips context
}

foo();



