var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    var self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

var franchise2 = {
  name: 'How to Train Your Cat',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
}