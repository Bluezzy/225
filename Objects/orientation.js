function makeProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice: function(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        alert('Invalid price');
      }
    },
    describeProduct: function() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    }
  };
}

var scissors = makeProduct(0, 'Scissors', 8, 10);
var drill = makeProduct(1, 'Cordless Drill', 15, 45);
var pen = makeProduct(2, 'Blue Pen', 100, 2);
var knife = makeProduct(3, 'Knife', 50, 4);
var battery = makeProduct(4, 'Camescope battery', 10, 40);

battery.describeProduct();
knife.describeProduct();
knife.setPrice(10);
knife.describeProduct();