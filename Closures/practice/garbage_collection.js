/*
1. 
memory management is handled by JS automatically.

2.
'A string' connection with function variable scope is broken
right after line 12 is executed. so it's eligible for GC.


3.
no, outerFoo is declared on the global scope, so outerFoo's 0 might
still be needed when bar is executed, as we're back to global scope.
outerFoo's 0 is a copy of innerFoo's 0, the latter is indeed eligible for GC.

4.No. evenCounter is assigned to return value of makeEvenCounter(),
which returns a function. this function has a closure over the lexical scope
of makeEvenCounter's implementation, which 0 is part of.

5. yes, after the script finishes running
