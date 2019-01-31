function delegate(context, methodName) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    return context[methodName].apply(context, args);
  };
}