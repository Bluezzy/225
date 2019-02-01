function delegate(context, mixin, methodName) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    return mixin[methodName].apply(context, args);
  };
}