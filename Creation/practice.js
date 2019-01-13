var a = 1;
var foo;
var obj;

function Foo() { // constructor function
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // new object is created and assigned to foo.
                 // this point to the new object. 
                 // function is executed : line 6 to 10, and this point to
                 // the new object, new properties of the object are created,
                 // and [new Object].bar on line 10 output 2.

                 // since there is no explicit return, this is returned :
                 // the new object with new properties is returned. 

foo.bar(); // therefore, foo.bar will output the 'a' property of the new object,
           // which is 2.
Foo(); // without explicit context, this points to the global or window object.
       // 2 is still the output though, but accessed from Window properties.

obj = {};
Foo.call(obj); // now that a context is provided, obj will get properties. 2 is the output.
obj.bar(); // 2 again.

console.log(this.a); // without context, this points to Window, and 
                     // window's property a already exists from calling Foo
                     // with Window context on line 22. 2 is again the output.     