var person = {
  firstName: 'Rick',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// this is outside a function, so it is bound to the global object.
// therefore, js tries to run undefined + undefined, which gives
// NaN.