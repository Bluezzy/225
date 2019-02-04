var Account = {
	init: function(email, password, firstName, lastName) {
		this.userEmail = email;
		this.userPassword = password;
		this.userFirstName = firstName;
		this.userLastName = lastName;
		this.displayName = randomSequence();
	}
}

function randomSequence() {
	var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	var sequence = '';
	var randomCharacter;
	var i;
	var randomIndex;
	for (i = 1; i <= 16; i++) {
		randomIndex = randomNumber(0, 36);
	  randomCharacter = characters[randomIndex];
	  sequence += randomCharacter;
	}
	return sequence;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function isValidPassword(password) {
	return !hasWrongCharacter(password) && 
	        password.length >= 8 && 
	        hasOneDigitOneUppercase(password);
}

function isDigit(character) {
	return '0123456789'.includes(character);
}

function isUppercase(character) {
	return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(character);
}

function hasOneDigitOneUppercase(str) {
	return str.split('').filter(isDigit).length >= 1 &&
	       str.split('').filter(isUppercase).length >= 1;
}

function hasWrongCharacter(str) {
	return /[^a-zA-Z0-9]/.test(str);
}
/*

var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

var displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
*/