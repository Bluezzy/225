function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  }
}

// Own investigation with bind
function logProperty(property) {
  return function() {
    console.log(this[property]);
  };
}

var student1 = {
  name: 'Marc',
  grade: 85,
};

var student2 = {
  name: 'Bob',
  grade: 55,
}

var logName = logProperty('name');
logName.call(student2); // 'Bob'

var logStudent1 = logName.bind(student1);
logStudent1(); // 'Marc'

student1.name = 'Joe';
logStudent1(); // 'Joe'



