var foo = createStudent('foo', '3rd');
foo.courses = [
  { name: 'Math', code: 101, grade: 95, },
  { name: 'Advanced Math', code: 102, grade: 90, },
  { name: 'Physics', code: 202, }
];

var bar = createStudent('bar', '1st');
bar.courses = [
  { name: 'Math', code: 101, grade: 91, }
];

var qux = createStudent('qux', '2nd');
qux.courses = [
  { name: 'Math', code: 101, grade: 93, },
  { name: 'Advanced Math', code: 102, grade: 90,},
]

var school = {
	students: [],
	validYears: ['1st', '2nd', '3rd', '4th', '5th'],

	addStudent: function(name, year) {
		var newStudent;
		if (this.validYears.includes(year)) {
		  newStudent = createStudent(name, year);
		  this.students.push(newStudent);
		} else {
			console.log('Invalid Year');
		}
	},

	enrollStudent: function(student, courseName, courseCode) {
		student.addCourse({name: courseName, code: courseCode});
	},

	addGrade: function(student, courseCode, grade) {
		student.courses.filter(function(course) {
			return course.code === courseCode;
		})[0].grade = grade;
	},

	getReportCard: function(student) {
		student.courses.forEach(function(course) {
			var grade = course.grade ? course.grade : 'In Progress';
			console.log(course.name + ': ' + grade);
		});
	},

	courseReport: function(courseName) {
		if (this.noStudentsGradedIn(courseName)) { 
			console.log(undefined);
			return;
	  }

		console.log('=' + courseName + ' Grades=');

		var self = this;
		var nbOfStudents = 0;
		var total = 0;
		var average;

		self.students.forEach(function(student) {
			var course = self.getCourse(student, courseName);
			if (course && course.grade) {
				nbOfStudents++;
				total += course.grade;
				console.log(student.name + ': ' + course.grade);
			}
		});

		average = total / nbOfStudents;


		console.log('---');
		console.log('Course Average: ' + average);
	},

	getCourse: function(student, courseName) {
		var validCourse = student.courses.filter(function(course) {
			return courseName === course.name && course.grade;
		})[0];
		return validCourse ? validCourse : undefined;
	},

	noStudentsGradedIn: function(courseName) {
		var self = this;
		return !self.students.some(function(student) {
			return self.getCourse(student, courseName);
		});
	},
}

school.getReportCard(foo);
school.students = [foo, bar, qux];
school.courseReport('Advanced Math');