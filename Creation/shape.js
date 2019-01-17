var shape = {
	getType: function() {
		return this.type;
	},
}

var Triangle = function(a, b, c) {
	this.type = 'triangle';
	this.a = a;
	this.b = b;
	this.c = c;
};

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
	return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle;

var t = new Triangle(3, 4, 5);