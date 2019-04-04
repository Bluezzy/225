function newPerson(name) {
	return Object.defineProperties({}, {
		log: {
			value: function() { console.log(name); },
			writable: false,
		}
	})
}

var me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley

