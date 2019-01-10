// 1, 2, 3

var turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  var returnVal = func.call(context);
  console.log(returnVal);
}

turk.getDescription();

var getTurkDescription = turk.getDescription.bind(turk);

logReturnVal(turk.getDescription, turk);

getTurkDescription();

// 4

// No, forEach executes its function passed as an argument in a context of a global object.
// the global object will be called when using the keyword this, a,d
// since global object doesn't have property seriesTitle, it will output 'undefined [title]'

// 5

// Since we want our TESgames object as a context, we can save this in a variable when
// this actually refers to the object.
// On line 11, we use implicit method context, which means that on line 5 BEFORE forEach
// gets called, this refers to what we want : the object being called on line 11, TESgames.
// we save this context, saving this to a variable named self. when we call self on line 6,
// the saved context will be called : TESgames object. we can then acess its properties.

/*var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    var self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  }
};
*/


// 6
var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
};

TESgames.listGames();


/*
function askWho(func) {
  var name = func();
  return 'Who is ' + name + '?';
}

var jack = {
  firstName: 'Jack',
  lastName: 'Monroe',
  name: function() {
    return this.firstName + ' ' + this.lastName;
  },
  secondName: function() {
    return getName.call(this);
  },
}

function getName() {
  return this.firstName + ' ' + this.lastName;
}
*/

// 2