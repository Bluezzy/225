var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

var ninjaB = new ninjaA.constructor;

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true