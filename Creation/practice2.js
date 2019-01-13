var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

var rect1 = new Rectangle(2, 3); //1. an object is created, this point to new object, assigned with new properties
                                 //   when function is executed. on line 13, RECTANGLE.area() is assigned to the area
                                 // property of the new object.
                                 // since this still points to the new object, we get [newObject].width * [newObject.height],
                                 // which is 2 * 3, => 6.
                                 // same for perimeter : this time we get 2 * (2 + 3) which is 10.
                                 // so far, nothing is output : but rect1 is assigned the new object with those properties.


console.log(rect1.area); // therefore, we now that rect1.area will return 6, and rect1. perimeter will return 10.
console.log(rect1.perimeter);