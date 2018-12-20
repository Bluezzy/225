function createStudent(name, year) {
	return {
		name: name,
		year: year,
		courses: [],
		info: function() {
			console.log(this.name + ' is a ' + year + ' year student');
		},
		listCourses: function() {
			console.log(this.courses);
		},
		addCourse: function(course) {
			this.courses.push(course);
		},
		addNote: function(code, note) {
			this.courses.forEach(function(course) {
				if (course.code === code) {
					if(course.note) {
						course.note += ('; ' + note);
					} else {
						course.note = note;
					}
				}
			});
		},
		updateNote: function(code, note) {
			this.courses.forEach(function(course) {
				if (course.code === code) {
					course.note = note;
				}
			});
		},
		viewNotes: function() {
			this.courses.forEach(function(course) {
				if (course.note) {
					console.log(course.name + ': ' + course.note);
				}
			});
		}
	}
}

/*var foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({name: 'Math', code: 101});
foo.addCourse({name: 'Advanced Math', code: 102});
foo.listCourses();
foo.addNote(101, 'Fun Course');
foo.addNote(101, 'Remember to study for algebra');
foo.addNote(102, 'Difficult Subject');
foo.viewNotes();
foo.updateNote(102, 'Easy Subject');
foo.updateNote(101, 'All Done');
foo.viewNotes();*/