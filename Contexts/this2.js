/*  1
the context from last line is myChildObject since it's the owning object.
since it doesn't have a count property, it will return undefined.
*/

// 2
var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod.call(myObject);

/* 3
person.fullName method is extracted from myObjcet and, in a new funciton,
is bound to the person object then assigned to whoIsSpiderman variable.
Even without explicit context when we call that function on last line,
person is binded as a context, so this will have access to the person's
object properties that we call. the expected output is logged.
*/

// 4
var a = 1;
var obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  },
};

obj.func(); // obj as a a context, obj.a is logged; which i 2
obj.func.call(); // no context provided : implicit context is the window. window.a is 1
obj.func.call(this); // this is provided; any implicit context refers to window. 1 as above.
obj.func(obj); // context provided : it's obj. logging this.a then logs obj.a which is 2.

var obj2 = { a: 3 };
obj.func.call(obj2); // obj2 is now the context. obj2.a is logged, which is 3.

// 5

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    var specialDiscount = function() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(computer);

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());
