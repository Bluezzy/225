function matchingProperties(obj, properties) {
	var props = Object.keys(properties);
	return props.every(function(prop) {
		return obj[prop] === properties[prop];
	});
};

var _ = function(element) {
	var u = {

		last: function() {
			return element[element.length - 1];
		},

		first: function() {
			return element[0];
		},

		without: function() {
			var values = Array.prototype.slice.call(arguments);
			return element.filter(function(el) {
				return !values.includes(el);
			});
		},

		lastIndexOf: function(value) {
			for (i = element.length - 1; i >= 0; i--) {
				if (element[i] === value) {
					return i;
				}
			}
			return -1;
		},

		sample: function(quantity) {
			var sampled = [];
			var copy = element.slice();
			var get = function() {
				var idx = Math.floor(Math.random() * copy.length);
				var el = copy[idx];
				copy.splice(idx, 1);
				return el;
			};
			if (!quantity) { return get(); }
			while(quantity) {
				sampled.push(get());
				quantity--;
			}

			return sampled;
		},

		findWhere: function(properties) {
			var match;

			element.some(function(obj) {
				var all_match = true;

				for (var prop in properties) {
					if (!(prop in obj) || obj[prop] !== properties[prop] ) {
						all_match = false;
					}
				}

				if (all_match) {
					match = obj;
					return true;
				}
			});

			return match;
		},

		where: function(properties) {
			return element.filter(function(obj) {
				return matchingProperties(obj, properties);
			})
		},

		pluck: function(key) {
			var result = [];
			var i;
			for (i = 0; i < element.length; i ++) {
				if (element[i][key]) {
				  result.push(element[i][key]);
			  }
			}
			return result;
		},

		keys: function() {
			var keys = [];
			for (prop in element) {
				keys.push(prop);
			}
			return keys;
		},

		values: function() {
			var values = [];
			for (prop in element) {
				values.push(element[prop]);
			}
			return values;
		},
	};

	return u;
};

_.range = function(start, stop) {
	if (stop === undefined) {
		stop = start;
		start = 0;
	};
	var i;
	var result = [];
	for (i = start; i < stop; i++) {
		result.push(i);
	};
	return result;
};

_.extend = function() {
	var objects = Array.prototype.slice.call(arguments);
	if (objects.length === 1) { return objects[0]; }

	var last = objects[objects.length - 1];
	var beforeLast = objects[objects.length - 2];
	for (prop in last) {
		beforeLast[prop] = last[prop];
	}

	objects.pop();
	return _.extend.apply(objects, objects);
};

obj = {
};

obj1 = {
	z: 10,
	y: 12,
}

obj2 = {
	d: 4,
	e: 5,
	f: 6,
};

properties = {
	a: 1,
	b: 2,
	c: 3,
	d: 5,
};
