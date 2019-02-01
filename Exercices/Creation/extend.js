function extend(object, mixin) {
  var methodNames = Object.getOwnPropertyNames(mixin);
  var i = 0;
  var methodName;
  for (i = 0; i < methodNames.length; i++) {
    methodName = methodNames[i];
    object[methodName] = delegate(object, mixin, methodName);
  }
  return object;
}

var professional = {
  invoice: function() {
    console.log(this.firstName + ' ' + this.lastName + ' is Billing customer');
  },
  payTax: function() {
    console.log(this.firstName + ' ' + this.lastName + ' Paying taxes');
  }
}