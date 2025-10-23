Node.js -- run java script everywhere 

* it is javascript runtime environment built on chrome's v8 javascript engine and nodejs allow to run javascript outside the web browser

* it has an event-driven architecture capable of asynchrounous I/O (Non blocking I/O).

* Where ever there is javascript there is js engine .

* V8 can be embedded into any c++ application .

####
javascript  ->  V8 engine(c++ ) -> machine code .

Node.js is a c++ application with v8 embedded into it.

[Node.js  = v8 engine + super powers like(api on server , file operation , network calls)] -> js runtime .

<!-- ---------------------------- -->
* JAVASCRIPT -> V8 (C++) -> MACHINE CODE  -> ASSEMBLY CODE - > BINARY CODE 
   high level language                        low level language 

<!-- ------------------- -->

NODE REPL =>  Read , Evaluate , Print , Loop

<!-- ================ -->

* COMMON JS MODULE (CJS)-> (REQUIRE AND EXPORTS) by default in nodejs -> older way , synchronous , runs in strict non mode 

* ES MODULE (MJS) ->  (IMPORT AND EXPORT ) by default in react and angular -> newer way -> asynchronous , runs in strict mode 

<!-- ========= -->
require('./path')
* all the code of the module wrapped inside a  function(IIFE)
* IIFE  -> immediately invoked function expression
* Privacy -> keeps variables and functions safe .
```
(function (module, require){

})()
```
* node js passes modules as one of the parameter 
# require("./path")
1. resolve the module -> (./localPath, json, node:util)
2. loading the module -> file content is loaded acc. to the file type 
3. wraps inside IIFE
4. Evaluation -> (module.exports)\
5. caching


<!-- ================EVENT DRIVEN ARCHITECTURE AND ASYNCHRONOUS IO -->

* Javascript is synchronous and single threaded language .

* super powers of node.js is (************LIBUV*********) .
* libuv made asynchronous io  task  very simple .
* libuv written in c language which is low level language and best for interacting with os, api calls, db calls and timers;
* Node js is non blocking io using v8 engine

// setTimeout has some terms and conditions 
* it is only pushed to call stack in v8 engine  once the call stack is empty ..