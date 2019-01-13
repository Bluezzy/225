function Circle(radius) {
	this.radius = radius;
	this.area = function() {
		return Math.pow(this.radius, 2) * Math.PI; 
	};
}

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27