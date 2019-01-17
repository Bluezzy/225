function createObject(obj) {
	var newobj = {};
	newobj.__proto__ = obj;
	return newobj;
}

/*var foo = {
  a: 1
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);
*/

Object.prototype.begetObject = function() {
	function F() {}
	F.prototype = this;
	return new F();
}


var foo = {
  a: 1,
};

var bar = foo.begetObject();
foo.isPrototypeOf(bar); 