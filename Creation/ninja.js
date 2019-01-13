var ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja(); // new object is created, this points to the new object.
                     // function Ninja is executed, so the new object is added the property swung.
                     // no explicit returning object : the new object is returned and stored in 'ninja'.

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword()); // ninja, with the property swung of value 2, is the context provided 
                                 // for this in line 11. swingSword is accessible as a property of ninja's
                                 // prototype object, set by the constructor's prototype property on line 10.