function objectsEqual(obj1, obj2) {
	var keys1 = Object.keys(obj1);
	var keys2 = Object.keys(obj2);
	var variation = false;

	keys1.forEach(function(currentKey) {
		if (obj1[currentKey] !== obj2[currentKey]) {
			variation = true;;
		}
	});

	keys2.forEach(function(currentKey) {
		if (obj2[currentKey] !== obj1[currentKey]) {
			variation = true;;
		}
	});

	return !variation;
}

var obj1 = {a: 'foo', b: 'bar'};
var obj2 = {a: 'foo'};