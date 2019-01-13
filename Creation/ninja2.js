var ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja(); // ninja.swung is 'true'

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); // up the prototype chain, there is the object pointed out by Ninja.prototype, 
                                 // before it was reassigned a new object.
                                 // the old object (from whose ninja inherited behaviors from), didn't have
                                 // a swingSword property.