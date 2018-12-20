function subtract(a, b) {
  return a - b;
}

function makePartialFunc(func, n) {
  return function(n2) {
    return func(n2, n);
  }
}

function multiply(a, b) {
  return a * b;
}

var sub5 = makePartialFunc(subtract, 5);
sub5(20); // 15
var multiplyBy10 = makePartialFunc(multiply, 10);
multiplyBy10(2); // 20

var subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  }
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);