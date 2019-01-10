function makeCar(rate) {
  return {
    speed: 0,
    rate: rate,
    accelerate: function() {
      this.speed += this.rate;
    },
  }; 
}

var sedan = makeCar(8);
sedan.accelerate();
sedan.speed; // => 8

var coupe = makeCar(12);
coupe.accelerate();
coupe.speed; // => 12

var hatchback = makeCar(9);

function makeCountry(name, continent, visited) {
  if (visited === undefined) { visited = false; }
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.' +
      (this.visited ? ' I have' : ' I haven\'t') + ' visited ' + this.name + '.';
    },
    visitCountry: function() {
      return this.visited = true;
    }
  };
}

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."