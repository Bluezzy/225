//1. Without execution, we don't know what this refers to yet.

//2. line 4 is a function execution that doesn't provide a context.
//   this will refers to the Global Object.

//3. the last function execution is baz() and doesn't provide any context.
//   this will still refer to the Global Object

//4. we have a method invocation, which makes this refers to the
// object being called, obj.

// 5. we execute foo() without providing an explicit context, so this
// will refer to the global object. on line 2, we try to get the property
// a on the global object. on line 5,
// we make 'a' property of the global object. so this.a will be logged as 2.

// 6. as a method invocation, line 11 sets obj as the context.
// this.a will therefore log the value of a as a property of obj, which is 2.

// 7. line 12 is a method invocation with foo as a context. So on line 4. this.baz() refers to
//   foo.baz(), where this is foo. foo is logged.
//  on line 13, the method is extracted and saved in a variable named qux
//  by the way we execute line 14, we don't provide any context to the extracted method called
// with qux(); the context will be the window or global object. since baz doesn't exist in window,
// this.baz will throw an error on line 4. 