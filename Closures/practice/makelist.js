function makeList() {
  var items = [];

  return {
    add: function(item) {
      var index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + ' added!');
      }
    },

    clear: function() {
      items = [];
      console.log('all items deleted!');
    },

    list: function() {
      items.forEach(function(item) {
        console.log(item);
      });
    },

    remove: function(item) {
      var index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item + ' removed!');
      }
    }
  };
}